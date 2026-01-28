// components/TMDBMoviePoster.js - OPTIMIZED FOR SPEED ⚡
import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { COMPLETE_MOVIE_DATA } from '../utils/movieData';

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

// ✅ ADDED "posterSize" prop with a faster default
const TMDBMoviePoster = React.memo(({ movie, className = "", alt, posterSize = "w342" }) => {
    const [posterUrl, setPosterUrl] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    // 🔥 SEARCH BY MOVIE TITLE + YEAR IF DIRECT ID FAILS
    const searchMovieByTitle = useCallback(async (title, year) => {
        try {
            // console.log(`🔍 Searching for ${title} (${year})`);
            
            const searchResponse = await fetch(
                `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(title)}&year=${year}`
            );
            
            if (searchResponse.ok) {
                const searchData = await searchResponse.json();
                
                // Find exact match by year
                const exactMatch = searchData.results.find(result => 
                    result.release_date && result.release_date.startsWith(year)
                );
                
                if (exactMatch) {
                    return exactMatch;
                }
                
                // Fallback to first result
                if (searchData.results.length > 0) {
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
            let response = await fetch(
                `${TMDB_BASE_URL}/movie/${tmdbId}?api_key=${TMDB_API_KEY}&language=en-US`
            );
            
            let data = null;
            
            if (response.ok) {
                data = await response.json();
            } else {
                // Step 2: Search by title + year
                data = await searchMovieByTitle(movie.Title, movie.Year);
            }
            
            if (data && data.poster_path) {
                // ✅ OPTIMIZATION: Use the dynamic 'posterSize' prop here
                // w185 = Tiny, w342 = Card Standard, w500 = High Quality, w780 = Huge
                const fullPosterUrl = `${TMDB_IMAGE_BASE_URL}/${posterSize}${data.poster_path}`;
                
                setPosterUrl(fullPosterUrl);
                return fullPosterUrl;
            } else {
                throw new Error(`No poster found for ${movie.Title}`);
            }
        } catch (error) {
            // console.error(`❌ All methods failed for ${movie.Title}:`, error);
            setHasError(true);
            return null;
        }
    }, [movie.Title, movie.Year, searchMovieByTitle, posterSize]); // Added posterSize dependency

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
    }, [movie.tmdbId, movie.Title, fetchMoviePoster]);

    const createPlaceholderSVG = () => {
        const dominantColor = COMPLETE_MOVIE_DATA[movie.tmdbId]?.dominantColor || '#ca8a04';
        const movieTitle = movie.Title || 'Unknown Movie';
        
        return `data:image/svg+xml,${encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" width="400" height="600" viewBox="0 0 400 600">
                <rect width="400" height="600" fill="#111827"/>
                <text x="200" y="300" text-anchor="middle" fill="${dominantColor}" font-size="24">${movieTitle}</text>
            </svg>
        `)}`;
    };

    return (
        <div className={`relative ${className}`}>
            {isLoading && (
                <div className="absolute inset-0 bg-gray-900 rounded-xl flex items-center justify-center z-10">
                   {/* Reduced loader complexity for performance */}
                   <div className="w-6 h-6 border-2 border-yellow-400/30 border-t-yellow-400 rounded-full animate-spin" />
                </div>
            )}
            
            <Image
                src={posterUrl || createPlaceholderSVG()}
                alt={alt || `${movie.Title} Poster`}
                width={342} 
                height={513}
                className={`w-full h-full object-cover rounded-xl transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                loading="lazy"
                unoptimized={true} // Optional: Skips Next.js server processing if you want direct TMDB speed
            />
        </div>
    );
});

TMDBMoviePoster.displayName = 'TMDBMoviePoster';

export default TMDBMoviePoster;