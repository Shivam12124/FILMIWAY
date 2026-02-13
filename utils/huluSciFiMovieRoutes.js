// utils/huluSciFiMovieRoutes.js - SSG ROUTE MAPPING FOR HULU SCI-FI COLLECTION

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './huluSciFiMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE HULU SCI-FI MOVIE SLUG MAPPING
export const HULU_SCIFI_MOVIE_SLUGS = {
    // Rank 1: Donnie Darko
    'tt0246578': 'donnie-darko',
    
    // Rank 2: The Abyss
    'tt0096754': 'the-abyss',
    
    // Rank 3: Dawn of the Planet of the Apes
    'tt2103281': 'dawn-of-the-planet-of-the-apes',
    
    // Rank 4: Predator
    'tt0093773': 'predator',
    
    // Rank 5: Mr. Nobody
    'tt0485947': 'mr-nobody',
    
    // Rank 6: No One Will Save You (Replaces Life of Chuck)
    'tt16537332': 'no-one-will-save-you',
    
    // Rank 7: Prey
    'tt11866324': 'prey',
    
    // Rank 8: Predator: Killer of Killers
    'tt36463894': 'predator-killer-of-killers',
    
    // Rank 9: Rise of the Planet of the Apes
    'tt1318514': 'rise-of-the-planet-of-the-apes',
    
    // Rank 10: The Assessment
    'tt32768323': 'the-assessment'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(HULU_SCIFI_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return HULU_SCIFI_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR HULU SCI-FI MOVIES
export const generateHuluSciFiMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: HULU_SCIFI_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};



// ✅ GET NEXT/PREVIOUS HULU SCI-FI MOVIE
export const getHuluSciFiMovieNavigation = (currentMovie) => {
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
            slug: HULU_SCIFI_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: HULU_SCIFI_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED HULU SCI-FI MOVIES (SAME GENRE/DECADE)
export const getRelatedHuluSciFiMovies = (currentMovie, limit = 3) => {
    const currentDecade = Math.floor(currentMovie.year / 10) * 10;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => 
            movie.imdbID !== currentMovie.imdbID && (
                Math.abs(movie.year - currentMovie.year) <= 10 || // Within 10 years
                movie.genre === currentMovie.genre
            )
        )
        .slice(0, limit)
        .map(movie => ({
            ...movie,
            slug: HULU_SCIFI_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ HULU SCI-FI COLLECTION METADATA


// ✅ GENERATE HULU SCI-FI MOVIE SITEMAP URLS
export const generateHuluSciFiMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/best-sci-fi-movies-on-hulu`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/best-sci-fi-movies-on-hulu/${HULU_SCIFI_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE HULU SCI-FI MOVIE SLUG
export const isValidHuluSciFiMovieSlug = (slug) => {
    return Object.values(HULU_SCIFI_MOVIE_SLUGS).includes(slug);
};

// ✅ HULU SCI-FI MOVIE SEARCH/FILTER UTILITIES
export const searchHuluSciFiMovies = (query) => {
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
            slug: HULU_SCIFI_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterHuluSciFiMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: HULU_SCIFI_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ SORTING UTILITIES
export const sortHuluSciFiMovies = (movies, sortBy) => {
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
        case 'mind-bend': // ✅ Custom Metric Sort
            return sortedMovies.sort((a, b) => {
                const scoreA = COMPLETE_MOVIE_DATA[a.tmdbId]?.mindBendScore || 0;
                const scoreB = COMPLETE_MOVIE_DATA[b.tmdbId]?.mindBendScore || 0;
                return scoreB - scoreA;
            });
        case 'visuals': // ✅ Custom Metric Sort
            return sortedMovies.sort((a, b) => {
                const scoreA = COMPLETE_MOVIE_DATA[a.tmdbId]?.visualSpectacle || 0;
                const scoreB = COMPLETE_MOVIE_DATA[b.tmdbId]?.visualSpectacle || 0;
                return scoreB - scoreA;
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET HULU SCI-FI MOVIE COLLECTION STATS
export const getHuluSciFiCollectionStats = () => {
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
        // ✅ ADDED - AVERAGE MIND-BEND SCORE
        averageMindBendScore: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.mindBendScore || 70);
            }, 0) / COMPLETE_MOVIE_DATABASE.length
        ),
        // ✅ ADDED - AVERAGE RATING
        averageRating: (
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.rating || 7.0);
            }, 0) / COMPLETE_MOVIE_DATABASE.length
        ).toFixed(1)
    };
};

// ✅ EXPORT ALL UTILITIES
export default {
    generateMovieSlug,
    HULU_SCIFI_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateHuluSciFiMoviePaths,
    getHuluSciFiMovieBreadcrumbs,
    getHuluSciFiMovieNavigation,
    getRelatedHuluSciFiMovies,
    HULU_SCIFI_COLLECTION_META,
    generateHuluSciFiMovieSitemapUrls,
    isValidHuluSciFiMovieSlug,
    searchHuluSciFiMovies,
    filterHuluSciFiMoviesByGenre,
    sortHuluSciFiMovies,
    getHuluSciFiCollectionStats
};