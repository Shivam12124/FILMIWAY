const fs = require('fs');
const path = require('path');

function cleanType(typeStr) {
  if (!typeStr) return typeStr;
  let cleaned = typeStr
    .replace(/,\s*non[- ]?sexual/gi, '')
    .replace(/\(\s*Men,\s*non[- ]?sexual\s*\)/gi, '(Men)')
    .replace(/\(\s*Women,\s*non[- ]?sexual\s*\)/gi, '(Women)')
    .replace(/\(\s*Man,\s*non[- ]?sexual\s*\)/gi, '(Man)')
    .replace(/\(\s*Woman,\s*non[- ]?sexual\s*\)/gi, '(Woman)')
    .replace(/\(\s*Non[- ]?Sexual\s*\)/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
  return cleaned;
}

// 1. masterTimestamps.json
const masterPath = path.join(__dirname, '../utils/masterTimestamps.json');
const masterData = JSON.parse(fs.readFileSync(masterPath, 'utf8'));
let count = 0;
for (const [id, movie] of Object.entries(masterData)) {
  if (movie.scenes) {
    movie.scenes.forEach(s => {
      const orig = s.type;
      const cleaned = cleanType(orig);
      if (orig !== cleaned) {
        console.log('masterTimestamps [' + id + ' ' + movie.Title + ']: ' + orig + ' -> ' + cleaned);
        s.type = cleaned;
        count++;
      }
    });
  }
}
fs.writeFileSync(masterPath, JSON.stringify(masterData, null, 2), 'utf8');
console.log('Updated ' + count + ' scenes in masterTimestamps.json');

// 2. utils MovieData files
const files = [
  path.join(__dirname, '../utils/peacockRomanceMovieData.js'),
  path.join(__dirname, '../utils/peacockThrillerMovieData.js'),
  path.join(__dirname, '../utils/huluActionMovieData.js'),
  path.join(__dirname, '../utils/huluComedyMovieData.js'),
  path.join(__dirname, '../utils/huluThrillerMovieData.js'),
  path.join(__dirname, '../utils/huluBestMoviesData.js')
];

for (const f of files) {
  if (fs.existsSync(f)) {
    let content = fs.readFileSync(f, 'utf8');
    let updated = content
      .replace(/Nudity\(Men,\s*non sexual\)/gi, 'Nudity (Men)')
      .replace(/Partial Nudity \(Man,\s*non sexual\)/gi, 'Partial Nudity (Man)')
      .replace(/Nudity,\s*non sexual/gi, 'Nudity')
      .replace(/Nudity\s*\(Non-Sexual\)/gi, 'Nudity')
      .replace(/Partial Nudity\s*\(Non-Sexual\)/gi, 'Partial Nudity');
    if (content !== updated) {
      fs.writeFileSync(f, updated, 'utf8');
      console.log('Updated ' + f);
    }
  }
}
