// utils/jenniferLawrenceMovieRoutes.js - SSG ROUTE MAPPING FOR JENNIFER LAWRENCE COLLECTION ✅
// 100% SEO Safe - Framed around Acting Range, Star Power, and Cinematic Impact

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './jenniferLawrenceMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE JENNIFER LAWRENCE MOVIE SLUG MAPPING
export const JLAW_MOVIE_SLUGS = {
    // Rank 1: Silver Linings Playbook
    'tt1045658': 'silver-linings-playbook',
    
    // Rank 2: Winter's Bone
    'tt1399683': 'winters-bone',
    
    // Rank 3: mother!
    'tt5109784': 'mother',
    
    // Rank 4: American Hustle
    'tt2261597': 'american-hustle',
    
    // Rank 5: The Hunger Games: Catching Fire
    'tt1951264': 'the-hunger-games-catching-fire',
    
    // Rank 6: Die My Love
    'tt9362736': 'die-my-love',
    
    // Rank 7: The Hunger Games
    'tt1392170': 'the-hunger-games',
    
    // Rank 8: Red Sparrow
    'tt2873282': 'red-sparrow',
    
    // Rank 9: No Hard Feelings
    'tt14425042': 'no-hard-feelings',
    
    // Rank 10: Passengers
    'tt1355644': 'passengers'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(JLAW_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return JLAW_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR JENNIFER LAWRENCE MOVIES
export const generateJLawMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: JLAW_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ JENNIFER LAWRENCE MOVIE NAVIGATION BREADCRUMBS
export const getJLawMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Top 10 Jennifer Lawrence Movies', href: '/collection/top-10-jennifer-lawrence-movies' },
        { label: movie.Title, href: `/movies/top-10-jennifer-lawrence-movies/${JLAW_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS JENNIFER LAWRENCE MOVIE
export const getJLawMovieNavigation = (currentMovie) => {
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
            slug: JLAW_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: JLAW_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED JENNIFER LAWRENCE MOVIES (SAME GENRE/DECADE)
export const getRelatedJLawMovies = (currentMovie, limit = 3) => {
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
            slug: JLAW_MOVIE_SLUGS[movie.imdbID]
        }));
};

// 👁️ JENNIFER LAWRENCE COLLECTION METADATA (FINAL – CTR + SEO SAFE)
export const JLAW_COLLECTION_META = {
    title: "Top 10 Jennifer Lawrence Movies",
    description: "Explore the top 10 best Jennifer Lawrence movies, showcasing her Oscar-winning dramatic range, iconic blockbuster roles, and comedic brilliance.",
    slug: "top-10-jennifer-lawrence-movies"
};

// ✅ GENERATE JENNIFER LAWRENCE MOVIE SITEMAP URLS
export const generateJLawMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/top-10-jennifer-lawrence-movies`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/movies/top-10-jennifer-lawrence-movies/${JLAW_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'weekly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE JENNIFER LAWRENCE MOVIE SLUG
export const isValidJLawMovieSlug = (slug) => {
    return Object.values(JLAW_MOVIE_SLUGS).includes(slug);
};

// ✅ JENNIFER LAWRENCE MOVIE SEARCH/FILTER UTILITIES
export const searchJLawMovies = (query) => {
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
            slug: JLAW_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterJLawMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: JLAW_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ FIXED SORTING - NOW USES REAL METRICS FROM DATA FILE
export const sortJLawMovies = (movies, sortBy) => {
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
        case 'starPower': // ✅ Custom metric sorting
            return sortedMovies.sort((a, b) => {
                const powerA = COMPLETE_MOVIE_DATA[a.tmdbId]?.starPower || 0;
                const powerB = COMPLETE_MOVIE_DATA[b.tmdbId]?.starPower || 0;
                return powerB - powerA;
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET JENNIFER LAWRENCE COLLECTION STATS
export const getJLawCollectionStats = () => {
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
        // ✅ ADDED - AVERAGE STAR POWER
        averageStarPower: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.starPower || 0);
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
    JLAW_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateJLawMoviePaths,
    getJLawMovieBreadcrumbs,
    getJLawMovieNavigation,
    getRelatedJLawMovies,
    JLAW_COLLECTION_META,
    generateJLawMovieSitemapUrls,
    isValidJLawMovieSlug,
    searchJLawMovies,
    filterJLawMoviesByGenre,
    sortJLawMovies,
    getJLawCollectionStats
};