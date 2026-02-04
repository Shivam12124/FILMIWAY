// utils/paramountFamilyMovieRoutes.js - SSG ROUTE MAPPING FOR PARAMOUNT+ FAMILY COLLECTION

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './paramountFamilyMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens
        .trim();
};

// ✅ COMPLETE PARAMOUNT+ FAMILY MOVIE SLUG MAPPING
// Using TMDB IDs to match the Data File structure
export const PARAMOUNT_FAMILY_MOVIE_SLUGS = {
    // Rank 1: Rango
    '44896': 'rango',
    
    // Rank 2: TMNT: Mutant Mayhem
    '614930': 'tmnt-mutant-mayhem',
    
    // Rank 3: The SpongeBob SquarePants Movie
    '11836': 'the-spongebob-squarepants-movie',
    
    // Rank 4: Sonic the Hedgehog 3
    '939243': 'sonic-the-hedgehog-3',
    
    // Rank 5: Dora and the Lost City of Gold
    '499701': 'dora-and-the-lost-city-of-gold',
    
    // Rank 6: Sonic the Hedgehog 2
    '675353': 'sonic-the-hedgehog-2',
    
    // Rank 7: Hey Arnold! The Jungle Movie
    '439058': 'hey-arnold-the-jungle-movie',
    
    // Rank 8: Sonic the Hedgehog
    '454626': 'sonic-the-hedgehog',
    
    // Rank 9: PAW Patrol: The Movie
    '675445': 'paw-patrol-the-movie',
    
    // Rank 10: PAW Patrol: The Mighty Movie
    '893723': 'paw-patrol-the-mighty-movie'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO TMDB ID)
export const SLUG_TO_TMDB = Object.fromEntries(
    Object.entries(PARAMOUNT_FAMILY_MOVIE_SLUGS).map(([tmdbId, slug]) => [slug, parseInt(tmdbId)])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const tmdbId = SLUG_TO_TMDB[slug];
    if (!tmdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.tmdbId === tmdbId);
};

// ✅ GET MOVIE SLUG BY TMDB ID
export const getMovieSlug = (tmdbId) => {
    return PARAMOUNT_FAMILY_MOVIE_SLUGS[tmdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS
export const generateParamountFamilyMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: PARAMOUNT_FAMILY_MOVIE_SLUGS[movie.tmdbId]
        }
    }));
};

// ✅ BREADCRUMBS
export const getParamountFamilyMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Best Family Movies on Paramount+', href: '/collection/best-family-movies-on-paramount-plus' },
        { label: movie.Title, href: `/collection/best-family-movies-on-paramount-plus/${PARAMOUNT_FAMILY_MOVIE_SLUGS[movie.tmdbId]}` }
    ];
};

// ✅ NAVIGATION (Next/Prev)
export const getParamountFamilyMovieNavigation = (currentMovie) => {
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
            slug: PARAMOUNT_FAMILY_MOVIE_SLUGS[previousMovie.tmdbId]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: PARAMOUNT_FAMILY_MOVIE_SLUGS[nextMovie.tmdbId]
        } : null
    };
};

// ✅ RELATED MOVIES (Same Genre/Decade)
export const getRelatedParamountFamilyMovies = (currentMovie, limit = 3) => {
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
            slug: PARAMOUNT_FAMILY_MOVIE_SLUGS[movie.tmdbId]
        }));
};

// ✅ COLLECTION METADATA
export const PARAMOUNT_FAMILY_COLLECTION_META = {
    title: '10 Best Family Movies on Paramount+ (2026)',
    description: 'The top 10 family movies streaming on Paramount+ right now. From Rango to Sonic the Hedgehog 3—ranked by fun factor and wholesomeness.',
    keywords: 'best family movies on paramount plus, paramount plus kids movies, sonic 3, paw patrol movie, rango, tmnt mutant mayhem, wholesome movies',
    canonicalUrl: 'https://filmiway.com/collection/best-family-movies-on-paramount-plus',
    ogImage: 'https://filmiway.com/images/paramount-family-collection-og.jpg',
    totalMovies: COMPLETE_MOVIE_DATABASE.length,
    // ✅ USES REAL FUN FACTOR DATA
    averageFunFactor: Math.round(
        COMPLETE_MOVIE_DATABASE.reduce((sum, movie) => {
            const data = COMPLETE_MOVIE_DATA[movie.tmdbId];
            return sum + (data?.funFactor || 85); 
        }, 0) / COMPLETE_MOVIE_DATABASE.length
    )
};

// ✅ SITEMAP URLS
export const generateParamountFamilyMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-family-movies-on-paramount-plus`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/best-family-movies-on-paramount-plus/${PARAMOUNT_FAMILY_MOVIE_SLUGS[movie.tmdbId]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ SEARCH & FILTER
export const searchParamountFamilyMovies = (query) => {
    const lowercaseQuery = query.toLowerCase();
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => 
            movie.Title.toLowerCase().includes(lowercaseQuery) ||
            movie.genre.toLowerCase().includes(lowercaseQuery) ||
            movie.year.toString().includes(query)
        )
        .map(movie => ({
            ...movie,
            slug: PARAMOUNT_FAMILY_MOVIE_SLUGS[movie.tmdbId]
        }));
};

export const filterParamountFamilyMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: PARAMOUNT_FAMILY_MOVIE_SLUGS[movie.tmdbId]
        }));
};

// ✅ SORTING
export const sortParamountFamilyMovies = (movies, sortBy) => {
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
        case 'funFactor': // Sort by Fun Factor
            return sortedMovies.sort((a, b) => {
                const scoreA = COMPLETE_MOVIE_DATA[a.tmdbId]?.funFactor || 0;
                const scoreB = COMPLETE_MOVIE_DATA[b.tmdbId]?.funFactor || 0;
                return scoreB - scoreA;
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ STATS CALCULATOR
export const getParamountFamilyCollectionStats = () => {
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
        averageFunFactor: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.funFactor || 85);
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
    PARAMOUNT_FAMILY_MOVIE_SLUGS,
    SLUG_TO_TMDB,
    getMovieBySlug,
    getMovieSlug,
    generateParamountFamilyMoviePaths,
    getParamountFamilyMovieBreadcrumbs,
    getParamountFamilyMovieNavigation,
    getRelatedParamountFamilyMovies,
    PARAMOUNT_FAMILY_COLLECTION_META,
    generateParamountFamilyMovieSitemapUrls,
    searchParamountFamilyMovies,
    filterParamountFamilyMoviesByGenre,
    sortParamountFamilyMovies,
    getParamountFamilyCollectionStats
};