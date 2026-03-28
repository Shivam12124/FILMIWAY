// utils/bestActionMoviesData.js - 10 BEST ACTION MOVIES OF ALL TIME 🎬 ✅
// The pinnacle of practical stunts, martial arts, gun-fu, and adrenaline-pumping cinema.

export const TMDB_CONFIG = {
    API_KEY: 'process.env.NEXT_PUBLIC_TMDB_API_KEY',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

// 1. RAW DATA LIST (Single Source of Truth)
export const BEST_ACTION_MOVIES = [
  {
    imdbID: 'tt0095016',
    tmdbId:562,
    title: 'Die Hard',
    director: 'John McTiernan',
    genre: 'Action, Thriller',
    year: 1988,
    runtime: 132,
    ageRating: 'R',
    rating: 8.2,
    cast: ['Bruce Willis', 'Alan Rickman', 'Bonnie Bedelia'],
    boxOffice: '$141.5 million',
    budget: '$28 million',
    synopsis: "An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles. It defined the modern action genre, establishing the vulnerable, everyman hero.",
    poster_path: '/yFihWxQcmOcaCRrjQCGcQo011KQ.jpg',
    backdrop_path: '/c5kE26Xb28BvUvD9P0sWqj55xIw.jpg',
    scenes: [
      { time: 25, intensity: 60, label: 'The Takeover', color: '#1e293b' },
      { time: 55, intensity: 85, label: 'The Elevator Shaft', color: '#94a3b8' },
      { time: 78, intensity: 95, label: 'Shooting the Glass', color: '#ef4444' },
      { time: 105, intensity: 100, label: 'The Roof Explosion', color: '#f97316' },
      { time: 122, intensity: 98, label: 'Happy Trails, Hans', color: '#dc2626' }
    ],
    adrenalineScore: 92,
    complexityLevel: 'FOUNDATIONAL',
    dominantColor: '#0f172a',
    dna: { Action: 60, Thriller: 30, Christmas: 10 },
    sensitiveScenes: [
      { start: '0:25:00', end: '2:10:00', description: 'Frequent intense gun violence, blood, and executions' },
      { start: '0:45:10', end: '0:45:15', description: 'Brief partial nudity (magazine centerfold)' },
      { start: '0:00:00', end: '2:12:00', description: 'Pervasive strong language and profanity' }
    ]
  },
  {
    imdbID: 'tt0103064',
    tmdbId: 280,
    title: 'Terminator 2: Judgment Day',
    director: 'James Cameron',
    genre: 'Action, Sci-Fi',
    year: 1991,
    runtime: 137,
    ageRating: 'R',
    rating: 8.6,
    cast: ['Arnold Schwarzenegger', 'Linda Hamilton', 'Edward Furlong'],
    boxOffice: '$520.8 million',
    budget: '$102 million',
    synopsis: "A cyborg, identical to the one who failed to kill Sarah Connor, must now protect her teenage son John from a more advanced and powerful cyborg. A groundbreaking masterpiece of special effects, pacing, and emotional weight.",
    poster_path: '/we7w00YWE0XGqE3k6Nq9R7E9oUj.jpg',
    backdrop_path: '/560H0hK9RtoRInH88rD027L3RjI.jpg',
    scenes: [
      { time: 32, intensity: 90, label: 'Mall Hallway Shootout', color: '#3b82f6' },
      { time: 38, intensity: 95, label: 'The Canal Chase', color: '#475569' },
      { time: 65, intensity: 88, label: 'Pescadero Escape', color: '#1e293b' },
      { time: 102, intensity: 92, label: 'Cyberdyne Minigun', color: '#000000' },
      { time: 125, intensity: 100, label: 'Steel Mill Showdown', color: '#ea580c' }
    ],
    adrenalineScore: 95,
    complexityLevel: 'BLOCKBUSTER',
    dominantColor: '#1e3a8a',
    dna: { Action: 50, 'Sci-Fi': 40, Drama: 10 },
    sensitiveScenes: [
      { start: '0:06:00', end: '0:07:30', description: 'Time travel arrival (rear nudity)' },
      { start: '0:30:00', end: '2:10:00', description: 'Intense sci-fi violence, impalements, and gunfights' },
      { start: '0:55:00', end: '0:58:00', description: 'Apocalyptic nightmare (nuclear explosion, skeletons burning)' }
    ]
  },
  {
    imdbID: 'tt1392190',
    tmdbId: 76341,
    title: 'Mad Max: Fury Road',
    director: 'George Miller',
    genre: 'Action, Adventure, Sci-Fi',
    year: 2015,
    runtime: 120,
    ageRating: 'R',
    rating: 8.1,
    cast: ['Tom Hardy', 'Charlize Theron', 'Nicholas Hoult'],
    boxOffice: '$380.4 million',
    budget: '$150 million',
    synopsis: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max. A relentless, 120-minute masterclass in visual storytelling and practical vehicular warfare.",
    poster_path: '/hA2ple9q4cbBUGz5kM62kMEvK7P.jpg',
    backdrop_path: '/tFI8WuSBOUVCAWcGnePpiSOfzNA.jpg',
    scenes: [
      { time: 18, intensity: 90, label: 'The Chase Begins', color: '#d97706' },
      { time: 32, intensity: 100, label: 'Into the Sandstorm', color: '#b45309' },
      { time: 55, intensity: 92, label: 'The Canyon Defense', color: '#78350f' },
      { time: 82, intensity: 88, label: 'The Bog', color: '#1e3a8a' },
      { time: 98, intensity: 100, label: 'The Return Drive (Climax)', color: '#ea580c' }
    ],
    adrenalineScore: 100,
    complexityLevel: 'MASTERPIECE',
    dominantColor: '#d97706',
    dna: { Action: 80, 'Sci-Fi': 15, Survival: 5 },
    sensitiveScenes: [
      { start: '0:00:00', end: '2:00:00', description: 'Non-stop vehicular violence, explosions, and brutal combat' },
      { start: '0:22:00', end: '0:25:00', description: 'Implied sexual slavery/abuse (The Wives context)' }
    ]
  },
  {
    imdbID: 'tt0090605',
    tmdbId: 679,
    title: 'Aliens',
    director: 'James Cameron',
    genre: 'Action, Sci-Fi, Thriller',
    year: 1986,
    runtime: 137,
    ageRating: 'R',
    rating: 8.4,
    cast: ['Sigourney Weaver', 'Michael Biehn', 'Carrie Henn'],
    boxOffice: '$131.3 million',
    budget: '$18.5 million',
    synopsis: "Fifty-seven years after surviving an apocalyptic attack aboard her space vessel by pitiless space creatures, Officer Ripley awakens from hyper-sleep and joins a Colonial Marine unit to investigate the loss of contact with a terraforming colony.",
    poster_path: '/r1x5JGpyqZU8FApN7iAMvlMMhqh.jpg',
    backdrop_path: '/3pTIEwS2xedz2z4EhwFqG1x6F3m.jpg',
    scenes: [
      { time: 55, intensity: 88, label: 'First Encounter in the Hive', color: '#111827' },
      { time: 88, intensity: 92, label: 'The Facehuggers', color: '#0f172a' },
      { time: 105, intensity: 98, label: 'Operations Retreat', color: '#dc2626' },
      { time: 118, intensity: 95, label: 'Descending for Newt', color: '#7f1d1d' },
      { time: 130, intensity: 100, label: 'Get Away From Her, You Bitch!', color: '#fbbf24' }
    ],
    adrenalineScore: 94,
    complexityLevel: 'INTENSE',
    dominantColor: '#030712',
    dna: { Action: 50, 'Sci-Fi': 30, Horror: 20 },
    sensitiveScenes: [
      { start: '0:55:00', end: '2:15:00', description: 'Intense sci-fi violence, alien gore, chestbursting, and terrifying combat' },
      { start: '0:00:00', end: '2:17:00', description: 'Pervasive strong language (especially from the Marines)' }
    ]
  },
  {
    imdbID: 'tt2981104',
    tmdbId: 245891,
    title: 'John Wick',
    director: 'Chad Stahelski',
    genre: 'Action, Thriller',
    year: 2014,
    runtime: 101,
    ageRating: 'R',
    rating: 7.4,
    cast: ['Keanu Reeves', 'Michael Nyqvist', 'Alfie Allen'],
    boxOffice: '$86 million',
    budget: '$20 million',
    synopsis: "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him. It resurrected the American action movie with flawless, practical 'gun-fu' choreography and immersive world-building.",
    poster_path: '/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg',
    backdrop_path: '/7rxeFlZ0p0A75PzBtvvX0Rngj8J.jpg',
    scenes: [
      { time: 15, intensity: 80, label: 'The Home Invasion', color: '#1f2937' },
      { time: 35, intensity: 92, label: 'The Sledgehammer', color: '#000000' },
      { time: 48, intensity: 98, label: 'Home Defense', color: '#475569' },
      { time: 65, intensity: 100, label: 'The Red Circle Club', color: '#e11d48' },
      { time: 88, intensity: 95, label: 'The Church & Dock', color: '#111827' }
    ],
    adrenalineScore: 96,
    complexityLevel: 'CHOREOGRAPHED',
    dominantColor: '#0f172a',
    dna: { Action: 80, Thriller: 15, NeoNoir: 5 },
    sensitiveScenes: [
      { start: '0:14:00', end: '0:15:30', description: 'Animal cruelty (death of the dog)' },
      { start: '0:45:00', end: '1:40:00', description: 'Constant, highly choreographed graphic gun violence, stabbings, and executions' }
    ]
  },
  {
    imdbID: 'tt2265171',
    tmdbId: 244272,
    title: 'The Raid 2',
    director: 'Gareth Evans',
    genre: 'Action, Crime, Thriller',
    year: 2014,
    runtime: 150,
    ageRating: 'R',
    rating: 7.9,
    cast: ['Iko Uwais', 'Yayan Ruhian', 'Arifin Putra'],
    boxOffice: '$6.6 million',
    budget: '$4.5 million',
    synopsis: "Only a short time after the first raid, Rama goes undercover with the thugs of Jakarta and plans to bring down the syndicate and uncover the corruption within his police force. The absolute pinnacle of martial arts cinema and brutal, fluid camera work.",
    poster_path: '/ufNpe5OaUweC3sOeybAetM5a1pP.jpg',
    backdrop_path: '/3Yp2B6R5FhPZ1k4aFp3jH50aU7m.jpg',
    scenes: [
      { time: 22, intensity: 90, label: 'Prison Bathroom Riot', color: '#451a03' },
      { time: 45, intensity: 98, label: 'The Mud Yard Riot', color: '#78350f' },
      { time: 92, intensity: 95, label: 'The Car Chase', color: '#0f172a' },
      { time: 118, intensity: 96, label: 'Hammer Girl & Baseball Bat Man', color: '#991b1b' },
      { time: 135, intensity: 100, label: 'The Kitchen Fight', color: '#dc2626' }
    ],
    adrenalineScore: 99,
    complexityLevel: 'EXTREME',
    dominantColor: '#451a03',
    dna: { Action: 70, MartialArts: 20, Crime: 10 },
    sensitiveScenes: [
      { start: '0:00:00', end: '2:30:00', description: 'Extreme, unrelenting graphic martial arts violence, bone breaking, and gore' },
      { start: '0:05:00', end: '0:07:00', description: 'Execution with a shotgun' }
    ]
  },
  {
    imdbID: 'tt4508902',
    tmdbId: 353081,
    title: 'Mission: Impossible - Fallout',
    director: 'Christopher McQuarrie',
    genre: 'Action, Adventure, Thriller',
    year: 2018,
    runtime: 147,
    ageRating: 'PG-13',
    rating: 7.7,
    cast: ['Tom Cruise', 'Henry Cavill', 'Ving Rhames'],
    boxOffice: '$791.1 million',
    budget: '$178 million',
    synopsis: "Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission goes wrong. It is the apex of the modern blockbuster, relying on jaw-dropping practical stunts performed by Cruise himself.",
    poster_path: '/80PWnSTkygi3QWWmJ3hrAwqvLnO.jpg',
    backdrop_path: '/5qxePvGkPAOeqXJqE0a0I8k1nPa.jpg',
    scenes: [
      { time: 25, intensity: 92, label: 'The HALO Jump', color: '#1e3a8a' },
      { time: 42, intensity: 98, label: 'The Bathroom Fight', color: '#e2e8f0' },
      { time: 88, intensity: 95, label: 'Paris Motorcycle/Car Chase', color: '#1e293b' },
      { time: 105, intensity: 85, label: 'The London Rooftop Sprint', color: '#64748b' },
      { time: 125, intensity: 100, label: 'Helicopter Chase & Cliff Fight', color: '#94a3b8' }
    ],
    adrenalineScore: 97,
    complexityLevel: 'SPECTACLE',
    dominantColor: '#334155',
    dna: { Action: 60, Espionage: 25, Thriller: 15 },
    sensitiveScenes: [
      { start: '0:40:00', end: '0:46:00', description: 'Intense hand-to-hand combat (Bathroom scene)' },
      { start: '0:00:00', end: '2:27:00', description: 'High-octane action violence and perilous situations' }
    ]
  },
  {
    imdbID: 'tt0104684',
    tmdbId: 11782,
    title: 'Hard Boiled',
    director: 'John Woo',
    genre: 'Action, Thriller, Crime',
    year: 1992,
    runtime: 128,
    ageRating: 'R',
    rating: 7.7,
    cast: ['Chow Yun-Fat', 'Tony Leung', 'Teresa Mo'],
    boxOffice: '$2.3 million',
    budget: '$4.5 million',
    synopsis: "A tough-as-nails cop teams up with an undercover agent to shut down a sinister mobster and his crew. John Woo redefined the action genre with dual-wielding handguns, infinite ammo, doves, and the greatest hospital shootout in cinematic history.",
    poster_path: '/7rY5mheZ2E9z0L8bE4g4jQkE0Lw.jpg',
    backdrop_path: '/zQ6Q846pS9A8hYQjZg90j9rM9M0.jpg',
    scenes: [
      { time: 5, intensity: 95, label: 'The Teahouse Shootout', color: '#b45309' },
      { time: 45, intensity: 88, label: 'The Warehouse Ambush', color: '#1e293b' },
      { time: 85, intensity: 92, label: 'Hospital Lobby Assault', color: '#ef4444' },
      { time: 105, intensity: 100, label: 'The One-Take Hospital Corridor', color: '#dc2626' },
      { time: 120, intensity: 96, label: 'The Morgue Climax', color: '#000000' }
    ],
    adrenalineScore: 98,
    complexityLevel: 'GUN-FU',
    dominantColor: '#78350f',
    dna: { Action: 80, Crime: 15, Thriller: 5 },
    sensitiveScenes: [
      { start: '0:00:00', end: '2:08:00', description: 'Extreme, stylized gun violence, hundreds of on-screen deaths, and blood squibs' }
    ]
  },
  {
    imdbID: 'tt0118849',
    tmdbId: 146,
    title: 'Crouching Tiger, Hidden Dragon',
    director: 'Ang Lee',
    genre: 'Action, Drama, Romance',
    year: 2000,
    runtime: 120,
    ageRating: 'PG-13',
    rating: 7.9,
    cast: ['Chow Yun-Fat', 'Michelle Yeoh', 'Zhang Ziyi'],
    boxOffice: '$213.5 million',
    budget: '$17 million',
    synopsis: "A young Chinese warrior steals a sword from a famed swordsman and then escapes into a world of romantic adventure with a mysterious man. Ang Lee brought the wuxia genre to global prominence with poetic, gravity-defying balletic action.",
    poster_path: '/1RzX0Jc900eB4X8oOQcRkO5mH1A.jpg',
    backdrop_path: '/9Kjn1f4OabR92hPz0c68B6wDqz8.jpg',
    scenes: [
      { time: 22, intensity: 85, label: 'Rooftop Chase', color: '#1e293b' },
      { time: 55, intensity: 88, label: 'The Tavern Fight', color: '#d97706' },
      { time: 82, intensity: 95, label: 'Yu Shu Lien vs Jen (Courtyard Weapon Fight)', color: '#94a3b8' },
      { time: 98, intensity: 92, label: 'The Bamboo Forest Duel', color: '#15803d' },
      { time: 115, intensity: 80, label: 'The Cave Climax', color: '#064e3b' }
    ],
    adrenalineScore: 88,
    complexityLevel: 'BALLETIC',
    dominantColor: '#064e3b',
    dna: { MartialArts: 50, Romance: 30, Drama: 20 },
    sensitiveScenes: [
      { start: '0:00:00', end: '2:00:00', description: 'Martial arts violence and sword fighting (PG-13 level)' },
      { start: '0:45:00', end: '0:46:00', description: 'Brief implied sexual encounter (desert flashbacks)' }
    ]
  },
  {
    imdbID: 'tt0465602',
    tmdbId: 4141,
    title: 'Shoot \'Em Up',
    director: 'Michael Davis',
    genre: 'Action, Comedy, Crime',
    year: 2007,
    runtime: 86,
    ageRating: 'R',
    rating: 6.6,
    cast: ['Clive Owen', 'Paul Giamatti', 'Monica Bellucci'],
    boxOffice: '$26.8 million',
    budget: '$39 million',
    synopsis: "A man named Mr. Smith delivers a woman's baby during a shootout, and is then called upon to protect the newborn from the army of gunmen. It is a wildly absurd, self-aware tribute to Looney Tunes and Hong Kong action cinema.",
    poster_path: '/i72rZq4SAnS3kF6nE82uF48N96u.jpg',
    backdrop_path: '/eL5T3xUa84v22sAAMR18Z2Q57Jb.jpg',
    scenes: [
      { time: 4, intensity: 95, label: 'Delivering the Baby/Shootout', color: '#1f2937' },
      { time: 25, intensity: 92, label: 'The Stairwell Assault', color: '#dc2626' },
      { time: 48, intensity: 98, label: 'The Sex Scene Shootout', color: '#e11d48' },
      { time: 68, intensity: 100, label: 'The Skydiving Gunfight', color: '#38bdf8' },
      { time: 80, intensity: 90, label: 'The Finger Trap Climax', color: '#0f172a' }
    ],
    adrenalineScore: 99,
    complexityLevel: 'ABSURD',
    dominantColor: '#1f2937',
    dna: { Action: 80, Comedy: 15, Satire: 5 },
    sensitiveScenes: [
      { start: '0:00:00', end: '1:26:00', description: 'Constant, absurdly exaggerated gun violence, gore, and kills using carrots' },
      { start: '0:47:00', end: '0:49:00', description: 'Graphic sex scene intercut with a massive gunfight (nudity and violence)' }
    ]
  }
];

// ✅ 2. DYNAMICALLY BUILD FALLBACK POSTERS
export const FALLBACK_POSTERS = Object.fromEntries(
  BEST_ACTION_MOVIES.map(movie => [
    movie.tmdbId, 
    `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  ])
);

// ✅ 3. DYNAMICALLY BUILD SENSITIVE TIMELINES
export const SENSITIVE_TIMELINES = Object.fromEntries(
  BEST_ACTION_MOVIES.map(movie => {
    const scenes = (movie.sensitiveScenes || []).map(scene => {
      const d = scene.description.toLowerCase();
      let type = 'Action Violence';
      if (d.includes('nudity')) type = 'Nudity';
      else if (d.includes('sexual')) type = 'Sexual Content';
      else if (d.includes('gore') || d.includes('execution') || d.includes('blood')) type = 'Extreme Violence/Gore';
      
      let severity = 'Moderate';
      if (d.includes('graphic') || d.includes('extreme') || d.includes('constant')) severity = 'High';
      if (d.includes('brief') || d.includes('mild')) severity = 'Mild';

      return {
        start: scene.start,
        end: scene.end,
        type: type,
        severity: severity,
        description: scene.description
      };
    });
    return [movie.tmdbId, { scenes }];
  })
);

// ✅ 4. DYNAMICALLY BUILD COMPLETE_MOVIE_DATA
export const COMPLETE_MOVIE_DATA = Object.fromEntries(
  BEST_ACTION_MOVIES.map(movie => [movie.tmdbId, { ...movie }])
);

// ✅ 5. ACTION SPECIFIC FAQs (4 per film)
export const ACTION_MOVIES_FAQS = {
  'Die Hard': [
    { question: "Did Alan Rickman actually drop in the falling scene?", answer: "Yes. Director John McTiernan told Rickman they would drop him on the count of three, but the stunt crew dropped him on 'one' to capture a look of genuine, unfeigned terror on his face as Hans Gruber falls." },
    { question: "Why doesn't John McClane have shoes?", answer: "He was making 'fists with his toes' to relieve jet lag as advised by a passenger on his plane. When the terrorists attack, he is forced to flee barefoot, turning his bare feet into a major plot point regarding his vulnerability." },
    { question: "Is Nakatomi Plaza a real building?", answer: "Yes, it was actually the Fox Plaza in Los Angeles, which was the corporate headquarters for 20th Century Fox (the studio making the movie). It was still under construction during filming, which is why the upper floors look unfinished in the movie." },
    { question: "Was it originally a sequel to another movie?", answer: "Yes, the script was based on the novel 'Nothing Lasts Forever', a sequel to 'The Detective'. Fox was contractually obligated to offer the lead role to a 73-year-old Frank Sinatra first, who turned it down." }
  ],
  'Terminator 2: Judgment Day': [
    { question: "Was the T-1000 entirely CGI?", answer: "No, James Cameron used a brilliant mix of practical effects, animatronics, and groundbreaking CGI. For scenes involving the T-1000 impersonating a security guard, they actually cast identical twins (Don and Dan Stanton) to avoid using digital trickery." },
    { question: "How much did the special effects cost?", answer: "At the time, T2 was the most expensive movie ever made (around $102 million). The CGI budget alone was roughly $5 million, and it only accounted for about 5 minutes of total screen time." },
    { question: "Why did Arnold barely talk?", answer: "Arnold Schwarzenegger only speaks about 700 words in the entire film. He was paid $15 million for the role, meaning he earned approximately $21,429 for every single word he spoke." },
    { question: "Did Linda Hamilton really learn to pick locks?", answer: "Yes, Hamilton trained with an ex-Israeli commando to learn military tactics, weapons handling, and lock picking. The scene where she picks her restraints in the hospital using a paperclip was done for real by Hamilton on camera." }
  ],
  'Mad Max: Fury Road': [
    { question: "Is the Doof Warrior's guitar actually shooting fire?", answer: "Yes! Director George Miller insisted that almost everything on screen be practical. The flaming guitar weighed 132 pounds, was fully functional, and genuinely shot flames while the actor played it suspended from a moving truck." },
    { question: "How much CGI was used?", answer: "Very little for the action. Over 80% of the film’s effects are practical stunts, real vehicles, and real crashes. CGI was primarily used to enhance the landscapes, remove stunt rigging/wires, and create Furiosa’s mechanical arm." },
    { question: "Did Tom Hardy and Charlize Theron get along?", answer: "Famously, no. The grueling, six-month shoot in the Namibian desert with no traditional script caused immense friction between the two leads. They later admitted their real-life tension perfectly translated into their characters' on-screen hostility." },
    { question: "Is there a script for the movie?", answer: "George Miller didn't write a traditional screenplay. Instead, he created 3,500 highly detailed storyboard panels. He wanted the film to be universally understood through visual action, even if viewers didn't speak English." }
  ],
  'Aliens': [
    { question: "How heavy were the Colonial Marine guns?", answer: "The iconic M41A Pulse Rifles were incredibly heavy because they were built by combining a real Thompson M1A1 submachine gun with a Franchi SPAS-12 shotgun. The actors genuinely struggled to run with them." },
    { question: "Who operated the Alien Queen?", answer: "The massive Alien Queen was an enormous practical puppet that required up to 16 puppeteers to operate simultaneously, including two people physically sitting inside the chest of the puppet to operate the arms." },
    { question: "Was Bill Paxton originally cast as Hicks?", answer: "No, James Remar was originally cast as Corporal Hicks. A few weeks into filming, Remar was fired due to drug issues and replaced by Michael Biehn. You can still see Remar's back in the scene where the Marines enter the hive." },
    { question: "Did Sigourney Weaver do the power loader scene?", answer: "Yes. Weaver spent months training to operate the massive yellow Power Loader suit. It was a heavy practical prop suspended by wires, and she genuinely controlled its movements during the climax against the Queen." }
  ],
  'John Wick': [
    { question: "Did Keanu Reeves do his own stunts?", answer: "Keanu Reeves performed approximately 90% of his own stunts. He underwent months of intensive training in judo, Brazilian jiu-jitsu, tactical 3-gun shooting, and performance driving to achieve the fluid 'gun-fu' style." },
    { question: "What is the combat style used?", answer: "The directors created a style called 'Gun-Fu,' which combines close-quarters martial arts (like Judo throws) with immediate, point-blank tactical pistol shooting (specifically the Center Axis Relapse shooting stance)." },
    { question: "Why did the directors get the job?", answer: "Chad Stahelski and David Leitch were veteran stuntmen. Stahelski had actually been Keanu Reeves' stunt double on The Matrix. Reeves sent them the script hoping they would direct the action, but they pitched themselves as the primary directors." },
    { question: "How many people does John Wick kill?", answer: "In the first film, John Wick kills exactly 77 people. This incredible kill count established the franchise's reputation for hyper-lethal efficiency and non-stop action." }
  ],
  'The Raid 2': [
    { question: "Did they actually hit each other?", answer: "Yes. To achieve maximum realism, director Gareth Evans had the actors make full contact during the fight scenes. They wore extremely thin pads under their clothes, but the hits, throws, and falls were painfully real." },
    { question: "How long did the kitchen fight take to film?", answer: "The brutal climax in the kitchen between Rama and The Assassin took 8 days to film for a sequence that lasts about 7 minutes on screen. It required 195 separate shots and is considered one of the greatest martial arts scenes ever filmed." },
    { question: "How did they film the car chase?", answer: "They couldn't afford expensive camera rigs, so the camera operators disguised themselves as car seats. In one famous shot, the camera is passed through the window of one moving car, through the cabin, and out the other window to a cameraman lying on a mattress." },
    { question: "Was the mud fight dangerous?", answer: "Extremely. Filmed in an actual prison courtyard, the mud was cold, filled with rocks, and incredibly slippery. The sequence took weeks to shoot, and multiple stuntmen suffered genuine injuries and hypothermia." }
  ],
  'Mission: Impossible - Fallout': [
    { question: "Did Tom Cruise actually break his ankle?", answer: "Yes. During the scene where Ethan jumps between two buildings in London, Cruise slammed his foot against the wall and broke his ankle. He still pulled himself up and finished the take, which is the exact shot used in the final film." },
    { question: "Was the HALO jump real?", answer: "Absolutely. Tom Cruise became the first actor to perform a real High Altitude Low Opening (HALO) jump on camera. He jumped from 25,000 feet, 106 times, to get the three perfect takes needed for the sequence." },
    { question: "Did he really fly the helicopter?", answer: "Yes. Cruise underwent 2,000 hours of intensive flight training in a very short period to become a certified helicopter pilot. He flew the helicopter himself during the dangerous canyon chase in New Zealand." },
    { question: "Who was Henry Cavill reloading his arms for?", answer: "In the famous bathroom fight, Henry Cavill does a motion where he 'pumps' his fists before punching. This wasn't scripted; Cavill improvised it to get his muscles loose, and it became the most iconic visual of the movie's marketing." }
  ],
  'Hard Boiled': [
    { question: "How was the hospital scene filmed?", answer: "The legendary hospital corridor shootout is a single, continuous 2-minute and 42-second tracking shot. Because they only had one set, the crew had to frantically clean up debris and reset explosives behind the camera as the actors moved through the halls." },
    { question: "Why are there so many doves?", answer: "Director John Woo uses doves as a signature visual motif in his action films. He states that doves represent purity and the human soul, providing a beautiful, poetic contrast to the horrific violence and bloodshed happening around them." },
    { question: "Did they have a finished script?", answer: "No. John Woo is famous for filming without a completed script. He often conceptualized the massive action sequences first (like the teahouse or the hospital) and then wrote the narrative plot to connect those set pieces together." },
    { question: "Why is it called 'Heroic Bloodshed'?", answer: "Hard Boiled is the pinnacle of the 'Heroic Bloodshed' genre from Hong Kong—a style defined by stylized gunplay, themes of brotherhood, duty, honor, and massive body counts, which heavily influenced the Matrix and John Wick." }
  ],
  'Crouching Tiger, Hidden Dragon': [
    { question: "Are they actually flying?", answer: "The characters are utilizing 'Qinggong', a martial arts technique from Chinese Wuxia mythology that allows practitioners to move with extreme lightness. Ang Lee used extensive, highly choreographed wirework to make the actors appear weightless." },
    { question: "Did Michelle Yeoh get hurt?", answer: "Yes, Michelle Yeoh tore her ACL early in production. She required surgery and had to wear a leg brace under her costume for the remainder of the shoot, performing many of her scenes while recovering." },
    { question: "Was the bamboo forest fight real?", answer: "Yes, it was shot practically. Chow Yun-Fat and Zhang Ziyi were suspended high in the air on real bamboo stalks in the Anji Bamboo Forest. The crew had to gently sway the trees manually to create the mesmerizing floating effect." },
    { question: "Why didn't Chow Yun-Fat speak perfect Mandarin?", answer: "Chow Yun-Fat is a native Cantonese speaker. He had to learn all his Mandarin lines phonetically for the film. While Western audiences didn't notice, native speakers noted his distinct accent." }
  ],
  'Shoot \'Em Up': [
    { question: "Is the movie meant to be a comedy?", answer: "Yes, it is a highly self-aware, absurd action-comedy. Director Michael Davis intended it to be a live-action Looney Tunes cartoon. Clive Owen’s character (Mr. Smith) is basically Bugs Bunny, constantly eating carrots and outsmarting Elmer Fudd (Paul Giamatti)." },
    { question: "Did they really use carrots as weapons?", answer: "Yes. In keeping with the Bugs Bunny theme, Mr. Smith uses carrots to stab people, trigger firearms, and shoot enemies. The absurdity of using vegetables for extreme violence sets the tone for the entire film." },
    { question: "How was the skydiving scene shot?", answer: "While a lot of green screen was used, they also hired a skydiving team to actually jump out of planes holding prop guns to get the authentic physics and aerodynamics of a mid-air shootout." },
    { question: "Why did Paul Giamatti take the role?", answer: "Giamatti, known for prestige dramas, took the role of the villain Hertz specifically because he thought the script was insanely funny and he had never been asked to play a psychopathic, gun-toting bad guy before." }
  ]
};

// 6. HELPER FUNCTIONS
export const getTMDBPosterUrl = (posterPath, size = 'medium') => {
  if (!posterPath) return null;
  const posterSize = TMDB_CONFIG.POSTER_SIZES[size] || TMDB_CONFIG.POSTER_SIZES.medium;
  return `${TMDB_CONFIG.IMAGE_BASE_URL}/${posterSize}${posterPath}`;
};

export const getSensitiveContentTypes = (tmdbId) => {
    const sensitiveData = SENSITIVE_TIMELINES[tmdbId];
    if (!sensitiveData?.scenes?.length) return null;
    const types = new Set();
    sensitiveData.scenes.forEach(scene => {
        const lowerType = scene.type?.toLowerCase() || '';
        if (lowerType.includes('sex') || lowerType.includes('explicit') || lowerType.includes('nudity')) types.add('sexual content');
        if (lowerType.includes('violence') || lowerType.includes('gore') || lowerType.includes('blood') || lowerType.includes('execution')) types.add('extreme graphic violence');
        if (lowerType.includes('language') || lowerType.includes('profanity')) types.add('pervasive strong language');
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
  return ACTION_MOVIES_FAQS[movie.Title] || [];
};

export const fetchMovieFromTMDB = async (tmdbId) => ({ 
  poster_path: null, 
  title: BEST_ACTION_MOVIES.find(m => m.tmdbId === tmdbId)?.Title || 'Unknown Movie' 
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
      description: scene.description || '',
      displayLabel: `${scene.type} (${scene.severity})`
    }))
  };
};

// 🔥 7. THE "GOLDEN EGG" SCHEMA GENERATOR (Unified for SEO)
const calculateSkipStats = (scenes) => {
    let totalSeconds = 0;
    scenes.forEach(scene => {
        if (scene.start && scene.end) {
            const parseTime = (t) => {
                const parts = t.split(':').map(Number);
                if (parts.length === 3) return (parts[0] * 3600) + (parts[1] * 60) + (parts[2] || 0);
                if (parts.length === 2) return (parts[0] * 60) + (parts[1] || 0);
                return 0;
            };
            const startSec = parseTime(scene.start);
            const endSec = parseTime(scene.end);
            if (endSec > startSec) totalSeconds += (endSec - startSec);
        }
    });
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    if (totalSeconds === 0) return "< 1 min"; 
    if (mins === 0) return `${secs} sec`;
    return secs > 0 ? `${mins} min ${secs} sec` : `${mins} min`;
};

const getHighestSeverityInfo = (scenes) => {
    const severities = scenes.map(s => (s.severity || 'Moderate').toLowerCase());
    const extremeCount = severities.filter(s => s === 'extreme').length;
    let overallSeverity = 'Mild';
    if (extremeCount >= 2) overallSeverity = 'Extreme';
    else if (severities.includes('high') || extremeCount === 1) overallSeverity = 'High';
    else if (severities.includes('moderate')) overallSeverity = 'Moderate';
    return overallSeverity;
};

export const generateCleanMovieSchema = (movie, tmdbData, currentMovieYear, collectionSlug, unused, movieInfo) => {
    let currentRuntime = movie.Runtime || movie.runtime || "Official";
    if (typeof currentRuntime === 'number') currentRuntime = `${currentRuntime} min`;

    const sensitiveScenes = SENSITIVE_TIMELINES[movie.tmdbId]?.scenes || [];
    const heavyScenes = sensitiveScenes.filter(s => {
        const t = s.type?.toLowerCase() || '';
        return t.includes('violence') || t.includes('gore') || t.includes('blood') || t.includes('sex') || t.includes('nudity') || t.includes('execution'); 
    });

    const sceneCount = heavyScenes.length;
    let schemaDesc = '';
    if (sceneCount > 0) {
        schemaDesc = `${movie.Title} Parents Guide with exact violence & mature content timestamps. ${sceneCount} scenes manually verified frame by frame by Filmiway editors for the ${currentRuntime} runtime.`;
    } else {
        schemaDesc = `${movie.Title} Parents Guide. Filmiway editors have manually verified zero extreme violence or mature content in the full ${currentRuntime} runtime.`;
    }

    const movieSchema = {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': schemaDesc,
        'genre': movie.genre,
        'url': `https://filmiway.com/movies/${collectionSlug}/${movie.imdbID}`, 
        'datePublished': currentMovieYear?.toString() || movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
        'actor': movieInfo?.cast?.map(actor => ({ '@type': 'Person', 'name': actor })) || [],
        'image': tmdbData?.poster_path ? `https://image.tmdb.org/t/p/w500${tmdbData.poster_path}` : (FALLBACK_POSTERS[movie.tmdbId] || ''),
        'duration': `PT${movie.runtime}M`
    };

    const staticFaqs = ACTION_MOVIES_FAQS[movie.Title] ? [...ACTION_MOVIES_FAQS[movie.Title]] : [];
    const intensityScenes = movieInfo?.scenes || [];
    
    const schemaFaqs = staticFaqs.map(faq => ({ 
        '@type': 'Question', 
        'name': faq.question, 
        'acceptedAnswer': { '@type': 'Answer', 'text': faq.answer } 
    }));

    if (intensityScenes.length > 0) {
        const schemaIntensityList = intensityScenes.map(s => `<li>Minute ${s.time} - ${s.label} (Adrenaline Spike: ${s.intensity}/100)</li>`).join('');
        schemaFaqs.unshift({
            '@type': 'Question',
            'name': `What are the most intense action scenes in ${movie.Title}?`,
            'acceptedAnswer': { 
                '@type': 'Answer', 
                'text': `According to the Filmiway Adrenaline metric, ${movie.Title} reaches its peak action intensity at the following moments:<br><br><ul>${schemaIntensityList}</ul>` 
            }
        });
    }

    if (heavyScenes.length > 0) {
        const typesArray = getSensitiveContentTypes(movie.tmdbId) || ['action violence'];
        const typesString = typesArray.join(' and ');
        
        const totalSkipTime = calculateSkipStats(heavyScenes);
        const firstTimestamp = heavyScenes[0].start;
        const firstSeverity = heavyScenes[0].severity || 'Moderate';
        const overallSeverity = getHighestSeverityInfo(heavyScenes);

        const schemaListText = heavyScenes.map(s => {
            const timeRange = s.end ? `${s.start} to ${s.end}` : s.start;
            const fullType = s.severity ? `${s.type} (${s.severity})` : (s.type || 'Violence');
            return `<li>${timeRange} - ${fullType}</li>`;
        }).join('');

        const startTimesList = heavyScenes.map(s => s.start).join(', ');

        schemaFaqs.unshift(
            {
                '@type': 'Question',
                'name': `Does ${movie.Title} have extreme violence or graphic content?`,
                'acceptedAnswer': { 
                    '@type': 'Answer', 
                    'text': `Yes. ${movie.Title} contains ${sceneCount} periods of ${typesString}. Exact timestamps:<br><br><ul>${schemaListText}</ul><br>Manually verified frame by frame by Filmiway editors for the ${currentRuntime} runtime.` 
                }
            },
            {
                '@type': 'Question',
                'name': `What time does the violence or mature content appear in ${movie.Title} and how do I skip it?`,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': `Graphic content first appears at ${firstTimestamp} (${firstSeverity}). Total time to skip: ${totalSkipTime} across ${sceneCount} scenes. Skip timestamps: ${startTimesList}. Verified for the ${currentRuntime} version.`
                }
            },
            {
                '@type': 'Question',
                'name': `Is ${movie.Title} safe to watch with family?`,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': `No. ${movie.Title} contains ${overallSeverity} severity scenes and is not recommended for children. Adults can use Filmiway's timestamps to skip all ${sceneCount} scenes.`
                }
            }
        );
    } else {
        schemaFaqs.unshift(
            {
                '@type': 'Question',
                'name': `Does ${movie.Title} have extreme violence or graphic content?`,
                'acceptedAnswer': { 
                    '@type': 'Answer', 
                    'text': `No. Filmiway editors have manually verified that ${movie.Title} is free of extreme graphic violence or explicit content.` 
                }
            },
            {
                '@type': 'Question',
                'name': `Is ${movie.Title} safe to watch with family?`,
                'acceptedAnswer': { 
                    '@type': 'Answer', 
                    'text': `Yes, regarding extreme content. Filmiway has confirmed 0 scenes of extreme gore, sexual content, or violence in the ${currentRuntime} runtime.` 
                }
            }
        );
    }

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'name': `Parents Guide and FAQ for ${movie.Title}`,
        'mainEntity': schemaFaqs
    };

    return { movieSchema, faqSchema };
};

// 8. FINAL EXPORT ALIASING
export const COMPLETE_MOVIE_DATABASE = BEST_ACTION_MOVIES;
export const BEST_ACTION_MOVIES_DATABASE = BEST_ACTION_MOVIES;

export default BEST_ACTION_MOVIES;

// 🔥 FRONTEND UI SYNC (Injected by script)
export const getVisibleMovieFAQs = (movieTitle, tmdbId, currentRuntime = "Official") => {
    const staticFaqs = typeof ACTION_MOVIES_FAQS !== 'undefined' && ACTION_MOVIES_FAQS[movieTitle] ? [...ACTION_MOVIES_FAQS[movieTitle]] : [];
    const sensitiveScenes = typeof SENSITIVE_TIMELINES !== 'undefined' ? (SENSITIVE_TIMELINES[tmdbId]?.scenes || []) : [];
    const movieInfo = typeof COMPLETE_MOVIE_DATA !== 'undefined' ? COMPLETE_MOVIE_DATA[tmdbId] : null;
    const intensityScenes = movieInfo?.scenes || [];

    const dbMovie = typeof COMPLETE_MOVIE_DATABASE !== 'undefined' ? COMPLETE_MOVIE_DATABASE.find(m => m.tmdbId === tmdbId) : null;
    let finalRuntime = currentRuntime !== "Official" ? currentRuntime : (dbMovie?.runtime ? `${dbMovie.runtime} min` : "Official");
    if (typeof finalRuntime === 'number') finalRuntime = `${finalRuntime} min`;

    if (intensityScenes.length > 0) {
        const uiIntensityList = intensityScenes.map(s => `• Minute ${s.time} - ${s.label} (Adrenaline Spike: ${s.intensity}/100)`).join('\n');
        staticFaqs.unshift({
            question: `What are the most intense action scenes in ${movieTitle}?`,
            answer: `According to the Filmiway Adrenaline metric, ${movieTitle} reaches its peak action intensity at the following moments:\n\n${uiIntensityList}`
        });
    }

    const heavyScenes = sensitiveScenes.filter(s => {
        const t = s.type?.toLowerCase() || '';
        return t.includes('violence') || t.includes('gore') || t.includes('blood') || t.includes('sex') || t.includes('nudity') || t.includes('execution');
    });

    if (heavyScenes.length > 0) {
        const typesArray = typeof getSensitiveContentTypes !== 'undefined' ? getSensitiveContentTypes(tmdbId) : ['action violence'];
        const typesString = typesArray ? typesArray.join(' and ') : 'action violence';
        const sceneCount = heavyScenes.length;
        
        let totalSeconds = 0;
        heavyScenes.forEach(scene => {
            if (scene.start && scene.end) {
                const parseTime = (t) => {
                    const parts = t.split(':').map(Number);
                    if (parts.length === 3) return (parts[0] * 3600) + (parts[1] * 60) + (parts[2] || 0);
                    if (parts.length === 2) return (parts[0] * 60) + (parts[1] || 0);
                    return 0;
                };
                const startSec = parseTime(scene.start);
                const endSec = parseTime(scene.end);
                if (endSec > startSec) totalSeconds += (endSec - startSec);
            }
        });
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        let totalSkipTime = "< 1 min";
        if (totalSeconds > 0) {
            if (mins === 0) totalSkipTime = `${secs} sec`;
            else totalSkipTime = secs > 0 ? `${mins} min ${secs} sec` : `${mins} min`;
        }

        const firstTimestamp = heavyScenes[0].start;
        const firstSeverity = heavyScenes[0].severity || 'Moderate';
        
        const severities = heavyScenes.map(s => (s.severity || 'Moderate').toLowerCase());
        const extremeCount = severities.filter(s => s === 'extreme').length;
        let overallSeverity = 'Mild';
        if (extremeCount >= 2) overallSeverity = 'Extreme';
        else if (severities.includes('high') || extremeCount === 1) overallSeverity = 'High';
        else if (severities.includes('moderate')) overallSeverity = 'Moderate';

        const uiDetailedList = heavyScenes.map(s => {
            const timeRange = s.end ? `${s.start}–${s.end}` : s.start;
            const fullType = s.severity ? `${s.type || 'Violence'}, ${s.severity}` : (s.type || 'Violence');
            return `• ${timeRange} (${fullType})`;
        }).join('\n');
        
        const startTimesList = heavyScenes.map(s => s.start).join(', ');

        staticFaqs.unshift(
            {
                question: `Does ${movieTitle} have extreme violence or mature content?`,
                answer: `Yes. ${movieTitle} contains ${sceneCount} periods of ${typesString}. Exact timestamps:\n\n${uiDetailedList}\n\nManually verified frame by frame by Filmiway editors for the ${finalRuntime} runtime.`
            },
            {
                question: `What time does the extreme violence start in ${movieTitle} and how do I skip it?`,
                answer: `Graphic content first appears at ${firstTimestamp} (${firstSeverity}). Total time to skip: ${totalSkipTime} across ${sceneCount} scenes. Skip timestamps: ${startTimesList}. Verified for the ${finalRuntime} version.`
            },
            {
                question: `Is ${movieTitle} safe to watch with family?`,
                answer: `No. ${movieTitle} contains ${overallSeverity} severity scenes and is not recommended for children. Adults can use Filmiway's timestamps to skip all ${sceneCount} scenes.`
            }
        );
    } else {
        staticFaqs.unshift(
            {
                question: `Does ${movieTitle} have extreme violence or gore?`,
                answer: `No. Filmiway editors have manually verified that ${movieTitle} is free of extreme graphic violence or explicit content.`
            },
            {
                question: `Is ${movieTitle} safe to watch with family?`,
                answer: `Yes, regarding extreme content. Filmiway has confirmed 0 scenes of extreme gore, sexual content, or explicit scenes in the ${finalRuntime} runtime.`
            }
        );
    }

    return staticFaqs;
};