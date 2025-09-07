// src/utils/moodData.js

// This file contains manually created data for the movie intensity graphs.
// The intensity scale is universal (0-100).
// Each data point now has its own color based on the mood for a multi-line graph effect.

export const moodData = {
  // Rank 1: Primer (TMDB ID: 14337)
  14337: {
    data: [
      { time: 10, intensity: 40, label: "The Box is Invented", mood: "event", color: "#8884d8" },
      { time: 25, intensity: 65, label: "First Time Loop", mood: "tense", color: "#f5a623" },
      { time: 40, intensity: 75, label: "Exploiting the Market", mood: "action", color: "#ff7300" },
      { time: 55, intensity: 90, label: "Paradoxes Appear", mood: "conflict", color: "#d0021b" },
      { time: 70, intensity: 100, label: "Timeline Confusion & Fallout", mood: "climax", color: "#bd10e0" },
    ],
  },
  // Rank 2: Synecdoche, New York (TMDB ID: 4960)
  4960: {
    data: [
      { time: 15, intensity: 20, label: "The Grant", mood: "dialogue", color: "#cccccc" },
      { time: 40, intensity: 50, label: "Building the Set", mood: "event", color: "#8884d8" },
      { time: 70, intensity: 75, label: "Actors Playing Actors", mood: "tense", color: "#f5a623" },
      { time: 100, intensity: 90, label: "Reality Blurs", mood: "conflict", color: "#d0021b" },
      { time: 120, intensity: 95, label: "The Final Sermon", mood: "climax", color: "#bd10e0" },
    ],
  },
  // Rank 3: Mulholland Drive (TMDB ID: 1018)
  1018: {
    data: [
      { time: 20, intensity: 40, label: "The Amnesiac", mood: "dialogue", color: "#cccccc" },
      { time: 60, intensity: 65, label: "Hollywood Dream", mood: "tense", color: "#f5a623" },
      { time: 90, intensity: 75, label: "Club Silencio", mood: "event", color: "#8884d8" },
      { time: 120, intensity: 90, label: "The Blue Box Opens", mood: "twist", color: "#00f2fe" },
      { time: 140, intensity: 85, "label": "A Different Reality", "mood": "climax", "color": "#bd10e0" },
    ],
  },
  // Rank 4: Predestination (TMDB ID: 206487)
  206487: {
    data: [
      { time: 10, intensity: 70, label: "The Fizzle Bomber", mood: "action", color: "#ff7300" },
      { time: 30, intensity: 30, label: "The Unmarried Mother's Story", mood: "dialogue", color: "#cccccc" },
      { time: 60, intensity: 80, label: "First Time Jump", mood: "event", color: "#8884d8" },
      { time: 75, intensity: 95, label: "The Loop is Revealed", mood: "climax", color: "#bd10e0" },
      { time: 90, intensity: 100, label: "I am... all of them", mood: "twist", color: "#00f2fe" },
    ],
  },
  // Rank 5: Coherence (TMDB ID: 220289)
  220289: {
    data: [
      { time: 5, intensity: 15, label: "Dinner Party Banter", mood: "dialogue", color: "#cccccc" },
      { time: 15, intensity: 50, label: "The Comet Passes", mood: "event", color: "#8884d8" },
      { time: 30, intensity: 65, label: "First Alternate House", mood: "tense", color: "#f5a623" },
      { time: 50, intensity: 75, label: "Paranoia and Blackmail", mood: "conflict", color: "#d0021b" },
      { time: 70, intensity: 85, label: "The Dark Zone", mood: "climax", color: "#bd10e0" },
      { time: 85, intensity: 95, label: "Finding a 'Better' Reality", mood: "twist", color: "#00f2fe" },
    ],
  },
  // Rank 6: Donnie Darko (TMDB ID: 141)
  141: {
    data: [
      { time: 5, intensity: 45, label: "Jet Engine Crash", mood: "event", color: "#8884d8" },
      { time: 20, intensity: 55, label: "Frank Appears", mood: "tense", color: "#f5a623" },
      { time: 80, intensity: 60, label: "Flooding the School", mood: "action", color: "#ff7300" },
      { time: 100, intensity: 70, label: "Gretchen's Death", mood: "climax", color: "#bd10e0" },
      { time: 110, intensity: 75, label: "The Final Countdown", mood: "twist", color: "#00f2fe" },
    ],
  },
  // Rank 7: Enemy (TMDB ID: 181886)
  181886: {
    data: [
      { time: 15, intensity: 30, label: "Discovering the Doppelgänger", mood: "event", color: "#8884d8" },
      { time: 55, intensity: 70, label: "The Confrontation", mood: "conflict", color: "#d0021b" },
      { time: 75, intensity: 80, label: "Swapping Lives", mood: "tense", color: "#f5a623" },
      { time: 88, intensity: 90, label: "The Final Scene", mood: "twist", color: "#00f2fe" },
    ],
  },
  // Rank 8: The Fountain (TMDB ID: 1381)
  1381: {
      data: [
        { time: 10, intensity: 50, label: "Conquistador's Quest", mood: "action", color: "#ff7300" },
        { time: 30, intensity: 40, label: "Modern Day Research", mood: "dialogue", color: "#cccccc" },
        { time: 50, intensity: 60, label: "Future Tom & The Tree", mood: "tense", color: "#f5a623" },
        { time: 75, intensity: 85, label: "Timelines Converge", mood: "climax", color: "#bd10e0" },
        { time: 90, intensity: 70, label: "Acceptance", mood: "event", color: "#8884d8" },
      ],
  },
  // Rank 9: Mr. Nobody (TMDB ID: 31011)
  31011: {
    data: [
      { time: 10, intensity: 35, label: "Childhood Choices", mood: "dialogue", color: "#cccccc" },
      { time: 40, intensity: 65, label: "Multiple Timelines Emerge", mood: "twist", color: "#00f2fe" },
      { time: 70, intensity: 55, label: "Life with Elise, Anna, or Jean", mood: "romance", color: "#ff80ed" },
      { time: 100, intensity: 75, label: "The Oldest Man in the World", mood: "tense", color: "#f5a623" },
      { time: 130, intensity: 85, label: "The Universe Collapses", mood: "climax", color: "#bd10e0" },
    ],
  },
  // Rank 10: Shutter Island (TMDB ID: 1130884)
1130884: {
    data: [
      { time: 10, intensity: 30, label: "Arrival at Ashecliffe", mood: "dialogue", color: "#cccccc" },
      { time: 40, intensity: 55, label: "The Investigation Deepens", mood: "tense", color: "#f5a623" },
      { time: 70, intensity: 70, label: "Ward C & The Caves", mood: "action", color: "#ff7300" },
      { time: 100, intensity: 80, label: "Hurricane and Flashbacks", mood: "event", color: "#8884d8" },
      { time: 125, intensity: 100, label: "The Lighthouse Revelation", mood: "twist", color: "#00f2fe" },
    ],
  },
  // Bonus: Paprika (TMDB ID: 14921)
  14921: {
    data: [
        { time: 10, intensity: 60, label: "First Dream Dive", mood: "event", color: "#8884d8" },
        { time: 30, intensity: 75, label: "The Parade Begins", mood: "tense", color: "#f5a623" },
        { time: 50, intensity: 85, label: "Dreams Invade Reality", mood: "conflict", color: "#d0021b" },
        { time: 70, intensity: 95, label: "The Final Confrontation", mood: "climax", color: "#bd10e0" },
        { time: 85, intensity: 100, label: "Worlds Merge", mood: "twist", color: "#00f2fe" },
    ],
  },
};
