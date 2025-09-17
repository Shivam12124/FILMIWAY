// pages/movie/[id].js - MOVIE DETAIL PAGE WITH MASSIVE LEFT-POSITIONED LOGO
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
    Play, Star, Calendar, Clock, Award, ArrowLeft, 
    Film, Users, Globe, ExternalLink, Heart, Share2,
    ChevronLeft, ChevronRight, Info, Tv, DollarSign,
    Menu, X
} from 'lucide-react';

const TMDB_API_KEY = '6054e5498fb2619274454959c38bbdfa';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

const MovieDetailPage = () => {
    const router = useRouter();
    const { id } = router.query;
    
    const [movie, setMovie] = useState(null);
    const [credits, setCredits] = useState(null);
    const [videos, setVideos] = useState([]);
    const [similarMovies, setSimilarMovies] = useState([]);
    const [watchProviders, setWatchProviders] = useState(null);
    const [userCountry, setUserCountry] = useState('US'); // Default to US
    const [loading, setLoading] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // AUTO-DETECT USER COUNTRY
    useEffect(() => {
        const detectUserCountry = async () => {
            try {
                // Try to get country from browser timezone
                const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                
                // Common timezone to country mapping
                const timezoneToCountry = {
                    'Asia/Kolkata': 'IN',
                    'Asia/Mumbai': 'IN',
                    'Asia/Delhi': 'IN',
                    'America/New_York': 'US',
                    'America/Los_Angeles': 'US',
                    'America/Chicago': 'US',
                    'Europe/London': 'GB',
                    'Europe/Paris': 'FR',
                    'Europe/Berlin': 'DE',
                    'Asia/Tokyo': 'JP',
                    'Australia/Sydney': 'AU'
                };

                let detectedCountry = timezoneToCountry[timeZone] || 'US';

                // Try IP-based detection as fallback
                try {
                    const ipResponse = await fetch('https://ipapi.co/json/');
                    const ipData = await ipResponse.json();
                    if (ipData.country_code) {
                        detectedCountry = ipData.country_code;
                    }
                } catch (ipError) {
                    console.log('IP detection failed, using timezone-based detection');
                }

                setUserCountry(detectedCountry);
                console.log('Detected country:', detectedCountry);
            } catch (error) {
                console.error('Country detection failed:', error);
                setUserCountry('US'); // Fallback to US
            }
        };

        detectUserCountry();
    }, []);

    // Fetch movie details from TMDB
    useEffect(() => {
        if (!id) return;

        const fetchMovieDetails = async () => {
            try {
                const [movieRes, creditsRes, videosRes, similarRes, watchRes] = await Promise.all([
                    fetch(`${TMDB_BASE_URL}/movie/${id}?api_key=${TMDB_API_KEY}`),
                    fetch(`${TMDB_BASE_URL}/movie/${id}/credits?api_key=${TMDB_API_KEY}`),
                    fetch(`${TMDB_BASE_URL}/movie/${id}/videos?api_key=${TMDB_API_KEY}`),
                    fetch(`${TMDB_BASE_URL}/movie/${id}/similar?api_key=${TMDB_API_KEY}`),
                    fetch(`${TMDB_BASE_URL}/movie/${id}/watch/providers?api_key=${TMDB_API_KEY}`)
                ]);

                const [movieData, creditsData, videosData, similarData, watchData] = await Promise.all([
                    movieRes.json(),
                    creditsRes.json(),
                    videosRes.json(),
                    similarRes.json(),
                    watchRes.json()
                ]);

                setMovie(movieData);
                setCredits(creditsData);
                setVideos(videosData.results?.filter(video => video.type === 'Trailer').slice(0, 3) || []);
                setSimilarMovies(similarData.results?.slice(0, 15) || []);
                setWatchProviders(watchData.results);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching movie details:', error);
                setLoading(false);
            }
        };

        fetchMovieDetails();
    }, [id]);

    // Navigation Component - MASSIVE LEFT-POSITIONED LOGO
    const Navigation = () => (
        <motion.nav 
            className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-28">
                    {/* Back Button + MASSIVE LEFT-POSITIONED LOGO */}
                    <div className="flex items-center space-x-4">
                        <button 
                            onClick={() => router.back()}
                            className="text-gray-300 hover:text-yellow-400 transition-colors"
                        >
                            <ArrowLeft className="w-7 h-7" />
                        </button>
                        
                        {/* MASSIVE LEFT-POSITIONED LOGO */}
                        <Link href="/" className="flex items-center justify-start">
                            <div className="w-40 h-20 sm:w-48 sm:h-24 md:w-52 md:h-28 lg:w-56 lg:h-32 flex items-center justify-start">
                                <img 
                                    src="/filmiway-logo.svg" 
                                    alt="Filmiway" 
                                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-gray-300 hover:text-white transition-colors text-lg">Home</Link>
                        <Link href="/collection/movies-like-inception" className="text-gray-300 hover:text-white transition-colors text-lg">Collections</Link>
                        <Link href="/trending" className="text-gray-300 hover:text-white transition-colors text-lg">Trending</Link>
                        <Link href="/search" className="text-gray-300 hover:text-white transition-colors text-lg">Search</Link>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center space-x-4">
                        <button className="text-gray-300 hover:text-yellow-400 transition-colors">
                            <Heart className="w-6 h-6" />
                        </button>
                        <button className="text-gray-300 hover:text-yellow-400 transition-colors">
                            <Share2 className="w-6 h-6" />
                        </button>
                        
                        {/* Mobile Menu Button */}
                        <button 
                            className="md:hidden text-gray-300 hover:text-yellow-400 transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            className="md:hidden bg-black/98 backdrop-blur-md border-t border-gray-800"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                        >
                            <div className="px-4 py-6 space-y-4">
                                <Link href="/" className="block text-gray-300 hover:text-white transition-colors py-3 text-lg">Home</Link>
                                <Link href="/collection/movies-like-inception" className="block text-gray-300 hover:text-white transition-colors py-3 text-lg">Collections</Link>
                                <Link href="/trending" className="block text-gray-300 hover:text-white transition-colors py-3 text-lg">Trending</Link>
                                <Link href="/search" className="block text-gray-300 hover:text-white transition-colors py-3 text-lg">Search</Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );

    // Hero Section - REMOVED GOLDEN GLOW
    const HeroSection = ({ movie }) => (
        <section className="relative h-screen flex items-end overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src={`${IMAGE_BASE_URL}/original${movie.backdrop_path}`}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 pb-20 pt-32">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-end">
                    {/* MOVIE POSTER - REMOVED GOLDEN GLOW */}
                    <motion.div
                        className="lg:col-span-1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <div className="w-80 h-[480px] mx-auto lg:mx-0 relative group">
                            <img
                                src={`${IMAGE_BASE_URL}/w500${movie.poster_path}`}
                                alt={movie.title}
                                className="w-full h-full object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                            />
                            {/* REMOVED THE GOLDEN GLOW - NO MORE WEIRD GOLDEN COLOR */}
                        </div>
                    </motion.div>

                    <motion.div 
                        className="lg:col-span-2 space-y-6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 1 }}
                    >
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                            {movie.genres?.slice(0, 3).map((genre) => (
                                <span 
                                    key={genre.id} 
                                    className="bg-yellow-400/20 border border-yellow-400/40 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium"
                                >
                                    {genre.name}
                                </span>
                            ))}
                            <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-yellow-400 font-bold">{movie.vote_average?.toFixed(1)}</span>
                                <span className="text-gray-300 text-sm">({movie.vote_count})</span>
                            </div>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight">
                            {movie.title}
                        </h1>

                        {movie.tagline && (
                            <p className="text-xl sm:text-2xl text-yellow-400/90 font-light italic">
                                "{movie.tagline}"
                            </p>
                        )}

                        <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-3xl">
                            {movie.overview}
                        </p>

                        <div className="flex flex-wrap items-center gap-6 text-gray-300">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-yellow-400" />
                                <span>{new Date(movie.release_date).getFullYear()}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-yellow-400" />
                                <span>{movie.runtime} min</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Globe className="w-5 h-5 text-yellow-400" />
                                <span>{movie.original_language?.toUpperCase()}</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            {videos[0] && (
                                <motion.button
                                    className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 hover:bg-yellow-300 transition-all shadow-lg shadow-yellow-400/25"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => window.open(`https://www.youtube.com/watch?v=${videos[0].key}`, '_blank')}
                                >
                                    <Play className="w-6 h-6" />
                                    Watch Trailer
                                </motion.button>
                            )}
                            
                            <motion.button
                                className="border-2 border-gray-600 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-3 hover:border-yellow-400 hover:text-yellow-400 transition-all"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Info className="w-6 h-6" />
                                Add to Watchlist
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );

    // WHERE TO WATCH SECTION - AUTO COUNTRY DETECTION
    const WhereToWatchSection = ({ providers }) => {
        // AUTO-DETECT USER COUNTRY AND SHOW COUNTRY CODE
        const userProviders = providers?.[userCountry];
        
        // Country code to name mapping
        const countryNames = {
            'IN': 'India',
            'US': 'United States', 
            'GB': 'United Kingdom',
            'CA': 'Canada',
            'AU': 'Australia',
            'DE': 'Germany',
            'FR': 'France',
            'JP': 'Japan',
            'BR': 'Brazil',
            'MX': 'Mexico'
        };
        
        if (!userProviders) {
            return (
                <section className="py-16 bg-gradient-to-b from-black to-gray-900">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">Where to Watch</h2>
                            <p className="text-gray-400 text-lg">
                                Showing availability for {countryNames[userCountry] || userCountry} ({userCountry})
                            </p>
                        </div>
                        <div className="text-center text-gray-400">
                            <p>No streaming information available for your region</p>
                            <p className="text-sm mt-2">Try checking local streaming services or digital rental platforms</p>
                        </div>
                    </div>
                </section>
            );
        }

        return (
            <section className="py-16 bg-gradient-to-b from-black to-gray-900">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">Where to Watch</h2>
                        <p className="text-gray-400 text-lg">
                            Available in {countryNames[userCountry] || userCountry} ({userCountry})
                        </p>
                    </div>
                    
                    <div className="space-y-8">
                        {/* Streaming Services */}
                        {userProviders.flatrate && (
                            <div>
                                <h3 className="text-xl text-yellow-400 mb-6 flex items-center justify-center gap-2">
                                    <Tv className="w-5 h-5" />
                                    Stream with Subscription
                                </h3>
                                <div className="flex justify-center gap-6 flex-wrap">
                                    {userProviders.flatrate.map((provider) => (
                                        <div key={provider.provider_id} className="text-center">
                                            <div className="w-20 h-20 rounded-xl overflow-hidden mb-3 bg-gray-800 mx-auto shadow-lg">
                                                <img
                                                    src={`${IMAGE_BASE_URL}/w92${provider.logo_path}`}
                                                    alt={provider.provider_name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <p className="text-white text-sm font-medium">{provider.provider_name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Rent/Buy Options */}
                        {(userProviders.rent || userProviders.buy) && (
                            <div>
                                <h3 className="text-xl text-white mb-6 flex items-center justify-center gap-2">
                                    <DollarSign className="w-5 h-5" />
                                    Rent or Buy
                                </h3>
                                <div className="flex justify-center gap-6 flex-wrap">
                                    {[...(userProviders.rent || []), ...(userProviders.buy || [])].map((provider, index) => (
                                        <div key={`${provider.provider_id}-${index}`} className="text-center">
                                            <div className="w-20 h-20 rounded-xl overflow-hidden mb-3 bg-gray-800 mx-auto shadow-lg">
                                                <img
                                                    src={`${IMAGE_BASE_URL}/w92${provider.logo_path}`}
                                                    alt={provider.provider_name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <p className="text-white text-sm font-medium">{provider.provider_name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        );
    };

    // CAST SECTION - NO CHANGES
    const CastSection = ({ credits }) => (
        <section className="py-16 bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">Cast & Crew</h2>
                    <p className="text-gray-400 text-lg">The talented people behind this movie</p>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
                    {credits?.cast?.slice(0, 18).map((person, index) => (
                        <motion.div
                            key={person.id}
                            className="text-center group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.05 }}
                        >
                            <div className="w-full aspect-[3/4] rounded-xl overflow-hidden mb-4 bg-gray-800 shadow-xl">
                                {person.profile_path ? (
                                    <img
                                        src={`${IMAGE_BASE_URL}/w500${person.profile_path}`}
                                        alt={person.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                                        <Users className="w-16 h-16 text-gray-500" />
                                    </div>
                                )}
                            </div>
                            <h3 className="text-white font-medium text-base mb-2 line-clamp-2">{person.name}</h3>
                            <p className="text-gray-400 text-sm line-clamp-2">{person.character}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );

    // SIMILAR MOVIES SECTION - NO CHANGES
    const SimilarMoviesSection = ({ movies }) => (
        <section className="py-16 bg-black">
            <div className="container mx-auto px-4 sm:px-6">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">You Might Also Like</h2>
                    <p className="text-gray-400 text-lg">Similar movies to explore</p>
                </motion.div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
                    {movies.slice(0, 18).map((movie, index) => (
                        <motion.div
                            key={movie.id}
                            className="group cursor-pointer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.05 }}
                            onClick={() => router.push(`/movie/${movie.id}`)}
                        >
                            <div className="relative w-full aspect-[2/3] rounded-xl overflow-hidden bg-gray-800 shadow-xl">
                                <img
                                    src={`${IMAGE_BASE_URL}/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                
                                <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm px-3 py-2 rounded-full">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                        <span className="text-white text-sm font-medium">{movie.vote_average?.toFixed(1)}</span>
                                    </div>
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-6 left-4 right-4">
                                        <h3 className="text-white font-semibold text-base mb-2 line-clamp-2">{movie.title}</h3>
                                        <p className="text-gray-300 text-sm">{new Date(movie.release_date).getFullYear()}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-center">
                    <div className="w-20 h-20 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
                    <h2 className="text-yellow-400 text-2xl font-semibold mb-2">Loading Movie</h2>
                    <p className="text-gray-400">Preparing cinematic experience...</p>
                </div>
            </div>
        );
    }

    if (!movie) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-white text-2xl mb-4">Movie not found</h2>
                    <Link href="/" className="text-yellow-400 hover:underline">
                        Return to Homepage
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>{movie.title} ({new Date(movie.release_date).getFullYear()}) - Filmiway</title>
                <meta name="description" content={movie.overview} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
            </Head>

            <div className="min-h-screen bg-black">
                <Navigation />
                <HeroSection movie={movie} />
                <WhereToWatchSection providers={watchProviders} />
                <CastSection credits={credits} />
                <SimilarMoviesSection movies={similarMovies} />
            </div>
        </>
    );
};

export default MovieDetailPage;
