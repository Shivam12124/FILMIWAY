// utils/eroticThrillerMovieRoutes.js - SSG ROUTE MAPPING FOR EROTIC THRILLER COLLECTION ✅
// 100% SEO Safe - Framed around Neo-Noir and Psychological Tension

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './eroticThrillerMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE EROTIC THRILLER MOVIE SLUG MAPPING
export const EROTIC_THRILLER_MOVIE_SLUGS = {
    // Rank 1: Basic Instinct
    'tt0103772': 'basic-instinct',
    
    // Rank 2: Eyes Wide Shut
    'tt0120663': 'eyes-wide-shut',
    
    // Rank 3: The Handmaiden
    'tt4016934': 'the-handmaiden',
    
    // Rank 4: Lust, Caution
    'tt0808357': 'lust-caution',
    
    // Rank 5: Wild Things
    'tt0120890': 'wild-things',
    
    // Rank 6: Unfaithful
    'tt0250797': 'unfaithful',
    
    // Rank 7: Fatal Attraction
    'tt0093010': 'fatal-attraction',
    
    // Rank 8: Body Heat
    'tt0082089': 'body-heat',
    
    // Rank 9: The Last Seduction
    'tt0110308': 'the-last-seduction',
    
    // Rank 10: Bound
    'tt0115736': 'bound'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(EROTIC_THRILLER_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return EROTIC_THRILLER_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR EROTIC THRILLER MOVIES
export const generateEroticThrillerMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: EROTIC_THRILLER_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ EROTIC THRILLER MOVIE NAVIGATION BREADCRUMBS
export const getEroticThrillerMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Best Erotic Thriller Movies', href: '/collection/best-erotic-thriller-movies' },
        { label: movie.Title, href: `/movies/best-erotic-thriller-movies/${EROTIC_THRILLER_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS EROTIC THRILLER MOVIE
export const getEroticThrillerMovieNavigation = (currentMovie) => {
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
            slug: EROTIC_THRILLER_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: EROTIC_THRILLER_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED EROTIC THRILLER MOVIES (SAME GENRE/DECADE)
export const getRelatedEroticThrillerMovies = (currentMovie, limit = 3) => {
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
            slug: EROTIC_THRILLER_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ GENERATE EROTIC THRILLER MOVIE SITEMAP URLS
export const generateEroticThrillerMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-erotic-thriller-movies`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/movies/best-erotic-thriller-movies/${EROTIC_THRILLER_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'weekly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE EROTIC THRILLER MOVIE SLUG
export const isValidEroticThrillerMovieSlug = (slug) => {
    return Object.values(EROTIC_THRILLER_MOVIE_SLUGS).includes(slug);
};

// ✅ EROTIC THRILLER MOVIE SEARCH/FILTER UTILITIES
export const searchEroticThrillerMovies = (query) => {
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
            slug: EROTIC_THRILLER_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterEroticThrillerMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: EROTIC_THRILLER_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ FIXED SORTING - NOW USES REAL METRICS FROM DATA FILE
export const sortEroticThrillerMovies = (movies, sortBy) => {
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
        case 'eroticTension': // ✅ Swapped to our custom metric
            return sortedMovies.sort((a, b) => {
                const tensionA = COMPLETE_MOVIE_DATA[a.tmdbId]?.eroticTension || 0;
                const tensionB = COMPLETE_MOVIE_DATA[b.tmdbId]?.eroticTension || 0;
                return tensionB - tensionA;
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET EROTIC THRILLER COLLECTION STATS
export const getEroticThrillerCollectionStats = () => {
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
        // ✅ ADDED - AVERAGE EROTIC TENSION INDEX
        averageEroticTension: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.eroticTension || 0);
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
    EROTIC_THRILLER_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateEroticThrillerMoviePaths,
    getEroticThrillerMovieBreadcrumbs,
    getEroticThrillerMovieNavigation,
    getRelatedEroticThrillerMovies,
    generateEroticThrillerMovieSitemapUrls,
    isValidEroticThrillerMovieSlug,
    searchEroticThrillerMovies,
    filterEroticThrillerMoviesByGenre,
    sortEroticThrillerMovies,
    getEroticThrillerCollectionStats
};