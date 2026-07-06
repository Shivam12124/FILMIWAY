const https = require('https');
const fs = require('fs');
const path = require('path');

const outDir = 'C:\\Users\\filmi\\.gemini\\antigravity-ide\\brain\\fdd33e54-c922-4f17-957b-3db5bd4e760b';

const downloads = [
  { url: 'https://image.tmdb.org/t/p/w500/6KwrHucIE3CvNT7kTm2MAlZ4fYF.jpg', name: '365_poster_1.jpg' },
  { url: 'https://image.tmdb.org/t/p/w500/ibaDBJBAvWd4J5lzfbpq1PJ6ZU1.jpg', name: '365_poster_2.jpg' },
  { url: 'https://image.tmdb.org/t/p/w500/3b1uR8Jggt1hWgtBbp42Mt3cwWe.jpg', name: '365_poster_3.jpg' },
  { url: 'https://image.tmdb.org/t/p/w500/9M4I1KMjwgfuokHedmXKMNqM3Li.jpg', name: '365_poster_4.jpg' },
  
  { url: 'https://image.tmdb.org/t/p/w500/29mZ5bR5m2w3xuvwJH7BHMFQQwH.jpg', name: '365_banner_1.jpg' },
  { url: 'https://image.tmdb.org/t/p/w500/27nn2YJBwY7a1etZ0AiIcOrIgu3.jpg', name: '365_banner_2.jpg' },
  { url: 'https://image.tmdb.org/t/p/w500/16KVaHZEE881x6youbV4DfDPRi4.jpg', name: '365_banner_3.jpg' },
  { url: 'https://image.tmdb.org/t/p/w500/1M2Tku5XZYXOmAXM6LdRppC8RID.jpg', name: '365_banner_4.jpg' },
  
  { url: 'https://image.tmdb.org/t/p/w500/gBb7GGaFYPu7nEUYvC8G4LaJJN1.jpg', name: 'dreamers_poster_1.jpg' },
  { url: 'https://image.tmdb.org/t/p/w500/8xYTTQVCxVXkMtPitvwEudNrgtd.jpg', name: 'dreamers_poster_2.jpg' },
  { url: 'https://image.tmdb.org/t/p/w500/hgnh9EykfxSutUyQ3nu1YtIAAWu.jpg', name: 'dreamers_poster_3.jpg' },
  { url: 'https://image.tmdb.org/t/p/w500/2nl0CsVbqEEyDSGzgDPnlT4lY7A.jpg', name: 'dreamers_poster_4.jpg' },
  
  { url: 'https://image.tmdb.org/t/p/w500/vaRCS4CCFXcWz1j9GKd6rGLsQQ2.jpg', name: 'dreamers_banner_1.jpg' },
  { url: 'https://image.tmdb.org/t/p/w500/jpTzQezp4Pm0SOpXQzwdpw4iwA8.jpg', name: 'dreamers_banner_2.jpg' },
  { url: 'https://image.tmdb.org/t/p/w500/xtvxa5Hu69blChmb5ndJ9poTkgB.jpg', name: 'dreamers_banner_3.jpg' },
  { url: 'https://image.tmdb.org/t/p/w500/clKa8yMJqSBgk2auTmRYIWMjF8F.jpg', name: 'dreamers_banner_4.jpg' }
];

downloads.forEach(d => {
  https.get(d.url, (res) => {
    const file = fs.createWriteStream(path.join(outDir, d.name));
    res.pipe(file);
    file.on('finish', () => file.close());
  }).on('error', (err) => console.log(err));
});
