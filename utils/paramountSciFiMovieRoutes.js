// utils/paramountSciFiMovieRoutes.js - SSG ROUTE MAPPING FOR PARAMOUNT+ SCI-FI COLLECTION ✅

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './paramountSciFiMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE PARAMOUNT+ SCI-FI MOVIE SLUG MAPPING
export const PARAMOUNT_SCIFI_MOVIE_SLUGS = {
    // Rank 1: Interstellar
    'tt0816692': 'interstellar',
    
    // Rank 2: Arrival
    'tt2543164': 'arrival',
    
    // Rank 3: The Martian
    'tt3659388': 'the-martian',
    
    // Rank 4: Minority Report
    'tt0181689': 'minority-report',
    
    // Rank 5: Annihilation
    'tt2798920': 'annihilation',
    
    // Rank 6: A Quiet Place
    'tt6644200': 'a-quiet-place',
    
    // Rank 7: Star Trek II: The Wrath of Khan
    'tt0084726': 'star-trek-ii-the-wrath-of-khan',
    
    // Rank 8: 10 Cloverfield Lane
    'tt1179933': '10-cloverfield-lane',
    
    // Rank 9: A.I. Artificial Intelligence
    'tt0212720': 'ai-artificial-intelligence',
    
    // Rank 10: War of the Worlds
    'tt0407304': 'war-of-the-worlds'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(PARAMOUNT_SCIFI_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return PARAMOUNT_SCIFI_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS
export const generateParamountSciFiMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: PARAMOUNT_SCIFI_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ BREADCRUMBS GENERATOR
export const getParamountSciFiMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Best Sci-Fi Movies on Paramount+', href: '/collection/best-sci-fi-movies-on-paramount-plus' },
        { label: movie.Title, href: `/collection/best-sci-fi-movies-on-paramount-plus/${PARAMOUNT_SCIFI_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ NEXT/PREVIOUS NAVIGATION
export const getParamountSciFiMovieNavigation = (currentMovie) => {
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
            slug: PARAMOUNT_SCIFI_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: PARAMOUNT_SCIFI_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ RELATED MOVIES (Same Genre/Decade)
export const getRelatedParamountSciFiMovies = (currentMovie, limit = 3) => {
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
            slug: PARAMOUNT_SCIFI_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ COLLECTION METADATA
export const PARAMOUNT_SCIFI_COLLECTION_META = {
    title: '10 Best Sci-Fi Movies on Paramount+ (Ranked by Complexity)',
    description: 'The definitive ranking of the best Sci-Fi movies on Paramount+. From the emotional physics of Interstellar to the survival logic of The Martian.',
    keywords: 'best sci-fi movies on paramount plus, paramount plus sci-fi films, interstellar, arrival, the martian, minority report, star trek wrath of khan',
    canonicalUrl: 'https://filmiway.com/collection/best-sci-fi-movies-on-paramount-plus',
    ogImage: 'https://filmiway.com/images/paramount-scifi-collection-og.jpg',
    totalMovies: COMPLETE_MOVIE_DATABASE.length,
    // ✅ Uses "Sci-Fi Complexity" for the main stat
    averageComplexity: Math.round(
        COMPLETE_MOVIE_DATABASE.reduce((sum, movie) => {
            const data = COMPLETE_MOVIE_DATA[movie.tmdbId];
            return sum + (data?.sciFiComplexity || 85); 
        }, 0) / COMPLETE_MOVIE_DATABASE.length
    )
};

// ✅ SITEMAP URL GENERATOR
export const generateParamountSciFiMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-sci-fi-movies-on-paramount-plus`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/best-sci-fi-movies-on-paramount-plus/${PARAMOUNT_SCIFI_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE SLUG
export const isValidParamountSciFiMovieSlug = (slug) => {
    return Object.values(PARAMOUNT_SCIFI_MOVIE_SLUGS).includes(slug);
};

// ✅ SEARCH/FILTER UTILITIES
export const searchParamountSciFiMovies = (query) => {
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
            slug: PARAMOUNT_SCIFI_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterParamountSciFiMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: PARAMOUNT_SCIFI_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ SORTING UTILITIES
export const sortParamountSciFiMovies = (movies, sortBy) => {
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
        case 'spectacle': // ✅ Sorting by "Visual Spectacle"
            return sortedMovies.sort((a, b) => {
                const scoreA = COMPLETE_MOVIE_DATA[a.tmdbId]?.visualSpectacle || 0;
                const scoreB = COMPLETE_MOVIE_DATA[b.tmdbId]?.visualSpectacle || 0;
                return scoreB - scoreA;
            });
        case 'complexity': // ✅ Sorting by "Sci-Fi Complexity"
            return sortedMovies.sort((a, b) => {
                const scoreA = COMPLETE_MOVIE_DATA[a.tmdbId]?.sciFiComplexity || 0;
                const scoreB = COMPLETE_MOVIE_DATA[b.tmdbId]?.sciFiComplexity || 0;
                return scoreB - scoreA;
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET COLLECTION STATS
export const getParamountSciFiCollectionStats = () => {
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
        // ✅ Average Complexity Level
        averageComplexity: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.sciFiComplexity || 85);
            }, 0) / COMPLETE_MOVIE_DATABASE.length
        ),
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
    PARAMOUNT_SCIFI_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateParamountSciFiMoviePaths,
    getParamountSciFiMovieBreadcrumbs,
    getParamountSciFiMovieNavigation,
    getRelatedParamountSciFiMovies,
    PARAMOUNT_SCIFI_COLLECTION_META,
    generateParamountSciFiMovieSitemapUrls,
    isValidParamountSciFiMovieSlug,
    searchParamountSciFiMovies,
    filterParamountSciFiMoviesByGenre,
    sortParamountSciFiMovies,
    getParamountSciFiCollectionStats
};