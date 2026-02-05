// components/TMDBMoviePoster.js - FIXED QUALITY (HD) ⚡
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { COMPLETE_MOVIE_DATA } from '../utils/movieData';

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

// ✅ FIX: Changed default to 'w500' for HD Quality (No more blur)
const TMDBMoviePoster = React.memo(({ movie, className = "", alt, posterSize = "w500" }) => {
    const [posterUrl, setPosterUrl] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    // 🔥 SEARCH BY MOVIE TITLE + YEAR IF DIRECT ID FAILS
    const searchMovieByTitle = useCallback(async (title, year) => {
        try {
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
                // ✅ SPEED: Construct URL using the requested size (w500 now default)
                const fullPosterUrl = `${TMDB_IMAGE_BASE_URL}/${posterSize}${data.poster_path}`;
                
                setPosterUrl(fullPosterUrl);
                // Note: We don't set isLoading(false) here, we let the Image onLoad handle it
                // so the placeholder stays until the bytes are actually ready.
            } else {
                throw new Error(`No poster found for ${movie.Title}`);
            }
        } catch (error) {
            setHasError(true);
            setIsLoading(false); // Stop loading if error
        }
    }, [movie.Title, movie.Year, searchMovieByTitle, posterSize]); 

    useEffect(() => {
        setIsLoading(true);
        setHasError(false);
        setPosterUrl(null);
        
        if (movie.tmdbId) {
            fetchMoviePoster(movie.tmdbId);
        } else {
            // console.error(`❌ No TMDB ID provided for ${movie.Title}`);
            setIsLoading(false);
            setHasError(true);
        }
    }, [movie.tmdbId, movie.Title, fetchMoviePoster]);

    // Simple placeholder to avoid layout shift
    const placeholderSrc = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"; // Transparent 1x1 GIF

    return (
        <div className={`relative bg-gray-900 overflow-hidden ${className}`}>
            
            {/* ⚡ LIGHTWEIGHT LOADER: Just a pulse, no complex spinner */}
            {isLoading && (
                <div className="absolute inset-0 z-10 bg-gray-800 animate-pulse" />
            )}
            
            <Image
                src={posterUrl || placeholderSrc}
                alt={alt || `${movie.Title} Poster`}
                fill // Use fill to adapt to container size
                sizes="(max-width: 768px) 33vw, (max-width: 1200px) 20vw, 15vw" // Responsive sizes hint
                className={`object-cover transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                loading="lazy"
                onLoadingComplete={() => setIsLoading(false)}
                onError={() => {
                    setHasError(true);
                    setIsLoading(false);
                }}
            />

            {/* Error Fallback: Only text if image breaks */}
            {hasError && (
                <div className="absolute inset-0 flex items-center justify-center p-2 text-center text-xs text-gray-500 bg-gray-900">
                    {movie.Title}
                </div>
            )}
        </div>
    );
});

TMDBMoviePoster.displayName = 'TMDBMoviePoster';

export default TMDBMoviePoster;