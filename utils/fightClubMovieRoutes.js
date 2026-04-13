// utils/fightClubMovieRoutes.js - COMPLETELY FIXED SSG ROUTE MAPPING FOR FIGHT CLUB COLLECTION

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './fightClubMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE FIGHT CLUB MOVIE SLUG MAPPING
export const FIGHT_CLUB_MOVIE_SLUGS = {
    // Rank 1: Filth
    'tt1450321': 'filth',
    
    // Rank 2: Choke
    'tt1024715': 'choke',
    
    // Rank 3: The Double
    'tt1825157': 'the-double',
    
    // Rank 4: The Art of Self-Defense
    'tt7339248': 'the-art-of-self-defense',
    
    // Rank 5: Falling Down
    'tt0106856': 'falling-down',
    
    // Rank 6: American History X
    'tt0120586': 'american-history-x',
    
    // Rank 7: Brazil
    'tt0088846': 'brazil',
    
    // Rank 8: Office Space
    'tt0151804': 'office-space',
    
    // Rank 9: V for Vendetta
    'tt0434409': 'v-for-vendetta',
    
    // Rank 10: Being John Malkovich
    'tt0120601': 'being-john-malkovich'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(FIGHT_CLUB_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG - FIXED
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return FIGHT_CLUB_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR FIGHT CLUB MOVIES - FIXED
export const generateFightClubMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: FIGHT_CLUB_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ FIGHT CLUB MOVIE NAVIGATION BREADCRUMBS
export const getFightClubMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Movies Like Fight Club', href: '/collection/movies-like-fight-club' },
        { label: movie.Title, href: `/collection/movies-like-fight-club/${FIGHT_CLUB_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS FIGHT CLUB MOVIE - FIXED
export const getFightClubMovieNavigation = (currentMovie) => {
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
            slug: FIGHT_CLUB_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: FIGHT_CLUB_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED FIGHT CLUB MOVIES (SAME GENRE/DECADE)
export const getRelatedFightClubMovies = (currentMovie, limit = 3) => {
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
            slug: FIGHT_CLUB_MOVIE_SLUGS[movie.imdbID]
        }));
};

// 👁️ FIGHT CLUB COLLECTION METADATA (FINAL – CTR + SEO SAFE)
export const FIGHT_CLUB_COLLECTION_META = {
    title: "10 Best Movies Like Fight Club",
    description: "Explore the best psychological thrillers and dark satires exploring identity fracture, anti-system rebellion, and anarchic collapse.",
    slug: "movies-like-fight-club"
};

// ✅ GENERATE FIGHT CLUB MOVIE SITEMAP URLS
export const generateFightClubMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/movies-like-fight-club`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/movies-like-fight-club/${FIGHT_CLUB_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'weekly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE FIGHT CLUB MOVIE SLUG
export const isValidFightClubMovieSlug = (slug) => {
    return Object.values(FIGHT_CLUB_MOVIE_SLUGS).includes(slug);
};

// ✅ FIGHT CLUB MOVIE SEARCH/FILTER UTILITIES - FIXED
export const searchFightClubMovies = (query) => {
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
            slug: FIGHT_CLUB_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterFightClubMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: FIGHT_CLUB_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ FIXED SORTING - NOW USES REAL METRICS FROM DATA FILE
export const sortFightClubMovies = (movies, sortBy) => {
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
        case 'anarchyLevel': // Replaces paranoiaLevel/emotionalResonance
            return sortedMovies.sort((a, b) => {
                const anarchyA = COMPLETE_MOVIE_DATA[a.tmdbId]?.anarchyLevel || 0;
                const anarchyB = COMPLETE_MOVIE_DATA[b.tmdbId]?.anarchyLevel || 0;
                return anarchyB - anarchyA;
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET FIGHT CLUB COLLECTION STATS
export const getFightClubCollectionStats = () => {
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
        // ✅ ADDED - AVERAGE ANARCHY LEVEL (Replaces Paranoia Index)
        averageAnarchyLevel: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.anarchyLevel || 0);
            }, 0) / COMPLETE_MOVIE_DATABASE.length
        ),
        // ✅ ADDED - AVERAGE RATING
        averageRating: (
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.rating || 0);
            }, 0) / COMPLETE_MOVIE_DATABASE.length
        ).toFixed(1)
    };
};

// ✅ EXPORT ALL UTILITIES
export default {
    generateMovieSlug,
    FIGHT_CLUB_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateFightClubMoviePaths,
    getFightClubMovieBreadcrumbs,
    getFightClubMovieNavigation,
    getRelatedFightClubMovies,
    FIGHT_CLUB_COLLECTION_META,
    generateFightClubMovieSitemapUrls,
    isValidFightClubMovieSlug,
    searchFightClubMovies,
    filterFightClubMoviesByGenre,
    sortFightClubMovies,
    getFightClubCollectionStats
};