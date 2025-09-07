// components/MovieCarousels.js
"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const TMDB_API_KEY = '6054e5498fb2619274454959c38bbdfa';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// Bigger Movie Card
const MovieCard = ({ movie }) => {
    return (
        <motion.div
            className="min-w-[280px] cursor-pointer group" // Increased from 200px to 280px
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ duration: 0.3 }}
        >
            <div className="relative overflow-hidden rounded-xl shadow-xl bg-gray-900 border border-gray-700/50 group-hover:border-yellow-500/60 transition-all duration-300">
                {/* Bigger Movie Poster */}
                <div className="aspect-[2/3] overflow-hidden">
                    <img
                        src={movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : '/placeholder-poster.jpg'}
                        alt={movie.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                    />
                </div>
                
                {/* Movie Info */}
                <div className="p-4 bg-gray-900">
                    <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2 leading-tight">
                        {movie.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-300">
                        <span className="bg-gray-800 px-2 py-1 rounded text-xs">
                            {new Date(movie.release_date).getFullYear()}
                        </span>
                        <div className="flex items-center gap-1">
                            <Star size={14} className="text-yellow-400 fill-current" />
                            <span className="font-semibold">{movie.vote_average?.toFixed(1)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

// Improved Carousel with Better Spacing
const MovieCarousel = ({ title, movies, id }) => {
    const scrollLeft = () => {
        document.getElementById(`carousel-${id}`).scrollBy({ left: -600, behavior: 'smooth' });
    };
    
    const scrollRight = () => {
        document.getElementById(`carousel-${id}`).scrollBy({ left: 600, behavior: 'smooth' });
    };

    return (
        <section id={id} className="py-16 px-6"> {/* Increased spacing */}
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-4xl font-light text-yellow-400 tracking-wide">
                        {title}
                    </h2>
                    
                    {/* Better Carousel Controls */}
                    <div className="hidden md:flex items-center gap-3">
                        <button 
                            onClick={scrollLeft}
                            className="w-12 h-12 bg-yellow-500/20 hover:bg-yellow-500/40 border border-yellow-500/40 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                        >
                            <ChevronLeft size={20} className="text-yellow-400" />
                        </button>
                        <button 
                            onClick={scrollRight}
                            className="w-12 h-12 bg-yellow-500/20 hover:bg-yellow-500/40 border border-yellow-500/40 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                        >
                            <ChevronRight size={20} className="text-yellow-400" />
                        </button>
                    </div>
                </div>

                {/* Movies Carousel with Better Spacing */}
                <div 
                    id={`carousel-${id}`}
                    className="flex space-x-8 overflow-x-auto scrollbar-hide pb-6" // Increased gap from 6 to 8
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {movies.slice(0, 15).map((movie) => ( // Limit to 15 movies for better performance
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </section>
    );
};

// Main Component
const MovieCarousels = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [criticallyAcclaimed, setCriticallyAcclaimed] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const [trendingResponse, topRatedResponse] = await Promise.all([
                    fetch(`${TMDB_BASE_URL}/trending/movie/week?api_key=${TMDB_API_KEY}`),
                    fetch(`${TMDB_BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}`)
                ]);

                const trendingData = await trendingResponse.json();
                const topRatedData = await topRatedResponse.json();

                setTrendingMovies(trendingData.results || []);
                setCriticallyAcclaimed(topRatedData.results || []);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching movies:', error);
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    if (loading) {
        return (
            <div className="py-32 text-center">
                <div className="w-16 h-16 border-4 border-yellow-400/30 border-t-yellow-400 rounded-full animate-spin mx-auto mb-6"></div>
                <p className="text-gray-400 text-lg">Loading amazing movies...</p>
            </div>
        );
    }

    return (
        <div className="bg-black">
            <MovieCarousel 
                title="🔥 Trending Movies" 
                movies={trendingMovies} 
                id="trending"
            />
            <MovieCarousel 
                title="⭐ Critically Acclaimed" 
                movies={criticallyAcclaimed} 
                id="acclaimed"
            />
        </div>
    );
};

export default MovieCarousels;
