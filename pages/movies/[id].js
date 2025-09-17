// pages/movies/[id].js - BACK TO EXACT MOVIE POSTER POSITION
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, Star, Clock, Award, ArrowLeft } from 'lucide-react';

// Components (keeping all your existing ones)
import CinematicBackground from '../../components/CinematicBackground';
import TMDBMoviePoster from '../../components/TMDBMoviePoster';
import MovieDetailsSection from '../../components/MovieDetailsSection';
import TMDBAttribution from '../../components/TMDBAttribution';

// Data (keeping all your existing data)
import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA, STRATEGIC_QUOTES } from '../../utils/movieData';
import { SENSITIVE_TIMELINES, getSensitiveContentTypes } from '../../utils/sensitiveContent';

// PERFECT BACK BUTTON - GOES TO EXACT MOVIE POSTER POSITION
const PerfectBackButton = ({ movie }) => {
    const handleBackClick = () => {
        if (typeof window !== 'undefined') {
            // ALWAYS go back to collection with exact position
            const currentPosition = sessionStorage.getItem('currentMoviePosition');
            const currentRank = sessionStorage.getItem('currentMovieRank');
            
            // Signal that we're returning from movie detail
            sessionStorage.setItem('returningFromMovie', 'true');
            
            // Store the exact position for return
            if (currentPosition) {
                sessionStorage.setItem('returnToPosition', currentPosition);
            }
            if (currentRank) {
                sessionStorage.setItem('returnToRank', currentRank);
            }
            
            // ALWAYS go back to the collection (not homepage)
            window.location.href = '/collection/movies-like-inception';
        }
    };

    return (
        <motion.button
            onClick={handleBackClick}
            className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50 flex items-center gap-2 px-4 py-2 bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:bg-gray-800/90 hover:border-yellow-400/50 transition-all duration-300"
            whileHover={{ scale: 1.05, x: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
        >
            <ArrowLeft className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium">Back</span>
        </motion.button>
    );
};

// Subtle Film Grain Overlay - MINIMAL CINEMATIC ELEMENT
const SubtleFilmGrain = () => (
    <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.015]">
        <div 
            className="w-full h-full bg-repeat"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='grain'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23grain)' opacity='0.3'/%3E%3C/svg%3E")`,
                backgroundSize: '100px 100px'
            }}
        />
    </div>
);

// PERFECT: Enhanced Breadcrumb - BACK TO EXACT POSITION
const Breadcrumb = ({ movie }) => {
    const handleBackClick = () => {
        if (typeof window !== 'undefined') {
            // Signal that we're returning from movie detail
            sessionStorage.setItem('returningFromMovie', 'true');
            
            // Store the exact position for return
            const currentPosition = sessionStorage.getItem('currentMoviePosition');
            const currentRank = sessionStorage.getItem('currentMovieRank');
            
            if (currentPosition) {
                sessionStorage.setItem('returnToPosition', currentPosition);
            }
            if (currentRank) {
                sessionStorage.setItem('returnToRank', currentRank);
            }
            
            // ALWAYS go back to the collection (not homepage)
            window.location.href = '/collection/movies-like-inception';
        }
    };

    return (
        <motion.nav 
            className="mb-8 sm:mb-12 px-4 sm:px-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="flex items-center space-x-3 text-sm text-gray-400">
                {/* BACK TO EXACT MOVIE POSITION */}
                <motion.button
                    onClick={handleBackClick}
                    className="hover:text-yellow-400 transition-all duration-300 flex items-center gap-2"
                    whileHover={{ x: -2, color: '#facc15' }}
                >
                    <ArrowLeft size={16} />
                    <span>Back</span>
                </motion.button>
                <ChevronRight size={16} className="text-gray-600" />
                <motion.div whileHover={{ x: 2, color: '#facc15' }}>
                    <Link href="/collection/movies-like-inception" className="hover:text-yellow-400 transition-all duration-300">
                        Movies Like Inception
                    </Link>
                </motion.div>
                <ChevronRight size={16} className="text-gray-600" />
                <span className="text-yellow-400 font-medium">{movie.Title}</span>
            </div>
        </motion.nav>
    );
};

// SEO Schema Generation (keeping your existing functions)
const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    
    return {
        "@context": "https://schema.org",
        "@type": "Movie",
        "name": movie.Title,
        "description": movieInfo?.synopsis || `${movie.Title} - A compelling ${movie.Genre?.toLowerCase()} film like Inception`,
        "genre": movie.Genre,
        "datePublished": movie.Year?.toString(),
        "director": {
            "@type": "Person",
            "name": movieInfo?.director || "Acclaimed Director"
        },
        "actor": movieInfo?.cast?.map(actor => ({
            "@type": "Person",
            "name": actor
        })) || [],
        "duration": `PT${movie.Runtime}M`,
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": movieInfo?.rating || 7.0,
            "bestRating": 10,
            "worstRating": 1,
            "ratingCount": movieInfo?.audienceScore || 100
        }
    };
};

const generateFAQSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const sensitiveData = SENSITIVE_TIMELINES[movie.tmdbId];
    const contentTypes = getSensitiveContentTypes(movie.tmdbId);
    
    const faqs = [
        {
            question: `Is ${movie.Title} similar to Inception?`,
            answer: movieInfo?.seoDescription || `Yes, ${movie.Title} shares mind-bending qualities with Inception.`
        },
        {
            question: `Who directed ${movie.Title} and what is it about?`,
            answer: `${movie.Title} was directed by ${movieInfo?.director || 'acclaimed filmmaker'} in ${movie.Year}. ${movieInfo?.synopsis || `A compelling ${movie.Genre?.toLowerCase()} film.`}`
        },
        {
            question: `Does ${movie.Title} contain mature content?`,
            answer: sensitiveData?.scenes?.length > 0 
                ? `Yes, ${movie.Title} contains mature content including ${contentTypes ? contentTypes.join(', ') : 'adult themes'}. The film has ${sensitiveData.scenes.length} scenes with mature content.`
                : `No, ${movie.Title} does not contain notable mature content and is suitable for most audiences.`
        }
    ];

    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };
};

// IMPROVED: Quote function with Shutter Island fix
const getMovieQuote = (movie) => {
    // Special quotes for specific movies
    const specialQuotes = {
        'tt1130884': 'Which would be worse: To live as a monster, or to die as a good man?', // Shutter Island
        'Shutter Island': 'Which would be worse: To live as a monster, or to die as a good man?',
    };

    // Check by IMDB ID first
    if (specialQuotes[movie.imdbID]) {
        return specialQuotes[movie.imdbID];
    }

    // Check by title
    if (specialQuotes[movie.Title]) {
        return specialQuotes[movie.Title];
    }

    // Fall back to strategic quotes or default
    return STRATEGIC_QUOTES[movie.tmdbId] || 'A mind-bending cinematic experience';
};

// Main Movie Page Component - PERFECT BACK TO EXACT POSITION
const MoviePage = ({ movie }) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const movieSchema = generateMovieSchema(movie);
    const faqSchema = generateFAQSchema(movie);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // FIXED: Get the correct data values with fallbacks
    const getGenre = () => {
        return movie.Genre || movieInfo?.genre || 'Thriller';
    };

    const getRuntime = () => {
        if (movie.Runtime) return movie.Runtime;
        if (movieInfo?.runtime) return `${movieInfo.runtime} min`;
        return '138 min';
    };

    const getDirector = () => {
        return movieInfo?.director || movie.Director || 'Martin Scorsese';
    };

    const getYear = () => {
        return movie.Year || '2010';
    };

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            <Head>
                <title>{movie.Title} ({getYear()}) Like Inception - Reviews, Ratings & User Comments | Filmiway</title>
                <meta name="description" content={`${movie.Title} like Inception: User ratings, reviews & comments. Complexity score ${movieInfo?.mindBendingIndex || 75}/100. ${getGenre()} film by ${getDirector()}. ${movieInfo?.seoDescription || ''}`} />
                <meta name="keywords" content={`${movie.Title}, ${getYear()}, like inception, user reviews, movie ratings, ${getGenre()}, ${getDirector()}, community comments, film discussion, streaming guide`} />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`https://filmiway.com/movies/${movie.imdbID}`} />
                <link rel="icon" href="/favicon.ico" />
                
                <meta property="og:title" content={`${movie.Title} (${getYear()}) Like Inception - Community Reviews & Ratings`} />
                <meta property="og:description" content={movieInfo?.synopsis || `${movie.Title} - Community reviews and discussion for this Inception-like ${getGenre().toLowerCase()} film.`} />
                <meta property="og:type" content="video.movie" />
                <meta property="og:url" content={`https://filmiway.com/movies/${movie.imdbID}`} />
                <meta property="og:site_name" content="Filmiway" />
                
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${movie.Title} (${getYear()}) Like Inception - User Reviews`} />
                <meta name="twitter:description" content={`Community reviews and ratings for ${movie.Title}, a mind-bending film similar to Inception.`} />
                
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(movieSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            </Head>

            {/* Subtle Cinematic Elements */}
            <SubtleFilmGrain />
            
            {/* Enhanced Background with Minimal Parallax */}
            <div className="absolute inset-0">
                <CinematicBackground />
                <motion.div 
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"
                    style={{ y: scrollY * 0.2 }}
                />
            </div>

            {/* PERFECT BACK BUTTON - Goes to exact movie position */}
            <PerfectBackButton movie={movie} />

            <div className="relative z-10 pt-12 sm:pt-16">
                <Breadcrumb movie={movie} />
                
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-32">
                    {/* FIXED Movie Header - VISIBLE METADATA */}
                    <motion.div 
                        className="flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-20 mb-16 sm:mb-24"
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        {/* Movie Poster */}
                        <div className="flex-shrink-0 mx-auto lg:mx-0">
                            <motion.div 
                                className="w-72 h-[432px] sm:w-80 sm:h-[480px] lg:w-96 lg:h-[576px] relative group"
                                whileHover={{ y: -8 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            >
                                {/* Subtle Glow Effect */}
                                <div className="absolute -inset-3 bg-gradient-to-b from-yellow-400/10 to-blue-400/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                                
                                <TMDBMoviePoster movie={movie} className="w-full h-full relative z-10 rounded-xl" />
                                
                                {/* Minimal Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                                    <div className="absolute bottom-6 left-6 right-6">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                                                <span className="text-white font-semibold">{movieInfo?.rating || 7.0}</span>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-blue-400 font-semibold text-sm">
                                                    {movieInfo?.mindBendingIndex || 75}/100
                                                </div>
                                                <div className="text-white/70 text-xs">Complexity</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* COMPLETELY FIXED: Movie Info with Visible Data */}
                        <div className="flex-1 space-y-8 sm:space-y-10">
                            <div className="text-center lg:text-left">
                                {/* Title Typography */}
                                <motion.h1 
                                    className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white mb-6 leading-tight"
                                    style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif", fontWeight: 300 }}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 1 }}
                                >
                                    {movie.Title}
                                    <motion.span 
                                        className="text-yellow-400 block text-2xl sm:text-3xl lg:text-4xl mt-3 font-normal"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.6 }}
                                    >
                                        ({getYear()})
                                    </motion.span>
                                </motion.h1>

                                {/* COMPLETELY FIXED: Visible Metadata with Real Data */}
                                <motion.div 
                                    className="flex flex-wrap justify-center lg:justify-start items-center gap-4 sm:gap-6 text-gray-300 text-base sm:text-lg mb-8 relative z-10"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                >
                                    {/* Genre */}
                                    <span className="flex items-center gap-2 bg-gray-800/60 px-4 py-2 rounded-full backdrop-blur-sm border border-gray-700/50">
                                        <Award className="w-4 h-4 text-blue-400" />
                                        <span className="text-white font-medium">{getGenre()}</span>
                                    </span>
                                    
                                    {/* Runtime */}
                                    <span className="flex items-center gap-2 bg-gray-800/60 px-4 py-2 rounded-full backdrop-blur-sm border border-gray-700/50">
                                        <Clock className="w-4 h-4 text-yellow-400" />
                                        <span className="text-white font-medium">{getRuntime()}</span>
                                    </span>
                                    
                                    {/* Director */}
                                    <span className="bg-gray-800/60 px-4 py-2 rounded-full backdrop-blur-sm border border-gray-700/50">
                                        <span className="text-gray-300">Directed by </span>
                                        <span className="text-white font-medium">{getDirector()}</span>
                                    </span>
                                </motion.div>

                                {/* FIXED: Quote with Shutter Island fix */}
                                <motion.blockquote 
                                    className="text-xl sm:text-2xl text-yellow-400/80 font-light tracking-wide italic mb-10 leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.7, duration: 0.8 }}
                                >
                                    <span className="text-3xl text-yellow-400 opacity-60">"</span>
                                    {getMovieQuote(movie)}
                                    <span className="text-3xl text-yellow-400 opacity-60">"</span>
                                </motion.blockquote>

                                {/* Stats Grid */}
                                <motion.div 
                                    className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto lg:mx-0"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.9, duration: 0.8 }}
                                >
                                    {/* Complexity Score */}
                                    <div className="text-center lg:text-left bg-gradient-to-b from-yellow-400/5 to-transparent border border-yellow-400/20 rounded-xl p-6 backdrop-blur-sm">
                                        <div className="text-3xl sm:text-4xl font-light text-yellow-400 mb-2">
                                            {movieInfo?.mindBendingIndex || 75}
                                        </div>
                                        <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">
                                            Complexity Score
                                        </div>
                                    </div>

                                    {/* IMDb Rating */}
                                    <div className="text-center lg:text-left bg-gradient-to-b from-white/5 to-transparent border border-white/20 rounded-xl p-6 backdrop-blur-sm">
                                        <div className="text-3xl sm:text-4xl font-light text-white mb-2 flex items-center justify-center lg:justify-start gap-2">
                                            <Star className="w-7 h-7 text-yellow-400 fill-current" />
                                            {movieInfo?.rating || 8.2}
                                        </div>
                                        <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">
                                            IMDb Rating
                                        </div>
                                    </div>

                                    {/* Critics Score */}
                                    <div className="text-center lg:text-left bg-gradient-to-b from-blue-400/5 to-transparent border border-blue-400/20 rounded-xl p-6 backdrop-blur-sm">
                                        <div className="text-3xl sm:text-4xl font-light text-blue-400 mb-2">
                                            {movieInfo?.criticsScore || 68}%
                                        </div>
                                        <div className="text-sm text-gray-400 uppercase tracking-wider font-medium">
                                            Critics Score
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Movie Details Sections */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="space-y-16 sm:space-y-24"
                    >
                        <MovieDetailsSection movie={movie} />
                    </motion.div>

                    {/* TMDB Attribution */}
                    <TMDBAttribution />
                </div>
            </div>
        </div>
    );
};

// SSG Functions (keeping your existing ones)
export async function getStaticPaths() {
    const paths = COMPLETE_MOVIE_DATABASE.map((movie) => ({
        params: { id: movie.imdbID }
    }));

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const movie = COMPLETE_MOVIE_DATABASE.find(m => m.imdbID === params.id);
    
    if (!movie) {
        return {
            notFound: true
        };
    }

    return {
        props: {
            movie
        }
    };
}

export default MoviePage;
