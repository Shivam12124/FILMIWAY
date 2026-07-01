const fs = require('fs');

const dataFile = 'utils/eroticRomanceMovieData.js';
let code = fs.readFileSync(dataFile, 'utf8');

// The replace tool broke FALLBACK_POSTERS
// I need to repair the file completely.

const fixScript = `
const fs = require('fs');
// Let's restore the file to the way it was before the replace_file_content corruption using git checkout,
// but since we made other changes, I'll just fix it manually.
`;
