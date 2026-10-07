const fs = require('fs');

const ts = JSON.parse(fs.readFileSync('utils/masterTimestamps.json', 'utf8'));
const tmdb = JSON.parse(fs.readFileSync('data/tmdbCache.json', 'utf8'));
const db = JSON.parse(fs.readFileSync('utils/masterDatabase.json', 'utf8'));

// Build lookups
const tmdbById = new Map();
for (const [k, v] of Object.entries(tmdb)) {
  tmdbById.set(k, v);
  if (v && v.tmdbId) {
    tmdbById.set(String(v.tmdbId), v);
  }
}

const dbBySlug = new Map();
const dbByTitle = new Map();
for (const item of Object.values(db)) {
  if (item.slug) dbBySlug.set(item.slug.toLowerCase(), item);
  if (item.Title) dbByTitle.set(item.Title.toLowerCase(), item);
}

function getMovieMetadata(slug, item) {
  let dbItem = dbBySlug.get(slug.toLowerCase());
  if (!dbItem && item.Title) dbItem = dbByTitle.get(item.Title.toLowerCase());
  
  let tmdbItem = null;
  if (dbItem) {
    if (dbItem.imdbID && tmdbById.has(dbItem.imdbID)) tmdbItem = tmdbById.get(dbItem.imdbID);
    else if (dbItem.tmdbId && tmdbById.has(String(dbItem.tmdbId))) tmdbItem = tmdbById.get(String(dbItem.tmdbId));
  }
  if (!tmdbItem && tmdbById.has(slug)) tmdbItem = tmdbById.get(slug);

  return { dbItem, tmdbItem };
}

// Strict explicit definition: Sex / Nudity / Sexual Content. EXCLUDES Suggestive Attire.
function isStrictExplicit(scene) {
  const type = (scene.type || '').toLowerCase();
  const desc = (scene.description || '').toLowerCase();
  if (type === 'suggestive attire' || type === 'suggestive' || type === 'lingerie/bikini' || type === 'bikini') return false;
  if (type.includes('sex') || type.includes('nudity') || type.includes('erotic') || type.includes('intimacy')) return true;
  if (desc.includes('naked') || desc.includes('nude') || desc.includes('sex') || desc.includes('intercourse') || 
      desc.includes('breasts') || desc.includes('buttocks') || desc.includes('genitalia') || desc.includes('strips') || 
      desc.includes('fondling') || desc.includes('masturbat') || desc.includes('oral')) return true;
  return false;
}

function parseSeconds(timeStr) {
  if (!timeStr) return 0;
  const parts = timeStr.split(':').map(Number);
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  return 0;
}

const mpaaStats = {};
const rMoviesZero = [];
const rMoviesWithExplicit = [];
const allMoviesZero = [];

let totalCount = 0;

for (const [slug, item] of Object.entries(ts)) {
  totalCount++;
  const { dbItem, tmdbItem } = getMovieMetadata(slug, item);
  
  let rating = 'Unrated';
  if (tmdbItem && tmdbItem.ageRating) {
    rating = tmdbItem.ageRating;
  }
  // normalize rating
  if (rating === 'Not Rated' || rating === 'NR') rating = 'Unrated';

  let strictSeconds = 0;
  let strictScenesCount = 0;
  let allScenesCount = 0;

  if (item.scenes && Array.isArray(item.scenes)) {
    allScenesCount = item.scenes.length;
    for (const sc of item.scenes) {
      const s = parseSeconds(sc.start);
      const e = parseSeconds(sc.end);
      const dur = (e > s) ? (e - s) : (sc.duration || 0);
      if (isStrictExplicit(sc)) {
        strictSeconds += dur;
        strictScenesCount++;
      }
    }
  }

  if (!mpaaStats[rating]) {
    mpaaStats[rating] = {
      total: 0,
      withExplicit: 0,
      withoutExplicit: 0,
      totalSeconds: 0,
      listZero: [],
      listWith: []
    };
  }

  const hasStrict = strictSeconds > 0;
  mpaaStats[rating].total++;
  if (hasStrict) {
    mpaaStats[rating].withExplicit++;
    mpaaStats[rating].totalSeconds += strictSeconds;
    mpaaStats[rating].listWith.push({ title: item.Title || slug, slug, seconds: strictSeconds, scenes: strictScenesCount });
  } else {
    mpaaStats[rating].withoutExplicit++;
    mpaaStats[rating].listZero.push({ title: item.Title || slug, slug, allScenesCount });
    allMoviesZero.push({ title: item.Title || slug, slug, rating });
  }

  if (rating === 'R') {
    if (!hasStrict) {
      rMoviesZero.push({ title: item.Title || slug, slug, allScenesCount, year: dbItem?.year });
    } else {
      rMoviesWithExplicit.push({ title: item.Title || slug, slug, seconds: strictSeconds, scenes: strictScenesCount, year: dbItem?.year });
    }
  }
}

console.log('========================================================');
console.log('       FILMIWAY RESEARCH: THE R-RATING REALITY CHECK    ');
console.log('========================================================');
console.log(`Total Movies in Dataset: ${totalCount}`);

console.log('\n--- MPAA RATING BREAKDOWN ---');
for (const [rating, s] of Object.entries(mpaaStats).sort((a,b) => b[1].total - a[1].total)) {
  const pctWith = ((s.withExplicit / s.total) * 100).toFixed(1);
  const pctWithout = ((s.withoutExplicit / s.total) * 100).toFixed(1);
  const avgMins = s.withExplicit > 0 ? (s.totalSeconds / s.withExplicit / 60).toFixed(1) : '0.0';
  console.log(`${rating.padEnd(10)}: Total = ${String(s.total).padEnd(4)} | Has Explicit = ${String(s.withExplicit).padEnd(3)} (${pctWith}%) | ZERO Explicit = ${String(s.withoutExplicit).padEnd(3)} (${pctWithout}%) | Avg Explicit Mins = ${avgMins}m`);
}

const rStat = mpaaStats['R'];
if (rStat) {
  const pctWith = ((rStat.withExplicit / rStat.total) * 100).toFixed(1);
  const pctWithout = ((rStat.withoutExplicit / rStat.total) * 100).toFixed(1);
  console.log('\n========================================================');
  console.log('                 THE VIRAL HEADLINE STAT                ');
  console.log('========================================================');
  console.log(`Out of ${rStat.total} R-rated movies in the database:`);
  console.log(`• ${rStat.withoutExplicit} movies (${pctWithout}%) have EXACTLY ZERO SECONDS of sexual content or nudity.`);
  console.log(`• Only ${rStat.withExplicit} movies (${pctWith}%) contain any sexual content or nudity.`);
  console.log(`\nHeadline Concept:`);
  console.log(`"The R-Rating Myth: ${pctWithout}% of R-Rated Movies Have Zero Sexual Content"`);
  console.log(`(Audiences associate the 'R' rating with explicit sex and nudity, but ${pctWithout}% are rated R strictly for violence, language, or gore).`);
}

console.log('\n--- SAMPLE R-RATED MOVIES WITH ZERO SEXUAL CONTENT (0 SECONDS) ---');
rMoviesZero.slice(0, 20).forEach((m, i) => {
  console.log(`${(i+1).toString().padStart(2)}. ${m.title} ${m.year ? '(' + m.year + ')' : ''}`);
});

console.log('\n--- SAMPLE R-RATED MOVIES WITH EXPLICIT CONTENT (TOP DURATION) ---');
rMoviesWithExplicit.sort((a,b) => b.seconds - a.seconds).slice(0, 10).forEach((m, i) => {
  console.log(`${(i+1).toString().padStart(2)}. ${m.title}: ${(m.seconds/60).toFixed(1)} mins (${m.scenes} scenes)`);
});
