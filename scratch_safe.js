const fs = require('fs');
const db = JSON.parse(fs.readFileSync('./utils/masterDatabase.json', 'utf8'));
const safeMovies = db.filter(m => m.genre && (m.genre.includes('Sci-Fi') || m.genre.includes('Action') || m.genre.includes('Crime'))).slice(0, 15);
safeMovies.forEach(m => console.log(`${m.Title} - TMDB: ${m.tmdbId} - IMDB: ${m.imdbID} - GENRE: ${m.genre}`));
