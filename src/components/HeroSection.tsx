import React from 'react';
import { Zap, ShieldCheck, CreditCard, MessageSquare, ArrowRight, Star, Sparkles, CheckCircle2 } from 'lucide-react';
import { Product } from '../types';

interface HeroSectionProps {
  featuredProduct: Product;
  onInstantBuy: (product: Product) => void;
  onScrollToProducts: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  featuredProduct,
  onInstantBuy,
  onScrollToProducts,
}) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 md:py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-[#0B0F19] dark:to-[#0B0F19] text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 transition-colors">
      
      {/* Ambient Neon Glow Blobs */}
      <div className="absolute -top-10 left-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute top-10 right-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-cyan-500/10 dark:bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Animated Live Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping"></span>
              <span>⚡ Over 1,000+ Verified Digital Assets &amp; Courses Ready for Instant Download</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-slate-900 dark:text-white">
              Unlock Elite{' '}
              <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400 bg-clip-text text-transparent">
                Digital Assets
              </span>
              , Courses &amp; Tools for Modern Creators
            </h1>

            {/* Sub-headline */}
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Instant Google Drive delivery, lifetime updates, and 100% verified safe files. Seamless mobile checkout via bKash &amp; Nagad in Bangladesh.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <button
                onClick={onScrollToProducts}
                className="px-7 py-3.5 rounded-xl font-heading font-bold text-sm bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 text-white shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Browse Products</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/8801673833783?text=Hello%20FileMarket,%20I%20want%20to%20order%20digital%20assets"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-heading font-bold text-sm bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/90 dark:hover:bg-slate-700/90 text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white border border-slate-200 dark:border-slate-700 transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Contact WhatsApp</span>
              </a>
            </div>

            {/* Trust Metrics / Social Proof Badges */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-3 gap-3 sm:gap-4 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-left">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">⚡ Instant Download</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Google Drive High-Speed</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-left">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/20">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">🔒 100% Safe &amp; Tested</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Clean &amp; Virus-Free</div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-left">
                <div className="w-9 h-9 rounded-xl bg-pink-500/10 text-pink-600 dark:text-pink-400 flex items-center justify-center shrink-0 border border-pink-500/20">
                  <CreditCard className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900 dark:text-white">💳 bKash &amp; Nagad</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Auto Verification</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Interactive Floating Deal Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md rounded-2xl bg-white dark:bg-gradient-to-b dark:from-slate-800/90 dark:to-slate-900/95 border border-slate-200 dark:border-slate-700/80 p-5 shadow-2xl backdrop-blur-xl relative group hover:border-emerald-500/50 transition-all duration-300">
              
              {/* Special Deal Ribbon */}
              <div className="absolute -top-3 -right-2 px-3.5 py-1 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-[11px] font-black rounded-full shadow-lg uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>-50% OFF Limited Deal</span>
              </div>

              {/* Product Thumbnail */}
              <div className="relative h-48 sm:h-52 rounded-xl overflow-hidden mb-4 bg-slate-100 dark:bg-slate-950">
                <img
                  src={featuredProduct.thumbnail}
                  alt={featuredProduct.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-500 text-white shadow">
                    {featuredProduct.category}
                  </span>
                  <span className="text-xs font-bold text-amber-300 flex items-center gap-1 bg-slate-900/80 px-2 py-0.5 rounded-md border border-slate-700">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{featuredProduct.rating} ({featuredProduct.reviewsCount})</span>
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-1">
                {featuredProduct.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 line-clamp-2 leading-relaxed">
                {featuredProduct.description}
              </p>

              {/* Bullet Highlights */}
              <div className="space-y-1.5 mb-4 text-[11px] text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0" />
                  <span className="truncate">{featuredProduct.fileSize} • {featuredProduct.license}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400 shrink-0" />
                  <span>Instant Delivery via Google Drive Link</span>
                </div>
              </div>

              {/* Price & Action */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-700/80">
                <div>
                  <div className="text-[10px] text-slate-400 uppercase font-semibold">Special Offer</div>
                  <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">
                    ৳{featuredProduct.priceBDT}{' '}
                    <span className="text-xs text-slate-400 line-through font-normal">
                      ৳{featuredProduct.originalPriceBDT}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onInstantBuy(featuredProduct)}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white shadow-lg shadow-emerald-500/20 active:scale-95 transition-all cursor-pointer"
                >
                  Instant Buy
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
