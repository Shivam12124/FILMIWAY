// utils/marriageCrisisMovieRoutes.js - SSG ROUTE MAPPING FOR MARRIAGE CRISIS COLLECTION ✅
// 100% SEO Safe - Framed around Emotional Breakdown and Relationship Drama

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './marriageCrisisMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE MARRIAGE CRISIS MOVIE SLUG MAPPING
export const MARRIAGE_CRISIS_MOVIE_SLUGS = {
    // Rank 1: A Separation
    'tt1832382': 'a-separation',
    
    // Rank 2: Scenes from a Marriage
    'tt0070644': 'scenes-from-a-marriage',
    
    // Rank 3: Marriage Story
    'tt7653254': 'marriage-story',
    
    // Rank 4: Before Midnight
    'tt2209418': 'before-midnight',
    
    // Rank 5: Kramer vs. Kramer
    'tt0079417': 'kramer-vs-kramer',
    
    // Rank 6: American Beauty
    'tt0169547': 'american-beauty',
    
    // Rank 7: An Unmarried Woman
    'tt0078444': 'an-unmarried-woman',
    
    // Rank 8: Blue Valentine
    'tt1120985': 'blue-valentine',
    
    // Rank 9: Crazy, Stupid, Love.
    'tt1570728': 'crazy-stupid-love',
    
    // Rank 10: Revolutionary Road
    'tt0959337': 'revolutionary-road'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(MARRIAGE_CRISIS_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return MARRIAGE_CRISIS_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR MARRIAGE CRISIS MOVIES
export const generateMarriageCrisisMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: MARRIAGE_CRISIS_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ MARRIAGE CRISIS MOVIE NAVIGATION BREADCRUMBS
export const getMarriageCrisisMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: '10 Best Movies About Marriage Crises', href: '/collection/best-marriage-crisis-movies' },
        { label: movie.Title, href: `/movie/${MARRIAGE_CRISIS_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS MARRIAGE CRISIS MOVIE
export const getMarriageCrisisMovieNavigation = (currentMovie) => {
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
            slug: MARRIAGE_CRISIS_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: MARRIAGE_CRISIS_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED MARRIAGE CRISIS MOVIES (SAME GENRE/DECADE)
export const getRelatedMarriageCrisisMovies = (currentMovie, limit = 3) => {
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
            slug: MARRIAGE_CRISIS_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ GENERATE MARRIAGE CRISIS MOVIE SITEMAP URLS
export const generateMarriageCrisisMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-marriage-crisis-movies`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/movie/${MARRIAGE_CRISIS_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'weekly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE MARRIAGE CRISIS MOVIE SLUG
export const isValidMarriageCrisisMovieSlug = (slug) => {
    return Object.values(MARRIAGE_CRISIS_MOVIE_SLUGS).includes(slug);
};

// ✅ MARRIAGE CRISIS MOVIE SEARCH/FILTER UTILITIES
export const searchMarriageCrisisMovies = (query) => {
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
            slug: MARRIAGE_CRISIS_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterMarriageCrisisMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: MARRIAGE_CRISIS_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ FIXED SORTING - NOW USES REAL METRICS FROM DATA FILE
export const sortMarriageCrisisMovies = (movies, sortBy) => {
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
        case 'emotionalWeight': // ✅ Swapped to our custom metric
            return sortedMovies.sort((a, b) => {
                const weightA = COMPLETE_MOVIE_DATA[a.tmdbId]?.emotionalWeight || 0;
                const weightB = COMPLETE_MOVIE_DATA[b.tmdbId]?.emotionalWeight || 0;
                return weightB - weightA;
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET MARRIAGE CRISIS COLLECTION STATS
export const getMarriageCrisisCollectionStats = () => {
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
        // ✅ ADDED - AVERAGE EMOTIONAL WEIGHT INDEX
        averageEmotionalWeight: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.emotionalWeight || 0);
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
    MARRIAGE_CRISIS_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateMarriageCrisisMoviePaths,
    getMarriageCrisisMovieBreadcrumbs,
    getMarriageCrisisMovieNavigation,
    getRelatedMarriageCrisisMovies,
    generateMarriageCrisisMovieSitemapUrls,
    isValidMarriageCrisisMovieSlug,
    searchMarriageCrisisMovies,
    filterMarriageCrisisMoviesByGenre,
    sortMarriageCrisisMovies,
    getMarriageCrisisCollectionStats
};