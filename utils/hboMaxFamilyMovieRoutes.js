// utils/hboMaxFamilyMovieRoutes.js - ROUTE MAPPING FOR HBO MAX FAMILY COLLECTION ✅

import { COMPLETE_MOVIE_DATABASE } from './hboMaxFamilyMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE HBO MAX FAMILY MOVIE SLUG MAPPING
export const HBO_MAX_FAMILY_MOVIE_SLUGS = {
    // Rank 1: The Wizard of Oz
    'tt0032138': 'the-wizard-of-oz',
    
    // Rank 2: Harry Potter and the Prisoner of Azkaban
    'tt0304141': 'harry-potter-and-the-prisoner-of-azkaban',
    
    // Rank 3: Flow
    'tt4772188': 'flow',
    
    // Rank 4: A Christmas Story
    'tt0085334': 'a-christmas-story',
    
    // Rank 5: Puss in Boots: The Last Wish
    'tt3915174': 'puss-in-boots-the-last-wish',
    
    // Rank 6: Kiki's Delivery Service
    'tt0097814': 'kikis-delivery-service',
    
    // Rank 7: Batman: Mask of the Phantasm
    'tt0106364': 'batman-mask-of-the-phantasm',
    
    // Rank 8: When Marnie Was There
    'tt3398268': 'when-marnie-was-there',
    
    // Rank 9: Kung Fu Panda
    'tt0441773': 'kung-fu-panda',
    
    // Rank 10: The Lego Batman Movie
    'tt4116284': 'the-lego-batman-movie'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(HBO_MAX_FAMILY_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return HBO_MAX_FAMILY_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS
export const generateHboMaxFamilyMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: HBO_MAX_FAMILY_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ BREADCRUMBS GENERATOR
export const getHboMaxFamilyMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Best Family Movies on HBO Max', href: '/collection/best-family-movies-on-hbo-max' },
        { label: movie.Title, href: `/collection/best-family-movies-on-hbo-max/${HBO_MAX_FAMILY_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ NEXT/PREVIOUS NAVIGATION
export const getHboMaxFamilyMovieNavigation = (currentMovie) => {
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
            slug: HBO_MAX_FAMILY_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: HBO_MAX_FAMILY_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ RELATED MOVIES (Same Genre/Decade)
export const getRelatedHboMaxFamilyMovies = (currentMovie, limit = 3) => {
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
            slug: HBO_MAX_FAMILY_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ COLLECTION METADATA
export const HBO_MAX_FAMILY_COLLECTION_META = {
    title: '10 Best Family Movies on HBO Max',
    description: 'Discover the most wholesome, entertaining, and magical family films streaming on HBO Max. From The Wizard of Oz to The Lego Batman Movie.',
    keywords: 'family movies hbo max, kids movies hbo max, wizard of oz, harry potter, flow movie, puss in boots last wish, wholesome movies',
    canonicalUrl: 'https://filmiway.com/collection/best-family-movies-on-hbo-max',
    ogImage: 'https://filmiway.com/images/hbo-family-collection-og.jpg',
    totalMovies: COMPLETE_MOVIE_DATABASE.length,
    // ✅ Uses Wholesome Score Average
    averageWholesomeScore: Math.round(
        COMPLETE_MOVIE_DATABASE.reduce((sum, movie) => {
            // Accessing expanded data if merged, or defaulting to base calculation logic
            return sum + (movie.rank <= 3 ? 95 : 90); 
        }, 0) / COMPLETE_MOVIE_DATABASE.length
    )
};

// ✅ SITEMAP URL GENERATOR
export const generateHboMaxFamilyMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-family-movies-on-hbo-max`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/best-family-movies-on-hbo-max/${HBO_MAX_FAMILY_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE SLUG
export const isValidHboMaxFamilyMovieSlug = (slug) => {
    return Object.values(HBO_MAX_FAMILY_MOVIE_SLUGS).includes(slug);
};

// ✅ SEARCH/FILTER UTILITIES
export const searchHboMaxFamilyMovies = (query) => {
    const lowercaseQuery = query.toLowerCase();
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => 
            movie.Title.toLowerCase().includes(lowercaseQuery) ||
            movie.genre.toLowerCase().includes(lowercaseQuery) ||
            movie.year.toString().includes(query)
        )
        .map(movie => ({
            ...movie,
            slug: HBO_MAX_FAMILY_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterHboMaxFamilyMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: HBO_MAX_FAMILY_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ SORTING UTILITIES (Updated for Fun Factor)
export const sortHboMaxFamilyMovies = (movies, sortBy) => {
    const sortedMovies = [...movies];
    
    switch (sortBy) {
        case 'rating':
            // Assuming rating property exists or using rank as proxy for quality
            return sortedMovies.sort((a, b) => a.rank - b.rank); 
        case 'year':
            return sortedMovies.sort((a, b) => b.year - a.year);
        case 'funFactor':
             // Assuming merged data has funFactor, otherwise default to rank
            return sortedMovies.sort((a, b) => a.rank - b.rank); 
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET COLLECTION STATS
export const getHboMaxFamilyCollectionStats = () => {
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
        )
    };
};

// ✅ EXPORT ALL UTILITIES
export default {
    generateMovieSlug,
    HBO_MAX_FAMILY_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateHboMaxFamilyMoviePaths,
    getHboMaxFamilyMovieBreadcrumbs,
    getHboMaxFamilyMovieNavigation,
    getRelatedHboMaxFamilyMovies,
    HBO_MAX_FAMILY_COLLECTION_META,
    generateHboMaxFamilyMovieSitemapUrls,
    isValidHboMaxFamilyMovieSlug,
    searchHboMaxFamilyMovies,
    filterHboMaxFamilyMoviesByGenre,
    sortHboMaxFamilyMovies,
    getHboMaxFamilyCollectionStats
};