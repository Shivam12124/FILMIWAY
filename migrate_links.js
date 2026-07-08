const fs = require('fs');

const files = [
    'pages/collection/[slug].js',
    'pages/movie-directory.js',
    'pages/index.js',
    'pages/search.js',
    'components/FanFavoritesSection.js',
    'components/Header.js',
    'components/HomeCarousels.js'
];

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    // Replace href={`/movie/${something}`} with href={`/movie/${something}/skip-timestamps`}
    content = content.replace(/href=\{`\/movie\/\$\{([a-zA-Z0-9_.]+)\}`\}/g, 'href={`/movie/${$1}/skip-timestamps`}');
    fs.writeFileSync(f, content, 'utf8');
    console.log('Updated ' + f);
});
