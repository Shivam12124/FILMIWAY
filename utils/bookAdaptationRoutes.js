// utils/bookAdaptationRoutes.js - SSG ROUTE MAPPING FOR BOOK ADAPTATION COLLECTION ✅

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './bookAdaptationData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE BOOK ADAPTATION MOVIE SLUG MAPPING 
export const BOOK_ADAPTATION_SLUGS = {
    // Rank 1: The Shawshank Redemption
    'tt0111161': 'the-shawshank-redemption',
    
    // Rank 2: The Lord of the Rings: The Return of the King
    'tt0167260': 'the-lord-of-the-rings-the-return-of-the-king',
    
    // Rank 3: One Flew Over the Cuckoo's Nest
    'tt0073486': 'one-flew-over-the-cuckoos-nest',
    
    // Rank 4: The Green Mile
    'tt0120689': 'the-green-mile',
    
    // Rank 5: Trainspotting
    'tt0117951': 'trainspotting',
    
    // Rank 6: Room
    'tt3170832': 'room',
    
    // Rank 7: Brokeback Mountain
    'tt0388795': 'brokeback-mountain',
    
    // Rank 8: The Reader
    'tt0976051': 'the-reader',
    
    // Rank 9: Carol
    'tt2402927': 'carol',
    
    // Rank 10: Under the Skin
    'tt1441395': 'under-the-skin'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(BOOK_ADAPTATION_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return BOOK_ADAPTATION_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR BOOK ADAPTATION MOVIES
export const generateBookAdaptationPaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: BOOK_ADAPTATION_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ BOOK ADAPTATION MOVIE NAVIGATION BREADCRUMBS
export const getBookAdaptationBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Top 10 Book Adaptations', href: '/collection/top-10-book-adaptations' },
        { label: movie.Title, href: `/movie/${BOOK_ADAPTATION_SLUGS[movie.imdbID]}` } 
    ];
};

// ✅ GET NEXT/PREVIOUS BOOK ADAPTATION MOVIE
export const getBookAdaptationNavigation = (currentMovie) => {
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
            slug: BOOK_ADAPTATION_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: BOOK_ADAPTATION_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED BOOK ADAPTATION MOVIES (SAME GENRE/DECADE)
export const getRelatedBookAdaptations = (currentMovie, limit = 3) => {
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
            slug: BOOK_ADAPTATION_SLUGS[movie.imdbID]
        }));
};

// ✅ GENERATE BOOK ADAPTATION MOVIE SITEMAP URLS
export const generateBookAdaptationSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/top-10-book-adaptations`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/movie/${BOOK_ADAPTATION_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'weekly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE BOOK ADAPTATION MOVIE SLUG
export const isValidBookAdaptationSlug = (slug) => {
    return Object.values(BOOK_ADAPTATION_SLUGS).includes(slug);
};

// ✅ BOOK ADAPTATION MOVIE SEARCH/FILTER UTILITIES
export const searchBookAdaptations = (query) => {
    const lowercaseQuery = query.toLowerCase();
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => 
            movie.Title.toLowerCase().includes(lowercaseQuery) ||
            movie.genre.toLowerCase().includes(lowercaseQuery) ||
            movie.year.toString().includes(query)
        )
        .map(movie => ({
            ...movie,
            slug: BOOK_ADAPTATION_SLUGS[movie.imdbID]
        }));
};

export const filterBookAdaptationsByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: BOOK_ADAPTATION_SLUGS[movie.imdbID]
        }));
};

// ✅ FIXED SORTING - NOW USES REAL DATA FROM COMPLETE_MOVIE_DATA
export const sortBookAdaptations = (movies, sortBy) => {
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
        case 'literaryDepth': // ✅ Custom metric for the Book Adaptation collection
            return sortedMovies.sort((a, b) => {
                const scoreA = COMPLETE_MOVIE_DATA[a.tmdbId]?.literaryDepth || 0;
                const scoreB = COMPLETE_MOVIE_DATA[b.tmdbId]?.literaryDepth || 0;
                return scoreB - scoreA; 
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET BOOK ADAPTATION COLLECTION STATS
export const getBookAdaptationCollectionStats = () => {
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
        // ✅ ADDED - AVERAGE LITERARY DEPTH SCORE
        averageLiteraryDepth: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                const score = COMPLETE_MOVIE_DATA[m.tmdbId]?.literaryDepth || 90;
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
    BOOK_ADAPTATION_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateBookAdaptationPaths,
    getBookAdaptationBreadcrumbs,
    getBookAdaptationNavigation,
    getRelatedBookAdaptations,
    generateBookAdaptationSitemapUrls,
    isValidBookAdaptationSlug,
    searchBookAdaptations,
    filterBookAdaptationsByGenre,
    sortBookAdaptations,
    getBookAdaptationCollectionStats
};