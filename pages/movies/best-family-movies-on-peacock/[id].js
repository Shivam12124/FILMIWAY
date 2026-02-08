// pages/collection/best-family-movies-on-peacock/[id].js
// PEACOCK FAMILY MOVIES COLLECTION
// VISUALS: Wholesome/Fun Theme (Yellow/Blue Accents)
// SCHEMA: Maximalist (Hidden Wholesome Score, Fun Factor, and FAQs for Bots)

import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Play, X, User, Twitter, Hash, Send, Film, Heart, Smile, Theater, Sparkles } from 'lucide-react';
import InternalCollectionsSection from '../../../components/InternalCollectionsSection';
import CinematicBackground from '../../../components/CinematicBackground';
import MovieDetailsSection from '../../../components/MovieDetailsSection';
import TMDBAttribution from '../../../components/TMDBAttribution';

// ✅ IMPORT PEACOCK FAMILY DATA
import { 
    COMPLETE_MOVIE_DATABASE, 
    COMPLETE_MOVIE_DATA,
    SENSITIVE_TIMELINES,
    PEACOCK_FAMILY_MOVIE_FAQS 
} from '../../../utils/peacockFamilyMovieData';

const COLORS = {
    accent: '#FACC15', accentLight: '#FEF08A',bgPrimary: '#000000ff', bgCard: 'rgba(11, 11, 11, 0.8)', // Yellow/Slate
    textPrimary: '#FFFFFF', textSecondary: '#E5E7EB', textMuted: '#9CA3AF', textDisabled: '#6B7280',
    borderAccent: 'rgba(250, 204, 21, 0.25)', borderLight: 'rgba(55, 65, 81, 0.5)',
};

// ✅ UPDATED MOVIE YEARS FOR PEACOCK FAMILY
const MOVIE_YEARS = {
    'How to Train Your Dragon': '2010',
    'Harry Potter and the Prisoner of Azkaban': '2004',
    'Puss in Boots: The Last Wish': '2022',
    'Shrek': '2001',
    'How to Train Your Dragon 2': '2014',
    'Despicable Me': '2010',
    'Harry Potter and the Sorcerer\'s Stone': '2001',
    'Abominable': '2019',
    'How to Train Your Dragon: The Hidden World': '2019',
    'Shrek 2': '2004'
};

// ✅ UPDATED MOVIE INSIGHTS FOR PEACOCK FAMILY
const MOVIE_DATA_BY_TITLE = {
    'How to Train Your Dragon': { connection: 'A soaring, emotionally resonant masterpiece about empathy, invention, and the bond between a boy and his dog (dragon).' },
    'Harry Potter and the Prisoner of Azkaban': { connection: 'The turning point of the saga. Darker, richer, and more cinematic, it perfectly captures the messy transition from childhood to adolescence.' },
    'Puss in Boots: The Last Wish': { connection: 'A stunning visual reinvention that tackles deep themes of mortality and legacy while remaining hilarious and action-packed.' },
    'Shrek': { connection: 'The movie that changed animation forever. A brilliant deconstruction of fairy tales that champions self-acceptance over perfection.' },
    'How to Train Your Dragon 2': { connection: 'An epic expansion of the world that isn\'t afraid to tackle loss, leadership, and the heavy responsibilities of growing up.' },
    'Despicable Me': { connection: 'The birth of a modern classic. Beneath the minions and gadgets is a genuinely sweet story about fatherhood softening a hardened heart.' },
    'Harry Potter and the Sorcerer\'s Stone': { connection: 'Pure, unfiltered magic. It captures the wonder of discovery perfectly, introducing a world we all wished we could visit.' },
    'Abominable': { connection: 'A beautiful, musical road trip across China that celebrates nature, family, and the magic of returning home.' },
    'How to Train Your Dragon: The Hidden World': { connection: 'A tear-jerking finale that honors the journey of growing up—specifically the part where we have to let go of what we love most.' },
    'Shrek 2': { connection: 'The rare sequel that surpasses the original. It expands the satire, deepens the romance, and features the best musical climax in animation history.' }
};

const getTMDBImage = (path, size = 'w1280') =>
    path ? `https://image.tmdb.org/t/p/${size}${path}` : undefined;

const getFamilyInsight = (title) => {
    const data = MOVIE_DATA_BY_TITLE[title];
    return data?.connection || 'A heartwarming and entertaining film perfect for the whole family.';
};

// ✅ OPTIMIZED BANNER (Family Theme)
const OptimizedBanner = ({ movie, movieData, trailer, isMobile, richData }) => {
    const [showTrailer, setShowTrailer] = useState(false);
    const [countdown, setCountdown] = useState(4);
    const [hasClosedTrailer, setHasClosedTrailer] = useState(false);
    const timerRef = useRef(null);

    const backdropPath = movieData?.backdrop_path || richData?.backdrop_path || movie?.backdrop_path;
    const posterPath = movieData?.poster_path || richData?.poster_path || movie?.poster_path;

    const bannerImage = backdropPath ? getTMDBImage(backdropPath, 'w1280') : null;
    const posterImage = posterPath ? getTMDBImage(posterPath, 'w500') : null;

    const insight = getFamilyInsight(movie?.Title);
    // ✅ UPDATED: Using 'wholesomeScore' directly
    const wholesomeScore = richData?.wholesomeScore || 90; 

    const mobileHeroCSS = `
    @media (max-width: 767px) {
        .mobile-hero-row { display: flex; flex-direction: row; align-items: flex-start; width: 100vw; max-width: 100vw; gap: 10px; margin: 0; padding: 0 8px; }
        .mobile-hero-poster { width: 38vw; min-width: 106px; border-radius: 12px; overflow: hidden; box-shadow: 0 3px 14px #0007; margin: 0; flex-shrink: 0; }
        .mobile-hero-poster img { width: 100%; height: auto; border-radius: 12px; display: block; }
        .mobile-psych-card { background: linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%); border-radius: 12px; box-shadow: 0 2px 12px #0006; margin: 0; flex: 1; border-left: 4px solid #FACC15; display: flex; flex-direction: column; justify-content: flex-start; padding: 10px 10px 10px 12px; min-height: 110px; position: relative; }
        .mobile-psych-row { display: flex; align-items: flex-start; gap: 7px; }
        .mobile-psych-icon { min-width: 24px; min-height: 24px; color: #FACC15; margin-top: 2px; }
        .mobile-psych-title { font-size: 15px; font-weight: bold; color: #FACC15; margin-bottom: 1px; line-height: 1.12; }
        .mobile-psych-desc { font-size: 12.3px; color: #ededed; line-height: 1.36; margin-top: 2px; }
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
                        <div className="mobile-psych-row"><Heart className="mobile-psych-icon" /><div><div className="mobile-psych-title">Wholesome Score</div></div></div>
                        <div className="mobile-psych-desc"><strong>{wholesomeScore}/100</strong> - {insight.substring(0, 80)}...</div>
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
                            <motion.div className="relative rounded-xl sm:rounded-2xl overflow-hidden p-4 sm:p-6 lg:p-8 backdrop-blur-sm" style={{ background: `linear-gradient(135deg, rgba(250, 204, 21, 0.15) 0%, rgba(15, 23, 42, 0.5) 100%)`, border: `1px solid ${COLORS.borderLight}`, boxShadow: `0 8px 32px rgba(250, 204, 21, 0.2)` }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }}>
                                <div className="absolute top-0 left-0 right-0 h-0.5 sm:h-1" style={{ background: `linear-gradient(90deg, transparent, ${COLORS.accent}, transparent)` }} />
                                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                                    <motion.div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl flex-shrink-0" style={{ background: `linear-gradient(135deg, ${COLORS.accent}20, ${COLORS.accent}10)`, border: `1px solid ${COLORS.accent}40` }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}><Sparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" style={{ color: COLORS.accent }} /></motion.div>
                                    <div className="min-w-0 flex-1"><h2 className="text-sm sm:text-base lg:text-xl xl:text-2xl font-bold leading-tight" style={{ color: COLORS.accent }}>Why This Movie Wins</h2><p className="text-xs sm:text-sm hidden sm:block" style={{ color: COLORS.textMuted }}>Wholesome Score: {wholesomeScore}/100</p></div>
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

const SmartBackButton = () => {
    const handleBackClick = () => { if (typeof window !== 'undefined') window.location.href = '/collection/best-family-movies-on-peacock'; };
    return (
        <motion.button onClick={handleBackClick} className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 flex items-center gap-2 px-3 sm:px-4 py-2 backdrop-blur-md rounded-lg transition-all duration-300 shadow-xl text-xs sm:text-sm" style={{ backgroundColor: `${COLORS.bgPrimary}F2`, border: `1px solid ${COLORS.borderLight}` }} whileHover={{ scale: 1.02, x: -2 }} whileTap={{ scale: 0.98 }} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} onMouseEnter={(e) => e.currentTarget.style.borderColor = COLORS.borderAccent} onMouseLeave={(e) => e.currentTarget.style.borderColor = COLORS.borderLight}>
            <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: COLORS.accent }} /><span className="font-medium" style={{ color: COLORS.accent }}>Back to Collection</span>
        </motion.button>
    );
};

const AuthorCreditSection = () => (
    <motion.section className="pt-6 sm:pt-8 mt-12 sm:mt-16" style={{ borderTop: `1px solid ${COLORS.borderLight}` }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0, duration: 0.8 }}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-3"><User className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: COLORS.textDisabled }} /><div><p className="text-xs sm:text-sm" style={{ color: COLORS.textMuted }}>Curated by <span className="font-medium" style={{ color: COLORS.textSecondary }}>Filmiway Editorial Team</span></p><p className="text-xs" style={{ color: COLORS.textDisabled }}>Expert analysis of family cinema</p></div></div>
            <div className="flex items-center gap-3 sm:gap-4"><span className="text-xs sm:text-sm" style={{ color: COLORS.textDisabled }}>Share:</span><div className="flex gap-2 sm:gap-3">{[Twitter, Hash, Send].map((Icon, i) => (<button key={i} className="p-1.5 sm:p-2 rounded-full transition-colors" style={{ color: COLORS.textDisabled }} onMouseEnter={(e) => { e.currentTarget.style.color = COLORS.textSecondary; e.currentTarget.style.backgroundColor = COLORS.bgCard; }} onMouseLeave={(e) => { e.currentTarget.style.color = COLORS.textDisabled; e.currentTarget.style.backgroundColor = 'transparent'; }}><Icon className="w-3 h-3 sm:w-4 sm:h-4" /></button>))}</div></div>
        </div>
    </motion.section>
);

const SubtleFilmGrain = () => (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.005]"><div className="w-full h-full bg-repeat" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.3'/%3E%3C/svg%3E")`, backgroundSize: '60px 60px' }} /></div>
);

// ✅ RENAMED TO PEACOCK FAMILY
const PeacockFamilyBreadcrumb = ({ movie }) => (
    <motion.nav className="mb-6 sm:mb-8 px-3 sm:px-4 lg:px-6 pb-3 sm:pb-4" style={{ borderBottom: `1px solid ${COLORS.borderLight}` }} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm" style={{ color: COLORS.textMuted }}>
            <Link href="/collection/best-family-movies-on-peacock" className="transition-all duration-300 truncate" style={{ color: COLORS.textMuted }} onMouseEnter={(e) => e.currentTarget.style.color = COLORS.accent} onMouseLeave={(e) => e.currentTarget.style.color = COLORS.textMuted}>Best Family Movies on Peacock</Link>
            <ChevronLeft size={14} className="flex-shrink-0" style={{ color: COLORS.textDisabled, transform: 'rotate(180deg)' }} /><span className="font-medium truncate" style={{ color: `${COLORS.accent}B3` }}>{movie.Title}</span>
        </div>
    </motion.nav>
);

// ✅ JSON-LD SCHEMA GENERATOR - FAMILY EDITION
const generateMovieSchema = (movie, movieData, currentMovieYear) => {
  const data = COMPLETE_MOVIE_DATA[movie.tmdbId];
  const sensitiveData = SENSITIVE_TIMELINES[movie.tmdbId];
  const faqs = PEACOCK_FAMILY_MOVIE_FAQS[movie.Title] || [];

  // 1. CALCULATE THE PEAK MOMENT
  let peakStats = "Peak info unavailable.";
  if (data?.scenes && data.scenes.length > 0) {
    const peakScene = data.scenes.reduce((prev, current) => 
      (current.intensity > prev.intensity) ? current : prev
    );
    peakStats = `[PEAK MOMENT] Maximum Fun (${peakScene.intensity}/100) hits at minute ${peakScene.time}: "${peakScene.label}".`;
  }

  // 2. METRICS (Using Family Specific Terms for Bots)
  const intensityStats = `
    [FILMIWAY METRICS]
    - Wholesome Score: ${data?.wholesomeScore || 0}/100
    - Fun Factor: ${data?.funFactor || 0}/100
  `;

  const dnaStats = data?.dna 
    ? `[GENRE DNA] ${Object.entries(data.dna).map(([genre, val]) => `${genre}: ${val}%`).join(', ')}`
    : 'Family';

  const contentWarnings = sensitiveData?.scenes 
    ? `[CONTENT ADVISORY] ${sensitiveData.scenes.map(s => 
        (s.start && s.end) 
          ? `${s.type}: ${s.start}-${s.end} (${s.severity})` 
          : `${s.type} (${s.severity})` 
      ).join(' | ')}.`
    : 'No content warnings.';
  const faqText = faqs.length > 0
    ? `[COMMON QUESTIONS] ${faqs.map(f => `Q: ${f.question} A: ${f.answer}`).join(' | ')}`
    : '';

  // 3. COMPILE FULL DESCRIPTION
  const fullDescription = `
    ${data?.synopsis || movie.description || "A great family movie."}
    
    --- DETAILED ANALYSIS ---
    ${peakStats} 
    ${intensityStats}
    ${dnaStats}
    ${contentWarnings}
    ${faqText}
    
    Ranking: #${movie.rank || 'N/A'} in Peacock Family Movies.
    Production: Budget ${data?.budget || 'N/A'}, Box Office ${data?.boxOffice || 'N/A'}.
  `.replace(/\s+/g, ' ').trim();

  // 4. MAIN MOVIE SCHEMA
  const movieSchema = {
    "@context": "https://schema.org",
    "@type": "Movie",
    "name": movie.Title,
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
        "ratingValue": data?.rating || 7.5, 
        "bestRating": "10",
        "worstRating": "1"
      }
    },

    "genre": data?.dna ? Object.keys(data.dna) : ["Family", "Animation"],
    "keywords": "Family Movies Peacock, Kids Movies, " + (data?.themes ? data.themes.join(", ") : ""),
    "url": `https://filmiway.com/movies/best-family-movies-on-peacock/${movie.imdbID}`, 
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

// ✅ RENAMED TO PEACOCK FAMILY
const PeacockFamilyMoviePage = ({ movie, tmdbData: movieData }) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const richData = COMPLETE_MOVIE_DATA[movie.tmdbId]; 
    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
        sessionStorage.setItem('fromCollection', 'best-family-movies-on-peacock');
        sessionStorage.setItem('fromCollectionName', 'Best Family Movies on Peacock');
    }
  }, []);

    const currentMovieYear = MOVIE_YEARS[movie.Title] || movie.year || 'Unknown';
    const trailer = movieData?.videos?.results?.find(video => video.type === 'Trailer' && video.site === 'YouTube');

    // ✅ SEO FIX: Clean strings to prevent hydration errors
    const cleanSEOTitle = `${movie.Title} (${currentMovieYear}) - Best Family Movies on Peacock | Filmiway`;
    const cleanSEODesc = `${movie.Title} (${currentMovieYear}) - A wonderful family movie streaming on Peacock. Ranked by wholesomeness and fun factor.`;

    const { movieSchema, faqSchema } = generateMovieSchema(movie, movieData, currentMovieYear);

    return (
        <div className="min-h-screen text-white relative overflow-hidden" style={{ backgroundColor: COLORS.bgPrimary }}>
            <Head>
                {/* ✅ HYDRATION BUG FULLY RESOLVED */}
                <title key="title">{cleanSEOTitle}</title>
                <meta key="desc" name="description" content={cleanSEODesc} />
                <link rel="canonical" href={`https://filmiway.com/movies/best-family-movies-on-peacock/${movie.imdbID}`} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />

                {/* ✅ BARRIER #3 DEFEATED: JSON-LD Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(movieSchema) }}
                />
                {faqSchema && (
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                    />
                )}

                {/* Standard Meta Tags */}
                <meta property="og:title" content={cleanSEOTitle} />
                <meta property="og:description" content="A great family movie on Peacock." />
                <meta property="og:type" content="video.movie" />
                <meta property="og:image" content={movieData?.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : ''} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={cleanSEOTitle} />
                <meta name="twitter:description" content="A great family movie on Peacock." />
                <meta name="twitter:image" content={movieData?.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : ''} />
            </Head>

            <SubtleFilmGrain />
            <div className="absolute inset-0"><CinematicBackground /></div>
            
            <div className="relative z-10 pt-10 sm:pt-12 lg:pt-16">
                
                {/* ✅ SEO FIX: HIDDEN H1 */}
                <h1 className="sr-only">{cleanSEOTitle}</h1>

                <PeacockFamilyBreadcrumb movie={movie} />
                <div className="container mx-auto px-0 pb-16 sm:pb-24 lg:pb-32 max-w-7xl">
                    <OptimizedBanner movie={movie} movieData={movieData} richData={richData} trailer={trailer} isMobile={isMobile} />
                    
                    <motion.div 
                        id="watch" 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.5 }} 
                        className="space-y-8 sm:space-y-12 px-3 sm:px-4 lg:px-6"
                    >
                        {/* ✅ Passing Peacock Family Context */}
                        <MovieDetailsSection movie={movie} fromPeacockFamilyCollection={true} /> 
                    </motion.div>
                    
                    <div className="px-3 sm:px-4 lg:px-6">
                        {/* ✅ INTERNAL COLLECTION SLUG UPDATED */}
                        <InternalCollectionsSection currentSlug="best-family-movies-on-peacock" />
                        <TMDBAttribution />
                        <AuthorCreditSection />
                    </div>
                </div>
            </div>
        </div>
    );
};

export async function getStaticPaths() {
    const paths = COMPLETE_MOVIE_DATABASE.map((movie) => ({ params: { id: movie.imdbID } }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    try {
        const movie = COMPLETE_MOVIE_DATABASE.find((m) => m.imdbID === params.id);
        if (!movie) return { notFound: true };

        const tmdbResponse = await fetch(
            `https://api.themoviedb.org/3/movie/${movie.tmdbId}?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&append_to_response=videos`
        );
        const tmdbData = tmdbResponse.ok ? await tmdbResponse.json() : null;

        return {
            props: { movie, tmdbData },
        };
    } catch (error) {
        console.error('Error fetching TMDB data:', error);
        return {
            props: {
                movie: COMPLETE_MOVIE_DATABASE.find((m) => m.imdbID === params.id),
                tmdbData: null,
            },
        };
    }
}

export default PeacockFamilyMoviePage;