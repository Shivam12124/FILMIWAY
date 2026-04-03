const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'public', 'sitemap-movies.xml');

try {
    const sitemap = fs.readFileSync(filePath, 'utf-8');

    // Regex to capture full <url>...</url> blocks
    const urlRegex = /<url>[\s\S]*?<\/url>/g;
    const urls = sitemap.match(urlRegex);

    if (!urls) {
        console.log("No URLs found to clean.");
        process.exit();
    }

    const uniqueUrls = new Set();
    const cleanUrls = [];

    // Filter out identical <loc> values
    urls.forEach(urlBlock => {
        const locMatch = urlBlock.match(/<loc>(.*?)<\/loc>/);
        if (locMatch) {
            const loc = locMatch[1];
            if (!uniqueUrls.has(loc)) {
                uniqueUrls.add(loc);
                cleanUrls.push(urlBlock);
            }
        }
    });

    console.log(`Found ${urls.length} total URLs.`);
    console.log(`Kept ${cleanUrls.length} unique URLs. Removed ${urls.length - cleanUrls.length} duplicates.`);

    // Rebuild the XML wrapper
    const newSitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n\n${cleanUrls.join('\n\n')}\n\n</urlset>`;

    fs.writeFileSync(filePath, newSitemap, 'utf-8');
    console.log('✅ Duplicates removed successfully! Your sitemap is now clean.');

} catch (err) {
    console.error('Error processing the sitemap:', err);
}
