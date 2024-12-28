'use client'

import { Category, CategoryData } from '@/types'

interface CategorySelectorProps {
  onSelect: (category: Category) => void;
  selectedCategory?: Category | null;
}

export const categories: Record<Category, CategoryData> = {
  'Wholesaling': {
    type: 'Wholesaling',
    title: 'Wholesaling Scripts',
    description: 'Scripts for wholesaling property acquisitions'
  },
  'Creative Finance': {
    type: 'Creative Finance',
    title: 'Creative Finance Scripts',
    description: 'Scripts for creative financing solutions'
  },
  'Agent Outreach': {
    type: 'Agent Outreach',
    title: 'Agent Outreach Scripts',
    description: 'Scripts for building agent relationships'
  },
  'Foreclosure': {
    type: 'Foreclosure',
    title: 'Foreclosure Scripts',
    description: 'Scripts for pre-foreclosure situations'
  }
};

const CategorySelector: React.FC<CategorySelectorProps> = ({ onSelect, selectedCategory }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {Object.values(categories).map((category) => (
        <button
          key={category.type}
          onClick={() => onSelect(category.type)}
          className={`p-4 rounded-lg border ${
            selectedCategory === category.type
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 hover:border-blue-300'
          }`}
        >
          <h3 className="text-lg font-semibold">{category.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{category.description}</p>
        </button>
      ))}
    </div>
  );
};

export default CategorySelector;
