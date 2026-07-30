const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'utils', 'masterDatabase.json');
const timestampsPath = path.join(__dirname, 'utils', 'masterTimestamps.json');

const masterDb = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
const masterTimestamps = JSON.parse(fs.readFileSync(timestampsPath, 'utf8'));

const spidermanMovie = {
  tmdbId: 634649,
  imdbID: "tt10872600",
  Title: "Spider-Man: No Way Home",
  year: 2021,
  genre: "Action, Adventure, Sci-Fi",
  runtime: 148,
  rank: "BONUS",
  slug: "spider-man-no-way-home",
  sourceFile: "trendingMovieData.js"
};

// Check if already exists
if (!masterDb.some(m => m.tmdbId === 634649)) {
  masterDb.push(spidermanMovie);
  fs.writeFileSync(dbPath, JSON.stringify(masterDb, null, 2));
  console.log("Added Spider-Man: No Way Home to masterDatabase.json");
} else {
  console.log("Spider-Man: No Way Home already in masterDatabase.json");
}

masterTimestamps["634649"] = {
  Title: "Spider-Man: No Way Home",
  scenes: [
    {
      start: "01:25:10",
      end: "01:28:30",
      type: "Violence & Gore",
      severity: "Moderate",
      description: "Green Goblin attacks and Aunt May is tragically injured during a high-stakes battle."
    }
  ],
  Summary: "Aged 12+ for sci-fi action, fantasy violence, brief language, and intense emotional scenes.",
  Age: "12+"
};

fs.writeFileSync(timestampsPath, JSON.stringify(masterTimestamps, null, 2));
console.log("Added Spider-Man: No Way Home to masterTimestamps.json");
