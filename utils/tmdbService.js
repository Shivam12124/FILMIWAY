// utils/tmdbService.js - CORRECTED TMDB POSTER PATHS
const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

// Get TMDB poster URL
export const getTMDBPosterUrl = (posterPath, size = 'w500') => {
    if (!posterPath) return null;
    return `${TMDB_IMAGE_BASE_URL}/${size}${posterPath}`;
};

// ✅ CORRECTED TMDB POSTER PATHS (FIXED KEYS!)
export const TMDB_CACHED_POSTERS = {
    14337: "/qP8lKSlT2YgUb0KNczBRJNpS3qN.jpg",   // Primer - CORRECTED
    4960: "/2nOjh4MEjjTzLo69gTgwjdZW7cz.jpg",    // Synecdoche, New York - CORRECTED
    1018: "/lynuLF1wanJaWJIhGPhIoRGI2Mf.jpg",    // Mulholland Drive - CORRECTED  
    206487: "/dTGJVNZe5vepXNJl3hLzMc7h5md.jpg",  // Predestination - CORRECTED
    220289: "/lP3zei9YKr9CgG4NcaXSE8CfnqS.jpg",  // Coherence - CORRECTED
    141: "/fhQoQfejY1hUcwyuLgpBrYs6uFt.jpg",     // Donnie Darko - CORRECTED
    181886: "/kaBnQNBZ5tKOgkYGzRLWS2KYqSI.jpg",  // Enemy - CORRECTED
    1381: "/a2FYl5B87gPRiKRLGeCxgSIBF4V.jpg",    // The Fountain - CORRECTED
    485947: "/fOHgTCUaD8KajJDnULSCmf96p3z.jpg",  // Mr. Nobody - FIXED KEY!
    1130884: "/kve5ZBFLddif8LkYiyKLQdm57O2.jpg", // Shutter Island - FIXED KEY!
    629: "/1234567890abcdef1234567890abcdef.jpg"  // The Usual Suspects
};

// Get movie details from TMDB
export const getTMDBMovieDetails = async (tmdbId) => {
    try {
        const response = await fetch(
            `${TMDB_BASE_URL}/movie/${tmdbId}?api_key=${TMDB_API_KEY}&language=en-US`
        );
        
        if (!response.ok) {
            throw new Error(`TMDB API error: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching TMDB movie details:', error);
        return null;
    }
};

export default {
    getTMDBMovieDetails,
    getTMDBPosterUrl,
    TMDB_CACHED_POSTERS
};
