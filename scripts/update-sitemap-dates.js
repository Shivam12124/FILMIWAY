const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, '../public/sitemap-movies.xml');

const moviesToUpdate = [
    "fight-club",
    "black-swan",
    "perfect-blue",
    "enemy",
    "the-invisible-guest",
    "the-usual-suspects",
    "parasite",
    "i-saw-the-devil",
    "the-chaser",
    "memories-of-murder",
    "red-sparrow",
    "the-equalizer",
    "eyes-wide-shut",
    "basic-instinct",
    "wild-things",
    "blue-is-the-warmest-color",
    "the-dreamers",
    "lust-caution",
    "indecent-proposal",
    "the-wolf-of-wall-street",
    "scarface",
    "the-big-short",
    "baby-driver",
    "superbad",
    "the-hangover",
    "along-came-polly",
    "little-miss-sunshine",
    "titanic",
    "magnolia",
    "paris-texas",
    "dead-poets-society",
    "rain-man",
    "marty-supreme",
    "blade-runner-2049",
    "passengers"
];

const newDate = '2026-05-22T04:23:20.080Z';

try {
    let content = fs.readFileSync(sitemapPath, 'utf8');
    let updatedCount = 0;

    moviesToUpdate.forEach(slug => {
        const regex = new RegExp(`(<loc>https://filmiway\\.com/movie/${slug}</loc>\\s*\\n\\s*<lastmod>)(.*?)(</lastmod>)`, 'g');
        if (regex.test(content)) {
            content = content.replace(regex, `$1${newDate}$3`);
            updatedCount++;
        } else {
            console.log(`⚠️ Warning: Could not find entry for ${slug}`);
        }
    });

    fs.writeFileSync(sitemapPath, content, 'utf8');
    console.log(`\n✅ Successfully updated ${updatedCount} movie dates in sitemap-movies.xml`);
} catch (error) {
    console.error("Error updating sitemap-movies.xml:", error);
}