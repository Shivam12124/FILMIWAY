// utils/paramountActionMovieRoutes.js - COMPLETELY FIXED SSG ROUTE MAPPING FOR PARAMOUNT ACTION COLLECTION

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './paramountActionMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE PARAMOUNT ACTION MOVIE SLUG MAPPING
export const PARAMOUNT_ACTION_MOVIE_SLUGS = {
    // Rank 1: Mission: Impossible – Fallout
    'tt7963665': 'mission-impossible-fallout',
    
    // Rank 2: Top Gun: Maverick
    'tt1745960': 'top-gun-maverick',
    
    // Rank 3: Mission: Impossible – Ghost Protocol
    'tt1229238': 'mission-impossible-ghost-protocol',
    
    // Rank 4: Baby Driver
    'tt3890160': 'baby-driver',
    
    // Rank 5: World War Z
    'tt0816711': 'world-war-z',
    
    // Rank 6: Gladiator
    'tt0172495': 'gladiator',
    
    // Rank 7: Transformers
    'tt0418279': 'transformers',
    
    // Rank 8: Face/Off
    'tt0119094': 'face-off',
    
    // Rank 9: Raiders of the Lost Ark
    'tt0082971': 'raiders-of-the-lost-ark',
    
    // Rank 10: Star Trek Into Darkness
    'tt1408101': 'star-trek-into-darkness'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(PARAMOUNT_ACTION_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG - FIXED
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return PARAMOUNT_ACTION_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR PARAMOUNT ACTION MOVIES - FIXED
export const generateParamountActionMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: PARAMOUNT_ACTION_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ PARAMOUNT ACTION MOVIE NAVIGATION BREADCRUMBS
export const getParamountActionMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Best Action Movies on Paramount+', href: '/collection/best-action-movies-on-paramount-plus' },
        { label: movie.Title, href: `/collection/best-action-movies-on-paramount-plus/${PARAMOUNT_ACTION_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS PARAMOUNT ACTION MOVIE - FIXED
export const getParamountActionMovieNavigation = (currentMovie) => {
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
            slug: PARAMOUNT_ACTION_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: PARAMOUNT_ACTION_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED PARAMOUNT ACTION MOVIES (SAME GENRE/DECADE)
export const getRelatedParamountActionMovies = (currentMovie, limit = 3) => {
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
            slug: PARAMOUNT_ACTION_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ PARAMOUNT ACTION COLLECTION METADATA - FIXED WITH REAL DATA
export const PARAMOUNT_ACTION_COLLECTION_META = {
    title: 'Top 10 High-Octane Action Movies on Paramount+',
    description: 'Ranked list of the best action films streaming on Paramount+. From Mission: Impossible to Top Gun: Maverick, featuring intense aerial combat and adrenaline-fueled stunts.',
    keywords: 'best action movies on paramount plus, paramount action films, tom cruise movies, top gun maverick streaming, high octane movies',
    canonicalUrl: 'https://filmiway.com/collection/best-action-movies-on-paramount-plus',
    ogImage: 'https://filmiway.com/images/paramount-action-movies-collection.jpg',
    totalMovies: COMPLETE_MOVIE_DATABASE.length,
    // ✅ FIXED - CALCULATES AVERAGE ADRENALINE SCORE
    averageAdrenalineScore: Math.round(
        COMPLETE_MOVIE_DATABASE.reduce((sum, movie) => {
            const data = COMPLETE_MOVIE_DATA[movie.tmdbId];
            return sum + (data?.adrenalineScore || 85); 
        }, 0) / COMPLETE_MOVIE_DATABASE.length
    )
};

// ✅ GENERATE PARAMOUNT ACTION MOVIE SITEMAP URLS
export const generateParamountActionMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-action-movies-on-paramount-plus`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/best-action-movies-on-paramount-plus/${PARAMOUNT_ACTION_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE PARAMOUNT ACTION MOVIE SLUG
export const isValidParamountActionMovieSlug = (slug) => {
    return Object.values(PARAMOUNT_ACTION_MOVIE_SLUGS).includes(slug);
};

// ✅ PARAMOUNT ACTION MOVIE SEARCH/FILTER UTILITIES - FIXED
export const searchParamountActionMovies = (query) => {
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
            slug: PARAMOUNT_ACTION_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterParamountActionMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: PARAMOUNT_ACTION_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ FIXED SORTING - NOW USES REAL DATA
export const sortParamountActionMovies = (movies, sortBy) => {
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
        case 'adrenaline': // Replaces classWarfare/psychological
            return sortedMovies.sort((a, b) => {
                const scoreA = COMPLETE_MOVIE_DATA[a.tmdbId]?.adrenalineScore || 0;
                const scoreB = COMPLETE_MOVIE_DATA[b.tmdbId]?.adrenalineScore || 0;
                return scoreB - scoreA;
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET PARAMOUNT ACTION MOVIE COLLECTION STATS
export const getParamountActionCollectionStats = () => {
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
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.adrenalineScore || 85);
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
    PARAMOUNT_ACTION_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateParamountActionMoviePaths,
    getParamountActionMovieBreadcrumbs,
    getParamountActionMovieNavigation,
    getRelatedParamountActionMovies,
    PARAMOUNT_ACTION_COLLECTION_META,
    generateParamountActionMovieSitemapUrls,
    isValidParamountActionMovieSlug,
    searchParamountActionMovies,
    filterParamountActionMoviesByGenre,
    sortParamountActionMovies,
    getParamountActionCollectionStats
};