import React, { useState, useEffect } from 'react';
import { ExternalLink, Check, ShieldCheck } from 'lucide-react';
import { db } from '../lib/firebase';
import { collection, addDoc, doc, setDoc, increment, serverTimestamp } from 'firebase/firestore';

/**
 * PrimeVideoTrialPromo (formerly AudibleBookPromo)
 * Replaces low-converting audiobook deal with high-converting Amazon Prime Video 30-Day Free Trial.
 * Styled in 1980s cinema aesthetic (Yellow & Black, dignified, no cheesy AI glow).
 * Features official Amazon Prime Video vector logo.
 * Earns $3.00 flat bounty per trial signup + 4% rental/purchase commissions on Amazon US (filmiway-20).
 */
const PrimeVideoTrialPromo = ({ movie, movieSlug, movieTitle, compact = true, className = "" }) => {
  const [userCountry, setUserCountry] = useState('US');

  // Slug & Title resolution
  const slug = movieSlug || movie?.slug || '';
  const title = movieTitle || movie?.Title || movie?.title || 'this movie';

  // Detect user country for international Amazon Storefront routing
  useEffect(() => {
    let isCancelled = false;
    const detectCountry = async () => {
      try {
        const res = await fetch('https://ipinfo.io/json');
        if (res.ok && !isCancelled) {
          const data = await res.json();
          if (data?.country) {
            setUserCountry(data.country.toUpperCase());
          }
        }
      } catch (e) {
        // Fallback silently to US
      }
    };
    detectCountry();
    return () => { isCancelled = true; };
  }, []);

  // International Storefront & Tracking Tag Resolution for Prime Free Trial
  const getPrimeTrialLink = () => {
    const isUK = userCountry === 'GB';
    const isCA = userCountry === 'CA';
    const isIN = userCountry === 'IN';

    // Storefront domains
    const domain = isUK ? 'amazon.co.uk' : isCA ? 'amazon.ca' : isIN ? 'amazon.in' : 'amazon.com';

    // Regional Amazon Affiliate tracking tags (Primary US: filmiway-20)
    const tag = isUK ? 'filmiway09-21' : isCA ? 'filmiway06-20' : isIN ? 'filmiway-21' : 'filmiway-20';

    // Direct Prime 30-Day Free Trial landing page (Triggers $3.00 Bounty)
    return `https://www.${domain}/prime?tag=${tag}`;
  };

  const handlePrimeClick = async () => {
    const targetUrl = getPrimeTrialLink();
    window.open(targetUrl, '_blank', 'noopener,noreferrer');

    try {
      const now = new Date();
      const todayDateStr = now.toISOString().slice(0, 10); // YYYY-MM-DD
      const timeStr = now.toTimeString().slice(0, 8); // HH:MM:SS

      // 1. Log detailed click record with timestamp, country, movie slug & title
      await addDoc(collection(db, 'prime_trial_clicks'), {
        promoType: 'prime_video_trial',
        movieSlug: slug || 'unknown',
        movieTitle: title,
        country: userCountry,
        deal: 'Amazon Prime 30-Day Free Trial ($0.00)',
        bountyValue: '$3.00',
        targetUrl: targetUrl,
        date: todayDateStr,
        time: timeStr,
        timestamp: serverTimestamp(),
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'Unknown'
      });

      // 2. High-level daily dashboard counter: instant at-a-glance daily clicks!
      // In Firebase console, you can see `daily_summary/{todayDateStr}` with total clicks,
      // country breakdown, and the latest movie clicked.
      const dailySummaryRef = doc(db, 'prime_trial_daily_summary', todayDateStr);
      await setDoc(dailySummaryRef, {
        date: todayDateStr,
        totalClicks: increment(1),
        lastClickedMovie: title,
        lastClickedSlug: slug || 'unknown',
        lastClickedCountry: userCountry,
        lastClickedAt: serverTimestamp(),
        [`countries.${userCountry}`]: increment(1)
      }, { merge: true });

    } catch (e) {
      // Non-blocking analytics
    }
  };

  return (
    <aside 
      aria-label="Amazon Prime 30-Day Free Trial"
      className={`w-full bg-[#0a0a0c] rounded-2xl border border-white/10 hover:border-yellow-500/40 p-5 shadow-xl transition-colors ${className}`}
    >
      <div className="flex flex-col gap-4">
        {/* Header: Official Amazon Prime Video Brand Logo + Eyebrow */}
        <div className="flex items-start justify-between gap-3 border-b border-white/[0.08] pb-3.5">
          <div className="flex flex-col">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-yellow-500/90 mb-1">
              For Filmiway Users
            </span>
            <h3 className="text-white text-base sm:text-lg font-bold leading-snug">
              Amazon Prime 30-Day Free Trial
            </h3>
          </div>

          {/* Official Amazon Prime Video Vector Logo */}
          <div className="shrink-0 flex items-center pt-0.5">
            <img 
              src="/logos/prime-video-cinema.svg" 
              alt="Prime Video" 
              className="h-6 sm:h-7 w-auto object-contain"
            />
          </div>
        </div>

        {/* Professional Benefits Breakdown */}
        <div className="space-y-2 text-xs sm:text-[12.5px] text-gray-300">
          <div className="flex items-start gap-2.5">
            <Check size={15} className="text-yellow-400 shrink-0 mt-0.5" />
            <span><strong className="text-white">Watch {title} & More:</strong> Instant streaming of thousands of movies, award-winning originals, and TV series.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <Check size={15} className="text-yellow-400 shrink-0 mt-0.5" />
            <span><strong className="text-white">Cost: $0.00 for 30 Days:</strong> Full membership access with zero upfront charge. Cancel anytime online in 1 click.</span>
          </div>
          <div className="flex items-start gap-2.5">
            <Check size={15} className="text-yellow-400 shrink-0 mt-0.5" />
            <span><strong className="text-white">Full Member Perks:</strong> Free fast delivery on Amazon orders + ad-free music included with your trial.</span>
          </div>
        </div>

        {/* Primary Action Button — Exact Filmiway Yellow Aesthetic */}
        <div className="pt-1 flex flex-col gap-1.5">
          <button
            type="button"
            onClick={handlePrimeClick}
            className="w-full py-3 px-5 rounded-xl bg-yellow-500 hover:bg-yellow-400 text-black font-semibold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 transition-colors shadow-lg shadow-yellow-500/20 cursor-pointer"
          >
            <span>Start 30-Day Free Trial</span>
            <ExternalLink size={15} className="text-black stroke-[2.5]" />
          </button>
          <span className="text-[11px] text-gray-400 text-center tracking-wide">
            Cancel anytime online • 30 days free ($0.00)
          </span>
        </div>

        {/* Reassurance */}
        <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400 pt-1 border-t border-white/[0.06]">
          <ShieldCheck size={13} className="text-yellow-500/90 shrink-0" />
          <span>Official Amazon Partner • Instant Digital Activation</span>
        </div>

        {/* Dignified Disclosure & Support Note (Professional, Not Begging) */}
        <p className="text-[11px] text-gray-400/90 leading-relaxed text-center">
          If you want Filmiway to sustain and support our work, buying or starting a trial through our links earns us a small commission at no extra cost to you (in fact, it&apos;s free).
        </p>
      </div>
    </aside>
  );
};

// Export as both default and named for total backward-compatibility with existing imports
export default PrimeVideoTrialPromo;
export { PrimeVideoTrialPromo };
