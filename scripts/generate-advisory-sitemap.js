const fs = require('fs');
const path = require('path');

const VIP_SLUGS = [
  "fifty-shades-of-grey",
  "fifty-shades-darker",
  "fifty-shades-freed",
  "365-days",
  "the-wolf-of-wall-street",
  "titanic",
  "basic-instinct",
  "oppenheimer",
  "poor-things",
  "eyes-wide-shut",
  "american-psycho",
  "wild-things",
  "unfaithful",
  "blue-is-the-warmest-color",
  "the-dreamers",
  "original-sin",
  "boogie-nights",
  "malena",
  "red-sparrow",
  "secretary",
  "american-pie",
  "last-tango-in-paris",
  "the-reader",
  "anora",
  "lust-caution"
];

const generateAdvisorySitemap = () => {
  const currentDate = new Date().toISOString();
  
  let xmlContent = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xmlContent += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">\n\n`;
  xmlContent += `    <!-- 🔥 VIP ADVISORY MOVIES - HIGHEST PRIORITY FOR SAFESEARCH BYPASS -->\n`;

  VIP_SLUGS.forEach(slug => {
    xmlContent += `    <url>\n`;
    xmlContent += `        <loc>https://www.filmiway.com/movie/${slug}/skip-timestamps</loc>\n`;
    xmlContent += `        <lastmod>${currentDate}</lastmod>\n`;
    xmlContent += `        <changefreq>daily</changefreq>\n`;
    xmlContent += `        <priority>1.0</priority>\n`;
    xmlContent += `    </url>\n`;
  });

  xmlContent += `</urlset>`;

  const sitemapPath = path.join(__dirname, '../public/sitemap-advisory.xml');
  fs.writeFileSync(sitemapPath, xmlContent);
  console.log(`✅ Successfully generated sitemap-advisory.xml with ${VIP_SLUGS.length} VIP movies.`);
};

generateAdvisorySitemap();
