const fs = require('fs');
const db = JSON.parse(fs.readFileSync('./utils/masterDatabase.json', 'utf8'));
const zodiac = db.find(m => m.Title === 'Zodiac');
if(zodiac) {
    console.log(`Zodiac - TMDB: ${zodiac.tmdbId} - IMDB: ${zodiac.imdbID}`);
} else {
    console.log("Not found");
}
