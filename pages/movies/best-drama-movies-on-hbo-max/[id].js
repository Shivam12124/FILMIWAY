// pages/best-drama-movies-on-hbo-max/[id].js - HBO MAX DRAMA MOVIES
// VISUALS: Prestige & Emotional Theme (Indigo/Gold Accents)
// SCHEMA: Maximalist (Hidden Emotional Intensity, Sensitive Timelines, and FAQs for Bots)

import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Play, X, User, Twitter, Hash, Send, Film, Heart, Theater } from 'lucide-react';
import InternalCollectionsSection from '../../../components/InternalCollectionsSection';
import CinematicBackground from '../../../components/CinematicBackground';
import MovieDetailsSection from '../../../components/MovieDetailsSection';
import TMDBAttribution from '../../../components/TMDBAttribution';

// ✅ IMPORT DRAMA DATA
import { 
  COMPLETE_MOVIE_DATABASE, 
  COMPLETE_MOVIE_DATA,
  SENSITIVE_TIMELINES,
  HBO_DRAMA_MOVIE_FAQS 
} from '../../../utils/hboMaxDramaMovieData';

const COLORS = {
  accent: '#eab308', accentLight: '#fde047', bgPrimary: '#000000ff', bgCard: 'rgba(11, 11, 11, 0.8)', // Gold/Slate for Prestige Drama
  textPrimary: '#FFFFFF', textSecondary: '#E5E7EB', textMuted: '#9CA3AF', textDisabled: '#6B7280',
  borderAccent: 'rgba(234, 179, 8, 0.25)', borderLight: 'rgba(55, 65, 81, 0.5)',
};

// ✅ UPDATED MOVIE YEARS
const MOVIE_YEARS = {
  'Moonlight': '2016',
  'The Brutalist': '2024',
  'Paris, Texas': '1984',
  'Taxi Driver': '1976',
  'Past Lives': '2023',
  'The Battle of Algiers': '1966',
  'Sing Sing': '2024',
  'The Color Purple': '1985',
  'Shame': '2011',
  'Joker': '2019'
};

// ✅ UPDATED MOVIE INSIGHTS
const MOVIE_DATA_BY_TITLE = {
  'Moonlight': { connection: 'A poetic masterpiece about identity, sexuality, and the vulnerability of black masculinity.' },
  'The Brutalist': { connection: 'A monumental epic about the immigrant experience, artistic ambition, and the literal weight of history.' },
  'Paris, Texas': { connection: 'A visually stunning meditation on loss, memory, and the tragic inability to communicate love.' },
  'Taxi Driver': { connection: 'A terrifying, neon-soaked character study of urban isolation and the descent into madness.' },
  'Past Lives': { connection: 'A deeply romantic yet realistic exploration of destiny, choices, and the lives we leave behind.' },
  'The Battle of Algiers': { connection: 'A gritty, unflinching look at revolution and the moral complexity of anti-colonial warfare.' },
  'Sing Sing': { connection: 'A radiant testament to the transformative power of art and the resilience of the human spirit.' },
  'The Color Purple': { connection: 'A sweeping saga of resilience, sisterhood, and finding one’s voice against impossible odds.' },
  'Shame': { connection: 'A cold, devastating portrait of addiction and the hollow emptiness of modern intimacy.' },
  'Joker': { connection: 'A provocative, gritty origin story that holds a dark mirror to society’s neglect of the vulnerable.' }
};

const getTMDBImage = (path, size = 'w1280') =>
  path ? `https://image.tmdb.org/t/p/${size}${path}` : undefined;

const getEmotionalInsight = (title) => {
  const data = MOVIE_DATA_BY_TITLE[title];
  return data?.connection || 'A deeply moving film exploring the human condition.';
};

// ✅ OPTIMIZED BANNER (Prestige Drama Theme)
const OptimizedBanner = ({ movie, movieData, trailer, isMobile, richData }) => {
  const [showTrailer, setShowTrailer] = useState(false);
  const [countdown, setCountdown] = useState(4);
  const [hasClosedTrailer, setHasClosedTrailer] = useState(false);
  const timerRef = useRef(null);

  const backdropPath = movieData?.backdrop_path || richData?.backdrop_path || movie?.backdrop_path;
  const posterPath = movieData?.poster_path || richData?.poster_path || movie?.poster_path;

  const bannerImage = backdropPath ? getTMDBImage(backdropPath, 'w1280') : null;
  const posterImage = posterPath ? getTMDBImage(posterPath, 'w500') : null;

  const insight = getEmotionalInsight(movie?.Title);
  const emotionalIntensity = richData?.emotionalIntensity || 85; 

  const mobileHeroCSS = `
  @media (max-width: 767px) {
    .mobile-hero-row { display: flex; flex-direction: row; align-items: flex-start; width: 100vw; max-width: 100vw; gap: 10px; margin: 0; padding: 0 8px; }
    .mobile-hero-poster { width: 38vw; min-width: 106px; border-radius: 12px; overflow: hidden; box-shadow: 0 3px 14px #0007; margin: 0; flex-shrink: 0; }
    .mobile-hero-poster img { width: 100%; height: auto; border-radius: 12px; display: block; }
    .mobile-psych-card { background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 12px; box-shadow: 0 2px 12px #0006; margin: 0; flex: 1; border-left: 4px solid #eab308; display: flex; flex-direction: column; justify-content: flex-start; padding: 10px 10px 10px 12px; min-height: 110px; position: relative; }
    .mobile-psych-row { display: flex; align-items: flex-start; gap: 7px; }
    .mobile-psych-icon { min-width: 24px; min-height: 24px; color: #facc15; margin-top: 2px; }
    .mobile-psych-title { font-size: 15px; font-weight: bold; color: #facc15; margin-bottom: 1px; line-height: 1.12; }
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
            <div className="mobile-psych-row"><Heart className="mobile-psych-icon" /><div><div className="mobile-psych-title">Emotional Impact</div></div></div>
            <div className="mobile-psych-desc"><strong>{emotionalIntensity}/100</strong> - {insight.substring(0, 80)}...</div>
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
              <motion.div className="relative rounded-xl sm:rounded-2xl overflow-hidden p-4 sm:p-6 lg:p-8 backdrop-blur-sm" style={{ background: `linear-gradient(135deg, rgba(234, 179, 8, 0.15) 0%, rgba(15, 23, 42, 0.5) 100%)`, border: `1px solid ${COLORS.borderLight}`, boxShadow: `0 8px 32px rgba(234, 179, 8, 0.2)` }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }}>
                <div className="absolute top-0 left-0 right-0 h-0.5 sm:h-1" style={{ background: `linear-gradient(90deg, transparent, ${COLORS.accent}, transparent)` }} />
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                  <motion.div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl flex-shrink-0" style={{ background: `linear-gradient(135deg, ${COLORS.accent}20, ${COLORS.accent}10)`, border: `1px solid ${COLORS.accent}40` }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}><Heart className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" style={{ color: COLORS.accent }} /></motion.div>
                  <div className="min-w-0 flex-1"><h2 className="text-sm sm:text-base lg:text-xl xl:text-2xl font-bold leading-tight" style={{ color: COLORS.accent }}>Emotional Resonance</h2><p className="text-xs sm:text-sm hidden sm:block" style={{ color: COLORS.textMuted }}>Impact Score: {emotionalIntensity}/100</p></div>
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
    const handleBackClick = () => { if (typeof window !== 'undefined') window.location.href = '/collection/best-drama-movies-on-hbo-max'; };
    return (
        <motion.button onClick={handleBackClick} className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 flex items-center gap-2 px-3 sm:px-4 py-2 backdrop-blur-md rounded-lg transition-all duration-300 shadow-xl text-xs sm:text-sm" style={{ backgroundColor: `${COLORS.bgPrimary}F2`, border: `1px solid ${COLORS.borderLight}` }} whileHover={{ scale: 1.02, x: -2 }} whileTap={{ scale: 0.98 }} initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} onMouseEnter={(e) => e.currentTarget.style.borderColor = COLORS.borderAccent} onMouseLeave={(e) => e.currentTarget.style.borderColor = COLORS.borderLight}>
            <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: COLORS.accent }} /><span className="font-medium" style={{ color: COLORS.accent }}>Back to Collection</span>
        </motion.button>
    );
};

const AuthorCreditSection = () => (
    <motion.section className="pt-6 sm:pt-8 mt-12 sm:mt-16" style={{ borderTop: `1px solid ${COLORS.borderLight}` }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0, duration: 0.8 }}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-3"><User className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: COLORS.textDisabled }} /><div><p className="text-xs sm:text-sm" style={{ color: COLORS.textMuted }}>Curated by <span className="font-medium" style={{ color: COLORS.textSecondary }}>Filmiway Editorial Team</span></p><p className="text-xs" style={{ color: COLORS.textDisabled }}>Expert analysis of character-driven cinema</p></div></div>
            <div className="flex items-center gap-3 sm:gap-4"><span className="text-xs sm:text-sm" style={{ color: COLORS.textDisabled }}>Share:</span><div className="flex gap-2 sm:gap-3">{[Twitter, Hash, Send].map((Icon, i) => (<button key={i} className="p-1.5 sm:p-2 rounded-full transition-colors" style={{ color: COLORS.textDisabled }} onMouseEnter={(e) => { e.currentTarget.style.color = COLORS.textSecondary; e.currentTarget.style.backgroundColor = COLORS.bgCard; }} onMouseLeave={(e) => { e.currentTarget.style.color = COLORS.textDisabled; e.currentTarget.style.backgroundColor = 'transparent'; }}><Icon className="w-3 h-3 sm:w-4 sm:h-4" /></button>))}</div></div>
        </div>
    </motion.section>
);

const SubtleFilmGrain = () => (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.005]"><div className="w-full h-full bg-repeat" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.3'/%3E%3C/svg%3E")`, backgroundSize: '60px 60px' }} /></div>
);

const HboDramaBreadcrumb = ({ movie }) => (
    <motion.nav className="mb-6 sm:mb-8 px-3 sm:px-4 lg:px-6 pb-3 sm:pb-4" style={{ borderBottom: `1px solid ${COLORS.borderLight}` }} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm" style={{ color: COLORS.textMuted }}>
            <Link href="/collection/best-drama-movies-on-hbo-max" className="transition-all duration-300 truncate" style={{ color: COLORS.textMuted }} onMouseEnter={(e) => e.currentTarget.style.color = COLORS.accent} onMouseLeave={(e) => e.currentTarget.style.color = COLORS.textMuted}>Best Drama Movies on HBO Max</Link>
            <ChevronLeft size={14} className="flex-shrink-0" style={{ color: COLORS.textDisabled, transform: 'rotate(180deg)' }} /><span className="font-medium truncate" style={{ color: `${COLORS.accent}B3` }}>{movie.Title}</span>
        </div>
    </motion.nav>
);

// ✅ JSON-LD SCHEMA GENERATOR - DRAMA EDITION
const generateMovieSchema = (movie, movieData, currentMovieYear, collectionSlug) => {
  const data = COMPLETE_MOVIE_DATA[movie.tmdbId];
  const sensitiveData = SENSITIVE_TIMELINES[movie.tmdbId];
  const faqs = HBO_DRAMA_MOVIE_FAQS[movie.Title] || [];

  // 1. CALCULATE THE PEAK EMOTIONAL MOMENT
  let peakStats = "Emotional peak info unavailable.";
  if (data?.scenes && data.scenes.length > 0) {
    const peakScene = data.scenes.reduce((prev, current) => 
      (current.intensity > prev.intensity) ? current : prev
    );
    peakStats = `[PEAK EMOTION] Highest Emotional Impact (${peakScene.intensity}/100) at minute ${peakScene.time}: "${peakScene.label}".`;
  }

  // 2. METRICS (Using Drama Specific Terms)
  const intensityStats = `
    [FILMIWAY METRICS]
    - Emotional Intensity: ${data?.emotionalIntensity || 0}/100
    - Character Depth: ${data?.complexityLevel || 'High'}
  `;

  const dnaStats = data?.dna 
    ? `[GENRE DNA] ${Object.entries(data.dna).map(([genre, val]) => `${genre}: ${val}%`).join(', ')}`
    : 'Character Drama';

  const contentWarnings = sensitiveData?.scenes 
    ? `[CONTENT ADVISORY] ${sensitiveData.scenes.map(s => 
        (s.start && s.end) 
          ? `${s.type}: ${s.start}-${s.end} (${s.severity})` 
          : `${s.type} (${s.severity})` 
      ).join(' | ')}.`
    : 'Standard thematic elements.';
  const faqText = faqs.length > 0
    ? `[COMMON QUESTIONS] ${faqs.map(f => `Q: ${f.question} A: ${f.answer}`).join(' | ')}`
    : '';

  // 3. COMPILE FULL DESCRIPTION
  const fullDescription = `
    ${data?.synopsis || movie.description || "A compelling drama exploring the human condition."}
    
    --- DETAILED ANALYSIS ---
    ${peakStats} 
    ${intensityStats}
    ${dnaStats}
    ${contentWarnings}
    ${faqText}
    
    Ranking: #${movie.rank || 'N/A'} in Drama Movies.
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

    "genre": data?.dna ? Object.keys(data.dna) : ["Drama", "Romance"],
    "keywords": "Best Drama Movies HBO Max, Emotional Films, " + (data?.themes ? data.themes.join(", ") : ""),
    "url": `https://filmiway.com/movies/${collectionSlug}/${movie.imdbID}`,
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

const HboDramaMoviePage = ({ movie, tmdbData: movieData }) => {
    const router = useRouter();
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
        sessionStorage.setItem('fromCollection', 'best-drama-movies-on-hbo-max');
        sessionStorage.setItem('fromCollectionName', 'Best Drama Movies on HBO Max');
    }
  }, []);

    const currentMovieYear = MOVIE_YEARS[movie.Title] || movie.year || 'Unknown';
    const trailer = movieData?.videos?.results?.find(video => video.type === 'Trailer' && video.site === 'YouTube');

    // ✅ SEO FIX
    const cleanSEOTitle = `${movie.Title} (${currentMovieYear}) - Best Drama Movies on HBO Max | Filmiway`;
    const cleanSEODesc = `${movie.Title} (${currentMovieYear}) - A powerful drama streaming on HBO Max. Analysis of emotional impact, themes, and character depth.`;

    const collectionSlug = router.pathname.split('/')[2];
    const canonicalUrl = `https://filmiway.com/movies/${collectionSlug}/${movie.imdbID}`;

    const { movieSchema, faqSchema } = generateMovieSchema(movie, movieData, currentMovieYear, collectionSlug);

    return (
        <div className="min-h-screen text-white relative overflow-hidden" style={{ backgroundColor: COLORS.bgPrimary }}>
            <Head>
                <title>{cleanSEOTitle}</title>
                <meta name="description" content={cleanSEODesc} />
                <link rel="canonical" href={canonicalUrl} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
                <meta name="robots" content="index, follow" />
                <meta name="language" content="English" />

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

                <meta property="og:title" content={cleanSEOTitle} />
                <meta property="og:description" content="A powerful drama streaming on HBO Max." />
                <meta property="og:type" content="video.movie" />
                <meta property="og:image" content={movieData?.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : ''} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={cleanSEOTitle} />
                <meta name="twitter:description" content="A powerful drama streaming on HBO Max." />
                <meta name="twitter:image" content={movieData?.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : ''} />
            </Head>

            <SubtleFilmGrain />
            <div className="absolute inset-0"><CinematicBackground /></div>
            
            
            <div className="relative z-10 pt-10 sm:pt-12 lg:pt-16">
                <h1 className="sr-only">{cleanSEOTitle}</h1>

                <HboDramaBreadcrumb movie={movie} />
                <div className="container mx-auto px-0 pb-16 sm:pb-24 lg:pb-32 max-w-7xl">
                    <OptimizedBanner movie={movie} movieData={movieData} richData={richData} trailer={trailer} isMobile={isMobile} />
                    
                    <motion.div 
                        id="watch" 
                        initial={{ opacity: 0, y: 20 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ duration: 0.5 }} 
                        className="space-y-8 sm:space-y-12 px-3 sm:px-4 lg:px-6"
                    >
                        {/* ✅ Passing the correct Drama context prop */}
                        <MovieDetailsSection movie={movie} fromHboMaxDramaCollection={true} /> 
                    </motion.div>
                    
                    <div className="px-3 sm:px-4 lg:px-6">
                        <InternalCollectionsSection currentSlug="best-drama-movies-on-hbo-max" />
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

export default HboDramaMoviePage;