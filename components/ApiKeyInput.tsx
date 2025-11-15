import React, { useState, useEffect } from 'react';
import ErrorDisplay from './ErrorDisplay';

interface ApiKeyInputProps {
  onKeySubmit: (key: string) => void;
  initialError?: string | null;
}

const ApiKeyInput: React.FC<ApiKeyInputProps> = ({ onKeySubmit, initialError }) => {
  const [apiKey, setApiKey] = useState('');
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
      if (initialError) {
          setError(initialError);
      }
  }, [initialError]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!apiKey.trim()) {
      setError('API Key cannot be empty.');
      return;
    }
    setError(null);
    onKeySubmit(apiKey.trim());
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700">
        <h1 className="text-3xl font-bold text-center text-white mb-2">
          Enter Your API Key
        </h1>
        <p className="text-gray-400 text-center mb-6">
          Please provide your Google Gemini API key to continue.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="apiKey" className="sr-only">
              Gemini API Key
            </label>
            <input
              id="apiKey"
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Enter your Gemini API Key here"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
              aria-label="Gemini API Key Input"
            />
          </div>
          {error && <div className="mb-4"><ErrorDisplay message={error}/></div>}
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all duration-200"
          >
            Save & Start Learning
          </button>
        </form>
         <p className="text-xs text-gray-500 mt-4 text-center">
            Your API key is stored only in your browser's local storage and is never sent to our servers.
        </p>
      </div>
    </div>
  );
};

export default ApiKeyInput;
