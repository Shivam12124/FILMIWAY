// utils/darkComedyMovieRoutes.js - COMPLETELY FIXED SSG ROUTE MAPPING FOR DARK COMEDY COLLECTION

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './darkComedyMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE DARK COMEDY MOVIE SLUG MAPPING
export const DARK_COMEDY_MOVIE_SLUGS = {
    // Rank 1: Dr. Strangelove
    'tt0057012': 'dr-strangelove',
    
    // Rank 2: Network
    'tt0074958': 'network',
    
    // Rank 3: The Banshees of Inisherin
    'tt11813216': 'the-banshees-of-inisherin',
    
    // Rank 4: In Bruges
    'tt0780536': 'in-bruges',
    
    // Rank 5: Withnail and I
    'tt0094336': 'withnail-and-i',
    
    // Rank 6: The Death of Stalin
    'tt4686844': 'the-death-of-stalin',
    
    // Rank 7: What We Do in the Shadows
    'tt3416742': 'what-we-do-in-the-shadows',
    
    // Rank 8: Adaptation.
    'tt0268126': 'adaptation',
    
    // Rank 9: Election
    'tt0126886': 'election',
    
    // Rank 10: Burn After Reading
    'tt0887883': 'burn-after-reading'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(DARK_COMEDY_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG - FIXED
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return DARK_COMEDY_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR DARK COMEDY MOVIES - FIXED
export const generateDarkComedyMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: DARK_COMEDY_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ DARK COMEDY MOVIE NAVIGATION BREADCRUMBS
export const getDarkComedyMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: '10 Best Dark Comedy Movies', href: '/collection/best-dark-comedy-movies' },
        { label: movie.Title, href: `/collection/best-dark-comedy-movies/${DARK_COMEDY_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS DARK COMEDY MOVIE - FIXED
export const getDarkComedyMovieNavigation = (currentMovie) => {
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
            slug: DARK_COMEDY_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: DARK_COMEDY_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED DARK COMEDY MOVIES (SAME GENRE/DECADE)
export const getRelatedDarkComedyMovies = (currentMovie, limit = 3) => {
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
            slug: DARK_COMEDY_MOVIE_SLUGS[movie.imdbID]
        }));
};

// 👁️ DARK COMEDY COLLECTION METADATA (FINAL – CTR + SEO SAFE)
export const DARK_COMEDY_COLLECTION_META = {
    title: "10 Best Dark Comedy Movies",
    description: "Explore the bleakest, most cynical, and absurdly hilarious dark comedies ever made, featuring sharp satire and existential dread.",
    slug: "best-dark-comedy-movies"
};

// ✅ GENERATE DARK COMEDY MOVIE SITEMAP URLS
export const generateDarkComedyMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-dark-comedy-movies`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/best-dark-comedy-movies/${DARK_COMEDY_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'weekly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE DARK COMEDY MOVIE SLUG
export const isValidDarkComedyMovieSlug = (slug) => {
    return Object.values(DARK_COMEDY_MOVIE_SLUGS).includes(slug);
};

// ✅ DARK COMEDY MOVIE SEARCH/FILTER UTILITIES - FIXED
export const searchDarkComedyMovies = (query) => {
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
            slug: DARK_COMEDY_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterDarkComedyMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: DARK_COMEDY_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ FIXED SORTING - NOW USES REAL METRICS FROM DATA FILE
export const sortDarkComedyMovies = (movies, sortBy) => {
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
        case 'cynicismLevel': // Replaces anarchyLevel/paranoiaLevel
            return sortedMovies.sort((a, b) => {
                const cynicismA = COMPLETE_MOVIE_DATA[a.tmdbId]?.cynicismLevel || 0;
                const cynicismB = COMPLETE_MOVIE_DATA[b.tmdbId]?.cynicismLevel || 0;
                return cynicismB - cynicismA;
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET DARK COMEDY COLLECTION STATS
export const getDarkComedyCollectionStats = () => {
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
        // ✅ ADDED - AVERAGE CYNICISM LEVEL (Replaces Anarchy Level)
        averageCynicismLevel: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.cynicismLevel || 0);
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
    DARK_COMEDY_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateDarkComedyMoviePaths,
    getDarkComedyMovieBreadcrumbs,
    getDarkComedyMovieNavigation,
    getRelatedDarkComedyMovies,
    DARK_COMEDY_COLLECTION_META,
    generateDarkComedyMovieSitemapUrls,
    isValidDarkComedyMovieSlug,
    searchDarkComedyMovies,
    filterDarkComedyMoviesByGenre,
    sortDarkComedyMovies,
    getDarkComedyCollectionStats
};