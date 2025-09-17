// components/TMDBMoviePoster.js - REAL-TIME TMDB POSTER FETCHING
import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { COMPLETE_MOVIE_DATA } from '../utils/movieData';

const TMDB_API_KEY =  process.env.NEXT_PUBLIC_TMDB_API_KEY
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

const TMDBMoviePoster = React.memo(({ movie, className = "", alt }) => {
    const [posterUrl, setPosterUrl] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    // Fetch real poster path from TMDB API
    const fetchMoviePoster = useCallback(async (tmdbId) => {
        try {
            console.log(`🎬 Fetching poster for ${movie.Title} (TMDB ID: ${tmdbId})`);
            
            const response = await fetch(
                `${TMDB_BASE_URL}/movie/${tmdbId}?api_key=${TMDB_API_KEY}&language=en-US`
            );
            
            if (!response.ok) {
                throw new Error(`TMDB API error: ${response.status}`);
            }
            
            const data = await response.json();
            console.log(`✅ TMDB API Response for ${movie.Title}:`, data.poster_path);
            
            if (data.poster_path) {
                const fullPosterUrl = `${TMDB_IMAGE_BASE_URL}/w500${data.poster_path}`;
                setPosterUrl(fullPosterUrl);
                console.log(`✅ Full poster URL for ${movie.Title}:`, fullPosterUrl);
                return fullPosterUrl;
            } else {
                throw new Error('No poster path found');
            }
        } catch (error) {
            console.error(`❌ Error fetching poster for ${movie.Title}:`, error);
            setHasError(true);
            return null;
        }
    }, [movie.Title]);

    useEffect(() => {
        setIsLoading(true);
        setHasError(false);
        setPosterUrl(null);
        
        if (movie.tmdbId) {
            fetchMoviePoster(movie.tmdbId);
        }
    }, [movie.tmdbId, fetchMoviePoster]);

    const handleImageLoad = useCallback(() => {
        setIsLoading(false);
        console.log(`✅ Poster image loaded successfully for ${movie.Title}`);
    }, [movie.Title]);

    const handleImageError = useCallback(() => {
        setIsLoading(false);
        setHasError(true);
        console.log(`❌ Poster image failed to load for ${movie.Title}`);
    }, [movie.Title]);

    const createPlaceholderSVG = () => {
        const dominantColor = COMPLETE_MOVIE_DATA[movie.tmdbId]?.dominantColor || '#ca8a04';
        return `data:image/svg+xml,${encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" width="400" height="600" viewBox="0 0 400 600">
                <defs>
                    <linearGradient id="bg-${movie.tmdbId}" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#111827;stop-opacity:1" />
                        <stop offset="50%" style="stop-color:#1f2937;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#111827;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <rect width="400" height="600" fill="url(#bg-${movie.tmdbId})"/>
                <rect x="20" y="20" width="360" height="560" fill="none" stroke="${dominantColor}" stroke-width="2" opacity="0.4"/>
                <circle cx="200" cy="200" r="80" fill="none" stroke="${dominantColor}" stroke-width="3" opacity="0.3"/>
                <rect x="100" y="350" width="200" height="4" fill="${dominantColor}" opacity="0.6"/>
                <text x="200" y="420" text-anchor="middle" font-family="Playfair Display, serif" font-size="26" font-weight="bold" fill="${dominantColor}" opacity="0.9">${movie.Title}</text>
                <text x="200" y="460" text-anchor="middle" font-family="Inter, sans-serif" font-size="18" fill="#9ca3af" opacity="0.7">${movie.year} • ${movie.genre}</text>
                <text x="200" y="500" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" fill="#dc2626" opacity="0.8">Loading from TMDB...</text>
            </svg>
        `)}`;
    };

    return (
        <div className={`relative ${className}`}>
            {isLoading && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-700/50 z-10">
                    <div className="text-center space-y-3">
                        <motion.div 
                            animate={{ rotate: 360 }} 
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }} 
                            className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-yellow-400/30 border-t-yellow-400 rounded-full mx-auto" 
                        />
                        <div className="text-xs text-gray-400 font-light">
                            Fetching from TMDB API...
                        </div>
                        <div className="text-xs text-gray-500">
                            {movie.Title}
                        </div>
                    </div>
                </div>
            )}
            
            <img 
                src={posterUrl || createPlaceholderSVG()} 
                alt={alt || `${movie.Title} (${movie.year}) - TMDB Poster`} 
                className={`w-full h-full object-cover rounded-xl transition-all duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`} 
                onLoad={handleImageLoad} 
                onError={handleImageError} 
                loading="lazy"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl pointer-events-none" />
            
            {/* TMDB Status Badge */}
            <div className="absolute top-2 right-2 bg-blue-600/80 text-white text-xs px-2 py-1 rounded">
                {posterUrl ? '✅ TMDB' : '⏳ Loading'}
            </div>
            
            {/* Debug info */}
            {process.env.NODE_ENV === 'development' && (
                <div className="absolute bottom-1 left-1 bg-black/70 text-white text-xs px-1 rounded">
                    ID:{movie.tmdbId} | {posterUrl ? 'Loaded' : hasError ? 'Error' : 'Loading'}
                </div>
            )}
        </div>
    );
});

TMDBMoviePoster.displayName = 'TMDBMoviePoster';

export default TMDBMoviePoster;
