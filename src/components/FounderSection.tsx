import React, { useState } from 'react';
import { ShieldCheck, MessageCircle, X, ZoomIn } from 'lucide-react';

export const FounderSection: React.FC = () => {
  const [isPhotoModalOpen, setIsPhotoModalOpen] = useState(false);

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="founder-section">
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
    </section>
  );
};

