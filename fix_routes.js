const fs = require('fs');
let c = fs.readFileSync('utils/warFilmMovieRoutes.js', 'utf8');
c = c.replace("'tt0050825': 'paths-of-glory'", "'tt0050825': 'paths-of-glory',\n  'tt0332452': 'troy'");
fs.writeFileSync('utils/warFilmMovieRoutes.js', c);
console.log('Fixed routes!');
