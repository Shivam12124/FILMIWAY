// utils/huluBestMoviesRoutes.js - SSG ROUTE MAPPING FOR BEST MOVIES ON HULU COLLECTION

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './huluBestMoviesData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE HULU BEST MOVIE SLUG MAPPING
export const HULU_BEST_MOVIE_SLUGS = {
    // Rank 1: Heat
    'tt0113277': 'heat',
    
    // Rank 2: Hacksaw Ridge
    'tt2119532': 'hacksaw-ridge',
    
    // Rank 3: Ip Man
    'tt1220719': 'ip-man',
    
    // Rank 4: Donnie Darko
    'tt0246578': 'donnie-darko',
    
    // Rank 5: Black Swan
    'tt0947798': 'black-swan',
    
    // Rank 6: Perfect Days
    'tt27503384': 'perfect-days',
    
    // Rank 7: Predator
    'tt0093773': 'predator',
    
    // Rank 8: O Brother, Where Art Thou?
    'tt0190590': 'o-brother-where-art-thou',
    
    // Rank 9: All of Us Strangers
    'tt21192142': 'all-of-us-strangers',
    
    // Rank 10: Superbad
    'tt0829482': 'superbad'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(HULU_BEST_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return HULU_BEST_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR HULU BEST MOVIES
export const generateHuluBestMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: HULU_BEST_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ HULU BEST MOVIE NAVIGATION BREADCRUMBS
export const getHuluBestMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Best Movies on Hulu', href: '/collection/best-movies-on-hulu' },
        { label: movie.Title, href: `/collection/best-movies-on-hulu/${HULU_BEST_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS HULU BEST MOVIE
export const getHuluBestMovieNavigation = (currentMovie) => {
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
            slug: HULU_BEST_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: HULU_BEST_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED HULU BEST MOVIES (SAME GENRE/DECADE)
export const getRelatedHuluBestMovies = (currentMovie, limit = 3) => {
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
            slug: HULU_BEST_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ HULU BEST COLLECTION METADATA
export const HULU_BEST_COLLECTION_META = {
    title: 'Top 10 Best Movies on Hulu',
    description: 'The definitive ranking of the highest-rated films streaming on Hulu right now. From Heat to Superbad, covering all genres.',
    keywords: 'best movies on hulu, hulu top movies, heat movie, hacksaw ridge, black swan hulu, top rated hulu films',
    canonicalUrl: 'https://filmiway.com/collection/best-movies-on-hulu',
    ogImage: 'https://filmiway.com/images/hulu-best-movies-collection.jpg',
    totalMovies: COMPLETE_MOVIE_DATABASE.length,
    averageRating: Math.round(
        COMPLETE_MOVIE_DATABASE.reduce((sum, movie) => {
            const data = COMPLETE_MOVIE_DATA[movie.tmdbId];
            return sum + (data?.rating || 7.5); 
        }, 0) / COMPLETE_MOVIE_DATABASE.length * 10 // Scaling to percentage if needed, or keep raw average
    ) / 10 // Keeping it as a decimal (e.g. 7.9)
};

// ✅ GENERATE HULU BEST MOVIE SITEMAP URLS
export const generateHuluBestMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-movies-on-hulu`,
            lastmod: new Date().toISOString(),
            priority: '0.9',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/best-movies-on-hulu/${HULU_BEST_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE HULU BEST MOVIE SLUG
export const isValidHuluBestMovieSlug = (slug) => {
    return Object.values(HULU_BEST_MOVIE_SLUGS).includes(slug);
};

// ✅ HULU BEST MOVIE SEARCH/FILTER UTILITIES
export const searchHuluBestMovies = (query) => {
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
            slug: HULU_BEST_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterHuluBestMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: HULU_BEST_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ SORTING
export const sortHuluBestMovies = (movies, sortBy) => {
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
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET HULU BEST MOVIE COLLECTION STATS
export const getHuluBestCollectionStats = () => {
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
    HULU_BEST_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateHuluBestMoviePaths,
    getHuluBestMovieBreadcrumbs,
    getHuluBestMovieNavigation,
    getRelatedHuluBestMovies,
    HULU_BEST_COLLECTION_META,
    generateHuluBestMovieSitemapUrls,
    isValidHuluBestMovieSlug,
    searchHuluBestMovies,
    filterHuluBestMoviesByGenre,
    sortHuluBestMovies,
    getHuluBestCollectionStats
};