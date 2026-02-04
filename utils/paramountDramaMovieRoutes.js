// utils/paramountDramaMovieRoutes.js - SSG ROUTE MAPPING FOR PARAMOUNT+ DRAMA COLLECTION

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './paramountDramaMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens
        .trim();
};

// ✅ COMPLETE PARAMOUNT+ DRAMA MOVIE SLUG MAPPING
export const PARAMOUNT_DRAMA_MOVIE_SLUGS = {
    // Rank 1: There Will Be Blood
    '7345': 'there-will-be-blood',
    
    // Rank 2: The English Patient
    '409': 'the-english-patient',
    
    // Rank 3: Fences
    '393457': 'fences',
    
    // Rank 4: Dead Man Walking
    '687': 'dead-man-walking',
    
    // Rank 5: Selma
    '273896': 'selma',
    
    // Rank 6: Silence
    '259693': 'silence',
    
    // Rank 7: One Life
    '995746': 'one-life',
    
    // Rank 8: I, Daniel Blake
    '374473': 'i-daniel-blake',
    
    // Rank 9: The Curious Case of Benjamin Button
    '4922': 'the-curious-case-of-benjamin-button',
    
    // Rank 10: Forrest Gump
    '13': 'forrest-gump'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO TMDB ID)
export const SLUG_TO_TMDB = Object.fromEntries(
    Object.entries(PARAMOUNT_DRAMA_MOVIE_SLUGS).map(([tmdbId, slug]) => [slug, parseInt(tmdbId)])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const tmdbId = SLUG_TO_TMDB[slug];
    if (!tmdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.tmdbId === tmdbId);
};

// ✅ GET MOVIE SLUG BY TMDB ID
export const getMovieSlug = (tmdbId) => {
    return PARAMOUNT_DRAMA_MOVIE_SLUGS[tmdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR PARAMOUNT+ DRAMA MOVIES
export const generateParamountDramaMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: PARAMOUNT_DRAMA_MOVIE_SLUGS[movie.tmdbId]
        }
    }));
};

// ✅ BREADCRUMBS
export const getParamountDramaMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Best Core Drama Movies on Paramount+', href: '/collection/best-core-drama-movies-on-paramount-plus' },
        { label: movie.Title, href: `/collection/best-core-drama-movies-on-paramount-plus/${PARAMOUNT_DRAMA_MOVIE_SLUGS[movie.tmdbId]}` }
    ];
};

// ✅ NAVIGATION (Next/Prev)
export const getParamountDramaMovieNavigation = (currentMovie) => {
    const currentIndex = COMPLETE_MOVIE_DATABASE.findIndex(m => m.tmdbId === currentMovie.tmdbId);
    
    const previousMovie = currentIndex > 0 
        ? COMPLETE_MOVIE_DATABASE[currentIndex - 1]
        : null;
        
    const nextMovie = currentIndex < COMPLETE_MOVIE_DATABASE.length - 1
        ? COMPLETE_MOVIE_DATABASE[currentIndex + 1]
        : null;
    
    return {
        previous: previousMovie ? {
            ...previousMovie,
            slug: PARAMOUNT_DRAMA_MOVIE_SLUGS[previousMovie.tmdbId]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: PARAMOUNT_DRAMA_MOVIE_SLUGS[nextMovie.tmdbId]
        } : null
    };
};

// ✅ RELATED MOVIES (Same Genre/Decade)
export const getRelatedParamountDramaMovies = (currentMovie, limit = 3) => {
    const currentDecade = Math.floor(currentMovie.year / 10) * 10;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => 
            movie.tmdbId !== currentMovie.tmdbId && (
                movie.genre === currentMovie.genre || 
                Math.floor(movie.year / 10) * 10 === currentDecade
            )
        )
        .slice(0, limit)
        .map(movie => ({
            ...movie,
            slug: PARAMOUNT_DRAMA_MOVIE_SLUGS[movie.tmdbId]
        }));
};

// ✅ COLLECTION METADATA
export const PARAMOUNT_DRAMA_COLLECTION_META = {
    title: 'Top 10 Best Core Drama Movies on Paramount+ (2026)',
    description: 'Expert-ranked list of the most emotionally powerful dramas streaming on Paramount+. From There Will Be Blood to Forrest Gump, featuring deep character studies and moving storytelling.',
    keywords: 'best drama movies on paramount plus, paramount plus core dramas, emotional movies paramount plus, there will be blood, forrest gump, fences, tearjerkers paramount plus',
    canonicalUrl: 'https://filmiway.com/collection/best-core-drama-movies-on-paramount-plus',
    ogImage: 'https://filmiway.com/images/paramount-drama-movies-collection.jpg',
    totalMovies: COMPLETE_MOVIE_DATABASE.length,
    averageEmotionalScore: Math.round(
        COMPLETE_MOVIE_DATABASE.reduce((sum, movie) => {
            const data = COMPLETE_MOVIE_DATA[movie.tmdbId];
            return sum + (data?.emotionalIntensity || 85); 
        }, 0) / COMPLETE_MOVIE_DATABASE.length
    )
};

// ✅ SITEMAP URLS
export const generateParamountDramaMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-core-drama-movies-on-paramount-plus`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/best-core-drama-movies-on-paramount-plus/${PARAMOUNT_DRAMA_MOVIE_SLUGS[movie.tmdbId]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ SEARCH & FILTER
export const searchParamountDramaMovies = (query) => {
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
            slug: PARAMOUNT_DRAMA_MOVIE_SLUGS[movie.tmdbId]
        }));
};

export const filterParamountDramaMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: PARAMOUNT_DRAMA_MOVIE_SLUGS[movie.tmdbId]
        }));
};

// ✅ SORTING (By Emotional Intensity)
export const sortParamountDramaMovies = (movies, sortBy) => {
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
        case 'emotion': // Sort key for Drama
            return sortedMovies.sort((a, b) => {
                const scoreA = COMPLETE_MOVIE_DATA[a.tmdbId]?.emotionalIntensity || 0;
                const scoreB = COMPLETE_MOVIE_DATA[b.tmdbId]?.emotionalIntensity || 0;
                return scoreB - scoreA;
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ STATS CALCULATOR
export const getParamountDramaCollectionStats = () => {
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
        averageEmotionalScore: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.emotionalIntensity || 85);
            }, 0) / COMPLETE_MOVIE_DATABASE.length
        ),
        averageRating: (
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.rating || 7.5);
            }, 0) / COMPLETE_MOVIE_DATABASE.length
        ).toFixed(1)
    };
};

export default {
    generateMovieSlug,
    PARAMOUNT_DRAMA_MOVIE_SLUGS,
    SLUG_TO_TMDB,
    getMovieBySlug,
    getMovieSlug,
    generateParamountDramaMoviePaths,
    getParamountDramaMovieBreadcrumbs,
    getParamountDramaMovieNavigation,
    getRelatedParamountDramaMovies,
    PARAMOUNT_DRAMA_COLLECTION_META,
    generateParamountDramaMovieSitemapUrls,
    searchParamountDramaMovies,
    filterParamountDramaMoviesByGenre,
    sortParamountDramaMovies,
    getParamountDramaCollectionStats
};