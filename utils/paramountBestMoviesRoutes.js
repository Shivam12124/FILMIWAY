// utils/paramountBestMoviesRoutes.js - SSG ROUTE MAPPING FOR BEST MOVIES ON PARAMOUNT+ COLLECTION

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './paramountBestMoviesData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE PARAMOUNT+ BEST MOVIE SLUG MAPPING
// Using TMDB IDs to match the Data File structure
export const PARAMOUNT_BEST_MOVIE_SLUGS = {
    // Rank 1: Pulp Fiction
    '680': 'pulp-fiction',
    
    
    // Rank 3: Interstellar
    '157336': 'interstellar',

        // Rank 2: Forrest Gump
    '13': 'forrest-gump',
    
    // Rank 4: Gladiator
    '98': 'gladiator',
    
    // Rank 5: Sunset Boulevard
    '599': 'sunset-boulevard',
    
    // Rank 6: The Wolf of Wall Street
    '106646': 'the-wolf-of-wall-street',
    
    // Rank 7: No Country for Old Men
    '6977': 'no-country-for-old-men',
    
    // Rank 8: There Will Be Blood
    '7345': 'there-will-be-blood',
    
    // Rank 9: Top Gun: Maverick
    '361743': 'top-gun-maverick',
    
    // Rank 10: Catch Me If You Can
    '640': 'catch-me-if-you-can'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO TMDB ID)
export const SLUG_TO_TMDB = Object.fromEntries(
    Object.entries(PARAMOUNT_BEST_MOVIE_SLUGS).map(([tmdbId, slug]) => [slug, parseInt(tmdbId)])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const tmdbId = SLUG_TO_TMDB[slug];
    if (!tmdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.tmdbId === tmdbId);
};

// ✅ GET MOVIE SLUG BY TMDB ID
export const getMovieSlug = (tmdbId) => {
    return PARAMOUNT_BEST_MOVIE_SLUGS[tmdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS
export const generateParamountBestMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: PARAMOUNT_BEST_MOVIE_SLUGS[movie.tmdbId]
        }
    }));
};

// ✅ BREADCRUMBS GENERATOR
export const getParamountBestMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Best Movies on Paramount+', href: '/collection/best-movies-on-paramount-plus' },
        { label: movie.Title, href: `/collection/best-movies-on-paramount-plus/${PARAMOUNT_BEST_MOVIE_SLUGS[movie.tmdbId]}` }
    ];
};

// ✅ NEXT/PREVIOUS NAVIGATION
export const getParamountBestMovieNavigation = (currentMovie) => {
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
            slug: PARAMOUNT_BEST_MOVIE_SLUGS[previousMovie.tmdbId]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: PARAMOUNT_BEST_MOVIE_SLUGS[nextMovie.tmdbId]
        } : null
    };
};

// ✅ RELATED MOVIES (Same Genre/Decade)
export const getRelatedParamountBestMovies = (currentMovie, limit = 3) => {
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
            slug: PARAMOUNT_BEST_MOVIE_SLUGS[movie.tmdbId]
        }));
};

// ✅ COLLECTION METADATA
export const PARAMOUNT_BEST_COLLECTION_META = {
    title: 'Top 10 Best Movies on Paramount+',
    description: 'The definitive ranking of the highest-rated films streaming on Paramount+ right now. From Pulp Fiction to Top Gun: Maverick.',
    keywords: 'best movies on paramount plus, paramount plus top movies, pulp fiction, forrest gump, interstellar, top gun maverick, top rated paramount films',
    canonicalUrl: 'https://filmiway.com/collection/best-movies-on-paramount-plus',
    ogImage: 'https://filmiway.com/images/paramount-best-movies-collection.jpg',
    totalMovies: COMPLETE_MOVIE_DATABASE.length,
    averageRating: Math.round(
        COMPLETE_MOVIE_DATABASE.reduce((sum, movie) => {
            const data = COMPLETE_MOVIE_DATA[movie.tmdbId];
            return sum + (data?.rating || 8.0); 
        }, 0) / COMPLETE_MOVIE_DATABASE.length * 10
    ) / 10
};

// ✅ SITEMAP URL GENERATOR
export const generateParamountBestMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-movies-on-paramount-plus`,
            lastmod: new Date().toISOString(),
            priority: '0.9',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/best-movies-on-paramount-plus/${PARAMOUNT_BEST_MOVIE_SLUGS[movie.tmdbId]}`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE SLUG
export const isValidParamountBestMovieSlug = (slug) => {
    return Object.values(PARAMOUNT_BEST_MOVIE_SLUGS).includes(slug);
};

// ✅ SEARCH/FILTER UTILITIES
export const searchParamountBestMovies = (query) => {
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
            slug: PARAMOUNT_BEST_MOVIE_SLUGS[movie.tmdbId]
        }));
};

export const filterParamountBestMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: PARAMOUNT_BEST_MOVIE_SLUGS[movie.tmdbId]
        }));
};

// ✅ SORTING
export const sortParamountBestMovies = (movies, sortBy) => {
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
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET COLLECTION STATS
export const getParamountBestCollectionStats = () => {
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
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.rating || 8.0);
            }, 0) / COMPLETE_MOVIE_DATABASE.length
        ).toFixed(1)
    };
};

export default {
    generateMovieSlug,
    PARAMOUNT_BEST_MOVIE_SLUGS,
    SLUG_TO_TMDB,
    getMovieBySlug,
    getMovieSlug,
    generateParamountBestMoviePaths,
    getParamountBestMovieBreadcrumbs,
    getParamountBestMovieNavigation,
    getRelatedParamountBestMovies,
    PARAMOUNT_BEST_COLLECTION_META,
    generateParamountBestMovieSitemapUrls,
    isValidParamountBestMovieSlug,
    searchParamountBestMovies,
    filterParamountBestMoviesByGenre,
    sortParamountBestMovies,
    getParamountBestCollectionStats
};