import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Zap, Star, ShieldCheck, Sparkles, Flame, Eye } from 'lucide-react';
import { Product, Currency } from '../types';
import { PRODUCTS_DATA } from '../data/products';

interface HeroSliderProps {
  currency: Currency;
  onInstantBuy: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

// Select top 7 high-converting featured products across key categories
const FEATURED_PRODUCTS: Product[] = [
  PRODUCTS_DATA.find((p) => p.id === 'fm-001') || PRODUCTS_DATA[0], // 4K Cinematic Reel & Motion Graphics
  PRODUCTS_DATA.find((p) => p.id === 'fm-006') || PRODUCTS_DATA[1], // Full-Stack MERN Mastery 2026
  PRODUCTS_DATA.find((p) => p.id === 'fm-026') || PRODUCTS_DATA[2], // 10,000+ Supercharged Midjourney & ChatGPT Prompts
  PRODUCTS_DATA.find((p) => p.id === 'fm-021') || PRODUCTS_DATA[3], // Windows 11 Pro & Office 2024 Master Suite
  PRODUCTS_DATA.find((p) => p.id === 'fm-031') || PRODUCTS_DATA[4], // Multi-Vendor Marketplace PHP Script & App
  PRODUCTS_DATA.find((p) => p.id === 'fm-036') || PRODUCTS_DATA[5], // Ultra Fast Responsive E-Commerce Blogger Template
  PRODUCTS_DATA.find((p) => p.id === 'fm-011') || PRODUCTS_DATA[6], // The Complete 2026 Freelancing & Digital Marketing Blueprint
];

export const HeroSlider: React.FC<HeroSliderProps> = ({
  currency,
  onInstantBuy,
  onViewDetails,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = FEATURED_PRODUCTS.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Autoplay handler with 3500ms delay and pause on hover/touch
  useEffect(() => {
    if (isPaused) {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
      return;
    }

    autoPlayTimerRef.current = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isPaused, nextSlide]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    // Minimum 40px swipe threshold
    if (diff > 40) {
      nextSlide();
    } else if (diff < -40) {
      prevSlide();
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  return (
    <section 
      aria-label="Featured Products Hero Slider"
      className="w-full mb-8 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 16:9 Aspect Ratio Container with strict aspect ratio guarantee */}
      <div className="relative w-full aspect-[16/9] max-h-[580px] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 border border-slate-800/80 shadow-[0_15px_40px_rgba(0,0,0,0.4)] group">
        
        {/* Slides Track */}
        <div 
          className="w-full h-full flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {FEATURED_PRODUCTS.map((product, idx) => {
            const discountPercent = product.originalPriceBDT
              ? Math.round(((product.originalPriceBDT - product.priceBDT) / product.originalPriceBDT) * 100)
              : 50;

            const isCurrent = idx === currentIndex;

            return (
              <div 
                key={product.id}
                className="relative w-full h-full shrink-0 overflow-hidden cursor-pointer"
                onClick={() => onViewDetails(product)}
              >
                {/* 16:9 High-Resolution Background Banner Image */}
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                  className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                />

                {/* Gentle bottom gradient to guarantee crystal-clear contrast for the floating bar */}
                <div className="absolute inset-x-0 bottom-0 h-32 sm:h-48 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

                {/* Minimal Semi-Transparent Top Badges with soft border glow */}
                <div className="absolute top-2.5 sm:top-4 left-2.5 sm:left-5 right-2.5 sm:right-5 flex items-center justify-between z-10 pointer-events-none">
                  {/* Category Pill */}
                  <div className="flex items-center gap-1.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-emerald-400 font-heading font-bold text-[10px] sm:text-xs border border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.15)]">
                      <Flame className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current text-emerald-400" />
                      <span>{product.category}</span>
                    </span>
                    <span className="hidden xs:inline-flex items-center gap-1 px-2.5 py-0.5 sm:py-1 rounded-full bg-slate-950/60 backdrop-blur-md text-slate-300 font-semibold text-[10px] sm:text-xs border border-slate-700/50">
                      <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                      <span>{product.badge || 'Verified'}</span>
                    </span>
                  </div>

                  {/* Rating & Discount Pills */}
                  <div className="flex items-center gap-1.5">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-slate-950/70 backdrop-blur-md text-amber-300 font-bold text-[10px] sm:text-xs border border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.15)]">
                      <Star className="w-2.5 h-2.5 fill-current text-amber-400" />
                      <span>{product.rating.toFixed(1)}</span>
                    </span>
                    <span className="inline-flex items-center px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-rose-500/85 backdrop-blur-sm text-white font-heading font-black text-[10px] sm:text-xs border border-rose-400/30 shadow-md shadow-rose-950/40">
                      {discountPercent}% OFF
                    </span>
                  </div>
                </div>

                {/* Sleek 2-Line Floating Glassmorphism Bottom Strip */}
                <div className={`absolute bottom-2.5 sm:bottom-4 left-2.5 sm:left-5 right-2.5 sm:right-5 z-10 transition-all duration-500 ${
                  isCurrent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                }`}>
                  <div 
                    onClick={(e) => e.stopPropagation()} 
                    className="w-full bg-slate-950/70 sm:bg-slate-950/60 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl border border-slate-700/40 shadow-xl space-y-1.5"
                  >
                    {/* Line 1: Product Title (2 lines max with leading-snug) */}
                    <h2 
                      onClick={() => onViewDetails(product)}
                      className="font-heading text-xs sm:text-sm md:text-base font-bold text-white leading-snug line-clamp-2 hover:text-emerald-300 transition-colors cursor-pointer"
                      title={product.title}
                    >
                      {product.title}
                    </h2>

                    {/* Line 2: Flex row with Price, Original Price, and Aligned Buy Now Button */}
                    <div className="flex items-center justify-between gap-2 pt-0.5">
                      {/* Price Group */}
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <span className="font-heading text-sm sm:text-lg font-black text-emerald-400 tracking-tight">
                          {currency === 'BDT' ? `৳${product.priceBDT}` : `$${product.priceUSD.toFixed(2)}`}
                        </span>
                        {product.originalPriceBDT && (
                          <span className="text-[10px] sm:text-xs text-slate-400 line-through font-medium">
                            {currency === 'BDT' ? `৳${product.originalPriceBDT}` : `$${(product.priceUSD * 2.8).toFixed(2)}`}
                          </span>
                        )}
                        <span className="hidden sm:inline-flex items-center gap-0.5 text-[10px] font-semibold text-emerald-400/90 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                          <ShieldCheck className="w-2.5 h-2.5" />
                          <span>Instant</span>
                        </span>
                      </div>

                      {/* Action Buttons: Free Sample Preview + Buy Now */}
                      <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onViewDetails(product);
                          }}
                          className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-slate-900/80 hover:bg-slate-800 text-emerald-400 hover:text-emerald-300 border border-emerald-500/30 hover:border-emerald-400/60 font-heading font-bold text-[10px] sm:text-xs transition-all cursor-pointer whitespace-nowrap"
                        >
                          <Eye className="w-3 h-3" />
                          <span className="hidden xs:inline">Free Preview</span>
                          <span className="xs:hidden">Preview</span>
                        </button>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onInstantBuy(product);
                          }}
                          className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-heading font-extrabold text-[11px] sm:text-xs shadow-md shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer whitespace-nowrap shrink-0"
                        >
                          <Zap className="w-3 h-3 fill-current" />
                          <span>Buy Now</span>
                        </button>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Sleek Glassmorphism Left Navigation Arrow */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          aria-label="Previous Slide"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-slate-950/60 hover:bg-emerald-500 text-white hover:text-slate-950 backdrop-blur-md border border-slate-700/60 hover:border-emerald-400 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-20 shadow-lg cursor-pointer hover:scale-110 active:scale-90"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Sleek Glassmorphism Right Navigation Arrow */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          aria-label="Next Slide"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-slate-950/60 hover:bg-emerald-500 text-white hover:text-slate-950 backdrop-blur-md border border-slate-700/60 hover:border-emerald-400 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-20 shadow-lg cursor-pointer hover:scale-110 active:scale-90"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

      </div>

      {/* Separate Pagination Dots Centered Below Banner (Zero Overlapping) */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-3 select-none">
        {FEATURED_PRODUCTS.map((_, dotIdx) => {
          const isActive = dotIdx === currentIndex;
          return (
            <button
              key={dotIdx}
              type="button"
              onClick={() => goToSlide(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`transition-all duration-300 rounded-full h-1.5 sm:h-2 cursor-pointer ${
                isActive
                  ? 'w-6 sm:w-8 bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]'
                  : 'w-1.5 sm:w-2 bg-slate-700 hover:bg-slate-500'
              }`}
            />
          );
        })}
      </div>
    </section>
  );
};
