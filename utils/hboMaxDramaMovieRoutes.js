// utils/hboMaxDramaMovieRoutes.js - SSG ROUTE MAPPING FOR HBO MAX DRAMA COLLECTION

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './hboMaxDramaMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens
        .trim();
};

// ✅ COMPLETE HBO MAX DRAMA MOVIE SLUG MAPPING
export const HBO_DRAMA_MOVIE_SLUGS = {
    // Rank 1: Moonlight
    'tt4975722': 'moonlight',
    
    // Rank 2: The Brutalist
    'tt8999762': 'the-brutalist',
    
    // Rank 3: Paris, Texas
    'tt0087884': 'paris-texas',
    
    // Rank 4: Taxi Driver
    'tt0075314': 'taxi-driver',
    
    // Rank 5: Past Lives
    'tt13238346': 'past-lives',
    
    // Rank 6: The Battle of Algiers
    'tt0058946': 'the-battle-of-algiers',
    
    // Rank 7: Sing Sing
    'tt28479262': 'sing-sing',
    
    // Rank 8: The Color Purple
    'tt0088939': 'the-color-purple',
    
    // Rank 9: Shame
    'tt1723811': 'shame',
    
    // Rank 10: Joker
    'tt7286456': 'joker'
};
// ✅ REVERSE SLUG MAPPING (SLUG TO TMDB ID)
export const SLUG_TO_TMDB = Object.fromEntries(
    Object.entries(HBO_DRAMA_MOVIE_SLUGS).map(([tmdbId, slug]) => [slug, parseInt(tmdbId)])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const tmdbId = SLUG_TO_TMDB[slug];
    if (!tmdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.tmdbId === tmdbId);
};

// ✅ GET MOVIE SLUG BY TMDB ID
export const getMovieSlug = (tmdbId) => {
    return HBO_DRAMA_MOVIE_SLUGS[tmdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR HBO MAX DRAMA MOVIES
export const generateHboMaxDramaMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: HBO_DRAMA_MOVIE_SLUGS[movie.tmdbId]
        }
    }));
};

// ✅ BREADCRUMBS
export const getHboMaxDramaMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Best Drama Movies on HBO Max', href: '/collection/best-drama-movies-on-hbo-max' },
        { label: movie.Title, href: `/collection/best-drama-movies-on-hbo-max/${HBO_DRAMA_MOVIE_SLUGS[movie.tmdbId]}` }
    ];
};

// ✅ NAVIGATION (Next/Prev)
export const getHboMaxDramaMovieNavigation = (currentMovie) => {
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
            slug: HBO_DRAMA_MOVIE_SLUGS[previousMovie.tmdbId]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: HBO_DRAMA_MOVIE_SLUGS[nextMovie.tmdbId]
        } : null
    };
};

// ✅ RELATED MOVIES (Same Genre/Decade)
export const getRelatedHboMaxDramaMovies = (currentMovie, limit = 3) => {
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
            slug: HBO_DRAMA_MOVIE_SLUGS[movie.tmdbId]
        }));
};

// ✅ COLLECTION METADATA
export const HBO_DRAMA_COLLECTION_META = {
    title: 'Top 10 Best Drama Movies on HBO Max (2025)',
    description: 'Expert-ranked list of the most emotionally powerful dramas streaming on HBO Max. From Moonlight to Taxi Driver, featuring deep character studies and moving storytelling.',
    keywords: 'best drama movies on hbo max, hbo max dramas, emotional movies hbo max, moonlight, taxi driver, paris texas, tearjerkers hbo max',
    canonicalUrl: 'https://filmiway.com/collection/best-drama-movies-on-hbo-max',
    ogImage: 'https://filmiway.com/images/hbo-drama-movies-collection.jpg',
    totalMovies: COMPLETE_MOVIE_DATABASE.length,
    averageEmotionalScore: Math.round(
        COMPLETE_MOVIE_DATABASE.reduce((sum, movie) => {
            const data = COMPLETE_MOVIE_DATA[movie.tmdbId];
            return sum + (data?.emotionalIntensity || 85); 
        }, 0) / COMPLETE_MOVIE_DATABASE.length
    )
};

// ✅ SITEMAP URLS
export const generateHboMaxDramaMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-drama-movies-on-hbo-max`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/best-drama-movies-on-hbo-max/${HBO_DRAMA_MOVIE_SLUGS[movie.tmdbId]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ SEARCH & FILTER
export const searchHboMaxDramaMovies = (query) => {
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
            slug: HBO_DRAMA_MOVIE_SLUGS[movie.tmdbId]
        }));
};

export const filterHboMaxDramaMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: HBO_DRAMA_MOVIE_SLUGS[movie.tmdbId]
        }));
};

// ✅ SORTING (By Emotional Intensity)
export const sortHboMaxDramaMovies = (movies, sortBy) => {
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
        case 'emotion': // New sort key for Drama
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
export const getHboMaxDramaCollectionStats = () => {
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
    HBO_DRAMA_MOVIE_SLUGS,
    SLUG_TO_TMDB,
    getMovieBySlug,
    getMovieSlug,
    generateHboMaxDramaMoviePaths,
    getHboMaxDramaMovieBreadcrumbs,
    getHboMaxDramaMovieNavigation,
    getRelatedHboMaxDramaMovies,
    HBO_DRAMA_COLLECTION_META,
    generateHboMaxDramaMovieSitemapUrls,
    searchHboMaxDramaMovies,
    filterHboMaxDramaMoviesByGenre,
    sortHboMaxDramaMovies,
    getHboMaxDramaCollectionStats
};