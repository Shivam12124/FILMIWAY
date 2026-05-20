const fs = require('fs');

// 1. Read the current database
const rawData = fs.readFileSync('./utils/masterTimestamps.json', 'utf8');
const data = JSON.parse(rawData);

const entries = Object.entries(data);

// 2. Filter the movies that HAVE Violence/Gore or Profanity
const completedMovies = entries.filter(([id, movie]) => 
    movie.scenes && movie.scenes.some(s => s.type === 'Violence & Gore' || s.type === 'Profanity')
);

// 3. Filter the remaining pending movies
const pendingMovies = entries.filter(([id, movie]) => 
    !movie.scenes || !movie.scenes.some(s => s.type === 'Violence & Gore' || s.type === 'Profanity')
);

// 4. Manually construct the JSON string to bypass JavaScript's automatic numeric sorting
let sortedJson = '{\n';
const allMovies = [...completedMovies, ...pendingMovies];

allMovies.forEach(([id, movie], index) => {
    const movieStr = JSON.stringify(movie, null, 4).replace(/\n/g, '\n    ');
    sortedJson += `    "${id}": ${movieStr}${index < allMovies.length - 1 ? ',' : ''}\n`;
});
sortedJson += '}\n';

// 5. Save the perfectly sorted file
fs.writeFileSync('./utils/masterTimestamps.json', sortedJson, 'utf8');
console.log(`✅ Success! Grouped ${completedMovies.length} completed films at the very top of masterTimestamps.json!`);