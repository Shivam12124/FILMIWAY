const fs = require('fs');
const path = require('path');

const renameMap = {
  '/movies/black-swan/': '/movies/movies-like-black-swan/',
  '/movies/crime-thriller/': '/movies/best-crime-thriller-movies/',
  '/movies/detective-thriller/': '/movies/best-detective-thriller-movies/',
  '/movies/donnie-darko/': '/movies/movies-like-donnie-darko/',
  '/movies/eyes-wide-shut/': '/movies/movies-like-eyes-wide-shut/',
  '/movies/interstellar/': '/movies/movies-like-interstellar/',
  '/movies/like-prestige/': '/movies/movies-like-the-prestige/',
  '/movies/matrix/': '/movies/movies-like-the-matrix/',
  '/movies/mystery-thriller/': '/movies/best-mystery-thriller-movies/',
  '/movies/oldboy/': '/movies/movies-like-oldboy/',
  '/movies/parasite/': '/movies/movies-like-parasite/',
  '/movies/psych-thriller/': '/movies/best-psychological-thriller-movies/',
  '/movies/revenge/': '/movies/best-revenge-movies/',
  '/movies/sci-fi/': '/movies/best-sci-fi-movies/',
  '/movies/survival/': '/movies/best-survival-movies/',
  '/movies/thriller/': '/movies/best-thriller-movies/',
  '/movies/heist-thriller/': '/movies/best-heist-thriller-movies/',
  '/movies/time-travel/': '/movies/best-time-travel-movies/',
  '/movies/war-films/': '/movies/best-war-films/',
  '/movies/like-inception/': '/movies/movies-like-inception/',
  '/movies/like-memento/': '/movies/movies-like-memento/',
  '/movies/like-se7en/': '/movies/movies-like-se7en/',
  '/movies/like-shutter-island/': '/movies/movies-like-shutter-island/'
};

const sitemapFiles = [
  path.join(__dirname, '../public/sitemap.xml'),
  path.join(__dirname, '../public/sitemap-movies.xml')
];

sitemapFiles.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    Object.entries(renameMap).forEach(([oldStr, newStr]) => { content = content.split(oldStr).join(newStr); });
    fs.writeFileSync(file, content, 'utf8');
    console.log(`✅ Updated old URLs in: ${path.basename(file)}`);
  }
});