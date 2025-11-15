
import React from 'react';
import { Explanation } from '../types';
import LoadingSpinner from './LoadingSpinner';
import ErrorDisplay from './ErrorDisplay';

interface FlashcardProps {
  conceptName: string;
  explanation: Explanation | null;
  isLoading: boolean;
  error: string | null;
}

const LanguageSection: React.FC<{ title: string; content: string; flag: string; }> = ({ title, content, flag }) => (
    <div className="mt-4">
        <h3 className="text-xl font-semibold text-sky-300 flex items-center">
            <span className="mr-2 text-2xl">{flag}</span>
            {title}
        </h3>
        <p className="text-gray-300 mt-2 text-base md:text-lg">{content}</p>
    </div>
);


const Flashcard: React.FC<FlashcardProps> = ({ conceptName, explanation, isLoading, error }) => {
  return (
    <div className="w-full max-w-3xl mx-auto bg-gray-800 shadow-2xl rounded-2xl p-6 md:p-10 border border-gray-700 transition-all duration-300 min-h-[28rem] flex flex-col justify-between">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-6 break-words">
          {conceptName}
        </h2>
        <div className="h-px bg-gray-600 mb-6"></div>
        
        <div className="min-h-[16rem] flex flex-col justify-center">
            {isLoading && <LoadingSpinner />}
            {error && <ErrorDisplay message={error} />}
            {!isLoading && !error && explanation && (
            <>
                <LanguageSection title="English Explanation" content={explanation.englishExplanation} flag="🇬🇧" />
                <hr className="my-6 border-gray-600" />
                <LanguageSection title="Giải thích Tiếng Việt" content={explanation.vietnameseExplanation} flag="🇻🇳" />
            </>
            )}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
