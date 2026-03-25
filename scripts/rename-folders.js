const fs = require('fs');
const path = require('path');

const MOVIES_DIR = path.join(__dirname, '../pages/movies');

// Map of [Legacy Folder Name] -> [Official Canonical Slug]
const renameMap = {
  'black-swan': 'movies-like-black-swan',
  'crime-thriller': 'best-crime-thriller-movies',
  'detective-thriller': 'best-detective-thriller-movies',
  'donnie-darko': 'movies-like-donnie-darko',
  'eyes-wide-shut': 'movies-like-eyes-wide-shut',
  'interstellar': 'movies-like-interstellar',
  'like-prestige': 'movies-like-the-prestige',
  'matrix': 'movies-like-the-matrix',
  'mystery-thriller': 'best-mystery-thriller-movies',
  'oldboy': 'movies-like-oldboy',
  'parasite': 'movies-like-parasite',
  'psych-thriller': 'best-psychological-thriller-movies',
  'revenge': 'best-revenge-movies',
  'sci-fi': 'best-sci-fi-movies',
  'survival': 'best-survival-movies',
  'thriller': 'best-thriller-movies',
  'heist-thriller': 'best-heist-thriller-movies',
  'time-travel': 'best-time-travel-movies',
  'war-films': 'best-war-films',
  'like-inception': 'movies-like-inception',
  'like-memento': 'movies-like-memento',
  'like-se7en': 'movies-like-se7en',
  'like-shutter-island': 'movies-like-shutter-island',
  'netflix': 'best-drama-movies-on-netflix'
};

let renameCount = 0;

Object.entries(renameMap).forEach(([oldName, newName]) => {
  const oldPath = path.join(MOVIES_DIR, oldName);
  const newPath = path.join(MOVIES_DIR, newName);

  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`✅ Renamed: ${oldName} -> ${newName}`);
    renameCount++;
  }
});

console.log(`\n🎉 Successfully renamed ${renameCount} folders to match canonical slugs!`);
