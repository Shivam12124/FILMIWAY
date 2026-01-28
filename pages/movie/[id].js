// pages/movie/[id].js - COMPLETE CINEMATIC EXPERIENCE WITH STREAMING 🎬📺
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Home, ChevronRight, Star, Play, Clock, Users, Film, ArrowLeft, Menu, X, MapPin, ExternalLink, Tv } from 'lucide-react';

const MoviePage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [movie, setMovie] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [showTrailer, setShowTrailer] = React.useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const [flickerEffect, setFlickerEffect] = React.useState(false);
    const [userCountry, setUserCountry] = React.useState('US');
    const [watchProviders, setWatchProviders] = React.useState(null);

    const { scrollY } = useScroll();
    const backdropScale = useTransform(scrollY, [0, 1000], [1, 1.1]);
    const backdropOpacity = useTransform(scrollY, [0, 600], [1, 0.3]);

    React.useEffect(() => {
        if (!id) return;

        const fetchData = async () => {
            try {
                // Get user's country first
                const countryRes = await fetch('https://ipapi.co/json/');
                const countryData = await countryRes.json();
                setUserCountry(countryData.country_code || 'US');

                const [movieRes, creditsRes, similarRes, providersRes] = await Promise.all([
                    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6054e5498fb2619274454959c38bbdfa&append_to_response=videos`),
                    fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=6054e5498fb2619274454959c38bbdfa`),
                    fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=6054e5498fb2619274454959c38bbdfa`),
                    fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=6054e5498fb2619274454959c38bbdfa`)
                ]);

                const [movieData, creditsData, similarData, providersData] = await Promise.all([
                    movieRes.json(),
                    creditsRes.json(),
                    similarRes.json(),
                    providersRes.json()
                ]);
                
                if (movieData.id) {
                    const director = creditsData.crew?.find(person => person.job === 'Director');
                    const writer = creditsData.crew?.find(person => person.job === 'Writer' || person.job === 'Screenplay');
                    const cast = creditsData.cast?.slice(0, 12) || [];
                    const trailer = movieData.videos?.results?.find(video => video.type === 'Trailer' && video.site === 'YouTube');
                    
                    setMovie({
                        ...movieData,
                        director: director?.name || 'Unknown Director',
                        writer: writer?.name || 'Unknown Writer',
                        cast: cast,
                        recommendations: similarData.results?.slice(0, 12) || [],
                        trailerKey: trailer?.key,
                        backdrop: movieData.backdrop_path ? `https://image.tmdb.org/t/p/original${movieData.backdrop_path}` : null,
                        poster: movieData.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : null
                    });

                    setWatchProviders(providersData.results);
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    const openTrailer = () => {
        setFlickerEffect(true);
        setTimeout(() => {
            setFlickerEffect(false);
            setShowTrailer(true);
        }, 200);
    };

    // WHERE TO WATCH SECTION
    const WhereToWatchSection = () => {
        const currentCountryProviders = watchProviders?.[userCountry];
        
        if (!currentCountryProviders) {
            return (
                <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-gray-800">
                    <div className="container mx-auto px-4 sm:px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2 }}
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-8 tracking-widest uppercase cinema-glow relative inline-block" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                                WHERE TO WATCH
                                <motion.div 
                                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-transparent"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100%' }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 1.5 }}
                                />
                            </h2>
                            
                            <div className="text-center py-12">
                                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-yellow-400/20 to-yellow-500/20 rounded-full flex items-center justify-center border-2 border-yellow-400/30">
                                    <Tv size={40} className="text-yellow-400" />
                                </div>
                                <h3 className="text-xl sm:text-2xl text-white mb-4 font-semibold">Not Available in Your Region</h3>
                                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                    This movie is currently not available for streaming in your country. 
                                    Check back later or explore our other recommendations.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>
            );
        }

        return (
            <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-gray-800">
                <div className="container mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                    >
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
                            <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 tracking-widest uppercase cinema-glow relative inline-block" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                                WHERE TO WATCH
                                <motion.div 
                                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-transparent"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100%' }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 1.5 }}
                                />
                            </h2>
                            <div className="flex items-center gap-2 bg-black/50 px-4 py-2 rounded-full border border-gray-700">
                                <MapPin size={16} className="text-yellow-400" />
                                <span className="text-white text-sm font-medium">{userCountry}</span>
                            </div>
                        </div>

                        {/* STREAMING PLATFORMS */}
                        {currentCountryProviders.flatrate && (
                            <div className="mb-12">
                                <h3 className="text-xl sm:text-2xl text-white mb-6 font-semibold tracking-wide uppercase">
                                    🎬 Stream Now
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                                    {currentCountryProviders.flatrate.map((provider, index) => (
                                        <motion.div
                                            key={provider.provider_id}
                                            className="group"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1, duration: 0.6 }}
                                            whileHover={{ scale: 1.1, y: -8 }}
                                        >
                                            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-6 rounded-2xl border-2 border-gray-700 group-hover:border-yellow-400 transition-all duration-500 shadow-xl">
                                                <div className="aspect-square mb-3 sm:mb-4">
<Image
  src={`https://image.tmdb.org/t/p/w200${provider.logo_path}`}
  alt={provider.provider_name}
  width={200}
  height={200}
  className="w-full h-full object-cover rounded-xl"
  loading="lazy"
/>

                                                </div>
                                                <h4 className="text-white font-semibold text-center text-xs sm:text-sm group-hover:text-yellow-400 transition-colors duration-300">
                                                    {provider.provider_name}
                                                </h4>
                                                
                                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/0 group-hover:from-yellow-400/20 to-transparent rounded-2xl transition-all duration-500"></div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* RENT/BUY PLATFORMS */}
                        {currentCountryProviders.rent && (
                            <div className="mb-12">
                                <h3 className="text-xl sm:text-2xl text-white mb-6 font-semibold tracking-wide uppercase">
                                    💰 Rent or Buy
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                                    {currentCountryProviders.rent.map((provider, index) => (
                                        <motion.div
                                            key={provider.provider_id}
                                            className="group"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1, duration: 0.6 }}
                                            whileHover={{ scale: 1.1, y: -8 }}
                                        >
                                            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-4 sm:p-6 rounded-2xl border-2 border-gray-700 group-hover:border-blue-400 transition-all duration-500 shadow-xl">
                                                <div className="aspect-square mb-3 sm:mb-4">
                                                   <Image
  src={`https://image.tmdb.org/t/p/w200${provider.logo_path}`}
  alt={provider.provider_name}
  width={200}
  height={200}
  className="w-full h-full object-cover rounded-xl"
  loading="lazy"
/>

                                                </div>
                                                <h4 className="text-white font-semibold text-center text-xs sm:text-sm group-hover:text-blue-400 transition-colors duration-300">
                                                    {provider.provider_name}
                                                </h4>
                                                
                                                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 group-hover:from-blue-400/20 to-transparent rounded-2xl transition-all duration-500"></div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* JUSTWATCH LINK */}
                        {currentCountryProviders.link && (
                            <motion.div 
                                className="text-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8, duration: 1 }}
                            >
                                <a
                                    href={currentCountryProviders.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-lg hover:shadow-yellow-400/30 transform hover:scale-105"
                                >
                                    <ExternalLink size={20} />
                                    VIEW ALL OPTIONS
                                </a>
                                <p className="text-gray-400 text-sm mt-3">
                                    Powered by JustWatch
                                </p>
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </section>
        );
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center px-4">
                <motion.div 
                    className="text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                >
                    <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mb-6 cinema-glow"></div>
                    <h2 className="text-yellow-400 text-lg sm:text-xl font-bold mb-2 tracking-widest uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>LOADING CINEMA</h2>
                    <p className="text-white text-sm sm:text-base font-light tracking-wide">Preparing your cinematic experience...</p>
                </motion.div>
            </div>
        );
    }

    if (!movie) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center px-4">
                <motion.div 
                    className="text-center max-w-lg"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="text-6xl sm:text-8xl font-bold text-yellow-400 mb-8 cinema-glow" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>404</div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-white mb-6 tracking-wide uppercase">FEATURE NOT FOUND</h1>
                    <p className="text-white mb-8 text-sm sm:text-base font-light">This movie has faded to black...</p>
                    <Link href="/" className="inline-flex items-center gap-3 bg-yellow-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-yellow-300 transition-all text-sm sm:text-base cinema-glow">
                        <ArrowLeft size={18} />
                        RETURN TO CINEMA
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white relative">
            <Head>
                <title>{movie.title} ({movie.release_date?.split('-')[0]}) - Filmiway Cinema</title>
                <meta name="description" content={movie.overview} />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            </Head>

            {/* FLICKER EFFECT FOR TRAILER */}
            <AnimatePresence>
                {flickerEffect && (
                    <motion.div
                        className="fixed inset-0 bg-white z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0.8, 0, 0.5, 0] }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    />
                )}
            </AnimatePresence>

            {/* NAVIGATION */}
            <nav className="relative z-50 bg-black/95 backdrop-blur-md border-b border-gray-800">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="flex items-center justify-between h-16 sm:h-20">
                        <Link href="/" className="text-xl sm:text-2xl font-bold text-yellow-400 tracking-widest cinema-glow" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                            FILMIWAY
                        </Link>
                        
                        <div className="hidden md:flex items-center gap-4 text-sm text-white tracking-wider uppercase">
                            <Link href="/" className="hover:text-yellow-400 transition-colors flex items-center gap-2 font-medium">
                                <Home size={14} />
                                CINEMA
                            </Link>
                            <ChevronRight size={12} className="text-yellow-400" />
                            <span className="text-yellow-400 truncate max-w-48 font-semibold">{movie.title?.toUpperCase()}</span>
                        </div>

                        <button 
                            className="md:hidden text-white p-2 hover:text-yellow-400 transition-colors"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    <AnimatePresence>
                        {mobileMenuOpen && (
                            <motion.div
                                className="md:hidden bg-black/98 border-t border-gray-800"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                            >
                                <div className="px-4 py-4 space-y-3">
                                    <Link href="/" className="block text-white hover:text-yellow-400 transition-colors py-2 flex items-center gap-2 tracking-wide uppercase font-medium">
                                        <Home size={16} />
                                        CINEMA
                                    </Link>
                                    <div className="text-gray-400 text-sm py-2 uppercase tracking-wide">
                                        NOW VIEWING: <span className="text-yellow-400 font-semibold">{movie.title}</span>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </nav>

            {/* PARALLAX HERO SECTION */}
            <section className="relative min-h-screen sm:h-screen overflow-hidden">
                {/* CINEMATIC BACKDROP WITH PARALLAX */}
                {movie.backdrop && (
                    <motion.div 
                        className="absolute inset-0"
                        style={{ 
                            scale: backdropScale,
                            opacity: backdropOpacity
                        }}
                    >
                        <div 
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${movie.backdrop})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
                        
                        {/* GOLDEN LENS FLARE OVERLAY */}
                        <div 
                            className="absolute inset-0 hero-overlay"
                            style={{
                                background: `
                                    radial-gradient(circle at 20% 30%, rgba(255,215,0,0.15), transparent 70%),
                                    radial-gradient(circle at 80% 20%, rgba(30,144,255,0.08), transparent 60%)
                                `,
                                mixBlendMode: 'screen',
                                opacity: 0.4
                            }}
                        />
                        
                        {/* FILM GRAIN TEXTURE */}
                        <div 
                            className="absolute inset-0 opacity-20 animate-pulse"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.1'/%3E%3C/svg%3E")`,
                                backgroundSize: '200px 200px'
                            }}
                        />
                    </motion.div>
                )}

                {/* HERO CONTENT */}
                <div className="relative z-40 container mx-auto px-4 sm:px-6 py-20 sm:py-0 sm:h-full sm:flex sm:items-center">
                    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:items-center w-full">
                        
                        {/* CINEMATIC POSTER WITH SPOTLIGHT */}
                        <motion.div 
                            className="order-1 lg:order-1 lg:col-span-4 max-w-xs mx-auto lg:mx-0 lg:max-w-md"
                            initial={{ opacity: 0, y: 50, rotateX: 20 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{ duration: 1.5, type: "spring" }}
                        >
                            <div className="relative group poster-container">
                                {/* ANIMATED GLOW PULSE */}
                                <div className="poster-glow absolute inset-0 -m-5 bg-gradient-radial from-yellow-400/40 via-yellow-400/20 to-transparent rounded-full blur-xl"></div>
                                
                                <div 
                                    className="relative aspect-[2/3] rounded-xl overflow-hidden shadow-2xl border-4 border-yellow-400/30 group-hover:border-yellow-400 transition-all duration-700 transform group-hover:scale-105 group-hover:rotate-1"
                                    style={{ 
                                        boxShadow: '0 25px 50px rgba(0,0,0,0.8), 0 0 30px rgba(255,215,0,0.4), 0 0 60px rgba(30,144,255,0.2)',
                                    }}
                                >
<Image
  src={movie.poster}
  alt={movie.title}
  width={300}
  height={450}
  priority={true}
  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
/>

                                    
                                    {/* SPOTLIGHT OVERLAY */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/40 transition-all duration-700"></div>
                                </div>
                                
                                {/* CINEMATIC PLAY BUTTON */}
                                {movie.trailerKey && (
                                    <motion.div 
                                        className="absolute inset-0 bg-black/80 flex items-center justify-center opacity-0 group-active:opacity-100 lg:group-hover:opacity-100 transition-all duration-500 rounded-xl backdrop-blur-sm"
                                    >
                                        <button
                                            onClick={openTrailer}
                                            className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-black transition-all duration-300 shadow-2xl hover:scale-110 cinema-glow transform hover:rotate-12"
                                        >
                                            <Play size={28} className="ml-1" />
                                        </button>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>

                        {/* CINEMATIC MOVIE INFO */}
                        <div className="order-2 lg:order-2 lg:col-span-8 space-y-8 text-center lg:text-left">
                            {/* MOVIE TITLE WITH CINEMATIC TYPOGRAPHY */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 1.2, type: "spring" }}
                            >
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-yellow-400 mb-6 leading-none tracking-tight cinema-glow" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                                    {movie.title?.toUpperCase()}
                                </h1>
                                {movie.tagline && (
                                    <p className="text-lg sm:text-xl lg:text-2xl text-white italic mb-8 font-light tracking-wide opacity-90">
                                        "{movie.tagline}"
                                    </p>
                                )}
                            </motion.div>

                            {/* CINEMATIC BADGES */}
                            <motion.div 
                                className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 1 }}
                            >
                                <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base tracking-wide uppercase cinema-glow">
                                    {movie.release_date?.split('-')[0]}
                                </span>
                                <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base flex items-center gap-2 tracking-wide uppercase cinema-glow">
                                    <Clock size={16} />
                                    {movie.runtime}MIN
                                </span>
                                {movie.genres?.slice(0, 2).map((genre) => (
                                    <span key={genre.id} className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-base tracking-wide uppercase cinema-glow">
                                        {genre.name?.toUpperCase()}
                                    </span>
                                ))}
                            </motion.div>

                            {/* CINEMATIC RATING CIRCLE */}
                            <motion.div 
                                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.2, duration: 1.5, type: "spring" }}
                            >
                                <div className="flex items-center gap-6">
                                    {/* ANIMATED PROGRESS RING */}
                                    <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                                        <svg className="absolute inset-0 transform -rotate-90 w-full h-full">
                                            <circle 
                                                cx="50%" cy="50%" 
                                                r="38" 
                                                stroke="rgba(255,255,255,0.1)" 
                                                strokeWidth="4" 
                                                fill="none"
                                            />
                                            <motion.circle
                                                cx="50%" cy="50%" 
                                                r="38"
                                                stroke="url(#gradient)"
                                                strokeWidth="4"
                                                fill="none"
                                                strokeDasharray="238"
                                                initial={{ strokeDashoffset: 238 }}
                                                animate={{ strokeDashoffset: 238 - (movie.vote_average * 23.8) }}
                                                transition={{ duration: 2, delay: 1.5 }}
                                                className="cinema-glow"
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center font-bold text-yellow-400 text-xl sm:text-2xl cinema-glow">
                                            {movie.vote_average?.toFixed(1)}
                                        </div>
                                        
                                        {/* SVG Gradient Definition */}
                                        <svg className="absolute inset-0 w-0 h-0">
                                            <defs>
                                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                    <stop offset="0%" stopColor="#FFD700" />
                                                    <stop offset="100%" stopColor="#FFA500" />
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                    </div>
                                    
                                    <div>
                                        <div className="text-white font-bold text-base sm:text-lg tracking-wide">{movie.vote_count?.toLocaleString()} VOTES</div>
                                        <div className="text-gray-400 text-sm sm:text-base uppercase tracking-wider">TMDB RATING</div>
                                    </div>
                                </div>
                                
                                {/* POPULARITY CINEMA BAR */}
                                <div className="w-full max-w-xs sm:flex-1 sm:max-w-sm">
                                    <div className="text-white text-sm sm:text-base mb-3 text-center sm:text-left uppercase tracking-widest font-medium">AUDIENCE SCORE</div>
                                    <div className="relative w-full bg-black/60 h-3 sm:h-4 rounded-full border border-yellow-400/30 overflow-hidden">
                                        <motion.div 
                                            className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full cinema-glow relative"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${Math.min((movie.popularity / 1000) * 100, 100)}%` }}
                                            transition={{ duration: 2, delay: 1.8 }}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* OVERVIEW SECTION */}
            <section className="py-16 sm:py-20 bg-black border-t border-gray-800">
                <div className="container mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-8 tracking-widest uppercase cinema-glow relative inline-block" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                            THE STORY
                            <motion.div 
                                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-transparent"
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 1.5 }}
                            />
                        </h2>
                        <div className="text-lg sm:text-xl text-white leading-relaxed font-light tracking-wide max-w-5xl">
                            <span className="text-yellow-400 font-semibold text-xl sm:text-2xl">{movie.overview?.split('.')[0]}.</span>
                            <span className="text-white/90">{movie.overview?.substring(movie.overview.indexOf('.') + 1)}</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* WHERE TO WATCH SECTION */}
            <WhereToWatchSection />

            {/* CAST SECTION WITH SPOTLIGHT EFFECTS */}
            <section className="py-20 bg-gray-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-blue-500/5"></div>
                
                <div className="container mx-auto px-4 sm:px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-yellow-400 mb-16 tracking-widest uppercase cinema-glow relative inline-block" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                            THE ENSEMBLE CAST
                            <motion.div 
                                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-transparent"
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 1.5 }}
                            />
                        </h2>
                        
                        {/* DIRECTOR & WRITER SPOTLIGHT CARDS */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-16">
                            <motion.div 
                                className="relative bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 p-8 rounded-2xl shadow-2xl overflow-hidden group"
                                style={{ boxShadow: '0 25px 50px rgba(255,215,0,0.3)' }}
                                whileHover={{ 
                                    scale: 1.02, 
                                    boxShadow: '0 30px 60px rgba(255,215,0,0.4)',
                                    rotateY: 2
                                }}
                                transition={{ duration: 0.5 }}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-black/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/10 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
                                <div className="relative z-10">
                                    <div className="text-black/80 font-bold text-xl sm:text-2xl mb-3 tracking-widest uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                                        🎬 DIRECTOR
                                    </div>
                                    <div className="text-black text-2xl sm:text-3xl font-bold mb-2 tracking-wide">{movie.director}</div>
                                    <div className="text-black/70 text-sm uppercase tracking-wider font-medium">VISIONARY BEHIND THE CAMERA</div>
                                </div>
                            </motion.div>
                            
                            <motion.div 
                                className="relative bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 p-8 rounded-2xl shadow-2xl overflow-hidden group"
                                style={{ boxShadow: '0 25px 50px rgba(255,215,0,0.3)' }}
                                whileHover={{ 
                                    scale: 1.02, 
                                    boxShadow: '0 30px 60px rgba(255,215,0,0.4)',
                                    rotateY: -2
                                }}
                                transition={{ duration: 0.5 }}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            
                            >
                                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-bl from-black/10 to-transparent rounded-full -translate-y-16 -translate-x-16"></div>
                                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white/10 to-transparent rounded-full translate-y-12 translate-x-12"></div>
                                <div className="relative z-10">
                                    <div className="text-black/80 font-bold text-xl sm:text-2xl mb-3 tracking-widest uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                                        ✍️ WRITER
                                    </div>
                                    <div className="text-black text-2xl sm:text-3xl font-bold mb-2 tracking-wide">{movie.writer}</div>
                                    <div className="text-black/70 text-sm uppercase tracking-wider font-medium">MASTER OF STORYTELLING</div>
                                </div>
                            </motion.div>
                        </div>

                        {/* CAST SPOTLIGHT GRID */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 sm:gap-8">
                            {movie.cast.map((actor, index) => (
                                <motion.div 
                                    key={actor.id}
                                    className="text-center group"
                                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        delay: index * 0.1, 
                                        duration: 0.8,
                                        type: "spring",
                                        stiffness: 100
                                    }}
                                    whileHover={{ y: -12, scale: 1.05 }}
                                >
                                    <div className="relative mb-4">
                                        {/* SPOTLIGHT GLOW */}
                                        <div className="absolute inset-0 bg-gradient-radial from-blue-400/0 group-hover:from-blue-400/30 to-transparent rounded-full blur-xl transition-all duration-700 -m-4"></div>
                                        
                                        <div 
                                            className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto rounded-full overflow-hidden bg-gray-800 border-4 border-gray-600 group-hover:border-yellow-400 transition-all duration-700 shadow-2xl"
                                            style={{ 
                                                boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
                                                filter: 'grayscale(80%) brightness(0.7)'
                                            }}
                                        >
                                            {actor.profile_path ? (
                                               <Image
  src={`https://image.tmdb.org/t/p/w300${actor.profilePath}`}
  alt={actor.name}
  width={300}
  height={300}
  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
  loading="lazy"
/>

                                            ) : (
                                                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                                                    <Users size={32} className="text-gray-500" />
                                                </div>
                                            )}
                                            
                                            {/* CINEMA SPOTLIGHT RING */}
                                            <div 
                                                className="absolute inset-0 rounded-full border-4 border-transparent group-hover:border-yellow-400 group-hover:shadow-yellow-400/50 transition-all duration-700"
                                                style={{ 
                                                    boxShadow: '0 0 0 rgba(255,215,0,0)',
                                                    filter: 'drop-shadow(0 0 20px rgba(30,144,255,0.3))'
                                                }}
                                            />
                                        </div>
                                    </div>
                                    
                                    {/* CINEMATIC CREDITS ROLL */}
                                    <motion.div 
                                        className="space-y-2"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: (index * 0.1) + 0.5 }}
                                    >
                                        <div className="text-white font-semibold text-sm sm:text-base group-hover:text-yellow-400 transition-colors duration-500 tracking-wide">
                                            {actor.name}
                                        </div>
                                        <motion.div 
                                            className="text-yellow-400/80 text-xs sm:text-sm font-medium bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm border border-yellow-400/30 uppercase tracking-wider"
                                            initial={{ y: 20, opacity: 0 }}
                                            whileInView={{ y: 0, opacity: 1 }}
                                            transition={{ delay: (index * 0.1) + 0.7, duration: 0.6 }}
                                        >
                                            {actor.character}
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* PRODUCTION COMPANIES */}
            {movie.production_companies?.length > 0 && (
                <section className="py-16 bg-black border-t border-gray-800">
                    <div className="container mx-auto px-4 sm:px-6">
                        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-12 tracking-widest uppercase cinema-glow relative inline-block" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                            PRODUCTION HOUSES
                            <motion.div 
                                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-transparent"
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: 1.5 }}
                            />
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
                            {movie.production_companies.map((company, index) => (
                                <motion.div 
                                    key={company.id}
                                    className="text-center group"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2, duration: 0.8 }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {company.logo_path ? (
                                        <div className="h-16 sm:h-20 flex items-center justify-center mb-4 grayscale group-hover:grayscale-0 transition-all duration-700">
                                           <Image
  src={`https://image.tmdb.org/t/p/w200${company.logoPath}`}
  alt={company.name}
  width={200}
  height={200}
  className="max-h-full max-w-full object-contain filter brightness-75 invert group-hover:brightness-100 group-hover:invert-0 group-hover:drop-shadow-lg transition-all duration-700"
  loading="lazy"
/>

                                        </div>
                                    ) : (
                                        <div className="h-16 sm:h-20 flex items-center justify-center mb-4">
                                            <div className="text-yellow-400 font-bold text-lg sm:text-xl text-center tracking-wide uppercase cinema-glow">{company.name}</div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* HORIZONTAL SCROLL RECOMMENDATIONS */}
            {movie.recommendations?.length > 0 && (
                <section className="py-20 bg-black border-t-2 border-yellow-400/20 relative overflow-hidden">
                    {/* FILM STRIP BORDERS */}
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-30"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-30"></div>
                    
                    <div className="container mx-auto px-4 sm:px-6 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2 }}
                        >
                            <div className="text-center mb-16">
                                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-yellow-400 mb-6 tracking-widest uppercase cinema-glow" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                                    MORE FROM THE ARCHIVE
                                </h2>
                                <motion.div 
                                    className="w-32 sm:w-48 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mb-6"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '12rem' }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 1.5 }}
                                />
                                <p className="text-white/80 text-lg sm:text-xl font-light tracking-wider uppercase">CURATED CINEMATIC SELECTIONS</p>
                            </div>
                            
                            {/* RECOMMENDATION CAROUSEL */}
                            <div className="overflow-x-auto scrollbar-hide pb-6">
                                <div className="flex gap-6 sm:gap-8 w-max">
                                    {movie.recommendations.map((rec, index) => (
                                        <motion.div
                                            key={rec.id}
                                            className="flex-none w-48 sm:w-56 cursor-pointer group"
                                            onClick={() => router.push(`/movie/${rec.id}`)}
                                            initial={{ opacity: 0, x: 50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1, duration: 0.8 }}
                                            whileHover={{ 
                                                y: -20, 
                                                rotateY: 8, 
                                                scale: 1.05,
                                                transition: { duration: 0.4 }
                                            }}
                                        >
                                            <div className="relative">
                                                <div 
                                                    className="aspect-[2/3] rounded-2xl overflow-hidden bg-gray-800 border-2 border-gray-700 group-hover:border-yellow-400 transition-all duration-500 shadow-2xl"
                                                    style={{ 
                                                        boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 0 rgba(30,144,255,0.2)',
                                                        filter: 'drop-shadow(0 0 25px rgba(30,144,255,0.1))'
                                                    }}
                                                >
                                                    {rec.poster_path ? (
<Image
  src={`https://image.tmdb.org/t/p/w500${rec.posterPath}`}
  alt={rec.title}
  width={500}
  height={750}
  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
  loading="lazy"
/>


                                                    ) : (
                                                        <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                                                            <Film size={64} className="text-gray-500" />
                                                        </div>
                                                    )}
                                                    
                                                    {/* BLUE SHIMMER SWEEP */}
                                                    <motion.div 
                                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent opacity-0 group-hover:opacity-100"
                                                        style={{ 
                                                            transform: 'translateX(-100%) skewX(-15deg)',
                                                        }}
                                                        animate={{
                                                            x: ['0%', '200%'],
                                                        }}
                                                        transition={{
                                                            duration: 1.2,
                                                            repeat: Infinity,
                                                            repeatDelay: 3,
                                                        }}
                                                    />
                                                    
                                                    {/* RATING BADGE */}
                                                    <div className="absolute top-4 right-4 bg-black/90 backdrop-blur-sm px-3 py-2 rounded-full border border-yellow-400/50">
                                                        <div className="flex items-center gap-2 text-sm">
                                                            <Star size={12} className="text-yellow-400 fill-current" />
                                                            <span className="text-white font-bold">{rec.vote_average?.toFixed(1)}</span>
                                                        </div>
                                                    </div>
                                                    
                                                    {/* MAGNETIC HOVER PLAY */}
                                                    <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm">
                                                        <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full border-2 border-yellow-400/80 flex items-center justify-center cinema-glow transform group-hover:scale-110 transition-transform duration-300">
                                                            <Play size={24} className="text-black ml-1" />
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                {/* CINEMATIC TITLE CARD */}
                                                <motion.div 
                                                    className="mt-6 text-center"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: (index * 0.1) + 0.5 }}
                                                >
                                                    <h3 className="text-white font-bold text-lg group-hover:text-yellow-400 transition-colors duration-500 leading-tight mb-2 tracking-wide">
                                                        {rec.title}
                                                    </h3>
                                                    <div className="flex items-center justify-center gap-2 text-gray-400 text-sm uppercase tracking-wider">
                                                        <span>{rec.release_date?.split('-')[0] || 'TBA'}</span>
                                                        <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                                                        <span className="text-yellow-400/80">CINEMA</span>
                                                    </div>
                                                    
                                                    {/* GLOWING UNDERLINE */}
                                                    <motion.div 
                                                        className="w-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto mt-3 group-hover:w-full transition-all duration-700"
                                                        style={{ boxShadow: '0 0 10px rgba(255,215,0,0.8)' }}
                                                    />
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            )}

            {/* CINEMATIC FOOTER WITH TMDB ATTRIBUTION */}
            <footer className="bg-black border-t-4 border-yellow-400/20 py-16 relative overflow-hidden">
                {/* FILM STRIP PATTERN */}
                <div 
                    className="absolute top-0 left-0 right-0 h-4 opacity-20"
                    style={{
                        backgroundImage: `repeating-linear-gradient(
                            90deg,
                            transparent,
                            transparent 8px,
                            #FFD700 8px,
                            #FFD700 16px
                        )`
                    }}
                />
                
                <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                    >
                        <div 
                            className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-8 tracking-widest cinema-glow"
                            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                            FILMIWAY
                        </div>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-12 mb-8">
                            <Link 
                                href="/" 
                                className="text-white hover:text-yellow-400 transition-all duration-500 border-b border-transparent hover:border-blue-500 pb-1 uppercase tracking-widest font-medium cinema-hover"
                            >
                                CINEMA
                            </Link>
                            <Link 
                                href="/search" 
                                className="text-white hover:text-yellow-400 transition-all duration-500 border-b border-transparent hover:border-blue-500 pb-1 uppercase tracking-widest font-medium cinema-hover"
                            >
                                DISCOVER
                            </Link>
                            <Link 
                                href="/collection" 
                                className="text-white hover:text-yellow-400 transition-all duration-500 border-b border-transparent hover:border-blue-500 pb-1 uppercase tracking-widest font-medium cinema-hover"
                            >
                                COLLECTIONS
                            </Link>
                        </div>
                        
                        {/* ANIMATED TAGLINE */}
                        <motion.div 
                            className="text-yellow-400/80 text-lg sm:text-xl font-light italic mb-8 tracking-wider relative overflow-hidden"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 2 }}
                        >
                            <span className="relative z-10">"WHERE EVERY FILM FINDS ITS WAY"</span>
                            
                            {/* LIGHT SWEEP ANIMATION */}
                            <motion.div 
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                animate={{
                                    x: ['-100%', '100%'],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatDelay: 5,
                                }}
                            />
                        </motion.div>

                        {/* 🎬 TMDB ATTRIBUTION SECTION */}
                        <motion.div 
                            className="mb-8 pt-6 border-t border-gray-900/50"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1, duration: 1.5 }}
                        >
                            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                                <p className="text-gray-400 text-sm uppercase tracking-widest font-medium">
                                    MOVIE DATA & POSTERS POWERED BY
                                </p>
                                <a 
                                    href="https://www.themoviedb.org/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-3 hover:opacity-80 transition-all duration-500 group"
                                >
                                   <Image
  src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
  alt="The Movie Database"
  width={150}
  height={60}
  className="h-6 sm:h-8 w-auto filter brightness-75 group-hover:brightness-100 transition-all duration-500"
/>

                                    <div className="text-center sm:text-left">
                                        <span className="text-blue-400 text-base sm:text-lg font-bold hover:text-blue-300 transition-colors duration-500 tracking-wide uppercase cinema-glow">
                                            THE MOVIE DATABASE
                                        </span>
                                        <div className="text-gray-500 text-xs uppercase tracking-widest">
                                            (TMDB)
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <p className="text-gray-600 text-xs mt-4 text-center uppercase tracking-wider font-light">
                                This product uses the TMDB API but is not endorsed or certified by TMDB.
                            </p>
                        </motion.div>
                        
                        <div className="text-gray-500 text-sm sm:text-base uppercase tracking-widest">
                            © (2026) FILMIWAY CINEMA
                        </div>
                    </motion.div>
                </div>
            </footer>

            {/* ANAMORPHIC TRAILER MODAL */}
            <AnimatePresence>
                {showTrailer && movie.trailerKey && (
                    <motion.div
                        className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowTrailer(false)}
                    >
                        <motion.div
                            className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden trailer-frame"
                            initial={{ scale: 0.7, opacity: 0, rotateX: -30 }}
                            animate={{ scale: 1, opacity: 1, rotateX: 0 }}
                            exit={{ scale: 0.7, opacity: 0, rotateX: 30 }}
                            transition={{ type: "spring", duration: 0.8 }}
                            onClick={e => e.stopPropagation()}
                        >
                            {/* ANAMORPHIC BLACK BARS */}
                            <div className="absolute top-0 left-0 right-0 h-8 sm:h-12 bg-black z-10"></div>
                            <div className="absolute bottom-0 left-0 right-0 h-8 sm:h-12 bg-black z-10"></div>
                            
                            <iframe
                                src={`https://www.youtube.com/embed/${movie.trailerKey}?autoplay=1&rel=0`}
                                className="w-full h-full"
                                allowFullScreen
                                title={`${movie.title} Trailer`}
                            />
                            
                            <button
                                onClick={() => setShowTrailer(false)}
                                className="absolute -top-12 sm:-top-16 -right-12 sm:-right-16 w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center font-bold text-lg sm:text-xl hover:bg-yellow-300 transition-colors cinema-glow z-20"
                            >
                                ×
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
                .cinema-glow {
                    filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.5));
                }
                
                .cinema-hover:hover {
                    text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
                }
                
                .poster-glow {
                    animation: posterPulse 6s infinite ease-in-out;
                }
                
                .trailer-frame {
                    border: 6px solid #FFD700;
                    box-shadow: 
                        0 0 40px rgba(255,215,0,0.5), 
                        0 0 80px rgba(30,144,255,0.3),
                        inset 0 0 20px rgba(255,215,0,0.1);
                }
                
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
                
                .bg-gradient-radial {
                    background: radial-gradient(circle, var(--tw-gradient-stops));
                }
                
                @keyframes posterPulse {
                    0%, 100% { 
                        opacity: 0.4; 
                        transform: scale(1);
                    }
                    50% { 
                        opacity: 0.7; 
                        transform: scale(1.05);
                    }
                }
                
                @media (max-width: 640px) {
                    .cinema-glow {
                        filter: drop-shadow(0 0 5px rgba(255, 215, 0, 0.5));
                    }
                }
            `}</style>
        </div>
    );
};

export default MoviePage;
