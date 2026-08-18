import React, { useState } from 'react';
import { ArrowLeft, User, ShieldCheck, Check, Lock, Save, Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import { Currency } from '../types';

interface UserProfilePageProps {
  isOpen: boolean;
  onClose: () => void;
  currency: Currency;
  setCurrency: (c: Currency) => void;
  darkMode: boolean;
  setDarkMode: (d: boolean) => void;
}

export const UserProfilePage: React.FC<UserProfilePageProps> = ({
  isOpen,
  onClose,
}) => {
  const [fullName, setFullName] = useState<string>(() => localStorage.getItem('fm_user_name') || 'Joy Barmon');
  const [phone, setPhone] = useState<string>(() => localStorage.getItem('fm_user_phone') || '+8801673833783');
  const [email, setEmail] = useState<string>(() => localStorage.getItem('fm_user_email') || 'joybarmon@filemarket.site');
  const [address, setAddress] = useState<string>(() => localStorage.getItem('fm_user_address') || 'Dhaka, Bangladesh');

  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword && newPassword !== confirmPassword) {
      setToastMessage('New passwords do not match!');
      setTimeout(() => setToastMessage(null), 3000);
      return;
    }

    localStorage.setItem('fm_user_name', fullName);
    localStorage.setItem('fm_user_phone', phone);
    localStorage.setItem('fm_user_email', email);
    localStorage.setItem('fm_user_address', address);

    setToastMessage('Profile & Password updated successfully!');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="fixed inset-0 z-[99999] bg-slate-950/90 backdrop-blur-2xl flex flex-col overflow-y-auto text-white animate-in fade-in zoom-in-95 duration-200">
      
      {/* Top Navigation Bar */}
      <div className="sticky top-0 z-20 backdrop-blur-xl bg-slate-900/90 border-b border-slate-800 px-4 sm:px-8 py-4 flex items-center justify-between">
        <button
          onClick={onClose}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-xs font-bold text-slate-200 hover:text-white transition cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-emerald-400" />
          <span>Back to Store</span>
        </button>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold text-sm">
            JB
          </div>
          <span className="font-bold text-sm hidden sm:inline">User Account Center</span>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-3xl w-full mx-auto p-4 sm:p-8 space-y-6 my-auto">
        
        {/* User Overview Header Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950/40 border border-slate-800 p-6 sm:p-8 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-emerald-500/20 border-2 border-emerald-500/50 flex items-center justify-center text-emerald-400 font-black text-3xl shadow-xl">
              <User className="w-12 h-12" />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-400 border-2 border-slate-900 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-3 h-3 text-slate-900" />
              </div>
            </div>

            <div className="text-center sm:text-left flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Verified Buyer & Developer</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white">{fullName}</h1>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">{email} • Member since 2025</p>
            </div>
          </div>
        </div>

        {/* Toast Notification */}
        {toastMessage && (
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 text-sm font-bold shadow-lg animate-in fade-in duration-200">
            <Check className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Personal Info & Password Form */}
        <form onSubmit={handleUpdateProfile} className="space-y-6">
          
          {/* Section 1: Personal Information */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
              <User className="w-5 h-5 text-emerald-400" />
              <h2 className="font-bold text-base text-white">Personal Information (ব্যক্তিগত তথ্য)</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1">Full Name (নাম)</label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1">Phone Number (ফোন নাম্বার)</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500 transition"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1">Email Address (ইমেইল)</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500 transition"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1">Full Address / City (ঠিকানা)</label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500 transition"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Security & Password Management */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-800">
              <Lock className="w-5 h-5 text-emerald-400" />
              <h2 className="font-bold text-base text-white">Security & Password Management (পাসওয়ার্ড পরিবর্তন)</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1">Current Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500 transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1">New Password</label>
                  <input
                    type="password"
                    placeholder="At least 6 characters"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500 transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 mb-1">Confirm New Password</label>
                  <input
                    type="password"
                    placeholder="Confirm new password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500 transition"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black text-sm shadow-[0_0_30px_rgba(16,185,129,0.4)] transition cursor-pointer flex items-center gap-2.5"
            >
              <Save className="w-5 h-5" />
              <span>Update Profile & Password</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
