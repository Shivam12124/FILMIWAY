const https = require('https');

const API_KEY = 'a07e22bc18f5cb106bfe4cc1f83ad8ed';

function fetchImages(tmdbId, title) {
    const url = `https://api.themoviedb.org/3/movie/${tmdbId}/images?api_key=${API_KEY}`;
    
    https.get(url, (res) => {
        let data = '';
        res.on('data', chunk => data += chunk);
        res.on('end', () => {
            const parsed = JSON.parse(data);
            console.log(`\n=== ${title} (ID: ${tmdbId}) ===`);
            console.log("Posters (First 5):");
            if (parsed.posters) {
                parsed.posters.slice(0, 5).forEach(p => console.log(`  ${p.file_path}`));
            }
            console.log("Backdrops (First 5):");
            if (parsed.backdrops) {
                parsed.backdrops.slice(0, 5).forEach(b => console.log(`  ${b.file_path}`));
            }
        });
    }).on('error', err => console.log('Error: ', err.message));
}

fetchImages(664413, '365 Days');
fetchImages(1278, 'The Dreamers');
