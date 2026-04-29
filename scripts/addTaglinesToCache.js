const fs = require('fs');
const path = require('path');

const TMDB_API_KEY = 'a07e22bc18f5cb106bfe4cc1f83ad8ed';

async function updateTaglines() {
    const cachePath = path.join(__dirname, '../data/tmdbCache.json');
    const dbPath = path.join(__dirname, '../utils/masterDatabase.json');
    
    let cache = JSON.parse(fs.readFileSync(cachePath, 'utf8'));
    const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

    console.log(`Found ${db.length} movies. Fetching taglines from TMDB...`);

    for (const movie of db) {
        if (!cache[movie.imdbID]) cache[movie.imdbID] = {};
        
        // Skip if we already checked for a tagline (even if it was an empty string)
        if (typeof cache[movie.imdbID].tagline !== 'undefined') continue;

        let retries = 3;
        while (retries > 0) {
            try {
                const res = await fetch(`https://api.themoviedb.org/3/movie/${movie.tmdbId}?api_key=${TMDB_API_KEY}`);
                const data = await res.json();
                
                if (data.tagline) {
                    cache[movie.imdbID].tagline = data.tagline;
                    console.log(`✅ Added tagline for ${movie.Title}: "${data.tagline}"`);
                } else {
                    cache[movie.imdbID].tagline = "";
                    console.log(`❌ No tagline for ${movie.Title}`);
                }
                break; // Break the retry loop on success
            } catch (err) {
                retries--;
                if (retries === 0) console.error(`❌ Error fetching ${movie.Title} (ECONNRESET).`);
                else await new Promise(r => setTimeout(r, 1000)); // Wait 1s before retrying
            }
        }
        // 100ms delay to prevent TMDB rate-limiting
        await new Promise(r => setTimeout(r, 100));
    }

    // Save the updated cache back to the file
    fs.writeFileSync(cachePath, JSON.stringify(cache, null, 2));
    console.log('🎉 tmdbCache.json successfully updated with all taglines!');
}

updateTaglines();