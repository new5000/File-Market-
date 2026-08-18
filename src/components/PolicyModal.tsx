import React, { useEffect } from 'react';
import { X, ShieldCheck, Lock, FileText, Phone, CheckCircle2 } from 'lucide-react';

export type PolicyType = 'privacy' | 'refund' | 'terms' | 'contact';

interface PolicyModalProps {
  isOpen: boolean;
  initialTab?: PolicyType;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({
  isOpen,
  initialTab = 'privacy',
  onClose,
}) => {
  const [activeTab, setActiveTab] = React.useState<PolicyType>(initialTab);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="policy-modal"
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] text-slate-800 dark:text-slate-200 transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="p-4 sm:p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-900/50 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0">
              {activeTab === 'privacy' && <Lock className="w-5 h-5" />}
              {activeTab === 'refund' && <ShieldCheck className="w-5 h-5" />}
              {activeTab === 'terms' && <FileText className="w-5 h-5" />}
              {activeTab === 'contact' && <Phone className="w-5 h-5" />}
            </div>
            <div>
              <h2 className="font-heading text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                {activeTab === 'privacy' && 'Privacy Policy (গোপনীয়তা নীতি)'}
                {activeTab === 'refund' && '100% Refund Policy (টাকা ফেরত নীতি)'}
                {activeTab === 'terms' && 'Terms of Service (ব্যবহারের শর্তাবলি)'}
                {activeTab === 'contact' && 'About & Contact Support (আমাদের সম্পর্কে)'}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                FileMarket.site Legal &amp; Compliance Center
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector Nav */}
        <div className="flex items-center gap-1 p-2 bg-slate-100 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 overflow-x-auto scrollbar-none shrink-0">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shrink-0 ${
              activeTab === 'privacy'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800'
            }`}
          >
            <span>🔒</span>
            <span>Privacy Policy</span>
          </button>

          <button
            onClick={() => setActiveTab('refund')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shrink-0 ${
              activeTab === 'refund'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800'
            }`}
          >
            <span>🛡️</span>
            <span>100% Refund</span>
          </button>

          <button
            onClick={() => setActiveTab('terms')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shrink-0 ${
              activeTab === 'terms'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800'
            }`}
          >
            <span>📜</span>
            <span>Terms of Service</span>
          </button>

          <button
            onClick={() => setActiveTab('contact')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shrink-0 ${
              activeTab === 'contact'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800'
            }`}
          >
            <span>📞</span>
            <span>About &amp; Contact</span>
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-5 sm:p-7 overflow-y-auto max-h-[65vh] leading-relaxed text-sm space-y-5 text-slate-700 dark:text-slate-300">
          
          {/* PRIVACY POLICY */}
          {activeTab === 'privacy' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-medium leading-relaxed">
                🔒 <strong>FileMarket.site Privacy Protection:</strong> We are committed to safeguarding your personal data and ensuring transparent digital transactions.
              </div>

              <div className="space-y-3">
                <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>1. User Data Collection (তথ্য সংগ্রহ)</span>
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  FileMarket.site only collects essential transaction data (bKash/Nagad sender phone number &amp; Transaction ID) required to verify payments and deliver automated Google Drive access links. We do not store sensitive payment passwords or PIN numbers.
                </p>

                <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 pt-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>2. No Third-Party Data Sharing (তৃতীয় পক্ষের সাথে শেয়ার বা বিক্রি নিষিদ্ধ)</span>
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  We guarantee 100% privacy. Your contact information is never sold, shared, or rented to any third-party advertisers, spam networks, or data aggregators.
                </p>

                <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 pt-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>3. Secure Access &amp; Google Drive Locker</span>
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Digital assets are delivered directly via encrypted lifetime Google Drive locker links. Downloads are virus-free, tested, and secure for immediate usage.
                </p>
              </div>
            </div>
          )}

          {/* REFUND POLICY */}
          {activeTab === 'refund' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs sm:text-sm font-medium leading-relaxed">
                🛡️ <strong>100% Money-Back Guarantee:</strong> Your satisfaction is fully protected by FileMarket&apos;s 24-Hour Instant Refund Policy.
              </div>

              <div className="space-y-3">
                <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>1. 24-Hour Refund Guarantee (২৪ ঘণ্টার মধ্যে ফুল রিফান্ড)</span>
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  If any digital course, software, script, video bundle, or preset link is broken, corrupt, incomplete, or missing promised files, we will issue a 100% instant refund back to your bKash/Nagad wallet within 24 hours.
                </p>

                <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 pt-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>2. How to Claim a Refund (কিভাবে রিফান্ড পাবেন)</span>
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Simply send your order Transaction ID (TrxID) and product name directly to Founder Joy Barmon on WhatsApp (<strong className="text-emerald-600 dark:text-emerald-400">+8801673833783</strong>). Our support team will verify and process your cash refund instantly.
                </p>

                <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 pt-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>3. Replacement &amp; Direct Support Option</span>
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  In addition to a cash refund, you can choose a free replacement link or get direct remote assistance from our technical team.
                </p>
              </div>
            </div>
          )}

          {/* TERMS OF SERVICE */}
          {activeTab === 'terms' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-800 dark:text-blue-300 text-xs sm:text-sm font-medium leading-relaxed">
                📜 <strong>FileMarket.site Terms of Usage:</strong> By placing an order, you agree to these fair usage and digital licensing guidelines.
              </div>

              <div className="space-y-3">
                <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>1. Lifetime License Rights (লাইফটাইম ব্যবহারের অধিকার)</span>
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  All digital products purchased from FileMarket grant you a lifetime non-exclusive license for personal or commercial projects without recurring subscription fees.
                </p>

                <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 pt-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>2. Redistribution Prohibition (পুনরায় পাবলিকলি শেয়ার সম্পূর্ণ নিষিদ্ধ)</span>
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Reselling, re-distributing, or publicly sharing raw master Google Drive locker links without prior authorization is strictly prohibited and will result in access revocation.
                </p>

                <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 pt-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>3. Instant Delivery Guarantee</span>
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Upon bKash/Nagad payment verification, instant Google Drive download access is activated automatically.
                </p>
              </div>
            </div>
          )}

          {/* ABOUT & CONTACT */}
          {activeTab === 'contact' && (
            <div className="space-y-4 animate-fadeIn">
              <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-purple-800 dark:text-purple-300 text-xs sm:text-sm font-medium leading-relaxed">
                📞 <strong>About FileMarket.site &amp; Contact:</strong> Bangladesh&apos;s premier automated digital assets marketplace.
              </div>

              <div className="space-y-3">
                <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Marketplace Overview</span>
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  FileMarket.site is founded and operated by Joy Barmon (Lead Digital Architect). We curate, verify, and host top-tier digital assets including 4K video bundles, full-stack programming courses, PC software, PHP scripts, and AI prompt vaults.
                </p>

                <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2 text-xs sm:text-sm">
                  <p><strong>📍 Registered Address:</strong> Bayzid, Chittagong - 4214, Bangladesh</p>
                  <p><strong>💬 Founder WhatsApp:</strong> <a href="https://wa.me/8801673833783" target="_blank" rel="noreferrer" className="text-emerald-600 dark:text-emerald-400 hover:underline font-bold">+8801673833783</a></p>
                  <p><strong>⚡ Support Hours:</strong> 24/7 Automated Delivery &amp; Dedicated WhatsApp Assistance</p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Bottom Action Bar */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            FileMarket.site • Official Verified Policy
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-heading font-extrabold text-xs transition cursor-pointer shadow-md"
          >
            I Understand
          </button>
        </div>

      </div>
    </div>
  );
};
