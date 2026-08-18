import React, { useState, useEffect } from 'react';
import { X, User, Download, Sun, Moon, Sparkles, LogIn, UserPlus, LogOut, ShieldCheck } from 'lucide-react';
import { Currency } from '../types';

interface SlideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  setDarkMode: (value: boolean | ((prev: boolean) => boolean)) => void;
  currency: Currency;
  setCurrency: (c: Currency) => void;
  onOpenProfilePage: () => void;
  onOpenMyProductsPage: () => void;
  onOpenAiSeoGenerator: () => void;
  onOpenLogin: () => void;
}

export const SlideDrawer: React.FC<SlideDrawerProps> = ({
  isOpen,
  onClose,
  darkMode,
  setDarkMode,
  currency,
  setCurrency,
  onOpenProfilePage,
  onOpenMyProductsPage,
  onOpenAiSeoGenerator,
  onOpenLogin,
}) => {
  const [user, setUser] = useState<any>(() => {
    try {
      const saved = localStorage.getItem('filemarket_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  useEffect(() => {
    const handleStorage = () => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
      try {
        const saved = localStorage.getItem('filemarket_user');
        setUser(saved ? JSON.parse(saved) : null);
      } catch {
        setUser(null);
      }
    };
    window.addEventListener('storage', handleStorage);
    // Also re-check state whenever drawer opens
    if (isOpen) {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
      try {
        const saved = localStorage.getItem('filemarket_user');
        setUser(saved ? JSON.parse(saved) : null);
      } catch {
        setUser(null);
      }
    }
    return () => window.removeEventListener('storage', handleStorage);
  }, [isOpen]);

  const handleLogout = () => {
    localStorage.removeItem('filemarket_user');
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('fm_user_name');
    localStorage.removeItem('fm_user_email');
    localStorage.removeItem('fm_user_photo');
    localStorage.removeItem('fm_user_uid');
    setIsLoggedIn(false);
    setUser(null);
    window.dispatchEvent(new Event('storage'));
  };

  const displayName = user?.name || localStorage.getItem('fm_user_name') || 'Joy Barmon';
  const displayEmail = user?.email || localStorage.getItem('fm_user_email') || 'customer@filemarket.site';
  const displayPhoto = user?.picture || localStorage.getItem('fm_user_photo') || '';
  const initials = displayName.split(' ').map((n: string) => n[0]).join('').substring(0, 2).toUpperCase() || 'FM';

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-[99998] bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Slide-Out Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-xs z-[99999] bg-slate-900/98 dark:bg-[#0B0F19]/98 backdrop-blur-2xl border-l border-slate-800 text-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-out animate-in slide-in-from-right">
        
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800/80">
          {isLoggedIn ? (
            <div className="flex items-center gap-3 overflow-hidden">
              {displayPhoto ? (
                <img 
                  src={displayPhoto} 
                  alt={displayName} 
                  className="w-10 h-10 rounded-xl object-cover border border-emerald-500/40 shadow-xs shrink-0" 
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold shrink-0">
                  {initials}
                </div>
              )}
              <div className="min-w-0">
                <h3 className="font-bold text-sm text-white truncate">{displayName}</h3>
                <p className="text-[11px] text-emerald-400 flex items-center gap-1 truncate">
                  <ShieldCheck className="w-3 h-3 shrink-0" />
                  <span className="truncate">{displayEmail}</span>
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700/80 flex items-center justify-center text-emerald-400 font-bold">
                🔒
              </div>
              <div>
                <h3 className="font-bold text-sm text-white">Guest User</h3>
                <p className="text-[11px] text-slate-400">FileMarket.site Auth Center</p>
              </div>
            </div>
          )}

          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body Links */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          
          {/* DYNAMIC AUTH SECTION */}
          {!isLoggedIn ? (
            /* Guest View: Clean Full-Width Auth Buttons */
            <div className="space-y-3 bg-slate-800/30 p-4 rounded-2xl border border-slate-800/80">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                Account Access
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">
                Log in or sign up to access your purchased files, licenses and Google Drive lockers.
              </p>
              
              {/* Login Button (Secondary) */}
              <button
                onClick={() => {
                  onClose();
                  onOpenLogin();
                }}
                className="w-full py-3 px-4 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-slate-700/80 text-slate-200 hover:text-white font-bold text-sm flex items-center justify-center gap-2 transition cursor-pointer shadow-sm"
              >
                <LogIn className="w-4 h-4 text-slate-300" />
                <span>Log In</span>
              </button>

              {/* Sign Up Button (Primary Rose-Crimson Gradient) */}
              <button
                onClick={() => {
                  onClose();
                  onOpenLogin();
                }}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-rose-500 via-rose-600 to-rose-500 hover:from-rose-400 hover:to-rose-500 text-white font-heading font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-rose-500/25 transition cursor-pointer"
              >
                <UserPlus className="w-4 h-4" />
                <span>Sign Up Free</span>
              </button>
            </div>
          ) : (
            /* Authenticated View: User Profile, Downloads, AI SEO & WhatsApp */
            <div className="space-y-2">
              <button
                onClick={() => {
                  onClose();
                  onOpenProfilePage();
                }}
                className="w-full flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition text-sm font-medium text-left cursor-pointer"
              >
                <User className="w-5 h-5 text-emerald-400 shrink-0" />
                <div className="flex-1">
                  <span className="block text-white font-semibold">User Profile</span>
                  <span className="block text-xs text-slate-400">Manage account & details</span>
                </div>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenMyProductsPage();
                }}
                className="w-full flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition text-sm font-medium text-left cursor-pointer"
              >
                <Download className="w-5 h-5 text-emerald-400 shrink-0" />
                <div className="flex-1">
                  <span className="block text-white font-semibold">My Products / Downloads</span>
                  <span className="block text-xs text-slate-400">Access purchased assets</span>
                </div>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenAiSeoGenerator();
                }}
                className="w-full flex items-center gap-3 p-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition text-sm font-medium text-left cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-emerald-400 shrink-0" />
                <div className="flex-1">
                  <span className="block text-emerald-300 font-semibold">AI SEO Generator</span>
                  <span className="block text-xs text-slate-400">Create optimized product copy</span>
                </div>
              </button>

              <a
                href="https://wa.me/8801673833783?text=Hello%20FileMarket%2C%20I%20need%20support."
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="w-full flex items-center gap-3 p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition text-sm font-medium text-left cursor-pointer text-emerald-400"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <span className="block text-white font-semibold">WhatsApp Support</span>
                  <span className="block text-xs text-slate-400">Chat with founder instantly</span>
                </div>
              </a>

              {/* Logout Option */}
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 p-3 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 transition text-sm font-medium text-left cursor-pointer text-rose-400 mt-2"
              >
                <LogOut className="w-5 h-5 shrink-0" />
                <span className="font-semibold">Log Out</span>
              </button>
            </div>
          )}

          {/* FIXED BOTTOM SECTION: Currency & Dual-Pill Theme Switcher */}
          <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-800 space-y-4">
            <div>
              <span className="text-xs font-bold text-slate-400 block mb-2 uppercase tracking-wider">Currency Switcher</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrency('BDT')}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold transition border cursor-pointer ${
                    currency === 'BDT'
                      ? 'border-emerald-500 bg-emerald-500 text-white shadow-sm'
                      : 'border-slate-700 bg-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  BDT (৳)
                </button>
                <button
                  onClick={() => setCurrency('USD')}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold transition border cursor-pointer ${
                    currency === 'USD'
                      ? 'border-emerald-500 bg-emerald-500 text-white shadow-sm'
                      : 'border-slate-700 bg-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  USD ($)
                </button>
              </div>
            </div>

            <div>
              <span className="text-xs font-bold text-slate-400 block mb-2 uppercase tracking-wider">Theme Mode</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setDarkMode(false)}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold transition border flex items-center justify-center gap-1.5 cursor-pointer ${
                    !darkMode
                      ? 'border-emerald-500 bg-emerald-500 text-white shadow-sm'
                      : 'border-slate-700 bg-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  <Sun className="w-3.5 h-3.5" />
                  <span>Day</span>
                </button>
                <button
                  onClick={() => setDarkMode(true)}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold transition border flex items-center justify-center gap-1.5 cursor-pointer ${
                    darkMode
                      ? 'border-emerald-500 bg-emerald-500 text-white shadow-sm'
                      : 'border-slate-700 bg-slate-800 text-slate-300 hover:text-white'
                  }`}
                >
                  <Moon className="w-3.5 h-3.5" />
                  <span>Night</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-slate-800/80 text-center text-xs text-slate-500">
          FileMarket.site • Secure Delivery
        </div>

      </div>
    </>
  );
};
