// components/TopGuidesSection.js - ELEGANT BANNER LINKING TO TOP 25 COLLECTION 🚀
import React from 'react';
import Link from 'next/link';
import { Flame, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function TopGuidesSection() {
  return (
    <section className="w-full max-w-5xl mx-auto my-12 p-6 sm:p-8 bg-gradient-to-r from-[#0b0c10] via-[#141622] to-[#0b0c10] border border-yellow-500/30 rounded-2xl shadow-[0_0_35px_rgba(234,179,8,0.12)] relative overflow-hidden">
      <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400 text-xs font-extrabold uppercase tracking-widest">
            <Flame size={14} className="animate-pulse text-yellow-400" />
            <span>High-Demand Directory</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Top 25 Most Visited Parents Guides & Skip Timestamps
          </h3>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl">
            Explore Filmiway’s most searched movie guides — including Fifty Shades, 365 Days, Oppenheimer, Basic Instinct & 21 more.
          </p>
        </div>

        <Link
          href="/collection/top-25-parents-guides"
          className="group inline-flex items-center gap-3 px-6 py-3.5 bg-yellow-500 hover:bg-yellow-400 text-black font-extrabold text-sm rounded-xl transition-all duration-300 shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 shrink-0"
        >
          <span>View Top 25 Collection</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}
