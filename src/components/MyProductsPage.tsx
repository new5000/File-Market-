import React, { useState } from 'react';
import { ArrowLeft, Download, Key, Check, Package, ExternalLink, ShieldCheck, ShoppingBag } from 'lucide-react';
import { PRODUCTS_DATA } from '../data/products';
import { Product, Currency } from '../types';

interface MyProductsPageProps {
  isOpen: boolean;
  onClose: () => void;
  currency: Currency;
  onExploreStore: () => void;
}

export const MyProductsPage: React.FC<MyProductsPageProps> = ({
  isOpen,
  onClose,
  currency,
  onExploreStore,
}) => {
  const [copiedKeyId, setCopiedKeyId] = useState<string | null>(null);

  if (!isOpen) return null;

  // Simulate purchased items (defaults to top 2 premium items or items saved in localStorage)
  const purchasedProducts: Product[] = PRODUCTS_DATA.slice(0, 3);

  const handleCopyKey = (id: string, keyText: string) => {
    navigator.clipboard.writeText(keyText);
    setCopiedKeyId(id);
    setTimeout(() => setCopiedKeyId(null), 2500);
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
            <ShoppingBag className="w-4 h-4" />
          </div>
          <span className="font-bold text-sm hidden sm:inline">My Purchased Assets</span>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-4xl w-full mx-auto p-4 sm:p-8 space-y-6 my-auto">
        
        {/* Header Summary Card */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950/30 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Customer Vault & High-Speed Downloads</span>
            </div>
            <h1 className="text-2xl font-black text-white">My Purchased Products ({purchasedProducts.length})</h1>
            <p className="text-xs text-slate-400 mt-1">All files are verified authentic, virus-scanned, and come with lifetime updates.</p>
          </div>

          <button
            onClick={() => {
              onClose();
              onExploreStore();
            }}
            className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-extrabold text-xs transition shadow-lg cursor-pointer shrink-0"
          >
            Explore More Products
          </button>
        </div>

        {/* Purchased Items List */}
        {purchasedProducts.length === 0 ? (
          <div className="text-center py-16 px-4 bg-slate-900/60 rounded-3xl border border-slate-800 space-y-4">
            <Package className="w-16 h-16 text-slate-600 mx-auto" />
            <h3 className="text-lg font-bold text-white">No purchased digital assets found yet.</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">Explore our high-performance software bundles, AI scripts, and e-books to start building.</p>
            <button
              onClick={() => {
                onClose();
                onExploreStore();
              }}
              className="px-6 py-2.5 rounded-xl bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition cursor-pointer"
            >
              Explore Marketplace
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {purchasedProducts.map((product) => {
              const licenseKey = `FM-PRO-${product.id.toUpperCase()}-2026-X8K9`;
              const isCopied = copiedKeyId === product.id;

              return (
                <div 
                  key={product.id}
                  className="p-5 sm:p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xl"
                >
                  <div className="flex items-start sm:items-center gap-4">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border border-slate-700/80 shrink-0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                          {product.category}
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                          Active Lifetime
                        </span>
                      </div>
                      <h3 className="font-bold text-base text-white">{product.title}</h3>
                      <p className="text-xs text-slate-400 line-clamp-1">{product.description}</p>
                      <div className="text-[11px] text-slate-500 font-medium">
                        Purchased on: February 17, 2026 • Verified Order #FM-982{product.id}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-slate-800">
                    <button
                      onClick={() => handleCopyKey(product.id, licenseKey)}
                      className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-bold text-slate-200 hover:text-white transition flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span className="text-emerald-400 font-extrabold">Key Copied!</span>
                        </>
                      ) : (
                        <>
                          <Key className="w-4 h-4 text-emerald-400" />
                          <span>Copy License Key</span>
                        </>
                      )}
                    </button>

                    <a
                      href={product.instantDownloadLink || "https://drive.google.com"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs transition flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download via Drive</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
};
