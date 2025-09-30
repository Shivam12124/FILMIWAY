// components/TMDBMoviePoster.js - PERFORMANCE OPTIMIZED WITH NEXT.JS IMAGE
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { COMPLETE_MOVIE_DATA } from '../utils/movieData';

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

const TMDBMoviePoster = React.memo(({ 
    movie, 
    className = "", 
    alt, 
    priority = false,
    width = 300,
    height = 450 
}) => {
    const [posterUrl, setPosterUrl] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    // 🔥 SEARCH BY MOVIE TITLE + YEAR IF DIRECT ID FAILS
    const searchMovieByTitle = useCallback(async (title, year) => {
        try {
            console.log(`🔍 Searching for ${title} (${year})`);
            
            const searchResponse = await fetch(
                `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(title)}&year=${year}`
            );
            
            if (searchResponse.ok) {
                const searchData = await searchResponse.json();
                console.log(`🔍 Search results for ${title}:`, searchData.results);
                
                // Find exact match by year
                const exactMatch = searchData.results.find(result => 
                    result.release_date && result.release_date.startsWith(year)
                );
                
                if (exactMatch) {
                    console.log(`✅ Found exact match for ${title}:`, exactMatch);
                    return exactMatch;
                }
                
                // Fallback to first result
                if (searchData.results.length > 0) {
                    console.log(`⚠️ Using first result for ${title}:`, searchData.results[0]);
                    return searchData.results[0];
                }
            }
        } catch (error) {
            console.error(`❌ Search failed for ${title}:`, error);
        }
        return null;
    }, []);

    // Fetch poster with search fallback
    const fetchMoviePoster = useCallback(async (tmdbId) => {
        try {
            // Step 1: Try direct TMDB ID
            console.log(`🎬 Trying direct fetch for ${movie.Title} with TMDB ID: ${tmdbId}`);
            
            let response = await fetch(
                `${TMDB_BASE_URL}/movie/${tmdbId}?api_key=${TMDB_API_KEY}&language=en-US`
            );
            
            let data = null;
            
            if (response.ok) {
                data = await response.json();
                console.log(`✅ Direct API success for ${movie.Title}:`, data);
            } else {
                console.log(`⚠️ Direct ID failed for ${movie.Title} (${response.status}), trying search...`);
                
                // Step 2: Search by title + year
                data = await searchMovieByTitle(movie.Title, movie.Year);
            }
            
            if (data && data.poster_path) {
                const fullPosterUrl = `${TMDB_IMAGE_BASE_URL}/w500${data.poster_path}`;
                setPosterUrl(fullPosterUrl);
                console.log(`✅ Poster found for ${movie.Title}: ${fullPosterUrl}`);
                return fullPosterUrl;
            } else {
                throw new Error(`No poster found for ${movie.Title}`);
            }
        } catch (error) {
            console.error(`❌ All methods failed for ${movie.Title}:`, error);
            setHasError(true);
            return null;
        }
    }, [movie.Title, movie.Year, searchMovieByTitle]);

    useEffect(() => {
        setIsLoading(true);
        setHasError(false);
        setPosterUrl(null);
        
        if (movie.tmdbId) {
            fetchMoviePoster(movie.tmdbId).finally(() => setIsLoading(false));
        } else {
            console.error(`❌ No TMDB ID provided for ${movie.Title}`);
            setIsLoading(false);
            setHasError(true);
        }
    }, [movie.tmdbId, fetchMoviePoster]);

    const createPlaceholderSVG = () => {
        const dominantColor = COMPLETE_MOVIE_DATA[movie.tmdbId]?.dominantColor || '#ca8a04';
        const movieTitle = movie.Title || 'Unknown Movie';
        const movieInfo = `${movie.Year || '2024'} • ${movie.Genre?.split(',')[0] || 'Drama'}`;
        
        return `data:image/svg+xml,${encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" width="400" height="600" viewBox="0 0 400 600">
                <defs>
                    <linearGradient id="bg-${movie.tmdbId || 'unknown'}" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#111827;stop-opacity:1" />
                        <stop offset="50%" style="stop-color:#1f2937;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#111827;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <rect width="400" height="600" fill="url(#bg-${movie.tmdbId || 'unknown'})"/>
                <rect x="20" y="20" width="360" height="560" fill="none" stroke="${dominantColor}" stroke-width="2" opacity="0.4"/>
                <circle cx="200" cy="200" r="80" fill="none" stroke="${dominantColor}" stroke-width="3" opacity="0.3"/>
                <rect x="100" y="350" width="200" height="4" fill="${dominantColor}" opacity="0.6"/>
                <text x="200" y="420" text-anchor="middle" font-family="Playfair Display, serif" font-size="22" font-weight="bold" fill="${dominantColor}" opacity="0.9">${movieTitle}</text>
                <text x="200" y="460" text-anchor="middle" font-family="Inter, sans-serif" font-size="16" fill="#9ca3af" opacity="0.7">${movieInfo}</text>
                <text x="200" y="500" text-anchor="middle" font-family="Inter, sans-serif" font-size="14" fill="${hasError ? '#dc2626' : '#fbbf24'}" opacity="0.8">${hasError ? 'Failed to load' : 'Searching TMDB...'}</text>
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
                            Loading {movie.Title}...
                        </div>
                        <div className="text-xs text-gray-500">
                            Searching TMDB...
                        </div>
                    </div>
                </div>
            )}
            
            {/* 🚀 NEXT.JS OPTIMIZED IMAGE INSTEAD OF REGULAR IMG */}
            {posterUrl ? (
                <Image
                    src={posterUrl}
                    alt={alt || `${movie.Title} (${movie.Year}) - Movie Poster`}
                    width={width}
                    height={height}
                    priority={priority}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
                    className={`w-full h-full object-cover rounded-xl transition-all duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                />
            ) : (
                <img 
                    src={createPlaceholderSVG()} 
                    alt={alt || `${movie.Title} (${movie.Year}) - Movie Poster`} 
                    className={`w-full h-full object-cover rounded-xl transition-all duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`} 
                    loading="lazy"
                />
            )}
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl pointer-events-none" />
            
            {/* Enhanced Status Badge */}
            <div className="absolute top-2 right-2 bg-blue-600/80 text-white text-xs px-2 py-1 rounded">
                {posterUrl ? '✅ FOUND' : hasError ? '❌ Error' : '🔍 Searching'}
            </div>
            
            {/* Debug info */}
            {process.env.NODE_ENV === 'development' && (
                <div className="absolute bottom-1 left-1 bg-black/80 text-white text-xs px-2 py-1 rounded max-w-[90%] truncate">
                    {movie.Title} ({movie.Year}) | ID:{movie.tmdbId} | {posterUrl ? 'FOUND' : hasError ? 'ERROR' : 'SEARCHING'}
                </div>
            )}
        </div>
    );
});

TMDBMoviePoster.displayName = 'TMDBMoviePoster';

export default TMDBMoviePoster;
