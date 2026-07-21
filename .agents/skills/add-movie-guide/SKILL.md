---
name: add-movie-guide
description: Fast 2-minute blueprint for adding new movies or bonus movies to Filmiway without missing files or causing 404s.
---

# 🚀 Filmiway Blueprint: 2-Minute Movie Integration SOP

Follow this exact blueprint whenever adding a new movie (standard or BONUS) to Filmiway to complete execution cleanly without syntax errors, missing posters, or 404 routes.

---

## 📋 The 5 Mandatory Files To Sync

### 1. `utils/[Genre]MovieData.js`
- Add entry to `COMPLETE_MOVIE_DATABASE` (`"rank": "BONUS"` or numeric rank).
- Add entry to `STRATEGIC_QUOTES` (key = `tmdbId`).
- Add entry to `SENSITIVE_TIMELINES` (key = `tmdbId`).
- Add runtime override if Director's Cut / Special Version:
  ```js
  if (movie.tmdbId === TMDB_ID) currentRuntime = "X hours Y min (Director's Cut)";
  if (tmdbId === TMDB_ID) finalRuntime = "X hours Y min (Director's Cut)";
  ```

### 2. `utils/[Genre]MovieRoutes.js`
- Add route mapping for IMDb ID:
  ```js
  if (movie.imdbID === 'ttXXXXXXX') return 'movie-slug';
  ```

### 3. `data/collections.js`
- Add IMDb ID (`ttXXXXXXX`) to the collection's `movies` array.
- Verify `pages/collection/[slug].js` line ~4828 includes `collection.slug === 'your-collection-slug'` in the bonus slide condition if rank is `"BONUS"`.

### 4. Global Core Databases (`utils/masterDatabase.json`, `utils/masterTimestamps.json`, `data/tmdbCache.json`)
- Add entry to `utils/masterDatabase.json`:
  ```json
  {
    "tmdbId": 652,
    "imdbID": "tt0332452",
    "Title": "Movie Title",
    "year": 2004,
    "genre": "Genre",
    "runtime": 196,
    "rank": "BONUS",
    "slug": "movie-slug",
    "sourceFile": "genreMovieData.js"
  }
  ```
- Add entry to `utils/masterTimestamps.json`:
  ```json
  "652": {
    "Title": "Movie Title",
    "scenes": [...],
    "Summary": "Aged 16+ for...",
    "Age": "16+"
  }
  ```
- **AUTOMATIC TMDB FETCH (DO NOT FAKE POSTER URLS):**
  Run script to fetch authentic poster & backdrop from TMDB:
  ```bash
  node scripts/cache-tmdb-data.js
  ```

### 5. Runtime Overrides Across Components
If movie is a Director's Cut / Special Edition, update runtime in:
- `pages/movie/[slug]/skip-timestamps.js` (lines ~301 & ~707)
- `components/MovieDetailsSection.js` (line ~300)
- `components/SensitiveContentTimelineSection.js` (line ~268)

---

## ⚡ Fast 2-Minute Execution Checklist
- [ ] Added to `utils/[Genre]MovieData.js`
- [ ] Added to `utils/[Genre]MovieRoutes.js`
- [ ] Added to `data/collections.js`
- [ ] Injected into `masterDatabase.json` & `masterTimestamps.json`
- [ ] Ran `node scripts/cache-tmdb-data.js` for authentic TMDB poster
- [ ] Added runtime overrides if Director's Cut
- [ ] Ran `node generate-master-db.js`
- [ ] Server restart (`npm run dev`) to clear Next.js static path cache
