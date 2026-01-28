// utils/huluFamilyMovieRoutes.js - SSG ROUTE MAPPING FOR HULU FAMILY COLLECTION

import { COMPLETE_MOVIE_DATABASE } from './huluFamilyMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE HULU FAMILY MOVIE SLUG MAPPING
export const HULU_FAMILY_MOVIE_SLUGS = {
    // Rank 1: Robot Dreams
    'tt13429870': 'robot-dreams',
    
    // Rank 2: Night at the Museum
    'tt0477347': 'night-at-the-museum',
    
    // Rank 3: Sonic the Hedgehog 2
    'tt12412888': 'sonic-the-hedgehog-2',
    
    // Rank 4: Steven Universe: The Movie
    'tt10515852': 'steven-universe-the-movie',
    
    // Rank 5: Hotel Transylvania
    'tt0837562': 'hotel-transylvania',
    
    // Rank 6: Hotel Transylvania 2
    'tt2510894': 'hotel-transylvania-2',
    
    // Rank 7: The Amazing Maurice
    'tt10473036': 'the-amazing-maurice',
    
    // Rank 8: My Friend the Penguin
    'tt27553096': 'my-friend-the-penguin',
    
    // Rank 9: Fireheart
    'tt10696784': 'fireheart',
    
    // Rank 10: Oz the Great and Powerful
    'tt1622029': 'oz-the-great-and-powerful'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(HULU_FAMILY_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return HULU_FAMILY_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR HULU FAMILY MOVIES
export const generateHuluFamilyMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: HULU_FAMILY_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ HULU FAMILY MOVIE NAVIGATION BREADCRUMBS
export const getHuluFamilyMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Best Family Movies on Hulu', href: '/collection/best-family-movies-on-hulu' },
        { label: movie.Title, href: `/collection/best-family-movies-on-hulu/${HULU_FAMILY_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS MOVIE
export const getHuluFamilyMovieNavigation = (currentMovie) => {
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
            slug: HULU_FAMILY_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: HULU_FAMILY_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED MOVIES (SAME GENRE/DECADE)
export const getRelatedHuluFamilyMovies = (currentMovie, limit = 3) => {
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
            slug: HULU_FAMILY_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ COLLECTION METADATA
export const HULU_FAMILY_COLLECTION_META = {
    title: '10 Best Family Movies on Hulu',
    description: 'The top 10 family movies streaming on Hulu right now. From Robot Dreams to Night at the Museum—ranked by wholesomeness and entertainment value.',
    keywords: 'best family movies on hulu, hulu family films, robot dreams, night at the museum, sonic 2, kids movies hulu, wholesome movies',
    canonicalUrl: 'https://filmiway.com/collection/best-family-movies-on-hulu',
    ogImage: 'https://filmiway.com/images/hulu-family-collection-og.jpg',
    totalMovies: COMPLETE_MOVIE_DATABASE.length,
    // ✅ USES REAL WHOLESOME SCORE DATA
    averageWholesomeScore: Math.round(
        COMPLETE_MOVIE_DATABASE.reduce((sum, movie) => {
            return sum + (movie.wholesomeScore || 90); 
        }, 0) / COMPLETE_MOVIE_DATABASE.length
    )
};

// ✅ GENERATE SITEMAP URLS
export const generateHuluFamilyMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-family-movies-on-hulu`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/best-family-movies-on-hulu/${HULU_FAMILY_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE SLUG
export const isValidHuluFamilyMovieSlug = (slug) => {
    return Object.values(HULU_FAMILY_MOVIE_SLUGS).includes(slug);
};

// ✅ SEARCH/FILTER UTILITIES
export const searchHuluFamilyMovies = (query) => {
    const lowercaseQuery = query.toLowerCase();
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => 
            movie.Title.toLowerCase().includes(lowercaseQuery) ||
            movie.genre.toLowerCase().includes(lowercaseQuery) ||
            movie.year.toString().includes(query)
        )
        .map(movie => ({
            ...movie,
            slug: HULU_FAMILY_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterHuluFamilyMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: HULU_FAMILY_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ SORTING
export const sortHuluFamilyMovies = (movies, sortBy) => {
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
export const getHuluFamilyCollectionStats = () => {
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
    HULU_FAMILY_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateHuluFamilyMoviePaths,
    getHuluFamilyMovieBreadcrumbs,
    getHuluFamilyMovieNavigation,
    getRelatedHuluFamilyMovies,
    HULU_FAMILY_COLLECTION_META,
    generateHuluFamilyMovieSitemapUrls,
    isValidHuluFamilyMovieSlug,
    searchHuluFamilyMovies,
    filterHuluFamilyMoviesByGenre,
    sortHuluFamilyMovies,
    getHuluFamilyCollectionStats
};