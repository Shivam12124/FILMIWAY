// src/utils/sensitiveSceneData.js

// This file contains manually created data for the sensitive scene timeline.
// Each entry maps a TMDB ID to an array of scenes with timestamps and types.

export const sensitiveSceneData = {
  // Rank 1: Primer (TMDB ID: 14337)
  14337: { scenes: [] },
  // Rank 2: Synecdoche, New York (TMDB ID: 4960)
  4960: { scenes: [{ time: 85, type: 'sex', intensity: 'brief' }, { time: 105, type: 'nudity', intensity: 'brief' }] },
  // Rank 3: Mulholland Drive (TMDB ID: 1018)
  1018: { scenes: [{ time: 118, type: 'sex', intensity: 'brief' }, { time: 125, type: 'nudity', intensity: 'brief' }] },
  // Rank 4: Predestination (TMDB ID: 206487)
  206487: { scenes: [{ time: 45, type: 'intimate', intensity: 'moderate' }, { time: 52, type: 'nudity', intensity: 'brief' }] },
  // Rank 5: Coherence (TMDB ID: 220289)
  220289: { scenes: [] },
  // Rank 6: Donnie Darko (TMDB ID: 141)
  141: { scenes: [] },
  // Rank 7: Enemy (TMDB ID: 181886)
  181886: { scenes: [{ time: 5, type: 'nudity', intensity: 'brief' }, { time: 80, type: 'intimate', intensity: 'moderate' }] },
  // Rank 8: The Fountain (TMDB ID: 1381)
  1381: { scenes: [{ time: 65, type: 'intimate', intensity: 'moderate' }, { time: 68, type: 'nudity', 'intensity': 'brief' }] },
  // Rank 9: Mr. Nobody (TMDB ID: 31011)
  31011: { scenes: [{ time: 55, type: 'sex', intensity: 'moderate' }, { time: 60, type: 'nudity', intensity: 'full' }] },
  // Rank 10: Shutter Island (TMDB ID: 1130884)
1130884: { scenes: [] },
  // Bonus: Paprika (TMDB ID: 14921)
  14921: { scenes: [{ time: 40, type: 'revealing', intensity: 'stylized' }] },
};
