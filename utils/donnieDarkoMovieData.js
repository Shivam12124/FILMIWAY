// utils/donnieDarkoMovieData.js - MOVIES LIKE DONNIE DARKO COLLECTION 🌀

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { tmdbId: 1954, imdbID: 'tt0289879', Title: 'The Butterfly Effect', year: 2004, genre: 'Sci-Fi', runtime: 113, rank: 1 },
    { tmdbId: 63, imdbID: 'tt0114746', Title: '12 Monkeys', year: 1995, genre: 'Sci-Fi', runtime: 129, rank: 2 },
    { tmdbId: 9667, imdbID: 'tt0366627', Title: 'The Jacket', year: 2005, genre: 'Thriller', runtime: 103, rank: 3 },
    { tmdbId: 1902, imdbID: 'tt0125659', Title: 'Open Your Eyes', year: 1997, genre: 'Sci-Fi', runtime: 119, rank: 4 },
    { tmdbId: 220289, imdbID: 'tt2866360', Title: 'Coherence', year: 2013, genre: 'Sci-Fi', runtime: 89, rank: 5 },
    { tmdbId: 2291, imdbID: 'tt0099871', Title: "Jacob's Ladder", year: 1990, genre: 'Horror', runtime: 113, rank: 6 },
    { tmdbId: 2666, imdbID: 'tt0118929', Title: 'Dark City', year: 1998, genre: 'Sci-Fi', runtime: 100, rank: 7 },
    { tmdbId: 1018, imdbID: 'tt0166924', Title: 'Mulholland Drive', year: 2001, genre: 'Mystery', runtime: 147, rank: 8 },
    { tmdbId: 38, imdbID: 'tt0338013', Title: 'Eternal Sunshine of the Spotless Mind', year: 2004, genre: 'Sci-Fi', runtime: 108, rank: 9 },
    { tmdbId: 181886, imdbID: 'tt2316411', Title: 'Enemy', year: 2013, genre: 'Thriller', runtime: 91, rank: 10 }
];

const timeToSeconds = (timeStr) => {
    const parts = timeStr.split(':').map(Number);
    if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
    if (parts.length === 2) return parts[0] * 60 + parts[1];
    return 0;
};

export const SENSITIVE_TIMELINES = {
    1954: { scenes: [{ start: '0:15:20', end: '0:16:45', type: 'Nudity', severity: 'Moderate', description: 'Female topless scene' }, { start: '0:42:10', end: '0:43:30', type: 'Sex scene', severity: 'Strong' }, { start: '1:18:35', end: '1:19:50', type: 'Implied sex', severity: 'Moderate' }] },
    63: { scenes: [{ start: '1:22:15', end: '1:22:45', type: 'Partial nudity', severity: 'Mild', description: 'Brief scene' }] },
    9667: { scenes: [{ start: '0:28:40', end: '0:30:15', type: 'Sex scene', severity: 'Strong' }, { start: '1:12:20', end: '1:13:10', type: 'Nudity', severity: 'Moderate' }] },
    1902: { scenes: [{ start: '0:35:15', end: '0:37:40', type: 'Sex scene', severity: 'Strong', description: 'Extended scene' }, { start: '1:05:30', end: '1:06:20', type: 'Nudity', severity: 'Moderate' }] },
    220289: { scenes: [] },
    2291: { scenes: [{ start: '0:42:30', end: '0:43:15', type: 'Sexual content', severity: 'Moderate' }, { start: '1:15:45', end: '1:16:30', type: 'Disturbing imagery', severity: 'Strong' }] },
    2666: { scenes: [{ start: '0:52:10', end: '0:53:45', type: 'Implied nudity', severity: 'Mild' }] },
       1018: { 
scenes: [
            { start: "1:19:38", end: "1:20:02", type: "Kissing", severity: "Mild" },
            { start: "1:38:45", end: "1:42:18", type: "Nudity", severity: "High" },
            { start: "2:01:27", end: "2:02:59", type: "Nudity", severity: "High" },
            { start: "2:04:36", end: "2:05:03", type: "Kissing", severity: "Mild" },
            { start: "2:15:50", end: "2:15:58", type: "Kissing", severity: "Mild" }
        ]
    },
    38: { scenes: [{ start: '0:42:30', end: '0:43:20', type: 'Partial nudity', severity: 'Mild' }, { start: '1:15:10', end: '1:15:45', type: 'Implied sex', severity: 'Mild' }] },
    186522: { scenes: [{ start: '0:45:20', end: '0:47:35', type: 'Sex scene', severity: 'Strong', description: 'Extended explicit scene' }, { start: '1:18:50', end: '1:20:10', type: 'Nudity', severity: 'Moderate' }] }
};

export const FALLBACK_POSTERS = {
    1954: 'https://image.tmdb.org/t/p/original/5HLRmZUZ3u7IvZYCuNJfwaDdWyP.jpg',
    63: 'https://image.tmdb.org/t/p/original/6Sj9wDu3YugthXsU0Vry5XFAZGg.jpg',
    9667: 'https://image.tmdb.org/t/p/original/hJREhAkTHIlShVXdv5JzTgqQqZG.jpg',
    1902: 'https://image.tmdb.org/t/p/original/aoT0FKTbPEJmR6SRSSpOsLJcS4U.jpg',
    220289: 'https://image.tmdb.org/t/p/original/pKtZCCIMAAWYxYYTLCmk4GDjIv0.jpg',
    2291: 'https://image.tmdb.org/t/p/original/1NhVGYBPSY6Zp7jYUL2ttdKJYAU.jpg',
    2666: 'https://image.tmdb.org/t/p/original/4W9jzJJj70vlVxqWUYQ1E50Igj3.jpg',
    1018: 'https://image.tmdb.org/t/p/original/8D0B9Agc4lSVILdGt69S72YnMOZ.jpg',
    38: 'https://image.tmdb.org/t/p/original/5MwkWH9tYHv3mV9OdYTMR5qreec.jpg',
    186522: 'https://image.tmdb.org/t/p/original/yVOqjygLnXbBNgzM3eJlPQcREYZ.jpg'
};

const createMovieData = (data) => data;

export const COMPLETE_MOVIE_DATA = {
    1954: createMovieData({
        mindbendIndex: 95, complexityLevel: 'EXTREME', dominantColor: '#7c2d12',
        rating: 7.6, criticsScore: 33, audienceScore: 81,
        director: 'Eric Bress, J. Mackye Gruber', cast: ['Ashton Kutcher', 'Amy Smart', 'Melora Walters'],
        boxOffice: '$96.1 million', budget: '$13 million',
        dna: { 'Sci-Fi': 50, Thriller: 30, Drama: 20 },
        scenes: [
            { time: 15, intensity: 40, label: 'Childhood', color: '#7c2d12' },
            { time: 35, intensity: 65, label: 'First Jump', color: '#92400e' },
            { time: 65, intensity: 80, label: 'Alterations', color: '#b45309' },
            { time: 90, intensity: 95, label: 'Unraveling', color: '#d97706' },
            { time: 110, intensity: 85, label: 'Final Choice', color: '#f59e0b' }
        ],
        synopsis: 'Evan Treborn discovers he can travel back in time by reading his childhood journals. Each attempt to fix traumatic memories creates catastrophic ripple effects, destroying lives in new and horrifying ways. As timelines fracture and reality becomes unstable, Evan realizes every change makes things worse. This cult classic explores the terrifying consequences of tampering with fate, where good intentions create nightmares and the past refuses to stay buried.',
        themes: ['Butterfly Effect', 'Time Travel', 'Determinism', 'Trauma', 'Causality'],
        awards: ['Teen Choice Awards']
    }),

    63: createMovieData({
        mindbendIndex: 92, complexityLevel: 'EXTREME', dominantColor: '#422006',
        rating: 8.0, criticsScore: 88, audienceScore: 90,
        director: 'Terry Gilliam', cast: ['Bruce Willis', 'Brad Pitt', 'Madeleine Stowe'],
        boxOffice: '$168.8 million', budget: '$29.5 million',
        dna: { 'Sci-Fi': 50, Thriller: 30, Mystery: 20 },
        scenes: [
            { time: 20, intensity: 55, label: 'Time Prison', color: '#422006' },
            { time: 50, intensity: 70, label: 'Asylum', color: '#78350f' },
            { time: 85, intensity: 80, label: 'Army of 12', color: '#92400e' },
            { time: 110, intensity: 90, label: 'Loop Revealed', color: '#b45309' },
            { time: 125, intensity: 95, label: 'Airport', color: '#d97706' }
        ],
        synopsis: 'In 2035, a deadly virus has wiped out most of humanity. Prisoner James Cole is sent back to 1996 to prevent the plague, but nobody believes his warnings about the future. As he encounters the mysterious Army of the 12 Monkeys and a brilliant psychiatrist who may hold the key, Cole begins questioning his own sanity. Gilliam\'s masterpiece weaves past, present, and future into an unsolvable paradox where memory, madness, and prophecy become indistinguishable.',
        themes: ['Time Loop', 'Insanity vs Truth', 'Predestination', 'Pandemic', 'Fixed Timeline'],
        awards: ['Academy Award Nominations', 'Golden Globe Winner']
    }),

    9667: createMovieData({
        mindbendIndex: 88, complexityLevel: 'HIGH', dominantColor: '#164e63',
        rating: 7.1, criticsScore: 44, audienceScore: 74,
        director: 'John Maybury', cast: ['Adrien Brody', 'Keira Knightley', 'Kris Kristofferson'],
        boxOffice: '$6.7 million', budget: '$29 million',
        dna: { Thriller: 50, 'Sci-Fi': 30, Drama: 20 },
        scenes: [
            { time: 10, intensity: 45, label: 'Gulf War', color: '#164e63' },
            { time: 30, intensity: 70, label: 'Asylum', color: '#0e7490' },
            { time: 55, intensity: 85, label: 'Jacket Torture', color: '#06b6d4' },
            { time: 75, intensity: 90, label: 'Future Visits', color: '#22d3ee' },
            { time: 100, intensity: 80, label: 'Truth', color: '#67e8f9' }
        ],
        synopsis: 'Gulf War veteran Jack Starks is wrongly committed to a mental institution where a sadistic doctor locks him in a morgue drawer wearing a straitjacket as \'therapy.\' During these sensory deprivation sessions, Jack\'s consciousness travels forward to 2007, where he meets a woman connected to his past and discovers his own impending death. Racing against time between two eras, he must solve the mystery of his fate before it\'s too late.',
        themes: ['Time Travel', 'Mental Illness', 'Altered States', 'Fate', 'Redemption'],
        awards: ['Independent Film Recognition']
    }),

    1902: createMovieData({
        mindbendIndex: 90, complexityLevel: 'EXTREME', dominantColor: '#831843',
        rating: 7.7, criticsScore: 84, audienceScore: 85,
        director: 'Alejandro Amenábar', cast: ['Eduardo Noriega', 'Penélope Cruz', 'Chete Lera'],
        boxOffice: '$7.2 million', budget: '$2.3 million',
        dna: { 'Sci-Fi': 50, Mystery: 30, Romance: 20 },
        scenes: [
            { time: 15, intensity: 40, label: 'Perfect Life', color: '#831843' },
            { time: 40, intensity: 65, label: 'Accident', color: '#9d174d' },
            { time: 70, intensity: 80, label: 'Reality Shifts', color: '#be185d' },
            { time: 95, intensity: 90, label: 'Revelation', color: '#db2777' },
            { time: 115, intensity: 95, label: 'Awakening', color: '#f472b6' }
        ],
        synopsis: 'César has everything—wealth, looks, and the woman of his dreams. After a disfiguring car accident, his perfect life becomes a nightmare where dreams and reality merge. Imprisoned and masked, César recounts his story to a psychiatrist, but the timeline fragments: did the accident happen? Is he dreaming? Is any of this real? Amenábar\'s Spanish masterpiece (later remade as Vanilla Sky) is a haunting puzzle where identity, memory, and consciousness collapse.',
        themes: ['Virtual Reality', 'Identity Crisis', 'Disfigurement', 'Dream Logic', 'Technology'],
        awards: ['Goya Awards', 'Berlin Film Festival']
    }),

    220289: createMovieData({
        mindbendIndex: 85, complexityLevel: 'HIGH', dominantColor: '#312e81',
        rating: 7.2, criticsScore: 88, audienceScore: 82,
        director: 'James Ward Byrkit', cast: ['Emily Baldoni', 'Maury Sterling', 'Nicholas Brendon'],
        boxOffice: '$102,617', budget: '$50,000',
        dna: { 'Sci-Fi': 60, Thriller: 25, Mystery: 15 },
        scenes: [
            { time: 10, intensity: 30, label: 'Dinner Party', color: '#312e81' },
            { time: 25, intensity: 55, label: 'Comet Passes', color: '#3730a3' },
            { time: 50, intensity: 75, label: 'Duplicates', color: '#4338ca' },
            { time: 70, intensity: 90, label: 'Multiverse', color: '#4f46e5' },
            { time: 85, intensity: 95, label: 'Choice', color: '#6366f1' }
        ],
        synopsis: 'Eight friends gather for dinner on the night a mysterious comet passes overhead. When the power goes out and strange things begin happening, they discover other versions of themselves exist in parallel realities—and not all of them are friendly. Shot guerrilla-style with a micro-budget, Coherence is a claustrophobic mind-bender where quantum mechanics tears friendships apart and every decision creates a new timeline. Who you were five minutes ago may not be who you are now.',
        themes: ['Parallel Universes', 'Quantum Physics', 'Identity', 'Paranoia', 'Choice'],
        awards: ['Fantastic Fest Awards', 'Cult Classic Recognition']
    }),

    2291: createMovieData({
        mindbendIndex: 93, complexityLevel: 'EXTREME', dominantColor: '#7c2d12',
        rating: 7.4, criticsScore: 62, audienceScore: 76,
        director: 'Adrian Lyne', cast: ['Tim Robbins', 'Elizabeth Peña', 'Danny Aiello'],
        boxOffice: '$26.1 million', budget: '$25 million',
        dna: { Horror: 50, Thriller: 30, Mystery: 20 },
        scenes: [
            { time: 15, intensity: 55, label: 'Vietnam', color: '#7c2d12' },
            { time: 40, intensity: 70, label: 'Hallucinations', color: '#92400e' },
            { time: 65, intensity: 85, label: 'Demons', color: '#b45309' },
            { time: 90, intensity: 95, label: 'Truth', color: '#d97706' },
            { time: 110, intensity: 75, label: 'Ascension', color: '#f59e0b' }
        ],
        synopsis: 'Vietnam veteran Jacob Singer is haunted by horrifying visions of demons and distorted reality. His dead son appears alive. His girlfriend transforms into a monster. The government may have experimented on his unit with a psychotropic drug. Or is Jacob already dead, experiencing his final moments stretched across eternity? Lyne\'s nightmarish masterpiece blurs life, death, and hell into an unforgettable descent where every answer raises darker questions. The ending will destroy you.',
        themes: ['Purgatory', 'PTSD', 'Government Conspiracy', 'Life After Death', 'Perception'],
        awards: ['Saturn Award Nomination', 'Cult Horror Classic']
    }),

    2666: createMovieData({
        mindbendIndex: 87, complexityLevel: 'HIGH', dominantColor: '#0f172a',
        rating: 7.6, criticsScore: 74, audienceScore: 77,
        director: 'Alex Proyas', cast: ['Rufus Sewell', 'Kiefer Sutherland', 'Jennifer Connelly'],
        boxOffice: '$27.2 million', budget: '$27 million',
        dna: { 'Sci-Fi': 50, Mystery: 30, Thriller: 20 },
        scenes: [
            { time: 10, intensity: 60, label: 'Awakening', color: '#0f172a' },
            { time: 30, intensity: 70, label: 'The Strangers', color: '#1e293b' },
            { time: 60, intensity: 80, label: 'Reality Shifts', color: '#334155' },
            { time: 85, intensity: 90, label: 'Shell Beach', color: '#475569' },
            { time: 98, intensity: 95, label: 'Truth', color: '#64748b' }
        ],
        synopsis: 'John Murdoch wakes with no memory in a city where it\'s always night and mysterious beings called Strangers reshape reality at midnight. Everyone\'s memories are implanted. The architecture transforms. Even his wife may not be real. As John discovers he shares the Strangers\' reality-warping powers, he races to find Shell Beach—a place that may not exist—and uncover the truth about this prison disguised as a city. Proyas\' neo-noir masterpiece is The Matrix before The Matrix.',
        themes: ['False Memories', 'Reality Control', 'Identity', 'Free Will', 'Simulation'],
        awards: ['Saturn Awards', 'Hugo Award Nomination']
    }),

    1018: createMovieData({
        mindbendIndex: 98, complexityLevel: 'MASTERPIECE', dominantColor: '#be185d',
        rating: 7.9, criticsScore: 84, audienceScore: 80,
        director: 'David Lynch', cast: ['Naomi Watts', 'Laura Harring', 'Justin Theroux'],
        boxOffice: '$20.1 million', budget: '$15 million',
        dna: { Mystery: 50, Thriller: 30, Drama: 20 },
        scenes: [
            { time: 20, intensity: 40, label: 'Hollywood Dreams', color: '#be185d' },
            { time: 60, intensity: 65, label: 'Mystery Woman', color: '#db2777' },
            { time: 100, intensity: 80, label: 'Club Silencio', color: '#ec4899' },
            { time: 125, intensity: 95, label: 'Reality Splinters', color: '#f472b6' },
            { time: 145, intensity: 100, label: 'Blue Box', color: '#f9a8d4' }
        ],
        synopsis: 'An aspiring actress arrives in Los Angeles and befriends an amnesiac woman hiding after a car accident. Together they investigate her identity, uncovering Hollywood\'s dark underbelly. Then, two-thirds through, reality fractures completely. Lynch\'s masterpiece has no single interpretation—it\'s a fever dream where failed ambitions, lesbian love, and fractured identities merge into haunting nightmare logic. After 20 years, fans still debate what actually happened. This is cinema as pure subconscious.',
        themes: ['Hollywood Nightmare', 'Identity Split', 'Failed Dreams', 'Obsession', 'Reality Collapse'],
        awards: ['Academy Award Nomination', 'Cannes Best Director']
    }),

    38: createMovieData({
        mindbendIndex: 83, complexityLevel: 'MEDIUM', dominantColor: '#0284c7',
        rating: 8.3, criticsScore: 89, audienceScore: 94,
        director: 'Michel Gondry', cast: ['Jim Carrey', 'Kate Winslet', 'Kirsten Dunst'],
        boxOffice: '$74.0 million', budget: '$20 million',
        dna: { Romance: 50, 'Sci-Fi': 30, Drama: 20 },
        scenes: [
            { time: 15, intensity: 45, label: 'Meet Cute', color: '#0284c7' },
            { time: 40, intensity: 65, label: 'Procedure Begins', color: '#0ea5e9' },
            { time: 70, intensity: 80, label: 'Memory Erasure', color: '#38bdf8' },
            { time: 95, intensity: 90, label: 'Fighting Back', color: '#7dd3fc' },
            { time: 105, intensity: 70, label: 'New Beginning', color: '#bae6fd' }
        ],
        synopsis: 'After a painful breakup, Joel discovers his ex-girlfriend Clementine erased him from her memory using experimental technology. Heartbroken, he undergoes the same procedure—but midway through, as memories dissolve, Joel realizes he wants to keep them. Gondry and Kaufman\'s masterpiece unfolds backwards through fragmenting memories, showing how even painful love shapes who we are. It\'s heartbreaking, surreal, and ultimately asks: would you rather forget love or keep the pain?',
        themes: ['Memory Erasure', 'Lost Love', 'Identity', 'Technology Ethics', 'Second Chances'],
        awards: ['Academy Award Winner (Screenplay)', 'BAFTA Winner']
    }),

    181886: createMovieData({
        mindbendIndex: 91, complexityLevel: 'EXTREME', dominantColor: '#854d0e',
        rating: 6.9, criticsScore: 71, audienceScore: 59,
        director: 'Denis Villeneuve', cast: ['Jake Gyllenhaal', 'Mélanie Laurent', 'Sarah Gadon'],
        boxOffice: '$3.4 million', budget: '$9 million',
        dna: { Thriller: 50, Mystery: 30, Psychological: 20 },
        scenes: [
            { time: 10, intensity: 40, label: 'Routine', color: '#854d0e' },
            { time: 30, intensity: 65, label: 'Discovery', color: '#a16207' },
            { time: 55, intensity: 80, label: 'Confrontation', color: '#ca8a04' },
            { time: 75, intensity: 90, label: 'Identity Crisis', color: '#eab308' },
            { time: 88, intensity: 95, label: 'Spider', color: '#facc15' }
        ],
        synopsis: 'Adam, a monotonous college professor, discovers his exact duplicate Anthony—same face, same body, different life. As the two meet, reality fractures: are they twins? Clones? The same person? Villeneuve\'s hypnotic nightmare, based on Saramago\'s novel, drowns in oppressive yellow hues and spider symbolism. The ending is one of cinema\'s most discussed WTF moments. This isn\'t a doppelgänger thriller—it\'s a descent into masculine identity crisis and control.',
        themes: ['Doppelgänger', 'Identity', 'Control', 'Subconscious', 'Totalitarianism'],
        awards: ['Canadian Screen Awards', 'Cult Recognition']
    })
};

export const STRATEGIC_QUOTES = {
    1954: 'You can\'t change who people are without destroying who they were',
    63: 'All I see are dead people',
    9667: 'You\'re gonna be dead in four days',
    1902: 'Open your eyes',
    220289: 'I\'m not the same person I was five minutes ago',
    2291: 'If you\'re frightened of dying, and you\'re holding on, you\'ll see devils tearing your life away',
    2666: 'When was the last time you remember doing something during the day?',
    1018: 'Silencio',
    38: 'Meet me in Montauk',
    186522: 'Chaos is order yet undeciphered'
};

export const CINEMATIC_COLORS = {
    'Sci-Fi': '#0f172a', Thriller: '#7c2d12', Drama: '#831843', Horror: '#7c2d12', Mystery: '#be185d', 
    Romance: '#0284c7', Psychological: '#854d0e'
};

export const RATING_OPTIONS = [
    { value: 1, label: 'Confused & Lost', color: '#dc2626', symbol: '🌀', bgColor: 'bg-red-900/30', description: 'Confusing mess' },
    { value: 2, label: 'Mind-Bending', color: '#ea580c', symbol: '🧠', bgColor: 'bg-orange-900/30', description: 'Intriguing but flawed' },
    { value: 3, label: 'Reality-Warping', color: '#16a34a', symbol: '⏰', bgColor: 'bg-green-900/30', description: 'Solid mind-bender' },
    { value: 4, label: 'Masterpiece', color: '#eab308', symbol: '🐇', bgColor: 'bg-yellow-900/30', description: 'Donnie Darko-level genius' }
];

export const DONNIE_DARKO_MOVIE_FAQS = {
    'The Butterfly Effect': [
        { question: 'What are the different endings of The Butterfly Effect?', answer: 'The theatrical ending shows Evan preventing his first meeting with Kayleigh, allowing her a better life. The director\'s cut has a darker ending where Evan travels to his birth and strangles himself with his umbilical cord. A third alternate ending shows Evan approaching Kayleigh years later. The director\'s cut ending is considered the darkest and most thematically consistent.' },
        { question: 'Is The Butterfly Effect based on a true story?', answer: 'No, but it\'s based on chaos theory\'s \'butterfly effect\' concept: small changes create massive consequences. The film explores determinism vs free will through time travel, asking if we can escape fate or if attempting to change the past only makes things worse.' },
        { question: 'Why was The Butterfly Effect critically panned but loved by audiences?', answer: 'Critics dismissed it as convoluted and overly dark (33% on Rotten Tomatoes), but audiences connected with its emotional core and high-concept premise (81% audience score). It became a cult classic for exploring trauma, guilt, and the impossibility of fixing the past.' }
    ],
    '12 Monkeys': [
        { question: 'Is 12 Monkeys a time loop movie?', answer: 'Yes, 12 Monkeys is a closed time loop (predestination paradox). James Cole doesn\'t prevent the plague—he inadvertently helps cause it. The boy witnessing the airport shooting becomes haunted by the memory, which we discover is Cole himself. He can\'t change the past because he\'s always been part of it.' },
        { question: 'What does the Army of the 12 Monkeys represent?', answer: 'The Army of the 12 Monkeys is a red herring. They\'re animal rights activists who release zoo animals but didn\'t create the virus. The actual plague comes from Dr. Peters, the virologist. The film uses this misdirection to explore how Cole (and viewers) chase false leads while the truth hides in plain sight.' },
        { question: 'Is Brad Pitt\'s character really insane?', answer: 'Jeffrey Goines appears insane but demonstrates remarkable clarity about corporate greed, environmental destruction, and societal collapse. His \'madness\' may be seeing truth others refuse to acknowledge. The film questions whether visionaries are prophets or lunatics—and if there\'s even a difference.' }
    ],
    'The Jacket': [
        { question: 'What is The Jacket actually about?', answer: 'The Jacket follows Jack Starks, a Gulf War vet wrongly committed to an asylum where experimental sensory deprivation therapy (being locked in a morgue drawer in a straitjacket) causes his consciousness to travel to 2007. There he meets Jackie, discovers he dies in 4 days, and must solve his own murder.' },
        { question: 'Is The Jacket supernatural or scientific?', answer: 'The film deliberately leaves this ambiguous. The jacket therapy could trigger: (1) Astral projection/supernatural travel, (2) Near-death experience visions, or (3) Psychological breakdown creating false memories. Like Donnie Darko, it blends time travel, mental illness, and mysticism without clear answers.' },
        { question: 'How does The Jacket compare to 12 Monkeys?', answer: 'Both involve institutionalized men experiencing non-linear time and questioning their sanity. 12 Monkeys leans dystopian sci-fi with broader scope, while The Jacket is intimate psychological horror focused on one man\'s race to prevent his death. The Jacket emphasizes personal redemption over societal collapse.' }
    ],
    'Open Your Eyes': [
        { question: 'Is Open Your Eyes the original Vanilla Sky?', answer: 'Yes, Alejandro Amenábar\'s Spanish film Open Your Eyes (1997) was remade by Cameron Crowe as Vanilla Sky (2001) starring Tom Cruise. The original is considered more emotionally raw and philosophically ambiguous, while the remake added Hollywood spectacle and romantic focus.' },
        { question: 'What is the twist ending of Open Your Eyes?', answer: 'César discovers his entire \'reality\' after the accident is a cryogenic dream. After being disfigured, he signed up for cryopreservation, and his subconscious created a fantasy where he\'s healed and loved—but it glitched into nightmare. He must choose: stay in the corrupted dream or wake to uncertain reality.' },
        { question: 'Is Open Your Eyes about virtual reality?', answer: 'It\'s about cryogenic dream simulation—a virtual life while his body is frozen. The company \'Life Extension\' offers perfect dreams during cryosleep, but César\'s guilt and trauma corrupt the program. The film questions if artificial perfection is worth living, or if flawed reality is more meaningful.' }
    ],
    'Coherence': [
        { question: 'What actually happened in Coherence?', answer: 'When the comet passes, it creates a quantum decoherence event spawning infinite parallel realities. The dinner party friends encounter other versions of themselves from different timelines. As they interact, they\'re randomly jumping between realities. The film\'s final twist reveals the protagonist deliberately chose to invade another reality\'s better life.' },
        { question: 'Was Coherence really made for only $50,000?', answer: 'Yes, director James Ward Byrkit shot it guerrilla-style in his house over 5 nights with no script—just scene outlines. Actors improvised dialogue not knowing the full plot. The micro-budget forced creative solutions (the blackout, single location) that enhanced the claustrophobic paranoia.' },
        { question: 'Do the characters know they\'re switching realities?', answer: 'Eventually yes. They discover numbered photos proving multiple realities exist. Em realizes she can choose which reality to stay in—leading to the moral crisis: is it okay to replace your alternate self for a better life? The film explores identity through quantum mechanics.' }
    ],
    "Jacob's Ladder": [
        { question: "What is the real meaning of Jacob's Ladder?", answer: "The film's final revelation shows Jacob died in Vietnam—the entire \'post-war\' life is his death experience. The demons are manifestations of his struggle to accept death. His son appearing as an angel represents letting go. The title references the biblical ladder to heaven, symbolizing Jacob\'s spiritual ascension from denial to acceptance." },
        { question: "Was there really an Army drug experiment?", answer: "The Ladder drug (BZ) references real CIA experiments (MKUltra) testing psychochemicals on soldiers. The film suggests Jacob\'s unit was dosed, causing them to kill each other. But this may be Jacob\'s dying brain creating meaning for senseless death. The ambiguity between conspiracy and hallucination defines the film." },
        { question: "Why is Jacob's Ladder considered a horror masterpiece?", answer: "It pioneered \'dying dream\' narrative structure later used in The Sixth Sense, Stay, and others. The grotesque practical effects (shaking head effect copied in Silent Hill) created uniquely terrifying visuals. It asks: what if hell isn\'t a place but the mind\'s refusal to accept death? Existential horror at its finest." }
    ],
    'Dark City': [
        { question: 'Is Dark City connected to The Matrix?', answer: 'No direct connection, but both released within a year (Dark City Feb 1998, Matrix March 1999) and explore simulated reality, memory implants, and one man discovering truth. Dark City emphasizes noir mystery and collective control, while Matrix focuses on action and individual rebellion. Many consider Dark City the more philosophical predecessor.' },
        { question: 'What are the Strangers in Dark City?', answer: 'The Strangers are dying aliens who kidnap humans to study what makes us individuals (the soul/consciousness). They reshape the city nightly and implant false memories trying to understand humanity. When John develops their reality-warping powers, it suggests individuality itself is humanity\'s superpower—something the collective hive-mind Strangers can never possess.' },
        { question: 'Does Shell Beach exist?', answer: 'No. Shell Beach is a implanted memory representing hope/escape—but the city is a space station, and outside is only void. When John breaks through the Shell Beach billboard, he finds a brick wall, then space. The film\'s ending shows John creating an actual Shell Beach through willpower, manifesting collective dreams into reality.' }
    ],
    'Mulholland Drive': [
        { question: 'What is Mulholland Drive actually about?', answer: 'No definitive answer exists (Lynch refuses to explain), but popular theory: Diane, a failed actress, hired a hitman to kill her ex-lover Camilla. The first 2/3 is Diane\'s dying fantasy where she\'s the successful \'Betty\' and Camilla is the amnesiac \'Rita\' needing rescue. The blue box shatters the fantasy, revealing grim reality: jealousy, failure, and murder.' },
        { question: 'What does the blue box represent?', answer: 'The blue box (and matching key) symbolizes Pandora\'s box/forbidden truth. Opening it collapses the fantasy, forcing Diane to face reality. Club Silencio earlier reveals \'it\'s all recorded\'—nothing is real, all illusion. The box is the moment denial becomes impossible, fantasy dies, and guilt/reality destroy her.' },
        { question: 'Why is Mulholland Drive considered a masterpiece?', answer: 'It\'s cinema as dream logic—operating on emotion, symbolism, and subconscious rather than plot. Lynch layers Hollywood critique, lesbian desire, identity crisis, and metaphysical horror into a film that reveals new meanings on each viewing. Roger Ebert called it the best film of the 2000s. 20+ years later, it still generates endless analysis.' }
    ],
    'Eternal Sunshine of the Spotless Mind': [
        { question: 'Is the ending of Eternal Sunshine happy or sad?', answer: 'Deliberately ambiguous. Joel and Clementine hear recordings revealing why they broke up—they\'ll likely repeat the same patterns. But choosing \'Okay\' to try again despite knowing they\'ll hurt each other suggests love\'s value transcends outcome. It\'s bittersweet hope: maybe doomed love is worth experiencing anyway.' },
        { question: 'How does the memory erasure work in Eternal Sunshine?', answer: 'Lacuna Inc. maps your memories of a person, then erases them during sleep using targeted brain stimulation. The film shows this visually as memories literally dissolving—locations crumbling, faces blurring. The sci-fi concept serves the emotional question: would you erase painful love to avoid heartbreak?' },
        { question: 'Why do Joel and Clementine meet again after erasure?', answer: 'The film suggests they\'re drawn to each other by something beyond memory—essence, chemistry, fate, or subconscious recognition. Their meet-cute on the train mirrors their first meeting. Eternal Sunshine argues identity and love exist deeper than conscious memory; erasing the past doesn\'t erase who we fundamentally are.' }
    ],
    'Enemy': [
        { question: 'What does the spider symbolize in Enemy?', answer: 'The giant spider represents multiple themes: female sexuality/danger (black widow), totalitarian control (web as trap), masculine fear of commitment, or the subconscious. Villeneuve deliberately leaves it open to interpretation. The final shot (wife as spider) suggests Adam sees women as threats or his marriage as a cage.' },
        { question: 'Are Adam and Anthony the same person?', answer: 'Most interpretations say yes—they\'re split personalities or psychological projections. Anthony (the actor) represents Id/desire, Adam (professor) represents Superego/control. The film may show one man\'s internal battle between monotonous routine (Adam) and hedonistic escape (Anthony). The ending suggests the cycle continues endlessly.' },
        { question: 'What does the ending of Enemy mean?', answer: 'In the final scene, Adam\'s wife transforms into a giant spider when he looks at her. Interpretations include: (1) His marriage is a trap/prison, (2) He\'s dissociating again, creating another identity, (3) He sees women as threats, or (4) The totalitarian society has fully consumed him. Like the film itself, the spider is a Rorschach test.' }
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
        if (lowerType.includes('kissing')) types.add('kissing scenes');
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
    return DONNIE_DARKO_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - A mind-bending psychological thriller`,
        'genre': movie.genre,
        'datePublished': movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Acclaimed Director' },
        'actor': movieInfo?.cast?.map(actor => ({ '@type': 'Person', 'name': actor })) || [],
        'duration': `PT${movie.runtime}M`,
        'image': posterUrl,
        'aggregateRating': { '@type': 'AggregateRating', 'ratingValue': movieInfo?.rating || 7.5, 'bestRating': 10, 'worstRating': 1, 'ratingCount': movieInfo?.audienceScore || 100 }
    };
};

export const generateFAQSchema = (faqs) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({ '@type': 'Question', 'name': faq.question, 'acceptedAnswer': { '@type': 'Answer', 'text': faq.answer } }))
});

export const fetchMovieFromTMDB = async (tmdbId) => ({ poster_path: null, title: COMPLETE_MOVIE_DATABASE.find(m => m.tmdbId === tmdbId)?.Title || 'Unknown Movie' });

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