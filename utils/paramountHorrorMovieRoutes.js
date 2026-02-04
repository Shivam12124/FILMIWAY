// utils/paramountHorrorMovieRoutes.js - SSG ROUTE MAPPING FOR PARAMOUNT+ HORROR COLLECTION

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './paramountHorrorMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE PARAMOUNT+ HORROR MOVIE SLUG MAPPING
// Using TMDB IDs to match the Data File structure
export const PARAMOUNT_HORROR_MOVIE_SLUGS = {
    // Rank 1: Sinister
    '82507': 'sinister',
    
    // Rank 2: The Autopsy of Jane Doe
    '397243': 'the-autopsy-of-jane-doe',
    
    // Rank 3: Smile 2
    '1058609': 'smile-2',
    
    // Rank 4: Smile
    '882598': 'smile',
    
    // Rank 5: Event Horizon
    '8413': 'event-horizon',
    
    // Rank 6: A Quiet Place
    '447332': 'a-quiet-place',
    
    // Rank 7: Rosemary's Baby
    '805': 'rosemarys-baby',
    
    // Rank 8: Strange Darling
    '1024721': 'strange-darling',
    
    // Rank 9: A Quiet Place: Day One
    '762441': 'a-quiet-place-day-one',
    
    // Rank 10: Orphan: First Kill
    '760104': 'orphan-first-kill'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO TMDB ID)
export const SLUG_TO_TMDB = Object.fromEntries(
    Object.entries(PARAMOUNT_HORROR_MOVIE_SLUGS).map(([tmdbId, slug]) => [slug, parseInt(tmdbId)])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const tmdbId = SLUG_TO_TMDB[slug];
    if (!tmdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.tmdbId === tmdbId);
};

// ✅ GET MOVIE SLUG BY TMDB ID
export const getMovieSlug = (tmdbId) => {
    return PARAMOUNT_HORROR_MOVIE_SLUGS[tmdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS
export const generateParamountHorrorMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: PARAMOUNT_HORROR_MOVIE_SLUGS[movie.tmdbId]
        }
    }));
};

// ✅ BREADCRUMBS GENERATOR
export const getParamountHorrorMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Best Horror Movies on Paramount+', href: '/collection/best-horror-movies-on-paramount-plus' },
        { label: movie.Title, href: `/collection/best-horror-movies-on-paramount-plus/${PARAMOUNT_HORROR_MOVIE_SLUGS[movie.tmdbId]}` }
    ];
};

// ✅ NEXT/PREVIOUS NAVIGATION
export const getParamountHorrorMovieNavigation = (currentMovie) => {
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
            slug: PARAMOUNT_HORROR_MOVIE_SLUGS[previousMovie.tmdbId]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: PARAMOUNT_HORROR_MOVIE_SLUGS[nextMovie.tmdbId]
        } : null
    };
};

// ✅ RELATED MOVIES (Same Genre/Decade)
export const getRelatedParamountHorrorMovies = (currentMovie, limit = 3) => {
    const currentDecade = Math.floor(currentMovie.year / 10) * 10;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => 
            movie.tmdbId !== currentMovie.tmdbId && (
                Math.abs(movie.year - currentMovie.year) <= 10 || // Within 10 years
                movie.genre === currentMovie.genre
            )
        )
        .slice(0, limit)
        .map(movie => ({
            ...movie,
            slug: PARAMOUNT_HORROR_MOVIE_SLUGS[movie.tmdbId]
        }));
};

// ✅ COLLECTION METADATA
export const PARAMOUNT_HORROR_COLLECTION_META = {
    title: '10 Best Horror Movies on Paramount+ (Ranked by Scariness)',
    description: 'The definitive ranking of the scariest movies on Paramount+. From the science-backed terror of Sinister to the psychological dread of Smile.',
    keywords: 'best horror movies on paramount plus, paramount plus horror films, sinister, smile, a quiet place, rosemarys baby, horror rankings 2026',
    canonicalUrl: 'https://filmiway.com/collection/best-horror-movies-on-paramount-plus',
    ogImage: 'https://filmiway.com/images/paramount-horror-collection-og.jpg',
    totalMovies: COMPLETE_MOVIE_DATABASE.length,
    // ✅ Uses "Scariness" for the main stat
    averageScariness: Math.round(
        COMPLETE_MOVIE_DATABASE.reduce((sum, movie) => {
            const data = COMPLETE_MOVIE_DATA[movie.tmdbId];
            return sum + (data?.scariness || 85); 
        }, 0) / COMPLETE_MOVIE_DATABASE.length
    )
};

// ✅ SITEMAP URL GENERATOR
export const generateParamountHorrorMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-horror-movies-on-paramount-plus`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/best-horror-movies-on-paramount-plus/${PARAMOUNT_HORROR_MOVIE_SLUGS[movie.tmdbId]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE SLUG
export const isValidParamountHorrorMovieSlug = (slug) => {
    return Object.values(PARAMOUNT_HORROR_MOVIE_SLUGS).includes(slug);
};

// ✅ SEARCH/FILTER UTILITIES
export const searchParamountHorrorMovies = (query) => {
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
            slug: PARAMOUNT_HORROR_MOVIE_SLUGS[movie.tmdbId]
        }));
};

export const filterParamountHorrorMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: PARAMOUNT_HORROR_MOVIE_SLUGS[movie.tmdbId]
        }));
};

// ✅ SORTING UTILITIES
export const sortParamountHorrorMovies = (movies, sortBy) => {
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
        case 'scariness': // ✅ Sorting by "Scariness"
            return sortedMovies.sort((a, b) => {
                const scoreA = COMPLETE_MOVIE_DATA[a.tmdbId]?.scariness || 0;
                const scoreB = COMPLETE_MOVIE_DATA[b.tmdbId]?.scariness || 0;
                return scoreB - scoreA;
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET COLLECTION STATS
export const getParamountHorrorCollectionStats = () => {
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
        // ✅ Average Scariness
        averageScariness: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.scariness || 85);
            }, 0) / COMPLETE_MOVIE_DATABASE.length
        ),
        averageRating: (
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.rating || 7.0);
            }, 0) / COMPLETE_MOVIE_DATABASE.length
        ).toFixed(1)
    };
};

export default {
    generateMovieSlug,
    PARAMOUNT_HORROR_MOVIE_SLUGS,
    SLUG_TO_TMDB,
    getMovieBySlug,
    getMovieSlug,
    generateParamountHorrorMoviePaths,
    getParamountHorrorMovieBreadcrumbs,
    getParamountHorrorMovieNavigation,
    getRelatedParamountHorrorMovies,
    PARAMOUNT_HORROR_COLLECTION_META,
    generateParamountHorrorMovieSitemapUrls,
    isValidParamountHorrorMovieSlug,
    searchParamountHorrorMovies,
    filterParamountHorrorMoviesByGenre,
    sortParamountHorrorMovies,
    getParamountHorrorCollectionStats
};