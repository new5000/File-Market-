import React, { useState } from 'react';
import { X, User, Mail, Phone, ShoppingBag, Download, ShieldCheck, MessageSquare, Sparkles, Check, Edit2 } from 'lucide-react';
import { Currency } from '../types';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: Currency;
  setCurrency: (c: Currency) => void;
  darkMode: boolean;
  setDarkMode: (d: boolean) => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  currency,
  setCurrency,
  darkMode,
  setDarkMode,
}) => {
  const [userName, setUserName] = useState<string>(() => {
    return localStorage.getItem('filemarket_user_name') || 'Guest User';
  });
  const [userEmail, setUserEmail] = useState<string>(() => {
    return localStorage.getItem('filemarket_user_email') || 'customer@filemarket.com';
  });
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [nameInput, setNameInput] = useState(userName);
  const [emailInput, setEmailInput] = useState(userEmail);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setUserName(nameInput);
    setUserEmail(emailInput);
    localStorage.setItem('filemarket_user_name', nameInput);
    localStorage.setItem('filemarket_user_email', emailInput);
    setIsEditing(false);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with avatar cover */}
        <div className="relative bg-gradient-to-r from-emerald-600 to-teal-700 p-6 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-2xl bg-white text-emerald-600 flex items-center justify-center font-black text-2xl shadow-lg border-2 border-white/40">
              <User className="w-9 h-9" />
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-400 border-2 border-white dark:border-[#111827] rounded-full" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-heading font-black text-xl text-white">{userName}</h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/20 text-white backdrop-blur-xs">
                  Buyer
                </span>
              </div>
              <p className="text-xs text-emerald-100 mt-0.5">{userEmail}</p>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-800 dark:text-slate-200">
          {savedSuccess && (
            <div className="flex items-center gap-2 p-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 rounded-xl text-xs font-semibold">
              <Check className="w-4 h-4" />
              <span>Profile information updated successfully!</span>
            </div>
          )}

          {/* Edit Profile Section */}
          {isEditing ? (
            <form onSubmit={handleSaveProfile} className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700/60 space-y-3">
              <div className="font-heading font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Edit Profile Details
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Display Name</label>
                <input 
                  type="text" 
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs focus:outline-none focus:border-emerald-500"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">Email Address</label>
                <input 
                  type="email" 
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-xs focus:outline-none focus:border-emerald-500"
                  required
                />
              </div>
              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold text-slate-500 hover:text-slate-700 dark:text-slate-400 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg text-xs font-bold bg-emerald-500 text-white hover:bg-emerald-600 cursor-pointer shadow-sm"
                >
                  Save Changes
                </button>
              </div>
            </form>
          ) : (
            <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-800">
              <div className="space-y-1">
                <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Account Type</div>
                <div className="text-sm font-bold flex items-center gap-1.5 text-slate-900 dark:text-white">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>FileMarket Verified Buyer</span>
                </div>
              </div>
              <button
                onClick={() => {
                  setNameInput(userName);
                  setEmailInput(userEmail);
                  setIsEditing(true);
                }}
                className="px-3 py-1.5 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold flex items-center gap-1.5 transition cursor-pointer"
              >
                <Edit2 className="w-3.5 h-3.5" />
                <span>Edit</span>
              </button>
            </div>
          )}

          {/* Quick Preferences */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Preferences</h4>
            <div className="grid grid-cols-2 gap-3">
              {/* Currency Selection */}
              <div className="p-3.5 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-800">
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold block mb-2">Display Currency</span>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setCurrency('BDT')}
                    className={`flex-1 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                      currency === 'BDT'
                        ? 'bg-emerald-500 text-white shadow-xs'
                        : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    ৳ BDT
                  </button>
                  <button
                    onClick={() => setCurrency('USD')}
                    className={`flex-1 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                      currency === 'USD'
                        ? 'bg-emerald-500 text-white shadow-xs'
                        : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    $ USD
                  </button>
                </div>
              </div>

              {/* Theme Selection */}
              <div className="p-3.5 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-800">
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold block mb-2">Theme Mode</span>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setDarkMode(true)}
                    className={`flex-1 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                      darkMode
                        ? 'bg-emerald-500 text-white shadow-xs'
                        : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    Dark
                  </button>
                  <button
                    onClick={() => setDarkMode(false)}
                    className={`flex-1 py-1 rounded-lg text-xs font-bold transition cursor-pointer ${
                      !darkMode
                        ? 'bg-emerald-500 text-white shadow-xs'
                        : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    Light
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Purchases & Support Hub */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Order Support &amp; Delivery</h4>
            <div className="space-y-2">
              <a
                href="https://wa.me/8801673833783?text=Hello%20FileMarket%2C%20I%20need%20help%20with%20my%20order"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 bg-emerald-500/10 hover:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 rounded-2xl border border-emerald-500/20 transition cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-emerald-500" />
                  <div>
                    <div className="text-xs font-bold">24/7 WhatsApp Instant Support</div>
                    <div className="text-[11px] text-emerald-600/80 dark:text-emerald-400/70">+880 1673-833783</div>
                  </div>
                </div>
                <span className="text-xs font-bold bg-emerald-500 text-white px-2.5 py-1 rounded-lg">Chat</span>
              </a>

              <div className="p-3.5 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Download className="w-5 h-5 text-slate-400" />
                  <div>
                    <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Google Drive High Speed Direct Delivery</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400">All purchased files unlock instant 1-click links</div>
                  </div>
                </div>
                <Sparkles className="w-4 h-4 text-amber-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="text-[11px] text-slate-400">FileMarket ID: #FM-2026</div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white dark:bg-slate-800 dark:hover:bg-slate-700 transition cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
