
import React from 'react';
import { Category } from '../types';

interface CategoryTabsProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (categoryTitle: string) => void;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
      {categories.map((category) => (
        <button
          key={category.title}
          onClick={() => onSelectCategory(category.title)}
          className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ${
            selectedCategory === category.title
              ? 'bg-sky-500 text-white shadow-lg'
              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
          }`}
        >
          {category.title}
        </button>
      ))}
    </div>
  );
};

export default CategoryTabs;
