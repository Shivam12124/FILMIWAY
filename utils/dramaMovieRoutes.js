// utils/dramaMovieRoutes.js - COMPLETELY FIXED SSG ROUTE MAPPING FOR DRAMA COLLECTION ✅

import { COMPLETE_MOVIE_DATABASE } from './dramaMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE DRAMA MOVIE SLUG MAPPING (IMDB ID TO SLUG)
export const DRAMA_MOVIE_SLUGS = {
    // Rank 1: 1917
    'tt8579674': '1917',
    
    // Rank 2: Roma
    'tt6155172': 'roma',
    
    // Rank 3: The Irishman
    'tt1302006': 'the-irishman',
    
    // Rank 4: Marriage Story
    'tt7653254': 'marriage-story',
    
    // Rank 5: The Social Network
    'tt1285016': 'the-social-network',
    
    // Rank 6: The Boy Who Harnessed the Wind
    'tt7533152': 'the-boy-who-harnessed-the-wind',
    
    // Rank 7: The Power of the Dog
    'tt10293406': 'the-power-of-the-dog',
    
    // Rank 8: Mudbound
    'tt2396589': 'mudbound',
    
    // Rank 9: The Pursuit of Happyness
    'tt0454921': 'the-pursuit-of-happyness',
    
    // Rank 10: Minari
    'tt10633456': 'minari'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(DRAMA_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG - FIXED
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return DRAMA_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR DRAMA MOVIES - FIXED
export const generateDramaMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: DRAMA_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ DRAMA MOVIE NAVIGATION BREADCRUMBS
export const getDramaMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Best Drama Movies on Netflix', href: '/collection/best-drama-movies-on-netflix' },
        { label: movie.Title, href: `/collection/best-drama-movies-on-netflix/${DRAMA_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS DRAMA MOVIE - FIXED
export const getDramaMovieNavigation = (currentMovie) => {
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
            slug: DRAMA_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: DRAMA_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED DRAMA MOVIES (SAME GENRE/DECADE)
export const getRelatedDramaMovies = (currentMovie, limit = 3) => {
    const currentDecade = Math.floor(currentMovie.year / 10) * 10;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => 
            movie.imdbID !== currentMovie.imdbID && (
                movie.genre === currentMovie.genre || 
                Math.floor(movie.year / 10) * 10 === currentDecade
            )
        )
        .slice(0, limit)
        .map(movie => ({
            ...movie,
            slug: DRAMA_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ DRAMA COLLECTION METADATA - FIXED WITH REAL DATA
export const DRAMA_COLLECTION_META = {
    title: 'Top 10 Drama Movies on Netflix',
    description: 'Discover award-winning dramas with powerful performances and emotional depth streaming on Netflix. From Roma to The Irishman.',
    keywords: 'best drama movies on netflix, award winning dramas, emotional movies, oscar winners netflix, cinematic masterpieces',
    canonicalUrl: 'https://filmiway.com/collection/best-drama-movies-on-netflix',
    ogImage: 'https://filmiway.com/images/drama-movies-collection.jpg',
    totalMovies: COMPLETE_MOVIE_DATABASE.length,
    // Uses real rating data for average
    averageRating: (
        COMPLETE_MOVIE_DATABASE.reduce((sum, m) => sum + (m.rating || 7.5), 0) / COMPLETE_MOVIE_DATABASE.length
    ).toFixed(1)
};

// ✅ GENERATE DRAMA MOVIE SITEMAP URLS
export const generateDramaMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-drama-movies-on-netflix`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/best-drama-movies-on-netflix/${DRAMA_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE DRAMA MOVIE SLUG
export const isValidDramaMovieSlug = (slug) => {
    return Object.values(DRAMA_MOVIE_SLUGS).includes(slug);
};

// ✅ DRAMA MOVIE SEARCH/FILTER UTILITIES - FIXED
export const searchDramaMovies = (query) => {
    const lowercaseQuery = query.toLowerCase();
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => 
            movie.Title.toLowerCase().includes(lowercaseQuery) ||
            movie.genre.toLowerCase().includes(lowercaseQuery) ||
            (movie.director && movie.director.toLowerCase().includes(lowercaseQuery)) ||
            movie.year.toString().includes(query)
        )
        .map(movie => ({
            ...movie,
            slug: DRAMA_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterDramaMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre.includes(genre))
        .map(movie => ({
            ...movie,
            slug: DRAMA_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ FIXED SORTING - NOW USES REAL DATA
export const sortDramaMovies = (movies, sortBy) => {
    const sortedMovies = [...movies];
    
    switch (sortBy) {
        case 'rating':
            return sortedMovies.sort((a, b) => b.rating - a.rating);
        case 'year':
            return sortedMovies.sort((a, b) => b.year - a.year);
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET DRAMA MOVIE COLLECTION STATS
export const getDramaCollectionStats = () => {
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
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => sum + (m.rating || 7.5), 0) / COMPLETE_MOVIE_DATABASE.length
        ).toFixed(1)
    };
};

// ✅ EXPORT ALL UTILITIES AND DEFAULT EXPORT FOR BACKWARD COMPATIBILITY
const dramaRoutes = {
    generateMovieSlug,
    DRAMA_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateDramaMoviePaths,
    getDramaMovieBreadcrumbs,
    getDramaMovieNavigation,
    getRelatedDramaMovies,
    DRAMA_COLLECTION_META,
    generateDramaMovieSitemapUrls,
    isValidDramaMovieSlug,
    searchDramaMovies,
    filterDramaMoviesByGenre,
    sortDramaMovies,
    getDramaCollectionStats,
    COMPLETE_MOVIE_DATABASE // Included for direct access if needed via default export
};

export default dramaRoutes;