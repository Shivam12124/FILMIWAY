const fs = require('fs');
let code = fs.readFileSync('utils/eroticRomanceMovieRoutes.js', 'utf8');

if (code.includes("'tt0107211': 'indecent-proposal'") && !code.includes('tt1937390')) {
    code = code.replace(
        "'tt0107211': 'indecent-proposal'",
        "'tt0107211': 'indecent-proposal',\n    'tt1937390': 'nymphomaniac-vol-1'"
    );
    fs.writeFileSync('utils/eroticRomanceMovieRoutes.js', code);
    console.log("Updated Routes!");
} else {
    console.log("Failed to match route or already exists");
}
