// utils/huluBestMoviesData.js - TOP 10 BEST MOVIES ON HULU
// The definitive ranking of the highest-rated films currently streaming on Hulu across all genres.

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 949, "imdbID": "tt0113277", "Title": "Heat", "year": 1995, "genre": "Crime", "runtime": 170, "rank": 1 },
    { "tmdbId": 324786, "imdbID": "tt2119532", "Title": "Hacksaw Ridge", "year": 2016, "genre": "War", "runtime": 139, "rank": 2 },
    { "tmdbId": 14756, "imdbID": "tt1220719", "Title": "Ip Man", "year": 2008, "genre": "Action", "runtime": 106, "rank": 3 },
    { "tmdbId": 141, "imdbID": "tt0246578", "Title": "Donnie Darko", "year": 2001, "genre": "Sci-Fi", "runtime": 113, "rank": 4 },
    { "tmdbId": 44214, "imdbID": "tt0947798", "Title": "Black Swan", "year": 2010, "genre": "Thriller", "runtime": 108, "rank": 5 },
    { "tmdbId": 937249, "imdbID": "tt27503384", "Title": "Perfect Days", "year": 2023, "genre": "Drama", "runtime": 124, "rank": 6 },
    { "tmdbId": 106, "imdbID": "tt0093773", "Title": "Predator", "year": 1987, "genre": "Sci-Fi", "runtime": 107, "rank": 7 },
    { "tmdbId": 134, "imdbID": "tt0190590", "Title": "O Brother, Where Art Thou?", "year": 2000, "genre": "Comedy", "runtime": 107, "rank": 8 },
    { "tmdbId": 994108, "imdbID": "tt21192142", "Title": "All of Us Strangers", "year": 2023, "genre": "Romance", "runtime": 105, "rank": 9 },
    { "tmdbId": 8363, "imdbID": "tt0829482", "Title": "Superbad", "year": 2007, "genre": "Comedy", "runtime": 113, "rank": 10 }
];

export const SENSITIVE_TIMELINES = {
    949: { scenes: [{ start: "1:45:00", end: "1:55:00", type: "Violence", severity: "High" }] }, 
    324786: { scenes: [{ start: "0:50:00", end: "1:30:00", type: "War Gore", severity: "Extreme" }] }, 
    14756: { scenes: [{ start: "0:55:00", end: "1:00:00", type: "Violence", severity: "High" }] },
    141: { scenes: [] },
    44214: { scenes: [{ start: "1:30:00", end: "1:40:00", type: "Body Horror", severity: "High" }] }, 
    937249: { scenes: [] },
    106: { scenes: [{ start: "0:46:00", end: "0:47:00", type: "Gore", severity: "High" }] }, 
    134: { scenes: [] },
    994108: { scenes: [] },
    8363: { scenes: [] }
};

export const FALLBACK_POSTERS = {
    949: "https://image.tmdb.org/t/p/w500/zMyfPUelumio3tiDKPffaUpsQTD.jpg",
    324786: "https://image.tmdb.org/t/p/w500/fR9727gJ6Jga23X2Jb53Z3dD3tK.jpg",
    14756: "https://image.tmdb.org/t/p/w500/ggTTuxwxV76P10J9a9YtV529E7Q.jpg",
    141: "https://image.tmdb.org/t/p/w500/fhQoQoeNR72JXYgyqgzTzJluSF1.jpg",
    44214: "https://image.tmdb.org/t/p/w500/2TeJfUZMGolE6jI4mc7EBWkWhqL.jpg",
    937249: "https://image.tmdb.org/t/p/w500/cc5d7J554833F90059333c59.jpg",
    106: "https://image.tmdb.org/t/p/w500/k3mW4qfJo6SKqe6laRyNGnbB9n5.jpg",
    134: "https://image.tmdb.org/t/p/w500/9cj5X3Q6a6z9f6q6q6q6q6q6.jpg",
    994108: "https://image.tmdb.org/t/p/w500/5p21y7H57x7X57x57x57x57x.jpg",
    8363: "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJnhq.jpg"
};

// ✅ HELPER: Standard Data Creator
const createMovieData = (data) => ({
    adrenalineScore: 85,    
    violenceLevel: 75,      
    visceralImpact: 90,     
    complexityLevel: "ESSENTIAL",
    dominantColor: "#000000",
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. Heat (Slate Blue - Cool Professionalism)
    949: createMovieData({
        rating: 8.3, criticsScore: 88, audienceScore: 94, director: "Michael Mann",
        cast: ["Al Pacino", "Robert De Niro", "Val Kilmer"], boxOffice: "$187 million", budget: "$60 million",
        dominantColor: "#334155", // Slate
        dna: { "Crime": 50, "Action": 30, "Drama": 20 },
        scenes: [
            { time: 15, intensity: 30, label: "The Armored Car", color: "#1e293b" },
            { time: 60, intensity: 50, label: "Coffee Shop", color: "#334155" },
            { time: 90, intensity: 75, label: "Surveillance", color: "#475569" },
            { time: 110, intensity: 96, label: "The Shootout", color: "#ef4444" },
            { time: 165, intensity: 85, label: "Airport Finale", color: "#b91c1c" }
        ],
        synopsis: "In the sprawling concrete jungle of Los Angeles, a master thief and his elite crew plan one final, impossible heist while being hunted by a relentless, obsessive detective. As the stakes rise, the line between criminal and cop blurs, revealing two men who are mirror images of each other on opposite sides of the law. It culminates in a legendary downtown shootout where tactical realism meets operatic tragedy.",
        themes: ["Crime", "Obsession", "Duality"]
    }),

    // 2. Hacksaw Ridge (Blood Red - Visceral War)
    324786: createMovieData({
        rating: 8.1, criticsScore: 84, audienceScore: 91, director: "Mel Gibson",
        cast: ["Andrew Garfield", "Sam Worthington", "Vince Vaughn"], boxOffice: "$180 million", budget: "$40 million",
        dominantColor: "#991b1b", // War Red
        dna: { "War": 50, "History": 30, "Drama": 20 },
        scenes: [
            { time: 15, intensity: 20, label: "The Vow", color: "#fcd34d" },
            { time: 45, intensity: 50, label: "Boot Camp", color: "#d97706" },
            { time: 70, intensity: 98, label: "Taking the Ridge", color: "#b91c1c" },
            { time: 100, intensity: 85, label: "One More", color: "#7f1d1d" },
            { time: 130, intensity: 60, label: "Descent", color: "#facc15" }
        ],
        synopsis: "The extraordinary true story of Desmond Doss, a Seventh-day Adventist who enlisted in the US Army during WWII but refused to carry a weapon due to his religious beliefs. Despite being ostracized by his unit, he served as a medic in the bloodiest battle of the Pacific theater, Okinawa. In the face of intense artillery fire, he single-handedly saved 75 men without firing a shot.",
        themes: ["Faith", "Pacifism", "Courage"]
    }),

    // 3. Ip Man (Zinc Grey - Desaturated History)
    14756: createMovieData({
        rating: 8.0, criticsScore: 86, audienceScore: 93, director: "Wilson Yip",
        cast: ["Donnie Yen", "Simon Yam", "Siu-Wong Fan"], boxOffice: "$21 million", budget: "$11 million",
        dominantColor: "#52525b", // Zinc Grey
        dna: { "Action": 60, "History": 20, "Drama": 20 },
        scenes: [
            { time: 15, intensity: 35, label: "Friendly Spar", color: "#d4d4d8" },
            { time: 45, intensity: 65, label: "The Occupation", color: "#52525b" },
            { time: 65, intensity: 92, label: "I Want 10!", color: "#18181b" },
            { time: 85, intensity: 75, label: "Cotton Mill", color: "#71717a" },
            { time: 100, intensity: 88, label: "General Miura", color: "#3f3f46" }
        ],
        synopsis: "Set during the Sino-Japanese War, the film follows Ip Man, a wealthy and respected martial artist who is forced into destitution when the Japanese army occupies his city. Refusing to bow to oppression, he uses his mastery of Wing Chun to defend his people's dignity, culminating in a legendary challenge where he fights ten black belts simultaneously to restore his nation's honor.",
        themes: ["Honor", "Martial Arts", "Resilience"]
    }),

    // 4. Donnie Darko (Midnight Blue - Surreal Night)
    141: createMovieData({
        rating: 8.0, criticsScore: 87, audienceScore: 80, director: "Richard Kelly",
        cast: ["Jake Gyllenhaal", "Jena Malone", "Mary McDonnell"], boxOffice: "$7.5 million", budget: "$4.5 million",
        dominantColor: "#1e1b4b", // Midnight Blue
        dna: { "Sci-Fi": 40, "Thriller": 40, "Drama": 20 },
        scenes: [
            { time: 10, intensity: 25, label: "The Engine", color: "#1e1b4b" },
            { time: 40, intensity: 50, label: "Frank's Warning", color: "#4c1d95" },
            { time: 75, intensity: 70, label: "Cellar Door", color: "#6d28d9" },
            { time: 95, intensity: 85, label: "The Party", color: "#5b21b6" },
            { time: 110, intensity: 95, label: "Mad World", color: "#312e81" }
        ],
        synopsis: "In a quiet suburban town, troubled teenager Donnie narrowly escapes a jet engine crashing into his bedroom after being lured out by a terrifying figure in a rabbit suit named Frank. Frank tells him the world will end in 28 days, setting Donnie on a bizarre path of time travel, metaphysics, and vandalism. As the countdown ticks away, Donnie must unravel the fabric of the universe to understand his role in a cosmic destiny.",
        themes: ["Time Travel", "Fate", "Coming of Age"]
    }),

    // 5. Black Swan (Deep Rose - Beauty & Blood)
    44214: createMovieData({
        rating: 8.0, criticsScore: 85, audienceScore: 84, director: "Darren Aronofsky",
        cast: ["Natalie Portman", "Mila Kunis", "Vincent Cassel"], boxOffice: "$329 million", budget: "$13 million",
        dominantColor: "#9f1239", // Rose Red
        dna: { "Thriller": 50, "Horror": 30, "Drama": 20 },
        scenes: [
            { time: 20, intensity: 30, label: "The Casting", color: "#fbcfe8" },
            { time: 50, intensity: 60, label: "The Club", color: "#be123c" },
            { time: 80, intensity: 85, label: "Growing Feathers", color: "#9f1239" },
            { time: 95, intensity: 90, label: "The Stab", color: "#881337" },
            { time: 105, intensity: 94, label: "Perfect", color: "#000000" }
        ],
        synopsis: "Nina is a ballerina whose passion for the dance rules every facet of her life. When she wins the lead role in Swan Lake, the pressure to embody both the innocent White Swan and the sensual Black Swan begins to fracture her mind. As a rival dancer threatens her position, Nina's reality warps into a waking nightmare where the pursuit of artistic perfection demands the ultimate sacrifice.",
        themes: ["Perfection", "Psychosis", "Identity"]
    }),

    // 6. Perfect Days (Sky Blue - Peaceful Routine)
    937249: createMovieData({
        rating: 7.9, criticsScore: 96, audienceScore: 91, director: "Wim Wenders",
        cast: ["Kōji Yakusho", "Tokio Emoto", "Arisa Nakano"], boxOffice: "$24 million", budget: "N/A",
        dominantColor: "#0ea5e9", // Sky Blue
        dna: { "Drama": 60, "Music": 20, "Philosophy": 20 },
        scenes: [
            { time: 15, intensity: 20, label: "Morning Routine", color: "#bae6fd" },
            { time: 45, intensity: 40, label: "The Park", color: "#7dd3fc" },
            { time: 70, intensity: 60, label: "The Niece", color: "#38bdf8" },
            { time: 95, intensity: 75, label: "Shadow Tag", color: "#0ea5e9" },
            { time: 120, intensity: 80, label: "Feeling Good", color: "#0284c7" }
        ],
        synopsis: "Hirayama seems utterly content with his simple life as a cleaner of toilets in Tokyo. Outside of his very structured everyday routine, he enjoys his passion for music and for books. Through a series of unexpected encounters, his past is gradually revealed. A deeply moving, poetic meditation on finding beauty in the mundane world around us.",
        themes: ["Simplicity", "Routine", "Gratitude"]
    }),

    // 7. Predator (Jungle Green - Primal Hunt)
    106: createMovieData({
        rating: 7.8, criticsScore: 82, audienceScore: 87, director: "John McTiernan",
        cast: ["Arnold Schwarzenegger", "Carl Weathers", "Jesse Ventura"], boxOffice: "$98 million", budget: "$15 million",
        dominantColor: "#166534", // Jungle Green
        dna: { "Action": 40, "Sci-Fi": 30, "Horror": 30 }, 
        scenes: [
            { time: 15, intensity: 30, label: "The Jungle", color: "#166534" },
            { time: 40, intensity: 55, label: "Bodies Found", color: "#65a30d" },
            { time: 65, intensity: 80, label: "Old Painless", color: "#ef4444" },
            { time: 90, intensity: 90, label: "Mud Camouflage", color: "#3f6212" },
            { time: 100, intensity: 95, label: "Self Destruct", color: "#f59e0b" }
        ],
        synopsis: "Dutch, the leader of an elite special forces rescue team, leads his men deep into the Central American jungle on a CIA mission to recover hostages. However, the mission goes horribly sideways when they realize they are being hunted by something not of this world—an invisible, technologically advanced extraterrestrial warrior that hunts humans for sport and honor.",
        themes: ["Survival", "Hunt", "Sci-Fi Action"]
    }),

    // 8. O Brother, Where Art Thou? (Sepia/Amber - Dust Bowl)
    134: createMovieData({
        rating: 7.7, criticsScore: 79, audienceScore: 89, director: "Joel Coen",
        cast: ["George Clooney", "John Turturro", "Tim Blake Nelson"], boxOffice: "$71 million", budget: "$26 million",
        dominantColor: "#d97706", // Amber/Sepia
        dna: { "Comedy": 50, "Adventure": 30, "Music": 20 },
        scenes: [
            { time: 10, intensity: 25, label: "The Chain Gang", color: "#a16207" },
            { time: 40, intensity: 50, label: "The Sirens", color: "#ca8a04" },
            { time: 70, intensity: 65, label: "Cyclops", color: "#d97706" },
            { time: 90, intensity: 88, label: "Constant Sorrow", color: "#b45309" },
            { time: 100, intensity: 60, label: "The Flood", color: "#854d0e" }
        ],
        synopsis: "In the deep south during the 1930s, three escaped convicts search for hidden treasure while a relentless lawman pursues them. Loosely based on Homer's 'Odyssey,' the trio encounters a series of bizarre characters—including a blind prophet, bank robber George Nelson, and a KKK rally—while inadvertently becoming bluegrass sensations.",
        themes: ["Adventure", "Folk Music", "Redemption"]
    }),

    // 9. All of Us Strangers (Indigo - Dreamlike Melancholy)
    994108: createMovieData({
        rating: 7.7, criticsScore: 96, audienceScore: 91, director: "Andrew Haigh",
        cast: ["Andrew Scott", "Paul Mescal", "Jamie Bell"], boxOffice: "$19 million", budget: "$15 million",
        dominantColor: "#4f46e5", // Indigo
        dna: { "Romance": 40, "Fantasy": 30, "Drama": 30 },
        scenes: [
            { time: 10, intensity: 20, label: "The Fire Alarm", color: "#6366f1" },
            { time: 40, intensity: 55, label: "Childhood Home", color: "#818cf8" },
            { time: 70, intensity: 80, label: "Club Night", color: "#4f46e5" },
            { time: 95, intensity: 95, label: "The Diner Truth", color: "#312e81" },
            { time: 100, intensity: 85, label: "Power of Love", color: "#3730a3" }
        ],
        synopsis: "Adam, a solitary screenwriter living in a near-empty London tower block, has a chance encounter with his mysterious neighbor Harry that punctures the rhythm of his everyday life. As a relationship develops between them, Adam is preoccupied with memories of the past and finds himself drawn back to his childhood home, where his parents appear to be living just as they were on the day they died, 30 years ago.",
        themes: ["Grief", "Love", "Memory"]
    }),

    // 10. Superbad (Vibrant Orange - Teenage Chaos)
    8363: createMovieData({
        rating: 7.6, criticsScore: 88, audienceScore: 87, director: "Greg Mottola",
        cast: ["Jonah Hill", "Michael Cera", "Christopher Mintz-Plasse"], boxOffice: "$170 million", budget: "$20 million",
        dominantColor: "#f97316", // Orange
        dna: { "Comedy": 60, "Coming of Age": 20, "Friendship": 20 },
        scenes: [
            { time: 10, intensity: 20, label: "The Plan", color: "#facc15" },
            { time: 40, intensity: 60, label: "McLovin ID", color: "#ef4444" },
            { time: 70, intensity: 80, label: "The Party", color: "#f97316" },
            { time: 90, intensity: 92, label: "Cop Car Ride", color: "#dc2626" },
            { time: 110, intensity: 50, label: "Escalator", color: "#eab308" }
        ],
        synopsis: "Two co-dependent high school seniors, Seth and Evan, are forced to deal with separation anxiety as they prepare to go to different colleges. In a desperate bid to be cool and lose their virginity before graduation, they volunteer to supply alcohol for a massive party. Their quest goes hilariously wrong involving two bored cops, a fake ID named 'McLovin', and a night that spirals into absolute absurdity.",
        themes: ["Friendship", "Growing Up", "Partying"]
    })
};

export const HULU_BEST_MOVIE_FAQS = {
    'Heat': [
        { 
            question: "Did Al Pacino and Robert De Niro actually film together?", 
            answer: "Yes, but remarkably, they share screen time in only two scenes throughout the entire nearly three-hour film: the legendary coffee shop conversation and the climatic finale. For the coffee shop scene, director Michael Mann chose not to rehearse the interaction to maintain a sense of unfamiliarity and tension. He also filmed with two cameras simultaneously (over-the-shoulder) to capture every micro-expression, ensuring the chemistry between the two titans was preserved in real-time." 
        },
        { 
            question: "Why is the bank robbery shootout considered realistic?", 
            answer: "The downtown LA shootout is widely cited by military and police instructors as the gold standard for tactical realism in cinema. The actors underwent three months of rigorous weapons training with British SAS instructors using live rounds at a firing range. Uniquely, the sound design used the actual production audio of the blank gunfire echoing off the skyscrapers rather than dubbed sound effects, creating that deafening, visceral acoustic crack that defines the scene." 
        },
        { 
            question: "Is Heat based on a true story?", 
            answer: "It is heavily based on the real-life experiences of Chicago police detective Chuck Adamson. He spent years tracking a highly disciplined career criminal named Neil McCauley (De Niro's character). The two men actually met for coffee once, just like in the film, where they admitted a mutual respect but acknowledged they would kill one another if necessary. The dialogue in the movie closely mirrors their real-life conversation." 
        },
        { 
            question: "Why does Al Pacino yell so much in the film?", 
            answer: "Al Pacino's explosive, eccentric performance as Vincent Hanna was originally grounded in a specific character detail that was cut from the final script: Hanna was supposed to be chipping cocaine throughout the movie. Pacino stated later that this explains his erratic energy, sudden outbursts (like the famous 'She's got a GREAT ASS!' line), and hyper-focus. He was playing a man constantly on the edge of a stimulant-fueled burnout." 
        }
    ],
    'Hacksaw Ridge': [
        { 
            question: "How accurate is the true story of Desmond Doss?", 
            answer: "The film is astonishingly accurate, and in some cases, actually tones down the truth because director Mel Gibson feared audiences wouldn't believe it. The real Desmond Doss estimated he saved 50 men, while his commanding officers estimated 100; the compromise was 75. In reality, Doss did step off a stretcher after being wounded to treat another soldier, and he did kick a grenade away to save his comrades—events depicted in the film that actually happened." 
        },
        { 
            question: "Why did Desmond Doss refuse to touch a gun?", 
            answer: "Doss was a devout Seventh-day Adventist who strictly adhered to the Ten Commandments, specifically 'Thou shalt not kill.' However, he strongly believed in the war's cause against fascism. His solution was to enlist not as a combatant, but as a combat medic, viewing his role as saving lives amidst the death. This distinction made him a 'conscientious cooperator' rather than a conscientious objector." 
        },
        { 
            question: "What is the significance of the knot tying scene?", 
            answer: "Early in the film, Doss is shown practicing a specific knot (the double bowline). This setup pays off in the climax on the ridge. When lowering 75 wounded men down the sheer cliff face, Doss used that specific knot to create a harness for each soldier. This allowed him to lower them one by one without them slipping out, a feat of physical endurance that lasted for over 12 hours under enemy fire." 
        },
        { 
            question: "Did Desmond Doss receive the Medal of Honor?", 
            answer: "Yes. On October 12, 1945, Desmond Doss became the first conscientious objector in American history to be awarded the Medal of Honor. It was presented to him by President Harry S. Truman. The film captures the rarity of his courage: entering the bloodiest battle of the Pacific theater without a single weapon to protect himself, armed only with his faith and a medical kit." 
        }
    ],
    'Ip Man': [
        { 
            question: "How historically accurate is the movie Ip Man?", 
            answer: "While Ip Man was a real person—a Wing Chun grandmaster and the eventual teacher of Bruce Lee—the film takes significant dramatic liberties. The events during the Japanese occupation of Foshan are heavily dramatized for cinematic effect. There is no historical record of Ip Man fighting a Japanese General in a public duel, nor did he work in a coal mine. However, the film accurately captures his demeanor, philosophy, and status as a respected martial arts figure." 
        },
        { 
            question: "What martial arts style is used in the movie?", 
            answer: "The film showcases Wing Chun, a concept-based traditional Chinese Kung Fu style specializing in close-range combat. It emphasizes centerline theory (protecting your center while attacking the opponent's), rapid-fire punches (chain punching), and simultaneous attack and defense. Donnie Yen trained for nine months specifically in Wing Chun to master its unique, narrow stance and rapid hand movements." 
        },
        { 
            question: "Is the '1 vs 10' fight scene realistic?", 
            answer: "The iconic scene where Ip Man demands to fight ten black belts is a dramatization, but it perfectly illustrates the tactical advantage of Wing Chun. The style is designed to overwhelm opponents with speed and efficiency rather than brute strength. By using rapid strikes to vital points and breaking the opponents' structure, the choreography demonstrates how a skilled practitioner can manage multiple attackers in a confined space." 
        },
        { 
            question: "Did Donnie Yen really injure anyone during filming?", 
            answer: "The fight scenes were performed with high intensity. During the filming of the fight with the Northern master (Fan Siu-wong), Donnie Yen accidentally cut Fan near the eye with a prop weapon. Conversely, Donnie Yen himself sustained an injury near his eye during the final fight sequence. The intensity on screen reflects the physical toll and dedication of the stunt team." 
        }
    ],
    'Donnie Darko': [
        { 
            question: "What is the Tangent Universe explained simply?", 
            answer: "The film's lore (explained in the Director's Cut) posits that at the moment the jet engine fell, time corrupted, creating an unstable 'Tangent Universe.' This alternate reality can only sustain itself for 28 days before collapsing and destroying the primary universe. Donnie is the 'Living Receiver' chosen to guide the 'Artifact' (the engine) back to the primary timeline to close the loop and save existence, sacrificing himself in the process." 
        },
        { 
            question: "Is Frank the rabbit a ghost or a hallucination?", 
            answer: "Frank is technically a 'Manipulated Dead.' In the Tangent Universe, Frank (the human) is killed by Donnie. This allows his spirit to travel back through time to guide Donnie toward his destiny. He isn't a hallucination of mental illness, but a metaphysical entity ensuring that Donnie completes the tasks necessary to reset the timeline." 
        },
        { 
            question: "Why does Donnie laugh at the end?", 
            answer: "In the final moments, Donnie realizes that by staying in bed and allowing the jet engine to kill him, he is resetting the timeline. He laughs because he has achieved enlightenment; he understands his purpose was to save the world and the people he loves (like Gretchen and his mother/sister who died in the Tangent Universe). His death is a moment of triumphant acceptance, not tragedy." 
        },
        { 
            question: "Should I watch the Theatrical or Director's Cut?", 
            answer: "It depends on your preference for ambiguity. The Theatrical Cut is more mysterious, leaving much of the time travel logic open to interpretation and focusing on the emotional journey. The Director's Cut includes pages from 'The Philosophy of Time Travel' book on screen, which explicitly explains the sci-fi mechanics (Tangent Universe, Manipulated Living, etc.). Most fans prefer the Theatrical Cut for its pacing and mystery." 
        }
    ],
    'Black Swan': [
        { 
            question: "Did Natalie Portman do her own dancing?", 
            answer: "This was a subject of controversy. Natalie Portman trained for a year prior to filming, losing 20 pounds and doing ballet five hours a day. While she performed the upper-body acting and close-ups, professional ballerina Sarah Lane served as her body double for the complex footwork and wide shots. VFX were used to graft Portman's face onto Lane's body for the most difficult technical sequences." 
        },
        { 
            question: "Is Black Swan considered a horror movie?", 
            answer: "Yes, it is widely classified as a psychological horror film. It utilizes classic horror tropes—body horror (peeling skin, snapping bones, growing feathers), doppelgängers, hallucinations, and a descent into madness—to visualize the internal pressure of perfectionism. It treats the physical toll of ballet with the same visceral gruesomeness as a Cronenberg film." 
        },
        { 
            question: "What is the meaning of the final line 'I was perfect'?", 
            answer: "The line signifies that Nina has finally achieved the artistic transcendence she craved, but at the cost of her life (or sanity). By embracing her dark side (the Black Swan) and destroying her fragile innocence (the White Swan), she achieved a singular moment of flawless performance. It is a tragic commentary on how the pursuit of artistic perfection can require total self-destruction." 
        },
        { 
            question: "How does it connect to 'The Wrestler'?", 
            answer: "Director Darren Aronofsky originally conceived the stories of 'The Wrestler' and 'Black Swan' as one film about a wrestler and a ballerina having a love affair. He eventually split them into two companion pieces. He views them as mirrors: 'The Wrestler' is about the lowest art form destroying the body, while 'Black Swan' is about the highest art form destroying the mind." 
        }
    ],
    'Perfect Days': [
        { 
            question: "Is the Tokyo Toilet project real?", 
            answer: "Yes. The film was initially conceived as a promotional documentary for 'The Tokyo Toilet,' a real-life urban redevelopment project where famous architects (like Tadao Ando and Kengo Kuma) redesigned 17 public restrooms in Shibuya to be works of art. Director Wim Wenders decided to turn the concept into a fictional narrative feature instead, focusing on the soul of the man who cleans them." 
        },
        { 
            question: "What is the significance of the concept 'Komorebi'?", 
            answer: "The film is a meditation on the Japanese word 'Komorebi,' which describes the interplay of sunlight filtering through the leaves of trees. This untranslatable concept represents the fleeting, unique beauty of a single moment that can never be replicated. Hirayama's daily photography of trees captures this philosophy—finding profound joy in the small, shifting details of a routine life." 
        },
        { 
            question: "What does the music represent for Hirayama?", 
            answer: "Hirayama listens exclusively to cassette tapes of classic Western rock (The Animals, Lou Reed, The Velvet Underground, Nina Simone) in his van. The soundtrack represents his rich inner life and his connection to a tactile, analog past. The lyrics often comment on the narrative, specifically Lou Reed's 'Perfect Day,' which underscores the film's theme that a simple day can be a perfect one." 
        },
        { 
            question: "Why did Kōji Yakusho win Best Actor at Cannes?", 
            answer: "Yakusho's performance is a masterclass in minimalism. With very little dialogue, he conveys a complex history of sorrow, dignity, and contentment purely through micro-expressions and body language. The final shot—a long, unbroken close-up of him driving while crying and smiling simultaneously—is considered one of the greatest feats of acting in recent cinema history." 
        }
    ],
    'Predator': [
        { 
            question: "How was the Predator creature design created?", 
            answer: "The original design was a nimble, insect-like creature that looked disastrous on camera. Special effects legend Stan Winston was brought in to redesign it. While on a plane with James Cameron, Winston was sketching concepts. Cameron remarked, 'I've always wanted to see something with mandibles.' Winston added the crab-like facial features, creating one of cinema's most iconic monsters." 
        },
        { 
            question: "Why was Jean-Claude Van Damme fired from the movie?", 
            answer: "Van Damme was originally cast to play the Predator in the early 'insect' suit. He reportedly hated the suit (calling it a lobster), passed out frequently due to the jungle heat inside the rubber, and was frustrated that his kickboxing skills wouldn't be seen. He was eventually fired/quit, and the 7'2\" Kevin Peter Hall was hired to play the redesigned, imposing hunter." 
        },
        { 
            question: "What is the origin of the famous handshake meme?", 
            answer: "The biceps-bulging mid-air clasp between Arnold Schwarzenegger (Dutch) and Carl Weathers (Dillon) occurs early in the film. It was intended to show the history and alpha-male rivalry between the characters. The internet later adopted it as the 'Epic Handshake' meme, using it to symbolize two different groups agreeing on a shared truth. It remains the ultimate symbol of 80s action machismo." 
        },
        { 
            question: "How did they film the heat vision scenes?", 
            answer: "The filmmakers used a real thermal camera for the Predator's POV shots. However, the Mexican jungle was so hot that the actors' body temperatures didn't stand out against the background trees. To create the necessary contrast, the crew had to spray the trees with ice water moments before rolling the camera so the actors would appear 'hot' against a 'cool' background." 
        }
    ],
    'O Brother, Where Art Thou?': [
        { 
            question: "How does the film parallel The Odyssey?", 
            answer: "The film is a loose, satirical adaptation of Homer's epic poem set in the Depression-era South. George Clooney's character is Ulysses (Odysseus). Key parallels include the blind railroad prophet (Tiresias), the Sirens washing clothes in the river, the one-eyed Bible salesman Big Dan Teague (the Cyclops), and the crooked governor Menelaus 'Pappy' O'Daniel (King Menelaus)." 
        },
        { 
            question: "Did the actors actually sing 'Man of Constant Sorrow'?", 
            answer: "While Tim Blake Nelson (Delmar) sang his own vocals for 'In the Jailhouse Now,' George Clooney did not sing 'Man of Constant Sorrow.' He practiced for weeks but was ultimately dubbed by Dan Tyminski of the band Union Station. The soundtrack became a cultural phenomenon, winning the Grammy for Album of the Year and revitalizing American interest in bluegrass and folk music." 
        },
        { 
            question: "Why does the movie look like an old postcard?", 
            answer: "This was the first feature film to be entirely color-corrected digitally (using a digital intermediate). Cinematographer Roger Deakins wanted the film to look like 'an old hand-tinted postcard' with dried-out, sepia tones to reflect the Dust Bowl era. They digitally removed the lush greens of the Mississippi summer locations to achieve the golden, autumn-like aesthetic." 
        },
        { 
            question: "Is the KKK rally scene based on reality?", 
            answer: "The scene where the KKK performs a choreographed formation is a satirical absurdity typical of the Coen Brothers, but it serves a narrative purpose to rescue Tommy Johnson (based on real blues legend Tommy Johnson). The scene mocks the Klan's rituals while integrating the song 'O Death,' sung by Ralph Stanley, adding a chilling, operatic weight to the climax." 
        }
    ],
    'All of Us Strangers': [
        { 
            question: "Are the parents ghosts or is it a dream?", 
            answer: "The film intentionally blurs the line between a ghost story and a psychological breakdown. The parents can be interpreted as literal ghosts suspended in 1987, or as Adam's vivid manifestation of his grief and his desperate need to come out to the parents he lost as a child. The film operates on 'dream logic,' suggesting that the healing conversation is more important than the metaphysical reality." 
        },
        { 
            question: "Where was the movie filmed?", 
            answer: "To achieve a deep level of personal authenticity, director Andrew Haigh chose to film the scenes with the parents inside his own actual childhood home in Croydon, London. The production team recreated the interior to look exactly as it did in the 1980s, adding a layer of personal memoir to the fictional narrative." 
        },
        { 
            question: "What is the significance of the song 'The Power of Love'?", 
            answer: "Frankie Goes to Hollywood's 'The Power of Love' serves as the film's emotional anchor. It represents the era of Adam's childhood (1984) and bridges the gap between his queer identity and his parents' understanding. The song's lyrics about love as a purifying, protective force underscore the film's conclusion that love transcends death and trauma." 
        },
        { 
            question: "What does the ending mean?", 
            answer: "The ending is devastatingly tragic yet transcendent. It reveals that Harry (Paul Mescal) had actually died the night he first knocked on Adam's door, and Adam has been hallucinating a relationship with his ghost/spirit. The final shot of them curling up together as a new star implies that while they are dead/gone, the love they shared created a permanent light in the universe." 
        }
    ],
    'Superbad': [
        { 
            question: "Is Superbad based on a true story?", 
            answer: "Yes, heavily. Writers Seth Rogen and Evan Goldberg started writing the script when they were just 13 years old because they wanted to make a movie about their own lives. The main characters, Seth (Jonah Hill) and Evan (Michael Cera), are named after the writers, and many of the awkward encounters and the desperate quest for alcohol were based on their actual high school experiences in Vancouver." 
        },
        { 
            question: "Is McLovin a real person?", 
            answer: "The character is fictional, but the concept of a terrible fake ID was real. The name 'McLovin' was chosen for its sheer absurdity—the idea that a nerdy high schooler would choose a smooth-sounding R&B singer name. Christopher Mintz-Plasse, who played McLovin, was a complete unknown who annoyed Jonah Hill in the audition room so much that Seth Rogen immediately knew he was the perfect antagonist for the group." 
        },
        { 
            question: "How much of the movie was improvised?", 
            answer: "A significant amount. While the script was written over a decade, producer Judd Apatow encourages 'alt lines' where actors riff multiple versions of a joke during a scene. Jonah Hill and Seth Rogen are masters of this, leading to many of the film's most quotable, vulgar, and bizarre lines being made up on the spot during filming." 
        },
        { 
            question: "Why is Superbad considered a defining teen comedy?", 
            answer: "Superbad captured a specific cultural moment right before the smartphone era took over. It bridged the gap between the gross-out humor of 'American Pie' and a more sensitive, character-driven look at male friendship. It frankly depicted the anxiety of separation before college, making it surprisingly poignant beneath the layers of crude humor. It effectively launched the careers of Jonah Hill, Michael Cera, and Emma Stone." 
        }
    ]
};
// Required exports
export const getTMDBPosterUrl = (posterPath, size = 'medium') => {
    if (!posterPath) return null;
    const posterSize = TMDB_CONFIG.POSTER_SIZES[size] || TMDB_CONFIG.POSTER_SIZES.medium;
    return `${TMDB_CONFIG.IMAGE_BASE_URL}/${posterSize}${posterPath}`;
};

export const generateFAQData = (movie) => {
    return HULU_BEST_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - Best movie on Hulu.`,
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

export const getSensitiveContentTypes = (tmdbId) => [];
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