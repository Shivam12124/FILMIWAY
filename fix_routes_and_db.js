const fs = require('fs');

// 1. Update masterDatabase.json
const dbFile = 'utils/masterDatabase.json';
const db = JSON.parse(fs.readFileSync(dbFile, 'utf8'));
const nympho = db.find(m => m.tmdbId === 258216);
if (nympho) {
    nympho.rank = "BONUS";
    fs.writeFileSync(dbFile, JSON.stringify(db, null, 4));
    console.log("Updated masterDatabase.json rank to BONUS");
}

// 2. Update eroticRomanceMovieRoutes.js
const routesFile = 'utils/eroticRomanceMovieRoutes.js';
let routesCode = fs.readFileSync(routesFile, 'utf8');
const regex = /'tt0107211': 'indecent-proposal'\n\};/;
if (routesCode.match(regex)) {
    routesCode = routesCode.replace(regex, `'tt0107211': 'indecent-proposal',\n    \n    // Bonus Film\n    'tt1937390': 'nymphomaniac-vol-1'\n};`);
    fs.writeFileSync(routesFile, routesCode);
    console.log("Updated eroticRomanceMovieRoutes.js successfully");
} else if (!routesCode.includes('tt1937390')) {
    // try a different match
    routesCode = routesCode.replace(/'tt0107211': 'indecent-proposal',?\s*\n\};/, `'tt0107211': 'indecent-proposal',\n    'tt1937390': 'nymphomaniac-vol-1'\n};`);
    fs.writeFileSync(routesFile, routesCode);
    console.log("Updated eroticRomanceMovieRoutes.js via fallback regex");
}
