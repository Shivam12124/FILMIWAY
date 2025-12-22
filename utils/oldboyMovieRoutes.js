// utils/oldboyMovieRoutes.js - COMPLETELY FIXED SSG ROUTE MAPPING FOR MOVIES LIKE OLDBOY

import { COMPLETE_MOVIE_DATABASE } from './oldboyMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE OLDBOY MOVIE SLUG MAPPING (Movies Like Oldboy)
export const OLDBOY_MOVIE_SLUGS = {
    // Rank 1: I Saw the Devil
    'tt1588170': 'i-saw-the-devil',
    
    // Rank 2: Sympathy for Mr. Vengeance
    'tt0310775': 'sympathy-for-mr-vengeance',
    
    // Rank 3: Lady Vengeance
    'tt0451094': 'lady-vengeance',
    
    // Rank 4: The Man from Nowhere
    'tt1527788': 'the-man-from-nowhere',
    
    // Rank 5: The Chaser
    'tt1190539': 'the-chaser',
    
    // Rank 6: A Bittersweet Life
    'tt0456912': 'a-bittersweet-life',
    
    // Rank 7: Incendies
    'tt1255953': 'incendies',
    
    // Rank 8: The Handmaiden
    'tt4016934': 'the-handmaiden',
    
    // Rank 9: No Mercy
    'tt1540399': 'no-mercy',
    
    // Rank 10: Prisoners
    'tt1392214': 'prisoners'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(OLDBOY_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG - FIXED
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return OLDBOY_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR OLDBOY MOVIES - FIXED
export const generateOldboyMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: OLDBOY_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ OLDBOY MOVIE NAVIGATION BREADCRUMBS
export const getOldboyMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Movies Like Oldboy', href: '/collection/movies-like-oldboy' },
        { label: movie.Title, href: `/collection/movies-like-oldboy/${OLDBOY_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS OLDBOY MOVIE - FIXED
export const getOldboyMovieNavigation = (currentMovie) => {
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
            slug: OLDBOY_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: OLDBOY_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED OLDBOY MOVIES (SAME GENRE/DECADE/DIRECTOR)
export const getRelatedOldboyMovies = (currentMovie, limit = 3) => {
    const currentDecade = Math.floor(currentMovie.year / 10) * 10;
    const currentGenre = currentMovie.genre;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => 
            movie.imdbID !== currentMovie.imdbID && (
                movie.genre === currentGenre || 
                Math.floor(movie.year / 10) * 10 === currentDecade ||
                movie.director === currentMovie.director // Park Chan-wook movies
            )
        )
        .slice(0, limit)
        .map(movie => ({
            ...movie,
            slug: OLDBOY_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ OLDBOY COLLECTION METADATA - PERFECT SEO DATA
export const OLDBOY_COLLECTION_META = {
    title: 'Movies Like Oldboy – 10 Best Revenge Thrillers You Must Watch',
    description: 'Top 10 revenge-driven thrillers ranked by obsession intensity. From I Saw the Devil to The Handmaiden. Extreme vengeance cinema like Park Chan-wook masterpiece.',
    keywords: 'movies like oldboy, revenge thrillers, i saw the devil, sympathy for mr vengeance, lady vengeance, park chan-wook, obsession cinema, moral ambiguity films, korean revenge movies',
    canonicalUrl: 'https://filmiway.com/collection/movies-like-oldboy',
    ogImage: 'https://filmiway.com/images/movies-like-oldboy-collection.jpg',
    totalMovies: COMPLETE_MOVIE_DATABASE.length,
    averageRating: (
        COMPLETE_MOVIE_DATABASE.reduce((sum, movie) => sum + (movie.rating || 0), 0) / COMPLETE_MOVIE_DATABASE.length
    ).toFixed(1),
    averageRuntime: Math.round(
        COMPLETE_MOVIE_DATABASE.reduce((sum, movie) => sum + movie.runtime, 0) / COMPLETE_MOVIE_DATABASE.length
    )
};

// ✅ GENERATE OLDBOY MOVIE SITEMAP URLS
export const generateOldboyMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/movies-like-oldboy`,
            lastmod: new Date().toISOString(),
            priority: '0.9',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/movies-like-oldboy/${OLDBOY_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE OLDBOY MOVIE SLUG
export const isValidOldboyMovieSlug = (slug) => {
    return Object.values(OLDBOY_MOVIE_SLUGS).includes(slug);
};

// ✅ OLDBOY MOVIE SEARCH/FILTER UTILITIES
export const searchOldboyMovies = (query) => {
    const lowercaseQuery = query.toLowerCase();
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => 
            movie.Title.toLowerCase().includes(lowercaseQuery) ||
            movie.genre.toLowerCase().includes(lowercaseQuery) ||
            movie.director.toLowerCase().includes(lowercaseQuery) ||
            ['revenge', 'obsession', 'vengeance', 'park chan-wook'].some(term => 
                movie.Title.toLowerCase().includes(term) || 
                movie.director.toLowerCase().includes(term)
            ) ||
            movie.year.toString().includes(query)
        )
        .map(movie => ({
            ...movie,
            slug: OLDBOY_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterOldboyMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: OLDBOY_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ FIXED SORTING - REVENGE OBSESSION INDEX
export const sortOldboyMovies = (movies, sortBy) => {
    const sortedMovies = [...movies];
    
    switch (sortBy) {
        case 'rating':
            return sortedMovies.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        case 'year':
            return sortedMovies.sort((a, b) => b.year - a.year);
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        case 'obsession':
            return sortedMovies.sort((a, b) => (b.customRating || '0/100').replace('/100', '') - (a.customRating || '0/100').replace('/100', ''));
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET OLDBOY MOVIE COLLECTION STATS
export const getOldboyCollectionStats = () => {
    const genres = [...new Set(COMPLETE_MOVIE_DATABASE.map(m => m.genre))];
    const directors = [...new Set(COMPLETE_MOVIE_DATABASE.map(m => m.director))];
    const yearRange = {
        earliest: Math.min(...COMPLETE_MOVIE_DATABASE.map(m => m.year)),
        latest: Math.max(...COMPLETE_MOVIE_DATABASE.map(m => m.year))
    };
    
    return {
        totalMovies: COMPLETE_MOVIE_DATABASE.length,
        genres: genres.length,
        genreList: genres,
        directors: directors.length,
        directorList: directors,
        yearRange,
        averageYear: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => sum + m.year, 0) / COMPLETE_MOVIE_DATABASE.length
        ),
        averageRuntime: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => sum + m.runtime, 0) / COMPLETE_MOVIE_DATABASE.length
        ),
        averageRating: (
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => sum + (m.rating || 0), 0) / COMPLETE_MOVIE_DATABASE.length
        ).toFixed(1),
        parkChanWookCount: COMPLETE_MOVIE_DATABASE.filter(m => m.director === 'Park Chan-wook').length
    };
};

// ✅ EXPORT ALL UTILITIES
export default {
    generateMovieSlug,
    OLDBOY_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateOldboyMoviePaths,
    getOldboyMovieBreadcrumbs,
    getOldboyMovieNavigation,
    getRelatedOldboyMovies,
    OLDBOY_COLLECTION_META,
    generateOldboyMovieSitemapUrls,
    isValidOldboyMovieSlug,
    searchOldboyMovies,
    filterOldboyMoviesByGenre,
    sortOldboyMovies,
    getOldboyCollectionStats
};
