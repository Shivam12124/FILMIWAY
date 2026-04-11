// utils/a24MovieRoutes.js - COMPLETELY FIXED SSG ROUTE MAPPING FOR A24 MOVIES COLLECTION

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './a24MovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE A24 MOVIE SLUG MAPPING
export const A24_MOVIE_SLUGS = {
    // Rank 1: Aftersun
    'tt19770238': 'aftersun',
    
    // Rank 2: The Zone of Interest
    'tt7160372': 'the-zone-of-interest',
    
    // Rank 3: The Florida Project
    'tt5649144': 'the-florida-project',
    
    // Rank 4: The Lighthouse
    'tt7984734': 'the-lighthouse',
    
    // Rank 5: The Iron Claw
    'tt21064584': 'the-iron-claw',
    
    // Rank 6: Lady Bird
    'tt4925292': 'lady-bird',
    
    // Rank 7: Hereditary
    'tt7784604': 'hereditary',
    
    // Rank 8: Midsommar
    'tt8772262': 'midsommar',
    
    // Rank 9: Close
    'tt9660502': 'close',
    
    // Rank 10: The Whale
    'tt13833688': 'the-whale'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(A24_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG - FIXED
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return A24_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR A24 MOVIES - FIXED
export const generateA24MoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: A24_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ A24 MOVIE NAVIGATION BREADCRUMBS
export const getA24MovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: '10 Best A24 Movies', href: '/collection/best-a24-movies' },
        { label: movie.Title, href: `/collection/best-a24-movies/${A24_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS A24 MOVIE - FIXED
export const getA24MovieNavigation = (currentMovie) => {
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
            slug: A24_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: A24_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED A24 MOVIES (SAME GENRE/DECADE)
export const getRelatedA24Movies = (currentMovie, limit = 3) => {
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
            slug: A24_MOVIE_SLUGS[movie.imdbID]
        }));
};

// 👁️ A24 COLLECTION METADATA (FINAL – CTR + SEO SAFE)
export const A24_COLLECTION_META = {
    title: "10 Best A24 Movies of All Time",
    description: "Explore the most profound, terrifying, and artistically complex films from A24. Verified timestamps, emotional depth, and complete guides.",
    slug: "best-a24-movies"
};

// ✅ GENERATE A24 MOVIE SITEMAP URLS
export const generateA24MovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-a24-movies`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/best-a24-movies/${A24_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'weekly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE A24 MOVIE SLUG
export const isValidA24MovieSlug = (slug) => {
    return Object.values(A24_MOVIE_SLUGS).includes(slug);
};

// ✅ A24 MOVIE SEARCH/FILTER UTILITIES - FIXED
export const searchA24Movies = (query) => {
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
            slug: A24_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterA24MoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: A24_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ FIXED SORTING - NOW USES REAL METRICS FROM DATA FILE
export const sortA24Movies = (movies, sortBy) => {
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
        case 'emotionalResonance': // Replaces paranoiaLevel
            return sortedMovies.sort((a, b) => {
                const resonanceA = COMPLETE_MOVIE_DATA[a.tmdbId]?.emotionalResonance || 0;
                const resonanceB = COMPLETE_MOVIE_DATA[b.tmdbId]?.emotionalResonance || 0;
                return resonanceB - resonanceA;
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET A24 COLLECTION STATS
export const getA24CollectionStats = () => {
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
        // ✅ ADDED - AVERAGE EMOTIONAL RESONANCE (Replaces Paranoia Index)
        averageEmotionalResonance: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.emotionalResonance || 0);
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
    A24_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateA24MoviePaths,
    getA24MovieBreadcrumbs,
    getA24MovieNavigation,
    getRelatedA24Movies,
    A24_COLLECTION_META,
    generateA24MovieSitemapUrls,
    isValidA24MovieSlug,
    searchA24Movies,
    filterA24MoviesByGenre,
    sortA24Movies,
    getA24CollectionStats
};