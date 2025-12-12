// utils/matrixMovieRoutes.js - COMPLETE ROUTE MAPPING FOR MATRIX-LIKE MOVIES

import { COMPLETE_MOVIE_DATABASE as MATRIX_MOVIE_DB } from './matrixMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

export const MATRIX_MOVIE_SLUGS = {
    // Rank 1: Dark City (1998)
    'tt0118929': 'dark-city',
    
    // Rank 2: Inception (2010)
    'tt1375666': 'inception',
    
    // Rank 3: Thirteenth Floor (1999)
    'tt0139809': 'thirteenth-floor',
    
    // Rank 4: eXistenZ (1999)
    'tt0120907': 'existenz',
    
    // Rank 5: Source Code (2011)
    'tt1446714': 'source-code',
    
    // Rank 6: Minority Report (2002)
    'tt0181689': 'minority-report',
    
    // Rank 7: Upgrade (2018)
    'tt6499752': 'upgrade',
    
    // Rank 8: Total Recall (1990)
    'tt0100802': 'total-recall',
    
    // Rank 9: Blade Runner 2049 (2017)
    'tt1856101': 'blade-runner-2049',
    
    // Rank 10: Edge of Tomorrow (2014)
    'tt1631867': 'edge-of-tomorrow'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(MATRIX_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return MATRIX_MOVIE_DB[imdbId] || null;
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return MATRIX_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR MATRIX MOVIES
export const generateMatrixMoviePaths = () => {
    return Object.keys(MATRIX_MOVIE_DB).map(tmdbId => {
        const movie = MATRIX_MOVIE_DB[tmdbId];
        return {
            params: {
                slug: MATRIX_MOVIE_SLUGS[movie.imdbID] || generateMovieSlug(movie.title)
            }
        };
    });
};

// ✅ MATRIX MOVIE NAVIGATION BREADCRUMBS
export const getMatrixMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Movies Like The Matrix', href: '/collection/movies-like-the-matrix' },
        { label: movie.title, href: `/collection/movies-like-the-matrix/${MATRIX_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS MATRIX MOVIE
export const getMatrixMovieNavigation = (currentMovie) => {
    const movieArray = Object.values(MATRIX_MOVIE_DB);
    const currentIndex = movieArray.findIndex(m => m.imdbID === currentMovie.imdbID);
    
    const previousMovie = currentIndex > 0 
        ? movieArray[currentIndex - 1]
        : null;
        
    const nextMovie = currentIndex < movieArray.length - 1
        ? movieArray[currentIndex + 1]
        : null;
    
    return {
        previous: previousMovie ? {
            ...previousMovie,
            slug: MATRIX_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: MATRIX_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED MATRIX MOVIES (SAME GENRE/DECADE)
export const getRelatedMatrixMovies = (currentMovie, limit = 3) => {
    const currentDecade = Math.floor(currentMovie.year / 10) * 10;
    const currentGenre = currentMovie.genre;
    const movieArray = Object.values(MATRIX_MOVIE_DB);
    
    return movieArray
        .filter(movie => 
            movie.imdbID !== currentMovie.imdbID && (
                movie.genre.includes(currentGenre.split(',')[0].trim()) || 
                Math.floor(movie.year / 10) * 10 === currentDecade
            )
        )
        .slice(0, limit)
        .map(movie => ({
            ...movie,
            slug: MATRIX_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ MATRIX COLLECTION METADATA
export const MATRIX_COLLECTION_META = {
    title: 'Top 10 Movies Like The Matrix',
    description: 'Discover mind-bending cyberpunk and sci-fi thriller films. From Dark City to Inception - philosophical cyber-noir masterpieces that explore reality and consciousness.',
    keywords: 'movies like matrix, cyberpunk movies, philosophical sci-fi, mind-bending thrillers, best matrix-like films, cyber noir',
    canonicalUrl: 'https://filmiway.com/collection/movies-like-the-matrix',
    ogImage: 'https://filmiway.com/images/matrix-movies-collection.jpg',
    totalMovies: Object.keys(MATRIX_MOVIE_DB).length,
    averageComplexity: Math.round(
        Object.values(MATRIX_MOVIE_DB).reduce((sum, movie) => {
            return sum + (movie.sciFiComplexity || movie.complexityScore || 0);
        }, 0) / Object.keys(MATRIX_MOVIE_DB).length
    )
};

// ✅ GENERATE MATRIX MOVIE SITEMAP URLS
export const generateMatrixMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/movies-like-the-matrix`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    Object.values(MATRIX_MOVIE_DB).forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/movies-like-the-matrix/${MATRIX_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE MATRIX MOVIE SLUG
export const isValidMatrixMovieSlug = (slug) => {
    return Object.values(MATRIX_MOVIE_SLUGS).includes(slug);
};

// ✅ MATRIX MOVIE SEARCH/FILTER UTILITIES
export const searchMatrixMovies = (query) => {
    const lowercaseQuery = query.toLowerCase();
    const movieArray = Object.values(MATRIX_MOVIE_DB);
    
    return movieArray
        .filter(movie => {
            return movie.title.toLowerCase().includes(lowercaseQuery) ||
                movie.genre.toLowerCase().includes(lowercaseQuery) ||
                movie.director?.toLowerCase().includes(lowercaseQuery) ||
                movie.year.toString().includes(query);
        })
        .map(movie => ({
            ...movie,
            slug: MATRIX_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterMatrixMoviesByGenre = (genre) => {
    if (genre === 'All') return Object.values(MATRIX_MOVIE_DB);
    
    const movieArray = Object.values(MATRIX_MOVIE_DB);
    return movieArray
        .filter(movie => movie.genre.includes(genre))
        .map(movie => ({
            ...movie,
            slug: MATRIX_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ SORTING UTILITIES
export const sortMatrixMovies = (movies, sortBy) => {
    const sortedMovies = [...movies];
    
    switch (sortBy) {
        case 'rating':
            return sortedMovies.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        case 'year':
            return sortedMovies.sort((a, b) => b.year - a.year);
        case 'complexity':
            return sortedMovies.sort((a, b) => {
                const complexityA = b.sciFiComplexity || b.complexityScore || 0;
                const complexityB = a.sciFiComplexity || a.complexityScore || 0;
                return complexityA - complexityB;
            });
        case 'runtime':
            const getRuntimeMinutes = (runtime) => {
                if (typeof runtime === 'number') return runtime;
                if (typeof runtime === 'string') {
                    const match = runtime.match(/(\d+)/);
                    return match ? parseInt(match[1]) : 0;
                }
                return 0;
            };
            return sortedMovies.sort((a, b) => 
                getRuntimeMinutes(b.runtime) - getRuntimeMinutes(a.runtime)
            );
        default:
            return sortedMovies;
    }
};

// ✅ GET MATRIX MOVIE COLLECTION STATS
export const getMatrixCollectionStats = () => {
    const movieArray = Object.values(MATRIX_MOVIE_DB);
    const genres = [...new Set(movieArray.flatMap(m => m.genre.split(',').map(g => g.trim())))];
    const decades = [...new Set(movieArray.map(m => Math.floor(m.year / 10) * 10))];
    const yearRange = {
        earliest: Math.min(...movieArray.map(m => m.year)),
        latest: Math.max(...movieArray.map(m => m.year))
    };
    
    const getRuntimeMinutes = (runtime) => {
        if (typeof runtime === 'number') return runtime;
        if (typeof runtime === 'string') {
            const match = runtime.match(/(\d+)/);
            return match ? parseInt(match[1]) : 0;
        }
        return 0;
    };
    
    return {
        totalMovies: movieArray.length,
        genres: genres.length,
        genreList: genres,
        decades: decades.sort((a, b) => a - b),
        yearRange,
        averageYear: Math.round(
            movieArray.reduce((sum, m) => sum + m.year, 0) / movieArray.length
        ),
        averageRuntime: Math.round(
            movieArray.reduce((sum, m) => sum + getRuntimeMinutes(m.runtime), 0) / movieArray.length
        ),
        averageComplexity: Math.round(
            movieArray.reduce((sum, m) => {
                return sum + (m.sciFiComplexity || m.complexityScore || 0);
            }, 0) / movieArray.length
        ),
        averageRating: (
            movieArray.reduce((sum, m) => {
                return sum + (m.rating || 0);
            }, 0) / movieArray.length
        ).toFixed(1)
    };
};

// ✅ EXPORT ALL UTILITIES AS DEFAULT
export default {
    generateMovieSlug,
    MATRIX_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateMatrixMoviePaths,
    getMatrixMovieBreadcrumbs,
    getMatrixMovieNavigation,
    getRelatedMatrixMovies,
    MATRIX_COLLECTION_META,
    generateMatrixMovieSitemapUrls,
    isValidMatrixMovieSlug,
    searchMatrixMovies,
    filterMatrixMoviesByGenre,
    sortMatrixMovies,
    getMatrixCollectionStats
};
