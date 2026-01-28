// utils/hboMaxComedyMovieRoutes.js - SSG ROUTE MAPPING FOR HBO MAX COMEDY COLLECTION

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './hboMaxComedyMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE HBO MAX COMEDY MOVIE SLUG MAPPING
export const HBO_MAX_COMEDY_MOVIE_SLUGS = {
    // Rank 1: City Lights
    'tt0021749': 'city-lights',
    
    // Rank 2: The Great Dictator
    'tt0032553': 'the-great-dictator',
    
    // Rank 3: Singin' in the Rain
    'tt0045152': 'singin-in-the-rain',
    
    // Rank 4: This Is Spinal Tap
    'tt0088258': 'this-is-spinal-tap',
    
    // Rank 5: When Harry Met Sally...
    'tt0098635': 'when-harry-met-sally',
    
    // Rank 6: Fargo
    'tt0116282': 'fargo',
    
    // Rank 7: Blazing Saddles
    'tt0071230': 'blazing-saddles',
    
    // Rank 8: A Hard Day's Night
    'tt0058182': 'a-hard-days-night',
    
    // Rank 9: Barbie
    'tt1517268': 'barbie',
    
    // Rank 10: The LEGO Batman Movie
    'tt4116284': 'the-lego-batman-movie'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO TMDB ID)
export const SLUG_TO_TMDB = Object.fromEntries(
    Object.entries(HBO_MAX_COMEDY_MOVIE_SLUGS).map(([tmdbId, slug]) => [slug, parseInt(tmdbId)])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const tmdbId = SLUG_TO_TMDB[slug];
    if (!tmdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.tmdbId === tmdbId);
};

// ✅ GET MOVIE SLUG BY TMDB ID
export const getMovieSlug = (tmdbId) => {
    return HBO_MAX_COMEDY_MOVIE_SLUGS[tmdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR HBO MAX COMEDY MOVIES
export const generateHboMaxComedyMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: HBO_MAX_COMEDY_MOVIE_SLUGS[movie.tmdbId]
        }
    }));
};

// ✅ BREADCRUMBS
export const getHboMaxComedyMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Best Comedy Movies on HBO Max', href: '/collection/best-comedy-movies-on-hbo-max' },
        { label: movie.Title, href: `/collection/best-comedy-movies-on-hbo-max/${HBO_MAX_COMEDY_MOVIE_SLUGS[movie.tmdbId]}` }
    ];
};

// ✅ NAVIGATION (Next/Prev)
export const getHboMaxComedyMovieNavigation = (currentMovie) => {
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
            slug: HBO_MAX_COMEDY_MOVIE_SLUGS[previousMovie.tmdbId]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: HBO_MAX_COMEDY_MOVIE_SLUGS[nextMovie.tmdbId]
        } : null
    };
};

// ✅ RELATED MOVIES (Same Genre/Decade)
export const getRelatedHboMaxComedyMovies = (currentMovie, limit = 3) => {
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
            slug: HBO_MAX_COMEDY_MOVIE_SLUGS[movie.tmdbId]
        }));
};

// ✅ COLLECTION METADATA
export const HBO_MAX_COMEDY_COLLECTION_META = {
    title: '10 Best Comedy Movies on HBO Max (Ranked by Laughter)',
    description: 'The definitive ranking of the funniest movies on HBO Max. From the satire of The Great Dictator to the chaos of The LEGO Batman Movie.',
    keywords: 'best comedy movies on hbo max, hbo max comedy films, city lights, blazing saddles, barbie, funniest movies streaming, comedy rankings 2026',
    canonicalUrl: 'https://filmiway.com/collection/best-comedy-movies-on-hbo-max',
    ogImage: 'https://filmiway.com/images/hbo-comedy-collection-og.jpg',
    totalMovies: COMPLETE_MOVIE_DATABASE.length,
    averageLaughterScore: Math.round(
        COMPLETE_MOVIE_DATABASE.reduce((sum, movie) => {
            const data = COMPLETE_MOVIE_DATA[movie.tmdbId];
            return sum + (data?.laughterIndex || 85); 
        }, 0) / COMPLETE_MOVIE_DATABASE.length
    )
};

// ✅ SITEMAP URLS
export const generateHboMaxComedyMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-comedy-movies-on-hbo-max`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/best-comedy-movies-on-hbo-max/${HBO_MAX_COMEDY_MOVIE_SLUGS[movie.tmdbId]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ SEARCH & FILTER
export const searchHboMaxComedyMovies = (query) => {
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
            slug: HBO_MAX_COMEDY_MOVIE_SLUGS[movie.tmdbId]
        }));
};

export const filterHboMaxComedyMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: HBO_MAX_COMEDY_MOVIE_SLUGS[movie.tmdbId]
        }));
};

// ✅ SORTING (By Laughter Index)
export const sortHboMaxComedyMovies = (movies, sortBy) => {
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
        case 'laughter': // New sort key for Comedy
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

// ✅ STATS CALCULATOR
export const getHboMaxComedyCollectionStats = () => {
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
        averageLaughterScore: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.laughterIndex || 85);
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
    HBO_MAX_COMEDY_MOVIE_SLUGS,
    SLUG_TO_TMDB,
    getMovieBySlug,
    getMovieSlug,
    generateHboMaxComedyMoviePaths,
    getHboMaxComedyMovieBreadcrumbs,
    getHboMaxComedyMovieNavigation,
    getRelatedHboMaxComedyMovies,
    HBO_MAX_COMEDY_COLLECTION_META,
    generateHboMaxComedyMovieSitemapUrls,
    searchHboMaxComedyMovies,
    filterHboMaxComedyMoviesByGenre,
    sortHboMaxComedyMovies,
    getHboMaxComedyCollectionStats
};