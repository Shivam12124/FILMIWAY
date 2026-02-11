// utils/eyesWideShutMovieRoutes.js - COMPLETELY FIXED SSG ROUTE MAPPING FOR EYES WIDE SHUT COLLECTION

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './eyesWideShutMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE EYES WIDE SHUT MOVIE SLUG MAPPING
export const EYES_WIDE_SHUT_MOVIE_SLUGS = {
    // Rank 1: Mulholland Drive
    'tt0166924': 'mulholland-drive',
    
    // Rank 2: The Ninth Gate
    'tt0142688': 'the-ninth-gate',
    
    // Rank 3: Blue Velvet
    'tt0090756': 'blue-velvet',
    
    // Rank 4: Rosemary's Baby
    'tt0063522': 'rosemarys-baby',
    
    // Rank 5: The Game
    'tt0119174': 'the-game',
    
    // Rank 6: Lost Highway
    'tt0116922': 'lost-highway',
    
    // Rank 7: Society
    'tt0098354': 'society',
    
    // Rank 8: 8mm
    'tt0134273': '8mm',
    
    // Rank 9: Get Out
    'tt5052448': 'get-out',
    
    // Rank 10: The Killing of a Sacred Deer
    'tt5715874': 'the-killing-of-a-sacred-deer'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(EYES_WIDE_SHUT_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG - FIXED
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return EYES_WIDE_SHUT_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR EYES WIDE SHUT MOVIES - FIXED
export const generateEyesWideShutMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: EYES_WIDE_SHUT_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ EYES WIDE SHUT MOVIE NAVIGATION BREADCRUMBS
export const getEyesWideShutMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Movies Like Eyes Wide Shut', href: '/collection/movies-like-eyes-wide-shut' },
        { label: movie.Title, href: `/collection/movies-like-eyes-wide-shut/${EYES_WIDE_SHUT_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS EYES WIDE SHUT MOVIE - FIXED
export const getEyesWideShutMovieNavigation = (currentMovie) => {
    const currentIndex = COMPLETE_MOVIE_DATABASE.findIndex(m => m.imdbID === currentMovie.imdbID);
    
    const previousMovie = currentIndex > 0 
        ? COMPLETE_MOVIE_DATABASE[currentIndex - 1]
        : null;
        
    const nextMovie = currentIndex < COMPLETE_MOVIE_DATABASE.length - 1
        ? COMPLETE_MOVIE_DATABASE[currentIndex + 1]
        : null;
    
    return {
        previous: previousMovie ? {
            ...previousMovie,
            slug: EYES_WIDE_SHUT_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: EYES_WIDE_SHUT_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED EYES WIDE SHUT MOVIES (SAME GENRE/DECADE)
export const getRelatedEyesWideShutMovies = (currentMovie, limit = 3) => {
    const currentDecade = Math.floor(currentMovie.year / 10) * 10;
    const currentGenre = currentMovie.genre;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => 
            movie.imdbID !== currentMovie.imdbID && (
                movie.genre === currentGenre || 
                Math.floor(movie.year / 10) * 10 === currentDecade
            )
        )
        .slice(0, limit)
        .map(movie => ({
            ...movie,
            slug: EYES_WIDE_SHUT_MOVIE_SLUGS[movie.imdbID]
        }));
};

// 👁️ EYES WIDE SHUT COLLECTION METADATA (FINAL – CTR + SEO SAFE)


// ✅ GENERATE EYES WIDE SHUT MOVIE SITEMAP URLS
export const generateEyesWideShutMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/movies-like-eyes-wide-shut`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/movies-like-eyes-wide-shut/${EYES_WIDE_SHUT_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE EYES WIDE SHUT MOVIE SLUG
export const isValidEyesWideShutMovieSlug = (slug) => {
    return Object.values(EYES_WIDE_SHUT_MOVIE_SLUGS).includes(slug);
};

// ✅ EYES WIDE SHUT MOVIE SEARCH/FILTER UTILITIES - FIXED
export const searchEyesWideShutMovies = (query) => {
    const lowercaseQuery = query.toLowerCase();
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => 
            movie.Title.toLowerCase().includes(lowercaseQuery) ||
            movie.genre.toLowerCase().includes(lowercaseQuery) ||
            (COMPLETE_MOVIE_DATA[movie.tmdbId]?.director || '').toLowerCase().includes(lowercaseQuery) ||
            movie.year.toString().includes(query)
        )
        .map(movie => ({
            ...movie,
            slug: EYES_WIDE_SHUT_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterEyesWideShutMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: EYES_WIDE_SHUT_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ FIXED SORTING - NOW USES REAL METRICS FROM DATA FILE
export const sortEyesWideShutMovies = (movies, sortBy) => {
    const sortedMovies = [...movies];
    
    switch (sortBy) {
        case 'rating':
            return sortedMovies.sort((a, b) => {
                const ratingA = COMPLETE_MOVIE_DATA[a.tmdbId]?.rating || 0;
                const ratingB = COMPLETE_MOVIE_DATA[b.tmdbId]?.rating || 0;
                return ratingB - ratingA;
            });
        case 'year':
            return sortedMovies.sort((a, b) => b.year - a.year);
        case 'paranoiaLevel': // Replaces classWarfare
            return sortedMovies.sort((a, b) => {
                const intensityA = COMPLETE_MOVIE_DATA[a.tmdbId]?.psychologicalIntensity || 0;
                const intensityB = COMPLETE_MOVIE_DATA[b.tmdbId]?.psychologicalIntensity || 0;
                return intensityB - intensityA;
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET EYES WIDE SHUT COLLECTION STATS
export const getEyesWideShutCollectionStats = () => {
    const genres = [...new Set(COMPLETE_MOVIE_DATABASE.map(m => m.genre))];
    const decades = [...new Set(COMPLETE_MOVIE_DATABASE.map(m => Math.floor(m.year / 10) * 10))];
    const yearRange = {
        earliest: Math.min(...COMPLETE_MOVIE_DATABASE.map(m => m.year)),
        latest: Math.max(...COMPLETE_MOVIE_DATABASE.map(m => m.year))
    };
    
    return {
        totalMovies: COMPLETE_MOVIE_DATABASE.length,
        genres: genres.length,
        genreList: genres,
        decades: decades.sort((a, b) => a - b),
        yearRange,
        averageYear: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => sum + m.year, 0) / COMPLETE_MOVIE_DATABASE.length
        ),
        averageRuntime: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => sum + m.runtime, 0) / COMPLETE_MOVIE_DATABASE.length
        ),
        // ✅ ADDED - AVERAGE PARANOIA INDEX (Psychological Intensity)
        averageParanoiaIndex: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.psychologicalIntensity || 0);
            }, 0) / COMPLETE_MOVIE_DATABASE.length
        ),
        // ✅ ADDED - AVERAGE RATING
        averageRating: (
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.rating || 0);
            }, 0) / COMPLETE_MOVIE_DATABASE.length
        ).toFixed(1)
    };
};

// ✅ EXPORT ALL UTILITIES
export default {
    generateMovieSlug,
    EYES_WIDE_SHUT_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateEyesWideShutMoviePaths,
    getEyesWideShutMovieBreadcrumbs,
    getEyesWideShutMovieNavigation,
    getRelatedEyesWideShutMovies,
    EYES_WIDE_SHUT_COLLECTION_META,
    generateEyesWideShutMovieSitemapUrls,
    isValidEyesWideShutMovieSlug,
    searchEyesWideShutMovies,
    filterEyesWideShutMoviesByGenre,
    sortEyesWideShutMovies,
    getEyesWideShutCollectionStats
};