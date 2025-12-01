// pages/collection/[slug].js - SEO OPTIMIZED WITH THRILLER COLLECTION SUPPORT ✅

import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Crown, Star, MessageSquare, Volume2, VolumeX, Play, Pause, Menu, X, Home, Eye, MousePointer, TrendingUp, Users, Search, Brain, Zap, Film, Award, Mountain, Shield } from 'lucide-react';
import { COMPLETE_MOVIE_DATABASE as SURVIVAL_DATABASE, COMPLETE_MOVIE_DATA as SURVIVAL_DATA } from '../../utils/survivalMovieData';
import DRAMA_MOVIES from '../../utils/dramaMovieData';
import { THRILLER_MOVIES } from '../../utils/thrillerMovieData';
import { MYSTERY_THRILLER_MOVIES } from '../../utils/mysteryThrillerMovieData'; 
import { DETECTIVE_THRILLER_MOVIES } from '../../utils/detectiveThrillerMovieData';
import { PSYCH_THRILLER_MOVIES } from '../../utils/psychologicalThrillerMovieData'; 
import { CRIME_THRILLER_MOVIES } from '../../utils/crimeThrillerMovieData';
import { HEIST_THRILLER_MOVIES } from '../../utils/heistThrillerMovieData';
import { TIME_TRAVEL_MOVIES } from '../../utils/timeTravelMovieData';  // ✅ TIME TRAVEL ADDED
import { SCI_FI_MOVIES } from '../../utils/sciFiMovieData';
// Components
import CinematicBackground from '../../components/CinematicBackground';
import StrategicControls from '../../components/StrategicControls';
import CinematicMovieCard from '../../components/CinematicMovieCard';

// Data
import { COLLECTIONS, getAllCollectionSlugs, getCollectionBySlug } from '../../data/collections';
import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from '../../utils/movieData';


// Safe property getters
const getMovieTitle = (movie) => movie?.Title || movie?.title || movie?.name || 'Unknown Movie';
const getMovieYear = (movie) => movie?.Year || movie?.year || movie?.releaseYear || '2024';
const getMovieGenre = (movie) => {
    const genre = movie?.Genre || movie?.genre || movie?.genres || 'Drama';
    return typeof genre === 'string' ? genre.split(',')[0].trim() : 'Drama';
};
const getMovieRuntime = (movie) => movie?.Runtime || movie?.runtime || '120 min';

// LOGO COMPONENT
const TopLeftLogo = () => (
    <motion.div 
        className="fixed top-4 left-4 sm:top-6 sm:left-6 z-50"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
    >
        <Link href="/" className="flex items-center justify-start">
            <div className="w-32 h-16 sm:w-40 sm:h-20 md:w-48 md:h-24 flex items-center justify-start hover:scale-105 transition-transform duration-300">
              <Image
  src="/filmiway-logo.svg"
  alt="Filmiway"
  width={192}
  height={96}
  priority={true}
  className="w-full h-full object-contain"
/>
            </div>
        </Link>
    </motion.div>
);

// HOMEPAGE BUTTON
const HomepageButton = () => (
    <motion.div 
        className="fixed top-24 left-4 sm:top-32 sm:left-6 md:top-36 md:left-6 z-50"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
    >
        <Link 
            href="/" 
            className="flex items-center gap-2 px-4 py-2 bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:bg-gray-800/90 hover:border-yellow-400/50 transition-all duration-300"
        >
            <Home className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 text-sm font-medium">Home</span>
        </Link>
    </motion.div>
);

// 🔥 COLLECTION PAGE COMPONENT WITH ALL 7 COLLECTIONS INCLUDING MYSTERY THRILLER
const CollectionPage = ({ collection, movies }) => {
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isMuted, setIsMuted] = useState(false);
    const [isAutoPlay, setIsAutoPlay] = useState(false);

    // Handle return from movie detail page + position tracking
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const returningFromMovie = sessionStorage.getItem('returningFromMovie');
            const returnToPosition = sessionStorage.getItem('returnToPosition');
            
            if (returningFromMovie && returnToPosition) {
                setCurrentMovieIndex(parseInt(returnToPosition));
                sessionStorage.removeItem('returningFromMovie');
                sessionStorage.removeItem('returnToPosition');
            }
        }
        
        const timer = setTimeout(() => setIsLoading(false), 2500);
        return () => clearTimeout(timer);
    }, []);
// 🔥 COLLECTION-SPECIFIC CONTENT FUNCTION WITH SCI-FI & TIME TRAVEL ADDED
const getCollectionContent = () => {
    if (collection.slug === 'movies-like-memento') {
        return {
            badge: "Memory-Twisting Cinema",
            title: "Memento",
            description: "Dive into a curated collection of memory-twisting psychological thrillers that challenge identity and perception, ranked by memory complexity and engaging storytelling",
            selection: {
                text1: "From reverse chronology to fragmented memories, these films challenge viewers to piece together narratives just as protagonists struggle to understand their own identities and past.",
                text2: "Each memory-twisting masterpiece features protagonists battling amnesia, false memories, or temporal confusion, creating experiences that mirror the disorientation of memory loss itself."
            },
            ranking: {
                text: "Our memory complexity index evaluates narrative structure, identity confusion, and the sophistication of memory-related storytelling techniques used throughout each film.",
                points: [
                    "Non-linear narrative complexity",
                    "Identity confusion depth", 
                    "Memory manipulation techniques",
                    "Psychological impact intensity"
                ]
            },
            experience: {
                text1: "Whether you're seeking intricate plot structures or psychological depth, this collection delivers cinema's most sophisticated explorations of memory and identity.",
                text2: "Each film has been selected for its ability to create genuine confusion and revelation, mirroring the experience of characters struggling with fractured memories and uncertain identities."
            }
        };
    } else if (collection.slug === 'movies-like-inception') {
        return {
            badge: "Mind-Bending Cinema",
            title: "Inception", 
            description: "Dive into a curated collection of reality-bending masterpieces that challenge perception and ignite the mind, ranked by complexity and engaging storytelling",
            selection: {
                text1: "From multi-layered dreamscapes to parallel realities, these films push the boundaries of narrative structure while maintaining emotional depth and philosophical weight.",
                text2: "Each mind-bending masterpiece features complex protagonists navigating impossible scenarios, time paradoxes, and reality distortions that challenge everything you think you know."
            },
            ranking: {
                text: "Our mind-bending index evaluates narrative complexity, reality distortion, and the sophistication of conceptual storytelling techniques used throughout each film.",
                points: [
                    "Conceptual complexity depth",
                    "Reality distortion intensity",
                    "Narrative structure innovation", 
                    "Philosophical impact weight"
                ]
            },
            experience: {
                text1: "Whether you're seeking intricate plot mechanics or philosophical depth, this collection delivers cinema's most ambitious reality-bending experiences.",
                text2: "Each film has been selected for its ability to create lasting impact, with concepts that continue revealing new layers upon repeated viewings and deeper analysis."
            }
        };
    } else if (collection.slug === 'movies-like-shutter-island') {
        return {
            badge: "Psychological Thriller Cinema",
            title: "Shutter Island",
            description: "Dive into a curated collection of psychological thrillers with unreliable narrators, identity crises, and shocking revelations that redefine everything you thought you knew",
            selection: {
                text1: "From unreliable narrators to shocking plot twists, these films master the art of psychological manipulation while maintaining gripping thriller elements and emotional authenticity.",
                text2: "Each psychological masterpiece features protagonists whose perception of reality becomes increasingly questionable, leading viewers down paths of doubt, paranoia, and ultimate revelation."
            },
            ranking: {
                text: "Our psychological complexity index evaluates narrative deception, identity questioning, and the sophistication of psychological thriller techniques throughout each film.",
                points: [
                    "Unreliable narrator mastery",
                    "Identity crisis complexity",
                    "Plot twist sophistication",
                    "Psychological manipulation depth"
                ]
            },
            experience: {
                text1: "Whether you're seeking shocking revelations or psychological depth, this collection delivers cinema's most masterful explorations of identity and reality distortion.",
                text2: "Each film has been selected for its ability to completely reframe the viewing experience, with revelations that transform every previous scene into something entirely different."
            }
        };
    } else if (collection.slug === 'best-time-travel-movies') {  // ✅ TIME TRAVEL ADDED
        return {
            badge: "Temporal Paradox Cinema",
            title: "Time Travel",
            description: "Dive into a curated collection of mind-bending time travel films with causality loops, temporal paradoxes, and revolutionary physics that redefine reality.",
            selection: {
                text1: "From bootstrap paradoxes to grandfather paradoxes, these films explore the philosophical implications of time travel while maintaining thrilling narratives and emotional depth.",
                text2: "Each time travel masterpiece features protagonists wrestling with temporal mechanics, causality loops, and the consequences of altering the past, creating experiences that challenge linear thinking."
            },
            ranking: {
                text: "Our time travel complexity index evaluates temporal mechanics sophistication, paradox handling, and the depth of time travel storytelling techniques used throughout each film.",
                points: [
                    "Temporal paradox complexity",
                    "Causality loop sophistication",
                    "Time mechanics innovation",
                    "Philosophical temporal depth"
                ]
            },
            experience: {
                text1: "Whether you're seeking intricate temporal mechanics or philosophical exploration of time itself, this collection delivers cinema's most ambitious time travel experiences.",
                text2: "Each film has been selected for its ability to create lasting cerebral impact, with time travel concepts that continue revealing new temporal paradoxes upon repeated analysis."
            }
        };
    } else if (collection.slug === 'best-sci-fi-movies') {  // ✅ SCI-FI ADDED
        return {
            badge: "Visionary Science Fiction",
            title: "Sci-Fi Cinema",
            description: "Dive into a curated collection of groundbreaking science fiction films with revolutionary concepts, philosophical depth, and stunning visual spectacle that redefine the genre.",
            selection: {
                text1: "From dystopian futures to cosmic adventures, these films push the boundaries of imagination while exploring profound questions about humanity, consciousness, and existence.",
                text2: "Each sci-fi masterpiece features visionary worldbuilding, innovative concepts, and complex characters navigating extraordinary scenarios that challenge our understanding of reality and possibility."
            },
            ranking: {
                text: "Our sci-fi complexity index evaluates conceptual innovation, world-building sophistication, and the depth of speculative storytelling techniques used throughout each film.",
                points: [
                    "Conceptual innovation depth",
                    "World-building sophistication",
                    "Visual spectacle achievement",
                    "Philosophical exploration weight"
                ]
            },
            experience: {
                text1: "Whether you're seeking innovative concepts or philosophical depth, this collection delivers cinema's most visionary science fiction experiences.",
                text2: "Each film has been selected for its ability to expand imagination and challenge perspective, with concepts that continue inspiring new ways of thinking about science, technology, and humanity."
            }
        };
    } else if (collection.slug === 'best-psychological-thriller-movies') {
        return {
            badge: "Psychological Thriller Cinema",
            title: "Psychological Thriller",
            description: "Dive into a curated collection of psychological thrillers with mind-bending narratives, unreliable narrators, and chilling tensions.",
            selection: {
                text1: "These films explore the darkest reaches of the human mind, with plots filled with twists, paranoia, and complex characters.",
                text2: "Each psychological thriller invites you to unravel intricate stories where truth is elusive and perception shifts."
            },
            ranking: {
                text: "Our psychological thriller index evaluates the depth of psychological complexity, narrative deception, and tension build-up throughout each film.",
                points: [
                    "Psychological depth complexity",
                    "Narrative deception and twists",
                    "Character psychological profile",
                    "Tension and suspense intensity"
                ]
            },
            experience: {
                text1: "Whether you're seeking psychological depth or shocking revelations, this collection delivers cinema's most intense psychological thriller experiences.",
                text2: "Each film has been selected for its masterful exploration of the human psyche and its ability to keep viewers on edge from beginning to end."
            }
        };
    } else if (collection.slug === 'best-heist-thriller-movies') {
        return {
            badge: "Heist Master Cinema",
            title: "Heist Thriller",
            description: "Dive into a curated collection of expertly crafted heist thrillers with elaborate schemes, high-stakes action, and criminal masterminds.",
            selection: {
                text1: "From Ocean's Eleven to Heat, these films showcase the perfect blend of planning, execution, and unexpected twists that keep audiences engaged.",
                text2: "Each heist masterpiece features meticulous planning, brilliant execution, and the constant tension of potential failure or betrayal."
            },
            ranking: {
                text: "Our heist complexity index evaluates scheme sophistication, execution brilliance, and the depth of criminal storytelling techniques used throughout each film.",
                points: [
                    "Heist plan sophistication",
                    "Execution complexity",
                    "Criminal character depth",
                    "Suspense and tension build"
                ]
            },
            experience: {
                text1: "Whether you're seeking intricate planning or adrenaline-pumping action, this collection delivers cinema's most thrilling heist experiences.",
                text2: "Each film has been selected for its ability to maintain tension throughout while showcasing brilliantly crafted schemes and unforgettable characters."
            }
        };
    } else if (collection.slug === 'best-crime-thriller-movies') {
        return {
            badge: "Crime Thriller Cinema",
            title: "Crime Thriller",
            description: "Dive into a curated collection of gripping crime thrillers exploring moral complexity, investigative brilliance, and criminal psychology.",
            selection: {
                text1: "These films delve into the world of crime from multiple perspectives, creating complex narratives filled with ethical dilemmas and intense drama.",
                text2: "Each crime thriller features masterfully crafted investigations, complex antagonists, and the psychological cat-and-mouse games that define great crime cinema."
            },
            ranking: {
                text: "Our crime thriller index evaluates investigative complexity, moral ambiguity, and the sophistication of crime storytelling techniques throughout each film.",
                points: [
                    "Investigative complexity",
                    "Moral ambiguity depth",
                    "Criminal psychology insight",
                    "Narrative tension intensity"
                ]
            },
            experience: {
                text1: "Whether you're seeking complex investigations or moral exploration, this collection delivers cinema's most gripping crime thriller experiences.",
                text2: "Each film has been selected for its ability to explore the psychology of crime while maintaining intense narrative momentum and character development."
            }
        };
    } else if (collection.slug === 'best-detective-thriller-movies') {
        return {
            badge: "Detective Mystery Cinema",
            title: "Detective Thriller",
            description: "Dive into a curated collection of masterfully crafted detective thrillers with intricate mysteries, brilliant investigations, and shocking revelations.",
            selection: {
                text1: "From procedural brilliance to psychological depth, these films showcase detectives unraveling complex cases through intelligence, intuition, and perseverance.",
                text2: "Each detective masterpiece features layered mysteries, complex protagonists, and investigation techniques that keep audiences engaged until the final reveal."
            },
            ranking: {
                text: "Our detective thriller index evaluates mystery complexity, investigative brilliance, and the sophistication of detective storytelling throughout each film.",
                points: [
                    "Mystery intricacy depth",
                    "Detective brilliance",
                    "Investigation methodology",
                    "Revelation impact power"
                ]
            },
            experience: {
                text1: "Whether you're seeking complex mysteries or brilliant detective work, this collection delivers cinema's finest detective thriller experiences.",
                text2: "Each film has been selected for its masterful construction of intricate cases and unforgettable detective characters who captivate audiences."
            }
        };
    } else if (collection.slug === 'best-mystery-thriller-movies') {
        return {
            badge: "Mystery Thriller Cinema",
            title: "Mystery Thriller",
            description: "Dive into a curated collection of compelling mystery thrillers filled with puzzles, secrets, and shocking twists.",
            selection: {
                text1: "These films masterfully weave mysteries that challenge viewers to piece together clues and anticipate shocking revelations.",
                text2: "Each mystery thriller features intricate plots where nothing is as it seems and every clue matters in the final revelation."
            },
            ranking: {
                text: "Our mystery thriller index evaluates puzzle complexity, narrative cleverness, and the sophistication of mystery storytelling throughout each film.",
                points: [
                    "Mystery puzzle intricacy",
                    "Clue sophistication",
                    "Narrative structure cleverness",
                    "Revelation satisfaction"
                ]
            },
            experience: {
                text1: "Whether you're seeking intricate puzzles or shocking twists, this collection delivers cinema's most engaging mystery thriller experiences.",
                text2: "Each film has been selected for its ability to engage viewers intellectually while delivering satisfying and unexpected revelations."
            }
        };
    } else if (collection.slug === 'best-thriller-movies') {
        return {
            badge: "Suspense Thriller Cinema",
            title: "Thriller",
            description: "Dive into a curated collection of pulse-pounding thrillers with edge-of-your-seat suspense, intense action, and psychological depth.",
            selection: {
                text1: "From relentless pacing to psychological tension, these films deliver the ultimate adrenaline rush while exploring complex characters and moral dilemmas.",
                text2: "Each thriller masterpiece features high-stakes scenarios, unexpected twists, and the constant threat of danger that keeps audiences engaged."
            },
            ranking: {
                text: "Our thriller index evaluates suspense intensity, pacing sophistication, and the depth of thriller storytelling techniques throughout each film.",
                points: [
                    "Suspense intensity",
                    "Pacing momentum",
                    "Character psychological depth",
                    "Action sequence caliber"
                ]
            },
            experience: {
                text1: "Whether you're seeking intense suspense or psychological exploration, this collection delivers cinema's most thrilling experiences.",
                text2: "Each film has been selected for its ability to maintain constant tension while developing compelling characters and narratives."
            }
        };
    } else if (collection.slug === 'best-survival-movies') {
        return {
            badge: "Survival Cinema",
            title: "Survival",
            description: "Dive into a curated collection of intense survival films showcasing human resilience, raw nature, and the will to overcome impossible odds.",
            selection: {
                text1: "From wilderness perils to environmental catastrophes, these films capture the essence of human determination against nature's unforgiving forces.",
                text2: "Each survival masterpiece features protagonists battling elements, wildlife, and their own physical and psychological limits in pursuit of survival."
            },
            ranking: {
                text: "Our survival index evaluates environmental intensity, human resilience, and the authenticity of survival scenarios throughout each film.",
                points: [
                    "Environmental intensity",
                    "Physical challenge realism",
                    "Psychological endurance depth",
                    "Survival ingenuity display"
                ]
            },
            experience: {
                text1: "Whether you're seeking intense action or psychological exploration of human limits, this collection delivers cinema's most gripping survival experiences.",
                text2: "Each film has been selected for its raw portrayal of human resilience and the primal struggle for survival against overwhelming odds."
            }
        };
    } else if (collection.slug === 'best-drama-movies-on-netflix') {
        return {
            badge: "Award-Winning Drama",
            title: "Drama",
            description: "Dive into a curated collection of emotionally powerful dramas featuring Oscar-winning performances and deeply moving storytelling.",
            selection: {
                text1: "From intimate character studies to epic family sagas, these films showcase cinema's ability to capture the full spectrum of human emotion.",
                text2: "Each drama masterpiece features complex characters, authentic relationships, and narratives that resonate with the human experience."
            },
            ranking: {
                text: "Our drama index evaluates emotional depth, character development, and the sophistication of dramatic storytelling throughout each film.",
                points: [
                    "Emotional authenticity",
                    "Character development depth",
                    "Narrative emotional impact",
                    "Performance caliber"
                ]
            },
            experience: {
                text1: "Whether you're seeking emotional catharsis or character exploration, this collection delivers cinema's most powerful dramatic experiences.",
                text2: "Each film has been selected for its ability to move audiences through authentic human stories and unforgettable performances."
            }
        };
    } else {
        return {
            badge: collection.title,
            title: collection.title,
            description: collection.description || "Dive into a curated collection of exceptional cinema.",
            selection: {
                text1: "Expertly selected films from our comprehensive database.",
                text2: "Each selection represents the finest in cinematic storytelling and artistic achievement."
            },
            ranking: {
                text: "Our ranking system evaluates quality, impact, and viewer engagement.",
                points: [
                    "Artistic excellence",
                    "Narrative sophistication",
                    "Visual achievement",
                    "Emotional resonance"
                ]
            },
            experience: {
                text1: "Discover exceptional cinema tailored to your preferences.",
                text2: "Each film has been selected for its unique contribution to cinema."
            }
        };
    }
};


// 🔥 HEADER CONTENT WITH SCI-FI ADDED
const getHeaderContent = () => {
    if (collection.slug === 'movies-like-memento') {
        return {
            title: "Best Movies Like Memento – 10 Best Mind-Bending Thrillers You Must Watch",
            subtitle: "Memory-Twisting Psychological Thrillers with Non-Linear Storytelling Ranked by Complexity"
        };
    } else if (collection.slug === 'movies-like-inception') {
        return {
            title: "Best Movies Like Inception – 10 Best Mind-Bending Thrillers You Must Watch",
            subtitle: "Reality-Bending Sci-Fi Thrillers with Complex Narratives Ranked by Complexity"
        };
    } else if (collection.slug === 'movies-like-shutter-island') {
        return {
            title: "Best Movies Like Shutter Island – 10 Best Mind-Bending Psychological Thrillers You Must Watch",
            subtitle: "Psychological Thrillers with Unreliable Narrators & Shocking Plot Twists Ranked by Complexity"
        };
    } else if (collection.slug === 'best-crime-thriller-movies') {
        return {
            title: "10 Best Crime Thriller Movies – From Heat to The Departed",
            subtitle: "Crime Thrillers with Heists, Investigations & Moral Complexity Ranked by Crime Intensity"
        };
    } else if (collection.slug === 'best-heist-thriller-movies') {
        return {
            title: "10 Best Heist Thriller Movies – From Heat to Ocean's Eleven",
            subtitle: "Heist Thrillers with Elaborate Plans, High-Stakes Robberies & Criminal Masterminds Ranked by Heist Complexity"
        };
    } else if (collection.slug === 'best-time-travel-movies') {
        return {
            title: "10 Best Time Travel Movies – From Back to the Future to Primer",
            subtitle: "Time Travel Films with Paradoxes, Causality Loops & Temporal Complexity Ranked by Time Travel Intensity"
        };
    } else if (collection.slug === 'best-sci-fi-movies') {  // ✅ SCI-FI ADDED
        return {
            title: "10 Best Sci-Fi Movies – From Blade Runner to Interstellar",
            subtitle: "Groundbreaking Science Fiction with Visionary Concepts & Philosophical Depth Ranked by Sci-Fi Complexity"
        };
    } else if (collection.slug === 'best-psychological-thriller-movies') {
        return {
            title: "Best Psychological Thriller Movies – Top Mind-Bending Psychological Thrillers",
            subtitle: "Psychological Thrillers with Intricate Plots, Twists, and Psychological Depth Ranked by Complexity"
        };
    } else if (collection.slug === 'best-thriller-movies') {
        return {
            title: "Best Suspense Thriller Movies – 10 Best Edge-of-Your-Seat Thrillers You Must Watch",
            subtitle: "Suspense-Driven Thrillers with Intense Pacing & Plot Twists Ranked by Suspense Intensity"
        };
    } else if (collection.slug === 'best-mystery-thriller-movies') {
        return {
            title: "Best Mystery Thriller Movies – 10 Greatest Mystery Films You Must Watch",
            subtitle: "Mystery Thrillers with Clever Detective Work & Impossible Puzzles Ranked by Mystery Complexity"
        };
    } else if (collection.slug === 'best-survival-movies') {
        return {
            title: "10 Best Survival Movies of All Time – Ranked & Reviewed 2025",
            subtitle: "Human Endurance Against Nature – Wilderness, Mountains & Desert Survival Stories Ranked by Intensity"
        };
    } else if (collection.slug === 'best-drama-movies-on-netflix') {
        return {
            title: "Best Drama Movies on Netflix – 10 Award-Winning Films You Must Watch",
            subtitle: "Emotionally Powerful Dramas with Oscar-Winning Performances Streaming Now"
        };
    } else if (collection.slug === 'best-detective-thriller-movies') {
        return {
            title: "10 Best Detective Thriller Movies Like Zodiac & Prisoners",
            subtitle: "Detective Thrillers with Intricate Mysteries and Masterfully Crafted Suspense Ranked by Investigative Brilliance"
        };
    } else {
        return {
            title: `Best ${collection.title} – Top 10 Curated Collection You Must Watch`,
            subtitle: collection.description || "Exceptional Cinema Ranked by Quality"
        };
    }
};


// 🔥 LOADER CONTENT WITH SCI-FI ADDED
const getLoaderContent = () => {
    if (collection?.slug === 'movies-like-memento') {
        return {
            title: "Loading Movies Like Memento",
            description: "Curating memory-twisting psychological thrillers with community reviews and ratings"
        };
    } else if (collection?.slug === 'movies-like-inception') {
        return {
            title: "Loading Movies Like Inception", 
            description: "Curating mind-bending sci-fi thrillers with community reviews and ratings"
        };
    } else if (collection?.slug === 'movies-like-shutter-island') {
        return {
            title: "Loading Movies Like Shutter Island",
            description: "Curating psychological thrillers with unreliable narrators and shocking plot twists"
        };
    } else if (collection.slug === 'best-crime-thriller-movies') {
        return {
            title: "Loading Best Crime Thriller Movies",
            description: "Curating the greatest crime thrillers with community reviews and ratings"
        };
    } else if (collection?.slug === 'best-heist-thriller-movies') {
        return {
            title: "Loading Best Heist Thriller Movies",
            description: "Curating masterful heist thrillers with community reviews and ratings"
        };
    } else if (collection?.slug === 'best-time-travel-movies') {
        return {
            title: "Loading Best Time Travel Movies",
            description: "Curating mind-bending time travel films with community reviews and ratings"
        };
    } else if (collection?.slug === 'best-sci-fi-movies') {  // ✅ SCI-FI ADDED
        return {
            title: "Loading Best Sci-Fi Movies",
            description: "Curating visionary science fiction films with community reviews and ratings"
        };
    } else if (collection?.slug === 'best-psychological-thriller-movies') {
        return {
            title: "Loading Psychological Thriller Movies",
            description: "Curating psychological thrillers with complex narratives, tension, and mind-bending twists."
        };
    } else if (collection?.slug === 'best-detective-thriller-movies') {
        return {
            title: "Loading Best Detective Thriller Movies",
            description: "Curating the finest detective thrillers with community reviews and ratings"
        };
    } else if (collection?.slug === 'best-thriller-movies') {
        return {
            title: "Loading Best Thriller Movies",
            description: "Curating edge-of-your-seat suspense thrillers with community reviews and ratings"
        };
    } else if (collection?.slug === 'best-mystery-thriller-movies') {
        return {
            title: "Loading Best Mystery Thriller Movies",
            description: "Curating the greatest detective mystery thrillers with community reviews and ratings"
        };
    } else if (collection?.slug === 'best-survival-movies') {
        return {
            title: "Loading Best Survival Movies",
            description: "Curating the greatest survival films with community reviews and ratings"
        };
    } else if (collection?.slug === 'best-drama-movies-on-netflix') {
        return {
            title: "Loading Best Netflix Dramas",
            description: "Curating award-winning dramatic films with community reviews and ratings"
        };
    } else {
        return {
            title: "Loading Movie Collection",
            description: "Curating exceptional cinema with community reviews and ratings"
        };
    }
};




// 🔥 STATIC META CONTENT WITH SCI-FI & TIME TRAVEL ADDED
const getStaticMetaContent = () => {
    if (collection.slug === 'movies-like-memento') {
        return {
            title: "Best Movies Like Memento – 10 Best Mind-Bending Memory Loss Thrillers You Must Watch",
            description: "Stop scrolling! This is the most advanced handpicked list on the internet of 10 memory-twisting thrillers like Memento including *The Usual Suspects*. Carefully analyzed for shocking twists, expert storytelling, and unforgettable endings—perfect for true psychological thriller fans!",
            keywords: "movies like memento, films similar to memento, memory loss movies, psychological thrillers, non linear storytelling, christopher nolan memento, identity crisis films, memento similar movies, memory twisting films, amnesia movies, reverse chronology films, unreliable narrator movies, the usual suspects",
            ogTitle: "The Most Advanced List on the Internet – Top 10 Mind-Bending Movies Like Memento 🧠",
            twitterTitle: "🧠 The Most Advanced Handpicked List – Top 10 Movies Like Memento",
            progressText: `of Top ${movies.length} Movies Like Memento`
        };
    } else if (collection.slug === 'movies-like-inception') {
        return {
            title: "Best Movies Like Inception – 10 Best Mind-Bending Thrillers You Must Watch",
            description: "Stop scrolling! This is the most advanced handpicked list on the internet of 10 mind-bending thrillers like Inception including *The Usual Suspects*. Carefully analyzed for shocking twists, layered narratives, and expert storytelling—perfect for true psychological thriller fans!",
            keywords: "movies like inception, films similar to inception, mind bending movies, psychological thrillers, complex movies with twists, christopher nolan movies, reality bending films, layered narrative films, inception similar movies, mind bending thrillers, dream logic movies, the usual suspects",
            ogTitle: "The Most Advanced List on the Internet – 10 Best Mind-Bending Movies Like Inception 🧠",
            twitterTitle: "🧠 The Most Advanced Handpicked List – 10 Best Movies Like Inception",
            progressText: `of Top ${movies.length} Movies Like Inception`
        };
    } else if (collection.slug === 'movies-like-shutter-island') {
        return {
            title: "Best Movies Like Shutter Island – 10 Best Mind-Bending Psychological Thrillers You Must Watch",
            description: "Stop scrolling! This is the most advanced handpicked list on the internet of 10 mind-bending thrillers like Shutter Island including *The Usual Suspects*. Carefully analyzed for shocking twists, unreliable narrators, and expert storytelling—perfect for true psychological thriller fans!",
            keywords: "movies like shutter island, films similar to shutter island, psychological thrillers, unreliable narrator films, identity crisis movies, plot twist movies, martin scorsese shutter island, psychological horror films, reality distortion movies, memory manipulation films, shocking revelations movies, the usual suspects",
            ogTitle: "The Most Advanced List on the Internet – 10 Best Mind-Bending Movies Like Shutter Island 🧠",
            twitterTitle: "🧠 The Most Advanced Handpicked List – 10 Best Movies Like Shutter Island",
            progressText: `of Top ${movies.length} Movies Like Shutter Island`
        };
    } else if (collection.slug === 'best-crime-thriller-movies') {
        return {
            title: "10 Best Crime Thriller Movies – From Heat to The Departed | Ranked 2025",
            description: "Stop scrolling! This is the most advanced handpicked list on the internet of 10 crime thrillers from Heat to The Departed. Carefully analyzed for heist mastery, investigative brilliance, and expert storytelling—perfect for crime cinema fans!",
            keywords: "best crime thriller movies, crime films, heist movies, detective thrillers, heat movie, the departed, prisoners, zodiac, la confidential, no country for old men, memories of murder, training day, crime cinema, cop thrillers, investigation films",
            ogTitle: "The Most Advanced List on the Internet – 10 Best Crime Thriller Movies 🔫",
            twitterTitle: "🔫 The Most Advanced Handpicked List – 10 Best Crime Thriller Movies",
            progressText: `of Top ${movies.length} Best Crime Thriller Films`
        };
    } else if (collection.slug === 'best-heist-thriller-movies') {
        return {
            title: "10 Best Heist Thriller Movies – From Heat to Ocean's Eleven | Ranked 2025",
            description: "Stop scrolling! This is the most advanced handpicked list on the internet of 10 heist thrillers from Heat to Ocean's Eleven. Carefully analyzed for plan complexity, execution brilliance, and expert storytelling—perfect for heist cinema fans!",
            keywords: "best heist thriller movies, heist films, bank robbery movies, oceans eleven, heat movie, inside man, the italian job, reservoir dogs, heist cinema, caper films, robbery thrillers, criminal masterminds, elaborate heists, theft movies",
            ogTitle: "The Most Advanced List on the Internet – 10 Best Heist Thriller Movies 💰",
            twitterTitle: "💰 The Most Advanced Handpicked List – 10 Best Heist Thriller Movies",
            progressText: `of Top ${movies.length} Best Heist Thriller Films`
        };
    } else if (collection.slug === 'best-time-travel-movies') {  // ✅ TIME TRAVEL ADDED
        return {
            title: "10 Best Time Travel Movies – From Back to the Future to Primer | Ranked 2025",
            description: "Stop scrolling! This is the most advanced handpicked list on the internet of 10 time travel movies from Back to the Future to Primer. Carefully analyzed for paradox complexity, temporal mechanics, and expert storytelling—perfect for sci-fi fans!",
            keywords: "best time travel movies, time travel films, paradox movies, back to the future, primer, interstellar, predestination, terminator, 12 monkeys, donnie darko, groundhog day, timecrimes, temporal paradox films, causality loop movies, sci-fi time travel",
            ogTitle: "The Most Advanced List on the Internet – 10 Best Time Travel Movies ⏳",
            twitterTitle: "⏳ The Most Advanced Handpicked List – 10 Best Time Travel Movies",
            progressText: `of Top ${movies.length} Best Time Travel Films`
        };
    } else if (collection.slug === 'best-sci-fi-movies') {  // ✅ SCI-FI ADDED
        return {
            title: "10 Best Sci-Fi Movies – From Blade Runner to Interstellar | Ranked 2025",
            description: "Stop scrolling! This is the most advanced handpicked list on the internet of 10 groundbreaking sci-fi movies from Blade Runner to Interstellar. Carefully analyzed for visionary concepts, philosophical depth, and expert storytelling—perfect for science fiction fans!",
            keywords: "best sci-fi movies, science fiction films, blade runner, interstellar, 2001 space odyssey, the matrix, arrival, ex machina, dune, foundation, sci-fi cinema, visionary sci-fi, philosophical sci-fi, space movies, dystopian films, artificial intelligence movies",
            ogTitle: "The Most Advanced List on the Internet – 10 Best Sci-Fi Movies 🚀",
            twitterTitle: "🚀 The Most Advanced Handpicked List – 10 Best Sci-Fi Movies",
            progressText: `of Top ${movies.length} Best Sci-Fi Films`
        };
    } else if (collection.slug === 'best-psychological-thriller-movies') {
        return {
            title: "Best Psychological Thriller Movies – Mind-Bending Psychological Thrillers You Must Watch",
            description: "Discover a handpicked list of psychological thrillers known for mind-bending plots, psychological depth, and chilling tension. Expertly curated for fans of cerebral cinema.",
            keywords: "psychological thrillers, mind-bending movies, cerebral thrillers, psychological depth films, thriller movies with twists, suspense thrillers, chilling psychological narratives",
            ogTitle: "Top Psychological Thriller Movies – Mind-Bending Psychological Thrillers",
            twitterTitle: "Mind-Bending Psychological Thriller Movies – Expert Curated List",
            progressText: `of Top ${movies.length} Psychological Thriller Movies`
        };
    } else if (collection.slug === 'best-thriller-movies') {
        return {
            title: "Best Suspense Thriller Movies – 10 Best Edge-of-Your-Seat Thrillers You Must Watch",
            description: "Stop scrolling! This is the most advanced handpicked list on the internet of 10 suspense thrillers with intense pacing, masterful plot twists, and captivating storytelling. Carefully analyzed for tension, suspense intensity, and expert execution—perfect for true thriller fans!",
            keywords: "best thriller movies, suspense thriller films, best suspense movies, psychological thrillers, plot twist movies, tension filled movies, intense thrillers, edge of seat thrillers, thriller cinema, suspense cinema, best thriller films all time, thriller recommendations",
            ogTitle: "The Most Advanced List on the Internet – 10 Best Suspense Thriller Movies 🔥",
            twitterTitle: "🔥 The Most Advanced Handpicked List – 10 Best Thriller Movies",
            progressText: `of Top ${movies.length} Best Thriller Films`
        };
    } else if (collection.slug === 'best-mystery-thriller-movies') {
        return {
            title: "Best Mystery Thriller Movies – 10 Greatest Detective Mystery Films You Must Watch",
            description: "Stop scrolling! This is the most advanced handpicked list on the internet of 10 mystery thrillers with brilliant detective work, impossible puzzles, and shocking revelations. Carefully analyzed for mystery complexity, puzzle sophistication, and expert storytelling—perfect for true mystery fans!",
            keywords: "best mystery thriller movies, detective films, mystery movies, whodunit films, detective mystery thrillers, agatha christie style films, sherlock holmes movies, noir mystery thrillers, detective cinema, mystery puzzle films, crime mystery thrillers, investigation films",
            ogTitle: "The Most Advanced List on the Internet – 10 Best Mystery Thriller Movies 🔍",
            twitterTitle: "🔍 The Most Advanced Handpicked List – 10 Best Mystery Thriller Movies",
            progressText: `of Top ${movies.length} Best Mystery Thriller Films`
        };
    } else if (collection.slug === 'best-survival-movies') {
        return {
            title: "10 Best Survival Movies of All Time | Ranked & Reviewed 2025",
            description: "Discover the 10 greatest survival movies ever made. From 127 Hours to The Revenant, explore gripping tales of human endurance, wilderness survival, and the will to live against all odds. Expert rankings, detailed analysis & where to watch.",
            keywords: "best survival movies, survival films, wilderness movies, human endurance films, 127 Hours, Cast Away, The Revenant, The Martian, survival cinema, lost at sea movies, mountain survival films, desert survival movies, Unbroken, survival against the odds, true survival stories, best survival films of all time",
            ogTitle: "10 Best Survival Movies of All Time | Ranked & Reviewed 2025 🏔️",
            twitterTitle: "🏔️ 10 Best Survival Movies of All Time – Expert Rankings",
            progressText: `of Top ${movies.length} Best Survival Films`
        };
    } else if (collection.slug === 'best-drama-movies-on-netflix') {
        return {
            title: "Best Drama Movies on Netflix – 10 Award-Winning Films Streaming Now | Filmiway",
            description: "Discover 10 award-winning drama movies on Netflix, ranked by emotional intensity and critical acclaim. From 1917 to Minari, explore the finest dramatic performances streaming now.",
            keywords: "best drama movies netflix, netflix drama films, award winning movies, 1917 netflix, roma netflix, the irishman netflix, marriage story, social network, django unchained netflix, pursuit of happyness, minari netflix, chicago 7 netflix, emotional dramas, oscar winners netflix",
            ogTitle: "Best Drama Movies on Netflix – 10 Award-Winning Films Streaming Now",
            twitterTitle: "🎬 Best Drama Movies on Netflix – 10 Award-Winning Films",
            progressText: `of Top ${movies.length} Netflix Dramas`
        };
    } else if (collection.slug === 'best-detective-thriller-movies') {
        return {
            title: "10 Best Detective Thriller Movies Like Zodiac & Prisoners",
            description: "Stop scrolling! This is the most advanced handpicked list on the internet of 10 detective thrillers with gripping mysteries, master detectives, and expert storytelling. Perfect for fans of suspense and cerebral crime narratives!",
            keywords: "best detective thriller movies, detective films, investigative thrillers, mystery thrillers, cerebral crime stories, gripping detective stories, thriller investigations, crime mystery films, sherlock holmes style, detective cinema, suspense thrillers",
            ogTitle: "The Most Advanced List on the Internet – 10 Best Detective Thriller Movies 🔎",
            twitterTitle: "🔎 The Most Advanced Handpicked List – 10 Best Detective Thriller Movies",
            progressText: `of Top ${movies.length} Best Detective Thrillers`
        };
    } else {
        return {
            title: `Best ${collection.title} – Top 10 Curated Movie Collection You Must Watch`,
            description: `Discover ${collection.title} - ${collection.description || 'A curated collection of exceptional films'}.`,
            keywords: `${collection.title}, curated movies, film collection, cinema, movie recommendations`,
            ogTitle: `Best ${collection.title} – Top 10 Curated Collection You Must Watch`,
            twitterTitle: `Best ${collection.title} – Top 10 Curated Collection You Must Watch`,
            progressText: `of ${collection.title}`
        };
    }
};



    const nextMovie = useCallback(() => {
        setCurrentMovieIndex((prev) => (prev + 1) % movies.length);
    }, [movies.length]);

    const prevMovie = useCallback(() => {
        setCurrentMovieIndex((prev) => (prev - 1 + movies.length) % movies.length);
    }, [movies.length]);

    const goToMovie = useCallback((index) => {
        setCurrentMovieIndex(index);
    }, []);

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'ArrowLeft') prevMovie();
            if (e.key === 'ArrowRight') nextMovie();
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [nextMovie, prevMovie]);

    // 🔥 GET CURRENT MOVIE AND CALCULATE RANK CORRECTLY
    const currentMovie = movies[currentMovieIndex];
const currentRank = movies.length - currentMovieIndex;


    // 🔥 SMART NAVIGATION LOGIC
    const isFirstMovie = currentMovieIndex === 0;
    const isLastMovie = currentMovieIndex === movies.length - 1;

    const playSound = (type) => {
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
    };

const handleMovieClick = () => {
    if (typeof window !== 'undefined') {
        sessionStorage.setItem('currentMoviePosition', currentMovieIndex.toString());
        sessionStorage.setItem('currentMovieRank', currentRank.toString());
        sessionStorage.setItem('currentCollection', collection.slug);
        sessionStorage.setItem('collectionTitle', collection.title);
        sessionStorage.setItem('fromCollection', 'true');

        // Clear all collection flags first
        sessionStorage.removeItem('fromInceptionCollection');
        sessionStorage.removeItem('fromMementoCollection');
        sessionStorage.removeItem('fromShutterIslandCollection');
        sessionStorage.removeItem('fromSurvivalCollection');
        sessionStorage.removeItem('fromThrillerCollection');
        sessionStorage.removeItem('fromMysteryThrillerCollection');
        sessionStorage.removeItem('fromDramaCollection');
        sessionStorage.removeItem('fromDetectiveThrillerCollection');
        sessionStorage.removeItem('fromPsychologicalThrillerCollection');
        sessionStorage.removeItem('fromCrimeThrillerCollection');
        sessionStorage.removeItem('fromHeistThrillerCollection');
        sessionStorage.removeItem('fromTimeTravelCollection');
        sessionStorage.removeItem('fromSciFiCollection');  // ✅ SCI-FI ADDED

        // Set appropriate collection flag
        if (collection.slug === 'movies-like-inception') {
            sessionStorage.setItem('fromInceptionCollection', 'true');
        } else if (collection.slug === 'movies-like-memento') {
            sessionStorage.setItem('fromMementoCollection', 'true');
        } else if (collection.slug === 'movies-like-shutter-island') {
            sessionStorage.setItem('fromShutterIslandCollection', 'true');
        } else if (collection.slug === 'best-survival-movies') {
            sessionStorage.setItem('fromSurvivalCollection', 'true');
        } else if (collection.slug === 'best-thriller-movies') {
            sessionStorage.setItem('fromThrillerCollection', 'true');
        } else if (collection.slug === 'best-mystery-thriller-movies') {
            sessionStorage.setItem('fromMysteryThrillerCollection', 'true');
        } else if (collection.slug === 'best-drama-movies-on-netflix') {
            sessionStorage.setItem('fromDramaCollection', 'true');
        } else if (collection.slug === 'best-detective-thriller-movies') {
            sessionStorage.setItem('fromDetectiveThrillerCollection', 'true');
        } else if (collection.slug === 'best-psychological-thriller-movies') {
            sessionStorage.setItem('fromPsychologicalThrillerCollection', 'true');
        } else if (collection.slug === 'best-crime-thriller-movies') {
            sessionStorage.setItem('fromCrimeThrillerCollection', 'true');
        } else if (collection.slug === 'best-heist-thriller-movies') {
            sessionStorage.setItem('fromHeistThrillerCollection', 'true');
        } else if (collection.slug === 'best-time-travel-movies') {
            sessionStorage.setItem('fromTimeTravelCollection', 'true');
        } else if (collection.slug === 'best-sci-fi-movies') {  // ✅ SCI-FI ADDED
            sessionStorage.setItem('fromSciFiCollection', 'true');
        }
    }
};


    // Get dynamic content
    const collectionContent = getCollectionContent();
    const headerContent = getHeaderContent();
    const loaderContent = getLoaderContent();
    const metaContent = getStaticMetaContent();

    // 🔥 ENHANCED CINEMATIC EXPLORER SECTION WITH DNA HELIX - SHOWS ON POSITION #10
    const CinematicExplorerSection = ({ currentRank }) => {
        // Only render when currentRank === 10 (Position #10)
        if (currentRank !== 10) {
            return null;
        }

        const icons = {
            icon1: Brain,
            icon2: Film,
            icon3: Award
        };

        return (
            <motion.section 
                className="relative mt-8 sm:mt-16 mb-12 sm:mb-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1.2 }}
            >
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 via-transparent to-yellow-500/5 blur-3xl"></div>
                <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-amber-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
                
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
                    {/* Title Section */}
                    <motion.div 
                        className="text-center mb-16 sm:mb-20"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.8, duration: 1 }}
                    >
                        <div className="inline-flex items-center gap-3 px-6 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full mb-8">
                            <icons.icon1 className="w-5 h-5 text-yellow-400" />
                            <span className="text-yellow-400 font-medium tracking-wider uppercase text-sm">{collectionContent.badge}</span>
                            <icons.icon3 className="w-5 h-5 text-yellow-400" />
                        </div>
                        
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-6 leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-white">
                                Explore {collectionContent.title}
                            </span>
                            <br />
                            <span className="text-transparent bg-clip-text font-normal bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-300">
                                Cinema Collection
                            </span>
                        </h2>
                        
                        <p className="text-lg sm:text-xl text-gray-300/90 max-w-4xl mx-auto leading-relaxed font-light">
                            {collectionContent.description}
                        </p>
                    </motion.div>

                    {/* Three-Column Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 mb-16 sm:mb-20">
                        {/* Column 1 - The Selection */}
                        <motion.div 
                            className="space-y-6"
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 2.2, duration: 0.8 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-lg flex items-center justify-center border bg-gradient-to-br from-yellow-400/20 to-amber-400/20 border-yellow-400/20">
                                    <icons.icon2 className="w-6 h-6 text-yellow-400" />
                                </div>
                                <h3 className="text-2xl font-light text-white">The Selection</h3>
                            </div>
                            
                            <p className="text-gray-300 leading-relaxed">
                                {collectionContent.selection.text1}
                            </p>
                            
                            <p className="text-gray-300 leading-relaxed">
                                {collectionContent.selection.text2}
                            </p>
                        </motion.div>

                        {/* Column 2 - The Ranking */}
                        <motion.div 
                            className="space-y-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 2.4, duration: 0.8 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-lg flex items-center justify-center border bg-gradient-to-br from-yellow-400/20 to-amber-400/20 border-yellow-400/20">
                                    <TrendingUp className="w-6 h-6 text-yellow-400" />
                                </div>
                                <h3 className="text-2xl font-light text-white">The Ranking</h3>
                            </div>
                            
                            <p className="text-gray-300 leading-relaxed">
                                {collectionContent.ranking.text}
                            </p>
                            
                            <div className="space-y-3">
                                {collectionContent.ranking.points.map((point, index) => (
                                    <div key={index} className="flex items-center gap-3 text-sm">
                                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                        <span className="text-gray-400">{point}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Column 3 - The Experience */}
                        <motion.div 
                            className="space-y-6"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 2.6, duration: 0.8 }}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-lg flex items-center justify-center border bg-gradient-to-br from-yellow-400/20 to-amber-400/20 border-yellow-400/20">
                                    <icons.icon3 className="w-6 h-6 text-yellow-400" />
                                </div>
                                <h3 className="text-2xl font-light text-white">The Experience</h3>
                            </div>
                            
                            <p className="text-gray-300 leading-relaxed">
                                {collectionContent.experience.text1}
                            </p>
                            
                            <p className="text-gray-300 leading-relaxed">
                                {collectionContent.experience.text2}
                            </p>
                            
                            <div className="pt-4">
                                <div className="flex items-center gap-2 px-4 py-2 border rounded-lg w-fit bg-yellow-400/10 border-yellow-400/20">
                                    <Users className="w-4 h-4 text-yellow-400" />
                                    <span className="text-sm font-medium text-yellow-400">
                                        Community Curated
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Cinematic Divider */}
                    <motion.div 
                        className="flex items-center justify-center mb-16 sm:mb-20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 3, duration: 1 }}
                    >
                        <div className="flex items-center gap-8">
                            <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-transparent to-yellow-400/50"></div>
                            <div className="relative">
                                <motion.div 
                                    className="w-3 h-3 border-2 rotate-45 border-yellow-400/50"
                                    animate={{ rotate: 405 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                ></motion.div>
                                <div className="absolute inset-0 w-3 h-3 rounded-full blur-sm bg-yellow-400/20"></div>
                            </div>
                            <div className="w-24 sm:w-32 h-px bg-gradient-to-l from-transparent to-yellow-400/50"></div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        );
    };

    // 🔥 MOBILE-OPTIMIZED CINEMATIC HEADER
    const CinematicHeader = React.memo(() => {
        return (
            <header className="text-center mb-8 sm:mb-16 lg:mb-20 px-4 sm:px-6 w-full relative pt-20 sm:pt-16 lg:pt-8">
                <motion.div 
                    initial={{ opacity: 0, y: -40 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1.2, ease: "easeOut" }} 
                    className="space-y-4 sm:space-y-6 lg:space-y-8 xl:space-y-12 relative z-10"
                >
                    <motion.div className="relative">
                        <motion.h1 
                            className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extralight tracking-[0.05em] sm:tracking-[0.1em] text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-yellow-300 to-amber-300" 
                            style={{ 
                                fontFamily: "'Playfair Display', serif", 
                                textShadow: '0 0 80px rgba(234, 179, 8, 0.15)',
                                lineHeight: '1.1'
                            }} 
                            whileHover={{ 
                                scale: 1.02, 
                                textShadow: '0 0 100px rgba(234, 179, 8, 0.25)'
                            }} 
                            transition={{ duration: 0.4 }}
                        >
                            <span className="block leading-tight" style={{ letterSpacing: '0.02em' }}>
                                {headerContent.title}
                            </span>
                        </motion.h1>
                        
                        <motion.p 
                            className="text-sm sm:text-lg md:text-xl lg:text-2xl font-light mt-3 sm:mt-6 text-yellow-200/60"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            {headerContent.subtitle}
                        </motion.p>
                        
                        <motion.div 
                            initial={{ scaleX: 0 }} 
                            animate={{ scaleX: 1 }} 
                            transition={{ delay: 1.2, duration: 2, ease: "easeInOut" }} 
                            className="absolute -bottom-3 sm:-bottom-6 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 lg:w-64 xl:w-96 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent"
                        />
                    </motion.div>
                    
                    {/* Badge Grid */}
                    <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mt-12 sm:mt-16 lg:mt-20 max-w-4xl mx-auto" 
                        initial={{ opacity: 0, y: 40 }} 
                        animate={{ opacity: 1, y: 0 }} 
                        transition={{ delay: 2, duration: 0.8 }}
                    >
                        {collection.badges?.map((badge, index) => (
                            <motion.div 
                                key={index}
                                className="relative group" 
                                whileHover={{ y: -8, scale: 1.03 }} 
                                transition={{ duration: 0.4 }}
                            >
                                <div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-gray-800/40 via-gray-900/30 to-black/40 border border-yellow-500/20 rounded-2xl backdrop-blur-xl relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    
                                    <div className="flex flex-col items-center space-y-3 sm:space-y-4 relative z-10">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-400/20 to-amber-400/20 rounded-xl flex items-center justify-center border border-yellow-400/30">
                                            {index === 0 && <Brain className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400" />}
                                            {index === 1 && <Star className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400" />}
                                            {index === 2 && <Award className="w-6 h-6 sm:w-7 sm:h-7 text-yellow-400" />}
                                        </div>
                                        
                                        <h3 className="text-yellow-200 text-sm sm:text-base lg:text-lg font-medium tracking-wider uppercase text-center leading-tight">
                                            {badge.label}
                                        </h3>
                                        <p className="text-gray-400 text-xs sm:text-sm text-center leading-relaxed">
                                            {badge.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </header>
        );
    });

    // 🔥 CINEMATIC LOADER
    const CinematicLoader = React.memo(() => {
        return (
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
                    <h2 className="text-xl sm:text-2xl font-light text-gray-200 tracking-[0.2em] uppercase">
                        {loaderContent.title}
                    </h2>
                    <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed tracking-wide">
                        {loaderContent.description}
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
        );
    });

   // NAVIGATION DOTS COMPONENT
const NavigationDots = ({ movies, currentMovieIndex, goToMovie }) => (
    <motion.div 
        className="flex justify-center items-center space-x-3 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
    >
        {movies.map((_, index) => (
            <motion.button
                key={index}
                onClick={() => goToMovie(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 relative ${
                    index === currentMovieIndex 
                        ? 'bg-yellow-400 scale-125' 
                        : 'bg-gray-600 hover:bg-gray-400'
                }`}
                whileHover={{ scale: index === currentMovieIndex ? 1.3 : 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {index === currentMovieIndex && (
                    <motion.div
                        className="absolute inset-0 bg-yellow-400/30 rounded-full"
                        initial={{ scale: 1 }}
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                )}
            </motion.button>
        ))}
    </motion.div>
);

return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <Head>
            <title key={`collection-title-${collection.slug}`}>
                {metaContent.title || collection.title || "Filmiway - Movie Collection"}
            </title>

            <meta
                key={`collection-desc-${collection.slug}`}
                name="description"
                content={metaContent.description || collection.description || ""}
            />

            <meta
                key={`collection-keywords-${collection.slug}`}
                name="keywords"
                content={metaContent.keywords || ""}
            />

            <link rel="canonical" href={`https://filmiway.com/collection/${collection.slug}`} />

            <meta name="robots" content="index, follow" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            <meta property="og:title" key={`og-title-${collection.slug}`} content={metaContent.ogTitle || metaContent.title || collection.title} />
            <meta property="og:description" key={`og-desc-${collection.slug}`} content={metaContent.description || collection.description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`https://filmiway.com/collection/${collection.slug}`} />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" key={`twitter-title-${collection.slug}`} content={metaContent.twitterTitle || metaContent.title || collection.title} />
            <meta name="twitter:description" key={`twitter-desc-${collection.slug}`} content={metaContent.description || collection.description} />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "name": collection?.title || "",
                        "description": collection?.description || "",
                        "numberOfItems": movies?.length || 0,
                        "url": `https://filmiway.com/collection/${collection?.slug || ""}`,
                        "itemListElement": (movies || []).map((movie, index) => {
                            const basePath =
                                collection?.slug === 'best-survival-movies'
                                    ? 'movies/survival/'
                                    : collection?.slug === 'movies-like-inception'
                                    ? 'movies/like-inception/'
                                    : collection?.slug === 'movies-like-memento'
                                    ? 'movies/like-memento/'
                                    : collection?.slug === 'movies-like-shutter-island'
                                    ? 'movies/like-shutter-island/'
                                    : collection?.slug === 'best-thriller-movies'
                                    ? 'movies/thriller/'
                                    : collection?.slug === 'best-mystery-thriller-movies'
                                    ? 'movies/mystery-thriller/'
                                    : collection?.slug === 'best-detective-thriller-movies'
                                    ? 'movies/detective-thriller/'
                                    : collection?.slug === 'best-drama-movies-on-netflix'
                                    ? 'movies/netflix/'
                                    : collection?.slug === 'best-psychological-thriller-movies'
                                    ? 'movies/psych-thriller/'
                                    : collection?.slug === 'best-crime-thriller-movies'
                                    ? 'movies/crime-thriller/'
                                    : collection?.slug === 'best-heist-thriller-movies'
                                    ? 'movies/heist-thriller/'
                                    : collection?.slug === 'best-time-travel-movies'
                                    ? 'movies/time-travel/'
                                    : collection?.slug === 'best-sci-fi-movies'  // ✅ SCI-FI ADDED
                                    ? 'movies/sci-fi/'
                                    : 'movies/';

                            let itemObj = {
                                "@type": "Movie",
                                "name": movie?.Title || "Unknown Movie",
                                "image": movie?.poster_path 
                                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                    : movie?.posterUrl 
                                    ? movie.posterUrl
                                    : "https://via.placeholder.com/300x450?text=No+Image",
                                "datePublished": movie?.Year || "2024",
                                "genre": movie?.Genre || "Drama"
                            };

                            // Add director if exists
                            if (movie?.director) {
                                itemObj.director = {
                                    "@type": "Person",
                                    "name": movie.director
                                };
                            }

                            if (movie?.imdbID) {
                                itemObj.url = `https://filmiway.com/${basePath}${movie.imdbID}`;
                            }

                            return {
                                "@type": "ListItem",
                                "position": index + 1,
                                "item": itemObj
                            };
                        })
                    })
                }}
            />
        </Head>

        <CinematicBackground />
        <StrategicControls 
            isMuted={isMuted}
            setIsMuted={setIsMuted}
            isAutoPlay={isAutoPlay}
            setIsAutoPlay={setIsAutoPlay}
            playSound={playSound}
        />
        
        <TopLeftLogo />
        <HomepageButton />
        
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
                    <div className="container mx-auto px-3 sm:px-6 py-8 sm:py-12">
                        <CinematicHeader />
                        
                        {/* 🔥 CINEMATIC EXPLORER SECTION */}
                        <CinematicExplorerSection currentRank={currentRank} />
                        
                        <div className="relative flex items-center justify-center min-h-[70vh] sm:min-h-[80vh]">
                            {/* 🔥 FIXED NAVIGATION BUTTONS */}
                            {!isFirstMovie && (
                                <motion.button
                                    onClick={prevMovie}
                                    className="absolute left-2 sm:left-8 z-20 w-14 h-14 sm:w-18 sm:h-18 bg-gradient-to-r from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-2xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 flex items-center justify-center group"
                                    whileHover={{ scale: 1.1, x: -8 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <ChevronLeft size={24} className="sm:w-7 sm:h-7 text-gray-300 group-hover:text-yellow-400 transition-colors" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-amber-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </motion.button>
                            )}

                            {!isLastMovie && (
                                <motion.button
                                    onClick={nextMovie}
                                    className="absolute right-2 sm:right-8 z-20 w-14 h-14 sm:w-18 sm:h-18 bg-gradient-to-l from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-2xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 flex items-center justify-center group"
                                    whileHover={{ scale: 1.1, x: 8 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <ChevronRight size={24} className="sm:w-7 sm:h-7 text-gray-300 group-hover:text-yellow-400 transition-colors" />
                                    <div className="absolute inset-0 bg-gradient-to-l from-yellow-400/10 to-amber-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </motion.button>
                            )}

                            {/* 🔥 FIXED FOR NEXT.JS 15 - WITH SCI-FI & TIME TRAVEL COLLECTION URL */}
                            <AnimatePresence mode="wait">
                                <Link 
                                    href={
                                        collection.slug === 'movies-like-inception'
                                        ? `/movies/like-inception/${currentMovie.imdbID}`
                                        : collection.slug === 'movies-like-memento'
                                        ? `/movies/like-memento/${currentMovie.imdbID}`
                                        : collection.slug === 'movies-like-shutter-island'
                                        ? `/movies/like-shutter-island/${currentMovie.imdbID}`
                                        : collection.slug === 'best-survival-movies'
                                        ? `/movies/survival/${currentMovie.imdbID}`
                                        : collection.slug === 'best-thriller-movies'
                                        ? `/movies/thriller/${currentMovie.imdbID}`
                                        : collection.slug === 'best-mystery-thriller-movies'
                                        ? `/movies/mystery-thriller/${currentMovie.imdbID}`
                                        : collection.slug === 'best-detective-thriller-movies'
                                        ? `/movies/detective-thriller/${currentMovie.imdbID}`
                                        : collection.slug === 'best-drama-movies-on-netflix'
                                        ? `/movies/netflix/${currentMovie.imdbID}`
                                        : collection.slug === 'best-psychological-thriller-movies'
                                        ? `/movies/psych-thriller/${currentMovie.imdbID}`
                                        : collection.slug === 'best-crime-thriller-movies'
                                        ? `/movies/crime-thriller/${currentMovie.imdbID}`
                                        : collection.slug === 'best-heist-thriller-movies'
                                        ? `/movies/heist-thriller/${currentMovie.imdbID}`
                                        : collection.slug === 'best-time-travel-movies'
                                        ? `/movies/time-travel/${currentMovie.imdbID}`
                                        : collection.slug === 'best-sci-fi-movies'  // ✅ SCI-FI ADDED
                                        ? `/movies/sci-fi/${currentMovie.imdbID}`
                                        : `/movies/${currentMovie.imdbID}`
                                    }
                                    key={currentMovieIndex}
                                    onClick={handleMovieClick}
                                >
                                    <CinematicMovieCard
                                        movie={currentMovie}
                                        rank={currentRank}
                                        isActive={true}
                                    />
                                </Link>
                            </AnimatePresence>
                        </div>

                        {/* Enhanced Movie Info */}
                        <motion.div 
                            className="text-center mt-12 sm:mt-16"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            <div className="flex flex-col items-center space-y-6">
                                <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                                    <span className="px-3 py-1 bg-gray-800/50 rounded-full">#{currentRank} of {movies.length}</span>
                                    <span>•</span>
                                    <span>Click poster above for full analysis</span>
                                </div>
                                
                                <motion.div 
                                    className="flex items-center space-x-4 bg-gradient-to-r from-yellow-400/10 via-amber-400/10 to-yellow-400/10 border border-yellow-400/30 rounded-2xl px-8 py-4 hover:from-yellow-400/20 hover:via-amber-400/20 hover:to-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300 cursor-pointer group"
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => {
                                        handleMovieClick();
                                        let detailPageUrl;
                                        if (collection.slug === 'movies-like-inception') {
                                            detailPageUrl = `/movies/like-inception/${currentMovie.imdbID}`;
                                        } else if (collection.slug === 'movies-like-memento') {
                                            detailPageUrl = `/movies/like-memento/${currentMovie.imdbID}`;
                                        } else if (collection.slug === 'movies-like-shutter-island') {
                                            detailPageUrl = `/movies/like-shutter-island/${currentMovie.imdbID}`;
                                        } else if (collection.slug === 'best-survival-movies') {
                                            detailPageUrl = `/movies/survival/${currentMovie.imdbID}`;
                                        } else if (collection.slug === 'best-thriller-movies') {
                                            detailPageUrl = `/movies/thriller/${currentMovie.imdbID}`;
                                        } else if (collection.slug === 'best-mystery-thriller-movies') {
                                            detailPageUrl = `/movies/mystery-thriller/${currentMovie.imdbID}`;
                                        } else if (collection.slug === 'best-detective-thriller-movies') {
                                            detailPageUrl = `/movies/detective-thriller/${currentMovie.imdbID}`;
                                        } else if (collection.slug === 'best-drama-movies-on-netflix') {
                                            detailPageUrl = `/movies/netflix/${currentMovie.imdbID}`;
                                        } else if (collection.slug === 'best-psychological-thriller-movies') {
                                            detailPageUrl = `/movies/psych-thriller/${currentMovie.imdbID}`;
                                        } else if (collection.slug === 'best-crime-thriller-movies') {
                                            detailPageUrl = `/movies/crime-thriller/${currentMovie.imdbID}`;
                                        } else if (collection.slug === 'best-heist-thriller-movies') {
                                            detailPageUrl = `/movies/heist-thriller/${currentMovie.imdbID}`;
                                        } else if (collection.slug === 'best-time-travel-movies') {
                                            detailPageUrl = `/movies/time-travel/${currentMovie.imdbID}`;
                                        } else if (collection.slug === 'best-sci-fi-movies') {  // ✅ SCI-FI ADDED
                                            detailPageUrl = `/movies/sci-fi/${currentMovie.imdbID}`;
                                        } else {
                                            detailPageUrl = `/movies/${currentMovie.imdbID}`;
                                        }
                                        window.location.href = detailPageUrl;
                                    }}
                                >
                                    <Eye className="w-6 h-6 text-yellow-400" />
                                    <span className="text-yellow-400 font-medium text-lg">Explore Full Analysis</span>
                                    <motion.div
                                        animate={{ x: [0, 8, 0] }}
                                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                    >
                                        <ChevronRight className="w-6 h-6 text-yellow-400" />
                                    </motion.div>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Navigation Dots */}
                        <NavigationDots 
                            movies={movies}
                            currentMovieIndex={currentMovieIndex}
                            goToMovie={goToMovie}
                        />

                        {/* Movie Counter */}
                        <motion.div
                            className="flex justify-center mt-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 3.5 }}
                        >
                            <div className="flex items-center gap-4 sm:gap-6 px-6 py-4 sm:px-8 sm:py-5 bg-gradient-to-r from-gray-800/40 via-gray-900/40 to-gray-800/40 backdrop-blur-xl rounded-2xl border border-yellow-400/20">
                                <span className="text-yellow-400 font-light text-lg sm:text-xl">
                                    #{currentRank}
                                </span>
                                <div className="w-16 sm:w-24 h-2 bg-gray-700/50 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full"
                                        style={{ width: `${((currentMovieIndex + 1) / movies.length) * 100}%` }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                    />
                                </div>
                                <span className="text-gray-400 font-light text-sm sm:text-base">
                                    <span className="hidden sm:inline">{metaContent.progressText}</span>
                                    <span className="sm:hidden">of {movies.length}</span>
                                </span>
                            </div>
                        </motion.div>

                        {/* Footer */}
                        <motion.footer
                            className="bg-gradient-to-t from-gray-900 to-black mt-16 pt-12 border-t border-gray-800/30 text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 4.5 }}
                        >
                            <p className="text-gray-500 text-sm sm:text-base font-light tracking-wide mb-8">
                                Curated cinema for discerning viewers • Expert analysis and community insights
                            </p>
                            
                            <div className="flex justify-center items-center gap-8 sm:gap-12 mb-8">
                                <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent to-gray-700"></div>
                                <div className="text-yellow-400/60 text-xs tracking-[0.3em] uppercase font-medium">
                                    Filmiway {collection.title} Collection
                                </div>
                                <div className="w-16 sm:w-24 h-px bg-gradient-to-l from-transparent to-gray-700"></div>
                            </div>
                            
                            {/* TMDB Attribution */}
                            <motion.div 
                                className="mb-8 pt-6 border-t border-gray-900/50"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 5, duration: 1 }}
                            >
                                <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                                    <p className="text-gray-600 text-sm">
                                        Movie data and posters powered by
                                    </p>
                                    <a 
                                        href="https://www.themoviedb.org/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
                                    >
                                        <Image
                                            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                                            alt="The Movie Database"
                                            width={50}
                                            height={20}
                                            className="h-5 w-auto"
                                            loading="lazy"
                                        />
                                        <span className="text-blue-400 text-sm hover:text-blue-300 transition-colors">
                                            The Movie Database (TMDB)
                                        </span>
                                    </a>
                                </div>
                                <p className="text-gray-700 text-xs mt-2 text-center">
                                    This product uses the TMDB API but is not endorsed or certified by TMDB.
                                </p>
                            </motion.div>

                            <div className="flex items-center justify-center space-x-8 text-gray-500 text-sm pb-8">
                                <span>© 2025 Filmiway</span>
                                <span>•</span>
                                <span>All Rights Reserved</span>
                                <span>•</span>
                                <span>Where Every Film Finds Its Way</span>
                            </div>
                        </motion.footer>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);
};

// 🔥 SSG FUNCTIONS WITH SCI-FI & TIME TRAVEL COLLECTION ADDED
// ✅ CORRECT getStaticPaths() - generates all collections
export async function getStaticPaths() {
    const slugs = getAllCollectionSlugs();

    const paths = slugs.map((slug) => ({
        params: { slug }
    }));

    console.log('✅ Building paths for:', paths.map(p => p.params.slug));

    return {
        paths,
        fallback: false  // ✅ CRITICAL: Must be false for SSG/export
    };
}

// ✅ CORRECT getStaticProps() - maps correct database to each collection
export async function getStaticProps({ params }) {
    const slug = params.slug;
    const collection = getCollectionBySlug(slug);

    if (!collection) {
        return { notFound: true };
    }

    // ✅ SELECT DATABASE FOR EACH COLLECTION
    let movieDatabase;
    
    switch(collection.slug) {
        case 'best-survival-movies':
            movieDatabase = SURVIVAL_DATABASE;
            break;
        case 'best-thriller-movies':
            movieDatabase = THRILLER_MOVIES;
            break;
        case 'best-mystery-thriller-movies':
            movieDatabase = MYSTERY_THRILLER_MOVIES;
            break;
        case 'best-detective-thriller-movies':
            movieDatabase = DETECTIVE_THRILLER_MOVIES;
            break;
        case 'best-drama-movies-on-netflix':
            movieDatabase = DRAMA_MOVIES;
            break;
        case 'best-psychological-thriller-movies':
            movieDatabase = PSYCH_THRILLER_MOVIES;
            break;
        case 'best-crime-thriller-movies':
            movieDatabase = CRIME_THRILLER_MOVIES;
            break;
        case 'best-heist-thriller-movies':
            movieDatabase = HEIST_THRILLER_MOVIES;
            break;
        case 'best-time-travel-movies':
            movieDatabase = TIME_TRAVEL_MOVIES;
            break;
        case 'best-sci-fi-movies':  // ✅ SCI-FI ADDED
            movieDatabase = SCI_FI_MOVIES;
            break;
        default:
            // movies-like-inception, movies-like-memento, movies-like-shutter-island
            movieDatabase = COMPLETE_MOVIE_DATABASE;
    }

    const movieArray = Array.isArray(movieDatabase)
        ? movieDatabase
        : (movieDatabase ? Object.values(movieDatabase) : []);

    // ✅ FIND MOVIES - search by imdbID
    const movies = collection.movies
        .map(imdbId => {
            const movie = movieArray.find(m => m.imdbID === imdbId);
            if (!movie) return null;

            return {
                imdbID: movie.imdbID || '',
                tmdbId: movie.tmdbId || 0,
                Title: movie.Title || movie.title || 'Unknown',
                Year: movie.Year || movie.year || '2024',
                Genre: movie.Genre || movie.genre || 'Thriller',
                Runtime: movie.Runtime || movie.runtime || 120,
                Poster: movie.Poster || movie.poster || '',
                Plot: movie.Plot || movie.plot || movie.synopsis || '',
                rating: movie.rating || 0
            };
        })
        .filter(Boolean)
        .reverse();

    return {
        props: {
            collection,
            movies
        }
    };
}

export default CollectionPage;
