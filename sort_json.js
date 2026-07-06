const fs = require('fs');
const path = require('path');
const file = path.join('utils', 'masterTimestamps.json');
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const hasDesc = [];
const noDesc = [];

for (const [id, movie] of Object.entries(data)) {
    let foundDesc = false;
    // ONLY check if a scene timestamp has a description AND an actual timestamp (start time).
    // This ignores the Violence/Gore summaries which have empty start/end times.
    if (Array.isArray(movie.scenes) && movie.scenes.some(s => s.description && s.description.trim() !== '' && s.start && s.start.trim() !== '')) {
        foundDesc = true;
    }
    
    if (foundDesc) hasDesc.push([id, movie]);
    else noDesc.push([id, movie]);
}

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
console.log('Manually stitched JSON. Top items: ' + hasDesc.length);
