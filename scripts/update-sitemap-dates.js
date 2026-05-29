const fs = require('fs');
const path = require('path');

const sitemapsToUpdate = [
    '../public/sitemap-movies.xml',
    '../public/sitemap.xml'
];

const newDate = '2026-05-29T04:23:20.080Z';

sitemapsToUpdate.forEach(file => {
    const sitemapPath = path.join(__dirname, file);
    try {
        if (fs.existsSync(sitemapPath)) {
            let content = fs.readFileSync(sitemapPath, 'utf8');
            
            const regex = /<lastmod>.*?<\/lastmod>/g;
            const matchCount = (content.match(regex) || []).length;
            
            content = content.replace(regex, `<lastmod>${newDate}</lastmod>`);

            fs.writeFileSync(sitemapPath, content, 'utf8');
            console.log(`✅ Successfully updated ${matchCount} dates to ${newDate} in ${path.basename(file)}`);
        } else {
            console.log(`⚠️ Warning: Could not find ${path.basename(file)}`);
        }
    } catch (error) {
        console.error(`Error updating ${path.basename(file)}:`, error);
    }
});