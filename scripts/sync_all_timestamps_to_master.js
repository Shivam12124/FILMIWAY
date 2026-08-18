const fs = require('fs');
const path = require('path');

const masterTimestampsPath = path.join(__dirname, '../utils/masterTimestamps.json');
const masterTimestamps = JSON.parse(fs.readFileSync(masterTimestampsPath, 'utf8'));

const utilsDir = path.join(__dirname, '../utils');
const files = fs.readdirSync(utilsDir).filter(f => f.endsWith('MovieData.js') || f.endsWith('Data.js'));

let totalAdded = 0;
const missingMovies = [];

files.forEach(file => {
    try {
        const filePath = path.join(utilsDir, file);
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Match TMDB IDs inside SENSITIVE_TIMELINES = { ... }
        const timelineMatch = content.match(/export\s+const\s+SENSITIVE_TIMELINES\s*=\s*(\{[\s\S]*?\n\};)/);
        if (timelineMatch) {
            const block = timelineMatch[1];
            // Extract tmdbId keys like `216015:` or `'216015':` or `"216015":`
            const keyRegex = /['"]?(\d+)['"]?\s*:\s*\{[\s\S]*?scenes\s*:\s*\[([\s\S]*?)\]/g;
            let match;
            while ((match = keyRegex.exec(block)) !== null) {
                const tmdbId = match[1];
                const scenesRaw = match[2];

                // Check if scenesRaw contains start timestamps
                if (scenesRaw.includes('start:')) {
                    const strId = String(tmdbId);
                    if (!masterTimestamps[strId] || !masterTimestamps[strId].scenes || masterTimestamps[strId].scenes.length === 0) {
                        missingMovies.push({ tmdbId: strId, file });
                    }
                }
            }
        }
    } catch (e) {
        console.error(`Error processing ${file}:`, e.message);
    }
});

console.log(`Audited all *MovieData.js files against masterTimestamps.json.`);
console.log(`Missing TMDB IDs count: ${missingMovies.length}`);
console.log(JSON.stringify(missingMovies, null, 2));
