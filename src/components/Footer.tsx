import React, { useState } from 'react';
import { Download, Phone, MapPin, MessageCircle, ShieldCheck, X, ZoomIn } from 'lucide-react';
import { CATEGORIES } from '../data/products';
import { BkashLogo } from './icons/BkashLogo';

interface FooterProps {
  onSelectCategory: (cat: string) => void;
  onOpenXmlStudio: () => void;
  onOpenPolicy?: (policyTab: 'privacy' | 'refund' | 'terms' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCategory, onOpenXmlStudio, onOpenPolicy }) => {
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  return (
    <footer className="mt-auto bg-[#0B0F19] text-slate-400 border-t border-slate-800/80 transition-colors">
      {/* Attached Founder & Lead Digital Architect Trust Section */}
      <div className="border-b border-slate-800/80 py-10 px-4 sm:px-6 lg:px-8" id="founder-section">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl bg-[#0B0F19] border border-slate-800/80 p-6 sm:p-8 shadow-[0_0_35px_rgba(16,185,129,0.12)] overflow-hidden">
            
            {/* Ambient Glow Decorators */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
              
              {/* Founder Squircle Image Container (160px × 160px with Lightbox trigger and Security Shield) */}
              <div className="relative shrink-0 group">
                <button
                  type="button"
                  onClick={() => setIsPhotoModalOpen(true)}
                  className="relative block w-36 h-36 sm:w-40 sm:h-40 rounded-3xl p-1 bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-400 shadow-[0_0_30px_rgba(16,185,129,0.4)] ring-4 ring-emerald-500/25 hover:scale-[1.02] transition-transform cursor-zoom-in focus:outline-none focus:ring-emerald-400"
                  title="Click to view full high-resolution verified photo"
                >
                  <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-slate-900">
                    <img
                      src="https://lh3.googleusercontent.com/d/1XORisly52YSBcNc4Iukz60y9ho9GrEuE"
                      alt="Joy Barmon - Founder & Lead Digital Architect"
                      className="w-full h-full object-cover select-none pointer-events-auto [user-select:none] [-webkit-user-select:none] [-webkit-touch-callout:none]"
                      referrerPolicy="no-referrer"
                      onContextMenu={(e) => e.preventDefault()}
                      onDragStart={(e) => e.preventDefault()}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          'https://drive.google.com/uc?export=view&id=1XORisly52YSBcNc4Iukz60y9ho9GrEuE';
                      }}
                    />
                    {/* Anti-Theft Transparent Layer */}
                    <div
                      className="absolute inset-0 z-10 bg-transparent"
                      onContextMenu={(e) => e.preventDefault()}
                      onDragStart={(e) => e.preventDefault()}
                    />
                    
                    {/* Hover Zoom Icon Hint */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white z-20">
                      <ZoomIn className="w-6 h-6 text-emerald-400 drop-shadow" />
                    </div>
                  </div>
                </button>

                <div className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 flex items-center gap-1 font-black text-xs shadow-lg shadow-emerald-500/50 border-2 border-slate-900 pointer-events-none z-20">
                  <span className="text-xs">✓</span>
                  <span className="text-[9px] tracking-wider uppercase">Verified</span>
                </div>
              </div>

              {/* Founder Details & Bilingual Trust Message */}
              <div className="flex-1 text-center md:text-left space-y-3.5">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                    <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      Joy Barmon
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/40 inline-flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verified Architect
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-emerald-400">
                    Founder &amp; Lead Digital Architect | FileMarket.site
                  </p>
                </div>

                {/* Bilingual Trust Text (English & Bangla) */}
                <div className="space-y-2 max-w-3xl">
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-900/60 p-3 rounded-xl border border-slate-800/80">
                    &ldquo;Every asset on FileMarket is 100% verified, virus-free, and tested before upload. Direct personal WhatsApp assistance for any download or usage issue.&rdquo;
                  </p>
                  
                  <p className="text-xs sm:text-[13px] text-emerald-300/90 leading-relaxed font-sans bg-emerald-950/20 p-3 rounded-xl border border-emerald-500/20">
                    &ldquo;FileMarket-এর প্রতিটি ফাইল, সফটওয়্যার ও কোর্স আপলোড করার আগে সম্পূর্ণ ভাইরাস-মুক্ত ও কোয়ালিটি যাচাই করা হয়। যেকোনো ডাউনলোড বা ফাইল ব্যবহারের সমস্যায় সরাসরি আমার সাথে হোয়াটসঅ্যাপে যোগাযোগ করতে পারবেন।&rdquo;
                  </p>
                </div>

                {/* Direct WhatsApp Action Button */}
                <div className="pt-1 flex flex-wrap items-center justify-center md:justify-start gap-3">
                  <a
                    href="https://wa.me/8801673833783"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-heading font-extrabold text-xs sm:text-sm shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] transition-all transform hover:-translate-y-0.5"
                  >
                    <img
                      src="https://lh3.googleusercontent.com/d/1941nw0eU_JIhKT_4QLuglzwuyDieb-jW"
                      alt="WhatsApp Icon"
                      className="w-5 h-5 object-contain shrink-0"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          'https://drive.google.com/uc?export=view&id=1941nw0eU_JIhKT_4QLuglzwuyDieb-jW';
                      }}
                    />
                    <span>Chat Directly with Joy on WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Lightbox / Full Photo Modal */}
      {isPhotoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setIsPhotoModalOpen(false)}
        >
          <div
            className="relative max-w-lg w-full bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsPhotoModalOpen(false)}
              className="absolute top-4 right-4 z-30 p-2 rounded-full bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-700 transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-[0_0_30px_rgba(16,185,129,0.3)] bg-slate-950 flex items-center justify-center">
                <img
                  src="https://lh3.googleusercontent.com/d/1XORisly52YSBcNc4Iukz60y9ho9GrEuE"
                  alt="Joy Barmon - Full Resolution Official Photo"
                  className="w-full max-h-[70vh] object-contain select-none pointer-events-auto [user-select:none] [-webkit-user-select:none] [-webkit-touch-callout:none]"
                  referrerPolicy="no-referrer"
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      'https://drive.google.com/uc?export=view&id=1XORisly52YSBcNc4Iukz60y9ho9GrEuE';
                  }}
                />
                {/* Anti-Theft Shield */}
                <div
                  className="absolute inset-0 z-20 bg-transparent"
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                />
              </div>

              <div className="flex items-center justify-between pt-1 text-xs">
                <div>
                  <h4 className="font-heading text-base font-bold text-white">Joy Barmon</h4>
                  <p className="text-emerald-400 font-medium">Founder &amp; Lead Digital Architect</p>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs border border-emerald-500/40 flex items-center gap-1">
                  ✓ Verified Official
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Footer Links & Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Brand & Address Info */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl overflow-hidden bg-slate-900 flex items-center justify-center text-white shadow-md border border-slate-700/50">
              <img
                src="https://lh3.googleusercontent.com/d/1KkNKkG7Y06W8a_d8Efc7PBMiiQkzxG10"
                alt="FileMarket Logo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-heading text-xl font-extrabold text-white">
              File<span className="text-emerald-400">Market</span>.site
            </span>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
            Bangladesh&apos;s premier digital marketplace for video bundles, online courses, software, AI prompts, and Blogger templates with instant bKash &amp; Nagad verification.
          </p>

          <div className="space-y-2 pt-2 text-xs">
            <div className="flex items-start gap-2 text-slate-300">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Address:</strong> Bangladesh Chittagong bayzid 4214</span>
            </div>

            <div className="flex items-center gap-2 text-slate-300">
              <img
                src="https://lh3.googleusercontent.com/d/1941nw0eU_JIhKT_4QLuglzwuyDieb-jW"
                alt="WhatsApp"
                className="w-4 h-4 object-contain shrink-0"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    'https://drive.google.com/uc?export=view&id=1941nw0eU_JIhKT_4QLuglzwuyDieb-jW';
                }}
              />
              <span><strong>Founder WhatsApp:</strong> <a href="https://wa.me/8801673833783" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white transition-colors">+8801673833783</a></span>
            </div>
          </div>
        </div>

        {/* Categories Directory */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="font-heading text-xs font-bold text-white uppercase tracking-wider">
            Product Categories
          </h4>
          <ul className="text-xs space-y-2">
            {CATEGORIES.filter((c) => c !== 'All Products').slice(0, 6).map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => onSelectCategory(cat)}
                  className="hover:text-emerald-400 transition text-left"
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Payments & Architecture */}
        <div className="md:col-span-4 space-y-3.5">
          <div className="flex items-center justify-between">
            <h4 className="font-heading text-xs font-bold text-slate-200 uppercase tracking-wider">
              Payments &amp; Security
            </h4>
            <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              <ShieldCheck className="w-3 h-3" />
              <span>100% Secure</span>
            </span>
          </div>
          
          <p className="text-xs text-slate-400 leading-relaxed">
            Instant automated verification with official payment gateway channels.
          </p>

          {/* Ultra-Modern Glassmorphism Payment Pills */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            
            {/* bKash Pill */}
            <div className="group/pay inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-slate-900/70 hover:bg-slate-900 backdrop-blur-md border border-pink-500/30 hover:border-pink-500/80 shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_0_16px_rgba(209,32,83,0.35)] transition-all duration-300 hover:-translate-y-0.5 cursor-default">
              <div className="w-6 h-6 rounded-full flex items-center justify-center shadow-sm shrink-0 overflow-hidden">
                <BkashLogo className="w-full h-full" />
              </div>
              <span className="text-xs font-extrabold text-pink-200 group-hover/pay:text-pink-100 tracking-tight">bKash</span>
            </div>

            {/* Nagad Pill */}
            <div className="group/pay inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-slate-900/70 hover:bg-slate-900 backdrop-blur-md border border-orange-500/30 hover:border-orange-500/80 shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_0_16px_rgba(247,147,30,0.35)] transition-all duration-300 hover:-translate-y-0.5 cursor-default">
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center p-0.5 shadow-sm shrink-0">
                <img
                  src="https://lh3.googleusercontent.com/d/1B-mR6Tc-KaZGWejKJap3gjN_YrPKPfYm"
                  alt="Nagad"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://drive.google.com/uc?export=view&id=1B-mR6Tc-KaZGWejKJap3gjN_YrPKPfYm';
                  }}
                />
              </div>
              <span className="text-xs font-extrabold text-orange-200 group-hover/pay:text-orange-100 tracking-tight">Nagad</span>
            </div>

            {/* Binance Pay Pill */}
            <div className="group/pay inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-slate-900/70 hover:bg-slate-900 backdrop-blur-md border border-amber-400/30 hover:border-amber-400/80 shadow-[0_2px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_0_16px_rgba(240,185,11,0.35)] transition-all duration-300 hover:-translate-y-0.5 cursor-default">
              <div className="w-6 h-6 rounded-full bg-[#181A20] flex items-center justify-center p-0.5 shadow-sm shrink-0">
                <img
                  src="https://lh3.googleusercontent.com/d/1oriM4R9YRo9TSb6btdS3v4gRioeTCBL7"
                  alt="Binance Pay"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://drive.google.com/uc?export=view&id=1oriM4R9YRo9TSb6btdS3v4gRioeTCBL7';
                  }}
                />
              </div>
              <span className="text-xs font-extrabold text-amber-200 group-hover/pay:text-amber-100 tracking-tight">Binance Pay</span>
            </div>

          </div>

          <div className="pt-2 flex items-center justify-center sm:justify-start">
            <button
              onClick={onOpenXmlStudio}
              className="text-xs text-emerald-400 hover:text-emerald-300 font-bold hover:underline inline-flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span>Download Blogger XML Theme v3</span>
              <span>&rarr;</span>
            </button>
          </div>
        </div>

      </div>

      {/* START: Refined Clean Footer Bottom */}
      <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col items-center justify-center text-center space-y-3 w-full max-w-4xl mx-auto px-4 pb-8">
        
        {/* Security Engine Line */}
        <div className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-medium">
          <span>🔒</span>
          <span>Powered by <strong className="text-slate-200">FileMarket.site Engine</strong></span>
          <span className="text-slate-600">•</span>
          <span className="text-emerald-400">256-Bit SSL Encrypted</span>
        </div>

        {/* Interactive Policy Links (Grid/Flex Row) */}
        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-xs font-medium text-slate-300">
          <button type="button" onClick={() => onOpenPolicy?.('privacy')} className="hover:text-emerald-400 transition cursor-pointer">🔒 Privacy Policy</button>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <button type="button" onClick={() => onOpenPolicy?.('refund')} className="hover:text-emerald-400 transition cursor-pointer">🛡️ 100% Refund Policy</button>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <button type="button" onClick={() => onOpenPolicy?.('terms')} className="hover:text-emerald-400 transition cursor-pointer">📜 Terms of Service</button>
          <span className="text-slate-700 hidden sm:inline">•</span>
          <button type="button" onClick={() => onOpenPolicy?.('contact')} className="hover:text-emerald-400 transition cursor-pointer">📞 About &amp; Contact</button>
        </div>

        {/* Trust Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] text-slate-400">
          <span>⚡ Instant Access</span>
          <span>•</span>
          <span>💬 24/7 WhatsApp Support</span>
          <span>•</span>
          <span>🛡️ Genuine Licenses</span>
        </div>

        {/* Copyright */}
        <p className="text-[11px] text-slate-400 pt-1">
          © 2026 <span className="text-slate-300 font-semibold">FileMarket.site</span>. Designed for Speed, SEO &amp; Conversions.
        </p>

      </div>
      {/* END: Refined Clean Footer Bottom */}
    </footer>
  );
};
