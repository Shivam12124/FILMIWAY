// utils/interstellarMovieRoutes.js - COMPLETE ROUTE MAPPING FOR INTERSTELLAR-LIKE MOVIES

import { COMPLETE_MOVIE_DATABASE } from './interstellarMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE INTERSTELLAR-LIKE MOVIE SLUG MAPPING
export const INTERSTELLAR_MOVIE_SLUGS = {
    // Rank 1: 2001: A Space Odyssey
    'tt0062622': '2001-a-space-odyssey',
    
    // Rank 2: Arrival
    'tt2543164': 'arrival',
    
    // Rank 3: Contact
    'tt0118884': 'contact',
    
    // Rank 4: Solaris
    'tt0069293': 'solaris',
    
    // Rank 5: First Man
    'tt1213641': 'first-man',
    
    // Rank 6: The Martian
    'tt3659388': 'the-martian',
    
    // Rank 7: Gravity
    'tt1454468': 'gravity',
    
    // Rank 8: Sunshine
    'tt0448134': 'sunshine',
    
    // Rank 9: Moon
    'tt1182345': 'moon',
    
    // Rank 10: Ad Astra
    'tt2935510': 'ad-astra'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(INTERSTELLAR_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return INTERSTELLAR_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR INTERSTELLAR MOVIES
export const generateInterstellarMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: INTERSTELLAR_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ INTERSTELLAR MOVIE NAVIGATION BREADCRUMBS
export const getInterstellarMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Movies Like Interstellar', href: '/collection/movies-like-interstellar' },
        { label: movie.Title, href: `/collection/movies-like-interstellar/${INTERSTELLAR_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS INTERSTELLAR MOVIE
export const getInterstellarMovieNavigation = (currentMovie) => {
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
            slug: INTERSTELLAR_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: INTERSTELLAR_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED INTERSTELLAR MOVIES (SAME GENRE/DECADE)
export const getRelatedInterstellarMovies = (currentMovie, limit = 3) => {
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
            slug: INTERSTELLAR_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ INTERSTELLAR COLLECTION METADATA
export const INTERSTELLAR_COLLECTION_META = {
    title: 'Top 10 Movies Like Interstellar',
    description: 'Discover mind-bending space exploration films ranked by complexity. From 2001: A Space Odyssey to Ad Astra - philosophical sci-fi masterpieces.',
    keywords: 'movies like interstellar, space movies, philosophical sci-fi, cerebral space films, best space exploration movies',
    canonicalUrl: 'https://filmiway.com/collection/movies-like-interstellar',
    ogImage: 'https://filmiway.com/images/interstellar-movies-collection.jpg',
    totalMovies: COMPLETE_MOVIE_DATABASE.length,
    averageSpaceComplexity: Math.round(
        COMPLETE_MOVIE_DATABASE.reduce((sum, movie) => {
            const movieData = require('./interstellarMovieData').COMPLETE_MOVIE_DATA[movie.tmdbId];
            return sum + (movieData?.spaceComplexity || 0);
        }, 0) / COMPLETE_MOVIE_DATABASE.length
    )
};

// ✅ GENERATE INTERSTELLAR MOVIE SITEMAP URLS
export const generateInterstellarMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/movies-like-interstellar`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/movies-like-interstellar/${INTERSTELLAR_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE INTERSTELLAR MOVIE SLUG
export const isValidInterstellarMovieSlug = (slug) => {
    return Object.values(INTERSTELLAR_MOVIE_SLUGS).includes(slug);
};

// ✅ INTERSTELLAR MOVIE SEARCH/FILTER UTILITIES
export const searchInterstellarMovies = (query) => {
    const lowercaseQuery = query.toLowerCase();
    const { COMPLETE_MOVIE_DATA } = require('./interstellarMovieData');
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => {
            const movieData = COMPLETE_MOVIE_DATA[movie.tmdbId];
            return movie.Title.toLowerCase().includes(lowercaseQuery) ||
                movie.genre.toLowerCase().includes(lowercaseQuery) ||
                movieData?.director?.toLowerCase().includes(lowercaseQuery) ||
                movie.year.toString().includes(query);
        })
        .map(movie => ({
            ...movie,
            slug: INTERSTELLAR_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterInterstellarMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: INTERSTELLAR_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ SORTING UTILITIES
export const sortInterstellarMovies = (movies, sortBy) => {
    const sortedMovies = [...movies];
    const { COMPLETE_MOVIE_DATA } = require('./interstellarMovieData');
    
    switch (sortBy) {
        case 'rating':
            return sortedMovies.sort((a, b) => {
                const ratingA = COMPLETE_MOVIE_DATA[a.tmdbId]?.rating || 0;
                const ratingB = COMPLETE_MOVIE_DATA[b.tmdbId]?.rating || 0;
                return ratingB - ratingA;
            });
        case 'year':
            return sortedMovies.sort((a, b) => b.year - a.year);
        case 'complexity':
            return sortedMovies.sort((a, b) => {
                const complexityA = COMPLETE_MOVIE_DATA[a.tmdbId]?.spaceComplexity || 0;
                const complexityB = COMPLETE_MOVIE_DATA[b.tmdbId]?.spaceComplexity || 0;
                return complexityB - complexityA;
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET INTERSTELLAR MOVIE COLLECTION STATS
export const getInterstellarCollectionStats = () => {
    const { COMPLETE_MOVIE_DATA } = require('./interstellarMovieData');
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
        averageSpaceComplexity: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.spaceComplexity || 0);
            }, 0) / COMPLETE_MOVIE_DATABASE.length
        ),
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
    INTERSTELLAR_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateInterstellarMoviePaths,
    getInterstellarMovieBreadcrumbs,
    getInterstellarMovieNavigation,
    getRelatedInterstellarMovies,
    INTERSTELLAR_COLLECTION_META,
    generateInterstellarMovieSitemapUrls,
    isValidInterstellarMovieSlug,
    searchInterstellarMovies,
    filterInterstellarMoviesByGenre,
    sortInterstellarMovies,
    getInterstellarCollectionStats
};
