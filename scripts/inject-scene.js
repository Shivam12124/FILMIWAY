const fs = require('fs');

// 1. Update masterTimestamps.json
const tsPath = 'utils/masterTimestamps.json';
const ts = JSON.parse(fs.readFileSync(tsPath, 'utf-8'));

ts['1765072'] = {
    Title: 'You Can See Everything',
    scenes: [
        {
            start: '0:22:32',
            end: '0:22:50',
            type: 'Nudity',
            severity: 'High',
            startSec: 1352,
            endSec: 1370,
            durationSec: 18,
            category: 'Nudity',
            who: 'Male',
            description: 'Billy Evans is shown taking a shower while brushing his teeth, appearing fully frontally naked with prolonged male genitalia visibility.'
        }
    ],
    Age: '16+',
    Summary: 'Aged 16+ for male full-frontal nudity, adult language, and real-life criminal fraud themes.'
};

fs.writeFileSync(tsPath, JSON.stringify(ts, null, 2), 'utf-8');
console.log('✅ Updated masterTimestamps.json with scene');

// 2. Update utils/a24MovieData.js
const a24Path = 'utils/a24MovieData.js';
let a24 = fs.readFileSync(a24Path, 'utf-8');

a24 = a24.replace(
    /(1765072:\s*\{\s*scenes:\s*\[)\s*(\]\s*\},?)/,
    '$1\n            { start: "0:22:32", end: "0:22:50", type: "Nudity", severity: "High", description: "Billy Evans is shown taking a shower while brushing his teeth, appearing fully frontally naked with prolonged male genitalia visibility." }\n        $2'
);
fs.writeFileSync(a24Path, a24, 'utf-8');
console.log('✅ Updated utils/a24MovieData.js with scene');
