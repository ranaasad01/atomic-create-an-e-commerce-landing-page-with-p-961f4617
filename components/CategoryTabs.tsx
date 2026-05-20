"use client";

import { CATEGORIES } from "@/lib/mock-data";

interface CategoryTabsProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
      {CATEGORIES.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={
              isActive
                ? "flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold bg-violet-600 text-white shadow-md shadow-violet-200 transition-all duration-200"
                : "flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold bg-white text-slate-600 border border-slate-200 hover:border-violet-300 hover:text-violet-600 transition-all duration-200"
            }
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
