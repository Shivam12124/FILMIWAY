// utils/hboMaxBestMoviesRoutes.js - SSG ROUTE MAPPING FOR BEST MOVIES ON HBO MAX COLLECTION ✅

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './hboMaxBestMoviesData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE HBO MAX BEST MOVIE SLUG MAPPING
export const HBO_MAX_BEST_MOVIE_SLUGS = {
    // Rank 1: Seven Samurai
    'tt0047478': 'seven-samurai',
    
    // Rank 2: The Lord of the Rings: The Return of the King
    'tt0167260': 'the-lord-of-the-rings-the-return-of-the-king',
    
    // Rank 3: The Dark Knight
    'tt0468569': 'the-dark-knight',
    
    // Rank 4: Spirited Away
    'tt0245429': 'spirited-away',
    
    // Rank 5: Stalker
    'tt0079944': 'stalker',
    
    // Rank 6: Paris, Texas
    'tt0087884': 'paris-texas',
    
    // Rank 7: Dune: Part Two
    'tt15239678': 'dune-part-two',
    
    // Rank 8: City Lights
    'tt0021749': 'city-lights',
    
    // Rank 9: Casablanca
    'tt0034583': 'casablanca',
    
    // Rank 10: 2001: A Space Odyssey
    'tt0062622': '2001-a-space-odyssey'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(HBO_MAX_BEST_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return HBO_MAX_BEST_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS
export const generateHboMaxBestMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: HBO_MAX_BEST_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ BREADCRUMBS
export const getHboMaxBestMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Best Movies on HBO Max', href: '/collection/best-movies-on-hbo-max' },
        { label: movie.Title, href: `/collection/best-movies-on-hbo-max/${HBO_MAX_BEST_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ NAVIGATION (Next/Prev)
export const getHboMaxBestMovieNavigation = (currentMovie) => {
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
            slug: HBO_MAX_BEST_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: HBO_MAX_BEST_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ RELATED MOVIES (Same Genre/Decade)
export const getRelatedHboMaxBestMovies = (currentMovie, limit = 3) => {
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
            slug: HBO_MAX_BEST_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ COLLECTION METADATA
export const HBO_MAX_BEST_COLLECTION_META = {
    title: 'Top 10 Best Movies on HBO Max',
    description: 'The definitive ranking of the highest-rated films streaming on HBO Max right now. From Seven Samurai to Dune: Part Two.',
    keywords: 'best movies on hbo max, top rated hbo max films, seven samurai, dark knight, spirited away, dune part two, cinematic masterpieces',
    canonicalUrl: 'https://filmiway.com/collection/best-movies-on-hbo-max',
    ogImage: 'https://filmiway.com/images/hbo-best-movies-collection.jpg',
    totalMovies: COMPLETE_MOVIE_DATABASE.length,
    averageRating: Math.round(
        COMPLETE_MOVIE_DATABASE.reduce((sum, movie) => {
            const data = COMPLETE_MOVIE_DATA[movie.tmdbId];
            return sum + (data?.rating || 8.5); 
        }, 0) / COMPLETE_MOVIE_DATABASE.length * 10 
    ) / 10 // e.g. 8.8
};

// ✅ SITEMAP URL GENERATOR
export const generateHboMaxBestMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-movies-on-hbo-max`,
            lastmod: new Date().toISOString(),
            priority: '0.9',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/best-movies-on-hbo-max/${HBO_MAX_BEST_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE SLUG
export const isValidHboMaxBestMovieSlug = (slug) => {
    return Object.values(HBO_MAX_BEST_MOVIE_SLUGS).includes(slug);
};

// ✅ SEARCH/FILTER UTILITIES
export const searchHboMaxBestMovies = (query) => {
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
            slug: HBO_MAX_BEST_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterHboMaxBestMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: HBO_MAX_BEST_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ SORTING
export const sortHboMaxBestMovies = (movies, sortBy) => {
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
export const getHboMaxBestCollectionStats = () => {
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
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.rating || 8.5);
            }, 0) / COMPLETE_MOVIE_DATABASE.length
        ).toFixed(1)
    };
};

// ✅ EXPORT ALL UTILITIES
export default {
    generateMovieSlug,
    HBO_MAX_BEST_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateHboMaxBestMoviePaths,
    getHboMaxBestMovieBreadcrumbs,
    getHboMaxBestMovieNavigation,
    getRelatedHboMaxBestMovies,
    HBO_MAX_BEST_COLLECTION_META,
    generateHboMaxBestMovieSitemapUrls,
    isValidHboMaxBestMovieSlug,
    searchHboMaxBestMovies,
    filterHboMaxBestMoviesByGenre,
    sortHboMaxBestMovies,
    getHboMaxBestCollectionStats
};