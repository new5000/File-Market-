import React from 'react';
import { Users, ShieldCheck, Zap } from 'lucide-react';

export const TrustMetricsBar: React.FC = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 p-3 sm:p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md shadow-lg shadow-black/20 text-white">
        
        {/* Stat 1: 1,500+ Verified Creators */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/40 border border-slate-800/60 hover:border-emerald-500/30 transition-all group">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.15)] group-hover:scale-105 transition-transform">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-black text-sm sm:text-base text-white">1,500+</span>
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">Verified</span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium leading-tight">
              Happy Bangladeshi Creators
            </p>
          </div>
        </div>

        {/* Stat 2: 100% Virus-Free */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/40 border border-slate-800/60 hover:border-cyan-500/30 transition-all group">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.15)] group-hover:scale-105 transition-transform">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-black text-sm sm:text-base text-white">100% Virus-Free</span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium leading-tight">
              Tested &amp; Malware Scanned
            </p>
          </div>
        </div>

        {/* Stat 3: Instant Delivery */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-950/40 border border-slate-800/60 hover:border-amber-500/30 transition-all group">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(245,158,11,0.15)] group-hover:scale-105 transition-transform">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-black text-sm sm:text-base text-white">Instant Delivery</span>
              <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">Auto Unlock</span>
            </div>
            <p className="text-[11px] text-slate-400 font-medium leading-tight">
              bKash • Nagad • Google Drive
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
