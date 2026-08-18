import React from 'react';
import { Star, Download, Eye, ShieldCheck, HardDrive } from 'lucide-react';
import { Product, Currency } from '../types';

interface ProductCardProps {
  product: Product;
  currency: Currency;
  onInstantBuy: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  currency,
  onInstantBuy,
  onViewDetails,
}) => {
  return (
    <article className="group relative flex flex-col rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/80 dark:border-slate-800/90 overflow-hidden shadow-xs hover:shadow-2xl hover:shadow-emerald-500/10 dark:hover:shadow-emerald-500/15 hover:border-emerald-500/40 dark:hover:border-emerald-500/50 hover:-translate-y-1.5 transition-all duration-300 ease-out will-change-transform">
      
      {/* Thumbnail Header */}
      <div 
        className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950 cursor-pointer" 
        onClick={() => onViewDetails(product)}
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
          className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-108 transition-transform duration-700 ease-out will-change-transform"
        />

        {/* Subtle Ambient Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-black/20 opacity-40 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
        
        {/* Category Pill Badge */}
        <div className="absolute top-2 left-2 z-10 pointer-events-none">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-heading font-bold bg-slate-950/80 text-emerald-400 border border-emerald-500/30 backdrop-blur-md shadow-sm truncate max-w-[90px] tracking-wide">
            {product.category}
          </span>
        </div>

        {/* Feature / Deal Badge */}
        {product.badge && (
          <div className="absolute top-2 right-2 z-10 pointer-events-none">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-rose-500/90 text-white text-[8.5px] font-heading font-extrabold uppercase tracking-wider shadow-md shadow-rose-950/30 backdrop-blur-sm">
              {product.badge}
            </span>
          </div>
        )}

        {/* Floating Quick View Overlay Button */}
        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center pointer-events-none">
          <span className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 px-3 py-1.5 rounded-full bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-white font-heading font-bold text-xs flex items-center gap-1.5 shadow-xl border border-white/20">
            <Eye className="w-3.5 h-3.5 text-emerald-500" />
            <span>Quick Preview</span>
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between gap-3">
        
        <div className="space-y-2">
          {/* Rating & Size Meta Row */}
          <div className="flex items-center justify-between text-xs">
            <div className="inline-flex items-center gap-1 text-amber-500 dark:text-amber-400 font-bold bg-amber-500/10 dark:bg-amber-400/10 px-1.5 py-0.5 rounded-md border border-amber-500/20 text-[10.5px]">
              <Star className="w-3 h-3 fill-current" />
              <span>{product.rating.toFixed(1)}</span>
            </div>
            
            <div className="inline-flex items-center gap-1 text-[10.5px] text-slate-500 dark:text-slate-400 font-mono font-medium truncate max-w-[85px]">
              <HardDrive className="w-3 h-3 text-slate-400 shrink-0" />
              <span>{product.fileSize}</span>
            </div>
          </div>

          {/* Title with Smooth Color Hover */}
          <h3
            onClick={() => onViewDetails(product)}
            className="font-heading font-bold text-xs sm:text-[13.5px] text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors duration-200 line-clamp-2 leading-snug cursor-pointer min-h-[2.35rem]"
            title={product.title}
          >
            {product.title}
          </h3>

          {/* Description snippet */}
          <p className="text-[11.5px] text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed font-normal">
            {product.description}
          </p>

          {/* Verified License / Guarantee tag */}
          <div className="flex items-center gap-1.5 pt-0.5 text-[10.5px] text-slate-500 dark:text-slate-400 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span className="truncate">{product.license}</span>
          </div>
        </div>

        {/* Card Footer: Price & Instant Actions */}
        <div className="pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
          <div className="min-w-0">
            <div className="text-[9px] text-slate-400 dark:text-slate-500 font-bold uppercase tracking-wider truncate">
              Instant Drive
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-heading text-sm sm:text-base font-black text-emerald-600 dark:text-emerald-400 tracking-tight">
                {currency === 'USD' ? `$${product.priceUSD.toFixed(2)}` : `৳${product.priceBDT}`}
              </span>
              {product.originalPriceBDT && (
                <span className="text-[10.5px] text-slate-400 line-through font-medium">
                  {currency === 'USD' ? `$${(product.priceUSD * 2.5).toFixed(0)}` : `৳${product.originalPriceBDT}`}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={() => onViewDetails(product)}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-200/60 dark:border-slate-700/60 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-2xs"
              title="View Specs & Details"
              type="button"
            >
              <Eye className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => onInstantBuy(product)}
              className="px-3 py-1.5 rounded-xl text-xs font-heading font-extrabold bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-sm shadow-emerald-500/25 hover:shadow-md hover:shadow-emerald-500/40 hover:scale-[1.03] active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
              type="button"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Buy</span>
            </button>
          </div>
        </div>

      </div>

    </article>
  );
};
