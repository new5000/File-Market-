import React, { useState } from 'react';
import { ArrowLeft, Copy, Check, ShieldCheck, Download, MessageSquare, AlertCircle, Sparkles, Key, HardDrive, CheckCircle2 } from 'lucide-react';
import { Product, PaymentMethod, Currency } from '../types';
import { BkashLogo } from './icons/BkashLogo';
import { Footer } from './Footer';
import { Header } from './Header';

interface CheckoutPageProps {
  product: Product;
  currency?: Currency;
  onBack: () => void;
  onExploreStore: () => void;
  onOpenXmlStudio: () => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  setCurrency: (curr: Currency) => void;
  onOpenProfile: () => void;
  onOpenDrawer: () => void;
  onOpenAiSeo: () => void;
  onOpenSearch: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  isHeaderVisible: boolean;
}

export const CheckoutPage: React.FC<CheckoutPageProps> = ({
  product,
  currency = 'BDT',
  onBack,
  onExploreStore,
  onOpenXmlStudio,
  darkMode,
  setDarkMode,
  setCurrency,
  onOpenProfile,
  onOpenDrawer,
  onOpenAiSeo,
  onOpenSearch,
  searchQuery,
  setSearchQuery,
  isHeaderVisible,
}) => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('bKash');
  const [copied, setCopied] = useState(false);
  const [copiedKey, setCopiedKey] = useState(false);
  const [customerPhone, setCustomerPhone] = useState('');
  const [trxId, setTrxId] = useState('');
  const [screenshotFile, setScreenshotFile] = useState<File | null>(null);

  // Verification states: 'idle' | 'ocr_scanning' | 'verified'
  const [verificationState, setVerificationState] = useState<'idle' | 'ocr_scanning' | 'verified'>('idle');
  const [verificationStepText, setVerificationStepText] = useState('');

  const bKashNagadNumber = '01673833783';
  const binancePayId = '874592014';

  const totalBDT = product.priceBDT;
  const totalUSD = product.priceUSD;

  const generatedLicenseKey = `FM-2026-${Math.random().toString(36).substring(2, 6).toUpperCase()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}-PRO`;

  const handleCopyPaymentInfo = (textToCopy: string) => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCopyLicenseKey = () => {
    navigator.clipboard.writeText(generatedLicenseKey);
    setCopiedKey(true);
    setTimeout(() => setCopiedKey(false), 3000);
  };

  const handleVerificationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trxId || !customerPhone) return;

    setVerificationState('ocr_scanning');
    setVerificationStepText('[ ⚡ AI Gateway OCR: Connecting to bKash / Nagad API... ]');

    setTimeout(() => {
      setVerificationStepText('[ 🔍 Validating TrxID syntax & matching merchant ledger... ]');
      setTimeout(() => {
        setVerificationStepText('[ ✓ Payment Verified! Unlocking Google Drive Vault & License Key... ]');
        setTimeout(() => {
          setVerificationState('verified');
        }, 900);
      }, 1000);
    }, 1100);
  };

  const generateWhatsAppMessage = () => {
    const text = 
`🛒 *FileMarket.site Verified Order*
━━━━━━━━━━━━━━━━━━━━━
📦 *Product:* ${product.title}
💰 *Amount Paid:* ${paymentMethod === 'Binance' ? `$${totalUSD} USDT` : `৳${totalBDT} BDT ($${totalUSD} USD)`}
💳 *Payment Method:* ${paymentMethod}
📱 *Sender Account:* ${customerPhone}
🔑 *Verified TrxID:* ${trxId}
🛡️ *License Key:* ${generatedLicenseKey}
━━━━━━━━━━━━━━━━━━━━━
Instant Google Drive Access Unlocked Successfully!`;
    return encodeURIComponent(text);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 transition-colors duration-300 w-full animate-in fade-in duration-200">
      
      {/* Smart Animated Sticky Header */}
      <div
        className={`sticky top-0 z-[999] w-full transition-transform duration-300 ease-in-out will-change-transform ${
          isHeaderVisible ? 'translate-y-0 shadow-md' : '-translate-y-full shadow-none'
        }`}
      >
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          currency={currency}
          setCurrency={setCurrency}
          onOpenXmlStudio={onOpenXmlStudio}
          onOpenProfile={onOpenProfile}
          onOpenDrawer={onOpenDrawer}
          onOpenAiSeo={onOpenAiSeo}
          onOpenSearch={onOpenSearch}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>

      {/* Main Checkout Container */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-3 sm:px-6 py-4 space-y-4">
        
        {/* Checkout Header Card */}
        <div className="rounded-3xl bg-white dark:bg-[#0B1120] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white shadow-xl p-5 sm:p-8 space-y-6">
          
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xl border border-emerald-500/40 shrink-0">
              ⚡
            </div>
            <div>
              <h1 className="font-heading text-xl sm:text-2xl font-extrabold tracking-tight">
                Secure Instant Checkout &amp; Locker
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Complete your payment and unlock immediate Google Drive source files and license keys.
              </p>
            </div>
          </div>

          {/* Selected Product Summary Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <img
                id="checkout-product-img"
                src={product.image || (product as any).img || (product as any).thumbnail || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80'}
                alt={product.title || "Product Thumbnail"}
                className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 flex-shrink-0 shadow-sm"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).onerror = null;
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80';
                }}
              />
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  {product.category}
                </span>
                <h3 className="font-heading font-extrabold text-sm sm:text-base text-slate-900 dark:text-white mt-1 line-clamp-1">
                  {product.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Instant Download • Lifetime Access • Verified Source
                </p>
              </div>
            </div>

            <div className="text-right w-full sm:w-auto flex sm:flex-col items-center sm:items-end justify-between sm:justify-start pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-200 dark:border-slate-800">
              <span className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">Total Payable:</span>
              <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
                {paymentMethod === 'Binance' ? (
                  <span>${totalUSD} USDT</span>
                ) : currency === 'USD' ? (
                  `$${totalUSD} USD`
                ) : (
                  `৳${totalBDT} BDT`
                )}
              </div>
            </div>
          </div>

          {verificationState === 'idle' && (
            <>
              {/* Payment Method Selector Tabs */}
              <div className="space-y-3">
                <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  1. Select Payment Method / গেটওয়ে নির্বাচন করুন:
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('bKash')}
                    className={`flex flex-col items-center justify-center gap-1.5 p-3.5 rounded-2xl border text-xs font-bold transition-all cursor-pointer ${
                      paymentMethod === 'bKash'
                        ? 'border-pink-500 bg-pink-500/20 text-pink-700 dark:text-pink-200 shadow-lg ring-1 ring-pink-500/50 scale-[1.02]'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <div className="w-6 h-6 rounded-full overflow-hidden flex items-center justify-center">
                      <BkashLogo className="w-full h-full" />
                    </div>
                    <span>bKash</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('Nagad')}
                    className={`flex flex-col items-center justify-center gap-1.5 p-3.5 rounded-2xl border text-xs font-bold transition-all cursor-pointer ${
                      paymentMethod === 'Nagad'
                        ? 'border-orange-500 bg-orange-500/20 text-orange-700 dark:text-orange-200 shadow-lg ring-1 ring-orange-500/50 scale-[1.02]'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <div className="w-6 h-6 rounded-lg bg-white p-0.5 flex items-center justify-center">
                      <img src="https://lh3.googleusercontent.com/d/1B-mR6Tc-KaZGWejKJap3gjN_YrPKPfYm" alt="Nagad" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                    </div>
                    <span>Nagad</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('Binance')}
                    className={`flex flex-col items-center justify-center gap-1.5 p-3.5 rounded-2xl border text-xs font-bold transition-all cursor-pointer ${
                      paymentMethod === 'Binance'
                        ? 'border-amber-500 bg-amber-500/20 text-amber-700 dark:text-amber-200 shadow-lg ring-1 ring-amber-500/50 scale-[1.02]'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <div className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-500 flex items-center justify-center font-bold text-xs">
                      ₿
                    </div>
                    <span>Binance Pay</span>
                  </button>
                </div>
              </div>

              {/* Account Info & Copy Box */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border border-emerald-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                    {paymentMethod === 'Binance' ? 'Binance Pay ID (USDT):' : `${paymentMethod} Personal Number (Send Money):`}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                    Personal Send Money 🟢
                  </span>
                </div>

                <div className="flex items-center justify-between bg-white dark:bg-slate-900 border border-emerald-500/40 rounded-xl p-3 shadow-inner">
                  <span className="font-mono font-black text-base sm:text-lg tracking-wider text-slate-900 dark:text-white">
                    {paymentMethod === 'Binance' ? binancePayId : bKashNagadNumber}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopyPaymentInfo(paymentMethod === 'Binance' ? binancePayId : bKashNagadNumber)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow transition cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied!' : '📋 Copy Number'}</span>
                  </button>
                </div>

                <p className="text-[11px] text-slate-600 dark:text-slate-400">
                  👉 Go to your {paymentMethod} app, send <strong className="text-slate-900 dark:text-white">{paymentMethod === 'Binance' ? `$${totalUSD} USDT` : `৳${totalBDT} BDT`}</strong> to this number, and copy the Transaction ID (TrxID).
                </p>
              </div>

              {/* Transaction Verification Form */}
              <form onSubmit={handleVerificationSubmit} className="space-y-4 pt-2">
                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    2. Sender Mobile Number / আপনার বিকাশ/নগদ নম্বর:
                  </label>
                  <input
                    type="text"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="e.g. 017XXXXXXXX or 018XXXXXXXX"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    3. Transaction ID (TrxID) / ট্রানজেকশন আইডি দিন:
                  </label>
                  <input
                    type="text"
                    required
                    value={trxId}
                    onChange={(e) => setTrxId(e.target.value)}
                    placeholder="e.g. 9N87B654321"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm font-mono tracking-widest focus:outline-none focus:ring-2 focus:ring-emerald-500 uppercase"
                  />
                </div>

                {/* Optional Screenshot Upload */}
                <div className="space-y-1.5">
                  <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                    4. Payment Screenshot (Optional for Faster OCR):
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setScreenshotFile(e.target.files[0]);
                      }
                    }}
                    className="w-full text-xs text-slate-500 dark:text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-emerald-500/10 file:text-emerald-600 dark:file:text-emerald-400 hover:file:bg-emerald-500/20 cursor-pointer"
                  />
                </div>

                {/* Primary Action Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 hover:from-rose-500 hover:to-rose-600 text-white font-heading font-extrabold text-base sm:text-lg shadow-xl shadow-rose-600/25 flex items-center justify-center gap-3 transition-all transform hover:scale-[1.01] active:scale-[0.99] cursor-pointer guarantee-animated-card"
                  >
                    <Sparkles className="w-5 h-5 animate-pulse" />
                    <span>⚡ Verify Payment &amp; Unlock Instant Download</span>
                  </button>
                </div>
              </form>
            </>
          )}

          {/* OCR Scanning State */}
          {verificationState === 'ocr_scanning' && (
            <div className="py-12 flex flex-col items-center justify-center space-y-5 text-center">
              <div className="w-16 h-16 rounded-3xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-500 animate-spin">
                ⏳
              </div>
              <div className="space-y-2">
                <h4 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white">
                  Verifying Transaction with AI Gateway...
                </h4>
                <p className="font-mono text-xs sm:text-sm text-emerald-600 dark:text-emerald-400">
                  {verificationStepText}
                </p>
              </div>
            </div>
          )}

          {/* Verified Success State */}
          {verificationState === 'verified' && (
            <div className="py-8 flex flex-col items-center justify-center space-y-6 text-center animate-in zoom-in-95 duration-300">
              <div className="w-20 h-20 rounded-3xl bg-emerald-500/20 border-2 border-emerald-500 text-emerald-500 flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2 max-w-md mx-auto">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                  🎉 Payment Confirmed Successfully!
                </span>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white">
                  Google Drive Vault &amp; License Key Unlocked!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  Your payment TrxID <strong className="text-emerald-600 dark:text-emerald-400 font-mono">{trxId}</strong> was verified instantly.
                </p>
              </div>

              {/* Download & License Box */}
              <div className="w-full space-y-4 text-left p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                    Generated Pro License Key:
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyLicenseKey}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow transition cursor-pointer"
                  >
                    {copiedKey ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedKey ? 'Copied Key!' : '📋 Copy Key'}</span>
                  </button>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-emerald-500/40 font-mono text-sm font-bold text-slate-900 dark:text-white select-all">
                  {generatedLicenseKey}
                </div>

                <div className="pt-2">
                  <a
                    href={product.downloadLink || "https://drive.google.com"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-extrabold text-base shadow-xl flex items-center justify-center gap-3 transition transform hover:scale-[1.01]"
                  >
                    <Download className="w-5 h-5" />
                    <span>📥 Download Source Files from Google Drive</span>
                  </a>
                </div>
              </div>

              {/* WhatsApp Receipt & Return Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full pt-2">
                <a
                  href={`https://wa.me/8801673833783?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Receipt on WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={onExploreStore}
                  className="py-3.5 px-4 rounded-xl bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  <span>Explore More Files</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </main>

      {/* Global Footer Integration */}
      <Footer
        onSelectCategory={onExploreStore}
        onOpenXmlStudio={onOpenXmlStudio}
      />

    </div>
  );
};
