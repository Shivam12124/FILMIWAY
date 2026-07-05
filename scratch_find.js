const fs = require('fs');
const db = JSON.parse(fs.readFileSync('./utils/masterDatabase.json', 'utf8'));
const movies = ['Inception', 'Interstellar', 'Zodiac'];
movies.forEach(title => {
    const movie = db.find(m => m.Title === title);
    if(movie) console.log(`${title} - TMDB: ${movie.tmdbId} - IMDB: ${movie.imdbID}`);
    else console.log(`${title} - Not found`);
});
