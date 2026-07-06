const fs = require('fs');
const path = require('path');
const file = path.join('utils', 'masterTimestamps.json');
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const hasDesc = [];
const noDesc = [];
let removedCount = 0;

// Step 1: Sort them EXACTLY how we did before to maintain the visual order
for (const [id, movie] of Object.entries(data)) {
    let foundDesc = false;
    if (Array.isArray(movie.scenes) && movie.scenes.some(s => s.description && s.description.trim() !== '' && s.start && s.start.trim() !== '')) {
        foundDesc = true;
    }
    
    if (foundDesc) hasDesc.push([id, movie]);
    else noDesc.push([id, movie]);
}

// Step 2: Now delete the explicit descriptions from the arrays (ignoring Parent Guides)
hasDesc.forEach(([id, movie]) => {
    if (Array.isArray(movie.scenes)) {
        movie.scenes.forEach(scene => {
            if (scene.description && scene.start && scene.start.trim() !== '') {
                delete scene.description;
                removedCount++;
            }
        });
    }
});

// Step 3: Stitch it back together manually to preserve the order
let jsonString = '{\n';
const allEntries = [...hasDesc, ...noDesc];
for (let i = 0; i < allEntries.length; i++) {
    const [id, movie] = allEntries[i];
    jsonString += `    "${id}": ${JSON.stringify(movie, null, 4).replace(/\n/g, '\n    ')}`;
    if (i < allEntries.length - 1) jsonString += ',\n';
    else jsonString += '\n';
}
jsonString += '}\n';

fs.writeFileSync(file, jsonString, 'utf8');
console.log('Successfully removed ' + removedCount + ' explicit descriptions while preserving the visual sort order. Parent guides untouched.');
