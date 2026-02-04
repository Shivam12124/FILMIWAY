// utils/paramountThrillerMovieData.js - PARAMOUNT+ THRILLER COLLECTION DATA
// High Tension, Psychological Dread, and Edge-of-Seat Suspense

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 6977, "imdbID": "tt0477348", "Title": "No Country for Old Men", "year": 2007, "genre": "Crime", "runtime": 122, "rank": 1 },
    { "tmdbId": 1949, "imdbID": "tt0443706", "Title": "Zodiac", "year": 2007, "genre": "Mystery", "runtime": 157, "rank": 2 },
    { "tmdbId": 333371, "imdbID": "tt1179933", "Title": "10 Cloverfield Lane", "year": 2016, "genre": "Sci-Fi", "runtime": 103, "rank": 3 },
    { "tmdbId": 1029281, "imdbID": "tt22375054", "Title": "Strange Darling", "year": 2024, "genre": "Thriller", "runtime": 96, "rank": 4 },
    { "tmdbId": 1538, "imdbID": "tt0371746", "Title": "Collateral", "year": 2004, "genre": "Crime", "runtime": 120, "rank": 5 },
    { "tmdbId": 447332, "imdbID": "tt6644200", "Title": "A Quiet Place", "year": 2018, "genre": "Horror", "runtime": 90, "rank": 6 },
    { "tmdbId": 4771, "imdbID": "tt0452623", "Title": "Gone Baby Gone", "year": 2007, "genre": "Crime", "runtime": 114, "rank": 7 },
    { "tmdbId": 397243, "imdbID": "tt3289956", "Title": "The Autopsy of Jane Doe", "year": 2016, "genre": "Horror", "runtime": 86, "rank": 8 },
    { "tmdbId": 75780, "imdbID": "tt0790724", "Title": "Jack Reacher", "year": 2012, "genre": "Action", "runtime": 130, "rank": 9 },
    { "tmdbId": 4553, "imdbID": "tt0361862", "Title": "The Machinist", "year": 2004, "genre": "Thriller", "runtime": 101, "rank": 10 }
];

// ✅ SENSITIVE TIMELINES (Focusing on Tension, Violence, and Jumpscares)
export const SENSITIVE_TIMELINES = {
    // 1. No Country for Old Men
    6977: { 
        scenes: [
            { start: "0:05:00", end: "0:08:00", type: "Strangulation/Murder", severity: "High" },
            { start: "0:45:00", end: "0:50:00", type: "Hotel Shootout", severity: "High" }
        ] 
    },
    // 2. Zodiac
    1949: { 
        scenes: [
            { start: "0:05:00", end: "0:10:00", type: "Lovers' Lane Murder", severity: "High" },
            { start: "0:55:00", end: "1:00:00", type: "Lake Berryessa Stabbing", severity: "Extreme" }
        ] 
    },
    // 3. 10 Cloverfield Lane
    333371: { 
        scenes: [
            { start: "0:45:00", end: "0:50:00", type: "Acid Attack/Face Melt", severity: "High" },
            { start: "1:30:00", end: "1:40:00", type: "Bunker Escape/Alien Fight", severity: "Moderate" }
        ] 
    },
    // 4. Strange Darling
    1029281: { 
        scenes: [
            { start: "0:20:00", end: "0:25:00", type: "Graphic Stabbing", severity: "High" },
            { start: "1:10:00", end: "1:15:00", type: "Torture Scene", severity: "Extreme" }
        ] 
    },
    // 5. Collateral
    1538: { 
        scenes: [
            { start: "0:25:00", end: "0:30:00", type: "Alleyway Shooting", severity: "Moderate" },
            { start: "1:45:00", end: "1:55:00", type: "Subway Stalking", severity: "High" }
        ] 
    },
    // 6. A Quiet Place
    447332: { 
        scenes: [
            { start: "0:08:00", end: "0:10:00", type: "Child Death", severity: "High" },
            { start: "1:00:00", end: "1:05:00", type: "Bathtub Birth/Nail", severity: "High" }
        ] 
    },
    // 7. Gone Baby Gone
    4771: { 
        scenes: [
            { start: "1:15:00", end: "1:20:00", type: "Child Abuse Discovery", severity: "High" },
            { start: "1:30:00", end: "1:35:00", type: "Execution", severity: "Moderate" }
        ] 
    },
    // 8. The Autopsy of Jane Doe
    397243: { 
        scenes: [
            { start: "0:30:00", end: "0:35:00", type: "Graphic Autopsy Detail", severity: "High" },
            { start: "1:10:00", end: "1:15:00", type: "Reanimated Corpse Scare", severity: "High" }
        ] 
    },
    // 9. Jack Reacher
    75780: { 
        scenes: [
            { start: "0:02:00", end: "0:06:00", type: "Public Sniper Shooting", severity: "High" },
            { start: "1:40:00", end: "1:50:00", type: "Final Shootout/Combat", severity: "Moderate" }
        ] 
    },
    // 10. The Machinist
    4553: { 
        scenes: [
            { start: "0:35:00", end: "0:40:00", type: "Factory Accident (Arm Loss)", severity: "High" },
            { start: "1:30:00", end: "1:35:00", type: "Hit and Run Flashback", severity: "High" }
        ] 
    }
};

export const FALLBACK_POSTERS = {
    6977: "https://image.tmdb.org/t/p/w500/bj1v6YKF8yiMrFfD77J9X1T9FjL.jpg",
    1949: "https://image.tmdb.org/t/p/w500/6YkeTnSE8Uwh1qV93lU41Q9iK3M.jpg",
    333371: "https://image.tmdb.org/t/p/w500/84DangkzJ2c019aM799fWcwpK.jpg",
    1029281: "https://image.tmdb.org/t/p/w500/gH7f9c21J2113211.jpg", 
    1538: "https://image.tmdb.org/t/p/w500/l42W4143431.jpg",
    447332: "https://image.tmdb.org/t/p/w500/n5A7brJCjejceZS3WNSwdLG.jpg",
    4771: "https://image.tmdb.org/t/p/w500/123gonebaby.jpg",
    397243: "https://image.tmdb.org/t/p/w500/autopsyjanedoe.jpg",
    75780: "https://image.tmdb.org/t/p/w500/u321jackreacher.jpg",
    4553: "https://image.tmdb.org/t/p/w500/machinist123.jpg"
};

// ✅ HELPER: Updated for Thriller Intensity
const createMovieData = (data) => ({
    suspenseIntensity: 85,    // Default High Suspense
    complexityLevel: "HIGH",
    dominantColor: "#b91c1c", // Red default
    ...data,
});

export const COMPLETE_MOVIE_DATA = {

  // 1. No Country for Old Men (2007)
  6977: createMovieData({
    suspenseIntensity: 98,
    complexityLevel: "MASTERPIECE",
    dominantColor: "#78350f",
    rating: 8.2, criticsScore: 93, audienceScore: 86,
    director: "Joel & Ethan Coen",
    cast: ["Javier Bardem", "Tommy Lee Jones", "Josh Brolin"],
    boxOffice: "$171.6 million", budget: "$25 million",
    dna: { "Crime": 60, "Thriller": 40 },
    scenes: [
      { time: 15, intensity: 45, label: "The Coin Toss", color: "#92400e" },
      { time: 45, intensity: 85, label: "Hotel Shootout", color: "#b91c1c" },
      { time: 80, intensity: 75, label: "River Chase", color: "#ea580c" },
      { time: 100, intensity: 90, label: "Motel Confrontation", color: "#7f1d1d" },
      { time: 115, intensity: 60, label: "The Dreams", color: "#78350f" }
    ],
    themes: ["Fate", "Violence", "Morality"],
    synopsis: "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande. As he attempts to escape with the money, he is pursued by an unstoppable, psychopathic hitman who decides the fate of his victims with the toss of a coin, while an aging sheriff struggles to make sense of the escalating brutality."
  }),

  // 2. Zodiac (2007)
  1949: createMovieData({
    suspenseIntensity: 95,
    complexityLevel: "OBSESSIVE",
    dominantColor: "#1e3a8a",
    rating: 7.7, criticsScore: 90, audienceScore: 89,
    director: "David Fincher",
    cast: ["Jake Gyllenhaal", "Mark Ruffalo", "Robert Downey Jr."],
    boxOffice: "$84.7 million", budget: "$65 million",
    dna: { "Mystery": 70, "Thriller": 30 },
    scenes: [
      { time: 10, intensity: 60, label: "Lovers Lane", color: "#1e40af" },
      { time: 55, intensity: 95, label: "Lake Berryessa", color: "#1e3a8a" },
      { time: 90, intensity: 50, label: "The Cipher", color: "#60a5fa" },
      { time: 130, intensity: 85, label: "Basement Scene", color: "#172554" },
      { time: 150, intensity: 70, label: "Hardware Store", color: "#3b82f6" }
    ],
    themes: ["Obsession", "Truth", "Paranoia"],
    synopsis: "In the late 1960s/early 1970s, a San Francisco cartoonist becomes an amateur detective obsessed with tracking down the Zodiac Killer, an unidentified individual who terrorizes Northern California with a killing spree. As the killer taunts police with cyphers and letters, the investigation grinds on for years, destroying the lives and careers of those who become consumed by the need to know the truth."
  }),

  // 3. 10 Cloverfield Lane (2016)
  333371: createMovieData({
    suspenseIntensity: 92,
    complexityLevel: "CLAUSTROPHOBIC",
    dominantColor: "#15803d",
    rating: 7.2, criticsScore: 90, audienceScore: 79,
    director: "Dan Trachtenberg",
    cast: ["John Goodman", "Mary Elizabeth Winstead", "John Gallagher Jr."],
    boxOffice: "$110.2 million", budget: "$15 million",
    dna: { "Sci-Fi": 40, "Thriller": 60 },
    scenes: [
      { time: 15, intensity: 45, label: "Waking Up", color: "#166534" },
      { time: 45, intensity: 80, label: "Dinner Scene", color: "#b91c1c" },
      { time: 70, intensity: 60, label: "The Air Lock", color: "#22c55e" },
      { time: 90, intensity: 92, label: "The Truth", color: "#15803d" },
      { time: 100, intensity: 85, label: "Escape", color: "#14532d" }
    ],
    themes: ["Paranoia", "Survival", "Trust"],
    synopsis: "After getting into a car accident, a woman wakes up in a bunker with two men who claim that the outside world has been affected by a widespread chemical attack. Uncertainty about what is true and what is a lie creates unbearable tension as she tries to determine if her savior is actually her captor, and if the monsters outside are real."
  }),

  // 4. Strange Darling (2024)
  1029281: createMovieData({
    suspenseIntensity: 94,
    complexityLevel: "TWISTED",
    dominantColor: "#be123c",
    rating: 7.5, criticsScore: 96, audienceScore: 85,
    director: "JT Mollner",
    cast: ["Willa Fitzgerald", "Kyle Gallner"],
    boxOffice: "$3 million", budget: "$4 million",
    dna: { "Thriller": 80, "Horror": 20 },
    scenes: [
      { time: 10, intensity: 50, label: "The Motel", color: "#fb7185" },
      { time: 40, intensity: 85, label: "The Chase", color: "#e11d48" },
      { time: 60, intensity: 94, label: "The Twist", color: "#be123c" },
      { time: 80, intensity: 90, label: "Interrogation", color: "#881337" },
      { time: 90, intensity: 80, label: "Resolution", color: "#9f1239" }
    ],
    themes: ["Perception", "Gender Roles", "Violence"],
    synopsis: "A clever and relentless cat-and-mouse thriller that unfolds in six non-linear chapters. What appears to be a simple one-night stand gone wrong spirals into a blood-soaked murder spree, but nothing is quite what it seems. The film subverts expectations at every turn, challenging the audience's assumptions about predator and prey."
  }),

  // 5. Collateral (2004)
  1538: createMovieData({
    suspenseIntensity: 89,
    complexityLevel: "REAL-TIME",
    dominantColor: "#3b82f6",
    rating: 7.5, criticsScore: 86, audienceScore: 84,
    director: "Michael Mann",
    cast: ["Tom Cruise", "Jamie Foxx", "Jada Pinkett Smith"],
    boxOffice: "$220 million", budget: "$65 million",
    dna: { "Crime": 50, "Action": 50 },
    scenes: [
      { time: 20, intensity: 40, label: "The First Hit", color: "#60a5fa" },
      { time: 50, intensity: 75, label: "Jazz Club", color: "#2563eb" },
      { time: 80, intensity: 65, label: "Visiting Mother", color: "#93c5fd" },
      { time: 100, intensity: 89, label: "Club Fever", color: "#1d4ed8" },
      { time: 115, intensity: 95, label: "Subway Chase", color: "#1e3a8a" }
    ],
    themes: ["Fate", "Professionalism", "Isolation"],
    synopsis: "A cab driver finds himself the hostage of an engaging contract killer as he makes his rounds from hit to hit during one night in Los Angeles. He must find a way to save both himself and the killer's last victim without becoming a casualty of the professional assassin's work or the police pursuing them."
  }),

  // 6. A Quiet Place (2018)
  447332: createMovieData({
    suspenseIntensity: 96,
    complexityLevel: "SENSORY",
    dominantColor: "#b45309",
    rating: 7.5, criticsScore: 96, audienceScore: 83,
    director: "John Krasinski",
    cast: ["Emily Blunt", "John Krasinski", "Millicent Simmonds"],
    boxOffice: "$341 million", budget: "$17 million",
    dna: { "Horror": 60, "Thriller": 40 },
    scenes: [
      { time: 10, intensity: 80, label: "Bridge Scene", color: "#ea580c" },
      { time: 40, intensity: 50, label: "The Waterfall", color: "#fcd34d" },
      { time: 60, intensity: 96, label: "Bathtub Scene", color: "#b45309" },
      { time: 75, intensity: 90, label: "Grain Silo", color: "#78350f" },
      { time: 85, intensity: 85, label: "The Basement", color: "#92400e" }
    ],
    themes: ["Family", "Survival", "Silence"],
    synopsis: "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing. They communicate through sign language and use ingenuity to survive, but the impending arrival of a new baby threatens to shatter their fragile safety. Every sound could be their last."
  }),

  // 7. Gone Baby Gone (2007)
  4771: createMovieData({
    suspenseIntensity: 88,
    complexityLevel: "MORAL",
    dominantColor: "#374151",
    rating: 7.6, criticsScore: 94, audienceScore: 86,
    director: "Ben Affleck",
    cast: ["Casey Affleck", "Michelle Monaghan", "Morgan Freeman"],
    boxOffice: "$34.6 million", budget: "$19 million",
    dna: { "Crime": 60, "Drama": 40 },
    scenes: [
      { time: 20, intensity: 30, label: "The Bar", color: "#6b7280" },
      { time: 60, intensity: 80, label: "The Quarry", color: "#4b5563" },
      { time: 80, intensity: 88, label: "House Raid", color: "#1f2937" },
      { time: 100, intensity: 85, label: "The Exchange", color: "#111827" },
      { time: 110, intensity: 95, label: "The Choice", color: "#000000" }
    ],
    themes: ["Morality", "Justice", "Consequence"],
    synopsis: "Two Boston area private detectives, Patrick Kenzie and Angie Gennaro, are hired to investigate the kidnapping of a little girl, which has become a media sensation. As they navigate the seedy underbelly of Dorchester's criminal world and corrupt police force, they uncover a web of lies that leads to a morally devastating conclusion about what is truly best for a child."
  }),

  // 8. The Autopsy of Jane Doe (2016)
  397243: createMovieData({
    suspenseIntensity: 91,
    complexityLevel: "SUPERNATURAL",
    dominantColor: "#581c87",
    rating: 6.8, criticsScore: 86, audienceScore: 73,
    director: "André Øvredal",
    cast: ["Emile Hirsch", "Brian Cox", "Olwen Kelly"],
    boxOffice: "$6 million", budget: "$10 million",
    dna: { "Horror": 70, "Mystery": 30 },
    scenes: [
      { time: 15, intensity: 40, label: "Arrival", color: "#7e22ce" },
      { time: 40, intensity: 75, label: "Internal Exam", color: "#6b21a8" },
      { time: 60, intensity: 85, label: "Lights Out", color: "#581c87" },
      { time: 75, intensity: 91, label: "The Bell", color: "#3b0764" },
      { time: 85, intensity: 80, label: "The Ritual", color: "#4c1d95" }
    ],
    themes: ["Secrets", "Supernatural", "Isolation"],
    synopsis: "Father and son coroners receive a mysterious unidentified corpse with no apparent cause of death. As they attempt to uncover the secrets of her death during a stormy night, they encounter increasingly bizarre and terrifying supernatural phenomena that suggest the body is not just a victim, but a threat."
  }),

  // 9. Jack Reacher (2012)
  75780: createMovieData({
    suspenseIntensity: 85,
    complexityLevel: "COOL",
    dominantColor: "#0f172a",
    rating: 7.0, criticsScore: 63, audienceScore: 67,
    director: "Christopher McQuarrie",
    cast: ["Tom Cruise", "Rosamund Pike", "Richard Jenkins"],
    boxOffice: "$218 million", budget: "$60 million",
    dna: { "Action": 60, "Thriller": 40 },
    scenes: [
      { time: 5, intensity: 70, label: "Sniper Opening", color: "#334155" },
      { time: 40, intensity: 60, label: "Bar Fight", color: "#475569" },
      { time: 75, intensity: 80, label: "Car Chase", color: "#1e293b" },
      { time: 100, intensity: 75, label: "Bathroom Fight", color: "#0f172a" },
      { time: 120, intensity: 85, label: "The Quarry", color: "#020617" }
    ],
    themes: ["Justice", "Conspiracy", "Competence"],
    synopsis: "A homicide investigator digs deeper into a case involving a trained military sniper who shot five random victims. When the accused man says 'Get Jack Reacher,' the former Army MP investigator arrives to dismantle the official story. Reacher uncovers a conspiracy that proves the suspect is innocent and that the real killer is still out there."
  }),

  // 10. The Machinist (2004)
  4553: createMovieData({
    suspenseIntensity: 90,
    complexityLevel: "PSYCHOLOGICAL",
    dominantColor: "#3f3f46",
    rating: 7.7, criticsScore: 77, audienceScore: 83,
    director: "Brad Anderson",
    cast: ["Christian Bale", "Jennifer Jason Leigh"],
    boxOffice: "$8.2 million", budget: "$5 million",
    dna: { "Thriller": 80, "Drama": 20 },
    scenes: [
      { time: 10, intensity: 30, label: "Insomnia", color: "#71717a" },
      { time: 40, intensity: 80, label: "The Accident", color: "#52525b" },
      { time: 70, intensity: 75, label: "Post-It Notes", color: "#3f3f46" },
      { time: 90, intensity: 85, label: "The Sewer", color: "#27272a" },
      { time: 100, intensity: 90, label: "The Truth", color: "#18181b" }
    ],
    themes: ["Guilt", "Paranoia", "Redemption"],
    synopsis: "Trevor Reznik is an industrial worker who hasn't slept in a year. His physical and mental health have deteriorated to the point where he begins to question his own sanity. As cryptic notes appear in his apartment and he starts seeing a co-worker no one else admits exists, Trevor descends into a paranoid nightmare to find out who is plotting against him—or if he is plotting against himself."
  })
};

export const STRATEGIC_QUOTES = {
    6977: "Call it, friendo.",
    1949: "I am not the Zodiac. And if I were, I certainly wouldn't tell you.",
    333371: "Monsters come in many forms.",
    1029281: "Do I look like a victim to you?",
    1538: "Yo, homie. Is that my briefcase?",
    447332: "If they hear you, they hunt you.",
    4771: "I always believed it was the things you don't choose that makes you who you are.",
    397243: "Every body has a secret.",
    75780: "I mean to beat you to death and drink your blood from a boot.",
    4553: "Right now I want to sleep. I just want to sleep."
};

export const PARAMOUNT_THRILLER_MOVIE_FAQS = {
    'No Country for Old Men': [
        { question: "What does the ending mean?", answer: "The ending, specifically Sheriff Bell's dream, signifies his acceptance that he is 'overmatched' by the new, senseless violence of the world. He retires because he cannot understand or fight this evil, making him an 'old man' in a country that no longer makes sense to him." },
        { question: "Why does Anton Chigurh kill people?", answer: "Chigurh views himself as an agent of fate. He often uses a coin toss to decide his victims' lives, believing that their choices and luck have led them to that exact moment. He has no personal animosity; he is simply the deliverer of consequence." },
        { question: "Is there no music in the movie?", answer: "There is almost no musical score. The Coen brothers chose to rely on ambient sound (wind, footsteps, breathing) to create tension, making the few bursts of violence feel more shocking and realistic." }
    ],
    'Zodiac': [
        { question: "Did they catch the Zodiac Killer?", answer: "Officially, the case remains open and the Zodiac Killer has never been confirmed. The film suggests Arthur Leigh Allen was the mostly likely suspect, but forensic evidence at the time could not definitively link him to the crimes." },
        { question: "Is the basement scene real?", answer: "The basement scene is based on a real event Robert Graysmith described. While some details may be dramatized, the terrifying encounter where Graysmith hears footsteps above him while investigating a suspect did happen, emphasizing his dangerous obsession." },
        { question: "Why is the movie so long?", answer: "Director David Fincher wanted to authentically capture the procedural grind of a decades-long investigation. The length emphasizes the frustration, dead ends, and sheer exhaustion the detectives and journalists felt over years of obsession." }
    ],
    '10 Cloverfield Lane': [
        { question: "Is it a sequel to Cloverfield?", answer: "It is a 'spiritual successor' rather than a direct sequel. It takes place in the same universe (the 'Cloververse') but tells a contained story with different characters and a different monster threat." },
        { question: "Was John Goodman the villain?", answer: "Yes and no. Howard was a paranoid, controlling captor who likely kidnapped Michelle, but he was also telling the truth about the alien invasion. He is a villain for his treatment of Michelle, but he was right about the danger outside." },
        { question: "What are the aliens?", answer: "The film reveals biomechanical alien crafts and creatures at the end. Unlike the giant monster in the first Cloverfield, these appear to be an organized invasion force using gas and advanced technology." }
    ],
    'Strange Darling': [
        { question: "Is it based on a true story?", answer: "No, despite the opening text claiming it presents a dramatization of the final known killings of a serial killer, the story is entirely fictional. This framing device pays homage to films like 'The Texas Chain Saw Massacre'." },
        { question: "Why is it shot in 35mm?", answer: "Director JT Mollner and cinematographer Giovanni Ribisi shot on 35mm film to give the movie a gritty, textured, grindhouse aesthetic that matches its 70s-inspired tone and non-linear storytelling." },
        { question: "What is the twist?", answer: "The film subverts the 'final girl' trope. While initially presenting the woman (The Lady) as the victim fleeing a predator (The Demon), it reveals that she is actually the prolific serial killer, and he is a victim trying to escape her." }
    ],
    'Collateral': [
        { question: "Did Tom Cruise do his own stunts?", answer: "Yes, Tom Cruise underwent extensive weapons training with live rounds to portray Vincent's proficiency. His gun handling in the alleyway scene is so technically perfect it is often used as a training example for pistol combat." },
        { question: "What is the meaning of the coyote scene?", answer: "The coyote crossing the road symbolizes Vincent and Max—two predators/survivors navigating the urban wilderness of Los Angeles alone. It underscores the theme of isolation in a massive, indifferent city." },
        { question: "Why does Vincent have gray hair?", answer: "Michael Mann wanted Vincent to look like a 'silver fox' or a ghost blending into the gray urban night. The gray suit and hair make him appear almost camouflaged within the city's concrete and steel." }
    ],
    'A Quiet Place': [
        { question: "How do the monsters hunt?", answer: "The monsters are blind but have hypersensitive hearing. Their armor is impenetrable to bullets, but they expose their vulnerable flesh when they open their ear plates to listen for softer sounds, which is their weakness." },
        { question: "Why do they have a baby?", answer: "While risky, having a baby represents hope and the continuation of life. It raises the stakes significantly, forcing the family to build a soundproof environment (the box with oxygen) to protect the most vulnerable and noisy member." },
        { question: "Is John Krasinski really using sign language?", answer: "Yes, the cast learned American Sign Language (ASL) for the film. Millicent Simmonds, who plays the daughter, is deaf in real life and helped the cast and crew ensure the ASL usage was authentic and natural." }
    ],
    'Gone Baby Gone': [
        { question: "Was Ben Affleck a good director?", answer: "Yes, this was Ben Affleck's directorial debut, and it was critically acclaimed. Critics praised his gritty, authentic portrayal of working-class Boston and his ability to get powerful performances from the cast, especially his brother Casey." },
        { question: "Is the ending controversial?", answer: "Yes, the ending is a major moral dilemma. Patrick (Casey Affleck) chooses to return the child to her negligent mother because it is the 'law,' even though she was happy and safe with the police chief who kidnapped her. The film asks if following the law is always the same as doing the right thing." },
        { question: "Is Amanda McCready real?", answer: "No, the character and story are fictional, based on the novel by Dennis Lehane. However, the depiction of the neighborhood and the social issues involved felt so real that many viewers believed it was a true crime story." }
    ],
    'The Autopsy of Jane Doe': [
        { question: "Who is Jane Doe?", answer: "Jane Doe is revealed to be a witch from 17th-century Salem. However, the twist is that she wasn't a witch when she was tortured; the brutal ritual performed on her innocent body actually transformed her into a vengeful supernatural entity." },
        { question: "Is she dead?", answer: "She is biologically 'dead' but supernaturally alive. Her brain cells are active, and she can feel everything happening to her body, which is why she torments the coroners—she wants them to feel her pain." },
        { question: "Why does the bell ring?", answer: "The bell is tied to the toes of corpses to signal if they are actually alive (an old safety measure). When the bell rings on Jane Doe, it signifies that the supernatural forces are active and she is not a normal cadaver." }
    ],
    'Jack Reacher': [
        { question: "Why is Tom Cruise Jack Reacher?", answer: "This was controversial because in the books, Reacher is 6'5\" and 250 lbs. Author Lee Child defended the casting, saying Cruise captured the character's intensity and intellect, even if he lacked the physical size. (The later TV series cast Alan Ritchson to match the book description)." },
        { question: "Is the sniper shooting real?", answer: "The opening scene is fictional but filmed with terrifying realism to show the sniper's cold efficiency. It sets the tone that this is a grounded, gritty thriller rather than a fantastical action movie." },
        { question: "Who is the villain?", answer: "The Zec (Werner Herzog) is a survivor of a Siberian prison camp who chewed off his own fingers to avoid frostbite. He represents pure, ruthless survival instinct, contrasting with Reacher's sense of justice." }
    ],
    'The Machinist': [
        { question: "Did Christian Bale really lose that weight?", answer: "Yes. Christian Bale lost 62 pounds for the role, dropping to about 120 pounds. He ate only an apple and a can of tuna a day. It is considered one of the most extreme physical transformations in acting history." },
        { question: "Is Ivan real?", answer: "No. Ivan (the bald co-worker) is a hallucination representing Trevor's guilt. Ivan appears when Trevor is close to the truth or needing to be punished. His physical appearance is based on the man Trevor ran over a year prior." },
        { question: "What is the meaning of the ending?", answer: "The ending reveals that Trevor's insomnia and delusions were caused by the guilt of a hit-and-run accident he committed a year ago. By finally turning himself in, he accepts responsibility. The final scene shows him sleeping peacefully in his jail cell, having finally found redemption." }
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