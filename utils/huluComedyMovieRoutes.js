// utils/huluComedyMovieRoutes.js - COMPLETELY FIXED SSG ROUTE MAPPING FOR HULU COMEDY COLLECTION

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './huluComedyMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE HULU COMEDY MOVIE SLUG MAPPING
export const HULU_COMEDY_MOVIE_SLUGS = {
    // Rank 1: Superbad
    'tt0829482': 'superbad',
    
    // Rank 2: O Brother, Where Art Thou?
    'tt0190590': 'o-brother-where-art-thou',
    
    // Rank 3: Borat
    'tt0443453': 'borat',
    
    // Rank 4: Bullet Train
    'tt12593682': 'bullet-train',
    
    // Rank 5: Palm Springs
    'tt8385738': 'palm-springs',
    
    // Rank 6: Super Troopers
    'tt0247745': 'super-troopers',
    
    // Rank 7: Twinless
    'tt27995662': 'twinless',
    
    // Rank 8: Big
    'tt0094737': 'big',
    
    // Rank 9: Theater Camp
    'tt21376880': 'theater-camp',
    
    // Rank 10: Idiocracy
    'tt0387808': 'idiocracy'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(HULU_COMEDY_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG - FIXED
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return HULU_COMEDY_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR HULU COMEDY MOVIES
export const generateHuluComedyMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: HULU_COMEDY_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ HULU COMEDY MOVIE NAVIGATION BREADCRUMBS
export const getHuluComedyMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Best Comedy Movies on Hulu', href: '/best-comedy-movies-on-hulu' },
        { label: movie.Title, href: `/best-comedy-movies-on-hulu/${HULU_COMEDY_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS HULU COMEDY MOVIE
export const getHuluComedyMovieNavigation = (currentMovie) => {
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
            slug: HULU_COMEDY_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: HULU_COMEDY_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED HULU COMEDY MOVIES (SAME GENRE/DECADE)
export const getRelatedHuluComedyMovies = (currentMovie, limit = 3) => {
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
            slug: HULU_COMEDY_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ HULU COMEDY COLLECTION METADATA
export const HULU_COMEDY_COLLECTION_META = {
    title: '10 Best Comedy Movies on Hulu (Ranked by Laughter)',
    description: 'The definitive ranking of the funniest movies on Hulu. From the teen chaos of Superbad to the satire of Borat.',
    keywords: 'best comedy movies on hulu, hulu comedy films, superbad, borat, palm springs, funniest movies streaming, comedy rankings 2026',
    canonicalUrl: 'https://filmiway.com/best-comedy-movies-on-hulu',
    ogImage: 'https://filmiway.com/images/hulu-comedy-collection-og.jpg',
    totalMovies: COMPLETE_MOVIE_DATABASE.length,
    // ✅ FIXED - CALCULATES AVERAGE LAUGHTER SCORE (psychologicalIntensity maps to laughter)
    averageLaughterScore: Math.round(
        COMPLETE_MOVIE_DATABASE.reduce((sum, movie) => {
            const data = COMPLETE_MOVIE_DATA[movie.tmdbId];
            return sum + (data?.psychologicalIntensity || 85); 
        }, 0) / COMPLETE_MOVIE_DATABASE.length
    )
};

// ✅ GENERATE HULU COMEDY MOVIE SITEMAP URLS
export const generateHuluComedyMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/best-comedy-movies-on-hulu`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/best-comedy-movies-on-hulu/${HULU_COMEDY_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE HULU COMEDY MOVIE SLUG
export const isValidHuluComedyMovieSlug = (slug) => {
    return Object.values(HULU_COMEDY_MOVIE_SLUGS).includes(slug);
};

// ✅ HULU COMEDY MOVIE SEARCH/FILTER UTILITIES
export const searchHuluComedyMovies = (query) => {
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
            slug: HULU_COMEDY_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterHuluComedyMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: HULU_COMEDY_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ FIXED SORTING - NOW USES REAL DATA
export const sortHuluComedyMovies = (movies, sortBy) => {
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
        case 'laughter': // Replaces adrenaline/dread
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

// ✅ GET HULU COMEDY MOVIE COLLECTION STATS
export const getHuluComedyCollectionStats = () => {
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
        // ✅ ADDED - AVERAGE LAUGHTER SCORE
        averageLaughterScore: Math.round(
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
    HULU_COMEDY_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateHuluComedyMoviePaths,
    getHuluComedyMovieBreadcrumbs,
    getHuluComedyMovieNavigation,
    getRelatedHuluComedyMovies,
    HULU_COMEDY_COLLECTION_META,
    generateHuluComedyMovieSitemapUrls,
    isValidHuluComedyMovieSlug,
    searchHuluComedyMovies,
    filterHuluComedyMoviesByGenre,
    sortHuluComedyMovies,
    getHuluComedyCollectionStats
};