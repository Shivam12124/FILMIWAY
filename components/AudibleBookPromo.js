import React, { useState, useEffect } from 'react';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import {
  getTimezoneCountrySync,
  detectCountryCode,
  getPrimeTrialUrl,
  trackPrimeTrialClick
} from '../utils/amazonAffiliate';

/**
 * PrimeVideoTrialPromo (formerly AudibleBookPromo)
 * Sleek, low-friction Amazon Prime Video 30-Day Free Trial card in 1980s cinema aesthetic.
 * Uses a native anchor link so X/Twitter in-app browsers, middle-click, and link previews work reliably.
 */
const PrimeVideoTrialPromo = ({
  movie,
  movieSlug,
  movieTitle,
  compact = true,
  embedded = false,
  className = ""
}) => {
  const [userCountry, setUserCountry] = useState('US');

  const slug = movieSlug || movie?.slug || '';
  const title = movieTitle || movie?.Title || movie?.title || 'this movie';

  useEffect(() => {
    let isCancelled = false;
    // Instant sync timezone guess on mount, refined asynchronously via IP geolocation
    setUserCountry(getTimezoneCountrySync());

    detectCountryCode().then((code) => {
      if (!isCancelled && code) {
        setUserCountry(code);
      }
    });

    return () => { isCancelled = true; };
  }, []);

  const targetUrl = getPrimeTrialUrl(userCountry);

  const handlePrimeClick = () => {
    trackPrimeTrialClick({
      movieSlug: slug,
      movieTitle: title,
      country: userCountry,
      targetUrl,
      placement: embedded ? 'where_to_watch_prime_card' : 'standalone_prime_card'
    });
  };

  return (
    <div
      className={`relative rounded-2xl border border-amber-900/40 bg-gradient-to-br from-[#140e06] via-[#0d0904] to-[#070502] shadow-xl shadow-black/80 overflow-hidden group ${
        embedded ? 'p-4 my-2' : 'p-4 sm:p-5 my-3'
      } ${className}`}
    >
      {/* Subtle top amber accent line (exact match to ExpressVPN's top accent line) */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      <a
        href={targetUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handlePrimeClick}
        className="flex flex-col gap-3.5"
      >
        {/* Content Row: Icon + Full Title + Clear Explanatory Body (1:1 with ExpressVPN card layout) */}
        <div className="flex items-start gap-3.5">
          <div className="h-10 px-2.5 py-1.5 rounded-xl bg-black/70 border border-amber-500/35 shrink-0 flex items-center justify-center shadow-lg shadow-amber-900/30 mt-0.5">
            <img
              src="/logos/prime-video-cinema.svg"
              alt="Prime Video"
              className="h-6 w-auto max-w-[100px] object-contain"
            />
          </div>

          <div className="flex-1 min-w-0">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-amber-400/90 block mb-1">
              Free • Cancel Anytime
            </span>
            <h4 className="text-white text-sm sm:text-base font-bold group-hover:text-amber-400 transition-colors leading-snug break-words">
              Amazon Prime 30-Day Free Trial
            </h4>

            <p className="text-gray-300 text-xs sm:text-[13px] leading-relaxed mt-1 font-normal break-words">
              Instant streaming of thousands of movies & originals. Zero upfront charge with full member perks.
            </p>
          </div>
        </div>

        {/* Full-Width Solid Amber CTA Button: Balanced brightness, 2-line layout & exact same response as ExpressVPN */}
        <div className="flex flex-col items-center justify-center gap-1 px-4 py-3 bg-[#c97a06] hover:bg-[#a86403] text-white rounded-xl shadow-lg shadow-amber-600/30 transition-all border border-amber-500/40 group-hover:scale-[1.01] w-full text-center">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold">
            <span>Watch Free — 30-Day Prime Trial</span>
            <ExternalLink size={14} className="shrink-0" />
          </div>
          <span className="text-[11px] font-medium text-amber-100/90 tracking-wide">
            Zero Upfront Charge • Cancel Online in 1 Click Anytime
          </span>
        </div>

        {/* Reassurance Micro-Footer: Centered clean reassurance without device clutter */}
        <div className="flex items-center justify-center gap-1.5 text-[11px] text-gray-300 pt-2 border-t border-white/[0.06] text-center">
          <ShieldCheck size={13} className="text-emerald-400 shrink-0" />
          <span>Official Amazon Partner • Full Streaming Catalog</span>
        </div>

        {/* Only render standalone disclosure when not embedded inside Where to Watch (avoids duplicate text) */}
        {!embedded && (
          <p className="text-[11px] text-gray-400/80 leading-relaxed text-center pt-1 border-t border-white/[0.06]">
            Starting a trial through our link supports Filmiway at no extra cost to you (it&apos;s 100% free).
          </p>
        )}
      </a>
    </div>
  );
};

// Export as both default and named for total backward-compatibility with existing imports
export default PrimeVideoTrialPromo;
export { PrimeVideoTrialPromo };
