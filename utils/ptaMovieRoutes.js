// utils/ptaMovieRoutes.js - SSG ROUTE MAPPING FOR PTA COLLECTION ✅
// 100% SEO Safe - Framed around Auteur Vision, Character Studies, and Cinematic Mastery

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './ptaMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE PTA MOVIE SLUG MAPPING
export const PTA_MOVIE_SLUGS = {
    // Rank 1: There Will Be Blood
    'tt0469494': 'there-will-be-blood',
    
    // Rank 2: Boogie Nights
    'tt0118749': 'boogie-nights',
    
    // Rank 3: One Battle After Another
    'tt31046187': 'one-battle-after-another',
    
    // Rank 4: The Master
    'tt1560747': 'the-master',
    
    // Rank 5: Phantom Thread
    'tt5776858': 'phantom-thread',
    
    // Rank 6: Magnolia
    'tt0175880': 'magnolia',
    
    // Rank 7: Punch-Drunk Love
    'tt0272338': 'punch-drunk-love',
    
    // Rank 8: Licorice Pizza
    'tt11271038': 'licorice-pizza',
    
    // Rank 9: Hard Eight
    'tt0119256': 'hard-eight',
    
    // Rank 10: Inherent Vice
    'tt1791528': 'inherent-vice'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(PTA_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return PTA_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR PTA MOVIES
export const generatePtaMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: PTA_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ PTA MOVIE NAVIGATION BREADCRUMBS
export const getPtaMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Paul Thomas Anderson Movies Ranked', href: '/collection/best-paul-thomas-anderson-movies' },
        { label: movie.Title, href: `/movie/${PTA_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS PTA MOVIE
export const getPtaMovieNavigation = (currentMovie) => {
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
            slug: PTA_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: PTA_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED PTA MOVIES (SAME GENRE/DECADE)
export const getRelatedPtaMovies = (currentMovie, limit = 3) => {
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
            slug: PTA_MOVIE_SLUGS[movie.imdbID]
        }));
};

// 👁️ PTA COLLECTION METADATA (FINAL – CTR + SEO SAFE)
export const PTA_COLLECTION_META = {
    title: "All Paul Thomas Anderson Movies Ranked",
    description: "Explore the complete filmography of Paul Thomas Anderson, ranked from worst to best, featuring intense character studies and cinematic mastery.",
    slug: "best-paul-thomas-anderson-movies"
};

// ✅ GENERATE PTA MOVIE SITEMAP URLS
export const generatePtaMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-paul-thomas-anderson-movies`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/movie/${PTA_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'weekly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE PTA MOVIE SLUG
export const isValidPtaMovieSlug = (slug) => {
    return Object.values(PTA_MOVIE_SLUGS).includes(slug);
};

// ✅ PTA MOVIE SEARCH/FILTER UTILITIES
export const searchPtaMovies = (query) => {
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
            slug: PTA_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterPtaMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: PTA_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ FIXED SORTING - NOW USES REAL METRICS FROM DATA FILE
export const sortPtaMovies = (movies, sortBy) => {
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
        case 'auteurVision': // ✅ Swapped to our custom PTA metric
            return sortedMovies.sort((a, b) => {
                const visionA = COMPLETE_MOVIE_DATA[a.tmdbId]?.auteurVision || 0;
                const visionB = COMPLETE_MOVIE_DATA[b.tmdbId]?.auteurVision || 0;
                return visionB - visionA;
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET PTA COLLECTION STATS
export const getPtaCollectionStats = () => {
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
        // ✅ ADDED - AVERAGE AUTEUR VISION INDEX
        averageAuteurVision: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.auteurVision || 0);
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
    PTA_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generatePtaMoviePaths,
    getPtaMovieBreadcrumbs,
    getPtaMovieNavigation,
    getRelatedPtaMovies,
    PTA_COLLECTION_META,
    generatePtaMovieSitemapUrls,
    isValidPtaMovieSlug,
    searchPtaMovies,
    filterPtaMoviesByGenre,
    sortPtaMovies,
    getPtaCollectionStats
};