import React, { useState, useRef, useEffect } from 'react';
import { Search, X, Menu, Sparkles } from 'lucide-react';
import { Currency } from '../types';

interface HeaderProps {
  darkMode?: boolean;
  setDarkMode?: (value: boolean | ((prev: boolean) => boolean)) => void;
  currency?: Currency;
  setCurrency?: (currency: Currency) => void;
  onOpenXmlStudio?: () => void;
  onOpenProfile?: () => void;
  onOpenDrawer?: () => void;
  onOpenAiSeo?: () => void;
  onOpenSearch?: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenDrawer,
  onOpenSearch,
  onOpenProfile,
}) => {
  return (
    <header className="relative w-full backdrop-blur-xl bg-white/95 dark:bg-[#0B0F19]/95 border-b border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white transition-colors duration-300 z-[9999]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-16 py-2.5 flex items-center justify-between gap-3">
        
        {/* Brand Identity */}
        <a 
          href="/" 
          className="flex items-center gap-3 sm:gap-3.5 group shrink-0 select-none transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.02]" 
          aria-label="FileMarket Home"
        >
          {/* Scaled Logo Box: 46px x 46px squircle container with luxury glowing border and dark glassmorphic backdrop */}
          <div 
            className="relative w-[46px] h-[46px] rounded-2xl overflow-hidden bg-slate-900/95 flex items-center justify-center transition-all duration-300 shrink-0 border border-emerald-500/40 animate-luxury-box group-hover:border-emerald-400 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.7)]"
            style={{
              borderRadius: '14px',
            }}
          >
            <img
              src="https://lh3.googleusercontent.com/d/1KkNKkG7Y06W8a_d8Efc7PBMiiQkzxG10"
              alt="FileMarket Logo"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = 'https://drive.google.com/uc?export=view&id=1KkNKkG7Y06W8a_d8Efc7PBMiiQkzxG10';
              }}
            />
            {/* Subtle gloss shine overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 via-transparent to-cyan-400/15 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          {/* Scaled Brand Typography: FileMarket (24px Desktop / 22px Mobile, 800 Bold, Synchronized Glow) */}
          <div className="flex items-center">
            <span 
              className="inline-flex items-center tracking-[-0.5px] transition-all duration-300 text-[22px] sm:text-[24px] font-extrabold"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 800
              }}
            >
              <span className="text-slate-900 dark:text-white">File</span>
              <span 
                className="text-[#00D293] dark:text-[#00D293] animate-luxury-text group-hover:brightness-110 transition-all font-black"
              >
                Market
              </span>
            </span>
          </div>
        </a>

        {/* Right Side Header Actions: 3 distinct icons aligned horizontally */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          
          {/* 1. Search Icon (Magnifying Glass) */}
          <button
            onClick={onOpenSearch}
            aria-label="Open Search Modal"
            className="w-[40px] h-[40px] rounded-xl bg-slate-100 dark:bg-slate-800/95 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-emerald-400 hover:text-emerald-500 hover:bg-slate-200 dark:hover:bg-slate-700 transition cursor-pointer flex items-center justify-center shadow-sm shrink-0"
          >
            <Search className="w-5 h-5 stroke-[2.2]" />
          </button>

          {/* 2. WhatsApp Icon */}
          <a
            href="https://wa.me/8801673833783?text=Hello%20FileMarket%2C%20I%20need%20support."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="relative w-[40px] h-[40px] rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/50 text-emerald-400 hover:text-white transition cursor-pointer flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)] animate-pulse shrink-0"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </a>

          {/* 3. Hamburger Menu (3-Line Icon ☰) */}
          <button
            onClick={onOpenDrawer}
            aria-label="Open Navigation Menu"
            className="w-[40px] h-[40px] rounded-xl bg-slate-100 dark:bg-slate-800/95 border border-slate-200 dark:border-slate-700/80 text-slate-700 dark:text-emerald-400 hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition cursor-pointer flex items-center justify-center shadow-md shrink-0"
          >
            <Menu className="w-5 h-5 stroke-[2.2]" />
          </button>
        </div>

      </div>
    </header>
  );
};
