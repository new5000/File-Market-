import React, { useState, useEffect } from 'react';
import { Product, Currency } from '../types';
import { ProductCard } from './ProductCard';
import { Sparkles, ChevronDown, Loader2, CheckCircle2 } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  currency: Currency;
  selectedCategory: string;
  searchQuery: string;
  onInstantBuy: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

const INITIAL_VISIBLE_COUNT = 30;
const INCREMENT_COUNT = 30;

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  currency,
  selectedCategory,
  searchQuery,
  onInstantBuy,
  onViewDetails,
}) => {
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_VISIBLE_COUNT);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);

  // Reset to 30 products whenever category or search filter changes
  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  }, [selectedCategory, searchQuery]);

  const displayedProducts = products.slice(0, visibleCount);
  const hasMore = visibleCount < products.length;
  const remainingCount = Math.max(0, products.length - visibleCount);

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + INCREMENT_COUNT);
      setIsLoadingMore(false);
    }, 280);
  };

  return (
    <div className="space-y-6">
      
      {/* Section Header with Category */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="font-heading text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-500" />
            <span>
              {searchQuery
                ? `Search results for "${searchQuery}"`
                : selectedCategory === 'All Products'
                ? 'Featured Digital Marketplace Assets'
                : selectedCategory}
            </span>
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Verified instant downloads with bKash, Nagad &amp; Binance Pay instant unlock.
          </p>
        </div>
      </div>

      {/* Grid of Products - 6 items per row on desktop (30 displayed initially) */}
      {displayedProducts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              currency={currency}
              onInstantBuy={onInstantBuy}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      ) : (
        <div className="p-12 text-center rounded-2xl bg-white dark:bg-slate-900/60 border border-dashed border-slate-300 dark:border-slate-800 space-y-3">
          <div className="text-4xl">🔍</div>
          <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
            No products found matching your search
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
            Try searching for a different keyword or browse through our categories.
          </p>
        </div>
      )}

      {/* Sleek Enterprise Load More / Explore All Section */}
      {products.length > 0 && (
        <div className="pt-8 pb-4 flex flex-col items-center justify-center">
          {hasMore ? (
            <div className="w-full max-w-[300px] flex flex-col items-center">
              <button
                type="button"
                onClick={handleLoadMore}
                disabled={isLoadingMore}
                className="w-full px-6 py-3 rounded-2xl font-heading font-bold text-sm bg-slate-800/80 hover:bg-slate-800 backdrop-blur-md border border-emerald-500/30 hover:border-emerald-400 text-white shadow-lg shadow-emerald-500/10 hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-75 group"
              >
                {isLoadingMore ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-emerald-400" />
                    <span>Loading Assets...</span>
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4 text-emerald-400 group-hover:translate-y-0.5 transition-transform duration-300" />
                    <span>Explore All Products</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold border border-emerald-500/30">
                      +{remainingCount} More
                    </span>
                  </>
                )}
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60 text-xs text-slate-600 dark:text-slate-300 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>All <strong>{products.length}</strong> products are currently displayed</span>
            </div>
          )}
        </div>
      )}

    </div>
  );
};
