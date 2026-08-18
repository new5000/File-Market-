import React, { useRef } from 'react';
import { CATEGORIES } from '../data/products';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  productsCounts?: Record<string, number>;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'All Products':
        return '🔥';
      case 'Video Bundles':
        return '🎬';
      case 'Online Courses':
        return '🎓';
      case 'E-Books':
        return '📚';
      case 'Premium Apps':
        return '📱';
      case 'Premium PC Software':
        return '💻';
      case 'AI Prompts':
        return '🤖';
      case 'PHP Scripts':
        return '⚡';
      case 'Blogger Templates':
        return '💎';
      default:
        return '📦';
    }
  };

  return (
    <section id="categories-section" className="relative w-full z-10 py-1 transition-colors">
      <div className="w-full">
        {/* Horizontal Scrollable Category Pills */}
        <div
          ref={scrollRef}
          className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 text-xs font-bold scroll-smooth w-full"
        >
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;

            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-4 py-2 rounded-full shrink-0 flex items-center gap-2 transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/25 scale-[1.02] ring-2 ring-emerald-400/40'
                    : 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700/60 hover:scale-[1.01]'
                }`}
              >
                <span className="text-sm">{getCategoryIcon(cat)}</span>
                <span>{cat}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
