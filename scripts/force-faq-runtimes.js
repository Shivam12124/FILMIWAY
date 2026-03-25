// scripts/force-faq-runtimes.js
const fs = require('fs');
const path = require('path');

const COMPONENTS_DIR = path.join(__dirname, '../components');
let fixedCount = 0;

function fixFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Safely match ONLY 2-argument calls to getVisibleMovieFAQs
    // It captures: getVisibleMovieFAQs(title, id)
    // And ignores calls that already have 3 arguments!
    const regex = /getVisibleMovieFAQs\s*\(\s*([^,]+)\s*,\s*([^,)]+)\s*\)/g;
    
    if (regex.test(content)) {
        content = content.replace(regex, (match, p1, p2) => {
            // Forces the 3rd argument (the TMDB synced runtime) into the UI call
            return `getVisibleMovieFAQs(${p1}, ${p2}, movie?.runtime || movie?.Runtime || "Official")`;
        });
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Forced TMDB runtime in: ${path.basename(filePath)}`);
        fixedCount++;
    }
}

function walk(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            walk(filePath);
        } else if (file.endsWith('.js')) {
            // Scans ALL Javascript files in the components folder to guarantee nothing is missed
            fixFile(filePath);
        }
    });
}

console.log('🚀 Scanning ALL UI components to sync TMDB runtimes...');
walk(COMPONENTS_DIR);
console.log(`\n🎉 Done! Fixed ${fixedCount} components.`);
