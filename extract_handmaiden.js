const fs = require('fs');
const tsPath = 'utils/masterTimestamps.json';
let ts = JSON.parse(fs.readFileSync(tsPath, 'utf8'));

const handmaidenId = '290098';
let extracted = [];
let keptCount = 0;
let removedCount = 0;

if (ts[handmaidenId]) {
    const movieObj = ts[handmaidenId];
    const scenesArray = movieObj.scenes || movieObj.sensitiveScenes || [];
    
    scenesArray.forEach(scene => {
        if (scene.description) {
            const typeStr = (scene.type || '').toLowerCase();
            if (typeStr.includes('profanity') || typeStr.includes('violence') || typeStr.includes('gore')) {
                keptCount++;
            } else {
                extracted.push(`**${movieObj.Title} (ID: ${handmaidenId})** - ${scene.time || (scene.start + '-' + scene.end)} (${scene.type}): ${scene.description}`);
                delete scene.description;
                removedCount++;
            }
        }
    });
    
    fs.writeFileSync(tsPath, JSON.stringify(ts, null, 2));
    
    fs.writeFileSync('handmaiden_descriptions.txt', extracted.join('\n\n'));
    console.log(`Removed ${removedCount} descriptions. Kept ${keptCount} Profanity/Violence descriptions.`);
} else {
    console.log('The Handmaiden not found in masterTimestamps.json under ID 290098');
}
