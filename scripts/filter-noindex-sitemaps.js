const fs = require('fs');
const path = require('path');

// 🛡️ VERIFIED TOP & MANUAL MOVIES (Same set as skip-timestamps.js)
const VERIFIED_PARENTS_GUIDE_IDS = new Set([
    'tt15398776', 'tt0993846', 'tt0137523', 'tt0120338', 'tt1375666', 'tt0468569', 'tt0114369', 'tt0103772',
    'tt2322441', 'tt0163970', 'tt0477348', 'tt0110912', 'tt0068646', 'tt0246578', 'tt33397980', 'tt0816692',
    'tt1130884', 'tt0482571', 'tt0209144', 'tt6751668', 'tt0364569', 'tt0947798', 'tt0120663', 'tt0099685',
    'tt0108052', 'tt0172495', 'tt0120815', 'tt0111161', 'tt0133093', 'tt1937390', 'tt10886166', 'tt17351924',
    'tt14230458', 'tt290098', 'tt1245084', 'tt0388795', 'tt4016934', 'tt0213847', 'tt0309987', 'tt0120890',
    'tt2267998', 'tt1392214', 'tt0443706', 'tt0113277', '1285016', '2582802', '8579674', '1345836',
    'tt0167260', 'tt0469494', 'tt0113277', '872585', '106646', '550', '597', '27205', '155', '807', '402', '617',
    '884', '979', '1278', '2251', '4588', '10867', '11013', '106646', '152584', '216015', '341174', '401981',
    '664413', '792307', '1064213', '2105', '6977', '680', '238', '141', '1339713', '157336', '11324', '19995',
    '77', '496243', '670', '44214', '345', '769', '424', '98', '857', '278', '603', '181886', '930564', '43939', '1422',
    '210577', '146233', '1949', '949', '37799', '244786', '530915', '7345', '9346', 'tt0086200',
    '8363', 'tt0829482'
]);

const masterDb = JSON.parse(fs.readFileSync(path.join(__dirname, '../utils/masterDatabase.json'), 'utf8'));
const masterTimestamps = JSON.parse(fs.readFileSync(path.join(__dirname, '../utils/masterTimestamps.json'), 'utf8'));

// Build slug to movie data mapping
const slugToData = {};
masterDb.forEach(movie => {
    if (movie.slug) {
        slugToData[movie.slug] = movie;
    }
});

const isIndexableSlug = (slug) => {
    const movie = slugToData[slug];
    if (!movie) return false;

    const data = masterTimestamps[String(movie.tmdbId)] || movie;
    const scenes = data.scenes || [];
    const hasTimestamps = scenes.some(s => s.start && s.start.trim() !== '' && s.start.toLowerCase() !== 'none');
    return hasTimestamps;
};

const filterSitemapFile = (filename) => {
    const sitemapPath = path.join(__dirname, '../public', filename);
    if (!fs.existsSync(sitemapPath)) return;

    let content = fs.readFileSync(sitemapPath, 'utf8');
    const urlBlockRegex = /<url>[\s\S]*?<\/url>/g;
    
    let totalURLs = 0;
    let keptURLs = 0;
    let removedURLs = 0;

    const filteredContent = content.replace(urlBlockRegex, (match) => {
        totalURLs++;
        const locMatch = match.match(/<loc>https:\/\/www\.filmiway\.com\/movie\/([^/]+)\/skip-timestamps<\/loc>/);
        if (locMatch) {
            const slug = locMatch[1];
            if (!isIndexableSlug(slug)) {
                removedURLs++;
                return ''; // Exclude unindexed movie from sitemap
            }
        }
        keptURLs++;
        return match;
    });

    // Clean up empty lines
    const cleanedXML = filteredContent.replace(/^\s*[\r\n]/gm, '');
    fs.writeFileSync(sitemapPath, cleanedXML, 'utf8');
    console.log(`✅ ${filename}: Total ${totalURLs} URLs -> Kept ${keptURLs} indexable URLs, Removed ${removedURLs} unindexed URLs.`);
};

console.log('🚀 Filtering Sitemaps to keep ONLY indexable (timestamped/verified) movie pages...');
filterSitemapFile('sitemap-movies.xml');
console.log('🎉 Sitemap Pruning Complete!');
