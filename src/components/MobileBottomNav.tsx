import React, { useState } from 'react';
import { Home, Search, User } from 'lucide-react';

interface MobileBottomNavProps {
  onScrollToTop: () => void;
  onOpenSearch: () => void;
  onOpenProfile: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  onScrollToTop,
  onOpenSearch,
  onOpenProfile,
}) => {
  const [activeTab, setActiveTab] = useState<'home' | 'search' | 'profile'>('home');

  const handleTabClick = (tab: 'home' | 'search' | 'profile', callback: () => void) => {
    setActiveTab(tab);
    callback();
  };

  const getTabClasses = (tab: 'home' | 'search' | 'profile') => {
    const isActive = activeTab === tab;
    return `relative flex flex-col items-center justify-center gap-1 py-2 px-6 rounded-2xl text-[11px] font-bold transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] transform active:scale-95 cursor-pointer select-none ${
      isActive
        ? 'text-[#10b981] dark:text-[#10b981] bg-emerald-500/10 dark:bg-emerald-500/15 shadow-sm -translate-y-0.5'
        : 'text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-100/80 dark:hover:bg-slate-800/40'
    }`;
  };

  return (
    <nav 
      className="md:hidden fixed bottom-0 left-0 right-0 z-[9999] bg-white/95 dark:bg-[#0B0F19]/95 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-around py-2 px-4 shadow-[0_-4px_25px_rgba(0,0,0,0.1)] dark:shadow-[0_-4px_25px_rgba(0,0,0,0.5)]"
      style={{ backdropFilter: 'blur(15px)', WebkitBackdropFilter: 'blur(15px)' }}
    >
      
      {/* Home Tab */}
      <button
        onClick={() => handleTabClick('home', onScrollToTop)}
        className={getTabClasses('home')}
        aria-label="Home"
      >
        <Home className={`w-5 h-5 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${activeTab === 'home' ? 'stroke-[2.5] scale-110 text-[#10b981]' : 'stroke-[2]'}`} />
        <span>Home</span>
      </button>

      {/* Search Tab */}
      <button
        onClick={() => handleTabClick('search', onOpenSearch)}
        className={getTabClasses('search')}
        aria-label="Search"
      >
        <Search className={`w-5 h-5 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${activeTab === 'search' ? 'stroke-[2.5] scale-110 text-[#10b981]' : 'stroke-[2]'}`} />
        <span>Search</span>
      </button>

      {/* Profile Tab */}
      <button
        onClick={() => handleTabClick('profile', onOpenProfile)}
        className={getTabClasses('profile')}
        aria-label="Profile"
      >
        <User className={`w-5 h-5 transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${activeTab === 'profile' ? 'stroke-[2.5] scale-110 text-[#10b981]' : 'stroke-[2]'}`} />
        <span>Profile</span>
      </button>

    </nav>
  );
};
