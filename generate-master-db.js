const fs = require('fs');
const path = require('path');

const utilsDir = path.join(__dirname, 'utils');
const files = fs.readdirSync(utilsDir).filter(file => file.endsWith('Data.js'));

const masterDB = {};
const slugTracker = {};

// ✅ HELPER: Generates beautiful, SEO-friendly slugs (e.g., "black-swan")
function generateSlug(title, year) {
    let baseSlug = title.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-')         // Replace spaces with hyphens
        .replace(/-+/g, '-')          // Remove double hyphens
        .trim();

    // Prevent collisions (e.g., if there are two movies named "Crash", append the year)
    if (slugTracker[baseSlug] && slugTracker[baseSlug] !== year) {
        baseSlug = `${baseSlug}-${year}`;
    }
    slugTracker[baseSlug] = year;
    
    return baseSlug;
}

let totalMoviesProcessed = 0;
let uniqueMovies = 0;

files.forEach(file => {
    const filePath = path.join(utilsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');

    // ✅ Extract the COMPLETE_MOVIE_DATABASE array from the file
    const match = content.match(/export const COMPLETE_MOVIE_DATABASE\s*=\s*(\[[\s\S]*?\])\s*(?:;|\n\n|\n\s*export|\n\s*\/\/)/);
    
    if (match && match[1]) {
        try {
            // Safely parse the array
            const movies = new Function(`return ${match[1]}`)();
            
            movies.forEach(movie => {
                totalMoviesProcessed++;
                const slug = generateSlug(movie.Title, movie.year);
                
                // Only add if we haven't seen this TMDB ID yet (removes all duplicates!)
                if (!masterDB[movie.tmdbId]) {
                    masterDB[movie.tmdbId] = { ...movie, slug: slug, sourceFile: file };
                    uniqueMovies++;
                }
            });
        } catch (err) {
            console.error(`⚠️ Failed to parse array in ${file}:`, err.message);
        }
    }
});

const outputPath = path.join(__dirname, 'utils', 'masterDatabase.json');
fs.writeFileSync(outputPath, JSON.stringify(Object.values(masterDB), null, 2));

console.log(`\n🎉 PHASE 1 COMPLETE!`);
console.log(`Scanned ${files.length} data files.`);
console.log(`Found ${totalMoviesProcessed} total movie entries.`);
console.log(`Extracted ${uniqueMovies} UNIQUE movies into the Master Database.`);
console.log(`File saved to: utils/masterDatabase.json`);