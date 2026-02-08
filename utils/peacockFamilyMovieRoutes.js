// utils/peacockFamilyMovieRoutes.js - SSG ROUTE MAPPING FOR PEACOCK FAMILY COLLECTION

import { COMPLETE_MOVIE_DATABASE } from './peacockFamilyMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE PEACOCK FAMILY MOVIE SLUG MAPPING
export const PEACOCK_FAMILY_MOVIE_SLUGS = {
    // Rank 1: How to Train Your Dragon
    'tt0892791': 'how-to-train-your-dragon',
    
    // Rank 2: Harry Potter and the Prisoner of Azkaban
    'tt0304141': 'harry-potter-and-the-prisoner-of-azkaban',
    
    // Rank 3: Puss in Boots: The Last Wish
    'tt3915174': 'puss-in-boots-the-last-wish',
    
    // Rank 4: Shrek
    'tt0126029': 'shrek',
    
    // Rank 5: How to Train Your Dragon 2
    'tt1646971': 'how-to-train-your-dragon-2',
    
    // Rank 6: Despicable Me
    'tt1323594': 'despicable-me',
    
    // Rank 7: Harry Potter and the Sorcerer's Stone
    'tt0241527': 'harry-potter-and-the-sorcerers-stone',
    
    // Rank 8: Abominable
    'tt6324278': 'abominable',
    
    // Rank 9: How to Train Your Dragon: The Hidden World
    'tt2386490': 'how-to-train-your-dragon-the-hidden-world',
    
    // Rank 10: Shrek 2
    'tt0298148': 'shrek-2'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(PEACOCK_FAMILY_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return PEACOCK_FAMILY_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR PEACOCK FAMILY MOVIES
export const generatePeacockFamilyMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: PEACOCK_FAMILY_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ PEACOCK FAMILY MOVIE NAVIGATION BREADCRUMBS
export const generatePeacockFamilyBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Best Family Movies on Peacock', href: '/collection/best-family-movies-on-peacock' },
        { label: movie.Title, href: `/collection/best-family-movies-on-peacock/${PEACOCK_FAMILY_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS MOVIE
export const getPeacockFamilyMovieNavigation = (currentMovie) => {
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
            slug: PEACOCK_FAMILY_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: PEACOCK_FAMILY_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED MOVIES (SAME GENRE/DECADE)
export const getRelatedPeacockFamilyMovies = (currentMovie, limit = 3) => {
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
            slug: PEACOCK_FAMILY_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ COLLECTION METADATA
export const PEACOCK_FAMILY_COLLECTION_META = {
    title: '10 Best Family Movies on Peacock (Ranked 2026)',
    description: 'The top 10 family movies streaming on Peacock right now. From How to Train Your Dragon to Harry Potter—ranked by wholesomeness and entertainment value.',
    keywords: 'best family movies on peacock, peacock family films, how to train your dragon, harry potter peacock, shrek, kids movies peacock, wholesome movies',
    canonicalUrl: 'https://filmiway.com/collection/best-family-movies-on-peacock',
    ogImage: 'https://filmiway.com/images/peacock-family-collection-og.jpg',
    totalMovies: COMPLETE_MOVIE_DATABASE.length,
    // ✅ USES REAL WHOLESOME SCORE DATA
    averageWholesomeScore: Math.round(
        COMPLETE_MOVIE_DATABASE.reduce((sum, movie) => {
            return sum + (movie.wholesomeScore || 90); 
        }, 0) / COMPLETE_MOVIE_DATABASE.length
    )
};

// ✅ GENERATE SITEMAP URLS
export const generatePeacockFamilySitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-family-movies-on-peacock`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/best-family-movies-on-peacock/${PEACOCK_FAMILY_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE SLUG
export const isValidPeacockFamilyMovieSlug = (slug) => {
    return Object.values(PEACOCK_FAMILY_MOVIE_SLUGS).includes(slug);
};

// ✅ SEARCH/FILTER UTILITIES
export const searchPeacockFamilyMovies = (query) => {
    const lowercaseQuery = query.toLowerCase();
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => 
            movie.Title.toLowerCase().includes(lowercaseQuery) ||
            movie.genre.toLowerCase().includes(lowercaseQuery) ||
            movie.year.toString().includes(query)
        )
        .map(movie => ({
            ...movie,
            slug: PEACOCK_FAMILY_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterPeacockFamilyMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: PEACOCK_FAMILY_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ SORTING
export const sortPeacockFamilyMovies = (movies, sortBy) => {
    const sortedMovies = [...movies];
    
    switch (sortBy) {
        case 'rating':
            return sortedMovies.sort((a, b) => b.rank - a.rank); 
        case 'year':
            return sortedMovies.sort((a, b) => b.year - a.year);
        case 'wholesomeScore':
            return sortedMovies.sort((a, b) => (b.wholesomeScore || 0) - (a.wholesomeScore || 0)); 
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET COLLECTION STATS
export const getPeacockFamilyCollectionStats = () => {
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
        averageWholesomeScore: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => sum + (m.wholesomeScore || 90), 0) / COMPLETE_MOVIE_DATABASE.length
        )
    };
};

// ✅ EXPORT ALL UTILITIES
export default {
    generateMovieSlug,
    PEACOCK_FAMILY_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generatePeacockFamilyMoviePaths,
    generatePeacockFamilyBreadcrumbs,
    getPeacockFamilyMovieNavigation,
    getRelatedPeacockFamilyMovies,
    PEACOCK_FAMILY_COLLECTION_META,
    generatePeacockFamilySitemapUrls,
    isValidPeacockFamilyMovieSlug,
    searchPeacockFamilyMovies,
    filterPeacockFamilyMoviesByGenre,
    sortPeacockFamilyMovies,
    getPeacockFamilyCollectionStats
};