// pages/collection/[slug].js - SEO OPTIMIZED WITH WAR FILMS COLLECTION SUPPORT ✅


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
import { TIME_TRAVEL_MOVIES } from '../../utils/timeTravelMovieData';
import { SCI_FI_MOVIES } from '../../utils/sciFiMovieData';
import { WAR_FILMS_DATABASE } from '../../utils/warFilmsMovieData';  // ✅ WAR FILMS ADDED

import { REVENGE_MOVIES } from '../../utils/revengeMovieData';

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
// 🔥 SEO-OPTIMIZED COLLECTION CONTENT WITH ENGAGING COPY
const getCollectionContent = () => {
    if (collection.slug === 'movies-like-memento') {
        return {
            badge: "Memory-Twisting Cinema",
            title: "Memento",
            description: "Memory loss thrillers that mess with your mind. Non-linear narratives, identity crises & shocking twists that'll leave you questioning everything you just watched.",
            selection: {
                text1: "From reverse chronology to fragmented memories—these films challenge you to piece together narratives just like the protagonists struggling to understand their own shattered identities.",
                text2: "Each memory-twisting masterpiece features characters battling amnesia, false memories, and temporal confusion. You'll experience the same disorienting confusion they do."
            },
            ranking: {
                text: "Our memory complexity index evaluates narrative structure, identity confusion depth, and the sophistication of memory manipulation techniques used throughout each film.",
                points: [
                    "Non-linear narrative complexity",
                    "Identity confusion intensity", 
                    "Memory manipulation sophistication",
                    "Psychological impact power"
                ]
            },
            experience: {
                text1: "Whether you're seeking intricate plot structures or deep psychological exploration, this collection delivers cinema's most sophisticated memory-bending experiences.",
                text2: "Each film creates genuine confusion and revelation—mirroring what it's like to struggle with fractured memories and uncertain identity. Perfect for fans who love being mentally challenged."
            }
        };
    } else if (collection.slug === 'movies-like-inception') {
        return {
            badge: "Mind-Bending Cinema",
            title: "Inception", 
            description: "Reality-bending thrillers that'll blow your mind. Layered dreams, parallel realities & Christopher Nolan-level genius storytelling that demands multiple viewings.",
            selection: {
                text1: "From multi-layered dreamscapes to parallel realities—these films push the boundaries of narrative structure while maintaining emotional depth and philosophical weight that'll haunt you.",
                text2: "Each mind-bending masterpiece features complex protagonists navigating impossible scenarios, time paradoxes, and reality distortions that challenge everything you think you know about cinema."
            },
            ranking: {
                text: "Our mind-bending complexity index evaluates narrative innovation, reality distortion intensity, and the sophistication of conceptual storytelling techniques throughout each film.",
                points: [
                    "Conceptual complexity depth",
                    "Reality distortion intensity",
                    "Narrative structure innovation", 
                    "Philosophical impact weight"
                ]
            },
            experience: {
                text1: "Whether you're seeking intricate plot mechanics or philosophical depth, this collection delivers cinema's most ambitious reality-bending experiences that reward careful attention.",
                text2: "Each film has been selected for its ability to create lasting impact—with concepts that continue revealing new layers upon repeated viewings. Your brain will thank you."
            }
        };
    } else if (collection.slug === 'movies-like-shutter-island') {
        return {
            badge: "Psychological Thriller Cinema",
            title: "Shutter Island",
            description: "Twisted psychological thrillers with unreliable narrators, shocking revelations & reality-shattering endings that redefine everything you thought you knew.",
            selection: {
                text1: "From unreliable narrators to devastating plot twists—these films master psychological manipulation while maintaining gripping thriller tension and emotional authenticity that cuts deep.",
                text2: "Each psychological masterpiece features protagonists whose grip on reality becomes increasingly questionable, leading you down paths of doubt, paranoia, and ultimate shocking revelation."
            },
            ranking: {
                text: "Our psychological complexity index evaluates narrative deception mastery, identity questioning depth, and the sophistication of psychological thriller techniques throughout each film.",
                points: [
                    "Unreliable narrator mastery",
                    "Identity crisis complexity",
                    "Plot twist sophistication",
                    "Psychological manipulation depth"
                ]
            },
            experience: {
                text1: "Whether you're seeking shocking revelations or psychological depth, this collection delivers cinema's most masterful explorations of fractured identity and reality distortion.",
                text2: "Each film has been selected for its ability to completely reframe the entire viewing experience—with revelations that transform every previous scene into something entirely different."
            }
        };
    } else if (collection.slug === 'best-time-travel-movies') {
        return {
            badge: "Temporal Paradox Cinema",
            title: "Time Travel",
            description: "Mind-bending time travel films that'll hurt your brain. Causality loops, temporal paradoxes & revolutionary physics that redefine how you think about time itself.",
            selection: {
                text1: "From bootstrap paradoxes to grandfather paradoxes—these films explore the philosophical implications of time travel while maintaining thrilling narratives and genuine emotional depth.",
                text2: "Each time travel masterpiece features protagonists wrestling with temporal mechanics, causality loops, and the dangerous consequences of altering the past. Linear thinking won't help you here."
            },
            ranking: {
                text: "Our time travel complexity index evaluates temporal mechanics sophistication, paradox handling brilliance, and the depth of time travel storytelling techniques used throughout each film.",
                points: [
                    "Temporal paradox complexity",
                    "Causality loop sophistication",
                    "Time mechanics innovation",
                    "Philosophical temporal depth"
                ]
            },
            experience: {
                text1: "Whether you're seeking intricate temporal mechanics or philosophical exploration of time itself, this collection delivers cinema's most ambitious time travel experiences that demand your full attention.",
                text2: "Each film has been selected for its ability to create lasting cerebral impact—with time travel concepts that continue revealing new temporal paradoxes upon repeated analysis and discussion."
            }
        };
    } else if (collection.slug === 'best-sci-fi-movies') {
        return {
            badge: "Visionary Science Fiction",
            title: "Sci-Fi Cinema",
            description: "Groundbreaking sci-fi that expands your imagination. Visionary concepts, philosophical depth & stunning visuals that redefine what science fiction can achieve.",
            selection: {
                text1: "From dystopian nightmares to cosmic adventures—these films push the boundaries of imagination while exploring profound questions about humanity, consciousness, and existence itself.",
                text2: "Each sci-fi masterpiece features visionary worldbuilding, innovative concepts, and complex characters navigating extraordinary scenarios that challenge our understanding of reality and possibility."
            },
            ranking: {
                text: "Our sci-fi complexity index evaluates conceptual innovation depth, world-building sophistication, and the depth of speculative storytelling techniques used throughout each film.",
                points: [
                    "Conceptual innovation depth",
                    "World-building sophistication",
                    "Visual spectacle achievement",
                    "Philosophical exploration weight"
                ]
            },
            experience: {
                text1: "Whether you're seeking innovative concepts or philosophical depth, this collection delivers cinema's most visionary science fiction experiences that'll stay with you for years.",
                text2: "Each film has been selected for its ability to expand imagination and challenge perspective—with concepts that continue inspiring new ways of thinking about science, technology, and humanity's future."
            }
        };
    } else if (collection.slug === 'best-psychological-thriller-movies') {
        return {
            badge: "Psychological Thriller Cinema",
            title: "Psychological Thriller",
            description: "Twisted psychological thrillers that'll disturb you. Mind-bending narratives, unreliable narrators & chilling tension that explores the darkest corners of the human psyche.",
            selection: {
                text1: "These films explore the darkest reaches of the human mind—with plots filled with paranoia, shocking twists, and complex characters whose sanity hangs by a thread.",
                text2: "Each psychological thriller invites you to unravel intricate stories where truth is elusive, perception constantly shifts, and nothing is quite what it seems on the surface."
            },
            ranking: {
                text: "Our psychological thriller index evaluates psychological complexity depth, narrative deception sophistication, and tension build-up intensity throughout each film.",
                points: [
                    "Psychological depth complexity",
                    "Narrative deception mastery",
                    "Character psychological profile",
                    "Tension and suspense intensity"
                ]
            },
            experience: {
                text1: "Whether you're seeking psychological depth or shocking revelations, this collection delivers cinema's most intense psychological thriller experiences that'll keep you awake at night.",
                text2: "Each film has been selected for its masterful exploration of the human psyche and its ability to keep viewers on edge from the opening scene to the final devastating frame."
            }
        };
    } else if (collection.slug === 'best-heist-thriller-movies') {
        return {
            badge: "Heist Master Cinema",
            title: "Heist Thriller",
            description: "Brilliant heist thrillers with genius criminal plans. Elaborate schemes, high-stakes robberies & masterminds who make the impossible look easy.",
            selection: {
                text1: "From Ocean's Eleven to Heat—these films showcase the perfect blend of meticulous planning, flawless execution, and unexpected twists that keep you on the edge of your seat.",
                text2: "Each heist masterpiece features genius-level planning, brilliant execution under pressure, and the constant tension of potential failure or betrayal that could unravel everything."
            },
            ranking: {
                text: "Our heist complexity index evaluates scheme sophistication, execution brilliance under pressure, and the depth of criminal storytelling techniques used throughout each film.",
                points: [
                    "Heist plan sophistication",
                    "Execution complexity",
                    "Criminal character depth",
                    "Suspense and tension build"
                ]
            },
            experience: {
                text1: "Whether you're seeking intricate planning sequences or adrenaline-pumping action, this collection delivers cinema's most thrilling heist experiences that celebrate criminal genius.",
                text2: "Each film has been selected for its ability to maintain relentless tension throughout—while showcasing brilliantly crafted schemes and unforgettable criminal masterminds you'll root for."
            }
        };
    } else if (collection.slug === 'best-crime-thriller-movies') {
        return {
            badge: "Crime Thriller Cinema",
            title: "Crime Thriller",
            description: "Gritty crime thrillers that expose moral complexity. Ruthless investigations, criminal psychology & ethical dilemmas that blur the line between good and evil.",
            selection: {
                text1: "These films delve deep into the criminal underworld from multiple perspectives—creating complex narratives filled with ethical dilemmas, intense drama, and moral ambiguity.",
                text2: "Each crime thriller features masterfully crafted investigations, complex antagonists you'll understand, and the psychological cat-and-mouse games that define great crime cinema."
            },
            ranking: {
                text: "Our crime thriller index evaluates investigative complexity, moral ambiguity depth, and the sophistication of crime storytelling techniques throughout each film.",
                points: [
                    "Investigative complexity",
                    "Moral ambiguity depth",
                    "Criminal psychology insight",
                    "Narrative tension intensity"
                ]
            },
            experience: {
                text1: "Whether you're seeking complex investigations or moral exploration, this collection delivers cinema's most gripping crime thriller experiences that challenge your sense of justice.",
                text2: "Each film has been selected for its ability to explore the psychology of crime while maintaining intense narrative momentum and unforgettable character development."
            }
        };
    } else if (collection.slug === 'best-detective-thriller-movies') {
        return {
            badge: "Detective Mystery Cinema",
            title: "Detective Thriller",
            description: "Brilliant detective thrillers with unsolvable mysteries. Intricate investigations, genius detective work & shocking revelations that rewrite everything.",
            selection: {
                text1: "From procedural brilliance to psychological depth—these films showcase brilliant detectives unraveling complex cases through intelligence, intuition, and relentless perseverance.",
                text2: "Each detective masterpiece features layered mysteries, complex protagonists obsessed with truth, and investigation techniques that keep you engaged until the final shocking reveal."
            },
            ranking: {
                text: "Our detective thriller index evaluates mystery intricacy, investigative brilliance, and the sophistication of detective storytelling throughout each film.",
                points: [
                    "Mystery intricacy depth",
                    "Detective brilliance",
                    "Investigation methodology",
                    "Revelation impact power"
                ]
            },
            experience: {
                text1: "Whether you're seeking complex mysteries or brilliant detective work, this collection delivers cinema's finest detective thriller experiences that'll make you feel like a detective yourself.",
                text2: "Each film has been selected for its masterful construction of intricate cases and unforgettable detective characters whose obsession with truth captivates and inspires."
            }
        };
    } else if (collection.slug === 'best-revenge-movies') {
        return {
            badge: "Revenge Cinema",
            title: "Revenge",
            description: "Brutal revenge films where justice becomes personal. Systematic vengeance, moral complexity & visceral satisfaction as protagonists destroy those who wronged them.",
            selection: {
                text1: "From methodical takedowns to explosive rampages—these films explore the primal satisfaction of revenge while confronting the psychological and moral cost of crossing that line.",
                text2: "Each revenge masterpiece features protagonists pushed beyond breaking point, transforming grief and rage into calculated or chaotic vengeance that reshapes their entire existence."
            },
            ranking: {
                text: "Our revenge intensity index evaluates vengeance satisfaction, moral complexity depth, and the sophistication of revenge storytelling techniques throughout each film.",
                points: [
                    "Revenge intensity scale",
                    "Moral complexity depth",
                    "Vengeance satisfaction level",
                    "Psychological transformation arc"
                ]
            },
            experience: {
                text1: "Whether you're seeking cathartic violence or profound moral questioning about justice and vengeance, this collection delivers cinema's most powerful revenge experiences without apology.",
                text2: "Each film has been selected for its unflinching exploration of revenge's seductive power and devastating consequences—creating visceral, unforgettable narratives that challenge what justice truly means."
            }
        };
    } else if (collection.slug === 'best-mystery-thriller-movies') {
        return {
            badge: "Mystery Thriller Cinema",
            title: "Mystery Thriller",
            description: "Clever mystery thrillers with impossible puzzles. Intricate clues, shocking revelations & mysteries where every detail matters in the final mind-blowing twist.",
            selection: {
                text1: "These films masterfully weave mysteries that challenge you to piece together clues and anticipate shocking revelations—testing your detective skills with every scene.",
                text2: "Each mystery thriller features intricate plots where nothing is as it seems, every clue matters, and the final revelation transforms everything that came before."
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
                text1: "Whether you're seeking intricate puzzles or shocking twists, this collection delivers cinema's most engaging mystery thriller experiences that reward careful attention to detail.",
                text2: "Each film has been selected for its ability to engage viewers intellectually while delivering satisfying and unexpected revelations that'll make you want to watch again immediately."
            }
        };
    } else if (collection.slug === 'best-thriller-movies') {
        return {
            badge: "Suspense Thriller Cinema",
            title: "Thriller",
            description: "Edge-of-your-seat suspense thrillers you can't pause. Relentless pacing, shocking twists & psychological depth that maintains constant tension throughout.",
            selection: {
                text1: "From relentless pacing to psychological tension—these films deliver the ultimate adrenaline rush while exploring complex characters and moral dilemmas that'll haunt you.",
                text2: "Each thriller masterpiece features high-stakes scenarios, unexpected twists you won't see coming, and the constant threat of danger that keeps you glued to the screen."
            },
            ranking: {
                text: "Our thriller intensity index evaluates suspense intensity, pacing sophistication, and the depth of thriller storytelling techniques throughout each film.",
                points: [
                    "Suspense intensity",
                    "Pacing momentum",
                    "Character psychological depth",
                    "Action sequence caliber"
                ]
            },
            experience: {
                text1: "Whether you're seeking intense suspense or psychological exploration, this collection delivers cinema's most thrilling experiences that'll keep your heart racing from start to finish.",
                text2: "Each film has been selected for its ability to maintain constant tension while developing compelling characters and narratives that demand your complete attention."
            }
        };
    } else if (collection.slug === 'best-survival-movies') {
        return {
            badge: "Survival Cinema",
            title: "Survival",
            description: "Intense survival films where nature doesn't care. Human resilience against brutal wilderness, mountains & deserts—ranked by how desperate the struggle becomes.",
            selection: {
                text1: "From wilderness perils to environmental catastrophes—these films capture the raw essence of human determination against nature's unforgiving and merciless forces.",
                text2: "Each survival masterpiece features protagonists battling brutal elements, hostile wildlife, and their own physical and psychological limits in the desperate pursuit of survival."
            },
            ranking: {
                text: "Our survival intensity index evaluates environmental brutality, human resilience authenticity, and the realism of survival scenarios throughout each film.",
                points: [
                    "Environmental intensity",
                    "Physical challenge realism",
                    "Psychological endurance depth",
                    "Survival ingenuity display"
                ]
            },
            experience: {
                text1: "Whether you're seeking intense physical action or psychological exploration of human limits, this collection delivers cinema's most gripping survival experiences that test the human spirit.",
                text2: "Each film has been selected for its raw, unflinching portrayal of human resilience and the primal struggle for survival against overwhelming odds that seem impossible to overcome."
            }
        };
    } else if (collection.slug === 'best-drama-movies-on-netflix') {
        return {
            badge: "Award-Winning Drama",
            title: "Drama",
            description: "Award-winning dramas streaming on Netflix now. Oscar-level performances, emotionally devastating stories & deeply moving cinema that'll stay with you forever.",
            selection: {
                text1: "From intimate character studies to epic family sagas—these films showcase cinema's ability to capture the full spectrum of human emotion with devastating authenticity.",
                text2: "Each drama masterpiece features complex characters you'll care about, authentic relationships that feel real, and narratives that resonate deeply with the human experience."
            },
            ranking: {
                text: "Our drama quality index evaluates emotional authenticity, character development depth, and the sophistication of dramatic storytelling throughout each film.",
                points: [
                    "Emotional authenticity",
                    "Character development depth",
                    "Narrative emotional impact",
                    "Performance caliber"
                ]
            },
            experience: {
                text1: "Whether you're seeking emotional catharsis or character exploration, this collection delivers cinema's most powerful dramatic experiences that'll move you to tears.",
                text2: "Each film has been selected for its ability to move audiences through authentic human stories and unforgettable performances that define what great acting looks like."
            }
        };
    } else if (collection.slug === 'best-war-films') {
        return {
            badge: "War & Conflict Cinema",
            title: "War Films",
            description: "Unflinching war films that show war's true cost. Visceral D-Day combat, jungle firefights & moral reckoning that challenge war's glorification.",
            selection: {
                text1: "From D-Day beaches to jungle firefights and submarine claustrophobia—these films go beyond tactics and heroism to confront trauma, moral collapse, and war's devastating human cost.",
                text2: "Each war masterpiece features visceral combat that doesn't look away, complex protagonists wrestling with survival and conscience, and narratives that challenge the glorification of warfare."
            },
            ranking: {
                text: "Our war film realism index evaluates combat authenticity, emotional impact depth, anti-war sentiment power, and the sophistication of war storytelling techniques throughout each film.",
                points: [
                    "Combat realism intensity",
                    "Psychological trauma depth",
                    "Human cost authenticity",
                    "Anti-war impact power"
                ]
            },
            experience: {
                text1: "Whether you're seeking visceral combat sequences or profound moral questioning about war's nature, this collection delivers cinema's most powerful war experiences without pulling punches.",
                text2: "Each film has been selected for its unflinching portrayal of warfare's true cost and its ability to provoke deep reflection on conflict, humanity, and the price of violence."
            }
        };
    } else {
        return {
            badge: collection.title,
            title: collection.title,
            description: collection.description || "Curated collection of exceptional cinema that defines the genre.",
            selection: {
                text1: "Expertly selected films from our comprehensive database—each chosen for quality, impact and unforgettable storytelling.",
                text2: "Each selection represents the finest in cinematic storytelling and artistic achievement that'll stay with you long after the credits roll."
            },
            ranking: {
                text: "Our ranking system evaluates artistic quality, narrative impact, and genuine viewer engagement throughout each film.",
                points: [
                    "Artistic excellence",
                    "Narrative sophistication",
                    "Visual achievement",
                    "Emotional resonance"
                ]
            },
            experience: {
                text1: "Discover exceptional cinema carefully tailored to deliver the best viewing experiences in this genre.",
                text2: "Each film has been selected for its unique contribution to cinema and its ability to deliver memorable, impactful storytelling."
            }
        };
    }
};


// 🔥 HEADER CONTENT WITH REVENGE ADDED
const getHeaderContent = () => {
    if (collection.slug === 'movies-like-memento') {
        return {
            title: "Movies Like Memento: 10 Mind-Bending Films", // ✅ Matches meta title
            subtitle: "Memory loss thrillers with shocking twists, non-linear storytelling & identity crisis"
        };
    } else if (collection.slug === 'movies-like-inception') {
        return {
            title: "Movies Like Inception: 10 Reality-Bending Films",
            subtitle: "Layered dreams, reality distortion & Christopher Nolan-level genius storytelling"
        };
    } else if (collection.slug === 'movies-like-shutter-island') {
        return {
            title: "Movies Like Shutter Island: 10 Twisted Films",
            subtitle: "Unreliable narrators, shocking twists & reality-shattering psychological thrillers"
        };
    } else if (collection.slug === 'best-crime-thriller-movies') {
        return {
            title: "Best Crime Thrillers: 10 Ruthless Films",
            subtitle: "From Heat to The Departed—heists, investigations & moral complexity"
        };
    } else if (collection.slug === 'best-heist-thriller-movies') {
        return {
            title: "Best Heist Movies: 10 Master Robberies",
            subtitle: "From Ocean's Eleven to Heat—elaborate plans & high-stakes criminal masterminds"
        };
    } else if (collection.slug === 'best-time-travel-movies') {
        return {
            title: "Best Time Travel Movies: 10 Paradox Films",
            subtitle: "From Primer to Back to the Future—causality loops & temporal chaos"
        };
    } else if (collection.slug === 'best-sci-fi-movies') {
        return {
            title: "Best Sci-Fi Movies: 10 Visionary Films",
            subtitle: "From Blade Runner to Interstellar—groundbreaking concepts & philosophical depth"
        };
    } else if (collection.slug === 'best-psychological-thriller-movies') {
        return {
            title: "Best Psychological Thrillers: 10 Twisted Films",
            subtitle: "Mind-bending plots with intricate narratives, shocking twists & psychological warfare"
        };
    } else if (collection.slug === 'best-thriller-movies') {
        return {
            title: "Best Thriller Movies: 10 Edge-of-Seat Films",
            subtitle: "Relentless suspense with intense pacing, plot twists & psychological depth"
        };
    } else if (collection.slug === 'best-mystery-thriller-movies') {
        return {
            title: "Best Mystery Thrillers: 10 Unsolvable Films",
            subtitle: "Clever detective work, impossible puzzles & shocking revelations"
        };
    } else if (collection.slug === 'best-survival-movies') {
        return {
            title: "Best Survival Movies: 10 Against-All-Odds Films",
            subtitle: "Human resilience vs brutal nature—wilderness, mountains & desert survival"
        };
    } else if (collection.slug === 'best-drama-movies-on-netflix') {
        return {
            title: "Best Netflix Dramas: 10 Award-Winning Films",
            subtitle: "Oscar-winning performances & emotionally devastating stories streaming now"
        };
    } else if (collection.slug === 'best-detective-thriller-movies') {
        return {
            title: "Best Detective Thrillers: 10 Brilliant Films",
            subtitle: "From Zodiac to Prisoners—intricate mysteries & shocking revelations"
        };
    } else if (collection.slug === 'best-revenge-movies') {  // ✅ REVENGE ADDED
        return {
            title: "Best Revenge Movies: 10 Brutal Films",
            subtitle: "From Oldboy to John Wick—systematic vengeance & visceral satisfaction"
        };
    } else if (collection.slug === 'best-war-films') {
        return {
            title: "Best War Films: 10 Unflinching Masterpieces",
            subtitle: "From D-Day to jungle combat—visceral battle scenes & anti-war moral reckoning"
        };
    } else {
        return {
            title: `Best ${collection.title}: Top 10 Films`,
            subtitle: `Curated collection ranked by quality, impact & engagement`
        };
    }
};



// 🔥 LOADER CONTENT WITH REVENGE ADDED
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
    } else if (collection?.slug === 'best-sci-fi-movies') {
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
    } else if (collection?.slug === 'best-revenge-movies') {  // ✅ REVENGE ADDED
        return {
            title: "Loading Best Revenge Movies",
            description: "Curating brutal revenge masterpieces with community reviews and ratings"
        };
    } else if (collection?.slug === 'best-war-films') {
        return {
            title: "Loading Best War Films",
            description: "Curating unflinching war masterpieces with community reviews and ratings"
        };
    } else {
        return {
            title: "Loading Movie Collection",
            description: "Curating exceptional cinema with community reviews and ratings"
        };
    }
};



// 🔥 STATIC META CONTENT WITH REVENGE ADDED
const getStaticMetaContent = () => {
    if (collection.slug === 'movies-like-memento') {
        return {
            title: "Movies Like Memento: 10 Mind-Bending Films", // ✅ 46 chars
            description: "Obsessed with Memento? Discover 10 psychological thrillers with shocking twists, memory loss & non-linear storytelling that'll mess with your mind.", // ✅ 157 chars
            keywords: "movies like memento, memory loss movies, psychological thrillers, non linear storytelling, amnesia movies",
            ogTitle: "Movies Like Memento: 10 Mind-Bending Psychological Thrillers 🧠",
            twitterTitle: "🧠 Obsessed with Memento? Watch These 10 Mind-Bending Films",
            progressText: `of Top ${movies.length} Movies Like Memento`
        };
    } else if (collection.slug === 'movies-like-inception') {
        return {
            title: "Movies Like Inception: 10 Reality-Bending Films", // ✅ 50 chars
            description: "Loved Inception? Explore 10 mind-bending thrillers with layered dreams, reality distortion & Christopher Nolan-level genius. Prepare to be confused.", // ✅ 156 chars
            keywords: "movies like inception, mind bending movies, reality bending films, christopher nolan movies",
            ogTitle: "Movies Like Inception: 10 Reality-Bending Masterpieces 🧠",
            twitterTitle: "🧠 Loved Inception? These 10 Films Will Blow Your Mind",
            progressText: `of Top ${movies.length} Movies Like Inception`
        };
    } else if (collection.slug === 'movies-like-shutter-island') {
        return {
            title: "Movies Like Shutter Island: 10 Twisted Films", // ✅ 47 chars
            description: "Can't stop thinking about Shutter Island? Watch 10 psychological thrillers with unreliable narrators, shocking twists & reality-shattering endings.", // ✅ 157 chars
            keywords: "movies like shutter island, psychological thrillers, unreliable narrator, plot twist movies",
            ogTitle: "Movies Like Shutter Island: 10 Twisted Psychological Thrillers",
            twitterTitle: "🎬 Can't Forget Shutter Island? Watch These 10 Twisted Films",
            progressText: `of Top ${movies.length} Movies Like Shutter Island`
        };
    } else if (collection.slug === 'best-crime-thriller-movies') {
        return {
            title: "Best Crime Thrillers: 10 Ruthless Films", // ✅ 44 chars
            description: "From Heat to The Departed—10 gritty crime thrillers with heists, investigations & moral complexity. For fans who crave dark, intelligent cinema.", // ✅ 153 chars
            keywords: "best crime thriller movies, crime films, heist movies, investigation thrillers",
            ogTitle: "10 Best Crime Thrillers: Heat to The Departed 🔫",
            twitterTitle: "🔫 10 Ruthless Crime Thrillers You Can't Miss (Heat, Departed)",
            progressText: `of Top ${movies.length} Crime Thriller Movies`
        };
    } else if (collection.slug === 'best-heist-thriller-movies') {
        return {
            title: "Best Heist Movies: 10 Master Robberies", // ✅ 42 chars
            description: "From Ocean's Eleven to Heat—10 genius heist thrillers with elaborate plans, high-stakes robberies & criminal masterminds. Every plan is perfect.", // ✅ 154 chars
            keywords: "best heist movies, heist thriller, ocean's eleven, heat movie, robbery films",
            ogTitle: "10 Best Heist Movies: Ocean's Eleven to Heat 💰",
            twitterTitle: "💰 10 Genius Heist Movies (Ocean's, Heat, Inside Man)",
            progressText: `of Top ${movies.length} Heist Thriller Movies`
        };
    } else if (collection.slug === 'best-time-travel-movies') {
        return {
            title: "Best Time Travel Movies: 10 Paradox Films", // ✅ 47 chars
            description: "From Primer to Back to the Future—10 mind-bending time travel films with paradoxes, causality loops & temporal chaos. Your brain will hurt.", // ✅ 149 chars
            keywords: "best time travel movies, time loop films, paradox movies, primer, back to the future",
            ogTitle: "10 Best Time Travel Movies: Primer to Back to the Future ⏰",
            twitterTitle: "⏰ 10 Mind-Bending Time Travel Movies (Primer, Interstellar)",
            progressText: `of Top ${movies.length} Time Travel Movies`
        };
    } else if (collection.slug === 'best-sci-fi-movies') {
        return {
            title: "Best Sci-Fi Movies: 10 Visionary Films", // ✅ 41 chars
            description: "From Blade Runner to Interstellar—10 groundbreaking sci-fi films with visionary concepts, philosophical depth & stunning visuals. Pure genius.", // ✅ 152 chars
            keywords: "best sci fi movies, science fiction films, blade runner, interstellar, visionary sci fi",
            ogTitle: "10 Best Sci-Fi Movies: Blade Runner to Interstellar 🚀",
            twitterTitle: "🚀 10 Visionary Sci-Fi Movies (Blade Runner, Interstellar)",
            progressText: `of Top ${movies.length} Sci-Fi Movies`
        };
    } else if (collection.slug === 'best-psychological-thriller-movies') {
        return {
            title: "Best Psychological Thrillers: 10 Twisted Films", // ✅ 51 chars
            description: "10 mind-bending psychological thrillers with intricate plots, shocking twists & psychological warfare. Perfect for fans who love being disturbed.", // ✅ 154 chars
            keywords: "best psychological thriller movies, mind bending thrillers, psychological depth films",
            ogTitle: "10 Best Psychological Thrillers That'll Mess With Your Mind 🧠",
            twitterTitle: "🧠 10 Twisted Psychological Thrillers That'll Haunt You",
            progressText: `of Top ${movies.length} Psychological Thriller Movies`
        };
    } else if (collection.slug === 'best-thriller-movies') {
        return {
            title: "Best Thriller Movies: 10 Edge-of-Seat Films", // ✅ 48 chars
            description: "10 edge-of-your-seat suspense thrillers with relentless pacing, plot twists & psychological depth. You won't pause. You can't look away.", // ✅ 145 chars
            keywords: "best thriller movies, suspense thrillers, edge of your seat movies, thriller films",
            ogTitle: "10 Best Thriller Movies: You Won't Pause 🔥",
            twitterTitle: "🔥 10 Edge-of-Your-Seat Thrillers You Can't Pause",
            progressText: `of Top ${movies.length} Thriller Movies`
        };
    } else if (collection.slug === 'best-mystery-thriller-movies') {
        return {
            title: "Best Mystery Thrillers: 10 Unsolvable Films", // ✅ 48 chars
            description: "10 detective mystery thrillers with clever investigations, impossible puzzles & shocking revelations. Every clue matters. Every twist counts.", // ✅ 150 chars
            keywords: "best mystery thriller movies, detective films, mystery movies, puzzle thrillers",
            ogTitle: "10 Best Mystery Thrillers: Unsolvable Until the End 🔍",
            twitterTitle: "🔍 10 Detective Mystery Thrillers That'll Stump You",
            progressText: `of Top ${movies.length} Mystery Thriller Movies`
        };
    } else if (collection.slug === 'best-survival-movies') {
        return {
            title: "Best Survival Movies: 10 Against-All-Odds Films", // ✅ 52 chars
            description: "10 intense survival films with human resilience against brutal nature. Wilderness, mountains & deserts—ranked by realism. They survive or die.", // ✅ 151 chars
            keywords: "best survival movies, wilderness survival, human endurance films, nature survival",
            ogTitle: "10 Best Survival Movies: Against All Odds ⛰️",
            twitterTitle: "⛰️ 10 Survival Movies Where Nature Doesn't Care",
            progressText: `of Top ${movies.length} Survival Movies`
        };
    } else if (collection.slug === 'best-drama-movies-on-netflix') {
        return {
            title: "Best Netflix Dramas: 10 Award-Winning Films", // ✅ 48 chars
            description: "10 award-winning dramas streaming on Netflix now. Oscar-winning performances, emotionally devastating stories & deeply moving cinema. Tissues required.", // ✅ 160 chars
            keywords: "best drama movies netflix, netflix dramas, award winning films, oscar winning movies netflix",
            ogTitle: "10 Best Netflix Dramas: Award-Winning Films to Watch Now 🎭",
            twitterTitle: "🎭 10 Award-Winning Dramas on Netflix (Tissues Required)",
            progressText: `of Top ${movies.length} Netflix Drama Movies`
        };
    } else if (collection.slug === 'best-detective-thriller-movies') {
        return {
            title: "Best Detective Thrillers: 10 Brilliant Films", // ✅ 49 chars
            description: "From Zodiac to Prisoners—10 masterful detective thrillers with intricate mysteries, brilliant investigations & shocking revelations. Pure genius.", // ✅ 154 chars
            keywords: "best detective thriller movies, zodiac movie, prisoners film, detective investigation films",
            ogTitle: "10 Best Detective Thrillers: Zodiac to Prisoners 🔍",
            twitterTitle: "🔍 10 Brilliant Detective Thrillers (Zodiac, Prisoners, Se7en)",
            progressText: `of Top ${movies.length} Detective Thriller Movies`
        };
    } else if (collection.slug === 'best-revenge-movies') {  // ✅ REVENGE ADDED
        return {
            title: "Best Revenge Movies: 10 Brutal Films", // ✅ 39 chars
            description: "From Oldboy to John Wick—10 brutal revenge films with systematic vengeance, moral complexity & visceral satisfaction. Justice becomes personal.", // ✅ 152 chars
            keywords: "best revenge movies, revenge films, oldboy, john wick, kill bill, vengeance movies",
            ogTitle: "10 Best Revenge Movies: Oldboy to John Wick 🗡️",
            twitterTitle: "🗡️ 10 Brutal Revenge Movies (Oldboy, Gladiator, John Wick)",
            progressText: `of Top ${movies.length} Revenge Movies`
        };
    } else if (collection.slug === 'best-war-films') {
        return {
            title: "Best War Films: 10 Unflinching Masterpieces", // ✅ 48 chars
            description: "From D-Day to jungle combat—10 unflinching war masterpieces with visceral battle scenes, moral reckoning & anti-war themes. War is hell.", // ✅ 144 chars
            keywords: "best war films, war movies, d-day films, combat movies, anti-war films",
            ogTitle: "10 Best War Films: Unflinching D-Day to Jungle Combat ⚔️",
            twitterTitle: "⚔️ 10 Unflinching War Films That Show War's True Cost",
            progressText: `of Top ${movies.length} War Films`
        };
    } else {
        return {
            title: `Best ${collection.title}: Top 10 Films (2025)`,
            description: `10 curated ${collection.title.toLowerCase()} films ranked by quality, impact & engagement. For true cinema fans.`,
            keywords: `best ${collection.title.toLowerCase()}, curated films, exceptional cinema`,
            ogTitle: `Best ${collection.title}: 10 Must-Watch Films`,
            twitterTitle: `🎬 Best ${collection.title}: 10 Films You Can't Miss`,
            progressText: `of Top ${movies.length} ${collection.title}`
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
        sessionStorage.removeItem('fromSciFiCollection');
        sessionStorage.removeItem('fromRevengeCollection');  // ✅ REVENGE ADDED
        sessionStorage.removeItem('fromWarFilmsCollection');

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
        } else if (collection.slug === 'best-sci-fi-movies') {
            sessionStorage.setItem('fromSciFiCollection', 'true');
        } else if (collection.slug === 'best-revenge-movies') {  // ✅ REVENGE ADDED
            sessionStorage.setItem('fromRevengeCollection', 'true');
        } else if (collection.slug === 'best-war-films') {
            sessionStorage.setItem('fromWarFilmsCollection', 'true');
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
<motion.div
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
>
    <h1 
        className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extralight tracking-[0.05em] sm:tracking-[0.1em] text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-yellow-300 to-amber-300" 
        style={{ 
            fontFamily: "'Playfair Display', serif", 
            textShadow: '0 0 80px rgba(234, 179, 8, 0.15)',
            lineHeight: '1.1'
        }}
    >
        <span className="block leading-tight" style={{ letterSpacing: '0.02em' }}>
            {headerContent.title}
        </span>
    </h1>
</motion.div>

                        
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
                                    : collection?.slug === 'best-sci-fi-movies'
                                    ? 'movies/sci-fi/'
                                    : collection?.slug === 'best-revenge-movies'  // ✅ REVENGE ADDED
                                    ? 'movies/revenge/'
                                    : collection?.slug === 'best-war-films'
                                    ? 'movies/war-films/'
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

{/* 🔥 FIXED FOR NEXT.JS 15 - WITH REVENGE COLLECTION URL */}
<AnimatePresence mode="wait">
  {currentMovie && (
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
          : collection.slug === 'best-sci-fi-movies'
          ? `/movies/sci-fi/${currentMovie.imdbID}`
          : collection.slug === 'best-revenge-movies' // ✅ REVENGE
          ? `/movies/revenge/${currentMovie.imdbID}`
          : collection.slug === 'best-war-films'
          ? `/movies/war-films/${currentMovie.imdbID}`
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
  )}
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
                                        } else if (collection.slug === 'best-sci-fi-movies') {
                                            detailPageUrl = `/movies/sci-fi/${currentMovie.imdbID}`;
                                        } else if (collection.slug === 'best-revenge-movies') {  // ✅ REVENGE
                                            detailPageUrl = `/movies/revenge/${currentMovie.imdbID}`;
                                        } else if (collection.slug === 'best-war-films') {
                                            detailPageUrl = `/movies/war-films/${currentMovie.imdbID}`;
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

// 🔥 SSG FUNCTIONS WITH REVENGE COLLECTION ADDED 🗡️
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

// ✅ CORRECT getStaticProps() - maps correct database to each collection WITH REVENGE
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
        case 'best-sci-fi-movies':
            movieDatabase = SCI_FI_MOVIES;
            break;
        case 'best-revenge-movies':  // ✅ REVENGE ADDED
            movieDatabase = REVENGE_MOVIES;
            break;
        case 'best-war-films':
            movieDatabase = WAR_FILMS_DATABASE;
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
