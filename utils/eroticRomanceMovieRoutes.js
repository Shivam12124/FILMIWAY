// utils/eroticRomanceMovieRoutes.js - SSG ROUTE MAPPING FOR EROTIC ROMANCE COLLECTION ✅
// 100% SEO Safe - Framed around Intimacy and Passionate Storytelling

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './eroticRomanceMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE EROTIC ROMANCE MOVIE SLUG MAPPING
export const EROTIC_ROMANCE_MOVIE_SLUGS = {
    // Rank 1: Blue Is the Warmest Color
    'tt2278871': 'blue-is-the-warmest-color',
    
    // Rank 2: 365 Days
    'tt10886166': '365-days',
    
    // Rank 3: The Dreamers
    'tt0309987': 'the-dreamers',
    
    // Rank 4: Lady Chatterley's Lover
    'tt14369780': 'lady-chatterleys-lover',
    
    // Rank 5: Last Tango in Paris
    'tt0070849': 'last-tango-in-paris',
    
    // Rank 6: Fifty Shades Darker
    'tt4465564': 'fifty-shades-darker',
    
    // Rank 7: Fifty Shades of Grey
    'tt2322441': 'fifty-shades-of-grey',
    
    // Rank 8: Fifty Shades Freed
    'tt4465566': 'fifty-shades-freed',
    
    // Rank 9: Secretary
    'tt0274812': 'secretary',
    
    // Rank 10: Indecent Proposal
    'tt0107211': 'indecent-proposal'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(EROTIC_ROMANCE_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return EROTIC_ROMANCE_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR EROTIC ROMANCE MOVIES
export const generateEroticRomanceMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: EROTIC_ROMANCE_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ EROTIC ROMANCE MOVIE NAVIGATION BREADCRUMBS
export const getEroticRomanceMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Best Erotic Romance Movies', href: '/collection/best-erotic-romance-movies' },
        { label: movie.Title, href: `/movies/best-erotic-romance-movies/${EROTIC_ROMANCE_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS EROTIC ROMANCE MOVIE
export const getEroticRomanceMovieNavigation = (currentMovie) => {
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
            slug: EROTIC_ROMANCE_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: EROTIC_ROMANCE_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED EROTIC ROMANCE MOVIES (SAME GENRE/DECADE)
export const getRelatedEroticRomanceMovies = (currentMovie, limit = 3) => {
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
            slug: EROTIC_ROMANCE_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ GENERATE EROTIC ROMANCE MOVIE SITEMAP URLS
export const generateEroticRomanceMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-erotic-romance-movies`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/movies/best-erotic-romance-movies/${EROTIC_ROMANCE_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'weekly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE EROTIC ROMANCE MOVIE SLUG
export const isValidEroticRomanceMovieSlug = (slug) => {
    return Object.values(EROTIC_ROMANCE_MOVIE_SLUGS).includes(slug);
};

// ✅ EROTIC ROMANCE MOVIE SEARCH/FILTER UTILITIES
export const searchEroticRomanceMovies = (query) => {
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
            slug: EROTIC_ROMANCE_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterEroticRomanceMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: EROTIC_ROMANCE_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ FIXED SORTING - NOW USES REAL METRICS FROM DATA FILE
export const sortEroticRomanceMovies = (movies, sortBy) => {
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
        case 'eroticTension': // ✅ Swapped to our custom metric
            return sortedMovies.sort((a, b) => {
                const tensionA = COMPLETE_MOVIE_DATA[a.tmdbId]?.eroticTension || 0;
                const tensionB = COMPLETE_MOVIE_DATA[b.tmdbId]?.eroticTension || 0;
                return tensionB - tensionA;
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET EROTIC ROMANCE COLLECTION STATS
export const getEroticRomanceCollectionStats = () => {
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
        // ✅ ADDED - AVERAGE EROTIC TENSION INDEX
        averageEroticTension: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.eroticTension || 0);
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
    EROTIC_ROMANCE_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateEroticRomanceMoviePaths,
    getEroticRomanceMovieBreadcrumbs,
    getEroticRomanceMovieNavigation,
    getRelatedEroticRomanceMovies,
    generateEroticRomanceMovieSitemapUrls,
    isValidEroticRomanceMovieSlug,
    searchEroticRomanceMovies,
    filterEroticRomanceMoviesByGenre,
    sortEroticRomanceMovies,
    getEroticRomanceCollectionStats
};