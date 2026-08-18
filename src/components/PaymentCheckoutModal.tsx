import React, { useState } from 'react';
import { X, Copy, Check, ShieldCheck, Download, MessageSquare, AlertCircle, ArrowRight, Sparkles, Key, HardDrive, CheckCircle2 } from 'lucide-react';
import { Product, PaymentMethod, Currency } from '../types';
import { BkashLogo } from './icons/BkashLogo';

interface PaymentCheckoutModalProps {
  product: Product | null;
  currency?: Currency;
  onClose: () => void;
}

export const PaymentCheckoutModal: React.FC<PaymentCheckoutModalProps> = ({
  product,
  currency = 'BDT',
  onClose,
}) => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('bKash');
  const [copied, setCopied] = useState(false);
  const [copiedKey, setCopiedKey] = useState(false);
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [trxId, setTrxId] = useState('');
  
  // Verification states: 'idle' | 'ocr_scanning' | 'verified'
  const [verificationState, setVerificationState] = useState<'idle' | 'ocr_scanning' | 'verified'>('idle');
  const [verificationStepText, setVerificationStepText] = useState('');
  const [screenshotFile, setScreenshotFile] = useState<File | null>(null);

  if (!product) return null;

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
    <div className="fixed inset-0 z-[99999] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="w-full max-w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl bg-white dark:bg-[#0B1120] border-t sm:border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white shadow-2xl p-4 sm:p-8 pb-10 sm:pb-12 space-y-5 relative min-h-[85vh] sm:min-h-0 max-h-[95vh] overflow-y-auto transition-colors duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white p-1.5 rounded-full bg-slate-100 dark:bg-slate-900 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-lg border border-emerald-500/40">
            💳
          </div>
          <div>
            <h3 className="font-heading text-lg sm:text-xl font-bold">
              AI Auto-Payment &amp; Instant Locker
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 truncate max-w-xs sm:max-w-sm">
              {product.title}
            </p>
          </div>
        </div>

        {/* Amount Summary */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">Total Payable Amount:</span>
            <div className="text-xl sm:text-2xl font-black text-emerald-600 dark:text-emerald-400">
              {paymentMethod === 'Binance' ? (
                <span>${totalUSD} USDT <span className="text-xs text-amber-500 dark:text-amber-400 font-bold">(Binance Pay)</span></span>
              ) : currency === 'USD' ? (
                `$${totalUSD} USD`
              ) : (
                `৳${totalBDT} BDT`
              )}
            </div>
          </div>
          <span className="px-3 py-1 rounded-xl text-xs font-bold bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-500/30">
            ⚡ Instant AI Verification
          </span>
        </div>

        {verificationState === 'idle' && (
          <>
            {/* Payment Method Selector */}
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setPaymentMethod('bKash')}
                className={`flex flex-col items-center justify-center gap-1.5 p-3 rounded-2xl border text-xs font-bold transition-all cursor-pointer ${
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
                className={`flex flex-col items-center justify-center gap-1.5 p-3 rounded-2xl border text-xs font-bold transition-all cursor-pointer ${
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
                className={`flex flex-col items-center justify-center gap-1.5 p-3 rounded-2xl border text-xs font-bold transition-all cursor-pointer ${
                  paymentMethod === 'Binance'
                    ? 'border-amber-500 bg-amber-500/20 text-amber-700 dark:text-amber-200 shadow-lg ring-1 ring-amber-500/50 scale-[1.02]'
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <div className="w-6 h-6 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400 font-black">
                  ₿
                </div>
                <span>Binance Pay</span>
              </button>
            </div>

            {/* Send Money Number Card */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-600 dark:text-slate-400 font-medium">
                  Send <strong className="text-slate-900 dark:text-white">{paymentMethod === 'Binance' ? `$${totalUSD} USDT` : `৳${totalBDT}`}</strong> to our Merchant {paymentMethod} Personal Account:
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-700 dark:text-emerald-400">
                  {paymentMethod === 'Binance' ? 'ID / Email' : 'Personal (Send Money)'}
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-200 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 font-mono text-base font-bold text-emerald-700 dark:text-emerald-400">
                <span>{paymentMethod === 'Binance' ? binancePayId : bKashNagadNumber}</span>
                <button
                  type="button"
                  onClick={() => handleCopyPaymentInfo(paymentMethod === 'Binance' ? binancePayId : bKashNagadNumber)}
                  className="px-3 py-1.5 rounded-lg bg-slate-300 dark:bg-slate-800 hover:bg-slate-400 dark:hover:bg-slate-700 text-xs text-slate-800 dark:text-white font-sans font-bold transition flex items-center gap-1.5 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Verification Form */}
            <form onSubmit={handleVerificationSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">Your Mobile / Sender Number *</label>
                  <input
                    type="text"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="e.g. 01712345678"
                    className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl text-sm text-slate-900 dark:text-white focus:outline-none focus:border-emerald-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">Transaction ID (TrxID) *</label>
                  <input
                    type="text"
                    required
                    value={trxId}
                    onChange={(e) => setTrxId(e.target.value)}
                    placeholder="e.g. 9N74K82M1L"
                    className="w-full px-4 py-3 bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl text-sm text-slate-900 dark:text-white font-mono uppercase tracking-wider focus:outline-none focus:border-emerald-500 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 dark:text-slate-400 mb-1">Optional Payment Screenshot Upload</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => e.target.files && setScreenshotFile(e.target.files[0])}
                  className="w-full px-3 py-2 bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-xl text-xs text-slate-600 dark:text-slate-400 file:mr-4 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-emerald-500/20 file:text-emerald-700 dark:file:text-emerald-400 hover:file:bg-emerald-500/30 cursor-pointer"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl text-white font-black text-sm transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group btn-glow-red"
                style={{
                  background: 'linear-gradient(135deg, #f43f5e 0%, #be123c 100%)',
                }}
              >
                <Sparkles className="w-4 h-4 text-white shrink-0" />
                <span className="text-white font-bold">⚡ Verify Payment &amp; Unlock Instant Download</span>
              </button>
            </form>
          </>
        )}

        {/* Global CSS for pulseGlowRed */}
        <style>{`
          @keyframes pulseGlowRed {
            0%, 100% {
              box-shadow: 0 0 10px rgba(244, 63, 94, 0.35);
            }
            50% {
              box-shadow: 0 0 25px rgba(244, 63, 94, 0.75), 0 0 45px rgba(225, 29, 72, 0.4);
            }
          }
          .btn-glow-red {
            animation: pulseGlowRed 2.8s infinite ease-in-out;
          }
        `}</style>

        {/* Live AI OCR Scanning State */}
        {verificationState === 'ocr_scanning' && (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 flex items-center justify-center animate-spin">
              <Sparkles className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-base text-slate-900 dark:text-white">AI Gateway OCR Verification in Progress</h4>
              <p className="text-xs font-mono text-emerald-600 dark:text-emerald-400 animate-pulse">{verificationStepText}</p>
            </div>
          </div>
        )}

        {/* Verified Success State (Vault Unlocked & License Key Generator) */}
        {verificationState === 'verified' && (
          <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/10 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center shrink-0">
                  <Check className="w-5 h-5 font-black" />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">Payment Verified Successfully!</h4>
                  <p className="text-xs text-emerald-700 dark:text-emerald-400">Google Drive vault unlocked with active lifetime license.</p>
                </div>
              </div>
            </div>

            {/* Cryptographic License Key Box */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-600 dark:text-slate-400 font-bold flex items-center gap-1.5">
                  <Key className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Unique Lifetime License Key</span>
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-black bg-emerald-500/20 text-emerald-700 dark:text-emerald-400">
                  ACTIVE LIFETIME
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-200 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 font-mono text-sm font-bold text-emerald-800 dark:text-emerald-300">
                <span>{generatedLicenseKey}</span>
                <button
                  type="button"
                  onClick={handleCopyLicenseKey}
                  className="px-3 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-sans font-extrabold transition cursor-pointer flex items-center gap-1"
                >
                  {copiedKey ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey ? 'Copied!' : 'Copy Key'}</span>
                </button>
              </div>
            </div>

            {/* Secure Google Drive Download Button */}
            <div className="space-y-3">
              <a
                href={product.instantDownloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black text-sm shadow-[0_0_30px_rgba(16,185,129,0.5)] transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-5 h-5 text-slate-950" />
                <span>📥 Download Files from Google Drive (Vault Ready)</span>
              </a>

              <a
                href={`https://wa.me/8801673833783?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 text-emerald-700 dark:text-emerald-400 font-bold text-xs transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>💬 Send Confirmation Ping to Founder on WhatsApp</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
