// utils/monicaBellucciMovieRoutes.js - SSG ROUTE MAPPING FOR MONICA BELLUCCI COLLECTION ✅
// 100% SEO Safe - Framed around International Cinema, Dramatic Range, and Cinematic Allure

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './monicaBellucciMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE MONICA BELLUCCI MOVIE SLUG MAPPING
export const MONICA_BELLUCCI_MOVIE_SLUGS = {
    // Rank 1: Malèna
    'tt0213847': 'malena',
    
    // Rank 2: The Passion of the Christ
    'tt0335345': 'the-passion-of-the-christ',
    
    // Rank 3: Irréversible
    'tt0290673': 'irreversible',
    
    // Rank 4: Spectre
    'tt2379713': 'spectre',
    
    // Rank 5: The Matrix Reloaded
    'tt0234215': 'the-matrix-reloaded',
    
    // Rank 6: Shoot 'Em Up
    'tt0465602': 'shoot-em-up',
    
    // Rank 7: Bram Stoker's Dracula
    'tt0103874': 'bram-stokers-dracula',
    
    // Rank 8: The Matrix Revolutions
    'tt0242653': 'the-matrix-revolutions',
    
    // Rank 9: Brotherhood of the Wolf
    'tt0237534': 'brotherhood-of-the-wolf',
    
    // Rank 10: Tears of the Sun
    'tt0314353': 'tears-of-the-sun'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(MONICA_BELLUCCI_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return MONICA_BELLUCCI_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR MONICA BELLUCCI MOVIES
export const generateMonicaBellucciMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: MONICA_BELLUCCI_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ MONICA BELLUCCI MOVIE NAVIGATION BREADCRUMBS
export const getMonicaBellucciMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Top 10 Monica Bellucci Movies', href: '/collection/top-10-monica-bellucci-movies' },
        { label: movie.Title, href: `/movies/top-10-monica-bellucci-movies/${MONICA_BELLUCCI_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS MONICA BELLUCCI MOVIE
export const getMonicaBellucciMovieNavigation = (currentMovie) => {
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
            slug: MONICA_BELLUCCI_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: MONICA_BELLUCCI_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED MONICA BELLUCCI MOVIES (SAME GENRE/DECADE)
export const getRelatedMonicaBellucciMovies = (currentMovie, limit = 3) => {
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
            slug: MONICA_BELLUCCI_MOVIE_SLUGS[movie.imdbID]
        }));
};

// 👁️ MONICA BELLUCCI COLLECTION METADATA (FINAL – CTR + SEO SAFE)
export const MONICA_BELLUCCI_COLLECTION_META = {
    title: "Top 10 Monica Bellucci Movies",
    description: "Explore the top 10 best Monica Bellucci movies, showcasing her legendary international cinema roles, profound dramatic range, and unparalleled cinematic allure.",
    slug: "top-10-monica-bellucci-movies"
};

// ✅ GENERATE MONICA BELLUCCI MOVIE SITEMAP URLS
export const generateMonicaBellucciMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/top-10-monica-bellucci-movies`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/movies/top-10-monica-bellucci-movies/${MONICA_BELLUCCI_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'weekly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE MONICA BELLUCCI MOVIE SLUG
export const isValidMonicaBellucciMovieSlug = (slug) => {
    return Object.values(MONICA_BELLUCCI_MOVIE_SLUGS).includes(slug);
};

// ✅ MONICA BELLUCCI MOVIE SEARCH/FILTER UTILITIES
export const searchMonicaBellucciMovies = (query) => {
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
            slug: MONICA_BELLUCCI_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterMonicaBellucciMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: MONICA_BELLUCCI_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ FIXED SORTING - NOW USES REAL METRICS FROM DATA FILE
export const sortMonicaBellucciMovies = (movies, sortBy) => {
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
        case 'cinematicAllure': // ✅ Custom metric sorting
            return sortedMovies.sort((a, b) => {
                const allureA = COMPLETE_MOVIE_DATA[a.tmdbId]?.cinematicAllure || 0;
                const allureB = COMPLETE_MOVIE_DATA[b.tmdbId]?.cinematicAllure || 0;
                return allureB - allureA;
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET MONICA BELLUCCI COLLECTION STATS
export const getMonicaBellucciCollectionStats = () => {
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
        // ✅ ADDED - AVERAGE CINEMATIC ALLURE
        averageCinematicAllure: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.cinematicAllure || 0);
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
    MONICA_BELLUCCI_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateMonicaBellucciMoviePaths,
    getMonicaBellucciMovieBreadcrumbs,
    getMonicaBellucciMovieNavigation,
    getRelatedMonicaBellucciMovies,
    MONICA_BELLUCCI_COLLECTION_META,
    generateMonicaBellucciMovieSitemapUrls,
    isValidMonicaBellucciMovieSlug,
    searchMonicaBellucciMovies,
    filterMonicaBellucciMoviesByGenre,
    sortMonicaBellucciMovies,
    getMonicaBellucciCollectionStats
};