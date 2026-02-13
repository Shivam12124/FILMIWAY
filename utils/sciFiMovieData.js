// utils/sciFiMovieData.js - TOP 10 SCI-FI COLLECTION DATA ⚡
// FILMIWAY GOLDEN STANDARD EDITION

export const TMDB_CONFIG = {
  API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
  BASE_URL: 'https://api.themoviedb.org/3',
  IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
  POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

// 1️⃣ SCI_FI_MOVIES (The List - Matches Routes)
export const SCI_FI_MOVIES = [
  { tmdbId: 62, imdbID: "tt0062622", Title: "2001: A Space Odyssey", year: 1968, genre: "Sci-Fi", runtime: 149, rank: 1 },
  { tmdbId: 78, imdbID: "tt0082869", Title: "Blade Runner", year: 1982, genre: "Sci-Fi", runtime: 117, rank: 2 },
  { tmdbId: 603, imdbID: "tt0133093", Title: "The Matrix", year: 1999, genre: "Sci-Fi", runtime: 136, rank: 3 },
  { tmdbId: 348, imdbID: "tt0078748", Title: "Alien", year: 1979, genre: "Horror", runtime: 117, rank: 4 },
  { tmdbId: 157336, imdbID: "tt0816692", Title: "Interstellar", year: 2014, genre: "Sci-Fi", runtime: 169, rank: 5 },
  { tmdbId: 280, imdbID: "tt0103064", Title: "Terminator 2: Judgment Day", year: 1991, genre: "Action", runtime: 137, rank: 6 },
  { tmdbId: 27205, imdbID: "tt1375666", Title: "Inception", year: 2010, genre: "Sci-Fi", runtime: 148, rank: 7 },
  { tmdbId: 329865, imdbID: "tt2543164", Title: "Arrival", year: 2016, genre: "Sci-Fi", runtime: 116, rank: 8 },
  { tmdbId: 11, imdbID: "tt0080684", Title: "Star Wars: Episode V - The Empire Strikes Back", year: 1980, genre: "Adventure", runtime: 124, rank: 9 },
  { tmdbId: 335984, imdbID: "tt1856101", Title: "Blade Runner 2049", year: 2017, genre: "Sci-Fi", runtime: 164, rank: 10 }
];

// ✅ HELPER: Data Factory
const createMovieData = (data) => ({
  cosmicScale: 90,    
  complexityLevel: "HIGH", 
  dominantColor: "#000000",
  ...data,
});

// 2️⃣ COMPLETE_SCI_FI_DETAILS (Rich Data mapped by TMDB ID)
export const COMPLETE_SCI_FI_DETAILS = {
  // 1. 2001: A Space Odyssey
  62: createMovieData({ 
      cosmicScale: 100, complexityLevel: "EXTREME", 
      dominantColor: "#ffffff", rating: 8.3,
      dna: { "Sci-Fi": 60, "Philosophy": 30, "Mystery": 10 }, 
      scenes: [
          { time: 5, intensity: 35, label: "Dawn of Man", color: "#78350f" },
          { time: 55, intensity: 50, label: "TMA-1 Monolith", color: "#e8e8e8" }, 
          { time: 90, intensity: 78, label: "HAL Disconnect", color: "#ff0000" }, 
          { time: 135, intensity: 92, label: "The Stargate", color: "#7c3aed" }, 
          { time: 148, intensity: 96, label: "Star Child", color: "#ffffff" }
      ]
  }),

  // 2. Blade Runner (Final Cut)
  78: createMovieData({ 
      cosmicScale: 88, complexityLevel: "HIGH", 
      dominantColor: "#0f172a", rating: 8.1,
      dna: { "Noir": 40, "Sci-Fi": 40, "Philosophy": 20 }, 
      scenes: [
          { time: 5, intensity: 60, label: "Leon's Test", color: "#ea580c" },
          { time: 45, intensity: 40, label: "Dream Sequence", color: "#10b981" },
          { time: 85, intensity: 75, label: "Pris Fight", color: "#3b82f6" },
          { time: 105, intensity: 88, label: "Roy Chase", color: "#1e293b" },
          { time: 112, intensity: 98, label: "TEARS IN RAIN", color: "#38bdf8" }
      ]
  }),

  // 3. The Matrix
  603: createMovieData({ 
      cosmicScale: 92, complexityLevel: "MEDIUM", 
      dominantColor: "#22c55e", rating: 8.7,
      dna: { "Action": 40, "Sci-Fi": 30, "Philosophy": 30 }, 
      scenes: [
          { time: 2, intensity: 80, label: "Trinity Floating", color: "#16a34a" },
          { time: 40, intensity: 55, label: "The Red Pill", color: "#dc2626" },
          { time: 95, intensity: 92, label: "Lobby Shootout", color: "#15803d" },
          { time: 110, intensity: 99, label: "BULLET TIME", color: "#22c55e" },
          { time: 130, intensity: 95, label: "He is The One", color: "#000000" }
      ]
  }),

  // 4. Alien
  348: createMovieData({ 
      cosmicScale: 85, complexityLevel: "MEDIUM", 
      dominantColor: "#171717", rating: 8.5,
      dna: { "Horror": 50, "Sci-Fi": 30, "Thriller": 20 }, 
      scenes: [
          { time: 15, intensity: 30, label: "The Derelict", color: "#404040" },
          { time: 55, intensity: 100, label: "THE CHESTBURSTER", color: "#b91c1c" },
          { time: 85, intensity: 82, label: "Dallas in Vents", color: "#000000" },
          { time: 105, intensity: 88, label: "Strobe Lights", color: "#ecfccb" },
          { time: 115, intensity: 60, label: "Signing Off", color: "#171717" }
      ]
  }),

  // 5. Interstellar
  157336: createMovieData({ 
      cosmicScale: 100, complexityLevel: "HIGH", 
      dominantColor: "#d97706", rating: 8.7,
      dna: { "Sci-Fi": 40, "Drama": 40, "Adventure": 20 }, 
      scenes: [
          { time: 45, intensity: 65, label: "Wormhole Entry", color: "#f59e0b" },
          { time: 65, intensity: 88, label: "Those Aren't Mountains", color: "#0ea5e9" },
          { time: 90, intensity: 70, label: "Messages from Home", color: "#ef4444" },
          { time: 125, intensity: 98, label: "DOCKING SCENE", color: "#d97706" },
          { time: 150, intensity: 92, label: "The Tesseract", color: "#7c3aed" }
      ]
  }),

  // 6. Terminator 2
  280: createMovieData({ 
      cosmicScale: 85, complexityLevel: "LOW", 
      dominantColor: "#3b82f6", rating: 8.6,
      dna: { "Action": 60, "Sci-Fi": 30, "Heart": 10 }, 
      scenes: [
          { time: 30, intensity: 82, label: "Hallway Chase", color: "#60a5fa" },
          { time: 75, intensity: 50, label: "No Fate", color: "#93c5fd" },
          { time: 110, intensity: 85, label: "Helicopter Jump", color: "#2563eb" },
          { time: 130, intensity: 90, label: "T-1000 Shatter", color: "#93c5fd" },
          { time: 136, intensity: 94, label: "Thumbs Up", color: "#1d4ed8" }
      ]
  }),

  // 7. Inception
  27205: createMovieData({ 
      cosmicScale: 95, complexityLevel: "EXTREME", 
      dominantColor: "#475569", rating: 8.8,
      dna: { "Thriller": 40, "Sci-Fi": 40, "Heist": 20 }, 
      scenes: [
          { time: 20, intensity: 55, label: "Paris Folding", color: "#cbd5e1" },
          { time: 80, intensity: 93, label: "ROTATING HALLWAY", color: "#94a3b8" },
          { time: 115, intensity: 85, label: "Snow Fortress", color: "#f8fafc" },
          { time: 135, intensity: 88, label: "Limbo Confrontation", color: "#475569" },
          { time: 145, intensity: 75, label: "The Totem?", color: "#000000" }
      ]
  }),

  // 8. Arrival
  329865: createMovieData({ 
      cosmicScale: 92, complexityLevel: "HIGH", 
      dominantColor: "#164e63", rating: 7.9,
      dna: { "Sci-Fi": 50, "Drama": 40, "Linguistics": 10 }, 
      scenes: [
          { time: 14, intensity: 55, label: "First Entry", color: "#083344" },
          { time: 60, intensity: 45, label: "Learning to Speak", color: "#ffffff" }, 
          { time: 95, intensity: 80, label: "Global War Threat", color: "#ef4444" },
          { time: 108, intensity: 95, label: "NON-LINEAR REALIZATION", color: "#ffffff" },
          { time: 115, intensity: 85, label: "The Choice", color: "#ec4899" }
      ]
  }),

  // 9. Empire Strikes Back
  11: createMovieData({ 
      cosmicScale: 90, complexityLevel: "MEDIUM", 
      dominantColor: "#1e3a8a", rating: 8.7,
      dna: { "Adventure": 50, "Fantasy": 30, "Sci-Fi": 20 }, 
      scenes: [
          { time: 10, intensity: 80, label: "Battle of Hoth", color: "#f1f5f9" },
          { time: 60, intensity: 45, label: "Training / Cave", color: "#15803d" },
          { time: 100, intensity: 85, label: "Carbonite Freeze", color: "#ea580c" },
          { time: 110, intensity: 100, label: "I AM YOUR FATHER", color: "#1e3a8a" },
          { time: 124, intensity: 65, label: "Galaxy Stare", color: "#60a5fa" }
      ]
  }),

  // 10. Blade Runner 2049
  335984: createMovieData({ 
      cosmicScale: 96, complexityLevel: "HIGH", 
      dominantColor: "#f97316", rating: 8.0,
      dna: { "Sci-Fi": 50, "Noir": 30, "Mystery": 20 }, 
      scenes: [
          { time: 10, intensity: 65, label: "Sapper Morton", color: "#94a3b8" },
          { time: 55, intensity: 40, label: "Baseline Test", color: "#ffffff" },
          { time: 100, intensity: 92, label: "LAS VEGAS (Visuals)", color: "#ea580c" },
          { time: 135, intensity: 85, label: "Sea Wall Fight", color: "#1e293b" },
          { time: 160, intensity: 90, label: "Dying for a Cause", color: "#ffffff" }
      ]
  })
};

// 3. SENSITIVE TIMELINES (Schema Data - "Clean" Filter)
export const SENSITIVE_TIMELINES = {
  62: { scenes: [] }, // 2001
  78: { scenes: [
      { start: '55:00', end: '58:00', type: 'Violence', severity: 'Moderate', description: 'Pris fights Deckard' },
      { start: '1:20:00', end: '1:25:00', type: 'Violence', severity: 'High', description: 'Eye gouging scene' }
  ]}, // Blade Runner
  603: { scenes: [] }, // Matrix
  348: { scenes: [
      { start: '55:00', end: '57:00', type: 'Gore', severity: 'High', description: 'Chestburster scene' }
  ]}, // Alien
  157336: { scenes: [] }, // Interstellar
  280: { scenes: [
      { start: '05:00', end: '06:00', type: 'Nudity', severity: 'Medium', description: 'Terminator arrival (buttocks)' }
  ]}, // T2
  27205: { scenes: [] }, // Inception
  329865: { scenes: [] }, // Arrival
  11: { scenes: [
      { start: '1:40:00', end: '1:41:00', type: 'Violence', severity: 'Moderate', description: 'Hand severed' }
  ]}, // Empire
  335984: { scenes: [
      { start: '1:10:00', end: '1:15:00', type: 'Nudity', severity: 'High', description: 'Holographic synchronization scene' }
  ]} // BR 2049
};

// 4. FAQS (Deep Analysis)
export const SCI_FI_FAQS = {
  '2001: A Space Odyssey': [
      { question: "What is the Monolith?", answer: "It is an alien alarm clock and evolutionary trigger. It appears when a species is ready for the next step: first to teach apes to use tools, then to signal that humans have achieved spaceflight." },
      { question: "Why did HAL kill the crew?", answer: "HAL suffered a paranoid breakdown. He was ordered to lie to the crew about the mission's true purpose, but his core programming demanded total accuracy. Killing the crew was the only logical way to resolve this contradiction." },
      { question: "What is the Star Child?", answer: "It represents the next stage of human evolution. Just as the ape became Man, Dave Bowman sheds his physical body to become a being of pure energy and consciousness." },
      { question: "What is the white room at the end?", answer: "A 'human zoo' created by the aliens. They constructed a familiar environment from Dave's memories (like a hotel room) to keep him calm while he aged and prepared for his transformation." }
  ],
  'Blade Runner': [
      { question: "Is Deckard a Replicant?", answer: "Ridley Scott says yes; Harrison Ford says no. The 'Unicorn Dream' implies he is—Gaff leaves a unicorn origami, proving he knows Deckard's private dreams, which means they are implanted memories." },
      { question: "Why does Roy save Deckard?", answer: "In his final moments, Roy chooses to be 'more human than human.' He realizes that life is defined by mercy and shared memory, not just survival. Saving Deckard validates Roy's own soul." },
      { question: "What is the Voight-Kampff test?", answer: "A psychological exam measuring empathy. Replicants are intelligent but struggle with emotional responses to hypothetical suffering. The test looks for involuntary pupil dilation." },
      { question: "Why is the setting always dark and raining?", answer: "It reflects the film's 'Tech-Noir' atmosphere and ecological collapse. The constant acid rain suggests a ruined environment, forcing humanity to flee to 'Off-World' colonies." }
  ],
  'The Matrix': [
      { question: "What is the Matrix actually?", answer: "A neural-interactive simulation. Machines breed humans for bio-electric power and keep their minds trapped in a digital recreation of 1999 to keep them docile and productive." },
      { question: "Why does Neo have powers?", answer: "Neo is a system anomaly. He can manipulate the code of the Matrix because he realizes it isn't real. His 'powers' are just him hacking the simulation in real-time." },
      { question: "Is the Oracle good or bad?", answer: "Neither; she is a program designed to understand human psychology. She guides the resistance not to free them, but to balance the equation of the Matrix so it doesn't crash." },
      { question: "What does the Red Pill do?", answer: "It is a tracing program. It disrupts the carrier signal keeping Neo's mind synced to the Matrix, allowing the rebels to locate his physical body in the real world and flush him out." }
  ],
  'Alien': [
      { question: "Why is the Alien so perfect?", answer: "As Ash explains, it is a 'perfect organism' because it is unburdened by conscience, remorse, or morality. It exists solely to survive and reproduce, making it the ultimate biological weapon." },
      { question: "What was the Space Jockey?", answer: "The giant skeletal pilot found in the derelict ship. It implies an ancient, larger species fell victim to the Aliens long ago, adding cosmic horror to the setting." },
      { question: "Why did Ash betray them?", answer: "Ash was a secret android with special order 937: 'Bring back life form. Priority One. All other priorities rescinded.' The crew was expendable from the start." },
      { question: "Why is the cat (Jonesy) important?", answer: "Jonesy grounds the horror. In a high-tech future, the crew still needs a pet for comfort. His survival is a small glimmer of hope in a bleak, nihilistic universe." }
  ],
  'Interstellar': [
      { question: "Who are 'They'?", answer: "'They' are not aliens; they are humanity from the distant future. They have evolved to perceive 5 dimensions and constructed the Tesseract to help their ancestors (Cooper) save the species." },
      { question: "How does love quantify?", answer: "Dr. Brand theorizes love is not just a chemical reaction but a higher dimension of understanding—a force that transcends time and space, allowing Cooper to navigate the Tesseract to Murph." },
      { question: "Did Cooper time travel?", answer: "Technically, no. He entered a 5th-dimensional space where all moments of time exist simultaneously as physical locations. He didn't change the past; he fulfilled the loop." },
      { question: "Why time dilation on Miller's Planet?", answer: "The planet orbits close to a supermassive black hole (Gargantua). The immense gravity bends spacetime so severely that 1 hour on the surface equals 7 years on Earth." }
  ],
  'Terminator 2: Judgment Day': [
      { question: "Why does the T-800 learn?", answer: "His CPU was set to 'Read-Only' by Skynet to prevent independent thought. Once John resets the switch, the Terminator begins to learn human values, eventually understanding why humans cry." },
      { question: "Is the T-1000 invincible?", answer: "Almost. Being made of mimetic poly-alloy (liquid metal), it can recover from ballistic damage instantly. Only extreme temperatures (freezing or melting) can disrupt its molecular structure." },
      { question: "What is the paradox?", answer: "The technology to build Skynet came from the arm of the first Terminator sent back in time. By destroying the arm and the chip in T2, they theoretically break the loop." },
      { question: "Why the thumbs up?", answer: "It signifies the machine has developed a soul. He knows he must be destroyed to save the future, but he chooses to comfort John one last time. It is a suicide for the greater good." }
  ],
  'Inception': [
      { question: "Did the top fall at the end?", answer: "Nolan cut to black to make a point: Cobb walked away. He chose to be with his kids rather than stare at the top. The reality doesn't matter to him anymore; his happiness does." },
      { question: "What is a Kick?", answer: "A physical sensation (like falling or hitting water) used to wake a dreamer up. In layered dreams, kicks must be synchronized across levels to pull the team out simultaneously." },
      { question: "Why is Mal the villain?", answer: "She isn't the real Mal; she is a 'shade'—a projection of Cobb's guilt. He blames himself for her suicide, so his subconscious manifests her to sabotage his attempts at moving on." },
      { question: "What is the Totem rule?", answer: "A totem must have a unique weight or property known only to the owner (like a loaded die). If someone else touches it, the weight can be copied, ruining its ability to verify reality." }
  ],
  'Arrival': [
      { question: "What is the weapon?", answer: "The 'weapon' is the Heptapod language. It is a tool that rewires the brain to perceive time non-linearly. It allows humanity to see the future, which we will need to help the aliens in 3000 years." },
      { question: "Why does Louise accept her fate?", answer: "She realizes that even though her daughter will die young, the joy of meeting her is worth the pain of losing her. It is an embrace of life's entire journey, sorrow included." },
      { question: "Is it a time travel movie?", answer: "No, it's a perception movie. Louise doesn't physically travel; her consciousness expands. She remembers the future just as easily as she remembers the past." },
      { question: "Why are the aliens called Heptapods?", answer: "Because they have seven limbs. Their written language is circular with no start or end, perfectly reflecting their non-linear perception of time." }
  ],
  'Star Wars: Episode V - The Empire Strikes Back': [
      { question: "Why is 'I am your father' so iconic?", answer: "It completely recontextualized the villain. Vader wasn't just a monster; he was a tragic fallen hero. It turned a simple space adventure into a complex Greek tragedy." },
      { question: "Why did Yoda hesitate to train Luke?", answer: "Yoda saw the same anger and recklessness in Luke that he saw in Anakin. He feared creating another Vader. Luke had to prove his heart was different." },
      { question: "Did Han Solo know he would survive?", answer: "No. Being frozen in carbonite was a death sentence. His line 'I know' to Leia was a moment of absolute vulnerability—he faced death with his usual arrogant bravery." },
      { question: "What did the cave scene mean?", answer: "It represented Luke's internal shadow. Killing the Vader-vision revealed Luke's own face behind the mask, warning him that if he strikes out of hate, he will become what he fights." }
  ],
  'Blade Runner 2049': [
      { question: "Why is K not the child?", answer: "To subvert the 'Chosen One' trope. K realizes he is just an ordinary replicant. His heroism is deeper because he chooses to sacrifice himself for a stranger, not because destiny demanded it." },
      { question: "What is the 'Baseline' test?", answer: "A post-traumatic stress test for replicants. They recite poetry (Nabokov) to check for emotional deviation. If they respond emotionally, they are retired. K fails when he starts hoping." },
      { question: "Is Deckard a replicant in this one?", answer: "The movie deliberately keeps it ambiguous. Wallace taunts Deckard, suggesting his love for Rachael was programmed math, but Deckard rejects it: 'I know what's real.'" },
      { question: "What does the snow ending mean?", answer: "It mirrors the 'Tears in Rain' scene. K lies down to die on the steps, feeling the snow (nature). He has completed his mission and found peace, earning his humanity." }
  ]
};

// 5. STRATEGIC QUOTES (For UI Highlights)
export const STRATEGIC_QUOTES = {
  62: "I'm sorry, Dave. I'm afraid I can't do that.",
  78: "All those moments will be lost in time... like tears in rain.",
  603: "There is no spoon.",
  348: "In space no one can hear you scream.",
  157336: "Murph, I love you forever.",
  280: "Hasta la vista, baby.",
  27205: "You mustn't be afraid to dream a little bigger, darling.",
  329865: "Despite knowing the journey... I embrace it.",
  11: "No, I am your father.",
  335984: "Dying for the right cause. It's the most human thing we can do."
};

// 6. COLORS (For Theme Generation)
export const CINEMATIC_COLORS = {
  "SciFi": "#0ea5e9", "Action": "#dc2626", "Drama": "#8b5cf6", "Thriller": "#f59e0b"
};

// 7. RATING OPTIONS (For Review System)
export const RATING_OPTIONS = [
  { value: 1, label: "Black Hole", color: "#dc2626", symbol: "🕳️", bgColor: "bg-red-900/30", description: "Disappointing Void" },
  { value: 2, label: "Malfunction", color: "#ea580c", symbol: "⚠️", bgColor: "bg-orange-900/30", description: "Technical Issues" },
  { value: 3, label: "Stable Orbit", color: "#16a34a", symbol: "🚀", bgColor: "bg-green-900/30", description: "Solid Mission" },
  { value: 4, label: "Interstellar", color: "#eab308", symbol: "🌌", bgColor: "bg-yellow-900/30", description: "Cosmic Masterpiece" }
];

// 8. UTILITY FUNCTIONS - REQUIRED FOR SCHEMA AND SEO (MISSING SECTION ADDED)
export const getTMDBPosterUrl = (posterPath, size = 'medium') => {
  if (!posterPath) return null;
  const posterSize = TMDB_CONFIG.POSTER_SIZES[size] || TMDB_CONFIG.POSTER_SIZES.medium;
  return `${TMDB_CONFIG.IMAGE_BASE_URL}/${posterSize}${posterPath}`;
};

export const getSensitiveContentTypes = (tmdbId) => {
  const sensitiveData = SENSITIVE_TIMELINES[tmdbId];
  if (!sensitiveData?.scenes?.length) return [];
  const types = new Set();
  sensitiveData.scenes.forEach(scene => {
      const lowerType = scene.type.toLowerCase();
      if (lowerType.includes('sex') || lowerType.includes('kiss')) types.add('Intimate Scenes');
      if (lowerType.includes('nudity')) types.add('Nudity');
      if (lowerType.includes('violence') || lowerType.includes('gore')) types.add('Graphic Violence');
      if (lowerType.includes('flash') || lowerType.includes('strobe')) types.add('Flashing Lights');
  });
  return Array.from(types);
};

export const generateFAQData = (movie) => {
  return SCI_FI_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
  const movieInfo = COMPLETE_SCI_FI_DETAILS[movie.tmdbId];
  // Define posterUrl if needed or use a fallback
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`; 
  
  return {
      '@context': 'https://schema.org',
      '@type': 'Movie',
      'name': movie.Title,
      'description': movieInfo?.synopsis || `${movie.Title} - A genre-defining Sci-Fi film.`,
      'genre': movie.genre,
      'datePublished': movie.year.toString(),
      'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
      'actor': movieInfo?.cast?.map(actor => ({ '@type': 'Person', 'name': actor })) || [],
      'duration': `PT${movie.runtime}M`,
      'image': posterUrl,
      'aggregateRating': { 
          '@type': 'AggregateRating', 
          'ratingValue': movieInfo?.rating || 7.5, 
          'bestRating': 10, 
          'worstRating': 1, 
          'ratingCount': movieInfo?.audienceScore || 100 
      }
  };
};

export const generateFAQSchema = (faqs) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': faqs.map(faq => ({ 
      '@type': 'Question', 
      'name': faq.question, 
      'acceptedAnswer': { '@type': 'Answer', 'text': faq.answer } 
  }))
});

export const fetchMovieFromTMDB = async (tmdbId) => ({ 
  poster_path: null, 
  title: SCI_FI_MOVIES.find(m => m.tmdbId === tmdbId)?.Title || 'Unknown Movie' 
});

export const fetchWatchProviders = async (tmdbId, region = 'US') => null;

export const formatSensitiveTimeline = (tmdbId) => {
  const raw = SENSITIVE_TIMELINES[tmdbId];
  if (!raw || !raw.scenes || raw.scenes.length === 0) return null;
  return {
      scenes: raw.scenes.map(scene => ({
          start: scene.start,
          end: scene.end,
          type: scene.type,
          description: scene.description || ''
      }))
  };
};

// ✅ EXPORT DEFAULT: Mapped Object for easy lookup
export const COMPLETE_SCI_FI_DATABASE = Object.fromEntries(
  SCI_FI_MOVIES.map(m => [m.tmdbId, { ...m, ...COMPLETE_SCI_FI_DETAILS[m.tmdbId] }])
);

export default COMPLETE_SCI_FI_DATABASE;