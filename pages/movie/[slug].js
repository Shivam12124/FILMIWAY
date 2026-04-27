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
import masterTimestamps from '../../utils/masterTimestamps.json';
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
                    if (!movie?.Tagline && data.tagline) setTagline(data.tagline);
                })
                .catch(() => {});
        }
    }, [movie]);

    const bannerImage = movie.backdrop_path ? getTMDBImage(movie.backdrop_path, 'w1280') : null;
    const posterImage = movie.Poster;
    const insight = movie.Plot || 'A compelling cinematic experience that demands to be watched.';

    useEffect(() => {
        const isMobileDevice = window.innerWidth < 768;
        if (!isMobileDevice && trailerKey && !showTrailer && !hasClosedTrailer) {
            timerRef.current = setInterval(() => {
                setCountdown((prev) => {
                    if (prev <= 1) { clearInterval(timerRef.current); setShowTrailer(true); return 0; }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => { if (timerRef.current) clearInterval(timerRef.current); };
    }, [trailerKey, showTrailer, hasClosedTrailer]);

    const handlePlayClick = () => { setShowTrailer(true); setHasClosedTrailer(false); };
    const handleCloseTrailer = () => { setShowTrailer(false); setHasClosedTrailer(true); if (timerRef.current) clearInterval(timerRef.current); };

    const unifiedHeroCSS = `
    .unified-hero-row { display: flex; flex-direction: row; align-items: flex-start; width: 100%; max-width: 1280px; gap: 32px; margin: -60px auto 0 auto; padding: 0 32px; position: relative; z-index: 20; }
    .unified-hero-poster { width: 25%; max-width: 260px; min-width: 140px; border-radius: 16px; overflow: hidden; box-shadow: 0 12px 40px rgba(0,0,0,0.8); margin: 0; flex-shrink: 0; border: 1px solid rgba(255,255,255,0.1); }
    .unified-hero-poster img { width: 100%; height: auto; border-radius: 16px; display: block; }
    .unified-psych-card { background: #000000; border-radius: 16px; box-shadow: -8px 0 24px -8px rgba(234, 179, 8, 0.6), 0 8px 32px rgba(0,0,0,0.8); margin: 0; flex: 1; border-left: 4px solid #eab308; border-top: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05); border-bottom: 1px solid rgba(255,255,255,0.05); display: flex; flex-direction: column; justify-content: flex-start; padding: 24px; min-height: 140px; position: relative; }
    .unified-psych-row { display: flex; align-items: center; gap: 10px; margin-bottom: 8px; }
    .unified-psych-icon { min-width: 24px; min-height: 24px; width: 24px; height: 24px; color: #facc15; }
    .unified-psych-title { font-size: 24px; font-weight: bold; color: #facc15; margin-bottom: 0; line-height: 1.2; }
    .unified-psych-desc { font-size: 19px; color: #ededed; line-height: 1.6; }
    .insight-text { display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; }

    @media (max-width: 767px) {
      .unified-hero-row { width: 100vw; max-width: 100vw; gap: 10px; margin: 0; padding: 0 8px; }
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
                  {bannerImage ? <Image src={bannerImage} alt={`${movie?.Title} banner`} fill priority sizes="100vw" quality={90} className="object-cover object-[center_25%]" unoptimized /> : <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: '#000000' }}><Film className="w-16 h-16 sm:w-24 sm:h-24" style={{ color: COLORS.textMuted }} /></div>}
                  <div className="absolute inset-0 z-10" style={{ background: `linear-gradient(to bottom, transparent 0%, transparent 50%, #000000 90%, #000000 100%), linear-gradient(to right, #000000 0%, transparent 15%, transparent 85%, #000000 100%)` }} />
                </div>
                {trailerKey && (
                  <motion.div className="absolute inset-0 flex items-center justify-center z-20" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1, duration: 0.8 }}>
                    <motion.button onClick={handlePlayClick} className="p-4 sm:p-6 rounded-full backdrop-blur-lg shadow-2xl transition-all duration-300" style={{ backgroundColor: `${COLORS.bgPrimary}BB`, border: `2px solid ${COLORS.textPrimary}`, color: COLORS.textPrimary }} whileHover={{ scale: 1.15, backgroundColor: `${COLORS.accent}DD`, borderColor: COLORS.accent }} whileTap={{ scale: 0.95 }}><Play className="w-6 h-6 sm:w-8 sm:h-8 ml-1" /></motion.button>
                  </motion.div>
                )}
                {trailerKey && !showTrailer && !hasClosedTrailer && countdown > 0 && (
                  <motion.div className="hidden sm:block absolute top-6 sm:top-8 right-6 sm:right-8 backdrop-blur-md rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border z-30" style={{ backgroundColor: `${COLORS.bgPrimary}CC`, borderColor: `${COLORS.accent}66`, color: COLORS.accent }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-medium"><div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse" style={{ backgroundColor: COLORS.accent }}></div>Trailer in {countdown}s</div>
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
        'ptaMoviesData.js': 'fromPtaCollection',
        'basicInstinctMovieData.js': 'fromBasicInstinctCollection',
        'enemiesToLoversMovieData.js': 'fromEnemiesToLoversCollection',
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
    const propName = getCollectionProp(movie.sourceFile);
    const dynamicProps = propName ? { [propName]: true } : {};

    // ⚡ DYNAMIC SEO: Smart Parents Guide Meta Tags
    const sensitiveData = masterTimestamps[String(movie.tmdbId)] || { scenes: [] };
    const allScenes = sensitiveData.scenes || [];
    
    // Check if it's 100% clean OR only contains "suggestive clothing"
    const isClean = allScenes.length === 0 || allScenes.every(s => {
        const t = (s.type || '').toLowerCase();
        return !t.match(/sex|nudity|explicit/);
    });

    let metaTitle = '';
    let metaDesc = '';

    if (isClean) {
        metaTitle = `${movie.Title} Parents Guide (Clean)`;
        metaDesc = `Yes. Filmiway editors have manually verified that ${movie.Title} is completely free of sex, nudity, and sexual content throughout its entire ${movie.runtime || movie.Runtime || "Official"} min runtime.`;
    } else {
        metaTitle = `${movie.Title} Parents Guide (Skip Sex & Nudity Timestamps)`;
        
        // Prioritize actual Sex/Nudity scenes over Suggestive Clothing for the SEO preview
        const sortedScenes = [...allScenes].sort((a, b) => {
            const aIsSevere = a.type?.toLowerCase().match(/sex|nudity|explicit/);
            const bIsSevere = b.type?.toLowerCase().match(/sex|nudity|explicit/);
            if (aIsSevere && !bIsSevere) return -1;
            if (!aIsSevere && bIsSevere) return 1;
            return 0;
        });
        
        // Grab the first 2 highest-priority scenes
        const displayScenes = sortedScenes.slice(0, 2);
        const scenesText = displayScenes.map(s => {
            const range = s.end ? `${s.start}-${s.end}` : s.start;
            return `${s.type} ${range}`;
        }).join(', ');

        metaDesc = `PARENTS GUIDE: Exact skip timestamps for ${movie.Title}. ${scenesText} and more.`;
    }

    // Retain hardcoded exceptions as requested
    if (movie.slug === 'blue-is-the-warmest-color') {
        metaTitle = "Blue Is the Warmest Color Skip Sex & Nudity Timestamps";
        metaDesc = "PARENTS GUIDE: Exact skip timestamps for Blue Is the Warmest Color. Sex & Nudity 0:22:04-0:24:22, Sex & Nudity 1:14:53-1:21:46 and more.";
    } else if (movie.slug === 'the-dreamers') {
        metaTitle = "The Dreamers Skip Sex & Nudity Timestamps";
        metaDesc = "PARENTS GUIDE: Exact skip timestamps for The Dreamers. Sexual Content 0:45:11-0:46:36, Nudity & Sex 0:52:55-1:02:52 and more.";
    } else if (movie.slug === 'basic-instinct') {
        metaDesc = "PARENTS GUIDE: Exact skip timestamps for Basic Instinct. Sex & Nudity 0:03:15-0:04:40, Nudity 0:05:40-0:06:50 and more.";
    } else if (movie.slug === 'wild-things') {
        metaDesc = "PARENTS GUIDE: Exact skip timestamps for Wild Things. Sex & Nudity 0:17:25-0:17:52, Sexual content & Nudity 0:57:40-0:59:55 and more.";
    } else if (movie.slug === 'lust-caution') {
        metaDesc = "PARENTS GUIDE: Exact skip timestamps for Lust, Caution. Sex & Nudity 1:00:15-1:02:40, Sex & Nudity 1:32:35-1:34:26 and more.";
    }

    return (
        <div key={movie.slug} className="min-h-screen bg-black selection:bg-yellow-500/30 font-inter text-gray-200">
            <div className="absolute inset-0 z-0 pointer-events-none"><CinematicBackground /></div>
            <Head>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDesc} />
                <link rel="canonical" href={`https://filmiway.com/movie/${movie.slug}`} />
                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDesc} />
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

    const movie = {
        ...baseMovie,
        poster_path: cacheData.poster_path || null,
        backdrop_path: cacheData.backdrop_path || null,
        Poster: cacheData.poster_path ? `https://image.tmdb.org/t/p/w500${cacheData.poster_path}` : null,
        Plot: cacheData.overview || '',
        Rated: cacheData.ageRating || 'NR',
        Tagline: cacheData.tagline || '',
        primaryCollectionSlug: primarySlug || null,
        primaryCollectionTitle: primaryTitle || null
    };
    
    return { props: { movie } };
}