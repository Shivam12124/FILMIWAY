import React, { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Play, X, Film, Star } from 'lucide-react';
import Header from '../../components/Header';
import MovieDetailsSection from '../../components/MovieDetailsSection';
import masterDatabase from '../../utils/masterDatabase.json';
import tmdbCache from '../../data/tmdbCache.json';
import CinematicBackground from '../../components/CinematicBackground';
import { getPrimaryCollectionForMovie, COLLECTIONS } from '../../data/collections';

// ✅ THEME COLORS FOR UNIVERSAL BANNER
const COLORS = {
    accent: '#eab308', // Yellow-500
    bgPrimary: '#0a0a0a', 
    bgCard: 'rgba(17, 24, 39, 0.7)', 
    textPrimary: '#FFFFFF', 
    textSecondary: '#E5E7EB', 
    textMuted: '#9CA3AF', 
    textDisabled: '#6B7280',
    borderLight: 'rgba(255, 255, 255, 0.1)',
};

const getTMDBImage = (path, size = 'w1280') => path ? `https://image.tmdb.org/t/p/${size}${path}` : null;

// ✅ YOUR MASTERPIECE HERO BANNER (Made Universal!)
const UniversalBanner = ({ movie, isMobile }) => {
    const [showTrailer, setShowTrailer] = useState(false);
    const [countdown, setCountdown] = useState(4);
    const [hasClosedTrailer, setHasClosedTrailer] = useState(false);
    const [trailerKey, setTrailerKey] = useState(null);
    const [tagline, setTagline] = useState(movie?.Tagline || '');
    const timerRef = useRef(null);

    // Dynamically fetch the trailer just for this component so it doesn't slow down the server!
    useEffect(() => {
        if (movie?.tmdbId) {
            fetch(`https://api.themoviedb.org/3/movie/${movie.tmdbId}?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&append_to_response=videos`)
                .then(res => res.json())
                .then(data => {
                    const trailer = data.videos?.results?.find(v => v.type === 'Trailer' && v.site === 'YouTube');
                    if (trailer) setTrailerKey(trailer.key);
                    // Fallback: If the cache missed the tagline, fetch it live
                    if (!movie?.Tagline && data.tagline) setTagline(data.tagline);
                })
                .catch(() => {});
        }
    }, [movie]);

    const bannerImage = movie.backdrop_path ? getTMDBImage(movie.backdrop_path, 'w1280') : null;
    const posterImage = movie.Poster;
    const insight = movie.Plot || 'A compelling cinematic experience that demands to be watched.';

    useEffect(() => {
        if (!isMobile && trailerKey && !showTrailer && !hasClosedTrailer) {
            timerRef.current = setInterval(() => {
                setCountdown((prev) => {
                    if (prev <= 1) { clearInterval(timerRef.current); setShowTrailer(true); return 0; }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => { if (timerRef.current) clearInterval(timerRef.current); };
    }, [isMobile, trailerKey, showTrailer, hasClosedTrailer]);

    const handlePlayClick = () => { setShowTrailer(true); setHasClosedTrailer(false); };
    const handleCloseTrailer = () => { setShowTrailer(false); setHasClosedTrailer(true); if (timerRef.current) clearInterval(timerRef.current); };

    const mobileHeroCSS = `
    @media (max-width: 767px) {
      .mobile-hero-row { display: flex; flex-direction: row; align-items: flex-start; width: 100vw; max-width: 100vw; gap: 10px; margin: 0; padding: 0 8px; }
      .mobile-hero-poster { width: 38vw; min-width: 106px; border-radius: 12px; overflow: hidden; box-shadow: 0 3px 14px #0007; margin: 0; flex-shrink: 0; }
      .mobile-hero-poster img { width: 100%; height: auto; border-radius: 12px; display: block; }
      .mobile-psych-card { background: #000000; border-radius: 12px; box-shadow: -6px 0 16px -6px rgba(234, 179, 8, 0.8), 0 2px 12px #0006; margin: 0; flex: 1; border-left: 4px solid #eab308; display: flex; flex-direction: column; justify-content: flex-start; padding: 10px 10px 10px 12px; min-height: 110px; position: relative; }
      .mobile-psych-row { display: flex; align-items: flex-start; gap: 7px; }
      .mobile-psych-icon { min-width: 24px; min-height: 24px; color: #facc15; margin-top: 2px; }
      .mobile-psych-title { font-size: 15px; font-weight: bold; color: #facc15; margin-bottom: 1px; line-height: 1.12; }
      .mobile-psych-desc { font-size: 12.3px; color: #ededed; line-height: 1.36; margin-top: 2px; }
    }`;

    return (
      <motion.div className="relative w-[100vw] left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] overflow-hidden mb-6 sm:mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <style>{mobileHeroCSS}</style>
        <div className="relative h-[300px] sm:h-[400px] lg:h-[600px]">
          <AnimatePresence mode="wait">
            {showTrailer && trailerKey ? (
               <motion.div key="trailer" className="absolute inset-0 overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                 <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=1`} allow="autoplay; encrypted-media" allowFullScreen className="w-full h-full border-0" />
                 <button onClick={handleCloseTrailer} className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 sm:p-3 rounded-full backdrop-blur-md shadow-xl transition-all duration-300 hover:scale-110 z-50" style={{ backgroundColor: `${COLORS.bgPrimary}DD`, color: COLORS.textPrimary }}><X className="w-4 h-4 sm:w-5 sm:h-5" /></button>
               </motion.div>
            ) : (
              <motion.div key="image" className="absolute inset-0 overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
                <div className="relative w-full h-full">
                  {bannerImage ? <Image src={bannerImage} alt={`${movie?.Title} banner`} fill priority sizes="100vw" quality={90} className="object-cover" /> : <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: '#000000' }}><Film className="w-16 h-16 sm:w-24 sm:h-24" style={{ color: COLORS.textMuted }} /></div>}
                  <div className="absolute inset-0 z-10" style={{ background: `linear-gradient(to bottom, transparent 0%, transparent 50%, #000000 90%, #000000 100%), linear-gradient(to right, #000000 0%, transparent 15%, transparent 85%, #000000 100%)` }} />
                </div>
                {trailerKey && (
                  <motion.div className="absolute inset-0 flex items-center justify-center z-20" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1, duration: 0.8 }}>
                    <motion.button onClick={handlePlayClick} className="p-4 sm:p-6 rounded-full backdrop-blur-lg shadow-2xl transition-all duration-300" style={{ backgroundColor: `${COLORS.bgPrimary}BB`, border: `2px solid ${COLORS.textPrimary}`, color: COLORS.textPrimary }} whileHover={{ scale: 1.15, backgroundColor: `${COLORS.accent}DD`, borderColor: COLORS.accent }} whileTap={{ scale: 0.95 }}><Play className="w-6 h-6 sm:w-8 sm:h-8 ml-1" /></motion.button>
                  </motion.div>
                )}
                {!isMobile && trailerKey && !showTrailer && !hasClosedTrailer && countdown > 0 && (
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
            <div className="mobile-hero-poster">{posterImage ? <Image src={posterImage} alt={`${movie?.Title} poster`} width={320} height={480} className="w-full h-auto" priority /> : <div style={{ background: '#000000', width: '100%', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Film style={{ color: COLORS.textMuted }} /></div>}</div>
            <div className="mobile-psych-card">
              <div className="mobile-psych-row"><Star className="mobile-psych-icon" /><div><div className="mobile-psych-title">At a Glance</div></div></div>
              <div className="mobile-psych-desc text-sm mt-1">
                {tagline ? <span className="text-white italic font-medium">"{tagline}"</span> : <span className="text-white font-medium">{insight.substring(0, 85)}...</span>}
              </div>
            </div>
          </div>
        ) : (
          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 items-start">
              <motion.div className="flex-shrink-0 relative w-24 sm:w-48 md:w-56 lg:w-80 mx-auto sm:mx-0" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}>
                <div className="relative" style={{ aspectRatio: '2/3' }}>
                  {posterImage ? <Image src={posterImage} alt={`${movie?.Title} poster`} fill sizes="(max-width: 640px) 96px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 320px" quality={85} className="object-cover rounded-lg sm:rounded-xl shadow-2xl border border-white/5" /> : <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: '#000000', borderRadius: '12px' }}><Film style={{ color: COLORS.textMuted }} /></div>}
                </div>
              </motion.div>
              <motion.div className="w-full sm:w-3/4 md:w-2/3 lg:w-[55%] xl:w-[45%] min-w-0" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.0, duration: 0.8 }}>
                <motion.div className="relative rounded-xl sm:rounded-2xl overflow-hidden p-4 sm:p-6 lg:p-8" style={{ background: '#000000', border: `1px solid ${COLORS.borderLight}`, boxShadow: `0 8px 32px rgba(234, 179, 8, 0.2)` }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }}>
                  <div className="absolute top-0 left-0 right-0 h-0.5 sm:h-1" style={{ background: `linear-gradient(90deg, transparent, ${COLORS.accent}, transparent)` }} />
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                    <motion.div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl flex-shrink-0" style={{ background: `linear-gradient(135deg, ${COLORS.accent}20, ${COLORS.accent}10)`, border: `1px solid ${COLORS.accent}40` }} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}><Star className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" style={{ color: COLORS.accent }} /></motion.div>
                    <div className="min-w-0 flex-1"><h2 className="text-sm sm:text-base lg:text-xl xl:text-2xl font-bold leading-tight" style={{ color: COLORS.accent }}>At a Glance</h2></div>
                  </div>
                  <div className="relative pl-4 sm:pl-6 border-l-[3px]" style={{ borderColor: COLORS.accent, boxShadow: `-8px 0 16px -6px rgba(234, 179, 8, 0.6)` }}>
                    <motion.div className="absolute -left-1.5 sm:-left-2 top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full" style={{ backgroundColor: COLORS.accent }} animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }} />
                    <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed font-normal break-words" style={{ color: COLORS.textSecondary, lineHeight: '1.6' }}>
                      {tagline ? <span className="text-white italic font-medium tracking-wide">"{tagline}"</span> : <span className="text-white tracking-wide">{insight}</span>}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        )}
      </motion.div>
    );
};

// ✅ HELPER: Maps the original data file back to the specific boolean prop
// This ensures all your custom FAQs, DNA, and Intensity Graphs still render perfectly!
const getCollectionProp = (sourceFile) => {
    const mapping = {
        'eyesWideShutMovieData.js': 'fromEyesWideShutCollection',
        'mementoMovieData.js': 'fromMementoCollection',
        'shutterIslandMovieData.js': 'fromShutterIslandCollection',
        'inceptionMovieData.js': 'fromInceptionCollection',
        'survivalMovieData.js': 'fromSurvivalCollection',
        'matrixMovieData.js': 'fromMatrixCollection',
        'blackSwanMovieData.js': 'fromBlackSwanCollection',
        'prestigeMovieData.js': 'fromPrestigeCollection',
        'eroticThrillerMovieData.js': 'fromEroticThrillerCollection',
        'eroticRomanceMovieData.js': 'fromEroticRomanceCollection',
        'greedMovieData.js': 'fromGreedCollection',
        'se7enMovieData.js': 'fromSe7enCollection',
        'raunchyComedyMovieData.js': 'fromRaunchyComedyCollection',
        'roadTripMovieData.js': 'fromRoadTripCollection',
        'thoughtProvokingMovieData.js': 'fromThoughtProvokingCollection',
        'neoNoirMovieData.js': 'fromNeoNoirCollection',
        'bestActionMoviesData.js': 'fromBestActionMoviesCollection',
        'trueStoryMovieData.js': 'fromTrueStoryCollection',
        'decadeMovieData.js': 'fromDecadeCollection',
        'gangsterMovieData.js': 'fromGangsterCollection',
        'bookAdaptationData.js': 'fromBookAdaptationCollection',
        'marriageCrisisMovieData.js': 'fromMarriageCrisisCollection',
        'a24MovieData.js': 'fromA24Collection',
        'darkComedyMovieData.js': 'fromDarkComedyCollection',
        'parasiteMovieData.js': 'fromParasiteCollection',
        'donnieDarkoMovieData.js': 'fromDonnieDarkoCollection',
        'fightClubMovieData.js': 'fromFightClubCollection',
        'oldboyMovieData.js': 'fromOldboyCollection',
        'interstellarMovieData.js': 'fromInterstellarCollection',
        'dramaMovieData.js': 'fromDramaCollection',
        'psychologicalThrillerMovieData.js': 'fromPsychologicalThrillerCollection',
        'thrillerMovieData.js': 'fromThrillerCollection',
        'mysteryThrillerMovieData.js': 'fromMysteryThrillerCollection',
        'detectiveThrillerMovieData.js': 'fromDetectiveThrillerCollection',
        'crimeThrillerMovieData.js': 'fromCrimeThrillerCollection',
        'heistThrillerMovieData.js': 'fromHeistThrillerCollection',
        'timeTravelMovieData.js': 'fromTimeTravelCollection',
        'sciFiMovieData.js': 'fromSciFiCollection',
        'revengeMovieData.js': 'fromRevengeCollection',
        'warFilmsMovieData.js': 'fromWarFilmsCollection',
        'hboActionMovieData.js': 'fromHboActionCollection',
        'hboMaxRomanceMovieData.js': 'fromHboRomanceCollection',
        'hboMaxThrillerMovieData.js': 'fromHboMaxThrillerCollection',
        'hboMaxFamilyMovieData.js': 'fromHboMaxFamilyCollection',
        'hboMaxSciFiMovieData.js': 'fromHboMaxSciFiCollection',
        'hboMaxHorrorMovieData.js': 'fromHboMaxHorrorCollection',
        'hboMaxBestMoviesData.js': 'fromHboMaxBestCollection',
        'hboMaxDramaMovieData.js': 'fromHboMaxDramaCollection',
        'hboMaxComedyMovieData.js': 'fromHboMaxComedyCollection',
        'huluActionMovieData.js': 'fromHuluActionCollection',
        'huluRomanceMovieData.js': 'fromHuluRomanceCollection',
        'huluHorrorMovieData.js': 'fromHuluHorrorCollection',
        'huluComedyMovieData.js': 'fromHuluComedyCollection',
        'huluSciFiMovieData.js': 'fromHuluSciFiCollection',
        'huluThrillerMovieData.js': 'fromHuluThrillerCollection',
        'huluBestMoviesData.js': 'fromHuluBestCollection',
        'huluDramaMovieData.js': 'fromHuluDramaCollection',
        'huluFamilyMovieData.js': 'fromHuluFamilyCollection',
        'paramountActionMovieData.js': 'fromParamountActionCollection',
        'paramountSciFiMovieData.js': 'fromParamountSciFiCollection',
        'paramountRomanceMovieData.js': 'fromParamountRomanceCollection',
        'paramountDramaMovieData.js': 'fromParamountDramaCollection',
        'paramountThrillerMovieData.js': 'fromParamountThrillerCollection',
        'paramountFamilyMovieData.js': 'fromParamountFamilyCollection',
        'paramountHorrorMovieData.js': 'fromParamountHorrorCollection',
        'paramountComedyMovieData.js': 'fromParamountComedyCollection',
        'paramountBestMoviesData.js': 'fromParamountBestCollection',
        'peacockActionAdventureData.js': 'fromPeacockActionAdventureCollection',
        'peacockSciFiMovieData.js': 'fromPeacockSciFiCollection',
        'peacockRomanceMovieData.js': 'fromPeacockRomanceCollection',
        'peacockFamilyMovieData.js': 'fromPeacockFamilyCollection',
        'peacockDramaMovieData.js': 'fromPeacockDramaCollection',
        'peacockThrillerMovieData.js': 'fromPeacockThrillerCollection',
        'peacockBestMoviesData.js': 'fromPeacockBestCollection',
        'peacockComedyMovieData.js': 'fromPeacockComedyCollection'
    };
    return mapping[sourceFile] || null;
};

export default function UniversalMoviePage({ movie }) {
    const router = useRouter();
    
    // 🔥 The Magic: Automatically generate the breadcrumb based on the Primary Collection!
    const getCleanTitle = (title) => title.toUpperCase().replace(/^(THE\s+)?(10\s+)?(TOP\s+10\s+)?BEST\s+/i, '').replace(/^(10\s+)?(.*?)\s*MOVIES\s+LIKE\s+/i, '').replace(/\s+MOVIES(\s+OF\s+ALL\s+TIME)?$/i, '').replace(/\s*\(.*?\)$/i, '');
    
    const defaultLabel = movie?.primaryCollectionTitle ? `BACK TO ${getCleanTitle(movie.primaryCollectionTitle)}` : 'BACK TO HOME';
    const defaultUrl = movie?.primaryCollectionSlug ? `/collection/${movie.primaryCollectionSlug}` : '/';

    // Initialize state immediately with the dynamic breadcrumb so Google Bots can crawl it!
    const [breadcrumb, setBreadcrumb] = useState({ label: defaultLabel, url: defaultUrl });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const fromCollection = sessionStorage.getItem('fromCollection');
        const savedCollectionSlug = sessionStorage.getItem('currentCollection');
        const savedCollectionTitle = sessionStorage.getItem('collectionTitle');
        
        // Only override the default if they specifically clicked through from a DIFFERENT collection during this session
        if (fromCollection === 'true' && savedCollectionTitle && savedCollectionSlug) {
            setBreadcrumb({ 
                label: `BACK TO ${getCleanTitle(savedCollectionTitle)}`, 
                url: `/collection/${savedCollectionSlug}` 
            });
        }
    }, []);

    if (router.isFallback || !movie) return <div className="min-h-screen bg-black" />;

    // Generate the specific collection boolean dynamically!
    const propName = getCollectionProp(movie.sourceFile);
    const dynamicProps = propName ? { [propName]: true } : {};

    return (
        <div className="min-h-screen bg-black selection:bg-yellow-500/30 font-inter text-gray-200">
            <div className="absolute inset-0 z-0 pointer-events-none"><CinematicBackground /></div>
            <Head>
                <title>{`${movie.Title} Parents Guide (Skip Sex & Nudity Timestamps)`}</title>
                <meta name="description" content={`Is there nudity in ${movie.Title}? Get the exact minute-by-minute timestamps to skip mature scenes. Read our 100% verified Parents Guide and Cinematic Impact review.`} />
                <link rel="canonical" href={`https://filmiway.com/movie/${movie.slug}`} />
            </Head>
            <Header />
            <main className="relative z-10 pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="mb-6 sm:mb-8 relative z-50">
                    <Link href={breadcrumb.url} className="inline-flex items-center gap-1.5 text-gray-500 hover:text-gray-200 transition-colors text-xs sm:text-sm font-medium tracking-[0.1em] uppercase group">
                        <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
                        <span suppressHydrationWarning>{breadcrumb.label}</span>
                    </Link>
                </motion.div>

                {/* 🔥 YOUR BEAUTIFUL HERO BANNER RE-INJECTED */}
                <UniversalBanner movie={movie} isMobile={isMobile} />

                {/* 🔥 PASSING DYNAMIC PROPS INJECTS THE SPECIFIC FAQ/GRAPH COMPONENT AUTOMATICALLY */}
                <MovieDetailsSection movie={movie} {...dynamicProps} />
            </main>
        </div>
    );
}

export async function getStaticPaths() {
    return { paths: masterDatabase.map((m) => ({ params: { slug: m.slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
    const baseMovie = masterDatabase.find((m) => m.slug === params.slug) || null;
    if (!baseMovie) return { notFound: true };
    
    const cacheData = tmdbCache[baseMovie.imdbID] || {};
    
    // 🔥 Look up the primary collection for this specific movie
    const primarySlug = getPrimaryCollectionForMovie(baseMovie.imdbID);
    const primaryTitle = primarySlug && COLLECTIONS[primarySlug] ? COLLECTIONS[primarySlug].title : null;

    const movie = {
        ...baseMovie,
        poster_path: cacheData.poster_path || null,
        backdrop_path: cacheData.backdrop_path || null,
        Poster: cacheData.poster_path ? `https://image.tmdb.org/t/p/w780${cacheData.poster_path}` : null,
        Plot: cacheData.overview || '',
        Rated: cacheData.ageRating || 'NR',
        Tagline: cacheData.tagline || '',
        primaryCollectionSlug: primarySlug || null,
        primaryCollectionTitle: primaryTitle || null
    };
    
    return { props: { movie } };
}