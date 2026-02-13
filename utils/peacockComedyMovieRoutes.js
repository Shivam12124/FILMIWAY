// utils/peacockComedyMovieRoutes.js - COMPLETELY FIXED SSG ROUTE MAPPING FOR PEACOCK COMEDY COLLECTION

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './peacockComedyMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE PEACOCK COMEDY MOVIE SLUG MAPPING
export const PEACOCK_COMEDY_MOVIE_SLUGS = {
    // Rank 1: Monty Python and the Holy Grail
    'tt0071853': 'monty-python-and-the-holy-grail',
    
    // Rank 2: Anchorman: The Legend of Ron Burgundy
    'tt0357413': 'anchorman-the-legend-of-ron-burgundy',
    
    // Rank 3: My Cousin Vinny
    'tt0104952': 'my-cousin-vinny',
    
    // Rank 4: Zoolander
    'tt0190138': 'zoolander',
    
    // Rank 5: Happy Gilmore
    'tt0116483': 'happy-gilmore',
    
    // Rank 6: The 'Burbs
    'tt0096997': 'the-burbs',
    
    // Rank 7: Along Came Polly
    'tt0343135': 'along-came-polly',
    
    // Rank 8: The Fall Guy
    'tt1684562': 'the-fall-guy',
    
    // Rank 9: American Fiction
    'tt23561236': 'american-fiction',
    
    // Rank 10: Deliver Us from Eva
    'tt0306805': 'deliver-us-from-eva'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(PEACOCK_COMEDY_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG - FIXED
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return PEACOCK_COMEDY_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR PEACOCK COMEDY MOVIES
export const generatePeacockComedyMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: PEACOCK_COMEDY_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ PEACOCK COMEDY MOVIE NAVIGATION BREADCRUMBS
export const getPeacockComedyMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Best Comedy Movies on Peacock', href: '/collection/best-comedy-movies-on-peacock' },
        { label: movie.Title, href: `/best-comedy-movies-on-peacock/${PEACOCK_COMEDY_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS PEACOCK COMEDY MOVIE
export const getPeacockComedyMovieNavigation = (currentMovie) => {
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
            slug: PEACOCK_COMEDY_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: PEACOCK_COMEDY_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED PEACOCK COMEDY MOVIES (SAME GENRE/DECADE)
export const getRelatedPeacockComedyMovies = (currentMovie, limit = 3) => {
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
            slug: PEACOCK_COMEDY_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ PEACOCK COMEDY COLLECTION METADATA
export const PEACOCK_COMEDY_COLLECTION_META = {
    title: '10 Best Comedy Movies on Peacock (Ranked by Laughter)',
    description: 'The definitive ranking of the funniest movies on Peacock. From the surrealism of Monty Python to the chaos of Anchorman.',
    keywords: 'best comedy movies on peacock, peacock comedy films, monty python, anchorman, happy gilmore, funniest movies streaming, comedy rankings 2026',
    canonicalUrl: 'https://filmiway.com/collection/best-comedy-movies-on-peacock',
    ogImage: 'https://filmiway.com/images/peacock-comedy-collection-og.jpg',
    totalMovies: COMPLETE_MOVIE_DATABASE.length,
    // ✅ FIXED - CALCULATES AVERAGE LAUGHTER SCORE
    averageLaughterScore: Math.round(
        COMPLETE_MOVIE_DATABASE.reduce((sum, movie) => {
            const data = COMPLETE_MOVIE_DATA[movie.tmdbId];
            return sum + (data?.laughterIndex || 85); 
        }, 0) / COMPLETE_MOVIE_DATABASE.length
    )
};

// ✅ GENERATE PEACOCK COMEDY MOVIE SITEMAP URLS
export const generatePeacockComedyMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-comedy-movies-on-peacock`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/best-comedy-movies-on-peacock/${PEACOCK_COMEDY_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE PEACOCK COMEDY MOVIE SLUG
export const isValidPeacockComedyMovieSlug = (slug) => {
    return Object.values(PEACOCK_COMEDY_MOVIE_SLUGS).includes(slug);
};

// ✅ PEACOCK COMEDY MOVIE SEARCH/FILTER UTILITIES
export const searchPeacockComedyMovies = (query) => {
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
            slug: PEACOCK_COMEDY_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterPeacockComedyMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: PEACOCK_COMEDY_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ FIXED SORTING - NOW USES REAL DATA
export const sortPeacockComedyMovies = (movies, sortBy) => {
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
        case 'laughter': 
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

// ✅ GET PEACOCK COMEDY MOVIE COLLECTION STATS
export const getPeacockComedyCollectionStats = () => {
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
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.laughterIndex || 85);
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
    PEACOCK_COMEDY_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generatePeacockComedyMoviePaths,
    getPeacockComedyMovieBreadcrumbs,
    getPeacockComedyMovieNavigation,
    getRelatedPeacockComedyMovies,
    PEACOCK_COMEDY_COLLECTION_META,
    generatePeacockComedyMovieSitemapUrls,
    isValidPeacockComedyMovieSlug,
    searchPeacockComedyMovies,
    filterPeacockComedyMoviesByGenre,
    sortPeacockComedyMovies,
    getPeacockComedyCollectionStats
};