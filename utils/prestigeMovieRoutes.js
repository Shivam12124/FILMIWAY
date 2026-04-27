// utils/prestigeMovieRoutes.js - SSG ROUTE MAPPING FOR PRESTIGE COLLECTION ✅

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './prestigeMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE PRESTIGE MOVIE SLUG MAPPING (Based on the 10 movies in prestigeMovieData)
export const PRESTIGE_MOVIE_SLUGS = {
    // Rank 1: The Illusionist
    'tt0443543': 'the-illusionist',
    
    // Rank 2: Memento
    'tt0209144': 'memento',
    
    // Rank 3: Shutter Island
    'tt1130884': 'shutter-island',
    
    // Rank 4: The Game
    'tt0119174': 'the-game',
    
    // Rank 5: The Usual Suspects
    'tt0114814': 'the-usual-suspects',
    
    // Rank 6: Fight Club
    'tt0137523': 'fight-club',
    
    // Rank 7: The Sixth Sense
    'tt0167404': 'the-sixth-sense',
    
    // Rank 8: The Machinist
    'tt0361862': 'the-machinist',
    
    // Rank 9: Primal Fear
    'tt0117381': 'primal-fear',
    
    // Rank 10: Now You See Me
    'tt1670345': 'now-you-see-me'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(PRESTIGE_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return PRESTIGE_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR PRESTIGE MOVIES
export const generatePrestigeMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: PRESTIGE_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ PRESTIGE MOVIE NAVIGATION BREADCRUMBS
export const getPrestigeMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Movies Like The Prestige', href: '/collection/movies-like-the-prestige' },
        { label: movie.Title, href: `/movie/${PRESTIGE_MOVIE_SLUGS[movie.imdbID]}` } // Adjust path to match your folder structure
    ];
};

// ✅ GET NEXT/PREVIOUS PRESTIGE MOVIE
export const getPrestigeMovieNavigation = (currentMovie) => {
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
            slug: PRESTIGE_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: PRESTIGE_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED PRESTIGE MOVIES (SAME GENRE/DECADE)
export const getRelatedPrestigeMovies = (currentMovie, limit = 3) => {
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
            slug: PRESTIGE_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ GENERATE PRESTIGE MOVIE SITEMAP URLS
export const generatePrestigeMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/movies-like-the-prestige`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/movie/${PRESTIGE_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'weekly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE PRESTIGE MOVIE SLUG
export const isValidPrestigeMovieSlug = (slug) => {
    return Object.values(PRESTIGE_MOVIE_SLUGS).includes(slug);
};

// ✅ PRESTIGE MOVIE SEARCH/FILTER UTILITIES
export const searchPrestigeMovies = (query) => {
    const lowercaseQuery = query.toLowerCase();
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => 
            movie.Title.toLowerCase().includes(lowercaseQuery) ||
            movie.genre.toLowerCase().includes(lowercaseQuery) ||
            movie.year.toString().includes(query)
        )
        .map(movie => ({
            ...movie,
            slug: PRESTIGE_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterPrestigeMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: PRESTIGE_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ FIXED SORTING - NOW USES REAL DATA FROM COMPLETE_MOVIE_DATA
export const sortPrestigeMovies = (movies, sortBy) => {
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
        case 'deception': // ✅ Custom metric for The Prestige collection
            return sortedMovies.sort((a, b) => {
                const scoreA = COMPLETE_MOVIE_DATA[a.tmdbId]?.deceptionScore || 0;
                const scoreB = COMPLETE_MOVIE_DATA[b.tmdbId]?.deceptionScore || 0;
                return scoreB - scoreA; 
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET PRESTIGE MOVIE COLLECTION STATS
export const getPrestigeCollectionStats = () => {
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
        // ✅ ADDED - AVERAGE DECEPTION SCORE
        averageDeceptionScore: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                const score = COMPLETE_MOVIE_DATA[m.tmdbId]?.deceptionScore || 85;
                return sum + score;
            }, 0) / COMPLETE_MOVIE_DATABASE.length
        ),
        // ✅ ADDED - AVERAGE RATING
        averageRating: (
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                const rating = COMPLETE_MOVIE_DATA[m.tmdbId]?.rating || 0;
                return sum + rating;
            }, 0) / COMPLETE_MOVIE_DATABASE.length
        ).toFixed(1)
    };
};

// ✅ EXPORT ALL UTILITIES
export default {
    generateMovieSlug,
    PRESTIGE_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generatePrestigeMoviePaths,
    getPrestigeMovieBreadcrumbs,
    getPrestigeMovieNavigation,
    getRelatedPrestigeMovies,
    generatePrestigeMovieSitemapUrls,
    isValidPrestigeMovieSlug,
    searchPrestigeMovies,
    filterPrestigeMoviesByGenre,
    sortPrestigeMovies,
    getPrestigeCollectionStats
};