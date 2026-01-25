// utils/hboMaxThrillerMovieRoutes.js - SSG ROUTE MAPPING FOR HBO MAX THRILLER COLLECTION

import { COMPLETE_MOVIE_DATABASE } from './hboMaxThrillerMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE HBO MAX THRILLER MOVIE SLUG MAPPING
export const HBO_MAX_THRILLER_MOVIE_SLUGS = {
    // Rank 1: Funny Games
    'tt0119167': 'funny-games',
    
    // Rank 2: Get Out
    'tt5052448': 'get-out',
    
    // Rank 3: The Killing of a Sacred Deer
    'tt5715874': 'the-killing-of-a-sacred-deer',
    
    // Rank 4: Split
    'tt4972582': 'split',
    
    // Rank 5: Enemy
    'tt2316411': 'enemy',
    
    // Rank 6: Ex Machina
    'tt0470752': 'ex-machina',
    
    // Rank 7: Fargo
    'tt0116282': 'fargo',
    
    // Rank 8: The Town
    'tt0844708': 'the-town',
    
    // Rank 9: The Dark Knight
    'tt0468569': 'the-dark-knight',
    
    // Rank 10: Inception
    'tt1375666': 'inception'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(HBO_MAX_THRILLER_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return HBO_MAX_THRILLER_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR HBO MAX THRILLER MOVIES
export const generateHboMaxThrillerMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: HBO_MAX_THRILLER_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ HBO MAX THRILLER MOVIE NAVIGATION BREADCRUMBS
export const getHboMaxThrillerMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Best Thriller Movies on HBO Max', href: '/collection/best-thriller-movies-on-hbo-max' },
        { label: movie.Title, href: `/collection/best-thriller-movies-on-hbo-max/${HBO_MAX_THRILLER_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS MOVIE
export const getHboMaxThrillerMovieNavigation = (currentMovie) => {
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
            slug: HBO_MAX_THRILLER_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: HBO_MAX_THRILLER_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED MOVIES (SAME GENRE/DECADE)
export const getRelatedHboMaxThrillerMovies = (currentMovie, limit = 3) => {
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
            slug: HBO_MAX_THRILLER_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ COLLECTION METADATA
export const HBO_MAX_THRILLER_COLLECTION_META = {
    title: '10 Best Thriller Movies on HBO Max',
    description: 'Discover the most suspenseful and psychologically intense thrillers streaming on HBO Max. From Funny Games to Inception.',
    keywords: 'best thriller movies hbo max, suspense films hbo max, psychological thrillers, funny games, get out, the dark knight, inception',
    canonicalUrl: 'https://filmiway.com/collection/best-thriller-movies-on-hbo-max',
    ogImage: 'https://filmiway.com/images/hbo-max-thriller-collection-og.jpg',
    totalMovies: COMPLETE_MOVIE_DATABASE.length,
    // ✅ USES REAL SUSPENSE INTENSITY DATA
    averageSuspenseIntensity: Math.round(
        COMPLETE_MOVIE_DATABASE.reduce((sum, movie) => {
            return sum + (movie.suspenseIntensity || 85); 
        }, 0) / COMPLETE_MOVIE_DATABASE.length
    )
};

// ✅ GENERATE SITEMAP URLS
export const generateHboMaxThrillerMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-thriller-movies-on-hbo-max`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/best-thriller-movies-on-hbo-max/${HBO_MAX_THRILLER_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE SLUG
export const isValidHboMaxThrillerMovieSlug = (slug) => {
    return Object.values(HBO_MAX_THRILLER_MOVIE_SLUGS).includes(slug);
};

// ✅ SEARCH/FILTER UTILITIES
export const searchHboMaxThrillerMovies = (query) => {
    const lowercaseQuery = query.toLowerCase();
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => 
            movie.Title.toLowerCase().includes(lowercaseQuery) ||
            movie.genre.toLowerCase().includes(lowercaseQuery) ||
            movie.year.toString().includes(query)
        )
        .map(movie => ({
            ...movie,
            slug: HBO_MAX_THRILLER_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterHboMaxThrillerMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: HBO_MAX_THRILLER_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ SORTING
export const sortHboMaxThrillerMovies = (movies, sortBy) => {
    const sortedMovies = [...movies];
    
    switch (sortBy) {
        case 'rating':
            return sortedMovies.sort((a, b) => b.rank - a.rank); // Assuming Rank 1 is highest rated in this context or use imdbRating if available in base object
        case 'year':
            return sortedMovies.sort((a, b) => b.year - a.year);
        case 'suspenseIntensity':
            return sortedMovies.sort((a, b) => (b.suspenseIntensity || 0) - (a.suspenseIntensity || 0)); 
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET COLLECTION STATS
export const getHboMaxThrillerCollectionStats = () => {
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
        averageSuspenseIntensity: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => sum + (m.suspenseIntensity || 85), 0) / COMPLETE_MOVIE_DATABASE.length
        )
    };
};

// ✅ EXPORT ALL UTILITIES
export default {
    generateMovieSlug,
    HBO_MAX_THRILLER_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateHboMaxThrillerMoviePaths,
    getHboMaxThrillerMovieBreadcrumbs,
    getHboMaxThrillerMovieNavigation,
    getRelatedHboMaxThrillerMovies,
    HBO_MAX_THRILLER_COLLECTION_META,
    generateHboMaxThrillerMovieSitemapUrls,
    isValidHboMaxThrillerMovieSlug,
    searchHboMaxThrillerMovies,
    filterHboMaxThrillerMoviesByGenre,
    sortHboMaxThrillerMovies,
    getHboMaxThrillerCollectionStats
};