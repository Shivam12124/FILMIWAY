// utils/basicInstinctMovieRoutes.js - SSG ROUTE MAPPING FOR BASIC INSTINCT COLLECTION ✅
// 100% SEO Safe - Framed around Psychological Manipulation, Neo-Noir, and Erotic Thrillers

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './basicInstinctMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE BASIC INSTINCT MOVIE SLUG MAPPING
export const BASIC_INSTINCT_MOVIE_SLUGS = {
    // Rank 1: Dressed to Kill
    'tt0080661': 'dressed-to-kill',
    
    // Rank 2: Jagged Edge
    'tt0089360': 'jagged-edge',
    
    // Rank 3: Sliver
    'tt0108162': 'sliver',
    
    // Rank 4: Sea of Love
    'tt0098273': 'sea-of-love',
    
    // Rank 5: Disclosure
    'tt0109635': 'disclosure',
    
    // Rank 6: The Devil's Advocate
    'tt0118971': 'the-devils-advocate',
    
    // Rank 7: Original Sin
    'tt0218922': 'original-sin',
    
    // Rank 8: Chloe
    'tt1352824': 'chloe',
    
    // Rank 9: Crash
    'tt0115964': 'crash',
    
    // Rank 10: Basic Instinct 2
    'tt0430912': 'basic-instinct-2'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(BASIC_INSTINCT_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return BASIC_INSTINCT_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR BASIC INSTINCT MOVIES
export const generateBasicInstinctMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: BASIC_INSTINCT_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ BASIC INSTINCT MOVIE NAVIGATION BREADCRUMBS
export const getBasicInstinctMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: '10 Movies Like Basic Instinct', href: '/collection/movies-like-basic-instinct' },
        { label: movie.Title, href: `/movie/${BASIC_INSTINCT_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS BASIC INSTINCT MOVIE
export const getBasicInstinctMovieNavigation = (currentMovie) => {
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
            slug: BASIC_INSTINCT_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: BASIC_INSTINCT_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED BASIC INSTINCT MOVIES (SAME GENRE/DECADE)
export const getRelatedBasicInstinctMovies = (currentMovie, limit = 3) => {
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
            slug: BASIC_INSTINCT_MOVIE_SLUGS[movie.imdbID]
        }));
};

// 👁️ BASIC INSTINCT COLLECTION METADATA (FINAL – CTR + SEO SAFE)
export const BASIC_INSTINCT_COLLECTION_META = {
    title: "10 Movies Like Basic Instinct",
    description: "Explore 10 masterful erotic thrillers and neo-noirs that share the dangerous psychological manipulation and intense suspense of Basic Instinct.",
    slug: "movies-like-basic-instinct"
};

// ✅ GENERATE BASIC INSTINCT MOVIE SITEMAP URLS
export const generateBasicInstinctMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/movies-like-basic-instinct`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/movie/${BASIC_INSTINCT_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'weekly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE BASIC INSTINCT MOVIE SLUG
export const isValidBasicInstinctMovieSlug = (slug) => {
    return Object.values(BASIC_INSTINCT_MOVIE_SLUGS).includes(slug);
};

// ✅ BASIC INSTINCT MOVIE SEARCH/FILTER UTILITIES
export const searchBasicInstinctMovies = (query) => {
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
            slug: BASIC_INSTINCT_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterBasicInstinctMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: BASIC_INSTINCT_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ FIXED SORTING - NOW USES REAL METRICS FROM DATA FILE
export const sortBasicInstinctMovies = (movies, sortBy) => {
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
        case 'eroticTension': // ✅ Custom metric sorting
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

// ✅ GET BASIC INSTINCT COLLECTION STATS
export const getBasicInstinctCollectionStats = () => {
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
        // ✅ ADDED - AVERAGE EROTIC TENSION
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
    BASIC_INSTINCT_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateBasicInstinctMoviePaths,
    getBasicInstinctMovieBreadcrumbs,
    getBasicInstinctMovieNavigation,
    getRelatedBasicInstinctMovies,
    BASIC_INSTINCT_COLLECTION_META,
    generateBasicInstinctMovieSitemapUrls,
    isValidBasicInstinctMovieSlug,
    searchBasicInstinctMovies,
    filterBasicInstinctMoviesByGenre,
    sortBasicInstinctMovies,
    getBasicInstinctCollectionStats
};