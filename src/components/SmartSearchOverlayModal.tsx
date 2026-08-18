import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Tag, ArrowRight, Star } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS_DATA } from '../data/products';

interface SmartSearchOverlayModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
  onSelectCategory: (category: string) => void;
}

export const SmartSearchOverlayModal: React.FC<SmartSearchOverlayModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onSelectCategory,
}) => {
  const [query, setQuery] = useState('');
  const [selectedChip, setSelectedChip] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
      setSelectedChip(null);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const queryLower = query.toLowerCase().trim();

  // Global search across all products when query is present
  const globalQueryMatches = PRODUCTS_DATA.filter((p) =>
    p.title.toLowerCase().includes(queryLower) ||
    p.description.toLowerCase().includes(queryLower) ||
    p.category.toLowerCase().includes(queryLower)
  );

  // If chip selected and no query, filter by chip
  const categorySpecificMatches = selectedChip && queryLower
    ? globalQueryMatches.filter(p => p.category === selectedChip)
    : [];

  const hasResultsInOtherCategories = queryLower && selectedChip && categorySpecificMatches.length === 0 && globalQueryMatches.length > 0;

  const filteredProducts = queryLower
    ? (selectedChip && categorySpecificMatches.length > 0 ? categorySpecificMatches : globalQueryMatches)
    : (selectedChip ? PRODUCTS_DATA.filter(p => p.category === selectedChip) : PRODUCTS_DATA);

  const chips = ['Video Bundles', 'Online Courses', 'E-Books', 'Premium Apps', 'AI Prompts', 'PHP Scripts', 'Blogger Templates'];

  return (
    <div className="fixed inset-0 z-[99999] flex flex-col bg-[#0B1120] min-h-screen h-full animate-in fade-in duration-200 overflow-y-auto">
      
      {/* Top Header Bar */}
      <div className="max-w-4xl w-full mx-auto p-4 sm:p-6 flex items-center justify-between border-b border-slate-800/80">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <Search className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-heading font-extrabold text-white text-base sm:text-lg">Smart Search &amp; Discovery</h2>
            <p className="text-xs text-slate-400">Instant access to 1,000+ verified digital products</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 transition cursor-pointer"
          aria-label="Close search"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Search Body */}
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 py-6 space-y-5 flex-1">
        
        {/* Large Centered Input with Emerald Neon Glow */}
        <div className="relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-emerald-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for video bundles, courses, software, PHP scripts..."
            className="w-full bg-slate-900/90 text-white placeholder-slate-400 text-base sm:text-lg pl-12 pr-20 py-4 rounded-2xl border border-emerald-500/80 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.25)] transition-all"
          />
          <div className="absolute right-3 top-3 bottom-3 flex items-center gap-1.5">
            {query && (
              <button
                onClick={() => setQuery('')}
                className="px-3 py-1.5 text-xs text-slate-400 hover:text-white rounded-lg bg-slate-800 transition cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Chips (Filtering) directly underneath Search Input */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400 font-semibold px-1">
            <span>Filter by Category</span>
            {selectedChip && (
              <button onClick={() => setSelectedChip(null)} className="text-emerald-400 hover:underline cursor-pointer">
                Reset filter
              </button>
            )}
          </div>
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {chips.map((chip) => {
              const isSelected = selectedChip === chip;
              return (
                <button
                  key={chip}
                  onClick={() => setSelectedChip(isSelected ? null : chip)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/30 ring-2 ring-emerald-400/50'
                      : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <Tag className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{chip}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Search Results Grid immediately below category chips */}
        <div className="space-y-3 pt-2">
          {hasResultsInOtherCategories && (
            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs sm:text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-in fade-in shadow-sm">
              <span>No results in <b>{selectedChip}</b>. Found {globalQueryMatches.length} matching products across other categories!</span>
              <button
                onClick={() => setSelectedChip(null)}
                className="px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold shrink-0 transition cursor-pointer"
              >
                Search in All Categories?
              </button>
            </div>
          )}

          <div className="flex items-center justify-between text-xs text-slate-400 px-1">
            <span>Matching Assets ({filteredProducts.length})</span>
            <span>Instant bKash / Nagad Checkout</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-12">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
                className="group p-3.5 rounded-2xl bg-slate-900 hover:bg-slate-850 border border-slate-800 hover:border-emerald-500/50 transition-all duration-200 cursor-pointer flex items-center gap-3.5 shadow-sm hover:shadow-lg"
              >
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-950 shrink-0 relative">
                  <img src={product.thumbnail} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" referrerPolicy="no-referrer" />
                  <div className="absolute bottom-1 right-1 px-1 py-0.5 rounded bg-emerald-500/90 text-slate-950 text-[9px] font-black">
                    ৳{product.priceBDT}
                  </div>
                </div>

                <div className="flex-1 min-w-0 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 truncate">
                      {product.category}
                    </span>
                    <span className="text-[10px] text-amber-400 font-bold flex items-center gap-0.5">
                      <Star className="w-3 h-3 fill-current" /> {product.rating}
                    </span>
                  </div>
                  <h4 className="font-heading font-bold text-sm text-white group-hover:text-emerald-300 transition-colors truncate">
                    {product.title}
                  </h4>
                  <p className="text-xs text-slate-400 truncate">{product.description}</p>
                </div>

                <div className="shrink-0 text-slate-500 group-hover:text-emerald-400 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}

            {filteredProducts.length === 0 && (
              <div className="col-span-full py-12 text-center space-y-3 bg-slate-900/50 rounded-2xl border border-slate-800">
                <p className="text-slate-400 text-sm">No digital assets found matching &ldquo;{query}&rdquo;</p>
                <button
                  onClick={() => {
                    setQuery('');
                    setSelectedChip(null);
                  }}
                  className="px-4 py-2 rounded-xl bg-emerald-500 text-white text-xs font-bold cursor-pointer"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};
