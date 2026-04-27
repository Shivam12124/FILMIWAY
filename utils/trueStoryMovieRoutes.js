// utils/trueStoryMovieRoutes.js - SSG ROUTE MAPPING FOR TRUE STORY COLLECTION ✅
// 100% SEO Safe - Framed around Historical Impact and Character Studies

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './trueStoryMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE TRUE STORY MOVIE SLUG MAPPING
export const TRUE_STORY_MOVIE_SLUGS = {
    // Rank 1: Schindler's List
    'tt0108052': 'schindlers-list',
    
    // Rank 2: Goodfellas
    'tt0099685': 'goodfellas',
    
    // Rank 3: The Pianist
    'tt0253474': 'the-pianist',
    
    // Rank 4: Oppenheimer
    'tt15398776': 'oppenheimer',
    
    // Rank 5: Braveheart
    'tt0112573': 'braveheart',
    
    // Rank 6: 12 Years a Slave
    'tt2024544': '12-years-a-slave',
    
    // Rank 7: Rush
    'tt1979320': 'rush',
    
    // Rank 8: Dallas Buyers Club
    'tt0790636': 'dallas-buyers-club',
    
    // Rank 9: The Social Network
    'tt1285016': 'the-social-network',
    
    // Rank 10: Donnie Brasco
    'tt0119008': 'donnie-brasco'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(TRUE_STORY_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return TRUE_STORY_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR TRUE STORY MOVIES
export const generateTrueStoryMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: TRUE_STORY_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ TRUE STORY MOVIE NAVIGATION BREADCRUMBS
export const getTrueStoryMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Best True Story Movies', href: '/collection/best-true-story-movies' },
        { label: movie.Title, href: `/movie/${TRUE_STORY_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS TRUE STORY MOVIE
export const getTrueStoryMovieNavigation = (currentMovie) => {
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
            slug: TRUE_STORY_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: TRUE_STORY_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED TRUE STORY MOVIES (SAME GENRE/DECADE)
export const getRelatedTrueStoryMovies = (currentMovie, limit = 3) => {
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
            slug: TRUE_STORY_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ GENERATE TRUE STORY MOVIE SITEMAP URLS
export const generateTrueStoryMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-true-story-movies`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/movie/${TRUE_STORY_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'weekly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE TRUE STORY MOVIE SLUG
export const isValidTrueStoryMovieSlug = (slug) => {
    return Object.values(TRUE_STORY_MOVIE_SLUGS).includes(slug);
};

// ✅ TRUE STORY MOVIE SEARCH/FILTER UTILITIES
export const searchTrueStoryMovies = (query) => {
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
            slug: TRUE_STORY_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterTrueStoryMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: TRUE_STORY_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ FIXED SORTING - NOW USES REAL METRICS FROM DATA FILE
export const sortTrueStoryMovies = (movies, sortBy) => {
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
        case 'historicalAccuracy': // ✅ Swapped to our custom True Story metric
            return sortedMovies.sort((a, b) => {
                const accuracyA = COMPLETE_MOVIE_DATA[a.tmdbId]?.historicalAccuracy || 0;
                const accuracyB = COMPLETE_MOVIE_DATA[b.tmdbId]?.historicalAccuracy || 0;
                return accuracyB - accuracyA;
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET TRUE STORY COLLECTION STATS
export const getTrueStoryCollectionStats = () => {
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
        // ✅ ADDED - AVERAGE HISTORICAL ACCURACY INDEX
        averageHistoricalAccuracy: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.historicalAccuracy || 0);
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
    TRUE_STORY_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateTrueStoryMoviePaths,
    getTrueStoryMovieBreadcrumbs,
    getTrueStoryMovieNavigation,
    getRelatedTrueStoryMovies,
    generateTrueStoryMovieSitemapUrls,
    isValidTrueStoryMovieSlug,
    searchTrueStoryMovies,
    filterTrueStoryMoviesByGenre,
    sortTrueStoryMovies,
    getTrueStoryCollectionStats
};