// utils/hboMaxDramaMovieData.js - HBO MAX DRAMA COLLECTION DATA
// Emotional Impact, Character Depth, and Human Connection

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 376867, "imdbID": "tt4975722", "Title": "Moonlight", "year": 2016, "genre": "Drama", "runtime": 111, "rank": 1 },
    { "tmdbId": 1064213, "imdbID": "tt8999762", "Title": "The Brutalist", "year": 2024, "genre": "Drama", "runtime": 215, "rank": 2 },
    { "tmdbId": 655, "imdbID": "tt0087884", "Title": "Paris, Texas", "year": 1984, "genre": "Drama", "runtime": 145, "rank": 3 },
    { "tmdbId": 103, "imdbID": "tt0075314", "Title": "Taxi Driver", "year": 1976, "genre": "Crime", "runtime": 114, "rank": 4 },
    { "tmdbId": 666277, "imdbID": "tt13238346", "Title": "Past Lives", "year": 2023, "genre": "Romance", "runtime": 105, "rank": 5 },
    { "tmdbId": 17295, "imdbID": "tt0058946", "Title": "The Battle of Algiers", "year": 1966, "genre": "War", "runtime": 121, "rank": 6 },
    { "tmdbId": 1155828, "imdbID": "tt28479262", "Title": "Sing Sing", "year": 2024, "genre": "Drama", "runtime": 105, "rank": 7 },
    { "tmdbId": 873, "imdbID": "tt0088939", "Title": "The Color Purple", "year": 1985, "genre": "Drama", "runtime": 154, "rank": 8 },
    { "tmdbId": 76025, "imdbID": "tt1723811", "Title": "Shame", "year": 2011, "genre": "Drama", "runtime": 101, "rank": 9 },
    { "tmdbId": 475557, "imdbID": "tt7286456", "Title": "Joker", "year": 2019, "genre": "Crime", "runtime": 122, "rank": 10 }
];

// ✅ SENSITIVE TIMELINES (Focusing on Trauma, Violence, and Addiction)
export const SENSITIVE_TIMELINES = {
    // 1. Moonlight
    376867: { 
        scenes: [
            { start: "0:35:00", end: "0:40:00", type: "Bullying/Assault", severity: "High" },
            { start: "0:50:00", end: "0:55:00", type: "Parental Drug Abuse", severity: "High" }
        ] 
    },
    // 2. The Brutalist
    1064213: { 
        scenes: [
            { start: "0:15:00", end: "0:20:00", type: "Immigration Hardship", severity: "Moderate" },
            { start: "1:45:00", end: "1:50:00", type: "Drug Use/Addiction", severity: "High" }
        ] 
    },
    // 3. Paris, Texas
    655: { 
        scenes: [
            { start: "2:00:00", end: "2:10:00", type: "Discussion of Domestic Violence", severity: "High" } // The peep show monologue
        ] 
    },
    // 4. Taxi Driver
    103: { 
        scenes: [
            { start: "1:35:00", end: "1:40:00", type: "Extreme Violence/Gore", severity: "Extreme" },
            { start: "0:50:00", end: "1:00:00", type: "Child Prostitution Themes", severity: "High" }
        ] 
    },
    // 5. Past Lives
    666277: { 
        scenes: [
            { start: "1:35:00", end: "1:40:00", type: "Intense Emotional Grief", severity: "Moderate" }
        ] 
    },
    // 6. The Battle of Algiers
    17295: { 
        scenes: [
            { start: "0:45:00", end: "0:50:00", type: "Torture Depiction", severity: "High" },
            { start: "1:10:00", end: "1:15:00", type: "Terrorist Bombings", severity: "High" }
        ] 
    },
    // 7. Sing Sing
    1155828: { 
        scenes: [
            { start: "0:10:00", end: "0:15:00", type: "Prison Environment Stress", severity: "Moderate" }
        ] 
    },
    // 8. The Color Purple (1985)
    873: { 
        scenes: [
            { start: "0:10:00", end: "0:15:00", type: "Domestic Abuse/Assault", severity: "High" },
            { start: "0:40:00", end: "0:45:00", type: "Separation Trauma", severity: "High" }
        ] 
    },
    // 9. Shame
    76025: { 
        scenes: [
            { start: "0:05:00", end: "1:40:00", type: "Graphic Sexual Content", severity: "Extreme" },
            { start: "1:30:00", end: "1:35:00", type: "Self-Harm/Suicide Attempt", severity: "Extreme" }
        ] 
    },
    // 10. Joker
    475557: { 
        scenes: [
            { start: "1:25:00", end: "1:30:00", type: "Brutal Violence", severity: "High" },
            { start: "1:50:00", end: "1:55:00", type: "Public Execution", severity: "High" }
        ] 
    }
};

export const FALLBACK_POSTERS = {
    376867: "https://image.tmdb.org/t/p/w500/4911d5MNM0e32pP79s0f33K3X5.jpg",
    1064213: "https://image.tmdb.org/t/p/w500/l91FadJqg7qYm8f9Y3q8J9j8.jpg", // Placeholder if new
    655: "https://image.tmdb.org/t/p/w500/v3QyboWRoA4O9RbcAq78Peobk.jpg",
    103: "https://image.tmdb.org/t/p/w500/ekstpH614fwDX8DUln1a2Opz0N8.jpg",
    666277: "https://image.tmdb.org/t/p/w500/k3waqVXSnvCZWfJYNtdamTgTtTA.jpg",
    17295: "https://image.tmdb.org/t/p/w500/m1C152y7i07y7Z999999.jpg",
    1155828: "https://image.tmdb.org/t/p/w500/sing-sing-poster.jpg",
    873: "https://image.tmdb.org/t/p/w500/4j0P8g99999.jpg",
    76025: "https://image.tmdb.org/t/p/w500/123shame.jpg",
    475557: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
};

// ✅ HELPER: Updated for Emotional Impact
const createMovieData = (data) => ({
    emotionalIntensity: 85,    // Default High Emotion
    complexityLevel: "HIGH",
    dominantColor: "#1e293b", // Slate default
    ...data,
});

export const COMPLETE_MOVIE_DATA = {

  // 1. Moonlight (2016)
  376867: createMovieData({
    emotionalIntensity: 96,
    complexityLevel: "MASTERPIECE",
    dominantColor: "#4f46e5",
    rating: 7.4, criticsScore: 98, audienceScore: 80,
    director: "Barry Jenkins",
    cast: ["Trevante Rhodes", "Mahershala Ali", "Ashton Sanders"],
    boxOffice: "$65 million", budget: "$1.5 million",
    dna: { "Drama": 80, "Romance": 20 },
    scenes: [
      { time: 15, intensity: 25, label: "Little", color: "#60a5fa" },
      { time: 45, intensity: 55, label: "Swimming Lesson", color: "#818cf8" },
      { time: 75, intensity: 80, label: "The Beach", color: "#4338ca" },
      { time: 95, intensity: 65, label: "Black", color: "#1e1b4b" },
      { time: 105, intensity: 96, label: "The Diner Reunion", color: "#4f46e5" }
    ],
    themes: ["Identity", "Masculinity", "Love"],
    synopsis: "A singular exploration of masculinity and identity, the film chronicles the life of Chiron, a young black man growing up in a rough neighborhood of Miami, across three defining chapters of his life. As he struggles with his sexuality and the emotional abuse of his drug-addicted mother, he finds a surrogate father in a local drug dealer who teaches him to swim and stand his ground. Years later, a hardened Chiron—now living under the moniker 'Black'—receives an unexpected phone call from his past, leading to a tender, heart-wrenching reunion that strips away his armor and forces him to confront the vulnerability he buried long ago."
  }),

  // 2. The Brutalist (2024)
  1064213: createMovieData({
    emotionalIntensity: 94,
    complexityLevel: "EPIC",
    dominantColor: "#b45309",
    rating: 8.2, criticsScore: 97, audienceScore: 90,
    director: "Brady Corbet",
    cast: ["Adrien Brody", "Felicity Jones", "Guy Pearce"],
    boxOffice: "N/A", budget: "$10 million",
    dna: { "Drama": 70, "History": 30 },
    scenes: [
      { time: 20, intensity: 35, label: "Arrival in America", color: "#78716c" },
      { time: 60, intensity: 60, label: "The Commission", color: "#f59e0b" },
      { time: 120, intensity: 78, label: "Construction", color: "#b45309" },
      { time: 180, intensity: 94, label: "The Betrayal", color: "#7f1d1d" },
      { time: 210, intensity: 85, label: "The Legacy", color: "#a16207" }
    ],
    themes: ["Immigration", "Architecture", "Ambition"],
    synopsis: "Spanning 30 years, this monumental epic follows visionary Hungarian-born Jewish architect László Tóth, who survives the Holocaust and emigrates to the United States in 1947 to rebuild his life from zero. Separated from his wife Erzsébet and struggling with poverty, his genius is eventually recognized by a wealthy and capricious industrialist, Harrison Lee Van Buren, who commissions him to design a massive modernist community center. As the years pass, the project becomes a battleground of ego, art, and capitalism, consuming László's soul and threatening to destroy the very family he fought so hard to reunite with in a sprawling American tragedy."
  }),

  // 3. Paris, Texas (1984)
  655: createMovieData({
    emotionalIntensity: 100,
    complexityLevel: "TIMELESS",
    dominantColor: "#db2777",
    rating: 8.1, criticsScore: 94, audienceScore: 90,
    director: "Wim Wenders",
    cast: ["Harry Dean Stanton", "Nastassja Kinski"],
    boxOffice: "$2 million",
    dna: { "Drama": 70, "Romance": 30 },
    scenes: [
      { time: 10, intensity: 20, label: "The Desert", color: "#fcd34d" },
      { time: 60, intensity: 45, label: "Super 8 Memories", color: "#fca5a5" },
      { time: 90, intensity: 65, label: "The Road Trip", color: "#be123c" },
      { time: 120, intensity: 100, label: "The Peep Show", color: "#db2777" },
      { time: 140, intensity: 75, label: "Driving Away", color: "#1e3a8a" }
    ],
    themes: ["Redemption", "Loneliness", "Memory"],
    synopsis: "A man named Travis Henderson walks out of the shimmering heat of the Texas desert, mute, exhausted, and with no memory of where he has been for the last four years. After being picked up by his brother, Travis slowly begins to piece together his fractured past, reconnecting with his young son whom he abandoned. Driven by a haunting memory of his lost love, he embarks on a road trip through the American Southwest to find his estranged wife, Jane, culminating in an iconic, devastating conversation through a one-way mirror that lays bare the tragic jealousy that tore their family apart."
  }),

  // 4. Taxi Driver (1976)
  103: createMovieData({
    emotionalIntensity: 92,
    complexityLevel: "GRITTY",
    dominantColor: "#f59e0b",
    rating: 8.2, criticsScore: 96, audienceScore: 93,
    director: "Martin Scorsese",
    cast: ["Robert De Niro", "Jodie Foster"],
    boxOffice: "$28 million",
    dna: { "Crime": 50, "Drama": 50 },
    scenes: [
      { time: 20, intensity: 30, label: "Night Shift", color: "#fbbf24" },
      { time: 50, intensity: 55, label: "Mirror Monologue", color: "#d97706" },
      { time: 80, intensity: 70, label: "Rejection", color: "#78350f" },
      { time: 100, intensity: 92, label: "The Shootout", color: "#b91c1c" },
      { time: 110, intensity: 45, label: "Aftermath", color: "#f59e0b" }
    ],
    themes: ["Isolation", "Violence", "Delusion"],
    synopsis: "Travis Bickle, a mentally unstable Vietnam War veteran, works as a nighttime taxi driver in a decaying, morally bankrupt New York City. Consumed by chronic insomnia and deep loneliness, he becomes obsessed with 'cleaning up' the filth he sees on the streets. After a failed attempt to woo a campaign worker and a growing fixation on saving a twelve-year-old prostitute named Iris from her pimp, Travis's fragile grip on reality snaps. He arms himself and transforms into a violent vigilante, culminating in a bloody rampage that tragically—and ironically—turns him into a media hero."
  }),

  // 5. Past Lives (2023)
  666277: createMovieData({
    emotionalIntensity: 93,
    complexityLevel: "SUBTLE",
    dominantColor: "#0891b2",
    rating: 7.9, criticsScore: 96, audienceScore: 90,
    director: "Celine Song",
    cast: ["Greta Lee", "Teo Yoo", "John Magaro"],
    boxOffice: "$40 million",
    dna: { "Romance": 60, "Drama": 40 },
    scenes: [
      { time: 15, intensity: 25, label: "Childhood", color: "#67e8f9" },
      { time: 45, intensity: 45, label: "Skype Calls", color: "#22d3ee" },
      { time: 75, intensity: 70, label: "The Bar", color: "#0e7490" },
      { time: 95, intensity: 93, label: "The Uber Wait", color: "#155e75" },
      { time: 100, intensity: 80, label: "Walk Home", color: "#0891b2" }
    ],
    themes: ["Destiny", "Regret", "Identity"],
    synopsis: "Nora and Hae Sung, two deeply connected childhood friends in Seoul, are wrested apart after Nora's family emigrates to North America. Decades later, they are reunited in New York for one fateful week as they confront notions of destiny, love, and the choices that make a life. The film delicately explores the Korean concept of 'In-Yun' (providence or fate) as Nora finds herself caught between her American husband, who represents the life she chose, and Hae Sung, who represents the life she left behind, leading to a quiet but devastating conclusion about the roads not taken."
  }),

  // 6. The Battle of Algiers (1966)
  17295: createMovieData({
    emotionalIntensity: 94,
    complexityLevel: "VISCERAL",
    dominantColor: "#52525b",
    rating: 8.1, criticsScore: 99, audienceScore: 90,
    director: "Gillo Pontecorvo",
    cast: ["Jean Martin"],
    boxOffice: "$1 million",
    dna: { "War": 60, "Drama": 40 },
    scenes: [
      { time: 20, intensity: 40, label: "Organization", color: "#71717a" },
      { time: 50, intensity: 65, label: "Checkpoint", color: "#3f3f46" },
      { time: 80, intensity: 94, label: "Cafe Bombings", color: "#18181b" },
      { time: 100, intensity: 85, label: "Crackdown", color: "#27272a" },
      { time: 120, intensity: 90, label: "Aftermath", color: "#52525b" }
    ],
    themes: ["Colonialism", "Revolution", "Power"],
    synopsis: "Shot with a gritty, newsreel style that feels impossibly real, this masterpiece chronicles the Algerian struggle for independence from the French government in the 1950s. The film focuses on the escalation of violence between the FLN guerrilla fighters, led by the charismatic Ali La Pointe, and the French paratroopers tasked with crushing the rebellion. By refusing to vilify either side completely, it offers a harrowing, unbiased look at urban warfare, showing how the tactical use of torture and terrorism spirals into a cycle of bloodshed that ultimately leads to political revolution."
  }),

  // 7. Sing Sing (2024)
  1155828: createMovieData({
    emotionalIntensity: 89,
    complexityLevel: "HUMANIST",
    dominantColor: "#b45309",
    rating: 7.8, criticsScore: 98, audienceScore: 95,
    director: "Greg Kwedar",
    cast: ["Colman Domingo"],
    dna: { "Drama": 100 },
    scenes: [
      { time: 15, intensity: 30, label: "The Yard", color: "#78350f" },
      { time: 45, intensity: 50, label: "Rehearsal", color: "#d97706" },
      { time: 75, intensity: 70, label: "Audition", color: "#fbbf24" },
      { time: 95, intensity: 89, label: "Final Play", color: "#b45309" },
      { time: 105, intensity: 70, label: "Aftermath", color: "#92400e" }
    ],
    themes: ["Rehabilitation", "Art", "Dignity"],
    synopsis: "Based on the real-life Rehabilitation Through the Arts (RTA) program, the film follows Divine G, imprisoned at Sing Sing for a crime he didn't commit, who finds purpose by acting in a theatre group alongside other incarcerated men. When a wary, street-hardened newcomer joins the group, the dynamic shifts, challenging the men to stage an original comedy rather than a drama. It is a profound look at the humanity within the prison system, exploring how art allows these men to transcend their cages, confront their pasts, and reclaim their dignity in an environment designed to strip it away."
  }),

  // 8. The Color Purple (1985)
  873: createMovieData({
    emotionalIntensity: 97,
    complexityLevel: "CLASSIC",
    dominantColor: "#7e22ce",
    rating: 7.8, criticsScore: 81, audienceScore: 92,
    director: "Steven Spielberg",
    cast: ["Whoopi Goldberg", "Oprah Winfrey"],
    boxOffice: "$142 million",
    dna: { "Drama": 80, "Romance": 20 },
    scenes: [
      { time: 20, intensity: 75, label: "Separation", color: "#581c87" },
      { time: 60, intensity: 65, label: "Defiance", color: "#7e22ce" },
      { time: 90, intensity: 70, label: "Love", color: "#a855f7" },
      { time: 120, intensity: 96, label: "Dinner Scene", color: "#d8b4fe" },
      { time: 150, intensity: 98, label: "Reunion", color: "#f3e8ff" }
    ],
    themes: ["Resilience", "Sisterhood", "Forgiveness"],
    synopsis: "An epic, heart-wrenching tale spanning forty years in the life of Celie, an African-American woman living in the South who survives incredible abuse and bigotry. After her father abuses her and marries her off to the equally debasing 'Mister,' she is separated from her beloved sister Nettie and forced into a life of servitude. Through her friendships with the strong-willed Sofia and the glamorous Shug Avery, Celie slowly discovers her own self-worth and inner strength, eventually finding the courage to stand up to her oppressors and reclaim the life and family that were stolen from her."
  }),

  // 9. Shame (2011)
  76025: createMovieData({
    emotionalIntensity: 93,
    complexityLevel: "DISTURBING",
    dominantColor: "#1e3a8a",
    rating: 7.2, criticsScore: 79, audienceScore: 76,
    director: "Steve McQueen",
    cast: ["Michael Fassbender"],
    boxOffice: "$20 million",
    dna: { "Drama": 100 },
    scenes: [
      { time: 15, intensity: 30, label: "Routine", color: "#172554" },
      { time: 45, intensity: 55, label: "Escalation", color: "#2563eb" },
      { time: 75, intensity: 78, label: "Collapse", color: "#1d4ed8" },
      { time: 90, intensity: 93, label: "Spiral", color: "#1e3a8a" },
      { time: 100, intensity: 85, label: "Aftermath", color: "#93c5fd" }
    ],
    themes: ["Addiction", "Isolation", "Shame"],
    synopsis: "Brandon is a handsome, successful 30-something living in New York who hides a consuming secret: he is a sex addict unable to manage his compulsions. His carefully cultivated private life of casual hookups and internet pornography is upended when his wayward, emotionally volatile younger sister, Sissy, arrives unannounced to stay with him. Her presence forces Brandon to confront the intimacy he desperately avoids, sending him into a dark, destructive spiral through the city's underbelly as he tries to outrun his own self-loathing and the trauma that binds them together."
  }),

  // 10. Joker (2019)
  475557: createMovieData({
    emotionalIntensity: 94,
    complexityLevel: "PROVOCATIVE",
    dominantColor: "#15803d",
    rating: 8.4, criticsScore: 69, audienceScore: 88,
    director: "Todd Phillips",
    cast: ["Joaquin Phoenix"],
    boxOffice: "$1.07 billion",
    dna: { "Crime": 50, "Drama": 50 },
    scenes: [
      { time: 20, intensity: 35, label: "Marginalization", color: "#facc15" },
      { time: 50, intensity: 65, label: "Subway", color: "#166534" },
      { time: 80, intensity: 75, label: "Transformation", color: "#dc2626" },
      { time: 105, intensity: 94, label: "Talk Show", color: "#b91c1c" },
      { time: 120, intensity: 90, label: "Aftermath", color: "#15803d" }
    ],
    themes: ["Alienation", "Violence", "Society"],
    synopsis: "In the crumbling, rat-infested Gotham City of 1981, Arthur Fleck is a mentally ill, failed stand-up comedian who is relentlessly marginalized and bullied by society. Living with his ailing mother and suffering from a condition that causes uncontrollable laughter, Arthur's grip on reality fractures after a series of humiliating rejections and violent encounters. As he uncovers shocking truths about his past and stops taking his medication, he embraces a new, nihilistic persona known as 'Joker,' sparking a violent counter-cultural revolution that burns the city to the ground."
       
    })
};

export const STRATEGIC_QUOTES = {
    376867: "In moonlight, black boys look blue.",
    1064213: "Architecture is an act of faith.",
    655: "I knew these people... these two people... they were in love with each other.",
    103: "Loneliness has followed me my whole life.",
    666277: "If you leave something behind, you gain something too.",
    17295: "Acts of violence don't win wars. Neither do wars win anything.",
    1155828: "We are more than the worst thing we've ever done.",
    873: "Everything you done to me, already done to you.",
    76025: "I'm not a bad person. I just have bad habits.",
    475557: "I used to think that my life was a tragedy, but now I realize, it's a comedy."
};

export const HBO_DRAMA_MOVIE_FAQS = {
    'Moonlight': [
        { question: "What is the meaning of the title 'Moonlight'?", answer: "The title comes from an unpublished play by Tarell Alvin McCraney titled 'In Moonlight Black Boys Look Blue.' It refers to the idea of seeing someone's true self in the darkness, stripped of societal labels and the harsh light of day." },
        { question: "Why are there three different actors for Chiron?", answer: "Director Barry Jenkins used three different actors (Alex Hibbert, Ashton Sanders, Trevante Rhodes) to depict the three distinct stages of Chiron's life (Little, Chiron, Black). To ensure authentic, isolated performances, he did not allow the actors to meet each other during filming." },
        { question: "Did Moonlight really win Best Picture?", answer: "Yes, in one of the most dramatic moments in Oscar history. 'La La Land' was incorrectly announced as the winner first, before the mistake was corrected on stage, awarding the actual trophy to 'Moonlight'." }
    ],
    'The Brutalist': [
        { question: "What is 'Brutalist' architecture?", answer: "Brutalism is an architectural style characterized by massive, monolithic, and blocky appearance with a rigid geometric style and large-scale use of poured concrete. The film uses this style as a metaphor for the protagonist's abrasive, unyielding personality and the weight of his trauma." },
        { question: "Why is the film so long?", answer: "At nearly 3.5 hours, the film includes a built-in intermission (in theatrical screenings). This length allows it to operate as a true epic, spanning decades of American history and the slow, grinding process of building a life—and a masterpiece—from scratch." },
        { question: "Is it a true story?", answer: "No, László Toth is a fictional character, but his journey is an amalgamation of many real-life European architects who emigrated to America after WWII, blending the styles of figures like Marcel Breuer and Louis Kahn." }
    ],
    'Paris, Texas': [
        { question: "Why is the peep show scene so famous?", answer: "The scene is a masterclass in visual storytelling. By placing the characters on either side of a one-way mirror, they can be emotionally vulnerable without the threat of physical contact. It allows Travis to confess his sins while looking at his own reflection, merging his identity with hers." },
        { question: "Does the film take place in Paris?", answer: "No. The title refers to Paris, Texas, a dusty town where Travis believes he was conceived. He carries a picture of a vacant lot there, representing a dream of home and belonging that he can never actually reach." },
        { question: "What is the meaning of the ending?", answer: "The ending is bittersweet. Travis reunites his son with his mother but chooses to drive away alone. It suggests that while he has found redemption by fixing his family, he knows he is too broken to be a part of it, choosing self-exile as his final act of love." }
    ],
    'Taxi Driver': [
        { question: "Is Travis Bickle a hero or a villain?", answer: "Scorsese leaves this ambiguous. The media in the film paints him as a hero for saving a child, but the audience knows he is a ticking time bomb who nearly assassinated a senator. He is a study in how society can misinterpret violence as heroism." },
        { question: "Did Robert De Niro improvise 'You talkin' to me'?", answer: "Yes. The script simply said 'Travis speaks to himself in the mirror.' De Niro improvised the dialogue based on an exercise he learned in acting class, creating one of the most iconic lines in cinema history." },
        { question: "Why is the color palette so unique?", answer: "The film uses neon greens, yellows, and reds to create a 'fever dream' aesthetic. This visual style reflects Travis's insomnia and his distorted view of New York City as a hellscape that needs to be cleansed." }
    ],
    'Past Lives': [
        { question: "What does 'In-Yun' mean?", answer: "In-Yun is a Korean concept stemming from Buddhism that translates to 'providence' or 'fate.' It suggests that every interaction between two people is the result of thousands of layers of connections from past lives. The film uses this to explore the idea that people are destined to meet, even if they aren't destined to stay together." },
        { question: "Is Past Lives autobiographical?", answer: "Yes, writer-director Celine Song based the film on a real moment in her life where she sat at a bar in New York between her childhood sweetheart from Korea and her American husband, acting as a translator for two parts of her own soul." },
        { question: "Why doesn't Nora leave her husband?", answer: "The film subverts the typical romance trope. Nora loves her husband and her life in New York. The tragedy isn't that she is unhappy, but that choosing one life inevitably means mourning the loss of another possible life." }
    ],
    'The Battle of Algiers': [
        { question: "Is this a documentary?", answer: "No, but it is filmed in a 'newsreel' style using handheld cameras and high-contrast black and white film to mimic documentary footage. It feels so real that it is often used as a training tool by both revolutionary groups (like the Black Panthers) and military forces (like the Pentagon) to understand urban guerrilla warfare." },
        { question: "Why is the film considered unbiased?", answer: "Director Gillo Pontecorvo depicts atrocities committed by both the French military (torture) and the Algerian FLN (bombing civilians). While his sympathies lie with the liberation movement, he refuses to romanticize the violence, showing the terrible human cost on both sides." },
        { question: "Who is Ali La Pointe?", answer: "Ali La Pointe was a real figure in the Algerian struggle for independence. The film tracks his recruitment from a street criminal to a revolutionary leader, serving as the audience's entry point into the FLN." }
    ],
    'Sing Sing': [
        { question: "Are the actors real prisoners?", answer: "Yes, the majority of the cast is made up of formerly incarcerated men who were actually part of the Rehabilitation Through the Arts (RTA) program at Sing Sing prison. Clarence Maclin plays a version of himself, adding a layer of profound authenticity to the storytelling." },
        { question: "Is the theater program real?", answer: "Yes, the RTA program has operated in Sing Sing for over 25 years. The film accurately depicts their process of selecting plays, rehearsals, and how the vulnerability of acting helps the men process their trauma and regain their humanity." },
        { question: "Why did they shoot on 16mm film?", answer: "The director chose 16mm film to give the movie a texture that feels timeless and raw. It softens the harsh fluorescent lighting of the prison and emphasizes the warmth and humanity of the actors' faces rather than the coldness of the bars." }
    ],
    'The Color Purple': [
        { question: "How does the movie differ from the book?", answer: "Steven Spielberg's film softens some of the darker, more graphic elements of Alice Walker's novel, particularly the sexual relationship between Celie and Shug Avery. It focuses more on the emotional triumph and the broad narrative arc, turning it into a grand Hollywood epic." },
        { question: "Why was Whoopi Goldberg cast?", answer: "This was Whoopi Goldberg's film debut. Spielberg saw her one-woman show on Broadway and knew she had the range to play Celie. Her performance is considered one of the greatest debuts in film history, earning her a Golden Globe and an Oscar nomination." },
        { question: "What is the significance of the title?", answer: "The title refers to a line where Shug tells Celie, 'I think it pisses God off if you walk by the color purple in a field somewhere and don't notice it.' It symbolizes the beauty and divinity that exists in life, even amidst suffering, and the importance of noticing and claiming that beauty." }
    ],
    'Shame': [
        { question: "Why is the main character named Brandon?", answer: "The name is generic, reflecting his desire to blend in. Brandon is a high-functioning addict who wears a mask of corporate success. His struggle is entirely internal, hidden behind a generic name and a perfectly clean apartment." },
        { question: "Is the film condemning sex?", answer: "No. The film is not about sex; it is about addiction. It portrays sex not as an act of pleasure or intimacy, but as a compulsion used to numb pain and avoid emotional connection. It treats sex addiction with the same gravity and tragedy as drug or alcohol addiction." },
        { question: "What does the ending mean?", answer: "The ending is ambiguous. Brandon is seen on the subway again, spotting a woman he saw at the beginning. It suggests that the cycle of addiction is circular and relentless. Whether he approaches her or not is left to the audience, questioning if he has learned anything or if he is doomed to repeat the loop." }
    ],
    'Joker': [
        { question: "Is the Joker a hero in this movie?", answer: "To some in Gotham, he becomes a symbol of anti-establishment rage. However, the film portrays him as a deeply disturbed, violent narcissist. It explains his origin without excusing his actions, challenging the audience to empathize with his pain while being horrified by his violence." },
        { question: "Is Thomas Wayne the villain?", answer: "The film flips the Batman lore by presenting Thomas Wayne not as a saintly philanthropist, but as an out-of-touch, arrogant billionaire who dismisses the poor as 'clowns.' This recontextualization aligns the audience with Arthur's perspective of being downtrodden by the elite." },
        { question: "Is the whole movie a hallucination?", answer: "There is a valid theory that the entire film is a fantasy concocted by Arthur in Arkham Asylum. The final scene shows him laughing at a joke he 'wouldn't get,' suggesting the preceding events might be his internal narrative. The unreliable narrator aspect is key to the film's psychological depth." }
    ]
};

export const getTMDBPosterUrl = (posterPath, size = 'medium') => {
    if (!posterPath) return null;
    return `${TMDB_CONFIG.IMAGE_BASE_URL}/${TMDB_CONFIG.POSTER_SIZES[size] || 'w500'}${posterPath}`;
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis,
        'genre': movie.genre,
        'datePublished': movie.year.toString(),
        'director': { '@type': 'Person', 'name': movieInfo?.director || 'Director' },
        'duration': `PT${movie.runtime}M`,
        'image': FALLBACK_POSTERS[movie.tmdbId] || '',
        'aggregateRating': { 
            '@type': 'AggregateRating', 
            'ratingValue': movieInfo?.rating || 7.5, 
            'bestRating': 10, 
            'worstRating': 1 
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