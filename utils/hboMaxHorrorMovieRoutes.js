// utils/hboMaxHorrorMovieRoutes.js - SSG ROUTE MAPPING FOR HBO MAX HORROR COLLECTION ✅

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './hboMaxHorrorMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE HBO MAX HORROR MOVIE SLUG MAPPING
export const HBO_MAX_HORROR_MOVIE_SLUGS = {
    // Rank 1: The Conjuring
    'tt1457767': 'the-conjuring',
    
    // Rank 2: Insidious
    'tt1591095': 'insidious',
    
    // Rank 3: The Conjuring 2
    'tt3065204': 'the-conjuring-2',
    
    // Rank 4: Annabelle: Creation
    'tt5140878': 'annabelle-creation',
    
    // Rank 5: The Witch
    'tt4263482': 'the-witch',
    
    // Rank 6: Evil Dead Rise
    'tt13345606': 'evil-dead-rise',
    
    // Rank 7: It
    'tt1396484': 'it',
    
    // Rank 8: The Nun
    'tt5814060': 'the-nun',
    
    // Rank 9: Annabelle Comes Home
    'tt8350360': 'annabelle-comes-home',
    
    // Rank 10: Insidious: Chapter 2
    'tt2226417': 'insidious-chapter-2'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(HBO_MAX_HORROR_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return HBO_MAX_HORROR_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS
export const generateHboMaxHorrorMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: HBO_MAX_HORROR_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ BREADCRUMBS GENERATOR
export const getHboMaxHorrorMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Best Horror Movies on HBO Max', href: '/collection/best-horror-movies-on-hbo-max' },
        { label: movie.Title, href: `/collection/best-horror-movies-on-hbo-max/${HBO_MAX_HORROR_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ NEXT/PREVIOUS NAVIGATION
export const getHboMaxHorrorMovieNavigation = (currentMovie) => {
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
            slug: HBO_MAX_HORROR_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: HBO_MAX_HORROR_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ RELATED MOVIES (Same Genre/Decade)
export const getRelatedHboMaxHorrorMovies = (currentMovie, limit = 3) => {
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
            slug: HBO_MAX_HORROR_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ COLLECTION METADATA
export const HBO_MAX_HORROR_COLLECTION_META = {
    title: '10 Best Horror Movies on HBO Max (Ranked by Scariness)',
    description: 'The definitive ranking of the scariest movies on HBO Max. From the jump scares of Insidious to the dread of The Witch.',
    keywords: 'best horror movies on hbo max, hbo max horror films, the conjuring, insidious, evil dead rise, horror rankings 2026',
    canonicalUrl: 'https://filmiway.com/collection/best-horror-movies-on-hbo-max',
    ogImage: 'https://filmiway.com/images/hbo-horror-collection-og.jpg',
    totalMovies: COMPLETE_MOVIE_DATABASE.length,
    // ✅ Uses "Scariness" for the main stat
    averageScariness: Math.round(
        COMPLETE_MOVIE_DATABASE.reduce((sum, movie) => {
            const data = COMPLETE_MOVIE_DATA[movie.tmdbId];
            return sum + (data?.scariness || 85); 
        }, 0) / COMPLETE_MOVIE_DATABASE.length
    )
};

// ✅ SITEMAP URL GENERATOR
export const generateHboMaxHorrorMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-horror-movies-on-hbo-max`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/best-horror-movies-on-hbo-max/${HBO_MAX_HORROR_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE SLUG
export const isValidHboMaxHorrorMovieSlug = (slug) => {
    return Object.values(HBO_MAX_HORROR_MOVIE_SLUGS).includes(slug);
};

// ✅ SEARCH/FILTER UTILITIES
export const searchHboMaxHorrorMovies = (query) => {
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
            slug: HBO_MAX_HORROR_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterHboMaxHorrorMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: HBO_MAX_HORROR_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ SORTING UTILITIES
export const sortHboMaxHorrorMovies = (movies, sortBy) => {
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
        case 'scariness': // ✅ Sorting by "Scariness"
            return sortedMovies.sort((a, b) => {
                const scoreA = COMPLETE_MOVIE_DATA[a.tmdbId]?.scariness || 0;
                const scoreB = COMPLETE_MOVIE_DATA[b.tmdbId]?.scariness || 0;
                return scoreB - scoreA;
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET COLLECTION STATS
export const getHboMaxHorrorCollectionStats = () => {
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
        // ✅ Average Scariness
        averageScariness: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.scariness || 85);
            }, 0) / COMPLETE_MOVIE_DATABASE.length
        ),
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
    HBO_MAX_HORROR_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generateHboMaxHorrorMoviePaths,
    getHboMaxHorrorMovieBreadcrumbs,
    getHboMaxHorrorMovieNavigation,
    getRelatedHboMaxHorrorMovies,
    HBO_MAX_HORROR_COLLECTION_META,
    generateHboMaxHorrorMovieSitemapUrls,
    isValidHboMaxHorrorMovieSlug,
    searchHboMaxHorrorMovies,
    filterHboMaxHorrorMoviesByGenre,
    sortHboMaxHorrorMovies,
    getHboMaxHorrorCollectionStats
};