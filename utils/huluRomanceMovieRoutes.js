// utils/huluRomanceMovieRoutes.js - COMPLETELY FIXED SSG ROUTE MAPPING FOR HULU ROMANCE COLLECTION

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './huluRomanceMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE HULU ROMANCE MOVIE SLUG MAPPING
export const HULU_ROMANCE_MOVIE_SLUGS = {
    // Rank 1: Anora
    'tt22359552': 'anora',
    
    // Rank 2: All of Us Strangers
    'tt21192142': 'all-of-us-strangers',
    
    // Rank 3: And Then We Danced
    'tt8966292': 'and-then-we-danced',
    
    // Rank 4: Brooklyn
    'tt2381111': 'brooklyn',
    
    // Rank 5: Little Manhattan
    'tt0412922': 'little-manhattan',
    
    // Rank 6: Palm Springs
    'tt8385738': 'palm-springs',
    
    // Rank 7: Rye Lane
    'tt15893794': 'rye-lane',
    
    // Rank 8: Crazy Heart
    'tt1263670': 'crazy-heart',
    
    // Rank 9: Good Luck to You, Leo Grande
    'tt13352968': 'good-luck-to-you-leo-grande',
    
    // Rank 10: 13 Going on 30
    'tt0337563': '13-going-on-30'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(HULU_ROMANCE_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG - FIXED
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return HULU_ROMANCE_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR HULU ROMANCE MOVIES
export const generateHuluRomanceMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: HULU_ROMANCE_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ HULU ROMANCE MOVIE NAVIGATION BREADCRUMBS
export const getHuluRomanceMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Best Romance Movies on Hulu', href: '/best-romance-movies-on-hulu' },
        { label: movie.Title, href: `/best-romance-movies-on-hulu/${HULU_ROMANCE_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS HULU ROMANCE MOVIE
export const getHuluRomanceMovieNavigation = (currentMovie) => {
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
            slug: HULU_ROMANCE_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: HULU_ROMANCE_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED HULU ROMANCE MOVIES (SAME GENRE/DECADE)
export const getRelatedHuluRomanceMovies = (currentMovie, limit = 3) => {
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
            slug: HULU_ROMANCE_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ HULU ROMANCE COLLECTION METADATA
export const HULU_ROMANCE_COLLECTION_META = {
    title: '10 Best Romance Movies on Hulu (Ranked 2026)',
    description: 'The definitive ranking of romance movies on Hulu. From the adrenaline of Anora to the nostalgia of Little Manhattan. Ranked by chemistry and emotional resonance.',
    keywords: 'best romance movies hulu, hulu romance films, anora hulu, all of us strangers, romantic movies streaming, love stories hulu',
    canonicalUrl: 'https://filmiway.com/best-romance-movies-on-hulu',
    ogImage: 'https://filmiway.com/images/hulu-romance-collection-og.jpg',
    totalMovies: COMPLETE_MOVIE_DATABASE.length,
    // ✅ FIXED - CALCULATES AVERAGE EMOTIONAL RESONANCE (psychologicalIntensity)
    averageEmotionalScore: Math.round(
        COMPLETE_MOVIE_DATABASE.reduce((sum, movie) => {
            const data = COMPLETE_MOVIE_DATA[movie.tmdbId];
            return sum + (data?.psychologicalIntensity || 85); 
        }, 0) / COMPLETE_MOVIE_DATABASE.length
    )
};

// ✅ GENERATE HULU ROMANCE MOVIE SITEMAP URLS
export const generateHuluRomanceMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/best-romance-movies-on-hulu`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/best-romance-movies-on-hulu/${HULU_ROMANCE_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE HULU ROMANCE MOVIE SLUG
export const isValidHuluRomanceMovieSlug = (slug) => {
    return Object.values(HULU_ROMANCE_MOVIE_SLUGS).includes(slug);
};

// ✅ HULU ROMANCE MOVIE SEARCH/FILTER UTILITIES
export const searchHuluRomanceMovies = (query) => {
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
            slug: HULU_ROMANCE_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterHuluRomanceMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: HULU_ROMANCE_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ FIXED SORTING - NOW USES REAL DATA
export const sortHuluRomanceMovies = (movies, sortBy) => {
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
        case 'emotion': // Replaces adrenaline/classWarfare
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

// ✅ GET HULU ROMANCE MOVIE COLLECTION STATS
export const getHuluRomanceCollectionStats = () => {
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
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.psychologicalIntensity || 85);
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
    HULU_ROMANCE_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateHuluRomanceMoviePaths,
    getHuluRomanceMovieBreadcrumbs,
    getHuluRomanceMovieNavigation,
    getRelatedHuluRomanceMovies,
    HULU_ROMANCE_COLLECTION_META,
    generateHuluRomanceMovieSitemapUrls,
    isValidHuluRomanceMovieSlug,
    searchHuluRomanceMovies,
    filterHuluRomanceMoviesByGenre,
    sortHuluRomanceMovies,
    getHuluRomanceCollectionStats
};