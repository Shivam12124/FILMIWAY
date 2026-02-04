// utils/paramountThrillerMovieRoutes.js - SSG ROUTE MAPPING FOR PARAMOUNT+ THRILLER COLLECTION

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './paramountThrillerMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens
        .trim();
};

// ✅ COMPLETE PARAMOUNT+ THRILLER MOVIE SLUG MAPPING
// Using TMDB IDs to match the Data File structure
export const PARAMOUNT_THRILLER_MOVIE_SLUGS = {
    // Rank 1: No Country for Old Men
    '6977': 'no-country-for-old-men',
    
    // Rank 2: Zodiac
    '1949': 'zodiac',
    
    // Rank 3: 10 Cloverfield Lane
    '333371': '10-cloverfield-lane',
    
    // Rank 4: Strange Darling
    '1029281': 'strange-darling',
    
    // Rank 5: Collateral
    '1538': 'collateral',
    
    // Rank 6: A Quiet Place
    '447332': 'a-quiet-place',
    
    // Rank 7: Gone Baby Gone
    '4771': 'gone-baby-gone',
    
    // Rank 8: The Autopsy of Jane Doe
    '397243': 'the-autopsy-of-jane-doe',
    
    // Rank 9: Jack Reacher
    '75780': 'jack-reacher',
    
    // Rank 10: The Machinist
    '4553': 'the-machinist'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO TMDB ID)
export const SLUG_TO_TMDB = Object.fromEntries(
    Object.entries(PARAMOUNT_THRILLER_MOVIE_SLUGS).map(([tmdbId, slug]) => [slug, parseInt(tmdbId)])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const tmdbId = SLUG_TO_TMDB[slug];
    if (!tmdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.tmdbId === tmdbId);
};

// ✅ GET MOVIE SLUG BY TMDB ID
export const getMovieSlug = (tmdbId) => {
    return PARAMOUNT_THRILLER_MOVIE_SLUGS[tmdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR PARAMOUNT+ THRILLER MOVIES
export const generateParamountThrillerMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: PARAMOUNT_THRILLER_MOVIE_SLUGS[movie.tmdbId]
        }
    }));
};

// ✅ BREADCRUMBS
export const getParamountThrillerMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Best Thriller Movies on Paramount+', href: '/collection/best-thriller-movies-on-paramount-plus' },
        { label: movie.Title, href: `/collection/best-thriller-movies-on-paramount-plus/${PARAMOUNT_THRILLER_MOVIE_SLUGS[movie.tmdbId]}` }
    ];
};

// ✅ NAVIGATION (Next/Prev)
export const getParamountThrillerMovieNavigation = (currentMovie) => {
    const currentIndex = COMPLETE_MOVIE_DATABASE.findIndex(m => m.tmdbId === currentMovie.tmdbId);
    
    const previousMovie = currentIndex > 0 
        ? COMPLETE_MOVIE_DATABASE[currentIndex - 1]
        : null;
        
    const nextMovie = currentIndex < COMPLETE_MOVIE_DATABASE.length - 1
        ? COMPLETE_MOVIE_DATABASE[currentIndex + 1]
        : null;
    
    return {
        previous: previousMovie ? {
            ...previousMovie,
            slug: PARAMOUNT_THRILLER_MOVIE_SLUGS[previousMovie.tmdbId]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: PARAMOUNT_THRILLER_MOVIE_SLUGS[nextMovie.tmdbId]
        } : null
    };
};

// ✅ RELATED MOVIES (Same Genre/Decade)
export const getRelatedParamountThrillerMovies = (currentMovie, limit = 3) => {
    const currentDecade = Math.floor(currentMovie.year / 10) * 10;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => 
            movie.tmdbId !== currentMovie.tmdbId && (
                movie.genre === currentMovie.genre || 
                Math.floor(movie.year / 10) * 10 === currentDecade
            )
        )
        .slice(0, limit)
        .map(movie => ({
            ...movie,
            slug: PARAMOUNT_THRILLER_MOVIE_SLUGS[movie.tmdbId]
        }));
};

// ✅ COLLECTION METADATA
export const PARAMOUNT_THRILLER_COLLECTION_META = {
    title: '10 Best Thriller Movies on Paramount+ (2026)',
    description: 'Expert-ranked list of the most intense and suspenseful thrillers on Paramount+. From No Country for Old Men to Strange Darling.',
    keywords: 'best thriller movies on paramount plus, paramount plus thrillers, suspense movies, strange darling, no country for old men, zodiac, 10 cloverfield lane',
    canonicalUrl: 'https://filmiway.com/collection/best-thriller-movies-on-paramount-plus',
    ogImage: 'https://filmiway.com/images/paramount-thriller-movies-collection.jpg',
    totalMovies: COMPLETE_MOVIE_DATABASE.length,
    // ✅ USES REAL SUSPENSE INTENSITY DATA
    averageSuspenseIntensity: Math.round(
        COMPLETE_MOVIE_DATABASE.reduce((sum, movie) => {
            const data = COMPLETE_MOVIE_DATA[movie.tmdbId];
            return sum + (data?.suspenseIntensity || 85); 
        }, 0) / COMPLETE_MOVIE_DATABASE.length
    )
};

// ✅ SITEMAP URLS
export const generateParamountThrillerMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-thriller-movies-on-paramount-plus`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/best-thriller-movies-on-paramount-plus/${PARAMOUNT_THRILLER_MOVIE_SLUGS[movie.tmdbId]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ SEARCH & FILTER
export const searchParamountThrillerMovies = (query) => {
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
            slug: PARAMOUNT_THRILLER_MOVIE_SLUGS[movie.tmdbId]
        }));
};

export const filterParamountThrillerMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: PARAMOUNT_THRILLER_MOVIE_SLUGS[movie.tmdbId]
        }));
};

// ✅ SORTING (By Suspense Intensity)
export const sortParamountThrillerMovies = (movies, sortBy) => {
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
        case 'suspense': // Sort key for Thrillers
            return sortedMovies.sort((a, b) => {
                const scoreA = COMPLETE_MOVIE_DATA[a.tmdbId]?.suspenseIntensity || 0;
                const scoreB = COMPLETE_MOVIE_DATA[b.tmdbId]?.suspenseIntensity || 0;
                return scoreB - scoreA;
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ STATS CALCULATOR
export const getParamountThrillerCollectionStats = () => {
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
        averageSuspenseIntensity: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.suspenseIntensity || 85);
            }, 0) / COMPLETE_MOVIE_DATABASE.length
        ),
        averageRating: (
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.rating || 7.5);
            }, 0) / COMPLETE_MOVIE_DATABASE.length
        ).toFixed(1)
    };
};

export default {
    generateMovieSlug,
    PARAMOUNT_THRILLER_MOVIE_SLUGS,
    SLUG_TO_TMDB,
    getMovieBySlug,
    getMovieSlug,
    generateParamountThrillerMoviePaths,
    getParamountThrillerMovieBreadcrumbs,
    getParamountThrillerMovieNavigation,
    getRelatedParamountThrillerMovies,
    PARAMOUNT_THRILLER_COLLECTION_META,
    generateParamountThrillerMovieSitemapUrls,
    searchParamountThrillerMovies,
    filterParamountThrillerMoviesByGenre,
    sortParamountThrillerMovies,
    getParamountThrillerCollectionStats
};