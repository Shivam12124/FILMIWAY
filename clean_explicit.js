const fs = require('fs');
const explicitIds = new Set([792307, 884, 185, 345, 8055, 4995, 9352, 106646, 1359, 1391, 13973, 1064213, 1278, 152532, 181886, 2105, 85889, 814338, 402, 617, 979, 1643, 2057, 2251, 4588, 10867, 11013, 76025, 152584, 216015, 337167, 341174, 401981, 664413, 930564]);

const tsPath = 'utils/masterTimestamps.json';
let ts = JSON.parse(fs.readFileSync(tsPath, 'utf8'));

let extractedDescriptions = [];

function extractScenes(movieObj, movieId, movieTitle) {
    const scenesArray = movieObj.scenes || movieObj.sensitiveScenes || [];
    scenesArray.forEach((scene, index) => {
        if (scene.description) {
            extractedDescriptions.push(`**${movieTitle} (ID: ${movieId})** - ${scene.time || (scene.start + '-' + scene.end)} (${scene.type}): ${scene.description}`);
        }
    });
}

for (const key of Object.keys(ts)) {
    const movieId = ts[key].tmdbId || ts[key].id || key;
    if (explicitIds.has(Number(movieId))) {
        extractScenes(ts[key], movieId, ts[key].Title || ts[key].title || key);
    }
}

const artifactPath = 'C:/Users/filmi/.gemini/antigravity-ide/brain/fdd33e54-c922-4f17-957b-3db5bd4e760b/explicit_descriptions_backup.md';
let outputContent = '# Extracted Explicit Scene Descriptions\n\nSave this file for your records.\n\n';
extractedDescriptions = [...new Set(extractedDescriptions)];
outputContent += extractedDescriptions.join('\n\n');
fs.writeFileSync(artifactPath, outputContent);
console.log('Extracted ' + extractedDescriptions.length + ' descriptions. Saved to backup artifact.');
