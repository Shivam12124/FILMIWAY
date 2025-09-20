// pages/movie/[id].js - ABSOLUTE CINEMA PERFECTION 🎭✨
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Home, Play, MapPin, ExternalLink } from 'lucide-react';

const MoviePage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [movie, setMovie] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [userLocation, setUserLocation] = React.useState(null);
    const [streamingData, setStreamingData] = React.useState(null);
    const [showTrailer, setShowTrailer] = React.useState(false);
    
    const { scrollY } = useScroll();
    const backdropY = useTransform(scrollY, [0, 1000], [0, 300]);
    const backdropScale = useTransform(scrollY, [0, 1000], [1.1, 1.3]);
    const backdropOpacity = useTransform(scrollY, [0, 600], [0.2, 0.05]);

    // Detect user location
    React.useEffect(() => {
        fetch('https://ipapi.co/json/')
            .then(res => res.json())
            .then(data => {
                setUserLocation({
                    country: data.country_code,
                    city: data.city,
                    countryName: data.country_name
                });
            })
            .catch(() => {
                setUserLocation({
                    country: 'US',
                    city: 'New York',
                    countryName: 'United States'
                });
            });
    }, []);

    React.useEffect(() => {
        if (!id) return;

        const fetchData = async () => {
            try {
                const [movieRes, streamingRes] = await Promise.all([
                    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6054e5498fb2619274454959c38bbdfa&append_to_response=credits,videos`),
                    userLocation ? fetch(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=6054e5498fb2619274454959c38bbdfa`) : null
                ]);

                const movieData = await movieRes.json();
                let streamingInfo = null;
                
                if (streamingRes) {
                    const streamingResponse = await streamingRes.json();
                    streamingInfo = streamingResponse.results?.[userLocation?.country];
                }
                
                if (movieData.id) {
                    const director = movieData.credits?.crew?.find(person => person.job === 'Director');
                    const cast = movieData.credits?.cast?.slice(0, 3).filter(actor => actor.profile_path) || [];
                    const trailer = movieData.videos?.results?.find(video => video.type === 'Trailer' && video.site === 'YouTube');
                    
                    setMovie({
                        Title: movieData.title,
                        Year: movieData.release_date?.split('-')[0] || '2023',
                        Runtime: `${movieData.runtime || 120}min`,
                        Plot: movieData.overview || 'A transcendent journey through cinema.',
                        Director: director?.name || 'Unknown Director',
                        Cast: cast,
                        Rating: movieData.vote_average?.toFixed(1) || '7.0',
                        Poster: movieData.poster_path ? `https://image.tmdb.org/t/p/w500${movieData.poster_path}` : null,
                        Backdrop: movieData.backdrop_path ? `https://image.tmdb.org/t/p/original${movieData.backdrop_path}` : null,
                        trailerKey: trailer?.key,
                        genres: movieData.genres?.slice(0, 2).map(g => g.name) || ['Drama']
                    });
                    
                    setStreamingData(streamingInfo);
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id, userLocation]);

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    <motion.div 
                        className="w-0.5 h-40 bg-gradient-to-b from-transparent via-amber-500/80 to-transparent"
                        animate={{ scaleY: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>
            </div>
        );
    }

    if (!movie) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <motion.div 
                    className="text-center space-y-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    <div className="text-8xl font-thin text-white/20">404</div>
                    <div className="text-amber-500/60 text-sm tracking-[0.4em] font-light">FILM UNAVAILABLE</div>
                    <Link href="/" className="inline-block text-white/40 hover:text-amber-500 transition-colors duration-1000 text-xs tracking-[0.3em]">
                        RETURN HOME
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <>
            <div className="min-h-screen bg-black text-white relative">
                <Head>
                    <title>{movie.Title} - FILMIWAY</title>
                    <meta name="description" content={movie.Plot} />
                </Head>

                {/* CINEMATIC BACKDROP */}
                <motion.div 
                    className="fixed inset-0 z-0"
                    style={{ 
                        y: backdropY, 
                        scale: backdropScale,
                        opacity: backdropOpacity 
                    }}
                >
                    {movie.Backdrop && (
                        <>
                            <div 
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${movie.Backdrop})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
                        </>
                    )}
                </motion.div>

                {/* FLOATING NAVIGATION */}
                <motion.nav 
                    className="fixed top-0 left-0 right-0 z-50 pt-8 pb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                >
                    <div className="max-w-7xl mx-auto px-8">
                        <div className="flex items-center text-xs text-white/20 tracking-[0.25em] font-extralight">
                            <Link href="/" className="hover:text-amber-500/60 transition-colors duration-1000 flex items-center gap-2">
                                <Home size={10} />
                                HOME
                            </Link>
                            <span className="mx-6 text-white/10">/</span>
                            <span className="text-amber-500/40">{movie.Title?.toUpperCase()}</span>
                        </div>
                    </div>
                </motion.nav>

                {/* MAIN CONTENT */}
                <div className="relative z-40 pt-32 px-8">
                    <div className="max-w-7xl mx-auto">
                        
                        {/* HERO LAYOUT */}
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 items-start mb-32">
                            
                            {/* POSTER - LEFT SIDE */}
                            <motion.div 
                                className="lg:col-span-2 max-w-md mx-auto lg:mx-0"
                                initial={{ opacity: 0, x: -60, scale: 0.9 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ duration: 2, ease: "easeOut" }}
                            >
                                <div className="relative group">
                                    <div className="aspect-[2/3] overflow-hidden shadow-2xl">
                                        <motion.img 
                                            src={movie.Poster}
                                            alt={movie.Title}
                                            className="w-full h-full object-cover"
                                            whileHover={{ scale: 1.008 }}
                                            transition={{ duration: 1.5 }}
                                        />
                                    </div>
                                    
                                    {/* ELEGANT PLAY OVERLAY */}
                                    {movie.trailerKey && (
                                        <motion.div 
                                            className="absolute inset-0 bg-black/70 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-1000"
                                        >
                                            <motion.button
                                                onClick={() => setShowTrailer(true)}
                                                className="w-20 h-20 border border-amber-500/30 bg-black/10 flex items-center justify-center hover:border-amber-500/60 hover:bg-black/20 transition-all duration-700"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Play size={20} className="text-amber-500/80 ml-1" />
                                            </motion.button>
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>

                            {/* MOVIE INFO - RIGHT SIDE */}
                            <div className="lg:col-span-3 space-y-20">
                                
                                {/* TITLE */}
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                                >
                                    <h1 className="text-5xl lg:text-7xl xl:text-8xl font-thin mb-8 leading-[0.8] tracking-tight text-white">
                                        {movie.Title}
                                    </h1>
                                    
                                    {/* META INFO */}
                                    <div className="flex items-center text-amber-500/50 text-sm font-extralight tracking-[0.2em] space-x-10 mb-6">
                                        <span>{movie.Year}</span>
                                        <span className="text-white/10">•</span>
                                        <span>{movie.Runtime}</span>
                                    </div>
                                    
                                    {/* GENRES */}
                                    <div className="flex gap-4">
                                        {movie.genres.map((genre, index) => (
                                            <span key={index} className="text-xs text-white/30 border border-white/10 px-4 py-2 tracking-[0.15em] font-light">
                                                {genre.toUpperCase()}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* RATING */}
                                <motion.div 
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.5, delay: 0.8 }}
                                    className="space-y-4"
                                >
                                    <div className="text-6xl font-thin text-amber-500/90">{movie.Rating}</div>
                                    <div className="text-xs text-white/20 tracking-[0.25em] font-extralight">TMDB RATING</div>
                                </motion.div>

                                {/* SYNOPSIS */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.5, delay: 1.2 }}
                                >
                                    <p className="text-xl lg:text-2xl font-extralight leading-relaxed text-white/70 max-w-3xl">
                                        {movie.Plot}
                                    </p>
                                </motion.div>

                                {/* CREDITS */}
                                <motion.div 
                                    className="space-y-16"
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.5, delay: 1.6 }}
                                >
                                    {/* DIRECTOR */}
                                    <div className="flex items-baseline gap-12">
                                        <div className="text-amber-500/30 text-xs tracking-[0.25em] font-extralight min-w-[80px]">
                                            DIRECTOR
                                        </div>
                                        <div className="text-xl font-extralight text-white/80">
                                            {movie.Director}
                                        </div>
                                    </div>

                                    {/* CAST */}
                                    {movie.Cast.length > 0 && (
                                        <div className="flex items-start gap-12">
                                            <div className="text-amber-500/30 text-xs tracking-[0.25em] font-extralight min-w-[80px] pt-2">
                                                STARRING
                                            </div>
                                            <div className="flex gap-8">
                                                {movie.Cast.map((actor, index) => (
                                                    <motion.div 
                                                        key={actor.id}
                                                        className="text-center"
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 2 + index * 0.3 }}
                                                    >
                                                        <div className="w-16 h-16 rounded-full overflow-hidden bg-white/5 mb-4">
                                                            <img 
                                                                src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`}
                                                                alt={actor.name}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                        <div className="text-xs text-white/50 font-extralight max-w-16 leading-tight tracking-wide">
                                                            {actor.name}
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </motion.div>

                                {/* WHERE TO WATCH */}
                                {streamingData && userLocation && (
                                    <motion.div 
                                        className="space-y-8"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1.5, delay: 2.2 }}
                                    >
                                        <div className="flex items-center gap-12">
                                            <div className="text-amber-500/30 text-xs tracking-[0.25em] font-extralight min-w-[80px]">
                                                WATCH IN
                                            </div>
                                            <div className="flex items-center gap-3 text-white/40 text-sm">
                                                <MapPin size={12} />
                                                <span className="tracking-wide">{userLocation.countryName}</span>
                                            </div>
                                        </div>
                                        
                                        <div className="ml-[92px] space-y-4">
                                            {/* STREAMING */}
                                            {streamingData.flatrate?.length > 0 && (
                                                <div className="space-y-3">
                                                    <div className="text-xs text-white/20 tracking-[0.2em] font-extralight">STREAMING</div>
                                                    <div className="flex gap-4">
                                                        {streamingData.flatrate.slice(0, 4).map((provider, index) => (
                                                            <motion.div 
                                                                key={provider.provider_id}
                                                                className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-3 border border-white/10 hover:border-amber-500/20 transition-all duration-700 cursor-pointer"
                                                                whileHover={{ scale: 1.02, backgroundColor: "rgba(245, 158, 11, 0.05)" }}
                                                                initial={{ opacity: 0, x: -20 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: 2.5 + index * 0.2 }}
                                                            >
                                                                <img 
                                                                    src={`https://image.tmdb.org/t/p/w92${provider.logo_path}`}
                                                                    alt={provider.provider_name}
                                                                    className="w-8 h-8 rounded"
                                                                />
                                                                <span className="text-sm font-extralight text-white/70">{provider.provider_name}</span>
                                                                <ExternalLink size={10} className="text-amber-500/40" />
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* RENT */}
                                            {streamingData.rent?.length > 0 && (
                                                <div className="space-y-3">
                                                    <div className="text-xs text-white/20 tracking-[0.2em] font-extralight">RENT</div>
                                                    <div className="flex gap-4">
                                                        {streamingData.rent.slice(0, 3).map((provider, index) => (
                                                            <motion.div 
                                                                key={provider.provider_id}
                                                                className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-4 py-3 border border-white/10 hover:border-amber-500/20 transition-all duration-700 cursor-pointer"
                                                                whileHover={{ scale: 1.02, backgroundColor: "rgba(245, 158, 11, 0.05)" }}
                                                                initial={{ opacity: 0, x: -20 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: 3 + index * 0.2 }}
                                                            >
                                                                <img 
                                                                    src={`https://image.tmdb.org/t/p/w92${provider.logo_path}`}
                                                                    alt={provider.provider_name}
                                                                    className="w-8 h-8 rounded"
                                                                />
                                                                <span className="text-sm font-extralight text-white/70">{provider.provider_name}</span>
                                                                <span className="text-xs text-amber-500/40 tracking-wide">RENT</span>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                )}

                                {/* TRAILER BUTTON */}
                                {movie.trailerKey && (
                                    <motion.div 
                                        className="pt-12"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1.5, delay: 2.8 }}
                                    >
                                        <button 
                                            onClick={() => setShowTrailer(true)}
                                            className="group flex items-center text-white/40 hover:text-amber-500/60 transition-colors duration-1000 text-sm tracking-[0.2em] font-extralight"
                                        >
                                            <Play size={12} className="mr-6 text-amber-500/40 group-hover:text-amber-500/80 transition-colors duration-1000" />
                                            WATCH TRAILER
                                        </button>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </div>
                    
                    {/* BOTTOM SPACER */}
                    <div className="h-40"></div>
                </div>
            </div>

            {/* TRAILER MODAL */}
            <AnimatePresence>
                {showTrailer && movie.trailerKey && (
                    <motion.div
                        className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[100] flex items-center justify-center p-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowTrailer(false)}
                    >
                        <motion.div
                            className="relative max-w-6xl w-full aspect-video bg-black overflow-hidden"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={e => e.stopPropagation()}
                        >
                            <iframe
                                src={`https://www.youtube.com/embed/${movie.trailerKey}?autoplay=1&rel=0&modestbranding=1`}
                                className="w-full h-full"
                                allowFullScreen
                                title={`${movie.Title} Trailer`}
                            />
                            
                            <button
                                onClick={() => setShowTrailer(false)}
                                className="absolute top-6 right-6 w-12 h-12 bg-black/70 hover:bg-black/90 flex items-center justify-center text-white/60 hover:text-white transition-all duration-500 text-2xl"
                            >
                                ×
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default MoviePage;
