// utils/blackSwanMovieRoutes.js - COMPLETELY FIXED SSG ROUTE MAPPING FOR BLACK SWAN COLLECTION

import { COMPLETE_MOVIE_DATABASE } from './blackSwanMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE BLACK SWAN MOVIE SLUG MAPPING
export const BLACK_SWAN_MOVIE_SLUGS = {
    // Rank 1: Perfect Blue
    'tt0119994': 'perfect-blue',
    
    // Rank 2: Whiplash
    'tt2582802': 'whiplash',
    
    // Rank 3: Suspiria
    'tt1034415': 'suspiria',
    
    // Rank 4: The Red Shoes
    'tt0040563': 'the-red-shoes',
    
    // Rank 5: The Wrestler
    'tt1135089': 'the-wrestler',
    
    // Rank 6: Mulholland Drive
    'tt0166924': 'mulholland-drive',
    
    // Rank 7: The Piano Teacher
    'tt0254686': 'the-piano-teacher',
    
    // Rank 8: Birdman
    'tt2562232': 'birdman',
    
    // Rank 9: Requiem for a Dream
    'tt0180093': 'requiem-for-a-dream',
    
    // Rank 10: Nightcrawler
    'tt2872718': 'nightcrawler'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(BLACK_SWAN_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG - FIXED
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return BLACK_SWAN_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR BLACK SWAN MOVIES - FIXED
export const generateBlackSwanMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: BLACK_SWAN_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ BLACK SWAN MOVIE NAVIGATION BREADCRUMBS
export const getBlackSwanMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Movies Like Black Swan', href: '/collection/movies-like-black-swan' },
        { label: movie.Title, href: `/collection/movies-like-black-swan/${BLACK_SWAN_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS BLACK SWAN MOVIE - FIXED
export const getBlackSwanMovieNavigation = (currentMovie) => {
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
            slug: BLACK_SWAN_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: BLACK_SWAN_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED BLACK SWAN MOVIES (SAME GENRE/DECADE)
export const getRelatedBlackSwanMovies = (currentMovie, limit = 3) => {
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
            slug: BLACK_SWAN_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ BLACK SWAN COLLECTION METADATA - FIXED WITH REAL DATA
export const BLACK_SWAN_COLLECTION_META = {
    title: 'Top 10 Movies Like Black Swan',
    description: 'Discover the most intense psychological thrillers about obsession, perfectionism, and identity collapse. From Perfect Blue to Whiplash.',
    keywords: 'movies like black swan, psychological thrillers, obsession films, perfectionism movies, identity crisis cinema',
    canonicalUrl: 'https://filmiway.com/collection/movies-like-black-swan',
    ogImage: 'https://filmiway.com/images/black-swan-movies-collection.jpg',
    totalMovies: COMPLETE_MOVIE_DATABASE.length,
    // ✅ FIXED - NOW USES REAL CLASS WARFARE INDEX DATA
    averageClassWarfareIndex: Math.round(
        COMPLETE_MOVIE_DATABASE.reduce((sum, movie) => {
            return sum + movie.classWarfareIndex; // NOW USES REAL DATA
        }, 0) / COMPLETE_MOVIE_DATABASE.length
    )
};

// ✅ GENERATE BLACK SWAN MOVIE SITEMAP URLS
export const generateBlackSwanMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/movies-like-black-swan`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/movies-like-black-swan/${BLACK_SWAN_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE BLACK SWAN MOVIE SLUG
export const isValidBlackSwanMovieSlug = (slug) => {
    return Object.values(BLACK_SWAN_MOVIE_SLUGS).includes(slug);
};

// ✅ BLACK SWAN MOVIE SEARCH/FILTER UTILITIES - FIXED
export const searchBlackSwanMovies = (query) => {
    const lowercaseQuery = query.toLowerCase();
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => 
            movie.Title.toLowerCase().includes(lowercaseQuery) ||
            movie.genre.toLowerCase().includes(lowercaseQuery) ||
            movie.director.toLowerCase().includes(lowercaseQuery) ||
            movie.year.toString().includes(query)
        )
        .map(movie => ({
            ...movie,
            slug: BLACK_SWAN_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterBlackSwanMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: BLACK_SWAN_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ FIXED SORTING - NOW USES REAL DATA
export const sortBlackSwanMovies = (movies, sortBy) => {
    const sortedMovies = [...movies];
    
    switch (sortBy) {
        case 'rating':
            return sortedMovies.sort((a, b) => b.rating - a.rating); // ✅ FIXED - REAL RATINGS
        case 'year':
            return sortedMovies.sort((a, b) => b.year - a.year);
        case 'classWarfare':
            return sortedMovies.sort((a, b) => b.classWarfareIndex - a.classWarfareIndex); // ✅ FIXED - REAL DATA
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime); // ✅ ADDED
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET BLACK SWAN MOVIE COLLECTION STATS
export const getBlackSwanCollectionStats = () => {
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
        // ✅ ADDED - AVERAGE CLASS WARFARE INDEX
        averageClassWarfareIndex: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => sum + m.classWarfareIndex, 0) / COMPLETE_MOVIE_DATABASE.length
        ),
        // ✅ ADDED - AVERAGE RATING
        averageRating: (
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => sum + m.rating, 0) / COMPLETE_MOVIE_DATABASE.length
        ).toFixed(1)
    };
};

// ✅ EXPORT ALL UTILITIES
export default {
    generateMovieSlug,
    BLACK_SWAN_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateBlackSwanMoviePaths,
    getBlackSwanMovieBreadcrumbs,
    getBlackSwanMovieNavigation,
    getRelatedBlackSwanMovies,
    BLACK_SWAN_COLLECTION_META,
    generateBlackSwanMovieSitemapUrls,
    isValidBlackSwanMovieSlug,
    searchBlackSwanMovies,
    filterBlackSwanMoviesByGenre,
    sortBlackSwanMovies,
    getBlackSwanCollectionStats
};
