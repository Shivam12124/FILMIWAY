// utils/psychologicalThrillerMovieData.js - 10 BEST PSYCHOLOGICAL THRILLER MOVIES COLLECTION

export const PSYCH_THRILLER_MOVIES = [
  {
    imdbID: 'tt0102926',
    tmdbId: 274,
    title: 'The Silence of the Lambs',
    director: 'Jonathan Demme',
    genre: 'Crime, Drama, Thriller',
    year: 1991,
    runtime: '118 min',
    ageRating: 'R',
    rating: 8.6,
    cast: ['Jodie Foster', 'Anthony Hopkins', 'Scott Glenn'],
    boxOffice: '$272.7 million',
    budget: '$19 million',
    synopsis: "Clarice Starling, a young and ambitious FBI trainee, is thrown into the deep end to catch 'Buffalo Bill,' a serial killer who skins his female victims. To save the next girl, she must enter the high-security dungeon of Dr. Hannibal Lecter—a brilliant psychiatrist turned cannibalistic monster. What begins as an interrogation evolves into a chilling, psychological waltz where Clarice must trade her own traumatic memories for Lecter's insights, risking her sanity to stop a slaughter.",
    poster: '/path/to/silence-poster.jpg',
    backdrop: '/path/to/silence-backdrop.jpg',
    backdrop_path: '/path/to/silence-backdrop.jpg',
    poster_path: '/path/to/silence-poster.jpg',
    scenes: [
      { time: 10, intensity: 35, label: 'First Interview', color: '#b91c1c' },
      { time: 46, intensity: 67, label: 'Lecter Escapes', color: '#f87171' },
      { time: 82, intensity: 79, label: 'Night Vision Stalk', color: '#fbbf24' },
      { time: 102, intensity: 89, label: 'Buffalo Bill', color: '#fde68a' },
      { time: 113, intensity: 94, label: 'Ending', color: '#dc2626' }
    ],
    suspenseIntensity: 94,
    dominantColor: '#4a5568', // Institutional Grey/Dungeon Stone - Cold, clinical, damp
    dna: { Thriller: 55, Crime: 30, Horror: 15 },
    sensitiveScenes: [
      { start: '18:50', end: '18:57', description: 'Explicit Scene' },
      { start: '1:36:30', end: '1:36:37', description: 'Nudity (man)' }
    ]
  },
  {
    imdbID: 'tt0137523',
    tmdbId: 550,
    title: 'Fight Club',
    director: 'David Fincher',
    genre: 'Drama',
    year: 1999,
    runtime: '139 min',
    ageRating: 'R',
    rating: 8.8,
    cast: ['Edward Norton', 'Brad Pitt', 'Helena Bonham Carter'],
    boxOffice: '$101.2 million',
    budget: '$63 million',
    synopsis: "A ticking time bomb of an insomniac, suffocated by his IKEA-catalog life, finds a strange release in the company of Tyler Durden—a charismatic soap salesman who believes self-destruction is the answer to everything. Together, they create an underground fight club that evolves into something far more dangerous: a cult-like army targeting the foundations of society itself. But as the chaos spreads, the narrator realizes that Tyler Durden is not who he seems.",
    poster: '/path/to/fightclub-poster.jpg',
    backdrop: '/path/to/fightclub-backdrop.jpg',
    backdrop_path: '/path/to/fightclub-backdrop.jpg',
    poster_path: '/path/to/fightclub-poster.jpg',
    scenes: [
      { time: 5, intensity: 40, label: 'Meeting Tyler Durden', color: '#b91c1c' },
      { time: 50, intensity: 70, label: 'Fight Club Formation', color: '#f87171' },
      { time: 100, intensity: 90, label: 'Fight to the End', color: '#fbbf24' },
      { time: 115, intensity: 95, label: 'Chaos Unleashed', color: '#fde68a' },
      { time: 125, intensity: 98, label: 'Final Twist', color: '#dc2626' }
    ],
    suspenseIntensity: 98,
    dominantColor: '#3f6212', // Fincher Green - Sickly, fluorescent, grime-covered
    dna: { Drama: 70, Psychological: 20, Thriller: 10 },
    sensitiveScenes: [
      { start: '48:40', end: '48:55', description: 'Sex' },
      { start: '48:40', end: '48:55', description: 'Sexual sounds' },
      { start: '1:06:55', end: '1:07:35', description: 'Partial nudity + kissing' }
    ]
  },
  {
    imdbID: 'tt0209144',
    tmdbId: 77,
    title: 'Memento',
    director: 'Christopher Nolan',
    genre: 'Mystery, Thriller',
    year: 2000,
    runtime: '113 min',
    ageRating: 'R',
    rating: 8.4,
    cast: ['Guy Pearce', 'Carrie-Anne Moss', 'Joe Pantoliano'],
    boxOffice: '$39.7 million',
    budget: '$9 million',
    synopsis: "Leonard Shelby is a man living in a fractured reality. Unable to form new memories since the attack that killed his wife, he hunts her murderer using a complex system of Polaroid photos, handwritten notes, and tattoos on his own skin. Told in reverse chronological order, the film forces you to experience Leonard's disorientation firsthand, slowly revealing a devastating truth: when you can't trust your own mind, everyone is a suspect, including yourself.",
    poster: '/path/to/memento-poster.jpg',
    backdrop: '/path/to/memento-backdrop.jpg',
    backdrop_path: '/path/to/memento-backdrop.jpg',
    poster_path: '/path/to/memento-poster.jpg',
    scenes: [
      { time: 5, intensity: 40, label: 'Opening Black & White', color: '#b91c1c' },
      { time: 50, intensity: 60, label: 'Tattoos Explanation', color: '#f87171' },
      { time: 80, intensity: 75, label: 'Car Scene', color: '#fbbf24' },
      { time: 105, intensity: 85, label: 'Final Reveal', color: '#fde68a' }
    ],
    suspenseIntensity: 90,
    dominantColor: '#d6c8b2', // Polaroid Beige - Faded, dusty, sun-bleached memory
    dna: { Mystery: 50, Thriller: 30, Drama: 20 },
    sensitiveScenes: [
      { start: '31:08', end: '31:13', description: 'Casual Kissing' }
    ]
  },
  {
    imdbID: 'tt0114369',
    tmdbId: 807,
    title: 'Se7en',
    director: 'David Fincher',
    genre: 'Crime, Drama, Mystery',
    year: 1995,
    runtime: '127 min',
    ageRating: 'R',
    rating: 8.6,
    cast: ['Brad Pitt', 'Morgan Freeman', 'Kevin Spacey'],
    boxOffice: '$327.3 million',
    budget: '$33 million',
    synopsis: "In a city drowning in constant rain and moral decay, two detectives—one a weary veteran, the other a brash rookie—hunt a serial killer who turns the Seven Deadly Sins into gruesome tableaus of torture. As they move from one horrific crime scene to the next, they realize they aren't just catching a criminal; they are pawns in his masterwork. It is a descent into pure nihilism, ending in a desert showdown that will leave you scarred.",
    poster: '/path/to/se7en-poster.jpg',
    backdrop: '/path/to/se7en-backdrop.jpg',
    backdrop_path: '/path/to/se7en-backdrop.jpg',
    poster_path: '/path/to/se7en-poster.jpg',
    scenes: [
      { time: 8, intensity: 45, label: 'Sin 1: Gluttony', color: '#b91c1c' },
      { time: 38, intensity: 65, label: 'Sin 3: Greed', color: '#f87171' },
      { time: 77, intensity: 85, label: 'Sin 5: Lust', color: '#fbbf24' },
      { time: 102, intensity: 92, label: 'Desert Confrontation', color: '#fde68a' },
      { time: 120, intensity: 98, label: "What's in the Box?", color: '#dc2626' }
    ],
    suspenseIntensity: 98,
    dominantColor: '#1c1917', // Apathy Black - High contrast shadows, sepia rot, darkness
    dna: { Mystery: 50, Thriller: 40, Crime: 10 },
    sensitiveScenes: []
  },
  {
    imdbID: 'tt1130884',
    tmdbId: 11324,
    title: 'Shutter Island',
    director: 'Martin Scorsese',
    genre: 'Mystery, Thriller',
    year: 2010,
    runtime: '138 min',
    ageRating: 'R',
    rating: 8.2,
    cast: ['Leonardo DiCaprio', 'Mark Ruffalo', 'Ben Kingsley'],
    boxOffice: '$294 million',
    budget: '$80 million',
    synopsis: "U.S. Marshal Teddy Daniels arrives at Shutter Island, a fortress-like asylum for the criminally insane, to find a missing patient who vanished from a locked room. But as a hurricane rips through the island, cutting off all escape, Teddy discovers that the doctors are hiding something terrible. Haunted by his own tragic past and plagued by migraines and hallucinations, he begins to suspect that he was never meant to leave the island alive.",
    poster: '/path/to/shutter-poster.jpg',
    backdrop: '/path/to/shutter-backdrop.jpg',
    backdrop_path: '/path/to/shutter-backdrop.jpg',
    poster_path: '/path/to/shutter-poster.jpg',
    scenes: [
      { time: 15, intensity: 40, label: 'Arrival', color: '#b91c1c' },
      { time: 60, intensity: 68, label: 'Interrogation Room', color: '#f87171' },
      { time: 95, intensity: 80, label: 'Storm Breaks', color: '#fbbf24' },
      { time: 110, intensity: 88, label: 'Hospital Secrets', color: '#fde68a' },
      { time: 130, intensity: 93, label: 'Truth Revealed', color: '#dc2626' }
    ],
    suspenseIntensity: 90,
    dominantColor: '#334155', // Stormy Atlantic - Blue-grey, wet rocks, dark uniforms
    dna: { Mystery: 50, Thriller: 35, Drama: 15 },
    sensitiveScenes: [
      { start: '1:10:43', end: '1:10:47', description: 'Nudity' },
      { start: '1:59:03', end: '1:59:06', description: 'Casual Kissing' }
    ]
  },
  {
    imdbID: 'tt0947798',
    tmdbId: 44214,
    title: 'Black Swan',
    director: 'Darren Aronofsky',
    genre: 'Drama, Thriller',
    year: 2010,
    runtime: '108 min',
    ageRating: 'R',
    rating: 8.0,
    cast: ['Natalie Portman', 'Mila Kunis', 'Vincent Cassel'],
    boxOffice: '$106.9 million',
    budget: '$13 million',
    synopsis: "Nina is a ballerina whose life is consumed by dance. When she wins the lead role in 'Swan Lake,' she easily embodies the innocent White Swan but struggles to find the seductive darkness required for the Black Swan. As a rival dancer threatens to replace her, Nina's desperation triggers a terrifying metamorphosis. The pressure fractures her reality, leading to a hallucinatory nightmare where perfection demands the ultimate sacrifice.",
    poster: '/path/to/blackswan-poster.jpg',
    backdrop: '/path/to/blackswan-backdrop.jpg',
    backdrop_path: '/path/to/blackswan-backdrop.jpg',
    poster_path: '/path/to/blackswan-poster.jpg',
    scenes: [
      { time: 12, intensity: 38, label: 'Audition', color: '#b91c1c' },
      { time: 40, intensity: 62, label: 'Rehearsal Tension', color: '#f87171' },
      { time: 75, intensity: 80, label: 'Performance Panic', color: '#fbbf24' },
      { time: 95, intensity: 85, label: 'Psychological Breakdown', color: '#fde68a' },
      { time: 105, intensity: 90, label: 'Final Performance', color: '#dc2626' }
    ],
    suspenseIntensity: 85,
    dominantColor: '#18181b', // Obsidian Black - feathers, darkness, mirrors
    dna: { Drama: 55, Thriller: 40, Psychological: 5 },
    sensitiveScenes: [
      { start: '21:34', end: '21:40', description: 'Kissing' },
      { start: '39:40', end: '40:40', description: 'Masturbating' },
      { start: '48:52', end: '49:10', description: 'Sexually Suggestive Scene' },
      { start: '51:20', end: '51:40', description: 'Masturbating' },
      { start: '1:08:20', end: '1:11:01', description: 'Sex' },
      { start: '1:20:20', end: '1:20:40', description: 'Sex' }
    ]
  },
  {
    imdbID: 'tt0361862',
    tmdbId: 4553,
    title: 'The Machinist',
    director: 'Brad Anderson',
    genre: 'Drama, Thriller',
    year: 2004,
    runtime: '101 min',
    ageRating: 'R',
    rating: 7.7,
    cast: ['Christian Bale', 'Jennifer Jason Leigh', 'Aitana Sánchez-Gijón'],
    boxOffice: '$8.6 million',
    budget: '$5 million',
    synopsis: "Trevor Reznik is a skeletal shadow of a man who hasn't slept in a year. His insomnia has eroded his mind, leaving him prone to vivid hallucinations and paranoia. When a workplace accident he causes costs a coworker his arm, Trevor becomes convinced that an enigmatic figure named Ivan is orchestrating a plot to destroy him. But as he connects the clues, he finds that the conspiracy is far more personal—and horrifying—than he imagined.",
    poster: '/path/to/machinist-poster.jpg',
    backdrop: '/path/to/machinist-backdrop.jpg',
    backdrop_path: '/path/to/machinist-backdrop.jpg',
    poster_path: '/path/to/machinist-poster.jpg',
    scenes: [
      { time: 7, intensity: 30, label: 'Sleeplessness', color: '#b91c1c' },
      { time: 35, intensity: 55, label: 'Paranoia', color: '#f87171' },
      { time: 65, intensity: 70, label: 'Conspiracy Reveal', color: '#fbbf24' },
      { time: 90, intensity: 80, label: 'Mental Breakdown', color: '#fde68a' },
      { time: 100, intensity: 85, label: 'Final Revelation', color: '#dc2626' }
    ],
    suspenseIntensity: 82,
    dominantColor: '#94a3b8', // Industrial Steel - Desaturated, metallic, cold blue-grey
    dna: { Drama: 40, Thriller: 40, Psychological: 20 },
    sensitiveScenes: [
      { start: '17:00', end: '18:25', description: 'Sex' },
      { start: '1:16:10', end: '1:16:15', description: 'Kissing' }
    ]
  },
  {
    imdbID: 'tt0364569',
    tmdbId: 670,
    title: 'Oldboy',
    director: 'Park Chan-wook',
    genre: 'Action, Drama, Mystery',
    year: 2003,
    runtime: '120 min',
    ageRating: 'R',
    rating: 8.4,
    cast: ['Choi Min-sik', 'Yoo Ji-tae', 'Kang Hye-jung'],
    boxOffice: '$15.5 million',
    budget: '$3 million',
    synopsis: "On a rainy night, an ordinary businessman is kidnapped and locked in a cheap hotel room for 15 years without explanation. His only connection to the world is a TV set. Then, suddenly, he is released. Armed with a hammer and a thirst for vengeance, he has five days to find his captor and discover the reason for his imprisonment. But the truth is part of a twisted game that is far more violent and tragic than his confinement ever was.",
    poster: '/path/to/oldboy-poster.jpg',
    backdrop: '/path/to/oldboy-backdrop.jpg',
    backdrop_path: '/path/to/oldboy-backdrop.jpg',
    poster_path: '/path/to/oldboy-poster.jpg',
    scenes: [
      { time: 10, intensity: 40, label: 'Imprisonment', color: '#b91c1c' },
      { time: 60, intensity: 75, label: 'Revenge Planning', color: '#f87171' },
      { time: 95, intensity: 82, label: 'Escape and Hunt', color: '#fbbf24' },
      { time: 115, intensity: 90, label: 'Showdown', color: '#fde68a' },
      { time: 120, intensity: 93, label: 'Revelation', color: '#dc2626' }
    ],
    suspenseIntensity: 90,
    dominantColor: '#365314', // Wallpaper Green - The sickly, patterned green of the hallway
    dna: { Drama: 40, Mystery: 30, Thriller: 30 },
    sensitiveScenes: [
      { start: '11:20', end: '11:40', description: 'Masturbating' },
      { start: '57:37', end: '1:01:10', description: 'Partial nudity (woman)' },
      { start: '1:03:35', end: '1:05:10', description: 'Sex' },
      { start: '1:22:20', end: '1:22:36', description: 'Sexually Suggestive Scene' },
      { start: '1:30:30', end: '1:30:38', description: 'Partial nudity (man)' }
    ]
  },
  {
    imdbID: 'tt0075314',
    tmdbId: 103,
    title: 'Taxi Driver',
    director: 'Martin Scorsese',
    genre: 'Crime, Drama',
    year: 1976,
    runtime: '114 min',
    ageRating: 'R',
    rating: 8.3,
    cast: ['Robert De Niro', 'Jodie Foster', 'Harvey Keitel'],
    boxOffice: '$28.6 million',
    budget: '$12 million',
    synopsis: "Travis Bickle is God's lonely man—a Vietnam vet driving a cab through the neon-soaked squalor of 1970s New York. Disgusted by the 'filth' he sees on the streets at night, his isolation festers into a dangerous obsession. He buys a gun, shaves his head into a Mohawk, and prepares for a self-appointed mission to wash the scum off the streets. It is a terrifying portrait of a man slowly becoming a loaded gun.",
    poster: '/path/to/taxidriver-poster.jpg',
    backdrop: '/path/to/taxidriver-backdrop.jpg',
    backdrop_path: '/path/to/taxidriver-backdrop.jpg',
    poster_path: '/path/to/taxidriver-poster.jpg',
    scenes: [
      { time: 15, intensity: 40, label: 'Night Driving', color: '#b91c1c' },
      { time: 48, intensity: 65, label: 'Violent Version', color: '#f87171' },
      { time: 90, intensity: 80, label: 'Rampage', color: '#fbbf24' },
      { time: 110, intensity: 95, label: 'Final Shootout', color: '#fde68a' },
      { time: 113, intensity: 98, label: 'Ending', color: '#dc2626' }
    ],
    suspenseIntensity: 90,
    dominantColor: '#eab308', // Taxi Yellow/Neon - Bright yellow against grimy night
    dna: { Drama: 50, Crime: 30, Thriller: 20 },
    sensitiveScenes: [
      { start: '35:34', end: '35:45', description: 'Sexually Suggestive Scene' },
      { start: '58:52', end: '59:05', description: 'Sexually Suggestive Scene' }
    ]
  },
  {
    imdbID: 'tt0081505',
    tmdbId: 694,
    title: 'The Shining',
    director: 'Stanley Kubrick',
    genre: 'Drama, Horror, Thriller',
    year: 1980,
    runtime: '146 min',
    ageRating: 'R',
    rating: 8.4,
    cast: ['Jack Nicholson', 'Shelley Duvall', 'Danny Lloyd'],
    boxOffice: '$44 million',
    budget: '$19 million',
    synopsis: "Jack Torrance hopes that a winter caretaking job at the isolated Overlook Hotel will cure his writer's block. But the hotel is not as empty as it seems. As the snow piles up outside, cutting the family off from the world, the hotel's dark history begins to bleed into the present. Jack's sanity crumbles under the weight of cabin fever and supernatural influence, turning him against his wife and son in a terrifying crescendo of madness.",
    poster: '/path/to/shining-poster.jpg',
    backdrop: '/path/to/shining-backdrop.jpg',
    backdrop_path: '/path/to/shining-backdrop.jpg',
    poster_path: '/path/to/shining-poster.jpg',
    scenes: [
      { time: 12, intensity: 38, label: 'First Snow', color: '#b91c1c' },
      { time: 50, intensity: 70, label: 'Meeting Grady', color: '#f87171' },
      { time: 95, intensity: 85, label: 'Maze Scenes', color: '#fbbf24' },
      { time: 130, intensity: 90, label: 'Blood Elevator', color: '#fde68a' },
      { time: 140, intensity: 95, label: 'The Finale', color: '#dc2626' }
    ],
    suspenseIntensity: 93,
    dominantColor: '#ea580c', // Overlook Hexagon Carpet - The iconic retro orange/brown
    dna: { Drama: 50, Horror: 30, Thriller: 20 },
    sensitiveScenes: [
      { start: '1:10:40', end: '1:11:00', description: 'Background Painting' },
      { start: '1:13:10', end: '1:16:00', description: 'Nudity + Kissing' }
    ]
  }
];

export const COMPLETE_PSYCH_THRILLER_DATABASE = Object.fromEntries(
  PSYCH_THRILLER_MOVIES.map(m => [m.tmdbId, m])
);

export default COMPLETE_PSYCH_THRILLER_DATABASE;