// utils/huluThrillerMovieRoutes.js - SSG ROUTE MAPPING FOR HULU THRILLER COLLECTION

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './huluThrillerMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE HULU THRILLER MOVIE SLUG MAPPING
export const HULU_THRILLER_MOVIE_SLUGS = {
    // Rank 1: Heat
    'tt0113277': 'heat',
    
    // Rank 2: Black Swan
    'tt0947798': 'black-swan',
    
    // Rank 3: Anatomy of a Fall
    'tt17009710': 'anatomy-of-a-fall',
    
    // Rank 4: Donnie Darko
    'tt0246578': 'donnie-darko',
    
    // Rank 5: Before the Devil Knows You're Dead
    'tt0292963': 'before-the-devil-knows-youre-dead',
    
    // Rank 6: The Illusionist
    'tt0443543': 'the-illusionist',
    
    // Rank 7: Fresh
    'tt13403046': 'fresh',
    
    // Rank 8: The Equalizer
    'tt0455944': 'the-equalizer',
    
    // Rank 9: How to Blow Up a Pipeline
    'tt20446690': 'how-to-blow-up-a-pipeline',
    
    // Rank 10: The Pledge
    'tt0237572': 'the-pledge'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(HULU_THRILLER_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return HULU_THRILLER_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR HULU THRILLER MOVIES
export const generateHuluThrillerMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: HULU_THRILLER_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ HULU THRILLER MOVIE NAVIGATION BREADCRUMBS
export const getHuluThrillerMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Best Thriller Movies on Hulu', href: '/best-thriller-movies-hulu' },
        { label: movie.Title, href: `/best-thriller-movies-hulu/${HULU_THRILLER_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS HULU THRILLER MOVIE
export const getHuluThrillerMovieNavigation = (currentMovie) => {
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
            slug: HULU_THRILLER_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: HULU_THRILLER_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED HULU THRILLER MOVIES (SAME GENRE/DECADE)
export const getRelatedHuluThrillerMovies = (currentMovie, limit = 3) => {
    const currentDecade = Math.floor(currentMovie.year / 10) * 10;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => 
            movie.imdbID !== currentMovie.imdbID && (
                Math.abs(movie.year - currentMovie.year) <= 10 || // Within 10 years
                movie.genre === currentMovie.genre
            )
        )
        .slice(0, limit)
        .map(movie => ({
            ...movie,
            slug: HULU_THRILLER_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ HULU THRILLER COLLECTION METADATA
export const HULU_THRILLER_COLLECTION_META = {
    title: '10 Best Thriller Movies on Hulu (Ranked by Suspense)',
    description: 'The definitive ranking of the best thriller movies on Hulu. From the heist perfection of Heat to the psychological horror of Black Swan.',
    keywords: 'best thriller movies on hulu, hulu thrillers, heat, black swan, anatomy of a fall, suspense movies streaming, hulu movies 2025',
    canonicalUrl: 'https://filmiway.com/best-thriller-movies-hulu',
    ogImage: 'https://filmiway.com/images/hulu-thriller-collection-og.jpg',
    totalMovies: COMPLETE_MOVIE_DATABASE.length,
    // ✅ FIXED - CALCULATES AVERAGE SUSPENSE SCORE
    averageSuspenseScore: Math.round(
        COMPLETE_MOVIE_DATABASE.reduce((sum, movie) => {
            const data = COMPLETE_MOVIE_DATA[movie.tmdbId];
            return sum + (data?.suspenseIntensity || 85); 
        }, 0) / COMPLETE_MOVIE_DATABASE.length
    )
};

// ✅ GENERATE HULU THRILLER MOVIE SITEMAP URLS
export const generateHuluThrillerMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/best-thriller-movies-hulu`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/best-thriller-movies-hulu/${HULU_THRILLER_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE HULU THRILLER MOVIE SLUG
export const isValidHuluThrillerMovieSlug = (slug) => {
    return Object.values(HULU_THRILLER_MOVIE_SLUGS).includes(slug);
};

// ✅ HULU THRILLER MOVIE SEARCH/FILTER UTILITIES
export const searchHuluThrillerMovies = (query) => {
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
            slug: HULU_THRILLER_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterHuluThrillerMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: HULU_THRILLER_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ SORTING UTILITIES
export const sortHuluThrillerMovies = (movies, sortBy) => {
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
        case 'suspense': // ✅ Custom Metric Sort (Replaces Laughter/Action)
            return sortedMovies.sort((a, b) => {
                const scoreA = COMPLETE_MOVIE_DATA[a.tmdbId]?.suspenseIntensity || 0;
                const scoreB = COMPLETE_MOVIE_DATA[b.tmdbId]?.suspenseIntensity || 0;
                return scoreB - scoreA;
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET HULU THRILLER MOVIE COLLECTION STATS
export const getHuluThrillerCollectionStats = () => {
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
        // ✅ ADDED - AVERAGE SUSPENSE SCORE
        averageSuspenseScore: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.suspenseIntensity || 85);
            }, 0) / COMPLETE_MOVIE_DATABASE.length
        ),
        // ✅ ADDED - AVERAGE RATING
        averageRating: (
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.rating || 7.0);
            }, 0) / COMPLETE_MOVIE_DATABASE.length
        ).toFixed(1)
    };
};

// ✅ EXPORT ALL UTILITIES
export default {
    generateMovieSlug,
    HULU_THRILLER_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateHuluThrillerMoviePaths,
    getHuluThrillerMovieBreadcrumbs,
    getHuluThrillerMovieNavigation,
    getRelatedHuluThrillerMovies,
    HULU_THRILLER_COLLECTION_META,
    generateHuluThrillerMovieSitemapUrls,
    isValidHuluThrillerMovieSlug,
    searchHuluThrillerMovies,
    filterHuluThrillerMoviesByGenre,
    sortHuluThrillerMovies,
    getHuluThrillerCollectionStats
};