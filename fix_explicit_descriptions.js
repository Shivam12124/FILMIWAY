const fs = require('fs');
const explicitIds = new Set([792307, 884, 185, 345, 8055, 4995, 9352, 106646, 1359, 1391, 13973, 1064213, 1278, 152532, 181886, 2105, 85889, 814338, 402, 617, 979, 1643, 2057, 2251, 4588, 10867, 11013, 76025, 152584, 216015, 337167, 341174, 401981, 664413, 930564]);

const tsPath = 'utils/masterTimestamps.json';
let ts = JSON.parse(fs.readFileSync(tsPath, 'utf8'));

let removedCount = 0;
let keptCount = 0;

function cleanScenes(movieObj) {
    const scenesArray = movieObj.scenes || movieObj.sensitiveScenes || [];
    scenesArray.forEach((scene) => {
        if (scene.description) {
            const typeStr = (scene.type || '').toLowerCase();
            // If it is Profanity or Violence & Gore, KEEP IT.
            if (typeStr.includes('profanity') || typeStr.includes('violence') || typeStr.includes('gore')) {
                keptCount++;
            } else {
                // Otherwise (timestamped sex/nudity scenes), REMOVE IT.
                delete scene.description;
                removedCount++;
            }
        }
    });
}

for (const key of Object.keys(ts)) {
    const movieId = ts[key].tmdbId || ts[key].id || key;
    if (explicitIds.has(Number(movieId))) {
        cleanScenes(ts[key]);
    }
}

fs.writeFileSync(tsPath, JSON.stringify(ts, null, 2));

console.log('Removed ' + removedCount + ' timestamp descriptions.');
console.log('Successfully KEPT ' + keptCount + ' Profanity/Violence descriptions intact!');
