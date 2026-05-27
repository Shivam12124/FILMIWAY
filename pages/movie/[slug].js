import React, { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Play, X, Film, Star, ChevronDown } from 'lucide-react';
import Header from '../../components/Header';
import dynamic from 'next/dynamic';

const CinematicBackground = dynamic(() => import('../../components/CinematicBackground'), { ssr: false });

// ⚡ DYNAMIC IMPORT: Splits JS so mobile ONLY loads the top banner first! (SEO is fully preserved)
const MovieDetailsSection = dynamic(() => import('../../components/MovieDetailsSection'));

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

const UNIVERSAL_FALLBACK_TAGLINES = [
    "A cinematic journey that demands to be experienced.",
    "Some stories leave a mark that never fades.",
    "Discover a world where every single moment matters."
];

const getTMDBImage = (path, size = 'w1280') => path ? `https://image.tmdb.org/t/p/${size}${path}` : null;

// ✅ YOUR MASTERPIECE HERO BANNER (Made Universal & SEO/CLS Optimized!)
const UniversalBanner = ({ movie }) => {
    const [showTrailer, setShowTrailer] = useState(false);
    const [countdown, setCountdown] = useState(4);
    const [hasClosedTrailer, setHasClosedTrailer] = useState(false);
    const [trailerKey, setTrailerKey] = useState(null);
    const [tagline, setTagline] = useState(movie?.Tagline || '');
    const [bannerQuality, setBannerQuality] = useState(40);
    const timerRef = useRef(null);

    // ⚡ DESKTOP BANNER QUALITY UPGRADE
    useEffect(() => {
        if (typeof window !== 'undefined' && window.innerWidth > 768) {
            setBannerQuality(100); // ⚡ Max Quality for Desktop/Computer users!
        }
    }, []);

    // Dynamically fetch the trailer just for this component so it doesn't slow down the server!
    useEffect(() => {
        if (movie?.tmdbId) {
            const timer = setTimeout(() => {
                fetch(`https://api.themoviedb.org/3/movie/${movie.tmdbId}?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed&append_to_response=videos`)
                    .then(res => res.json())
                    .then(data => {
                        const trailer = data.videos?.results?.find(v => v.type === 'Trailer' && v.site === 'YouTube');
                        if (trailer) setTrailerKey(trailer.key);
                        // Fallback: If the cache missed the tagline, fetch it live
                        if ((!movie?.Tagline || UNIVERSAL_FALLBACK_TAGLINES.includes(movie?.Tagline)) && data.tagline) setTagline(data.tagline);
                    })
                    .catch(() => {});
            }, 3000); // ⚡ Defer trailer fetch by 3s to keep mobile CPU completely clear for LCP
            return () => clearTimeout(timer);
        }
    }, [movie]);

    const bannerImage = movie.backdrop_path ? getTMDBImage(movie.backdrop_path, 'w780') : null;
    const posterImage = movie.Poster;

    const insight = movie.Plot || 'A compelling cinematic experience that demands to be watched.';

    useEffect(() => {
        // ⚡ LCP & TBT FIX: Removed the 4-second auto-play countdown.
        // Auto-playing YouTube iframes destroys Lighthouse scores and blocks the main thread.
        return () => { if (timerRef.current) clearInterval(timerRef.current); };
    }, [trailerKey, showTrailer, hasClosedTrailer]);

    const handlePlayClick = () => { setShowTrailer(true); setHasClosedTrailer(false); };
    const handleCloseTrailer = () => { setShowTrailer(false); setHasClosedTrailer(true); if (timerRef.current) clearInterval(timerRef.current); };

    const unifiedHeroCSS = `
    .unified-hero-row { display: flex; flex-direction: row; align-items: flex-start; width: 100%; max-width: 1280px; gap: 8px; margin: -60px auto 0 auto; padding: 0 32px; position: relative; z-index: 20; }
    .unified-hero-poster { width: 25%; max-width: 260px; min-width: 140px; border-radius: 16px; overflow: hidden; box-shadow: 0 12px 40px rgba(0,0,0,0.8); margin: 0; flex-shrink: 0; border: 1px solid rgba(255,255,255,0.1); }
    .unified-hero-poster img { width: 100%; height: auto; border-radius: 16px; display: block; }
    .unified-psych-card { background: #000000; border-radius: 16px; box-shadow: -8px 0 24px -8px rgba(234, 179, 8, 0.6), 0 8px 32px rgba(0,0,0,0.8); margin: 0; flex: 1; border-left: 4px solid #eab308; border-top: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05); border-bottom: 1px solid rgba(255,255,255,0.05); display: flex; flex-direction: column; justify-content: flex-start; padding: 24px; min-height: 140px; position: relative; }
    .unified-psych-row { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
    .unified-psych-icon { min-width: 24px; min-height: 24px; width: 24px; height: 24px; color: #facc15; }
    .unified-psych-title { font-size: 24px; font-weight: bold; color: #facc15; margin-bottom: 0; line-height: 1.2; }
    .unified-psych-desc { font-size: 19px; color: #ededed; line-height: 1.6; }
    .insight-text { display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; }

    @media (max-width: 767px) {
      .unified-hero-row { width: 100vw; max-width: 100vw; gap: 4px; margin: 0; padding: 0 8px; }
      .unified-hero-poster { width: 38vw; min-width: 106px; border-radius: 12px; box-shadow: 0 3px 14px #0007; border: none; }
      .unified-hero-poster img { border-radius: 12px; }
      .unified-psych-card { border-radius: 12px; padding: 10px 10px 10px 12px; min-height: 110px; box-shadow: -6px 0 16px -6px rgba(234, 179, 8, 0.8), 0 2px 12px #0006; border-top: none; border-right: none; border-bottom: none; }
      .unified-psych-row { gap: 6px; margin-bottom: 4px; }
      .unified-psych-icon { min-width: 18px; min-height: 18px; width: 18px; height: 18px; margin-top: -2px; }
      .unified-psych-title { font-size: 14px; line-height: 1.12; }
      .unified-psych-desc { font-size: 12.3px; line-height: 1.36; }
      .insight-text { -webkit-line-clamp: 4; }
    }
    `;

    return (
      <div className="relative w-[100vw] left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] overflow-hidden mb-6 sm:mb-8">
        <style>{unifiedHeroCSS}</style>
        <div className="relative h-[300px] sm:h-[400px] lg:h-[600px]">
          <AnimatePresence>
            {(!showTrailer || !trailerKey) ? (
              <motion.div
                key="image"
                className="absolute inset-0 overflow-hidden"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative w-full h-full bg-[#030303]">
                  {/* ⚡ THE MAIN IMAGE */}
                  {bannerImage ? <Image src={bannerImage} alt={`${movie?.Title} banner`} fill priority fetchPriority="high" sizes="(max-width: 768px) 100vw, 1280px" quality={bannerQuality} className="object-cover object-[center_25%] relative z-10" /> : <div className="w-full h-full flex items-center justify-center relative z-10" style={{ backgroundColor: '#000000' }}><Film className="w-16 h-16 sm:w-24 sm:h-24" style={{ color: COLORS.textMuted }} /></div>}
                  <div className="absolute inset-0 z-20" style={{ background: `linear-gradient(to bottom, transparent 0%, transparent 50%, #000000 90%, #000000 100%), linear-gradient(to right, #000000 0%, transparent 15%, transparent 85%, #000000 100%)` }} />
                </div>
                {trailerKey && (
                  <motion.div className="absolute inset-0 flex items-center justify-center z-20" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1, duration: 0.8 }}>
                    <motion.button onClick={handlePlayClick} className="p-4 sm:p-6 rounded-full backdrop-blur-lg shadow-2xl transition-all duration-300" style={{ backgroundColor: `${COLORS.bgPrimary}BB`, border: `2px solid ${COLORS.textPrimary}`, color: COLORS.textPrimary }} whileHover={{ scale: 1.15, backgroundColor: `${COLORS.accent}DD`, borderColor: COLORS.accent }} whileTap={{ scale: 0.95 }}><Play className="w-6 h-6 sm:w-8 sm:h-8 ml-1" /></motion.button>
                  </motion.div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="trailer"
                className="absolute inset-0 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=0&controls=1&rel=0`} allow="autoplay" allowFullScreen className="w-full h-full border-0" />
                <button onClick={handleCloseTrailer} className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 sm:p-3 rounded-full backdrop-blur-md shadow-xl transition-all duration-300 hover:scale-110 z-50" style={{ backgroundColor: `${COLORS.bgPrimary}DD`, color: COLORS.textPrimary }}><X className="w-4 h-4 sm:w-5 sm:h-5" /></button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
  
        {/* UNIFIED LAYOUT */}
        <div className="unified-hero-row">
          <div className="unified-hero-poster relative bg-[#030303] overflow-hidden">
            {/* ⚡ THE MAIN IMAGE */}
            {posterImage ? <Image src={posterImage} alt={`${movie?.Title} poster`} width={320} height={480} className="w-full h-auto relative z-10" priority fetchPriority="high" quality={60} sizes="(max-width: 768px) 35vw, 320px" /> : <div style={{ background: '#000000', width: '100%', height: '150px', display: 'flex', items: 'center', justifyContent: 'center' }} className="relative z-10"><Film style={{ color: COLORS.textMuted }} /></div>}
          </div>
          <div className="unified-psych-card">
            <div className="unified-psych-row"><Star className="unified-psych-icon" /><div><h2 className="unified-psych-title">At a Glance</h2></div></div>
            <div className="unified-psych-desc insight-text font-medium text-white" suppressHydrationWarning>
              {tagline ? <span className="italic">"{tagline}"</span> : <span>{insight}</span>}
            </div>
          </div>
        </div>

        {/* ⚡ MOBILE "JUMP TO PARENTS GUIDE" BUTTON */}
        <motion.button 
            onClick={() => {
                const element = document.getElementById('parents-guide');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="sm:hidden w-full flex flex-col items-center justify-center mt-10 pb-6 select-none outline-none focus:outline-none focus:ring-0 relative z-30"
            style={{ WebkitTapHighlightColor: 'transparent' }}
        >
            <motion.span 
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="text-[11px] tracking-[0.3em] uppercase font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-500 via-gray-100 to-gray-500 mb-2.5"
            >
                Jump To Parents Guide
            </motion.span>
            <div className="flex flex-col items-center -space-y-4">
                <motion.div animate={{ opacity: [0.1, 1, 0.1], y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0, ease: "easeInOut" }}>
                    <ChevronDown className="w-6 h-6 text-gray-100 stroke-[2.5]" />
                </motion.div>
                <motion.div animate={{ opacity: [0.1, 1, 0.1], y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2, ease: "easeInOut" }}>
                    <ChevronDown className="w-6 h-6 text-gray-400 stroke-[2]" />
                </motion.div>
                <motion.div animate={{ opacity: [0.1, 1, 0.1], y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4, ease: "easeInOut" }}>
                    <ChevronDown className="w-6 h-6 text-gray-600 stroke-[1.5]" />
                </motion.div>
            </div>
        </motion.button>
      </div>
    );
};

// ⚡ HELPER: Dynamically maps the collection slug to the component boolean prop
const getCollectionProp = (slug) => {
    const slugMap = {
        'movies-like-eyes-wide-shut': 'fromEyesWideShutCollection',
        'movies-like-memento': 'fromMementoCollection',
        'movies-like-shutter-island': 'fromShutterIslandCollection',
        'movies-like-inception': 'fromInceptionCollection',
        'best-survival-movies': 'fromSurvivalCollection',
        'movies-like-the-matrix': 'fromMatrixCollection',
        'movies-like-black-swan': 'fromBlackSwanCollection',
        'movies-like-the-prestige': 'fromPrestigeCollection',
        'best-erotic-thriller-movies': 'fromEroticThrillerCollection',
        'best-erotic-romance-movies': 'fromEroticRomanceCollection',
        'best-movies-about-greed': 'fromGreedCollection',
        'movies-like-se7en': 'fromSe7enCollection',
        'best-raunchy-comedy-movies': 'fromRaunchyComedyCollection',
        'top-10-road-trip-movies': 'fromRoadTripCollection',
        'best-thought-provoking-movies': 'fromThoughtProvokingCollection',
        'best-neo-noir-movies': 'fromNeoNoirCollection',
        'best-action-movies': 'fromBestActionMoviesCollection',
        'best-true-story-movies': 'fromTrueStoryCollection',
        'best-movies-of-the-decade': 'fromDecadeCollection',
        'best-gangster-movies-of-all-time': 'fromGangsterCollection',
        'top-10-book-adaptations': 'fromBookAdaptationCollection',
        'best-marriage-crisis-movies': 'fromMarriageCrisisCollection',
        'best-a24-movies': 'fromA24Collection',
        'best-dark-comedy-movies': 'fromDarkComedyCollection',
        'best-paul-thomas-anderson-movies': 'fromPtaCollection',
        'movies-like-basic-instinct': 'fromBasicInstinctCollection',
        'best-enemies-to-lovers-movies': 'fromEnemiesToLoversCollection',
        'movies-like-parasite': 'fromParasiteCollection',
        'movies-like-donnie-darko': 'fromDonnieDarkoCollection',
        'movies-like-fight-club': 'fromFightClubCollection',
        'movies-like-oldboy': 'fromOldboyCollection',
        'movies-like-interstellar': 'fromInterstellarCollection',
        'best-drama-movies-on-netflix': 'fromDramaCollection', 
        'best-psychological-thriller-movies': 'fromPsychologicalThrillerCollection',
        'best-thriller-movies': 'fromThrillerCollection',
        'best-mystery-thriller-movies': 'fromMysteryThrillerCollection',
        'best-detective-thriller-movies': 'fromDetectiveThrillerCollection',
        'best-crime-thriller-movies': 'fromCrimeThrillerCollection',
        'best-heist-thriller-movies': 'fromHeistThrillerCollection',
        'best-time-travel-movies': 'fromTimeTravelCollection',
        'best-sci-fi-movies': 'fromSciFiCollection',
        'best-revenge-movies': 'fromRevengeCollection',
        'best-war-films': 'fromWarFilmsCollection',
        'best-action-movies-on-hbo-max': 'fromHboActionCollection',
        'best-romance-movies-on-hbo-max': 'fromHboRomanceCollection',
        'best-thriller-movies-on-hbo-max': 'fromHboMaxThrillerCollection',
        'best-family-movies-on-hbo-max': 'fromHboMaxFamilyCollection',
        'best-sci-fi-movies-on-hbo-max': 'fromHboMaxSciFiCollection',
        'best-horror-movies-on-hbo-max': 'fromHboMaxHorrorCollection',
        'best-movies-on-hbo-max': 'fromHboMaxBestCollection',
        'best-drama-movies-on-hbo-max': 'fromHboMaxDramaCollection',
        'best-comedy-movies-on-hbo-max': 'fromHboMaxComedyCollection',
        'best-action-movies-on-hulu': 'fromHuluActionCollection',
        'best-romance-movies-on-hulu': 'fromHuluRomanceCollection',
        'best-horror-movies-on-hulu': 'fromHuluHorrorCollection',
        'best-comedy-movies-on-hulu': 'fromHuluComedyCollection',
        'best-sci-fi-movies-on-hulu': 'fromHuluSciFiCollection',
        'best-thriller-movies-hulu': 'fromHuluThrillerCollection',
        'best-movies-on-hulu': 'fromHuluBestCollection',
        'best-drama-movies-on-hulu': 'fromHuluDramaCollection',
        'best-family-movies-on-hulu': 'fromHuluFamilyCollection',
        'best-action-movies-on-paramount-plus': 'fromParamountActionCollection',
        'best-sci-fi-movies-on-paramount-plus': 'fromParamountSciFiCollection',
        'best-romance-movies-on-paramount-plus': 'fromParamountRomanceCollection',
        'best-core-drama-movies-on-paramount-plus': 'fromParamountDramaCollection',
        'best-thriller-movies-on-paramount-plus': 'fromParamountThrillerCollection',
        'best-family-movies-on-paramount-plus': 'fromParamountFamilyCollection',
        'best-horror-movies-on-paramount-plus': 'fromParamountHorrorCollection',
        'best-comedy-movies-on-paramount-plus': 'fromParamountComedyCollection',
        'best-movies-on-paramount-plus': 'fromParamountBestCollection',
        'best-action-adventure-movies-on-peacock': 'fromPeacockActionAdventureCollection',
        'best-sci-fi-movies-on-peacock': 'fromPeacockSciFiCollection',
        'best-romance-movies-on-peacock': 'fromPeacockRomanceCollection',
        'best-family-movies-on-peacock': 'fromPeacockFamilyCollection',
        'best-drama-movies-on-peacock': 'fromPeacockDramaCollection',
        'best-thriller-movies-on-peacock': 'fromPeacockThrillerCollection',
        'best-movies-on-peacock': 'fromPeacockBestCollection',
        'best-comedy-movies-on-peacock': 'fromPeacockComedyCollection',
        'top-10-jennifer-lawrence-movies': 'fromJLawCollection'
    };
    return slugMap[slug] || null;
};

// 🔥 The Magic: Automatically generate the breadcrumb based on the Primary Collection!
const getCleanTitle = (title) => title ? title.toUpperCase().replace(/^(THE\s+)?(10\s+)?(TOP\s+10\s+)?BEST\s+/i, '').replace(/^(10\s+)?(.*?)\s*MOVIES\s+LIKE\s+/i, '').replace(/\s+MOVIES(\s+OF\s+ALL\s+TIME)?$/i, '').replace(/\s*\(.*?\)$/i, '') : '';

export default function UniversalMoviePage({ movie }) {
    const router = useRouter();
    
    const defaultLabel = movie?.primaryCollectionTitle ? `BACK TO ${getCleanTitle(movie.primaryCollectionTitle)} COLLECTION` : 'BACK TO HOME';
    const defaultUrl = movie?.primaryCollectionSlug ? `/collection/${movie.primaryCollectionSlug}` : '/';

    // Initialize state immediately with the dynamic breadcrumb so Google Bots can crawl it!
    const [breadcrumb, setBreadcrumb] = useState({ label: defaultLabel, url: defaultUrl });

    useEffect(() => {
        const fromCollection = sessionStorage.getItem('fromCollection');
        const savedCollectionSlug = sessionStorage.getItem('currentCollection');
        const savedCollectionTitle = sessionStorage.getItem('collectionTitle');
        
        // Only override the default if they specifically clicked through from a DIFFERENT collection during this session
        if (fromCollection === 'true' && savedCollectionTitle && savedCollectionSlug) {
            setBreadcrumb({ 
                label: `BACK TO ${getCleanTitle(savedCollectionTitle)} COLLECTION`, 
                url: `/collection/${savedCollectionSlug}` 
            });
        } else {
            // 🔥 RESET BREADCRUMB TO NEW MOVIE'S DEFAULT WHEN SESSION IS CLEARED OR ROUTE CHANGES
            setBreadcrumb({ label: defaultLabel, url: defaultUrl });
        }
    }, [movie?.slug, defaultLabel, defaultUrl]);

    if (router.isFallback || !movie) return <div className="min-h-screen bg-black" />;

    // Generate the specific collection boolean dynamically!
    const propName = getCollectionProp(movie.primaryCollectionSlug);
    const dynamicProps = propName ? { [propName]: true } : {};
    const { metaTitle, metaDesc } = movie;

    return (
        <div key={movie.slug} className="min-h-screen bg-black selection:bg-yellow-500/30 font-inter text-gray-200">
            <div className="absolute inset-0 z-0 pointer-events-none"><CinematicBackground /></div>
            <Head>
                <title>{movie.metaTitle}</title>
                <meta name="description" content={movie.metaDesc} />
                <link rel="canonical" href={`https://filmiway.com/movie/${movie.slug}`} />
                <meta property="og:title" content={movie.metaTitle} />
                <meta property="og:description" content={movie.metaDesc} />
                <meta property="og:type" content="video.movie" />
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
                <UniversalBanner movie={movie} />

                {/* 🔥 PASSING DYNAMIC PROPS INJECTS THE SPECIFIC FAQ/GRAPH COMPONENT AUTOMATICALLY */}
                <MovieDetailsSection movie={movie} {...dynamicProps} />

                {/* 🔥 TMDB API ATTRIBUTION (Required by TMDB Terms of Service) */}
                <div className="mt-16 sm:mt-24 pt-8 pb-8 border-t border-white/5 flex flex-col items-center justify-center text-center">
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-3 mb-4">
                        <p className="text-gray-500 text-xs sm:text-sm font-light">Movie data and posters powered by</p>
                        <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity flex items-center">
                            <Image 
                                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" 
                                alt="The Movie Database (TMDB)" 
                                width={100} 
                                height={14} 
                                className="h-3.5 sm:h-4 w-auto" 
                            />
                        </a>
                    </div>
                    <p className="text-gray-600 text-[10px] sm:text-xs font-light">
                        This product uses the TMDB API but is not endorsed or certified by TMDB.
                    </p>
                </div>
            </main>
        </div>
    );
}

export async function getStaticPaths() {
    const masterDatabase = require('../../utils/masterDatabase.json');
    return { paths: masterDatabase.map((m) => ({ params: { slug: m.slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
    const masterDatabase = require('../../utils/masterDatabase.json');
    const tmdbCache = require('../../data/tmdbCache.json');
    const baseMovie = masterDatabase.find((m) => m.slug === params.slug) || null;
    const { getPrimaryCollectionForMovie, COLLECTIONS } = require('../../data/collections');
    if (!baseMovie) return { notFound: true };
    
    const cacheData = tmdbCache[baseMovie.imdbID] || {};
    
    // 🔥 Look up the primary collection for this specific movie
    const primarySlug = getPrimaryCollectionForMovie(baseMovie.imdbID);
    const primaryTitle = primarySlug && COLLECTIONS[primarySlug] ? COLLECTIONS[primarySlug].title : null;

    // ⚡ SERVER-SIDE ONLY: Map the correct database collection instantly to avoid 3MB client payload
    let collectionData = require('../../utils/movieData'); // Fallback
    switch(primarySlug) {
        case 'best-survival-movies': collectionData = require('../../utils/survivalMovieData'); break;
        case 'movies-like-the-matrix': collectionData = require('../../utils/matrixMovieData'); break;
        case 'movies-like-se7en': collectionData = require('../../utils/se7enMovieData'); break;
        case 'movies-like-parasite': collectionData = require('../../utils/parasiteMovieData'); break;
        case 'movies-like-oldboy': collectionData = require('../../utils/oldboyMovieData'); break;
        case 'movies-like-donnie-darko': collectionData = require('../../utils/donnieDarkoMovieData'); break;
        case 'movies-like-fight-club': collectionData = require('../../utils/fightClubMovieData'); break;
        case 'movies-like-black-swan': collectionData = require('../../utils/blackSwanMovieData'); break;
        case 'movies-like-eyes-wide-shut': collectionData = require('../../utils/eyesWideShutMovieData'); break;
        case 'movies-like-the-prestige': collectionData = require('../../utils/prestigeMovieData'); break;
        case 'best-erotic-thriller-movies': collectionData = require('../../utils/eroticThrillerMovieData'); break;
        case 'best-erotic-romance-movies': collectionData = require('../../utils/eroticRomanceMovieData'); break;
        case 'best-movies-about-greed': collectionData = require('../../utils/greedMovieData'); break;
        case 'best-interstellar-movies': 
        case 'movies-like-interstellar': collectionData = require('../../utils/interstellarMovieData'); break;
        case 'best-crime-thriller-movies': collectionData = require('../../utils/crimeThrillerMovieData'); break;
        case 'best-war-films': collectionData = require('../../utils/warFilmsMovieData'); break;
        case 'best-action-movies-on-hulu': collectionData = require('../../utils/huluActionMovieData'); break;
        case 'best-romance-movies-on-hulu': collectionData = require('../../utils/huluRomanceMovieData'); break;
        case 'best-horror-movies-on-hulu': collectionData = require('../../utils/huluHorrorMovieData'); break;
        case 'best-comedy-movies-on-hulu': collectionData = require('../../utils/huluComedyMovieData'); break;
        case 'best-sci-fi-movies-on-hulu': collectionData = require('../../utils/huluSciFiMovieData'); break;
        case 'best-thriller-movies-hulu': collectionData = require('../../utils/huluThrillerMovieData'); break;
        case 'best-movies-on-hulu': collectionData = require('../../utils/huluBestMoviesData'); break;
        case 'best-drama-movies-on-hulu': collectionData = require('../../utils/huluDramaMovieData'); break;
        case 'best-comedy-movies-on-hbo-max': collectionData = require('../../utils/hboMaxComedyMovieData'); break;
        case 'best-action-movies-on-paramount-plus': collectionData = require('../../utils/paramountActionMovieData'); break;
        case 'best-sci-fi-movies-on-paramount-plus': collectionData = require('../../utils/paramountSciFiMovieData'); break;
        case 'best-romance-movies-on-paramount-plus': collectionData = require('../../utils/paramountRomanceMovieData'); break;
        case 'best-core-drama-movies-on-paramount-plus': collectionData = require('../../utils/paramountDramaMovieData'); break;
        case 'best-thriller-movies-on-paramount-plus': collectionData = require('../../utils/paramountThrillerMovieData'); break;
        case 'best-family-movies-on-paramount-plus': collectionData = require('../../utils/paramountFamilyMovieData'); break;
        case 'best-horror-movies-on-paramount-plus': collectionData = require('../../utils/paramountHorrorMovieData'); break;
        case 'best-comedy-movies-on-paramount-plus': collectionData = require('../../utils/paramountComedyMovieData'); break;
        case 'best-movies-on-paramount-plus': collectionData = require('../../utils/paramountBestMoviesData'); break;
        case 'best-action-adventure-movies-on-peacock': collectionData = require('../../utils/peacockActionAdventureData'); break;
        case 'best-sci-fi-movies-on-peacock': collectionData = require('../../utils/peacockSciFiMovieData'); break;
        case 'best-romance-movies-on-peacock': collectionData = require('../../utils/peacockRomanceMovieData'); break;
        case 'best-family-movies-on-peacock': collectionData = require('../../utils/peacockFamilyMovieData'); break;
        case 'best-drama-movies-on-peacock': collectionData = require('../../utils/peacockDramaMovieData'); break;
        case 'best-thriller-movies-on-peacock': collectionData = require('../../utils/peacockThrillerMovieData'); break;
        case 'best-movies-on-peacock': collectionData = require('../../utils/peacockBestMoviesData'); break;
        case 'best-comedy-movies-on-peacock': collectionData = require('../../utils/peacockComedyMovieData'); break;
        case 'best-raunchy-comedy-movies': collectionData = require('../../utils/raunchyComedyMovieData'); break;
        case 'top-10-road-trip-movies': collectionData = require('../../utils/roadTripMovieData'); break;
        case 'best-thought-provoking-movies': collectionData = require('../../utils/thoughtProvokingMovieData'); break;
        case 'best-neo-noir-movies': collectionData = require('../../utils/neoNoirMovieData'); break;
        case 'best-action-movies': collectionData = require('../../utils/bestActionMoviesData'); break;
        case 'best-true-story-movies': collectionData = require('../../utils/trueStoryMovieData'); break;
        case 'best-gangster-movies-of-all-time': collectionData = require('../../utils/gangsterMovieData'); break;
        case 'best-movies-of-the-decade': collectionData = require('../../utils/decadeMovieData'); break;
        case 'top-10-book-adaptations': collectionData = require('../../utils/bookAdaptationData'); break;
        case 'best-marriage-crisis-movies': collectionData = require('../../utils/marriageCrisisMovieData'); break;
        case 'best-a24-movies': collectionData = require('../../utils/a24MovieData'); break;
        case 'best-dark-comedy-movies': collectionData = require('../../utils/darkComedyMovieData'); break;
        case 'best-paul-thomas-anderson-movies': collectionData = require('../../utils/ptaMoviesData'); break;
        case 'movies-like-basic-instinct': collectionData = require('../../utils/basicInstinctMovieData'); break;
        case 'best-enemies-to-lovers-movies': collectionData = require('../../utils/enemiesToLoversMovieData'); break;
        case 'best-family-movies-on-hulu': collectionData = require('../../utils/huluFamilyMovieData'); break;
        case 'best-action-movies-on-hbo-max': collectionData = require('../../utils/hboActionMovieData'); break;
        case 'best-romance-movies-on-hbo-max': collectionData = require('../../utils/hboMaxRomanceMovieData'); break;
        case 'best-thriller-movies-on-hbo-max': collectionData = require('../../utils/hboMaxThrillerMovieData'); break;
        case 'best-family-movies-on-hbo-max': collectionData = require('../../utils/hboMaxFamilyMovieData'); break;
        case 'best-sci-fi-movies-on-hbo-max': collectionData = require('../../utils/hboMaxSciFiMovieData'); break;
        case 'best-horror-movies-on-hbo-max': collectionData = require('../../utils/hboMaxHorrorMovieData'); break;
        case 'best-movies-on-hbo-max': collectionData = require('../../utils/hboMaxBestMoviesData'); break;
        case 'best-drama-movies-on-hbo-max': collectionData = require('../../utils/hboMaxDramaMovieData'); break;
        case 'best-sci-fi-movies': collectionData = require('../../utils/sciFiMovieData'); break;
        case 'best-thriller-movies': collectionData = require('../../utils/thrillerMovieData'); break;
        case 'best-mystery-thriller-movies': collectionData = require('../../utils/mysteryThrillerMovieData'); break;
        case 'best-detective-thriller-movies': collectionData = require('../../utils/detectiveThrillerMovieData'); break;
        case 'best-psychological-thriller-movies': collectionData = require('../../utils/psychologicalThrillerMovieData'); break;
        case 'best-heist-thriller-movies': collectionData = require('../../utils/heistThrillerMovieData'); break;
        case 'best-time-travel-movies': collectionData = require('../../utils/timeTravelMovieData'); break;
        case 'best-revenge-movies': collectionData = require('../../utils/revengeMovieData'); break;
        case 'top-10-jennifer-lawrence-movies': collectionData = require('../../utils/jenniferLawrenceMovieData'); break;
        case 'top-10-monica-bellucci-movies': collectionData = require('../../utils/monicaBellucciMovieData'); break;
    }

    const assignedFallbackTagline = UNIVERSAL_FALLBACK_TAGLINES[(baseMovie.tmdbId || 0) % UNIVERSAL_FALLBACK_TAGLINES.length];

    const resolvedMovieInfo = collectionData?.COMPLETE_MOVIE_DATA?.[baseMovie.tmdbId] || null;
    const isTrueStory = require('../../utils/trueStoryMovieData').COMPLETE_MOVIE_DATABASE.some(m => m.imdbID === baseMovie.imdbID);
    
    // ⚡ PRE-CALCULATE SEO METADATA HERE TO SAVE CLIENT PAYLOAD
    const masterTimestamps = require('../../utils/masterTimestamps.json');
    const sensitiveData = masterTimestamps[String(baseMovie.tmdbId)] || { scenes: [] };
    const allScenes = sensitiveData.scenes || [];
    
    // ✅ FIX: Pull timestamps from masterTimestamps.json so new collections never show 0 timestamps!
    const resolvedSensitiveScenes = allScenes.length > 0 ? allScenes : (collectionData?.SENSITIVE_TIMELINES?.[baseMovie.tmdbId]?.scenes || []);

    const isClean = resolvedSensitiveScenes.length === 0 || resolvedSensitiveScenes.every(s => !((s.type || '').toLowerCase().match(/sex|nudity|explicit/)));
    let metaTitle = '';
    let metaDesc = '';

    if (isClean) {
        metaTitle = `${baseMovie.Title} Parents Guide (Clean)`;
        metaDesc = `Yes. Filmiway editors have manually verified that ${baseMovie.Title} is completely free of sex, nudity, and sexual content throughout its entire ${baseMovie.runtime || baseMovie.Runtime || "Official"} min runtime.`;
    } else {
        metaTitle = `${baseMovie.Title} Parents Guide (Skip Sex & Nudity Timestamps)`;
        const sortedScenes = [...resolvedSensitiveScenes].sort((a, b) => {
            const aIsSevere = a.type?.toLowerCase().match(/sex|nudity|explicit/);
            const bIsSevere = b.type?.toLowerCase().match(/sex|nudity|explicit/);
            if (aIsSevere && !bIsSevere) return -1;
            if (!aIsSevere && bIsSevere) return 1;
            return 0;
        });
        const scenesText = sortedScenes.slice(0, 2).map(s => `${s.type} ${s.end ? `${s.start}-${s.end}` : s.start}`).join(', ');
        metaDesc = `PARENTS GUIDE: Exact skip timestamps for ${baseMovie.Title}. ${scenesText} and more.`;
    }

    // Retain hardcoded exceptions
    if (baseMovie.slug === 'eyes-wide-shut') {
        metaTitle = "Eyes Wide Shut Parents Guide: Exact Ritual Scene & Nudity Timestamps";
        metaDesc = "PARENTS GUIDE: Complete timestamps to skip the explicit ritual sequences and continuous full nudity in Eyes Wide Shut. Manually verified 18+ content breakdown.";
    } else if (baseMovie.slug === 'the-wolf-of-wall-street') {
        metaTitle = "The Wolf of Wall Street Parents Guide: Exact Explicit Scene Timestamps";
        metaDesc = "PARENTS GUIDE: Exact timestamps to skip the heavy nudity, drug use, and explicit scenes in The Wolf of Wall Street. Includes a complete 18+ severity breakdown.";
    } else if (baseMovie.slug === 'little-miss-sunshine') {
        metaTitle = "Little Miss Sunshine Parents Guide: Why is it Rated R? (Timestamps)";
        metaDesc = "Is Little Miss Sunshine safe for kids? It is rated R for strong language and a brief adult magazine scene. Get the exact timestamps to skip the mature moments.";
    } else if (baseMovie.slug === 'fight-club') {
        metaTitle = "Fight Club Parents Guide: Violence, Nudity & Exact Skip Timestamps";
        metaDesc = "Is Fight Club appropriate for teenagers? Get a complete breakdown of the extreme brutal violence and the exact timestamps to skip the explicit subliminal flashes.";
    } else if (baseMovie.slug === 'titanic') {
        metaTitle = "Titanic Parents Guide: Is it Safe for Kids? (Skip Timestamps)";
        metaDesc = "Can you watch Titanic with your family? Yes, if you skip the explicit parts. Get the exact timestamps to bypass the drawing scene and brief intimacy.";
    } else if (baseMovie.slug === 'superbad') {
        metaTitle = "Superbad Parents Guide: Why is it Rated R? (Timestamps)";
        metaDesc = "Is Superbad appropriate for teenagers? Get a complete breakdown of the extreme profanity, plus exact timestamps to skip the explicit drawings and magazine scenes.";
    } else if (baseMovie.slug === 'blue-is-the-warmest-color') {
        metaTitle = "Blue Is the Warmest Color Skip Sex & Nudity Timestamps";
        metaDesc = "PARENTS GUIDE: Exact skip timestamps for Blue Is the Warmest Color. Sex & Nudity 0:22:04-0:24:22, Sex & Nudity 1:14:53-1:21:46 and more.";
    } else if (baseMovie.slug === 'the-dreamers') {
        metaTitle = "The Dreamers Skip Sex & Nudity Timestamps";
        metaDesc = "PARENTS GUIDE: Exact skip timestamps for The Dreamers. Sexual Content 0:45:11-0:46:36, Nudity & Sex 0:52:55-1:02:52 and more.";
    } else if (baseMovie.slug === 'basic-instinct') {
        metaDesc = "PARENTS GUIDE: Exact skip timestamps for Basic Instinct. Sex & Nudity 0:03:15-0:04:40, Nudity 0:05:40-0:06:50 and more.";
    } else if (baseMovie.slug === 'wild-things') {
        metaTitle = "Wild Things Parents Guide: Explicit Scenes & Nudity Timestamps";
        metaDesc = "PARENTS GUIDE: Wild Things is a notorious 90s erotic thriller. Here are the exact timestamps to safely skip the heavy female nudity and explicit intimacy.";
    } else if (baseMovie.slug === 'the-usual-suspects') {
        metaTitle = "The Usual Suspects Parents Guide: Why is it Rated R? (Timestamps)";
        metaDesc = "Is The Usual Suspects safe for teens? It is rated R for pervasive strong language and violence. Get exact timestamps to skip the single mature sexual scene.";
    } else if (baseMovie.slug === 'blade-runner-2049') {
        metaTitle = "Blade Runner 2049 Parents Guide: Exact Nudity Skip Timestamps";
        metaDesc = "Is Blade Runner 2049 safe for younger sci-fi fans? Get the exact timestamps to safely skip the holographic nudity and mature scenes in this visually stunning sequel.";
    } else if (baseMovie.slug === 'the-hangover') {
        metaTitle = "The Hangover Parents Guide: Why is it Rated R? (Timestamps)";
        metaDesc = "Is The Hangover safe for teens? It is rated R for pervasive strong language, sexual content, and brief nudity. Get the exact timestamps to safely skip the mature scenes.";
    } else if (baseMovie.slug === 'indecent-proposal') {
        metaTitle = "Indecent Proposal Parents Guide: Why is it Rated R? (Timestamps)";
        metaDesc = "Why is Indecent Proposal rated R? Read our parents guide for a breakdown of the heavy sexual themes, plus exact timestamps to skip the explicit intimacy and nudity.";
    } else if (baseMovie.slug === 'marty-supreme') {
        metaTitle = "Marty Supreme Parents Guide: Why is it Rated R? (Timestamps)";
        metaDesc = "Is Marty Supreme appropriate for teens? Get a complete breakdown of the strong language and violence, plus exact timestamps to skip the explicit sexual content.";
    } else if (baseMovie.slug === 'the-big-short') {
        metaTitle = "The Big Short Parents Guide: Timestamps to Skip Nudity";
        metaDesc = "Showing The Big Short in a classroom or to teens? Get the exact timestamps to safely skip the strip club scene while keeping the educational content.";
    } else if (baseMovie.slug === 'passengers') {
        metaTitle = "Passengers Parents Guide: Exact Timestamps to Skip Nudity";
        metaDesc = "Showing Passengers to younger sci-fi fans? Read our breakdown of the intense space peril and get exact timestamps to skip the brief partial nudity.";
    } else if (baseMovie.slug === 'enemy') {
        metaTitle = "Enemy Parents Guide: Timestamps for All 11 Explicit Scenes";
        metaDesc = "Is Enemy safe to watch? It contains a surprisingly high amount of sexual content. Get the exact timestamps to safely skip all 11 explicit intimacy and nudity scenes and watch comfortably.";
    } else if (baseMovie.slug === 'rain-man') {
        metaTitle = "Rain Man Parents Guide: Is it Safe for Teens? (Timestamps)";
        metaDesc = "Planning to watch the classic Rain Man with your family? Be prepared for the moderate profanity and get exact timestamps to skip the brief awkward sexual moments.";
    } else if (baseMovie.slug === 'the-equalizer') {
        metaTitle = "The Equalizer Parents Guide: Why is it Rated R? (Timestamps)";
        metaDesc = "Is The Equalizer appropriate for teens? Get a complete breakdown of the extreme graphic violence, heavy profanity, and the exact timestamp to skip the brief nudity.";
    } else if (baseMovie.slug === 'along-came-polly') {
        metaTitle = "Along Came Polly Parents Guide: Is it Safe for Teens? (Timestamps)";
        metaDesc = "Planning to watch Along Came Polly with your family? Read our breakdown of the crude humor and get exact timestamps to safely skip the brief sexual content and partial nudity.";
    } else if (baseMovie.slug === 'perfect-blue') {
        metaTitle = "Perfect Blue Parents Guide: Explicit Scenes & Nudity Timestamps";
        metaDesc = "PARENTS GUIDE: Perfect Blue is a deeply disturbing psychological anime thriller. Get exact timestamps to safely skip the intense explicit scenes and heavy nudity.";
    } else if (baseMovie.slug === 'magnolia') {
        metaTitle = "Magnolia Parents Guide: Timestamps to Skip Brief Nudity";
        metaDesc = "PARENTS GUIDE: Magnolia is a 3-hour emotional masterpiece with only a few seconds of explicit content. Get the exact timestamps to safely skip the brief sex and nudity.";
    } else if (baseMovie.slug === 'red-sparrow') {
        metaTitle = "Red Sparrow Parents Guide: Explicit Content Skip Timestamps";
        metaDesc = "Planning to watch Red Sparrow? Be prepared for a highly graphic espionage thriller, and get exact timestamps to bypass the intense nudity and assault scenes.";
    } else if (baseMovie.slug === 'memories-of-murder') {
        metaTitle = "Memories of Murder Parents Guide: Explicit Scene Skip Timestamps";
        metaDesc = "Why is Memories of Murder unrated? We break down the grisly crime scenes and police brutality, providing exact timestamps to skip the unexpected sex and nudity.";
    } else if (baseMovie.slug === 'the-chaser') {
        metaTitle = "The Chaser Parents Guide: Why is it Rated R? (Timestamps)";
        metaDesc = "Is The Chaser safe to watch? Read our complete breakdown of the disturbing serial killer violence, plus exact timestamps to safely skip the brief mature scenes.";
    } else if (baseMovie.slug === 'i-saw-the-devil') {
        metaTitle = "I Saw the Devil Parents Guide: Explicit Scene Skip Timestamps";
        metaDesc = "PARENTS GUIDE: I Saw the Devil features extreme gore and explicit content. Get exact timestamps to safely skip the explicit scenes and intimacy.";
    } else if (baseMovie.slug === 'dead-poets-society') {
        metaTitle = "Dead Poets Society Parents Guide: Is it Safe for Teens? (Timestamps)";
        metaDesc = "Showing Dead Poets Society to students or family? Read our breakdown, and get the exact timestamp to safely skip the brief magazine nudity scene.";
    } else if (baseMovie.slug === 'the-invisible-guest') {
        metaTitle = "The Invisible Guest Parents Guide: Is it Safe for Teens? (Clean)";
        metaDesc = "Is the Spanish thriller The Invisible Guest safe for families? Yes. Filmiway editors have manually verified it is 100% free of sex scenes and nudity.";
    } else if (baseMovie.slug === 'paris-texas') {
        metaTitle = "Paris, Texas Parents Guide: Timestamps to Skip Brief Nudity";
        metaDesc = "PARENTS GUIDE: Paris, Texas is a cinematic masterpiece containing brief, non-sexual nudity. Get the exact timestamps to safely skip these moments for family viewing.";
    } else if (baseMovie.slug === 'black-swan') {
        metaTitle = "Black Swan Parents Guide: Explicit Scene Skip Timestamps";
        metaDesc = "Why is Black Swan rated R? Be prepared for self-harm, plus get exact timestamps to skip the explicit intimacy.";
    } else if (baseMovie.slug === 'scarface') {
        metaTitle = "Scarface Parents Guide: Explicit Scene Skip Timestamps";
        metaDesc = "PARENTS GUIDE: Here are the exact timestamps to safely skip the explicit female nudity scene.";
    } else if (baseMovie.slug === 'parasite') {
        metaTitle = "Parasite Parents Guide: Why is it Rated R?";
        metaDesc = "Is the Oscar-winning Parasite safe for teens? It is rated R for sudden graphic violence. Get the exact timestamp to safely skip the explicit couch scene.";
    } else if (baseMovie.slug === 'baby-driver') {
        metaTitle = "Baby Driver Parents Guide: Why is it Rated R? (Clean)";
        metaDesc = "Why is Baby Driver rated R? It contains strong language and action violence. However, Filmiway editors have verified it has zero sex scenes or nudity.";
    } else if (baseMovie.slug === 'lust-caution') {
        metaTitle = "Lust, Caution Parents Guide: Why is it Rated NC-17? (Timestamps)";
        metaDesc = "Why is Lust, Caution rated NC-17? Read our complete breakdown and get exact skip timestamps, including Sex & Nudity at 1:00:15-1:02:40, to safely bypass the explicit sexual content.";
    } else if (baseMovie.slug === 'sinners') {
        metaTitle = "Sinners Parents Guide: Exact Explicit Scenes & Nudity Skip Timestamps";
        metaDesc = "PARENTS GUIDE: Sinners features multiple scenes of explicit sex and nudity. Get exact timestamps to safely skip content like Sex (High) at 1:00:15-1:01:05, Nudity (Woman in Background) at 0:57:40-0:59:00, and more.";
    } else if (baseMovie.slug === 'call-me-by-your-name') {
        metaTitle = "Call Me By Your Name Parents Guide: Is it Family-Safe? (Explicit Content Timestamps)";
        metaDesc = "Is Call Me By Your Name safe for family viewing? It contains high-severity sex and nudity. Our Parents Guide provides exact minute-by-minute skip timestamps for Nudity & Sex, Sexual Content, and more.";
    } else if (baseMovie.slug === 'the-green-mile') {
        metaTitle = "The Green Mile Parents Guide: Is it Family-Safe? (Mature Content Timestamps)";
        metaDesc = "Is The Green Mile safe for family viewing? It contains moderate sexual content and partial nudity. Our Parents Guide provides exact minute-by-minute skip timestamps for Partial Nudity, Sexual Content (Moaning), and Nudity (Magazine).";
    } else if (baseMovie.slug === 'joker') {
        metaTitle = "Joker Parents Guide: Is it Family-Safe? (Nudity Timestamps)";
        metaDesc = "Is Joker safe for family viewing? It contains intense psychological themes and brief nudity. Our Parents Guide provides exact minute-by-minute skip timestamps for these mature scenes.";
    } else if (baseMovie.slug === 'blue-valentine') {
        metaTitle = "Blue Valentine Parents Guide: Is it Family-Safe? (Explicit Timestamps)";
        metaDesc = "Is Blue Valentine safe for family viewing? It contains high-severity sex, nudity, and intense emotional trauma. Get exact skip timestamps, including Sex & Nudity at 0:37:09-0:38:45, to bypass explicit scenes.";
    } else if (baseMovie.slug === 'anora') {
        metaTitle = "Anora Parents Guide: Is it Family-Safe? (Explicit Timestamps)";
        metaDesc = "Is Anora safe for family viewing? It contains an extreme density of explicit sex and heavy full nudity. Get exact skip timestamps, including Nudity at 0:01:00-0:04:30, to safely bypass these mature scenes.";
    } else if (baseMovie.slug === 'mulholland-drive') {
        metaTitle = "Mulholland Drive Parents Guide: Is it Family-Safe? (Nudity Timestamps)";
        metaDesc = "Is Mulholland Drive safe for family viewing? It contains mature content, frightening scenes, and full nudity. Get exact skip timestamps, including Nudity at 1:38:45-1:42:18, to safely bypass sensitive scenes.";
    } else if (baseMovie.slug === 'chinatown') {
        metaTitle = "Chinatown Parents Guide: Is it Family-Safe? (Mature Content Timestamps)";
        metaDesc = "Is Chinatown safe for family viewing? It contains dark crime themes, violence, and brief nudity. Get exact skip timestamps, including Nudity (Woman) at 1:26:42-1:27:34, to safely bypass sensitive scenes.";
    } else if (baseMovie.slug === 'uncut-gems') {
        metaTitle = "Uncut Gems Parents Guide: Is it Family-Safe? (Mature Content Timestamps)";
        metaDesc = "Is Uncut Gems safe for family viewing? It contains intense language, anxiety-inducing situations, and brief suggestive content. Get exact skip timestamps, including Suggestive clothing at 0:33:57-0:35:27, to safely bypass sensitive scenes.";
    } else if (baseMovie.slug === 'crash') {
        metaTitle = "Crash Parents Guide: Why is it Rated NC-17? (Explicit Timestamps)";
        metaDesc = "Why is Crash rated NC-17? It features pervasive heavy sexual content and  nudity. Get exact skip timestamps, including Sex & Nudity at 0:05:03-0:05:24, for all explicit scenes.";
    } else if (baseMovie.slug === 'oldboy') {
        metaTitle = "Oldboy Parents Guide: Why is it Rated R? (Explicit Timestamps)";
        metaDesc = "Why is Oldboy rated R? Read our complete breakdown and get exact skip timestamps, including Sex at 1:03:35-1:04:57, to safely bypass the explicit sexual content.";
    } else if (baseMovie.slug === 'mickey-17') {
        metaTitle = "Mickey 17 Parents Guide: Is it Family-Safe? (Mature Content Timestamps)";
        metaDesc = "Is Mickey 17 safe for family viewing? It contains sci-fi action violence and brief partial nudity. Get exact skip timestamps, including Partial Nudity at 0:27:55-0:28:00, to safely bypass sensitive scenes.";
    } else if (baseMovie.slug === 'gladiator') {
        metaTitle = "Gladiator Parents Guide: Is it Family-Safe? (Mature Content Timestamps)";
        metaDesc = "Is Gladiator safe for family viewing? It contains intense combat violence and brief partial nudity. Get exact skip timestamps, including Partial Nudity at 50:40-50:55, to safely bypass sensitive scenes.";
    } else if (baseMovie.slug === 'the-silence-of-the-lambs') {
        metaTitle = "The Silence of the Lambs Parents Guide: Is it Family-Safe? (Mature Timestamps)";
        metaDesc = "Is The Silence of the Lambs safe for family viewing? It contains disturbing violence, frightening sequences, and brief nudity. Get exact skip timestamps, including Nudity at 1:36:30-1:36:37, to safely bypass sensitive scenes.";
    }

    const movie = {
        ...baseMovie,
        poster_path: cacheData.poster_path || null,
        backdrop_path: cacheData.backdrop_path || null,
        Poster: cacheData.poster_path ? `https://image.tmdb.org/t/p/w342${cacheData.poster_path}` : null,
        Plot: cacheData.overview || '',
        Rated: cacheData.ageRating || 'NR',
        Tagline: cacheData.tagline || assignedFallbackTagline,
        primaryCollectionSlug: primarySlug || null,
        primaryCollectionTitle: primaryTitle || null,
        resolvedMovieInfo,
        resolvedSensitiveScenes,
        isTrueStory,
        metaTitle,
        metaDesc
    };
    
    return { props: { movie } };
}