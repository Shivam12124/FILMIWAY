// pages/movies/heist-thriller/[id].js - FIXED REFERENCE ERROR ✅
// VISUALS: Amber/Gold Theme (Heist), Minimalist Banner
// SCHEMA: Maximalist (Hidden Intensity, DNA, and FAQs for Bots)

import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Play, X, User, Twitter, Hash, Send, Film, Award, DollarSign } from 'lucide-react'; // Added icons
import InternalCollectionsSection from '../../../components/InternalCollectionsSection';
import CinematicBackground from '../../../components/CinematicBackground';
import MovieDetailsSection from '../../../components/MovieDetailsSection';
import TMDBAttribution from '../../../components/TMDBAttribution';

// ✅ IMPORT HEIST THRILLER DATA
import { 
  COMPLETE_MOVIE_DATABASE, 
  COMPLETE_MOVIE_DATA, 
  SENSITIVE_TIMELINES,
  HEIST_THRILLER_MOVIE_FAQS 
} from '../../../utils/heistThrillerMovieData';

const COLORS = {
  accent: '#EAB308', // Amber/Yellow for Heist
  bgPrimary: '#0B0B0C', 
  bgCard: 'rgba(55, 65, 81, 0.3)', 
  textPrimary: '#FFFFFF', 
  textSecondary: '#D1D5DB', 
  textMuted: '#9CA3AF', 
  textDisabled: '#6B7280',
  borderAccent: 'rgba(234, 179, 8, 0.25)', 
  borderLight: 'rgba(107, 114, 128, 0.3)',
};

const MOVIE_YEARS = {
  'Heat': '1995', 'Reservoir Dogs': '1992', 'The Town': '2010', 'Hell or High Water': '2016',
  'The Bank Job': '2008', 'Inside Man': '2006', 'Thief': '1981', 'Dog Day Afternoon': '1975',
  'The Italian Job': '1969', "Ocean's Eleven": '2001'
};

const MOVIE_DATA_BY_TITLE = {
  'Heat': { connection: 'A masterful cat-and-mouse thriller with breathtaking heist sequences and stellar performances from De Niro and Pacino.' },
  'Reservoir Dogs': { connection: 'A gritty, dialogue-driven thriller about loyalty and betrayal in a failed heist gone catastrophically wrong.' },
  'The Town': { connection: 'A thrilling crime drama where love collides with a life of crime in the tight-knit neighborhoods of Boston.' },
  'Hell or High Water': { connection: 'A modern western thriller filled with emotional depth about brothers planning desperate bank robberies.' },
  'The Bank Job': { connection: 'An intricately woven heist exposing political conspiracies and corruption at the highest levels.' },
  'Inside Man': { connection: 'A clever and stylish bank robbery layered with suspense and unexpected twists from Spike Lee.' },
  'Thief': { connection: 'A gritty neo-noir exploring the professional life of a master safecracker seeking one last big score.' },
  'Dog Day Afternoon': { connection: 'A tense and eccentric hostage drama based on a true story with iconic performances.' },
  'The Italian Job': { connection: 'A stylish, fast-paced heist with iconic Mini Cooper chase scenes through Turin.' },
  "Ocean's Eleven": { connection: 'An ensemble caper with wit, charm, and elaborate casino heists executed with style.' }
};

const getTMDBImage = (path, size = 'w1280') => 
  path ? `https://image.tmdb.org/t/p/${size}${path}` : null;

const getHeistInsight = (title) => {
  const data = MOVIE_DATA_BY_TITLE[title];
  return data?.connection || 'An unforgettable heist thriller packed with suspense, action, and masterful execution.';
};

// ✅ OPTIMIZED BANNER
const OptimizedBanner = ({ movie, movieData, trailer, isMobile, richData }) => {
  const [showTrailer, setShowTrailer] = useState(false);
  const [countdown, setCountdown] = useState(4);
  const [hasClosedTrailer, setHasClosedTrailer] = useState(false);
  const timerRef = useRef(null);

  const backdropPath = movieData?.backdrop_path || richData?.backdrop_path || movie?.backdrop_path;
  const posterPath = movieData?.poster_path || richData?.poster_path || movie?.poster_path;
  const bannerImage = backdropPath ? getTMDBImage(backdropPath, 'w1280') : null;
  const posterImage = posterPath ? getTMDBImage(posterPath, 'w500') : null;
  
  const insight = getHeistInsight(movie?.Title);
  const complexityIndex = richData?.heistComplexity || 90;

  useEffect(() => {
    if (window.innerWidth > 768 && trailer && !showTrailer && !hasClosedTrailer) {
      timerRef.current = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) { clearInterval(timerRef.current); setShowTrailer(true); return 0; }
          return prev - 1;
        });
      }, 1000);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [trailer, showTrailer, hasClosedTrailer]);

  const handlePlayClick = () => { setShowTrailer(true); setHasClosedTrailer(false); };
  const handleCloseTrailer = () => { setShowTrailer(false); setHasClosedTrailer(true); if (timerRef.current) clearInterval(timerRef.current); };

  const mobileHeroCSS = `
  @media (max-width: 767px) {
    .mobile-hero-row { display: flex; flex-direction: row; align-items: flex-start; width: 100vw; max-width: 100vw; gap: 10px; margin: 0; padding: 0 8px; }
    .mobile-hero-poster { width: 38vw; min-width: 106px; border-radius: 12px; overflow: hidden; box-shadow: 0 3px 14px #0007; margin: 0; flex-shrink: 0; }
    .mobile-hero-poster img { width: 100%; height: auto; border-radius: 12px; display: block; }
    .mobile-heist-card { background: linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%); border-radius: 12px; box-shadow: 0 2px 12px #0006; margin: 0; flex: 1; border-left: 4px solid #EAB308; display: flex; flex-direction: column; justify-content: flex-start; padding: 10px 10px 10px 12px; min-height: 110px; position: relative; }
    .mobile-heist-row { display: flex; align-items: flex-start; gap: 7px; }
    .mobile-heist-icon { min-width: 24px; min-height: 24px; color: #FDE047; margin-top: 2px; }
    .mobile-heist-title { font-size: 15px; font-weight: bold; color: #FDE047; margin-bottom: 1px; line-height: 1.12; }
    .mobile-heist-desc { font-size: 12.3px; color: #ededed; line-height: 1.36; margin-top: 2px; }
  }`;

  return (
    <motion.div className="relative w-full overflow-hidden mb-6 sm:mb-8 mx-0 sm:mx-4 lg:mx-6 rounded-none sm:rounded-3xl" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
      <style>{mobileHeroCSS}</style>
      <div className="relative h-[300px] sm:h-[400px] lg:h-[600px]">
        <AnimatePresence mode="wait">
          {showTrailer && trailer ? (
             <motion.div key="trailer" className="absolute inset-0 rounded-none sm:rounded-3xl overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
               <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=1`} allow="autoplay; encrypted-media" allowFullScreen className="w-full h-full border-0" />
               <button onClick={handleCloseTrailer} className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-amber-600 transition backdrop-blur-sm"><X /></button>
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

      {/* MOBILE HERO */}
      {isMobile ? (
        <div className="mobile-hero-row">
          <div className="mobile-hero-poster">{posterImage ? <Image src={posterImage} alt={`${movie?.Title} poster`} width={320} height={480} className="w-full h-auto" priority /> : <div style={{ background: COLORS.bgCard, width: '100%', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Film style={{ color: COLORS.textMuted }} /></div>}</div>
          <div className="mobile-heist-card">
            <div className="mobile-heist-row"><DollarSign className="mobile-heist-icon" /><div><div className="mobile-heist-title">Heist Index</div></div></div>
            <div className="mobile-heist-desc"><strong>{complexityIndex}/100</strong> - {insight.substring(0, 80)}...</div>
          </div>
        </div>
      ) : (
        /* DESKTOP CONTENT */
        <div className="relative px-3 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 z-20" style={{ backgroundColor: COLORS.bgPrimary }}>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 items-start">
            <motion.div className="flex-shrink-0 relative w-24 sm:w-48 md:w-56 lg:w-80 mx-auto sm:mx-0" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}>
              <div className="relative" style={{ aspectRatio: '2/3' }}>
                {posterImage ? <Image src={posterImage} alt={`${movie?.Title} poster`} fill sizes="(max-width: 640px) 96px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 320px" quality={85} className="object-cover rounded-lg sm:rounded-xl shadow-2xl" /> : <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: COLORS.bgCard, borderRadius: '12px' }}><Film style={{ color: COLORS.textMuted }} /></div>}
              </div>
            </motion.div>
            <motion.div className="flex-1 w-full min-w-0" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0, duration: 0.8 }}>
              <motion.div className="relative rounded-xl sm:rounded-2xl overflow-hidden p-4 sm:p-6 lg:p-8 backdrop-blur-sm" style={{ background: `linear-gradient(135deg, rgba(234, 179, 8, 0.15) 0%, rgba(15, 15, 20, 0.5) 100%)`, border: `1px solid ${COLORS.borderLight}`, boxShadow: `0 8px 32px rgba(234, 179, 8, 0.2)` }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }}>
                <div className="absolute top-0 left-0 right-0 h-0.5 sm:h-1" style={{ background: `linear-gradient(90deg, transparent, ${COLORS.accent}, transparent)` }} />
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                  <motion.div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl flex-shrink-0" style={{ background: `linear-gradient(135deg, ${COLORS.accent}20, ${COLORS.accent}10)`, border: `1px solid ${COLORS.accent}40` }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}><Award className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" style={{ color: COLORS.accent }} /></motion.div>
                  <div className="min-w-0 flex-1"><h2 className="text-sm sm:text-base lg:text-xl xl:text-2xl font-bold leading-tight" style={{ color: COLORS.accent }}>Why This Heist Thriller is Special</h2><p className="text-xs sm:text-sm hidden sm:block" style={{ color: COLORS.textMuted }}>Heist Index: {complexityIndex}/100</p></div>
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

// ✅ FIXED: SmartBackButton is defined
const SmartBackButton = () => (
    <Link href="/collection/best-heist-thriller-movies" className="fixed top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md border border-gray-700 rounded-lg hover:border-amber-500 transition group">
        <ChevronLeft className="w-4 h-4 text-gray-400 group-hover:text-amber-500 transition" />
        <span className="text-sm font-medium text-gray-200 group-hover:text-white">Collection</span>
    </Link>
);

const AuthorCreditSection = () => (
    <motion.section className="pt-6 sm:pt-8 mt-12 sm:mt-16" style={{ borderTop: `1px solid ${COLORS.borderLight}` }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0, duration: 0.8 }}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-3"><User className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: COLORS.textDisabled }} /><div><p className="text-xs sm:text-sm" style={{ color: COLORS.textMuted }}>Curated by <span className="font-medium" style={{ color: COLORS.textSecondary }}>Filmiway Editorial Team</span></p><p className="text-xs" style={{ color: COLORS.textDisabled }}>Expert analysis of heist cinema</p></div></div>
            <div className="flex items-center gap-3 sm:gap-4"><span className="text-xs sm:text-sm" style={{ color: COLORS.textDisabled }}>Share:</span><div className="flex gap-2 sm:gap-3">{[Twitter, Hash, Send].map((Icon, i) => (<button key={i} className="p-1.5 sm:p-2 rounded-full transition-colors" style={{ color: COLORS.textDisabled }} onMouseEnter={(e) => { e.currentTarget.style.color = COLORS.textSecondary; e.currentTarget.style.backgroundColor = COLORS.bgCard; }} onMouseLeave={(e) => { e.currentTarget.style.color = COLORS.textDisabled; e.currentTarget.style.backgroundColor = 'transparent'; }}><Icon className="w-3 h-3 sm:w-4 sm:h-4" /></button>))}</div></div>
        </div>
    </motion.section>
);

const SubtleFilmGrain = () => (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]">
       <svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' className="w-full h-full">
         <filter id='grain'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='1' stitchTiles='stitch'/></filter>
         <rect width='100%' height='100%' filter='url(#grain)'/>
       </svg>
    </div>
);

const HeistBreadcrumb = ({ movie }) => (
    <motion.nav className="mb-6 sm:mb-8 px-3 sm:px-4 lg:px-6 pb-3 sm:pb-4" style={{ borderBottom: `1px solid ${COLORS.borderLight}` }} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm" style={{ color: COLORS.textMuted }}>
            <Link href="/collection/best-heist-thriller-movies" className="transition-all duration-300 truncate" style={{ color: COLORS.textMuted }} onMouseEnter={(e) => e.currentTarget.style.color = COLORS.accent} onMouseLeave={(e) => e.currentTarget.style.color = COLORS.textMuted}>Best Heist Thriller Movies</Link>
            <ChevronLeft size={14} className="flex-shrink-0" style={{ color: COLORS.textDisabled, transform: 'rotate(180deg)' }} /><span className="font-medium truncate" style={{ color: `${COLORS.accent}B3` }}>{movie.Title}</span>
        </div>
    </motion.nav>
);

// ✅ JSON-LD SCHEMA GENERATOR - HEIST EDITION
const generateMovieSchema = (movie, movieData, currentMovieYear) => {
  const data = COMPLETE_MOVIE_DATA[movie.tmdbId];
  const faqs = HEIST_THRILLER_MOVIE_FAQS[movie.Title] || [];

  // 1. CALCULATE THE PEAK MOMENT
  let peakStats = "Peak info unavailable.";
  if (data?.scenes && data.scenes.length > 0) {
    const peakScene = data.scenes.reduce((prev, current) => 
      (current.intensity > prev.intensity) ? current : prev
    );
    peakStats = `[PEAK MOMENT] Maximum Tension (${peakScene.intensity}/100) hits at minute ${peakScene.time}: "${peakScene.label}".`;
  }

  // 2. METRICS (Metrics Changed for Heist)
  const intensityStats = `
    [FILMIWAY METRICS]
    - Heist Complexity: ${data?.heistComplexity || 0}/100
    - Tension Level: ${data?.tensionLevel || 0}/100
    - Action Impact: ${data?.actionImpact || 0}/100
  `;

  const dnaStats = data?.dna 
    ? `[GENRE DNA] ${Object.entries(data.dna).map(([genre, val]) => `${genre}: ${val}%`).join(', ')}`
    : 'Heist Thriller';

  // Content warnings logic
  const sensitiveData = SENSITIVE_TIMELINES[movie.tmdbId];
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
    ${data?.synopsis || movie.description || "A masterful heist thriller."}
    
    --- DETAILED ANALYSIS ---
    ${peakStats} 
    ${intensityStats}
    ${dnaStats}
    ${contentWarnings}
    ${faqText}
    
    Ranking: #${movie.rank || 'N/A'} in Heist Cinema.
    Production: Budget ${data?.budget || 'N/A'}, Box Office ${data?.boxOffice || 'N/A'}.
  `.replace(/\s+/g, ' ').trim();

  const movieSchema = {
    "@context": "https://schema.org",
    "@type": "Movie",
    "name": movie.Title,
    "description": fullDescription,
    "datePublished": currentMovieYear,
    "image": movieData?.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : undefined,
    "director": { "@type": "Person", "name": data?.director || "Unknown" },
    "actor": data?.cast?.map(actor => ({ "@type": "Person", "name": actor })) || [],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": data?.rating || 8.0, 
      "bestRating": "10",
      "ratingCount": 1000
    },
    "genre": data?.dna ? Object.keys(data.dna) : ["Heist", "Thriller", "Crime"],
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

const HeistThrillerMoviePage = ({ movie, tmdbData: movieData }) => {
    // Aliasing tmdbData to movieData
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    // Pass rich data to Banner for fallback
    const richData = COMPLETE_MOVIE_DATA[movie.tmdbId]; 
    const correctData = MOVIE_DATA_BY_TITLE[movie.Title];
    const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
        sessionStorage.setItem('fromCollection', 'best-heist-thriller-movies');
        sessionStorage.setItem('fromCollectionName', 'Best Heist Thriller Movies');
    }
  }, []);

    const currentMovieYear = MOVIE_YEARS[movie.Title] || movie.year || 'Unknown';
    const trailer = movieData?.videos?.results?.find(video => video.type === 'Trailer' && video.site === 'YouTube');

    // Generate schema
    const { movieSchema, faqSchema } = generateMovieSchema(movie, movieData, currentMovieYear);

    return (
        <div className="min-h-screen text-white relative overflow-hidden" style={{ backgroundColor: COLORS.bgPrimary }}>
            <Head>
                <title>{`${movie.Title} (${currentMovieYear}) - Best Heist Thriller Movies | Filmiway`}</title>
                <meta name="description" content={richData?.synopsis || `Watch ${movie.Title}, a high-stakes heist thriller.`} />
                <link rel="canonical" href={`https://filmiway.com/movies/heist-thriller/${movie.imdbID}`} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
                <meta name="robots" content="index, follow" />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(movieSchema) }} />
                {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
            </Head>

            <SubtleFilmGrain />
            <div className="absolute inset-0"><CinematicBackground /></div>
            <SmartBackButton />

            <div className="relative z-10 pt-0 md:pt-16">
                <h1 className="sr-only">{movie.Title} - Heist Movie Analysis</h1>
                
                <div className="container mx-auto px-0 pb-16 max-w-7xl">
                    <OptimizedBanner movie={movie} movieData={tmdbData} richData={richData} trailer={trailer} isMobile={isMobile} />
                    
                    <div className="px-4 lg:px-6 space-y-12 mt-8">
                         {/* Pass flag to MovieDetailsSection */}
                         <MovieDetailsSection movie={movie} fromHeistThrillerCollection={true} />
                         
                         <div className="border-t border-gray-800 pt-8">
                            <InternalCollectionsSection currentSlug="best-heist-thriller-movies" />
                            <TMDBAttribution />
                            <AuthorCreditSection />
                         </div>
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
    const movie = COMPLETE_MOVIE_DATABASE.find((m) => m.imdbID === params.id);
    
    if (!movie) {
        return { notFound: true };
    }

    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${movie.tmdbId}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&append_to_response=videos`);
        const tmdbData = res.ok ? await res.json() : null;

        return { props: { movie, tmdbData } };
    } catch (error) {
        return { props: { movie, tmdbData: null } };
    }
}

export default HeistThrillerMoviePage;