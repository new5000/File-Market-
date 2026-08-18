import React, { useState } from 'react';
import { X, Sparkles, Copy, Check, Wand2, Tag, FileText, Code2, Globe } from 'lucide-react';

interface AiSeoGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiSeoGeneratorModal: React.FC<AiSeoGeneratorModalProps> = ({ isOpen, onClose }) => {
  const [productTitle, setProductTitle] = useState('Premiere Pro 2026 Cinematic LUTs Pack');
  const [focusKeywords, setFocusKeywords] = useState('Color grading, cinematic LUTs, 4K video editing, Premiere Pro');
  const [category, setCategory] = useState('Video Bundles');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedResult, setGeneratedResult] = useState<{
    bengaliDescription: string;
    englishDescription: string;
    bulletPoints: string[];
    metaTags: string;
    jsonLd: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedResult({
        bengaliDescription: `আপনার ভিডিও এডিটিং কাজকে আরও প্রফেশনাল করতে নিয়ে এলাম "${productTitle}"। এটি ১০০% ভেরিফাইড এবং ইনস্ট্যান্ট গুগল ড্রাইভ ডাউনলোড লিংক সহ উপলব্ধ। প্রিমিয়াম কালার গ্রেডিং এবং সিনেমাটিক লুক পেতে আজই ডাউনলোড করুন।`,
        englishDescription: `Transform your video editing workflow instantly with "${productTitle}". Engineered for professional content creators, videographers, and editors looking for ultra-fast rendering and Hollywood-grade output. Includes high-speed Google Drive access and lifetime commercial rights.`,
        bulletPoints: [
          '⚡ 100% Verified Working Files & Direct Google Drive Access',
          '🔥 Optimized for Premiere Pro, After Effects, DaVinci Resolve & Final Cut',
          '🛡️ Lifetime Commercial License for Unlimited Client Projects',
          '📥 Instant Download Delivery within 5 Seconds of Purchase'
        ],
        metaTags: `<meta name="description" content="Download ${productTitle} with instant Google Drive access. ${focusKeywords}. FileMarket.site"/>\n<meta name="keywords" content="${focusKeywords}, FileMarket, video editing assets"/>`,
        jsonLd: `{\n  "@context": "https://schema.org/",\n  "@type": "Product",\n  "name": "${productTitle}",\n  "description": "High performance digital asset for creators.",\n  "brand": { "@type": "Brand", "name": "FileMarket" },\n  "offers": { "@type": "Offer", "priceCurrency": "BDT", "price": "499", "availability": "https://schema.org/InStock" }\n}`
      });
    }, 1000);
  };

  const handleCopyHtml = () => {
    if (!generatedResult) return;
    const htmlSnippet = `
<div class="filemarket-product-post">
  <h2>${productTitle}</h2>
  <p>${generatedResult.englishDescription}</p>
  <p><strong>বাংলা বিবরণ:</strong> ${generatedResult.bengaliDescription}</p>
  <ul>
    ${generatedResult.bulletPoints.map(b => `<li>${b}</li>`).join('\n    ')}
  </ul>
  <div class="download-box" style="background:#0f172a;color:#10b981;padding:20px;border-radius:12px;">
    <h3>⚡ Instant Download Available via Google Drive</h3>
    <a href="https://filemarket.site" target="_blank" style="background:#10b981;color:#030712;padding:12px 24px;border-radius:8px;font-weight:bold;text-decoration:none;display:inline-block;margin-top:10px;">Download Now (৳499 BDT)</a>
  </div>
</div>
${generatedResult.metaTags}
`.trim();

    navigator.clipboard.writeText(htmlSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-[99999] bg-slate-950/90 backdrop-blur-2xl flex items-center justify-center p-4 overflow-y-auto animate-in fade-in zoom-in-95 duration-200">
      <div className="w-full max-w-3xl rounded-3xl bg-slate-900 border border-slate-800 text-white shadow-2xl overflow-hidden relative flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-base text-white">FileMarket AI SEO Generator & Copywriter</h2>
              <p className="text-[11px] text-slate-400">Powered by Gemini AI Engine</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          
          <form onSubmit={handleGenerate} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-slate-400 mb-1">Product Title</label>
                <input
                  type="text"
                  value={productTitle}
                  onChange={(e) => setProductTitle(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1">Focus Keywords (comma separated)</label>
                <input
                  type="text"
                  value={focusKeywords}
                  onChange={(e) => setFocusKeywords(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500 transition"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 mb-1">Target Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500 transition cursor-pointer"
                >
                  <option value="Video Bundles">Video Bundles</option>
                  <option value="Online Courses">Online Courses</option>
                  <option value="E-Books">E-Books</option>
                  <option value="Premium Apps">Premium Apps</option>
                  <option value="AI Prompts">AI Prompts</option>
                  <option value="PHP Scripts">PHP Scripts</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isGenerating}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-black text-sm shadow-[0_0_25px_rgba(16,185,129,0.3)] transition cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                  <span>Generating AI Copy & SEO Schema...</span>
                </>
              ) : (
                <>
                  <Wand2 className="w-4 h-4" />
                  <span>Generate AI Sales Post &amp; SEO Data</span>
                </>
              )}
            </button>
          </form>

          {/* Generated Results Output */}
          {generatedResult && (
            <div className="space-y-4 pt-4 border-t border-slate-800 animate-in fade-in duration-300">
              <div className="flex items-center justify-between">
                <span className="text-xs font-extrabold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  <span>AI Generated Output Ready</span>
                </span>
                <button
                  onClick={handleCopyHtml}
                  className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs transition flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>HTML Snippet Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Formatted HTML (Blogger)</span>
                    </>
                  )}
                </button>
              </div>

              {/* Descriptions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="font-bold text-slate-300 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-emerald-400" />
                    <span>English Sales Copy</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">{generatedResult.englishDescription}</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                  <div className="font-bold text-slate-300 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Bangla Sales Copy (বাংলা বিবরণ)</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed">{generatedResult.bengaliDescription}</p>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="font-bold text-slate-300 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Optimized Bullet Points</span>
                </div>
                <ul className="space-y-1">
                  {generatedResult.bulletPoints.map((bp, i) => (
                    <li key={i} className="text-xs text-slate-400 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Meta & Schema */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 font-mono text-[11px]">
                <div className="font-bold text-slate-300 flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>SEO Meta Tags &amp; JSON-LD Schema</span>
                </div>
                <pre className="p-3 bg-slate-900 rounded-xl text-emerald-300 overflow-x-auto whitespace-pre-wrap">
                  {generatedResult.metaTags}\n\n{generatedResult.jsonLd}
                </pre>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
