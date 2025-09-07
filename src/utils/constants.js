export const STREAMING_PLATFORMS = {
    '8': { name: 'Netflix', color: '#E50914', logo: 'https://image.tmdb.org/t/p/w92/wwemzKWzjKYJFfCeiB57q3r4Bcm.png' },
    '9': { name: 'Amazon Prime Video', color: '#00A8E1', logo: 'https://image.tmdb.org/t/p/w92/ifhbNuuVnlwYy5oXA5VIb2xARGe.png' },
    '337': { name: 'Disney+', color: '#001D7E', logo: 'https://image.tmdb.org/t/p/w92/7Fl8ylPDclt3ZYgCqq1BvA064MT.png' },
    '384': { name: 'HBO Max', color: '#8B00F3', logo: 'https://image.tmdb.org/t/p/w92/A3WLxoSkmuxwaQkY_LdOSt4as3e.png' },
    '15': { name: 'Hulu', color: '#1CE783', logo: 'https://image.tmdb.org/t/p/w92/1aJ4T1d4fX61cf6SPO4gGFlmO2d.png' },
    '2': { name: 'Apple TV+', color: '#FFFFFF', logo: 'https://image.tmdb.org/t/p/w92/9ghgSC0MA082EL6HLCW3GalykFD.png' },
};

export const MOVIE_GENRES = [
    { id: 28, name: 'Action' }, { id: 12, name: 'Adventure' }, { id: 16, name: 'Animation' }, 
    { id: 35, name: 'Comedy' }, { id: 80, name: 'Crime' }, { id: 99, name: 'Documentary' }, 
    { id: 18, name: 'Drama' }, { id: 10751, name: 'Family' }, { id: 14, name: 'Fantasy' }, 
    { id: 36, name: 'History' }, { id: 27, name: 'Horror' }, { id: 10402, name: 'Music' }, 
    { id: 9648, name: 'Mystery' }, { id: 10749, name: 'Romance' }, { id: 878, name: 'Science Fiction' }, 
    { id: 10770, name: 'TV Movie' }, { id: 53, name: 'Thriller' }, { id: 10752, name: 'War' }, 
    { id: 37, name: 'Western' }
];

export const TV_GENRES = [
    {id: 10759, name: "Action & Adventure"}, {id: 16, name: "Animation"}, {id: 35, name: "Comedy"},
    {id: 80, name: "Crime"}, {id: 99, name: "Documentary"}, {id: 18, name: "Drama"},
    {id: 10751, name: "Family"}, {id: 10762, name: "Kids"}, {id: 9648, name: "Mystery"},
    {id: 10763, name: "News"}, {id: 10764, name: "Reality"}, {id: 10765, name: "Sci-Fi & Fantasy"},
    {id: 10766, name: "Soap"}, {id: 10767, name: "Talk"}, {id: 10768, name: "War & Politics"},
    {id: 37, name: "Western"}
];

export const REALITY_TV_GENRES = TV_GENRES.filter(g => [10763, 10764, 10767].includes(g.id));
export const SCRIPTED_TV_GENRES = TV_GENRES.filter(g => ![10763, 10764, 10767].includes(g.id));

export const CRITIC_LOGOS = {
    'Internet Movie Database': 'https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg',
    'Rotten Tomatoes': 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Rotten_Tomatoes.svg',
    'Metacritic': 'https://upload.wikimedia.org/wikipedia/commons/2/20/Metacritic.svg'
};

export const COUNTRY_FLAGS = { US: '🇺🇸', GB: '🇬🇧', IN: '🇮🇳', CA: '🇨🇦', AU: '🇦🇺' };

export const TAB_ICONS = {
    overview: '📝', cast: '🎭', watch: '📺', ratings: '📊', seasons: '📚', behind_the_scenes: '🎬', comments: '💬'
};
