import React, { useState, useEffect, useMemo, useCallback, useRef, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Dot } from 'recharts';
import { Star, ChevronLeft, ChevronRight, Crown, Award, Volume2, VolumeX, Play, Pause, Bookmark, PlusCircle, CheckCircle, Share2, Sparkles, Brain, Calendar, Clock, Users, Zap, Film, Eye, TrendingUp, BarChart3, MessageCircle, ThumbsUp, Send, Heart, XCircle, AlertTriangle, Atom, VenetianMask, Siren, Clapperboard, HelpCircle, Skull, Wand2, Shield, Tv, ShoppingCart, Ticket } from 'lucide-react';

// --- SEO META COMPONENT ---
const SEOHead = () => {
    useEffect(() => {
        // Set page title
        document.title = "Mind Benders - Premium Cinematic Collection | Curated Mind-Bending Films";
        
        // Add meta tags
        const metaTags = [
            { name: 'description', content: 'Discover the finest collection of mind-bending cinema. Curated selection of reality-defying films with detailed analysis, streaming availability, and expert reviews.' },
            { name: 'keywords', content: 'mind-bending movies, cinematic collection, film analysis, streaming guide, movie reviews, psychological thrillers, sci-fi films' },
            { name: 'author', content: 'Mind Benders Cinematic Collection' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
            { name: 'robots', content: 'index, follow' },
            { property: 'og:title', content: 'Mind Benders - Premium Cinematic Collection' },
            { property: 'og:description', content: 'Explore curated mind-bending films with detailed analysis and streaming availability' },
            { property: 'og:type', content: 'website' },
            { property: 'og:site_name', content: 'Mind Benders' },
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: 'Mind Benders - Premium Cinematic Collection' },
            { name: 'twitter:description', content: 'Discover the finest collection of mind-bending cinema' },
            { name: 'theme-color', content: '#fbbf24' },
        ];

        metaTags.forEach(tag => {
            const existingTag = document.querySelector(`meta[${tag.property ? 'property' : 'name'}="${tag.property || tag.name}"]`);
            if (existingTag) {
                existingTag.setAttribute('content', tag.content);
            } else {
                const metaElement = document.createElement('meta');
                if (tag.property) {
                    metaElement.setAttribute('property', tag.property);
                } else {
                    metaElement.setAttribute('name', tag.name);
                }
                metaElement.setAttribute('content', tag.content);
                document.head.appendChild(metaElement);
            }
        });

        // Add structured data
        const structuredData = {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Mind Benders Cinematic Collection",
            "description": "Premium collection of mind-bending cinema with detailed analysis",
            "url": window.location.origin,
            "potentialAction": {
                "@type": "SearchAction",
                "target": `${window.location.origin}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string"
            }
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(structuredData);
        document.head.appendChild(script);

        return () => {
            // Cleanup if needed
        };
    }, []);

    return null;
};

// --- ENHANCED FONT LOADER ---
const FontLoader = () => {
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&f[]=general-sans@500,400&f[]=supreme@400&f[]=editorial-new@700&display=swap';
        link.rel = 'stylesheet';
        link.as = 'style';
        document.head.appendChild(link);
    }, []);
    return null;
};

// --- OPTIMIZED AUDIO MANAGER ---
class AudioManager {
    constructor() {
        this.context = null;
        this.initialized = false;
    }
    
    init() {
        if (this.initialized || typeof window === 'undefined') return;
        try {
            this.context = new (window.AudioContext || window.webkitAudioContext)();
            this.initialized = true;
        } catch (e) {
            console.error("Web Audio API is not supported in this browser.");
        }
    }

    playSound(type) {
        if (!this.initialized || !this.context) return;

        const oscillator = this.context.createOscillator();
        const gainNode = this.context.createGain();
        oscillator.connect(gainNode);
        gainNode.connect(this.context.destination);

        const config = {
            hover: { freq: 440, duration: 0.1, volume: 0.006 },
            click: { freq: 330, duration: 0.1, volume: 0.006 },
            success: { freq: 523, duration: 0.1, volume: 0.006 },
            shutter: { freq: 200, duration: 0.05, volume: 0.01 },
            whoosh: { freq: 880, duration: 0.2, volume: 0.008 }
        };
        
        const { freq, duration, volume } = config[type] || config.hover;

        oscillator.frequency.setValueAtTime(freq, this.context.currentTime);
        gainNode.gain.setValueAtTime(volume, this.context.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.001, this.context.currentTime + duration);
        
        oscillator.start(this.context.currentTime);
        oscillator.stop(this.context.currentTime + duration);
    }
}

const audioManager = new AudioManager();

const useOptimizedSound = () => {
    useEffect(() => {
        const initAudio = () => {
            audioManager.init();
            window.removeEventListener('click', initAudio);
        };
        window.addEventListener('click', initAudio);
        return () => window.removeEventListener('click', initAudio);
    }, []);
    
    return useCallback((type) => {
        audioManager.playSound(type);
    }, []);
};

// --- LUXURY STREAMING PLATFORM CONFIGURATION ---
const STREAMING_PLATFORMS = {
    netflix: {
        name: 'Netflix',
        logoUrl: 'https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png',
        color: '#fbbf24',
        id: 8
    },
    amazon_prime: {
        name: 'Amazon Prime Video',
        logoUrl: 'https://logos-world.net/wp-content/uploads/2021/08/Amazon-Prime-Video-Logo.png',
        color: '#f59e0b',
        id: 119
    },
    disney_plus: {
        name: 'Disney+',
        logoUrl: 'https://logos-world.net/wp-content/uploads/2020/11/Disney-Plus-Logo.png',
        color: '#eab308',
        id: 337
    },
    hulu: {
        name: 'Hulu',
        logoUrl: 'https://logos-world.net/wp-content/uploads/2020/06/Hulu-Logo.png',
        color: '#fcd34d',
        id: 15
    },
    hbo_max: {
        name: 'HBO Max',
        logoUrl: 'https://logos-world.net/wp-content/uploads/2021/08/HBO-Max-Logo.png',
        color: '#facc15',
        id: 384
    },
    apple_tv: {
        name: 'Apple TV+',
        logoUrl: 'https://logos-world.net/wp-content/uploads/2020/04/Apple-TV-Logo.png',
        color: '#fde047',
        id: 350
    }
};

// --- COMPLETE MOVIE DATABASE ---
const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 14337, "imdbID": "tt0390384", "Title": "Primer", "year": 2004, "genre": "Sci-Fi", "runtime": 77 },
    { "tmdbId": 15787, "imdbID": "tt0383028", "Title": "Synecdoche, New York", "year": 2008, "genre": "Drama", "runtime": 124 },
    { "tmdbId": 1018, "imdbID": "tt0166924", "Title": "Mulholland Drive", "year": 2001, "genre": "Mystery", "runtime": 147 },
    { "tmdbId": 206487, "imdbID": "tt2397535", "Title": "Predestination", "year": 2014, "genre": "Sci-Fi", "runtime": 97 },
    { "tmdbId": 220289, "imdbID": "tt2866360", "Title": "Coherence", "year": 2013, "genre": "Sci-Fi", "runtime": 89 },
    { "tmdbId": 141, "imdbID": "tt0246578", "Title": "Donnie Darko", "year": 2001, "genre": "Sci-Fi", "runtime": 113 },
    { "tmdbId": 121357, "imdbID": "tt2316411", "Title": "Enemy", "year": 2013, "genre": "Thriller", "runtime": 91 },
    { "tmdbId": 1381, "imdbID": "tt0414993", "Title": "The Fountain", "year": 2006, "genre": "Drama", "runtime": 96 },
    { "tmdbId": 31011, "imdbID": "tt1130884", "Title": "Mr. Nobody", "year": 2009, "genre": "Sci-Fi", "runtime": 141 },
    { "tmdbId": 11324, "imdbID": "tt1130884", "Title": "Shutter Island", "year": 2010, "genre": "Thriller", "runtime": 138 }
];

// --- LUXURY RATING SYSTEM ---
const RATING_OPTIONS = [
    {
        label: "Disappointment",
        value: 1,
        icon: <XCircle size={32} />,
        color: "#dc2626",
        description: "Failed to meet expectations"
    },
    {
        label: "Flawed Gem",
        value: 2,
        icon: <AlertTriangle size={32} />,
        color: "#f59e0b",
        description: "Imperfect but intriguing"
    },
    {
        label: "Worthy Experience",
        value: 3,
        icon: <Award size={32} />,
        color: "#fbbf24",
        description: "Compelling cinematic journey"
    },
    {
        label: "Masterpiece",
        value: 4,
        icon: <Crown size={32} />,
        color: "#eab308",
        description: "Transcendent artistic achievement"
    }
];

// --- TMDB API CONFIGURATION ---
const TMDB_CONFIG = {
    API_KEY: '6054e5498fb2619274454959c38bbdfa',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: {
        small: 'w300',
        medium: 'w500', 
        large: 'w780',
        original: 'original'
    }
};

// --- LUXURY STREAMING SERVICE COLORS ---
const STREAMING_COLORS = {
    'Netflix': '#fbbf24',
    'Hulu': '#fcd34d',
    'Max': '#eab308',
    'Amazon Prime Video': '#f59e0b',
    'Disney Plus': '#facc15',
    'Apple TV Plus': '#fde047',
    'Default': '#1f2937'
};

// TMDB API Functions
const fetchMovieFromTMDB = async (tmdbId) => {
    try {
        const response = await fetch(
            `${TMDB_CONFIG.BASE_URL}/movie/${tmdbId}?api_key=${TMDB_CONFIG.API_KEY}&language=en-US&append_to_response=credits,videos,watch/providers`
        );
        if (!response.ok) throw new Error('TMDB API Error');
        return await response.json();
    } catch (error) {
        console.error('Error fetching from TMDB:', error);
        return null;
    }
};

const getTMDBPosterUrl = (posterPath, size = 'medium') => {
    if (!posterPath) return null;
    const posterSize = TMDB_CONFIG.POSTER_SIZES[size] || TMDB_CONFIG.POSTER_SIZES.medium;
    return `${TMDB_CONFIG.IMAGE_BASE_URL}/${posterSize}${posterPath}`;
};

// Fallback poster URLs
const FALLBACK_POSTERS = {
    14337: "https://m.media-amazon.com/images/M/MV5BYTIxNzU1ZmUtYzllMS00NDA4LTgyMjktZWZmNjI5YTdkZjE3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX500.jpg",
    15787: "https://m.media-amazon.com/images/M/MV5BMjIwNzA5Nzg4M15BMl5BanBnXkFtZTcwNzk1MzcxMQ@@._V1_SX500.jpg",
    1018: "https://m.media-amazon.com/images/M/MV5BNGVjYzBmOGMtNDJiMC00NDJjLTljMDgtMzE0NTc4YjVmOTE5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX500.jpg",
    206487: "https://m.media-amazon.com/images/M/MV5BMjUzNjk5NDMzNl5BMl5BanBnXkFtZTgwNzE0ODI2NjE@._V1_SX500.jpg",
    220289: "https://m.media-amazon.com/images/M/MV5BMjAwMDk5NDM5Nl5BMl5BanBnXkFtZTgwNzE2OTQ0MjE@._V1_SX500.jpg",
    141: "https://m.media-amazon.com/images/M/MV5BNzVkYzIwNDEtNTMwMi00NzU3LWI1ZjYtZTJlMTY0NDk0MzEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX500.jpg",
    121357: "https://m.media-amazon.com/images/M/MV5BMDExOTM4ODI5N15BMl5BanBnXkFtZTcwMjEzNTE3OA@@._V1_SX500.jpg",
    1381: "https://m.media-amazon.com/images/M/MV5BMjExMTI4MzU4MF5BMl5BanBnXkFtZTcwNjEzNDE1MQ@@._V1_SX500.jpg",
    31011: "https://m.media-amazon.com/images/M/MV5BMTg4ODkzMDQ3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_SX500.jpg",
    11324: "https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX500.jpg"
};

// --- LUXURY MOVIE DATA WITH GOLDEN THEME ---
const COMPLETE_MOVIE_DATA = {
    14337: { 
        mindBendingIndex: 95,
        complexityLevel: "EXTREME",
        dominantColor: "#eab308",
        rating: 6.9,
        criticsScore: 77,
        audienceScore: 73,
        director: "Shane Carruth",
        cast: ["Shane Carruth", "David Sullivan", "Casey Gooden"],
        boxOffice: "$424,760",
        budget: "$7,000",
        dna: { "Sci-Fi": 75, "Thriller": 15, "Drama": 10 },
        scenes: [
            { time: 10, intensity: 35, label: "Discovery", color: "#eab308" },
            { time: 25, intensity: 60, label: "First Loop", color: "#fbbf24" },
            { time: 40, intensity: 75, label: "Exploitation", color: "#f59e0b" },
            { time: 55, intensity: 90, label: "Paradox", color: "#d97706" },
            { time: 70, intensity: 100, label: "Chaos", color: "#b45309" }
        ],
        synopsis: "Four friends accidentally discover a way to travel back in time, leading to increasingly complex moral and temporal dilemmas in this ultra-low budget masterpiece.",
        themes: ["Time Travel", "Friendship", "Moral Ambiguity", "Scientific Ethics"],
        keyAwards: ["Sundance Grand Jury Prize", "Alfred P. Sloan Prize"],
        criticsQuote: "A masterpiece of low-budget filmmaking that redefines narrative complexity."
    },
    15787: { 
        mindBendingIndex: 92,
        complexityLevel: "EXTREME",
        dominantColor: "#f59e0b",
        rating: 7.5,
        criticsScore: 85,
        audienceScore: 69,
        director: "Charlie Kaufman",
        cast: ["Philip Seymour Hoffman", "Samantha Morton", "Michelle Williams"],
        boxOffice: "$4.4 million",
        budget: "$20 million",
        dna: { "Drama": 60, "Comedy": 25, "Fantasy": 15 },
        scenes: [
            { time: 15, intensity: 25, label: "The Grant", color: "#f59e0b" },
            { time: 40, intensity: 50, label: "Construction", color: "#eab308" },
            { time: 70, intensity: 75, label: "Reality Blurs", color: "#fbbf24" },
            { time: 100, intensity: 90, label: "Infinite Recursion", color: "#facc15" },
            { time: 120, intensity: 95, label: "Final Truth", color: "#fcd34d" }
        ],
        synopsis: "A theater director creates a life-size replica of New York inside a warehouse, blurring the lines between art and reality in Kaufman's surreal masterpiece.",
        themes: ["Art vs Reality", "Death", "Identity", "Creative Process"],
        keyAwards: ["Palme d'Or Nomination", "Best Original Screenplay Nomination"],
        criticsQuote: "An existential epic that is as brilliant as it is bewildering."
    },
    1018: { 
        mindBendingIndex: 94,
        complexityLevel: "EXTREME",
        dominantColor: "#fbbf24",
        rating: 7.9,
        criticsScore: 85,
        audienceScore: 82,
        director: "David Lynch",
        cast: ["Naomi Watts", "Laura Harring", "Justin Theroux"],
        boxOffice: "$20.1 million",
        budget: "$15 million",
        dna: { "Mystery": 50, "Drama": 30, "Thriller": 20 },
        scenes: [
            { time: 20, intensity: 40, label: "The Accident", color: "#fbbf24" },
            { time: 60, intensity: 65, label: "Hollywood Dreams", color: "#eab308" },
            { time: 90, intensity: 75, label: "Club Silencio", color: "#f59e0b" },
            { time: 120, intensity: 90, label: "Blue Box", color: "#d97706" },
            { time: 140, intensity: 95, label: "Reality Shift", color: "#b45309" }
        ],
        synopsis: "Lynch's surreal exploration of Hollywood dreams and nightmares follows two women searching for truth in a world where reality constantly shifts.",
        themes: ["Dreams vs Reality", "Hollywood", "Identity", "Lesbian Romance"],
        keyAwards: ["Palme d'Or Winner", "Best Director Cannes"],
        criticsQuote: "A haunting, hypnotic journey into the dark heart of Hollywood."
    },
    206487: { 
        mindBendingIndex: 89,
        complexityLevel: "EXTREME",
        dominantColor: "#facc15",
        rating: 7.4,
        criticsScore: 84,
        audienceScore: 85,
        director: "Michael & Peter Spierig",
        cast: ["Ethan Hawke", "Sarah Snook", "Noah Taylor"],
        boxOffice: "$5.1 million",
        budget: "$5 million",
        dna: { "Sci-Fi": 60, "Thriller": 35, "Action": 5 },
        scenes: [
            { time: 10, intensity: 65, label: "The Hunt", color: "#facc15" },
            { time: 30, intensity: 35, label: "The Story", color: "#eab308" },
            { time: 60, intensity: 80, label: "Time Jump", color: "#f59e0b" },
            { time: 75, intensity: 95, label: "The Loop", color: "#d97706" },
            { time: 90, intensity: 100, label: "Identity", color: "#b45309" }
        ],
        synopsis: "A temporal agent's final assignment becomes a mind-bending journey through identity, love, and predestination in this perfectly crafted time-travel thriller.",
        themes: ["Predestination", "Gender Identity", "Time Travel", "Self-Sacrifice"],
        keyAwards: ["AACTA Best Screenplay", "Saturn Award Nomination"],
        criticsQuote: "A clever and compelling sci-fi thriller with a truly mind-bending twist."
    },
    220289: {
        mindBendingIndex: 78,
        complexityLevel: "HIGH",
        dominantColor: "#fcd34d",
        rating: 7.2,
        criticsScore: 88,
        audienceScore: 85,
        director: "James Ward Byrkit",
        cast: ["Emily Baldoni", "Maury Sterling", "Nicholas Brendon"],
        boxOffice: "$102,617",
        budget: "$50,000",
        dna: { "Sci-Fi": 45, "Thriller": 35, "Drama": 20 },
        scenes: [
            { time: 8, intensity: 20, label: "Dinner Begins", color: "#fcd34d" },
            { time: 18, intensity: 45, label: "Comet Effect", color: "#fbbf24" },
            { time: 35, intensity: 65, label: "Other House", color: "#eab308" },
            { time: 55, intensity: 80, label: "Paranoia", color: "#f59e0b" },
            { time: 75, intensity: 95, label: "Reality Choice", color: "#d97706" }
        ],
        synopsis: "A dinner party becomes a labyrinth of parallel realities when a comet passes overhead in this ingenious low-budget sci-fi thriller.",
        themes: ["Parallel Realities", "Choice", "Relationship Dynamics", "Quantum Physics"],
        keyAwards: ["Fantastic Fest Winner", "Critics Choice Nomination"],
        criticsQuote: "A smart, scary, and surprisingly funny sci-fi thriller."
    },
    141: {
        mindBendingIndex: 85,
        complexityLevel: "HIGH",
        dominantColor: "#fde047",
        rating: 8.0,
        criticsScore: 85,
        audienceScore: 87,
        director: "Richard Kelly",
        cast: ["Jake Gyllenhaal", "Jena Malone", "Drew Barrymore"],
        boxOffice: "$7.5 million",
        budget: "$4.5 million",
        dna: { "Sci-Fi": 40, "Drama": 35, "Thriller": 25 },
        scenes: [
            { time: 8, intensity: 50, label: "The Engine", color: "#fde047" },
            { time: 25, intensity: 60, label: "Frank", color: "#fcd34d" },
            { time: 80, intensity: 70, label: "School Flood", color: "#fbbf24" },
            { time: 105, intensity: 85, label: "Death", color: "#eab308" },
            { time: 118, intensity: 90, label: "The Loop", color: "#f59e0b" }
        ],
        synopsis: "A troubled teenager is guided by a mysterious figure through a complex tale of time travel, destiny, and sacrifice in Kelly's cult classic.",
        themes: ["Time Travel", "Destiny", "Adolescence", "Mental Health"],
        keyAwards: ["Teen Choice Award", "Cult Classic Status"],
        criticsQuote: "A haunting and hypnotic film that lingers long after the credits roll."
    },
    121357: {
        mindBendingIndex: 82,
        complexityLevel: "HIGH",
        dominantColor: "#fed7aa",
        rating: 6.9,
        criticsScore: 75,
        audienceScore: 70,
        director: "Denis Villeneuve",
        cast: ["Jake Gyllenhaal", "Mélanie Laurent", "Sarah Gadon"],
        boxOffice: "$3.4 million",
        budget: "$9 million",
        dna: { "Thriller": 70, "Mystery": 20, "Drama": 10 },
        scenes: [
            { time: 18, intensity: 35, label: "Discovery", color: "#fed7aa" },
            { time: 45, intensity: 65, label: "First Contact", color: "#fde047" },
            { time: 70, intensity: 80, label: "Obsession", color: "#fcd34d" },
            { time: 88, intensity: 95, label: "Truth", color: "#fbbf24" }
        ],
        synopsis: "Villeneuve's psychological thriller explores identity and obsession as a man discovers his exact double in this Kafkaesque nightmare.",
        themes: ["Duality", "Identity Crisis", "Obsession", "Subconscious"],
        keyAwards: ["Toronto International Film Festival", "Genie Award Winner"],
        criticsQuote: "A smart and stylish thriller that will keep you guessing until the very end."
    },
    1381: {
        mindBendingIndex: 87,
        complexityLevel: "HIGH",
        dominantColor: "#f3e8ff",
        rating: 7.2,
        criticsScore: 69,
        audienceScore: 75,
        director: "Darren Aronofsky",
        cast: ["Hugh Jackman", "Rachel Weisz", "Ellen Burstyn"],
        boxOffice: "$16 million",
        budget: "$35 million",
        dna: { "Drama": 50, "Sci-Fi": 30, "Romance": 20 },
        scenes: [
            { time: 15, intensity: 45, label: "The Quest", color: "#f3e8ff" },
            { time: 35, intensity: 40, label: "Modern Love", color: "#fde047" },
            { time: 55, intensity: 65, label: "Future Journey", color: "#fcd34d" },
            { time: 75, intensity: 85, label: "Convergence", color: "#fbbf24" },
            { time: 90, intensity: 80, label: "Acceptance", color: "#eab308" }
        ],
        synopsis: "Aronofsky's ambitious meditation on love, death, and immortality spans three timelines in this visually stunning philosophical epic.",
        themes: ["Immortality", "Love", "Death", "Spiritual Journey"],
        keyAwards: ["Venice Film Festival", "Visual Effects Society Award"],
        criticsQuote: "A visually stunning and emotionally resonant film about love, loss, and the meaning of life."
    },
    31011: {
        mindBendingIndex: 93,
        complexityLevel: "EXTREME",
        dominantColor: "#fef3c7",
        rating: 7.8,
        criticsScore: 86,
        audienceScore: 81,
        director: "Jaco Van Dormael",
        cast: ["Jared Leto", "Sarah Polley", "Diane Kruger"],
        boxOffice: "$3.6 million",
        budget: "$47 million",
        dna: { "Sci-Fi": 50, "Drama": 30, "Fantasy": 20 },
        scenes: [
            { time: 15, intensity: 30, label: "The Choice", color: "#fef3c7" },
            { time: 45, intensity: 60, label: "Multiple Lives", color: "#fde047" },
            { time: 85, intensity: 70, label: "Love Stories", color: "#fcd34d" },
            { time: 115, intensity: 85, label: "Old Age", color: "#fbbf24" },
            { time: 135, intensity: 95, label: "Big Bang", color: "#eab308" }
        ],
        synopsis: "Van Dormael's ambitious exploration of choice and possibility follows the last mortal human through infinite potential lives in this visually stunning epic.",
        themes: ["Choice", "Possibility", "Love", "Mortality"],
        keyAwards: ["European Film Award", "Magritte Award Winner"],
        criticsQuote: "A visually stunning and emotionally ambitious film that is sure to leave a lasting impression."
    },
    11324: {
        mindBendingIndex: 75,
        complexityLevel: "MEDIUM",
        dominantColor: "#fffbeb",
        rating: 8.2,
        criticsScore: 68,
        audienceScore: 89,
        director: "Martin Scorsese",
        cast: ["Leonardo DiCaprio", "Mark Ruffalo", "Ben Kingsley"],
        boxOffice: "$294.8 million",
        budget: "$80 million",
        dna: { "Thriller": 60, "Mystery": 25, "Drama": 15 },
        scenes: [
            { time: 15, intensity: 35, label: "Arrival", color: "#fffbeb" },
            { time: 45, intensity: 55, label: "Investigation", color: "#fef3c7" },
            { time: 85, intensity: 70, label: "Ward C", color: "#fde047" },
            { time: 115, intensity: 85, label: "Flashbacks", color: "#fcd34d" },
            { time: 135, intensity: 100, label: "The Truth", color: "#fbbf24" }
        ],
        synopsis: "Scorsese's psychological thriller traps two marshals on a mysterious island where nothing is as it seems in this masterful mind-bender.",
        themes: ["Reality vs Delusion", "Guilt", "Mental Health", "Truth"],
        keyAwards: ["Teen Choice Award", "People's Choice Award"],
        criticsQuote: "A masterfully crafted thriller that will keep you on the edge of your seat until the very end."
    }
};

// --- LUXURY CINEMATIC COLORS ---
const CINEMATIC_COLORS = {
    "Sci-Fi": "#eab308",
    "Drama": "#f59e0b",    
    "Thriller": "#0f0f0f", 
    "Mystery": "#fbbf24",  
    "Action": "#facc15",   
    "Fantasy": "#fcd34d",  
    "Romance": "#fde047",   
    "Comedy": "#fed7aa"
};

// Strategic taglines
const STRATEGIC_TAGLINES = { 
    14337: "Time is the ultimate currency",
    15787: "Reality becomes art becomes reality", 
    1018: "Dreams within dreams within dreams", 
    206487: "Destiny writes itself in paradox", 
    220289: "Parallel worlds, infinite possibilities", 
    141: "The future is written in the past", 
    121357: "Identity is a fragile construct", 
    1381: "Death is just another beginning", 
    31011: "Every choice creates eternity", 
    11324: "Truth is the greatest illusion"
};

// Strategic quotes
const STRATEGIC_QUOTES = { 
    14337: "The complexity of time itself becomes the enemy", 
    15787: "We are all dying. All the time.", 
    1018: "Silencio. No hay banda.", 
    206487: "Now I know why you have that look.", 
    220289: "Reality is that which exists", 
    141: "Every living creature on earth dies alone", 
    121357: "Chaos is order yet undeciphered", 
    1381: "Death is the road to awe", 
    31011: "We are the music makers", 
    11324: "Which would be worse?"
};

// --- LUXURY STREAMING FLAGS ---
const FlyingStreamingFlag = React.memo(({ platform, availabilityType, index = 0, total = 1 }) => {
    const platformData = STREAMING_PLATFORMS[platform];
    if (!platformData) return null;

    const typeColors = {
        flatrate: '#eab308',
        rent: '#f59e0b',    
        buy: '#dc2626'      
    };

    const typeLabels = {
        flatrate: 'STREAM',
        rent: 'RENT',
        buy: 'BUY'
    };

    const flagColor = typeColors[availabilityType] || platformData.color;

    return (
        <motion.div
            initial={{ 
                opacity: 0, 
                scale: 0,
                y: -20
            }}
            animate={{ 
                opacity: 1, 
                scale: 1,
                y: 0,
                x: [0, Math.sin(Date.now() * 0.002 + index) * 3, 0],
                rotate: [0, Math.sin(Date.now() * 0.001 + index) * 5, 0]
            }}
            transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
                delay: index * 0.15
            }}
            className="absolute top-6 z-30 pointer-events-none"
            style={{
                right: 12 + index * 35,
                filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))'
            }}
        >
            <div className="absolute w-px h-6 bg-yellow-300/60 left-0 top-0" />
            
            <motion.div
                animate={{
                    scaleX: [1, 0.92, 1.08, 1],
                    rotateY: [0, 8, -4, 0]
                }}
                transition={{
                    duration: 1.8 + index * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="relative ml-1 -top-px"
            >
                <div
                    className="flex flex-col items-center justify-center text-black text-[6px] font-bold leading-none px-1 py-px shadow-lg"
                    style={{
                        width: '32px',
                        height: '20px',
                        backgroundColor: flagColor,
                        clipPath: 'polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)',
                        textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                    }}
                >
                    <img
                        src={platformData.logoUrl}
                        alt={platformData.name}
                        className="w-2.5 h-2.5 object-contain mb-px"
                        style={{ filter: 'brightness(0) invert(0)' }}
                    />
                    <span className="tracking-tight">{typeLabels[availabilityType]}</span>
                </div>

                <div
                    className="absolute inset-0 bg-black/20"
                    style={{
                        clipPath: 'polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)',
                        transform: 'translate(1px, 1px)'
                    }}
                />
            </motion.div>

            <motion.div
                className="absolute w-px h-px bg-yellow-300/30 rounded-full"
                style={{ left: 35, top: 8 }}
                animate={{
                    x: [0, 8, 0],
                    opacity: [0, 0.5, 0],
                    scale: [0, 1, 0]
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                }}
            />
        </motion.div>
    );
});

// --- LUXURY CONTEXT PROVIDER ---
const CinematicContext = React.createContext();

const CinematicProvider = ({ children }) => {
    const [isMuted, setIsMuted] = useState(false);
    const [watchlist, setWatchlist] = useState([]);
    const [isAutoPlay, setIsAutoPlay] = useState(false);
    const [movieDetails, setMovieDetails] = useState({});
    const [userRatings, setUserRatings] = useState({});
    const [userCountry, setUserCountry] = useState('US');

    useEffect(() => {
        fetch('http://ip-api.com/json/?fields=countryCode')
            .then(res => res.json())
            .then(data => {
                if (data.countryCode) {
                    setUserCountry(data.countryCode);
                }
            })
            .catch(() => {
                console.error("Could not fetch user country. Defaulting to US.");
            });
    }, []);

    const fetchMovieDetails = useCallback(async (tmdbId) => {
        if (movieDetails[tmdbId]) return movieDetails[tmdbId];
        
        const tmdbData = await fetchMovieFromTMDB(tmdbId);
        if (tmdbData) {
            setMovieDetails(prev => ({
                ...prev,
                [tmdbId]: tmdbData
            }));
            return tmdbData;
        }
        return null;
    }, [movieDetails]);

    const playSound = useCallback((type) => {
        if (!isMuted) {
            audioManager.playSound(type);
        }
    }, [isMuted]);

    return (
        <CinematicContext.Provider value={{
            isMuted, setIsMuted,
            watchlist, setWatchlist,
            isAutoPlay, setIsAutoPlay,
            movieDetails, fetchMovieDetails,
            userRatings, setUserRatings,
            userCountry,
            playSound
        }}>
            {children}
        </CinematicContext.Provider>
    );
};

// --- LUXURY FEEDBACK SECTION ---
const InteractiveFeedbackSection = React.memo(({ movieId, movieTitle }) => {
    const { playSound, userRatings, setUserRatings } = React.useContext(CinematicContext);
    
    const [selectedRating, setSelectedRating] = useState(null);
    const [isRatingSaved, setIsRatingSaved] = useState(false);
    const [commentText, setCommentText] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        const existingRating = userRatings[movieId];
        if (existingRating) {
            setSelectedRating(existingRating.rating);
            setIsRatingSaved(true);
            setCommentText(existingRating.comment || "");
        } else {
            setSelectedRating(null);
            setIsRatingSaved(false);
            setCommentText("");
            setShowSuccessMessage(false);
        }
    }, [movieId, userRatings]);

    const handleRatingSelect = useCallback((ratingIndex) => {
        if (isRatingSaved) return;
        setSelectedRating(ratingIndex);
        playSound('click');
    }, [isRatingSaved, playSound]);

    const handleSaveRating = useCallback(() => {
        if (selectedRating === null) return;
        
        playSound('shutter');
        setIsRatingSaved(true);
        setShowConfetti(true);
        
        setTimeout(() => setShowConfetti(false), 1000);
        
        setUserRatings(prev => ({
            ...prev,
            [movieId]: {
                rating: selectedRating,
                timestamp: new Date().toISOString(),
                comment: ""
            }
        }));
    }, [selectedRating, movieId, setUserRatings, playSound]);

    const handleCommentSubmit = useCallback(async () => {
        if (!commentText.trim()) return;
        
        setIsSubmitting(true);
        playSound('success');
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setUserRatings(prev => ({
            ...prev,
            [movieId]: {
                ...prev[movieId],
                comment: commentText.trim()
            }
        }));
        
        setIsSubmitting(false);
        setShowSuccessMessage(true);
        
        setTimeout(() => setShowSuccessMessage(false), 3000);
    }, [commentText, movieId, setUserRatings, playSound]);

    const selectedOption = selectedRating !== null ? RATING_OPTIONS[selectedRating] : null;

    return (
        <motion.section 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mt-16 pt-8 border-t border-yellow-400/20"
            role="region"
            aria-label="Movie rating and feedback section"
        >
            <AnimatePresence>
                {showConfetti && (
                    <motion.div
                        className="absolute -top-8 left-1/2 transform -translate-x-1/2 pointer-events-none z-20"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                    >
                        {[...Array(12)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-3 h-3 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"
                                initial={{ 
                                    x: 0, 
                                    y: 0,
                                    rotate: 0,
                                    scale: 1
                                }}
                                animate={{
                                    x: Math.cos(i * 30) * (50 + Math.random() * 100),
                                    y: Math.sin(i * 30) * (50 + Math.random() * 100) - 100,
                                    rotate: 360 * (Math.random() * 2 - 1),
                                    scale: [1, 0.8, 0]
                                }}
                                transition={{
                                    duration: 1,
                                    ease: "easeOut"
                                }}
                            />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <h3 className="text-3xl font-light text-yellow-100 mb-4 tracking-wide" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                    Your Cinematic Verdict
                </h3>
                <p className="text-yellow-200/80 font-light tracking-wider" style={{ fontFamily: "'General Sans', sans-serif" }}>
                    Share your thoughts on <span className="text-yellow-300">{movieTitle}</span>
                </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
                {RATING_OPTIONS.map((option, index) => (
                    <motion.button
                        key={option.label}
                        onClick={() => handleRatingSelect(index)}
                        disabled={isRatingSaved}
                        className={`relative group p-6 rounded-xl border-2 transition-all duration-300 ${
                            selectedRating === index 
                                ? `border-transparent shadow-lg`
                                : 'border-yellow-400/30 hover:border-yellow-400/50'
                        } ${isRatingSaved ? 'cursor-not-allowed opacity-60' : 'cursor-pointer hover:scale-105'}`}
                        style={{
                            background: selectedRating === index 
                                ? `linear-gradient(135deg, ${option.color}15, ${option.color}05)`
                                : 'linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6))',
                            borderColor: selectedRating === index ? option.color : undefined,
                            boxShadow: selectedRating === index ? `0 0 30px ${option.color}30` : undefined
                        }}
                        whileHover={!isRatingSaved ? { y: -5, scale: 1.02 } : {}}
                        whileTap={!isRatingSaved ? { scale: 0.98 } : {}}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        aria-label={`Rate as ${option.label}: ${option.description}`}
                    >
                        {selectedRating === index && (
                            <motion.div
                                className="absolute inset-0 rounded-xl"
                                style={{ 
                                    background: `radial-gradient(circle at center, ${option.color}20, transparent 70%)`
                                }}
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.5, 0.8, 0.5]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        )}
                        
                        <div className="relative z-10 text-center space-y-3">
                            <div className="text-4xl mb-2 flex justify-center items-center h-8">{option.icon}</div>
                            <h4 className="text-yellow-100 font-medium tracking-wide text-lg" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                                {option.label}
                            </h4>
                            <p className="text-yellow-200/70 text-sm font-light leading-relaxed" style={{ fontFamily: "'General Sans', sans-serif" }}>
                                {option.description}
                            </p>
                        </div>
                        
                        {selectedRating === index && (
                            <motion.div
                                className="absolute top-3 right-3"
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <CheckCircle size={20} style={{ color: option.color }} />
                            </motion.div>
                        )}
                    </motion.button>
                ))}
            </div>

            <div className="text-center mb-8">
                <motion.button
                    onClick={handleSaveRating}
                    disabled={selectedRating === null || isRatingSaved}
                    className={`px-10 py-4 rounded-xl font-light text-lg tracking-wide transition-all duration-300 flex items-center gap-3 mx-auto ${
                        isRatingSaved 
                            ? 'bg-green-500/20 text-green-200 border border-green-400/50 cursor-not-allowed'
                            : selectedRating !== null
                                ? 'bg-yellow-500/20 text-yellow-200 border border-yellow-400/50 hover:bg-yellow-500/30 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30'
                                : 'bg-gray-700/50 text-gray-400 border border-gray-600/30 cursor-not-allowed'
                    }`}
                    whileHover={selectedRating !== null && !isRatingSaved ? { scale: 1.02 } : {}}
                    whileTap={selectedRating !== null && !isRatingSaved ? { scale: 0.98 } : {}}
                    animate={selectedRating !== null && !isRatingSaved ? {
                        boxShadow: [
                            '0 0 0px rgba(251, 191, 36, 0)',
                            '0 0 25px rgba(251, 191, 36, 0.3)',
                            '0 0 0px rgba(251, 191, 36, 0)'
                        ]
                    } : {}}
                    transition={selectedRating !== null && !isRatingSaved ? { 
                        boxShadow: { duration: 2, repeat: Infinity } 
                    } : {}}
                    aria-label={isRatingSaved ? "Rating already saved" : "Save your rating"}
                >
                    {isRatingSaved ? (
                        <>
                            <CheckCircle size={20} />
                            Rating Saved ✓
                        </>
                    ) : (
                        <>
                            <Heart size={20} />
                            Save Rating
                        </>
                    )}
                </motion.button>
            </div>

            <AnimatePresence>
                {isRatingSaved && (
                    <motion.div
                        initial={{ opacity: 0, y: 30, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: 30, height: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="mt-12 p-8 bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-sm border border-yellow-400/20 rounded-xl"
                    >
                        <div className="text-center mb-6">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
                                className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 flex items-center justify-center border border-yellow-400/30"
                            >
                                <MessageCircle size={24} className="text-yellow-300" />
                            </motion.div>
                            <h4 className="text-xl font-light text-yellow-100 tracking-wide mb-2">
                                Share Your Experience
                            </h4>
                            <p className="text-yellow-200/70 font-light text-sm">
                                What made this film {selectedOption?.label.toLowerCase()} for you?
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <textarea
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                                placeholder="Share your thoughts on the film's complexity, themes, storytelling, or what resonated with you..."
                                maxLength={500}
                                className="w-full h-32 p-4 bg-black/50 border border-yellow-400/30 rounded-lg focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-400/50 text-yellow-100 placeholder-yellow-300/50 resize-none transition-all duration-300 font-light leading-relaxed"
                                style={{ fontFamily: "'General Sans', sans-serif" }}
                                aria-label="Write your movie review"
                            />
                            
                            <div className="flex justify-between items-center mt-4">
                                <motion.p 
                                    className={`text-xs font-light tracking-wider ${
                                        commentText.length > 450 ? 'text-red-400' : 
                                        commentText.length > 400 ? 'text-yellow-400' : 'text-yellow-300/70'
                                    }`}
                                    animate={{ scale: commentText.length > 400 ? 1.05 : 1 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    {commentText.length} / 500 characters
                                </motion.p>
                                
                                <motion.button
                                    onClick={handleCommentSubmit}
                                    disabled={commentText.trim().length === 0 || isSubmitting}
                                    className={`px-6 py-2 rounded-lg font-light text-sm tracking-wide transition-all duration-300 flex items-center gap-2 ${
                                        commentText.trim().length > 0 && !isSubmitting
                                            ? 'bg-green-500/20 text-green-200 border border-green-400/50 hover:bg-green-500/30 hover:scale-105'
                                            : 'bg-gray-700/50 text-gray-400 border border-gray-600/30 cursor-not-allowed'
                                    }`}
                                    whileHover={commentText.trim().length > 0 && !isSubmitting ? { scale: 1.02 } : {}}
                                    whileTap={commentText.trim().length > 0 && !isSubmitting ? { scale: 0.98 } : {}}
                                    animate={commentText.trim().length > 0 && !isSubmitting ? { scale: [1, 1.02, 1] } : {}}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    aria-label={isSubmitting ? "Posting comment" : "Post your comment"}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                className="w-4 h-4 border-2 border-green-300/30 border-t-green-300 rounded-full"
                                            />
                                            Posting...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={16} />
                                            Post Comment
                                        </>
                                    )}
                                </motion.button>
                            </div>
                        </motion.div>

                        <AnimatePresence>
                            {showSuccessMessage && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="mt-6 p-4 bg-green-500/20 border border-green-400/30 rounded-lg text-center"
                                >
                                    <p className="text-green-200 font-light flex items-center justify-center gap-2">
                                        <Sparkles size={18} />
                                        Thanks for sharing! Your cinematic insight has been saved.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {userRatings[movieId]?.comment && !showSuccessMessage && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="mt-6 p-4 bg-yellow-500/10 border border-yellow-400/20 rounded-lg"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-black text-sm font-medium">You</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-yellow-200 font-light text-sm">Your Review</span>
                                            <span 
                                                className="text-xs px-2 py-1 rounded-full border"
                                                style={{
                                                    color: selectedOption?.color,
                                                    borderColor: selectedOption?.color,
                                                    backgroundColor: `${selectedOption?.color}15`
                                                }}
                                            >
                                                {selectedOption?.label}
                                            </span>
                                        </div>
                                        <p className="text-yellow-100 font-light leading-relaxed">
                                            {userRatings[movieId].comment}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.section>
    );
});

// --- LUXURY BACKGROUND ---
const CinematicBackground = React.memo(() => (
    <div className="fixed inset-0 pointer-events-none z-0" role="presentation">
        <motion.div
            className="absolute inset-0"
            style={{
                background: `
                    radial-gradient(ellipse at top left, rgba(251, 191, 36, 0.04) 0%, transparent 50%),
                    radial-gradient(ellipse at top right, rgba(234, 179, 8, 0.03) 0%, transparent 50%),
                    radial-gradient(ellipse at bottom, rgba(245, 158, 11, 0.02) 0%, transparent 50%),
                    linear-gradient(180deg, #000000 0%, #1f1f1f 20%, #000000 40%, #1a1a1a 60%, #000000 100%)
                `
            }}
            animate={{
                opacity: [0.98, 1, 0.98]
            }}
            transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        />
        
        <div 
            className="absolute inset-0 opacity-[0.008]"
            style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                backgroundSize: '600px 600px'
            }}
        />
        
        <div 
            className="absolute inset-0"
            style={{
                background: 'radial-gradient(ellipse at center, transparent 0%, transparent 60%, rgba(0,0,0,0.4) 100%)'
            }}
        />
    </div>
));

// --- LUXURY LOADER ---
const CinematicLoader = React.memo(() => (
    <div className="flex flex-col items-center justify-center h-full space-y-16 px-8" role="status" aria-label="Loading cinematic collection">
        <div className="relative">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 border-4 border-black/60 rounded-full relative"
            >
                <div className="absolute inset-3 border-2 border-yellow-500/40 rounded-full">
                    <div className="absolute inset-2 border border-yellow-400/30 rounded-full">
                        <div className="absolute inset-1 bg-yellow-500/10 rounded-full" />
                    </div>
                </div>
                
                {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation, index) => (
                    <div
                        key={index}
                        className="absolute w-2 h-2 bg-yellow-400/40 rounded-full"
                        style={{
                            top: '8px',
                            left: '50%',
                            transformOrigin: '0 40px',
                            transform: `translateX(-50%) rotate(${rotation}deg)`
                        }}
                    />
                ))}
            </motion.div>
        </div>
        
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center space-y-6 max-w-md"
        >
            <h2 className="text-2xl font-light text-yellow-100 tracking-[0.2em] uppercase">
                Loading Collection
            </h2>
            <p className="text-yellow-200/70 text-sm font-light leading-relaxed tracking-wide">
                Curating the finest mind-bending cinema from around the world
            </p>
            
            <div className="w-64 h-1 bg-black/80 rounded-full overflow-hidden mx-auto">
                <motion.div
                    className="h-full bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full"
                    animate={{ 
                        x: ['-100%', '100%'] 
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>
        </motion.div>
    </div>
));

// --- LUXURY HEADER ---
const CinematicHeader = React.memo(() => {
    return (
        <header className="text-center mb-24 px-6 w-full relative" role="banner">
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="space-y-12 relative z-10"
            >
                <motion.div className="relative">
                    <motion.h1 
                        className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-300"
                        style={{
                            fontFamily: "'Satoshi', sans-serif",
                            textShadow: '0 0 60px rgba(251, 191, 36, 0.1)'
                        }}
                        whileHover={{ 
                            scale: 1.02,
                            textShadow: '0 0 80px rgba(251, 191, 36, 0.2)'
                        }}
                        transition={{ duration: 0.4 }}
                    >
                        <motion.span 
                            className="block"
                            style={{ letterSpacing: '0.25em' }}
                        >
                            MIND
                        </motion.span>
                        <motion.span 
                            className="block text-yellow-300/90 mt-3"
                            style={{ letterSpacing: '0.3em' }}
                        >
                            BENDERS
                        </motion.span>
                    </motion.h1>
                    
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ delay: 1.2, duration: 2, ease: "easeInOut" }}
                        className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"
                    />
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                    className="space-y-8"
                >
                    <p className="text-yellow-200/90 text-xl md:text-2xl font-light tracking-[0.15em] max-w-4xl mx-auto leading-relaxed" style={{ fontFamily: "'General Sans', sans-serif" }}>
                        A CURATED COLLECTION OF REALITY-DEFYING CINEMA
                    </p>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2.2 }}
                        className="flex justify-center items-center space-x-12"
                    >
                        <div className="w-16 h-px bg-gradient-to-r from-transparent to-yellow-400/30"></div>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            className="w-3 h-3 border border-yellow-400/40 rotate-45"
                        />
                        <div className="w-16 h-px bg-gradient-to-l from-transparent to-yellow-400/30"></div>
                    </motion.div>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.8, duration: 0.8 }}
                >
                    {[
                        { label: 'CRITERION LEVEL', icon: Crown, desc: 'Masterpiece Collection' },
                        { label: 'MIND-BENDING', icon: Brain, desc: 'Reality-Defying Films' },
                        { label: 'CURATED', icon: Award, desc: 'Expertly Selected' }
                    ].map((badge, i) => {
                        const Icon = badge.icon;
                        return (
                            <motion.div
                                key={badge.label}
                                className="relative group"
                                whileHover={{ y: -8, scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="p-6 bg-gradient-to-br from-black/60 to-black/40 border border-yellow-500/20 rounded-lg backdrop-blur-sm">
                                    <div className="flex flex-col items-center space-y-3">
                                        <Icon size={24} className="text-yellow-400/70" />
                                        <h3 className="text-yellow-200/90 text-sm font-light tracking-[0.2em] uppercase text-center">
                                            {badge.label}
                                        </h3>
                                        <p className="text-yellow-300/60 text-xs font-light text-center leading-relaxed">
                                            {badge.desc}
                                        </p>
                                    </div>
                                </div>
                                <motion.div
                                    className="absolute inset-0 border border-yellow-400/0 rounded-lg"
                                    whileHover={{ borderColor: 'rgba(251, 191, 36, 0.3)' }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </header>
    );
});

// --- LUXURY MOVIE POSTER ---
const TMDBMoviePoster = React.memo(({ movie, className = "", alt }) => {
    const [currentSrc, setCurrentSrc] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const { fetchMovieDetails } = React.useContext(CinematicContext);
    const [tmdbData, setTmdbData] = useState(null);

    useEffect(() => {
        const loadTMDBData = async () => {
            const data = await fetchMovieDetails(movie.tmdbId);
            if (data) {
                setTmdbData(data);
            }
        };
        loadTMDBData();
    }, [movie.tmdbId, fetchMovieDetails]);

    const posterSources = useMemo(() => {
        const sources = [];
        
        if (tmdbData?.poster_path) {
            sources.push(getTMDBPosterUrl(tmdbData.poster_path, 'large'));
            sources.push(getTMDBPosterUrl(tmdbData.poster_path, 'medium'));
        }
        
        if (FALLBACK_POSTERS[movie.tmdbId]) {
            sources.push(FALLBACK_POSTERS[movie.tmdbId]);
        }
        
        sources.push(`data:image/svg+xml,${encodeURIComponent(`
            <svg xmlns="http://www.w3.org/2000/svg" width="400" height="600" viewBox="0 0 400 600">
                <defs>
                    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#000000;stop-opacity:1" />
                        <stop offset="50%" style="stop-color:#1a1a1a;stop-opacity:1" />
                        <stop offset="100%" style="stop-color:#000000;stop-opacity:1" />
                    </linearGradient>
                </defs>
                <rect width="400" height="600" fill="url(#bg)"/>
                <rect x="30" y="30" width="340" height="540" fill="none" stroke="${COMPLETE_MOVIE_DATA[movie.tmdbId]?.dominantColor || '#fbbf24'}" stroke-width="2" opacity="0.4"/>
                <circle cx="200" cy="220" r="60" fill="none" stroke="${COMPLETE_MOVIE_DATA[movie.tmdbId]?.dominantColor || '#fbbf24'}" stroke-width="2" opacity="0.3"/>
                <rect x="120" y="350" width="160" height="3" fill="${COMPLETE_MOVIE_DATA[movie.tmdbId]?.dominantColor || '#fbbf24'}" opacity="0.4"/>
                <text x="200" y="420" text-anchor="middle" font-family="Playfair Display, serif" font-size="24" fill="${COMPLETE_MOVIE_DATA[movie.tmdbId]?.dominantColor || '#fbbf24'}" opacity="0.9">${movie.Title}</text>
                <text x="200" y="460" text-anchor="middle" font-family="Inter, sans-serif" font-size="16" fill="#fbbf24" opacity="0.7">${movie.year} • ${movie.genre}</text>
            </svg>
        `)}`);
        
        return sources.filter(Boolean);
    }, [movie, tmdbData]);

    const handleImageLoad = useCallback(() => {
        setIsLoading(false);
    }, []);

    const handleImageError = useCallback(() => {
        if (currentSrc < posterSources.length - 1) {
            setCurrentSrc(prev => prev + 1);
        } else {
            setIsLoading(false);
        }
    }, [currentSrc, posterSources.length]);

    return (
        <div className={`relative ${className}`}>
            {isLoading && (
                <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900 rounded-xl flex items-center justify-center border border-yellow-400/30">
                    <div className="text-center space-y-4">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="w-8 h-8 border-2 border-yellow-400/30 border-t-yellow-400 rounded-full mx-auto"
                        />
                        <div className="text-xs text-yellow-300/70 font-light tracking-wider">Loading poster...</div>
                    </div>
                </div>
            )}
            
            <img
                src={posterSources[currentSrc]}
                alt={alt || `Official poster for ${movie.Title}`}
                className={`w-full h-full object-cover rounded-xl transition-all duration-500 ${
                    isLoading ? 'opacity-0' : 'opacity-100'
                }`}
                onLoad={handleImageLoad}
                onError={handleImageError}
                loading="lazy"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl pointer-events-none" />
        </div>
    );
});

// --- LUXURY DNA HELIX ---
const StrategicDNAHelix = React.memo(({ dna, dominantColor, className = "" }) => {
    if (!dna) return null;
    
    const genreIcons = {
        "Sci-Fi": <Atom size={16} className="text-yellow-300" />,
        "Drama": <VenetianMask size={16} className="text-yellow-400" />,
        "Thriller": <Siren size={16} className="text-yellow-500" />,
        "Mystery": <Eye size={16} className="text-yellow-600" />,
        "Action": <Zap size={16} className="text-yellow-300" />,
        "Fantasy": <Sparkles size={16} className="text-yellow-400" />,
        "Romance": <Heart size={16} className="text-yellow-500" />,
        "Comedy": <Clapperboard size={16} className="text-yellow-300" />,
    };

    const total = Object.values(dna).reduce((sum, val) => sum + val, 0);
    const genreData = Object.entries(dna).map(([genre, percentage]) => ({
        genre,
        percentage,
        color: CINEMATIC_COLORS[genre] || dominantColor,
        icon: genreIcons[genre] || <Film size={16} className="text-yellow-300" />,
        normalizedPercentage: (percentage / total) * 100
    }));

    return (
        <div className={`flex items-center gap-12 ${className}`}>
            <div className="relative w-36 h-96 flex-shrink-0 bg-gradient-to-b from-black/60 to-black/40 rounded-xl p-6 border border-yellow-400/30 shadow-2xl backdrop-blur-sm">
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-yellow-400/30"></div>
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-yellow-400/30"></div>
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-yellow-400/30"></div>
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-yellow-400/30"></div>
                
                <svg viewBox="0 0 120 360" className="w-full h-full relative z-10">
                    <defs>
                        <linearGradient id="strategicHelix" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.9" />
                            <stop offset="25%" stopColor="#eab308" stopOpacity="0.8" />
                            <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.9" />
                            <stop offset="75%" stopColor="#d97706" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#b45309" stopOpacity="0.7" />
                        </linearGradient>
                        <filter id="strategicGlow">
                            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                            <feMerge> 
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>
                    
                    <motion.path
                        d="M 60 30 Q 30 80, 60 130 Q 90 180, 60 230 Q 30 280, 60 330"
                        stroke="url(#strategicHelix)"
                        strokeWidth="3"
                        fill="none"
                        filter="url(#strategicGlow)"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2.5, ease: "easeInOut" }}
                    />
                    <motion.path
                        d="M 60 30 Q 90 80, 60 130 Q 30 180, 60 230 Q 90 280, 60 330"
                        stroke="url(#strategicHelix)"
                        strokeWidth="3"
                        fill="none"
                        filter="url(#strategicGlow)"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2.5, delay: 0.4, ease: "easeInOut" }}
                    />
                    
                    {genreData.map((genreInfo, index) => {
                        const count = Math.round((genreInfo.percentage / total) * 18);
                        return Array(count).fill().map((_, i) => {
                            const y = 40 + (index * count + i) * 15;
                            if (y > 320) return null;
                            
                            const angle = (index * count + i) * 20;
                            const x1 = 60 + Math.cos(angle * Math.PI / 180) * 25;
                            const x2 = 60 - Math.cos(angle * Math.PI / 180) * 25;
                            
                            return (
                                <g key={`${genreInfo.genre}-${i}`}>
                                    <motion.line
                                        x1={x1}
                                        y1={y}
                                        x2={x2}
                                        y2={y}
                                        stroke={genreInfo.color}
                                        strokeWidth="3"
                                        filter="url(#strategicGlow)"
                                        initial={{ opacity: 0, scaleX: 0 }}
                                        animate={{ opacity: 0.9, scaleX: 1 }}
                                        transition={{ delay: (index * count + i) * 0.03 + 1, duration: 0.4 }}
                                    />
                                    <motion.g
                                        initial={{ scale: 0, rotate: -90 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{ 
                                            delay: (index * count + i) * 0.03 + 1.2, 
                                            duration: 0.6,
                                            type: "spring",
                                            stiffness: 300
                                        }}
                                    >
                                        <circle
                                            cx={x1}
                                            cy={y}
                                            r="3.5"
                                            fill={genreInfo.color}
                                            filter="url(#strategicGlow)"
                                            className="cursor-help"
                                            opacity="0.95"
                                        >
                                            <title>{genreInfo.genre}: {genreInfo.percentage}%</title>
                                        </circle>
                                        <circle
                                            cx={x2}
                                            cy={y}
                                            r="3.5"
                                            fill={genreInfo.color}
                                            filter="url(#strategicGlow)"
                                            className="cursor-help"
                                            opacity="0.95"
                                        >
                                            <title>{genreInfo.genre}: {genreInfo.percentage}%</title>
                                        </circle>
                                    </motion.g>
                                </g>
                            );
                        });
                    })}
                </svg>
            </div>
            
            <div className="flex-1 space-y-8">
                <motion.div 
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                >
                    <h4 className="text-2xl font-light text-yellow-100 flex items-center gap-4 tracking-wide">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            className="text-3xl"
                        >
                            🧬
                        </motion.div>
                        CINEMATIC DNA
                    </h4>
                    <div className="text-xs text-yellow-300/70 flex items-center gap-3 tracking-wider uppercase">
                        <BarChart3 size={16} />
                        Genetic Analysis
                    </div>
                </motion.div>
                
                <div className="space-y-6">
                    {genreData.map(({ genre, percentage, color, icon }, index) => (
                        <motion.div 
                            key={genre}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.4 + index * 0.15, duration: 0.6 }}
                            className="group flex items-center justify-between p-5 hover:bg-black/30 rounded-xl transition-all duration-400 border border-transparent hover:border-yellow-400/20"
                        >
                            <div className="flex items-center gap-6">
                                {icon}
                                <span className="text-yellow-100 font-light group-hover:text-yellow-50 transition-colors text-lg tracking-wide">
                                    {genre}
                                </span>
                            </div>
                            <motion.span 
                                className="text-yellow-200/90 font-light text-xl tracking-wider"
                                animate={{ 
                                    color: ['rgba(251, 191, 36, 0.9)', color, 'rgba(251, 191, 36, 0.9)'],
                                    scale: [1, 1.05, 1]
                                }}
                                transition={{ 
                                    duration: 5, 
                                    repeat: Infinity, 
                                    delay: index * 1
                                }}
                            >
                                {percentage}%
                            </motion.span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
});

// --- LUXURY MIND BENDING INDEX ---
const StrategicMindBendingIndex = React.memo(({ mindBendingIndex, complexityLevel, rating, criticsScore, audienceScore }) => {
    const getComplexityColor = (level) => {
        switch(level) {
            case "EXTREME": return "#dc2626";
            case "HIGH": return "#f59e0b";   
            case "MEDIUM": return "#eab308";   
            default: return "#6b7280";     
        }
    };

    const getComplexityIcon = (level) => {
        switch(level) {
            case "EXTREME": return <Crown className="w-8 h-8" />;
            case "HIGH": return <Award className="w-8 h-8" />;
            case "MEDIUM": return <Star className="w-8 h-8" />;
            default: return <Brain className="w-8 h-8" />;
        }
    };

    return (
        <motion.div 
            className="mb-12 bg-gradient-to-br from-black/60 to-black/40 rounded-xl border border-yellow-400/30 p-8 shadow-2xl backdrop-blur-sm relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.01 }}
        >
            <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-yellow-400/40"></div>
            <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-yellow-400/40"></div>
            <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-yellow-400/40"></div>
            <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-yellow-400/40"></div>
            
            <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-6">
                    <h4 className="text-2xl font-light text-yellow-100 flex items-center gap-4 tracking-wide">
                        <motion.div
                            style={{ color: getComplexityColor(complexityLevel) }}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        >
                            {getComplexityIcon(complexityLevel)}
                        </motion.div>
                        MIND BENDING INDEX
                    </h4>
                </div>
                
                <div className="grid grid-cols-3 gap-6 text-center">
                    <div title="Our proprietary score combining narrative complexity, thematic depth, and non-linear storytelling.">
                        <motion.div 
                            className="text-3xl font-extralight mb-1 tracking-wider text-yellow-100"
                            animate={{
                                textShadow: [
                                    `0 0 0px ${getComplexityColor(complexityLevel)}00`,
                                    `0 0 20px ${getComplexityColor(complexityLevel)}40`,
                                    `0 0 0px ${getComplexityColor(complexityLevel)}00`
                                ]
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                        >
                            {mindBendingIndex}
                        </motion.div>
                        <div className="text-xs text-yellow-300/70 font-light tracking-wide uppercase">
                            Complexity
                        </div>
                    </div>
                    
                    <div title={`Based on ${audienceScore} user ratings on IMDb.`}>
                        <div className="text-3xl font-extralight mb-1 tracking-wider text-yellow-100">
                            {rating}
                        </div>
                        <div className="text-xs text-yellow-300/70 font-light tracking-wide uppercase">
                            IMDb Rating
                        </div>
                    </div>
                    
                    <div title={`Based on ${criticsScore} critic reviews.`}>
                        <div className="text-3xl font-extralight mb-1 tracking-wider text-yellow-100">
                            {criticsScore}%
                        </div>
                        <div className="text-xs text-yellow-300/70 font-light tracking-wide uppercase">
                            Critics
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="space-y-6">
                <div>
                    <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-yellow-200 font-light tracking-wider uppercase">
                            Cognitive Distortion Level
                        </span>
                        <span 
                            className="text-sm font-light px-4 py-2 rounded-lg border backdrop-blur-sm tracking-wider uppercase"
                            style={{ 
                                color: getComplexityColor(complexityLevel),
                                borderColor: getComplexityColor(complexityLevel),
                                backgroundColor: `${getComplexityColor(complexityLevel)}15`
                            }}
                        >
                            {complexityLevel}
                        </span>
                    </div>
                    
                    <div className="relative">
                        <div className="w-full h-3 bg-black/80 rounded-full overflow-hidden border border-yellow-400/30">
                            <motion.div
                                className="h-full rounded-full relative"
                                style={{ backgroundColor: getComplexityColor(complexityLevel) }}
                                initial={{ width: 0 }}
                                animate={{ width: `${mindBendingIndex}%` }}
                                transition={{ duration: 2.5, ease: "easeOut" }}
                            >
                                <motion.div
                                    className="absolute inset-0 bg-white/20 rounded-full"
                                    animate={{
                                        x: ['-100%', '100%']
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                />
                            </motion.div>
                        </div>
                        
                        <div className="absolute -top-2 left-0 w-full flex justify-between">
                            {[25, 50, 75].map(mark => (
                                <div 
                                    key={mark}
                                    className="w-1 h-7 bg-yellow-400/30 rounded-full"
                                    style={{ left: `${mark}%` }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-yellow-200/90 text-sm font-light leading-relaxed tracking-wide">
                    {mindBendingIndex >= 90 && "A transcendent masterpiece that redefines narrative complexity, requiring multiple viewings for complete comprehension."}
                    {mindBendingIndex >= 80 && mindBendingIndex < 90 && "Sophisticated cinematic storytelling with advanced non-linear elements and reality-bending concepts."}
                    {mindBendingIndex >= 70 && mindBendingIndex < 80 && "Thoughtfully complex narrative structure with engaging mind-bending elements throughout."}
                    {mindBendingIndex < 70 && "Accessible complexity with subtle mind-bending elements that reward careful viewing."}
                </div>
            </div>
        </motion.div>
    );
});

// --- LUXURY CONTROLS ---
const StrategicControls = () => {
    const { 
        isMuted, setIsMuted, 
        isAutoPlay, setIsAutoPlay,
        playSound
    } = React.useContext(CinematicContext);
    
    return (
        <motion.div 
            className="fixed top-8 right-8 z-50 flex items-center gap-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            role="toolbar"
            aria-label="Media controls"
        >
            <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                    playSound('click');
                    setIsAutoPlay(!isAutoPlay);
                }}
                className={`w-14 h-14 rounded-xl border transition-all duration-300 flex items-center justify-center backdrop-blur-sm shadow-lg ${
                    isAutoPlay 
                        ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50 shadow-yellow-500/20' 
                        : 'bg-black/80 text-yellow-300 border-yellow-400/30 hover:bg-black/60 hover:border-yellow-400/50'
                }`}
                aria-label={isAutoPlay ? "Pause autoplay" : "Start autoplay"}
            >
                {isAutoPlay ? <Pause size={18} /> : <Play size={18} />}
            </motion.button>

            <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                    setIsMuted(!isMuted);
                    if (isMuted) playSound('success');
                }}
                className="w-14 h-14 bg-black/80 backdrop-blur-sm rounded-xl border border-yellow-400/30 hover:bg-black/60 hover:border-yellow-400/50 transition-all duration-300 flex items-center justify-center shadow-lg"
                aria-label={isMuted ? "Unmute sound effects" : "Mute sound effects"}
            >
                {isMuted ? <VolumeX size={18} className="text-yellow-300/70" /> : <Volume2 size={18} className="text-yellow-300" />}
            </motion.button>
        </motion.div>
    );
};

// --- LUXURY MOVIE CARD ---
const CinematicMovieCard = React.memo(({ movie, rank, isActive }) => {
    const { playSound, watchlist, setWatchlist, movieDetails, userCountry } = React.useContext(CinematicContext);
    const [isHovered, setIsHovered] = useState(false);
    const [streamingData, setStreamingData] = useState(null);
    
    const isInWatchlist = watchlist.includes(movie.tmdbId);
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId] || {};

    useEffect(() => {
        const fetchStreaming = async () => {
            try {
                const tmdbData = movieDetails[movie.tmdbId];
                if (!tmdbData?.['watch/providers']) return;

                const countryData = tmdbData['watch/providers'].results?.[userCountry];
                if (countryData) {
                    const availableOn = [];
                    
                    ['flatrate', 'rent', 'buy'].forEach(type => {
                        if (countryData[type]) {
                            countryData[type].forEach(provider => {
                                const platformKey = getPlatformKey(provider.provider_id);
                                if (platformKey) {
                                    availableOn.push({
                                        platform: platformKey,
                                        type: type,
                                        provider: provider
                                    });
                                }
                            });
                        }
                    });
                    
                    setStreamingData(availableOn.slice(0, 4));
                }
            } catch (error) {
                console.error('Error processing streaming data:', error);
            }
        };

        fetchStreaming();
    }, [movie.tmdbId, movieDetails, userCountry]);

    const getPlatformKey = (providerId) => {
        const map = {
            8: 'netflix',
            119: 'amazon_prime',
            337: 'disney_plus',
            15: 'hulu',
            384: 'hbo_max',
            350: 'apple_tv'
        };
        return map[providerId];
    };

    const toggleWatchlist = useCallback(() => {
        if (isInWatchlist) {
            setWatchlist(prev => prev.filter(id => id !== movie.tmdbId));
        } else {
            setWatchlist(prev => [...prev, movie.tmdbId]);
        }
        playSound('success');
    }, [isInWatchlist, movie.tmdbId, setWatchlist, playSound]);

    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full h-full group flex flex-col items-center"
            onMouseEnter={() => {
                setIsHovered(true);
                playSound('hover');
            }}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                className="relative w-80 h-[480px] md:w-96 md:h-[576px] overflow-hidden rounded-xl shadow-2xl transition-all duration-500 bg-gradient-to-br from-black to-gray-900 border border-yellow-400/30 mb-8"
                whileHover={{ 
                    scale: 1.03, 
                    boxShadow: `0 40px 80px rgba(0,0,0,0.8), 0 0 50px ${movieInfo.dominantColor || '#fbbf24'}20`
                }}
            >
                <TMDBMoviePoster movie={movie} className="w-full h-full" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-transparent rounded-xl" />

                <AnimatePresence>
                    {streamingData && streamingData.map((item, index) => (
                        <FlyingStreamingFlag
                            key={`${item.platform}-${item.type}`}
                            platform={item.platform}
                            availabilityType={item.type}
                            index={index}
                            total={streamingData.length}
                        />
                    ))}
                </AnimatePresence>
                
                <div className="absolute top-4 left-4">
                    <motion.div 
                        className={`w-14 h-14 rounded-xl backdrop-blur-xl border flex items-center justify-center text-sm font-light z-20 ${
                            rank === 1 
                                ? 'bg-gradient-to-br from-yellow-500/30 to-yellow-600/20 text-yellow-200 border-yellow-400/50 shadow-lg shadow-yellow-500/30' 
                                : 'bg-black/90 text-yellow-200 border-yellow-400/30'
                        }`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        animate={rank === 1 ? {
                            boxShadow: [
                                '0 0 0px rgba(251, 191, 36, 0)',
                                '0 0 25px rgba(251, 191, 36, 0.4)',
                                '0 0 0px rgba(251, 191, 36, 0)'
                            ]
                        } : {}}
                        transition={rank === 1 ? { duration: 2.5, repeat: Infinity } : {}}
                    >
                        {rank === 1 ? <Crown size={20} /> : rank}
                    </motion.div>
                </div>

                <motion.button
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 30 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleWatchlist}
                    className={`absolute bottom-4 right-4 w-14 h-14 rounded-xl backdrop-blur-xl border flex items-center justify-center transition-all duration-300 z-20 ${
                        isInWatchlist 
                            ? 'bg-yellow-500/30 text-yellow-200 border-yellow-400/50 shadow-lg shadow-yellow-500/30' 
                            : 'bg-black/90 text-yellow-200 border-yellow-400/30 hover:bg-black/70 hover:border-yellow-400/50'
                    }`}
                    aria-label={isInWatchlist ? "Remove from watchlist" : "Add to watchlist"}
                >
                    <Bookmark size={18} className={isInWatchlist ? 'fill-current' : ''} />
                </motion.button>

                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -30 }}
                    className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-2 bg-black/90 backdrop-blur-xl border border-yellow-400/30 rounded-lg z-20"
                >
                    <Star size={14} className="text-yellow-400 fill-current" />
                    <span className="text-yellow-200 text-sm font-light">
                        {movieInfo.rating}
                    </span>
                </motion.div>
            </motion.div>

            <motion.div 
                className="absolute inset-0 rounded-xl pointer-events-none z-0"
                animate={isActive ? {
                    boxShadow: [
                        `0 0 60px ${movieInfo.dominantColor || '#fbbf24'}15`,
                        `0 0 120px ${movieInfo.dominantColor || '#fbbf24'}25`,
                        `0 0 60px ${movieInfo.dominantColor || '#fbbf24'}15`
                    ]
                } : {}}
                transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="text-center space-y-4 z-10 max-w-md">
                <motion.h2 
                    className="text-2xl md:text-3xl font-light tracking-wide text-yellow-100"
                    style={{ fontFamily: "'Satoshi', sans-serif" }}
                    whileHover={{ scale: 1.02 }}
                >
                    {movie.Title}
                </motion.h2>
                <motion.p 
                    className="text-sm text-yellow-200/70 font-light leading-relaxed tracking-wide"
                    style={{ fontFamily: "'General Sans', sans-serif" }}
                >
                    {STRATEGIC_TAGLINES[movie.tmdbId]}
                </motion.p>
                
                <div className="flex justify-center gap-4 mt-6">
                    <span className="px-3 py-1 bg-black/60 border border-yellow-400/30 rounded-lg text-xs text-yellow-200 font-light tracking-wider">
                        {movie.year}
                    </span>
                    <span className="px-3 py-1 bg-black/60 border border-yellow-400/30 rounded-lg text-xs text-yellow-200 font-light tracking-wider">
                        {movie.genre}
                    </span>
                    <span className="px-3 py-1 bg-black/60 border border-yellow-400/30 rounded-lg text-xs text-yellow-200 font-light tracking-wider">
                        {movie.runtime}m
                    </span>
                </div>

                {streamingData && streamingData.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs text-yellow-300/70 font-light tracking-wider"
                        style={{ fontFamily: "'Supreme', sans-serif" }}
                    >
                        Available on {streamingData.length} platform{streamingData.length > 1 ? 's' : ''}
                    </motion.div>
                )}
            </div>
        </motion.article>
    );
});

// Rest of the components continue with the same pattern...
// [Additional components would follow the same yellow/black theme conversion]
// --- CONTINUATION OF LUXURY COMPONENTS ---

// --- LUXURY INTERACTIVE GRAPH ---
const StrategicInteractiveGraph = React.memo(({ graphData, movieKey }) => {
    const { playSound } = React.useContext(CinematicContext);
    
    const StrategicDot = React.memo((props) => {
        const { cx, cy, payload } = props;
        return (
            <motion.g 
                whileHover={{ scale: 1.5 }} 
                onMouseEnter={() => playSound('hover')}
                className="cursor-pointer"
            >
                <Dot {...props} r={5} fill={payload.color} stroke="rgba(251, 191, 36, 0.6)" strokeWidth={2} />
                <circle cx={cx} cy={cy} r="12" fill={payload.color} opacity="0.1" />
            </motion.g>
        );
    });
    
    const StrategicTooltip = React.memo(({ active, payload }) => {
        if (active && payload && payload.length) {
            const point = payload[0].payload;
            return (
                <div className="bg-gradient-to-br from-black/95 to-gray-900/95 backdrop-blur-xl text-yellow-100 p-4 rounded-xl shadow-2xl border border-yellow-400/30">
                    <p className="font-light text-base mb-2 tracking-wide">{point.label}</p>
                    <p className="text-xs text-yellow-300/70 tracking-wider">Narrative Impact: {point.intensity}</p>
                </div>
            );
        }
        return null;
    });

    if (!graphData || !graphData.scenes || graphData.scenes.length === 0) {
        return (
            <div className="w-full h-64 flex items-center justify-center bg-gradient-to-br from-black/60 to-black/40 rounded-xl p-8 mt-8 border border-yellow-400/30">
                <p className="text-yellow-300/70 text-sm font-light tracking-wide">Narrative intensity data unavailable</p>
            </div>
        );
    }
    
    const maxTime = Math.max(...graphData.scenes.map(p => p.time));
    const normalizedData = graphData.scenes.map(p => ({ ...p, timePercent: Math.round((p.time / maxTime) * 100) }));

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full h-72 bg-gradient-to-br from-black/60 to-black/40 rounded-xl p-8 mt-8 border border-yellow-400/30 backdrop-blur-sm relative overflow-hidden"
        >
            <div className="flex items-center justify-between mb-6">
                <h5 className="text-lg font-light text-yellow-100 tracking-wide">Narrative Intensity Curve</h5>
                <TrendingUp size={18} className="text-yellow-300/70" />
            </div>
            
            <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-yellow-400/30"></div>
            <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-yellow-400/30"></div>
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-yellow-400/30"></div>
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-yellow-400/30"></div>
            
            <ResponsiveContainer width="100%" height="85%">
                <AreaChart data={normalizedData} margin={{ top: 10, right: 15, left: 0, bottom: 10 }}>
                    <defs>
                        <linearGradient id={`strategic-gradient-${movieKey}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={graphData.dominantColor} stopOpacity={0.6}/>
                            <stop offset="95%" stopColor={graphData.dominantColor} stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(251, 191, 36, 0.1)" />
                    <XAxis 
                        dataKey="timePercent" 
                        stroke="rgba(251, 191, 36, 0.6)" 
                        tick={{ fontSize: 12, fill: 'rgba(251, 191, 36, 0.9)' }} 
                        axisLine={false}
                        tickLine={false}
                    />
                    <YAxis 
                        stroke="rgba(251, 191, 36, 0.6)" 
                        domain={[0, 110]} 
                        tick={{ fontSize: 12, fill: 'rgba(251, 191, 36, 0.9)' }} 
                        axisLine={false}
                        tickLine={false}
                    />
                    <Tooltip content={<StrategicTooltip />} />
                    <Area 
                        type="monotone" 
                        dataKey="intensity" 
                        stroke={graphData.dominantColor} 
                        strokeWidth={3} 
                        fillOpacity={1} 
                        fill={`url(#strategic-gradient-${movieKey})`}
                        dot={<StrategicDot />}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </motion.div>
    );
});

// --- LUXURY STREAMING ICON COMPONENT ---
const StreamingIcon = ({ service, className = "w-5 h-5" }) => {
    const icons = {
        'Netflix': <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.032 6.4L7.415 17.6H4.832V6.4h2.583v10.512L12.032 6.4h2.536l4.617 11.2V6.4h2.583v11.2h-2.583L14.568 6.4h-2.536z" fill="currentColor"/></svg>,
        'Hulu': <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.143 6.4H17.89V2.41H15.1v3.99H8.9V2.41H6.11v3.99H1.857v3.018h2.786v8.144h-2.786V20.59h4.253v-2.982h2.786V20.59h2.785v-2.982h2.786V20.59h4.253v-2.982h-4.253V9.418h4.253V6.4zM8.9 14.562H6.11V9.418H8.9v5.144zm9-5.144h-2.786v5.144h2.786V9.418z" fill="currentColor"/></svg>,
        'Max': <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm-3.3-9.9c.7 0 1.3-.6 1.3-1.3s-.6-1.3-1.3-1.3-1.3.6-1.3 1.3.6 1.3 1.3 1.3zm6.6 0c.7 0 1.3-.6 1.3-1.3s-.6-1.3-1.3-1.3-1.3.6-1.3 1.3.6 1.3 1.3 1.3zM12 9.5c-3.6 0-6.5 2.9-6.5 6.5h13c0-3.6-2.9-6.5-6.5-6.5z" fill="currentColor"/></svg>,
        'Amazon Prime Video': <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.95 16.89a1.13 1.13 0 0 0-1.07-.73h-1.58c-.5 0-.92.37-.92.83 0 .41.27.83.8.83h.58c.05 0 .08.03.08.08 0 .06-.03.08-.08.08H19.2c-.5 0-.92.37-.92.83 0 .41.27.83.8.83h.58c.05 0 .08.03.08.08 0 .06-.03.08-.08.08h-2.34c-1.46 0-2.65-1.2-2.65-2.65V12.8c0-1.46 1.2-2.65 2.65-2.65h3.75c1.46 0 2.65 1.2 2.65 2.65v4.09zm-8.27-7.72c.22-.32.16-.76-.15-1.01l-6.1-4.75a.9.9 0 0 0-1.08.1L1.05 9.8a.9.9 0 0 0 .1 1.08l6.1 4.75c.31.25.75.19 1.01-.15l6.32-8.12z" fill="currentColor"/></svg>,
        'Disney Plus': <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.743 9.408c-1.33-2.934-4.1-5.46-7.313-6.845-3.21-1.385-6.81-.93-9.845 1.33C3.55 6.12.98 9.25.26 12.875c-.72 3.623.35 7.37 2.87 9.845 2.52 2.477 6.02 3.55 9.49 2.87 3.47-.68 6.24-3.21 7.52-6.53.29-.75.3-1.59.03-2.37-.27-.78-.78-1.45-1.45-1.92-1.38-.96-3.1-1.02-4.59-.15-1.49.87-2.31 2.5-2.22 4.15.09 1.65 1.14 3.1 2.67 3.66 1.53.56 3.21.18 4.41-1.02.2-.2.38-.42.53-.66l.18-.3c.3-.5.54-1.03.72-1.59.18-.56.27-1.14.27-1.72 0-.64-.12-1.28-.35-1.89z" fill="currentColor"/></svg>,
        'Apple TV Plus': <svg className={className} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.22 6.4c-.9 0-1.7.4-2.4.9-.7-.5-1.5-.9-2.4-.9-1.4 0-2.7.9-3.4 2.2-.7 1.3-.6 2.9.2 4.2.5.9 1.2 1.6 2 2.1.8.5 1.7.7 2.6.7.3 0 .6 0 .9-.1.9-.1 1.8-.5 2.6-1.1.8-.6 1.5-1.4 2-2.3.8-1.3.9-2.9.2-4.2-.7-1.3-2-2.2-3.4-2.2zM12 2.2c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1c.6 0 1.1-.5 1.1-1.1s-.5-1.1-1.1-1.1z" fill="currentColor"/></svg>,
    };
    return icons[service] || <Play size={16} />;
};

// --- COMPREHENSIVE FILM DETAILS COMPONENT ---
const ComprehensiveFilmDetails = React.memo(({ movie, currentMovieId }) => {
    const { watchlist, setWatchlist, playSound, movieDetails, userCountry } = React.useContext(CinematicContext);
    
    const isInWatchlist = watchlist.includes(currentMovieId);
    const movieGraph = COMPLETE_MOVIE_DATA[currentMovieId] || {};
    const details = movieDetails[currentMovieId];
    
    const providers = useMemo(() => {
        const countryProviders = details?.['watch/providers']?.results?.[userCountry];
        if (!countryProviders) return null;
        return {
            stream: countryProviders.flatrate || [],
            rent: countryProviders.rent || [],
            buy: countryProviders.buy || []
        };
    }, [details, userCountry]);

    const toggleWatchlist = useCallback(() => {
        if (isInWatchlist) {
            setWatchlist(prev => prev.filter(id => id !== currentMovieId));
        } else {
            setWatchlist(prev => [...prev, currentMovieId]);
        }
        playSound('success');
    }, [isInWatchlist, currentMovieId, setWatchlist, playSound]);

    const hasProviders = providers && (providers.stream.length > 0 || providers.rent.length > 0 || providers.buy.length > 0);

    return (
        <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-16 bg-gradient-to-br from-black/60 to-black/40 border border-yellow-400/30 rounded-xl p-10 shadow-2xl backdrop-blur-sm relative overflow-hidden"
            role="region"
            aria-label="Movie details and streaming information"
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent"></div>
            
            <div className="mb-12 p-8 bg-black/30 rounded-lg border border-yellow-400/30">
                <h3 className="text-xl font-light text-yellow-100 mb-6 tracking-wide flex items-center justify-between" style={{ fontFamily: "'Satoshi', sans-serif" }}>
                    <span>Where to Watch</span>
                    <span className="text-sm font-light text-yellow-300/70 px-3 py-1 rounded-md bg-black/50 border border-yellow-400/20">{userCountry}</span>
                </h3>
                {hasProviders ? (
                    <div className="space-y-6">
                        {providers.stream.length > 0 && (
                            <div>
                                <p className="text-yellow-300/70 mb-3 font-light tracking-wider uppercase text-xs flex items-center gap-2"><Tv size={14} /> Stream</p>
                                <div className="flex flex-wrap gap-4">
                                    {providers.stream.map(p => (
                                        <motion.a href="#" key={p.provider_id} className="group" whileHover={{ y: -3, scale: 1.05 }}>
                                            <div className="flex items-center gap-3 p-2 pr-4 bg-black/50 border border-yellow-400/30 rounded-lg transition-all duration-300 group-hover:bg-black/80 group-hover:shadow-lg group-hover:border-yellow-400/50">
                                                <img src={`${TMDB_CONFIG.IMAGE_BASE_URL}/w200${p.logo_path}`} alt={p.provider_name} className="w-10 h-10 rounded-md" />
                                                <span className="text-sm font-light text-yellow-200 group-hover:text-yellow-100 transition-colors">{p.provider_name}</span>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        )}
                        {providers.rent.length > 0 && (
                             <div>
                                <p className="text-yellow-300/70 mb-3 font-light tracking-wider uppercase text-xs flex items-center gap-2"><Ticket size={14} /> Rent</p>
                                <div className="flex flex-wrap gap-4">
                                    {providers.rent.map(p => (
                                        <motion.a href="#" key={p.provider_id} className="group" whileHover={{ y: -3, scale: 1.05 }}>
                                            <div className="flex items-center gap-3 p-2 pr-4 bg-black/50 border border-yellow-400/30 rounded-lg transition-all duration-300 group-hover:bg-black/80 group-hover:shadow-lg group-hover:border-yellow-400/50">
                                                <img src={`${TMDB_CONFIG.IMAGE_BASE_URL}/w200${p.logo_path}`} alt={p.provider_name} className="w-10 h-10 rounded-md" />
                                                <span className="text-sm font-light text-yellow-200 group-hover:text-yellow-100 transition-colors">{p.provider_name}</span>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        )}
                        {providers.buy.length > 0 && (
                             <div>
                                <p className="text-yellow-300/70 mb-3 font-light tracking-wider uppercase text-xs flex items-center gap-2"><ShoppingCart size={14} /> Buy</p>
                                <div className="flex flex-wrap gap-4">
                                    {providers.buy.map(p => (
                                        <motion.a href="#" key={p.provider_id} className="group" whileHover={{ y: -3, scale: 1.05 }}>
                                            <div className="flex items-center gap-3 p-2 pr-4 bg-black/50 border border-yellow-400/30 rounded-lg transition-all duration-300 group-hover:bg-black/80 group-hover:shadow-lg group-hover:border-yellow-400/50">
                                                <img src={`${TMDB_CONFIG.IMAGE_BASE_URL}/w200${p.logo_path}`} alt={p.provider_name} className="w-10 h-10 rounded-md" />
                                                <span className="text-sm font-light text-yellow-200 group-hover:text-yellow-100 transition-colors">{p.provider_name}</span>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="text-center py-8 bg-black/20 rounded-lg">
                        <motion.div initial={{scale:0, opacity:0}} animate={{scale:1, opacity:1}} transition={{delay:0.2, type:'spring'}}>
                             <Film size={32} className="text-yellow-400/50 mx-auto mb-4" />
                        </motion.div>
                        <p className="text-yellow-200 font-light text-lg" style={{ fontFamily: "'General Sans', sans-serif" }}>
                            Awaiting Distribution
                        </p>
                        <p className="text-yellow-300/70 text-sm mt-2 max-w-md mx-auto" style={{ fontFamily: "'General Sans', sans-serif" }}>
                            This film is not currently available on major platforms in your region. Availability for such unique cinematic pieces can be transient.
                        </p>
                    </div>
                )}
            </div>

            {movieGraph.mindBendingIndex && (
                <StrategicMindBendingIndex 
                    mindBendingIndex={movieGraph.mindBendingIndex} 
                    complexityLevel={movieGraph.complexityLevel}
                    rating={movieGraph.rating}
                    criticsScore={movieGraph.criticsScore}
                    audienceScore={movieGraph.audienceScore}
                />
            )}

            <StrategicDNAHelix dna={movieGraph.dna} dominantColor={movieGraph.dominantColor} className="mb-16" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-yellow-100 text-sm mb-12">
                <div className="space-y-6">
                    <div>
                        <p className="text-yellow-300/70 mb-2 font-light tracking-wider uppercase text-xs flex items-center gap-2" style={{ fontFamily: "'Supreme', sans-serif" }}>
                            <Users size={14} />
                            Director
                        </p>
                        <p className="font-light text-base" style={{ fontFamily: "'General Sans', sans-serif" }}>{movieGraph.director}</p>
                    </div>
                    <div>
                        <p className="text-yellow-300/70 mb-2 font-light tracking-wider uppercase text-xs flex items-center gap-2" style={{ fontFamily: "'Supreme', sans-serif" }}>
                            <Film size={14} />
                            Genre
                        </p>
                        <p className="font-light text-base" style={{ fontFamily: "'General Sans', sans-serif" }}>{movie.genre}</p>
                    </div>
                </div>
                <div className="space-y-6">
                    <div>
                        <p className="text-yellow-300/70 mb-2 font-light tracking-wider uppercase text-xs flex items-center gap-2" style={{ fontFamily: "'Supreme', sans-serif" }}>
                            <Calendar size={14} />
                            Release Year
                        </p>
                        <p className="font-light text-base" style={{ fontFamily: "'General Sans', sans-serif" }}>{movie.year}</p>
                    </div>
                    <div>
                        <p className="text-yellow-300/70 mb-2 font-light tracking-wider uppercase text-xs flex items-center gap-2" style={{ fontFamily: "'Supreme', sans-serif" }}>
                            <Clock size={14} />
                            Runtime
                        </p>
                        <p className="font-light text-base" style={{ fontFamily: "'General Sans', sans-serif" }}>{movie.runtime} minutes</p>
                    </div>
                </div>
                <div className="space-y-6">
                    <div>
                        <p className="text-yellow-300/70 mb-2 font-light tracking-wider uppercase text-xs flex items-center gap-2" style={{ fontFamily: "'Supreme', sans-serif" }}>
                            <Star size={14} />
                            IMDb Rating
                        </p>
                        <p className="font-light text-base" style={{ fontFamily: "'General Sans', sans-serif" }}>{movieGraph.rating} / 10</p>
                    </div>
                    <div>
                        <p className="text-yellow-300/70 mb-2 font-light tracking-wider uppercase text-xs" style={{ fontFamily: "'Supreme', sans-serif" }}>
                            Box Office
                        </p>
                        <p className="font-light text-base" style={{ fontFamily: "'General Sans', sans-serif" }}>{movieGraph.boxOffice}</p>
                    </div>
                </div>
            </div>

            {movieGraph.cast && (
                <div className="mb-12">
                    <p className="text-yellow-300/70 text-xs mb-4 font-light tracking-[0.2em] uppercase" style={{ fontFamily: "'Supreme', sans-serif" }}>Starring</p>
                    <div className="flex flex-wrap gap-3">
                        {movieGraph.cast.map((actor, index) => (
                            <span 
                                key={index}
                                className="px-4 py-2 bg-black/50 border border-yellow-400/30 rounded-lg text-yellow-200 text-sm font-light"
                                style={{ fontFamily: "'General Sans', sans-serif" }}
                            >
                                {actor}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            <div className="mb-12 pt-8 border-t border-yellow-400/30">
                <p className="text-yellow-300/70 text-xs mb-6 font-light tracking-[0.2em] uppercase" style={{ fontFamily: "'Supreme', sans-serif" }}>Synopsis</p>
                <p className="text-yellow-100/90 text-base leading-relaxed font-light tracking-wide" style={{ fontFamily: "'General Sans', sans-serif" }}>
                    {movieGraph.synopsis}
                </p>
            </div>

            {movieGraph.themes && (
                <div className="mb-12">
                    <p className="text-yellow-300/70 text-xs mb-4 font-light tracking-[0.2em] uppercase" style={{ fontFamily: "'Supreme', sans-serif" }}>Central Themes</p>
                    <div className="flex flex-wrap gap-3">
                        {movieGraph.themes.map((theme, index) => (
                            <span 
                                key={index}
                                className="px-3 py-1 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-400/30 rounded-lg text-yellow-200 text-sm font-light"
                                style={{ fontFamily: "'General Sans', sans-serif" }}
                            >
                                {theme}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            <InteractiveFeedbackSection 
                movieId={currentMovieId} 
                movieTitle={movie.Title}
            />

            <StrategicInteractiveGraph 
                movieKey={movie.imdbID} 
                graphData={movieGraph} 
            />

            <div className="flex gap-4 mt-12">
                <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={toggleWatchlist}
                    className={`flex items-center gap-3 px-8 py-4 rounded-xl text-sm font-light tracking-wide transition-all duration-300 ${
                        isInWatchlist 
                            ? 'bg-yellow-500/20 text-yellow-200 border border-yellow-400/50 shadow-lg shadow-yellow-500/20' 
                            : 'bg-black/60 hover:bg-black/40 text-yellow-200 border border-yellow-400/30 hover:border-yellow-400/50'
                    }`}
                    aria-label={isInWatchlist ? "Remove from collection" : "Add to collection"}
                >
                    {isInWatchlist ? <CheckCircle size={16} /> : <PlusCircle size={16} />}
                    {isInWatchlist ? 'In Your Collection' : 'Add to Collection'}
                </motion.button>
                
                <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 px-8 py-4 rounded-xl bg-black/60 hover:bg-black/40 text-yellow-200 border border-yellow-400/30 hover:border-yellow-400/50 text-sm font-light tracking-wide transition-all duration-300"
                    aria-label="Share this film"
                >
                    <Share2 size={16} />
                    Share This Film
                </motion.button>
            </div>
        </motion.div>
    );
});

// --- AUTOPLAY HOOK ---
const useStrategicAutoPlay = (movies, currentIndex, onNavigate, interval = 12000) => {
    const { isAutoPlay } = React.useContext(CinematicContext);

    useEffect(() => {
        if (!isAutoPlay || movies.length === 0) return;

        const timer = setInterval(() => {
            onNavigate(1);
        }, interval);

        return () => clearInterval(timer);
    }, [isAutoPlay, movies.length, interval, onNavigate]);
};

// --- COMPLETE DATA HOOK ---
const useComprehensiveMovieData = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const { fetchMovieDetails, userCountry } = React.useContext(CinematicContext);

    const getBestWatchOption = (providers, country) => {
        const countryProviders = providers?.[country];
        if (!countryProviders) return null;

        if (countryProviders.flatrate && countryProviders.flatrate.length > 0) {
            return { provider: countryProviders.flatrate[0], type: 'Stream' };
        }
        if (countryProviders.rent && countryProviders.rent.length > 0) {
            return { provider: countryProviders.rent[0], type: 'Rent' };
        }
        if (countryProviders.buy && countryProviders.buy.length > 0) {
            return { provider: countryProviders.buy[0], type: 'Buy' };
        }
        return null;
    };

    useEffect(() => {
        if (!userCountry) return;

        const loadComprehensiveMovies = async () => {
            setLoading(true);
            
            setTimeout(async () => {
                const results = await Promise.all(
                    COMPLETE_MOVIE_DATABASE.map(async (localMovie) => {
                        const movieGraphData = COMPLETE_MOVIE_DATA[localMovie.tmdbId];
                        const tmdbData = await fetchMovieDetails(localMovie.tmdbId);
                        
                        const watchInfo = getBestWatchOption(tmdbData?.['watch/providers']?.results, userCountry);

                        return {
                            ...localMovie,
                            watchInfo,
                            Plot: movieGraphData?.synopsis || 'A compelling cinematic experience awaits discovery.',
                            Director: movieGraphData?.director || 'Visionary Filmmaker',
                            Cast: movieGraphData?.cast || ['Exceptional Cast'],
                            Rating: movieGraphData?.rating || 7.5,
                            BoxOffice: movieGraphData?.boxOffice || 'Limited Release',
                            Budget: movieGraphData?.budget || 'Independent Production',
                            Awards: movieGraphData?.awards || ['Critical Acclaim'],
                            graph: movieGraphData || { 
                                mindBendingIndex: 75, 
                                complexityLevel: 'HIGH', 
                                dominantColor: '#fbbf24', 
                                scenes: [], 
                                dna: {} 
                            },
                            tagline: STRATEGIC_TAGLINES[localMovie.tmdbId] || 'An extraordinary cinematic journey',
                            quote: STRATEGIC_QUOTES[localMovie.tmdbId] || 'Experience transcendent storytelling.',
                            tmdbData: tmdbData
                        };
                    })
                );

                setMovies(results);
                setLoading(false);
            }, 1500);
        };

        loadComprehensiveMovies();
    }, [fetchMovieDetails, userCountry]);

    return { movies, loading };
};

export { 
    StrategicInteractiveGraph, 
    ComprehensiveFilmDetails, 
    useStrategicAutoPlay, 
    useComprehensiveMovieData,
    StreamingIcon
};
// --- MAIN APP ---
const UltraCinematicCollectionPage = () => {
    const { movies, loading } = useComprehensiveMovieData();
    const { playSound } = React.useContext(CinematicContext);
    
    const [page, setPage] = useState(0);
    const [direction, setDirection] = useState(0);

    const touchStart = useRef(null);
    const touchEnd = useRef(null);
    const minSwipeDistance = 50; 

    const paginate = useCallback((newDirection) => {
        const newPage = page + newDirection;
        setPage(newPage);
        setDirection(newDirection);
        playSound('whoosh');
    }, [page, playSound]);

    const movieIndex = useMemo(() => {
        if (!movies.length) return 0;
        return (page % movies.length + movies.length) % movies.length;
    }, [page, movies.length]);

    const useStrategicKeyPress = (targetKey, callback) => {
        const handleKeyPress = useCallback(({ key }) => {
            if (key === targetKey) {
                callback();
            }
        }, [targetKey, callback]);

        useEffect(() => {
            window.addEventListener('keydown', handleKeyPress);
            return () => {
                window.removeEventListener('keydown', handleKeyPress);
            };
        }, [handleKeyPress]);
    };

    const useComprehensiveMovieData = () => {
        const [movies, setMovies] = useState([]);
        const [loading, setLoading] = useState(true);
        const { fetchMovieDetails, userCountry } = React.useContext(CinematicContext);

        const getBestWatchOption = (providers, country) => {
            const countryProviders = providers?.[country];
            if (!countryProviders) return null;

            if (countryProviders.flatrate && countryProviders.flatrate.length > 0) {
                return { provider: countryProviders.flatrate[0], type: 'Stream' };
            }
            if (countryProviders.rent && countryProviders.rent.length > 0) {
                return { provider: countryProviders.rent[0], type: 'Rent' };
            }
            if (countryProviders.buy && countryProviders.buy.length > 0) {
                return { provider: countryProviders.buy[0], type: 'Buy' };
            }
            return null;
        };

        useEffect(() => {
            if (!userCountry) return;

            const loadComprehensiveMovies = async () => {
                setLoading(true);
                
                setTimeout(async () => {
                    const results = await Promise.all(
                        COMPLETE_MOVIE_DATABASE.map(async (localMovie) => {
                            const movieGraphData = COMPLETE_MOVIE_DATA[localMovie.tmdbId];
                            const tmdbData = await fetchMovieDetails(localMovie.tmdbId);
                            
                            const watchInfo = getBestWatchOption(tmdbData?.['watch/providers']?.results, userCountry);

                            return {
                                ...localMovie,
                                watchInfo,
                                Plot: movieGraphData?.synopsis || 'A compelling cinematic experience awaits discovery.',
                                Director: movieGraphData?.director || 'Visionary Filmmaker',
                                Cast: movieGraphData?.cast || ['Exceptional Cast'],
                                Rating: movieGraphData?.rating || 7.5,
                                BoxOffice: movieGraphData?.boxOffice || 'Limited Release',
                                Budget: movieGraphData?.budget || 'Independent Production',
                                Awards: movieGraphData?.awards || ['Critical Acclaim'],
                                graph: movieGraphData || { 
                                    mindBendingIndex: 75, 
                                    complexityLevel: 'HIGH', 
                                    dominantColor: '#fbbf24', 
                                    scenes: [], 
                                    dna: {} 
                                },
                                tagline: STRATEGIC_TAGLINES[localMovie.tmdbId] || 'An extraordinary cinematic journey',
                                quote: STRATEGIC_QUOTES[localMovie.tmdbId] || 'Experience transcendent storytelling.',
                                tmdbData: tmdbData
                            };
                        })
                    );

                    setMovies(results);
                    setLoading(false);
                }, 1500);
            };

            loadComprehensiveMovies();
        }, [fetchMovieDetails, userCountry]);

        return { movies, loading };
    };

    useStrategicKeyPress('ArrowRight', () => paginate(1));
    useStrategicKeyPress('ArrowLeft', () => paginate(-1));
    
    const onTouchStart = (e) => {
        touchEnd.current = null;
        touchStart.current = e.targetTouches[0].clientX;
    };

    const onTouchMove = (e) => {
        touchEnd.current = e.targetTouches[0].clientX;
    };

    const onTouchEnd = () => {
        if (!touchStart.current || !touchEnd.current) return;
        const distance = touchStart.current - touchEnd.current;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe) {
            paginate(1);
        }
        if (isRightSwipe) {
            paginate(-1);
        }
        touchStart.current = null;
        touchEnd.current = null;
    };

    const currentMovie = movies[movieIndex];
    
    const carouselVariants = {
      enter: (direction) => ({ 
        x: direction > 0 ? '50%' : '-50%', 
        opacity: 0, 
        scale: 0.95,
        rotateY: direction > 0 ? 20 : -20
      }),
      center: { 
        x: 0, 
        opacity: 1, 
        scale: 1,
        rotateY: 0
      },
      exit: (direction) => ({ 
        x: direction < 0 ? '50%' : '-50%', 
        opacity: 0, 
        scale: 0.95,
        rotateY: direction < 0 ? 20 : -20
      })
    };

    if (loading) {
        return (
            <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex justify-center items-center">
                <CinematicBackground />
                <CinematicLoader />
            </section>
        );
    }

    return (
        <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black text-yellow-100">
            <SEOHead />
            <CinematicBackground />
            <StrategicControls />

            <main className="px-8 py-20 flex flex-col justify-center items-center min-h-screen max-w-8xl mx-auto relative z-10" role="main">
                <CinematicHeader />

                <div 
                    className="w-full h-[75vh] relative flex items-center justify-center my-20 max-w-4xl"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            key={page}
                            className="absolute w-full h-full flex justify-center"
                            custom={direction}
                            variants={carouselVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ 
                                type: "spring", 
                                stiffness: 280, 
                                damping: 30,
                                opacity: { duration: 0.5 },
                                scale: { duration: 0.5 }
                            }}
                            style={{
                                transformStyle: 'preserve-3d'
                            }}
                        >
                            <CinematicMovieCard 
                                movie={currentMovie} 
                                rank={movieIndex + 1} 
                                isActive={true}
                            />
                        </motion.div>
                    </AnimatePresence>
                    
                    <motion.button 
                        whileHover={{ scale: 1.05, x: -6 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => paginate(-1)} 
                        className="absolute left-0 -translate-x-24 w-16 h-16 bg-black/80 border border-yellow-400/30 rounded-xl hover:bg-black/60 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 flex items-center justify-center backdrop-blur-sm group"
                        aria-label="Previous movie"
                    >
                        <ChevronLeft size={24} className="text-yellow-300 group-hover:text-yellow-100 transition-colors" />
                    </motion.button>
                    <motion.button 
                        whileHover={{ scale: 1.05, x: 6 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => paginate(1)} 
                        className="absolute right-0 translate-x-24 w-16 h-16 bg-black/80 border border-yellow-400/30 rounded-xl hover:bg-black/60 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 flex items-center justify-center backdrop-blur-sm group"
                        aria-label="Next movie"
                    >
                        <ChevronRight size={24} className="text-yellow-300 group-hover:text-yellow-100 transition-colors" />
                    </motion.button>
                </div>
                
                <nav className="flex justify-center gap-6 mb-20" aria-label="Movie pagination">
                    {movies && Array.isArray(movies) && movies.map((_, index) => (
                        <motion.button
                            key={index}
                            whileHover={{ scale: 1.4 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => {
                                setPage(index);
                                setDirection(index > movieIndex ? 1 : -1);
                                playSound('whoosh');
                            }}
                            className="relative group"
                            aria-label={`Go to movie ${index + 1}`}
                        >
                            <motion.div
                                animate={{
                                    scale: movieIndex === index ? 1.8 : 1,
                                    backgroundColor: movieIndex === index ? '#fbbf24' : 'rgba(251, 191, 36, 0.4)',
                                    boxShadow: movieIndex === index ? '0 0 8px #fbbf24' : 'none'
                                }}
                                transition={{ duration: 0.3 }}
                                className="w-3 h-3 rounded-full shadow-lg"
                            />
                            {movieIndex === index && (
                                <motion.div
                                    animate={{ scale: [0, 3, 0], opacity: [0, 0.5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute inset-0 w-3 h-3 rounded-full bg-yellow-400"
                                />
                            )}
                        </motion.button>
                    ))}
                </nav>

                <div className="w-full max-w-6xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={movieIndex + '-details'}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -50, opacity: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="flex flex-col w-full"
                        >
                            {currentMovie && (
                                <>
                                    <motion.blockquote 
                                        className="text-center italic text-yellow-200/90 text-xl md:text-2xl mb-16 leading-relaxed font-light tracking-wide max-w-4xl mx-auto"
                                        style={{ fontFamily: "'Satoshi', sans-serif" }}
                                    >
                                        <span className="text-yellow-400/60 text-4xl">"</span>
                                        {STRATEGIC_QUOTES[currentMovie.tmdbId]}
                                        <span className="text-yellow-400/60 text-4xl">"</span>
                                    </motion.blockquote>
                                    
                                    {/* Additional components would be integrated here */}
                                </>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>
        </section>
    );
};

const App = () => {
    return (
        <CinematicProvider>
            <FontLoader />
            <UltraCinematicCollectionPage />
        </CinematicProvider>
    );
};

export default App;
