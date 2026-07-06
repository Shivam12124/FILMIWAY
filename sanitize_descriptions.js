const fs = require('fs');
const path = require('path');

const file = path.join('utils', 'masterTimestamps.json');
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const replacements = [
    { regex: /sexual assault attempts/gi, repl: 'severe threat attempts' },
    { regex: /attempted sexual assault/gi, repl: 'attempted physical assault' },
    { regex: /sexual assault/gi, repl: 'severe physical threat' },
    { regex: /sexual violence/gi, repl: 'mature themes' },
    { regex: /threats of rape/gi, repl: 'severe physical threats' },
    { regex: /rape/gi, repl: 'severe physical abuse' },
    { regex: /BDSM-related/gi, repl: 'alternative lifestyle themes' },
    { regex: /BDSM-themed/gi, repl: 'alternative lifestyle themes' },
    { regex: /BDSM/gi, repl: 'alternative themes' },
    { regex: /sexual sadism/gi, repl: 'psychological cruelty' },
    { regex: /graphic sexual language/gi, repl: 'explicit language' },
    { regex: /crude sexual insults/gi, repl: 'highly vulgar insults' },
    { regex: /sexual expletives/gi, repl: 'strong profanity' },
    { regex: /sexual references/gi, repl: 'mature references' },
    { regex: /sexualized/gi, repl: 'vulgar' },
    { regex: /sexually explicit/gi, repl: 'highly explicit' },
    { regex: /non-consensual sexual/gi, repl: 'non-consensual' },
    { regex: /sexual touching/gi, repl: 'physical touching' },
    { regex: /sexual content/gi, repl: 'mature content' },
    { regex: /sexual discussions/gi, repl: 'mature discussions' },
    { regex: /sexual language/gi, repl: 'vulgar language' },
    { regex: /sexual themes/gi, repl: 'mature themes' },
    { regex: /sexual relationship/gi, repl: 'mature relationship' },
    { regex: /sexual profanity/gi, repl: 'vulgar profanity' },
    { regex: /sexual insults/gi, repl: 'vulgar insults' },
    { regex: /crude sexual terms/gi, repl: 'crude terms' },
    { regex: /sexual jokes/gi, repl: 'crude jokes' },
    { regex: /sexual slang/gi, repl: 'vulgar slang' },
    { regex: /sexual context/gi, repl: 'vulgar context' },
    { regex: /sexual dialogue/gi, repl: 'mature dialogue' },
    { regex: /sexual references/gi, repl: 'mature references' },
    { regex: /sexual terms/gi, repl: 'vulgar terms' },
    { regex: /sexual usage/gi, repl: 'vulgar usage' },
    { regex: /sexual slurs/gi, repl: 'vulgar slurs' },
    { regex: /sexual/gi, repl: 'mature' }
];

let changeLog = [];
let changeCount = 0;

for (const [id, movie] of Object.entries(data)) {
    if (movie.scenes) {
        movie.scenes.forEach((scene, index) => {
            if (scene.description) {
                let originalDesc = scene.description;
                let updatedDesc = originalDesc;
                
                replacements.forEach(r => {
                    updatedDesc = updatedDesc.replace(r.regex, r.repl);
                });
                
                if (originalDesc !== updatedDesc) {
                    scene.description = updatedDesc;
                    changeCount++;
                    changeLog.push({
                        title: movie.Title,
                        type: scene.type,
                        from: originalDesc,
                        to: updatedDesc
                    });
                }
            }
        });
    }
}

// Write the file back keeping the visual sort order
const hasDesc = [];
const noDesc = [];

for (const [id, movie] of Object.entries(data)) {
    let foundDesc = false;
    if (movie.scenes && movie.scenes.some(s => s.description && s.description.trim() !== '' && s.start && s.start.trim() !== '')) {
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

console.log(`Successfully sanitized ${changeCount} descriptions.`);
console.log(JSON.stringify(changeLog.slice(0, 10), null, 2)); // Print the first 10 examples
