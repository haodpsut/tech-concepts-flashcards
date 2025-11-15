import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { CONCEPT_CATEGORIES } from './constants';
import { getConceptExplanation } from './services/geminiService';
import { Explanation } from './types';
import Flashcard from './components/Flashcard';
import Navigation from './components/Navigation';
import CategoryTabs from './components/CategoryTabs';
import ApiKeyInput from './components/ApiKeyInput';

const App: React.FC = () => {
  const [apiKey, setApiKey] = useState<string | null>(() => localStorage.getItem('gemini_api_key'));
  const [selectedCategory, setSelectedCategory] = useState<string>(CONCEPT_CATEGORIES[0].title);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [explanations, setExplanations] = useState<Record<string, Explanation>>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  const explanationsRef = useRef(explanations);
  explanationsRef.current = explanations;

  const activeConcepts = useMemo(() => {
    return CONCEPT_CATEGORIES.find(cat => cat.title === selectedCategory)?.concepts || [];
  }, [selectedCategory]);

  const currentConcept = useMemo(() => {
    return activeConcepts[currentIndex];
  }, [activeConcepts, currentIndex]);

  const handleSetKey = (key: string) => {
    localStorage.setItem('gemini_api_key', key);
    setApiKey(key);
    setError(null); // Clear previous errors
  };

  const handleClearKey = () => {
    localStorage.removeItem('gemini_api_key');
    setApiKey(null);
    setExplanations({});
    setCurrentIndex(0);
    setSelectedCategory(CONCEPT_CATEGORIES[0].title);
  };

  useEffect(() => {
    if (!apiKey || !currentConcept) return;

    const fetchCurrentAndPrefetchOthers = async () => {
      // 1. Handle the currently visible card
      if (!explanationsRef.current[currentConcept.name]) {
        setIsLoading(true);
        setError(null);
        try {
          const explanation = await getConceptExplanation(currentConcept.name, apiKey);
          setExplanations(prev => ({ ...prev, [currentConcept.name]: explanation }));
        } catch (err: any) {
          setError(err.message || 'An unknown error occurred.');
           if (err.message.includes('API Key is not valid')) {
            handleClearKey();
          }
        } finally {
          setIsLoading(false);
        }
      } else {
         setIsLoading(false);
         setError(null);
      }

      // 2. Prefetch others in the background
      activeConcepts.forEach(concept => {
        if (!explanationsRef.current[concept.name]) {
          getConceptExplanation(concept.name, apiKey)
            .then(explanation => {
              setExplanations(prev => ({ ...prev, [concept.name]: explanation }));
            })
            .catch(err => {
              console.error(`Failed to prefetch '${concept.name}':`, err);
            });
        }
      });
    };

    fetchCurrentAndPrefetchOthers();
  }, [currentConcept, activeConcepts, apiKey]);

  const handleSelectCategory = useCallback((categoryTitle: string) => {
    setSelectedCategory(categoryTitle);
    setCurrentIndex(0);
  }, []);

  const handleNext = useCallback(() => {
    if (currentIndex < activeConcepts.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex, activeConcepts.length]);

  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  }, [currentIndex]);
  
  if (!apiKey) {
    return <ApiKeyInput onKeySubmit={handleSetKey} initialError={error} />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans flex flex-col items-center p-4 md:p-8">
      <header className="w-full max-w-3xl text-center mb-8">
        <div className="flex justify-between items-center">
            <div className="flex-1"></div>
            <div className="flex-1 text-center">
                <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
                Daily Tech Concepts
                </h1>
                <p className="text-gray-400 mt-2 text-lg">Your daily dose of knowledge, powered by Gemini.</p>
            </div>
            <div className="flex-1 flex justify-end">
                <button 
                onClick={handleClearKey}
                className="bg-gray-700 hover:bg-red-700 text-white text-xs font-bold py-2 px-3 rounded-lg transition-colors duration-200"
                >
                Change Key
                </button>
            </div>
        </div>
      </header>
      
      <main className="w-full flex flex-col items-center">
        <CategoryTabs 
          categories={CONCEPT_CATEGORIES}
          selectedCategory={selectedCategory}
          onSelectCategory={handleSelectCategory}
        />
        {currentConcept ? (
          <>
            <Flashcard 
              conceptName={currentConcept.name}
              explanation={explanations[currentConcept.name] || null}
              isLoading={isLoading}
              error={error}
            />
            <Navigation
              onPrevious={handlePrevious}
              onNext={handleNext}
              isPreviousDisabled={currentIndex === 0}
              isNextDisabled={currentIndex >= activeConcepts.length - 1}
              currentIndex={currentIndex}
              total={activeConcepts.length}
            />
          </>
        ) : (
          <p>Select a category to begin.</p>
        )}
      </main>
    </div>
  );
};

export default App;
