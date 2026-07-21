# 🚀 Filmiway Master Blueprint: Adding Movies SOP

This document defines the exact protocol for adding any movie (or Bonus movie) to Filmiway in under 2 minutes.

---

## ⚡ 5-Step Execution Workflow

1. **`utils/[Genre]MovieData.js`**
   - Add to `COMPLETE_MOVIE_DATABASE` (`rank: "BONUS"` or integer).
   - Add to `STRATEGIC_QUOTES` & `SENSITIVE_TIMELINES`.

2. **`utils/[Genre]MovieRoutes.js`**
   - Add route handler for `ttXXXXXXX` -> `movie-slug`.

3. **`data/collections.js`**
   - Append `ttXXXXXXX` to the collection's `movies` array.
   - Verify `pages/collection/[slug].js` line ~4828 includes `collection.slug === 'collection-name'`.

4. **Global Core Databases**
   - Inject into `utils/masterDatabase.json`.
   - Inject into `utils/masterTimestamps.json`.
   - Run `node scripts/cache-tmdb-data.js` to fetch authentic posters/backdrops automatically.

5. **Runtime Overrides & Rebuild**
   - If Director's Cut / Unrated / Extended version, add override string to:
     - `utils/[Genre]MovieData.js`
     - `pages/movie/[slug]/skip-timestamps.js`
     - `components/MovieDetailsSection.js`
     - `components/SensitiveContentTimelineSection.js`
   - Run `node generate-master-db.js`.
   - Restart Next.js dev server (`npm run dev`).
