// utils/raunchyComedyMovieRoutes.js - SSG ROUTE MAPPING FOR RAUNCHY COMEDY COLLECTION ✅

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './raunchyComedyMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE RAUNCHY COMEDY MOVIE SLUG MAPPING 
export const RAUNCHY_COMEDY_MOVIE_SLUGS = {
    // Rank 1: American Pie
    'tt0163651': 'american-pie',
    
    // Rank 2: Superbad
    'tt0829482': 'superbad',
    
    // Rank 3: The Hangover
    'tt1119646': 'the-hangover',
    
    // Rank 4: The 40-Year-Old Virgin
    'tt0425061': 'the-40-year-old-virgin',
    
    // Rank 5: Wedding Crashers
    'tt0396269': 'wedding-crashers',
    
    // Rank 6: Road Trip
    'tt0215129': 'road-trip',
    
    // Rank 7: EuroTrip
    'tt0356150': 'eurotrip',
    
    // Rank 8: Bridesmaids
    'tt1478338': 'bridesmaids',
    
    // Rank 9: There's Something About Mary
    'tt0129387': 'theres-something-about-mary',
    
    // Rank 10: Harold & Kumar Go to White Castle
    'tt0366551': 'harold-and-kumar-go-to-white-castle'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(RAUNCHY_COMEDY_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return RAUNCHY_COMEDY_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR RAUNCHY COMEDY MOVIES
export const generateRaunchyComedyMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: RAUNCHY_COMEDY_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ RAUNCHY COMEDY MOVIE NAVIGATION BREADCRUMBS
export const getRaunchyComedyMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: '10 Best Raunchy Comedy Movies', href: '/collection/best-raunchy-comedy-movies' },
        { label: movie.Title, href: `/movie/${RAUNCHY_COMEDY_MOVIE_SLUGS[movie.imdbID]}` } 
    ];
};

// ✅ GET NEXT/PREVIOUS RAUNCHY COMEDY MOVIE
export const getRaunchyComedyMovieNavigation = (currentMovie) => {
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
            slug: RAUNCHY_COMEDY_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: RAUNCHY_COMEDY_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED RAUNCHY COMEDY MOVIES (SAME GENRE/DECADE)
export const getRelatedRaunchyComedyMovies = (currentMovie, limit = 3) => {
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
            slug: RAUNCHY_COMEDY_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ GENERATE RAUNCHY COMEDY MOVIE SITEMAP URLS
export const generateRaunchyComedyMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-raunchy-comedy-movies`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/movie/${RAUNCHY_COMEDY_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'weekly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE RAUNCHY COMEDY MOVIE SLUG
export const isValidRaunchyComedyMovieSlug = (slug) => {
    return Object.values(RAUNCHY_COMEDY_MOVIE_SLUGS).includes(slug);
};

// ✅ RAUNCHY COMEDY MOVIE SEARCH/FILTER UTILITIES
export const searchRaunchyComedyMovies = (query) => {
    const lowercaseQuery = query.toLowerCase();
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => 
            movie.Title.toLowerCase().includes(lowercaseQuery) ||
            movie.genre.toLowerCase().includes(lowercaseQuery) ||
            movie.year.toString().includes(query)
        )
        .map(movie => ({
            ...movie,
            slug: RAUNCHY_COMEDY_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterRaunchyComedyMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: RAUNCHY_COMEDY_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ FIXED SORTING - NOW USES REAL DATA FROM COMPLETE_MOVIE_DATA
export const sortRaunchyComedyMovies = (movies, sortBy) => {
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
        case 'raunchinessLevel': // ✅ Custom metric for the Raunchy Comedy collection
            return sortedMovies.sort((a, b) => {
                const scoreA = COMPLETE_MOVIE_DATA[a.tmdbId]?.raunchinessScore || 0;
                const scoreB = COMPLETE_MOVIE_DATA[b.tmdbId]?.raunchinessScore || 0;
                return scoreB - scoreA; 
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET RAUNCHY COMEDY MOVIE COLLECTION STATS
export const getRaunchyComedyCollectionStats = () => {
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
        // ✅ ADDED - AVERAGE RAUNCHINESS SCORE
        averageRaunchinessScore: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                const score = COMPLETE_MOVIE_DATA[m.tmdbId]?.raunchinessScore || 85;
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
    RAUNCHY_COMEDY_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateRaunchyComedyMoviePaths,
    getRaunchyComedyMovieBreadcrumbs,
    getRaunchyComedyMovieNavigation,
    getRelatedRaunchyComedyMovies,
    generateRaunchyComedyMovieSitemapUrls,
    isValidRaunchyComedyMovieSlug,
    searchRaunchyComedyMovies,
    filterRaunchyComedyMoviesByGenre,
    sortRaunchyComedyMovies,
    getRaunchyComedyCollectionStats
};