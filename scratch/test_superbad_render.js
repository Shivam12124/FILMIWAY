const fs = require('fs');
const path = require('path');

const masterDatabase = JSON.parse(fs.readFileSync(path.join(__dirname, '../utils/masterDatabase.json'), 'utf8'));
const masterTimestamps = JSON.parse(fs.readFileSync(path.join(__dirname, '../utils/masterTimestamps.json'), 'utf8'));

const superbadMovie = masterDatabase.find(m => m.slug === 'superbad' || m.Title?.toLowerCase() === 'superbad');
console.log('Superbad Movie:', superbadMovie?.Title, 'TMDB ID:', superbadMovie?.tmdbId);

const timestamps = masterTimestamps[superbadMovie?.tmdbId?.toString()];
console.log('Superbad Timestamps from masterTimestamps.json:');
console.log(JSON.stringify(timestamps, null, 2));
