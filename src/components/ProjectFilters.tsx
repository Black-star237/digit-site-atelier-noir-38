
import React from 'react';

interface Category {
  id: string;
  label: string;
}

interface ProjectFiltersProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
            selectedCategory === category.id
              ? 'bg-gradient-to-r from-red-500 to-purple-600 text-white shadow-lg shadow-red-500/30'
              : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700/30'
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilters;
