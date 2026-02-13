// pages/movies/sci-fi/[id].js
// COLLECTION: TOP 10 SCI-FI MOVIES (Filmiway Golden Standard)
// VISUALS: Cosmic Scale / Deep Space / High Contrast
// DATA SOURCE: utils/sciFiMovieData.js

import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, Play, X, User, Twitter, Hash, Send, 
  Film, Rocket, Sparkles, Zap, Brain, Activity, Theater 
} from 'lucide-react';

// ✅ SHARED COMPONENTS
import InternalCollectionsSection from '../../../components/InternalCollectionsSection';
import CinematicBackground from '../../../components/CinematicBackground';
import MovieDetailsSection from '../../../components/MovieDetailsSection';
import TMDBAttribution from '../../../components/TMDBAttribution';

// ✅ IMPORT CUSTOM SCI-FI DATA
import { 
  SCI_FI_MOVIES,
  COMPLETE_SCI_FI_DETAILS,
  SENSITIVE_TIMELINES,
  SCI_FI_FAQS,
  TMDB_CONFIG
} from '../../../utils/sciFiMovieData';

// ✅ CUSTOM INSIGHTS FOR THIS COLLECTION (Matches "Why It's Spectacular")
const MOVIE_INSIGHTS = {
  '2001: A Space Odyssey': 'The ultimate cinematic Rorschach test. Kubrick stripped away the explanation to leave only the experience, creating the gold standard for cosmic awe.',
  'Blade Runner': 'A tech-noir cathedral. It invented the visual language of the future—decaying, wet, and neon-lit—while asking the most human question: "Do I have a soul?"',
  'The Matrix': 'It didn\'t just change visual effects with Bullet Time; it changed the cultural conversation about reality. A perfect fusion of philosophy, anime aesthetics, and gun-fu.',
  'Alien': 'A haunted house movie in space. It introduced the most terrifying creature design in history and stripped sci-fi of its glamour, leaving only industrial grit and survival.',
  'Interstellar': 'Nolan\'s love letter to science. It visualizes the un-visualizable (black holes, tesseracts) while anchoring the cosmic scale in a deeply intimate father-daughter story.',
  'Terminator 2: Judgment Day': 'The blockbuster perfected. It pioneered CGI liquid metal effects while delivering a tight, relentless chase movie with a surprisingly emotional core.',
  'Inception': 'A heist film set in the architecture of the mind. It turned complex exposition into a thrill ride, treating dreams not as hazy fantasies but as rigorous, constructible realities.',
  'Arrival': 'Sci-fi for the linguist. It argues that communication is the ultimate weapon and time is a circle. A rare intellectual puzzle that lands with a massive emotional impact.',
  'Star Wars: Episode V - The Empire Strikes Back': 'The greatest sequel ever made. It deepened the mythology, darkened the tone, and delivered cinema\'s most iconic plot twist, expanding a fun adventure into a tragedy.',
  'Blade Runner 2049': 'A miracle of a sequel. It respects the mystery of the original while expanding its world with staggering, colossal visuals that make the audience feel physically small.'
};

const COLORS = {
  accent: '#0ea5e9',      // Cyan Blue (Sci-Fi Standard)
  accentLight: '#7dd3fc', 
  bgPrimary: '#000000', 
  bgCard: 'rgba(11, 11, 11, 0.85)', 
  textPrimary: '#ffffff', 
  textSecondary: '#e0f2fe', 
  textMuted: '#94a3b8', 
  textDisabled: '#0369a1',
  borderLight: 'rgba(14, 165, 233, 0.25)',
  borderAccent: 'rgba(14, 165, 233, 0.5)'
};

// --- HELPER FUNCTIONS ---
const getTMDBImage = (path, size = 'large') => {
  if (!path) return null;
  const sizeCode = TMDB_CONFIG.POSTER_SIZES[size] || 'original';
  return `${TMDB_CONFIG.IMAGE_BASE_URL}/${sizeCode}${path}`;
};

const getSciFiInsight = (title) => {
  return MOVIE_INSIGHTS[title] || 'A visionary sci-fi film that pushes the boundaries of imagination and scale.';
};

// --- COMPONENTS ---

// 1. OPTIMIZED BANNER
const OptimizedBanner = ({ movie, richData, tmdbData, trailer, isMobile }) => {
  const [showTrailer, setShowTrailer] = useState(false);
  const [countdown, setCountdown] = useState(4);
  const [hasClosedTrailer, setHasClosedTrailer] = useState(false);
  const timerRef = useRef(null);

  // Merge Data for visuals
  const backdropPath = tmdbData?.backdrop_path;
  const posterPath = tmdbData?.poster_path;

  const bannerImage = backdropPath ? getTMDBImage(backdropPath, 'original') : null;
  const posterImage = posterPath ? getTMDBImage(posterPath, 'medium') : null;

  const insight = getSciFiInsight(movie?.Title);
  // ✅ MAP DATA: 'cosmicScale' from sciFiMovieData becomes 'Spectacular Level'
  const spectacularLevel = richData?.cosmicScale || 90; 

  const mobileHeroCSS = `
  @media (max-width: 767px) {
    .mobile-hero-row { display: flex; flex-direction: row; align-items: flex-start; width: 100vw; max-width: 100vw; gap: 10px; margin: 0; padding: 0 8px; }
    .mobile-hero-poster { width: 38vw; min-width: 106px; border-radius: 12px; overflow: hidden; box-shadow: 0 3px 14px #0007; margin: 0; flex-shrink: 0; }
    .mobile-hero-poster img { width: 100%; height: auto; border-radius: 12px; display: block; }
    .mobile-psych-card { background: linear-gradient(135deg, #020617 0%, #0f172a 100%); border-radius: 12px; box-shadow: 0 2px 12px #0006; margin: 0; flex: 1; border-left: 4px solid #0ea5e9; display: flex; flex-direction: column; justify-content: flex-start; padding: 10px 10px 10px 12px; min-height: 110px; position: relative; }
    .mobile-psych-row { display: flex; align-items: flex-start; gap: 7px; }
    .mobile-psych-icon { min-width: 24px; min-height: 24px; color: #38bdf8; margin-top: 2px; }
    .mobile-psych-title { font-size: 15px; font-weight: bold; color: #38bdf8; margin-bottom: 1px; line-height: 1.12; }
    .mobile-psych-desc { font-size: 12.3px; color: #e0f2fe; line-height: 1.36; margin-top: 2px; }
  }`;

  useEffect(() => {
    if (!isMobile && trailer && !showTrailer && !hasClosedTrailer) {
      timerRef.current = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) { clearInterval(timerRef.current); setShowTrailer(true); return 0; }
          return prev - 1;
        });
      }, 1000);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isMobile, trailer, showTrailer, hasClosedTrailer]);

  const handleCloseTrailer = () => { setShowTrailer(false); setHasClosedTrailer(true); if (timerRef.current) clearInterval(timerRef.current); };
  const handlePlayClick = () => { setShowTrailer(true); setHasClosedTrailer(false); };

  return (
    <motion.div className="relative w-full overflow-hidden mb-6 sm:mb-8 mx-0 sm:mx-4 lg:mx-6 rounded-none sm:rounded-3xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <style>{mobileHeroCSS}</style>
      <div className="relative h-[300px] sm:h-[400px] lg:h-[600px]">
        <AnimatePresence mode="wait">
          {showTrailer && trailer ? (
            <motion.div key="trailer" className="absolute inset-0 rounded-none sm:rounded-3xl overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
              <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full" />
              <button onClick={handleCloseTrailer} className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 sm:p-3 rounded-full backdrop-blur-md shadow-xl transition-all duration-300 hover:scale-110 z-50" style={{ backgroundColor: `${COLORS.bgPrimary}DD`, color: COLORS.textPrimary }}><X className="w-4 h-4 sm:w-5 sm:h-5" /></button>
            </motion.div>
          ) : (
            <motion.div key="image" className="absolute inset-0 rounded-none sm:rounded-3xl overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
              <div className="relative w-full h-full">
                {bannerImage ? <Image src={bannerImage} alt={`${movie?.Title} banner`} fill priority sizes="100vw" quality={90} className="object-cover" /> : <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: COLORS.bgCard }}><Film className="w-16 h-16 sm:w-24 sm:h-24" style={{ color: COLORS.textMuted }} /></div>}
                <div className="absolute inset-0 z-10" style={{ background: `linear-gradient(to bottom, transparent 0%, transparent 60%, ${COLORS.bgPrimary}80 85%, ${COLORS.bgPrimary} 100%)` }} />
              </div>
              {trailer && (
                <motion.div className="absolute inset-0 flex items-center justify-center z-20" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1, duration: 0.8 }}>
                  <motion.button onClick={handlePlayClick} className="p-4 sm:p-6 rounded-full backdrop-blur-lg shadow-2xl transition-all duration-300" style={{ backgroundColor: `${COLORS.bgPrimary}BB`, border: `2px solid ${COLORS.textPrimary}`, color: COLORS.textPrimary }} whileHover={{ scale: 1.15, backgroundColor: `${COLORS.accent}DD`, borderColor: COLORS.accent }} whileTap={{ scale: 0.95 }}><Play className="w-6 h-6 sm:w-8 sm:h-8 ml-1" /></motion.button>
                </motion.div>
              )}
              {!isMobile && trailer && !showTrailer && !hasClosedTrailer && countdown > 0 && (
                <motion.div className="absolute top-6 sm:top-8 right-6 sm:right-8 backdrop-blur-md rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border z-30" style={{ backgroundColor: `${COLORS.bgPrimary}CC`, borderColor: `${COLORS.accent}66`, color: COLORS.accent }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-medium"><div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse" style={{ backgroundColor: COLORS.accent }}></div>Trailer in {countdown}s</div>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {isMobile ? (
        <div className="mobile-hero-row">
          <div className="mobile-hero-poster">{posterImage ? <Image src={posterImage} alt={`${movie?.Title} poster`} width={320} height={480} className="w-full h-auto" priority /> : <div style={{ background: COLORS.bgCard, width: '100%', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Theater style={{ color: COLORS.textMuted }} /></div>}</div>
          <div className="mobile-psych-card">
            <div className="mobile-psych-row"><Rocket className="mobile-psych-icon" /><div><div className="mobile-psych-title">Spectacular Level</div></div></div>
            <div className="mobile-psych-desc"><strong>{spectacularLevel}/100</strong> - {insight.substring(0, 80)}...</div>
          </div>
        </div>
      ) : (
        <div className="relative px-3 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 z-20" style={{ backgroundColor: COLORS.bgPrimary }}>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 items-start">
            <motion.div className="flex-shrink-0 relative w-24 sm:w-48 md:w-56 lg:w-80 mx-auto sm:mx-0" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}>
              <div className="relative" style={{ aspectRatio: '2/3' }}>
                {posterImage ? <Image src={posterImage} alt={`${movie?.Title} poster`} fill sizes="(max-width: 640px) 96px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 320px" quality={85} className="object-cover rounded-lg sm:rounded-xl shadow-2xl" /> : <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: COLORS.bgCard, borderRadius: '12px' }}><Theater style={{ color: COLORS.textMuted }} /></div>}
              </div>
            </motion.div>
            <motion.div className="flex-1 w-full min-w-0" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0, duration: 0.8 }}>
              <motion.div className="relative rounded-xl sm:rounded-2xl overflow-hidden p-4 sm:p-6 lg:p-8 backdrop-blur-sm" style={{ background: `linear-gradient(135deg, rgba(14, 165, 233, 0.15) 0%, rgba(2, 6, 23, 0.5) 100%)`, border: `1px solid ${COLORS.borderLight}`, boxShadow: `0 8px 32px rgba(14, 165, 233, 0.2)` }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }}>
                <div className="absolute top-0 left-0 right-0 h-0.5 sm:h-1" style={{ background: `linear-gradient(90deg, transparent, ${COLORS.accent}, transparent)` }} />
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                  <motion.div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl flex-shrink-0" style={{ background: `linear-gradient(135deg, ${COLORS.accent}20, ${COLORS.accent}10)`, border: `1px solid ${COLORS.accent}40` }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}><Rocket className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" style={{ color: COLORS.accent }} /></motion.div>
                  <div className="min-w-0 flex-1"><h2 className="text-sm sm:text-base lg:text-xl xl:text-2xl font-bold leading-tight" style={{ color: COLORS.accent }}>Why It's Spectacular</h2><p className="text-xs sm:text-sm hidden sm:block" style={{ color: COLORS.textMuted }}>Cosmic Scale: {spectacularLevel}/100</p></div>
                </div>
                <div className="relative pl-4 sm:pl-6 border-l-2" style={{ borderColor: `${COLORS.accent}40` }}>
                  <motion.div className="absolute -left-1.5 sm:-left-2 top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full" style={{ backgroundColor: COLORS.accent }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                  <p className="text-xs sm:text-sm lg:text-base xl:text-lg leading-relaxed font-normal break-words" style={{ color: COLORS.textSecondary, lineHeight: '1.8' }}>{insight}</p>
                </div>
                <motion.div className="mt-4 sm:mt-6 h-0.5 sm:h-1 rounded-full" style={{ background: `linear-gradient(90deg, ${COLORS.accent}60, transparent)`, width: '40%' }} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.5, duration: 0.8 }} />
              </motion.div>
            </motion.div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

// 2. BACK BUTTON
const SmartBackButton = () => {
    const handleBackClick = () => { if (typeof window !== 'undefined') window.location.href = '/movies/sci-fi'; }; // Adjusted Route
    return (
        <motion.button onClick={handleBackClick} className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 flex items-center gap-2 px-3 sm:px-4 py-2 backdrop-blur-md rounded-lg transition-all duration-300 shadow-xl text-xs sm:text-sm" style={{ backgroundColor: `${COLORS.bgPrimary}F2`, border: `1px solid ${COLORS.borderLight}` }} whileHover={{ scale: 1.02, x: -2 }} whileTap={{ scale: 0.98 }} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} onMouseEnter={(e) => e.currentTarget.style.borderColor = COLORS.borderAccent} onMouseLeave={(e) => e.currentTarget.style.borderColor = COLORS.borderLight}>
            <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: COLORS.accent }} /><span className="font-medium" style={{ color: COLORS.accent }}>Back to Collection</span>
        </motion.button>
    );
};

// 3. AUTHOR CREDIT
const AuthorCreditSection = () => (
    <motion.section className="pt-6 sm:pt-8 mt-12 sm:mt-16" style={{ borderTop: `1px solid ${COLORS.borderLight}` }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0, duration: 0.8 }}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-3"><User className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: COLORS.textDisabled }} /><div><p className="text-xs sm:text-sm" style={{ color: COLORS.textMuted }}>Curated by <span className="font-medium" style={{ color: COLORS.textSecondary }}>Filmiway Editorial Team</span></p><p className="text-xs" style={{ color: COLORS.textDisabled }}>Deep Dive into Sci-Fi</p></div></div>
            <div className="flex items-center gap-3 sm:gap-4"><span className="text-xs sm:text-sm" style={{ color: COLORS.textDisabled }}>Share:</span><div className="flex gap-2 sm:gap-3">{[Twitter, Hash, Send].map((Icon, i) => (<button key={i} className="p-1.5 sm:p-2 rounded-full transition-colors" style={{ color: COLORS.textDisabled }} onMouseEnter={(e) => { e.currentTarget.style.color = COLORS.textSecondary; e.currentTarget.style.backgroundColor = COLORS.bgCard; }} onMouseLeave={(e) => { e.currentTarget.style.color = COLORS.textDisabled; e.currentTarget.style.backgroundColor = 'transparent'; }}><Icon className="w-3 h-3 sm:w-4 sm:h-4" /></button>))}</div></div>
        </div>
    </motion.section>
);

// 4. BREADCRUMB
const SciFiBreadcrumb = ({ movie }) => (
    <motion.nav className="mb-6 sm:mb-8 px-3 sm:px-4 lg:px-6 pb-3 sm:pb-4" style={{ borderBottom: `1px solid ${COLORS.borderLight}` }} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm" style={{ color: COLORS.textMuted }}>
            <Link href="/movies/sci-fi" className="transition-all duration-300 truncate" style={{ color: COLORS.textMuted }} onMouseEnter={(e) => e.currentTarget.style.color = COLORS.accent} onMouseLeave={(e) => e.currentTarget.style.color = COLORS.textMuted}>Top 10 Sci-Fi Movies</Link>
            <ChevronLeft size={14} className="flex-shrink-0" style={{ color: COLORS.textDisabled, transform: 'rotate(180deg)' }} /><span className="font-medium truncate" style={{ color: `${COLORS.accent}B3` }}>{movie.Title}</span>
        </div>
    </motion.nav>
);

// 5. FILM GRAIN
const SubtleFilmGrain = () => (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.005]"><div className="w-full h-full bg-repeat" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.3'/%3E%3C/svg%3E")`, backgroundSize: '60px 60px' }} /></div>
);

// ✅ JSON-LD SCHEMA GENERATOR
const generateMovieSchema = (movie, tmdbData) => {
  const richData = COMPLETE_SCI_FI_DETAILS[movie.tmdbId];
  const sensitiveData = SENSITIVE_TIMELINES[movie.tmdbId];
  const faqs = SCI_FI_FAQS[movie.Title] || [];

  // Calculate Peak Moment
  let peakStats = "Peak info unavailable.";
  if (richData?.scenes && richData.scenes.length > 0) {
    const peakScene = richData.scenes.reduce((prev, current) => 
      (current.intensity > prev.intensity) ? current : prev
    );
    peakStats = `[PEAK SPECTACLE] Maximum Intensity (${peakScene.intensity}/100) hits at minute ${peakScene.time}: "${peakScene.label}".`;
  }

  // Schema Metrics
  const intensityStats = `
    [FILMIWAY METRIC]
    - Cosmic Scale: ${richData?.cosmicScale || 0}/100
    - Complexity Level: ${richData?.complexityLevel || 'Medium'}
  `;

  const dnaStats = richData?.dna 
    ? `[GENRE DNA] ${Object.entries(richData.dna).map(([genre, val]) => `${genre}: ${val}%`).join(', ')}`
    : 'Sci-Fi';

  const contentWarnings = sensitiveData?.scenes 
    ? `[CONTENT ADVISORY] ${sensitiveData.scenes.map(s => 
        (s.start && s.end) 
          ? `${s.type}: ${s.start}-${s.end} (${s.severity})` 
          : `${s.type} (${s.severity})` 
      ).join(' | ')}.`
    : 'Standard sci-fi content.';

  const fullDescription = `
    ${tmdbData?.overview || richData?.synopsis || movie.description || "A defining sci-fi masterpiece."}
    
    --- DETAILED ANALYSIS ---
    ${peakStats} 
    ${intensityStats}
    ${dnaStats}
    ${contentWarnings}
    
    Ranking: #${movie.rank} in All-Time Top 10 Sci-Fi.
  `.replace(/\s+/g, ' ').trim();

  const movieSchema = {
    "@context": "https://schema.org",
    "@type": "Movie",
    "name": movie.Title,
    "description": fullDescription, 
    "datePublished": movie.year.toString(),
    "image": tmdbData?.poster_path ? getTMDBImage(tmdbData.poster_path, 'medium') : undefined,
    "director": { "@type": "Person", "name": "Director" }, // Can be enhanced if Director data is added to basic list
    "review": {
      "@type": "Review",
      "author": { "@type": "Organization", "name": "Filmiway" },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": richData?.rating || 8.0, 
        "bestRating": "10",
        "worstRating": "1"
      }
    },
    "genre": richData?.dna ? Object.keys(richData.dna) : ["Sci-Fi"],
    "keywords": "Top 10 Sci-Fi Movies, Best Sci-Fi of All Time, " + (richData?.dna ? Object.keys(richData.dna).join(", ") : ""),
    "url": `https://filmiway.com/movies/sci-fi/${movie.imdbID}`, 
    "author": { "@type": "Organization", "name": "Filmiway", "url": "https://filmiway.com" }
  };

  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer }
    }))
  } : null;

  return { movieSchema, faqSchema };
};

// --- MAIN PAGE COMPONENT ---
const TopSciFiMoviePage = ({ movie, tmdbData }) => {
    const richData = COMPLETE_SCI_FI_DETAILS[movie.tmdbId];
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            sessionStorage.setItem('fromCollection', 'top-10-sci-fi-movies');
            sessionStorage.setItem('fromCollectionName', 'Top 10 Sci-Fi Movies');
        }
    }, []);

    const trailer = tmdbData?.videos?.results?.find(video => video.type === 'Trailer' && video.site === 'YouTube');
    const cleanSEOTitle = `${movie.Title} (${movie.year}) - Top 10 Sci-Fi Movies of All Time | Filmiway`;
    const cleanSEODesc = `${movie.Title} (${movie.year}) - A defining sci-fi masterpiece. Ranked #${movie.rank} in the Filmiway Top 10 Sci-Fi Collection.`;

    const { movieSchema, faqSchema } = generateMovieSchema(movie, tmdbData);

    return (
        <div className="min-h-screen text-white relative overflow-hidden" style={{ backgroundColor: COLORS.bgPrimary }}>
            <Head>
                <title>{cleanSEOTitle}</title>
                <meta name="description" content={cleanSEODesc} />
                <link rel="canonical" href={`https://filmiway.com/movies/sci-fi/${movie.imdbID}`} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
                <meta name="robots" content="index, follow" />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(movieSchema) }} />
                {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
                
                {/* Social Meta */}
                <meta property="og:title" content={cleanSEOTitle} />
                <meta property="og:description" content={cleanSEODesc} />
                <meta property="og:image" content={tmdbData?.poster_path ? getTMDBImage(tmdbData.poster_path, 'medium') : ''} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={cleanSEOTitle} />
                <meta name="twitter:image" content={tmdbData?.poster_path ? getTMDBImage(tmdbData.poster_path, 'medium') : ''} />
            </Head>

            <SubtleFilmGrain />
            <div className="absolute inset-0"><CinematicBackground /></div>
            <SmartBackButton />
            
            <div className="relative z-10 pt-10 sm:pt-12 lg:pt-16">
                <h1 className="sr-only">{cleanSEOTitle}</h1>
                <SciFiBreadcrumb movie={movie} />
                
                <div className="container mx-auto px-0 pb-16 sm:pb-24 lg:pb-32 max-w-7xl">
                    <OptimizedBanner movie={movie} tmdbData={tmdbData} richData={richData} trailer={trailer} isMobile={isMobile} />
                    
                    <motion.div 
                        id="watch" 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.5 }} 
                        className="space-y-8 sm:space-y-12 px-3 sm:px-4 lg:px-6"
                    >
                        {/* ✅ Passing custom props to reuse your Details Section */}
                        <MovieDetailsSection movie={movie} fromSciFiCollection={true} /> 
                    </motion.div>
                    
                    <div className="px-3 sm:px-4 lg:px-6">
                        <InternalCollectionsSection currentSlug="best-sci-fi-movies-on-hbo-max" />
                        <TMDBAttribution />
                        <AuthorCreditSection />
                    </div>
                </div>
            </div>
        </div>
    );
};

// --- DATA FETCHING ---

export async function getStaticPaths() {
    // Generate paths based on the SCI_FI_MOVIES list (using imdbID as the param)
    const paths = SCI_FI_MOVIES.map((movie) => ({ params: { id: movie.imdbID } }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    try {
        // Find the movie in your local Golden Standard list
        const movie = SCI_FI_MOVIES.find((m) => m.imdbID === params.id);
        if (!movie) return { notFound: true };

        // Fetch fresh data from TMDB for images/trailers
        const tmdbResponse = await fetch(
            `${TMDB_CONFIG.BASE_URL}/movie/${movie.tmdbId}?api_key=${TMDB_CONFIG.API_KEY}&append_to_response=videos`
        );
        const tmdbData = tmdbResponse.ok ? await tmdbResponse.json() : null;

        return {
            props: { movie, tmdbData },
        };
    } catch (error) {
        console.error('Error fetching TMDB data:', error);
        return {
            props: {
                movie: SCI_FI_MOVIES.find((m) => m.imdbID === params.id),
                tmdbData: null,
            },
        };
    }
}

export default TopSciFiMoviePage;