// scripts/clean-11-descriptions.js
const fs = require('fs');
const path = require('path');

const masterTimestampsPath = path.join(__dirname, '../utils/masterTimestamps.json');
const masterTimestamps = JSON.parse(fs.readFileSync(masterTimestampsPath, 'utf8'));

const target11Ids = ["345", "884", "979", "2251", "10867", "11013", "106646", "341174", "401981", "792307", "1064213"];

// 1. Strip generated descriptions from the 11 target movies
target11Ids.forEach(id => {
    if (masterTimestamps[id] && masterTimestamps[id].scenes) {
        masterTimestamps[id].scenes.forEach(scene => {
            if (scene.start && scene.start.trim() !== '') {
                delete scene.description;
            }
        });
    }
});

fs.writeFileSync(masterTimestampsPath, JSON.stringify(masterTimestamps, null, 2), 'utf8');
console.log("✅ Stripped generated timestamp descriptions from the 11 target movies.");

// 2. Count exactly how many movies in masterTimestamps.json have timestamp descriptions
let moviesWithDescriptions = [];

for (let id in masterTimestamps) {
    const movie = masterTimestamps[id];
    const scenes = movie.scenes || [];
    const hasTimestampDescription = scenes.some(s => s.start && s.start.trim() !== '' && s.description && s.description.trim() !== '');
    
    if (hasTimestampDescription) {
        moviesWithDescriptions.push({ id, title: movie.Title });
    }
}

console.log(`\n==================================================`);
console.log(`📊 EXACT COUNT OF MOVIES WITH TIMESTAMP DESCRIPTIONS: ${moviesWithDescriptions.length}`);
console.log(`==================================================`);
moviesWithDescriptions.forEach((m, idx) => {
    console.log(`${idx + 1}. ${m.title} (ID: ${m.id})`);
});
console.log(`==================================================\n`);

// 3. Update Sitemaps lastmod to 2026-08-14
const newDate = '2026-08-14T08:00:00.000Z';
const publicDir = path.join(__dirname, '../public');
const sitemapFiles = fs.readdirSync(publicDir).filter(f => f.startsWith('sitemap') && f.endsWith('.xml'));

sitemapFiles.forEach(file => {
    const filePath = path.join(publicDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    const regex = /<lastmod>.*?<\/lastmod>/g;
    const count = (content.match(regex) || []).length;
    content = content.replace(regex, `<lastmod>${newDate}</lastmod>`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated ${count} <lastmod> dates to ${newDate} in ${file}`);
});
