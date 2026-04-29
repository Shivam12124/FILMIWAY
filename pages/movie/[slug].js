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
                    if ((!movie?.Tagline || UNIVERSAL_FALLBACK_TAGLINES.includes(movie?.Tagline)) && data.tagline) setTagline(data.tagline);
                })
                .catch(() => {});
        }
    }, [movie]);

    const bannerImage = movie.backdrop_path ? getTMDBImage(movie.backdrop_path, 'w1280') : null;
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
      <motion.div className="relative w-[100vw] left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] overflow-hidden mb-6 sm:mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <style>{unifiedHeroCSS}</style>
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
                  {bannerImage ? <Image src={bannerImage} alt={`${movie?.Title} banner`} fill priority sizes="(max-width: 768px) 100vw, 1280px" quality={80} className="object-cover object-[center_25%]" /> : <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: '#000000' }}><Film className="w-16 h-16 sm:w-24 sm:h-24" style={{ color: COLORS.textMuted }} /></div>}
                  <div className="absolute inset-0 z-10" style={{ background: `linear-gradient(to bottom, transparent 0%, transparent 50%, #000000 90%, #000000 100%), linear-gradient(to right, #000000 0%, transparent 15%, transparent 85%, #000000 100%)` }} />
                </div>
                {trailerKey && (
                  <motion.div className="absolute inset-0 flex items-center justify-center z-20" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1, duration: 0.8 }}>
                    <motion.button onClick={handlePlayClick} className="p-4 sm:p-6 rounded-full backdrop-blur-lg shadow-2xl transition-all duration-300" style={{ backgroundColor: `${COLORS.bgPrimary}BB`, border: `2px solid ${COLORS.textPrimary}`, color: COLORS.textPrimary }} whileHover={{ scale: 1.15, backgroundColor: `${COLORS.accent}DD`, borderColor: COLORS.accent }} whileTap={{ scale: 0.95 }}><Play className="w-6 h-6 sm:w-8 sm:h-8 ml-1" /></motion.button>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
  
        {/* UNIFIED LAYOUT */}
        <div className="unified-hero-row">
            <div className="unified-hero-poster">
                {posterImage ? <Image src={posterImage} alt={`${movie?.Title} poster`} width={320} height={480} className="w-full h-auto" priority unoptimized /> : <div style={{ background: '#000000', width: '100%', height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Film style={{ color: COLORS.textMuted }} /></div>}
            </div>
            <div className="unified-psych-card">
              <div className="unified-psych-row"><Star className="unified-psych-icon" /><div><h2 className="unified-psych-title">At a Glance</h2></div></div>
              <div className="unified-psych-desc insight-text font-medium text-white">
                {tagline ? <span className="italic">"{tagline}"</span> : <span>{insight}</span>}
              </div>
            </div>
        </div>
      </motion.div>
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
    return { paths: masterDatabase.map((m) => ({ params: { slug: m.slug } })), fallback: false };
}

export async function getStaticProps({ params }) {
    const baseMovie = masterDatabase.find((m) => m.slug === params.slug) || null;
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

    const isClean = allScenes.length === 0 || allScenes.every(s => !((s.type || '').toLowerCase().match(/sex|nudity|explicit/)));
    let metaTitle = '';
    let metaDesc = '';

    if (isClean) {
        metaTitle = `${baseMovie.Title} Parents Guide (Clean)`;
        metaDesc = `Yes. Filmiway editors have manually verified that ${baseMovie.Title} is completely free of sex, nudity, and sexual content throughout its entire ${baseMovie.runtime || baseMovie.Runtime || "Official"} min runtime.`;
    } else {
        metaTitle = `${baseMovie.Title} Parents Guide (Skip Sex & Nudity Timestamps)`;
        const sortedScenes = [...allScenes].sort((a, b) => {
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
    if (baseMovie.slug === 'blue-is-the-warmest-color') {
        metaTitle = "Blue Is the Warmest Color Skip Sex & Nudity Timestamps";
        metaDesc = "PARENTS GUIDE: Exact skip timestamps for Blue Is the Warmest Color. Sex & Nudity 0:22:04-0:24:22, Sex & Nudity 1:14:53-1:21:46 and more.";
    } else if (baseMovie.slug === 'the-dreamers') {
        metaTitle = "The Dreamers Skip Sex & Nudity Timestamps";
        metaDesc = "PARENTS GUIDE: Exact skip timestamps for The Dreamers. Sexual Content 0:45:11-0:46:36, Nudity & Sex 0:52:55-1:02:52 and more.";
    } else if (baseMovie.slug === 'basic-instinct') {
        metaDesc = "PARENTS GUIDE: Exact skip timestamps for Basic Instinct. Sex & Nudity 0:03:15-0:04:40, Nudity 0:05:40-0:06:50 and more.";
    } else if (baseMovie.slug === 'wild-things') {
        metaDesc = "PARENTS GUIDE: Exact skip timestamps for Wild Things. Sex & Nudity 0:17:25-0:17:52, Sexual content & Nudity 0:57:40-0:59:55 and more.";
    } else if (baseMovie.slug === 'lust-caution') {
        metaDesc = "PARENTS GUIDE: Exact skip timestamps for Lust, Caution. Sex & Nudity 1:00:15-1:02:40, Sex & Nudity 1:32:35-1:34:26 and more.";
    }

    const movie = {
        ...baseMovie,
        poster_path: cacheData.poster_path || null,
        backdrop_path: cacheData.backdrop_path || null,
        Poster: cacheData.poster_path ? `https://image.tmdb.org/t/p/w500${cacheData.poster_path}` : null,
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