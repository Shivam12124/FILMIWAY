// TMDB API Functions
const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: {
        small: 'w300',
        medium: 'w500',
        large: 'w780',
        original: 'original'
    }
};

export const fetchMovieFromTMDB = async (tmdbId) => {
    try {
        const response = await fetch(
            `${TMDB_CONFIG.BASE_URL}/movie/${tmdbId}?api_key=${TMDB_CONFIG.API_KEY}&language=en-US&append_to_response=credits,videos`
        );
        if (!response.ok) {
            console.warn(`TMDB API Error for movie ${tmdbId}: ${response.status}`);
            return null;
        }
        return await response.json();
    } catch (error) {
        console.warn(`Error fetching TMDB data for movie ${tmdbId}:`, error);
        return null;
    }
};

export const fetchWatchProviders = async (tmdbId, region = 'US') => {
    try {
        const response = await fetch(
            `${TMDB_CONFIG.BASE_URL}/movie/${tmdbId}/watch/providers?api_key=${TMDB_CONFIG.API_KEY}`
        );
        if (!response.ok) return null;
        const data = await response.json();
        return data.results[region] || null;
    } catch (error) {
        console.warn(`Error fetching watch providers for movie ${tmdbId}:`, error);
        return null;
    }
};

export const getTMDBPosterUrl = (posterPath, size = 'medium') => {
    if (!posterPath) return null;
    const posterSize = TMDB_CONFIG.POSTER_SIZES[size] || TMDB_CONFIG.POSTER_SIZES.medium;
    return `${TMDB_CONFIG.IMAGE_BASE_URL}/${posterSize}${posterPath}`;
};
