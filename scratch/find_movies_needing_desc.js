const fs = require('fs');
const path = require('path');

const masterTimestamps = JSON.parse(fs.readFileSync('utils/masterTimestamps.json', 'utf8'));
const masterDatabase = JSON.parse(fs.readFileSync('utils/masterDatabase.json', 'utf8'));

const dbMap = new Map();
masterDatabase.forEach(m => {
    dbMap.set(String(m.tmdbId), m);
});

const candidates = [];

for (const [tmdbId, data] of Object.entries(masterTimestamps)) {
    if (!data.scenes || !Array.isArray(data.scenes)) continue;
    
    // Filter scenes that have valid start/end times and are missing descriptions
    const timeScenes = data.scenes.filter(s => s.start && s.start.trim() !== '');
    
    if (timeScenes.length > 0 && timeScenes.length <= 5) {
        const missingDescScenes = timeScenes.filter(s => !s.description || s.description.trim() === '');
        if (missingDescScenes.length > 0) {
            const meta = dbMap.get(tmdbId) || {};
            candidates.push({
                tmdbId,
                title: data.Title || meta.Title,
                slug: meta.slug,
                totalScenes: timeScenes.length,
                missingDescCount: missingDescScenes.length,
                scenes: missingDescScenes.map(s => ({ start: s.start, end: s.end, type: s.type }))
            });
        }
    }
}

console.log(`Found ${candidates.length} movies with <= 5 scenes needing descriptions.`);
console.log(JSON.stringify(candidates.slice(0, 25), null, 2));
