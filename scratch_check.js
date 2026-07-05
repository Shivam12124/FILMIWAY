const fs = require('fs');
const db = JSON.parse(fs.readFileSync('./utils/masterDatabase.json', 'utf8'));
const ids = [1339713, 884, 218, 318846, 475557, 398818, 1791, 10867, 9346, 11423];
const matches = ids.map(id => db.find(m => m.tmdbId === id)).filter(Boolean);
console.log("TRENDING PARENTS GUIDES (HOMEPAGE):");
matches.forEach(m => console.log(`- ${m.Title}`));
