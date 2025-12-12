// utils/se7enMovieData.js - FINAL VERSION WITH 5-POINT INTENSITY GRAPHS

export const TMDB_CONFIG = {
  API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
  BASE_URL: 'https://api.themoviedb.org/3',
  IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
  POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
  { tmdbId: 1949, imdbID: 'tt0443706', Title: 'Zodiac', year: 2007, genre: 'Crime Thriller', runtime: 157, rank: 1 },
  { tmdbId: 11423, imdbID: 'tt0353969', Title: 'Memories of Murder', year: 2003, genre: 'Crime Drama', runtime: 132, rank: 2 },
  { tmdbId: 146233, imdbID: 'tt1392214', Title: 'Prisoners', year: 2013, genre: 'Crime Thriller', runtime: 153, rank: 3 },
  { tmdbId: 274, imdbID: 'tt0102926', Title: 'The Silence of the Lambs', year: 1991, genre: 'Psychological Horror', runtime: 118, rank: 4 },
  { tmdbId: 65754, imdbID: 'tt1568346', Title: 'The Girl with the Dragon Tattoo', year: 2011, genre: 'Mystery Thriller', runtime: 158, rank: 5 },
  { tmdbId: 12589, imdbID: 'tt1190539', Title: 'The Chaser', year: 2008, genre: 'Action Thriller', runtime: 125, rank: 6 },
  { tmdbId: 414906, imdbID: 'tt1877830', Title: 'The Batman', year: 2022, genre: 'Neo-Noir', runtime: 176, rank: 7 },
  { tmdbId: 36095, imdbID: 'tt0123948', Title: 'Cure', year: 1997, genre: 'Psychological Horror', runtime: 111, rank: 8 },
  { tmdbId: 8740, imdbID: 'tt0096163', Title: 'The Vanishing', year: 1988, genre: 'Thriller', runtime: 107, rank: 9 },
  { tmdbId: 322, imdbID: 'tt0327056', Title: 'Mystic River', year: 2003, genre: 'Crime Drama', runtime: 138, rank: 10 }
];

export const SENSITIVE_TIMELINES = {
  1949: { scenes: [
    { start: '00:05:00', end: '00:07:00', type: 'Violence', severity: 'High', description: 'Lovers Lane shooting' },
    { start: '01:10:00', end: '01:15:00', type: 'Violence', severity: 'Extreme', description: 'Lake Berryessa stabbing scene' }
  ]},
  11423: { scenes: [
    { start: '00:02:00', end: '00:04:00', type: 'Gore', severity: 'Medium', description: 'Body found in drain' },
    { start: '01:45:00', end: '01:50:00', type: 'Violence', severity: 'High', description: 'Torture interrogation' }
  ]},
  146233: { scenes: [
    { start: '01:15:00', end: '01:20:00', type: 'Violence', severity: 'Extreme', description: 'Hammer torture scene' },
    { start: '02:10:00', end: '02:15:00', type: 'Tension', severity: 'High', description: 'Dungeon rescue' }
  ]},
  274: { scenes: [
    { start: '00:50:00', end: '00:55:00', type: 'Gore', severity: 'High', description: 'Autopsy scene' },
    { start: '01:30:00', end: '01:35:00', type: 'Violence', severity: 'Extreme', description: 'Escape scene' }
  ]},
  65754: { scenes: [
    { start: '01:05:00', end: '01:10:00', type: 'Sexual Violence', severity: 'Extreme', description: 'Assault scene' },
    { start: '01:15:00', end: '01:20:00', type: 'Revenge', severity: 'Extreme', description: 'Revenge scene' }
  ]},
  12589: { scenes: [
    { start: '00:45:00', end: '00:50:00', type: 'Violence', severity: 'High', description: 'Hammer attack' }
  ]},
  414906: { scenes: [
    { start: '00:05:00', end: '00:10:00', type: 'Violence', severity: 'Medium', description: 'Subway fight' }
  ]},
  36095: { scenes: [
    { start: '00:20:00', end: '00:25:00', type: 'Gore', severity: 'Medium', description: 'X-mark carving' }
  ]},
  8740: { scenes: [
    { start: '01:40:00', end: '01:45:00', type: 'Psychological', severity: 'Extreme', description: 'Buried alive ending' }
  ]},
  322: { scenes: [
    { start: '00:10:00', end: '00:15:00', type: 'Trauma', severity: 'High', description: 'Child abduction implied' }
  ]}
};

export const FALLBACK_POSTERS = {
  1949: 'https://image.tmdb.org/t/p/w500/qZ8jV3b8g1.jpg',
  11423: 'https://image.tmdb.org/t/p/w500/6yIsi26BNO99144Q9.jpg',
  146233: 'https://image.tmdb.org/t/p/w500/tuRcCnSj.jpg',
  274: 'https://image.tmdb.org/t/p/w500/rplLJ2hPcOQ.jpg',
  65754: 'https://image.tmdb.org/t/p/w500/mq14.jpg',
  12589: 'https://image.tmdb.org/t/p/w500/7I5b.jpg',
  414906: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpo.jpg',
  36095: 'https://image.tmdb.org/t/p/w500/py0f.jpg',
  8740: 'https://image.tmdb.org/t/p/w500/2j4h.jpg',
  322: 'https://image.tmdb.org/t/p/w500/3p6g.jpg'
};

const createMovieData = (data) => data;

// ✅ EXACTLY 5 SCENE POINTS FOR EACH MOVIE
export const COMPLETE_MOVIE_DATA = {
  1949: createMovieData({
    tmdbId: 1949,
    imdbID: 'tt0443706',
    Title: 'Zodiac',
    se7enDNAScore: 98,
    complexityLevel: "EXTREME",
    dominantColor: "#1e293b",
    rating: 7.7,
    criticsScore: 90,
    audienceScore: 89,
    director: "David Fincher",
    cast: ["Jake Gyllenhaal", "Mark Ruffalo", "Robert Downey Jr."],
    boxOffice: "84.7 million",
    budget: "65 million",
    dna: { "Mystery": 80, "Thriller": 20 },
    scenes: [
      { time: 10, intensity: 40, label: "July 4th", color: "#1e293b" },
      { time: 40, intensity: 65, label: "Letters", color: "#334155" },
      { time: 80, intensity: 85, label: "Basement", color: "#475569" },
      { time: 120, intensity: 90, label: "Obsession", color: "#64748b" },
      { time: 155, intensity: 75, label: "Hardware", color: "#94a3b8" }
    ],
    synopsis: "In the late 1960s/early 1970s, a San Francisco cartoonist becomes an amateur detective obsessed with tracking down the Zodiac Killer, an unidentified individual who terrorizes Northern California with a killing spree. As the killer taunts police with encrypted letters and threats, the investigation drags on for decades, consuming the lives of everyone involved. David Fincher's masterpiece isn't just about a killer; it's about the rot of obsession and the terrifying reality that some puzzles are never meant to be solved.",
    themes: ["Obsession", "Unresolved Justice", "Media Frenzy", "Cold Cases"],
    awards: "Palme d'Or Nominee, Saturn Award Winner"
  }),
  11423: createMovieData({
    tmdbId: 11423,
    imdbID: 'tt0353969',
    Title: 'Memories of Murder',
    se7enDNAScore: 96,
    complexityLevel: "HIGH",
    dominantColor: "#3f3f46",
    rating: 8.1,
    criticsScore: 95,
    audienceScore: 93,
    director: "Bong Joon-ho",
    cast: ["Song Kang-ho", "Kim Sang-kyung"],
    boxOffice: "26 million",
    budget: "2.8 million",
    dna: { "Crime": 70, "Drama": 30 },
    scenes: [
      { time: 10, intensity: 30, label: "Discovery", color: "#3f3f46" },
      { time: 35, intensity: 55, label: "Investigation", color: "#52525b" },
      { time: 70, intensity: 75, label: "Suspects", color: "#71717a" },
      { time: 100, intensity: 85, label: "Torture", color: "#a1a1aa" },
      { time: 130, intensity: 95, label: "Final Look", color: "#d4d4d8" }
    ],
    synopsis: "In a small Korean province in 1986, two detectives—one instinctual, one analytical—struggle with the case of multiple young women being found raped and murdered in drainage ditches. As they sink deeper into the investigation, their methods become more desperate and their morals more compromised. Bong Joon-ho's breakthrough film is a haunting look at incompetence and the crushing weight of failure, ending with one of the most chilling final shots in cinema history.",
    themes: ["Incompetence", "Desperation", "The Unknown", "Rural Noir"],
    awards: "Best Film (Chunsa Film Art Awards)"
  }),
  146233: createMovieData({
    tmdbId: 146233,
    imdbID: 'tt1392214',
    Title: 'Prisoners',
    se7enDNAScore: 95,
    complexityLevel: "HIGH",
    dominantColor: "#374151",
    rating: 8.1,
    criticsScore: 81,
    audienceScore: 87,
    director: "Denis Villeneuve",
    cast: ["Hugh Jackman", "Jake Gyllenhaal"],
    boxOffice: "122 million",
    budget: "46 million",
    dna: { "Thriller": 60, "Drama": 40 },
    scenes: [
      { time: 15, intensity: 50, label: "Missing", color: "#374151" },
      { time: 45, intensity: 70, label: "Torture", color: "#4b5563" },
      { time: 85, intensity: 85, label: "Maze", color: "#6b7280" },
      { time: 120, intensity: 95, label: "Revelation", color: "#9ca3af" },
      { time: 150, intensity: 90, label: "Whistle", color: "#d1d5db" }
    ],
    synopsis: "When Keller Dover's six-year-old daughter and her friend go missing on Thanksgiving, the only lead is a dilapidated RV. When the police release the driver due to lack of evidence, Dover decides to take matters into his own hands. What follows is a brutal descent into moral darkness as a desperate father tortures a suspect while a detective races to solve the maze-like mystery. Villeneuve asks: how far would you go to protect your family, and would you lose your soul in the process?",
    themes: ["Vigilantism", "Faith", "Moral Decay", "Parental Grief"],
    awards: "Academy Award Nomination (Cinematography)"
  }),
  274: createMovieData({
    tmdbId: 274,
    imdbID: 'tt0102926',
    Title: 'The Silence of the Lambs',
    se7enDNAScore: 94,
    complexityLevel: "HIGH",
    dominantColor: "#57534e",
    rating: 8.6,
    criticsScore: 95,
    audienceScore: 95,
    director: "Jonathan Demme",
    cast: ["Jodie Foster", "Anthony Hopkins"],
    boxOffice: "272.7 million",
    budget: "19 million",
    dna: { "Horror": 50, "Thriller": 50 },
    scenes: [
      { time: 10, intensity: 35, label: "First Meeting", color: "#57534e" },
      { time: 35, intensity: 60, label: "Quid Pro Quo", color: "#78716c" },
      { time: 65, intensity: 80, label: "Autopsy", color: "#a8a29e" },
      { time: 90, intensity: 90, label: "Escape", color: "#d6d3d1" },
      { time: 115, intensity: 95, label: "Basement", color: "#e7e5e4" }
    ],
    synopsis: "A young F.B.I. cadet, Clarice Starling, must receive the help of an incarcerated and manipulative cannibal killer, Dr. Hannibal Lecter, to help catch another serial killer known only as 'Buffalo Bill'. As Starling trades personal secrets for clues, she enters a dark psychological game where the line between hunter and monster blurs. A masterclass in tension that remains the only horror film to win the Academy Award for Best Picture.",
    themes: ["Psychology", "Transformation", "Fear", "Manipulation"],
    awards: "Academy Award Winner (Big Five)"
  }),
  65754: createMovieData({
    tmdbId: 65754,
    imdbID: 'tt1568346',
    Title: 'The Girl with the Dragon Tattoo',
    se7enDNAScore: 92,
    complexityLevel: "HIGH",
    dominantColor: "#0f172a",
    rating: 7.8,
    criticsScore: 86,
    audienceScore: 86,
    director: "David Fincher",
    cast: ["Daniel Craig", "Rooney Mara"],
    boxOffice: "232.6 million",
    budget: "90 million",
    dna: { "Mystery": 60, "Thriller": 40 },
    scenes: [
      { time: 15, intensity: 40, label: "Investigation", color: "#0f172a" },
      { time: 50, intensity: 70, label: "Assault", color: "#1e293b" },
      { time: 95, intensity: 85, label: "Revenge", color: "#334155" },
      { time: 130, intensity: 90, label: "Discovery", color: "#475569" },
      { time: 155, intensity: 75, label: "Resolution", color: "#64748b" }
    ],
    synopsis: "Disgraced journalist Mikael Blomkvist is hired by a wealthy industrialist to solve the 40-year-old disappearance of his niece. He is aided by Lisbeth Salander, a brilliant but socially awkward computer hacker with a traumatic past. Together, they uncover a sprawling conspiracy of corruption, Nazism, and sexual abuse hidden beneath the pristine surface of Swedish society. Fincher's cold, calculated direction matches the brutal nature of the crimes.",
    themes: ["Corruption", "Abuse", "Secrets", "Revenge"],
    awards: "Academy Award Winner (Editing)"
  }),
  12589: createMovieData({
    tmdbId: 12589,
    imdbID: 'tt1190539',
    Title: 'The Chaser',
    se7enDNAScore: 90,
    complexityLevel: "EXTREME",
    dominantColor: "#7f1d1d",
    rating: 7.8,
    criticsScore: 82,
    audienceScore: 90,
    director: "Na Hong-jin",
    cast: ["Kim Yoon-seok", "Ha Jung-woo"],
    boxOffice: "35 million",
    budget: "Unknown",
    dna: { "Action": 50, "Thriller": 50 },
    scenes: [
      { time: 10, intensity: 30, label: "Missing", color: "#7f1d1d" },
      { time: 30, intensity: 60, label: "Captured", color: "#991b1b" },
      { time: 65, intensity: 85, label: "Hammer", color: "#b91c1c" },
      { time: 95, intensity: 95, label: "Chase", color: "#dc2626" },
      { time: 120, intensity: 80, label: "Failure", color: "#ef4444" }
    ],
    synopsis: "A former policeman who is now a pimp becomes involved in a breathless race against time when his girls start disappearing. He realizes they are being sold to a psychopathic customer who is killing them. Unlike typical thrillers, the killer is caught early, but the lack of evidence forces the police to release him unless the pimp can find the latest victim before she dies. A relentless, exhausting nightmare of bureaucracy and brutality.",
    themes: ["Time Limit", "Corruption", "Helplessness", "Redemption"],
    awards: "Grand Bell Award Winner"
  }),
  414906: createMovieData({
    tmdbId: 414906,
    imdbID: 'tt1877830',
    Title: 'The Batman',
    se7enDNAScore: 89,
    complexityLevel: "HIGH",
    dominantColor: "#c2410c",
    rating: 7.8,
    criticsScore: 85,
    audienceScore: 87,
    director: "Matt Reeves",
    cast: ["Robert Pattinson", "Zoë Kravitz"],
    boxOffice: "772 million",
    budget: "200 million",
    dna: { "Action": 40, "Noir": 60 },
    scenes: [
      { time: 15, intensity: 45, label: "Murder", color: "#c2410c" },
      { time: 55, intensity: 60, label: "Riddles", color: "#ea580c" },
      { time: 100, intensity: 75, label: "Chase", color: "#f97316" },
      { time: 145, intensity: 90, label: "Flooding", color: "#fb923c" },
      { time: 175, intensity: 85, label: "Arkham", color: "#fdba74" }
    ],
    synopsis: "When a sadistic serial killer known as the Riddler begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement. Drawing heavily from 'Se7en' and 'Zodiac', this noir-drenched detective story presents a Gotham that is perpetually raining, decaying, and hopeless. Batman isn't a superhero here; he's a detective walking through a city that wants to drown him.",
    themes: ["Vengeance", "Corruption", "Hope", "Fear"],
    awards: "Academy Award Nomination (Sound)"
  }),
  36095: createMovieData({
    tmdbId: 36095,
    imdbID: 'tt0123948',
    Title: 'Cure',
    se7enDNAScore: 88,
    complexityLevel: "EXTREME",
    dominantColor: "#171717",
    rating: 7.5,
    criticsScore: 93,
    audienceScore: 82,
    director: "Kiyoshi Kurosawa",
    cast: ["Kōji Yakusho", "Masato Hagiwara"],
    boxOffice: "Unknown",
    budget: "Unknown",
    dna: { "Horror": 60, "Mystery": 40 },
    scenes: [
      { time: 10, intensity: 35, label: "Murder", color: "#171717" },
      { time: 30, intensity: 55, label: "X-Marks", color: "#262626" },
      { time: 60, intensity: 75, label: "Hypnosis", color: "#404040" },
      { time: 85, intensity: 90, label: "Contagion", color: "#525252" },
      { time: 108, intensity: 95, label: "Ending", color: "#737373" }
    ],
    synopsis: "A detective investigates a series of gruesome murders committed by people who have no recollection of what they've done. The only link is a mysterious drifter who seems to hypnotize people through conversation. 'Cure' is a terrifying exploration of how easily the human mind can be broken and how evil can be contagious like a virus. It is the spiritual ancestor to 'Se7en's' philosophy of rot.",
    themes: ["Hypnosis", "Identity", "Contagion", "Psychology"],
    awards: "Tokyo International Film Festival Winner"
  }),
  8740: createMovieData({
    tmdbId: 8740,
    imdbID: 'tt0096163',
    Title: 'The Vanishing',
    se7enDNAScore: 87,
    complexityLevel: "HIGH",
    dominantColor: "#ca8a04",
    rating: 7.7,
    criticsScore: 98,
    audienceScore: 90,
    director: "George Sluizer",
    cast: ["Bernard-Pierre Donnadieu", "Gene Bervoets"],
    boxOffice: "Unknown",
    budget: "Unknown",
    dna: { "Thriller": 80, "Horror": 20 },
    scenes: [
      { time: 5, intensity: 50, label: "Vanishing", color: "#ca8a04" },
      { time: 30, intensity: 60, label: "Search", color: "#d97706" },
      { time: 60, intensity: 70, label: "Obsession", color: "#f59e0b" },
      { time: 85, intensity: 85, label: "Offer", color: "#fbbf24" },
      { time: 105, intensity: 100, label: "Buried", color: "#fde047" }
    ],
    synopsis: "Rex Hofman and Saskia Wagter are on holiday in France when Saskia disappears at a petrol station. Rex spends years searching, obsessively putting up posters. The kidnapper, a mild-mannered chemistry teacher, eventually contacts Rex, offering to reveal what happened—but only if Rex experiences it himself. A study in the banality of evil that features one of the most terrifying endings in film history.",
    themes: ["Obsession", "Fate", "Curiosity", "The Unknown"],
    awards: "Golden Calf Winner"
  }),
  322: createMovieData({
    tmdbId: 322,
    imdbID: 'tt0327056',
    Title: 'Mystic River',
    se7enDNAScore: 86,
    complexityLevel: "HIGH",
    dominantColor: "#1c1917",
    rating: 7.9,
    criticsScore: 89,
    audienceScore: 89,
    director: "Clint Eastwood",
    cast: ["Sean Penn", "Tim Robbins", "Kevin Bacon"],
    boxOffice: "156.6 million",
    budget: "30 million",
    dna: { "Drama": 60, "Crime": 40 },
    scenes: [
      { time: 10, intensity: 40, label: "Kidnapping", color: "#1c1917" },
      { time: 35, intensity: 70, label: "Murder", color: "#292524" },
      { time: 75, intensity: 85, label: "Interrogation", color: "#44403c" },
      { time: 110, intensity: 95, label: "Confrontation", color: "#78716c" },
      { time: 135, intensity: 80, label: "Parade", color: "#a8a29e" }
    ],
    synopsis: "The lives of three men who were childhood friends are shattered when one of them has a family tragedy. As a detective investigates the murder of his friend's daughter, old wounds from a childhood trauma are ripped open. 'Mystic River' is a Greek tragedy set in Boston, exploring how a single moment of violence ripples through decades, destroying families and poisoning souls.",
    themes: ["Trauma", "Friendship", "The Past", "Grief"],
    awards: "Academy Award Winner (Actor, Supporting Actor)"
  })
};

export const STRATEGIC_QUOTES = {
  1949: "I need to know who he is.",
  11423: "Do you see it? The face of the devil?",
  146233: "Pray for the best, prepare for the worst.",
  274: "Quid pro quo, Clarice.",
  65754: "I want you to help me catch a killer of women.",
  12589: "Hey, did you sell her?",
  414906: "I am the shadows.",
  36095: "Who are you?",
  8740: "I just want to know what happened.",
  322: "We bury our sins here, Dave. We wash them clean."
};

export const CINEMATIC_COLORS = {
  Drama: "#dc2626",
  Adventure: "#059669",
  Thriller: "#0f172a",
  Action: "#7c2d12",
  SciFi: "#dc2626",
  Romance: "#be185d"
};

export const RATING_OPTIONS = [
  { value: 1, label: "A Disappointment", color: "#dc2626", symbol: "💔", bgColor: "bg-red-900/30", description: "Torn ticket - Total disappointment" },
  { value: 2, label: "Flawed", color: "#ea580c", symbol: "⚠️", bgColor: "bg-orange-900/30", description: "Faded ticket - Has major flaws" },
  { value: 3, label: "Worth the Ride", color: "#16a34a", symbol: "🎟️", bgColor: "bg-green-900/30", description: "Clean ticket - Solid entertainment" },
  { value: 4, label: "Exceptional", color: "#eab308", symbol: "🏆", bgColor: "bg-yellow-900/30", description: "Golden ticket - Cinematic masterpiece" }
];

export const SE7EN_MOVIE_FAQS = {
  'Zodiac': [
    { question: 'Did they catch the Zodiac?', answer: 'The case officially remains open, though Arthur Leigh Allen was the prime suspect.' },
    { question: 'Is the basement scene real?', answer: 'It is based on a real report by Robert Graysmith, though dramatized for tension.' },
    { question: 'Why is Zodiac considered similar to Se7en?', answer: 'Both are directed by David Fincher and feature obsessive hunts for a killer who taunts police.' },
    { question: 'Is the movie historically accurate?', answer: 'Yes, it is considered one of the most historically accurate crime films ever made, with Fincher verifying every police report.' }
  ],
  'Memories of Murder': [
    { question: 'Is Memories of Murder based on a true story?', answer: 'Yes, it is based on the Hwaseong serial murders, Korea\'s first confirmed serial killer case.' },
    { question: 'Did they ever catch the real killer?', answer: 'Yes, in 2019 (years after the movie), DNA evidence identified Lee Choon-jae as the killer.' },
    { question: 'What does the ending mean?', answer: 'The detective looks directly at the camera to "see" the killer, who Bong Joon-ho believed would be watching the movie.' },
    { question: 'Why is it ranked #2?', answer: 'It perfectly captures the "justice denied" and "incompetence" themes that make Se7en so terrifying.' }
  ],
  'Prisoners': [
    { question: 'Does Loki find Keller at the end?', answer: 'The faint whistle implies he hears him, leaving the ending hopeful but ambiguous.' },
    { question: 'What is the maze symbolism?', answer: 'The maze represents the psychological trap the characters are in, unable to escape their own obsession and grief.' },
    { question: 'Is Prisoners a horror movie?', answer: 'It is a psychological thriller, but its themes of torture and abduction border on horror.' },
    { question: 'Who is the real villain?', answer: 'The "war on God" waged by the Jones family makes them the antagonists, driven by their own loss.' }
  ],
  'The Silence of the Lambs': [
    { question: 'Is Hannibal Lecter the main villain?', answer: 'No, Buffalo Bill is the antagonist. Lecter is an anti-hero who assists Starling.' },
    { question: 'Did Anthony Hopkins blink?', answer: 'Hopkins famously chose not to blink during his monologues to make Lecter appear more reptilian.' },
    { question: 'Why is it like Se7en?', answer: 'It shares the dark, procedural tone and the "descent into hell" narrative structure.' },
    { question: 'Is Buffalo Bill based on a real killer?', answer: 'He is a composite of Ed Gein, Ted Bundy, and Gary Heidnik.' }
  ],
  'The Girl with the Dragon Tattoo': [
    { question: 'Is this a remake?', answer: 'It is the second adaptation of the book, following the 2009 Swedish film, but Fincher considers it a fresh interpretation.' },
    { question: 'Why is the opening so graphic?', answer: 'The opening credits establish the themes of oil, blood, and cyber-punk darkness that permeate the film.' },
    { question: 'Is there a sequel?', answer: 'Fincher planned sequels, but they were stalled. A soft reboot was made later, but not with this cast.' },
    { question: 'How does it relate to Se7en?', answer: 'It features a partnership tracking a killer who uses biblical/religious justifications for murders.' }
  ],
  'The Chaser': [
    { question: 'Is The Chaser based on a true story?', answer: 'Yes, it is loosely based on the serial killer Yoo Young-chul.' },
    { question: 'Why is the killer caught so early?', answer: 'The tension comes from the "ticking clock" of finding the victim alive, not finding the killer\'s identity.' },
    { question: 'Is it very violent?', answer: 'Yes, it contains brutal scenes of violence involving hammers and chisels.' },
    { question: 'What is the main theme?', answer: 'The failure of the system to protect the vulnerable due to bureaucracy.' }
  ],
  'The Batman': [
    { question: 'Is The Batman a superhero movie?', answer: 'It plays more like a noir detective thriller than a traditional superhero action film.' },
    { question: 'Why is it on this list?', answer: 'Matt Reeves explicitly cited Se7en as a major influence, seen in the rain, the journals, and the crime scenes.' },
    { question: 'Who is the Riddler based on?', answer: 'This version of the Riddler is modeled after the Zodiac Killer.' },
    { question: 'Is the Joker in this movie?', answer: 'He appears briefly in a deleted scene and the end, played by Barry Keoghan.' }
  ],
  'Cure': [
    { question: 'What is the "Cure"?', answer: 'The title is ambiguous; it could refer to death being a "cure" for the pain of life.' },
    { question: 'Is the drifter supernatural?', answer: 'It is left ambiguous whether he uses hypnosis or supernatural influence.' },
    { question: 'Why is it scary?', answer: 'It uses atmosphere and dread rather than jump scares, creating a lingering feeling of unease.' },
    { question: 'Did this inspire Se7en?', answer: 'While released after Se7en, it shares the same nihilistic DNA and explores similar themes of contagion.' }
  ],
  'The Vanishing': [
    { question: 'Which version should I watch?', answer: 'Watch the original 1988 Dutch version (Spoorloos), NOT the 1993 Hollywood remake.' },
    { question: 'Why is the ending famous?', answer: 'It is considered one of the most horrifying and uncompromising endings in cinema history.' },
    { question: 'Is it a true story?', answer: 'It is based on a novella, "The Golden Egg", not a specific real event.' },
    { question: 'What is the "Golden Egg"?', answer: 'It is a metaphor for the protagonist\'s claustrophobic nightmare of being trapped forever.' }
  ],
  'Mystic River': [
    { question: 'Is Mystic River a murder mystery?', answer: 'Yes, but it is primarily a character study about how trauma destroys lives.' },
    { question: 'Who is the killer?', answer: 'The reveal is tragic and accidental, emphasizing the senselessness of the violence.' },
    { question: 'Why is the ending controversial?', answer: 'It shows life moving on despite the tragedy, with justice remaining elusive.' },
    { question: 'How does it fit the Se7en theme?', answer: 'It shares the oppressive, dark atmosphere and the theme of the past destroying the present.' }
  ]
};

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
    const lowerType = scene.type.toLowerCase();
    if (lowerType.includes('sex')) types.add('intimate scenes');
    if (lowerType.includes('nudity')) types.add('nudity');
    if (lowerType.includes('violence')) types.add('violence');
  });
  return Array.from(types);
};

export const generateFAQData = (movie) => {
  return SE7EN_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
  const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
  const posterUrl = FALLBACK_POSTERS[movie.tmdbId];
  return {
    "@context": "https://schema.org",
    "@type": "Movie",
    "name": movie.Title,
    "description": movieInfo?.synopsis || `${movie.Title} - A compelling crime thriller.`,
    "genre": movie.genre,
    "datePublished": movie.year.toString(),
    "director": {
      "@type": "Person",
      "name": movieInfo?.director || "Acclaimed Director"
    },
    "actor": movieInfo?.cast?.map(actor => ({
      "@type": "Person",
      "name": actor
    })) || [],
    "duration": `PT${movie.runtime}M`,
    "image": posterUrl,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": movieInfo?.rating || 7.0,
      "bestRating": 10,
      "worstRating": 1,
      "ratingCount": movieInfo?.audienceScore || 100
    }
  };
};

export const generateFAQSchema = (faqs) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

export const fetchMovieFromTMDB = async (tmdbId) => {
  return {
    poster_path: null,
    title: COMPLETE_MOVIE_DATABASE.find(m => m.tmdbId === tmdbId)?.Title || 'Unknown Movie'
  };
};

export const fetchWatchProviders = async (tmdbId, region = 'US') => {
  return null; 
};

export const formatSensitiveTimeline = (tmdbId) => {
  const raw = SENSITIVE_TIMELINES[tmdbId];
  if (!raw || !raw.scenes || raw.scenes.length === 0) return null;
  
  return {
    scenes: raw.scenes.map(scene => ({
      start: scene.start,
      end: scene.end,
      type: scene.type,
      description: scene.description
    }))
  };
};
