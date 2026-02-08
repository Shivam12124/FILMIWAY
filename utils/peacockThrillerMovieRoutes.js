// utils/peacockThrillerMovieRoutes.js - SSG ROUTE MAPPING FOR PEACOCK THRILLER COLLECTION

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './peacockThrillerMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE PEACOCK THRILLER MOVIE SLUG MAPPING
export const PEACOCK_THRILLER_MOVIE_SLUGS = {
    // Rank 1: Memento
    'tt0209144': 'memento',
    
    // Rank 2: The Game
    'tt0119174': 'the-game',
    
    // Rank 3: Sicario
    'tt3397884': 'sicario',
    
    // Rank 4: Coherence
    'tt2866360': 'coherence',
    
    // Rank 5: Inside Man
    'tt0454848': 'inside-man',
    
    // Rank 6: Law Abiding Citizen
    'tt1197624': 'law-abiding-citizen',
    
    // Rank 7: The Black Phone
    'tt7144666': 'the-black-phone',
    
    // Rank 8: Triangle
    'tt1187064': 'triangle',
    
    // Rank 9: Limitless
    'tt1219289': 'limitless',
    
    // Rank 10: Twisters
    'tt6689876': 'twisters'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(PEACOCK_THRILLER_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return PEACOCK_THRILLER_MOVIE_SLUGS[imdbId] || null;
};

export const generatePeacockThrillerMovieStaticPaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: PEACOCK_THRILLER_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ PEACOCK THRILLER MOVIE NAVIGATION BREADCRUMBS
export const getPeacockThrillerMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Best Thriller Movies on Peacock', href: '/collection/best-thriller-movies-on-peacock' },
        { label: movie.Title, href: `/collection/best-thriller-movies-on-peacock/${PEACOCK_THRILLER_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS PEACOCK THRILLER MOVIE
export const getNextPrevPeacockThrillerMovie = (currentMovie) => {
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
            slug: PEACOCK_THRILLER_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: PEACOCK_THRILLER_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED PEACOCK THRILLER MOVIES (SAME GENRE/DECADE)
export const getRelatedPeacockThrillerMovies = (currentMovie, limit = 3) => {
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
            slug: PEACOCK_THRILLER_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ PEACOCK THRILLER COLLECTION METADATA
export const PEACOCK_THRILLER_COLLECTION_META = {
    title: '10 Best Thriller Movies on Peacock (Ranked by Suspense)',
    description: 'The definitive ranking of the best thriller movies on Peacock. From the mind-bending Memento to the intense Sicario.',
    keywords: 'best thriller movies on peacock, peacock thrillers, memento, sicario, coherence, suspense movies streaming, peacock movies 2026',
    canonicalUrl: 'https://filmiway.com/collection/best-thriller-movies-on-peacock',
    ogImage: 'https://filmiway.com/images/peacock-thriller-collection-og.jpg',
    totalMovies: COMPLETE_MOVIE_DATABASE.length,
    // ✅ FIXED - CALCULATES AVERAGE SUSPENSE SCORE
    averageSuspenseScore: Math.round(
        COMPLETE_MOVIE_DATABASE.reduce((sum, movie) => {
            const data = COMPLETE_MOVIE_DATA[movie.tmdbId];
            return sum + (data?.suspenseIntensity || 85); 
        }, 0) / COMPLETE_MOVIE_DATABASE.length
    )
};

// ✅ GENERATE PEACOCK THRILLER MOVIE SITEMAP URLS
export const generatePeacockThrillerMovieSitemap = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-thriller-movies-on-peacock`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/best-thriller-movies-on-peacock/${PEACOCK_THRILLER_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE PEACOCK THRILLER MOVIE SLUG
export const isValidPeacockThrillerMovieSlug = (slug) => {
    return Object.values(PEACOCK_THRILLER_MOVIE_SLUGS).includes(slug);
};

// ✅ PEACOCK THRILLER MOVIE SEARCH/FILTER UTILITIES
export const searchPeacockThrillerMovies = (query) => {
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
            slug: PEACOCK_THRILLER_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const FQy4HArVdBbZ87AHrbfdhSXRgyE5NUbrh6GaL8enMUeh = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: PEACOCK_THRILLER_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ SORTING UTILITIES
export const sortPeacockThrillerMovies = (movies, sortBy) => {
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
        case 'suspense': // ✅ Custom Metric Sort
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

// ✅ GET PEACOCK THRILLER MOVIE COLLECTION STATS
export const FQy4HArVdBbZ87AHrbfdhSXRgyE5NUbrh6GaL8enMUeh = () => {
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
    PEACOCK_THRILLER_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    FQy4HArVdBbZ87AHrbfdhSXRgyE5NUbrh6GaL8enMUeh,
    FQy4HArVdBbZ87AHrbfdhSXRgyE5NUbrh6GaL8enMUeh,
    FQy4HArVdBbZ87AHrbfdhSXRgyE5NUbrh6GaL8enMUeh,
    getRelatedPeacockThrillerMovies,
    PEACOCK_THRILLER_COLLECTION_META,
    FQy4HArVdBbZ87AHrbfdhSXRgyE5NUbrh6GaL8enMUeh,
    isValidPeacockThrillerMovieSlug,
    searchPeacockThrillerMovies,
    FQy4HArVdBbZ87AHrbfdhSXRgyE5NUbrh6GaL8enMUeh,
    sortPeacockThrillerMovies,
    FQy4HArVdBbZ87AHrbfdhSXRgyE5NUbrh6GaL8enMUeh
};