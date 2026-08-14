// scripts/update-oppenheimer-spiderman.js
const fs = require('fs');
const path = require('path');

const masterTimestampsPath = path.join(__dirname, '../utils/masterTimestamps.json');
const masterTimestamps = JSON.parse(fs.readFileSync(masterTimestampsPath, 'utf8'));

// 1. Remove timestamp description from Spider-Man: No Way Home (634649)
if (masterTimestamps["634649"] && masterTimestamps["634649"].scenes) {
    masterTimestamps["634649"].scenes.forEach(s => {
        if (s.start && s.start.trim() !== '') {
            delete s.description;
        }
    });
    console.log("✅ Removed timestamp description from Spider-Man: No Way Home (634649).");
}

// 2. Add Shivam's exact 3 custom descriptions to Oppenheimer (872585)
if (masterTimestamps["872585"] && masterTimestamps["872585"].scenes) {
    const oppenheimerScenes = masterTimestamps["872585"].scenes;

    oppenheimerScenes.forEach(s => {
        if (s.start === "0:23:14") {
            s.description = "Lengthy explicit sexual content featuring a topless woman (Florence Pugh), strong intimate activity, and repeated sexual positioning.";
        } else if (s.start === "1:14:38") {
            s.description = "Lengthy nudity following sexual activity featuring a fully nude woman (Florence Pugh) and male (Cillian Murphy) character.";
        } else if (s.start === "1:15:43") {
            s.description = "Explicit sexual content featuring female (Florence Pugh) nudity and vigorous intimate activity during a chair sequence.";
        }
    });
    console.log("✅ Added custom timestamp descriptions to Oppenheimer (872585).");
}

fs.writeFileSync(masterTimestampsPath, JSON.stringify(masterTimestamps, null, 2), 'utf8');

// 3. Re-count exactly how many movies have timestamp descriptions
let moviesWithDescriptions = [];
for (let id in masterTimestamps) {
    const movie = masterTimestamps[id];
    const scenes = movie.scenes || [];
    const hasTimestampDesc = scenes.some(s => s.start && s.start.trim() !== '' && s.description && s.description.trim() !== '');
    if (hasTimestampDesc) {
        moviesWithDescriptions.push({ id, title: movie.Title });
    }
}

console.log(`\n==================================================`);
console.log(`📊 EXACT COUNT OF MOVIES WITH TIMESTAMP DESCRIPTIONS: ${moviesWithDescriptions.length}`);
console.log(`==================================================`);
moviesWithDescriptions.forEach((m, idx) => {
    console.log(`${idx + 1}. ${m.title} (ID: ${m.id})`);
});
console.log(`==================================================\n`);
