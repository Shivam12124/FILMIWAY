# Project Context: Filmiway



## 1. Core Mission

- **Project Name:** Filmiway (filmiway.com)

- **Target Audience:** Tier 1 countries (USA, UK, Canada, Australia).

- **Focus:** Global cinema discovery .

- **Content Strategy:** Avoid Bollywood/South Indian cinema. Focus on high-quality, story-driven content over "visual-only" fast-cut films.



## 2. Tech Stack

- **Role:** AI should act as a Senior Full-Stack Engineer and SEO Specialist.

- **Frontend/Backend:** [Add your specific framework here, e.g., React, Next.js, or WordPress].

- **Editing Tools:** CapCut PC for video content integration.



## 3. Project Constraints & Standards

- **Tone:** Professional, insightful, and cinematic.

- **SEO Priority:** Focus on high-value keywords for movie discovery and deep-dive analysis.

- **Performance:** Ensure clean code for fast loading (crucial for SEO).

- **UI/UX:** Avoid "doom-scrolling" patterns; prioritize readability and immersive experiences.

- **Focusing:**  On creating curated  collections  to rank on google and bing and get cite by  llm modles

## 4. Instructions for Gemini

- **File Access:** Always scan `@workspace` before suggesting architectural changes.

- **Code Style:** Prefer long-shot, readable logic over fragmented, overly-complex snippets.

- **Optimization:** When suggesting UI changes, prioritize cinematography-inspired layouts (1980s aesthetic: soothing but high-quality).

- **Work Schedule Context:** The developer works 10 hours daily. Focus on efficiency and bulk-task management.

## 5. Movie Integration Blueprint (SOP)
- **Fast Movie Addition Rule:** When asked to add a new movie or bonus movie, ALWAYS follow the 5-step protocol in `ADD_MOVIE_BLUEPRINT.md` / `.agents/skills/add-movie-guide/SKILL.md`.
- Never hardcode fake poster URLs; always run `node scripts/cache-tmdb-data.js`.
- Always update `masterDatabase.json`, `masterTimestamps.json`, `tmdbCache.json`, `data/collections.js`, `utils/*Data.js`, and `utils/*Routes.js` simultaneously.