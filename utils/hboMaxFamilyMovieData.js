// utils/hboMaxFamilyMovieData.js - HBO MAX FAMILY COLLECTION DATA
// Magic, Nostalgia, and Visual Masterpieces

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 630, "imdbID": "tt0032138", "Title": "The Wizard of Oz", "year": 1939, "genre": "Fantasy", "runtime": 102, "rank": 1 },
    { "tmdbId": 673, "imdbID": "tt0304141", "Title": "Harry Potter and the Prisoner of Azkaban", "year": 2004, "genre": "Fantasy", "runtime": 141, "rank": 2 },
    { "tmdbId": 1110437, "imdbID": "tt28238129", "Title": "Flow", "year": 2024, "genre": "Animation", "runtime": 85, "rank": 3 },
    { "tmdbId": 850, "imdbID": "tt0085334", "Title": "A Christmas Story", "year": 1983, "genre": "Comedy", "runtime": 93, "rank": 4 },
    { "tmdbId": 315162, "imdbID": "tt3915174", "Title": "Puss in Boots: The Last Wish", "year": 2022, "genre": "Animation", "runtime": 102, "rank": 5 },
    { "tmdbId": 16859, "imdbID": "tt0097814", "Title": "Kiki's Delivery Service", "year": 1989, "genre": "Animation", "runtime": 103, "rank": 6 },
    { "tmdbId": 14919, "imdbID": "tt0106364", "Title": "Batman: Mask of the Phantasm", "year": 1993, "genre": "Animation", "runtime": 76, "rank": 7 },
    { "tmdbId": 242828, "imdbID": "tt3398268", "Title": "When Marnie Was There", "year": 2014, "genre": "Animation", "runtime": 103, "rank": 8 },
    { "tmdbId": 9502, "imdbID": "tt0441773", "Title": "Kung Fu Panda", "year": 2008, "genre": "Animation", "runtime": 92, "rank": 9 },
    { "tmdbId": 324849, "imdbID": "tt4116284", "Title": "The Lego Batman Movie", "year": 2017, "genre": "Animation", "runtime": 104, "rank": 10 }
];

// ✅ SENSITIVE TIMELINES (Focusing on Scary Moments for Kids)
export const SENSITIVE_TIMELINES = {
    // 1. The Wizard of Oz
    630: { 
        scenes: [
            { start: "0:45:00", end: "0:48:00", type: "Scary Imagery", severity: "Moderate" }, // Wicked Witch appearances
            { start: "1:15:00", end: "1:18:00", type: "Flying Monkeys", severity: "High" } // The capture scene
        ] 
    },
    
    // 2. Harry Potter and the Prisoner of Azkaban
    673: { 
        scenes: [
            { start: "0:15:00", end: "0:18:00", type: "Dementors", severity: "High" }, // Train sequence
            { start: "1:45:00", end: "1:50:00", type: "Transformation", severity: "Moderate" } // Werewolf transformation
        ] 
    },
    
    // 3. Flow
    1110437: { scenes: [] }, // Mostly survival tension, low scares
    
    // 4. A Christmas Story
    850: { 
        scenes: [
            { start: "1:05:00", end: "1:07:00", type: "Bullying", severity: "Mild" } // Scut Farkus fight
        ] 
    },
    
    // 5. Puss in Boots: The Last Wish
    315162: { 
        scenes: [
            { start: "0:10:00", end: "0:13:00", type: "Scary Wolf", severity: "High" }, // The Wolf's first appearance
            { start: "1:25:00", end: "1:30:00", type: "Final Duel", severity: "Moderate" }
        ] 
    },
    
    // 6. Kiki's Delivery Service
    16859: { scenes: [] }, // Very gentle
    
    // 7. Batman: Mask of the Phantasm
    14919: { 
        scenes: [
            { start: "0:55:00", end: "1:00:00", type: "Violence", severity: "Moderate" }, // Joker confrontation
            { start: "1:10:00", end: "1:15:00", type: "Dark Imagery", severity: "Moderate" }
        ] 
    },
    
    // 8. When Marnie Was There
    242828: { 
        scenes: [
            { start: "1:10:00", end: "1:15:00", type: "Ghostly Themes", severity: "Mild" } // The Silo scene
        ] 
    },
    
    // 9. Kung Fu Panda
    9502: { 
        scenes: [
            { start: "0:50:00", end: "0:55:00", type: "Villain Fight", severity: "Mild" } // Tai Lung escape
        ] 
    },
    
    // 10. The Lego Batman Movie
    324849: { scenes: [] } // Comic violence only
};

export const FALLBACK_POSTERS = {
    630: "https://image.tmdb.org/t/p/w500/b9O2dF2gYy6B3p1y3c2p3.jpg",
    673: "https://image.tmdb.org/t/p/w500/aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg",
    1110437: "https://image.tmdb.org/t/p/w500/flow_poster_url.jpg", 
    850: "https://image.tmdb.org/t/p/w500/g4bT9XlqZ9G.jpg",
    315162: "https://image.tmdb.org/t/p/w500/kuf6dutpsT0vSVeh958uD2bO.jpg",
    16859: "https://image.tmdb.org/t/p/w500/7nO5DUMnGUugrCdIBTjHR6D9.jpg",
    14919: "https://image.tmdb.org/t/p/w500/l4iknLOenGOI40v.jpg",
    242828: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKn.jpg",
    9502: "https://image.tmdb.org/t/p/w500/wA49.jpg",
    324849: "https://image.tmdb.org/t/p/w500/1pHK.jpg"
};

// ✅ HELPER: Using only 'funFactor' as the primary metric
const createMovieData = (data) => ({
    funFactor: 85, // Default score
    complexityLevel: "FAMILY", // String label for UI
    dominantColor: "#facc15", // Bright Yellow default
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. The Wizard of Oz
    630: createMovieData({ 
        funFactor: 95, 
        complexityLevel: "TIMELESS", 
        dominantColor: "#10b981", 
        rating: 8.1, criticsScore: 98, audienceScore: 89, director: "Victor Fleming", 
        cast: ["Judy Garland", "Frank Morgan", "Ray Bolger"], boxOffice: "$29 million", budget: "$2.7 million", 
        dna: { "Fantasy": 55, "Musical": 30, "Adventure": 15 }, 
        scenes: [
            { time: 10, intensity: 30, label: "Over the Rainbow", color: "#d4d4d8" },
            { time: 20, intensity: 55, label: "Munchkinland", color: "#f472b6" },
            { time: 60, intensity: 70, label: "Emerald City", color: "#10b981" },
            { time: 90, intensity: 85, label: "Witch's Castle", color: "#15803d" },
            { time: 100, intensity: 92, label: "No Place Like Home", color: "#ef4444" }
        ]
    }),

    // 2. Harry Potter and the Prisoner of Azkaban
    673: createMovieData({ 
        funFactor: 92, 
        complexityLevel: "MAGICAL", 
        dominantColor: "#1e3a8a", 
        rating: 8.0, criticsScore: 90, audienceScore: 86, director: "Alfonso Cuarón", 
        cast: ["Daniel Radcliffe", "Gary Oldman", "Emma Watson"], boxOffice: "$797 million", budget: "$130 million", 
        dna: { "Fantasy": 50, "Adventure": 30, "Mystery": 20 }, 
        scenes: [
            { time: 15, intensity: 50, label: "Dementor Attack", color: "#172554" },
            { time: 60, intensity: 68, label: "Patronus Lesson", color: "#60a5fa" },
            { time: 90, intensity: 82, label: "The Shrieking Shack", color: "#3730a3" },
            { time: 110, intensity: 95, label: "Time Turner", color: "#fbbf24" },
            { time: 130, intensity: 78, label: "Firebolt", color: "#93c5fd" }
        ]
    }),

    // 3. Flow (2024)
    1110437: createMovieData({ 
        funFactor: 85, 
        complexityLevel: "VISUAL", 
        dominantColor: "#38bdf8", 
        rating: 8.4, criticsScore: 95, audienceScore: 92, director: "Gints Zilbalodis", 
        cast: ["None (No Dialogue)"], boxOffice: "N/A", budget: "N/A", 
        dna: { "Adventure": 50, "Fantasy": 30, "Drama": 20 }, 
        scenes: [
            { time: 10, intensity: 30, label: "The Flood", color: "#0ea5e9" },
            { time: 30, intensity: 48, label: "The Boat", color: "#7dd3fc" },
            { time: 60, intensity: 68, label: "Teamwork", color: "#0284c7" },
            { time: 80, intensity: 85, label: "The Storm", color: "#0c4a6e" },
            { time: 85, intensity: 65, label: "Survival", color: "#bae6fd" }
        ]
    }),

    // 4. A Christmas Story
    850: createMovieData({ 
        funFactor: 88, 
        complexityLevel: "CLASSIC", 
        dominantColor: "#b91c1c", 
        rating: 7.9, criticsScore: 89, audienceScore: 88, director: "Bob Clark", 
        cast: ["Peter Billingsley", "Darren McGavin"], boxOffice: "$20 million", budget: "$3.3 million", 
        dna: { "Comedy": 55, "Family": 35, "Holiday": 10 }, 
        scenes: [
            { time: 15, intensity: 25, label: "Triple Dog Dare", color: "#fca5a5" },
            { time: 45, intensity: 55, label: "Leg Lamp", color: "#f59e0b" },
            { time: 70, intensity: 75, label: "Scut Farkus", color: "#b91c1c" },
            { time: 85, intensity: 50, label: "Pink Nightmare", color: "#f472b6" },
            { time: 90, intensity: 88, label: "Red Ryder BB Gun", color: "#dc2626" }
        ]
    }),

    // 5. Puss in Boots: The Last Wish
    315162: createMovieData({ 
        funFactor: 98, 
        complexityLevel: "ADVENTURE", 
        dominantColor: "#f97316", 
        rating: 8.3, criticsScore: 95, audienceScore: 94, director: "Joel Crawford", 
        cast: ["Antonio Banderas", "Salma Hayek", "Florence Pugh"], boxOffice: "$481 million", budget: "$90 million", 
        dna: { "Adventure": 50, "Fantasy": 35, "Action": 15 }, 
        scenes: [
            { time: 10, intensity: 85, label: "Fear of Death", color: "#7f1d1d" },
            { time: 40, intensity: 60, label: "Team Friendship", color: "#fbbf24" },
            { time: 70, intensity: 78, label: "Cave of Reflection", color: "#a855f7" },
            { time: 90, intensity: 96, label: "Fighting Death", color: "#ef4444" },
            { time: 100, intensity: 70, label: "New Life", color: "#f97316" }
        ]
    }),

    // 6. Kiki's Delivery Service
    16859: createMovieData({ 
        funFactor: 90, 
        complexityLevel: "HEART", 
        dominantColor: "#ef4444", 
        rating: 7.8, criticsScore: 98, audienceScore: 89, director: "Hayao Miyazaki", 
        cast: ["Minami Takayama", "Rei Sakuma"], boxOffice: "$18 million", budget: "$6.9 million", 
        dna: { "Fantasy": 45, "Family": 35, "Slice of Life": 20 }, 
        scenes: [
            { time: 15, intensity: 28, label: "Leaving Home", color: "#f87171" },
            { time: 40, intensity: 48, label: "First Delivery", color: "#fca5a5" },
            { time: 70, intensity: 60, label: "Losing Magic", color: "#9ca3af" },
            { time: 90, intensity: 83, label: "Saving Tombo", color: "#ef4444" },
            { time: 100, intensity: 70, label: "Finding Purpose", color: "#fecaca" }
        ]
    }),

    // 7. Batman: Mask of the Phantasm
    14919: createMovieData({ 
        funFactor: 85, 
        complexityLevel: "NOIR", 
        dominantColor: "#1e1b4b", 
        rating: 7.8, criticsScore: 84, audienceScore: 88, director: "Eric Radomski, Bruce Timm", 
        cast: ["Kevin Conroy", "Mark Hamill", "Dana Delany"], boxOffice: "$5.6 million", budget: "$6 million", 
        dna: { "Action": 50, "Mystery": 30, "Drama": 20 }, 
        scenes: [
            { time: 10, intensity: 38, label: "The Phantasm", color: "#312e81" },
            { time: 45, intensity: 60, label: "Bruce's Past", color: "#6366f1" },
            { time: 75, intensity: 78, label: "Joker's Funhouse", color: "#7e22ce" },
            { time: 85, intensity: 92, label: "Tragic Choice", color: "#1e1b4b" },
            { time: 90, intensity: 68, label: "The Bat Signal", color: "#4f46e5" }
        ]
    }),

    // 8. When Marnie Was There
    242828: createMovieData({ 
        funFactor: 80, 
        complexityLevel: "EMOTIONAL", 
        dominantColor: "#0d9488", 
        rating: 7.6, criticsScore: 91, audienceScore: 88, director: "Hiromasa Yonebayashi", 
        cast: ["Sara Takatsuki", "Kasumi Arimura"], boxOffice: "$34 million", budget: "$10 million", 
        dna: { "Drama": 50, "Family": 35, "Mystery": 15 }, 
        scenes: [
            { time: 20, intensity: 28, label: "The Marsh House", color: "#2dd4bf" },
            { time: 50, intensity: 55, label: "Meeting Marnie", color: "#fcd34d" },
            { time: 80, intensity: 68, label: "The Silo", color: "#0f766e" },
            { time: 95, intensity: 90, label: "The Truth", color: "#14b8a6" },
            { time: 100, intensity: 78, label: "Forgiveness", color: "#99f6e4" }
        ]
    }),

    // 9. Kung Fu Panda
    9502: createMovieData({ 
        funFactor: 96, 
        complexityLevel: "ACTION", 
        dominantColor: "#facc15", 
        rating: 7.6, criticsScore: 87, audienceScore: 83, director: "Mark Osborne, John Stevenson", 
        cast: ["Jack Black", "Dustin Hoffman", "Angelina Jolie"], boxOffice: "$631 million", budget: "$130 million", 
        dna: { "Action": 50, "Comedy": 40, "Family": 10 }, 
        scenes: [
            { time: 10, intensity: 38, label: "Noodle Dream", color: "#fde047" },
            { time: 30, intensity: 58, label: "Training Begins", color: "#eab308" },
            { time: 60, intensity: 72, label: "Tai Lung Escape", color: "#b91c1c" },
            { time: 80, intensity: 82, label: "Dragon Scroll", color: "#facc15" },
            { time: 90, intensity: 94, label: "Skadoosh", color: "#ca8a04" }
        ]
    }),

    // 10. The Lego Batman Movie
    324849: createMovieData({ 
        funFactor: 99, 
        complexityLevel: "HILARIOUS", 
        dominantColor: "#fbbf24", 
        rating: 7.3, criticsScore: 90, audienceScore: 80, director: "Chris McKay", 
        cast: ["Will Arnett", "Michael Cera", "Rosario Dawson"], boxOffice: "$312 million", budget: "$80 million", 
        dna: { "Comedy": 60, "Action": 30, "Family": 10 }, 
        scenes: [
            { time: 5, intensity: 78, label: "Opening Save", color: "#000000" },
            { time: 30, intensity: 48, label: "Adopting Robin", color: "#ef4444" },
            { time: 60, intensity: 68, label: "Phantom Zone", color: "#3b82f6" },
            { time: 90, intensity: 88, label: "Family Assemble", color: "#eab308" },
            { time: 100, intensity: 60, label: "Hate You", color: "#10b981" }
        ]
    })
};
// ✅ EXTENDED FAQs (Detailed & Engaging - 4 per movie)
export const HBO_MAX_FAMILY_MOVIE_FAQS = {
    'The Wizard of Oz': [
        { 
            question: "Why does the movie start in black and white and transition to color?", 
            answer: "The film famously utilizes a high-contrast sepia tone for the Kansas sequences to visually anchor Dorothy’s life in a dull, dusty, and grounded reality of the Great Depression. The transition to vibrant three-strip Technicolor when she opens the door to Oz remains one of the most significant moments in cinematic history. This wasn't just a technical flex; it was a profound visual metaphor for the 'limitless power of imagination.' It effectively separates the grayscale world of duty and survival from the chromatic world of wonder and possibility, setting the standard for how color is used to define narrative spaces." 
        },
        { 
            question: "What is the true significance of the change to the Ruby Slippers?", 
            answer: "In L. Frank Baum's original 1900 novel, the shoes were silver. Screenwriter Noel Langley and the producers changed them to ruby red specifically to exploit the new Technicolor technology, as red provided a much more striking contrast against the yellow brick road. Symbolically, the slippers represent the latent power Dorothy possessed from the very beginning. While she seeks external help from the Wizard, the slippers (and Glinda) reveal that the ability to 'return home'—or more broadly, to change one's own destiny—is a strength that is internally realized through experience and emotional growth." 
        },
        { 
            question: "Did the cast actually perform their own musical numbers?", 
            answer: "Yes, Judy Garland and the principal cast (Ray Bolger, Jack Haley, and Bert Lahr) were seasoned vaudeville and stage performers who sang and danced in their own numbers. Interestingly, the film’s iconic anthem 'Over the Rainbow' was nearly cut from the final edit after studio executives at MGM felt the scene in the barnyard dragged the film's pace and appeared 'too low-brow' for the lead actress. It was only through the persistence of associate producer Arthur Freed that the song remained, eventually winning the Oscar for Best Original Song and becoming Garland's career-defining signature." 
        }
    ],
    'Harry Potter and the Prisoner of Azkaban': [
        { 
            question: "Why is the aesthetic of this film so much darker than the previous entries?", 
            answer: "When director Alfonso Cuarón took the helm, he intentionally moved away from the 'storybook' brightness of Chris Columbus’s films. Cuarón introduced a grittier, more mature 'naturalism' to Hogwarts. He instructed the actors to wear their school robes in disheveled ways or switch to muggle 'street clothes' to make the trio feel like actual, relatable teenagers. By using handheld cameras, wider tracking shots, and a desaturated, moody color palette, the film visually signals that the stakes are higher and the world of magic is no longer just a place of wonder, but one of genuine psychological peril." 
        },
        { 
            question: "What is the symbolic meaning behind the Dementors?", 
            answer: "The Dementors are widely regarded as one of the most effective metaphors for clinical depression in literature and film. J.K. Rowling created these foul, soul-sucking creatures to represent the cold, hollow absence of hope and happiness that characterizes the depressive state. They don't just attack physically; they drain the victim's spirit, forcing them to relive their worst memories. Harry’s struggle to manifest a Patronus—a shield made of pure light and positive memory—serves as a powerful narrative arc about the difficulty and necessity of finding inner light during one's darkest mental health struggles." 
        },
        { 
            question: "How does the 'Closed Loop' time travel logic work in the climax?", 
            answer: "Unlike many sci-fi films where time travel changes the past, *Prisoner of Azkaban* uses a 'Fixed Timeline' or 'Predestination Paradox' model. This means that everything Harry and Hermione do when they go back in time has *already happened* in the first half of the film. For instance, the rock that hits Harry's head or the mysterious figure who saves him at the lake were actually his future self. The 'Closed Loop' logic suggests that time is immutable; the characters aren't rewriting history, they are simply fulfilling the roles they were always destined to play to ensure their own survival." 
        }
    ],
    'Flow': [
        { 
            question: "How does 'Flow' effectively communicate complex emotions without dialogue?", 
            answer: "Flow is a triumph of 'pure cinema,' utilizing the Kuleshov effect and detailed animal behavioral studies to convey its story. Instead of anthropomorphizing the animals with human voices, the film uses realistic body language, ear flickers, and environmental reactions. The emotional weight is carried by a sophisticated soundscape and a camera that acts as a silent observer. This 'universal language' allows the film to explore themes of trust, community, and survival without the barrier of a script, making it a globally resonant experience that feels more like a documentary from a dreamworld than a standard animated feature." 
        },
        { 
            question: "What is the thematic meaning behind the rising floodwaters?", 
            answer: "The flood in 'Flow' serves as an existential, unstoppable force of nature that levels the playing field for all living creatures. It represents a 'Great Reset' that strips away the cat's solitary, territorial nature and forces it into an uneasy alliance with a dog, a lemur, and a stork. The water acts as a metaphor for inevitable change or crisis; the animals cannot fight the flood, they can only decide how to treat each other while navigating it. The core message is that survival—and more importantly, a life worth living—is only possible through the transition from isolation to community." 
        },
        { 
            question: "What defines the unique visual and animation style of the film?", 
            answer: "Directed by Gints Zilbalodis, the film features a distinct 3D animation style characterized by long, unbroken takes and a 'fluid' camera that mimics the motion of the water itself. The aesthetic leans into a painterly, soft-focus look rather than the hyper-realism of major studios. The lighting is particularly atmospheric, often using sun-drenched horizons and deep blue shadows to create a poetic, almost spiritual vibe. This artistic approach ensures the film feels less like a commercial product and more like a visionary piece of independent art, prioritizing mood and rhythm over traditional gag-based pacing." 
        }
    ],
    'A Christmas Story': [
        { 
            question: "How did the production safely film the 'Tongue on the Pole' scene?", 
            answer: "The 'Triple Dog Dare' scene is a masterpiece of practical movie magic. To avoid any actual injury to actor Scott Schwartz, the production team used a hidden suction tube inside the metal pole. This created a vacuum that safely held his tongue in place, creating the hilarious visual of it being 'frozen' to the metal. Despite the urban legends, the scene was filmed in a controlled environment, ensuring that the only thing the actor suffered from was the cold weather of Cleveland, Ohio, where much of the outdoor footage was captured." 
        },
        { 
            question: "Why is the adult narration considered the backbone of the film?", 
            answer: "The narration by Jean Shepherd (the author of the original stories) provides a crucial 'dual-perspective' that elevates the film from a simple comedy to a nostalgic masterpiece. While we see the events through young Ralphie’s eyes, we hear the commentary of a man looking back with a mixture of cynical wit and deep affection. This allows the film to bridge the gap between the chaotic, life-or-death drama of childhood—like getting a C+ on an essay—and the adult realization of how those small moments defined our lives. Shepherd’s wry delivery is what gives the movie its unique, unsentimental heart." 
        },
        { 
            question: "What makes the 'Leg Lamp' such a significant icon in pop culture?", 
            answer: "The Leg Lamp represents the ultimate clash of taste and family dynamics. To Ralphie’s father (The Old Man), it is a symbol of a rare victory and worldly sophistication—a 'Major Award.' To Ralphie’s mother, it is a gaudy, embarrassing eyesore. This household 'war' over a piece of kitsch resonated with audiences because it perfectly captured the quirky, often inexplicable obsessions of parents. Over decades, the lamp has transitioned from a movie prop to a piece of Americana, symbolizing the hilarious and slightly dysfunctional reality of the average suburban Christmas." 
        }
    ],
    'Puss in Boots: The Last Wish': [
        { 
            question: "Why does the animation style look so different from the previous Shrek films?", 
            answer: "Following the visual revolution started by 'Spider-Man: Into the Spider-Verse,' the filmmakers moved away from the 'standard' CGI realism of the early 2000s. They adopted a 'painterly' aesthetic that uses stylized textures, varied frame rates for action sequences, and 2D-inspired 'impact frames.' This gives the film the look of an oil painting come to life, or a vibrant storybook illustration. This creative shift allows for more expressive, kinetic action and a sense of 'visual poetry' that makes the high-stakes battles feel mythic rather than just digital." 
        },
        { 
            question: "Is the Wolf (Death) considered too intense for a younger family audience?", 
            answer: "The Wolf is intentionally designed to be genuinely frightening, representing the inevitable end that Puss has spent nine lives ignoring. His presence introduces a level of 'mortal stakes' rarely seen in modern family animation. While his whistling and twin-sickle combat are intense, the film uses this fear to facilitate Puss's character growth. Most child psychologists and critics argue that the character is 'safely scary,' providing a gateway for children to process the concepts of fear and mortality through a lens of bravery and the value of living one's life well." 
        },
        { 
            question: "What is the philosophical takeaway of the 'Last Wish' quest?", 
            answer: "The quest for the Wishing Star is a subversion of the 'hero's journey.' While Puss begins the film seeking to regain his lost nine lives to maintain his legend, the journey reveals that his ego was his true enemy. The film argues that a life lived 'recklessly' because you have extras is less valuable than a single life lived with intention, love, and connection. By the end, the 'Last Wish' becomes irrelevant because Puss has found a life worth living in the present, moving from an obsession with immortality to an appreciation of the 'here and now.'" 
        }
    ],
    'Kiki\'s Delivery Service': [
        { 
            question: "Why is there no traditional 'villain' in this Studio Ghibli classic?", 
            answer: "Hayao Miyazaki intentionally avoided a 'good vs. evil' conflict to focus on the internal 'Coming of Age' experience. Kiki's true adversary is her own self-doubt and the 'creative burnout' that often hits adolescents. The film suggests that the hardest part of growing up isn't defeating a bad guy, but finding your place in a community and maintaining your passion when it becomes a job. This lack of a villain makes the story more relatable and emotionally honest, as it mirrors the quiet, real-life struggles of finding one's independence." 
        },
        { 
            question: "What is the real reason Jiji the cat stops talking to Kiki?", 
            answer: "In the original Japanese version, Jiji’s silence at the end is a sign that Kiki has successfully matured. Jiji’s 'voice' was actually a projection of Kiki’s own inner child and her lingering dependence on her childhood familiar. As she builds her own business, makes real friends, and gains self-confidence, she no longer needs to hear the cat's sarcastic human voice to process her thoughts. While she is sad to lose that connection, it symbolizes her transition into a self-reliant adult who can stand on her own two feet without her 'training wheels.'" 
        },
        { 
            question: "How does the film explore the dignity and struggle of independent labor?", 
            answer: "Kiki’s delivery service is a grounded look at the 'freelance' experience. She has to manage logistics, deal with difficult customers, and handle the physical exhaustion of her craft. The film highlights that work is a double-edged sword: it provides Kiki with a sense of purpose and a way to integrate into her new city, but it also leads to the loss of her flight (her 'magic') when she becomes overwhelmed. It’s a sophisticated meditation on work-life balance, suggesting that magic isn't something you simply have—it’s something you must nurture by finding joy in what you do." 
        }
    ],
    'Batman: Mask of the Phantasm': [
        { 
            question: "How does this film expand on the psychology of Bruce Wayne?", 
            answer: "Mask of the Phantasm is widely considered the best Batman film because it focuses on Bruce Wayne’s tragedy rather than just Batman’s action. Through flashbacks, we see a Bruce who was on the verge of giving up his vow to marry Andrea Beaumont. He literally pleads at his parents' grave to 'release' him from his promise so he can be happy. The film explores the idea that becoming Batman wasn't just a choice—it was a consequence of a lost chance at a normal life. This makes his character far more vulnerable and human than he is in almost any other cinematic iteration." 
        },
        { 
            question: "What defines the 'Dark Deco' visual style used in the film?", 
            answer: "Developed by Bruce Timm and Eric Radomski, the 'Dark Deco' style was achieved by drawing backgrounds on black paper instead of white. This inherently created a world of deep shadows and high-contrast lighting, inspired by 1940s Film Noir and the architecture of the World's Fair. This aesthetic choice made Gotham feel timeless—a mix of vintage 1940s technology and futuristic art-deco skylines. It provided the perfect atmospheric backdrop for a detective story that is as much about the past as it is about the present." 
        },
        { 
            question: "Why is the voice acting of Kevin Conroy and Mark Hamill so iconic here?", 
            answer: "For many fans, Conroy and Hamill are the definitive voices of Batman and the Joker. Conroy pioneered the technique of using two distinct voices: a high-society, slightly 'light' voice for Bruce Wayne and a deep, gravelly, menacing baritone for Batman. In this film, he uses a third, 'hopeful' voice for the flashbacks. Mark Hamill’s Joker is legendary for its range—moving from a playful, theatrical cackle to a terrifying, blood-curdling shriek in seconds. Their performances in this film, where the dialogue is more operatic and emotional, solidified their status as the 'gold standard' for these characters." 
        }
    ],
    'When Marnie Was There': [
        { 
            question: "How does the film use the 'Ghost Story' genre to explore psychological trauma?", 
            answer: "While the film has all the hallmarks of a ghost story—a dilapidated mansion, moonlit meetings, and a girl who seems to vanish—it uses these tropes to explore Anna's inner world. Marnie isn't a traditional 'haunting' entity; she is a manifestation of Anna’s subconscious reaching out for family connection and a way to process her feelings of abandonment. The 'supernatural' elements are actually deeply psychological, turning a mystery about a stranger into a journey of self-discovery where the past and present collide to heal a young girl's broken spirit." 
        },
        { 
            question: "What is the cultural significance of Anna being an 'outsider'?", 
            answer: "Anna’s opening monologue about the 'inner circle' and 'outer circle' is a profound look at social anxiety and the experience of foster children. In Japanese culture, the concept of *uchi-soto* (inside-outside) is vital to social harmony. By placing herself on the 'outside,' Anna is expressing a fundamental disconnect from her community and her foster parents. Her journey to the countryside isn't just for her physical health (asthma), but a necessary spiritual retreat where she can learn to accept love and move from the 'outside' into a circle of belonging." 
        },
        { 
            question: "Why is this film considered a pivotal part of Studio Ghibli's history?", 
            answer: "Released in 2014, 'When Marnie Was There' was the last film produced by the studio before they entered a years-long hiatus following Hayao Miyazaki’s first 'retirement.' It was directed by Hiromasa Yonebayashi (*The Secret World of Arrietty*), representing a shift toward a new generation of Ghibli storytellers. The film’s focus on quiet, domestic drama and female friendship—without the high-fantasy elements of Miyazaki's work—proved that the 'Ghibli Magic' was about emotional depth and atmosphere rather than just dragons and airships." 
        }
    ],
    'Kung Fu Panda': [
        { 
            question: "How does the film incorporate authentic Chinese philosophy into its plot?", 
            answer: "Beneath the slapstick comedy, Kung Fu Panda is a surprisingly accurate exploration of Taoist principles. The character of Master Oogway represents the concept of *Wu Wei* (effortless action or 'flowing with the river'). His famous quote—'Yesterday is history, tomorrow is a mystery, but today is a gift'—is a distillation of mindfulness. The film rejects the idea that greatness is achieved through rigid, external perfection (represented by Tai Lung) and instead argues that true power comes from the 'Internal Alchemy' of accepting oneself exactly as they are, belly and all." 
        },
        { 
            question: "What makes the fight choreography superior to most animated action films?", 
            answer: "The directors hired a cultural consultant and studied classic *Wuxia* (martial arts) cinema to ensure the action felt authentic. Each member of the Furious Five uses a fighting style based on the real 'Five Animals' of Shaolin Kung Fu: Tiger (power), Crane (balance), Mantis (precision), Snake (fluidity), and Monkey (agility). The animators paid attention to weight, momentum, and the specific physical logic of each style. This results in sequences like the Bridge Fight or the final duel that have a rhythmic, dance-like quality that rivals the best live-action martial arts movies." 
        },
        { 
            question: "What is the symbolic meaning of the 'Empty' Dragon Scroll?", 
            answer: "The Dragon Scroll is a classic 'MacGuffin' that reveals the film’s central philosophical truth. When Po sees only his own reflection in the gold foil, it signifies that there is no 'secret ingredient' or external power that can make someone a hero. The scroll is a mirror because the 'limitless power' it promises is simply the total acceptance of one's own identity. It subverts the 'Chosen One' trope by suggesting that Po wasn't chosen because he was special, but because his willingness to believe in the 'nothing' of the scroll made him the only one capable of transcending Tai Lung’s obsession with external validation." 
        }
    ],
    'The Lego Batman Movie': [
        { 
            question: "In what ways is this considered a 'Deconstruction' of the Batman mythos?", 
            answer: "The film takes every core trait of Batman—his brooding, his isolation, his gadget obsession, and his 'I work alone' mantra—and plays them for laughs to reveal a tragic truth: Batman is incredibly lonely. By showing Batman going home to a giant empty mansion to eat lobster thermidor alone in his bathrobe, the film argues that his traditional 'darkness' is actually a defense mechanism against the fear of losing a family again. It forces the character to evolve from a self-serious vigilante into a man who can say 'I need you' to his friends and enemies alike." 
        },
        { 
            question: "How does the 'Phantom Zone' plot serve as a tribute to cinema history?", 
            answer: "Because the film operates on 'LEGO logic'—the idea that a child is mixing all their toy sets together—the Phantom Zone becomes a prison for the greatest villains in pop culture history. This allowed the filmmakers to include characters like Sauron (LOTR), Voldemort (Harry Potter), King Kong, the Daleks (Doctor Who), and the Wicked Witch (Wizard of Oz). This isn't just fan service; it reinforces the film's theme that Batman’s world is part of a larger imaginative universe, and that he is an icon who belongs alongside the greatest legends of storytelling." 
        },
        { 
            question: "How does the relationship between Batman and the Joker differ in this version?", 
            answer: "The film hilariously reimagines the Batman/Joker dynamic as a 'dysfunctional romantic relationship.' The Joker is heartbroken because Batman refuses to admit that he 'hates' him or that the Joker is his 'greatest enemy.' This brilliantly satirizes the co-dependent nature of their 80-year comic book history. By the end, Batman’s growth is measured by his ability to finally acknowledge the Joker's importance in his life, proving that even a hero's identity is defined by the relationships—both positive and negative—that they maintain." 
        }
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
        types.add(scene.type);
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
    return HBO_MAX_FAMILY_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - A great family movie on HBO Max.`,
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