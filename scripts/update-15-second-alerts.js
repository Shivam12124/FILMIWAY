const fs = require('fs');
const path = require('path');

const targetFiles = [
    'components/WatchAlongTimer.js',
    'components/SensitiveContentTimelineSection.js',
    'components/SEOFAQSection.js',
    'pages/movie/[slug]/skip-timestamps.js',
    'pages/watch-along-timer.js',
    'pages/vidangel-alternatives.js',
    'pages/filmiway-vs-imdb-parents-guide.js',
    'pages/how-to-skip-awkward-scenes-in-movies.js',
    'pages/index.js',
    'public/llms.txt'
];

let updatedCount = 0;

targetFiles.forEach(relPath => {
    const filePath = path.join(__dirname, '..', relPath);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');

        let newContent = content.replace(/12 seconds/g, '15 seconds');
        newContent = newContent.replace(/12-second/g, '15-second');
        newContent = newContent.replace(/12-Second/g, '15-Second');

        if (newContent !== content) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`✅ Updated 12s -> 15s in: ${relPath}`);
            updatedCount++;
        }
    }
});

console.log(`\n🎉 Successfully updated ${updatedCount} files to 15-second alert timing!`);
