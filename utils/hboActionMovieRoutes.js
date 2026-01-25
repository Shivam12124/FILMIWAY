// utils/hboActionMovieRoutes.js - COMPLETELY FIXED SSG ROUTE MAPPING FOR HBO ACTION COLLECTION

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './hboActionMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE HBO ACTION MOVIE SLUG MAPPING
export const HBO_ACTION_MOVIE_SLUGS = {
    // Rank 1: Seven Samurai
    'tt0047478': 'seven-samurai',
    
    // Rank 2: The Dark Knight
    'tt0468569': 'the-dark-knight',
    
    // Rank 3: The Lord of the Rings: The Return of the King
    'tt0167260': 'the-lord-of-the-rings-the-return-of-the-king',
    
    // Rank 4: John Wick
    'tt2911666': 'john-wick',
    
    // Rank 5: Dune: Part Two
    'tt15239678': 'dune-part-two',
    
    // Rank 6: Zack Snyder's Justice League
    'tt12361974': 'zack-snyders-justice-league',
    
    // Rank 7: The Batman
    'tt1877830': 'the-batman',
    
    // Rank 8: Justice League: The Flashpoint Paradox
    'tt2820466': 'justice-league-the-flashpoint-paradox',
    
    // Rank 9: Logan
    'tt3315342': 'logan',
    
    // Rank 10: Dune
    'tt1160419': 'dune'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(HBO_ACTION_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG - FIXED
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return HBO_ACTION_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR HBO ACTION MOVIES - FIXED
export const generateHboActionMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: HBO_ACTION_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ HBO ACTION MOVIE NAVIGATION BREADCRUMBS
export const getHboActionMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Best Action Movies on HBO Max', href: '/collection/best-action-movies-on-hbo-max' },
        { label: movie.Title, href: `/collection/best-action-movies-on-hbo-max/${HBO_ACTION_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS HBO ACTION MOVIE - FIXED
export const getHboActionMovieNavigation = (currentMovie) => {
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
            slug: HBO_ACTION_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: HBO_ACTION_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED HBO ACTION MOVIES (SAME GENRE/DECADE)
export const getRelatedHboActionMovies = (currentMovie, limit = 3) => {
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
            slug: HBO_ACTION_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ HBO ACTION COLLECTION METADATA - FIXED WITH REAL DATA
export const HBO_ACTION_COLLECTION_META = {
    title: 'Top 10 Epic Action Movies on HBO Max',
    description: 'Ranked list of the greatest action and epic films streaming on HBO Max. From Seven Samurai to The Dark Knight, featuring grand scale battles and mythic heroes.',
    keywords: 'best action movies on hbo max, hbo max epic films, seven samurai, dark knight, dune part two, john wick hbo max, zack snyder justice league',
    canonicalUrl: 'https://filmiway.com/collection/best-action-movies-on-hbo-max',
    ogImage: 'https://filmiway.com/images/hbo-action-movies-collection.jpg',
    totalMovies: COMPLETE_MOVIE_DATABASE.length,
    // ✅ FIXED - CALCULATES AVERAGE ADRENALINE SCORE
    averageAdrenalineScore: Math.round(
        COMPLETE_MOVIE_DATABASE.reduce((sum, movie) => {
            const data = COMPLETE_MOVIE_DATA[movie.tmdbId];
            return sum + (data?.actionIntensity || 85); 
        }, 0) / COMPLETE_MOVIE_DATABASE.length
    )
};

// ✅ GENERATE HBO ACTION MOVIE SITEMAP URLS
export const generateHboActionMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-action-movies-on-hbo-max`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/best-action-movies-on-hbo-max/${HBO_ACTION_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE HBO ACTION MOVIE SLUG
export const isValidHboActionMovieSlug = (slug) => {
    return Object.values(HBO_ACTION_MOVIE_SLUGS).includes(slug);
};

// ✅ HBO ACTION MOVIE SEARCH/FILTER UTILITIES - FIXED
export const searchHboActionMovies = (query) => {
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
            slug: HBO_ACTION_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterHboActionMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: HBO_ACTION_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ FIXED SORTING - NOW USES REAL DATA
export const sortHboActionMovies = (movies, sortBy) => {
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
        case 'adrenaline': // Replaces classWarfare/psychologicalIntensity
            return sortedMovies.sort((a, b) => {
                const scoreA = COMPLETE_MOVIE_DATA[a.tmdbId]?.actionIntensity || 0;
                const scoreB = COMPLETE_MOVIE_DATA[b.tmdbId]?.actionIntensity || 0;
                return scoreB - scoreA;
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET HBO ACTION MOVIE COLLECTION STATS
export const getHboActionCollectionStats = () => {
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
        // ✅ ADDED - AVERAGE ADRENALINE SCORE
        averageAdrenalineScore: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.actionIntensity || 85);
            }, 0) / COMPLETE_MOVIE_DATABASE.length
        ),
        // ✅ ADDED - AVERAGE RATING
        averageRating: (
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.rating || 7.5);
            }, 0) / COMPLETE_MOVIE_DATABASE.length
        ).toFixed(1)
    };
};

// ✅ EXPORT ALL UTILITIES
export default {
    generateMovieSlug,
    HBO_ACTION_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateHboActionMoviePaths,
    getHboActionMovieBreadcrumbs,
    getHboActionMovieNavigation,
    getRelatedHboActionMovies,
    HBO_ACTION_COLLECTION_META,
    generateHboActionMovieSitemapUrls,
    isValidHboActionMovieSlug,
    searchHboActionMovies,
    filterHboActionMoviesByGenre,
    sortHboActionMovies,
    getHboActionCollectionStats
};