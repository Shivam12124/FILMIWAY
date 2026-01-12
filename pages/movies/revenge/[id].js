// pages/movies/revenge/[id].js - H1 SEO FIX + HYDRATION FIX + REVENGE SCHEMA ✅
// VISUALS: Minimalist (Banner + Details Only)
// SCHEMA: Maximalist (Hidden Intensity, DNA, and FAQs for Bots)

import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Play, X, User, Twitter, Hash, Send, Film, Award } from 'lucide-react';
import InternalCollectionsSection from '../../../components/InternalCollectionsSection';
import CinematicBackground from '../../../components/CinematicBackground';
import MovieDetailsSection from '../../../components/MovieDetailsSection';
import TMDBAttribution from '../../../components/TMDBAttribution';

// ✅ IMPORT REVENGE DATA
import { 
  REVENGE_MOVIES, 
  COMPLETE_MOVIE_DATA, 
  SENSITIVE_TIMELINES,
  REVENGE_MOVIE_FAQS // Assuming this exists in your data file
} from '../../../utils/revengeMovieData';

const COLORS = {
  accent: '#EF4444', 
  accentLight: '#F87171', 
  bgPrimary: '#0B0B0C', 
  bgCard: 'rgba(55, 65, 81, 0.3)',
  textPrimary: '#FFFFFF', 
  textSecondary: '#D1D5DB', 
  textMuted: '#9CA3AF', 
  textDisabled: '#6B7280',
  borderAccent: 'rgba(239, 68, 68, 0.2)', 
  borderLight: 'rgba(107, 114, 128, 0.2)',
};

const getTMDBImage = (path, size = 'w1280') =>
  path ? `https://image.tmdb.org/t/p/${size}${path}` : undefined;

const getRevengeInsight = (title) => {
  switch (title) {
    case 'Oldboy': return 'A masterpiece of psychological revenge cinema. This Korean classic presents a deeply disturbing mystery wrapped in relentless brutality and one of cinema\'s most shocking, unforgettable twists that redefines the entire narrative.';
    case 'Gladiator': return 'An epic tale of a fallen general who transforms from slave to arena champion. The film captures the grandeur of ancient Rome while delivering an intensely personal, satisfying arc of vengeance against imperial tyranny.';
    case 'Unforgiven': return 'A deconstructive Western masterpiece that strips away Hollywood myths to reveal the true, unglamorous cost of violence. This is a meditation on aging, mortality, and the haunting psychological toll of revenge.';
    case 'Braveheart': return 'A sweeping historical epic of personal betrayal transformed into national liberation. Wallace\'s journey from grieving widower to legendary freedom fighter represents vengeance on an epic, civilization-changing scale.';
    case 'The Prestige': return 'A brilliantly crafted rivalry between two magicians consumed by obsession and revenge. Every meticulous detail serves the shocking reveal, making this a cerebral, intricately plotted masterpiece of deception.';
    case 'The Revenant': return 'An absolutely brutal survival epic where revenge fuels an impossible 200-mile journey through unforgiving wilderness. The film\'s raw naturalism and visceral cinematography create an unforgettable tale of determination and vengeance.';
    case 'Kill Bill: Vol. 2': return 'Tarantino\'s completion of The Bride\'s roaring rampage of revenge. The second volume adds emotional depth and shocking revelations to the stylized, hyper-violent journey toward final reckoning with Bill.';
    case 'John Wick': return 'A modern action masterpiece that proves vengeance can fuel elegantly choreographed violence. Keanu Reeves\' understated performance masks a relentless, methodical descent into justified rage and balletic brutality.';
    case 'I Saw the Devil': return 'An unflinching Korean extreme revenge thriller exploring moral degradation and the corruption that vengeance inflicts on the righteous. The cycle of torture and violence becomes psychologically devastating and utterly mesmerizing.';
    case 'The Count of Monte Cristo': return 'The quintessential revenge narrative of wrongful imprisonment and meticulous comeuppance. The transformation from naive sailor to wealthy, mysterious count perfectly embodies the slow-burn satisfaction of systematic vengeance.';
    default: return 'A compelling revenge narrative defined by its character depth, thematic complexity, and the psychological journey toward vengeance. This film captures the raw, primal human need for justice and retribution.';
  }
};

// ✅ JSON-LD SCHEMA GENERATOR - REVENGE EDITION (CUSTOM METRICS)
const generateMovieSchema = (movie, movieData, currentMovieYear) => {
  // Fallback to empty object if data missing to prevent crash
  const data = COMPLETE_MOVIE_DATA?.[movie.tmdbId] || {};
  const sensitiveData = SENSITIVE_TIMELINES?.[movie.tmdbId] || {};
  const faqs = REVENGE_MOVIE_FAQS?.[movie.Title] || [];

  // 1. CALCULATE THE PEAK MOMENT (New Feature)
  let peakStats = "Peak info unavailable.";
  if (data?.scenes && data.scenes.length > 0) {
    const peakScene = data.scenes.reduce((prev, current) => 
      (current.intensity > prev.intensity) ? current : prev
    );
    peakStats = `[PEAK MOMENT] Maximum Intensity (${peakScene.intensity}/100) hits at minute ${peakScene.time}: "${peakScene.label}".`;
  }

  // 2. METRICS (Customized for Revenge Genre)
  const intensityStats = `
    [FILMIWAY METRICS]
    - Revenge Intensity: ${data?.revengeIntensity || 90}/100
    - Moral Complexity: ${data?.moralComplexity || 85}/100
    - Visceral Impact: ${data?.visceralImpact || 88}/100
  `;

  const dnaStats = data?.dna 
    ? `[GENRE DNA] ${Object.entries(data.dna).map(([genre, val]) => `${genre}: ${val}%`).join(', ')}`
    : 'Action Thriller';

  // ✅ CONTENT WARNINGS WITH TIMESTAMPS
  const contentWarnings = sensitiveData?.scenes 
    ? `[CONTENT ADVISORY] ${sensitiveData.scenes.map(s => 
        (s.start && s.end) 
          ? `${s.type}: ${s.start}-${s.end} (${s.severity})` 
          : `${s.type} (${s.severity})`
      ).join(' | ')}.`
    : 'No specific content warnings listed.';

  const faqText = faqs.length > 0
    ? `[COMMON QUESTIONS] ${faqs.map(f => `Q: ${f.question} A: ${f.answer}`).join(' | ')}`
    : '';

  // 3. COMPILE FULL DESCRIPTION
  const fullDescription = `
    ${data?.synopsis || movie.synopsis || "A brutal revenge thriller."}
    
    --- DETAILED ANALYSIS ---
    ${peakStats} 
    ${intensityStats}
    ${dnaStats}
    ${contentWarnings}
    ${faqText}
    
    Ranking: #${movie.rank || 'N/A'} in Best Revenge Movies.
  `.replace(/\s+/g, ' ').trim();

  // 4. MAIN MOVIE SCHEMA
  const movieSchema = {
    "@context": "https://schema.org",
    "@type": "Movie",
    "name": movie.Title || movie.title,
    "description": fullDescription, 
    "datePublished": currentMovieYear,
    "image": movieData?.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : undefined,
    "director": {
      "@type": "Person",
      "name": data?.director || "Unknown"
    },
    "actor": data?.cast?.map(actor => ({
      "@type": "Person",
      "name": actor
    })) || [],
    
    "review": {
      "@type": "Review",
      "author": {
        "@type": "Organization",
        "name": "Filmiway"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": data?.rating || 8.0, 
        "bestRating": "10",
        "worstRating": "1"
      }
    },

    "genre": data?.dna ? Object.keys(data.dna) : ["Action", "Thriller"],
    "keywords": "Revenge Movie, Retribution, Justice, " + (data?.themes ? data.themes.join(", ") : ""),
    "url": `https://filmiway.com/movies/revenge/${movie.imdbID}`,
    "author": {
      "@type": "Organization",
      "name": "Filmiway",
      "url": "https://filmiway.com"
    }
  };

  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  } : null;

  return { movieSchema, faqSchema };
};

const OptimizedBanner = ({ movie, movieData, trailer, isMobile }) => {
  const [showTrailer, setShowTrailer] = useState(false);
  const [countdown, setCountdown] = useState(4);
  const [hasClosedTrailer, setHasClosedTrailer] = useState(false);
  const timerRef = useRef(null);

  const bannerImage = movieData?.backdrop_path
      ? getTMDBImage(movieData?.backdrop_path, 'w1280')
      : movieData?.backdrop || movie.backdrop || getTMDBImage(movie?.backdrop_path, 'w1280');

  const posterImage = movieData?.poster_path
      ? getTMDBImage(movieData?.poster_path, 'w500')
      : movieData?.poster || movie.poster || getTMDBImage(movie?.poster_path, 'w500');

  const insight = getRevengeInsight(movie.title || movie.Title);

  const mobileHeroCSS = `
  @media (max-width: 767px) {
    .mobile-hero-row { display: flex; flex-direction: row; align-items: flex-start; width: 100vw; max-width: 100vw; gap: 10px; margin: 0; padding: 0 8px; }
    .mobile-hero-poster { width: 38vw; min-width: 106px; border-radius: 12px; overflow: hidden; box-shadow: 0 3px 14px #0007; margin: 0; flex-shrink: 0; }
    .mobile-hero-poster img { width: 100%; height: auto; border-radius: 12px; display: block; }
    .mobile-revenge-card { background: #1a1a1c; border-radius: 12px; box-shadow: 0 2px 12px #0006; margin: 0; flex: 1; border-left: 4px solid #EF4444; display: flex; flex-direction: column; justify-content: flex-start; padding: 10px 10px 10px 12px; min-height: 110px; position: relative; }
    .mobile-revenge-row { display: flex; align-items: flex-start; gap: 7px; }
    .mobile-revenge-icon { min-width: 24px; min-height: 24px; color: #EF4444; margin-top: 2px; }
    .mobile-revenge-title { font-size: 15px; font-weight: bold; color: #F87171; margin-bottom: 1px; line-height: 1.12; }
    .mobile-revenge-desc { font-size: 12.3px; color: #ededed; line-height: 1.36; margin-top: 2px; }
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
                {bannerImage ? <Image src={bannerImage} alt={`${movie?.title} banner`} fill priority sizes="100vw" quality={90} className="object-cover" /> : <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: COLORS.bgCard }}><Film className="w-16 h-16 sm:w-24 sm:h-24" style={{ color: COLORS.textDisabled }} /></div>}
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
          <div className="mobile-hero-poster">{posterImage ? <Image src={posterImage} alt={`${movie.title} poster`} width={320} height={480} className="w-full h-auto" priority /> : <div style={{ background: COLORS.bgCard, width: '100%', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Film style={{ color: COLORS.textMuted }} /></div>}</div>
          <div className="mobile-revenge-card">
            <div className="mobile-revenge-row"><Award className="mobile-revenge-icon" /><div><div className="mobile-revenge-title">Revenge Index</div></div></div>
            <div className="mobile-revenge-desc"><strong>{movie.revengeIntensity || 90}</strong> - {insight}</div>
          </div>
        </div>
      ) : (
        <div className="relative px-3 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 z-20" style={{ backgroundColor: COLORS.bgPrimary }}>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 items-start">
            <motion.div className="flex-shrink-0 relative w-24 sm:w-48 md:w-56 lg:w-80 mx-auto sm:mx-0" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}>
              <div className="relative" style={{ aspectRatio: '2/3' }}>
                <Image src={posterImage} alt={`${movie.title} poster`} fill sizes="(max-width: 640px) 96px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 320px" quality={85} className="object-cover rounded-lg sm:rounded-xl shadow-2xl" />
              </div>
            </motion.div>
            <motion.div className="flex-1 w-full min-w-0" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0, duration: 0.8 }}>
              <motion.div className="relative rounded-xl sm:rounded-2xl overflow-hidden p-4 sm:p-6 lg:p-8 backdrop-blur-sm" style={{ background: `linear-gradient(135deg, ${COLORS.bgCard} 0%, rgba(15, 15, 20, 0.5) 100%)`, border: `1px solid ${COLORS.borderLight}`, boxShadow: `0 8px 32px rgba(0, 0, 0, 0.4)` }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }}>
                <div className="absolute top-0 left-0 right-0 h-0.5 sm:h-1" style={{ background: `linear-gradient(90deg, transparent, ${COLORS.accent}, transparent)` }} />
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                  <motion.div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl flex-shrink-0" style={{ background: `linear-gradient(135deg, ${COLORS.accent}20, ${COLORS.accent}10)`, border: `1px solid ${COLORS.accent}40` }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}><Award className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" style={{ color: COLORS.accent }} /></motion.div>
                  <div className="min-w-0 flex-1"><h2 className="text-sm sm:text-base lg:text-xl xl:text-2xl font-bold leading-tight" style={{ color: COLORS.accent }}>Why This Revenge is Essential</h2><p className="text-xs sm:text-sm hidden sm:block" style={{ color: COLORS.textMuted }}>Revenge Intensity: {movie.revengeIntensity || 90}/100</p></div>
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

const RevengeBackButton = () => {
  const handleBackClick = () => { if (typeof window !== "undefined") window.location.href = "/collection/best-revenge-movies"; };
  return (
    <motion.button onClick={handleBackClick} className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 flex items-center gap-2 px-3 sm:px-4 py-2 backdrop-blur-md rounded-lg transition-all duration-300 shadow-xl text-xs sm:text-sm" style={{ backgroundColor: `${COLORS.bgPrimary}F2`, border: `1px solid ${COLORS.borderLight}` }} whileHover={{ scale: 1.02, x: -2 }} whileTap={{ scale: 0.98 }} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} onMouseEnter={(e) => (e.currentTarget.style.borderColor = COLORS.borderAccent)} onMouseLeave={(e) => (e.currentTarget.style.borderColor = COLORS.borderLight)}>
      <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: COLORS.accent }} /><span className="font-medium" style={{ color: COLORS.accent }}>Back to Collection</span>
    </motion.button>
  );
};

const RevengeMoviePage = ({ movie }) => {
  const [movieData, setMovieData] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    const fetchMovieData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movie.tmdbId}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&append_to_response=videos`);
        const data = await response.json();
        setMovieData(data);
      } catch (error) { console.error("Failed to fetch movie data:", error); } finally { setIsLoading(false); }
    };
    fetchMovieData();
    return () => window.removeEventListener("resize", checkMobile);
  }, [movie.tmdbId]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("fromRevengeCollection", "true");
      sessionStorage.removeItem("fromDramaCollection");
    }
  }, []);

  const trailer = movieData?.videos?.results?.find((video) => video.type === "Trailer" && video.site === "YouTube");
  
  // ✅ USE THE SCHEMA GENERATOR
  const currentMovieYear = movie.year || movie.Year;
  const { movieSchema, faqSchema } = generateMovieSchema(movie, movieData, currentMovieYear);

  if (isLoading) return <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: COLORS.bgPrimary }}><div className="text-center"><div className="w-12 h-12 sm:w-16 sm:h-16 border-4 rounded-full animate-spin mx-auto mb-4" style={{ borderColor: COLORS.borderLight, borderTopColor: COLORS.accent }}></div><p className="text-sm sm:text-base" style={{ color: COLORS.textMuted }}>Loading...</p></div></div>;

  return (
    <div className="min-h-screen text-white relative overflow-hidden" style={{ backgroundColor: COLORS.bgPrimary }}>
      <Head>
        {/* 🔥 FIX 1: Hydration-safe Title */}
        <title>{`${movie.title || movie.Title} (${currentMovieYear}) - Best Revenge Film | Filmiway`}</title>
        <meta name="description" content={`${movie.title || movie.Title} - ${movie.synopsis?.substring(0, 150)}... Includes exact timestamps and revenge intensity metrics.`} />
        <link rel="canonical" href={`https://filmiway.com/movies/revenge/${movie.imdbID}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(movieSchema) }} />
        {faqSchema && (<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />)}
      </Head>

      <div className="absolute inset-0"><CinematicBackground /></div>
      <RevengeBackButton />

      <div className="relative z-10 pt-10 sm:pt-12 lg:pt-16">
        
        {/* 🔥 FIX 2: Hidden H1 for SEO */}
        <h1 className="sr-only">{`${movie.title || movie.Title} (${currentMovieYear}) - Best Revenge Movies`}</h1>

        <OptimizedBanner movie={movie} movieData={movieData} trailer={trailer} isMobile={isMobile} />
        
        <div className="container mx-auto px-0 pb-16 sm:pb-24 lg:pb-32 max-w-7xl">
          <motion.div id="watch" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2, duration: 0.8 }} className="space-y-8 sm:space-y-12 px-3 sm:px-4 lg:px-6">
            <MovieDetailsSection movie={{ ...movie, Title: movie.title || movie.Title }} fromRevengeCollection={true} />
          </motion.div>
        
          {/* Footer Section */}
          <div className="px-3 sm:px-4 lg:px-6">
             <InternalCollectionsSection currentSlug="best-revenge-movies" />
             <TMDBAttribution />
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticPaths() {
  const paths = REVENGE_MOVIES.map((movie) => ({ params: { id: movie.imdbID } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const movie = REVENGE_MOVIES.find((m) => m.imdbID === params.id);
  if (!movie) return { notFound: true };
  return { props: { movie } };
}

export default RevengeMoviePage;