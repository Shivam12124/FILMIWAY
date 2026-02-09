// utils/peacockBestMoviesRoutes.js - SSG ROUTE MAPPING FOR BEST MOVIES ON PEACOCK COLLECTION

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './peacockBestMoviesData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE PEACOCK BEST MOVIE SLUG MAPPING
export const PEACOCK_BEST_MOVIE_SLUGS = {
    // Rank 1: Memento
    'tt0209144': 'memento',
    
    // Rank 2: Sicario
    'tt3397884': 'sicario',
    
    // Rank 3: The Revenant
    'tt1663202': 'the-revenant',
    
    // Rank 4: Requiem for a Dream
    'tt0180093': 'requiem-for-a-dream',
    
    // Rank 5: Man on Fire
    'tt0328107': 'man-on-fire',
    
    // Rank 6: Apocalypto
    'tt0472043': 'apocalypto',
    
    // Rank 7: About Time
    'tt2194499': 'about-time',
    
    // Rank 8: Coherence
    'tt2866360': 'coherence',
    
    // Rank 9: Harry Potter and the Prisoner of Azkaban
    'tt0304141': 'harry-potter-and-the-prisoner-of-azkaban',
    
    // Rank 10: Monty Python and the Holy Grail
    'tt0071853': 'monty-python-and-the-holy-grail'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(PEACOCK_BEST_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return PEACOCK_BEST_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR PEACOCK BEST MOVIES
export const generatePeacockBestMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: PEACOCK_BEST_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ PEACOCK BEST MOVIE NAVIGATION BREADCRUMBS
export const getPeacockBestMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Best Movies on Peacock', href: '/collection/best-movies-on-peacock' },
        { label: movie.Title, href: `/collection/best-movies-on-peacock/${PEACOCK_BEST_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS PEACOCK BEST MOVIE
export const getPeacockBestMovieNavigation = (currentMovie) => {
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
            slug: PEACOCK_BEST_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: PEACOCK_BEST_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED PEACOCK BEST MOVIES (SAME GENRE/DECADE)
export const getRelatedPeacockBestMovies = (currentMovie, limit = 3) => {
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
            slug: PEACOCK_BEST_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ PEACOCK BEST COLLECTION METADATA
export const PEACOCK_BEST_COLLECTION_META = {
    title: 'Top 10 Best Movies on Peacock',
    description: 'The definitive ranking of the highest-rated films streaming on Peacock right now. From Memento to Sicario, covering all genres.',
    keywords: 'best movies on peacock, peacock top movies, sicario peacock, memento movie, top rated peacock films, peacock thriller movies',
    canonicalUrl: 'https://filmiway.com/collection/best-movies-on-peacock',
    ogImage: 'https://filmiway.com/images/peacock-best-movies-collection.jpg',
    totalMovies: COMPLETE_MOVIE_DATABASE.length,
    averageRating: Math.round(
        COMPLETE_MOVIE_DATABASE.reduce((sum, movie) => {
            const data = COMPLETE_MOVIE_DATA[movie.tmdbId];
            return sum + (data?.rating || 7.5); 
        }, 0) / COMPLETE_MOVIE_DATABASE.length * 10 
    ) / 10 
};

// ✅ GENERATE PEACOCK BEST MOVIE SITEMAP URLS
// Note: Renamed function slightly to avoid conflict if imported alongside Hulu routes
export const generatePeacockSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-movies-on-peacock`,
            lastmod: new Date().toISOString(),
            priority: '0.9',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/best-movies-on-peacock/${PEACOCK_BEST_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE PEACOCK BEST MOVIE SLUG
export const isValidPeacockBestMovieSlug = (slug) => {
    return Object.values(PEACOCK_BEST_MOVIE_SLUGS).includes(slug);
};

// ✅ PEACOCK BEST MOVIE SEARCH/FILTER UTILITIES
export const searchPeacockBestMovies = (query) => {
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
            slug: PEACOCK_BEST_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterPeacockBestMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: PEACOCK_BEST_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ SORTING
export const sortPeacockBestMovies = (movies, sortBy) => {
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

// ✅ GET PEACOCK BEST MOVIE COLLECTION STATS
export const getPeacockBestCollectionStats = () => {
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
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.rating || 7.5);
            }, 0) / COMPLETE_MOVIE_DATABASE.length
        ).toFixed(1)
    };
};

// ✅ EXPORT ALL UTILITIES
export default {
    generateMovieSlug,
    PEACOCK_BEST_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generatePeacockBestMoviePaths,
    getPeacockBestMovieBreadcrumbs,
    getPeacockBestMovieNavigation,
    getRelatedPeacockBestMovies,
    PEACOCK_BEST_COLLECTION_META,
    generatePeacockSitemapUrls,
    isValidPeacockBestMovieSlug,
    searchPeacockBestMovies,
    filterPeacockBestMoviesByGenre,
    sortPeacockBestMovies,
    getPeacockBestCollectionStats
};