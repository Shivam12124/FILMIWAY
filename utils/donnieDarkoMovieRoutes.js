// utils/donnieDarkoMovieRoutes.js - COMPLETE SSG ROUTE MAPPING 🌀

import { COMPLETE_MOVIE_DATABASE } from './donnieDarkoMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') 
        .replace(/\s+/g, '-')         
        .replace(/-+/g, '-')           
        .trim();
};

// ✅ COMPLETE DONNIE DARKO MOVIE SLUG MAPPING
export const DONNIE_DARKO_MOVIE_SLUGS = {
    'tt0289879': 'the-butterfly-effect',
    'tt0114746': '12-monkeys',
    'tt0366627': 'the-jacket',
    'tt0125659': 'open-your-eyes',
    'tt2866360': 'coherence',
    'tt0099871': 'jacobs-ladder',
    'tt0118929': 'dark-city',
    'tt0166924': 'mulholland-drive',
    'tt0338013': 'eternal-sunshine-of-the-spotless-mind',
    'tt2316411': 'enemy',
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(DONNIE_DARKO_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;

    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return DONNIE_DARKO_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR DONNIE DARKO MOVIES
export const generateDonnieDarkoMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: DONNIE_DARKO_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ DONNIE DARKO MOVIE NAVIGATION BREADCRUMBS
export const getDonnieDarkoMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Movies Like Donnie Darko', href: '/collection/movies-like-donnie-darko' },
        { label: movie.Title, href: `/collection/movies-like-donnie-darko/${DONNIE_DARKO_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS DONNIE DARKO MOVIE
export const getDonnieDarkoMovieNavigation = (currentMovie) => {
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
            slug: DONNIE_DARKO_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: DONNIE_DARKO_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED DONNIE DARKO MOVIES (SAME GENRE/DECADE)
export const getRelatedDonnieDarkoMovies = (currentMovie, limit = 3) => {
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
            slug: DONNIE_DARKO_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ DONNIE DARKO COLLECTION METADATA
export const DONNIE_DARKO_COLLECTION_META = {
    title: 'Top 10 Movies Like Donnie Darko',
    description: 'Mind-bending time travel, reality-warping, and psychological thrillers ranked by mind-bend index. From Butterfly Effect to Mulholland Drive.',
    keywords: 'movies like donnie darko, mind-bending films, time travel movies, reality warping cinema, psychological thrillers',
    canonicalUrl: 'https://filmiway.com/collection/movies-like-donnie-darko',
    ogImage: 'https://filmiway.com/images/donnie-darko-movies-collection.jpg',
    totalMovies: COMPLETE_MOVIE_DATABASE.length,
    averageMindbendIndex: Math.round(
        COMPLETE_MOVIE_DATABASE.reduce((sum, movie) => {
            return sum + (95 - (movie.rank - 1) * 1.2);
        }, 0) / COMPLETE_MOVIE_DATABASE.length
    )
};

// ✅ GENERATE DONNIE DARKO MOVIE SITEMAP URLS
export const generateDonnieDarkoMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/movies-like-donnie-darko`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];

    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/movies-like-donnie-darko/${DONNIE_DARKO_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'monthly'
        });
    });

    return urls;
};

// ✅ VALIDATE DONNIE DARKO MOVIE SLUG
export const isValidDonnieDarkoMovieSlug = (slug) => {
    return Object.values(DONNIE_DARKO_MOVIE_SLUGS).includes(slug);
};

// ✅ DONNIE DARKO MOVIE SEARCH/FILTER UTILITIES
export const searchDonnieDarkoMovies = (query) => {
    const lowercaseQuery = query.toLowerCase();

    return COMPLETE_MOVIE_DATABASE
        .filter(movie => 
            movie.Title.toLowerCase().includes(lowercaseQuery) ||
            movie.genre.toLowerCase().includes(lowercaseQuery) ||
            movie.year.toString().includes(query)
        )
        .map(movie => ({
            ...movie,
            slug: DONNIE_DARKO_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterDonnieDarkoMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;

    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: DONNIE_DARKO_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ SORTING UTILITIES
export const sortDonnieDarkoMovies = (movies, sortBy) => {
    const sortedMovies = [...movies];

    switch (sortBy) {
        case 'rating':
            return sortedMovies.sort((a, b) => b.year - a.year);
        case 'year':
            return sortedMovies.sort((a, b) => b.year - a.year);
        case 'mindbend':
            return sortedMovies.sort((a, b) => (95 - (b.rank - 1) * 1.2) - (95 - (a.rank - 1) * 1.2));
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET DONNIE DARKO COLLECTION STATS
export const getDonnieDarkoCollectionStats = () => {
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
        averageMindbendIndex: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => sum + (95 - (m.rank - 1) * 1.2), 0) / COMPLETE_MOVIE_DATABASE.length
        )
    };
};

// ✅ EXPORT ALL UTILITIES
export default {
    generateMovieSlug,
    DONNIE_DARKO_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateDonnieDarkoMoviePaths,
    getDonnieDarkoMovieBreadcrumbs,
    getDonnieDarkoMovieNavigation,
    getRelatedDonnieDarkoMovies,
    DONNIE_DARKO_COLLECTION_META,
    generateDonnieDarkoMovieSitemapUrls,
    isValidDonnieDarkoMovieSlug,
    searchDonnieDarkoMovies,
    filterDonnieDarkoMoviesByGenre,
    sortDonnieDarkoMovies,
    getDonnieDarkoCollectionStats
};