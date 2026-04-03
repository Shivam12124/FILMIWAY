// utils/decadeMovieRoutes.js - SSG ROUTE MAPPING FOR DECADE COLLECTION

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './decadeMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE DECADE MOVIE SLUG MAPPING
export const DECADE_MOVIE_SLUGS = {
    // Rank 1: Dune: Part Two
    'tt15239678': 'dune-part-two',
    
    // Rank 2: One Battle After Another
    'tt30144839': 'one-battle-after-another',
    
    // Rank 3: Spider-Man: Across the Spider-Verse
    'tt9362722': 'spider-man-across-the-spider-verse',
    
    // Rank 4: Everything Everywhere All at Once
    'tt6710474': 'everything-everywhere-all-at-once',
    
    // Rank 5: Oppenheimer
    'tt15398776': 'oppenheimer',
    
    // Rank 6: Sinners
    'tt31193180': 'sinners',
    
    // Rank 7: Marty Supreme
    'tt32916440': 'marty-supreme',
    
    // Rank 8: The Batman
    'tt1877830': 'the-batman',
    
    // Rank 9: Poor Things
    'tt14230458': 'poor-things',
    
    // Rank 10: Saltburn
    'tt17351924': 'saltburn'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(DECADE_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return DECADE_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR DECADE MOVIES
export const generateDecadeMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: DECADE_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ DECADE MOVIE NAVIGATION BREADCRUMBS
export const getDecadeMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Best Movies of the Decade', href: '/collection/best-movies-of-the-decade' },
        { label: movie.Title, href: `/collection/best-movies-of-the-decade/${DECADE_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS DECADE MOVIE
export const getDecadeMovieNavigation = (currentMovie) => {
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
            slug: DECADE_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: DECADE_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED DECADE MOVIES (SAME GENRE)
export const getRelatedDecadeMovies = (currentMovie, limit = 3) => {
    const currentGenre = currentMovie.genre;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => 
            movie.imdbID !== currentMovie.imdbID && movie.genre === currentGenre
        )
        .slice(0, limit)
        .map(movie => ({
            ...movie,
            slug: DECADE_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ DECADE COLLECTION METADATA
export const DECADE_COLLECTION_META = {
    title: "10 Best Movies of the Decade (2020-2026)",
    description: "The defining cinematic achievements of the 2020s, featuring groundbreaking sci-fi, sweeping historical epics, and revolutionary animation.",
    slug: "best-movies-of-the-decade"
};

// ✅ GENERATE DECADE MOVIE SITEMAP URLS
export const generateDecadeMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-movies-of-the-decade`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/best-movies-of-the-decade/${DECADE_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'weekly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE DECADE MOVIE SLUG
export const isValidDecadeMovieSlug = (slug) => {
    return Object.values(DECADE_MOVIE_SLUGS).includes(slug);
};

// ✅ DECADE MOVIE SEARCH/FILTER UTILITIES
export const searchDecadeMovies = (query) => {
    const lowercaseQuery = query.toLowerCase();
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => {
            const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId] || {};
            return (
                movie.Title.toLowerCase().includes(lowercaseQuery) ||
                movie.genre.toLowerCase().includes(lowercaseQuery) ||
                (movieInfo.director && movieInfo.director.toLowerCase().includes(lowercaseQuery)) ||
                movie.year.toString().includes(query)
            );
        })
        .map(movie => ({
            ...movie,
            slug: DECADE_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterDecadeMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: DECADE_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ SORTING - ADAPTED FOR DECADE METRICS (e.g., Visceral Impact)
export const sortDecadeMovies = (movies, sortBy) => {
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
        case 'visceralImpact':
            return sortedMovies.sort((a, b) => {
                const impactA = COMPLETE_MOVIE_DATA[a.tmdbId]?.visceralImpact || 0;
                const impactB = COMPLETE_MOVIE_DATA[b.tmdbId]?.visceralImpact || 0;
                return impactB - impactA;
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET DECADE COLLECTION STATS
export const getDecadeCollectionStats = () => {
    const genres = [...new Set(COMPLETE_MOVIE_DATABASE.map(m => m.genre))];
    const yearRange = {
        earliest: Math.min(...COMPLETE_MOVIE_DATABASE.map(m => m.year)),
        latest: Math.max(...COMPLETE_MOVIE_DATABASE.map(m => m.year))
    };
    
    // Safely calculate averages utilizing the linked COMPLETE_MOVIE_DATA
    const totalVisceralImpact = COMPLETE_MOVIE_DATABASE.reduce((sum, m) => sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.visceralImpact || 0), 0);
    const totalRating = COMPLETE_MOVIE_DATABASE.reduce((sum, m) => sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.rating || 0), 0);

    return {
        totalMovies: COMPLETE_MOVIE_DATABASE.length,
        genres: genres.length,
        genreList: genres,
        yearRange,
        averageYear: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => sum + m.year, 0) / COMPLETE_MOVIE_DATABASE.length
        ),
        averageRuntime: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => sum + m.runtime, 0) / COMPLETE_MOVIE_DATABASE.length
        ),
        averageVisceralImpact: Math.round(totalVisceralImpact / COMPLETE_MOVIE_DATABASE.length),
        averageRating: (totalRating / COMPLETE_MOVIE_DATABASE.length).toFixed(1)
    };
};

// ✅ EXPORT ALL UTILITIES
export default {
    generateMovieSlug,
    DECADE_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateDecadeMoviePaths,
    getDecadeMovieBreadcrumbs,
    getDecadeMovieNavigation,
    getRelatedDecadeMovies,
    DECADE_COLLECTION_META,
    generateDecadeMovieSitemapUrls,
    isValidDecadeMovieSlug,
    searchDecadeMovies,
    filterDecadeMoviesByGenre,
    sortDecadeMovies,
    getDecadeCollectionStats
};