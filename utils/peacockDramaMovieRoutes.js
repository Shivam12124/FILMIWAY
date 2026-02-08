// utils/peacockDramaMovieRoutes.js - SSG ROUTE MAPPING FOR PEACOCK DRAMA COLLECTION

import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from './peacockDramaMovieData';

// ✅ GENERATE URL SLUG FROM MOVIE TITLE
export const generateMovieSlug = (title) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special chars
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Replace multiple hyphens
        .trim();
};

// ✅ COMPLETE PEACOCK DRAMA MOVIE SLUG MAPPING
export const PEACOCK_DRAMA_MOVIE_SLUGS = {
    // Rank 1: Requiem for a Dream
    'tt0180093': 'requiem-for-a-dream',
    
    // Rank 2: Sophie's Choice
    'tt0084707': 'sophies-choice',
    
    // Rank 3: The Fabelmans
    'tt14208870': 'the-fabelmans',
    
    // Rank 4: A Thousand and One
    'tt13423600': 'a-thousand-and-one',
    
    // Rank 5: Dìdi
    'tt28323620': 'didi',
    
    // Rank 6: She Said
    'tt14807308': 'she-said',
    
    // Rank 7: 50/50
    'tt1306980': '50-50',
    
    // Rank 8: On Golden Pond
    'tt0082846': 'on-golden-pond',
    
    // Rank 9: Mrs. Harris Goes to Paris
    'tt13374522': 'mrs-harris-goes-to-paris',
    
    // Rank 10: The Photograph
    'tt7798646': 'the-photograph'
};

// ✅ REVERSE SLUG MAPPING (SLUG TO IMDB ID)
export const SLUG_TO_IMDB = Object.fromEntries(
    Object.entries(PEACOCK_DRAMA_MOVIE_SLUGS).map(([imdbId, slug]) => [slug, imdbId])
);

// ✅ GET MOVIE BY SLUG
export const getMovieBySlug = (slug) => {
    const imdbId = SLUG_TO_IMDB[slug];
    if (!imdbId) return null;
    
    return COMPLETE_MOVIE_DATABASE.find(movie => movie.imdbID === imdbId);
};

// ✅ GET MOVIE SLUG BY IMDB ID
export const getMovieSlug = (imdbId) => {
    return PEACOCK_DRAMA_MOVIE_SLUGS[imdbId] || null;
};

// ✅ GENERATE ALL STATIC PATHS FOR PEACOCK DRAMA MOVIES
export const generatePeacockDramaMoviePaths = () => {
    return COMPLETE_MOVIE_DATABASE.map(movie => ({
        params: {
            slug: PEACOCK_DRAMA_MOVIE_SLUGS[movie.imdbID]
        }
    }));
};

// ✅ BREADCRUMBS
export const getPeacockDramaMovieBreadcrumbs = (movie) => {
    return [
        { label: 'Home', href: '/' },
        { label: 'Collections', href: '/collection' },
        { label: 'Best Drama Movies on Peacock', href: '/collection/best-drama-movies-on-peacock' },
        { label: movie.Title, href: `/collection/best-drama-movies-on-peacock/${PEACOCK_DRAMA_MOVIE_SLUGS[movie.imdbID]}` }
    ];
};

// ✅ NAVIGATION (Next/Prev)
export const getPeacockDramaMovieNavigation = (currentMovie) => {
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
            slug: PEACOCK_DRAMA_MOVIE_SLUGS[previousMovie.imdbID]
        } : null,
        next: nextMovie ? {
            ...nextMovie,
            slug: PEACOCK_DRAMA_MOVIE_SLUGS[nextMovie.imdbID]
        } : null
    };
};

// ✅ RELATED MOVIES (Same Genre/Decade)
export const getRelatedPeacockDramaMovies = (currentMovie, limit = 3) => {
    const currentDecade = Math.floor(currentMovie.year / 10) * 10;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => 
            movie.imdbID !== currentMovie.imdbID && (
                movie.genre === currentMovie.genre || 
                Math.floor(movie.year / 10) * 10 === currentDecade
            )
        )
        .slice(0, limit)
        .map(movie => ({
            ...movie,
            slug: PEACOCK_DRAMA_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ COLLECTION METADATA
export const PEACOCK_DRAMA_COLLECTION_META = {
    title: '10 Best Drama Movies on Peacock (2026) | Emotion Ranked',
    description: 'Expert-ranked list of the most emotionally powerful dramas streaming on Peacock. From Requiem for a Dream to The Fabelmans, featuring deep character studies and moving storytelling.',
    keywords: 'best drama movies on peacock, peacock dramas, emotional movies peacock, requiem for a dream, sophies choice, the fabelmans, tearjerkers peacock',
    canonicalUrl: 'https://filmiway.com/collection/best-drama-movies-on-peacock',
    ogImage: 'https://filmiway.com/images/peacock-drama-movies-collection.jpg',
    totalMovies: COMPLETE_MOVIE_DATABASE.length,
    averageEmotionalScore: Math.round(
        COMPLETE_MOVIE_DATABASE.reduce((sum, movie) => {
            const data = COMPLETE_MOVIE_DATA[movie.tmdbId];
            return sum + (data?.emotionalIntensity || 85); 
        }, 0) / COMPLETE_MOVIE_DATABASE.length
    )
};

// ✅ SITEMAP URLS
export const FQy4HArVdBbZ87AHrbfdhSXRgyE5NUbrh6GaL8enMUeh = (baseUrl = 'https://filmiway.com') => {
    const urls = [
        {
            url: `${baseUrl}/collection/best-drama-movies-on-peacock`,
            lastmod: new Date().toISOString(),
            priority: '0.8',
            changefreq: 'weekly'
        }
    ];
    
    COMPLETE_MOVIE_DATABASE.forEach(movie => {
        urls.push({
            url: `${baseUrl}/collection/best-drama-movies-on-peacock/${PEACOCK_DRAMA_MOVIE_SLUGS[movie.imdbID]}`,
            lastmod: new Date().toISOString(),
            priority: '0.7',
            changefreq: 'monthly'
        });
    });
    
    return urls;
};

// ✅ SEARCH & FILTER
export const searchPeacockDramaMovies = (query) => {
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
            slug: PEACOCK_DRAMA_MOVIE_SLUGS[movie.imdbID]
        }));
};

export const filterPeacockDramaMoviesByGenre = (genre) => {
    if (genre === 'All') return COMPLETE_MOVIE_DATABASE;
    
    return COMPLETE_MOVIE_DATABASE
        .filter(movie => movie.genre === genre)
        .map(movie => ({
            ...movie,
            slug: PEACOCK_DRAMA_MOVIE_SLUGS[movie.imdbID]
        }));
};

// ✅ SORTING (By Emotional Intensity)
export const sortPeacockDramaMovies = (movies, sortBy) => {
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
        case 'emotion': // New sort key for Drama
            return sortedMovies.sort((a, b) => {
                const scoreA = COMPLETE_MOVIE_DATA[a.tmdbId]?.emotionalIntensity || 0;
                const scoreB = COMPLETE_MOVIE_DATA[b.tmdbId]?.emotionalIntensity || 0;
                return scoreB - scoreA;
            });
        case 'runtime':
            return sortedMovies.sort((a, b) => b.runtime - a.runtime);
        default:
            return sortedMovies.sort((a, b) => a.rank - b.rank);
    }
};

// ✅ STATS CALCULATOR
export const getPeacockDramaCollectionStats = () => {
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
        averageEmotionalScore: Math.round(
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.emotionalIntensity || 85);
            }, 0) / COMPLETE_MOVIE_DATABASE.length
        ),
        averageRating: (
            COMPLETE_MOVIE_DATABASE.reduce((sum, m) => {
                return sum + (COMPLETE_MOVIE_DATA[m.tmdbId]?.rating || 7.5);
            }, 0) / COMPLETE_MOVIE_DATABASE.length
        ).toFixed(1)
    };
};

export default {
    generateMovieSlug,
    PEACOCK_DRAMA_MOVIE_SLUGS,
    SLUG_TO_IMDB,
    getMovieBySlug,
    getMovieSlug,
    generatePeacockDramaMoviePaths,
    getPeacockDramaMovieBreadcrumbs,
    getPeacockDramaMovieNavigation,
    getRelatedPeacockDramaMovies,
    PEACOCK_DRAMA_COLLECTION_META,
    FQy4HArVdBbZ87AHrbfdhSXRgyE5NUbrh6GaL8enMUeh,
    searchPeacockDramaMovies,
    filterPeacockDramaMoviesByGenre,
    sortPeacockDramaMovies,
    getPeacockDramaCollectionStats
};