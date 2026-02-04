// utils/paramountComedyMovieRoutes.js - SSG ROUTE MAPPING FOR PARAMOUNT+ COMEDY COLLECTION

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './paramountComedyMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE PARAMOUNT+ COMEDY MOVIE SLUG MAPPING
// Using TMDB IDs to match the Data File structure
export const PARAMOUNT_COMEDY_MOVIE_SLUGS = {
    // Rank 1: Tropic Thunder
    '7446': 'tropic-thunder',
    
    // Rank 2: Anchorman: The Legend of Ron Burgundy
    '8699': 'anchorman-the-legend-of-ron-burgundy',
    
    // Rank 3: The Naked Gun
    '37136': 'the-naked-gun',
    
    // Rank 4: Scary Movie
    '4247': 'scary-movie',
    
    // Rank 5: The Other Guys
    '27581': 'the-other-guys',
    
    // Rank 6: School of Rock
    '1584': 'school-of-rock',
    
    // Rank 7: The Wolf of Wall Street
    '106646': 'the-wolf-of-wall-street',
    
    // Rank 8: Wayne's World
    '8872': 'waynes-world',
    
    // Rank 9: Planes, Trains and Automobiles
    '2609': 'planes-trains-and-automobiles',
    
    // Rank 10: Trading Places
    '1621': 'trading-places'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO TMDB ID)
export const SLUG_TO_TMDB = Object.fromEntries(
    Object.entries(PARAMOUNT_COMEDY_MOVIE_SLUGS).map(([tmdbId, slug]) => [slug, parseInt(tmdbId)])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const tmdbId = SLUG_TO_TMDB[slug];
    if (!tmdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.tmdbId === tmdbId);
};

// ✅ GET MOVIE SLUG BY TMDB ID
export const getMovieSlug = (tmdbId) => {
    return PARAMOUNT_COMEDY_MOVIE_SLUGS[tmdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS
export const generateParamountComedyMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: PARAMOUNT_COMEDY_MOVIE_SLUGS[movie.tmdbId]
        }
    }));
};

// ✅ BREADCRUMBS GENERATOR
export const getParamountComedyMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Best Comedy Movies on Paramount+', href: '/collection/best-comedy-movies-on-paramount-plus' },
        { label: movie.Title, href: `/collection/best-comedy-movies-on-paramount-plus/${PARAMOUNT_COMEDY_MOVIE_SLUGS[movie.tmdbId]}` }
    ];
};

// ✅ NEXT/PREVIOUS NAVIGATION
export const getParamountComedyMovieNavigation = (currentMovie) => {
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
            slug: PARAMOUNT_COMEDY_MOVIE_SLUGS[previousMovie.tmdbId]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: PARAMOUNT_COMEDY_MOVIE_SLUGS[nextMovie.tmdbId]
        } : null
    };
};

// ✅ RELATED MOVIES (Same Genre/Decade)
export const getRelatedParamountComedyMovies = (currentMovie, limit = 3) => {
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
            slug: PARAMOUNT_COMEDY_MOVIE_SLUGS[movie.tmdbId]
        }));
};

// ✅ COLLECTION METADATA
export const PARAMOUNT_COMEDY_COLLECTION_META = {
    title: '10 Best Comedy Movies on Paramount+ (Ranked by Laughter)',
    description: 'The definitive ranking of the funniest movies on Paramount+. From the satire of Tropic Thunder to the absurdity of Anchorman.',
    keywords: 'best comedy movies on paramount plus, paramount plus comedy films, tropic thunder, anchorman, naked gun, school of rock, comedy rankings 2026',
    canonicalUrl: 'https://filmiway.com/collection/best-comedy-movies-on-paramount-plus',
    ogImage: 'https://filmiway.com/images/paramount-comedy-collection-og.jpg',
    totalMovies: COMPLETE_MOVIE_DATABASE.length,
    // ✅ Uses "Laughter Index" for the main stat
    averageLaughterScore: Math.round(
        COMPLETE_MOVIE_DATABASE.reduce((sum, movie) => {
            const data = COMPLETE_MOVIE_DATA[movie.tmdbId];
            return sum + (data?.laughterIndex || 85); 
        }, 0) / COMPLETE_MOVIE_DATABASE.length
    )
};

// ✅ SITEMAP URL GENERATOR
export const generateParamountComedyMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-comedy-movies-on-paramount-plus`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/best-comedy-movies-on-paramount-plus/${PARAMOUNT_COMEDY_MOVIE_SLUGS[movie.tmdbId]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE SLUG
export const isValidParamountComedyMovieSlug = (slug) => {
    return Object.values(PARAMOUNT_COMEDY_MOVIE_SLUGS).includes(slug);
};

// ✅ SEARCH/FILTER UTILITIES
export const searchParamountComedyMovies = (query) => {
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
            slug: PARAMOUNT_COMEDY_MOVIE_SLUGS[movie.tmdbId]
        }));
};

export const filterParamountComedyMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: PARAMOUNT_COMEDY_MOVIE_SLUGS[movie.tmdbId]
        }));
};

// ✅ SORTING UTILITIES
export const sortParamountComedyMovies = (movies, sortBy) => {
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
        case 'laughter': // ✅ Sorting by "Laughter Index"
            return sortedMovies.sort((a, b) => {
                const scoreA = COMPLETE_MOVIE_DATA[a.tmdbId]?.laughterIndex || 0;
                const scoreB = COMPLETE_MOVIE_DATA[b.tmdbId]?.laughterIndex || 0;
                return scoreB - scoreA;
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET COLLECTION STATS
export const getParamountComedyCollectionStats = () => {
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
        // ✅ Average Laughter Score
        averageLaughterScore: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.laughterIndex || 85);
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
    PARAMOUNT_COMEDY_MOVIE_SLUGS,
    SLUG_TO_TMDB,
    getMovieBySlug,
    getMovieSlug,
    generateParamountComedyMoviePaths,
    getParamountComedyMovieBreadcrumbs,
    getParamountComedyMovieNavigation,
    getRelatedParamountComedyMovies,
    PARAMOUNT_COMEDY_COLLECTION_META,
    generateParamountComedyMovieSitemapUrls,
    isValidParamountComedyMovieSlug,
    searchParamountComedyMovies,
    filterParamountComedyMoviesByGenre,
    sortParamountComedyMovies,
    getParamountComedyCollectionStats
};