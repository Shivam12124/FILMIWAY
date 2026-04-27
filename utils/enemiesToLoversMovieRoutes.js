// utils/enemiesToLoversMovieRoutes.js - SSG ROUTE MAPPING FOR ENEMIES TO LOVERS COLLECTION ✅
// 100% SEO Safe - Framed around Character Dynamics, Romantic Chemistry, and Psychological Tropes

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './enemiesToLoversMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE ENEMIES TO LOVERS MOVIE SLUG MAPPING
export const ENEMIES_TO_LOVERS_MOVIE_SLUGS = {
    // Rank 1: Pride & Prejudice
    'tt0414387': 'pride-prejudice',
    
    // Rank 2: When Harry Met Sally...
    'tt0098635': 'when-harry-met-sally',
    
    // Rank 3: 10 Things I Hate About You
    'tt0147746': '10-things-i-hate-about-you',
    
    // Rank 4: Silver Linings Playbook
    'tt1045658': 'silver-linings-playbook',
    
    // Rank 5: You've Got Mail
    'tt0128853': 'youve-got-mail',
    
    // Rank 6: Dirty Dancing
    'tt0092890': 'dirty-dancing',
    
    // Rank 7: Me Before You
    'tt2674426': 'me-before-you',
    
    // Rank 8: The Proposal
    'tt1041829': 'the-proposal',
    
    // Rank 9: How to Lose a Guy in 10 Days
    'tt0251127': 'how-to-lose-a-guy-in-10-days',
    
    // Rank 10: Anyone But You
    'tt26047818': 'anyone-but-you'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(ENEMIES_TO_LOVERS_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return ENEMIES_TO_LOVERS_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR ENEMIES TO LOVERS MOVIES
export const generateEnemiesToLoversMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: ENEMIES_TO_LOVERS_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ ENEMIES TO LOVERS MOVIE NAVIGATION BREADCRUMBS
export const getEnemiesToLoversMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: '10 Best Enemies to Lovers Movies', href: '/collection/best-enemies-to-lovers-movies' },
        { label: movie.Title, href: `/movies/best-enemies-to-lovers-movies/${ENEMIES_TO_LOVERS_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ GET NEXT/PREVIOUS ENEMIES TO LOVERS MOVIE
export const getEnemiesToLoversMovieNavigation = (currentMovie) => {
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
            slug: ENEMIES_TO_LOVERS_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: ENEMIES_TO_LOVERS_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ GET RELATED ENEMIES TO LOVERS MOVIES (SAME GENRE/DECADE)
export const getRelatedEnemiesToLoversMovies = (currentMovie, limit = 3) => {
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
            slug: ENEMIES_TO_LOVERS_MOVIE_SLUGS[movie.imdbID]
        }));
};

// 👁️ ENEMIES TO LOVERS COLLECTION METADATA (FINAL – CTR + SEO SAFE)
export const ENEMIES_TO_LOVERS_COLLECTION_META = {
    title: "10 Best Enemies to Lovers Movies",
    description: "Explore the 10 best enemies to lovers movies of all time, featuring intense romantic chemistry, witty banter, and iconic slow-burn romances.",
    slug: "best-enemies-to-lovers-movies"
};

// ✅ GENERATE ENEMIES TO LOVERS MOVIE SITEMAP URLS
export const generateEnemiesToLoversMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-enemies-to-lovers-movies`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/movies/best-enemies-to-lovers-movies/${ENEMIES_TO_LOVERS_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'weekly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE ENEMIES TO LOVERS MOVIE SLUG
export const isValidEnemiesToLoversMovieSlug = (slug) => {
    return Object.values(ENEMIES_TO_LOVERS_MOVIE_SLUGS).includes(slug);
};

// ✅ ENEMIES TO LOVERS MOVIE SEARCH/FILTER UTILITIES
export const searchEnemiesToLoversMovies = (query) => {
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
            slug: ENEMIES_TO_LOVERS_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterEnemiesToLoversMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: ENEMIES_TO_LOVERS_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ FIXED SORTING - NOW USES REAL METRICS FROM DATA FILE
export const sortEnemiesToLoversMovies = (movies, sortBy) => {
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
        case 'romanticChemistry': // ✅ Custom metric sorting
            return sortedMovies.sort((a, b) => {
                const tensionA = COMPLETE_MOVIE_DATA[a.tmdbId]?.romanticChemistry || 0;
                const tensionB = COMPLETE_MOVIE_DATA[b.tmdbId]?.romanticChemistry || 0;
                return tensionB - tensionA;
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET ENEMIES TO LOVERS COLLECTION STATS
export const getEnemiesToLoversCollectionStats = () => {
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
        // ✅ ADDED - AVERAGE ROMANTIC CHEMISTRY
        averageRomanticChemistry: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.romanticChemistry || 0);
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
    ENEMIES_TO_LOVERS_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateEnemiesToLoversMoviePaths,
    getEnemiesToLoversMovieBreadcrumbs,
    getEnemiesToLoversMovieNavigation,
    getRelatedEnemiesToLoversMovies,
    ENEMIES_TO_LOVERS_COLLECTION_META,
    generateEnemiesToLoversMovieSitemapUrls,
    isValidEnemiesToLoversMovieSlug,
    searchEnemiesToLoversMovies,
    filterEnemiesToLoversMoviesByGenre,
    sortEnemiesToLoversMovies,
    getEnemiesToLoversCollectionStats
};