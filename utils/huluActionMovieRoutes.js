// utils/huluActionMovieRoutes.js - COMPLETELY FIXED SSG ROUTE MAPPING FOR HULU ACTION COLLECTION

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './huluActionMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE HULU ACTION MOVIE SLUG MAPPING
export const HULU_ACTION_MOVIE_SLUGS = {
    // Rank 1: Predator
    'tt0093773': 'predator',
    
    // Rank 2: Taken
    'tt0936501': 'taken',
    
    // Rank 3: Predator: Killer of Killers
    'tt_placeholder': 'predator-killer-of-killers',
    
    // Rank 4: Dawn of the Planet of the Apes
    'tt2103281': 'dawn-of-the-planet-of-the-apes',
    
    // Rank 5: Prey
    'tt11866324': 'prey',
    
    // Rank 6: The Equalizer
    'tt0455944': 'the-equalizer',
    
    // Rank 7: Ip Man
    'tt1220719': 'ip-man',
    
    // Rank 8: Kingsman: The Secret Service
    'tt2802144': 'kingsman-the-secret-service',
    
    // Rank 9: Bullet Train
    'tt12593682': 'bullet-train',
    
    // Rank 10: Boss Level
    'tt9066658': 'boss-level'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(HULU_ACTION_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG - FIXED
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return HULU_ACTION_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR HULU ACTION MOVIES - FIXED
export const generateHuluActionMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: HULU_ACTION_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ HULU ACTION MOVIE NAVIGATION BREADCRUMBS
export const getHuluActionMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Best Action Movies on Hulu', href: '/collection/best-action-movies-on-hulu' },
        { label: movie.Title, href: `/collection/best-action-movies-on-hulu/${HULU_ACTION_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS HULU ACTION MOVIE - FIXED
export const getHuluActionMovieNavigation = (currentMovie) => {
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
            slug: HULU_ACTION_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: HULU_ACTION_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED HULU ACTION MOVIES (SAME GENRE/DECADE)
export const getRelatedHuluActionMovies = (currentMovie, limit = 3) => {
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
            slug: HULU_ACTION_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ HULU ACTION COLLECTION METADATA - FIXED WITH REAL DATA
export const HULU_ACTION_COLLECTION_META = {
    title: 'Top 10 High-Octane Action Movies on Hulu',
    description: 'Ranked list of the best action films streaming on Hulu. From Predator to Bullet Train, featuring intense fight choreography and adrenaline-fueled plots.',
    keywords: 'best action movies on hulu, hulu action films, predator movies, john wick style movies, martial arts movies hulu',
    canonicalUrl: 'https://filmiway.com/collection/best-action-movies-on-hulu',
    ogImage: 'https://filmiway.com/images/hulu-action-movies-collection.jpg',
    totalMovies: COMPLETE_MOVIE_DATABASE.length,
    // ✅ FIXED - CALCULATES AVERAGE ADRENALINE SCORE
    averageAdrenalineScore: Math.round(
        COMPLETE_MOVIE_DATABASE.reduce((sum, movie) => {
            const data = COMPLETE_MOVIE_DATA[movie.tmdbId];
            return sum + (data?.psychologicalIntensity || 85); 
        }, 0) / COMPLETE_MOVIE_DATABASE.length
    )
};

// ✅ GENERATE HULU ACTION MOVIE SITEMAP URLS
export const generateHuluActionMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-action-movies-on-hulu`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/best-action-movies-on-hulu/${HULU_ACTION_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE HULU ACTION MOVIE SLUG
export const isValidHuluActionMovieSlug = (slug) => {
    return Object.values(HULU_ACTION_MOVIE_SLUGS).includes(slug);
};

// ✅ HULU ACTION MOVIE SEARCH/FILTER UTILITIES - FIXED
export const searchHuluActionMovies = (query) => {
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
            slug: HULU_ACTION_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterHuluActionMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: HULU_ACTION_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ FIXED SORTING - NOW USES REAL DATA
export const sortHuluActionMovies = (movies, sortBy) => {
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
        case 'adrenaline': // Replaces classWarfare
            return sortedMovies.sort((a, b) => {
                const scoreA = COMPLETE_MOVIE_DATA[a.tmdbId]?.psychologicalIntensity || 0;
                const scoreB = COMPLETE_MOVIE_DATA[b.tmdbId]?.psychologicalIntensity || 0;
                return scoreB - scoreA;
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET HULU ACTION MOVIE COLLECTION STATS
export const getHuluActionCollectionStats = () => {
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
        // ✅ ADDED - AVERAGE ADRENALINE SCORE
        averageAdrenalineScore: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.psychologicalIntensity || 85);
            }, 0) / COMPLETE_MOVIE_DATABASE.length
        ),
        // ✅ ADDED - AVERAGE RATING
        averageRating: (
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.rating || 7.5);
            }, 0) / COMPLETE_MOVIE_DATABASE.length
        ).toFixed(1)
    };
};

// ✅ EXPORT ALL UTILITIES
export default {
    generateMovieSlug,
    HULU_ACTION_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateHuluActionMoviePaths,
    getHuluActionMovieBreadcrumbs,
    getHuluActionMovieNavigation,
    getRelatedHuluActionMovies,
    HULU_ACTION_COLLECTION_META,
    generateHuluActionMovieSitemapUrls,
    isValidHuluActionMovieSlug,
    searchHuluActionMovies,
    filterHuluActionMoviesByGenre,
    sortHuluActionMovies,
    getHuluActionCollectionStats
};