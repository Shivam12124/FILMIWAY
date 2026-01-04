// utils/blackSwanMovieData.js - BLACK SWAN COLLECTION DATA
// Movies exploring artistic obsession, psychological descent, and identity horror

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 13973, "imdbID": "tt0156887", "Title": "Perfect Blue", "year": 1997, "genre": "Animation", "runtime": 81, "rank": 1 },
    { "tmdbId": 244786, "imdbID": "tt2582802", "Title": "Whiplash", "year": 2014, "genre": "Drama", "runtime": 106, "rank": 2 },
    { "tmdbId": 485975, "imdbID": "tt1034415", "Title": "Suspiria", "year": 2018, "genre": "Horror", "runtime": 152, "rank": 3 },
    { "tmdbId": 41079, "imdbID": "tt0040725", "Title": "The Red Shoes", "year": 1948, "genre": "Drama", "runtime": 135, "rank": 4 },
    { "tmdbId": 12500, "imdbID": "tt1125849", "Title": "The Wrestler", "year": 2008, "genre": "Drama", "runtime": 109, "rank": 5 },
    { "tmdbId": 1018, "imdbID": "tt0166924", "Title": "Mulholland Drive", "year": 2001, "genre": "Mystery", "runtime": 147, "rank": 6 },
    { "tmdbId": 11252, "imdbID": "tt0254686", "Title": "The Piano Teacher", "year": 2001, "genre": "Drama", "runtime": 131, "rank": 7 },
    { "tmdbId": 194662, "imdbID": "tt2562232", "Title": "Birdman", "year": 2014, "genre": "Comedy", "runtime": 119, "rank": 8 },
    { "tmdbId": 641, "imdbID": "tt0180093", "Title": "Requiem for a Dream", "year": 2000, "genre": "Drama", "runtime": 102, "rank": 9 },
    { "tmdbId": 242582, "imdbID": "tt2872718", "Title": "Nightcrawler", "year": 2014, "genre": "Thriller", "runtime": 117, "rank": 10 }
];

const timeToSeconds = (timeStr) => {
    const parts = timeStr.split(':').map(Number);
    if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
    if (parts.length === 2) return parts[0] * 60 + parts[1];
    return 0;
};

export const SENSITIVE_TIMELINES = {
    13973: { scenes: [{ start: "0:42:15", end: "0:42:45", type: "Violence", severity: "Moderate", description: "Stabbing scene" }, { start: "1:15:20", end: "1:16:10", type: "Nudity", severity: "Moderate", description: "Non-sexual, artistic context" }] },
    244786: { scenes: [{ start: "1:23:40", end: "1:24:30", type: "Violence", severity: "Mild", description: "Instrument throwing" }, { start: "1:45:10", end: "1:46:00", type: "Violence", severity: "Moderate", description: "Car crash aftermath" }] },
    485975: { scenes: [{ start: "0:45:30", end: "0:46:20", type: "Nudity", severity: "Moderate", description: "Ritual context" }, { start: "1:32:15", end: "1:33:45", type: "Violence", severity: "Extreme", description: "Graphic body horror" }] },
    41079: { scenes: [{ start: "1:55:20", end: "1:56:10", type: "Partial nudity", severity: "Mild", description: "Ballet performance" }] },
    12500: { scenes: [{ start: "0:58:45", end: "0:59:30", type: "Nudity", severity: "Moderate", description: "Backstage scene" }, { start: "1:12:20", end: "1:13:00", type: "Violence", severity: "Extreme", description: "Graphic wrestling injury" }] },
    1018: { scenes: [{ start: "1:08:15", end: "1:09:45", type: "Sexual content", severity: "Moderate", description: "Disturbing context" }, { start: "1:25:30", end: "1:26:20", type: "Drug use", severity: "Extreme", description: "Graphic injection" }] },
    11252: { scenes: [{ start: "0:35:10", end: "0:36:20", type: "Sexual content", severity: "Extreme", description: "BDSM context" }, { start: "1:18:45", end: "1:19:30", type: "Violence", severity: "Extreme", description: "Self-harm" }] },
    194662: { scenes: [{ start: "0:15:30", end: "0:16:10", type: "Partial nudity", severity: "Mild", description: "Dressing room" }] },
    641: { scenes: [{ start: "0:42:20", end: "0:43:10", type: "Sexual content", severity: "Moderate", description: "Disturbing context" }, { start: "1:05:15", end: "1:06:30", type: "Drug use", severity: "Extreme", description: "Graphic addiction scenes" }] },
    242582: { scenes: [{ start: "0:28:45", end: "0:29:20", type: "Violence", severity: "Moderate", description: "Crime scene photography" }, { start: "1:35:10", end: "1:36:00", type: "Violence", severity: "Extreme", description: "Graphic confrontation" }] }
};

export const FALLBACK_POSTERS = {
    13973: "https://m.media-amazon.com/images/M/MV5BMTdiYmM3NGUtZTZlYS00ZjU2LWE5YmQtOWYxNjhhM2Y3MGY0XkEyXkFqcGdeQXVyNjQzNDI3NzI@._V1_SX500.jpg",
    244786: "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NTEwZDZiZTUxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX500.jpg",
    485975: "https://m.media-amazon.com/images/M/MV5BMjQ2MTIyNjM2MF5BMl5BanBnXkFtZTgwNzgwNzE5NTM@._V1_SX500.jpg",
    41079: "https://m.media-amazon.com/images/M/MV5BMTI5Nzk5NTAzMl5BMl5BanBnXkFtZTcwNjk4MTA0Nw@@._V1_SX500.jpg",
    12500: "https://m.media-amazon.com/images/M/MV5BMTQ5MzcwOTI4NV5BMl5BanBnXkFtZTcwMTE4OTQwMg@@._V1_SX500.jpg",
    1018: "https://m.media-amazon.com/images/M/MV5BYzJjMTYyMjEtZDQ0My00N2EzLWE4NjQtZGIzZGE5YjYzNGRiXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_SX500.jpg",
    11252: "https://m.media-amazon.com/images/M/MV5BMTQ5NDk2NTg3MF5BMl5BanBnXkFtZTcwNTA5NDk2NA@@._V1_SX500.jpg",
    194662: "https://m.media-amazon.com/images/M/MV5BODAzNDMxMzAxOV5BMl5BanBnXkFtZTgwMDMxMjA4MjE@._V1_SX500.jpg",
    641: "https://m.media-amazon.com/images/M/MV5BOTdiNzJlOWUtN2VlZS00MjE1LTkxN2QtN2Y3YjY3MDI5YmM4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX500.jpg",
    242582: "https://m.media-amazon.com/images/M/MV5BNjkyMDQ1NTEwMl5BMl5BanBnXkFtZTgwNzQ4NDE5NTM@._V1_SX500.jpg"
};

const createMovieData = (data) => data;

// ... [Previous part of file]

export const COMPLETE_MOVIE_DATA = {
    13973: createMovieData({ 
        psychologicalIntensity: 95, 
        artisticObsession: 98, 
        identityHorror: 100,
        complexityLevel: "EXTREME", 
        dominantColor: "#dc2626", 
        rating: 8.0, 
        criticsScore: 67, 
        audienceScore: 85, 
        director: "Satoshi Kon", 
        cast: ["Junko Iwao", "Rica Matsumoto", "Shinpachi Tsuji"], 
        boxOffice: "$0.8 million", 
        budget: "$1.2 million", 
        dna: { "Psychological Horror": 40, "Animation": 30, "Thriller": 30 },
        scenes: [{ time: 20, intensity: 60, label: "Career Change", color: "#dc2626" }, { time: 45, intensity: 85, label: "Stalker Terror", color: "#ef4444" }, { time: 65, intensity: 95, label: "Identity Break", color: "#f87171" }, { time: 80, intensity: 100, label: "Reality Collapse", color: "#fca5a5" }],
        synopsis: "Pop idol Mima Kirigoe transitions to acting, but her fans reject this change. As she takes darker roles, reality fractures—she can't distinguish her identity from characters, her stalker from protectors, or nightmares from waking life. A masterpiece of psychological horror that questions the cost of artistic transformation.",
        themes: ["Identity Loss", "Celebrity Culture", "Psychological Horror", "Artistic Transformation"],
        awards: ["6 wins & 4 nominations"],
        whyIncluded: "The ultimate psychological descent film that directly inspired Black Swan. Explores identity fragmentation through performance art with terrifying surrealism.",
        metaThemes: ["Identity Fragmentation", "Celebrity Culture", "Reality vs Illusion"]
    }),
    244786: createMovieData({ 
        psychologicalIntensity: 92, 
        artisticObsession: 95, 
        identityHorror: 60,
        complexityLevel: "HIGH", 
        dominantColor: "#1e40af", 
        rating: 8.5, 
        criticsScore: 88, 
        audienceScore: 94, 
        director: "Damien Chazelle", 
        cast: ["Miles Teller", "J.K. Simmons", "Melissa Benoist"], 
        boxOffice: "$13.1 million", 
        budget: "$3.3 million", 
        dna: { "Drama": 60, "Music": 30, "Thriller": 10 },
        scenes: [{ time: 15, intensity: 40, label: "Audition", color: "#1e40af" }, { time: 35, intensity: 70, label: "Abuse Begins", color: "#3b82f6" }, { time: 60, intensity: 85, label: "Car Crash", color: "#60a5fa" }, { time: 85, intensity: 95, label: "Final Performance", color: "#93c5fd" }],
        synopsis: "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential. The pursuit of artistic perfection becomes a psychological war that threatens to destroy both teacher and student.",
        themes: ["Artistic Perfection", "Mentorship Abuse", "Psychological Warfare", "Sacrifice for Greatness"],
        awards: ["Won 3 Oscars. 97 wins & 158 nominations total"],
        whyIncluded: "Explores the same toxic mentorship and artistic obsession that drives Black Swan's protagonist to madness. The psychological abuse for artistic perfection mirrors Nina's descent.",
        metaThemes: ["Toxic Mentorship", "Perfectionism", "Psychological Abuse"]
    }),
    485975: createMovieData({ 
        psychologicalIntensity: 88, 
        artisticObsession: 90, 
        identityHorror: 85,
        complexityLevel: "EXTREME", 
        dominantColor: "#059669", 
        rating: 6.7, 
        criticsScore: 64, 
        audienceScore: 58, 
        director: "Luca Guadagnino", 
        cast: ["Chloë Grace Moretz", "Tilda Swinton", "Doris Hick"], 
        boxOffice: "$7.7 million", 
        budget: "$20 million", 
        dna: { "Horror": 40, "Fantasy": 30, "Mystery": 30 },
        scenes: [{ time: 25, intensity: 50, label: "Dance Academy", color: "#059669" }, { time: 50, intensity: 75, label: "Dark Rituals", color: "#10b981" }, { time: 90, intensity: 90, label: "Body Horror", color: "#34d399" }, { time: 130, intensity: 95, label: "Final Transformation", color: "#6ee7b7" }],
        synopsis: "A darkness swirls at the center of a world-renowned dance company, one that will engulf the artistic director, an ambitious young dancer, and a grieving psychotherapist. Some will succumb to the nightmare. Others will finally wake up.",
        themes: ["Dance Horror", "Witchcraft", "Artistic Possession", "Body Transformation"],
        awards: ["2 wins & 8 nominations"],
        whyIncluded: "Directly parallels Black Swan's dance world horror but amplifies the supernatural elements. Both explore how artistic dedication can become literal possession.",
        metaThemes: ["Dance as Horror", "Coven Psychology", "Body Autonomy Loss"]
    }),
    41079: createMovieData({ 
        psychologicalIntensity: 75, 
        artisticObsession: 88, 
        identityHorror: 70,
        complexityLevel: "HIGH", 
        dominantColor: "#7c2d12", 
        rating: 8.1, 
        criticsScore: 95, 
        audienceScore: 89, 
        director: "Michael Powell", 
        cast: ["Anton Walbrook", "Marius Goring", "Moira Shearer"], 
        boxOffice: "$5.1 million", 
        budget: "$1.2 million", 
        dna: { "Drama": 50, "Romance": 30, "Music": 20 },
        scenes: [{ time: 30, intensity: 45, label: "Ballet Rehearsal", color: "#7c2d12" }, { time: 60, intensity: 65, label: "Performance Pressure", color: "#92400e" }, { time: 90, intensity: 80, label: "The Choice", color: "#b45309" }, { time: 130, intensity: 100, label: "Tragic Finale", color: "#d97706" }],
        synopsis: "A young ballerina is torn between two possessing forces: the composer who loves her, and the impresario determined to make her a great dancer. She is forced to choose between her art and her life, a choice that leads to a devastating conclusion under the spell of the Red Shoes.",
        themes: ["Art vs Life", "Obsession", "Sacrifice", "Destiny"],
        awards: ["Won 2 Oscars. 5 wins & 6 nominations total"],
        whyIncluded: "The definitive film on the destructive cost of artistic greatness. Established the archetype of the dancer consumed by her art that Black Swan modernizes.",
        metaThemes: ["Artistic Sacrifice", "Obsession", "Destructive Ambition"]
    }),
    12500: createMovieData({ 
        psychologicalIntensity: 85, 
        artisticObsession: 90, 
        identityHorror: 60,
        complexityLevel: "HIGH", 
        dominantColor: "#15803d", 
        rating: 7.9, 
        criticsScore: 98, 
        audienceScore: 88, 
        director: "Darren Aronofsky", 
        cast: ["Mickey Rourke", "Marisa Tomei", "Evan Rachel Wood"], 
        boxOffice: "$44.7 million", 
        budget: "$6 million", 
        dna: { "Drama": 70, "Sport": 20, "Romance": 10 },
        scenes: [{ time: 20, intensity: 50, label: "The Grind", color: "#15803d" }, { time: 55, intensity: 75, label: "Health Collapse", color: "#16a34a" }, { time: 85, intensity: 85, label: "Broken Relationships", color: "#22c55e" }, { time: 105, intensity: 100, label: "The Ram Jam", color: "#4ade80" }],
        synopsis: "A faded professional wrestler must retire after a heart attack but finds life outside the ring unbearable. Struggling to reconnect with his estranged daughter and finding solace with a stripper, he is ultimately drawn back to the only place he feels alive—the ring—even if it kills him.",
        themes: ["Faded Glory", "Body Horror", "Redemption", "Addiction to Fame"],
        awards: ["Nominated for 2 Oscars. 56 wins & 88 nominations total"],
        whyIncluded: "Directed by Aronofsky as a companion piece to Black Swan. Swaps ballet for wrestling but explores the exact same theme: destroying the body for the sake of the performance.",
        metaThemes: ["Body Destruction", "Performance Addiction", "Faded Glory"]
    }),
    1018: createMovieData({ 
        psychologicalIntensity: 98, 
        artisticObsession: 85, 
        identityHorror: 100,
        complexityLevel: "EXTREME", 
        dominantColor: "#1e3a8a", 
        rating: 7.9, 
        criticsScore: 84, 
        audienceScore: 87, 
        director: "David Lynch", 
        cast: ["Naomi Watts", "Laura Harring", "Justin Theroux"], 
        boxOffice: "$20.1 million", 
        budget: "$15 million", 
        dna: { "Mystery": 50, "Thriller": 30, "Drama": 20 },
        scenes: [{ time: 30, intensity: 40, label: "Hollywood Dream", color: "#1e3a8a" }, { time: 70, intensity: 60, label: "Mystery Deepens", color: "#2563eb" }, { time: 110, intensity: 90, label: "Club Silencio", color: "#3b82f6" }, { time: 140, intensity: 100, label: "Reality Shatters", color: "#60a5fa" }],
        synopsis: "A bright-eyed young actress travels to Hollywood only to become ensnared in a dark conspiracy involving a woman who was nearly murdered. As the two women search for answers, dreams and reality fracture into a surreal nightmare about the dark underbelly of ambition and identity.",
        themes: ["Identity Fracture", "Hollywood Dark Side", "Dreams vs Reality", "Lost Innocence"],
        awards: ["Nominated for 1 Oscar. 45 wins & 64 nominations total"],
        whyIncluded: "The ultimate film about the 'double' and the shattering of identity in Hollywood. Mirrors Black Swan's descent into a surreal nightmare where the protagonist loses herself.",
        metaThemes: ["Identity Dissociation", "Hollywood Nightmare", "Dream Logic"]
    }),
    11252: createMovieData({ 
        psychologicalIntensity: 95, 
        artisticObsession: 92, 
        identityHorror: 80,
        complexityLevel: "HIGH", 
        dominantColor: "#334155", 
        rating: 7.5, 
        criticsScore: 74, 
        audienceScore: 78, 
        director: "Michael Haneke", 
        cast: ["Isabelle Huppert", "Annie Girardot", "Benoît Magimel"], 
        boxOffice: "$2.4 million", 
        budget: "$6.5 million", 
        dna: { "Drama": 60, "Romance": 20, "Thriller": 20 },
        scenes: [{ time: 25, intensity: 50, label: "Repression", color: "#334155" }, { time: 60, intensity: 75, label: "Obsession Begins", color: "#475569" }, { time: 95, intensity: 90, label: "Sexual Violence", color: "#64748b" }, { time: 125, intensity: 100, label: "Self Destruction", color: "#94a3b8" }],
        synopsis: "A piano professor at a Vienna conservatory lives with her tyrannical mother in a state of emotional repression. When a young student becomes obsessed with her, their relationship descends into a dark game of control, voyeurism, and masochism.",
        themes: ["Sexual Repression", "Control", "Masochism", "Maternal dominance"],
        awards: ["25 wins & 17 nominations"],
        whyIncluded: "Explores the disturbing psychological consequences of strict artistic discipline and repression. Erika is a dark reflection of what Nina could become—cold, repressed, and self-destructive.",
        metaThemes: ["Sexual Repression", "Masochism", "Toxic Perfectionism"]
    }),
    194662: createMovieData({ 
        psychologicalIntensity: 85, 
        artisticObsession: 95, 
        identityHorror: 60,
        complexityLevel: "HIGH", 
        dominantColor: "#c2410c", 
        rating: 7.7, 
        criticsScore: 91, 
        audienceScore: 78, 
        director: "Alejandro G. Iñárritu", 
        cast: ["Michael Keaton", "Zach Galifianakis", "Edward Norton"], 
        boxOffice: "$103.2 million", 
        budget: "$18 million", 
        dna: { "Drama": 40, "Comedy": 40, "Fantasy": 20 },
        scenes: [{ time: 20, intensity: 45, label: "Backstage Chaos", color: "#c2410c" }, { time: 60, intensity: 70, label: "Ego Clash", color: "#ea580c" }, { time: 90, intensity: 85, label: "Mental Break", color: "#f97316" }, { time: 115, intensity: 100, label: "On Stage", color: "#fb923c" }],
        synopsis: "A washed-up superhero actor attempts to revive his fading career by writing, directing, and starring in a Broadway production. As opening night approaches, he battles his ego, his family, and his internal sanity in a seamless, continuous shot.",
        themes: ["Ego vs Art", "Relevance", "Reality vs Performance", "Fame"],
        awards: ["Won 4 Oscars. 193 wins & 292 nominations total"],
        whyIncluded: "Captures the frantic, claustrophobic pressure of backstage artistic life. The continuous shot technique mirrors the unrelenting psychological pressure seen in Black Swan.",
        metaThemes: ["Ego Dissolution", "Artistic Relevance", "Performance Anxiety"]
    }),
    641: createMovieData({ 
        psychologicalIntensity: 98, 
        artisticObsession: 90, 
        identityHorror: 95,
        complexityLevel: "HIGH", 
        dominantColor: "#0f172a", 
        rating: 8.3, 
        criticsScore: 79, 
        audienceScore: 93, 
        director: "Darren Aronofsky", 
        cast: ["Ellen Burstyn", "Jared Leto", "Jennifer Connelly"], 
        boxOffice: "$7.4 million", 
        budget: "$4.5 million", 
        dna: { "Drama": 80, "Psychological": 20 },
        scenes: [{ time: 25, intensity: 50, label: "Summer High", color: "#0f172a" }, { time: 55, intensity: 75, label: "Fall Decline", color: "#1e293b" }, { time: 85, intensity: 95, label: "Winter Spiral", color: "#334155" }, { time: 100, intensity: 100, label: "Requiem", color: "#475569" }],
        synopsis: "The hopes and dreams of four ambitious people are shattered when their drug addictions begin spiraling out of control. A widow's diet pills and her son's heroin habit lead to a terrifying crescendo of hallucinations, degradation, and imprisonment.",
        themes: ["Addiction", "Delusion", "Destruction of Self", "American Dream"],
        awards: ["Nominated for 1 Oscar. 37 wins & 66 nominations total"],
        whyIncluded: "Aronofsky's earlier masterpiece on obsession. Uses the same frenetic editing and subjective camera work to show the destruction of the self through addiction, mirroring Nina's destruction through dance.",
        metaThemes: ["Addiction as Obsession", "Self-Destruction", "Delusional Ambition"]
    }),
    242582: createMovieData({ 
        psychologicalIntensity: 80, 
        artisticObsession: 92, 
        identityHorror: 50,
        complexityLevel: "MEDIUM", 
        dominantColor: "#10b981", 
        rating: 7.8, 
        criticsScore: 95, 
        audienceScore: 86, 
        director: "Dan Gilroy", 
        cast: ["Jake Gyllenhaal", "Rene Russo", "Bill Paxton"], 
        boxOffice: "$50.3 million", 
        budget: "$8.5 million", 
        dna: { "Thriller": 60, "Crime": 30, "Drama": 10 },
        scenes: [{ time: 20, intensity: 40, label: "First Shoot", color: "#10b981" }, { time: 55, intensity: 65, label: "Crossing Lines", color: "#059669" }, { time: 90, intensity: 85, label: "Sabotage", color: "#047857" }, { time: 110, intensity: 95, label: "The Setup", color: "#065f46" }],
        synopsis: "Louis Bloom is a driven man desperate for work who discovers the high-speed world of L.A. crime journalism. He begins filming car crashes, fires, and murder, but soon blurs the line between observer and participant to get the perfect shot.",
        themes: ["Media Ethics", "Capitalism", "Sociopathy", "Ambition"],
        awards: ["Nominated for 1 Oscar. 47 wins & 129 nominations total"],
        whyIncluded: "A study of sociopathic ambition. Louis Bloom is the 'evil twin' of the artistic obsessive—driven by success with zero empathy, contrasting Nina's fragile emotional state.",
        metaThemes: ["Toxic Ambition", "Media exploitation", "Capitalist Psychopathy"]
    })
};

export const STRATEGIC_QUOTES = {
    13973: "Who are you?",
    244786: "There are no two words in the English language more harmful than 'good job'.",
    485975: "Why is everyone so ready to think the worst is over?",
    41079: "Why do you want to dance? Why do you want to live?",
    12500: "The only place I get hurt is out there. The world don't give a sh*t about me.",
    1018: "Silencio.",
    11252: "I have no feelings. Get that into your head.",
    194662: "You are not your work.",
    641: "I'm gonna be on television.",
    242582: "I like to say that if you're seeing me, you're having the worst day of your life."
};

export const CINEMATIC_COLORS = {
    "Psychological": "#e11d48", "Drama": "#334155", "Horror": "#991b1b", "Thriller": "#0f172a", "Music": "#eab308", "Mystery": "#1e3a8a", "Animation": "#e11d48", "Crime": "#10b981", "Comedy": "#c2410c"
};

export const RATING_OPTIONS = [
    { value: 1, label: "A Disappointment", color: "#dc2626", symbol: "🎫", bgColor: "bg-red-900/30", description: "Torn ticket - Total disappointment" },
    { value: 2, label: "Flawed", color: "#ea580c", symbol: "🎟️", bgColor: "bg-orange-900/30", description: "Faded ticket - Has major flaws" },
    { value: 3, label: "Worth the Ride", color: "#16a34a", symbol: "🎟️", bgColor: "bg-green-900/30", description: 'Clean ticket - Solid entertainment' },
    { value: 4, label: "Exceptional", color: "#eab308", symbol: "🎫", bgColor: "bg-yellow-900/30", description: "Golden ticket - Cinematic masterpiece" }
];

export const BLACK_SWAN_MOVIE_FAQS = {
    'Perfect Blue': [
        { question: "Did Black Swan copy Perfect Blue?", answer: "Darren Aronofsky owns the rights to Perfect Blue and has admitted to using scenes from it for Requiem for a Dream. While he denies it was a direct influence on Black Swan, the similarities—the double, the hallucinations, the mirrors—are undeniable. Many critics view Black Swan as a live-action spiritual remake." },
        { question: "Is Mima hallucinating or is it real?", answer: "The genius of the film is that it is both. Mima is suffering from psychosis due to stress, but she is also being gaslit by her manager, Rumi, who is impersonating her online. The film blurs these lines so the audience feels Mima's confusion." },
        { question: "What does the ending mean?", answer: "The final shot of Mima smiling in the rearview mirror saying 'No, I'm real' suggests she has finally accepted her new identity. She has integrated her 'pop idol' past and her 'actress' present, surviving the trauma to become a whole person." },
        { question: "Why is it animated?", answer: "Originally planned as a live-action film, budget cuts forced it into animation. This was a blessing, as the medium allows for surreal transitions between reality and dreams that would look cheesy in live action. It heightened the psychological horror." }
    ],
    'Whiplash': [
        { question: "Is Fletcher a villain or a mentor?", answer: "He is a villain who thinks he is a mentor. His philosophy is that abuse creates greatness ('The next Charlie Parker'). While Andrew does achieve a great performance, the film implies he has lost his humanity and perhaps his life expectancy to get there." },
        { question: "What does the final look between them mean?", answer: "It is a moment of mutual recognition. Andrew has finally surpassed Fletcher's expectations, and Fletcher finally has his 'Charlie Parker.' It is a triumphant moment for the music, but a tragic moment for Andrew as a human being." },
        { question: "Is the story based on truth?", answer: "Yes, director Damien Chazelle based it on his own high school jazz band experience. He stated that he wanted to make a movie about music that felt like a war movie or a gangster film, where instruments are weapons." },
        { question: "Did Miles Teller actually play the drums?", answer: "Yes, Miles Teller has played drums since he was 15 and performed about 70% of the drumming seen in the film. However, visual doubles and audio overdubs were used for the most complex jazz sequences to achieve professional perfection." }
    ],
    'Suspiria': [
        { question: "How does this compare to the 1977 original?", answer: "The original is a neon-colored fairytale; the 2018 version is a bleak, political nightmare. The remake expands the lore of the 'Three Mothers,' adds a Cold War subplot, and focuses more on the physical brutality of dance as a ritual." },
        { question: "Who is Mother Suspiriorum?", answer: "She is one of the Three Mothers, an ancient trinity of witches. In the twist ending, it is revealed that Susie Bannion (Dakota Johnson) is not just a vessel, but the reincarnated Mother Suspiriorum herself, claiming her rightful place and cleansing the coven." },
        { question: "Why is Tilda Swinton playing an old man?", answer: "Tilda Swinton plays three roles: Madame Blanc, Mother Helena Markos, and Dr. Klemperer (under heavy prosthetics). This casting choice underscores the film's theme of female power—even the sole significant male character is actually a woman, suggesting men have no real agency in this witch's world." },
        { question: "What is the meaning of the dance scenes?", answer: "Dance is magic. Unlike the original where magic is invisible, here the movements of the body are spells. The violence inflicted on the victims mirrors the dancers' movements, linking art, body, and destruction." }
    ],
    'The Red Shoes': [
        { question: "Why is this film so influential?", answer: "It is the definitive film about the cost of art. Its use of Technicolor and the 17-minute surrealist ballet sequence revolutionized filmmaking. Martin Scorsese and Brian De Palma cite it as a major influence. It established the trope that art requires the sacrifice of love and life." },
        { question: "Did she jump or did the shoes make her do it?", answer: "The film leaves it ambiguous. On a literal level, she jumps to escape the impossible choice between her husband and ballet. On a metaphorical level, the 'Red Shoes' (her obsession) took over and danced her to death, just as in the fairy tale." },
        { question: "What is the symbolism of the Red Shoes?", answer: "They represent the uncompromising demand of art. Once you put them on (commit to art), you cannot stop dancing. They bring glory but destroy normal human happiness. It is a curse of greatness." },
        { question: "How does it connect to Black Swan?", answer: "Black Swan is essentially a modern horror remake of The Red Shoes. Both feature a dancer torn between a controlling mentor and a lover, both feature a surreal hallucination during a performance, and both end with the dancer dying for their final perfect performance." }
    ],
    'The Wrestler': [
        { question: "Is the ending a suicide?", answer: "It is heavily implied. Randy is told his heart will explode if he wrestles again. By climbing the ropes for his signature move, the 'Ram Jam,' he chooses to die doing the only thing that gives him worth rather than live a life of loneliness and anonymity." },
        { question: "How does this mirror Black Swan?", answer: "Darren Aronofsky directed both and considers them siblings. The Wrestler is about the body breaking down (low art), while Black Swan is about the mind breaking down (high art). Both protagonists sacrifice their bodies and relationships for the applause of the crowd." },
        { question: "Did Mickey Rourke do his own stunts?", answer: "Yes, Mickey Rourke trained for months and performed all his own wrestling moves. He actually cut his forehead with a razor blade on camera (a practice called 'blading') to make the blood real. The role mirrored his own faded acting career." },
        { question: "Why did the romance with the stripper fail?", answer: "Because Randy cannot function in the real world. Cassidy (Marisa Tomei) represents reality and stability. But when reality gets too hard (rejection by his daughter), Randy retreats to the fantasy world of the ring where he is a hero." }
    ],
    'Mulholland Drive': [
        { question: "What is the blue box?", answer: "The blue box represents reality/truth. When it is opened, the 'dream' of the first half of the movie collapses, and we wake up into the harsh, tragic reality of Diane's life. It is Pandora's box—once opened, the illusion cannot be restored." },
        { question: "Who are Betty and Rita really?", answer: "They are idealized dream versions of the real characters. Betty is who Diane wishes she was (talented, hopeful, star). Rita is who Diane wishes Camilla was (dependent, loving, vulnerable). The dream corrects all of Diane's failures in real life." },
        { question: "What does 'Silencio' mean?", answer: "It signifies that everything is an illusion. 'No hay banda' (there is no band). The music plays, but nobody is playing it. It warns Diane that her dream logic is ending and the silence of death/reality is coming." },
        { question: "How does it relate to Black Swan?", answer: "Both films deal with the fracturing of identity under the pressure of Hollywood/performance. The doppelganger motif (blonde vs brunette) and the lesbian relationship that turns from loving to destructive are key parallels." }
    ],
    'The Piano Teacher': [
        { question: "Why does Erika mutilate herself?", answer: "Erika is emotionally numb due to her mother's control and her rigid perfectionism. Self-harm is the only way she can feel something real and assert ownership over her own body. It is an act of desperate rebellion turned inward." },
        { question: "Is Walter a victim?", answer: "Initially yes, but he eventually becomes the aggressor. He starts as a romantic admirer but is disgusted by Erika's masochistic demands. In the end, he beats and rapes her, not out of desire, but to punish her for deviating from the 'normal' romance he expected." },
        { question: "What is the meaning of the final scene?", answer: "Erika stabs herself in the shoulder and walks into the night. It is an anti-climax. She has been completely broken—rejected by her lover and trapped with her mother. The wound is a final, pathetic mark of her existence before she likely returns to her living death." },
        { question: "How is this related to Black Swan?", answer: "It explores the dark side of classical music training—the discipline, the repression, and the 'stage mother' dynamic. Erika is what Nina from Black Swan might have become if she never found her 'black' side: cold, repressed, and internally dead." }
    ],
    'Birdman': [
        { question: "Is Riggan actually telekinetic?", answer: "The film leaves it ambiguous. It is likely a manifestation of his ego and madness. However, the final shot where his daughter looks *up* and smiles suggests that perhaps, in his own reality (or death), he truly did fly. It validates his delusion." },
        { question: "Why is it filmed in one shot?", answer: "The continuous take immerses the audience in the frantic, unceasing pressure of theater. There are no cuts to relieve the tension. It mirrors Riggan's mind—he cannot escape his ego or his anxiety, not even for a second." },
        { question: "What does the Birdman voice represent?", answer: "It is his ego and his past fame. It tempts him to give up 'art' and return to being a shallow celebrity because that is easier and more lucrative. It represents the devil on the shoulder of every artist." },
        { question: "Why does he shoot himself on stage?", answer: "He realizes that the only way to get the audience's true attention and respect is through real blood. It is the ultimate sacrifice for art. Ironically, surviving the shot makes him more famous than ever, trapping him in the cycle again." }
    ],
    'Requiem for a Dream': [
        { question: "Why is the editing so fast?", answer: "The film uses 'hip-hop montage' (extremely short cuts) to mimic the rush of drugs. As the characters spiral, the cuts get faster and faster, overwhelming the viewer. It simulates the physiological experience of addiction." },
        { question: "What is the significance of the red dress?", answer: "For Sara Goldfarb, the red dress represents her past happiness and dignity. Her obsession with fitting into it drives her diet pill addiction. It symbolizes the tragic desire to return to a time when she felt loved and seen." },
        { question: "Is there any hope at the end?", answer: "No. The characters curl into fetal positions, symbolizing their regression to a helpless, infantile state. They have lost their autonomy completely. It is one of the bleakest endings in cinema, serving as a total warning against the American Dream." },
        { question: "Connection to Black Swan?", answer: "Both films are directed by Aronofsky and share the theme of obsession destroying the body. Requiem destroys the body through drugs; Black Swan through dance. Both protagonists hallucinate their physical transformation (refrigerator attack vs feather growth)." }
    ],
    'Nightcrawler': [
        { question: "Is Lou Bloom a psychopath?", answer: "Yes, he exhibits classic traits: lack of empathy, manipulation, and viewing people as objects. He treats crime journalism like a business transaction. The horror is that capitalism rewards his psychopathy, making him a 'success story.'" },
        { question: "What does the mirror scene represent?", answer: "When Lou breaks the mirror, it is the only time he shows genuine emotion (anger/frustration). It cracks his perfect facade. It mirrors the 'Black Swan' mirror shatter, showing the fragmented, violent self beneath the composed surface." },
        { question: "Why does he let his partner die?", answer: "Rick became a liability who asked for more money (leverage). Lou creates a situation where Rick is killed so he can film the death. It is the ultimate act of ruthless capitalism—eliminating a cost center while generating high-value content." },
        { question: "What is the message about the media?", answer: "The film indicts the audience. Lou only films gore because the news stations buy it, and they buy it because *we* watch it. Lou is not the disease; he is the symptom of a society addicted to fear and spectacle." }
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
        if (lowerType.includes('violence')) types.add('graphic violence');
        if (lowerType.includes('self-harm') || lowerType.includes('drug')) types.add('disturbing content');
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
    return BLACK_SWAN_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - A psychological thriller about obsession.`,
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
    title: COMPLETE_MOVIE_DATABASE.find(m => m.tmdbId === tmdbId)?.Title || 'Unknown Movie' 
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