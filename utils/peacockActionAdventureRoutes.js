// utils/peacockActionAdventureRoutes.js
// ROUTE MAPPING FOR PEACOCK ACTION & ADVENTURE COLLECTION

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './peacockActionAdventureData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars except spaces and hyphens
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens with single
        .trim();
};

// ✅ COMPLETE PEACOCK ACTION & ADVENTURE SLUG MAPPING
export const PEACOCK_ACTION_ADVENTURE_SLUGS = {
    // Rank 1: The Revenant
    'tt1663202': 'the-revenant',
    
    // Rank 2: Man on Fire
    'tt0328107': 'man-on-fire',
    
    // Rank 3: Highlander
    'tt0091203': 'highlander',
    
    // Rank 4: Law Abiding Citizen
    'tt1197624': 'law-abiding-citizen',
    
    // Rank 5: Apocalypto
    'tt0472043': 'apocalypto',
    
    // Rank 6: The Boondock Saints
    'tt0144117': 'the-boondock-saints',
    
    // Rank 7: Point Break
    'tt0102685': 'point-break',
    
    // Rank 8: The Fall Guy
    'tt1684562': 'the-fall-guy',
    
    // Rank 9: The Hunger Games: Catching Fire
    'tt1959490': 'the-hunger-games-catching-fire',
    
    // Rank 10: Puss in Boots: The Last Wish
    'tt3915174': 'puss-in-boots-the-last-wish'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(PEACOCK_ACTION_ADVENTURE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return PEACOCK_ACTION_ADVENTURE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS
export const generatePeacockActionAdventurePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: PEACOCK_ACTION_ADVENTURE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ BREADCRUMBS (Updated for Action & Adventure)
export const getPeacockActionAdventureBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Peacock Planet: Top 10 Action & Adventure', href: '/collection/best-action-movies-on-peacock' },
        { label: movie.Title, href: `/collection/best-action-movies-on-peacock/${PEACOCK_ACTION_ADVENTURE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ NAVIGATION (Next/Previous)
export const getPeacockActionAdventureNavigation = (currentMovie) => {
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
            slug: PEACOCK_ACTION_ADVENTURE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: PEACOCK_ACTION_ADVENTURE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ RELATED MOVIES (Same Genre/Decade)
export const getRelatedPeacockActionAdventureMovies = (currentMovie, limit = 3) => {
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
            slug: PEACOCK_ACTION_ADVENTURE_SLUGS[movie.imdbID]
        }));
};

// ✅ COLLECTION METADATA - UPDATED FOR ACTION & ADVENTURE
export const PEACOCK_ACTION_ADVENTURE_COLLECTION_META = {
    title: 'Peacock Planet: Top 10 Action & Adventure Movies',
    description: 'Diderlein-Ranked list of the best action and adventure films streaming on Peacock. Featuring visceral survival epics, 80s cult classics, and high-octane thrillers.',
    keywords: 'best action adventure movies on peacock, peacock survival films, the revenant streaming, adventure movies streaming, high octane thrillers',
    canonicalUrl: 'https://filmiway.com/collection/best-action-movies-on-peacock',
    ogImage: 'https://filmiway.com/images/peacock-action-adventure-collection.jpg',
    totalMovies: COMPLETE_MOVIE_DATABASE.length,
    averageAdrenalineScore: Math.round(
        COMPLETE_MOVIE_DATABASE.reduce((sum, movie) => {
            const data = COMPLETE_MOVIE_DATA[movie.tmdbId];
            return sum + (data?.adrenalineScore || 85); 
        }, 0) / COMPLETE_MOVIE_DATABASE.length
    )
};

// ✅ SITEMAP URLS
export const generatePeacockActionAdventureSitemapUrls = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-action-movies-on-peacock`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/best-action-movies-on-peacock/${PEACOCK_ACTION_ADVENTURE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ VALIDATE SLUG
export const isValidPeacockActionAdventureSlug = (slug) => {
    return Object.values(PEACOCK_ACTION_ADVENTURE_SLUGS).includes(slug);
};

// ✅ SEARCH & FILTER UTILITIES
export const searchPeacockActionAdventureMovies = (query) => {
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
            slug: PEACOCK_ACTION_ADVENTURE_SLUGS[movie.imdbID]
        }));
};

export const filterPeacockActionAdventureMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: PEACOCK_ACTION_ADVENTURE_SLUGS[movie.imdbID]
        }));
};

// ✅ SORTING
export const sortPeacockActionAdventureMovies = (movies, sortBy) => {
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
        case 'adrenaline': 
            return sortedMovies.sort((a, b) => {
                const scoreA = COMPLETE_MOVIE_DATA[a.tmdbId]?.adrenalineScore || 0;
                const scoreB = COMPLETE_MOVIE_DATA[b.tmdbId]?.adrenalineScore || 0;
                return scoreB - scoreA;
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ COLLECTION STATS
export const getPeacockActionAdventureCollectionStats = () => {
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
        averageAdrenalineScore: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.adrenalineScore || 85);
            }, 0) / COMPLETE_MOVIE_DATABASE.length
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
    PEACOCK_ACTION_ADVENTURE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generatePeacockActionAdventurePaths,
    getPeacockActionAdventureBreadcrumbs,
    getPeacockActionAdventureNavigation,
    getRelatedPeacockActionAdventureMovies,
    PEACOCK_ACTION_ADVENTURE_COLLECTION_META,
    generatePeacockActionAdventureSitemapUrls,
    isValidPeacockActionAdventureSlug,
    searchPeacockActionAdventureMovies,
    filterPeacockActionAdventureMoviesByGenre,
    sortPeacockActionAdventureMovies,
    getPeacockActionAdventureCollectionStats
};