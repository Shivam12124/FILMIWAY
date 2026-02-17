// utils/detectiveThrillerMovieRoutes.js - ROUTE MAPPING FOR DETECTIVE THRILLER COLLECTION

import { 
    COMPLETE_MOVIE_DATABASE, 
    COMPLETE_MOVIE_DATA 
} from './detectiveThrillerMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE DETECTIVE THRILLER MOVIE SLUG MAPPING
export const DETECTIVE_THRILLER_MOVIE_SLUGS = {
    // Rank 1: Se7en
    'tt0114369': 'se7en',
    
    // Rank 2: Zodiac
    'tt0443706': 'zodiac',
    
    // Rank 3: Prisoners
    'tt1392214': 'prisoners',
    
    // Rank 4: The Secret in Their Eyes
    'tt1305806': 'the-secret-in-their-eyes',
    
    // Rank 5: Memories of Murder
    'tt0353969': 'memories-of-murder',
    
    // Rank 6: The Chaser
    'tt1190539': 'the-chaser',
    
    // Rank 7: Mystic River
    'tt0327056': 'mystic-river',
    
    // Rank 8: Marshland
    'tt3253930': 'marshland',
    
    // Rank 9: Fargo
    'tt0116282': 'fargo',
    
    // Rank 10: The Fugitive
    'tt0106977': 'the-fugitive'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(DETECTIVE_THRILLER_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return DETECTIVE_THRILLER_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR DETECTIVE THRILLER MOVIES
export const generateDetectiveThrillerMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: DETECTIVE_THRILLER_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ DETECTIVE THRILLER MOVIE NAVIGATION BREADCRUMBS
export const getDetectiveThrillerMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Best Detective Thriller Movies', href: '/collection/best-detective-thriller-movies' },
        { label: movie.Title, href: `/collection/best-detective-thriller-movies/${DETECTIVE_THRILLER_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS MOVIE
export const getDetectiveThrillerMovieNavigation = (currentMovie) => {
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
            slug: DETECTIVE_THRILLER_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: DETECTIVE_THRILLER_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED MOVIES (SAME GENRE/DECADE)
export const getRelatedDetectiveThrillerMovies = (currentMovie, limit = 3) => {
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
            slug: DETECTIVE_THRILLER_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ COLLECTION METADATA
export const DETECTIVE_THRILLER_COLLECTION_META = {
    title: 'Top 10 Best Detective Thriller Movies',
    description: 'The ultimate list of investigative cinema. From the nihilism of Se7en to the obsession of Zodiac. Ranked by mystery complexity and psychological tension.',
    keywords: 'detective movies, crime thrillers, mystery films, whodunit, investigative cinema, Se7en, Zodiac',
    canonicalUrl: 'https://filmiway.com/collection/best-detective-thriller-movies',
    ogImage: 'https://filmiway.com/images/best-detective-thriller-movies.jpg',
    totalMovies: COMPLETE_MOVIE_DATABASE.length,
    // Calculated from detailed data
    averageMysteryComplexity: Math.round(
        Object.values(COMPLETE_MOVIE_DATA).reduce((sum, movie) => {
            return sum + (movie.mysteryComplexity || 0);
        }, 0) / Object.keys(COMPLETE_MOVIE_DATA).length
    )
};

// ✅ GENERATE SITEMAP URLS
export const generateDetectiveThrillerMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-detective-thriller-movies`,
            lastmod: new Date().toISOString(),
            priority: '0.9',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/best-detective-thriller-movies/${DETECTIVE_THRILLER_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE SLUG
export const isValidDetectiveThrillerMovieSlug = (slug) => {
    return Object.values(DETECTIVE_THRILLER_MOVIE_SLUGS).includes(slug);
};

// ✅ SEARCH/FILTER UTILITIES
export const searchDetectiveThrillerMovies = (query) => {
    const lowercaseQuery = query.toLowerCase();
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => 
            movie.Title.toLowerCase().includes(lowercaseQuery) ||
            movie.genre.toLowerCase().includes(lowercaseQuery) ||
            movie.year.toString().includes(query)
        )
        .map(movie => ({
            ...movie,
            slug: DETECTIVE_THRILLER_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterDetectiveThrillerMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: DETECTIVE_THRILLER_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ SORTING
export const sortDetectiveThrillerMovies = (movies, sortBy) => {
    const sortedMovies = [...movies];
    
    switch (sortBy) {
        case 'rating':
            // Look up rating in COMPLETE_MOVIE_DATA
            return sortedMovies.sort((a, b) => {
                const ratingA = COMPLETE_MOVIE_DATA[a.tmdbId]?.rating || 0;
                const ratingB = COMPLETE_MOVIE_DATA[b.tmdbId]?.rating || 0;
                return ratingB - ratingA;
            });
        case 'year':
            return sortedMovies.sort((a, b) => b.year - a.year);
        case 'mysteryComplexity':
            // Look up mysteryComplexity in COMPLETE_MOVIE_DATA
            return sortedMovies.sort((a, b) => {
                const complexA = COMPLETE_MOVIE_DATA[a.tmdbId]?.mysteryComplexity || 0;
                const complexB = COMPLETE_MOVIE_DATA[b.tmdbId]?.mysteryComplexity || 0;
                return complexB - complexA;
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ COLLECTION STATS
export const getDetectiveThrillerCollectionStats = () => {
    const genres = [...new Set(COMPLETE_MOVIE_DATABASE.map(m => m.genre))];
    const decades = [...new Set(COMPLETE_MOVIE_DATABASE.map(m => Math.floor(m.year / 10) * 10))];
    const yearRange = {
        earliest: Math.min(...COMPLETE_MOVIE_DATABASE.map(m => m.year)),
        latest: Math.max(...COMPLETE_MOVIE_DATABASE.map(m => m.year))
    };
    
    // Calculate averages using detailed data
    const detailedValues = Object.values(COMPLETE_MOVIE_DATA);
    
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
        averageMysteryComplexity: Math.round(
            detailedValues.reduce((sum, m) => sum + (m.mysteryComplexity || 0), 0) / detailedValues.length
        ),
        averagePsychologicalTension: Math.round(
            detailedValues.reduce((sum, m) => sum + (m.psychologicalTension || 0), 0) / detailedValues.length
        )
    };
};

// ✅ EXPORT ALL UTILITIES
export default {
    generateMovieSlug,
    DETECTIVE_THRILLER_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateDetectiveThrillerMoviePaths,
    getDetectiveThrillerMovieBreadcrumbs,
    getDetectiveThrillerMovieNavigation,
    getRelatedDetectiveThrillerMovies,
    DETECTIVE_THRILLER_COLLECTION_META,
    generateDetectiveThrillerMovieSitemapUrls,
    isValidDetectiveThrillerMovieSlug,
    searchDetectiveThrillerMovies,
    filterDetectiveThrillerMoviesByGenre,
    sortDetectiveThrillerMovies,
    getDetectiveThrillerCollectionStats
};