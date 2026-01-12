// pages/movies/time-travel/[id].js - TIME TRAVEL PAGE FIXED ✅
// VISUALS: Cyan/Blue Theme, Minimalist Banner
// SCHEMA: Maximalist (Hidden Intensity, DNA, and FAQs for Bots)

import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Play, X, User, Twitter, Hash, Send, Clock, Film } from 'lucide-react'; 
import InternalCollectionsSection from '../../../components/InternalCollectionsSection';
import CinematicBackground from '../../../components/CinematicBackground';
import MovieDetailsSection from '../../../components/MovieDetailsSection';
import TMDBAttribution from '../../../components/TMDBAttribution';

// ✅ IMPORT TIME TRAVEL DATA
import { 
  COMPLETE_MOVIE_DATABASE, 
  COMPLETE_MOVIE_DATA, 
  SENSITIVE_TIMELINES,
  TIME_TRAVEL_MOVIE_FAQS 
} from '../../../utils/timeTravelMovieData';

const COLORS = {
  accent: '#06b6d4', // Cyan for Time Travel
  bgPrimary: '#0B0B0C', 
  bgCard: 'rgba(55, 65, 81, 0.3)', 
  textPrimary: '#FFFFFF', 
  textMuted: '#9CA3AF', 
  borderLight: 'rgba(107, 114, 128, 0.3)',
};

const MOVIE_YEARS = {
  'Back to the Future': '1985', 'Terminator 2: Judgment Day': '1991', 'The Terminator': '1984',
  'Interstellar': '2014', 'Predestination': '2014', 'Primer': '2004', '12 Monkeys': '1995',
  'Donnie Darko': '2001', 'Groundhog Day': '1993', 'Timecrimes': '2007'
};

// Custom insights for the banner
const MOVIE_DATA_BY_TITLE = {
  'Back to the Future': { connection: 'The gold standard of time travel cinema. It perfectly balances scientific paradox with heart, humor, and the universal desire to understand our parents.' },
  'Terminator 2: Judgment Day': { connection: 'A masterpiece that redefined action cinema. It explores the concept of "No Fate" while delivering a relentless chase across time to save the future of humanity.' },
  'The Terminator': { connection: 'A gritty sci-fi slasher that birthed a franchise. It presents a terrifying vision of an inevitable future and a love story that transcends time itself.' },
  'Interstellar': { connection: 'A visually spectacular emotional epic where love is the one thing that transcends time and space. Hard science meets deep human sentiment.' },
  'Predestination': { connection: 'The ultimate paradox movie. A dizzying, circular narrative that explores identity, fate, and the consequences of playing god with time.' },
  'Primer': { connection: 'The most realistic and complex time travel movie ever made. It strips away the glamour to show the gritty, confusing, and dangerous reality of causal loops.' },
  '12 Monkeys': { connection: 'A haunting exploration of madness and memory. It questions whether the future can be changed or if we are merely observers of our own tragedy.' },
  'Donnie Darko': { connection: 'A surreal cult classic blending teen angst with metaphysical philosophy. It explores tangent universes and the burden of knowing one\'s destiny.' },
  'Groundhog Day': { connection: 'A philosophical comedy about enlightenment. Trapped in a loop, the protagonist moves from hedonism to despair to selfless love.' },
  'Timecrimes': { connection: 'A tightly wound Spanish thriller where a man becomes the architect of his own nightmare, desperately trying to fix the past only to make it worse.' }
};

const getTMDBImage = (path, size = 'w1280') => 
  path ? `https://image.tmdb.org/t/p/${size}${path}` : null;

const getTimeInsight = (title) => {
  const data = MOVIE_DATA_BY_TITLE[title];
  return data?.connection || 'A mind-bending exploration of temporal paradoxes, causality, and the human condition.';
};

// ✅ OPTIMIZED BANNER
const OptimizedBanner = ({ movie, movieData, trailer, richData }) => {
  const [showTrailer, setShowTrailer] = useState(false);
  const [countdown, setCountdown] = useState(4);
  const [hasClosedTrailer, setHasClosedTrailer] = useState(false);
  const timerRef = useRef(null);
  
  const backdropPath = movieData?.backdrop_path || richData?.backdrop_path;
  const posterPath = movieData?.poster_path || richData?.poster_path;
  const bannerImage = getTMDBImage(backdropPath, 'w1280');
  const posterImage = getTMDBImage(posterPath, 'w500');
  
  // Use "Complexity Level" or "Intensity"
  const complexityIndex = richData?.timeTravelIntensity || 90;
  const insight = getTimeInsight(movie?.Title);

  useEffect(() => {
    // Only auto-play countdown on desktop if trailer exists
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

  return (
    <div className="relative w-full mb-8">
      
      {/* 1. DESKTOP/TABLET HERO (Hidden on mobile) */}
      <div className="hidden md:block relative h-[500px] rounded-3xl overflow-hidden mx-6 shadow-2xl border border-gray-800">
        <AnimatePresence mode="wait">
          {showTrailer && trailer ? (
             <motion.div key="trailer" className="absolute inset-0 z-50 bg-black" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
               <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=1`} allow="autoplay; encrypted-media" allowFullScreen className="w-full h-full border-0" />
               <button onClick={handleCloseTrailer} className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:bg-cyan-600 transition backdrop-blur-sm"><X /></button>
             </motion.div>
          ) : (
            <div className="relative w-full h-full">
              {bannerImage && <Image src={bannerImage} alt={movie.Title} fill className="object-cover" priority quality={90} />}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-[#0B0B0C]/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C]/80 via-transparent to-transparent" />
              
              {/* Desktop Content Overlay */}
              <div className="absolute bottom-0 left-0 p-10 w-full flex items-end gap-8">
                 <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.5 }}
                   className="relative w-48 aspect-[2/3] shadow-2xl rounded-xl overflow-hidden border-2 border-white/10 hidden lg:block transform hover:scale-105 transition-transform duration-500"
                 >
                    {posterImage && <Image src={posterImage} alt={movie.Title} fill className="object-cover" />}
                 </motion.div>
                 
                 <div className="mb-4 flex-1">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex items-center gap-4 mb-4"
                    >
                       {trailer && (
                        <button onClick={handlePlayClick} className="flex items-center gap-3 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-cyan-500/30 group">
                            <Play className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" /> Watch Trailer
                        </button>
                       )}
                       <div className="px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-cyan-500/30 flex items-center gap-2 text-cyan-400">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm font-bold tracking-wide">Complexity: {complexityIndex}/100</span>
                       </div>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className="p-5 bg-black/40 backdrop-blur-md rounded-xl border-l-4 border-cyan-500 max-w-3xl"
                    >
                        <p className="text-lg text-gray-100 leading-relaxed font-light italic">"{insight}"</p>
                    </motion.div>
                 </div>
                 
                 {trailer && !hasClosedTrailer && countdown > 0 && (
                    <div className="absolute top-8 right-8 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-gray-700 text-xs text-gray-300">
                        Auto-play in {countdown}s
                    </div>
                 )}
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* 2. MOBILE HERO (Visible only on small screens) */}
      <div className="md:hidden">
         {/* Mobile Video/Banner Area */}
         <div className="relative h-[280px] w-full">
            {showTrailer && trailer ? (
                <div className="absolute inset-0 z-50 bg-black">
                    <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=0&controls=1`} allow="autoplay; encrypted-media" allowFullScreen className="w-full h-full border-0" />
                    <button onClick={handleCloseTrailer} className="absolute top-2 right-2 p-2 bg-black/50 rounded-full text-white"><X className="w-5 h-5" /></button>
                </div>
            ) : (
                <div className="relative w-full h-full">
                    {bannerImage ? <Image src={bannerImage} alt={movie.Title} fill className="object-cover" priority /> : <div className="w-full h-full bg-gray-900" />}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent" />
                    {trailer && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button onClick={handlePlayClick} className="p-4 bg-cyan-600/90 rounded-full shadow-lg border border-white/20"><Play className="w-8 h-8 text-white fill-current ml-1" /></button>
                        </div>
                    )}
                </div>
            )}
         </div>

         {/* Mobile Info Card */}
         <div className="px-4 -mt-10 relative z-10">
            <div className="flex gap-4 p-4 bg-[#151517] rounded-xl shadow-2xl border border-gray-800 border-l-4 border-l-cyan-500">
                <div className="w-20 flex-shrink-0 rounded-md overflow-hidden relative aspect-[2/3] shadow-lg">
                    {posterImage && <Image src={posterImage} alt={movie.Title} fill className="object-cover" />}
                </div>
                <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-cyan-400 font-bold text-xs uppercase tracking-widest flex items-center gap-2 mb-1">
                        <Clock className="w-3 h-3" /> Complexity
                    </h3>
                    <div className="text-3xl font-black text-white">{complexityIndex}</div>
                    <p className="text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed">{richData?.synopsis}</p>
                </div>
            </div>
         </div>
      </div>

    </div>
  );
};

const SmartBackButton = () => (
    <Link href="/collection/best-time-travel-movies" className="fixed top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 bg-black/60 backdrop-blur-md border border-gray-700 rounded-lg hover:border-cyan-500 transition group">
        <ChevronLeft className="w-4 h-4 text-gray-400 group-hover:text-cyan-500 transition" />
        <span className="text-sm font-medium text-gray-200 group-hover:text-white">Collection</span>
    </Link>
);

const SubtleFilmGrain = () => (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]">
       <svg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' className="w-full h-full">
         <filter id='grain'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='1' stitchTiles='stitch'/></filter>
         <rect width='100%' height='100%' filter='url(#grain)'/>
       </svg>
    </div>
);

// ✅ JSON-LD SCHEMA GENERATOR
const generateMovieSchema = (movie, movieData, currentMovieYear) => {
  const data = COMPLETE_MOVIE_DATA[movie.tmdbId];
  const sensitiveData = SENSITIVE_TIMELINES[movie.tmdbId];
  const faqs = TIME_TRAVEL_MOVIE_FAQS[movie.Title] || [];

  const fullDescription = `${data?.synopsis || movie.description} Ranking: #${movie.rank} in Time Travel Movies.`;

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
    "genre": data?.dna ? Object.keys(data.dna) : ["Sci-Fi", "Thriller"],
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

const TimeTravelMoviePage = ({ movie, tmdbData }) => {
    const richData = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const trailer = tmdbData?.videos?.results?.find(v => v.type === "Trailer" && v.site === "YouTube");
    const currentMovieYear = MOVIE_YEARS[movie.Title] || movie.year;
    
    // Generate Schema
    const { movieSchema, faqSchema } = generateMovieSchema(movie, tmdbData, currentMovieYear);

    return (
        <div className="min-h-screen text-white relative overflow-hidden" style={{ backgroundColor: COLORS.bgPrimary }}>
            <Head>
                <title>{`${movie.Title} (${currentMovieYear}) - Best Time Travel Movies | Filmiway`}</title>
                <meta name="description" content={richData?.synopsis || `Watch ${movie.Title}, a mind-bending time travel thriller.`} />
                <link rel="canonical" href={`https://filmiway.com/movies/time-travel/${movie.imdbID}`} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
                <meta name="robots" content="index, follow" />
                
                {/* Schema Injection */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(movieSchema) }} />
                {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
            </Head>

            <SubtleFilmGrain />
            <div className="absolute inset-0"><CinematicBackground /></div>
            <SmartBackButton />

            <div className="relative z-10 pt-0 md:pt-16">
                <h1 className="sr-only">{movie.Title} - Time Travel Movie Analysis</h1>
                
                <div className="container mx-auto px-0 pb-16 max-w-7xl">
                    <OptimizedBanner movie={movie} movieData={tmdbData} richData={richData} trailer={trailer} />
                    
                    <div className="px-4 lg:px-6 space-y-12 mt-8">
                         {/* Pass flag to MovieDetailsSection to use correct data source */}
                         <MovieDetailsSection movie={movie} fromTimeTravelCollection={true} />
                         
                         <div className="border-t border-gray-800 pt-8">
                            <InternalCollectionsSection currentSlug="best-time-travel-movies" />
                            <TMDBAttribution />
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// ✅ STATIC GENERATION
export async function getStaticPaths() {
    const paths = COMPLETE_MOVIE_DATABASE.map((movie) => ({
        params: { id: movie.imdbID },
    }));
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
        console.error("Error fetching TMDB data:", error);
        return { props: { movie, tmdbData: null } };
    }
}

export default TimeTravelMoviePage;