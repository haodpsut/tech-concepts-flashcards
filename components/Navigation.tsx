
import React from 'react';

interface NavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  isPreviousDisabled: boolean;
  isNextDisabled: boolean;
  currentIndex: number;
  total: number;
}

const NavButton: React.FC<{ onClick: () => void; disabled: boolean; children: React.ReactNode }> = ({ onClick, disabled, children }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 disabled:bg-gray-500 disabled:cursor-not-allowed transition-all duration-200"
    >
        {children}
    </button>
);


const Navigation: React.FC<NavigationProps> = ({ onPrevious, onNext, isPreviousDisabled, isNextDisabled, currentIndex, total }) => {
  return (
    <div className="flex items-center justify-between w-full max-w-3xl mx-auto mt-8">
      <NavButton onClick={onPrevious} disabled={isPreviousDisabled}>
        Previous
      </NavButton>
      <div className="text-gray-300 font-medium text-lg">
        {currentIndex + 1} / {total}
      </div>
      <NavButton onClick={onNext} disabled={isNextDisabled}>
        Next
      </NavButton>
    </div>
  );
};

export default Navigation;
