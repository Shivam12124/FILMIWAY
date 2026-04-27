// utils/neoNoirMovieRoutes.js - SSG ROUTE MAPPING FOR NEO-NOIR COLLECTION ✅

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './neoNoirMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE NEO-NOIR MOVIE SLUG MAPPING 
export const NEO_NOIR_MOVIE_SLUGS = {
    // Rank 1: Chinatown
    'tt0071315': 'chinatown',
    
    // Rank 2: Le Samouraï
    'tt0062229': 'le-samourai',
    
    // Rank 3: Drive
    'tt0780504': 'drive',
    
    // Rank 4: Sin City
    'tt0401792': 'sin-city',
    
    // Rank 5: Good Time
    'tt4846232': 'good-time',
    
    // Rank 6: Decision to Leave
    'tt12477480': 'decision-to-leave',
    
    // Rank 7: Manhunter
    'tt0091474': 'manhunter',
    
    // Rank 8: To Live and Die in L.A.
    'tt0090180': 'to-live-and-die-in-la',
    
    // Rank 9: The Long Goodbye
    'tt0070334': 'the-long-goodbye',
    
    // Rank 10: After Hours
    'tt0088680': 'after-hours'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(NEO_NOIR_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return NEO_NOIR_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR NEO-NOIR MOVIES
export const generateNeoNoirMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: NEO_NOIR_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ NEO-NOIR MOVIE NAVIGATION BREADCRUMBS
export const getNeoNoirMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: '10 Best Neo-Noir Movies', href: '/collection/best-neo-noir-movies' },
        { label: movie.Title, href: `/movie/${NEO_NOIR_MOVIE_SLUGS[movie.imdbID]}` } 
    ];
};

// ✅ GET NEXT/PREVIOUS NEO-NOIR MOVIE
export const getNeoNoirMovieNavigation = (currentMovie) => {
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
            slug: NEO_NOIR_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: NEO_NOIR_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED NEO-NOIR MOVIES (SAME GENRE/DECADE)
export const getRelatedNeoNoirMovies = (currentMovie, limit = 3) => {
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
            slug: NEO_NOIR_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ GENERATE NEO-NOIR MOVIE SITEMAP URLS
export const generateNeoNoirMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-neo-noir-movies`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/movie/${NEO_NOIR_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'weekly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE NEO-NOIR MOVIE SLUG
export const isValidNeoNoirMovieSlug = (slug) => {
    return Object.values(NEO_NOIR_MOVIE_SLUGS).includes(slug);
};

// ✅ NEO-NOIR MOVIE SEARCH/FILTER UTILITIES
export const searchNeoNoirMovies = (query) => {
    const lowercaseQuery = query.toLowerCase();
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => 
            movie.Title.toLowerCase().includes(lowercaseQuery) ||
            movie.genre.toLowerCase().includes(lowercaseQuery) ||
            movie.year.toString().includes(query)
        )
        .map(movie => ({
            ...movie,
            slug: NEO_NOIR_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterNeoNoirMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: NEO_NOIR_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ FIXED SORTING - NOW USES REAL DATA FROM COMPLETE_MOVIE_DATA
export const sortNeoNoirMovies = (movies, sortBy) => {
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
        case 'moralAmbiguityLevel': // ✅ Custom metric for this collection
            return sortedMovies.sort((a, b) => {
                const scoreA = COMPLETE_MOVIE_DATA[a.tmdbId]?.moralAmbiguity || 0;
                const scoreB = COMPLETE_MOVIE_DATA[b.tmdbId]?.moralAmbiguity || 0;
                return scoreB - scoreA; 
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET NEO-NOIR MOVIE COLLECTION STATS
export const getNeoNoirCollectionStats = () => {
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
        // ✅ ADDED - AVERAGE MORAL AMBIGUITY SCORE
        averageMoralAmbiguityScore: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                const score = COMPLETE_MOVIE_DATA[m.tmdbId]?.moralAmbiguity || 85;
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
    NEO_NOIR_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateNeoNoirMoviePaths,
    getNeoNoirMovieBreadcrumbs,
    getNeoNoirMovieNavigation,
    getRelatedNeoNoirMovies,
    generateNeoNoirMovieSitemapUrls,
    isValidNeoNoirMovieSlug,
    searchNeoNoirMovies,
    filterNeoNoirMoviesByGenre,
    sortNeoNoirMovies,
    getNeoNoirCollectionStats
};