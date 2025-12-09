// utils/crimeThrillerMovieRoutes.js - COMPLETE SSG ROUTE MAPPING

import { COMPLETE_MOVIE_DATABASE } from './crimeThrillerMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE CRIME THRILLER MOVIE SLUG MAPPING
export const CRIME_THRILLER_MOVIE_SLUGS = {
    // Rank 1: Heat
    'tt0113277': 'heat',
    
    // Rank 2: L.A. Confidential
    'tt0119488': 'la-confidential',
    
    // Rank 3: No Country for Old Men
    'tt0477348': 'no-country-for-old-men',
    
    // Rank 4: Zodiac
    'tt0443706': 'zodiac',
    
    // Rank 5: Prisoners
    'tt1392214': 'prisoners',
    
    // Rank 6: The Usual Suspects
    'tt0114369': 'the-usual-suspects',
    
    // Rank 7: Mystic River
    'tt0327056': 'mystic-river',
    
    // Rank 8: Memories of Murder
    'tt0353969': 'memories-of-murder',
    
    // Rank 9: The Departed
    'tt0407887': 'the-departed',
    
    // Rank 10: Training Day
    'tt0139654': 'training-day'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(CRIME_THRILLER_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG - FIXED
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return CRIME_THRILLER_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR CRIME THRILLER MOVIES - FIXED
export const generateCrimeThrillerMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: CRIME_THRILLER_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ CRIME THRILLER MOVIE NAVIGATION BREADCRUMBS
export const getCrimeThrillerMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Best Crime Thrillers', href: '/collection/best-crime-thrillers' },
        { label: movie.Title, href: `/collection/best-crime-thrillers/${CRIME_THRILLER_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS CRIME THRILLER MOVIE - FIXED
export const getCrimeThrillerMovieNavigation = (currentMovie) => {
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
            slug: CRIME_THRILLER_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: CRIME_THRILLER_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED CRIME THRILLER MOVIES (SAME GENRE/DECADE)
export const getRelatedCrimeThrillerMovies = (currentMovie, limit = 3) => {
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
            slug: CRIME_THRILLER_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ CRIME THRILLER COLLECTION METADATA - FIXED WITH REAL DATA
export const CRIME_THRILLER_COLLECTION_META = {
    title: 'Top 10 Best Crime Thriller Movies',
    description: 'Discover the most intense and suspenseful crime thrillers ranked by suspense intensity. From Heat to The Departed.',
    keywords: 'best crime thrillers, crime thriller movies ranking, suspense intensity, noir films, detective movies, heist thrillers',
    canonicalUrl: 'https://filmiway.com/collection/best-crime-thrillers',
    ogImage: 'https://filmiway.com/images/crime-thriller-movies-collection.jpg',
    totalMovies: COMPLETE_MOVIE_DATABASE.length,
    // ✅ FIXED - NOW USES REAL SUSPENSE INTENSITY DATA
    averageSuspenseIntensity: Math.round(
        COMPLETE_MOVIE_DATABASE.reduce((sum, movie) => {
            return sum + movie.suspenseIntensity; // NOW USES REAL DATA
        }, 0) / COMPLETE_MOVIE_DATABASE.length
    )
};

// ✅ GENERATE CRIME THRILLER MOVIE SITEMAP URLS
export const generateCrimeThrillerMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-crime-thrillers`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/best-crime-thrillers/${CRIME_THRILLER_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE CRIME THRILLER MOVIE SLUG
export const isValidCrimeThrillerMovieSlug = (slug) => {
    return Object.values(CRIME_THRILLER_MOVIE_SLUGS).includes(slug);
};

// ✅ CRIME THRILLER MOVIE SEARCH/FILTER UTILITIES - FIXED
export const searchCrimeThrillerMovies = (query) => {
    const lowercaseQuery = query.toLowerCase();
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => 
            movie.Title.toLowerCase().includes(lowercaseQuery) ||
            movie.genre.toLowerCase().includes(lowercaseQuery) ||
            movie.director.toLowerCase().includes(lowercaseQuery) ||
            movie.year.toString().includes(query)
        )
        .map(movie => ({
            ...movie,
            slug: CRIME_THRILLER_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterCrimeThrillerMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: CRIME_THRILLER_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ FIXED SORTING - NOW USES REAL DATA
export const sortCrimeThrillerMovies = (movies, sortBy) => {
    const sortedMovies = [...movies];
    
    switch (sortBy) {
        case 'rating':
            return sortedMovies.sort((a, b) => b.rating - a.rating); // ✅ FIXED - REAL RATINGS
        case 'year':
            return sortedMovies.sort((a, b) => b.year - a.year);
        case 'suspense':
            return sortedMovies.sort((a, b) => b.suspenseIntensity - a.suspenseIntensity); // ✅ FIXED - REAL DATA
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime); // ✅ ADDED
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET CRIME THRILLER COLLECTION STATS
export const getCrimeThrillerCollectionStats = () => {
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
        // ✅ ADDED - AVERAGE SUSPENSE INTENSITY
        averageSuspenseIntensity: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => sum + m.suspenseIntensity, 0) / COMPLETE_MOVIE_DATABASE.length
        ),
        // ✅ ADDED - AVERAGE RATING
        averageRating: (
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => sum + m.rating, 0) / COMPLETE_MOVIE_DATABASE.length
        ).toFixed(1)
    };
};

// ✅ EXPORT ALL UTILITIES
export default {
    generateMovieSlug,
    CRIME_THRILLER_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateCrimeThrillerMoviePaths,
    getCrimeThrillerMovieBreadcrumbs,
    getCrimeThrillerMovieNavigation,
    getRelatedCrimeThrillerMovies,
    CRIME_THRILLER_COLLECTION_META,
    generateCrimeThrillerMovieSitemapUrls,
    isValidCrimeThrillerMovieSlug,
    searchCrimeThrillerMovies,
    filterCrimeThrillerMoviesByGenre,
    sortCrimeThrillerMovies,
    getCrimeThrillerCollectionStats
};
