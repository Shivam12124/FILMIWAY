// utils/peacockSciFiMovieRoutes.js - SSG ROUTE MAPPING FOR PEACOCK SCI-FI COLLECTION ✅

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './peacockSciFiMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE PEACOCK SCI-FI MOVIE SLUG MAPPING
export const PEACOCK_SCIFI_MOVIE_SLUGS = {
    // Rank 1: Coherence
    'tt2866360': 'coherence',
    
    // Rank 2: Bugonia
    'tt30321200': 'bugonia',
    
    // Rank 3: Nope
    'tt10954984': 'nope',
    
    // Rank 4: The Endless
    'tt3986820': 'the-endless',
    
    // Rank 5: The Hunger Games: Catching Fire
    'tt1959490': 'the-hunger-games-catching-fire',
    
    // Rank 6: About Time
    'tt2194499': 'about-time',
    
    // Rank 7: Pitch Black
    'tt0134847': 'pitch-black',
    
    // Rank 8: Freaks
    'tt8781414': 'freaks',
    
    // Rank 9: M3GAN
    'tt8760708': 'm3gan',
    
    // Rank 10: If You Were the Last
    'tt18389166': 'if-you-were-the-last'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(PEACOCK_SCIFI_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return PEACOCK_SCIFI_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS
export const generatePeacockSciFiMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: PEACOCK_SCIFI_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ BREADCRUMBS GENERATOR
export const getPeacockSciFiMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Best Sci-Fi Movies on Peacock', href: '/collection/best-sci-fi-movies-on-peacock' },
        { label: movie.Title, href: `/collection/best-sci-fi-movies-on-peacock/${PEACOCK_SCIFI_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ NEXT/PREVIOUS NAVIGATION
export const getPeacockSciFiMovieNavigation = (currentMovie) => {
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
            slug: PEACOCK_SCIFI_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: PEACOCK_SCIFI_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ RELATED MOVIES (Same Genre/Decade)
export const getRelatedPeacockSciFiMovies = (currentMovie, limit = 3) => {
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
            slug: PEACOCK_SCIFI_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ COLLECTION METADATA
export const PEACOCK_SCIFI_COLLECTION_META = {
    title: '10 Best Sci-Fi Movies on Peacock (Ranked by Mind-Bend)',
    description: 'The definitive ranking of the best Sci-Fi movies on Peacock. From the quantum chaos of Coherence to the cosmic horror of Nope.',
    keywords: 'best sci-fi movies on peacock, peacock sci-fi films, coherence, nope, bugonia, the endless, pitch black, m3gan',
    canonicalUrl: 'https://filmiway.com/collection/best-sci-fi-movies-on-peacock',
    ogImage: 'https://filmiway.com/images/peacock-scifi-collection-og.jpg',
    totalMovies: COMPLETE_MOVIE_DATABASE.length,
    // ✅ Uses "Sci-Fi Complexity" for the main stat
    averageComplexity: Math.round(
        COMPLETE_MOVIE_DATABASE.reduce((sum, movie) => {
            const data = COMPLETE_MOVIE_DATA[movie.tmdbId];
            return sum + (data?.sciFiComplexity || 85); 
        }, 0) / COMPLETE_MOVIE_DATABASE.length
    )
};

// ✅ SITEMAP URL GENERATOR
export const generatePeacockSciFiMovieSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-sci-fi-movies-on-peacock`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/best-sci-fi-movies-on-peacock/${PEACOCK_SCIFI_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE SLUG
export const isValidPeacockSciFiMovieSlug = (slug) => {
    return Object.values(PEACOCK_SCIFI_MOVIE_SLUGS).includes(slug);
};

// ✅ SEARCH/FILTER UTILITIES
export const searchPeacockSciFiMovies = (query) => {
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
            slug: PEACOCK_SCIFI_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterPeacockSciFiMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: PEACOCK_SCIFI_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ SORTING UTILITIES
export const sortPeacockSciFiMovies = (movies, sortBy) => {
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
        case 'spectacle': // ✅ Sorting by "Visual Spectacle"
            return sortedMovies.sort((a, b) => {
                const scoreA = COMPLETE_MOVIE_DATA[a.tmdbId]?.visualSpectacle || 0;
                const scoreB = COMPLETE_MOVIE_DATA[b.tmdbId]?.visualSpectacle || 0;
                return scoreB - scoreA;
            });
        case 'complexity': // ✅ Sorting by "Sci-Fi Complexity"
            return sortedMovies.sort((a, b) => {
                const scoreA = COMPLETE_MOVIE_DATA[a.tmdbId]?.sciFiComplexity || 0;
                const scoreB = COMPLETE_MOVIE_DATA[b.tmdbId]?.sciFiComplexity || 0;
                return scoreB - scoreA;
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ GET COLLECTION STATS
export const getPeacockSciFiCollectionStats = () => {
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
        // ✅ Average Complexity Level
        averageComplexity: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.sciFiComplexity || 85);
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
    PEACOCK_SCIFI_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generatePeacockSciFiMoviePaths,
    getPeacockSciFiMovieBreadcrumbs,
    getPeacockSciFiMovieNavigation,
    getRelatedPeacockSciFiMovies,
    PEACOCK_SCIFI_COLLECTION_META,
    generatePeacockSciFiMovieSitemapUrls,
    isValidPeacockSciFiMovieSlug,
    searchPeacockSciFiMovies,
    filterPeacockSciFiMoviesByGenre,
    sortPeacockSciFiMovies,
    getPeacockSciFiCollectionStats
};