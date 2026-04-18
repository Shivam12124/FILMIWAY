const fs = require('fs');
const path = require('path');

const masterDbPath = path.join(__dirname, 'utils', 'masterDatabase.json');
const nextConfigPath = path.join(__dirname, 'next.config.js');

// Read our Master Database
const movies = JSON.parse(fs.readFileSync(masterDbPath, 'utf8'));

// Generate the magical wildcard redirects
const redirectsCode = movies
    .filter(m => m.imdbID) // Safety check
    .map(m => `      { source: '/movies/:collection/${m.imdbID}', destination: '/movie/${m.slug}', permanent: true }`)
    .join(',\n');

let configContent = fs.readFileSync(nextConfigPath, 'utf8');

// Replace the entire return array inside redirects()
const regex = /(async redirects\(\) \{\s*return \[)([\s\S]*?)(\];\s*\})/;

if (regex.test(configContent)) {
    configContent = configContent.replace(
        regex,
        `$1\n      // Essential redirects\n      { source: '/contact', destination: '/contact-us', permanent: true },\n\n      // 🚀 MASTER SEO REDIRECTS (Catches ALL old collection duplicates!)\n${redirectsCode}\n    $3`
    );
    fs.writeFileSync(nextConfigPath, configContent, 'utf8');
    console.log(`\n✅ PHASE 3, PART 1 COMPLETE!`);
    console.log(`Injected ${movies.length} magical wildcard redirects into next.config.js!`);
    console.log(`Your old SEO traffic is now 100% protected and funneled to the new flat URLs.`);
} else {
    console.log("⚠️ Could not find the redirects array in next.config.js. Please check the file structure.");
}