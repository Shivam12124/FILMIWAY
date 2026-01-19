// utils/huluHorrorMovieRoutes.js - COMPLETELY FIXED SSG ROUTE MAPPING FOR HULU HORROR COLLECTION

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './huluHorrorMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE HULU HORROR MOVIE SLUG MAPPING
export const HULU_HORROR_MOVIE_SLUGS = {
    // Rank 1: When Evil Lurks
    'tt16300962': 'when-evil-lurks',
    
    // Rank 2: Longlegs
    'tt23468450': 'longlegs',
    
    // Rank 3: The House That Jack Built
    'tt4003440': 'the-house-that-jack-built',
    
    // Rank 4: Oddity
    'tt26466146': 'oddity',
    
    // Rank 5: Don't Breathe (Replaces The Babadook at #5)
    'tt4160708': 'dont-breathe',
    
    // Rank 6: The Babadook
    'tt2321549': 'the-babadook',
    
    // Rank 7: The Empty Man
    'tt5867314': 'the-empty-man',
    
    // Rank 8: Barbarian
    'tt15791034': 'barbarian',
    
    // Rank 9: The First Omen
    'tt5676368': 'the-first-omen',
    
    // Rank 10: Late Night with the Devil (Replaces Fresh)
    'tt14966898': 'late-night-with-the-devil'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(HULU_HORROR_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG - FIXED
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return HULU_HORROR_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR HULU HORROR MOVIES
export const generateHuluHorrorMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: HULU_HORROR_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ HULU HORROR MOVIE NAVIGATION BREADCRUMBS
export const getHuluHorrorMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Best Horror Movies on Hulu', href: '/best-horror-movies-on-hulu' },
        { label: movie.Title, href: `/best-horror-movies-on-hulu/${HULU_HORROR_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS HULU HORROR MOVIE
export const getHuluHorrorMovieNavigation = (currentMovie) => {
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
            slug: HULU_HORROR_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: HULU_HORROR_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED HULU HORROR MOVIES (SAME GENRE/DECADE)
export const getRelatedHuluHorrorMovies = (currentMovie, limit = 3) => {
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
            slug: HULU_HORROR_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ HULU HORROR COLLECTION METADATA
export const HULU_HORROR_COLLECTION_META = {
    title: '10 Best Horror Movies on Hulu (Ranked by Scariness)',
    description: 'The definitive ranking of the scariest movies on Hulu. From the trauma of When Evil Lurks to the slow-burn dread of Longlegs.',
    keywords: 'best horror movies on hulu, hulu horror films, when evil lurks, longlegs, scariest movies streaming, horror rankings 2026',
    canonicalUrl: 'https://filmiway.com/best-horror-movies-on-hulu',
    ogImage: 'https://filmiway.com/images/hulu-horror-collection-og.jpg',
    totalMovies: COMPLETE_MOVIE_DATABASE.length,
    // ✅ FIXED - CALCULATES AVERAGE DREAD SCORE (psychologicalIntensity)
    averageDreadScore: Math.round(
        COMPLETE_MOVIE_DATABASE.reduce((sum, movie) => {
            const data = COMPLETE_MOVIE_DATA[movie.tmdbId];
            return sum + (data?.psychologicalIntensity || 85); 
        }, 0) / COMPLETE_MOVIE_DATABASE.length
    )
};

// ✅ GENERATE HULU HORROR MOVIE SITEMAP URLS
export const generateHuluHorrorMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/best-horror-movies-on-hulu`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/best-horror-movies-on-hulu/${HULU_HORROR_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE HULU HORROR MOVIE SLUG
export const isValidHuluHorrorMovieSlug = (slug) => {
    return Object.values(HULU_HORROR_MOVIE_SLUGS).includes(slug);
};

// ✅ HULU HORROR MOVIE SEARCH/FILTER UTILITIES
export const searchHuluHorrorMovies = (query) => {
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
            slug: HULU_HORROR_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterHuluHorrorMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: HULU_HORROR_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ FIXED SORTING - NOW USES REAL DATA
export const sortHuluHorrorMovies = (movies, sortBy) => {
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
        case 'scariness': // Replaces adrenaline/classWarfare
            return sortedMovies.sort((a, b) => {
                const scoreA = COMPLETE_MOVIE_DATA[a.tmdbId]?.psychologicalIntensity || 0;
                const scoreB = COMPLETE_MOVIE_DATA[b.tmdbId]?.psychologicalIntensity || 0;
                return scoreB - scoreA;
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET HULU HORROR MOVIE COLLECTION STATS
export const getHuluHorrorCollectionStats = () => {
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
        // ✅ ADDED - AVERAGE DREAD SCORE
        averageDreadScore: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.psychologicalIntensity || 85);
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
    HULU_HORROR_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateHuluHorrorMoviePaths,
    getHuluHorrorMovieBreadcrumbs,
    getHuluHorrorMovieNavigation,
    getRelatedHuluHorrorMovies,
    HULU_HORROR_COLLECTION_META,
    generateHuluHorrorMovieSitemapUrls,
    isValidHuluHorrorMovieSlug,
    searchHuluHorrorMovies,
    filterHuluHorrorMoviesByGenre,
    sortHuluHorrorMovies,
    getHuluHorrorCollectionStats
};