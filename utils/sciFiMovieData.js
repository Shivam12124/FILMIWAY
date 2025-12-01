// utils/sciFiMovieData.js - TOP 10 SCI-FI MOVIES OF ALL TIME ✅ WITH DNA & SENSITIVE CONTENT

export const SCI_FI_MOVIES = [
  {
    imdbID: 'tt0062622',
    tmdbId: 62,
    title: '2001: A Space Odyssey',
    director: 'Stanley Kubrick',
    genre: 'Adventure, Drama, Sci-Fi',
    year: 1968,
    runtime: '149 min',
    ageRating: 'G',
    rating: 8.4,
    cast: ['Keir Dullea', 'Gary Lockwood', 'William Sylvester'],
    boxOffice: '$146.2 million',
    budget: '$10.5 million',
    synopsis: "An extraordinary exploration of human evolution, artificial intelligence, and cosmic destiny. A mysterious black monolith appears at pivotal moments in human history—from prehistoric times to the Moon. A space mission to Jupiter becomes a profound philosophical odyssey when the ship's AI, HAL 9000, begins to malfunction with terrifying consequences. A masterpiece of visual storytelling that transcends narrative to become pure cinema.",
    poster: '/path/to/2001-poster.jpg',
    backdrop: '/path/to/2001-backdrop.jpg',
    backdrop_path: '/path/to/2001-backdrop.jpg',
    poster_path: '/path/to/2001-poster.jpg',
    scenes: [
      { time: 5, intensity: 30, label: 'The Monolith', color: '#000000' },
      { time: 55, intensity: 45, label: 'Moon Base', color: '#e8e8e8' },
      { time: 90, intensity: 60, label: 'Discovery One', color: '#0066ff' },
      { time: 125, intensity: 78, label: 'HAL Awakens', color: '#ff0000' },
      { time: 140, intensity: 88, label: 'Transcendence', color: '#ffff00' }
    ],
    sciFiComplexity: 99,
    complexityLevel: 'EXTREME',
    dominantColor: '#0a0a0a',
    dna: { SciFi: 70, Drama: 20, Adventure: 10 },
    sensitiveScenes: []
  },
  {
    imdbID: 'tt0082869',
    tmdbId: 78,
    title: 'Blade Runner',
    director: 'Ridley Scott',
    genre: 'Drama, Sci-Fi, Thriller',
    year: 1982,
    runtime: '117 min',
    ageRating: 'R',
    rating: 8.1,
    cast: ['Harrison Ford', 'Rutger Hauer', 'Sean Young'],
    boxOffice: '$33.7 million',
    budget: '$28 million',
    synopsis: "In a rain-soaked, neon-lit Los Angeles of 2019, blade runner Rick Deckard (Harrison Ford) is tasked with hunting down and 'retiring' four illegal replicants—artificial beings almost indistinguishable from humans. As he tracks the beautiful, mysterious replicant Rachael and their leader Roy Batty, Deckard begins to question the nature of his own humanity. A visually stunning, noir-influenced masterpiece exploring what it means to be alive.",
    poster: '/path/to/bladerunner-poster.jpg',
    backdrop: '/path/to/bladerunner-backdrop.jpg',
    backdrop_path: '/path/to/bladerunner-backdrop.jpg',
    poster_path: '/path/to/bladerunner-poster.jpg',
    scenes: [
      { time: 12, intensity: 35, label: 'Replicant Test', color: '#8b0000' },
      { time: 38, intensity: 58, label: 'Eye Dissection', color: '#ff1493' },
      { time: 72, intensity: 75, label: 'Rooftop Chase', color: '#ffd700' },
      { time: 100, intensity: 88, label: 'Tyrell Meeting', color: '#4169e1' },
      { time: 112, intensity: 95, label: 'Final Confrontation', color: '#dc143c' }
    ],
    sciFiComplexity: 96,
    complexityLevel: 'EXTREME',
    dominantColor: '#1a1a1a',
    dna: { SciFi: 60, Thriller: 25, Drama: 15 },
    sensitiveScenes: [
      { start: '38:20', end: '38:45', description: 'Nudity (woman)' },
      { start: '1:02:15', end: '1:03:00', description: 'Sex scene' }
    ]
  },
  {
    imdbID: 'tt0133093',
    tmdbId: 603,
    title: 'The Matrix',
    director: 'Lana Wachowski, Lilly Wachowski',
    genre: 'Action, Sci-Fi',
    year: 1999,
    runtime: '136 min',
    ageRating: 'R',
    rating: 8.7,
    cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
    boxOffice: '$467.2 million',
    budget: '$63 million',
    synopsis: "Thomas Anderson, a computer programmer known as 'Neo,' discovers a shocking truth: the world he knows is actually a simulation called the Matrix, created by sentient machines to pacify humans while using their bodies for energy. Freed by rebels who believe he is 'The One' prophesied to end the war, Neo must embrace his power and confront the powerful Agent Smith. A revolutionary sci-fi action film that redefined cinema.",
    poster: '/path/to/matrix-poster.jpg',
    backdrop: '/path/to/matrix-backdrop.jpg',
    backdrop_path: '/path/to/matrix-backdrop.jpg',
    poster_path: '/path/to/matrix-poster.jpg',
    scenes: [
      { time: 18, intensity: 40, label: 'Rabbit Hole', color: '#00ff00' },
      { time: 52, intensity: 68, label: 'Agent Smith Chase', color: '#ffff00' },
      { time: 88, intensity: 80, label: 'Lobby Shootout', color: '#00ffff' },
      { time: 115, intensity: 88, label: 'Building Jump', color: '#ff00ff' },
      { time: 130, intensity: 92, label: 'Final Stand', color: '#ff0000' }
    ],
    sciFiComplexity: 92,
    complexityLevel: 'HIGH',
    dominantColor: '#003300',
    dna: { SciFi: 50, Action: 40, Thriller: 10 },
    sensitiveScenes: [
      { start: '54:30', end: '55:15', description: 'Suggestive clothing' }
    ]
  },
  {
    imdbID: 'tt0078748',
    tmdbId: 348,
    title: 'Alien',
    director: 'Ridley Scott',
    genre: 'Horror, Sci-Fi, Thriller',
    year: 1979,
    runtime: '117 min',
    ageRating: 'R',
    rating: 8.5,
    cast: ['Sigourney Weaver', 'Tom Skerritt', 'John Hurt'],
    boxOffice: '$106.2 million',
    budget: '$11 million',
    synopsis: "The crew of a deep-space mining vessel is awakened from suspended animation to investigate a distress signal. What they find is a derelict alien ship and a parasitic organism of terrifying intelligence and savagery. Trapped aboard their vessel with an unstoppable predator that hunts them one by one, the crew fights desperately for survival. A masterpiece of sci-fi horror that redefined the genre.",
    poster: '/path/to/alien-poster.jpg',
    backdrop: '/path/to/alien-backdrop.jpg',
    backdrop_path: '/path/to/alien-backdrop.jpg',
    poster_path: '/path/to/alien-poster.jpg',
    scenes: [
      { time: 22, intensity: 45, label: 'Derelict Ship', color: '#4a4a4a' },
      { time: 58, intensity: 72, label: 'Chest Burster', color: '#8b0000' },
      { time: 85, intensity: 85, label: 'Creature Hunt', color: '#ff6347' },
      { time: 105, intensity: 92, label: 'Corridor Terror', color: '#ffff00' },
      { time: 115, intensity: 98, label: 'Final Escape', color: '#ff0000' }
    ],
    sciFiComplexity: 94,
    complexityLevel: 'HIGH',
    dominantColor: '#2f4f4f',
    dna: { Horror: 45, SciFi: 40, Thriller: 15 },
    sensitiveScenes: [
      { start: '51:15', end: '51:30', description: 'Nudity (woman)' }
    ]
  },
  {
    imdbID: 'tt0816692',
    tmdbId: 157336,
    title: 'Interstellar',
    director: 'Christopher Nolan',
    genre: 'Adventure, Drama, Sci-Fi',
    year: 2014,
    runtime: '169 min',
    ageRating: 'PG-13',
    rating: 8.7,
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
    boxOffice: '$677.5 million',
    budget: '$165 million',
    synopsis: "With Earth plagued by blight and humanity facing extinction, ex-pilot Cooper is recruited for a desperate mission: to travel through a wormhole in search of a new habitable planet. But the mission comes with a devastating cost—relativity means that for every hour he spends in space, years pass for his children back on Earth. It is a visually spectacular, emotional epic about a father's love stretching across dimensions and time.",
    poster: '/path/to/interstellar-poster.jpg',
    backdrop: '/path/to/interstellar-backdrop.jpg',
    backdrop_path: '/path/to/interstellar-backdrop.jpg',
    poster_path: '/path/to/interstellar-poster.jpg',
    scenes: [
      { time: 45, intensity: 50, label: 'Launch', color: '#0891b2' },
      { time: 82, intensity: 68, label: 'Miller Planet', color: '#06b6d4' },
      { time: 118, intensity: 82, label: 'Mann Planet', color: '#22d3ee' },
      { time: 145, intensity: 90, label: 'Tesseract', color: '#67e8f9' },
      { time: 162, intensity: 95, label: 'Reunion', color: '#a5f3fc' }
    ],
    sciFiComplexity: 95,
    complexityLevel: 'EXTREME',
    dominantColor: '#0c4a6e',
    dna: { SciFi: 50, Drama: 30, Adventure: 20 },
    sensitiveScenes: []
  },
  {
    imdbID: 'tt0103064',
    tmdbId: 280,
    title: 'Terminator 2: Judgment Day',
    director: 'James Cameron',
    genre: 'Action, Sci-Fi, Thriller',
    year: 1991,
    runtime: '137 min',
    ageRating: 'R',
    rating: 8.6,
    cast: ['Arnold Schwarzenegger', 'Linda Hamilton', 'Edward Furlong'],
    boxOffice: '$520.9 million',
    budget: '$102 million',
    synopsis: "Ten years have passed since the first machine failed to kill Sarah Connor. Now, the future supercomputer Skynet sends a new, terrifyingly advanced liquid-metal Terminator back in time to eliminate her son, John, the future leader of the human resistance. But the resistance has sent back a protector of their own—a reprogrammed version of the very machine that once tried to kill Sarah. It is a race against an unkillable enemy to change the future.",
    poster: '/path/to/t2-poster.jpg',
    backdrop: '/path/to/t2-backdrop.jpg',
    backdrop_path: '/path/to/t2-backdrop.jpg',
    poster_path: '/path/to/t2-poster.jpg',
    scenes: [
      { time: 15, intensity: 50, label: 'T-1000 Arrival', color: '#dc2626' },
      { time: 42, intensity: 72, label: 'Hospital Escape', color: '#ef4444' },
      { time: 78, intensity: 85, label: 'Cyberdyne Systems', color: '#f87171' },
      { time: 110, intensity: 92, label: 'Steel Mill', color: '#fca5a5' },
      { time: 130, intensity: 96, label: 'Final Sacrifice', color: '#fecaca' }
    ],
    sciFiComplexity: 96,
    complexityLevel: 'HIGH',
    dominantColor: '#1e3a8a',
    dna: { Action: 50, SciFi: 35, Thriller: 15 },
    sensitiveScenes: [
      { start: '1:32:45', end: '1:33:10', description: 'Partial nudity (man)' }
    ]
  },
  {
    imdbID: 'tt1375666',
    tmdbId: 27205,
    title: 'Inception',
    director: 'Christopher Nolan',
    genre: 'Action, Sci-Fi, Thriller',
    year: 2010,
    runtime: '148 min',
    ageRating: 'PG-13',
    rating: 8.8,
    cast: ['Leonardo DiCaprio', 'Marion Cotillard', 'Tom Hardy'],
    boxOffice: '$839.5 million',
    budget: '$160 million',
    synopsis: "Cobb, a skilled thief who specializes in extraction—stealing secrets from the subconscious of others while they dream—is offered a chance at redemption: perform an 'inception,' planting an idea in someone's mind rather than stealing one. Assembling a team, Cobb leads them deeper and deeper into nested dreams, where time moves differently and the laws of physics can be bent. A visually spectacular, intellectually challenging masterpiece.",
    poster: '/path/to/inception-poster.jpg',
    backdrop: '/path/to/inception-backdrop.jpg',
    backdrop_path: '/path/to/inception-backdrop.jpg',
    poster_path: '/path/to/inception-poster.jpg',
    scenes: [
      { time: 22, intensity: 55, label: 'Dream Heist', color: '#ca8a04' },
      { time: 62, intensity: 75, label: 'Hotel Corridor', color: '#eab308' },
      { time: 98, intensity: 85, label: 'Gravity Shift', color: '#fde68a' },
      { time: 128, intensity: 92, label: 'Limbo Descent', color: '#fbbf24' },
      { time: 142, intensity: 95, label: 'Spinning Top', color: '#dc2626' }
    ],
    sciFiComplexity: 98,
    complexityLevel: 'EXTREME',
    dominantColor: '#1f2937',
    dna: { SciFi: 55, Action: 30, Thriller: 15 },
    sensitiveScenes: [
      { start: '48:30', end: '49:00', description: 'Suggestive clothing (brief swimsuit scenes)' }
    ]
  },
  {
    imdbID: 'tt2543164',
    tmdbId: 203416,
    title: 'Arrival',
    director: 'Denis Villeneuve',
    genre: 'Adventure, Drama, Sci-Fi',
    year: 2016,
    runtime: '116 min',
    ageRating: 'PG-13',
    rating: 7.9,
    cast: ['Amy Adams', 'Jeremy Renner', 'Forest Whitaker'],
    boxOffice: '$203.2 million',
    budget: '$47 million',
    synopsis: "Twelve mysterious spacecraft touch down at twelve locations around the world. Linguist Dr. Louise Banks is tasked with learning to communicate with the alien visitors to understand their purpose. As she begins to decipher their complex language of circular symbols, Louise discovers profound truths about time, language, and what it means to embrace both the beauty and pain of existence.",
    poster: '/path/to/arrival-poster.jpg',
    backdrop: '/path/to/arrival-backdrop.jpg',
    backdrop_path: '/path/to/arrival-backdrop.jpg',
    poster_path: '/path/to/arrival-poster.jpg',
    scenes: [
      { time: 14, intensity: 38, label: 'First Contact', color: '#0891b2' },
      { time: 48, intensity: 60, label: 'Language Learning', color: '#06b6d4' },
      { time: 82, intensity: 75, label: 'Breakthrough', color: '#22d3ee' },
      { time: 108, intensity: 88, label: 'Revelation', color: '#67e8f9' },
      { time: 114, intensity: 93, label: 'Acceptance', color: '#a5f3fc' }
    ],
    sciFiComplexity: 89,
    complexityLevel: 'HIGH',
    dominantColor: '#164e63',
    dna: { SciFi: 50, Drama: 35, Adventure: 15 },
    sensitiveScenes: []
  },
{
  imdbID: 'tt0080684',
  tmdbId: 1891,
  title: 'Star Wars: The Empire Strikes Back',
  director: 'Irvin Kershner',
  genre: 'Action, Adventure, Fantasy, Sci-Fi',
  year: 1980,
  runtime: '124 min',
  ageRating: 'PG',
  rating: 8.7,
  cast: ['Mark Hamill', 'Harrison Ford', 'Carrie Fisher'],
  boxOffice: '$538.4 million',
  budget: '$18 million',
  synopsis: "After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader and bounty hunter Boba Fett. Luke confronts Vader in a lightsaber duel where he learns a devastating truth about his father. Widely considered the best Star Wars film, a darker, more mature chapter in the saga.",
  poster: 'https://image.tmdb.org/t/p/w500/nNAeTmF4CtdSgMDplXTDPOpYzsX.jpg',
  backdrop: 'https://image.tmdb.org/t/p/w1280/tmYlZ0Cpt6mAT29J8MeUBAWqEH.jpg',
  backdrop_path: 'https://image.tmdb.org/t/p/w1280/tmYlZ0Cpt6mAT29J8MeUBAWqEH.jpg',
  poster_path: 'https://image.tmdb.org/t/p/w500/nNAeTmF4CtdSgMDplXTDPOpYzsX.jpg',
  scenes: [
    { time: 15, intensity: 52, label: 'Battle of Hoth', color: '#e0f2fe' },
    { time: 48, intensity: 58, label: 'Asteroid Chase', color: '#7c3aed' },
    { time: 82, intensity: 72, label: 'Cloud City Betrayal', color: '#fb923c' },
    { time: 105, intensity: 88, label: 'Lightsaber Duel', color: '#ef4444' },
    { time: 120, intensity: 95, label: 'I Am Your Father', color: '#dc2626' }
  ],
  sciFiComplexity: 90,
  complexityLevel: 'HIGH',
  dominantColor: '#1e3a8a',
  dna: { SciFi: 40, Adventure: 35, Fantasy: 25 },
  sensitiveScenes: []
},

  {
    imdbID: 'tt1856101',
    tmdbId: 335984,
    title: 'Blade Runner 2049',
    director: 'Denis Villeneuve',
    genre: 'Drama, Mystery, Sci-Fi',
    year: 2017,
    runtime: '164 min',
    ageRating: 'R',
    rating: 8.0,
    cast: ['Ryan Gosling', 'Harrison Ford', 'Ana de Armas'],
    boxOffice: '$259.2 million',
    budget: '$185 million',
    synopsis: "Thirty years after the original, blade runner K (Ryan Gosling) discovers a secret that could destabilize society: evidence that Rick Deckard (Harrison Ford) and a replicant created a child together. Searching for answers in a decaying, dystopian future where replicants are hunted and enslaved, K must confront profound questions about humanity, mortality, and what it means to have a soul.",
    poster: '/path/to/blade2049-poster.jpg',
    backdrop: '/path/to/blade2049-backdrop.jpg',
    backdrop_path: '/path/to/blade2049-backdrop.jpg',
    poster_path: '/path/to/blade2049-poster.jpg',
    scenes: [
      { time: 18, intensity: 40, label: 'Abandoned Farm', color: '#8b7355' },
      { time: 55, intensity: 62, label: 'Radioactive Vegas', color: '#ff6347' },
      { time: 98, intensity: 78, label: 'Wallace Revelation', color: '#ffd700' },
      { time: 138, intensity: 88, label: 'Sea Wall Discovery', color: '#4169e1' },
      { time: 160, intensity: 94, label: 'Final Meeting', color: '#dc143c' }
    ],
    sciFiComplexity: 94,
    complexityLevel: 'EXTREME',
    dominantColor: '#1a1a2e',
    dna: { SciFi: 60, Drama: 25, Mystery: 15 },
    sensitiveScenes: [
      { start: '28:15', end: '28:45', description: 'Nudity (holographic woman)' },
      { start: '1:12:30', end: '1:13:15', description: 'Sex scene (stylized)' }
    ]
  }
];

// Build object map by tmdbId
export const COMPLETE_SCI_FI_DATABASE = Object.fromEntries(
  SCI_FI_MOVIES.map(m => [m.tmdbId, m])
);

// Export as named export for compatibility
export const SCI_FI_DATABASE = COMPLETE_SCI_FI_DATABASE;

export default COMPLETE_SCI_FI_DATABASE;
