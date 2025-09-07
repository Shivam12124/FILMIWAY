"use client";
import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, Dot, Scatter, ScatterChart } from 'recharts';
import { Star, ChevronLeft, ChevronRight, Crown, Award, Volume2, VolumeX, Play, Pause, Share2, Sparkles, Brain, Calendar, Clock, Users, X, Film, Eye, TrendingUp, BarChart3, MessageSquare, Send, Home, ChevronRight as BreadcrumbArrow, ExternalLink, CheckCircle, ThumbsUp, ThumbsDown, LogIn, UserCheck, Shield, AlertTriangle, Info } from 'lucide-react';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, doc, setDoc, onSnapshot, serverTimestamp, addDoc, query, orderBy, getDocs } from 'firebase/firestore';
import { useRouter } from 'next/navigation';

// --- YOUR FIREBASE CONFIG ---
const firebaseConfig = {
  apiKey: "AIzaSyB7MIH4jPi6uFaN4mG4oAq2HTKpIOVxTF8",
  authDomain: "filmiway-d5a2b.firebaseapp.com",
  projectId: "filmiway-d5a2b",
  storageBucket: "filmiway-d5a2b.firebasestorage.app",
  messagingSenderId: "1042070525553",
  appId: "1:1042070525553:web:3abb4a321e038e19362dd0",
  measurementId: "G-EDS2VZ5HP1"
};

// Initialize Firebase
let app, db, auth;
try {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
    auth = getAuth(app);
} catch (error) {
    console.warn('Firebase initialization failed:', error);
}

export default function UltraCinematicMovieCollection() {
    return (
        <CinematicProvider>
            <UltraCinematicCollectionPage />
        </CinematicProvider>
    );
}

// Utility hook for client-side detection
const useIsClient = () => {
    const [isClient, setIsClient] = useState(false);
    
    useEffect(() => {
        setIsClient(true);
    }, []);
    
    return isClient;
};

// ✅ MOBILE-OPTIMIZED BACK TO HOMEPAGE BUTTON
const BackToHomepageButton = React.memo(() => {
    const router = useRouter();
    const isClient = useIsClient();

    if (!isClient) return null;

    const handleGoHome = () => {
        router.push('/');
    };

    return (
        <motion.button
            onClick={handleGoHome}
            className="fixed top-3 left-3 sm:top-4 sm:left-4 z-[60] bg-gradient-to-r from-yellow-500 to-amber-500 text-black px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-semibold shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 flex items-center gap-1 sm:gap-2 text-sm sm:text-base"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
        >
            <Home size={14} className="sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Homepage</span>
            <span className="sm:hidden">Home</span>
        </motion.button>
    );
});

// --- COMPLETE 10 MOVIES DATABASE ---
const COMPLETE_MOVIE_DATABASE = [
    { "tmdbId": 14337, "imdbID": "tt0390384", "Title": "Primer", "year": 2004, "genre": "Sci-Fi", "runtime": 77 },
    { "tmdbId": 4960, "imdbID": "tt0383028", "Title": "Synecdoche, New York", "year": 2008, "genre": "Drama", "runtime": 124 },
    { "tmdbId": 1018, "imdbID": "tt0166924", "Title": "Mulholland Drive", "year": 2001, "genre": "Mystery", "runtime": 147 },
    { "tmdbId": 206487, "imdbID": "tt2397535", "Title": "Predestination", "year": 2014, "genre": "Sci-Fi", "runtime": 97 },
    { "tmdbId": 220289, "imdbID": "tt2866360", "Title": "Coherence", "year": 2013, "genre": "Sci-Fi", "runtime": 89 },
    { "tmdbId": 141, "imdbID": "tt0246578", "Title": "Donnie Darko", "year": 2001, "genre": "Sci-Fi", "runtime": 113 },
    { "tmdbId": 121357, "imdbID": "tt2316411", "Title": "Enemy", "year": 2013, "genre": "Thriller", "runtime": 91 },
    { "tmdbId": 1381, "imdbID": "tt0414993", "Title": "The Fountain", "year": 2006, "genre": "Drama", "runtime": 96 },
    { "tmdbId": 31011, "imdbID": "tt1130884", "Title": "Mr. Nobody", "year": 2009, "genre": "Sci-Fi", "runtime": 141 },
    { "tmdbId": 11324, "imdbID": "tt0825232", "Title": "Shutter Island", "year": 2010, "genre": "Thriller", "runtime": 138 }
];

// --- COMPLETE SENSITIVE SCENE TIMELINES ---
const timeToSeconds = (timeStr) => {
    const parts = timeStr.split(':').map(Number);
    if (parts.length === 3) {
        return parts[0] * 3600 + parts[1] * 60 + parts[2];
    }
    if (parts.length === 2) {
        return parts[0] * 60 + parts[1];
    }
    return 0;
};

const SENSITIVE_TIMELINES = {
    14337: { scenes: [] }, // Primer - Clean film
    4960: { // Synecdoche, New York - 6 scenes
        scenes: [
            { start: timeToSeconds("34:24"), end: timeToSeconds("35:05"), type: "Sex" },
            { start: timeToSeconds("46:40"), end: timeToSeconds("46:47"), type: "Kissing" },
            { start: timeToSeconds("56:35"), end: timeToSeconds("57:04"), type: "Sex (not graphic)" },
            { start: timeToSeconds("1:01:35"), end: timeToSeconds("1:02:12"), type: "Nudity" },
            { start: timeToSeconds("1:33:04"), end: timeToSeconds("1:35:15"), type: "Nudity" },
            { start: timeToSeconds("1:38:35"), end: timeToSeconds("1:38:40"), type: "Kissing (casual)" }
        ]
    },
    1018: { // Mulholland Drive - 5 scenes
        scenes: [
            { start: timeToSeconds("1:19:38"), end: timeToSeconds("1:20:02"), type: "Kissing" },
            { start: timeToSeconds("1:38:45"), end: timeToSeconds("1:42:18"), type: "Nudity + Intimate Kissing" },
            { start: timeToSeconds("2:01:27"), end: timeToSeconds("2:02:59"), type: "Partial Nudity + Intimate Situation" },
            { start: timeToSeconds("2:04:36"), end: timeToSeconds("2:05:03"), type: "Kissing" },
            { start: timeToSeconds("2:15:50"), end: timeToSeconds("2:15:58"), type: "Kissing" }
        ]
    },
    206487: { // Predestination - 3 scenes
        scenes: [
            { start: timeToSeconds("19:07"), end: timeToSeconds("19:20"), type: "Sex + Partial Nudity" },
            { start: timeToSeconds("42:20"), end: timeToSeconds("42:50"), type: "Nudity" },
            { start: timeToSeconds("1:12:50"), end: timeToSeconds("1:12:58"), type: "Kissing (casual)" }
        ]
    },
    220289: { // Coherence - 1 scene
        scenes: [
            { start: timeToSeconds("45:00"), end: timeToSeconds("45:05"), type: "Casual Kissing" }
        ]
    },
    141: { // Donnie Darko - 3 scenes
        scenes: [
            { start: timeToSeconds("1:08:02"), end: timeToSeconds("1:08:16"), type: "Kissing" },
            { start: timeToSeconds("1:17:00"), end: timeToSeconds("1:17:08"), type: "Kissing" },
            { start: timeToSeconds("1:31:10"), end: timeToSeconds("1:31:30"), type: "Intimate Kissing" }
        ]
    },
    121357: { // Enemy - 12 scenes (MOST SENSITIVE)
        scenes: [
            { start: timeToSeconds("1:46"), end: timeToSeconds("1:50"), type: "Partial Nudity (glimpse)" },
            { start: timeToSeconds("2:50"), end: timeToSeconds("4:58"), type: "Nudity" },
            { start: timeToSeconds("7:23"), end: timeToSeconds("7:29"), type: "Kissing" },
            { start: timeToSeconds("7:50"), end: timeToSeconds("8:05"), type: "Sex" },
            { start: timeToSeconds("8:37"), end: timeToSeconds("8:42"), type: "Sex" },
            { start: timeToSeconds("9:10"), end: timeToSeconds("9:15"), type: "Sex" },
            { start: timeToSeconds("14:38"), end: timeToSeconds("15:10"), type: "Sex" },
            { start: timeToSeconds("45:20"), end: timeToSeconds("45:52"), type: "Nudity" },
            { start: timeToSeconds("1:14:25"), end: timeToSeconds("1:14:41"), type: "Partial Nudity" },
            { start: timeToSeconds("1:19:30"), end: timeToSeconds("1:20:35"), type: "Sex" },
            { start: timeToSeconds("1:22:20"), end: timeToSeconds("1:22:42"), type: "Intimate Kissing + Partial Nudity" },
            { start: timeToSeconds("1:23:55"), end: timeToSeconds("1:24:08"), type: "Nudity" }
        ]
    },
    1381: { // The Fountain - 2 scenes
        scenes: [
            { start: timeToSeconds("26:34"), end: timeToSeconds("27:46"), type: "Intimate Kissing + Partial Nudity" },
            { start: timeToSeconds("36:57"), end: timeToSeconds("37:01"), type: "Partial Nudity (glimpse)" }
        ]
    },
    31011: { // Mr. Nobody - 6 scenes
        scenes: [
            { start: timeToSeconds("31:48"), end: timeToSeconds("32:00"), type: "Kissing" },
            { start: timeToSeconds("48:56"), end: timeToSeconds("49:10"), type: "Intimate Kissing" },
            { start: timeToSeconds("1:03:58"), end: timeToSeconds("1:05:08"), type: "Intimate Kissing + Partial Nudity" },
            { start: timeToSeconds("1:08:27"), end: timeToSeconds("1:08:31"), type: "Kissing" },
            { start: timeToSeconds("1:17:08"), end: timeToSeconds("1:17:42"), type: "Sex" },
            { start: timeToSeconds("1:35:10"), end: timeToSeconds("1:36:58"), type: "Intimate Kissing + Partial Nudity" }
        ]
    },
    11324: { // Shutter Island - 2 scenes
        scenes: [
            { start: timeToSeconds("1:10:43"), end: timeToSeconds("1:10:47"), type: "Nudity" },
            { start: timeToSeconds("1:59:03"), end: timeToSeconds("1:59:06"), type: "Casual Kissing" }
        ]
    }
};

// ✅ FUNCTION to get sensitive content types for SEO descriptions
const getSensitiveContentTypes = (tmdbId) => {
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

// --- TMDB API CONFIGURATION ---
const TMDB_CONFIG = {
    API_KEY: 'a07e22bc18f5cb106bfe4cc1f83ad8ed',
    BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: {
        small: 'w300',
        medium: 'w500',
        large: 'w780',
        original: 'original'
    }
};

// Streaming Platform Links
const STREAMING_PLATFORM_URLS = {
    'Netflix': 'https://www.netflix.com/search?q=',
    'Amazon Prime Video': 'https://www.amazon.com/s?k=',
    'Disney Plus': 'https://www.disneyplus.com/search?q=',
    'Hulu': 'https://www.hulu.com/search?q=',
    'HBO Max': 'https://www.hbomax.com/search?q=',
    'Apple TV Plus': 'https://tv.apple.com/search?term=',
    'Paramount Plus': 'https://www.paramountplus.com/search/',
    'Peacock': 'https://www.peacocktv.com/search/',
    'Starz': 'https://www.starz.com/search?q=',
    'Showtime': 'https://www.showtime.com/search?q='
};

const PLATFORM_LOGOS = {
    'Netflix': '🎬',
    'Amazon Prime Video': '📺',
    'Disney Plus': '🏰',
    'Hulu': '🔥',
    'HBO Max': '👑',
    'Apple TV Plus': '🍎',
    'Paramount Plus': '⭐',
    'Peacock': '🦚',
    'Starz': '⭐',
    'Showtime': '🎭'
};

// TMDB API Functions
const fetchMovieFromTMDB = async (tmdbId) => {
    try {
        const response = await fetch(
            `${TMDB_CONFIG.BASE_URL}/movie/${tmdbId}?api_key=${TMDB_CONFIG.API_KEY}&language=en-US&append_to_response=credits,videos`
        );
        if (!response.ok) {
            console.warn(`TMDB API Error for movie ${tmdbId}: ${response.status}`);
            return null;
        }
        return await response.json();
    } catch (error) {
        console.warn(`Error fetching TMDB data for movie ${tmdbId}:`, error);
        return null;
    }
};

const fetchWatchProviders = async (tmdbId, region = 'US') => {
    try {
        const response = await fetch(
            `${TMDB_CONFIG.BASE_URL}/movie/${tmdbId}/watch/providers?api_key=${TMDB_CONFIG.API_KEY}`
        );
        if (!response.ok) return null;
        const data = await response.json();
        return data.results[region] || null;
    } catch (error) {
        console.warn(`Error fetching watch providers for movie ${tmdbId}:`, error);
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
    4960: "https://m.media-amazon.com/images/M/MV5BMjIwNzA5Nzg4M15BMl5BanBnXkFtZTcwNzk1MzcxMQ@@._V1_SX500.jpg",
    1018: "https://m.media-amazon.com/images/M/MV5BNGVjYzBmOGMtNDJiMC00NDJjLTljMDgtMzE0NTc4YjVmOTE5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX500.jpg",
    206487: "https://m.media-amazon.com/images/M/MV5BMjUzNjk5NDMzNl5BMl5BanBnXkFtZTgwNzE0ODI2NjE@._V1_SX500.jpg",
    220289: "https://m.media-amazon.com/images/M/MV5BMjAwMDk5NDM5Nl5BMl5BanBnXkFtZTgwNzE2OTQ0MjE@._V1_SX500.jpg",
    141: "https://m.media-amazon.com/images/M/MV5BNzVkYzIwNDEtNTMwMi00NzU3LWI1ZjYtZTJlMTY0NDk0MzEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX500.jpg",
    121357: "https://m.media-amazon.com/images/M/MV5BMDExOTM4ODI5N15BMl5BanBnXkFtZTcwMjEzNTE3OA@@._V1_SX500.jpg",
    1381: "https://m.media-amazon.com/images/M/MV5BMjExMTI4MzU4MF5BMl5BanBnXkFtZTcwNjEzNDE1MQ@@._V1_SX500.jpg",
    31011: "https://m.media-amazon.com/images/M/MV5BMTg4ODkzMDQ3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_SX500.jpg",
    11324: "https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX500.jpg"
};

// COMPLETE MOVIE DATA WITH SEO DESCRIPTIONS
const COMPLETE_MOVIE_DATA = {
    14337: {
        mindBendingIndex: 95, complexityLevel: "EXTREME", dominantColor: "#1e3a8a", rating: 6.9, criticsScore: 77, audienceScore: 73, director: "Shane Carruth", cast: ["Shane Carruth", "David Sullivan", "Casey Gooden"], boxOffice: "$424,760", budget: "$7,000", 
        dna: { "Sci-Fi": 75, "Thriller": 15, "Drama": 10 }, 
        scenes: [{ time: 10, intensity: 35, label: "Discovery", color: "#1e3a8a" }, { time: 25, intensity: 60, label: "First Loop", color: "#1d4ed8" }, { time: 40, intensity: 75, label: "Exploitation", color: "#2563eb" }, { time: 55, intensity: 90, label: "Paradox", color: "#3b82f6" }, { time: 70, intensity: 100, label: "Chaos", color: "#60a5fa" }], 
        synopsis: "Four friends accidentally discover a way to travel back in time, leading to increasingly complex moral and temporal dilemmas in this ultra-low budget masterpiece.", 
        themes: ["Time Travel", "Friendship", "Moral Ambiguity", "Scientific Ethics"], 
        awards: ["Sundance Film Festival Winner", "Alfred P. Sloan Prize"],
        seoDescription: "Like Inception, Primer plays with time and reality in complex layers that require multiple viewings to fully understand.",
        intensityPeak: "The narrative intensity peaks at 70 minutes when temporal chaos erupts and multiple timelines collide.",
        genreComposition: "This film is predominantly Sci-Fi at 75%, with thriller elements at 15% and drama at 10%, creating a unique blend of scientific complexity and emotional tension."
    },
    4960: {
        mindBendingIndex: 92, complexityLevel: "EXTREME", dominantColor: "#7c2d12", rating: 7.5, criticsScore: 85, audienceScore: 69, director: "Charlie Kaufman", cast: ["Philip Seymour Hoffman", "Samantha Morton", "Michelle Williams"], boxOffice: "$4.4 million", budget: "$20 million", 
        dna: { "Drama": 60, "Comedy": 25, "Fantasy": 15 }, 
        scenes: [{ time: 15, intensity: 25, label: "The Grant", color: "#7c2d12" }, { time: 40, intensity: 50, label: "Construction", color: "#a16207" }, { time: 70, intensity: 75, label: "Reality Blurs", color: "#ca8a04" }, { time: 100, intensity: 90, label: "Infinite Recursion", color: "#eab308" }, { time: 120, intensity: 95, label: "Final Truth", color: "#facc15" }], 
        synopsis: "A theater director creates a life-size replica of New York inside a warehouse, blurring the lines between art and reality in Kaufman's surreal masterpiece.", 
        themes: ["Art vs Reality", "Death", "Identity", "Creative Process"], 
        awards: ["Palme d'Or Nomination", "Best Original Screenplay Nomination"],
        seoDescription: "Like Inception's layered dreams, Synecdoche New York creates nested realities within theatrical productions.",
        intensityPeak: "The film reaches maximum intensity at 120 minutes when the final truth about reality and identity is revealed.",
        genreComposition: "Primarily a drama at 60%, enhanced by dark comedy at 25% and fantasy elements at 15% that blur the boundaries between performance and life."
    },
    1018: {
        mindBendingIndex: 94, complexityLevel: "EXTREME", dominantColor: "#701a75", rating: 7.9, criticsScore: 85, audienceScore: 82, director: "David Lynch", cast: ["Naomi Watts", "Laura Harring", "Justin Theroux"], boxOffice: "$20.1 million", budget: "$15 million", 
        dna: { "Mystery": 50, "Drama": 30, "Thriller": 20 }, 
        scenes: [{ time: 20, intensity: 40, label: "The Accident", color: "#701a75" }, { time: 60, intensity: 65, label: "Hollywood Dreams", color: "#86198f" }, { time: 90, intensity: 75, label: "Club Silencio", color: "#a21caf" }, { time: 120, intensity: 90, label: "Blue Box", color: "#c026d3" }, { time: 140, intensity: 95, label: "Reality Shift", color: "#d946ef" }], 
        synopsis: "Lynch's surreal exploration of Hollywood dreams and nightmares follows two women searching for truth in a world where reality constantly shifts.", 
        themes: ["Dreams vs Reality", "Hollywood", "Identity", "Lesbian Romance"], 
        awards: ["Palme d'Or Winner", "Best Director Cannes"],
        seoDescription: "Like Inception's dream layers, Mulholland Drive weaves between dreams and reality in Lynch's signature surreal style.",
        intensityPeak: "The narrative reaches its climax at 140 minutes when reality dramatically shifts and the true story is revealed.",
        genreComposition: "A mystery at its core with 50%, enriched by dramatic elements at 30% and thriller tension at 20%, creating Lynch's trademark atmospheric confusion."
    },
    206487: {
        mindBendingIndex: 89, complexityLevel: "EXTREME", dominantColor: "#0f172a", rating: 7.4, criticsScore: 84, audienceScore: 85, director: "Michael & Peter Spierig", cast: ["Ethan Hawke", "Sarah Snook", "Noah Taylor"], boxOffice: "$5.1 million", budget: "$5 million", 
        dna: { "Sci-Fi": 60, "Thriller": 35, "Action": 5 }, 
        scenes: [{ time: 10, intensity: 65, label: "The Hunt", color: "#0f172a" }, { time: 30, intensity: 35, label: "The Story", color: "#1e293b" }, { time: 60, intensity: 80, label: "Time Jump", color: "#334155" }, { time: 75, intensity: 95, label: "The Loop", color: "#475569" }, { time: 90, intensity: 100, label: "Identity", color: "#64748b" }], 
        synopsis: "A temporal agent's final assignment becomes a mind-bending journey through identity, love, and predestination in this perfectly crafted time-travel thriller.", 
        themes: ["Predestination", "Gender Identity", "Time Travel", "Self-Sacrifice"], 
        awards: ["AACTA Best Screenplay", "Saturn Award Nomination"],
        seoDescription: "Like Inception's complex plot structure, Predestination creates an intricate temporal puzzle with shocking revelations.",
        intensityPeak: "The film peaks at 90 minutes when the protagonist's true identity is revealed in a mind-bending twist.",
        genreComposition: "Primarily Sci-Fi at 60% with strong thriller elements at 35% and minimal action at 5%, focusing on intellectual complexity over spectacle."
    },
    220289: {
        mindBendingIndex: 78, complexityLevel: "HIGH", dominantColor: "#166534", rating: 7.2, criticsScore: 88, audienceScore: 85, director: "James Ward Byrkit", cast: ["Emily Baldoni", "Maury Sterling", "Nicholas Brendon"], boxOffice: "$102,617", budget: "$50,000", 
        dna: { "Sci-Fi": 45, "Thriller": 35, "Drama": 20 }, 
        scenes: [{ time: 8, intensity: 20, label: "Dinner Begins", color: "#166534" }, { time: 18, intensity: 45, label: "Comet Effect", color: "#16a34a" }, { time: 35, intensity: 65, label: "Other House", color: "#22c55e" }, { time: 55, intensity: 80, label: "Paranoia", color: "#4ade80" }, { time: 75, intensity: 95, label: "Reality Choice", color: "#86efac" }], 
        synopsis: "A dinner party becomes a labyrinth of parallel realities when a comet passes overhead in this ingenious low-budget sci-fi thriller.", 
        themes: ["Parallel Realities", "Choice", "Relationship Dynamics", "Quantum Physics"], 
        awards: ["Fantastic Fest Winner", "Critics Choice Nomination"],
        seoDescription: "Like Inception's multiple reality layers, Coherence explores parallel dimensions during a single dinner party.",
        intensityPeak: "Maximum tension occurs at 75 minutes when characters must choose between different versions of reality.",
        genreComposition: "Balanced between Sci-Fi at 45%, thriller tension at 35%, and interpersonal drama at 20%, creating intimate yet cosmic storytelling."
    },
    141: {
        mindBendingIndex: 85, complexityLevel: "HIGH", dominantColor: "#9a3412", rating: 8.0, criticsScore: 85, audienceScore: 87, director: "Richard Kelly", cast: ["Jake Gyllenhaal", "Jena Malone", "Drew Barrymore"], boxOffice: "$7.5 million", budget: "$4.5 million", 
        dna: { "Sci-Fi": 40, "Drama": 35, "Thriller": 25 }, 
        scenes: [{ time: 8, intensity: 50, label: "The Engine", color: "#9a3412" }, { time: 25, intensity: 60, label: "Frank", color: "#c2410c" }, { time: 80, intensity: 70, label: "School Flood", color: "#ea580c" }, { time: 105, intensity: 85, label: "Death", color: "#f97316" }, { time: 118, intensity: 90, label: "The Loop", color: "#fb923c" }], 
        synopsis: "A troubled teenager is guided by a mysterious figure through a complex tale of time travel, destiny, and sacrifice in Kelly's cult classic.", 
        themes: ["Time Travel", "Destiny", "Adolescence", "Mental Health"], 
        awards: ["Teen Choice Award", "Cult Classic Status"],
        seoDescription: "Like Inception's reality manipulation, Donnie Darko blends time travel with psychological complexity in a cult masterpiece.",
        intensityPeak: "The story culminates at 118 minutes when the time loop closes and Donnie makes his ultimate sacrifice.",
        genreComposition: "Evenly balanced with Sci-Fi elements at 40%, emotional drama at 35%, and psychological thriller aspects at 25%."
    },
    121357: {
        mindBendingIndex: 82, complexityLevel: "HIGH", dominantColor: "#7c2d12", rating: 6.9, criticsScore: 75, audienceScore: 70, director: "Denis Villeneuve", cast: ["Jake Gyllenhaal", "Mélanie Laurent", "Sarah Gadon"], boxOffice: "$3.4 million", budget: "$9 million", 
        dna: { "Thriller": 70, "Mystery": 20, "Drama": 10 }, 
        scenes: [{ time: 18, intensity: 35, label: "Discovery", color: "#7c2d12" }, { time: 45, intensity: 65, label: "First Contact", color: "#a16207" }, { time: 70, intensity: 80, label: "Obsession", color: "#ca8a04" }, { time: 88, intensity: 95, label: "Truth", color: "#eab308" }], 
        synopsis: "Villeneuve's psychological thriller explores identity and obsession as a man discovers his exact double in this Kafkaesque nightmare.", 
        themes: ["Duality", "Identity Crisis", "Obsession", "Subconscious"], 
        awards: ["Toronto International Film Festival", "Genie Award Winner"],
        seoDescription: "Like Inception's exploration of the subconscious, Enemy delves into psychological duality and identity confusion.",
        intensityPeak: "The film reaches its disturbing climax at 88 minutes when the horrifying truth about identity is unveiled.",
        genreComposition: "Dominated by psychological thriller elements at 70%, with mystery components at 20% and dramatic undertones at 10%."
    },
    1381: {
        mindBendingIndex: 87, complexityLevel: "HIGH", dominantColor: "#581c87", rating: 7.2, criticsScore: 69, audienceScore: 75, director: "Darren Aronofsky", cast: ["Hugh Jackman", "Rachel Weisz", "Ellen Burstyn"], boxOffice: "$16 million", budget: "$35 million", 
        dna: { "Drama": 50, "Sci-Fi": 30, "Romance": 20 }, 
        scenes: [{ time: 15, intensity: 45, label: "The Quest", color: "#581c87" }, { time: 35, intensity: 40, label: "Modern Love", color: "#7c3aed" }, { time: 55, intensity: 65, label: "Future Journey", color: "#8b5cf6" }, { time: 75, intensity: 85, label: "Convergence", color: "#a78bfa" }, { time: 90, intensity: 80, label: "Acceptance", color: "#c4b5fd" }], 
        synopsis: "Aronofsky's ambitious meditation on love, death, and immortality spans three timelines in this visually stunning philosophical epic.", 
        themes: ["Immortality", "Love", "Death", "Spiritual Journey"], 
        awards: ["Venice Film Festival", "Visual Effects Society Award"],
        seoDescription: "Like Inception's multiple timeline structure, The Fountain weaves three interconnected stories across different eras.",
        intensityPeak: "Emotional intensity peaks at 75 minutes when all three timelines converge in a spectacular climax.",
        genreComposition: "Primarily a drama at 50%, elevated by Sci-Fi concepts at 30% and romantic elements at 20%, creating Aronofsky's signature philosophical blend."
    },
    31011: {
        mindBendingIndex: 93, complexityLevel: "EXTREME", dominantColor: "#be185d", rating: 7.8, criticsScore: 86, audienceScore: 81, director: "Jaco Van Dormael", cast: ["Jared Leto", "Sarah Polley", "Diane Kruger"], boxOffice: "$3.6 million", budget: "$47 million", 
        dna: { "Sci-Fi": 50, "Drama": 30, "Fantasy": 20 }, 
        scenes: [{ time: 15, intensity: 30, label: "The Choice", color: "#be185d" }, { time: 45, intensity: 60, label: "Multiple Lives", color: "#db2777" }, { time: 85, intensity: 70, label: "Love Stories", color: "#ec4899" }, { time: 115, intensity: 85, label: "Old Age", color: "#f472b6" }, { time: 135, intensity: 95, label: "Big Bang", color: "#f9a8d4" }], 
        synopsis: "Van Dormael's ambitious exploration of choice and possibility follows the last mortal human through infinite potential lives in this visually stunning epic.", 
        themes: ["Choice", "Possibility", "Love", "Mortality"], 
        awards: ["European Film Award", "Magritte Award Winner"],
        seoDescription: "Like Inception's branching possibilities, Mr. Nobody explores infinite life paths and the consequences of choice.",
        intensityPeak: "The narrative reaches cosmic proportions at 135 minutes with the Big Bang sequence revealing universal connections.",
        genreComposition: "Half Sci-Fi at 50% exploring quantum possibilities, complemented by human drama at 30% and fantasy elements at 20%."
    },
    11324: {
        mindBendingIndex: 75, complexityLevel: "MEDIUM", dominantColor: "#0c4a6e", rating: 8.2, criticsScore: 68, audienceScore: 89, director: "Martin Scorsese", cast: ["Leonardo DiCaprio", "Mark Ruffalo", "Ben Kingsley"], boxOffice: "$294.8 million", budget: "$80 million", 
        dna: { "Thriller": 60, "Mystery": 25, "Drama": 15 }, 
        scenes: [{ time: 15, intensity: 35, label: "Arrival", color: "#0c4a6e" }, { time: 45, intensity: 55, label: "Investigation", color: "#0284c7" }, { time: 85, intensity: 70, label: "Ward C", color: "#0ea5e9" }, { time: 115, intensity: 85, label: "Flashbacks", color: "#38bdf8" }, { time: 135, intensity: 100, label: "The Truth", color: "#7dd3fc" }], 
        synopsis: "Scorsese's psychological thriller traps two marshals on a mysterious island where nothing is as it seems in this masterful mind-bender.", 
        themes: ["Reality vs Delusion", "Guilt", "Mental Health", "Truth"], 
        awards: ["Teen Choice Award", "People's Choice Award"],
        seoDescription: "Like Inception's questioning of reality, Shutter Island masterfully blurs the line between truth and delusion.",
        intensityPeak: "The shocking truth is revealed at 135 minutes when reality and delusion collide in Scorsese's masterful climax.",
        genreComposition: "Primarily a psychological thriller at 60%, enhanced by mystery elements at 25% and dramatic depth at 15%."
    }
};

const CINEMATIC_COLORS = {
    "Sci-Fi": "#1e3a8a", "Drama": "#7c2d12", "Thriller": "#0f172a", "Mystery": "#701a75", "Action": "#9a3412", "Fantasy": "#581c87", "Romance": "#be185d"
};

const STRATEGIC_TAGLINES = {
    14337: "Time is the fire in which we burn", 
    4960: "We are what happens to our dreams",
    1018: "A love story in the city of dreams", 
    206487: "The future is not set in stone", 
    220289: "Reality is just a matter of perspective", 
    141: "Some people are born to change the world", 
    121357: "We all have a double somewhere", 
    1381: "Death is the road to awe", 
    31011: "Every choice creates a universe", 
    11324: "Which would be worse - to live as a monster, or die as a good man?"
};

const STRATEGIC_QUOTES = {
    14337: "They say time is the fire in which we burn", 
    4960: "Everything is more complicated than you think",
    1018: "No hay banda. There is no band", 
    206487: "What if I told you that you're the person you're trying to catch?", 
    220289: "There are dark places where terrible things have happened", 
    141: "Every living creature on earth dies alone", 
    121357: "I don't think I'm me", 
    1381: "Death is the road to awe", 
    31011: "Every path is the right path", 
    11324: "Which would be worse?"
};

// ✅ PROFESSIONAL RATING SYSTEM - NO EMOJIS, PROFESSIONAL SYMBOLS
const RATING_OPTIONS = [
    { 
        value: 1, 
        label: "A Disappointment", 
        color: "#dc2626", 
        symbol: "△", // Triangle for lowest
        bgColor: "bg-red-900/30",
        description: "Falls short of expectations"
    },
    { 
        value: 2, 
        label: "Flawed", 
        color: "#ea580c", 
        symbol: "◇", // Diamond for basic
        bgColor: "bg-orange-900/30",
        description: "Watchable with notable flaws"
    },
    { 
        value: 3, 
        label: "Worth the Ride", 
        color: "#16a34a", 
        symbol: "◆", // Filled diamond for good
        bgColor: "bg-green-900/30",
        description: "Solid entertainment value"
    },
    { 
        value: 4, 
        label: "Exceptional", 
        color: "#eab308", 
        symbol: "★", // Star for best
        bgColor: "bg-yellow-900/30",
        description: "Outstanding cinematic achievement"
    }
];

// Custom Rating Component - PROFESSIONAL VERSION
const CustomRatingSelector = React.memo(({ rating, onRate, size = "medium", readonly = false, showLabel = true }) => {
    const [hoveredRating, setHoveredRating] = useState(0);
    const [currentRating, setCurrentRating] = useState(rating || 0);

    const handleRate = (newRating) => {
        if (readonly) return;
        setCurrentRating(newRating);
        onRate?.(newRating);
    };

    const getCurrentRatingData = () => {
        const ratingValue = hoveredRating || currentRating;
        return RATING_OPTIONS.find(option => option.value === ratingValue);
    };

    const currentRatingData = getCurrentRatingData();

    const sizeClasses = {
        small: "text-xs sm:text-sm py-2 px-2 sm:px-3",
        medium: "text-sm sm:text-base py-2 px-3 sm:py-3 sm:px-4",
        large: "text-base sm:text-lg py-3 px-4 sm:py-4 sm:px-6"
    };

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {RATING_OPTIONS.map((option) => {
                    const isSelected = option.value === currentRating;
                    const isHovered = option.value === hoveredRating;
                    
                    return (
                        <motion.button
                            key={option.value}
                            onClick={() => handleRate(option.value)}
                            onMouseEnter={() => !readonly && setHoveredRating(option.value)}
                            onMouseLeave={() => !readonly && setHoveredRating(0)}
                            disabled={readonly}
                            className={`
                                ${sizeClasses[size]} rounded-xl border-2 transition-all duration-300 font-medium
                                ${readonly ? 'cursor-default' : 'cursor-pointer hover:scale-105'}
                                ${isSelected 
                                    ? `border-2 ${option.bgColor} shadow-lg`
                                    : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'
                                }
                                ${isHovered && !isSelected ? 'border-gray-400 bg-gray-700/50' : ''}
                            `}
                            style={{
                                borderColor: isSelected ? option.color : undefined,
                                backgroundColor: isSelected ? option.color + '20' : undefined,
                                color: isSelected ? option.color : '#e5e7eb'
                            }}
                            whileHover={!readonly ? { scale: 1.02 } : {}}
                            whileTap={!readonly ? { scale: 0.98 } : {}}
                        >
                            <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                                <span className="text-lg sm:text-2xl font-bold">{option.symbol}</span>
                                <div className="text-left">
                                    <div className="font-semibold">{option.label}</div>
                                    <div className="text-xs opacity-80">{option.description}</div>
                                </div>
                            </div>
                        </motion.button>
                    );
                })}
            </div>
            
            {showLabel && currentRatingData && (
                <motion.div 
                    className={`flex items-center justify-center gap-3 p-3 sm:p-4 rounded-xl border ${currentRatingData.bgColor}`}
                    style={{ 
                        borderColor: currentRatingData.color + '60'
                    }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <span className="text-2xl sm:text-3xl font-bold" style={{ color: currentRatingData.color }}>
                        {currentRatingData.symbol}
                    </span>
                    <div>
                        <p 
                            className="font-bold text-base sm:text-lg"
                            style={{ color: currentRatingData.color }}
                        >
                            {currentRatingData.label}
                        </p>
                        <p className="text-gray-400 text-xs sm:text-sm">{currentRatingData.description}</p>
                    </div>
                </motion.div>
            )}
        </div>
    );
});

// Authentication Hook
const useAuth = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const signOut = async () => {
        try {
            await auth.signOut();
            router.push('/sign-in');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return { currentUser, loading, signOut };
};

// ✅ ENHANCED SEO FAQ GENERATION WITH SENSITIVE CONTENT DETAILS
const generateFAQData = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const sensitiveData = SENSITIVE_TIMELINES[movie.tmdbId];
    const contentTypes = getSensitiveContentTypes(movie.tmdbId);
    
    const faqs = [
        {
            question: `Is ${movie.Title} similar to Inception?`,
            answer: `${movieInfo?.seoDescription || `Yes, ${movie.Title} shares mind-bending qualities with Inception including complex narrative structures and reality-bending themes.`}`
        },
        {
            question: `Who directed ${movie.Title} and what is it about?`,
            answer: `${movie.Title} was directed by ${movieInfo?.director || 'acclaimed filmmaker'} in ${movie.year}. ${movieInfo?.synopsis || `A compelling ${movie.genre.toLowerCase()} film that explores complex themes and narrative structures.`}`
        },
        {
            question: `Where can I watch ${movie.Title} online?`,
            answer: `${movie.Title} streaming availability varies by region. Check Netflix, Amazon Prime Video, Apple TV+, Hulu, and other major streaming platforms for current availability in your area.`
        },
        {
            question: `Does ${movie.Title} contain mature or sensitive content?`,
            answer: sensitiveData?.scenes?.length > 0 
                ? `Yes, ${movie.Title} contains mature content including ${contentTypes ? contentTypes.join(', ') : 'adult themes'}. The film has ${sensitiveData.scenes.length} scenes with mature content. For specific timestamps and detailed content warnings, click on the "Sensitive Content Timeline" section above to view the complete guide.`
                : `No, ${movie.Title} does not contain notable mature or sensitive content and is suitable for most audiences interested in complex storytelling.`
        }
    ];
    
    return faqs;
};

const generateMovieSchema = (movie) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';
    
    return {
        "@context": "https://schema.org",
        "@type": "Movie",
        "name": movie.Title,
        "description": movieInfo?.synopsis || `${movie.Title} - A compelling ${movie.genre.toLowerCase()} film like Inception`,
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
        },
        "offers": {
            "@type": "AggregateOffer",
            "availability": "https://schema.org/OnlineOnly",
            "priceCurrency": "USD"
        }
    };
};

const generateFAQSchema = (faqs) => ({
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
});

// SEO Head Component
const SEOHead = React.memo(({ movie, isMainPage = false }) => {
    if (isMainPage) {
        return (
            <Head>
                <title>Top 10 Movies Like Inception - Mind-Bending Films with User Reviews & Ratings</title>
                <meta name="description" content="Discover the best movies like Inception with complexity scores, user ratings, reviews, and comments. Mind-bending films including Primer, Mulholland Drive, Donnie Darko with interactive community features and streaming guides." />
                <meta name="keywords" content="movies like inception, mind-bending movies, inception similar films, complex movies, psychological thrillers, sci-fi like inception, movie reviews, user ratings, film comments, streaming guide" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://mindbenders.com/collections/movies-like-inception" />
                <link rel="icon" href="/favicon.ico" />
                
                <meta property="og:title" content="Top 10 Movies Like Inception - Mind-Bending Cinema with Community Reviews" />
                <meta property="og:description" content="Explore the best movies like Inception with user ratings, reviews, and community comments. Interactive complexity analysis, genre composition, and streaming guides." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://mindbenders.com/collections/movies-like-inception" />
                <meta property="og:site_name" content="Mind Benders" />
                
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Top 10 Movies Like Inception - Community Reviews & Ratings" />
                <meta name="twitter:description" content="Discover mind-bending movies like Inception with user ratings and reviews from our film community." />
                
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "name": "Mind Benders",
                        "description": "Top 10 movies like Inception with user reviews, ratings, and community interaction",
                        "url": "https://mindbenders.com",
                        "potentialAction": {
                            "@type": "SearchAction",
                            "target": "https://mindbenders.com/search?q={search_term_string}",
                            "query-input": "required name=search_term_string"
                        }
                    })}
                </script>
            </Head>
        );
    }

    if (!movie) return null;

    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const faqs = generateFAQData(movie);
    const movieSchema = generateMovieSchema(movie);
    const faqSchema = generateFAQSchema(faqs);
    const posterUrl = FALLBACK_POSTERS[movie.tmdbId] || '';

    return (
        <Head>
            <title>{movie.Title} ({movie.year}) Like Inception - Reviews, Ratings & User Comments | Mind Benders</title>
            <meta name="description" content={`${movie.Title} like Inception: User ratings, reviews & comments. Complexity score ${movieInfo?.mindBendingIndex || 75}/100. ${movie.genre} film by ${movieInfo?.director || 'acclaimed filmmaker'}. ${movieInfo?.seoDescription || ''}`} />
            <meta name="keywords" content={`${movie.Title}, ${movie.year}, like inception, user reviews, movie ratings, ${movie.genre}, ${movieInfo?.director || ''}, community comments, film discussion, streaming guide`} />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={`https://mindbenders.com/movie/${movie.imdbID}`} />
            <link rel="icon" href="/favicon.ico" />
            
            <meta property="og:title" content={`${movie.Title} (${movie.year}) Like Inception - Community Reviews & Ratings`} />
            <meta property="og:description" content={movieInfo?.synopsis || `${movie.Title} - Community reviews and discussion for this Inception-like ${movie.genre.toLowerCase()} film.`} />
            <meta property="og:type" content="video.movie" />
            <meta property="og:url" content={`https://mindbenders.com/movie/${movie.imdbID}`} />
            <meta property="og:image" content={posterUrl} />
            <meta property="og:image:width" content="500" />
            <meta property="og:image:height" content="750" />
            <meta property="og:site_name" content="Mind Benders" />
            
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={`${movie.Title} (${movie.year}) Like Inception - User Reviews`} />
            <meta name="twitter:description" content={`Community reviews and ratings for ${movie.Title}, a mind-bending film similar to Inception.`} />
            <meta name="twitter:image" content={posterUrl} />
            
            <script type="application/ld+json">
                {JSON.stringify(movieSchema)}
            </script>
            
            <script type="application/ld+json">
                {JSON.stringify(faqSchema)}
            </script>
        </Head>
    );
});

// Where to Watch Section - MOBILE OPTIMIZED
const WhereToWatchSection = React.memo(({ movie }) => {
    const [watchProviders, setWatchProviders] = useState(null);
    const [userRegion, setUserRegion] = useState('US');
    const [loading, setLoading] = useState(true);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
        
        const loadWatchProviders = async () => {
            setLoading(true);
            try {
                const providers = await fetchWatchProviders(movie.tmdbId, userRegion);
                setWatchProviders(providers);
            } catch (error) {
                console.error('Error loading watch providers:', error);
            }
            setLoading(false);
        };

        loadWatchProviders();
    }, [movie.tmdbId, userRegion, mounted]);

    const handlePlatformClick = (provider, movieTitle, movieYear) => {
        const platformName = provider.provider_name;
        const lowerPlatformName = platformName.toLowerCase();
        let directUrl = null;

        // Major Streaming Services
        if (lowerPlatformName.includes('netflix')) {
            directUrl = `https://www.netflix.com/search?q=${encodeURIComponent(movieTitle)}`;
        }
        else if (lowerPlatformName.includes('amazon') || lowerPlatformName.includes('prime')) {
            directUrl = `https://www.amazon.com/s?k=${encodeURIComponent(movieTitle + ' ' + movieYear)}&i=instant-video`;
        }
        else if (lowerPlatformName.includes('apple') || lowerPlatformName.includes('tv+')) {
            directUrl = `https://tv.apple.com/search?term=${encodeURIComponent(movieTitle)}`;
        }
        else if (lowerPlatformName.includes('disney')) {
            directUrl = `https://www.disneyplus.com/search?q=${encodeURIComponent(movieTitle)}`;
        }
        else if (lowerPlatformName.includes('hulu')) {
            directUrl = `https://www.hulu.com/search?q=${encodeURIComponent(movieTitle)}`;
        }
        else if (lowerPlatformName.includes('hbo') || lowerPlatformName.includes('max')) {
            directUrl = `https://www.max.com/search?q=${encodeURIComponent(movieTitle)}`;
        }
        else if (lowerPlatformName.includes('paramount')) {
            directUrl = `https://www.paramountplus.com/search?query=${encodeURIComponent(movieTitle)}`;
        }
        else if (lowerPlatformName.includes('peacock')) {
            directUrl = `https://www.peacocktv.com/search?q=${encodeURIComponent(movieTitle)}`;
        }
        else if (lowerPlatformName.includes('starz')) {
            directUrl = `https://www.starz.com/search?q=${encodeURIComponent(movieTitle)}`;
        }
        else if (lowerPlatformName.includes('showtime')) {
            directUrl = `https://www.showtime.com/search?q=${encodeURIComponent(movieTitle)}`;
        }
        else {
            alert(`${platformName} redirect not currently supported. We're working on adding more platforms!`);
            return;
        }

        if (directUrl) {
            window.open(directUrl, '_blank', 'noopener,noreferrer');
        }
    };

    if (!mounted) {
        return (
            <motion.section 
                className="mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h3 className="text-base sm:text-lg font-light text-yellow-300 mb-3 sm:mb-4 flex items-center gap-2">
                    <Play size={14} className="sm:w-4 sm:h-4" />
                    Where to Watch {movie.Title}
                </h3>
                <div className="p-3 sm:p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
                    <div className="flex items-center justify-center space-x-2">
                        <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-yellow-400/30 border-t-yellow-400 rounded-full animate-spin" />
                        <span className="text-gray-300 text-xs sm:text-sm">Initializing...</span>
                    </div>
                </div>
            </motion.section>
        );
    }

    if (loading) {
        return (
            <motion.section 
                className="mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h3 className="text-base sm:text-lg font-light text-yellow-300 mb-3 sm:mb-4 flex items-center gap-2">
                    <Play size={14} className="sm:w-4 sm:h-4" />
                    Where to Watch {movie.Title}
                </h3>
                <div className="p-3 sm:p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
                    <div className="flex items-center justify-center space-x-2">
                        <motion.div 
                            animate={{ rotate: 360 }} 
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }} 
                            className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-yellow-400/30 border-t-yellow-400 rounded-full" 
                        />
                        <span className="text-gray-300 text-xs sm:text-sm">Loading streaming options...</span>
                    </div>
                </div>
            </motion.section>
        );
    }

    // Create unique providers list
    const allProviders = [];
    if (watchProviders?.flatrate) allProviders.push(...watchProviders.flatrate);
    if (watchProviders?.rent) allProviders.push(...watchProviders.rent);
    if (watchProviders?.buy) allProviders.push(...watchProviders.buy);

    const uniqueProviders = allProviders.filter((provider, index, self) => 
        index === self.findIndex(p => p.provider_id === provider.provider_id)
    );

    if (!uniqueProviders.length) {
        return (
            <motion.section 
                className="mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h3 className="text-base sm:text-lg font-light text-yellow-300 mb-3 sm:mb-4 flex items-center gap-2">
                    <Play size={14} className="sm:w-4 sm:h-4" />
                    Where to Watch {movie.Title}
                </h3>
                <div className="p-3 sm:p-4 bg-red-800/20 rounded-lg border border-red-500/50">
                    <p className="text-red-300 text-center text-xs sm:text-sm">
                        {movie.Title} is not currently streaming in your region. Check local rental services or digital platforms.
                    </p>
                </div>
            </motion.section>
        );
    }

    return (
        <motion.section 
            className="mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            <h3 className="text-base sm:text-lg font-light text-yellow-300 mb-3 sm:mb-4 flex items-center gap-2">
                <Play size={14} className="sm:w-4 sm:h-4" />
                Where to Watch {movie.Title} ({userRegion})
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                🎬 Click to open {movie.Title} on legitimate streaming platforms. Direct access - no redirects.
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-3">
                {uniqueProviders.slice(0, 6).map((provider, index) => (
                    <motion.button
                        key={provider.provider_id}
                        onClick={() => handlePlatformClick(provider, movie.Title, movie.year)}
                        className="p-2 sm:p-3 rounded-lg border bg-green-800/20 border-green-500/50 text-center hover:bg-green-700/30 transition-colors group relative"
                        whileHover={{ y: -2, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="flex flex-col items-center space-y-1">
                            <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gray-700 rounded flex items-center justify-center">
                                {provider.logo_path ? (
                                    <img 
                                        src={`${TMDB_CONFIG.IMAGE_BASE_URL}/w92${provider.logo_path}`}
                                        alt={`${provider.provider_name} logo`}
                                        className="w-3 h-3 sm:w-4 sm:h-4 rounded object-cover"
                                    />
                                ) : (
                                    <span className="text-xs">📺</span>
                                )}
                            </div>
                            <div className="text-xs text-gray-300 font-medium text-center leading-tight">
                                {provider.provider_name.split(' ')[0]}
                            </div>
                        </div>
                        <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Play size={6} className="sm:w-2 sm:h-2 text-white" />
                        </div>
                    </motion.button>
                ))}
            </div>
            <p className="text-xs text-gray-500 mt-2 sm:mt-3">
                ✅ Direct links to legitimate platforms • No Google redirects • Legal streaming only
            </p>
        </motion.section>
    );
});

// ✅ MOBILE-OPTIMIZED SENSITIVE CONTENT TIMELINE SECTION
const SensitiveContentTimelineSection = React.memo(({ movie }) => {
    const [showSensitiveOverlay, setShowSensitiveOverlay] = useState(false);
    const sensitiveData = SENSITIVE_TIMELINES[movie.tmdbId];
    const contentTypes = getSensitiveContentTypes(movie.tmdbId);

    if (!sensitiveData?.scenes?.length) {
        return (
            <motion.section 
                className="mb-6 sm:mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h3 className="text-base sm:text-lg font-light text-yellow-300 mb-3 sm:mb-4 flex items-center gap-2">
                    <Shield size={14} className="sm:w-4 sm:h-4" />
                    Sensitive Content Timeline
                </h3>
                <motion.div
                    className="w-full bg-green-500/20 text-green-300 border border-green-500/50 px-3 py-2 sm:px-4 sm:py-3 rounded-lg text-xs sm:text-sm font-light tracking-wide flex items-center justify-center gap-2"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <CheckCircle size={14} className="sm:w-4 sm:h-4" />
                    <span><strong>{movie.Title}</strong> does not contain any sensitive scenes - Family Friendly Content</span>
                </motion.div>
            </motion.section>
        );
    }

    return (
        <motion.section 
            className="mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            <h3 className="text-base sm:text-lg font-light text-yellow-300 mb-3 sm:mb-4 flex items-center gap-2">
                <Shield size={14} className="sm:w-4 sm:h-4" />
                Sensitive Content Timeline
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                ⚠️ Content guide for parents and sensitive viewers. Click below to view detailed timestamps and scene descriptions.
            </p>
            
            <motion.button
                onClick={() => setShowSensitiveOverlay(true)}
                className="w-full bg-amber-500/20 text-amber-300 border border-amber-500/50 px-4 py-3 sm:px-6 sm:py-4 rounded-xl text-xs sm:text-sm font-medium tracking-wide hover:bg-amber-500/30 transition-all duration-300 flex items-center justify-between group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <div className="flex items-center gap-2 sm:gap-3">
                    <AlertTriangle size={16} className="sm:w-5 sm:h-5 group-hover:animate-pulse" />
                    <div className="text-left">
                        <div className="font-semibold text-sm sm:text-base">
                            Mature Content Found ({sensitiveData.scenes.length} scenes)
                        </div>
                        <div className="text-xs opacity-80">
                            Contains: {contentTypes ? contentTypes.join(', ') : 'adult themes'}
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Eye size={14} className="sm:w-4 sm:h-4" />
                    <span className="text-xs">View Timeline</span>
                </div>
            </motion.button>

            {/* MOBILE-OPTIMIZED Sensitive Scenes Overlay */}
            <AnimatePresence>
                {showSensitiveOverlay && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center z-[100] p-4"
                        onClick={() => setShowSensitiveOverlay(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 50, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: -50, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-yellow-500/20 rounded-2xl shadow-2xl w-full max-w-md sm:max-w-lg p-4 sm:p-8 relative flex flex-col max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.button
                                onClick={() => setShowSensitiveOverlay(false)}
                                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-white transition-colors z-10"
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <X size={20} className="sm:w-6 sm:h-6" />
                            </motion.button>
                            <div className="text-center mb-4 sm:mb-6">
                                <h3 className="text-xl sm:text-2xl font-light text-yellow-300 tracking-wide mb-1">🎬 Sensitive Content Timeline</h3>
                                <p className="text-xs sm:text-sm text-gray-400">({sensitiveData.scenes.length} scenes found in "{movie.Title}")</p>
                            </div>
                            <div className="border-t border-b border-gray-700/50 my-3 sm:my-4 py-3 sm:py-4 space-y-2 sm:space-y-3 max-h-[50vh] sm:max-h-[60vh] overflow-y-auto pr-2">
                                {sensitiveData.scenes.map((scene, index) => {
                                    const formatTime = (seconds) => {
                                        const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
                                        const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
                                        const s = Math.floor(seconds % 60).toString().padStart(2, '0');
                                        return `${h}:${m}:${s}`;
                                    };
                                    
                                    const getSceneIcon = (type) => {
                                        const lowerType = type.toLowerCase();
                                        if (lowerType.includes('nudity') || lowerType.includes('sex')) return '🔴';
                                        if (lowerType.includes('kissing')) return '💋';
                                        if (lowerType.includes('violence')) return '🗡️';
                                        if (lowerType.includes('language')) return '💬';
                                        return '⚠️';
                                    };

                                    return (
                                        <motion.div
                                            key={index}
                                            className="flex items-center text-gray-200 p-2 sm:p-3 rounded-lg hover:bg-white/5 transition-colors"
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            <span className="text-base sm:text-xl mr-3 sm:mr-4">{getSceneIcon(scene.type)}</span>
                                            <span className="font-mono text-yellow-400/90 text-xs sm:text-sm mr-2 sm:mr-4 w-24 sm:w-32">{formatTime(scene.start)} - {formatTime(scene.end)}</span>
                                            <span className="text-xs sm:text-sm font-light flex-1 capitalize">{scene.type}</span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                            <div className="mt-4 sm:mt-6 flex justify-center">
                                <motion.button
                                    onClick={() => setShowSensitiveOverlay(false)}
                                    className="bg-yellow-500/20 text-yellow-200 border border-yellow-400/50 px-6 py-2 sm:px-10 sm:py-3 rounded-lg text-xs sm:text-sm font-light tracking-wide hover:bg-yellow-500/30 transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Close Timeline
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.section>
    );
});

// Enhanced Star Rating with Color Labels
const EnhancedStarRating = React.memo(({ rating, onRate, size = 20, readonly = false, showLabel = true }) => {
    const [hoveredRating, setHoveredRating] = useState(0);
    const [currentRating, setCurrentRating] = useState(rating || 0);

    const handleRate = (newRating) => {
        if (readonly) return;
        setCurrentRating(newRating);
        onRate?.(newRating);
    };

    const getCurrentRatingData = () => {
        const ratingValue = hoveredRating || currentRating;
        return RATING_OPTIONS.find(option => option.value === ratingValue);
    };

    const currentRatingData = getCurrentRatingData();

    return (
        <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
                {RATING_OPTIONS.map((ratingOption) => (
                    <motion.button
                        key={ratingOption.value}
                        onClick={() => handleRate(ratingOption.value)}
                        onMouseEnter={() => !readonly && setHoveredRating(ratingOption.value)}
                        onMouseLeave={() => !readonly && setHoveredRating(0)}
                        disabled={readonly}
                        className={`${readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110'} transition-transform`}
                        whileHover={!readonly ? { scale: 1.2 } : {}}
                        whileTap={!readonly ? { scale: 0.9 } : {}}
                        title={ratingOption.label}
                    >
                        <Star
                            size={size}
                            className={`${
                                ratingOption.value <= (hoveredRating || currentRating)
                                    ? 'fill-current'
                                    : 'text-gray-600'
                            } transition-colors`}
                            style={{
                                color: ratingOption.value <= (hoveredRating || currentRating) 
                                    ? ratingOption.color 
                                    : '#4b5563'
                            }}
                        />
                    </motion.button>
                ))}
            </div>
            {showLabel && currentRatingData && !readonly && (
                <motion.div 
                    className={`flex items-center gap-2 px-3 py-1 rounded-lg border ${currentRatingData.bgColor}`}
                    style={{ 
                        borderColor: currentRatingData.color + '60'
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <span className="text-lg font-bold">{currentRatingData.symbol}</span>
                    <span 
                        className="text-sm font-medium"
                        style={{ color: currentRatingData.color }}
                    >
                        {currentRatingData.label}
                    </span>
                </motion.div>
            )}
        </div>
    );
});

// MOBILE-OPTIMIZED Intensity Graph with PERFECT Dot Positioning
const EnhancedIntensityGraph = React.memo(({ scenes, dominantColor }) => {
    if (!scenes || scenes.length === 0) return null;

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-gray-900/95 border border-gray-700/50 rounded-lg p-2 sm:p-4 backdrop-blur-sm shadow-xl">
                    <p className="text-yellow-400 font-medium text-xs sm:text-sm">{payload[0].payload.label}</p>
                    <p className="text-gray-300 text-xs sm:text-sm">Time: {label}%</p>
                    <p className="text-gray-300 text-xs sm:text-sm">Intensity: {payload[0].value}%</p>
                </div>
            );
        }
        return null;
    };

    // Custom Dot Component - MOBILE OPTIMIZED
    const CustomActiveDot = (props) => {
        const { cx, cy, payload, index } = props;
        if (!payload) return null;

        return (
            <g>
                {/* Pulsing outer ring */}
                <motion.circle
                    cx={cx}
                    cy={cy}
                    r="8"
                    fill="none"
                    stroke={payload.color}
                    strokeWidth="2"
                    opacity="0.4"
                    initial={{ scale: 0 }}
                    animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [0.4, 0.1, 0.4]
                    }}
                    transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: index * 0.3 
                    }}
                />
                {/* Main dot - smaller for mobile */}
                <motion.circle
                    cx={cx}
                    cy={cy}
                    r="5"
                    fill={payload.color}
                    stroke="white"
                    strokeWidth="2"
                    className="drop-shadow-lg cursor-pointer"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1 + 0.5,
                        type: "spring",
                        stiffness: 300
                    }}
                    whileHover={{ scale: 1.2 }}
                />
                {/* Inner highlight */}
                <motion.circle
                    cx={cx}
                    cy={cy}
                    r="2"
                    fill="white"
                    opacity="0.9"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                        duration: 0.3, 
                        delay: index * 0.1 + 0.7 
                    }}
                />
            </g>
        );
    };

    return (
        <motion.div 
            className="mb-8 sm:mb-12 bg-gradient-to-br from-gray-800/40 to-gray-900/60 rounded-xl border border-gray-700/50 p-4 sm:p-8 shadow-2xl backdrop-blur-sm relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <div className="absolute top-2 left-2 sm:top-4 sm:left-4 w-3 h-3 sm:w-5 sm:h-5 border-t-2 border-l-2 border-yellow-400/40"></div>
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-3 h-3 sm:w-5 sm:h-5 border-t-2 border-r-2 border-yellow-400/40"></div>
            <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-3 h-3 sm:w-5 sm:h-5 border-b-2 border-l-2 border-yellow-400/40"></div>
            <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-3 h-3 sm:w-5 sm:h-5 border-b-2 border-r-2 border-yellow-400/40"></div>
            
            <motion.div 
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-8 gap-2 sm:gap-0"
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
            >
                <h4 className="text-lg sm:text-2xl font-light text-gray-100 flex items-center gap-2 sm:gap-4 tracking-wide">
                    <motion.div 
                        animate={{ rotate: 360 }} 
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="text-xl sm:text-3xl"
                    >
                        📊
                    </motion.div>
                    INTENSITY TIMELINE
                </h4>
                <div className="text-xs text-gray-400 flex items-center gap-2 sm:gap-3 tracking-wider uppercase">
                    <TrendingUp size={12} className="sm:w-4 sm:h-4" />
                    Narrative Analysis
                </div>
            </motion.div>

            <div className="h-48 sm:h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={scenes} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
                        <defs>
                            <linearGradient id={`intensityGradient-${dominantColor}`} x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor={dominantColor} stopOpacity={0.8}/>
                                <stop offset="95%" stopColor={dominantColor} stopOpacity={0.1}/>
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                        <XAxis 
                            dataKey="time" 
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9CA3AF', fontSize: 10 }}
                            domain={['dataMin', 'dataMax']}
                        />
                        <YAxis 
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9CA3AF', fontSize: 10 }}
                            domain={[0, 100]}
                        />
                                                <Tooltip content={<CustomTooltip />} />
                        <Area
                            type="monotone"
                            dataKey="intensity"
                            stroke={dominantColor}
                            strokeWidth={2}
                            fill={`url(#intensityGradient-${dominantColor})`}
                            activeDot={<CustomActiveDot />}
                            dot={false}
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            
            {/* Mobile-Optimized Peak Labels */}
            <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3 justify-center">
                {scenes.map((scene, index) => (
                    <motion.div
                        key={index}
                        className="flex items-center gap-2 px-2 py-1 sm:px-3 sm:py-1 bg-gray-700/50 rounded-full text-xs border border-gray-600/50"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + 1.5 }}
                    >
                        <div 
                            className="w-2 h-2 sm:w-3 sm:h-3 rounded-full border border-white/50" 
                            style={{ backgroundColor: scene.color }}
                        />
                        <span className="text-gray-300 font-medium">{scene.label}</span>
                        <span className="text-gray-400">({scene.intensity}%)</span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
});

// MOBILE-OPTIMIZED Enhanced Comments & Rating Section with AUTH REQUIRED and PROFESSIONAL RATING
const EnhancedCommentsRatingSection = React.memo(({ movie }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [userRating, setUserRating] = useState(0);
    const [loading, setLoading] = useState(false);
    const [averageRating, setAverageRating] = useState(0);
    const [hasUserRated, setHasUserRated] = useState(false);
    const { currentUser } = useAuth();
    const router = useRouter();

    // Load existing comments and ratings
    useEffect(() => {
        const loadCommentsAndRatings = async () => {
            if (!db || !movie?.tmdbId) return;

            try {
                const commentsRef = collection(db, 'movieComments', movie.tmdbId.toString(), 'comments');
                const unsubscribe = onSnapshot(
                    query(commentsRef, orderBy('createdAt', 'desc')),
                    (snapshot) => {
                        const loadedComments = snapshot.docs.map(doc => ({
                            id: doc.id,
                            ...doc.data()
                        }));
                        
                        setComments(loadedComments);
                        
                        // Calculate average rating (1-4 scale)
                        const ratingsOnly = loadedComments.filter(c => c.rating > 0).map(c => c.rating);
                        if (ratingsOnly.length > 0) {
                            const avg = ratingsOnly.reduce((sum, r) => sum + r, 0) / ratingsOnly.length;
                            setAverageRating(Math.round(avg * 10) / 10);
                        }

                        // Check if current user has already rated
                        if (currentUser) {
                            const userComment = loadedComments.find(c => c.userId === currentUser.uid);
                            if (userComment) {
                                setUserRating(userComment.rating || 0);
                                setNewComment(userComment.text || '');
                                setHasUserRated(true);
                            }
                        }
                    }
                );
                return unsubscribe;
            } catch (error) {
                console.error('Error loading comments:', error);
            }
        };

        const unsubscribe = loadCommentsAndRatings();
        return () => {
            if (typeof unsubscribe === 'function') {
                unsubscribe();
            }
        };
    }, [movie?.tmdbId, currentUser]);

    const handleSignInRedirect = () => {
        const returnUrl = encodeURIComponent(window.location.pathname);
        router.push(`/signin?returnUrl=${returnUrl}`);
    };

    const handleSubmitComment = async () => {
        if (!currentUser) {
            handleSignInRedirect();
            return;
        }

        if (!userRating || userRating === 0) {
            alert('Please select a rating before submitting your review');
            return;
        }

        if (!newComment.trim()) {
            alert('Please write a comment before submitting');
            return;
        }

        setLoading(true);
        try {
            const ratingData = RATING_OPTIONS.find(option => option.value === userRating);
            const commentData = {
                userId: currentUser.uid,
                userName: currentUser.displayName || currentUser.email?.split('@')[0] || 'Anonymous User',
                userEmail: currentUser.email,
                userPhotoURL: currentUser.photoURL || null,
                text: newComment.trim(),
                rating: userRating,
                ratingLabel: ratingData?.label || '',
                ratingSymbol: ratingData?.symbol || '★',
                ratingColor: ratingData?.color || '#6b7280',
                movieId: movie.tmdbId,
                movieTitle: movie.Title,
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp()
            };

            const commentsRef = collection(db, 'movieComments', movie.tmdbId.toString(), 'comments');
            
            if (hasUserRated) {
                // Update existing comment
                const existingComment = comments.find(c => c.userId === currentUser.uid);
                if (existingComment) {
                    await setDoc(doc(commentsRef, existingComment.id), {
                        ...commentData,
                        createdAt: existingComment.createdAt, // Keep original creation time
                        updatedAt: serverTimestamp()
                    });
                }
            } else {
                // Create new comment
                await addDoc(commentsRef, commentData);
                setHasUserRated(true);
            }
            
        } catch (error) {
            console.error('Error saving comment:', error);
            alert('Error saving your review. Please try again.');
        }
        setLoading(false);
    };

    const getRatingDistribution = () => {
        return RATING_OPTIONS.map(option => ({
            ...option,
            count: comments.filter(c => c.rating === option.value).length
        }));
    };

    const formatTimestamp = (timestamp) => {
        if (!timestamp?.seconds) return 'Just now';
        const date = new Date(timestamp.seconds * 1000);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <motion.section 
            className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700/50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
        >
            {/* Mobile-Optimized Header with Average Rating */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-3 sm:gap-0">
                <h2 className="text-xl sm:text-2xl font-light text-yellow-300 flex items-center gap-2 sm:gap-3">
                    <MessageSquare size={20} className="sm:w-6 sm:h-6" />
                    <span className="hidden sm:inline">Community Reviews & Ratings for {movie.Title}</span>
                    <span className="sm:hidden">Reviews for {movie.Title}</span>
                </h2>
                {averageRating > 0 && (
                    <div className="flex items-center gap-3 sm:gap-4">
                        <div className="text-2xl sm:text-3xl font-bold text-yellow-400">
                            {averageRating}/4
                        </div>
                        <div className="text-gray-400 text-xs sm:text-sm">
                            ({comments.filter(c => c.rating > 0).length} review{comments.filter(c => c.rating > 0).length !== 1 ? 's' : ''})
                        </div>
                    </div>
                )}
            </div>

            {/* Mobile-Optimized Rating Distribution */}
            {comments.length > 0 && (
                <motion.div 
                    className="bg-gray-800/30 rounded-xl p-4 sm:p-6 border border-gray-700/50 mb-6 sm:mb-8"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-base sm:text-lg font-medium text-gray-200 mb-3 sm:mb-4">Rating Distribution</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                        {getRatingDistribution().map((rating, index) => (
                            <motion.div
                                key={rating.value}
                                className={`p-3 sm:p-4 rounded-lg border text-center ${rating.bgColor}`}
                                style={{ borderColor: rating.color + '60' }}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="text-xl sm:text-2xl mb-1 sm:mb-2 font-bold" style={{ color: rating.color }}>
                                    {rating.symbol}
                                </div>
                                <div className="text-xs font-medium mb-1" style={{ color: rating.color }}>
                                    {rating.label}
                                </div>
                                <div className="text-lg font-bold text-gray-300">
                                    {rating.count}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}

            {/* Mobile-Optimized Authentication Required Notice */}
            {!currentUser && (
                <motion.div 
                    className="bg-yellow-500/10 border border-yellow-400/30 rounded-xl p-6 sm:p-8 mb-6 sm:mb-8 text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <LogIn size={40} className="sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-yellow-400" />
                    <h3 className="text-lg sm:text-xl font-medium text-yellow-300 mb-2">Sign In Required</h3>
                    <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                        Create a free account to rate {movie.Title} and share your thoughts with the community.
                        Professional rating system: Disappointing, Adequate, Recommended, or Exceptional.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <motion.button
                            onClick={handleSignInRedirect}
                            className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-medium transition-colors flex items-center gap-2 text-sm sm:text-base"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <LogIn size={16} className="sm:w-5 sm:h-5" />
                            Sign In to Rate & Review
                        </motion.button>
                    </div>
                </motion.div>
            )}

            {/* Mobile-Optimized Review Form (Only for authenticated users) */}
            {currentUser && (
                <motion.div 
                    className="bg-gray-800/30 rounded-xl p-4 sm:p-6 border border-gray-700/50 mb-6 sm:mb-8"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
                        <h3 className="text-base sm:text-lg font-medium text-gray-200">
                            {hasUserRated ? `Update Your Review of ${movie.Title}` : `Rate & Review ${movie.Title}`}
                        </h3>
                        <div className="flex items-center gap-2 sm:gap-3">
                            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center">
                                {currentUser.photoURL ? (
                                    <img 
                                        src={currentUser.photoURL} 
                                        alt="Your avatar" 
                                        className="w-full h-full rounded-full object-cover"
                                    />
                                ) : (
                                    <span className="text-black text-xs sm:text-sm font-bold">
                                        {currentUser.displayName?.charAt(0)?.toUpperCase() || 
                                         currentUser.email?.charAt(0)?.toUpperCase() || '?'}
                                    </span>
                                )}
                            </div>
                            <span className="text-xs sm:text-sm text-gray-300">
                                {currentUser.displayName || currentUser.email?.split('@')[0]}
                            </span>
                        </div>
                    </div>
                    
                    <div className="space-y-4 sm:space-y-6">
                        {/* Mobile-Optimized Rating Selection */}
                        <div>
                            <label className="block text-gray-300 text-sm mb-2 sm:mb-3">
                                Your Rating * <span className="text-gray-500">Choose one option:</span>
                            </label>
                            <CustomRatingSelector
                                rating={userRating}
                                onRate={setUserRating}
                                size="small"
                                showLabel={true}
                            />
                        </div>

                        {/* Mobile-Optimized Comment Input */}
                        <div>
                            <label className="block text-gray-300 text-sm mb-2">Your Review *</label>
                            <textarea
                                placeholder={`Share your thoughts about ${movie.Title}... How does it compare to Inception? What did you think of the story, performances, or mind-bending elements?`}
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                rows={3}
                                className="w-full p-3 sm:p-4 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-200 placeholder-gray-400 focus:border-yellow-400 focus:outline-none transition-colors resize-none text-sm sm:text-base"
                                maxLength={1000}
                            />
                            <div className="text-right text-xs text-gray-500 mt-1">
                                {newComment.length}/1000 characters
                            </div>
                        </div>

                        {/* Mobile-Optimized Submit Button */}
                        <motion.button
                            onClick={handleSubmitComment}
                            disabled={loading || !userRating || !newComment.trim()}
                            className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-semibold px-6 py-2 sm:px-8 sm:py-3 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <MessageSquare size={14} className="sm:w-4 sm:h-4" />
                            {loading ? 'Saving Review...' : hasUserRated ? 'Update Review' : 'Submit Review'}
                        </motion.button>
                    </div>
                </motion.div>
            )}

            {/* Mobile-Optimized Comments Display */}
            <div className="space-y-3 sm:space-y-4">
                <h3 className="text-base sm:text-lg font-medium text-gray-200 mb-3 sm:mb-4">
                    Recent Reviews ({comments.length})
                </h3>
                
                {comments.length === 0 ? (
                    <div className="text-center py-8 sm:py-12 text-gray-400">
                        <MessageSquare size={40} className="sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 opacity-50" />
                        <p className="text-base sm:text-lg mb-2">No reviews for {movie.Title} yet.</p>
                        <p className="text-sm sm:text-base">Be the first to share your thoughts on this mind-bending film!</p>
                        {!currentUser && (
                            <motion.button
                                onClick={handleSignInRedirect}
                                className="mt-3 sm:mt-4 text-yellow-400 hover:text-yellow-300 underline transition-colors text-sm sm:text-base"
                                whileHover={{ scale: 1.05 }}
                            >
                                Sign in to write the first review
                            </motion.button>
                        )}
                    </div>
                ) : (
                    comments.map((comment, index) => (
                        <motion.div
                            key={comment.id}
                            className="bg-gray-800/20 rounded-xl p-4 sm:p-6 border border-gray-700/30 hover:bg-gray-800/30 transition-colors"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <div className="flex items-start justify-between mb-3 sm:mb-4">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div 
                                        className="w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border-2 shadow-lg"
                                        style={{ 
                                            backgroundColor: comment.ratingColor + '20',
                                            borderColor: comment.ratingColor 
                                        }}
                                    >
                                        {comment.userPhotoURL ? (
                                            <img 
                                                src={comment.userPhotoURL} 
                                                alt={comment.userName} 
                                                className="w-full h-full rounded-full object-cover"
                                            />
                                        ) : (
                                            <span className="text-white font-bold text-sm sm:text-lg">
                                                {comment.userName?.charAt(0)?.toUpperCase() || '?'}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <p 
                                            className="font-bold text-sm sm:text-lg"
                                            style={{ color: comment.ratingColor }}
                                        >
                                            {comment.userName}
                                            {comment.userId === currentUser?.uid && (
                                                <span className="ml-2 text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full">
                                                    You
                                                </span>
                                            )}
                                        </p>
                                        <p className="text-gray-400 text-xs sm:text-sm">
                                            {formatTimestamp(comment.createdAt)}
                                            {comment.updatedAt && comment.updatedAt !== comment.createdAt && (
                                                <span className="ml-2 text-xs">(edited)</span>
                                            )}
                                        </p>
                                    </div>
                                </div>
                                {/* Mobile-Optimized Rating Badge */}
                                <div 
                                    className={`flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-3 sm:py-2 rounded-lg border ${
                                        RATING_OPTIONS.find(r => r.value === comment.rating)?.bgColor
                                    }`}
                                    style={{ borderColor: comment.ratingColor + '60' }}
                                >
                                    <span className="text-base sm:text-xl font-bold" style={{ color: comment.ratingColor }}>
                                        {comment.ratingSymbol || '★'}
                                    </span>
                                    <span className="text-xs sm:text-sm font-medium" style={{ color: comment.ratingColor }}>
                                        {comment.ratingLabel}
                                    </span>
                                </div>
                            </div>
                            <p className="text-gray-300 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                                {comment.text}
                            </p>
                        </motion.div>
                    ))
                )}
            </div>
        </motion.section>
    );
});

// Mobile-Optimized SEO FAQ Section
const SEOFAQSection = React.memo(({ movie }) => {
    const faqs = generateFAQData(movie);
    
    return (
        <motion.section 
            className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-gray-700/50"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
        >
            <h2 className="text-xl sm:text-2xl font-light text-yellow-300 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                <Info size={20} className="sm:w-6 sm:h-6" />
                <span className="hidden sm:inline">Frequently Asked Questions About {movie.Title}</span>
                <span className="sm:hidden">FAQ About {movie.Title}</span>
            </h2>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                Common questions about {movie.Title} and how it compares to other mind-bending films like Inception.
            </p>
            <div className="space-y-4 sm:space-y-6">
                {faqs.map((faq, index) => (
                    <motion.div 
                        key={index}
                        className="bg-gray-800/30 rounded-xl p-4 sm:p-6 border border-gray-700/50"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <h3 className="text-base sm:text-lg font-medium text-yellow-200 mb-2 sm:mb-3">{faq.question}</h3>
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
});

// Context Provider
const CinematicContext = React.createContext();

const CinematicProvider = ({ children }) => {
    const [isMuted, setIsMuted] = useState(false);
    const [isAutoPlay, setIsAutoPlay] = useState(false);
    const [movieDetails, setMovieDetails] = useState({});

    const fetchMovieDetails = useCallback(async (tmdbId) => {
        if (movieDetails[tmdbId]) return movieDetails[tmdbId];
        const tmdbData = await fetchMovieFromTMDB(tmdbId);
        if (tmdbData) {
            setMovieDetails(prev => ({ ...prev, [tmdbId]: tmdbData }));
            return tmdbData;
        }
        return null;
    }, [movieDetails]);

    const playSound = useCallback((type) => {
        if (!isMuted) {
            try {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                oscillator.frequency.value = type === 'hover' ? 440 : 330;
                gainNode.gain.setValueAtTime(0.006, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.003, audioContext.currentTime + 0.1);
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.1);
            } catch (error) {
                console.log('Audio not available');
            }
        }
    }, [isMuted]);

    return (
        <CinematicContext.Provider value={{ isMuted, setIsMuted, isAutoPlay, setIsAutoPlay, movieDetails, fetchMovieDetails, playSound }}>
            {children}
        </CinematicContext.Provider>
    );
};

// Mobile-Optimized Background Component
const CinematicBackground = React.memo(() => (
    <div 
        className="fixed inset-0 pointer-events-none z-0" 
        suppressHydrationWarning={true}
    >
        <div 
            className="absolute inset-0 bg-black" 
            suppressHydrationWarning={true} 
        />
        <div 
            className="absolute inset-0 opacity-[0.006]" 
            suppressHydrationWarning={true}
            style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`, 
                backgroundSize: '600px 600px' 
            }} 
        />
        <div 
            className="absolute inset-0" 
            suppressHydrationWarning={true}
            style={{ background: 'radial-gradient(ellipse at center, transparent 0%, transparent 60%, rgba(0,0,0,0.5) 100%)' }} 
        />
    </div>
));

// Mobile-Optimized Loader Component
const CinematicLoader = React.memo(() => (
    <div className="flex flex-col items-center justify-center h-full space-y-8 sm:space-y-16 px-4 sm:px-8">
        <div className="relative">
            <motion.div 
                animate={{ rotate: 360 }} 
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }} 
                className="w-16 h-16 sm:w-24 sm:h-24 border-4 border-gray-800/60 rounded-full relative"
            >
                <div className="absolute inset-2 sm:inset-3 border-2 border-yellow-500/40 rounded-full">
                    <div className="absolute inset-1 sm:inset-2 border border-yellow-400/30 rounded-full">
                        <div className="absolute inset-1 bg-yellow-500/10 rounded-full" />
                    </div>
                </div>
                {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation, index) => (
                    <div 
                        key={index} 
                        className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400/40 rounded-full" 
                        style={{ 
                            top: '6px', 
                            left: '50%', 
                            transformOrigin: '0 26px', 
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
            className="text-center space-y-4 sm:space-y-6 max-w-xs sm:max-w-md"
        >
            <h2 className="text-xl sm:text-2xl font-light text-gray-200 tracking-[0.2em] uppercase">Loading Movies Like Inception</h2>
            <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed tracking-wide">
                Curating the finest mind-bending cinema similar to Inception with user reviews and ratings
            </p>
            <div className="w-48 h-1 sm:w-64 bg-gray-800 rounded-full overflow-hidden mx-auto">
                <motion.div 
                    className="h-full bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full" 
                    animate={{ x: ['-100%', '100%'] }} 
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} 
                />
            </div>
        </motion.div>
    </div>
));

// MOBILE-OPTIMIZED HEADER
const CinematicHeader = React.memo(() => (
    <header className="text-center mb-8 sm:mb-16 lg:mb-24 px-4 sm:px-6 w-full relative">
        <motion.div 
            initial={{ opacity: 0, y: -40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.2, ease: "easeOut" }} 
            className="space-y-6 sm:space-y-8 lg:space-y-12 relative z-10"
        >
            <motion.div className="relative">
                <motion.h1 
                    className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extralight tracking-[0.1em] sm:tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-yellow-300 to-amber-300" 
                    style={{ 
                        fontFamily: "'Playfair Display', serif", 
                        textShadow: '0 0 60px rgba(234, 179, 8, 0.1)' 
                    }} 
                    whileHover={{ 
                        scale: 1.02, 
                        textShadow: '0 0 80px rgba(234, 179, 8, 0.2)' 
                    }} 
                    transition={{ duration: 0.4 }}
                >
                    <motion.span className="block leading-tight" style={{ letterSpacing: '0.15em' }}>TOP 10 MOVIES</motion.span>
                    <motion.span className="block text-amber-300/90 mt-1 sm:mt-2 lg:mt-3 leading-tight" style={{ letterSpacing: '0.2em' }}>LIKE INCEPTION</motion.span>
                </motion.h1>
                <motion.div 
                    initial={{ scaleX: 0 }} 
                    animate={{ scaleX: 1 }} 
                    transition={{ delay: 1.2, duration: 2, ease: "easeInOut" }} 
                    className="absolute -bottom-3 sm:-bottom-4 lg:-bottom-6 left-1/2 transform -translate-x-1/2 w-24 sm:w-48 lg:w-64 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" 
                />
            </motion.div>
            <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ delay: 1.8 }} 
                className="space-y-4 sm:space-y-6 lg:space-y-8"
            >
                <p className="text-gray-300/90 text-sm sm:text-lg md:text-xl lg:text-2xl font-light tracking-[0.1em] sm:tracking-[0.15em] max-w-4xl mx-auto leading-relaxed px-2 sm:px-4">
                    MIND-BENDING FILMS WITH COMMUNITY REVIEWS
                </p>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 2.2 }} 
                    className="flex justify-center items-center space-x-6 sm:space-x-8 lg:space-x-12"
                >
                    <div className="w-6 sm:w-12 lg:w-16 h-px bg-gradient-to-r from-transparent to-yellow-400/30"></div>
                    <motion.div 
                        animate={{ rotate: 360 }} 
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }} 
                        className="w-2 h-2 sm:w-3 sm:h-3 border border-yellow-400/40 rotate-45" 
                    />
                    <div className="w-6 sm:w-12 lg:w-16 h-px bg-gradient-to-l from-transparent to-yellow-400/30"></div>
                </motion.div>
            </motion.div>
            
            {/* Mobile-Optimized Badge Grid */}
            <motion.div 
                className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mt-8 sm:mt-12 lg:mt-20 max-w-2xl sm:max-w-3xl mx-auto" 
                initial={{ opacity: 0, y: 40 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 2.8, duration: 0.8 }}
            >
                {[
                    { label: 'INCEPTION-LEVEL', icon: Crown, desc: 'Reality-Bending Films' }, 
                    { label: 'COMMUNITY RATED', icon: Star, desc: 'Professional Reviews' }, 
                    { label: 'INTERACTIVE', icon: MessageSquare, desc: 'Comment & Discuss' }
                ].map((badge) => {
                    const Icon = badge.icon;
                    return (
                        <motion.div 
                            key={badge.label} 
                            className="relative group" 
                            whileHover={{ y: -4, scale: 1.02 }} 
                            transition={{ duration: 0.3 }}
                        >
                            <div className="p-3 sm:p-4 lg:p-6 bg-gradient-to-br from-gray-800/40 to-gray-900/60 border border-yellow-500/10 rounded-lg backdrop-blur-sm">
                                <div className="flex flex-col items-center space-y-2 sm:space-y-3">
                                    <Icon size={18} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-400/70" />
                                    <h3 className="text-yellow-200/90 text-xs sm:text-sm font-light tracking-[0.15em] sm:tracking-[0.2em] uppercase text-center leading-tight">
                                        {badge.label}
                                    </h3>
                                    <p className="text-gray-400 text-xs font-light text-center leading-relaxed">
                                        {badge.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </motion.div>
        </motion.div>
    </header>
));

// MOBILE-OPTIMIZED Movie Poster Component
const TMDBMoviePoster = React.memo(({ movie, className = "", alt }) => {
    const [currentSrc, setCurrentSrc] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const { fetchMovieDetails } = React.useContext(CinematicContext);
    const [tmdbData, setTmdbData] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        setCurrentSrc(0);
        const loadTMDBData = async () => {
            const data = await fetchMovieDetails(movie.tmdbId);
            if (data) setTmdbData(data);
        };
        loadTMDBData();
    }, [movie.tmdbId, fetchMovieDetails]);

    const posterSources = useMemo(() => {
        const sources = [];
        if (tmdbData?.poster_path) {
            sources.push(getTMDBPosterUrl(tmdbData.poster_path, 'large'));
            sources.push(getTMDBPosterUrl(tmdbData.poster_path, 'medium'));
        }
        if (FALLBACK_POSTERS[movie.tmdbId]) sources.push(FALLBACK_POSTERS[movie.tmdbId]);
        sources.push(`data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="600" viewBox="0 0 400 600"><defs><linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#111827;stop-opacity:1" /><stop offset="50%" style="stop-color:#1f2937;stop-opacity:1" /><stop offset="100%" style="stop-color:#111827;stop-opacity:1" /></linearGradient></defs><rect width="400" height="600" fill="url(#bg)"/><rect x="30" y="30" width="340" height="540" fill="none" stroke="${COMPLETE_MOVIE_DATA[movie.tmdbId]?.dominantColor || '#ca8a04'}" stroke-width="2" opacity="0.4"/><circle cx="200" cy="220" r="60" fill="none" stroke="${COMPLETE_MOVIE_DATA[movie.tmdbId]?.dominantColor || '#ca8a04'}" stroke-width="2" opacity="0.3"/><rect x="120" y="350" width="160" height="3" fill="${COMPLETE_MOVIE_DATA[movie.tmdbId]?.dominantColor || '#ca8a04'}" opacity="0.4"/><text x="200" y="420" text-anchor="middle" font-family="Playfair Display, serif" font-size="24" fill="${COMPLETE_MOVIE_DATA[movie.tmdbId]?.dominantColor || '#ca8a04'}" opacity="0.9">${movie.Title}</text><text x="200" y="460" text-anchor="middle" font-family="Inter, sans-serif" font-size="16" fill="#9ca3af" opacity="0.7">${movie.year} • ${movie.genre}</text></svg>`)}`);
        return sources.filter(Boolean);
    }, [movie, tmdbData]);

    const handleImageLoad = useCallback(() => setIsLoading(false), []);
    const handleImageError = useCallback(() => {
        if (currentSrc < posterSources.length - 1) setCurrentSrc(prev => prev + 1);
        else setIsLoading(false);
    }, [currentSrc, posterSources.length]);

    return (
        <div className={`relative ${className}`}>
            {isLoading && (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-700/50">
                    <div className="text-center space-y-3 sm:space-y-4">
                        <motion.div 
                            animate={{ rotate: 360 }} 
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }} 
                            className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-yellow-400/30 border-t-yellow-400 rounded-full mx-auto" 
                        />
                        <div className="text-xs text-gray-400 font-light tracking-wider">Loading poster...</div>
                    </div>
                </div>
            )}
            <img 
                src={posterSources[currentSrc]} 
                alt={alt || `Official poster for ${movie.Title}`} 
                className={`w-full h-full object-cover rounded-xl transition-all duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`} 
                onLoad={handleImageLoad} 
                onError={handleImageError} 
                loading="lazy" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl pointer-events-none" />
        </div>
    );
});

// MOBILE-OPTIMIZED Strategic Controls Component
const StrategicControls = () => {
    const { isMuted, setIsMuted, isAutoPlay, setIsAutoPlay, playSound } = React.useContext(CinematicContext);
    return (
        <motion.div className="fixed top-6 right-4 sm:top-8 sm:right-8 z-50 flex items-center gap-2 sm:gap-4" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }}>
            <motion.button 
                whileHover={{ scale: 1.05, y: -3 }} 
                whileTap={{ scale: 0.95 }} 
                onClick={() => { playSound('click'); setIsAutoPlay(!isAutoPlay); }} 
                className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl border transition-all duration-300 flex items-center justify-center backdrop-blur-sm shadow-lg ${isAutoPlay ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50 shadow-yellow-500/20' : 'bg-gray-800/80 text-gray-300 border-gray-700/50 hover:bg-gray-700/80 hover:border-gray-600/60'}`}
            >
                {isAutoPlay ? <Pause size={14} className="sm:w-[18px] sm:h-[18px]" /> : <Play size={14} className="sm:w-[18px] sm:h-[18px]" />}
            </motion.button>
            <motion.button 
                whileHover={{ scale: 1.05, y: -3 }} 
                whileTap={{ scale: 0.95 }} 
                onClick={() => { setIsMuted(!isMuted); if (isMuted) playSound('success'); }} 
                className="w-10 h-10 sm:w-14 sm:h-14 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:bg-gray-700/80 hover:border-gray-600/60 transition-all duration-300 flex items-center justify-center shadow-lg"
            >
                {isMuted ? <VolumeX size={14} className="sm:w-[18px] sm:h-[18px] text-gray-400" /> : <Volume2 size={14} className="sm:w-[18px] sm:h-[18px] text-gray-300" />}
            </motion.button>
        </motion.div>
    );
};

// MOBILE-OPTIMIZED Movie Card Component
const CinematicMovieCard = React.memo(({ movie, rank, isActive }) => {
    const { playSound } = React.useContext(CinematicContext);
    const [isHovered, setIsHovered] = useState(false);
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId] || {};

    return (
        <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: -40 }} 
            transition={{ duration: 0.6, ease: "easeOut" }} 
            className="relative w-full h-full group flex flex-col items-center px-2 sm:px-4" 
            onMouseEnter={() => { setIsHovered(true); playSound('hover'); }} 
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="rounded-xl mb-3 sm:mb-6 lg:mb-8" style={{ perspective: '1200px' }}>
                <motion.div 
                    className="relative w-48 h-72 sm:w-64 sm:h-96 md:w-80 md:h-[480px] lg:w-96 lg:h-[576px] overflow-hidden rounded-xl shadow-2xl transition-all duration-500 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50" 
                    whileHover={{ 
                        scale: 1.02, 
                        rotateY: 4, 
                        boxShadow: `0 20px 40px rgba(0,0,0,0.6), 0 0 30px ${movieInfo.dominantColor || '#ca8a04'}20` 
                    }} 
                    whileTap={{ scale: 0.98 }}
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    <TMDBMoviePoster movie={movie} className="w-full h-full" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-xl" />
                    
                    {/* Mobile-Optimized Rank Badge */}
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3">
                        <motion.div 
                            className={`w-8 h-8 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl backdrop-blur-xl border flex items-center justify-center text-xs sm:text-sm font-light ${rank === 10 ? 'bg-gradient-to-br from-yellow-500/30 to-yellow-600/20 text-yellow-200 border-yellow-400/50 shadow-lg shadow-yellow-500/30' : 'bg-gray-800/90 text-gray-200 border-gray-700/50'}`} 
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.9 }}
                        >
                            {rank === 10 ? <Crown size={12} className="sm:w-4 sm:h-4 lg:w-5 lg:h-5" /> : rank}
                        </motion.div>
                    </div>
                    
                    {/* Mobile-Optimized Complexity Badge */}
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
                        <motion.div 
                            className="px-2 py-1 sm:px-3 sm:py-1 bg-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-lg text-xs font-light tracking-wider uppercase" 
                            style={{ color: movieInfo.dominantColor || '#ca8a04', borderColor: `${movieInfo.dominantColor || '#ca8a04'}40` }} 
                            initial={{ opacity: 0, scale: 0.8 }} 
                            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
                        >
                            {movieInfo.complexityLevel}
                        </motion.div>
                    </div>
                    
                    {/* Mobile-Optimized Rating Badge */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }} 
                        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -30 }} 
                        className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-3 sm:py-2 bg-gray-800/90 backdrop-blur-xl border border-gray-700/50 rounded-lg"
                    >
                        <Star size={10} className="sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-yellow-400 fill-current" />
                        <span className="text-gray-200 text-xs sm:text-sm font-light">{movieInfo.rating}</span>
                    </motion.div>
                </motion.div>
            </div>
            
            {/* Mobile-Optimized Movie Info */}
            <div className="text-center space-y-2 sm:space-y-3 lg:space-y-4 z-10 max-w-sm px-2 sm:px-4">
                <motion.h2 
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-wide text-gray-100 leading-tight" 
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    whileHover={{ scale: 1.02 }}
                >
                    {movie.Title}
                </motion.h2>
                <div className="text-gray-400 text-xs sm:text-sm font-light">
                    {movie.year} • {movie.genre} • {movie.runtime}min
                </div>
                <motion.p 
                    className="text-gray-300/80 text-xs sm:text-sm leading-relaxed font-light tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-500"
                    initial={{ height: 0 }}
                    animate={{ height: isHovered ? 'auto' : 0 }}
                >
                    {STRATEGIC_TAGLINES[movie.tmdbId]}
                </motion.p>
            </div>
        </motion.div>
    );
});

// MOBILE-OPTIMIZED DNA Helix Component
const StrategicDNAHelix = React.memo(({ dna, dominantColor, className = "" }) => {
    if (!dna) return null;
    const total = Object.values(dna).reduce((sum, val) => sum + val, 0);
    const genreData = Object.entries(dna).map(([genre, percentage]) => ({ 
        genre, 
        percentage, 
        color: CINEMATIC_COLORS[genre] || dominantColor, 
        normalizedPercentage: (percentage / total) * 100 
    }));

    return (
        <motion.div 
            className={`mb-8 sm:mb-12 ${className}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
                <div className="relative w-24 h-64 sm:w-32 sm:h-80 lg:w-36 lg:h-96 flex-shrink-0 bg-gradient-to-b from-gray-800/40 to-gray-900/60 rounded-xl p-3 sm:p-4 lg:p-6 border border-gray-700/50 shadow-2xl backdrop-blur-sm">
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-l-2 border-yellow-400/30"></div>
                    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 w-3 h-3 sm:w-4 sm:h-4 border-t-2 border-r-2 border-yellow-400/30"></div>
                    <div className="absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-l-2 border-yellow-400/30"></div>
                    <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-3 h-3 sm:w-4 sm:h-4 border-b-2 border-r-2 border-yellow-400/30"></div>
                    <svg viewBox="0 0 120 320" className="w-full h-full relative z-10">
                        <defs>
                            <linearGradient id="strategicHelix" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#ca8a04" stopOpacity="0.9" />
                                <stop offset="25%" stopColor="#a16207" stopOpacity="0.8" />
                                <stop offset="50%" stopColor="#854d0e" stopOpacity="0.9" />
                                <stop offset="75%" stopColor="#a16207" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#ca8a04" stopOpacity="0.7" />
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
                            d="M 60 30 Q 30 80, 60 130 Q 90 180, 60 230 Q 30 280, 60 320" 
                            stroke="url(#strategicHelix)" 
                            strokeWidth="2" 
                            fill="none" 
                            filter="url(#strategicGlow)" 
                            initial={{ pathLength: 0 }} 
                            animate={{ pathLength: 1 }} 
                            transition={{ duration: 2.5, ease: "easeInOut" }} 
                        />
                        <motion.path 
                            d="M 60 30 Q 90 80, 60 130 Q 30 180, 60 230 Q 90 280, 60 320" 
                            stroke="url(#strategicHelix)" 
                            strokeWidth="2" 
                            fill="none" 
                            filter="url(#strategicGlow)" 
                            initial={{ pathLength: 0 }} 
                            animate={{ pathLength: 1 }} 
                            transition={{ duration: 2.5, delay: 0.4, ease: "easeInOut" }} 
                        />
                        {genreData.map((genreInfo, index) => {
                            const count = Math.round((genreInfo.percentage / total) * 15);
                            return Array(count).fill().map((_, i) => {
                                const y = 40 + (index * count + i) * 12;
                                if (y > 300) return null;
                                const angle = (index * count + i) * 20;
                                const x1 = 60 + Math.cos(angle * Math.PI / 180) * 20;
                                const x2 = 60 - Math.cos(angle * Math.PI / 180) * 20;
                                return (
                                    <g key={`${genreInfo.genre}-${i}`}>
                                        <motion.line 
                                            x1={x1} y1={y} x2={x2} y2={y} 
                                            stroke={genreInfo.color} 
                                            strokeWidth="2" 
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
                                                cx={x1} cy={y} r="2.5" 
                                                fill={genreInfo.color} 
                                                filter="url(#strategicGlow)" 
                                                className="cursor-help" 
                                                opacity="0.95"
                                            >
                                                <title>{genreInfo.genre}: {genreInfo.percentage}%</title>
                                            </circle>
                                            <circle 
                                                cx={x2} cy={y} r="2.5" 
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
                <div className="flex-1 space-y-6 sm:space-y-8 w-full">
                    <motion.div 
                        className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0" 
                        initial={{ opacity: 0, x: -40 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ delay: 0.8 }}
                    >
                        <h4 className="text-xl sm:text-2xl font-light text-gray-100 flex items-center gap-3 sm:gap-4 tracking-wide">
                            <motion.div 
                                animate={{ rotate: 360 }} 
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }} 
                                className="text-2xl sm:text-3xl"
                            >
                                🧬
                            </motion.div>
                            CINEMATIC DNA
                        </h4>
                        <div className="text-xs text-gray-400 flex items-center gap-2 sm:gap-3 tracking-wider uppercase">
                            <BarChart3 size={14} className="sm:w-4 sm:h-4" />
                            Genre Analysis
                        </div>
                    </motion.div>
                    <div className="space-y-4 sm:space-y-6">
                        {genreData.map(({ genre, percentage, color }, index) => (
                            <motion.div 
                                key={genre} 
                                initial={{ opacity: 0, x: -50 }} 
                                animate={{ opacity: 1, x: 0 }} 
                                transition={{ delay: 1.4 + index * 0.15, duration: 0.6 }} 
                                className="group flex items-center justify-between p-3 sm:p-5 hover:bg-gray-800/30 rounded-xl transition-all duration-400 border border-transparent hover:border-gray-700/40"
                            >
                                <div className="flex items-center gap-4 sm:gap-6">
                                    <motion.div 
                                        className="relative w-4 h-4 sm:w-5 sm:h-5 rounded-full shadow-lg border border-gray-600/30" 
                                        style={{ backgroundColor: color }} 
                                        whileHover={{ scale: 1.4 }} 
                                        animate={{ 
                                            boxShadow: [
                                                `0 0 0px ${color}`, 
                                                `0 0 25px ${color}30`, 
                                                `0 0 0px ${color}`
                                            ] 
                                        }} 
                                        transition={{ 
                                            boxShadow: { duration: 4, repeat: Infinity }, 
                                            scale: { duration: 0.3 } 
                                        }}
                                    >
                                        <motion.div 
                                            className="absolute inset-0 rounded-full" 
                                            style={{ backgroundColor: color }} 
                                            animate={{ scale: [1, 2, 1], opacity: [0, 0.5, 0] }} 
                                            transition={{ duration: 3, repeat: Infinity, delay: index * 0.6 }} 
                                        />
                                    </motion.div>
                                    <span className="text-gray-200 font-light group-hover:text-gray-100 transition-colors text-base sm:text-lg tracking-wide">
                                        {genre}
                                    </span>
                                </div>
                                <motion.span 
                                    className="text-gray-300/90 font-light text-lg sm:text-xl tracking-wider" 
                                    animate={{ 
                                        color: ['rgba(203, 213, 225, 0.9)', color, 'rgba(203, 213, 225, 0.9)'], 
                                        scale: [1, 1.05, 1] 
                                    }} 
                                    transition={{ duration: 5, repeat: Infinity, delay: index * 1 }}
                                >
                                    {percentage}%
                                </motion.span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
});

// MOBILE-OPTIMIZED Movie Details Section with ALL components
const MovieDetailsSection = React.memo(({ movie }) => {
    const movieInfo = COMPLETE_MOVIE_DATA[movie.tmdbId];
    const sensitiveData = SENSITIVE_TIMELINES[movie.tmdbId];

    if (!movie || !movieInfo) return null;

    // MOBILE-OPTIMIZED Mind Bending Index Component
    const StrategicMindBendingIndex = () => {
        const getComplexityColor = (level) => {
            switch(level) {
                case "EXTREME": return "#dc2626";
                case "HIGH": return "#ea580c";
                case "MEDIUM": return "#16a34a";
                default: return "#6b7280";
            }
        };
        
        const getComplexityIcon = (level) => {
            switch(level) {
                case "EXTREME": return <Crown className="w-6 h-6 sm:w-8 sm:h-8" />;
                case "HIGH": return <Award className="w-6 h-6 sm:w-8 sm:h-8" />;
                case "MEDIUM": return <Star className="w-6 h-6 sm:w-8 sm:h-8" />;
                default: return <Brain className="w-6 h-6 sm:w-8 sm:h-8" />;
            }
        };

        return (
            <motion.div 
                className="mb-8 sm:mb-12 bg-gradient-to-br from-gray-800/40 to-gray-900/60 rounded-xl border border-gray-700/50 p-4 sm:p-8 shadow-2xl backdrop-blur-sm relative overflow-hidden" 
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.8 }} 
                whileHover={{ scale: 1.01 }}
            >
                <div className="absolute top-2 left-2 sm:top-4 sm:left-4 w-3 h-3 sm:w-5 sm:h-5 border-t-2 border-l-2 border-yellow-400/40"></div>
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-3 h-3 sm:w-5 sm:h-5 border-t-2 border-r-2 border-yellow-400/40"></div>
                <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-3 h-3 sm:w-5 sm:h-5 border-b-2 border-l-2 border-yellow-400/40"></div>
                <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-3 h-3 sm:w-5 sm:h-5 border-b-2 border-r-2 border-yellow-400/40"></div>
                <div className="flex flex-col sm:flex-row items-start sm:items-start justify-between mb-6 sm:mb-8 gap-4 sm:gap-6">
                    <div className="flex items-center gap-4 sm:gap-6">
                        <h4 className="text-xl sm:text-2xl font-light text-gray-100 flex items-center gap-3 sm:gap-4 tracking-wide">
                            <motion.div 
                                style={{ color: getComplexityColor(movieInfo.complexityLevel) }} 
                                animate={{ rotate: 360 }} 
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            >
                                {getComplexityIcon(movieInfo.complexityLevel)}
                            </motion.div>
                            COMPLEXITY SCORE
                        </h4>
                    </div>
                    <div className="grid grid-cols-3 gap-3 sm:gap-6 text-center w-full sm:w-auto">
                        <div>
                            <motion.div 
                                className="text-2xl sm:text-3xl font-extralight mb-1 tracking-wider text-gray-200" 
                                animate={{ 
                                    textShadow: [
                                        `0 0 0px ${getComplexityColor(movieInfo.complexityLevel)}00`, 
                                        `0 0 20px ${getComplexityColor(movieInfo.complexityLevel)}40`, 
                                        `0 0 0px ${getComplexityColor(movieInfo.complexityLevel)}00`
                                    ] 
                                }} 
                                transition={{ duration: 4, repeat: Infinity }}
                            >
                                {movieInfo.mindBendingIndex}
                            </motion.div>
                            <div className="text-xs text-gray-400 font-light tracking-wide uppercase">
                                Mind-Bending Index
                            </div>
                        </div>
                        <div>
                            <div className="text-2xl sm:text-3xl font-extralight mb-1 tracking-wider text-gray-200">
                                {movieInfo.rating}
                            </div>
                            <div className="text-xs text-gray-400 font-light tracking-wide uppercase">
                                IMDb Rating
                            </div>
                        </div>
                        <div>
                            <div className="text-2xl sm:text-3xl font-extralight mb-1 tracking-wider text-gray-200">
                                {movieInfo.criticsScore}%
                            </div>
                            <div className="text-xs text-gray-400 font-light tracking-wide uppercase">
                                Critics Score
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-4 sm:space-y-6">
                    <div>
                        <div className="flex items-center justify-between mb-2 sm:mb-3">
                            <span className="text-sm text-gray-300 font-light tracking-wider uppercase">
                                Cognitive Distortion Level
                            </span>
                            <span 
                                className="text-sm font-light px-3 py-1 sm:px-4 sm:py-2 rounded-lg border backdrop-blur-sm tracking-wider uppercase" 
                                style={{ 
                                    color: getComplexityColor(movieInfo.complexityLevel), 
                                    borderColor: getComplexityColor(movieInfo.complexityLevel), 
                                    backgroundColor: `${getComplexityColor(movieInfo.complexityLevel)}15` 
                                }}
                            >
                                {movieInfo.complexityLevel}
                            </span>
                        </div>
                        <div className="relative">
                            <div className="w-full h-2 sm:h-3 bg-gray-800/60 rounded-full overflow-hidden border border-gray-700/50">
                                <motion.div 
                                    className="h-full rounded-full relative" 
                                    style={{ backgroundColor: getComplexityColor(movieInfo.complexityLevel) }} 
                                    initial={{ width: 0 }} 
                                    animate={{ width: `${movieInfo.mindBendingIndex}%` }} 
                                    transition={{ duration: 2.5, ease: "easeOut" }}
                                >
                                    <motion.div 
                                        className="absolute inset-0 bg-white/20 rounded-full" 
                                        animate={{ x: ['-100%', '100%'] }} 
                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} 
                                    />
                                </motion.div>
                            </div>
                            <div className="absolute -top-1 sm:-top-2 left-0 w-full flex justify-between">
                                {[25, 50, 75].map(mark => (
                                    <div 
                                        key={mark} 
                                        className="w-0.5 sm:w-1 h-4 sm:h-7 bg-yellow-400/30 rounded-full" 
                                        style={{ left: `${mark}%` }} 
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="text-gray-300/90 text-sm font-light leading-relaxed tracking-wide">
                        {movieInfo.mindBendingIndex >= 90 && "A transcendent masterpiece that redefines narrative complexity, requiring multiple viewings for complete comprehension."}
                        {movieInfo.mindBendingIndex >= 80 && movieInfo.mindBendingIndex < 90 && "Sophisticated cinematic storytelling with advanced non-linear elements and reality-bending concepts."}
                        {movieInfo.mindBendingIndex >= 70 && movieInfo.mindBendingIndex < 80 && "Thoughtfully complex narrative structure with engaging mind-bending elements throughout."}
                        {movieInfo.mindBendingIndex < 70 && "Accessible complexity with subtle mind-bending elements that reward careful viewing."}
                    </div>
                </div>
            </motion.div>
        );
    };

    return (
        <motion.div
            className="space-y-8 sm:space-y-12 mt-12 sm:mt-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            {/* Mobile-Optimized SEO Movie Title & Basic Info */}
            <div className="text-center space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-gray-100" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {movie.Title} ({movie.year}) - Like Inception
                </h2>
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-gray-400 text-sm sm:text-base">
                    <span>Directed by {movieInfo.director}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{movie.genre}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{movie.runtime} min</span>
                </div>
                <p className="text-lg sm:text-xl text-yellow-400/90 font-light tracking-wide italic max-w-2xl mx-auto">
                    "{STRATEGIC_QUOTES[movie.tmdbId]}"
                </p>
                <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed text-sm sm:text-base">
                    {movieInfo.seoDescription}
                </p>
            </div>

            {/* Mobile-Optimized Cast & Director Info */}
            <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <div className="p-4 sm:p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
                    <h3 className="text-base sm:text-lg font-light text-yellow-300 mb-3 sm:mb-4 flex items-center gap-2">
                        <Users size={16} className="sm:w-[18px] sm:h-[18px]" />
                        Director & Cast
                    </h3>
                    <div className="space-y-3">
                        <div>
                            <span className="text-gray-400 text-sm">Directed by:</span>
                            <p className="text-gray-200 font-medium">{movieInfo.director}</p>
                        </div>
                        <div>
                            <span className="text-gray-400 text-sm">Starring:</span>
                            <p className="text-gray-200 text-sm sm:text-base">{movieInfo.cast?.join(', ')}</p>
                        </div>
                    </div>
                </div>

                <div className="p-4 sm:p-6 bg-gray-800/30 rounded-xl border border-gray-700/50">
                    <h3 className="text-base sm:text-lg font-light text-yellow-300 mb-3 sm:mb-4 flex items-center gap-2">
                        <Film size={16} className="sm:w-[18px] sm:h-[18px]" />
                        Production Details
                    </h3>
                    <div className="space-y-3">
                        <div>
                            <span className="text-gray-400 text-sm">Box Office:</span>
                            <p className="text-gray-200 font-medium">{movieInfo.boxOffice}</p>
                        </div>
                        <div>
                            <span className="text-gray-400 text-sm">Budget:</span>
                            <p className="text-gray-200">{movieInfo.budget}</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Mobile-Optimized Synopsis with SEO text */}
            <motion.div 
                className="p-4 sm:p-6 bg-gray-800/30 rounded-xl border-l-4 border-yellow-400"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                    <strong className="text-yellow-400">{movie.Title}</strong> is a {movie.genre.toLowerCase()} film from {movie.year} 
                    directed by {movieInfo.director}. With a mind-bending complexity score of{' '}
                    <strong className="text-yellow-400">{movieInfo.mindBendingIndex}/100</strong>, this{' '}
                    {movieInfo.complexityLevel.toLowerCase()} complexity film offers{' '}
                    {movieInfo.synopsis}
                </p>
                
                {/* SEO Genre Composition Text */}
                <p className="text-gray-300 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">
                    <strong>Genre Composition:</strong> {movieInfo.genreComposition}
                </p>
                
                {/* SEO Intensity Peak Text */}
                <p className="text-gray-300 mt-2 leading-relaxed text-sm sm:text-base">
                    <strong>Intensity Peak:</strong> {movieInfo.intensityPeak}
                </p>
            </motion.div>

            {/* Where to Watch */}
            <WhereToWatchSection movie={movie} />

            {/* ✅ ENHANCED SENSITIVE CONTENT TIMELINE SECTION */}
            <SensitiveContentTimelineSection movie={movie} />

            {/* Complexity Score */}
            <StrategicMindBendingIndex />

            {/* Intensity Graph WITH VISIBLE DOTS */}
            <EnhancedIntensityGraph 
                scenes={movieInfo.scenes}
                dominantColor={movieInfo.dominantColor}
            />

            {/* DNA Helix */}
            <StrategicDNAHelix 
                dna={movieInfo.dna}
                dominantColor={movieInfo.dominantColor}
            />

            {/* Comments & Ratings */}
            <EnhancedCommentsRatingSection movie={movie} />

            {/* FAQ Section */}
            <SEOFAQSection movie={movie} />
        </motion.div>
    );
});

// MOBILE-OPTIMIZED Main Collection Page Component
const UltraCinematicCollectionPage = () => {
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const isClient = useIsClient();

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    const nextMovie = useCallback(() => {
        setCurrentMovieIndex((prev) => (prev + 1) % COMPLETE_MOVIE_DATABASE.length);
    }, []);

    const prevMovie = useCallback(() => {
        setCurrentMovieIndex((prev) => (prev - 1 + COMPLETE_MOVIE_DATABASE.length) % COMPLETE_MOVIE_DATABASE.length);
    }, []);
   
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'ArrowLeft') prevMovie();
            if (e.key === 'ArrowRight') nextMovie();
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [nextMovie, prevMovie]);

    if (!isClient) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <CinematicLoader />
            </div>
        );
    }
       
    const currentMovie = COMPLETE_MOVIE_DATABASE[currentMovieIndex];

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden">
            <CinematicBackground />
            <StrategicControls />
            <BackToHomepageButton />
            <AnimatePresence mode="wait">
                {isLoading ? (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="min-h-screen flex items-center justify-center"
                    >
                        <CinematicLoader />
                    </motion.div>
                ) : (
                    <motion.div
                        key="collection"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="relative z-10"
                    >
                        <SEOHead movie={currentMovie} />
                        
                        <div className="container mx-auto px-3 sm:px-6 py-8 sm:py-12">
                            <CinematicHeader />

                            <div className="relative flex items-center justify-center min-h-[70vh] sm:min-h-[80vh]">
                                {/* Mobile-Optimized Navigation Buttons */}
                                <motion.button
                                    onClick={prevMovie}
                                    className="absolute left-2 sm:left-8 z-20 w-12 h-12 sm:w-16 sm:h-16 bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-700/50 hover:bg-gray-700/80 hover:border-gray-600/60 transition-all duration-300 flex items-center justify-center"
                                    whileHover={{ scale: 1.1, x: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <ChevronLeft size={20} className="sm:w-6 sm:h-6 text-gray-300" />
                                </motion.button>

                                <motion.button
                                    onClick={nextMovie}
                                    className="absolute right-2 sm:right-8 z-20 w-12 h-12 sm:w-16 sm:h-16 bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-700/50 hover:bg-gray-700/80 hover:border-gray-600/60 transition-all duration-300 flex items-center justify-center"
                                    whileHover={{ scale: 1.1, x: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <ChevronRight size={20} className="sm:w-6 sm:h-6 text-gray-300" />
                                </motion.button>

                                {/* Movie Display - ONLY ONE POSTER AT A TIME */}
                                <AnimatePresence mode="wait">
                                    <CinematicMovieCard
                                        key={currentMovieIndex}
                                        movie={currentMovie}
                                        rank={currentMovieIndex + 1}
                                        isActive={true}
                                    />
                                </AnimatePresence>
                            </div>

                            {/* Movie Details Section - Below Poster */}
                            <MovieDetailsSection movie={currentMovie} />

                            {/* Mobile-Optimized Movie Counter */}
                            <motion.div
                                className="flex justify-center mt-8 sm:mt-12"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 3.5 }}
                            >
                                <div className="flex items-center gap-3 sm:gap-4 px-4 py-2 sm:px-6 sm:py-3 bg-gray-800/40 backdrop-blur-sm rounded-full border border-gray-700/50">
                                    <span className="text-yellow-400 font-light text-sm sm:text-base">
                                        #{currentMovieIndex + 1}
                                    </span>
                                    <div className="w-12 sm:w-16 h-1 bg-gray-700 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-yellow-400 rounded-full"
                                            style={{ width: `${((currentMovieIndex + 1) / COMPLETE_MOVIE_DATABASE.length) * 100}%` }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </div>
                                    <span className="text-gray-400 font-light text-xs sm:text-sm">
                                        <span className="hidden sm:inline">of Top 10 Movies Like Inception</span>
                                        <span className="sm:hidden">of 10</span>
                                    </span>
                                </div>
                            </motion.div>

                            {/* Mobile-Optimized Footer */}
                            <motion.footer
                                className="mt-20 sm:mt-32 pt-8 sm:pt-12 border-t border-gray-800/50 text-center"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 4.5 }}
                            >
                                <p className="text-gray-500 text-xs sm:text-sm font-light tracking-wide">
                                    Curated movies like Inception for film enthusiasts, by film enthusiasts. Community reviews and ratings included.
                                </p>
                                <div className="mt-3 sm:mt-4 flex justify-center items-center gap-6 sm:gap-8">
                                    <div className="w-8 sm:w-12 h-px bg-gray-700"></div>
                                    <div className="text-yellow-400/60 text-xs tracking-[0.3em] uppercase">
                                        Mind-Bending Cinema Collection
                                    </div>
                                    <div className="w-8 sm:w-12 h-px bg-gray-700"></div>
                                </div>
                            </motion.footer>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
