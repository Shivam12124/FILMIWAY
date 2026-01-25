// utils/hboMaxRomanceMovieRoutes.js - COMPLETELY FIXED SSG ROUTE MAPPING FOR HBO MAX ROMANCE COLLECTION

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './hboMaxRomanceMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE HBO MAX ROMANCE MOVIE SLUG MAPPING
// Maps IMDb IDs to clean SEO-friendly URL slugs
export const HBO_MAX_ROMANCE_MOVIE_SLUGS = {
    
    // Rank 1: Casablanca
    'tt0034583': 'casablanca',
    
    // Rank 2: In the Mood for Love
    'tt0118694': 'in-the-mood-for-love',
    
    // Rank 3: Past Lives
    'tt13238346': 'past-lives',
    
    // Rank 4: When Harry Met Sally...
    'tt0098635': 'when-harry-met-sally',
    
    // Rank 5: Call Me by Your Name
    'tt5726662': 'call-me-by-your-name',
    
    // Rank 6: Gone with the Wind
    'tt0031381': 'gone-with-the-wind',
    
    // Rank 7: A Summer's Tale
    'tt0115963': 'a-summers-tale',
    
    // Rank 8: Ali: Fear Eats the Soul
    'tt0069683': 'ali-fear-eats-the-soul',
    
    // Rank 9: Whisper of the Heart
    'tt0113824': 'whisper-of-the-heart',
    
    // Rank 10: The Perks of Being a Wallflower
    'tt1659337': 'the-perks-of-being-a-wallflower'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(HBO_MAX_ROMANCE_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG - FIXED
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return HBO_MAX_ROMANCE_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR HBO MAX ROMANCE MOVIES
export const generateHboMaxRomanceMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: HBO_MAX_ROMANCE_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ HBO MAX ROMANCE MOVIE NAVIGATION BREADCRUMBS
export const getHboMaxRomanceMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Best Romance Movies on HBO Max', href: '/best-romance-movies-on-hbo-max' },
        { label: movie.Title, href: `/best-romance-movies-on-hbo-max/${HBO_MAX_ROMANCE_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS HBO MAX ROMANCE MOVIE
export const getHboMaxRomanceMovieNavigation = (currentMovie) => {
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
            slug: HBO_MAX_ROMANCE_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: HBO_MAX_ROMANCE_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED HBO MAX ROMANCE MOVIES (SAME GENRE/DECADE)
export const getRelatedHboMaxRomanceMovies = (currentMovie, limit = 3) => {
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
            slug: HBO_MAX_ROMANCE_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ HBO MAX ROMANCE COLLECTION METADATA
export const HBO_MAX_ROMANCE_COLLECTION_META = {
    title: '10 Best Romance Movies on HBO Max (Ranked 2026)',
    description: 'The definitive ranking of romance movies on HBO Max. From the wartime sacrifice of Casablanca to the restrained longing of In the Mood for Love. Ranked by emotional intensity.',
    keywords: 'best romance movies hbo max, hbo max romance films, casablanca streaming, in the mood for love hbo, past lives streaming, romantic movies hbo max',
    canonicalUrl: 'https://filmiway.com/best-romance-movies-on-hbo-max',
    ogImage: 'https://filmiway.com/images/hbo-max-romance-collection-og.jpg',
    totalMovies: COMPLETE_MOVIE_DATABASE.length,
    // ✅ FIXED - CALCULATES AVERAGE EMOTIONAL RESONANCE (emotionalIntensity)
    averageEmotionalScore: Math.round(
        COMPLETE_MOVIE_DATABASE.reduce((sum, movie) => {
            const data = COMPLETE_MOVIE_DATA[movie.tmdbId];
            return sum + (data?.emotionalIntensity || 85); 
        }, 0) / COMPLETE_MOVIE_DATABASE.length
    )
};

// ✅ GENERATE HBO MAX ROMANCE MOVIE SITEMAP URLS
export const generateHboMaxRomanceMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/best-romance-movies-on-hbo-max`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/best-romance-movies-on-hbo-max/${HBO_MAX_ROMANCE_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE HBO MAX ROMANCE MOVIE SLUG
export const isValidHboMaxRomanceMovieSlug = (slug) => {
    return Object.values(HBO_MAX_ROMANCE_MOVIE_SLUGS).includes(slug);
};

// ✅ HBO MAX ROMANCE MOVIE SEARCH/FILTER UTILITIES
export const searchHboMaxRomanceMovies = (query) => {
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
            slug: HBO_MAX_ROMANCE_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterHboMaxRomanceMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: HBO_MAX_ROMANCE_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ FIXED SORTING - NOW USES REAL DATA
export const sortHboMaxRomanceMovies = (movies, sortBy) => {
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
        case 'emotion': // Sorts by emotionalIntensity
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

// ✅ GET HBO MAX ROMANCE MOVIE COLLECTION STATS
export const getHboMaxRomanceCollectionStats = () => {
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
        // ✅ ADDED - AVERAGE EMOTIONAL SCORE
        averageEmotionalScore: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.emotionalIntensity || 85);
            }, 0) / COMPLETE_MOVIE_DATABASE.length
        ),
        // ✅ ADDED - AVERAGE RATING
        averageRating: (
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.rating || 7.5);
            }, 0) / COMPLETE_MOVIE_DATABASE.length
        ).toFixed(1)
    };
};

// ✅ EXPORT ALL UTILITIES
export default {
    generateMovieSlug,
    HBO_MAX_ROMANCE_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateHboMaxRomanceMoviePaths,
    getHboMaxRomanceMovieBreadcrumbs,
    getHboMaxRomanceMovieNavigation,
    getRelatedHboMaxRomanceMovies,
    HBO_MAX_ROMANCE_COLLECTION_META,
    generateHboMaxRomanceMovieSitemapUrls,
    isValidHboMaxRomanceMovieSlug,
    searchHboMaxRomanceMovies,
    filterHboMaxRomanceMoviesByGenre,
    sortHboMaxRomanceMovies,
    getHboMaxRomanceCollectionStats
};