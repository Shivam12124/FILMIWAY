// pages/movie/[id].js - EXACTLY YOUR CODE WITH HEAD SECTION FIX ONLY
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
    Play, Star, Calendar, Clock, Award, ArrowLeft, 
    Film, Users, Globe, ExternalLink, Heart, Share2,
    ChevronLeft, ChevronRight, Info, Tv, DollarSign,
    Menu, X, User
} from 'lucide-react';

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
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
    const [userCountry, setUserCountry] = useState('US');
    const [loading, setLoading] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // AUTO-DETECT USER COUNTRY
    useEffect(() => {
        const detectUserCountry = async () => {
            try {
                const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
                
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
            } catch (error) {
                console.error('Country detection failed:', error);
                setUserCountry('US');
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

    // Navigation Component
    const Navigation = () => (
        <motion.nav 
            className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-28">
                    <div className="flex items-center space-x-4">
                        <button 
                            onClick={() => router.back()}
                            className="text-gray-300 hover:text-yellow-400 transition-colors"
                        >
                            <ArrowLeft className="w-6 h-6 sm:w-7 sm:h-7" />
                        </button>
                        
                        <Link href="/" className="flex items-center justify-start">
                            <div className="w-44 h-24 sm:w-52 sm:h-28 md:w-60 md:h-32 lg:w-64 lg:h-36 flex items-center justify-start">
                                <img 
                                    src="/filmiway-logo.svg" 
                                    alt="Filmiway" 
                                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-gray-300 hover:text-white transition-colors text-lg">Home</Link>
                        <Link href="/collection/movies-like-inception" className="text-gray-300 hover:text-white transition-colors text-lg">Collections</Link>
                        <Link href="/search" className="text-gray-300 hover:text-white transition-colors text-lg">Search</Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="hidden sm:block text-gray-300 hover:text-yellow-400 transition-colors">
                            <Heart className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                        <button className="hidden sm:block text-gray-300 hover:text-yellow-400 transition-colors">
                            <Share2 className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                        
                        <button 
                            className="md:hidden text-gray-300 hover:text-yellow-400 transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                        </button>
                    </div>
                </div>

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
                                <Link href="/search" className="block text-gray-300 hover:text-white transition-colors py-3 text-lg">Search</Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );

    // Hero Section
    const HeroSection = ({ movie }) => (
        <section className="relative min-h-screen flex items-end overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src={`${IMAGE_BASE_URL}/original${movie.backdrop_path}`}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            </div>

            <div className="relative z-10 container mx-auto px-4 sm:px-6 pb-12 sm:pb-20 pt-32">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 items-end">
                    <motion.div
                        className="lg:col-span-1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <div className="w-64 h-96 sm:w-72 sm:h-[432px] lg:w-80 lg:h-[480px] mx-auto lg:mx-0 relative group">
                            <img
                                src={`${IMAGE_BASE_URL}/w500${movie.poster_path}`}
                                alt={movie.title}
                                className="w-full h-full object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </motion.div>

                    <motion.div 
                        className="lg:col-span-2 space-y-4 sm:space-y-6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 1 }}
                    >
                        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4">
                            {movie.genres?.slice(0, 3).map((genre) => (
                                <span 
                                    key={genre.id} 
                                    className="bg-yellow-400/20 border border-yellow-400/40 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium"
                                >
                                    {genre.name}
                                </span>
                            ))}
                            <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                <span className="text-yellow-400 font-bold">{movie.vote_average?.toFixed(1)}</span>
                                <span className="text-gray-300 text-sm">({movie.vote_count})</span>
                            </div>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-tight">
                            {movie.title}
                        </h1>

                        {movie.tagline && (
                            <p className="text-lg sm:text-xl lg:text-2xl text-yellow-400/90 font-light italic">
                                "{movie.tagline}"
                            </p>
                        )}

                        <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-3xl">
                            {movie.overview}
                        </p>

                        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-gray-300">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                                <span className="text-sm sm:text-base">{new Date(movie.release_date).getFullYear()}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                                <span className="text-sm sm:text-base">{movie.runtime} min</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                                <span className="text-sm sm:text-base">{movie.original_language?.toUpperCase()}</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            {videos[0] && (
                                <motion.button
                                    className="bg-yellow-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg flex items-center justify-center gap-3 hover:bg-yellow-300 transition-all shadow-lg shadow-yellow-400/25"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => window.open(`https://www.youtube.com/watch?v=${videos[0].key}`, '_blank')}
                                >
                                    <Play className="w-5 h-5 sm:w-6 sm:h-6" />
                                    Watch Trailer
                                </motion.button>
                            )}
                            
                            <motion.button
                                className="border-2 border-gray-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg flex items-center justify-center gap-3 hover:border-yellow-400 hover:text-yellow-400 transition-all"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Info className="w-5 h-5 sm:w-6 sm:h-6" />
                                Add to Watchlist
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );

    // Where to Watch Section
    const WhereToWatchSection = ({ providers }) => {
        const userProviders = providers?.[userCountry];
        
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
                <section className="py-12 sm:py-16 bg-gradient-to-b from-black to-gray-900">
                    <div className="container mx-auto px-4 sm:px-6">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-4">Where to Watch</h2>
                            <p className="text-gray-400 text-base sm:text-lg">
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
            <section className="py-12 sm:py-16 bg-gradient-to-b from-black to-gray-900">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-4">Where to Watch</h2>
                        <p className="text-gray-400 text-base sm:text-lg">
                            Available in {countryNames[userCountry] || userCountry} ({userCountry})
                        </p>
                    </div>
                    
                    <div className="space-y-8">
                        {userProviders.flatrate && (
                            <div>
                                <h3 className="text-lg sm:text-xl text-yellow-400 mb-6 flex items-center justify-center gap-2">
                                    <Tv className="w-5 h-5" />
                                    Stream with Subscription
                                </h3>
                                <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
                                    {userProviders.flatrate.map((provider) => (
                                        <div key={provider.provider_id} className="text-center">
                                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden mb-3 bg-gray-800 mx-auto shadow-lg">
                                                <img
                                                    src={`${IMAGE_BASE_URL}/w92${provider.logo_path}`}
                                                    alt={provider.provider_name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <p className="text-white text-xs sm:text-sm font-medium">{provider.provider_name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {(userProviders.rent || userProviders.buy) && (
                            <div>
                                <h3 className="text-lg sm:text-xl text-white mb-6 flex items-center justify-center gap-2">
                                    <DollarSign className="w-5 h-5" />
                                    Rent or Buy
                                </h3>
                                <div className="flex justify-center gap-4 sm:gap-6 flex-wrap">
                                    {[...(userProviders.rent || []), ...(userProviders.buy || [])].map((provider, index) => (
                                        <div key={`${provider.provider_id}-${index}`} className="text-center">
                                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden mb-3 bg-gray-800 mx-auto shadow-lg">
                                                <img
                                                    src={`${IMAGE_BASE_URL}/w92${provider.logo_path}`}
                                                    alt={provider.provider_name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <p className="text-white text-xs sm:text-sm font-medium">{provider.provider_name}</p>
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

    // Cast Section - Director with EXACT SAME SIZE & SHAPE as Cast
    const CastSection = ({ credits }) => {
        const director = credits?.crew?.find(person => person.job === 'Director');
        
        return (
            <section className="py-12 sm:py-16 bg-gray-900">
                <div className="container mx-auto px-4 sm:px-6">
                    <motion.div
                        className="text-center mb-8 sm:mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-4">Cast & Crew</h2>
                        <p className="text-gray-400 text-base sm:text-lg">The talented people behind this movie</p>
                    </motion.div>

                    <div className="space-y-8 sm:space-y-12">
                        {/* DIRECTOR FIRST - CENTER & ABOVE WITH SAME SIZE AS CAST */}
                        {director && (
                            <motion.div
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <h3 className="text-lg font-medium text-yellow-400 mb-6 flex items-center justify-center gap-2">
                                    <User className="w-5 h-5" />
                                    Director
                                </h3>
                                
                                {/* DIRECTOR WITH EXACT SAME SIZE & SHAPE AS CAST */}
                                <div className="flex justify-center mb-8">
                                    <motion.div
                                        className="text-center group"
                                        whileHover={{ y: -8, scale: 1.05 }}
                                    >
                                        {/* SAME ASPECT RATIO & SIZE AS CAST MEMBERS */}
                                        <div className="w-full aspect-[3/4] rounded-xl overflow-hidden mb-4 bg-gray-800 shadow-xl border-2 border-yellow-400/30 max-w-[120px] sm:max-w-[140px] md:max-w-[160px]">
                                            {director.profile_path ? (
                                                <img
                                                    src={`${IMAGE_BASE_URL}/w500${director.profile_path}`}
                                                    alt={director.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 flex items-center justify-center">
                                                    <span className="text-yellow-400 font-semibold text-lg">
                                                        {director.name.split(' ').map(n => n[0]).join('')}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                        <h3 className="text-white font-medium text-sm sm:text-base mb-2 line-clamp-2">{director.name}</h3>
                                        <p className="text-yellow-400 text-xs sm:text-sm">Director</p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}

                        {/* MAIN CAST - SAME SIZE AS BEFORE */}
                        <div>
                            <h3 className="text-lg font-medium text-white mb-6 text-center sm:text-left">Main Cast</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 sm:gap-8">
                                {credits?.cast?.slice(0, 12).map((person, index) => (
                                    <motion.div
                                        key={person.id}
                                        className="text-center group"
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ y: -8, scale: 1.05 }}
                                    >
                                        {/* SAME SIZE & SHAPE FOR ALL CAST */}
                                        <div className="w-full aspect-[3/4] rounded-xl overflow-hidden mb-4 bg-gray-800 shadow-xl">
                                            {person.profile_path ? (
                                                <img
                                                    src={`${IMAGE_BASE_URL}/w500${person.profile_path}`}
                                                    alt={person.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                                                    <Users className="w-12 h-12 sm:w-16 sm:h-16 text-gray-500" />
                                                </div>
                                            )}
                                        </div>
                                        <h3 className="text-white font-medium text-sm sm:text-base mb-2 line-clamp-2">{person.name}</h3>
                                        <p className="text-gray-400 text-xs sm:text-sm line-clamp-2">{person.character}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    // Similar Movies Section with Navigation Arrows
    const SimilarMoviesSection = ({ movies }) => {
        const [currentIndex, setCurrentIndex] = useState(0);
        
        const itemsPerView = {
            mobile: 2,
            tablet: 3,
            desktop: 4,
            large: 6
        };

        const getItemsPerView = () => {
            if (typeof window !== 'undefined') {
                if (window.innerWidth < 640) return itemsPerView.mobile;
                if (window.innerWidth < 1024) return itemsPerView.tablet;
                if (window.innerWidth < 1280) return itemsPerView.desktop;
                return itemsPerView.large;
            }
            return itemsPerView.desktop;
        };

        const [itemsToShow, setItemsToShow] = useState(getItemsPerView());

        useEffect(() => {
            const handleResize = () => {
                setItemsToShow(getItemsPerView());
            };

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        const maxIndex = Math.max(0, movies.length - itemsToShow);

        const nextSlide = () => {
            setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
        };

        const prevSlide = () => {
            setCurrentIndex(prev => Math.max(prev - 1, 0));
        };

        return (
            <section className="py-12 sm:py-16 bg-black">
                <div className="container mx-auto px-4 sm:px-6">
                    <motion.div
                        className="text-center mb-8 sm:mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-4">You Might Also Like</h2>
                        <p className="text-gray-400 text-base sm:text-lg">Similar movies to explore</p>
                    </motion.div>

                    <div className="relative">
                        {currentIndex > 0 && (
                            <motion.button
                                onClick={prevSlide}
                                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-700/50 hover:bg-gray-800/90 hover:border-yellow-400/50 transition-all duration-300 flex items-center justify-center"
                                whileHover={{ scale: 1.1, x: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                            </motion.button>
                        )}

                        {currentIndex < maxIndex && (
                            <motion.button
                                onClick={nextSlide}
                                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-gray-900/80 backdrop-blur-sm rounded-full border border-gray-700/50 hover:bg-gray-800/90 hover:border-yellow-400/50 transition-all duration-300 flex items-center justify-center"
                                whileHover={{ scale: 1.1, x: 2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                            </motion.button>
                        )}

                        <div className="overflow-hidden px-6 sm:px-8">
                            <motion.div 
                                className="flex transition-transform duration-300 ease-out"
                                style={{ 
                                    transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
                                    width: `${(movies.length / itemsToShow) * 100}%`
                                }}
                            >
                                {movies.slice(0, 18).map((movie, index) => (
                                    <div 
                                        key={movie.id} 
                                        className="flex-shrink-0 px-2 sm:px-3"
                                        style={{ width: `${100 / movies.length}%` }}
                                    >
                                        <motion.div
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
                                                
                                                <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-2 rounded-full">
                                                    <div className="flex items-center gap-1">
                                                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                                                        <span className="text-white text-xs sm:text-sm font-medium">{movie.vote_average?.toFixed(1)}</span>
                                                    </div>
                                                </div>

                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-4 right-3 sm:right-4">
                                                        <h3 className="text-white font-semibold text-sm sm:text-base mb-1 sm:mb-2 line-clamp-2">{movie.title}</h3>
                                                        <p className="text-gray-300 text-xs sm:text-sm">{new Date(movie.release_date).getFullYear()}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        <div className="flex justify-center mt-6 space-x-2">
                            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        index === currentIndex 
                                            ? 'bg-yellow-400 scale-125' 
                                            : 'bg-gray-600 hover:bg-gray-400'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    };

    // TMDB Attribution
    const TMDBAttribution = () => (
        <motion.div 
            className="py-12 sm:py-16 border-t border-gray-800/50 text-center bg-gray-900/50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <div className="container mx-auto px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                    <p className="text-gray-600 text-sm">
                        Movie data and posters powered by
                    </p>
                    <a 
                        href="https://www.themoviedb.org/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
                    >
                        <img 
                            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" 
                            alt="The Movie Database" 
                            className="h-4 sm:h-5 w-auto"
                        />
                        <span className="text-blue-400 text-sm hover:text-blue-300 transition-colors">
                            The Movie Database (TMDB)
                        </span>
                    </a>
                </div>
                <p className="text-gray-700 text-xs mt-2 text-center">
                    This product uses the TMDB API but is not endorsed or certified by TMDB.
                </p>
            </div>
        </motion.div>
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

    // MAIN RETURN - HEAD SECTION NOW CORRECTLY POSITIONED AFTER MOVIE IS LOADED
    return (
        <>
            <Head>
                <title>
                    {movie ? `${movie.title} (${new Date(movie.release_date).getFullYear()}) - Filmiway` : 'Loading Movie - Filmiway'}
                </title>
                <meta name="application-name" content="Filmiway" />
                <meta name="apple-mobile-web-app-title" content="Filmiway" />
                <meta name="description" content={movie?.overview || 'Discover amazing movies on Filmiway - Where Every Film Finds Its Way'} />
                <meta name="generator" content="Filmiway" />
                <meta name="author" content="Filmiway Team" />
                <meta name="publisher" content="Filmiway" />
                <meta name="copyright" content="Filmiway 2025" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                
                {/* OVERRIDE NEXT.JS BRANDING */}
                <meta name="framework" content="Filmiway Platform" />
                <meta name="powered-by" content="Filmiway" />
                
                {/* FAVICON SETUP */}
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="shortcut icon" href="/favicon.ico" />
                
                <meta name="theme-color" content="#facc15" />
                <meta name="msapplication-TileColor" content="#000000" />
                
                {/* MOVIE STRUCTURED DATA - ONLY WHEN MOVIE IS LOADED */}
                {movie && (
                    <script type="application/ld+json" dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Movie",
                            "name": movie.title,
                            "description": movie.overview,
                            "datePublished": movie.release_date,
                            "genre": movie.genres?.map(g => g.name) || [],
                            "duration": movie.runtime ? `PT${movie.runtime}M` : null,
                            "aggregateRating": movie.vote_average ? {
                                "@type": "AggregateRating",
                                "ratingValue": movie.vote_average,
                                "bestRating": 10,
                                "worstRating": 1,
                                "ratingCount": movie.vote_count || 0
                            } : null
                        })
                    }} />
                )}
                
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
            </Head>

            <div className="min-h-screen bg-black">
                <Navigation />
                <HeroSection movie={movie} />
                <WhereToWatchSection providers={watchProviders} />
                <CastSection credits={credits} />
                <SimilarMoviesSection movies={similarMovies} />
                <TMDBAttribution />
            </div>
        </>
    );
};

export default MovieDetailPage;
