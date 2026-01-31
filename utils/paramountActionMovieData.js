// utils/paramountActionMovieData.js - PARAMOUNT+ ACTION COLLECTION DATA
// High-Octane Action, Aerial Combat, and Adrenaline-Fueled Cinema

export const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed', // Replace with your actual key if needed
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: { small: 'w300', medium: 'w500', large: 'w780', original: 'original' }
};

export const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 353081, "imdbID": "tt7963665", "Title": "Mission: Impossible – Fallout", "year": 2018, "genre": "Action", "runtime": 147, "rank": 1 },
    { "tmdbId": 361743, "imdbID": "tt1745960", "Title": "Top Gun: Maverick", "year": 2022, "genre": "Action", "runtime": 130, "rank": 2 },
    { "tmdbId": 56292, "imdbID": "tt1229238", "Title": "Mission: Impossible – Ghost Protocol", "year": 2011, "genre": "Action", "runtime": 133, "rank": 3 },
    { "tmdbId": 339403, "imdbID": "tt3890160", "Title": "Baby Driver", "year": 2017, "genre": "Action", "runtime": 113, "rank": 4 },
    { "tmdbId": 72190, "imdbID": "tt0816711", "Title": "World War Z", "year": 2013, "genre": "Horror", "runtime": 116, "rank": 5 },
    { "tmdbId": 98, "imdbID": "tt0172495", "Title": "Gladiator", "year": 2000, "genre": "Action", "runtime": 155, "rank": 6 },
    { "tmdbId": 1858, "imdbID": "tt0418279", "Title": "Transformers", "year": 2007, "genre": "Sci-Fi", "runtime": 144, "rank": 7 },
    { "tmdbId": 754, "imdbID": "tt0119094", "Title": "Face/Off", "year": 1997, "genre": "Thriller", "runtime": 138, "rank": 8 },
    { "tmdbId": 85, "imdbID": "tt0082971", "Title": "Raiders of the Lost Ark", "year": 1981, "genre": "Adventure", "runtime": 115, "rank": 9 },
    { "tmdbId": 54138, "imdbID": "tt1408101", "Title": "Star Trek Into Darkness", "year": 2013, "genre": "Sci-Fi", "runtime": 132, "rank": 10 }
];

// ✅ SENSITIVE TIMELINES (Focusing on Intensity, Violence & Gore)
export const SENSITIVE_TIMELINES = {
    // 1. Mission: Impossible – Fallout
    353081: { scenes: [] }, // Generally Clean Action
    
    // 2. Top Gun: Maverick
    361743: { scenes: [] }, // Clean Action
    
    // 3. Mission: Impossible – Ghost Protocol
    56292: { scenes: [] }, // Clean Action
    
    // 4. Baby Driver
    339403: { 
        scenes: [
            { start: "1:35:00", end: "1:38:00", type: "Violence", severity: "Moderate" } // Warehouse fight
        ] 
    },
    
    // 5. World War Z
    72190: { 
        scenes: [
            { start: "0:25:00", end: "0:27:00", type: "Transformation", severity: "High" }, // Disturbing turning
            { start: "1:05:00", end: "1:06:00", type: "Dismemberment", severity: "Moderate" } // Hand chop
        ] 
    },
    
    // 6. Gladiator
    98: { 
        scenes: [
            { start: "0:08:00", end: "0:12:00", type: "Gore/War", severity: "High" }, // Opening battle, decapitations
            { start: "1:20:00", end: "1:25:00", type: "Graphic Violence", severity: "High" } // Arena deaths
        ] 
    },
    
    // 7. Transformers
    1858: { scenes: [] }, // Robot violence (safe for most)
    
    // 8. Face/Off
    754: { 
        scenes: [
            { start: "0:05:00", end: "0:07:00", type: "Child Endangerment", severity: "Moderate" },
            { start: "0:35:00", end: "0:40:00", type: "Medical Gore", severity: "High" } // Face removal surgery
        ] 
    },
    
    // 9. Raiders of the Lost Ark
    85: { 
        scenes: [
            { start: "1:48:00", end: "1:50:00", type: "Supernatural Gore", severity: "High" } // Face melting
        ] 
    },
    
    // 10. Star Trek Into Darkness
    54138: { 
        scenes: [
            { start: "0:45:00", end: "0:46:00", type: "Violence", severity: "Moderate" } // Head crushing (off screen but crunch)
        ] 
    }
};

export const FALLBACK_POSTERS = {
    353081: "https://image.tmdb.org/t/p/w500/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg",
    361743: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    56292: "https://image.tmdb.org/t/p/w500/7GCKNRbz8rh57McwWnznHWsTrv7.jpg",
    339403: "https://image.tmdb.org/t/p/w500/rmnQ9jKW72bSz8wwkot6RHi9KXs.jpg",
    72190: "https://image.tmdb.org/t/p/w500/1SWi9787e7jT8d3l69fM0hX581j.jpg",
    98: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    1858: "https://image.tmdb.org/t/p/w500/2Ld127X8f3j60c0K57k7Nf9g7.jpg",
    754: "https://image.tmdb.org/t/p/w500/gE8S02QUOhVnAmYu4tJfBlPgMTQ.jpg",
    85: "https://image.tmdb.org/t/p/w500/ceG9VzoRAVGwivFU403Wc3AHRys.jpg",
    54138: "https://image.tmdb.org/t/p/w500/7C7k62D8r9t9v9a9.jpg"
};

// ✅ HELPER: Updated for Adrenaline
const createMovieData = (data) => ({
    adrenalineScore: 85,    // Default High
    violenceLevel: 60,      // Default Moderate
    visceralImpact: 90,     // Action Choreography
    complexityLevel: "HIGH",
    dominantColor: "#000000",
    ...data,
});

export const COMPLETE_MOVIE_DATA = {
    // 1. Mission: Impossible – Fallout (THE PERFECT ACTION MOVIE)
    // Curve: Dream -> HALO -> Bathroom -> Chase -> Helicopter.
    // Peak: 100 (The Helicopter Payload).
    353081: createMovieData({ 
        adrenalineScore: 97, 
        violenceLevel: 55, 
        visceralImpact: 100, 
        complexityLevel: "MASTERPIECE", 
        dominantColor: "#171717", rating: 7.7, criticsScore: 97, audienceScore: 88, director: "Christopher McQuarrie", 
        cast: ["Tom Cruise", "Henry Cavill", "Rebecca Ferguson"], boxOffice: "$791 million", budget: "$178 million", 
        dna: { "Action": 60, "Thriller": 30, "Spy": 10 }, 
        scenes: [
            { time: 10, intensity: 40, label: "The Deal", color: "#404040" },
            { time: 30, intensity: 82, label: "HALO Jump", color: "#3b82f6" }, 
            { time: 50, intensity: 88, label: "Bathroom Fight", color: "#ef4444" }, 
            { time: 90, intensity: 90, label: "Paris Chase", color: "#16a34a" }, 
            { time: 130, intensity: 96, label: "Payload Duel", color: "#dc2626" } 
        ],
        synopsis: "Two years after the capture of Solomon Lane, the Apostles have emerged as a new terror threat, planning a synchronized nuclear attack on the world's holiest cities. When a mission to secure plutonium cores goes disastrously wrong, Ethan Hunt is forced into an uneasy alliance with a brutal CIA assassin to hunt down the weapons. Haunted by his past mistakes and questioned by his own government, Hunt must race across Paris, London, and Kashmir in a desperate bid to save the world, knowing that one wrong move could cost him the only family he has left.",
        themes: ["Loyalty", "Consequences", "The Greater Good"]
    }),

    // 2. Top Gun: Maverick (PURE SPEED)
    // Curve: Mach 10 -> Training -> Dogfight -> The Canyon -> Dogfight II.
    // Peak: 94 (The Canyon Run).
    361743: createMovieData({ 
        adrenalineScore: 94, 
        violenceLevel: 20, 
        visceralImpact: 99, 
        complexityLevel: "STRAIGHTFORWARD", 
        dominantColor: "#ea580c", rating: 8.3, criticsScore: 96, audienceScore: 99, director: "Joseph Kosinski", 
        cast: ["Tom Cruise", "Miles Teller", "Jennifer Connelly"], boxOffice: "$1.496 billion", budget: "$170 million", 
        dna: { "Action": 70, "Drama": 20, "Romance": 10 },
        scenes: [
            { time: 5, intensity: 80, label: "Mach 10", color: "#ea580c" },
            { time: 45, intensity: 60, label: "Cobra Maneuver", color: "#3b82f6" },
            { time: 80, intensity: 75, label: "Bird Strike", color: "#ef4444" },
            { time: 100, intensity: 94, label: "The Canyon Run", color: "#dc2626" },
            { time: 115, intensity: 92, label: "5th Gen Fighters", color: "#1e293b" }
        ],
        synopsis: "After thirty years of service as the Navy's top aviator, Pete 'Maverick' Mitchell is still pushing the envelope as a test pilot, deliberately dodging the promotion that would ground him. When he is ordered to train a detachment of Top Gun graduates for a specialized mission no living pilot has ever seen, he encounters Rooster, the son of his late best friend Goose. Facing an uncertain future and the ghosts of his past, Maverick is drawn into a confrontation with his own deepest fears, culminating in a mission that demands the ultimate sacrifice from those who will be chosen to fly it.",
        themes: ["Legacy", "Aging", "Need for Speed"]
    }),

    // 3. Mission: Impossible – Ghost Protocol (HEIGHTS)
    // Curve: Prison -> Kremlin -> Burj Khalifa -> Sandstorm -> Parking Garage.
    // Peak: 93 (Burj Khalifa Climb).
    56292: createMovieData({ 
        adrenalineScore: 93, 
        violenceLevel: 40, 
        visceralImpact: 95, 
        complexityLevel: "HIGH", 
        dominantColor: "#0ea5e9", rating: 7.4, criticsScore: 93, audienceScore: 82, director: "Brad Bird", 
        cast: ["Tom Cruise", "Jeremy Renner", "Simon Pegg"], boxOffice: "$694 million", budget: "$145 million", 
        dna: { "Action": 50, "Spy": 30, "Tech": 20 },
        scenes: [
            { time: 10, intensity: 60, label: "Prison Break", color: "#64748b" },
            { time: 30, intensity: 75, label: "Kremlin Explodes", color: "#ef4444" },
            { time: 65, intensity: 93, label: "Burj Khalifa", color: "#0ea5e9" }, 
            { time: 85, intensity: 85, label: "Sandstorm Chase", color: "#d97706" },
            { time: 120, intensity: 82, label: "The Button", color: "#1e293b" }
        ],
        synopsis: "The IMF is implicated in a global terrorist plot after a bomb destroys the Kremlin, leading the US President to initiate 'Ghost Protocol' and disavow the entire organization. Left with no resources, no backup, and a broken team, Ethan Hunt must go rogue to clear his agency's name and prevent a nuclear extremist from starting World War III. From the depths of a Russian prison to the dizzying heights of Dubai's Burj Khalifa, the team must learn to trust each other again and improvise their way through a gauntlet of high-tech obstacles.",
        themes: ["Trust", "Improvisation", "Teamwork"]
    }),

    // 4. Baby Driver (RHYTHM ACTION)
    // Curve: Bellbottoms -> Coffee -> Tequila -> Brighton Rock -> Showdown.
    // Peak: 88 (Tequila Shootout).
    339403: createMovieData({ 
        adrenalineScore: 88, 
        violenceLevel: 65, 
        visceralImpact: 90, 
        complexityLevel: "MUSICAL", 
        dominantColor: "#ec4899", rating: 7.6, criticsScore: 92, audienceScore: 86, director: "Edgar Wright", 
        cast: ["Ansel Elgort", "Kevin Spacey", "Lily James"], boxOffice: "$226 million", budget: "$34 million", 
        dna: { "Music": 50, "Car Chase": 30, "Romance": 20 },
        scenes: [
            { time: 5, intensity: 82, label: "Bellbottoms", color: "#ef4444" }, 
            { time: 35, intensity: 40, label: "Was He Slow?", color: "#8b5cf6" },
            { time: 60, intensity: 88, label: "Tequila Shootout", color: "#f97316" }, 
            { time: 90, intensity: 87, label: "Hocus Pocus", color: "#ec4899" },
            { time: 105, intensity: 87, label: "Brighton Rock", color: "#be123c" }
        ],
        synopsis: "Baby is a talented, young getaway driver who relies on the beat of his personal soundtrack to be the best in the game, drowning out the tinnitus he's suffered since childhood. When he meets the girl of his dreams, he sees a chance to ditch his criminal life and make a clean getaway, but he is coerced into working for a crime boss one last time. As a doomed heist threatens his life, love, and freedom, Baby must face the music and use his driving skills to protect the people he cares about in a symphony of speed and gunfire.",
        themes: ["Music", "Crime", "Escape"]
    }),

    // 5. World War Z (PANIC)
    // Curve: Traffic -> Rooftop -> Jerusalem -> Plane -> Lab.
    // Peak: 90 (Jerusalem Wall Breach).
    72190: createMovieData({ 
        adrenalineScore: 90, 
        violenceLevel: 75, 
        visceralImpact: 88, 
        complexityLevel: "TENSION", 
        dominantColor: "#1e293b", rating: 7.0, criticsScore: 66, audienceScore: 72, director: "Marc Forster", 
        cast: ["Brad Pitt", "Mireille Enos", "Daniella Kertesz"], boxOffice: "$540 million", budget: "$190 million", 
        dna: { "Horror": 40, "Action": 40, "Thriller": 20 },
        scenes: [
            { time: 10, intensity: 80, label: "Philly Traffic", color: "#ef4444" }, 
            { time: 40, intensity: 70, label: "Korea Rain", color: "#334155" },
            { time: 75, intensity: 90, label: "The Wall Breached", color: "#dc2626" }, 
            { time: 90, intensity: 88, label: "Grenade on Plane", color: "#1e1b4b" },
            { time: 105, intensity: 80, label: "The Pepsi Can", color: "#0f172a" } 
        ],
        synopsis: "Life for former United Nations investigator Gerry Lane and his family seems content until the world is suddenly plagued by a mysterious infection turning entire human populations into rampaging, mindless zombies. After barely escaping the chaos, Lane is persuaded to go on a mission to investigate this disease, traveling the globe from South Korea to Jerusalem in search of Patient Zero. With the fate of humanity hanging by a thread and time running out, he must identify the weakness of an enemy that acts not like a person, but like a tidal wave of death.",
        themes: ["Pandemic", "Family", "Global Chaos"]
    }),

    // 6. Gladiator (EPIC)
    // Curve: Germania -> Coliseum debut -> Final Duel.
    // Peak: 90 (Coliseum Debut).
    98: createMovieData({ 
        adrenalineScore: 90, 
        violenceLevel: 85, 
        visceralImpact: 95, 
        complexityLevel: "CLASSIC", 
        dominantColor: "#a16207", rating: 8.5, criticsScore: 79, audienceScore: 87, director: "Ridley Scott", 
        cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"], boxOffice: "$460 million", budget: "$103 million", 
        dna: { "History": 40, "Action": 40, "Drama": 20 },
        scenes: [
            { time: 10, intensity: 85, label: "Hell Unleashed", color: "#78350f" }, 
            { time: 45, intensity: 75, label: "Zucchabar Fight", color: "#ca8a04" },
            { time: 90, intensity: 90, label: "Barbarian Horde", color: "#b45309" }, 
            { time: 110, intensity: 88, label: "Tigers of Gaul", color: "#ea580c" },
            { time: 145, intensity: 88, label: "The Final Duel", color: "#713f12" } 
        ],
        synopsis: "In the final days of Marcus Aurelius's reign, the Roman general Maximus Decimus Meridius is betrayed by the emperor's corrupt son, Commodus, who murders his father and orders the execution of Maximus's family. Reduced to slavery and forced to become a gladiator, Maximus rises through the ranks of the arena to avenge the murders of his wife and son. His popularity in the Colosseum threatens the power of the new Emperor, leading to a confrontation that challenges the very heart of the Roman Empire.",
        themes: ["Vengeance", "Politics", "Honor"]
    }),

    // 7. Transformers (METAL MAYHEM)
    // Curve: Base Attack -> Scorponok -> Mission City.
    // Peak: 85 (Mission City Battle).
    1858: createMovieData({ 
        adrenalineScore: 85, 
        violenceLevel: 40, 
        visceralImpact: 92, 
        complexityLevel: "SPECTACLE", 
        dominantColor: "#eab308", rating: 7.0, criticsScore: 58, audienceScore: 85, director: "Michael Bay", 
        cast: ["Shia LaBeouf", "Megan Fox", "Josh Duhamel"], boxOffice: "$709 million", budget: "$150 million", 
        dna: { "Sci-Fi": 50, "Action": 40, "Comedy": 10 },
        scenes: [
            { time: 5, intensity: 75, label: "Blackout Attacks", color: "#1e293b" },
            { time: 40, intensity: 78, label: "Scorponok Desert", color: "#eab308" },
            { time: 80, intensity: 65, label: "Backyard Hiding", color: "#16a34a" },
            { time: 120, intensity: 85, label: "Mission City", color: "#ef4444" },
            { time: 135, intensity: 87, label: "Optimus vs Megatron", color: "#2563eb" }
        ],
        synopsis: "A long-forgotten struggle between two cybernetic alien races, the heroic Autobots and the evil Decepticons, comes to Earth with the fate of the universe hanging in the balance. The key to the ultimate power source, the AllSpark, is held by an unsuspecting teenager named Sam Witwicky, who buys his first car only to discover it is an alien robot in disguise. As the Decepticons launch a global assault to reclaim the cube, Sam and the Autobots must join forces with the US military to prevent the extinction of the human race.",
        themes: ["Technology", "War", "Coming of Age"]
    }),

    // 8. Face/Off (CHAOTIC 90s)
    // Peak: 90 (Church Shootout).
    754: createMovieData({ 
        adrenalineScore: 90, 
        violenceLevel: 80, 
        visceralImpact: 85, 
        complexityLevel: "WILD", 
        dominantColor: "#1e1b4b", rating: 7.3, criticsScore: 92, audienceScore: 82, director: "John Woo", 
        cast: ["John Travolta", "Nicolas Cage", "Joan Allen"], boxOffice: "$245 million", budget: "$80 million", 
        dna: { "Action": 50, "Thriller": 30, "Sci-Fi": 20 },
        scenes: [
            { time: 10, intensity: 78, label: "Runway Chase", color: "#eab308" },
            { time: 40, intensity: 65, label: "Face Surgery", color: "#0ea5e9" }, 
            { time: 90, intensity: 85, label: "I'm Castor Troy", color: "#ef4444" },
            { time: 110, intensity: 90, label: "Mexican Standoff", color: "#b91c1c" }, 
            { time: 130, intensity: 88, label: "Boat Chase", color: "#3b82f6" }
        ],
        synopsis: "Obsessed FBI agent Sean Archer has spent years hunting Castor Troy, the terrorist who killed his son, finally capturing him in a coma-inducing ambush. To thwart a hidden bomb set to destroy Los Angeles, Archer undergoes a radical surgical procedure to swap faces with Troy and infiltrate his criminal network undercover. But the plan turns into a nightmare when Troy wakes up, steals Archer's face, and takes over his life, leaving the real Archer trapped in a high-tech prison with the face of the man he hates most.",
        themes: ["Identity", "Duality", "Obsession"]
    }),

    // 9. Raiders of the Lost Ark (ADVENTURE CINEMA DEFINED)
    // Peak: 95 (The Truck Chase).
    85: createMovieData({ 
        adrenalineScore: 95, 
        violenceLevel: 50, 
        visceralImpact: 88, 
        complexityLevel: "LEGEND", 
        dominantColor: "#b45309", rating: 8.4, criticsScore: 93, audienceScore: 96, director: "Steven Spielberg", 
        cast: ["Harrison Ford", "Karen Allen", "Paul Freeman"], boxOffice: "$389 million", budget: "$18 million", 
        dna: { "Adventure": 60, "Action": 30, "History": 10 },
        scenes: [
            { time: 5, intensity: 82, label: "The Boulder", color: "#78350f" },
            { time: 30, intensity: 65, label: "Nepal Bar Fight", color: "#ea580c" },
            { time: 60, intensity: 70, label: "Cairo Swordsman", color: "#d97706" },
            { time: 85, intensity: 95, label: "Truck Chase", color: "#b45309" }, 
            { time: 105, intensity: 92, label: "Face Melt", color: "#ef4444" }
        ],
        synopsis: "In 1936, archaeologist and adventurer Indiana Jones is tasked by U.S. Army Intelligence to locate the biblical Ark of the Covenant before Adolf Hitler's Nazis can obtain it. Believed to hold the power of God, the Ark would make the German army invincible, and Jones must travel from the mountains of Nepal to the sands of Cairo to secure it. Teaming up with his feisty former flame Marion Ravenwood, he faces snakes, traps, and a relentless enemy in a race against time that will test his faith and his survival skills.",
        themes: ["Good vs Evil", "History", "Faith"]
    }),

    // 10. Star Trek Into Darkness (FUTURE WAR)
    // Peak: 87 (San Fran Crash).
    54138: createMovieData({ 
        adrenalineScore: 85, 
        violenceLevel: 45, 
        visceralImpact: 85, 
        complexityLevel: "SCI-FI", 
        dominantColor: "#2563eb", rating: 7.7, criticsScore: 84, audienceScore: 89, director: "J.J. Abrams", 
        cast: ["Chris Pine", "Zachary Quinto", "Benedict Cumberbatch"], boxOffice: "$467 million", budget: "$190 million", 
        dna: { "Sci-Fi": 60, "Action": 30, "Drama": 10 },
        scenes: [
            { time: 5, intensity: 75, label: "Volcano Run", color: "#ef4444" },
            { time: 30, intensity: 82, label: "HQ Attack", color: "#f59e0b" },
            { time: 60, intensity: 80, label: "Klingon Fight", color: "#78350f" },
            { time: 90, intensity: 85, label: "Space Jump", color: "#2563eb" }, 
            { time: 120, intensity: 87, label: "San Fran Crash", color: "#1e293b" }
        ],
        synopsis: "When the crew of the Enterprise is called back home, they find an unstoppable force of terror from within their own organization has detonated the fleet and everything it stands for, leaving the world in a state of crisis. Captain Kirk, consumed by the desire for vengeance, leads a manhunt to a war-zone world to capture a one-man weapon of mass destruction. As he is propelled into an epic chess game of life and death, love will be challenged, friendships will be torn apart, and sacrifices must be made for the only family Kirk has left: his crew.",
        themes: ["Vengeance", "Friendship", "Militarism"]
    })
};

export const STRATEGIC_QUOTES = {
    353081: "Mission accomplished!",
    361743: "It's not the plane, it's the pilot.",
    56292: "Mission: Accomplished!",
    339403: "One more job and I'm done.",
    72190: "Movement is life.",
    98: "Are you not entertained?!",
    1858: "Roll out.",
    754: "I want to take his face... off.",
    85: "Snakes. Why'd it have to be snakes?",
    54138: "My name is Khan."
};

export const CINEMATIC_COLORS = {
    "Action": "#ef4444", "Sci-Fi": "#3b82f6", "Thriller": "#f59e0b", "Horror": "#3f3f46", "Adventure": "#b45309", "Music": "#ec4899"
};

export const RATING_OPTIONS = [
    { value: 1, label: "Boring", color: "#dc2626", symbol: "💤", bgColor: "bg-red-900/30", description: "Put me to sleep" },
    { value: 2, label: "Generic", color: "#ea580c", symbol: "🤷", bgColor: "bg-orange-900/30", description: "Seen it before" },
    { value: 3, label: "Solid Action", color: "#16a34a", symbol: "👊", bgColor: "bg-green-900/30", description: 'Good fights, decent plot' },
    { value: 4, label: "God Tier", color: "#eab308", symbol: "🔥", bgColor: "bg-yellow-900/30", description: "Adrenaline Masterpiece" }
];

export const PARAMOUNT_ACTION_MOVIE_FAQS = {
    'Mission: Impossible – Fallout': [
        { 
            question: "Did Tom Cruise really break his ankle?", 
            answer: "Yes, and the shot made it into the final film. During the rooftop chase in London, Cruise jumped between two buildings and slammed his foot into the concrete wall, snapping his ankle instantly. Instead of cutting, he pulled himself up and limped out of the frame to finish the take, preserving one of the most visceral moments in the franchise's history." 
        },
        { 
            question: "Is the helicopter chase CGI?", 
            answer: "No, the helicopter chase is almost entirely practical. Tom Cruise spent months training to become a certified helicopter pilot specifically for this sequence so he could fly solo. In the corkscrew dive scene, Cruise is actually piloting the helicopter while also operating the camera rig and acting, with no green screen involved, making it one of the most dangerous stunts ever filmed." 
        },
        { 
            question: "How was the HALO jump filmed?", 
            answer: "The High Altitude Low Opening (HALO) jump was filmed at 25,000 feet, a height requiring oxygen masks to prevent hypoxia. To get the lighting perfect, the crew could only film during a 3-minute window of 'magic hour' light each day. This forced Cruise and the cameraman (who had to jump backward) to perform the jump over 100 times to capture the seamless sequence seen in the movie." 
        },
        { 
            question: "Why does Henry Cavill 'reload' his arms?", 
            answer: "In the bathroom fight scene, Henry Cavill makes a motion where he pumps his arms down as if reloading them like shotguns before throwing a massive punch. This was an unscripted, improvised moment by Cavill to show his character's brute force and adrenaline. It became an instant viral sensation, symbolizing the film's relentless physical intensity." 
        }
    ],
    'Top Gun: Maverick': [
        { 
            question: "Are the actors really flying?", 
            answer: "Yes, Tom Cruise insisted that no green screens be used for the cockpit shots. All the actors were placed in the back seats of real F/A-18 Super Hornets flown by actual Navy pilots. They had to endure 7 to 8 Gs of force during the maneuvers, which naturally distorted their faces and bodies in a way that CGI simply cannot replicate." 
        },
        { 
            question: "Is the 'Darkstar' a real plane?", 
            answer: "The hypersonic 'Darkstar' jet seen in the opening is fictional, but its design was created in collaboration with engineers from Lockheed Martin's Skunk Works—the same division that built the SR-71 Blackbird. The mockup was so realistic that the Chinese government reportedly re-oriented their spy satellites to track the movie prop, believing it to be a genuine secret U.S. military aircraft." 
        },
        { 
            question: "Why isn't Kelly McGillis in the sequel?", 
            answer: "Director Joseph Kosinski chose not to bring back Charlie (Maverick's love interest from the 1986 original) because he wanted the story to look forward rather than purely at the past. The romance with Penny Benjamin (Jennifer Connelly) is actually a deep-cut callback; she is the 'admiral's daughter' mentioned in a throwaway line in the first movie whom Maverick famously did a high-speed flyby over." 
        },
        { 
            question: "How did Val Kilmer speak in the film?", 
            answer: "Val Kilmer has lost his natural voice due to battles with throat cancer. For his emotional reunion scene as Iceman, filmmakers used advanced AI technology to reconstruct his voice. They blended archival audio of his younger self with his current speech patterns to create a seamless, heartbreaking dialogue performance." 
        }
    ],
    'Mission: Impossible – Ghost Protocol': [
        { 
            question: "Did Tom Cruise really climb the Burj Khalifa?", 
            answer: "Yes, Tom Cruise actually hung 1,700 feet in the air outside the Burj Khalifa in Dubai, the world's tallest building. The cables holding him were digitally erased, but the height, the wind, and the vertigo were 100% real. The stunt was so dangerous that the film's insurance company wanted to fire the safety team for allowing it to happen." 
        },
        { 
            question: "Why did an animation director make this?", 
            answer: "Director Brad Bird was previously known for Pixar hits like 'The Incredibles' and 'Ratatouille'. This was his first live-action film, and his background in animation was crucial. It allowed him to visualize and choreograph complex action sequences with perfect spatial geography, making the chaotic set pieces easy for the audience to follow." 
        },
        { 
            question: "Was the sandstorm real?", 
            answer: "The sandstorm chase was a combination of practical effects and CGI. While the massive wave of sand engulfing Dubai was digital, the sand hitting the actors on the ground was real—made from crushed paper and corn. The scene took weeks to film because the fine particles kept getting into the expensive IMAX cameras, causing technical delays." 
        },
        { 
            question: "Was Jeremy Renner supposed to replace Tom Cruise?", 
            answer: "Rumors heavily suggested that Jeremy Renner's character, Brandt, was introduced to potentially take over the franchise if Tom Cruise decided to retire. However, the film's massive critical and commercial success proved that Cruise was still the essential heart of the series, securing his lead role for the future installments." 
        }
    ],
    'Baby Driver': [
        { 
            question: "Do the gunshots actually match the music?", 
            answer: "Yes, with incredible precision. Every gunshot, windshield wiper swipe, and footstep in the movie is synchronized to the soundtrack's beat. Director Edgar Wright printed the lyrics of the songs directly onto the script pages so the actors knew exactly when to fire their weapons or move to ensure the action remained perfectly in tempo." 
        },
        { 
            question: "Is the driving CGI or practical?", 
            answer: "Almost none of the driving is CGI. The drifting, 180-degree turns, and high-speed maneuvers were done practically. For shots focusing on the actors inside the car, they used a 'biscuit rig'—a drivable pod mounted on the car's roof. This allowed a professional stunt driver to control the vehicle while the actors focused entirely on their performance." 
        },
        { 
            question: "What is the high-pitched ringing sound?", 
            answer: "Whenever Baby isn't listening to music, the audience hears a faint, high-pitched ringing noise in the sound mix. This sound design choice puts the viewer directly in Baby's headspace, simulating the tinnitus (ear ringing) he suffers from due to the childhood car crash that killed his parents." 
        },
        { 
            question: "Did they really rob a bank with Mike Myers masks?", 
            answer: "No, but the mask scene was a genuine mix-up turned into a joke. The studio couldn't get the legal rights to use the 'Halloween' Michael Myers masks. So, they used 'Austin Powers' Mike Myers masks instead, creating one of the film's funniest visual gags born out of a real-life licensing issue." 
        }
    ],
    'World War Z': [
        { 
            question: "Why do the zombies move like water?", 
            answer: "The filmmakers based the zombie movement on 'swarm intelligence' found in nature, such as ant colonies or schools of fish. This 'fluid dynamics' approach made the zombies terrifying not as individuals, but as a crashing wave of biomass that could scale massive walls simply by trampling over one another in a frenzy." 
        },
        { 
            question: "Was the ending changed?", 
            answer: "Yes, drastically. The original ending featured a massive, dark battle in Russia where Gerry (Brad Pitt) becomes a hardened zombie-killing soldier. It was deemed too disjointed and depressing, so the studio ordered extensive reshoots. They created the entirely new, suspense-driven third act in the WHO laboratory to give the film a more personal and hopeful conclusion." 
        },
        { 
            question: "Is the movie like the book?", 
            answer: "Very little. Max Brooks' original novel is a collection of oral histories told by survivors years after the zombie war. The movie is a present-tense, fast-paced action thriller. Max Brooks has stated that while he enjoyed the film, he considers it to share almost nothing with his book other than the title." 
        },
        { 
            question: "What were the production issues?", 
            answer: "The production was notoriously plagued by rewrites, reshoots, and on-set tension, ballooning the budget to over $190 million. The press predicted it would be a massive flop due to the bad buzz. However, the film defied expectations to become the highest-grossing zombie movie of all time." 
        }
    ],
    'Gladiator': [
        { 
            question: "Was the tiger real?", 
            answer: "Yes, in the arena fight scene, a real tiger was used. A veterinarian was present with a tranquilizer gun, and Russell Crowe was kept a safe distance away via careful camera angles. However, the tiger was very much alive and on set, adding a layer of genuine fear and tension to the performance." 
        },
        { 
            question: "Who died during filming?", 
            answer: "Oliver Reed, the legendary actor who played Proximo, died of a heart attack before filming was completed. To finish his scenes, the visual effects team had to digitally graft his face onto a body double and use unused audio tracks. It was one of the earliest and most convincing uses of such technology in cinema." 
        },
        { 
            question: "Is the thumb gesture historically accurate?", 
            answer: "Not exactly. Historically, a 'thumbs up' likely meant 'swords up' (kill him), and a concealed thumb meant 'swords down' (spare him). However, the movie uses the modern interpretation—thumbs up for life, thumbs down for death—to avoid confusing modern audiences who associate thumbs up with approval." 
        },
        { 
            question: "Did Russell Crowe like the script?", 
            answer: "Initially, no. He famously told the writers, 'Your lines are garbage but I'm the greatest actor in the world and I can make even garbage sound good.' He ended up improvising or rewriting many of his most famous moments, including the poignant description of his farm in Spain." 
        }
    ],
    'Transformers': [
        { 
            question: "How complex was the CGI?", 
            answer: "The CGI was groundbreakingly complex. A single frame of a transforming robot took Industrial Light & Magic (ILM) up to 38 hours to render. The robots were designed with thousands of individual moving parts so that they would look realistic as they moved, reflecting light and scratching metal, rather than looking like plastic toys." 
        },
        { 
            question: "Did General Motors pay for the cars?", 
            answer: "General Motors saved the production nearly $3 million by donating all the cars used in the film. In exchange, Michael Bay made the new Chevrolet Camaro (Bumblebee) a central character. This product placement was so effective that it significantly boosted sales of the Camaro when the car was released to the public." 
        },
        { 
            question: "Is the military footage real?", 
            answer: "Yes. Director Michael Bay has a close relationship with the U.S. military. The F-22 Raptors and AC-130 gunships seen in the film are real military assets flown by actual combat pilots. The actors were often reacting to real explosions and low-altitude flyovers, adding to the intensity of the battle scenes." 
        },
        { 
            question: "Why does Optimus Prime have flames?", 
            answer: "In the original 1980s cartoon, Optimus Prime was a flat red truck. Michael Bay felt that a flat red truck would look like a firetruck on the big screen, confusing the audience. He added the blue flame paint job to make the character look more distinct, aggressive, and 'cool' for a modern blockbuster, despite initial outcry from purist fans." 
        }
    ],
    'Face/Off': [
        { 
            question: "How did they swap acting styles?", 
            answer: "Nicolas Cage and John Travolta spent weeks studying each other's mannerisms, voice inflections, and movements. Travolta had to learn to act like Cage acting like Travolta, and vice versa. They agreed on specific gestures—like the hand-over-face wipe—to anchor the illusion that they had truly swapped bodies." 
        },
        { 
            question: "What do the white doves symbolize?", 
            answer: "Director John Woo is famous for using white doves in his action sequences as a signature trademark. They generally symbolize the purity of the soul amidst violence. In 'Face/Off', the doves fly during the chaotic church shootout, highlighting the sacrilegious destruction and the loss of innocence in the battle between Archer and Troy." 
        },
        { 
            question: "Was the boat chase real?", 
            answer: "Yes, mostly. The high-speed boat chase was filmed on open water, not in a tank or with green screens. The actors performed many of their own stunts during the sequence. The final crash, where the boat flies into the pier, was a practical stunt that actually destroyed a real boat and set piece." 
        },
        { 
            question: "Why are there magnetic boots in prison?", 
            answer: "The high-tech prison (Erewhon) features magnetic boots to control the inmates. This element was a late addition to the script to explain how a super-prison could exist without traditional bars or cells. It added a sci-fi element to the thriller and provided a unique mechanic for the prison escape sequence." 
        }
    ],
    'Raiders of the Lost Ark': [
        { 
            question: "Why did Indy shoot the swordsman?", 
            answer: "In the famous Cairo scene, a swordsman shows off his skills, and Indy simply shoots him. Originally, a complex whip vs. sword fight was scripted and rehearsed. However, Harrison Ford was suffering from severe dysentery (food poisoning) that day and was too weak to perform the stunts. He suggested, 'Why don't I just shoot him?' Spielberg loved the idea, and it became one of the most iconic moments in cinema." 
        },
        { 
            question: "How did they melt the Nazi's face?", 
            answer: "To create the gruesome face-melting effect at the end, the FX team built a wax head over a gelatin skull. They placed heat lamps around it and filmed it melting in real-time. They then sped up the footage, creating the supernatural disintegration effect without using any CGI." 
        },
        { 
            question: "Was the giant boulder heavy?", 
            answer: "The giant boulder in the opening temple scene was made of fiberglass and wood, but it still weighed about 300 pounds. While not solid rock, it was heavy enough that if Harrison Ford had tripped during the run, it could have seriously injured him. He had to outrun the prop ten times to get the perfect shot." 
        },
        { 
            question: "Is the submarine real?", 
            answer: "The German U-boat seen in the film was actually a rental! It was the exact same submarine used in the German war movie 'Das Boot'. The production rented it to save money on building a full-scale prop, adding an authentic WWII texture to the scenes." 
        }
    ],
    'Star Trek Into Darkness': [
        { 
            question: "Who is the villain really?", 
            answer: "Benedict Cumberbatch plays Khan Noonien Singh, a genetically engineered superhuman from the original series. The filmmakers tried to keep his identity a secret until the movie's release, referring to him only as 'John Harrison' in marketing. This led to controversy, as Khan is originally a character of Sikh/Indian descent, while Cumberbatch is white." 
        },
        { 
            question: "Why are there so many lens flares?", 
            answer: "Director J.J. Abrams is famous for using lens flares to give his sci-fi films a bright, optimistic, and futuristic look. In 'Into Darkness', he used so many that he later publicly apologized to his wife and fans, admitting there were scenes where the flares were so intense you couldn't even see the actors' faces." 
        },
        { 
            question: "How was the space jump filmed?", 
            answer: "The scene where Kirk and Khan jump between ships in space suits was a combination of wirework and CGI. The scene is notable for its sound design—it goes completely silent when they are in the vacuum of space, contrasting sharply with the loud, chaotic phaser battles that precede it." 
        },
        { 
            question: "Is the Enterprise bigger than before?", 
            answer: "Yes. The Enterprise in the J.J. Abrams timeline is significantly larger than the version seen in the original 1960s TV show. This scaling up was done to make the ship feel like a massive, powerful military vessel capable of housing hundreds of crew members comfortably, matching the scale of modern blockbuster cinema." 
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
        const lowerType = scene.type.toLowerCase();
        if (lowerType.includes('gore') || lowerType.includes('blood')) types.add('heavy gore');
        if (lowerType.includes('violence') || lowerType.includes('fight')) types.add('graphic violence');
        if (lowerType.includes('torture')) types.add('disturbing scenes');
    });
    return Array.from(types);
};

export const generateFAQData = (movie) => {
    return PARAMOUNT_ACTION_MOVIE_FAQS[movie.Title] || [];
};

export const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    return {
        '@context': 'https://schema.org',
        '@type': 'Movie',
        'name': movie.Title,
        'description': movieInfo?.synopsis || `${movie.Title} - High octane action movie on Paramount+.`,
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