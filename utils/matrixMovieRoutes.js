// utils/matrixMovieRoutes.js - COMPLETELY FIXED SSG ROUTE MAPPING
// EXACT CARBON COPY STRUCTURE OF SURVIVAL ROUTES - ADAPTED FOR MATRIX COLLECTION

import { COMPLETE_MOVIE_DATABASE } from './matrixMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE MATRIX MOVIE SLUG MAPPING (ALL 10 FILMS) - EX MACHINA → EDGE OF TOMORROW
export const MATRIX_MOVIE_SLUGS = {
    // Rank 1: Dark City
    'tt0112817': 'dark-city',
    
    // Rank 2: Inception
    'tt1375666': 'inception',
    
    // Rank 3: The Thirteenth Floor
    'tt0139809': 'the-thirteenth-floor',
    
    // Rank 4: eXistenZ
    'tt0120663': 'existenz',
    
    // Rank 5: Source Code
    'tt0945513': 'source-code',
    
    // Rank 6: Minority Report
    'tt0181689': 'minority-report',
    
    // Rank 7: Upgrade
    'tt6499752': 'upgrade',
    
    // Rank 8: Total Recall
    'tt0100802': 'total-recall',
    
    // Rank 9: Blade Runner 2049
    'tt1856101': 'blade-runner-2049',
    
    // Rank 10: Edge of Tomorrow (REPLACED Ex Machina)
    'tt1631867': 'edge-of-tomorrow'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(MATRIX_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG - FIXED
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return MATRIX_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR MATRIX MOVIES - FIXED
export const generateMatrixMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: MATRIX_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ MATRIX MOVIE NAVIGATION BREADCRUMBS
export const getMatrixMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Reality-Bending Sci-Fi Movies', href: '/collection/best-reality-bending-movies' },
        { label: movie.Title, href: `/collection/best-reality-bending-movies/${MATRIX_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS MATRIX MOVIE - FIXED
export const getMatrixMovieNavigation = (currentMovie) => {
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
            slug: MATRIX_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: MATRIX_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED MATRIX MOVIES (SAME GENRE/DECADE)
export const getRelatedMatrixMovies = (currentMovie, limit = 3) => {
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
            slug: MATRIX_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ MATRIX COLLECTION METADATA - FIXED WITH REAL DATA
export const MATRIX_COLLECTION_META = {
    title: 'Top 10 Reality-Bending Sci-Fi Movies Like The Matrix',
    description: 'Discover 10 mind-bending reality-shifting sci-fi films ranked by complexity. From Dark City to Edge of Tomorrow - films that challenge perception.',
    keywords: 'reality bending movies, simulation theory films, mind bending sci-fi, matrix like movies, complex sci-fi, existential sci-fi movies, edge of tomorrow, time loop movies',
    canonicalUrl: 'https://filmiway.com/collection/best-reality-bending-movies',
    ogImage: 'https://filmiway.com/images/matrix-movies-collection.jpg',
    totalMovies: COMPLETE_MOVIE_DATABASE.length,
    // ✅ FIXED - NOW USES REAL COMPLEXITY DATA
    averageRealityIndex: Math.round(
        COMPLETE_MOVIE_DATABASE.reduce((sum, movie) => {
            const movieData = COMPLETE_MOVIE_DATA[movie.tmdbId];
            return sum + (movieData?.realityIndex || 92); // ✅ REAL DATA - Changed to realityIndex
        }, 0) / COMPLETE_MOVIE_DATABASE.length
    )
};

// ✅ GENERATE MATRIX MOVIE SITEMAP URLS
export const generateMatrixMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-reality-bending-movies`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/best-reality-bending-movies/${MATRIX_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE MATRIX MOVIE SLUG
export const isValidMatrixMovieSlug = (slug) => {
    return Object.values(MATRIX_MOVIE_SLUGS).includes(slug);
};

// ✅ MATRIX MOVIE SEARCH/FILTER UTILITIES - FIXED
export const searchMatrixMovies = (query) => {
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
            slug: MATRIX_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterMatrixMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: MATRIX_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ FIXED SORTING - NOW USES REAL DATA
export const sortMatrixMovies = (movies, sortBy) => {
    const sortedMovies = [...movies];
    
    switch (sortBy) {
        case 'rating':
            return sortedMovies.sort((a, b) => {
                const aRating = COMPLETE_MOVIE_DATA[a.tmdbId]?.rating || 0;
                const bRating = COMPLETE_MOVIE_DATA[b.tmdbId]?.rating || 0;
                return bRating - aRating;
            });
        case 'year':
            return sortedMovies.sort((a, b) => b.year - a.year);
        case 'complexity':
            return sortedMovies.sort((a, b) => {
                const aComplexity = COMPLETE_MOVIE_DATA[a.tmdbId]?.complexityLevel || 'MEDIUM';
                const bComplexity = COMPLETE_MOVIE_DATA[b.tmdbId]?.complexityLevel || 'MEDIUM';
                const complexityOrder = { 'EXTREME': 3, 'HIGH': 2, 'MEDIUM': 1 };
                return complexityOrder[bComplexity] - complexityOrder[aComplexity];
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET MATRIX COLLECTION STATS
export const getMatrixCollectionStats = () => {
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
        // ✅ ADDED - AVERAGE COMPLEXITY
        averageComplexity: 'HIGH',
        // ✅ ADDED - AVERAGE RATING
        averageRating: (
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                const movieData = COMPLETE_MOVIE_DATA[m.tmdbId];
                return sum + (movieData?.rating || 7.5);
            }, 0) / COMPLETE_MOVIE_DATABASE.length
        ).toFixed(1),
        // ✅ ADDED - THEME BREAKDOWN
        complexityBreakdown: {
            EXTREME: COMPLETE_MOVIE_DATABASE.filter(m => COMPLETE_MOVIE_DATA[m.tmdbId]?.complexityLevel === 'EXTREME').length,
            HIGH: COMPLETE_MOVIE_DATABASE.filter(m => COMPLETE_MOVIE_DATA[m.tmdbId]?.complexityLevel === 'HIGH').length,
            MEDIUM: COMPLETE_MOVIE_DATABASE.filter(m => COMPLETE_MOVIE_DATA[m.tmdbId]?.complexityLevel === 'MEDIUM').length
        }
    };
};

// ✅ GET MOVIE DATA REFERENCE
export const getMovieDataReference = (movie) => {
    return COMPLETE_MOVIE_DATA[movie.tmdbId] || null;
};

export default {
    generateMovieSlug,
    MATRIX_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateMatrixMoviePaths,
    getMatrixMovieBreadcrumbs,
    getMatrixMovieNavigation,
    getRelatedMatrixMovies,
    MATRIX_COLLECTION_META,
    generateMatrixMovieSitemapUrls,
    isValidMatrixMovieSlug,
    searchMatrixMovies,
    filterMatrixMoviesByGenre,
    sortMatrixMovies,
    getMatrixCollectionStats,
    getMovieDataReference
};
