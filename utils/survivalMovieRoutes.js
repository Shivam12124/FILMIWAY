// utils/survivalMovieRoutes.js - COMPLETELY FIXED SSG ROUTE MAPPING

import { COMPLETE_MOVIE_DATABASE } from './survivalMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE SURVIVAL MOVIE SLUG MAPPING
export const SURVIVAL_MOVIE_SLUGS = {
    // Rank 1: 127 Hours
    'tt1542344': '127-hours',
    
    // Rank 2: Society of the Snow
    'tt16277242': 'society-of-the-snow',
    
    // Rank 3: Cast Away
    'tt0162222': 'cast-away',
    
    // Rank 4: The Revenant
    'tt1663202': 'the-revenant',
    
    // Rank 5: The Martian
    'tt3659388': 'the-martian',
    
    // Rank 6: The Impossible
    'tt1649419': 'the-impossible',
    
    // Rank 7: Jungle
    'tt3758172': 'jungle',
    
    // Rank 8: Apocalypto
    'tt0472043': 'apocalypto',
    
    // Rank 9: 13 Lives
    'tt12262116': '13-lives',
    
    // Rank 10: Unbroken
    'tt1809398': 'unbroken'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(SURVIVAL_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG - FIXED
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return SURVIVAL_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR SURVIVAL MOVIES - FIXED
export const generateSurvivalMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: SURVIVAL_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ SURVIVAL MOVIE NAVIGATION BREADCRUMBS
export const getSurvivalMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Best Survival Movies', href: '/collection/best-survival-movies' },
        { label: movie.Title, href: `/collection/best-survival-movies/${SURVIVAL_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS SURVIVAL MOVIE - FIXED
export const getSurvivalMovieNavigation = (currentMovie) => {
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
            slug: SURVIVAL_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: SURVIVAL_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED SURVIVAL MOVIES (SAME GENRE/DECADE)
export const getRelatedSurvivalMovies = (currentMovie, limit = 3) => {
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
            slug: SURVIVAL_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ GENERATE SURVIVAL MOVIE SITEMAP URLS
export const generateSurvivalMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-survival-movies`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/best-survival-movies/${SURVIVAL_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE SURVIVAL MOVIE SLUG
export const isValidSurvivalMovieSlug = (slug) => {
    return Object.values(SURVIVAL_MOVIE_SLUGS).includes(slug);
};

// ✅ SURVIVAL MOVIE SEARCH/FILTER UTILITIES - FIXED
export const searchSurvivalMovies = (query) => {
    const lowercaseQuery = query.toLowerCase();
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => 
            movie.Title.toLowerCase().includes(lowercaseQuery) ||
            movie.genre.toLowerCase().includes(lowercaseQuery) ||
            movie.director.toLowerCase().includes(lowercaseQuery) || // ADDED
            movie.environment.toLowerCase().includes(lowercaseQuery) || // ADDED
            movie.year.toString().includes(query)
        )
        .map(movie => ({
            ...movie,
            slug: SURVIVAL_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterSurvivalMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: SURVIVAL_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ FIXED SORTING - NOW USES REAL DATA
export const sortSurvivalMovies = (movies, sortBy) => {
    const sortedMovies = [...movies];
    
    switch (sortBy) {
        case 'rating':
            return sortedMovies.sort((a, b) => b.rating - a.rating); // ✅ FIXED - REAL RATINGS
        case 'year':
            return sortedMovies.sort((a, b) => b.year - a.year);
        case 'survivability':
            return sortedMovies.sort((a, b) => b.survivabilityIndex - a.survivabilityIndex); // ✅ FIXED - REAL DATA
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime); // ✅ ADDED
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET SURVIVAL MOVIE COLLECTION STATS
export const getSurvivalCollectionStats = () => {
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
        // ✅ ADDED - AVERAGE SURVIVABILITY INDEX
        averageSurvivabilityIndex: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => sum + m.survivabilityIndex, 0) / COMPLETE_MOVIE_DATABASE.length
        ),
        // ✅ ADDED - AVERAGE RATING
        averageRating: (
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => sum + m.rating, 0) / COMPLETE_MOVIE_DATABASE.length
        ).toFixed(1)
    };
};

// ✅ EXPORT ALL UTILITIES
export default {
    generateMovieSlug,
    SURVIVAL_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateSurvivalMoviePaths,
    getSurvivalMovieBreadcrumbs,
    getSurvivalMovieNavigation,
    getRelatedSurvivalMovies,
    generateSurvivalMovieSitemapUrls,
    isValidSurvivalMovieSlug,
    searchSurvivalMovies,
    filterSurvivalMoviesByGenre,
    sortSurvivalMovies,
    getSurvivalCollectionStats
};
