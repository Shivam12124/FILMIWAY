// pages/collection/[slug].js - FIXED BOTTOM GAP 

import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Crown, Star, MessageSquare, Volume2, VolumeX, Play, Pause, Menu, X, Home, Eye, MousePointer, TrendingUp, Users, Search, Brain, Zap, Film, Award, Mountain, Shield } from 'lucide-react';

// âœ… NEW SURVIVAL FORMAT IMPORTS (MATRIX, SE7EN & PARASITE ADDED)
import { COMPLETE_MOVIE_DATABASE as SURVIVAL_DATABASE, COMPLETE_MOVIE_DATA as SURVIVAL_DATA } from '../../utils/survivalMovieData';
import { COMPLETE_MOVIE_DATABASE as MATRIX_DATABASE } from '../../utils/matrixMovieData';
import { COMPLETE_MOVIE_DATABASE as SE7EN_DATABASE, COMPLETE_MOVIE_DATA as SE7EN_DATA } from '../../utils/se7enMovieData';
import { COMPLETE_MOVIE_DATABASE as PARASITE_DATABASE, COMPLETE_MOVIE_DATA as PARASITE_DATA } from '../../utils/parasiteMovieData'; 
import { COMPLETE_MOVIE_DATABASE as OLDBOY_DATABASE, COMPLETE_MOVIE_DATA as OLDBOY_DATA } from '../../utils/oldboyMovieData'; 
import { COMPLETE_MOVIE_DATABASE as DONNIE_DARKO_DATABASE, COMPLETE_MOVIE_DATA as DONNIE_DARKO_DATA } from '../../utils/donnieDarkoMovieData';
import { COMPLETE_MOVIE_DATABASE as BLACK_SWAN_DATABASE, COMPLETE_MOVIE_DATA as BLACK_SWAN_DATA } from '../../utils/blackSwanMovieData';
import { COMPLETE_MOVIE_DATABASE as EYES_WIDE_SHUT_DATABASE, COMPLETE_MOVIE_DATA as EYES_WIDE_SHUT_DATA } from '../../utils/eyesWideShutMovieData';
import { COMPLETE_MOVIE_DATABASE as INTERSTELLAR_DATABASE, COMPLETE_MOVIE_DATA as INTERSTELLAR_DATA } from '../../utils/interstellarMovieData';
import { COMPLETE_MOVIE_DATABASE as CRIME_THRILLER_DATABASE, COMPLETE_MOVIE_DATA as CRIME_THRILLER_DATA } from '../../utils/crimeThrillerMovieData';
import { COMPLETE_MOVIE_DATABASE as WAR_FILMS_DATABASE, COMPLETE_MOVIE_DATA as WAR_FILMS_DATA } from '../../utils/warFilmsMovieData';
import { COMPLETE_MOVIE_DATABASE as HULU_ACTION_DATABASE, COMPLETE_MOVIE_DATA as HULU_ACTION_DATA } from '../../utils/huluActionMovieData';
import { COMPLETE_MOVIE_DATABASE as HULU_ROMANCE_DATABASE, COMPLETE_MOVIE_DATA as HULU_ROMANCE_DATA } from '../../utils/huluRomanceMovieData';
import { COMPLETE_MOVIE_DATABASE as HULU_HORROR_DATABASE, COMPLETE_MOVIE_DATA as HULU_HORROR_DATA } from '../../utils/huluHorrorMovieData';
import { COMPLETE_MOVIE_DATABASE as HULU_COMEDY_DATABASE, COMPLETE_MOVIE_DATA as HULU_COMEDY_DATA } from '../../utils/huluComedyMovieData';
import { COMPLETE_MOVIE_DATABASE as HULU_SCIFI_DATABASE, COMPLETE_MOVIE_DATA as HULU_SCIFI_DATA } from '../../utils/huluSciFiMovieData';
import { COMPLETE_MOVIE_DATABASE as HULU_THRILLER_DATABASE, COMPLETE_MOVIE_DATA as HULU_THRILLER_DATA } from '../../utils/huluThrillerMovieData';
import { COMPLETE_MOVIE_DATABASE, COMPLETE_MOVIE_DATA } from '../../utils/movieData';
import { COMPLETE_MOVIE_DATABASE as HULU_BEST_DATABASE, COMPLETE_MOVIE_DATA as HULU_BEST_DATA } from '../../utils/huluBestMoviesData';
import { COMPLETE_MOVIE_DATABASE as HULU_DRAMA_DATABASE, COMPLETE_MOVIE_DATA as HULU_DRAMA_DATA } from '../../utils/huluDramaMovieData';
import { COMPLETE_MOVIE_DATABASE as HBO_MAX_COMEDY_DATABASE, COMPLETE_MOVIE_DATA as HBO_MAX_COMEDY_DATA } from '../../utils/hboMaxComedyMovieData';
import { COMPLETE_MOVIE_DATABASE as PARAMOUNT_ACTION_DATABASE, COMPLETE_MOVIE_DATA as PARAMOUNT_ACTION_DATA } from '../../utils/paramountActionMovieData';
import { COMPLETE_MOVIE_DATABASE as PARAMOUNT_SCIFI_DATABASE, COMPLETE_MOVIE_DATA as PARAMOUNT_SCIFI_DATA } from '../../utils/paramountSciFiMovieData';
import { COMPLETE_MOVIE_DATABASE as PARAMOUNT_ROMANCE_DATABASE, COMPLETE_MOVIE_DATA as PARAMOUNT_ROMANCE_DATA } from '../../utils/paramountRomanceMovieData';
import { COMPLETE_MOVIE_DATABASE as PARAMOUNT_DRAMA_DATABASE, COMPLETE_MOVIE_DATA as PARAMOUNT_DRAMA_DATA } from '../../utils/paramountDramaMovieData';
import { COMPLETE_MOVIE_DATABASE as PARAMOUNT_THRILLER_DATABASE, COMPLETE_MOVIE_DATA as PARAMOUNT_THRILLER_DATA } from '../../utils/paramountThrillerMovieData';
import { COMPLETE_MOVIE_DATABASE as PARAMOUNT_FAMILY_DATABASE, COMPLETE_MOVIE_DATA as PARAMOUNT_FAMILY_DATA } from '../../utils/paramountFamilyMovieData';
import { COMPLETE_MOVIE_DATABASE as PARAMOUNT_HORROR_DATABASE, COMPLETE_MOVIE_DATA as PARAMOUNT_HORROR_DATA } from '../../utils/paramountHorrorMovieData';
import { COMPLETE_MOVIE_DATABASE as PARAMOUNT_COMEDY_DATABASE, COMPLETE_MOVIE_DATA as PARAMOUNT_COMEDY_DATA } from '../../utils/paramountComedyMovieData';
import { COMPLETE_MOVIE_DATABASE as PARAMOUNT_BEST_DATABASE, COMPLETE_MOVIE_DATA as PARAMOUNT_BEST_DATA } from '../../utils/paramountBestMoviesData';
import { COMPLETE_MOVIE_DATABASE as PEACOCK_ACTION_ADVENTURE_DATABASE, COMPLETE_MOVIE_DATA as PEACOCK_ACTION_ADVENTURE_DATA } from '../../utils/peacockActionAdventureData';
import { COMPLETE_MOVIE_DATABASE as PEACOCK_SCIFI_DATABASE, COMPLETE_MOVIE_DATA as PEACOCK_SCIFI_DATA } from '../../utils/peacockSciFiMovieData';
import { COMPLETE_MOVIE_DATABASE as PEACOCK_ROMANCE_DATABASE, COMPLETE_MOVIE_DATA as PEACOCK_ROMANCE_DATA } from '../../utils/peacockRomanceMovieData';
import { COMPLETE_MOVIE_DATABASE as PEACOCK_FAMILY_DATABASE, COMPLETE_MOVIE_DATA as PEACOCK_FAMILY_DATA } from '../../utils/peacockFamilyMovieData';
import { COMPLETE_MOVIE_DATABASE as PEACOCK_DRAMA_DATABASE, COMPLETE_MOVIE_DATA as PEACOCK_DRAMA_DATA } from '../../utils/peacockDramaMovieData';
import { COMPLETE_MOVIE_DATABASE as PEACOCK_THRILLER_DATABASE, COMPLETE_MOVIE_DATA as PEACOCK_THRILLER_DATA } from '../../utils/peacockThrillerMovieData';
import { COMPLETE_MOVIE_DATABASE as PEACOCK_BEST_DATABASE, COMPLETE_MOVIE_DATA as PEACOCK_BEST_DATA } from '../../utils/peacockBestMoviesData';
import { COMPLETE_MOVIE_DATABASE as PEACOCK_COMEDY_DATABASE, COMPLETE_MOVIE_DATA as PEACOCK_COMEDY_DATA } from '../../utils/peacockComedyMovieData';

import { COMPLETE_MOVIE_DATABASE as HULU_FAMILY_DATABASE, COMPLETE_MOVIE_DATA as HULU_FAMILY_DATA } from '../../utils/huluFamilyMovieData';
import { COMPLETE_MOVIE_DATABASE as HBO_ACTION_DATABASE, COMPLETE_MOVIE_DATA as HBO_ACTION_DATA } from '../../utils/hboActionMovieData';
import { COMPLETE_MOVIE_DATABASE as HBO_MAX_ROMANCE_DATABASE, COMPLETE_MOVIE_DATA as HBO_MAX_ROMANCE_DATA } from '../../utils/hboMaxRomanceMovieData';
import { COMPLETE_MOVIE_DATABASE as HBO_MAX_THRILLER_DATABASE, COMPLETE_MOVIE_DATA as HBO_MAX_THRILLER_DATA } from '../../utils/hboMaxThrillerMovieData';
import { COMPLETE_MOVIE_DATABASE as HBO_MAX_FAMILY_DATABASE, COMPLETE_MOVIE_DATA as HBO_MAX_FAMILY_DATA } from '../../utils/hboMaxFamilyMovieData';
import { COMPLETE_MOVIE_DATABASE as HBO_MAX_SCIFI_DATABASE, COMPLETE_MOVIE_DATA as HBO_MAX_SCIFI_DATA } from '../../utils/hboMaxSciFiMovieData';
import { COMPLETE_MOVIE_DATABASE as HBO_MAX_HORROR_DATABASE, COMPLETE_MOVIE_DATA as HBO_MAX_HORROR_DATA } from '../../utils/hboMaxHorrorMovieData';
import { COMPLETE_MOVIE_DATABASE as HBO_MAX_BEST_DATABASE, COMPLETE_MOVIE_DATA as HBO_MAX_BEST_DATA } from '../../utils/hboMaxBestMoviesData';
import { COMPLETE_MOVIE_DATABASE as HBO_MAX_DRAMA_DATABASE, COMPLETE_MOVIE_DATA as HBO_MAX_DRAMA_DATA } from '../../utils/hboMaxDramaMovieData';
import { 
  COMPLETE_SCI_FI_DATABASE as SCI_FI_DATABASE, 
  COMPLETE_SCI_FI_DETAILS as SCI_FI_DATA 
} from '../../utils/sciFiMovieData';


import { COMPLETE_MOVIE_DATABASE as THRILLER_MOVIES } from '../../utils/thrillerMovieData';
import { COMPLETE_MOVIE_DATABASE as MYSTERY_THRILLER_MOVIES } from '../../utils/mysteryThrillerMovieData'; 
import { COMPLETE_MOVIE_DATABASE as DETECTIVE_THRILLER_MOVIES } from '../../utils/detectiveThrillerMovieData';
import { COMPLETE_MOVIE_DATABASE as PSYCH_THRILLER_MOVIES } from '../../utils/psychologicalThrillerMovieData'; 
import { COMPLETE_MOVIE_DATABASE as HEIST_THRILLER_MOVIES } from '../../utils/heistThrillerMovieData';
import { COMPLETE_MOVIE_DATABASE as TIME_TRAVEL_MOVIES } from '../../utils/timeTravelMovieData';

import { COMPLETE_MOVIE_DATABASE as REVENGE_MOVIES } from '../../utils/revengeMovieData';

// Components
import CinematicBackground from '../../components/CinematicBackground';
import StrategicControls from '../../components/StrategicControls';
import CinematicMovieCard from '../../components/CinematicMovieCard';
import RelatedCollections from '../../components/RelatedCollections';

// Data
import { COLLECTIONS, getAllCollectionSlugs, getCollectionBySlug } from '../../data/collections';

// Safe property getters
const getMovieTitle = (movie) => movie?.Title || movie?.title || movie?.name || 'Unknown Movie';
const getMovieYear = (movie) => movie?.Year || movie?.year || movie?.releaseYear || '2024';
const getMovieGenre = (movie) => {
    const genre = movie?.Genre || movie?.genre || movie?.genres || 'Drama';
    return typeof genre === 'string' ? genre.split(',')[0].trim() : 'Drama';
};
const getMovieRuntime = (movie) => movie?.Runtime || movie?.runtime || '120 min';


// PC HEADER
const SiteHeader = () => (
    <header className="hidden md:block absolute top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-28 md:h-36">
            <motion.div 
                className="pointer-events-auto"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Link href="/" className="flex items-center justify-start">
                    <div className="w-36 h-16 sm:w-44 sm:h-20 md:w-56 md:h-24 flex items-center justify-start hover:scale-105 transition-transform duration-300">
<Image
  src="/filmiway-logo.svg"
  alt="Filmiway"
  width={220}
  height={110}
  loading="lazy"  // âœ… ADD THIS
  className="w-full h-full object-contain object-left"
/>

                    </div>
                </Link>
            </motion.div>
            <motion.div 
                className="pointer-events-auto"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <Link 
                    href="/" 
                    className="flex items-center gap-2 px-4 py-2 bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg hover:bg-gray-800/90 hover:border-yellow-400/50 transition-all duration-300 shadow-lg group"
                >
                    <Home className="w-4 h-4 text-yellow-400 group-hover:scale-110 transition-transform" />
                    <span className="text-yellow-400 text-sm font-medium">Home</span>
                </Link>
            </motion.div>
        </div>
    </header>
);

// MOBILE-ONLY LOGO COMPONENT
const MobileLogo = () => (
    <motion.div 
        className="md:hidden absolute top-6 left-6 z-50 pointer-events-auto"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
    >
        <Link href="/" className="flex items-center justify-start">
            <div className="w-36 h-16 flex items-center justify-start">
       <Image
  src="/filmiway-logo.svg"
  alt="Filmiway"
  width={144}
  height={72}
  loading="lazy"  // âœ… ADD THIS
  className="w-full h-full object-contain object-left"
/>

            </div>
        </Link>
    </motion.div>
);

// MOBILE-ONLY HOMEPAGE BUTTON
const MobileHomepageButton = () => (
    <motion.div 
        className="md:hidden absolute top-9 right-6 z-50 pointer-events-auto"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
    >
        <Link 
            href="/" 
            className="flex items-center gap-2 px-3 py-1.5 bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg"
        >
            <Home className="w-4 h-4 text-yellow-400" />
        </Link>
    </motion.div>
);

// ðŸ”¥ COLLECTION PAGE COMPONENT
const CollectionPage = ({ collection, movies }) => {
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [isMuted, setIsMuted] = useState(false);
    const [isAutoPlay, setIsAutoPlay] = useState(false);

    // Handle return from movie detail page + position tracking
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
        
        // âœ… LOADER: Animation for Humans (Content is already rendered behind it for SEO)
        const timer = setTimeout(() => setIsLoading(false), 2500);
        return () => clearTimeout(timer);
    }, []);

// ðŸ”¥ SEO-OPTIMIZED COLLECTION CONTENT
const getCollectionContent = () => {
    if (collection.slug === 'movies-like-memento') {
        return {
            badge: "ðŸ§© Narrative Jigsaw",
            title: "10 Fragmented Movies (Ranked by Confusion)",
            description: "Don't trust the timeline. Don't trust the narrator. We ranked 10 masterpieces that shatter storytelling into a thousand pieces.",
            selection: {
                text1: "Linear storytelling is for people who want to be comfortable. We selected films that force you to workâ€”stories told backwards, sideways, and in recursive loops.",
                text2: "From the memory loss of Memento to the identity fracturing of Enemy, this collection is a test of your ability to reconstruct the truth."
            },
            ranking: {
                text: "Our 'Fragmentation Index' measures how broken a film's narrative structure is. We analyze timeline jumps, unreliable narrators, and the difficulty of the final assembly.",
                points: [
                    "Non-Linear Density",
                    "Timeline Distortion",
                    "Unreliable Narration",
                    "Puzzle Difficulty"
                ]
            },
            experience: {
                text1: "You will need to pay attention to every cut, every prop, and every line of dialogue. The clue you missed in minute 5 might solve the mystery in minute 90.",
                text2: "Warning: These films do not hold your hand. You are the detective now."
            },

        };
    } else if (collection.slug === 'movies-like-inception') {
    return {
        badge: "âš ï¸ Cognitive Hazard",
        title: "Reality-Shattering Cinema",
        description: "Inception had rules. Totems. Levels you could count. These films have none of that. Just recursive nightmares where logic collapses and you're left holding a notebook full of questions.",
        selection: {
            text1: "Primer's nine overlapping timelines. Synecdoche's infinite recursion. Mulholland Drive's dream-reality inversion. These aren't puzzles with solutionsâ€”they're labyrinths with no center.",
            text2: "Nolan held your hand. These directors cut it off. No exposition dumps. No convenient explanations. JustStructural complexity that makes Inception look like a children's book about dreams."
        },
        ranking: {
            text: "Ranked by how many viewings it takes to stop being confused. Spoiler: You never stop. You just learn to live with the uncertainty.",
            points: [
                "Narrative recursion depth",
                "Reality layers (can you map them?)",
                "Logic collapse severity",
                "Rewatch terror (it gets worse)"
            ]
        },
        experience: {
            text1: "From Primer's engineering equations to Triangle's temporal loop horror, these films treat your brain like a stress test. Some viewers break. The rest become obsessed.",
            text2: "Warning: Inception was training wheels. These are the films that make film students quit their degrees and Reddit users write 10,000-word essays at 3 AM. Welcome to the deep end."
        }
    

        };
    } else if (collection.slug === 'movies-like-the-matrix') {
        return {
            badge: "Cyberpunk Reality Cinema",
            title: "The Matrix",
            description: "Mind-bending cyberpunk films exploring simulated realities. Digital consciousness, reality distortion & protagonist awakening that redefine what we think about existence itself.",
            selection: {
                text1: "From dystopian AIs to consciousness transfersâ€”these films explore the boundary between digital and human consciousness, asking profound questions about the nature of reality and free will.",
                text2: "Each cyberpunk masterpiece features protagonists discovering their world is artificial, leading them through layers of deception toward uncomfortable truths about existence and control."
            },
            ranking: {
                text: "Our cyber-complexity index evaluates digital world sophistication, consciousness exploration depth, and the intensity of reality distortion throughout each film.",
                points: [
                    "Cyber-reality complexity",
                    "Consciousness distortion depth",
                    "Digital world sophistication",
                    "Awakening narrative power"
                ]
            },
            experience: {
                text1: "Whether you're seeking technological thrills or existential questioning, this collection delivers cinema's most ambitious cyberpunk experiences that blur the line between real and artificial.",
                text2: "Each film has been selected for its ability to create lasting philosophical impactâ€”exploring themes of free will, consciousness, and artificial reality that continue fascinating viewers long after credits roll."
            }
        };
    } else if (collection.slug === 'movies-like-se7en') {
        return {
            badge: "Dark Noir Masterpieces",
            title: "Se7en",
            description: "Gritty, rain-soaked noir thrillers hunting pure evil. Obsessive detectives, sadistic killers & nihilistic atmospheres that explore the seven deadly sins of humanity.",
            selection: {
                text1: "From the rain-slicked streets of Fincher's city to the rural darkness of South Koreaâ€”these films track the obsessive, often self-destructive hunt for monsters who hide in plain sight.",
                text2: "Each noir gem features weary detectives pushed to their breaking points, atmospheric tension you can feel, and endings that refuse to compromise with a traditional happy resolution."
            },
            ranking: {
                text: "Our noir intensity index evaluates atmospheric gloom, detective obsession depth, and the disturbing complexity of the antagonist's grand design.",
                points: [
                    "Atmospheric dread level",
                    "Detective obsession depth",
                    "Villainous complexity",
                    "Nihilistic narrative impact"
                ]
            },
            experience: {
                text1: "Whether you're drawn to the procedural details or the psychological toll of the hunt, this collection delivers cinema's most compelling descents into darkness.",
                text2: "Each film forces you to confront the uncomfortable reality that sometimes, understanding the monster means losing a part of yourself in the process."
            }
        };


} else if (collection.slug === 'best-horror-movies-on-hulu') {
        return {
            badge: "Visceral Horror Cinema",
            title: "Best Horror Movies on Hulu",
            description: "The most brutally terrifying films streaming on Hulu. From trauma-inducing gore to slow-burn dread & cosmic horror.",
            selection: {
                text1: "From the rule-breaking chaos of 'When Evil Lurks' to the suffocating dread of 'Longlegs'â€”these films represent the darkest corners of the Hulu library.",
                text2: "Each selection features visceral scares, psychological trauma, and atmospheres so oppressive they feel cursed. Not for the faint of heart."
            },
            ranking: {
                text: "Our scariness index evaluates atmospheric dread, visceral shock value, and the lingering psychological trauma left by the film.",
                points: [
                    "Atmospheric dread level",
                    "Visceral shock & gore",
                    "Psychological trauma depth",
                    "Unpredictable terror factor"
                ]
            },
            experience: {
                text1: "Whether you're seeking cosmic nihilism or slasher brutality, this collection delivers cinema's most traumatizing experiences.",
                text2: "Each film has been selected for its ability to ruin your sleepâ€”offering nightmares that stick with you long after the credits roll."
            }
        };


} else if (collection.slug === 'best-romance-movies-on-hulu') {
        return {
            badge: "Prestige Romance Cinema",
            title: "Romance Movies on Hulu",
            description: "The most emotionally resonant romance films streaming on Hulu. From Palme d'Or winners to devastating ghost stories & nostalgic first loves.",
            selection: {
                text1: "From the chaotic energy of 'Anora' to the quiet devastation of 'All of Us Strangers'â€”these films represent the pinnacle of modern romantic cinema available on Hulu.",
                text2: "Each selection features electric chemistry, profound emotional stakes, and narratives that move beyond clichÃ©s to explore the messy, beautiful reality of connection."
            },
            ranking: {
                text: "Our emotional resonance index evaluates on-screen chemistry, narrative emotional weight, and the lasting impact of the film's romantic arc.",
                points: [
                    "Chemistry intensity",
                    "Emotional narrative depth",
                    "Prestige & acclaim",
                    "Romantic tension payoff"
                ]
            },
            experience: {
                text1: "Whether you're seeking a good cry or a rush of joy, this collection delivers cinema's most powerful explorations of the human heart.",
                text2: "Each film has been selected for its ability to linger with youâ€”offering moments of intimacy and heartbreak that feel deeply, authentically real."
            }
        };


} else if (collection.slug === 'best-action-movies-on-hulu') {
        return {
            badge: "High-Octane Cinema",
            title: "Action Movies on Hulu",
            description: "High-octane action movies streaming on Hulu. Brutal fight choreography, relentless pacing & adrenaline-fueled plots that redefine the genre.",
            selection: {
                text1: "From the primal hunt of 'Prey' to the stylized violence of 'Kingsman'â€”these films represent the pinnacle of modern action cinema available on Hulu.",
                text2: "Each selection features innovative fight choreography, memorable heroes, and set pieces that have become legendary in the action genre."
            },
            ranking: {
                text: "Our adrenaline index evaluates fight choreography quality, pacing intensity, and the visceral impact of action sequences throughout each film.",
                points: [
                    "Fight choreography innovation",
                    "Pacing and momentum",
                    "Visceral impact level",
                    "Stunt work quality"
                ]
            },
            experience: {
                text1: "Whether you're seeking martial arts mastery or sci-fi warfare, this collection delivers cinema's most thrilling adrenaline rushes.",
                text2: "Each film has been selected for its ability to keep your heart racingâ€”with action sequences that demand to be rewatched and analyzed."
            }
        };

        } else if (collection.slug === 'best-comedy-movies-on-hulu') {
        return {
            badge: "Side-Splitting Cinema",
            title: "Best Comedy Movies on Hulu",
            description: "The funniest films streaming on Hulu. From teen chaos and mockumentaries to biting satire & action-packed laughs.",
            selection: {
                text1: "From the legendary teen awkwardness of 'Superbad' to the unscripted chaos of 'Borat'â€”these films represent the gold standard of modern comedy.",
                text2: "Each selection features unforgettable quotes, chaotic energy, and performances that range from slapstick genius to biting social satire."
            },
            ranking: {
                text: "Our laughter index evaluates the frequency of laughs, the chaos factor of the plot, and the enduring quotability of the script.",
                points: [
                    "Laughter frequency & intensity",
                    "Chaos factor & unpredictability",
                    "Script quotability score",
                    " comedic performance impact"
                ]
            },
            experience: {
                text1: "Whether you're seeking nostalgic comfort or shocking satire, this collection delivers cinema's most effective dopamine hits.",
                text2: "Each film has been selected for its ability to improve your mood instantlyâ€”offering laughs that have stood the test of time and culture."
            }
        };


} else if (collection.slug === 'best-sci-fi-movies-on-hulu') {
    return {
        badge: "Mind-Expanding Sci-Fi",
        title: "Best Sci-Fi Movies on Hulu",
        description: "The most visionary sci-fi films streaming on Hulu. From time-travel paradoxes to alien invasions & dystopian futures that challenge reality.",
        selection: {
            text1: "From the mind-bending loops of 'Donnie Darko' to the primal survival of 'Prey'â€”these films represent the most ambitious and visually stunning science fiction available on Hulu.",
            text2: "Each selection features high-concept storytelling, groundbreaking visuals, and philosophical questions about humanity's future, technology, and place in the universe."
        },
        ranking: {
            text: "Our mind-bend index evaluates conceptual complexity, visual spectacle, and the depth of the sci-fi themes explored throughout each film.",
            points: [
                "Conceptual complexity score",
                "Visual spectacle & world-building",
                "Narrative innovation level",
                "Philosophical depth impact"
            ]
        },
        experience: {
            text1: "Whether you're seeking intellectual challenges or breathtaking alien worlds, this collection delivers cinema's most imaginative visions of the future.",
            text2: "Each film has been selected for its ability to provoke thought and wonderâ€”offering glimpses into realities that feel both impossible and terrifyingly plausible."
        }
    };


    } else if (collection.slug === 'best-thriller-movies-hulu') {
    return {
        badge: "Edge-of-Seat Thrillers",
        title: "Best Thriller Movies on Hulu",
        description: "The most suspenseful thrillers streaming on Hulu. From high-stakes heists to psychological nightmares & courtroom tension.",
        selection: {
            text1: "From the tactical perfection of 'Heat' to the psychological descent of 'Black Swan'â€”these films represent the pinnacle of tension and suspense available on Hulu.",
            text2: "Each selection features masterclass direction, unforgettable performances, and plots that tighten the screws until the very last frame."
        },
        ranking: {
            text: "Our suspense intensity index evaluates pacing, psychological pressure, and the visceral impact of tension throughout each film.",
            points: [
                "Suspense intensity score",
                "Psychological pressure depth",
                "Narrative pacing quality",
                "Visceral impact factor"
            ]
        },
        experience: {
            text1: "Whether you're seeking intellectual puzzles or heart-pounding action, this collection delivers cinema's most gripping experiences.",
            text2: "Each film has been selected for its ability to keep you on the edge of your seatâ€”offering twists and tension that demand your full attention."
        }
    };



} else if (collection.slug === 'best-movies-on-hulu') {
    return {
        badge: "Streaming Essentials",
        title: "Best Movies on Hulu",
        description: "The definitive ranking of the highest-rated films streaming on Hulu right now. From Heat to Superbad, covering all genres.",
        selection: {
            text1: "From the tactical perfection of 'Heat' to the quiet mastery of 'Perfect Days'â€”these films represent the absolute best cinema available on the platform right now.",
            text2: "Each selection is a genre-defining masterpiece, chosen for its critical acclaim, cultural impact, and rewatchability across action, drama, sci-fi, and romance."
        },
        ranking: {
            text: "Our definitive ranking evaluates cinematic legacy, critical reception, and audience impact to determine the essential watchlist for any serious film lover.",
            points: [
                "Cinematic legacy & impact",
                "Critical acclaim score",
                "Genre-defining quality",
                "Rewatchability factor"
            ]
        },
        experience: {
            text1: "Whether you're seeking high-octane thrills or profound emotional depth, this collection delivers the most essential viewing experiences on Hulu.",
            text2: "Each film has been selected as a 'must-watch'â€”guaranteeing that no matter what you pick, you are watching a top-tier example of filmmaking craft."
        }
    };
    } else if (collection.slug === 'best-comedy-movies-on-peacock') {
        return {
            badge: "Side-Splitting Cinema",
            title: "Best Comedy Movies on Peacock",
            description: "The funniest films streaming on Peacock. From surreal satire to slapstick classics & high-octane chaos.",
            selection: {
                text1: "From the absurdist genius of 'Monty Python' to the unhinged chaos of 'Anchorman'â€”these films represent the absolute peaks of cinematic humor available on Peacock.",
                text2: "Each selection features unforgettable quotes, chaotic energy, and performances that range from slapstick genius to biting social satire."
            },
            ranking: {
                text: "Our laughter index evaluates the frequency of laughs, the chaos factor of the plot, and the enduring quotability of the script.",
                points: [
                    "Laughter frequency & intensity",
                    "Chaos factor & unpredictability",
                    "Script quotability score",
                    "Comedic performance impact"
                ]
            },
            experience: {
                text1: "Whether you're seeking nostalgic comfort or shocking satire, this collection delivers cinema's most effective dopamine hits.",
                text2: "Each film has been selected for its ability to improve your mood instantlyâ€”offering laughs that have stood the test of time and culture."
            }
        };


} else if (collection.slug === 'best-drama-movies-on-hulu') {
        return {
            badge: "Emotional Powerhouse Cinema",
            title: "Best Drama Movies on Hulu",
            description: "The most emotionally resonant dramas streaming on Hulu. Deep character studies, heartbreaking performances & human stories that stay with you forever.",
            selection: {
                text1: "From the 12-year journey of 'Boyhood' to the quiet devastation of 'All of Us Strangers'â€”these films represent the pinnacle of emotional storytelling available on Hulu.",
                text2: "Each selection features profound character depth, authentic human connection, and narratives that explore the beautiful, painful complexity of being alive."
            },
            ranking: {
                text: "Our emotional intensity index evaluates character depth, narrative authenticity, and the lasting emotional impact of the film's themes.",
                points: [
                    "Emotional resonance depth",
                    "Character development complexity",
                    "Narrative authenticity score",
                    "Thematic impact weight"
                ]
            },
            experience: {
                text1: "Whether you're seeking cathartic tears or quiet reflection, this collection delivers cinema's most powerful explorations of the human condition.",
                text2: "Each film has been selected for its ability to touch the soulâ€”offering moments of grace, grief, and connection that feel universally, heartbreakingly real."
            }
        };



} else if (collection.slug === 'best-family-movies-on-hulu') {
    return {
        badge: "Wholesome Family Cinema",
        title: "Best Family Movies on Hulu",
        description: "The top 10 family movies streaming on Hulu right now. From Robot Dreams to Night at the Museumâ€”ranked by wholesomeness and entertainment value.",
        selection: {
            text1: "From the silent emotional journey of 'Robot Dreams' to the high-energy fun of 'Sonic the Hedgehog 2'â€”these films represent the best family entertainment available on Hulu.",
            text2: "Each selection features positive messages, engaging stories for all ages, and moments of genuine warmth that bring families together."
        },
        ranking: {
            text: "Our wholesome score evaluates positive themes, age-appropriateness, and the overall 'feel-good' factor throughout each film.",
            points: [
                "Wholesome score intensity",
                "Fun factor rating",
                "Family-friendly themes",
                "Emotional warmth depth"
            ]
        },
        experience: {
            text1: "Whether you're seeking a fun adventure or a heartwarming story, this collection delivers cinema's most memorable family experiences.",
            text2: "Each film has been selected for its ability to entertain both kids and adultsâ€”offering laughter, tears, and valuable life lessons."
        }
    };



} else if (collection.slug === 'best-action-movies-on-hbo-max') {
    return {
        badge: "Epic Action Cinema",
        title: "Action Movies on HBO Max",
        description: "Grand-scale action epics streaming on HBO Max. Mythic heroes, visceral combat & cinematic spectacles that define the blockbuster genre.",
        selection: {
            text1: "From the tactical gun-fu of 'John Wick' to the mythic scale of 'Dune: Part Two'â€”these films represent the absolute peak of action filmmaking available on HBO Max.",
            text2: "Each selection features legendary set pieces, groundbreaking stunts, and narratives that balance massive spectacle with intimate, character-driven stakes."
        },
        ranking: {
            text: "Our adrenaline index evaluates combat intensity, epic scale, and the visceral impact of the action choreography throughout each film.",
            points: [
                "Combat choreography excellence",
                "Epic scale & world-building",
                "Visceral impact intensity",
                "Cinematic spectacle score"
            ]
        },
        experience: {
            text1: "Whether you're seeking gritty crime sagas or fantasy warfare, this collection delivers cinema's most ambitious and adrenaline-fueled experiences.",
            text2: "Each film has been selected for its ability to aweâ€”offering moments of pure cinematic grandeur that demand the biggest screen possible."
        }
    };

} else if (collection.slug === 'best-romance-movies-on-hbo-max') {
        return {
            badge: "Prestige Romance Cinema",
            title: "Best Romance Movies on HBO Max",
            description: "The definitive ranking of romance movies on HBO Max. From the wartime sacrifice of Casablanca to the restrained longing of In the Mood for Love. Ranked by emotional intensity.",
            selection: {
                text1: "From the eternal gold standard of 'Casablanca' to the quiet devastation of 'Past Lives'â€”these films represent the absolute pinnacle of romantic cinema available on HBO Max.",
                text2: "Each selection features electric chemistry, profound emotional stakes, and narratives that move beyond clichÃ©s to explore the messy, beautiful, and heartbreaking reality of connection."
            },
            ranking: {
                text: "Our emotional intensity index evaluates on-screen chemistry, narrative emotional weight, and the lasting impact of the film's romantic arc.",
                points: [
                    "Emotional intensity score",
                    "Chemistry saturation level",
                    "Cinematic legacy & impact",
                    "Narrative devastation weight"
                ]
            },
            experience: {
                text1: "Whether you're seeking the wit of a perfect rom-com or the ache of forbidden love, this collection delivers cinema's most powerful explorations of the human heart.",
                text2: "Each film has been selected for its ability to linger with youâ€”offering moments of intimacy and heartbreak that feel universally, heartbreakingly real."
            }
        };


} else if (collection.slug === 'best-thriller-movies-on-hbo-max') {
    return {
        badge: "Psychological Tension Cinema",
        title: "Best Thriller Movies on HBO Max",
        description: "The most suspenseful thrillers streaming on HBO Max. From psychological nightmares like Funny Games to cerebral sci-fi like Ex Machina.",
        selection: {
            text1: "From the nihilistic home invasion of 'Funny Games' to the social horror of 'Get Out'â€”these films represent the pinnacle of tension and suspense available on HBO Max.",
            text2: "Each selection features masterclass direction, unbearable psychological pressure, and narratives that tighten the screws until the very last frame."
        },
        ranking: {
            text: "Our suspense intensity index evaluates pacing, psychological pressure, and the visceral impact of tension throughout each film.",
            points: [
                "Suspense intensity score",
                "Psychological pressure depth",
                "Narrative twist sophistication",
                "Visceral impact factor"
            ]
        },
        experience: {
            text1: "Whether you're seeking cerebral puzzles or heart-pounding dread, this collection delivers cinema's most gripping experiences.",
            text2: "Each film has been selected for its ability to keep you on the edge of your seatâ€”offering twists and tension that demand your full attention."
        }
    };


} else if (collection.slug === 'best-family-movies-on-hbo-max') {
    return {
        badge: "Magical Family Cinema",
        title: "Best Family Movies on HBO Max",
        description: "The top 10 family movies streaming on HBO Max right now. From The Wizard of Oz to Harry Potterâ€”ranked by wholesomeness and fun factor.",
        selection: {
            text1: "From the timeless magic of 'The Wizard of Oz' to the visual poetry of 'Flow'â€”these films represent the absolute best family entertainment available on HBO Max.",
            text2: "Each selection features positive messages, engaging stories for all ages, and moments of genuine wonder that bring families together for a perfect movie night."
        },
        ranking: {
            text: "Our wholesome score evaluates positive themes, age-appropriateness, and the overall 'fun factor' throughout each film.",
            points: [
                "Wholesome score intensity",
                "Fun factor rating",
                "Family-friendly themes",
                "Emotional warmth depth"
            ]
        },
        experience: {
            text1: "Whether you're seeking a nostalgic classic or a modern animated masterpiece, this collection delivers cinema's most memorable family experiences.",
            text2: "Each film has been selected for its ability to entertain both kids and adultsâ€”offering laughter, tears, and valuable life lessons that resonate across generations."
        }
    };


} else if (collection.slug === 'best-sci-fi-movies-on-hbo-max') {
    return {
        badge: "Cosmic Sci-Fi Cinema",
        title: "Best Sci-Fi Movies on HBO Max",
        description: "The definitive ranking of the best Sci-Fi movies on HBO Max. From the cosmic scale of 2001 to the visceral action of Mad Max.",
        selection: {
            text1: "From the philosophical odyssey of '2001' to the mind-bending architecture of 'Inception'â€”these films represent the absolute pinnacle of science fiction available on HBO Max.",
            text2: "Each selection features visionary direction, groundbreaking visuals, and narratives that challenge our understanding of reality, time, and human existence."
        },
        ranking: {
            text: "Our spectacular level index evaluates visual scale, world-building depth, and the conceptual audacity of the sci-fi themes throughout each film.",
            points: [
                "Spectacular level intensity",
                "Mind-bend score",
                "Conceptual depth",
                "Cinematic transcendence"
            ]
        },
        experience: {
            text1: "Whether you're seeking intellectual challenges or breathtaking spectacle, this collection delivers cinema's most ambitious visions of the future.",
            text2: "Each film has been selected for its ability to aweâ€”offering moments of pure cinematic grandeur that demand the biggest screen possible."
        }
    };

    } else if (collection.slug === 'best-horror-movies-on-hbo-max') {
    return {
        badge: "Pure Nightmare Fuel",
        title: "Best Horror Movies on HBO Max",
        description: "The definitive ranking of the scariest movies on HBO Max. From the jump scares of Insidious to the dread of The Witch.",
        selection: {
            text1: "From the supernatural terror of 'The Conjuring' to the relentless gore of 'Evil Dead Rise'â€”these films represent the darkest, most intense horror available on HBO Max.",
            text2: "Each selection features visceral scares, psychological trauma, and atmospheres so oppressive they feel cursed. Not for the faint of heart."
        },
        ranking: {
            text: "Our scariness index evaluates atmospheric dread, visceral shock value, and the lingering psychological trauma left by the film.",
            points: [
                "Atmospheric dread level",
                "Visceral shock & gore",
                "Psychological trauma depth",
                "Unpredictable terror factor"
            ]
        },
        experience: {
            text1: "Whether you're seeking cosmic nihilism or supernatural brutality, this collection delivers cinema's most traumatizing experiences.",
            text2: "Each film has been selected for its ability to ruin your sleepâ€”offering nightmares that stick with you long after the credits roll."
        }
    };



} else if (collection.slug === 'best-movies-on-hbo-max') {
    return {
        badge: "Cinematic Masterpieces",
        title: "Best Movies on HBO Max",
        description: "The definitive ranking of the highest-rated films streaming on HBO Max right now. From Seven Samurai to Dune: Part Two.",
        selection: {
            text1: "From the timeless philosophy of 'Stalker' to the modern sci-fi epic 'Dune: Part Two'â€”these films represent the absolute best cinema available on the platform.",
            text2: "Each selection is a genre-defining masterpiece, chosen for its critical acclaim, cultural impact, and cinematic mastery across action, sci-fi, romance, and drama."
        },
        ranking: {
            text: "Our definitive ranking evaluates cinematic mastery, critical reception, and legacy to determine the essential watchlist for any serious film lover.",
            points: [
                "Cinematic mastery score",
                "Critical acclaim level",
                "Cultural legacy impact",
                "Visual & narrative innovation"
            ]
        },
        experience: {
            text1: "Whether you're seeking a classic like 'Casablanca' or a modern epic like 'The Dark Knight', this collection delivers the most essential viewing experiences on HBO Max.",
            text2: "Each film has been selected as a 'must-watch'â€”guaranteeing that no matter what you pick, you are watching a top-tier example of filmmaking craft."
        }
    };


} else if (collection.slug === 'best-drama-movies-on-hbo-max') {
    return {
        badge: "Emotional Powerhouse Cinema",
        title: "Best Drama Movies on HBO Max",
        description: "The most emotionally resonant dramas streaming on HBO Max. Deep character studies, heartbreaking performances & human stories that stay with you forever.",
        selection: {
            text1: "From the visually stunning 'Moonlight' to the raw intensity of 'Taxi Driver'â€”these films represent the pinnacle of dramatic storytelling available on HBO Max.",
            text2: "Each selection features profound character depth, authentic human connection, and narratives that explore the beautiful, painful complexity of being alive."
        },
        ranking: {
            text: "Our emotional intensity index evaluates character depth, narrative authenticity, and the lasting emotional impact of the film's themes.",
            points: [
                "Emotional resonance depth",
                "Character development complexity",
                "Narrative authenticity score",
                "Thematic impact weight"
            ]
        },
        experience: {
            text1: "Whether you're seeking cathartic tears or quiet reflection, this collection delivers cinema's most powerful explorations of the human condition.",
            text2: "Each film has been selected for its ability to touch the soulâ€”offering moments of grace, grief, and connection that feel universally, heartbreakingly real."
        }
    };


} else if (collection.slug === 'best-comedy-movies-on-hbo-max') {
    return {
        badge: "Satirical Masterpieces",
        title: "Best Comedy Movies on HBO Max",
        description: "The definitive ranking of the funniest movies on HBO Max. From the satire of The Great Dictator to the chaos of The LEGO Batman Movie.",
        selection: {
            text1: "From the timeless slapstick of 'City Lights' to the sharp modern satire of 'Barbie'â€”these films represent the absolute best comedy available on HBO Max.",
            text2: "Each selection features brilliant writing, unforgettable performances, and a unique comedic voice that has stood the test of time."
        },
        ranking: {
            text: "Our laughter index evaluates the frequency of laughs, the chaos factor of the plot, and the enduring quotability of the script.",
            points: [
                "Laughter frequency & intensity",
                "Chaos factor & unpredictability",
                "Script quotability score",
                "Satirical depth impact"
            ]
        },
        experience: {
            text1: "Whether you're seeking a classic like 'Singin' in the Rain' or a modern favorite like 'Fargo', this collection delivers cinema's most effective dopamine hits.",
            text2: "Each film has been selected for its ability to improve your mood instantlyâ€”offering laughs that range from intellectual satire to pure, joyful absurdity."
        }
    };


} else if (collection.slug === 'best-action-movies-on-paramount-plus') {
    return {
        badge: "High-Octane Action",
        title: "Best Action Movies on Paramount+",
        description: "The definitive ranking of adrenaline-fueled cinema on Paramount+. From Mach 10 aerial combat to the Burj Khalifa climb.",
        selection: {
            text1: "From the practical stunt mastery of 'Mission: Impossible â€“ Fallout' to the G-force intensity of 'Top Gun: Maverick'â€”these films represent the gold standard of modern action cinema.",
            text2: "Each selection prioritizes practical effects over CGI, featuring actors risking their lives for the shot and set pieces that have redefined the limits of what's possible on camera."
        },
        ranking: {
            text: "Our adrenaline index evaluates stunt authenticity, pacing intensity, and the visceral impact of the action choreography throughout each film.",
            points: [
                "Practical stunt authenticity",
                "Aerial & vehicle combat scale",
                "Pacing & momentum intensity",
                "Visceral impact score"
            ]
        },
        experience: {
            text1: "Whether you're seeking espionage thrills or aerial dogfights, this collection delivers cinema's most heart-pounding experiences.",
            text2: "Each film has been selected for its refusal to compromise on realismâ€”offering spectacle that feels dangerous, tangible, and exhilaratingly real."
        }
    };


} else if (collection.slug === 'best-sci-fi-movies-on-paramount-plus') {
    return {
        badge: "Cosmic Sci-Fi Cinema",
        title: "Best Sci-Fi Movies on Paramount+",
        description: "Visionary science fiction films exploring cosmic scope, advanced technology, and alien contact. From Interstellar to Star Trek.",
        selection: {
            text1: "From the theoretical physics of 'Interstellar' to the linguistic mysteries of 'Arrival'â€”these films represent the pinnacle of science fiction available on Paramount+.",
            text2: "Each selection features high-concept storytelling, groundbreaking visuals, and narratives that challenge our understanding of space, time, and humanity's future."
        },
        ranking: {
            text: "Our sci-fi complexity index evaluates scientific depth, visual spectacle, and the conceptual audacity of the themes explored throughout each film.",
            points: [
                "Sci-Fi complexity score",
                "Visual spectacle intensity",
                "Conceptual depth",
                "Cinematic scale"
            ]
        },
        experience: {
            text1: "Whether you're seeking hard sci-fi realism or thrilling space opera, this collection delivers cinema's most ambitious visions of the cosmos.",
            text2: "Each film has been selected for its ability to inspire wonderâ€”offering moments of pure cinematic grandeur that demand the biggest screen possible."
        }
    };


} else if (collection.slug === 'best-romance-movies-on-paramount-plus') {
    return {
        badge: "Prestige Romance Cinema",
        title: "Romance Movies on Paramount+",
        description: "The most emotionally resonant romance films streaming on Paramount+. From the epic tragedy of Titanic to the heartwarming devotion of 50 First Dates.",
        selection: {
            text1: "From the timeless devotion of 'It's a Wonderful Life' to the heartbreaking reality of 'Like Crazy'â€”these films represent the pinnacle of romantic cinema available on Paramount+.",
            text2: "Each selection features profound emotional stakes, electric chemistry, and narratives that explore the beautiful, messy, and enduring power of love across time and circumstance."
        },
        ranking: {
            text: "Our emotional intensity index evaluates chemistry, narrative depth, and the lasting impact of the film's romantic arc.",
            points: [
                "Emotional intensity score",
                "Chemistry saturation level",
                "Narrative emotional weight",
                "Romantic legacy impact"
            ]
        },
        experience: {
            text1: "Whether you're seeking a sweeping epic or an intimate character study, this collection delivers cinema's most powerful explorations of the human heart.",
            text2: "Each film has been selected for its ability to linger with youâ€”offering moments of joy, heartbreak, and connection that feel universally, authentically real."
        }
    };


} else if (collection.slug === 'best-core-drama-movies-on-paramount-plus') {
    return {
        badge: "Core Drama Masterpieces",
        title: "Best Core Drama Movies on Paramount+",
        description: "The definitive ranking of the most emotionally powerful dramas on Paramount+. From the ruthless ambition of There Will Be Blood to the timeless journey of Forrest Gump.",
        selection: {
            text1: "From the oil-soaked madness of 'There Will Be Blood' to the quiet devastation of 'The English Patient'â€”these films represent the absolute pinnacle of dramatic storytelling available on Paramount+.",
            text2: "Each selection features profound character depth, authentic human connection, and narratives that explore the beautiful, painful complexity of being alive."
        },
        ranking: {
            text: "Our emotional intensity index evaluates character depth, narrative authenticity, and the lasting emotional impact of the film's themes.",
            points: [
                "Emotional resonance depth",
                "Character development complexity",
                "Narrative authenticity score",
                "Thematic impact weight"
            ]
        },
        experience: {
            text1: "Whether you're seeking cathartic tears or quiet reflection, this collection delivers cinema's most powerful explorations of the human condition.",
            text2: "Each film has been selected for its ability to touch the soulâ€”offering moments of grace, grief, and connection that feel universally, heartbreakingly real."
        }
    };


    } else if (collection.slug === 'best-thriller-movies-on-paramount-plus') {
    return {
        badge: "Psychological Tension",
        title: "Best Thriller Movies on Paramount+",
        description: "The most suspenseful thrillers on Paramount+. From the relentless dread of No Country for Old Men to the claustrophobia of 10 Cloverfield Lane.",
        selection: {
            text1: "From the coin-toss tension of 'No Country for Old Men' to the obsessive hunt of 'Zodiac'â€”these films represent the pinnacle of suspense available on Paramount+.",
            text2: "Each selection features masterclass direction, unbearable psychological pressure, and narratives that tighten the screws until the very last frame."
        },
        ranking: {
            text: "Our suspense intensity index evaluates pacing, psychological pressure, and the visceral impact of tension throughout each film.",
            points: [
                "Suspense intensity score",
                "Psychological pressure depth",
                "Narrative twist sophistication",
                "Visceral impact factor"
            ]
        },
        experience: {
            text1: "Whether you're seeking cerebral puzzles or heart-pounding dread, this collection delivers cinema's most gripping experiences.",
            text2: "Each film has been selected for its ability to keep you on the edge of your seatâ€”offering twists and tension that demand your full attention."
        }
    };


} else if (collection.slug === 'best-family-movies-on-paramount-plus') {
    return {
        badge: "Wholesome Family Fun",
        title: "Best Family Movies on Paramount+",
        description: "The top 10 family movies streaming on Paramount+ right now. From Rango to Sonic the Hedgehog 3â€”ranked by fun factor and wholesomeness.",
        selection: {
            text1: "From the animated masterpiece 'Rango' to the high-speed adventure of 'Sonic the Hedgehog 3'â€”these films represent the best family entertainment available on Paramount+.",
            text2: "Each selection features positive messages, engaging stories for all ages, and moments of genuine fun that bring families together."
        },
        ranking: {
            text: "Our fun factor index evaluates entertainment value, humor, and age-appropriateness throughout each film.",
            points: [
                "Fun factor intensity",
                "Wholesome score",
                "Family-friendly themes",
                "Animation quality & humor"
            ]
        },
        experience: {
            text1: "Whether you're seeking a laugh-out-loud comedy or an exciting adventure, this collection delivers cinema's most memorable family experiences.",
            text2: "Each film has been selected for its ability to entertain both kids and adultsâ€”offering laughter, action, and valuable life lessons."
        }
    };
} else if (collection.slug === 'best-horror-movies-on-paramount-plus') {
    return {
        badge: "Pure Nightmare Fuel",
        title: "Best Horror Movies on Paramount+",
        description: "The definitive ranking of the scariest movies on Paramount+. From the jump scares of Insidious to the dread of The Witch.",
        selection: {
            text1: "From the supernatural terror of 'The Conjuring' to the relentless gore of 'Evil Dead Rise'â€”these films represent the darkest, most intense horror available on Paramount+.",
            text2: "Each selection features visceral scares, psychological trauma, and atmospheres so oppressive they feel cursed. Not for the faint of heart."
        },
        ranking: {
            text: "Our scariness index evaluates atmospheric dread, visceral shock value, and the lingering psychological trauma left by the film.",
            points: [
                "Atmospheric dread level",
                "Visceral shock & gore",
                "Psychological trauma depth",
                "Unpredictable terror factor"
            ]
        },
        experience: {
            text1: "Whether you're seeking cosmic nihilism or supernatural brutality, this collection delivers cinema's most traumatizing experiences.",
            text2: "Each film has been selected for its ability to ruin your sleepâ€”offering nightmares that stick with you long after the credits roll."
        }
    };
} else if (collection.slug === 'best-comedy-movies-on-paramount-plus') {
    return {
        badge: "Hidden Comedy Vault",
        title: "Best Comedy Movies on Paramount+",
        description: "Everyone's scrolling Netflix for comedies while Paramount+ has Tropic Thunder, Anchorman, and The Naked Gun collecting dust. These are the classics you actually rewatchâ€”not algorithm bait.",
        selection: {
            text1: "No Netflix originals that disappear in six months. No algorithm-approved mediocrity. Just endlessly quotable comedies that defined their eras: Tropic Thunder's Hollywood satire, Anchorman's absurdism, The Naked Gun's slapstick perfection.",
            text2: "These films survived because they're actually funnyâ€”not because they tested well with focus groups. Rewatchable. Quotable. Still hilarious decades later. The kind of comedies streaming services forgot how to make."
        },
        ranking: {
            text: "Ranked by rewatchability: How many times have you quoted this movie? How often do you put it on in the background? Does it get funnier or worse over time?",
            points: [
                "Quotability factor (can you recite scenes?)",
                "Rewatch endurance (improves or degrades?)",
                "Comedy density (laughs per minute)",
                "Cultural staying power"
            ]
        },
        experience: {
            text1: "From Tropic Thunder's fake trailers to Anchorman's jazz flute scene, these are the comedies with layers. First watch: you laugh. Tenth watch: you're still finding new jokes.",
            text2: "Warning: These aren't safe corporate comedies. They're the films that got made before studios focused-grouped the edge away. Politically incorrect. Absurd. Unapologetically hilarious."
        }
    };

} else if (collection.slug === 'best-movies-on-paramount-plus') {
    return {
        badge: "Cinematic Masterpieces",
        title: "Best Movies on Paramount+",
        description: "The definitive ranking of the highest-rated films streaming on Paramount+ right now. From The Godfather to Top Gun: Maverick.",
        selection: {
            text1: "From the timeless brilliance of 'The Godfather' to the modern spectacle of 'Top Gun: Maverick'â€”these films represent the absolute best cinema available on the platform.",
            text2: "Each selection is a genre-defining masterpiece, chosen for its critical acclaim, cultural impact, and cinematic mastery across action, sci-fi, romance, and drama."
        },
        ranking: {
            text: "Our definitive ranking evaluates cinematic mastery, critical reception, and legacy to determine the essential watchlist for any serious film lover.",
            points: [
                "Cinematic mastery score",
                "Critical acclaim level",
                "Cultural legacy impact",
                "Visual & narrative innovation"
            ]
        },
        experience: {
            text1: "Whether you're seeking a classic like 'The Godfather' or a modern epic like 'Mission: Impossible', this collection delivers the most essential viewing experiences on Paramount+.",
            text2: "Each film has been selected as a 'must-watch'â€”guaranteeing that no matter what you pick, you are watching a top-tier example of filmmaking craft."
        }
    };
} else if (collection.slug === 'best-action-adventure-movies-on-peacock') {
    return {
        badge: "High-Octane Cinema",
        title: "Best Action & Adventure Movies on Peacock",
        description: "A curated list of the most thrilling action and adventure movies available on Peacock, ranked for adrenaline junkies.",
        selection: {
            text1: "From epic blockbusters to intense, character-driven thrillers, this collection represents the best of Peacock's action lineup.",
            text2: "Each film is chosen for its heart-pounding action sequences, compelling story, and overall entertainment value."
        },
        ranking: {
            text: "Our adrenaline index evaluates fight choreography quality, pacing intensity, and the visceral impact of action sequences throughout each film.",
            points: [
                "Fight choreography innovation",
                "Pacing and momentum",
                "Visceral impact level",
                "Stunt work quality"
            ]
        },
        experience: {
            text1: "Whether you're looking for a classic action hero or a modern, gritty thriller, this collection has something to get your pulse racing.",
            text2: "Each film has been selected for its ability to keep your heart racingâ€”with action sequences that demand to be rewatched and analyzed."
                }
            };
        } else if (collection.slug === 'best-sci-fi-movies-on-peacock') {
            return {
                badge: "Mind-Bending Sci-Fi",
                title: "Best Sci-Fi Movies on Peacock",
                description: "The most visionary sci-fi films streaming on Peacock. From time-travel paradoxes to alien invasions & dystopian futures that challenge reality.",
                selection: {
                    text1: "From the quantum chaos of 'Coherence' to the cosmic horror of 'Nope'â€”these films represent the most ambitious and visually stunning science fiction available on Peacock.",
                    text2: "Each selection features high-concept storytelling, groundbreaking visuals, and philosophical questions about humanity's future, technology, and place in the universe."
                },
                ranking: {
                    text: "Our mind-bend index evaluates conceptual complexity, visual spectacle, and the depth of the sci-fi themes explored throughout each film.",
                    points: [
                        "Conceptual complexity score",
                        "Visual spectacle & world-building",
                        "Narrative innovation level",
                        "Philosophical depth impact"
                    ]
                },
                experience: {
                    text1: "Whether you're seeking intellectual challenges or breathtaking alien worlds, this collection delivers cinema's most imaginative visions of the future.",
                    text2: "Each film has been selected for its ability to provoke thought and wonderâ€”offering glimpses into realities that feel both impossible and terrifyingly plausible."
                }
            };
            } else if (collection.slug === 'best-romance-movies-on-peacock') {
                return {
                    badge: "Prestige Romance Cinema",
                    title: "Best Romance Movies on Peacock",
                    description: "The most emotionally resonant romance films streaming on Peacock. From classic love stories to modern romantic comedies.",
                    selection: {
                        text1: "From timeless classics to contemporary gems, these films represent the pinnacle of romantic cinema available on Peacock.",
                        text2: "Each selection features electric chemistry, profound emotional stakes, and narratives that explore the beautiful, messy, and enduring power of love."
                    },
                    ranking: {
                        text: "Our emotional intensity index evaluates chemistry, narrative depth, and the lasting impact of the film's romantic arc.",
                        points: [
                            "Emotional intensity score",
                            "Chemistry saturation level",
                            "Narrative emotional weight",
                            "Romantic legacy impact"
                        ]
                    },
                    experience: {
                        text1: "Whether you're seeking a sweeping epic or an intimate character study, this collection delivers cinema's most powerful explorations of the human heart.",
                        text2: "Each film has been selected for its ability to linger with youâ€”offering moments of joy, heartbreak, and connection that feel universally, authentically real."
                    }
                };
            } else if (collection.slug === 'best-family-movies-on-peacock') {
                return {
                    badge: "Wholesome Family Cinema",
                    title: "Best Family Movies on Peacock",
                    description: "The top 10 family movies streaming on Peacock right now. From How to Train Your Dragon to Harry Potterâ€”ranked by wholesomeness and entertainment value.",
                    selection: {
                        text1: "From the animated masterpiece 'How to Train Your Dragon' to the magical world of 'Harry Potter'â€”these films represent the best family entertainment available on Peacock.",
                        text2: "Each selection features positive messages, engaging stories for all ages, and moments of genuine warmth that bring families together."
                    },
                    ranking: {
                        text: "Our wholesome score evaluates positive themes, age-appropriateness, and the overall 'feel-good' factor throughout each film.",
                        points: [
                            "Wholesome score intensity",
                            "Fun factor rating",
                            "Family-friendly themes",
                            "Emotional warmth depth"
                        ]
                    },
                    experience: {
                        text1: "Whether you're seeking a fun adventure or a heartwarming story, this collection delivers cinema's most memorable family experiences.",
                        text2: "Each film has been selected for its ability to entertain both kids and adultsâ€”offering laughter, tears, and valuable life lessons."
                    }
                };
            } else if (collection.slug === 'best-drama-movies-on-peacock') {
        return {
            badge: "Emotional Powerhouse Cinema",
            title: "Best Drama Movies on Peacock",
            description: "The most emotionally resonant dramas streaming on Peacock. Deep character studies, heartbreaking performances & human stories that stay with you forever.",
            selection: {
                text1: "From award-winning masterpieces to indie gems, these films represent the pinnacle of dramatic storytelling available on Peacock.",
                text2: "Each selection features profound character depth, authentic human connection, and narratives that explore the beautiful, painful complexity of being alive."
            },
            ranking: {
                text: "Our emotional intensity index evaluates character depth, narrative authenticity, and the lasting emotional impact of the film's themes.",
                points: [
                    "Emotional resonance depth",
                    "Character development complexity",
                    "Narrative authenticity score",
                    "Thematic impact weight"
                ]
            },
            experience: {
                text1: "Whether you're seeking cathartic tears or quiet reflection, this collection delivers cinema's most powerful explorations of the human condition.",
                text2: "Each film has been selected for its ability to touch the soulâ€”offering moments of grace, grief, and connection that feel universally, heartbreakingly real."
                }
                };
    } else if (collection.slug === 'best-thriller-movies-on-peacock') {
    return {
        badge: "Edge-of-Seat Thrillers",
        title: "Best Thriller Movies on Peacock",
        description: "The most suspenseful thrillers streaming on Peacock. From high-stakes heists to psychological nightmares & courtroom tension.",
        selection: {
            text1: "From the tactical perfection of 'The Killer' to the psychological descent of 'The Black Phone'â€”these films represent the pinnacle of tension and suspense available on Peacock.",
            text2: "Each selection features masterclass direction, unforgettable performances, and plots that tighten the screws until the very last frame."
        },
        ranking: {
            text: "Our suspense intensity index evaluates pacing, psychological pressure, and the visceral impact of tension throughout each film.",
            points: [
                "Suspense intensity score",
                "Psychological pressure depth",
                "Narrative pacing quality",
                "Visceral impact factor"
            ]
        },
        experience: {
            text1: "Whether you're seeking intellectual puzzles or heart-pounding action, this collection delivers cinema's most gripping experiences.",
            text2: "Each film has been selected for its ability to keep you on the edge of your seatâ€”offering twists and tension that demand your full attention."
        }
    };
    } else if (collection.slug === 'best-movies-on-peacock') {
    return {
        badge: "Cinematic Masterpieces",
        title: "Best Movies on Peacock",
        description: "The definitive ranking of the highest-rated films streaming on Peacock right now. From cinematic classics to modern blockbusters.",
        selection: {
            text1: "From timeless masterpieces to modern marvelsâ€”these films represent the absolute best cinema available on the platform.",
            text2: "Each selection is a genre-defining masterpiece, chosen for its critical acclaim, cultural impact, and cinematic mastery across all genres."
        },
        ranking: {
            text: "Our definitive ranking evaluates cinematic mastery, critical reception, and legacy to determine the essential watchlist for any serious film lover.",
            points: [
                "Cinematic mastery score",
                "Critical acclaim level",
                "Cultural legacy impact",
                "Visual & narrative innovation"
            ]
        },
        experience: {
            text1: "Whether you're seeking a timeless classic or a modern epic, this collection delivers the most essential viewing experiences on Peacock.",
            text2: "Each film has been selected as a 'must-watch'â€”guaranteeing that no matter what you pick, you are watching a top-tier example of filmmaking craft."
        }
    };
    } else if (collection.slug === 'movies-like-black-swan') {
                return {
                    badge: "Psychological Obsession Cinema",
                    title: "Black Swan",
                    description: "Intense psychological thrillers about performance pressure and identity collapse. Ballet obsession, perfectionism spirals & psychological breakdowns that blur reality and nightmare.",
                    selection: {
                text1: "From ballet studios to music conservatoriesâ€”these films explore how artistic perfection demands total sacrifice, pushing protagonists into identity crises where they can no longer distinguish their performance from their true self.",
                text2: "Each psychological masterpiece features characters consumed by their craft, facing mentors who demand the impossible, and spiraling into madness as the line between dedication and self-destruction disappears completely."
            },
            ranking: {
                text: "Our psychological intensity index evaluates perfectionism pressure, identity dissolution depth, and the sophistication of mental breakdown portrayal throughout each film.",
                points: [
                    "Perfectionism pressure scale",
                    "Identity crisis intensity",
                    "Psychological breakdown sophistication",
                    "Performance vs reality blur"
                ]
            },
            experience: {
                text1: "Whether you're seeking psychological depth or disturbing character studies, this collection delivers cinema's most intense explorations of obsession and identity collapse.",
                text2: "Each film has been selected for its unflinching portrayal of artistic sacrificeâ€”creating unforgettable narratives where ambition becomes indistinguishable from madness, leaving viewers questioning where dedication ends and self-destruction begins."
            }
        };


} else if (collection.slug === 'movies-like-eyes-wide-shut') {
    return {
        badge: "Elite Conspiracy Thrillers",
        title: "Eyes Wide Shut",
        description: "Films about secret societies, occult rituals, and the hidden world of the ultra-rich. Paranoid descents into forbidden territory where curiosity gets you killed.",
        selection: {
            text1: "Masked rituals. Satanic cults. Shadow hierarchies. These films reveal what happens when outsiders stumble into the elite's secret playgroundsâ€”and realize they were never supposed to leave.",
            text2: "Each film follows protagonists who breach the invisible wall between ordinary life and the ruling class's hidden ceremonies. Dream logic. Surveillance paranoia. No one will believe what they saw."
        },
        ranking: {
            text: "Ranked by conspiracy depth, occult atmosphere, and how effectively each film makes you question who really runs the world.",
            points: [
                "Secret society authenticity",
                "Paranoia & surveillance dread",
                "Occult ritual atmosphere",
                "Elite power commentary"
            ]
        },
        experience: {
            text1: "From Kubrick's final warning to modern exposÃ©s of wealth and ritual, these films create suffocating dreadâ€”the sense of being watched by forces you cannot comprehend.",
            text2: "You'll question every gala, every private club, every unexplained death of a whistleblower. Welcome to cinema's most unsettling rabbit holes."
        }
    };



          } else if (collection.slug === 'movies-like-donnie-darko') {
    return {
        badge: "Reality-Warping Cinema",
        title: "Donnie Darko",
        description: "Mind-bending time travel & reality-warping films. Butterfly effects, temporal loops, dying dreams & doppelgÃ¤ngers that shatter your perception of reality itself.",
        selection: {
            text1: "From time-traveling journals to quantum multiversesâ€”these films explore fractured realities, temporal paradoxes, and consciousness unraveling where nothing is as it seems.",
            text2: "Each reality-warping masterpiece features protagonists trapped between timelines, alternate selves, and existential nightmares that question the very fabric of existence."
        },
        ranking: {
            text: "Our mind-bend index evaluates reality distortion complexity, temporal mechanics sophistication, and psychological unraveling depth throughout each film.",
            points: [
                "Reality distortion complexity",
                "Temporal paradox sophistication", 
                "Consciousness unraveling depth",
                "Existential impact power"
            ]
        },
        experience: {
            text1: "Whether you're seeking temporal paradoxes or psychological disintegration, this collection delivers cinema's most disorienting reality-warping experiences.",
            text2: "Each film creates genuine existential confusionâ€”mirroring protagonists' descent into temporal madness where linear reality ceases to exist. Your perception will never recover."
        }
    };
    


    } else if (collection.slug === 'movies-like-oldboy') { 
        return {
            badge: "Ultimate Revenge Cinema",
            title: "Oldboy",
            description: "Brutal revenge thrillers with shocking twists that'll haunt you. Twisted vengeance, moral devastation & cathartic violence where justice becomes personal destruction.",
            selection: {
                text1: "From 15 years of mysterious imprisonment to endless revenge cyclesâ€”these films explore vengeance's primal satisfaction while revealing its psychological devastation and moral complexity.",
                text2: "Each revenge masterpiece features protagonists pushed beyond human limits, discovering betrayals that shatter their world, and unleashing calculated destruction that consumes everything."
            },
            ranking: {
                text: "Our vengeance intensity index evaluates revenge brutality, moral complexity depth, twist sophistication, and psychological devastation throughout each film.",
                points: [
                    "Vengeance brutality scale",
                    "Moral complexity depth",
                    "Twist revelation power",
                    "Psychological devastation impact"
                ]
            },
            experience: {
                text1: "Whether you're seeking visceral catharsis or profound moral reckoning, this collection delivers cinema's most devastating revenge experiences that redefine justice itself.",
                text2: "Each film has been selected for its unflinching portrayal of vengeance's seductive power and ultimate tragedyâ€”creating unforgettable narratives where revenge destroys both hunter and hunted."
            }
        };


    } else if (collection.slug === 'movies-like-parasite') { 
        return {
            badge: "Class Warfare Cinema",
            title: "Parasite",
            description: "Brutal class war films exposing capitalism's cruelty. Social inequality, economic desperation & systemic injustice where the poor and rich wage psychological warfare.",
            selection: {
                text1: "From Bong Joon-ho's architectural metaphors to desperate families infiltrating the wealthyâ€”these films dissect how capitalism creates parasites on both ends of the economic spectrum.",
                text2: "Each class warfare masterpiece exposes the uncomfortable truth that survival under late-stage capitalism requires deception, exploitation, and moral compromise from everyone involved."
            },
            ranking: {
                text: "Our class warfare index evaluates social commentary depth, economic desperation intensity, and the sophistication of capitalism critique throughout each film.",
                points: [
                    "Class divide intensity",
                    "Social commentary depth",
                    "Economic desperation realism",
                    "Systemic critique power"
                ]
            },
            experience: {
                text1: "Whether you're seeking sharp political allegory or visceral human drama, this collection delivers cinema's most unflinching explorations of class conflict and economic inequality.",
                text2: "Each film has been selected for its refusal to romanticize poverty or demonize wealthâ€”instead revealing how systemic inequality corrupts everyone trapped within its architecture."
            }
        };
} else if (collection.slug === 'movies-like-interstellar') {
        return {
            badge: "ðŸŒŒ Cosmic Scale",
            title: "10 Cosmic Masterpieces Like Interstellar (Ranked by Scale)",
            description: "Feeling small? Good. We ranked 10 cinematic experiences that capture the terrifying beauty and crushing weight of the infinite universe.",
            selection: {
                text1: "We didn't just pick space movies with lasers. We picked voyages. These are films that respect the silence of the void and the terrifying distances between stars.",
                text2: "From the claustrophobia of 'First Man' to the higher dimensions of '2001', this collection is a tribute to human curiosity."
            },
            ranking: {
                text: "Our 'Cosmic Scale Index' measures the sheer scope of the film. We analyze scientific accuracy, visual grandeur, and the depth of the existential questions asked.",
                points: [
                    "Visual Grandeur",
                    "Scientific Grounding",
                    "Existential Depth",
                    "The 'Awe' Factor"
                ]
            },
            experience: {
                text1: "Turn off the lights. Turn up the sound. These films demand total immersion.",
                text2: "You aren't just watching a movie; you are staring into the abyss. And sometimes, it stares back."
            },
            progressText: `Calculating ${movies.length} Trajectories`
        };
} else if (collection.slug === 'movies-like-shutter-island') {
        return {
            badge: "ðŸ‘ï¸ Perception Warning",
            title: "10 Shattered-Reality Movies (Ranked by Paranoia)",
            description: "Donâ€™t trust the protagonist. Donâ€™t trust the frame. We ranked 10 psychological masterclasses that weaponize your own perception against you.",
            selection: {
                text1: "These are the films that live in the 'unreliable' space. We selected masterpieces where the narrator's mind is a maze, and the audience is trapped inside with them.",
                text2: "From asylum noir to identity-warping sci-fi, this list is for those who want to feel the ground shift beneath their feet."
            },
            ranking: {
                text: "Our 'Paranoia Index' evaluates a film based on narrative deception, the complexity of the identity crisis, and the impact of the final revelation.",
                points: [
                    "Narrative Deception Level",
                    "Identity Fracture Intensity",
                    "Atmospheric Dread",
                    "Final Revelation Impact"
                ]
            },
            experience: {
                text1: "Pay attention to the background. Pay attention to the mirrors. In these films, the details you ignore are the ones that destroy the 'truth.'",
                text2: "If you think you know whatâ€™s happening by the second act, youâ€™re already being gaslit."
            },
           
        };
  } else if (collection.slug === 'best-time-travel-movies') {
    return {
        badge: "Causality-Breaking Cinema",
        title: "Time Travel Movies That Break Your Brain",
        description: "No hand-holding. No plot armor. Just brutal temporal logic that treats time travel like engineering, not magic. Paradoxes have consequences here.",
        selection: {
            text1: "Primer's chalkboard equations. Predestination's impossible loop. Timecrimes' recursive nightmare. These films treat causality like a physics problemâ€”and watching them feels like homework.",
            text2: "No lazy blockbuster resets. Every timeline branch matters. Every action creates consequences that ripple backward and forward. You'll need diagrams. You'll need rewatches. You might need therapy."
        },
        ranking: {
            text: "Ranked by paradox complexity: How many timelines exist simultaneously? How tight is the causal loop? Can you solve it without Wikipedia?",
            points: [
                "Temporal logic consistency",
                "Bootstrap paradox complexity",
                "Timeline layers (how many?)",
                "Rewatch requirement level"
            ]
        },
        experience: {
            text1: "This collection is for people who pause movies to draw timeline diagrams. Who argue about grandfather paradoxes at parties. Who think Tenet was too simple.",
            text2: "First watch: confusion. Second watch: partial clarity. Third watch: realization that you were wrong about everything. The timeline was always closed. You just weren't smart enough to see it."
        }
    };

    } else if (collection.slug === 'best-sci-fi-movies') {
        return {
            badge: "Visionary Science Fiction",
            title: "Sci-Fi Cinema",
            description: "Groundbreaking sci-fi that expands your imagination. Visionary concepts, philosophical depth & stunning visuals that redefine what science fiction can achieve.",
            selection: {
                text1: "From dystopian nightmares to cosmic adventuresâ€”these films push the boundaries of imagination while exploring profound questions about humanity, consciousness, and existence itself.",
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
                text2: "Each film has been selected for its ability to expand imagination and challenge perspectiveâ€”with concepts that continue inspiring new ways of thinking about science, technology, and humanity's future."
            }
        };
  } else if (collection.slug === 'best-psychological-thriller-movies') {
    return {
        badge: "Reality-Breaking Cinema",
        title: "Psychological Thriller",
        description: "Films that weaponize paranoia, shatter identity, and make you question what's real. Unreliable narrators. Fractured minds. No safe exit.",
        selection: {
            text1: "These films don't just scare youâ€”they make you doubt your own perception. From Fight Club's split personality to Black Swan's obsessive descent, reality becomes optional.",
            text2: "Each protagonist spirals deeper into psychological collapse while you watch. Gaslighting. Memory manipulation. Dissociative breaks. By the end, you won't trust anythingâ€”including yourself."
        },
        ranking: {
            text: "Ranked by how effectively each film destroys your sense of reality, from subtle mind games to full psychological breakdown.",
            points: [
                "Reality distortion intensity",
                "Unreliable narrator mastery",
                "Identity collapse depth",
                "Paranoia & dread buildup"
            ]
        },
        experience: {
            text1: "From Memento's fractured memory to Shutter Island's institutional gaslighting, these films create lasting unease. You'll second-guess conversations. Question memories. See patterns everywhere.",
            text2: "Warning: Multiple viewings don't make these films less disturbingâ€”they reveal how much you missed the first time. The clues were always there. You just weren't ready to see them."
        }
    };

    } else if (collection.slug === 'best-heist-thriller-movies') {
        return {
            badge: "Heist Master Cinema",
            title: "Heist Thriller",
            description: "Brilliant heist thrillers with genius criminal plans. Elaborate schemes, high-stakes robberies & masterminds who make the impossible look easy.",
            selection: {
                text1: "From Ocean's Eleven to Heatâ€”these films showcase the perfect blend of meticulous planning, flawless execution, and unexpected twists that keep you on the edge of your seat.",
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
                text2: "Each film has been selected for its ability to maintain relentless tension throughoutâ€”while showcasing brilliantly crafted schemes and unforgettable criminal masterminds you'll root for."
            }
        };
    } else if (collection.slug === 'best-crime-thriller-movies') {
        return {
            badge: "Crime Thriller Cinema",
            title: "Crime Thriller",
            description: "Intense crime thrillers with ruthless investigations. From Heat to The Departedâ€”ranked by suspense intensity, moral complexity & psychological depth.",
            selection: {
                text1: "From cat-and-mouse detective games to criminal underworldsâ€”these films expose the dark psychology of crime while maintaining relentless tension and complex moral questions.",
                text2: "Each crime thriller features brilliant investigations, morally gray protagonists, and the psychological warfare between cops and criminals that defines masterful crime cinema."
            },
            ranking: {
                text: "Our suspense intensity index evaluates investigative complexity, moral ambiguity depth, and the sophistication of crime storytelling techniques used throughout each film.",
                points: [
                    "Suspense intensity level",
                    "Investigative complexity",
                    "Moral ambiguity depth",
                    "Criminal psychology insight"
                ]
            },
            experience: {
                text1: "Whether you're seeking intense investigations or profound moral exploration, this collection delivers cinema's most gripping crime thriller experiences that'll challenge your sense of justice.",
                text2: "Each film has been selected for its ability to maintain relentless tension throughoutâ€”while exploring the psychology of crime and creating unforgettable criminal masterminds."
            }
        };
  } else if (collection.slug === 'best-detective-thriller-movies') {
    return {
        badge: "Obsessive Noir Cinema",
        title: "Detective Thrillers Ranked by Obsession",
        description: "The cases that never close in your mind. From Se7en's seven-day descent to Zodiac's decade-long spiral. These detectives sacrifice everythingâ€”and still lose.",
        selection: {
            text1: "No clean endings. No triumphant reveals. Se7en ends in a box. Zodiac ends without answers. Memories of Murder ends with eye contact across decades. The hunt destroys everyone it touches.",
            text2: "Each film follows detectives who cross the line between solving a case and becoming consumed by it. Sleep deprivation. Broken families. Moral compromise. The killer wins even when caught."
        },
        ranking: {
            text: "Ranked by psychological toll: How much does the detective sacrifice? How deep does the obsession go? Does solving it even matter?",
            points: [
                "Obsession depth & cost",
                "Atmospheric dread (rain, fog, decay)",
                "Moral descent of the detective",
                "Ending devastation factor"
            ]
        },
        experience: {
            text1: "From Prisoners' torture dilemma to Zodiac's unsolved frustration, these films understand that the hunt matters more than the capture. The mystery becomes identity. The case becomes life.",
            text2: "Warning: These films don't provide catharsis. They provide dread. You'll feel the weight of unsolved cases, the paranoia of patterns everywhere, the exhaustion of chasing ghosts who might not exist."
        }
    };
} else if (collection.slug === 'best-revenge-movies') {
    return {
        badge: "Annihilation Cinema",
        title: "Revenge",
        description: "When forgiveness dies, systematic destruction begins. From Oldboy's 15-year trap to I Saw the Devil's mutual damnation. These protagonists didn't want justiceâ€”they wanted blood.",
        selection: {
            text1: "Gladiator's arena slaughter. John Wick's continental body count. The Count of Monte Cristo's 20-year orchestration. These aren't crimes of passionâ€”they're masterclasses in patient, methodical annihilation.",
            text2: "Each protagonist crosses the line permanently. Torture becomes strategy. Murder becomes art. The question isn't whether they'll get revengeâ€”it's whether they'll recognize themselves when it's over."
        },
        ranking: {
            text: "Ranked by commitment to total destruction: How far will they go? How much will they sacrifice? Is there anything left when the blood dries?",
            points: [
                "Patience & planning sophistication",
                "Moral line obliteration",
                "Body count & brutality scale",
                "Personal cost (what they lose)"
            ]
        },
        experience: {
            text1: "From The Revenant's frozen crawl to Oldboy's hammer rampage, these films understand the dark satisfaction of watching bad people suffer. No apologies. No hesitation. Just consequences.",
            text2: "Warning: These protagonists aren't heroes. They're monsters justified by trauma. You'll root for them anyway. That's what makes these films dangerousâ€”and unforgettable."
        }
    };

    } else if (collection.slug === 'best-mystery-thriller-movies') {
        return {
            badge: "Mystery Thriller Cinema",
            title: "Mystery Thriller",
            description: "Clever mystery thrillers with impossible puzzles. Intricate clues, shocking revelations & mysteries where every detail matters in the final mind-blowing twist.",
            selection: {
                text1: "These films masterfully weave mysteries that challenge you to piece together clues and anticipate shocking revelationsâ€”testing your detective skills with every scene.",
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
                text1: "From relentless pacing to psychological tensionâ€”these films deliver the ultimate adrenaline rush while exploring complex characters and moral dilemmas that'll haunt you.",
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



        title: "Survival Movies That Push Humans to the Edge (Real Stories)",



        description:

          "Brutal survival films where nature doesnâ€™t care if you live or die. Ranked by realism, desperation, and human endurance.",



        selection: {

            text1:

              "These films strip survival down to its rawest formâ€”where isolation, injury, hunger, and impossible decisions define the fight to stay alive.",

            text2:

              "From frozen mountains to unforgiving deserts, each story captures the terrifying reality of survival when rescue is uncertain or impossible."

        },



        ranking: {

            text:

              "Our survival intensity index ranks each film based on realism, environmental brutality, and the physical and psychological toll on its characters.",

            points: [

                "Environmental brutality",

                "Physical survival realism",

                "Psychological endurance",

                "Ingenuity under pressure"

            ]

        },



        experience: {

            text1:

              "This collection is for viewers who want survival stories that feel realâ€”where every injury matters and every decision has consequences.",

            text2:

              "Each film delivers an unflinching portrayal of human resilience against nature, isolation, and overwhelming odds."

        }

    };


    } else if (collection.slug === 'best-war-films') {
        return {
            badge: "War & Conflict Cinema",
            title: "War Films",
            description: "Unflinching war films that show war's true cost. Visceral D-Day combat, jungle firefights & moral reckoning that challenge war's glorification.",
            selection: {
                text1: "From D-Day beaches to jungle firefights and submarine claustrophobiaâ€”these films go beyond tactics and heroism to confront trauma, moral collapse, and war's devastating human cost.",
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
                text1: "Expertly selected films from our comprehensive databaseâ€”each chosen for quality, impact and unforgettable storytelling.",
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

// ðŸ”¥ HEADER CONTENT 
const getHeaderContent = () => {
if (collection.slug === 'movies-like-memento') {
        return {
            title: "10 Fragmented Movies Like Memento (Ranked by Confusion)",
            subtitle: "Don't trust the timeline. Reverse chronology, amnesia & narrative puzzles that demand to be solved"
        };
    } else if (collection.slug === 'movies-like-inception') {
        return {
          title: "10 Mind-Benders Where Inception Was Just The Tutorial",
subtitle: "Nolan gave you a map. These films burn it. No totems. No exit"

        };

    } else if (collection.slug === 'movies-like-black-swan') {
        return {
            title: "Movies Like Black Swan: 10 Psychological Obsession Films",
            subtitle: "Performance pressure, identity collapse & psychological breakdowns that blur reality"
        };



    } else if (collection.slug === 'movies-like-the-matrix') {
        return {
            title: "Movies Like The Matrix: 10 Cyberpunk Films",
            subtitle: "Digital consciousness, simulated realities & mind-bending awakening that challenges everything"
        };
    } else if (collection.slug === 'movies-like-se7en') {
        return {
            title: "Movies Like Se7en: 10 Dark Noir Thrillers",
            subtitle: "Gritty investigations, obsessive detectives & shocking twists in the rain-soaked dark"
        };
    } else if (collection.slug === 'movies-like-parasite') { 
        return {
            title: "Movies Like Parasite: 10 Class Warfare Films",
            subtitle: "Social inequality, economic desperation & systemic injustice where rich and poor collide"
        };

            } else if (collection.slug === 'movies-like-oldboy') {
        return {
            title: "Movies Like Oldboy: 10 Brutal Revenge Films",
            subtitle: "Twisted vengeance, shocking twists & moral devastation from Park Chan-wook's masterpiece"
        };
    
} else if (collection.slug === 'best-action-movies-on-hulu') {
        return {
            title: "Best Action Movies on Hulu: 10 High-Octane Films",
            subtitle: "Adrenaline-fueled cinema with brutal fight choreography, relentless pacing & explosive set pieces"
        };

} else if (collection.slug === 'best-romance-movies-on-hulu') {
        return {
            title: "Best Romance Movies on Hulu: 10 Prestige Films",
            subtitle: "Emotionally resonant love stories, from Palme d'Or winners to devastating ghost stories & electric chemistry"
        };

        } else if (collection.slug === 'best-horror-movies-on-hulu') {
        return {
            title: "Best Horror Movies on Hulu: 10 Terrifying Films",
            subtitle: "From trauma-inducing gore to slow-burn dreadâ€”ranked by visceral fear & psychological impact"
        };

} else if (collection.slug === 'best-comedy-movies-on-hulu') {
        return {
            title: "Best Comedy Movies on Hulu: 10 Funniest Films",
            subtitle: "From teen chaos and mockumentaries to biting satire & action-packed laughs"
        };


} else if (collection.slug === 'best-sci-fi-movies-on-hulu') {
    return {
        title: "Best Sci-Fi Movies on Hulu: 10 Visionary Films",
        subtitle: "Time travel paradoxes, alien invasions & dystopian futures that challenge reality"
    };

    } else if (collection.slug === 'best-thriller-movies-hulu') {
    return {
        title: "10 Best Thriller Movies on Hulu",
        subtitle: "Ranked by Suspense, Tension & Psychological Impact"
    };

} else if (collection.slug === 'best-movies-on-hulu') {
    return {
        title: "Best Movies on Hulu: 10 Essential Films",
        subtitle: "The definitive ranking of the highest-rated films streaming nowâ€”from Heat to Superbad"
    };


} else if (collection.slug === 'best-drama-movies-on-hulu') {
    return {
        title: "Best Drama Movies on Hulu: 10 Emotional Films",
        subtitle: "Profound character studies, tearjerkers & award-winning human stories streaming now"
    };


} else if (collection.slug === 'best-family-movies-on-hulu') {
    return {
        title: "10 Best Family Movies on Hulu",
        subtitle: "Wholesome entertainment, animation & adventure for all ages streaming now"
    };


} else if (collection.slug === 'best-action-movies-on-hbo-max') {
    return {
        title: "Best Action Movies on HBO Max: 10 Epic Films",
        subtitle: "Grand scale battles, mythic heroes & visceral combat streaming now"
    };

} else if (collection.slug === 'best-romance-movies-on-hbo-max') {
        return {
            title: "Best Romance Movies on HBO Max: 10 Prestige Films",
            subtitle: "Emotionally resonant masterpieces ranked by chemistry, heartbreak & cinematic legacy"
        };


} else if (collection.slug === 'best-thriller-movies-on-hbo-max') {
    return {
        title: "10 Best Thriller Movies on HBO Max",
        subtitle: "Psychological nightmares, suspense & cerebral sci-fi streaming now"
    };

} else if (collection.slug === 'best-family-movies-on-hbo-max') {
    return {
        title: "10 Best Family Movies on HBO Max",
        subtitle: "Wholesome entertainment, magical adventures & animation for all ages streaming now"
    };

    } else if (collection.slug === 'best-sci-fi-movies-on-hbo-max') {
    return {
        title: "10 Best Sci-Fi Movies on HBO Max",
        subtitle: "From 2001 to Duneâ€”ranked by spectacular scale, visual mastery & conceptual depth"
    };

    } else if (collection.slug === 'best-horror-movies-on-hbo-max') {
    return {
        title: "10 Best Horror Movies on HBO Max: Ranked by Scariness",
        subtitle: "From The Conjuring to Evil Dead Riseâ€”ranked by dread, gore & psychological trauma"
    };


    } else if (collection.slug === 'best-movies-on-hbo-max') {
    return {
        title: "Best Movies on HBO Max: 10 Essential Films",
        subtitle: "The definitive ranking of the highest-rated films streaming nowâ€”from Seven Samurai to Dune: Part Two"
    };


    } else if (collection.slug === 'best-drama-movies-on-hbo-max') {
    return {
        title: "Best Drama Movies on HBO Max: 10 Emotional Films",
        subtitle: "Profound character studies, tearjerkers & award-winning human stories streaming now"
    };


    } else if (collection.slug === 'best-comedy-movies-on-hbo-max') {
    return {
        title: "Best Comedy Movies on HBO Max: 10 Satirical Masterpieces",
        subtitle: "From City Lights to Barbieâ€”ranked by influence, wit & cinematic brilliance"
    };


} else if (collection.slug === 'best-action-movies-on-paramount-plus') {
    return {
        title: "Best Action Movies on Paramount+: 10 High-Octane Films",
        subtitle: "Adrenaline-fueled cinema with practical stunts, aerial combat & relentless intensity"
    };

} else if (collection.slug === 'best-sci-fi-movies-on-paramount-plus') {
    return {
        title: "Best Sci-Fi Movies on Paramount+: 10 Visionary Films",
        subtitle: "From Interstellar to Star Trekâ€”cosmic epics, hard sci-fi & mind-bending thrillers"
    };

    } else if (collection.slug === 'best-core-drama-movies-on-paramount-plus') {
    return {
        title: "Best Core Drama Movies on Paramount+: 10 Emotional Films",
        subtitle: "Emotionally powerful cinemaâ€”from There Will Be Blood to Forrest Gump"
    };

    } else if (collection.slug === 'best-thriller-movies-on-paramount-plus') {
    return {
        title: "Best Thriller Movies on Paramount+: 10 Intense Films",
        subtitle: "Edge-of-your-seat suspenseâ€”from No Country for Old Men to Strange Darling"
    };

} else if (collection.slug === 'best-family-movies-on-paramount-plus') {
    return {
        title: "10 Best Family Movies on Paramount+: Wholesome Picks",
        subtitle: "Wholesome entertainment, animated adventures & fun for all agesâ€”from Rango to Sonic 3"
    };
} else if (collection.slug === 'best-horror-movies-on-paramount-plus') {
    return {
        title: "10 Best Horror Movies on Paramount+: Ranked by Scariness",
        subtitle: "From The Conjuring to Evil Dead Riseâ€”ranked by dread, gore & psychological trauma"
    };
} else if (collection.slug === 'best-comedy-movies-on-paramount-plus') {
    return {
        title: "10 Paramount+ Comedies Everyone Forgets (Ranked by Laughter)",
subtitle: "While everyone searches Netflix, these classics hide in plain sight. No algorithms. Just funny"

    };

} else if (collection.slug === 'best-movies-on-paramount-plus') {
    return {
        title: "Best Movies on Paramount+: 10 Essential Films",
        subtitle: "The definitive ranking of the highest-rated films streaming nowâ€”from The Godfather to Top Gun: Maverick"
    };
} else if (collection.slug === 'best-action-adventure-movies-on-peacock') {
    return {
        title: "Best Action & Adventure Movies on Peacock: 10 High-Octane Films",
        subtitle: "Adrenaline-fueled cinema with brutal fight choreography, relentless pacing & explosive set pieces"
    };

} else if (collection.slug === 'best-sci-fi-movies-on-peacock') {
    return {
        title: "Best Sci-Fi Movies on Peacock: 10 Visionary Films",
        subtitle: "Mind-bending realities, alien encounters, and future worlds that challenge what you know"
    };
} else if (collection.slug === 'best-romance-movies-on-peacock') {
    return {
        title: "Best Romance Movies on Peacock: 10 Emotional Films",
        subtitle: "Classic love stories, modern romantic comedies, and emotionally resonant cinema"
    };
} else if (collection.slug === 'best-family-movies-on-peacock') {
    return {
        title: "10 Best Family Movies on Peacock",
        subtitle: "Wholesome entertainment, animation & adventure for all ages streaming now"
    };
} else if (collection.slug === 'best-drama-movies-on-peacock') {
        return {
            title: "10 Best Drama Movies on Peacock",
            subtitle: "Profound character studies, tearjerkers & award-winning human stories streaming now"
        }
    } else if (collection.slug === 'best-thriller-movies-on-peacock') {
    return {
        title: "10 Best Thriller Movies on Peacock",
        subtitle: "Ranked by Suspense, Tension & Psychological Impact"
    };
    } else if (collection.slug === 'best-movies-on-peacock') {
    return {
        title: "Best Movies on Peacock: 10 Essential Films",
        subtitle: "The definitive ranking of the highest-rated films streaming nowâ€”from classics to modern blockbusters"
    };
    } else if (collection.slug === 'best-comedy-movies-on-peacock') {
    return {
        title: "10 Best Comedy Movies on Peacock",
        subtitle: "Ranked by Laughter & Chaos"
    };
    } else if (collection.slug === 'movies-like-donnie-darko') {
    return {
        title: "Movies Like Donnie Darko: 10 Reality-Warping Films",
        subtitle: "Time travel paradoxes, dying dreams & doppelgÃ¤ngers that shatter reality itself"
    };

 } else if (collection.slug === 'movies-like-eyes-wide-shut') {
    return {
        title: "10 Movies That Expose The Elite (Like Eyes Wide Shut)",
        subtitle: "Secret societies. Occult rituals. The world the rich don't want you to see."
    };



    } else if (collection.slug === 'movies-like-interstellar') {
        return {
            title: "Movies Like Interstellar: 10 Cerebral Space Films",
            subtitle: "Philosophical space exploration with scientific depth, emotional resonance & cosmic wonder"
        };
  } else if (collection.slug === 'movies-like-shutter-island') {
        return {
            title: "10 Shattered-Reality Movies Like Shutter Island (Ranked by Paranoia)",
            subtitle: "Donâ€™t trust the frame. Gaslighting, identity collapse & the anatomy of psychological denial."
        };  
    } else if (collection.slug === 'best-crime-thriller-movies') {
        return {
            title: "Best Crime Thrillers: 10 Ruthless Films",
            subtitle: "From Heat to The Departedâ€”heists, investigations & moral complexity"
        };
    } else if (collection.slug === 'best-heist-thriller-movies') {
        return {
            title: "Best Heist Movies: 10 Master Robberies",
            subtitle: "From Ocean's Eleven to Heatâ€”elaborate plans & high-stakes criminal masterminds"
        };
    } else if (collection.slug === 'best-time-travel-movies') {
        return {
          title: "10 Time Travel Movies That Require A Diploma (Ranked)",
subtitle: "Logic won't save you. Bootstrap paradoxes. Causality collapse. Bring a notebook"

        };
    } else if (collection.slug === 'best-sci-fi-movies') {
        return {
            title: "Best Sci-Fi Movies: 10 Visionary Films",
            subtitle: "From Blade Runner to Interstellarâ€”groundbreaking concepts & philosophical depth"
        };
    } else if (collection.slug === 'best-psychological-thriller-movies') {
        return {
          title: "10 Psychological Thrillers That Broke People's Brains",
subtitle: "Not all minds recover. Identity collapse. Reality distortion. Permanent paranoia."

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
        title: "Survival Movies That Push Humans to the Edge (True Stories)",
        subtitle: "True endurance stories against natureâ€™s most unforgiving extremes"
    };


    } else if (collection.slug === 'best-drama-movies-on-netflix') {
        return {
            title: "Best Netflix Dramas: 10 Award-Winning Films",
            subtitle: "Oscar-winning performances & emotionally devastating stories streaming now"
        };
    } else if (collection.slug === 'best-detective-thriller-movies') {
        return {
       title: "10 Detective Masterpieces That Define Obsession (Ranked)",
subtitle: "These detectives can't let go. Not all cases close. All leave scars"

        };
    } else if (collection.slug === 'best-revenge-movies') {
        return {
title: "10 Revenge Epics Where Mercy Was Never An Option",
subtitle: "They chose annihilation over peace. No forgiveness. No redemption. Just destruction."

        };
    } else if (collection.slug === 'best-war-films') {
        return {
            title: "Best War Films: 10 Unflinching Masterpieces",
            subtitle: "From D-Day to jungle combatâ€”visceral battle scenes & anti-war moral reckoning"
        };
    } else {
        return {
            title: `Best ${collection.title}: Top 10 Films`,
            subtitle: `Curated collection ranked by quality, impact & engagement`
        };
    }
};


// ðŸ”¥ LOADER CONTENT
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
    } else if (collection?.slug === 'movies-like-the-matrix') {
        return {
            title: "Loading Movies Like The Matrix",
            description: "Curating cyberpunk reality-bending films with community reviews and ratings"
        };
    } else if (collection?.slug === 'movies-like-se7en') {
        return {
            title: "Loading Movies Like Se7en",
            description: "Curating gritty noir thrillers and dark investigations with community reviews and ratings"
        };

    } else if (collection?.slug === 'movies-like-oldboy') {
        return {
            title: "Loading Movies Like Oldboy",
            description: "Curating brutal revenge thrillers with shocking twists and community reviews"
        };


        } else if (collection?.slug === 'movies-like-eyes-wide-shut') {
        return {
            title: "Loading Movies Like Eyes Wide Shut",
            description: "Curating paranoid thrillers about secret societies and the occult elite with community reviews"
        };

} else if (collection?.slug === 'movies-like-donnie-darko') {
    return {
        title: "Loading Movies Like Donnie Darko",
        description: "Curating reality-warping time travel films with community reviews and ratings"
    };
} else if (collection?.slug === 'movies-like-black-swan') { 
    return {
        title: "Loading Movies Like Black Swan",
        description: "Curating films about perfectionism, identity collapse, and psychological obsession."
    };

} else if (collection?.slug === 'best-romance-movies-on-hulu') {
        return {
            title: "Loading Best Romance Movies on Hulu",
            description: "Curating emotionally resonant romance films with community reviews and ratings"
        };


} else if (collection?.slug === 'best-action-movies-on-hulu') {
        return {
            title: "Loading Best Action Movies on Hulu",
            description: "Curating high-octane action films with intense fight choreography and community reviews"
        };

} else if (collection?.slug === 'best-horror-movies-on-hulu') {
        return {
            title: "Loading Best Horror Movies on Hulu",
            description: "Curating trauma-inducing horror films with community reviews and ratings"
        };

} else if (collection?.slug === 'best-comedy-movies-on-hulu') {
        return {
            title: "Loading Best Comedy Movies on Hulu",
            description: "Curating hilarious comedy films with laughter scores and community reviews"
        };

} else if (collection?.slug === 'best-sci-fi-movies-on-hulu') {
    return {
        title: "Loading Best Sci-Fi Movies on Hulu",
        description: "Curating mind-bending sci-fi films with visual spectacle scores and community reviews"
    };


} else if (collection?.slug === 'best-thriller-movies-hulu') {
    return {
        title: "Loading Best Thriller Movies on Hulu",
        description: "Curating intense suspense thrillers with tension scores and community reviews"
    };


} else if (collection?.slug === 'best-movies-on-hulu') {
    return {
        title: "Loading Best Movies on Hulu",
        description: "Curating the definitive list of top-rated films across all genres with community reviews"
    };


    } else if (collection?.slug === 'best-drama-movies-on-hulu') {
    return {
        title: "Loading Best Drama Movies on Hulu",
        description: "Curating emotionally powerful dramas and award-winning narratives with community reviews"
    };

} else if (collection?.slug === 'best-family-movies-on-hulu') {
    return {
        title: "Loading Best Family Movies on Hulu",
        description: "Curating wholesome entertainment and animated adventures with community reviews"
    };
} else if (collection?.slug === 'best-movies-on-peacock') {
    return {
        title: "Loading Best Movies on Peacock",
        description: "Curating the definitive list of top-rated films across all genres with community reviews"
        };
    } else if (collection?.slug === 'best-comedy-movies-on-peacock') {
        return {
            title: "Loading Best Comedy Movies on Peacock",
            description: "Curating hilarious comedy films with laughter scores and community reviews"
    };


} else if (collection?.slug === 'best-action-movies-on-hbo-max') {
    return {
        title: "Loading Best Action Movies on HBO Max",
        description: "Curating epic action masterpieces and grand-scale battles with community reviews"
    };

} else if (collection?.slug === 'best-romance-movies-on-hbo-max') {
        return {
            title: "Loading Best Romance Movies on HBO Max",
            description: "Curating emotionally resonant prestige romance films with community reviews and ratings"
        };

} else if (collection?.slug === 'best-thriller-movies-on-hbo-max') {
    return {
        title: "Loading Best Thriller Movies on HBO Max",
        description: "Curating psychological nightmares and high-tension thrillers with community reviews"
    };


    } else if (collection?.slug === 'best-family-movies-on-hbo-max') {
    return {
        title: "Loading Best Family Movies on HBO Max",
        description: "Curating wholesome entertainment and magical adventures with community reviews"
    };

    } else if (collection?.slug === 'best-sci-fi-movies-on-hbo-max') {
    return {
        title: "Loading Best Sci-Fi Movies on HBO Max",
        description: "Curating spectacular sci-fi masterpieces and cosmic epics with community reviews"
    };
    
} else if (collection?.slug === 'best-horror-movies-on-hbo-max') {
    return {
        title: "Loading Best Horror Movies on HBO Max",
        description: "Curating terrifying horror masterpieces and nightmare fuel with community reviews"
    };


    } else if (collection?.slug === 'best-movies-on-hbo-max') {
    return {
        title: "Loading Best Movies on HBO Max",
        description: "Curating cinematic masterpieces and definitive classics with community reviews and ratings"
    };

} else if (collection?.slug === 'best-drama-movies-on-hbo-max') {
    return {
        title: "Loading Best Drama Movies on HBO Max",
        description: "Curating emotionally powerful dramas and character studies with community reviews"
    };

    } else if (collection?.slug === 'best-comedy-movies-on-hbo-max') {
    return {
        title: "Loading Best Comedy Movies on HBO Max",
        description: "Curating satirical masterpieces and cinematic classics with community reviews and ratings"
    };


} else if (collection?.slug === 'best-action-movies-on-paramount-plus') {
    return {
        title: "Loading Best Action Movies on Paramount+",
        description: "Curating high-octane action films with practical stunts and community reviews"
    };


    } else if (collection?.slug === 'best-sci-fi-movies-on-paramount-plus') {
    return {
        title: "Loading Best Sci-Fi Movies on Paramount+",
        description: "Curating visionary science fiction films with cosmic scope and community reviews"
    };


} else if (collection?.slug === 'best-romance-movies-on-paramount-plus') {
    return {
        title: "Loading Best Romance Movies on Paramount+",
        description: "Curating emotionally resonant romance films with community reviews and ratings"
    };


    } else if (collection?.slug === 'best-core-drama-movies-on-paramount-plus') {
    return {
        title: "Loading Best Core Drama Movies on Paramount+",
        description: "Curating emotionally powerful dramas and deep character studies with community reviews"
    };

    } else if (collection?.slug === 'best-thriller-movies-on-paramount-plus') {
    return {
        title: "Loading Best Thriller Movies on Paramount+",
        description: "Curating intense psychological thrillers and suspense masterpieces with community reviews"
    };
} else if (collection?.slug === 'best-action-adventure-movies-on-peacock') {
    return {
        title: "Loading Best Action Adventure Movies on Peacock",
        description: "Curating high-octane action and adventure films with community reviews"
    };

    } else if (collection?.slug === 'best-family-movies-on-paramount-plus') {
    return {
        title: "Loading Best Family Movies on Paramount+",
        description: "Curating wholesome family entertainment and animated adventures with community reviews"
    };
} else if (collection?.slug === 'best-horror-movies-on-paramount-plus') {
    return {
        title: "Loading Best Horror Movies on Paramount+",
        description: "Curating terrifying horror masterpieces and nightmare fuel with community reviews"
    };
} else if (collection?.slug === 'best-comedy-movies-on-paramount-plus') {
    return {
        title: "Loading Best Comedy Movies on Paramount+",
        description: "Curating satirical masterpieces and cinematic classics with community reviews and ratings"
    };
} else if (collection?.slug === 'best-movies-on-paramount-plus') {
    return {
        title: "Loading Best Movies on Paramount+",
        description: "Curating cinematic masterpieces and definitive classics with community reviews and ratings"
    };
} else if (collection?.slug === 'best-action-adventuremovies-on-peacock') {
    return {
        title: "Loading Best Action Movies on Peacock",
        description: "Curating high-octane action films with intense fight choreography and community reviews"
    };
} else if (collection.slug === 'best-sci-fi-movies-on-peacock') {
    return {
        title: "Loading Best Sci-Fi Movies on Peacock",
        description: "Curating visionary science fiction films with cosmic scope and community reviews"
    };
} else if (collection.slug === 'best-romance-movies-on-peacock') {
    return {
        title: "Loading Best Romance Movies on Peacock",
        description: "Curating emotionally resonant romance films with community reviews and ratings"
    };
} else if (collection.slug === 'best-family-movies-on-peacock') {
    return {
        title: "Loading Best Family Movies on Peacock",
        description: "Curating wholesome entertainment and animated adventures with community reviews"
    };
} else if (collection.slug === 'best-drama-movies-on-peacock') {
        return {
            title: "Loading Best Drama Movies on Peacock",
            description: "Curating emotionally powerful dramas and character studies with community reviews"
        };
    } else if (collection.slug === 'best-thriller-movies-on-peacock') {
    return {
        title: "Loading Best Thriller Movies on Peacock",
        description: "Curating intense suspense thrillers with tension scores and community reviews"
    };
    } else if (collection?.slug === 'movies-like-parasite') { 
        return {
            title: "Loading Movies Like Parasite",
            description: "Curating class warfare films and social inequality thrillers with community reviews and ratings"
        };
    } else if (collection?.slug === 'movies-like-interstellar') {
        return {
            title: "Loading Movies Like Interstellar",
            description: "Curating cerebral space exploration films with community reviews and ratings"
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
    } else if (collection?.slug === 'best-revenge-movies') {
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


// ðŸ”¥ STATIC META CONTENT - SEO OPTIMIZED (EVERGREEN & HIGH CTR)
// ðŸ”¥ STATIC META CONTENT - SEO OPTIMIZED (EVERGREEN & HIGH CTR)
const getStaticMetaContent = () => {
    if (collection.slug === 'movies-like-memento') {
        return {
            title: "10 Mind-Bending Movies Like Memento",
            description: "Obsessed with Memento? Discover 10 psychological thrillers with memory loss and non-linear plots. Includes sensitive content timestamps.", 
            keywords: "movies like memento, memory loss movies, psychological thrillers, christopher nolan style",
            ogTitle: "10 Mind-Bending Movies Like Memento ðŸ§ ",
            twitterTitle: "ðŸ§  Obsessed with Memento? Watch These 10 Films Next",
            progressText: `of Top ${movies.length} Movies Like Memento`
        };
  } else if (collection.slug === 'movies-like-inception') {
    return {
        title: "10 Mind-Benders Where Inception Was Just The Tutorial",
        description: "Nolan gave you a map. These films burn it. From the engineering homework of Primer to the waking nightmare of Mulholland Drive. No totems. No exit.",
        keywords: "movies like inception, primer explained, hard sci-fi movies, synecdoche new york, complex mind benders, reality distortion films, predestination paradox",
        ogTitle: "10 Films That Make Inception Look Like A Kids' Movie",
        twitterTitle: "ðŸŒ€ Inception was easy. These 10 films will actually break your brain.",
        progressText: `of 10 Reality-Shattering Films`
    };
    } else if (collection.slug === 'movies-like-the-matrix') {
        return {
            title: "10 Movies Like The Matrix: Cyberpunk & Sci-Fi",
            description: "Loved The Matrix? Discover the 10 best cyberpunk thrillers about simulated realities and digital awakening. Includes sensitive content timestamps.", 
            keywords: "movies like the matrix, cyberpunk movies, sci-fi reality films, simulation theory movies",
            ogTitle: "10 Movies Like The Matrix: Cyberpunk & Reality-Bending ðŸ”´",
            twitterTitle: "ðŸ”´ Loved The Matrix? These 10 Cyberpunk Films Are Essential",
            progressText: `of Top ${movies.length} Movies Like The Matrix`
        };
    } else if (collection.slug === 'movies-like-se7en') {
        return {
            title: "10 Dark Thrillers Like Se7en: Gritty & Twisted",
            description: "Loved Se7en? Discover the 10 grittiest noir thrillers with obsessive detectives and shocking twists. Includes sensitive content timestamps.", 
            keywords: "movies like se7en, noir thrillers, dark detective movies, serial killer movies",
            ogTitle: "10 Dark Thrillers Like Se7en: Gritty Noir Masterpieces ðŸŒ§ï¸",
            twitterTitle: "ðŸŒ§ï¸ Loved Se7en? These 10 Dark Thrillers Will Haunt You",
            progressText: `of Top ${movies.length} Movies Like Se7en`
        };
    } else if (collection.slug === 'movies-like-oldboy') {
        return {
            title: "10 Movies Like Oldboy: Brutal Revenge Thrillers",
            description: "Loved Oldboy? Here are 10 twisted revenge films with shocking plot twists and visceral violence. Includes sensitive content timestamps.", 
            keywords: "movies like oldboy, revenge thrillers, korean revenge movies, brutal action films",
            ogTitle: "10 Movies Like Oldboy: Brutal Revenge Masterpieces ðŸ”ª",
            twitterTitle: "ðŸ”ª Loved Oldboy? These 10 Revenge Films Are Just as Twisted",
            progressText: `of Top ${movies.length} Movies Like Oldboy`
        };
 } else if (collection.slug === 'movies-like-eyes-wide-shut') {
    return {
        title: "10 Movies That Expose The Elite (Like Eyes Wide Shut)",
        description: "Stanley Kubrick died 6 days after screening his final cut. These 10 films explore the same secret societies and elite rituals he warned us about.",
        keywords: "movies like eyes wide shut, secret society movies, illuminati films, kubrick conspiracy, occult thrillers, elite ritual movies",
        ogTitle: "The Films Kubrick Wanted You To See (Before He Died)",
        twitterTitle: "ðŸ‘ï¸ Kubrick's final warning: 10 films about elite secret societies",
        progressText: `of 10 Films Exposing the Elite`
    };

    } else if (collection.slug === 'best-romance-movies-on-hulu') {
        return {
            title: "10 Best Romance Movies on Hulu: Ranked by Emotion",
            description: "The top 10 romance movies streaming on Hulu. Featuring Anora, All of Us Strangers, and more. Includes sensitive content timestamps.", 
            keywords: "best romance movies on hulu, hulu romance films, romantic movies streaming, sad romance movies",
            ogTitle: "10 Best Romance Movies on Hulu: Prestige & Heartbreak ðŸ’–",
            twitterTitle: "ðŸ’– 10 Best Romance Movies on Hulu (Anora, All of Us Strangers)",
            progressText: `of Top ${movies.length} Romance Movies on Hulu`
        };
    } else if (collection.slug === 'best-action-movies-on-hulu') {
        return {
            title: "10 Best Action Movies on Hulu: High-Octane List",
            description: "The 10 most adrenaline-fueled action movies on Hulu. Featuring Prey, John Wick, and more. Includes sensitive content timestamps.", 
            keywords: "best action movies on hulu, hulu action films, high octane movies, predator hulu",
            ogTitle: "10 Best Action Movies on Hulu: High-Octane & Adrenaline-Fueled ðŸ”¥",
            twitterTitle: "ðŸ”¥ 10 Best Action Movies on Hulu You Need to Stream Now",
            progressText: `of Top ${movies.length} Action Movies on Hulu`
        };
    } else if (collection.slug === 'best-horror-movies-on-hulu') {
        return {
            title: "10 Best Horror Movies on Hulu: Truly Terrifying Picks",
            description: "The 10 scariest horror movies on Hulu. From Longlegs to When Evil Lurks. Ranked by nightmare fuel. Includes sensitive content timestamps.", 
            keywords: "best horror movies on hulu, hulu horror films, scariest movies streaming, when evil lurks",
            ogTitle: "10 Best Horror Movies on Hulu: Pure Nightmare Fuel ðŸ©¸",
            twitterTitle: "ðŸ©¸ 10 Scariest Movies on Hulu (When Evil Lurks, Longlegs)",
            progressText: `of Top ${movies.length} Horror Movies on Hulu`
        };
    } else if (collection.slug === 'best-comedy-movies-on-hulu') {
        return {
            title: "10 Best Comedy Movies on Hulu: Funniest Picks",
            description: "The 10 funniest movies on Hulu right now. Featuring Superbad, Borat, and Palm Springs. Includes sensitive content timestamps.", 
            keywords: "best comedy movies on hulu, hulu comedy films, funniest movies streaming, superbad",
            ogTitle: "10 Best Comedy Movies on Hulu: Side-Splitting & Chaotic ðŸ˜‚",
            twitterTitle: "ðŸ˜‚ 10 Funniest Movies on Hulu (Superbad, Borat)",
            progressText: `of Top ${movies.length} Comedy Movies on Hulu`
        };
    } else if (collection.slug === 'best-sci-fi-movies-on-hulu') {
        return {
            title: "10 Best Sci-Fi Movies on Hulu: Visionary Films",
            description: "The top 10 sci-fi movies on Hulu. From time-travel in Donnie Darko to the alien hunts of Prey. Includes sensitive content timestamps.", 
            keywords: "best sci-fi movies on hulu, hulu sci-fi films, donnie darko, sci-fi streaming",
            ogTitle: "10 Best Sci-Fi Movies on Hulu: Visionary & Mind-Bending ðŸ›¸",
            twitterTitle: "ðŸ›¸ 10 Best Sci-Fi Movies on Hulu (Donnie Darko, Prey)",
            progressText: `of Top ${movies.length} Sci-Fi Movies on Hulu`
        };
    } else if (collection.slug === 'best-thriller-movies-hulu') {
        return {
            title: "10 Best Thriller Movies on Hulu: Suspense Ranked",
            description: "The 10 most suspenseful thrillers on Hulu. Featuring Heat and Black Swan. Ranked by tension. Includes sensitive content timestamps.", 
            keywords: "best thriller movies on hulu, hulu thrillers, suspense films, heat movie",
            ogTitle: "10 Best Thriller Movies on Hulu: Suspense & Tension ðŸ”´",
            twitterTitle: "ðŸ”´ 10 Best Thriller Movies on Hulu (Heat, Black Swan)",
            progressText: `of Top ${movies.length} Thriller Movies on Hulu`
        };
    } else if (collection.slug === 'best-movies-on-hulu') {
        return {
            title: "10 Best Movies on Hulu: The Ultimate Ranking",
            description: "The definitive list of the 10 highest-rated movies on Hulu. From Oscar winners to cult classics. Includes sensitive content timestamps.", 
            keywords: "best movies on hulu, hulu top rated films, best hulu movies ranking, essential movies",
            ogTitle: "10 Best Movies on Hulu: The Definitive Ranking ðŸ†",
            twitterTitle: "ðŸ† 10 Highest-Rated Movies Streaming on Hulu Right Now",
            progressText: `of Top ${movies.length} Best Movies on Hulu`
        };
    } else if (collection.slug === 'best-drama-movies-on-hulu') {
        return {
            title: "10 Best Drama Movies on Hulu: Emotional Masterpieces",
            description: "The 10 most powerful drama movies on Hulu. Featuring Boyhood and Perfect Days. Ranked by impact. Includes sensitive content timestamps.", 
            keywords: "best drama movies on hulu, hulu emotional films, boyhood, tearjerkers on hulu",
            ogTitle: "10 Best Drama Movies on Hulu: Deeply Emotional Cinema ðŸŽ­",
            twitterTitle: "ðŸŽ­ 10 Emotional Masterpieces Streaming on Hulu Right Now",
            progressText: `of Top ${movies.length} Drama Movies on Hulu`
        };
    } else if (collection.slug === 'best-family-movies-on-hulu') {
        return {
            title: "10 Best Family Movies on Hulu: Wholesome & Fun",
            description: "The top 10 family-friendly movies on Hulu. Featuring Sonic 2 and Night at the Museum. Includes sensitive content timestamps.", 
            keywords: "best family movies on hulu, hulu kids movies, wholesome movies, family movie night",
            ogTitle: "10 Best Family Movies on Hulu: Wholesome Fun ðŸ¿",
            twitterTitle: "ðŸ¿ 10 Best Family Movies on Hulu (Robot Dreams, Sonic 2)",
            progressText: `of Top ${movies.length} Family Movies on Hulu`
        };
    } else if (collection.slug === 'best-action-movies-on-hbo-max') {
        return {
            title: "10 Best Action Movies on HBO Max: Epic Scale",
            description: "The 10 greatest action movies on HBO Max. Including Dune: Part Two and The Dark Knight. Includes sensitive content timestamps.", 
            keywords: "best action movies on hbo max, hbo max epic films, seven samurai, dark knight, dune part two",
            ogTitle: "10 Epic Action Movies on HBO Max: Mythic Heroes & Scale âš”ï¸",
            twitterTitle: "âš”ï¸ 10 Greatest Action Epics on HBO Max (Seven Samurai, Dune 2)",
            progressText: `of Top ${movies.length} Action Movies on HBO Max`
        };
    } else if (collection.slug === 'best-romance-movies-on-hbo-max') {
        return {
            title: "10 Best Romance Movies on HBO Max: Prestige Films",
            description: "The top 10 romance movies on HBO Max. Featuring Casablanca, Past Lives, and In the Mood for Love. Includes sensitive content timestamps.", 
            keywords: "best romance movies on hbo max, hbo max romance films, casablanca, past lives, romantic movies",
            ogTitle: "10 Best Romance Movies on HBO Max: Prestige & Heartbreak ðŸ’–",
            twitterTitle: "ðŸ’– 10 Best Romance Movies on HBO Max (Casablanca, Past Lives)",
            progressText: `of Top ${movies.length} Romance Movies on HBO Max`
        };
    } else if (collection.slug === 'best-thriller-movies-on-hbo-max') {
        return {
            title: "10 Best Thriller Movies on HBO Max: Suspense Ranked",
            description: "The 10 most suspenseful thrillers on HBO Max. Featuring Funny Games, Get Out, and The Dark Knight. Includes sensitive content timestamps.", 
            keywords: "best thriller movies on hbo max, hbo max suspense films, funny games, get out, psychological thrillers",
            ogTitle: "10 Best Thriller Movies on HBO Max: Suspense & Mind Games ðŸ”´",
            twitterTitle: "ðŸ”´ 10 Most Suspenseful Thrillers on HBO Max (Funny Games, Get Out)",
            progressText: `of Top ${movies.length} Thriller Movies on HBO Max`
        };
    } else if (collection.slug === 'best-family-movies-on-hbo-max') {
        return {
            title: "10 Best Family Movies on HBO Max: Wholesome Picks",
            description: "The top 10 family movies on HBO Max. From Harry Potter to The Wizard of Oz. Includes sensitive content timestamps.", 
            keywords: "best family movies on hbo max, hbo max kids movies, harry potter, flow movie, wholesome movies",
            ogTitle: "10 Best Family Movies on HBO Max: Magical & Wholesome ðŸª„",
            twitterTitle: "ðŸª„ 10 Magical Family Movies on HBO Max (Wizard of Oz, Harry Potter)",
            progressText: `of Top ${movies.length} Family Movies on HBO Max`
        };
    } else if (collection.slug === 'best-sci-fi-movies-on-hbo-max') {
        return {
            title: "10 Best Sci-Fi Movies on HBO Max: Visual Masterpieces",
            description: "The definitive ranking of the top 10 sci-fi movies on HBO Max. From Dune to 2001: A Space Odyssey. Includes sensitive content timestamps.", 
            keywords: "best sci-fi movies on hbo max, hbo max sci-fi, dune, inception, 2001 space odyssey",
            ogTitle: "10 Best Sci-Fi Movies on HBO Max: Spectacular & Mind-Bending ðŸš€",
            twitterTitle: "ðŸš€ 10 Spectacular Sci-Fi Movies on HBO Max (Dune, Inception)",
            progressText: `of Top ${movies.length} Sci-Fi Movies on HBO Max`
        };
    } else if (collection.slug === 'best-horror-movies-on-hbo-max') {
        return {
            title: "10 Best Horror Movies on HBO Max: Scariest Ranked",
            description: "The 10 scariest movies on HBO Max. From The Conjuring to Evil Dead Rise. Ranked by dread. Includes sensitive content timestamps.", 
            keywords: "best horror movies on hbo max, hbo max horror films, the conjuring, evil dead rise, horror streaming",
            ogTitle: "10 Best Horror Movies on HBO Max: Pure Nightmare Fuel ðŸ©¸",
            twitterTitle: "ðŸ©¸ 10 Scariest Movies on HBO Max (The Conjuring, Evil Dead Rise)",
            progressText: `of Top ${movies.length} Horror Movies on HBO Max`
        };
    } else if (collection.slug === 'best-movies-on-hbo-max') {
        return {
            title: "10 Best Movies on HBO Max: The Essential List",
            description: "The 10 absolute best movies on HBO Max. Featuring Seven Samurai, The Dark Knight, and more. Includes sensitive content timestamps.", 
            keywords: "best movies on hbo max, top rated hbo max films, seven samurai, dark knight, cinematic masterpieces",
            ogTitle: "10 Best Movies on HBO Max: The Essential Watchlist ðŸ†",
            twitterTitle: "ðŸ† 10 Cinematic Masterpieces on HBO Max You Must See",
            progressText: `of Top ${movies.length} Best Movies on HBO Max`
        };
    } else if (collection.slug === 'best-drama-movies-on-hbo-max') {
        return {
            title: "10 Best Drama Movies on HBO Max: Emotional Films",
            description: "The 10 best drama movies on HBO Max. Featuring Moonlight, Taxi Driver, and Paris, Texas. Includes sensitive content timestamps.", 
            keywords: "best drama movies on hbo max, hbo max emotional films, moonlight, taxi driver, drama rankings",
            ogTitle: "10 Best Drama Movies on HBO Max: Deeply Emotional Cinema ðŸŽ­",
            twitterTitle: "ðŸŽ­ 10 Emotional Masterpieces Streaming on HBO Max Right Now",
            progressText: `of Top ${movies.length} Drama Movies on HBO Max`
        };
    } else if (collection.slug === 'best-comedy-movies-on-hbo-max') {
        return {
            title: "10 Best Comedy Movies on HBO Max: Satire & Laughs",
            description: "The 10 funniest movies on HBO Max. From Barbie to City Lights. Ranked by comedic brilliance. Includes sensitive content timestamps.", 
            keywords: "best comedy movies on hbo max, hbo max comedy films, city lights, barbie, comedy rankings",
            ogTitle: "10 Best Comedy Movies on HBO Max: Satire & Slapstick ðŸ˜‚",
            twitterTitle: "ðŸ˜‚ 10 Funniest Movies on HBO Max (City Lights, Barbie)",
            progressText: `of Top ${movies.length} Comedy Movies on HBO Max`
        };
    } else if (collection.slug === 'best-action-movies-on-paramount-plus') {
        return {
            title: "10 Best Action Movies on Paramount+: High-Octane",
            description: "The 10 best action movies on Paramount+. Featuring Top Gun: Maverick and Mission: Impossible. Includes sensitive content timestamps.", 
            keywords: "best action movies on paramount plus, high octane movies, top gun maverick, mission impossible",
            ogTitle: "10 Best Action Movies on Paramount+: High-Octane & Adrenaline-Fueled ðŸ”¥",
            twitterTitle: "ðŸ”¥ 10 High-Octane Action Movies on Paramount+ You Must Watch",
            progressText: `of Top ${movies.length} Action Movies on Paramount+`
        };
    } else if (collection.slug === 'best-sci-fi-movies-on-paramount-plus') {
        return {
            title: "10 Best Sci-Fi Movies on Paramount+: Visionary Films",
            description: "The 10 best sci-fi movies on Paramount+. From Interstellar to Star Trek. Ranked by spectacle. Includes sensitive content timestamps.", 
            keywords: "best sci-fi movies on paramount plus, paramount plus sci-fi, interstellar, arrival, star trek",
            ogTitle: "10 Best Sci-Fi Movies on Paramount+: Cosmic & Mind-Bending ðŸš€",
            twitterTitle: "ðŸš€ 10 Visionary Sci-Fi Movies on Paramount+ You Must Watch",
            progressText: `of Top ${movies.length} Sci-Fi Movies on Paramount+`
        };
    } else if (collection.slug === 'best-romance-movies-on-paramount-plus') {
        return {
            title: "10 Best Romance Movies on Paramount+: Prestige Films",
            description: "The 10 best romance movies on Paramount+. Featuring Titanic and About Time. Ranked by emotion. Includes sensitive content timestamps.", 
            keywords: "best romance movies on paramount plus, paramount plus romance films, titanic, about time, romantic movies",
            ogTitle: "10 Best Romance Movies on Paramount+: Prestige & Heartbreak ðŸ’–",
            twitterTitle: "ðŸ’– 10 Best Romance Movies on Paramount+ (Titanic, About Time)",
            progressText: `of Top ${movies.length} Romance Movies on Paramount+`
        };


} else if (collection.slug === 'best-core-drama-movies-on-paramount-plus') {
    return {
        title: "10 Best Core Drama Movies on Paramount+: Emotional Picks",
        description: "The 10 most powerful dramas on Paramount+. Featuring There Will Be Blood, Forrest Gump, and Fences. Ranked by emotion. Includes sensitive content timestamps.", 
        keywords: "best drama movies on paramount plus, paramount plus emotional films, there will be blood, forrest gump, fences",
        ogTitle: "10 Best Core Drama Movies on Paramount+: Emotional Masterpieces ðŸŽ­",
        twitterTitle: "ðŸŽ­ 10 Emotional Dramas on Paramount+ (There Will Be Blood, Fences)",
        progressText: `of Top ${movies.length} Drama Movies on Paramount+`
    };


    } else if (collection.slug === 'best-thriller-movies-on-paramount-plus') {
    return {
        title: "10 Best Thriller Movies on Paramount+: Intense Picks",
        description: "The 10 most suspenseful thrillers on Paramount+. Featuring No Country for Old Men, Strange Darling, and 10 Cloverfield Lane. Includes sensitive content timestamps.", 
        keywords: "best thriller movies on paramount plus, paramount plus suspense films, no country for old men, strange darling, 10 cloverfield lane",
        ogTitle: "10 Best Thriller Movies on Paramount+: Suspense & Dread ðŸ”´",
        twitterTitle: "ðŸ”´ 10 Intense Thrillers on Paramount+ (No Country for Old Men, Strange Darling)",
        progressText: `of Top ${movies.length} Thriller Movies on Paramount+`
    };


    } else if (collection.slug === 'best-family-movies-on-paramount-plus') {
        return {
            title: "10 Best Family Movies on Paramount+: Wholesome Picks",
            description: "The top 10 family movies on Paramount+. From Rango to Sonic the Hedgehog 3. Ranked by fun factor. Includes sensitive content timestamps.",
            keywords: "best family movies on paramount plus, paramount plus kids movies, sonic 3, paw patrol movie, rango, tmnt mutant mayhem, wholesome movies",
            ogTitle: "10 Best Family Movies on Paramount+: Magical & Wholesome ðŸª„",
            twitterTitle: "ðŸª„ 10 Magical Family Movies on Paramount+ (Rango, Sonic 3)",
            progressText: `of Top ${movies.length} Family Movies on Paramount+`
        };
    } else if (collection.slug === 'best-horror-movies-on-paramount-plus') {
        return {
            title: "10 Best Horror Movies on Paramount+: Truly Terrifying Picks",
            description: "The 10 scariest horror movies on Paramount+. From Longlegs to When Evil Lurks. Ranked by nightmare fuel. Includes sensitive content timestamps.",
            keywords: "best horror movies on paramount plus, paramount plus horror films, scariest movies streaming, when evil lurks",
            ogTitle: "10 Best Horror Movies on Paramount+: Pure Nightmare Fuel ðŸ©¸",
            twitterTitle: "ðŸ©¸ 10 Scariest Movies on Paramount+ (When Evil Lurks, Longlegs)",
            progressText: `of Top ${movies.length} Horror Movies on Paramount+`
        };
} else if (collection.slug === 'best-comedy-movies-on-paramount-plus') {
    return {
        title: "10 Paramount+ Comedies Everyone Forgets (Ranked by Laughter)",
        description: "While everyone searches Netflix, Paramount+ has Tropic Thunder, Anchorman, and The Naked Gunâ€”classics you actually rewatch. No algorithms. Just funny.",
        keywords: "best paramount plus comedies, tropic thunder where to watch, anchorman streaming, hidden comedy gems paramount plus, funniest movies paramount plus",
        ogTitle: "10 Paramount+ Comedies Hiding in Plain Sight",
        twitterTitle: "ðŸŽ¬ The 10 Paramount+ comedies you forgot existed",
        progressText: `of 10 Hidden Comedy Gems on Paramount+`
    };

    } else if (collection.slug === 'best-movies-on-paramount-plus') {
        return {
            title: "Best Movies on Paramount+: 10 Essential Films to Watch",
            description: "The definitive list of the best movies to watch on Paramount+, from The Godfather to Top Gun: Maverickâ€”ranked by cinematic mastery and cultural impact.",
            keywords: "best movies on paramount plus, top movies on paramount plus, what to watch on paramount plus, paramount plus movies",
            ogTitle: "Best Movies on Paramount+: 10 Essential Films to Watch ðŸŽ¬",
            twitterTitle: "ðŸŽ¬ The Definitive Ranking of the Best Movies on Paramount+ You Have to Watch",
            progressText: `of Top ${movies.length} Paramount+ Movies`
        };
    } else if (collection.slug === 'best-action-adventure-movies-on-peacock') {
        return {
            title: "10 Best Action & Adventure Movies on Peacock: High-Octane",
            description: "The 10 most adrenaline-fueled action movies on Peacock. Featuring The Revenant, and more. Includes sensitive content timestamps.",
            keywords: "best action movies on peacock, peacock action films, high octane movies, the revenant peacock",
            ogTitle: "10 Best Action Movies on Peacock: High-Octane & Adrenaline-Fueled ðŸ”¥",
            twitterTitle: "ðŸ”¥ 10 Best Action Movies on Peacock You Need to Stream Now",
            progressText: `of Top ${movies.length} Action Movies on Peacock`
        };
    } else if (collection.slug === 'best-sci-fi-movies-on-peacock') {
        return {
            title: "10 Best Sci-Fi Movies on Peacock: Visionary Films",
            description: "The 10 best sci-fi movies on Peacock. From mind-bending realities to alien encounters. Includes sensitive content timestamps.",
            keywords: "best sci-fi movies on peacock, peacock sci-fi films, mind-bending movies, sci-fi streaming",
            ogTitle: "10 Best Sci-Fi Movies on Peacock: Visionary & Mind-Bending ðŸ›¸",
            twitterTitle: "ðŸ›¸ 10 Best Sci-Fi Movies on Peacock You Need to Stream Now",
            progressText: `of Top ${movies.length} Sci-Fi Movies on Peacock`
        };
    } else if (collection.slug === 'best-romance-movies-on-peacock') {
        return {
            title: "10 Best Romance Movies on Peacock: Emotional Films",
            description: "The 10 best romance movies on Peacock. From classic love stories to modern romantic comedies. Includes sensitive content timestamps.",
            keywords: "best romance movies on peacock, peacock romance films, romantic movies streaming, love stories",
            ogTitle: "10 Best Romance Movies on Peacock: Prestige & Heartbreak ðŸ’–",
            twitterTitle: "ðŸ’– 10 Best Romance Movies on Peacock You Need to Stream Now",
            progressText: `of Top ${movies.length} Romance Movies on Peacock`
        };
    } else if (collection.slug === 'best-family-movies-on-peacock') {
        return {
            title: "10 Best Family Movies on Peacock: Wholesome Picks",
            description: "The top 10 family-friendly movies on Peacock. Featuring How to Train Your Dragon and Harry Potter. Includes sensitive content timestamps.",
            keywords: "best family movies on peacock, peacock kids movies, wholesome movies, family movie night",
            ogTitle: "10 Best Family Movies on Peacock: Wholesome Fun ðŸ¿",
            twitterTitle: "ðŸ¿ 10 Best Family Movies on Peacock (How to Train Your Dragon, Harry Potter)",
            progressText: `of Top ${movies.length} Family Movies on Peacock`
        };
    } else if (collection.slug === 'best-drama-movies-on-peacock') {
        return {
            title: "10 Best Drama Movies on Peacock: Emotional Films",
            description: "The 10 best drama movies on Peacock. Ranked by emotional impact. Includes sensitive content timestamps.",
            keywords: "best drama movies on peacock, peacock emotional films, drama rankings",
            ogTitle: "10 Best Drama Movies on Peacock: Deeply Emotional Cinema ðŸŽ­",
            twitterTitle: "ðŸŽ­ 10 Emotional Masterpieces Streaming on Peacock Right Now",
            progressText: `of Top 10 Drama Movies on Peacock`
        };
    } else if (collection.slug === 'best-thriller-movies-on-peacock') {
    return {
        title: "10 Best Thriller Movies on Peacock: Suspense Ranked",
        description: "The 10 most suspenseful thrillers on Peacock. Ranked by tension. Includes sensitive content timestamps.", 
        keywords: "best thriller movies on peacock, peacock thrillers, suspense films",
        ogTitle: "10 Best Thriller Movies on Peacock: Suspense & Tension ðŸ”´",
        twitterTitle: "ðŸ”´ 10 Best Thriller Movies on Peacock",
        progressText: `of Top 10 Thriller Movies on Peacock`
    };
    } else if (collection.slug === 'best-movies-on-peacock') {
        return {
            title: "Best Movies on Peacock: 10 Essential Films to Watch",
            description: "The definitive list of the best movies to watch on Peacock, from The Godfather to Top Gun: Maverickâ€”ranked by cinematic mastery and cultural impact.",
            keywords: "best movies on peacock, top movies on peacock, what to watch on peacock, peacock movies",
            ogTitle: "Best Movies on Peacock: 10 Essential Films to Watch ðŸŽ¬",
            twitterTitle: "ðŸŽ¬ The Definitive Ranking of the Best Movies on Peacock You Have to Watch",
            progressText: `of Top ${movies.length} Peacock Movies`
        };
    } else if (collection.slug === 'movies-like-black-swan') {
        return {
            title: "10 Movies Like Black Swan: Psychological Obsession",
            description: "Loved Black Swan? Watch these 10 intense films about perfectionism, obsession, and identity collapse. Includes sensitive content timestamps.", 
            keywords: "movies like black swan, psychological obsession films, perfectionism movies, darren aronofsky style",
            ogTitle: "10 Movies Like Black Swan: Psychological Obsession Films ðŸ©°",
            twitterTitle: "ðŸ©° Loved Black Swan? These 10 Films Are Just as Intense",
            progressText: `of Top ${movies.length} Movies Like Black Swan`
        };
    } else if (collection.slug === 'movies-like-donnie-darko') {
        return {
            title: "10 Movies Like Donnie Darko: Reality-Warping Films",
            description: "Loved Donnie Darko? Discover 10 mind-bending films featuring time travel, paradoxes, and dark atmosphere. Includes sensitive content timestamps.", 
            keywords: "movies like donnie darko, time travel movies, reality warping films, cult classics",
            ogTitle: "10 Movies Like Donnie Darko: Reality-Warping Masterpieces ðŸŒŒ",
            twitterTitle: "ðŸŒŒ Loved Donnie Darko? These 10 Films Will Break Reality",
            progressText: `of Top ${movies.length} Movies Like Donnie Darko`
        };
    } else if (collection.slug === 'movies-like-parasite') { 
        return {
            title: "10 Movies Like Parasite: Class Warfare Thrillers",
            description: "Loved Parasite? Explore 10 gripping films about social inequality, class struggle, and economic suspense. Includes sensitive content timestamps.", 
            keywords: "movies like parasite, class warfare movies, social thriller, bong joon ho style",
            ogTitle: "10 Movies Like Parasite: Brutal Class Warfare Films ðŸ¢",
            twitterTitle: "ðŸ¢ Loved Parasite? These 10 Class War Films Are Just as Brutal",
            progressText: `of Top ${movies.length} Movies Like Parasite`
        };
    } else if (collection.slug === 'movies-like-interstellar') {
        return {
            title: "10 Movies Like Interstellar: Cerebral Space Epics",
            description: "Loved Interstellar? Watch these 10 visually stunning space films exploring time, relativity, and human survival. Includes sensitive content timestamps.", 
            keywords: "movies like interstellar, cerebral sci fi, space exploration movies, christopher nolan style",
            ogTitle: "10 Movies Like Interstellar: Cerebral Space Exploration Films ðŸš€",
            twitterTitle: "ðŸš€ Loved Interstellar? These 10 Space Films Are Just as Deep",
            progressText: `of Top ${movies.length} Movies Like Interstellar`
        };
    } else if (collection.slug === 'movies-like-shutter-island') {
        return {
            title: "10 Movies Like Shutter Island: Twisted Thrillers",
            description: "Can't stop thinking about Shutter Island? Watch these 10 psychological thrillers with shocking twists. Includes sensitive content timestamps.", 
            keywords: "movies like shutter island, plot twist movies, psychological thrillers, leonardo dicaprio movies",
            ogTitle: "10 Movies Like Shutter Island: Twisted Psychological Thrillers",
            twitterTitle: "ðŸŽ¬ Can't Forget Shutter Island? Watch These 10 Twisted Films",
            progressText: `of Top ${movies.length} Movies Like Shutter Island`
        };
    } else if (collection.slug === 'best-crime-thriller-movies') {
        return {
            title: "10 Best Crime Thrillers: Ruthless & Gritty",
            description: "From Heat to The Departed. The 10 grittiest crime thrillers featuring heists, investigations, and moral gray areas. Includes sensitive content timestamps.", 
            keywords: "best crime thriller movies, gritty crime films, heat movie, the departed",
            ogTitle: "10 Best Crime Thrillers: Heat to The Departed ðŸ”«",
            twitterTitle: "ðŸ”« 10 Ruthless Crime Thrillers You Can't Miss (Heat, Departed)",
            progressText: `of Top ${movies.length} Crime Thriller Movies`
        };
    } else if (collection.slug === 'best-heist-thriller-movies') {
        return {
            title: "10 Best Heist Movies: Genius Robberies Ranked",
            description: "From Ocean's Eleven to Heat. The 10 best heist thrillers with elaborate plans and high stakes. Includes sensitive content timestamps.", 
            keywords: "best heist movies, smart robbery films, heist thrillers, bank robbery movies",
            ogTitle: "10 Best Heist Movies: Ocean's Eleven to Heat ðŸ’°",
            twitterTitle: "ðŸ’° 10 Genius Heist Movies (Ocean's, Heat, Inside Man)",
            progressText: `of Top ${movies.length} Heist Thriller Movies`
        };
} else if (collection.slug === 'best-time-travel-movies') {
    return {
        title: "10 Time Travel Movies That Require A Diploma (Ranked)",
        description: "Logic won't save you. These films break causality itself. From Primer's chalkboard math to Predestination's impossible loop. Bring a notebook.",
        keywords: "best time travel movies, primer explained, predestination paradox, hard sci-fi movies, bootstrap paradox films, timecrimes, complex sci-fi",
        ogTitle: "10 Time Travel Movies You Will Need To Watch Twice",
        twitterTitle: "â° 10 time travel films that actually destroy your linear thinking",
        progressText: `of 10 Causality-Breaking Films`
    };

    } else if (collection.slug === 'best-sci-fi-movies') {
        return {
            title: "10 Best Sci-Fi Movies of All Time: Visionary List",
            description: "From Blade Runner to Interstellar. The definitive ranking of the 10 greatest sci-fi films with visionary concepts. Includes sensitive content timestamps.", 
            keywords: "best sci fi movies, visionary science fiction, blade runner, sci-fi classics",
            ogTitle: "10 Best Sci-Fi Movies: Blade Runner to Interstellar ðŸš€",
            twitterTitle: "ðŸš€ 10 Visionary Sci-Fi Movies (Blade Runner, Interstellar)",
            progressText: `of Top ${movies.length} Sci-Fi Movies`
        };
} else if (collection.slug === 'best-psychological-thriller-movies') {
    return {
        title: "10 Psychological Thrillers That Broke People's Brains",
        description: "Not all minds recover. These 10 films weaponize paranoia, identity collapse, and reality distortion. From Fight Club's dissociation to Black Swan's obsession.",
        keywords: "best psychological thriller movies, mind bending movies, disturbing psychological films, fight club, black swan, memento, shutter island",
        ogTitle: "10 Psychological Thrillers You Can't Unsee (Watch Carefully)",
        twitterTitle: "ðŸ§  10 psychological thrillers that permanently alter your brain",
        progressText: `of 10 Mind-Destroying Thrillers`
    };

    } else if (collection.slug === 'best-thriller-movies') {
        return {
            title: "10 Best Thriller Movies: Edge-of-Your-Seat List",
            description: "The 10 most intense thriller movies ever made. Relentless pacing, high stakes, and plot twists you won't see coming. Includes sensitive content timestamps.", 
            keywords: "best thriller movies, high suspense movies, edge of seat thrillers, suspense classics",
            ogTitle: "10 Best Thriller Movies: You Won't Pause ðŸ”¥",
            twitterTitle: "ðŸ”¥ 10 Edge-of-Your-Seat Thrillers You Can't Pause",
            progressText: `of Top ${movies.length} Thriller Movies`
        };
    } else if (collection.slug === 'best-mystery-thriller-movies') {
        return {
            title: "10 Best Mystery Thrillers: Unsolvable Films",
            description: "The 10 cleverest mystery thrillers with impossible puzzles. Ranked by how hard it is to guess the ending. Includes sensitive content timestamps.", 
            keywords: "best mystery thriller movies, whodunit movies, detective mysteries, plot twist films",
            ogTitle: "10 Best Mystery Thrillers: Unsolvable Until the End ðŸ”",
            twitterTitle: "ðŸ” 10 Detective Mystery Thrillers That'll Stump You",
            progressText: `of Top ${movies.length} Mystery Thriller Movies`
        };
} else if (collection.slug === 'best-survival-movies') {
    return {
        title: "Survival Movies That Push Humans to the Edge (Real Stories)",

        description: "A curated collection of the most intense survival films ever madeâ€”stories of human endurance against unforgiving nature. Wilderness, isolation, and real survival stakes, with detailed sensitive content timelines.",

        keywords: "best survival movies, realistic survival films, survival movies based on true stories, man vs nature films",

        ogTitle: "Survival Movies That Push Humans to the Edge | Filmiway",

        twitterTitle: "Survival Movies That Push Humans to the Edge",

        progressText: `Exploring ${movies.length} Survival Films`
    };


} else if (collection.slug === 'best-detective-thriller-movies') {
    return {
        title: "10 Detective Masterpieces That Define Obsession (Ranked)",
      description: "These detectives can't let go. From Se7en's seven-day nightmare to Zodiac's decade-long spiral. Not all cases closeâ€”but they always leave scars.",
        keywords: "best detective thriller movies, movies like se7en, zodiac killer films, memories of murder, dark police procedurals, prisoners movie, noir thrillers",
        ogTitle: "10 Darkest Manhunts in Cinema History (Ranked)",
        twitterTitle: "ðŸ” 10 detective films where the mystery matters more than the solution",
        progressText: `of 10 Masterpiece Detective Films`
    };

} else if (collection.slug === 'best-revenge-movies') {
    return {
        title: "10 Revenge Epics Where Mercy Was Never An Option (Ranked)",
        description: "They chose annihilation over peace. From Oldboy's 15-year trap to Gladiator's blood-soaked arena. No forgiveness. No redemption. Just systematic destruction.",
        keywords: "best revenge movies, oldboy explained, i saw the devil, john wick, gladiator vengeance, brutal revenge films, monte cristo, revenge thrillers",
        ogTitle: "10 Films Where The Hero Becomes The Monster",
        twitterTitle: "âš”ï¸ 10 revenge movies where mercy died first (Ranked)",
        progressText: `of 10 Tales of Total Vengeance`
    };

    } else if (collection.slug === 'best-war-films') {
        return {
            title: "10 Best War Films: Unflinching Masterpieces",
            description: "The 10 greatest war films ever made. Visceral battle scenes, anti-war themes, and moral reckoning. Ranked by realism. Includes sensitive content timestamps.", 
            keywords: "best war films, realistic war movies, d-day movies, anti-war films",
            ogTitle: "10 Best War Films: Unflinching D-Day to Jungle Combat âš”ï¸",
            twitterTitle: "âš”ï¸ 10 Unflinching War Films That Show War's True Cost",
            progressText: `of Top ${movies.length} War Films`
        };
 
    } else {
        return {
            title: `Best ${collection.title}: Top 10 Films`,
            description: `10 curated ${collection.title.toLowerCase()} films ranked by quality & impact. Includes exact timestamps for sensitive content.`,
            keywords: `best ${collection.title.toLowerCase()}, curated films, sensitive content timestamps`,
            ogTitle: `Best ${collection.title}: 10 Must-Watch Films`,
            twitterTitle: `ðŸŽ¬ Best ${collection.title}: 10 Films You Can't Miss`,
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

    // ðŸ”¥ GET CURRENT MOVIE AND CALCULATE RANK CORRECTLY
    const currentMovie = movies[currentMovieIndex];
    const currentRank = movies.length - currentMovieIndex;

    // ðŸ”¥ SMART NAVIGATION LOGIC
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

            // Clear all collection flags first âœ…
            sessionStorage.removeItem('fromInceptionCollection');
            sessionStorage.removeItem('fromMementoCollection');
            sessionStorage.removeItem('fromMatrixCollection');
            sessionStorage.removeItem('fromSe7enCollection');
            sessionStorage.removeItem('fromOldboyCollection');
            sessionStorage.removeItem('fromHuluRomanceCollection');
            sessionStorage.removeItem('fromHuluActionCollection');
            sessionStorage.removeItem('fromHuluHorrorCollection');
            sessionStorage.removeItem('fromHuluComedyCollection');
            sessionStorage.removeItem('fromHuluSciFiCollection');
            sessionStorage.removeItem('fromHuluThrillerCollection');
            sessionStorage.removeItem('fromHuluBestCollection');
            sessionStorage.removeItem('fromHuluDramaCollection');
            sessionStorage.removeItem('fromHuluFamilyCollection');
            sessionStorage.removeItem('fromHboActionCollection');
            sessionStorage.removeItem('fromHboRomanceCollection');
            sessionStorage.removeItem('fromHboMaxThrillerCollection');
            sessionStorage.removeItem('fromHboMaxFamilyCollection');
            sessionStorage.removeItem('fromHboMaxSciFiCollection');
            sessionStorage.removeItem('fromHboMaxHorrorCollection');
            sessionStorage.removeItem('fromHboMaxBestCollection');
            sessionStorage.removeItem('fromHboMaxDramaCollection');
            sessionStorage.removeItem('fromHboMaxComedyCollection');
            sessionStorage.removeItem('fromHboMaxComedyCollection');
            sessionStorage.removeItem('fromParamountActionCollection');
            sessionStorage.removeItem('fromParamountSciFiCollection');
            sessionStorage.removeItem('fromParamountRomanceCollection');
            sessionStorage.removeItem('fromParamountDramaCollection');
            sessionStorage.removeItem('fromParamountThrillerCollection');
            sessionStorage.removeItem('fromParamountFamilyCollection');
        sessionStorage.removeItem('fromParamountHorrorCollection');
        sessionStorage.removeItem('fromParamountComedyCollection');
        sessionStorage.removeItem('fromParamountBestCollection');
        sessionStorage.removeItem('fromPeacockActionCollection');
        sessionStorage.removeItem('fromPeacockSciFiCollection');
        sessionStorage.removeItem('fromPeacockRomanceCollection');
        sessionStorage.removeItem('fromPeacockThrillerCollection');
        sessionStorage.removeItem('fromPeacockBestCollection');
        sessionStorage.removeItem('fromPeacockComedyCollection');
            sessionStorage.removeItem('fromPeacockFamilyCollection');
            sessionStorage.removeItem('fromPeacockDramaCollection');
            sessionStorage.removeItem('fromEyesWideShutCollection');
            sessionStorage.removeItem('fromDonnieDarkoCollection');
            sessionStorage.removeItem('fromBlackSwanCollection');
            sessionStorage.removeItem('fromParasiteCollection'); 
            sessionStorage.removeItem('fromInterstellarCollection');
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
            sessionStorage.removeItem('fromRevengeCollection');
            sessionStorage.removeItem('fromWarFilmsCollection');

            // Set appropriate collection flag âœ…
            if (collection.slug === 'movies-like-inception') {
                sessionStorage.setItem('fromInceptionCollection', 'true');
            } else if (collection.slug === 'movies-like-memento') {
                sessionStorage.setItem('fromMementoCollection', 'true');
            } else if (collection.slug === 'movies-like-the-matrix') {
                sessionStorage.setItem('fromMatrixCollection', 'true');
            } else if (collection.slug === 'movies-like-se7en') {
                sessionStorage.setItem('fromSe7enCollection', 'true');
} else if (collection.slug === 'best-action-movies-on-hulu') {
                sessionStorage.setItem('fromHuluActionCollection', 'true');
} else if (collection.slug === 'best-romance-movies-on-hulu') {
                sessionStorage.setItem('fromHuluRomanceCollection', 'true');
                } else if (collection.slug === 'best-horror-movies-on-hulu') {
                sessionStorage.setItem('fromHuluHorrorCollection', 'true');
                } else if (collection.slug === 'best-comedy-movies-on-hulu') {
                sessionStorage.setItem('fromHuluComedyCollection', 'true');
} else if (collection.slug === 'best-sci-fi-movies-on-hulu') {
    sessionStorage.setItem('fromHuluSciFiCollection', 'true');
    } else if (collection.slug === 'best-thriller-movies-hulu') {
    sessionStorage.setItem('fromHuluThrillerCollection', 'true');
    } else if (collection.slug === 'best-movies-on-hulu') {
    sessionStorage.setItem('fromHuluBestCollection', 'true');
} else if (collection.slug === 'best-drama-movies-on-hulu') {
    sessionStorage.setItem('fromHuluDramaCollection', 'true');
    } else if (collection.slug === 'best-family-movies-on-hulu') {
    sessionStorage.setItem('fromHuluFamilyCollection', 'true');
} else if (collection.slug === 'best-action-movies-on-hbo-max') {
    sessionStorage.setItem('fromHboActionCollection', 'true');
    } else if (collection.slug === 'best-romance-movies-on-hbo-max') {
                sessionStorage.setItem('fromHboRomanceCollection', 'true');
                } else if (collection.slug === 'best-thriller-movies-on-hbo-max') {
    sessionStorage.setItem('fromHboMaxThrillerCollection', 'true');
    } else if (collection.slug === 'best-family-movies-on-hbo-max') {
    sessionStorage.setItem('fromHboMaxFamilyCollection', 'true');
    } else if (collection.slug === 'best-sci-fi-movies-on-hbo-max') {
    sessionStorage.setItem('fromHboMaxSciFiCollection', 'true');
    } else if (collection.slug === 'best-horror-movies-on-hbo-max') {
    sessionStorage.setItem('fromHboMaxHorrorCollection', 'true');
    } else if (collection.slug === 'best-movies-on-hbo-max') {
    sessionStorage.setItem('fromHboMaxBestCollection', 'true');
    } else if (collection.slug === 'best-drama-movies-on-hbo-max') {
    sessionStorage.setItem('fromHboMaxDramaCollection', 'true');
    } else if (collection.slug === 'best-comedy-movies-on-hbo-max') {
    sessionStorage.setItem('fromHboMaxComedyCollection', 'true');
    } else if (collection.slug === 'best-action-movies-on-paramount-plus') {
    sessionStorage.setItem('fromParamountActionCollection', 'true');
    } else if (collection.slug === 'best-sci-fi-movies-on-paramount-plus') {
    sessionStorage.setItem('fromParamountSciFiCollection', 'true');
    } else if (collection.slug === 'best-romance-movies-on-paramount-plus') {
    sessionStorage.setItem('fromParamountRomanceCollection', 'true');
} else if (collection.slug === 'best-core-drama-movies-on-paramount-plus') {
    sessionStorage.setItem('fromParamountDramaCollection', 'true');
} else if (collection.slug === 'best-thriller-movies-on-paramount-plus') {
    sessionStorage.setItem('fromParamountThrillerCollection', 'true');
} else if (collection.slug === 'best-family-movies-on-paramount-plus') {
    sessionStorage.setItem('fromParamountFamilyCollection', 'true');
} else if (collection.slug === 'best-horror-movies-on-paramount-plus') {
    sessionStorage.setItem('fromParamountHorrorCollection', 'true');
} else if (collection.slug === 'best-comedy-movies-on-paramount-plus') {
    sessionStorage.setItem('fromParamountComedyCollection', 'true');
} else if (collection.slug === 'best-movies-on-paramount-plus') {
    sessionStorage.setItem('fromParamountBestCollection', 'true');
} else if (collection.slug === 'best-action-adventure-movies-on-peacock') {
    sessionStorage.setItem('fromPeacockActionCollection', 'true');
} else if (collection.slug === 'best-sci-fi-movies-on-peacock') {
    sessionStorage.setItem('fromPeacockSciFiCollection', 'true');
} else if (collection.slug === 'best-romance-movies-on-peacock') {
    sessionStorage.setItem('fromPeacockRomanceCollection', 'true');
} else if (collection.slug === 'best-family-movies-on-peacock') {
    sessionStorage.setItem('fromPeacockFamilyCollection', 'true');
} else if (collection.slug === 'best-drama-movies-on-peacock') {
    sessionStorage.setItem('fromPeacockDramaCollection', 'true');
} else if (collection.slug === 'best-thriller-movies-on-peacock') {
    sessionStorage.setItem('fromPeacockThrillerCollection', 'true');
} else if (collection.slug === 'best-movies-on-peacock') {
    sessionStorage.setItem('fromPeacockBestCollection', 'true');
} else if (collection.slug === 'best-comedy-movies-on-peacock') {
    sessionStorage.setItem('fromPeacockComedyCollection', 'true');
} else if (collection.slug === 'movies-like-parasite') { 
                sessionStorage.setItem('fromParasiteCollection', 'true');
         } else if (collection.slug === 'movies-like-oldboy') {
          sessionStorage.setItem('fromOldboyCollection', 'true');
} else if (collection.slug === 'movies-like-eyes-wide-shut') {
                sessionStorage.setItem('fromEyesWideShutCollection', 'true');

          } else if (collection.slug === 'movies-like-black-swan') {
    sessionStorage.setItem('fromBlackSwanCollection', 'true');

          } else if (collection.slug === 'movies-like-donnie-darko') {
    sessionStorage.setItem('fromDonnieDarkoCollection', 'true');
            } else if (collection.slug === 'movies-like-interstellar') {
                sessionStorage.setItem('fromInterstellarCollection', 'true');
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
            } else if (collection.slug === 'best-revenge-movies') {
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

    // ðŸ”¥ ENHANCED CINEMATIC EXPLORER SECTION WITH DNA HELIX - SHOWS ON POSITION #10
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
                        className="text-center mb-10 sm:mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.8, duration: 1 }}
                    >
                        <div className="inline-flex items-center gap-3 px-6 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full mb-8">
                            <icons.icon1 className="w-5 h-5 text-yellow-400" />
                            <span className="text-yellow-400 font-medium tracking-wider uppercase text-sm">{collectionContent.badge}</span>
                            <icons.icon3 className="w-5 h-5 text-yellow-400" />
                        </div>
                        
                        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-4 sm:mb-6 leading-tight">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-white">
                                Explore {collectionContent.title}
                            </span>
                            <br />
                            <span className="text-transparent bg-clip-text font-normal bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-300">
                                Cinema Collection
                            </span>
                        </h2>
                        
                        <p className="text-base sm:text-xl text-gray-300/90 max-w-4xl mx-auto leading-relaxed font-light">
                            {collectionContent.description}
                        </p>
                    </motion.div>

                    {/* Three-Column Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 mb-10 sm:mb-16">
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
                                <h3 className="text-xl sm:text-2xl font-light text-white">The Selection</h3>
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
                                <h3 className="text-xl sm:text-2xl font-light text-white">The Ranking</h3>
                            </div>
                            
                            <p className="text-gray-300 leading-relaxed">
                                {collectionContent.ranking.text}
                            </p>
                            
                            <ul className="space-y-3">
                                {collectionContent.ranking.points.map((point, index) => (
                                    <li key={index} className="flex items-center gap-3 text-sm">
                                        <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                        <span className="text-gray-400">{point}</span>
                                    </li>
                                ))}
                            </ul>
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
                                <h3 className="text-xl sm:text-2xl font-light text-white">The Experience</h3>
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
                        className="flex items-center justify-center mb-10 sm:mb-16"
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

// ðŸ”¥ MOBILE-OPTIMIZED CINEMATIC HEADER
// ðŸ”¥ MOBILE-OPTIMIZED CINEMATIC HEADER - SEO FIXED âœ…
// ðŸ”¥ MOBILE-OPTIMIZED CINEMATIC HEADER - SEO FIXED âœ…
const CinematicHeader = React.memo(() => {
    return (
        <header className="text-center mb-8 sm:mb-16 lg:mb-20 px-4 sm:px-6 w-full relative">
            <motion.div 
                initial={{ opacity: 0, y: -40 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1.2, ease: "easeOut" }} 
                className="space-y-2 sm:space-y-6 lg:space-y-8 xl:space-y-12 relative z-10"
            >
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        {/* Visual Title */}
{/* Visual Title */}
{/* Visual Title */}
{/* Visual Title */}
<h1 
    className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extralight tracking-tight sm:tracking-[0.1em] text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-yellow-300 to-amber-300 md:ml-20 lg:ml-24 xl:ml-28" 
    style={{ 
        fontFamily: "'Playfair Display', serif", 
        textShadow: '0 0 80px rgba(234, 179, 8, 0.15)',
        lineHeight: '1.1'
    }}
>
    <span className="block leading-tight" style={{ letterSpacing: '0.02em' }}>
        {`${headerContent.title}`}
    </span>
</h1>

                    </motion.div>
                    
                    <motion.p 
                        className="text-sm sm:text-lg md:text-xl lg:text-2xl font-light mt-2 sm:mt-6 text-yellow-200/60"
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
                </div>
                
                <motion.div 
                    className="grid grid-cols-3 sm:grid-cols-3 gap-2 sm:gap-4 lg:gap-6 mt-8 sm:mt-16 lg:mt-20 max-w-4xl mx-auto" 
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
                            <div className="h-full p-2 sm:p-6 lg:p-8 bg-gradient-to-br from-gray-800/40 via-gray-900/30 to-black/40 border border-yellow-500/20 rounded-2xl backdrop-blur-xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-transparent to-amber-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                
                                <div className="flex flex-col items-center space-y-2 sm:space-y-4 relative z-10">
                                    <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-400/20 to-amber-400/20 rounded-xl flex items-center justify-center border border-yellow-400/30">
                                        {index === 0 && <Brain className="w-5 h-5 sm:w-7 sm:h-7 text-yellow-400" />}
                                        {index === 1 && <Star className="w-5 h-5 sm:w-7 sm:h-7 text-yellow-400" />}
                                        {index === 2 && <Award className="w-5 h-5 sm:w-7 sm:h-7 text-yellow-400" />}
                                    </div>
                                    
                                    <h3 className="text-yellow-200 text-xs sm:text-base lg:text-lg font-medium tracking-wider uppercase text-center leading-tight">
                                        {badge.label}
                                    </h3>
                                    <p className="hidden sm:block text-gray-400 text-xs sm:text-sm text-center leading-relaxed">
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
    // ðŸ”¥ CINEMATIC LOADER
  // ðŸ”¥ CINEMATIC LOADER (SEO FIXED)
const CinematicLoader = React.memo(() => {
    return (
        <div className="flex flex-col items-center justify-center h-full space-y-8 sm:space-y-16 px-4 sm:px-8">
            <div className="relative">
                {/* ... existing spinner animation code ... */}
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
                        <div key={index} className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400/40 rounded-full" style={{ top: '6px', left: '50%', transformOrigin: '0 26px', transform: `translateX(-50%) rotate(${rotation}deg)` }} />
                    ))}
                </motion.div>
            </div>
            
            <motion.div 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.8 }} 
                className="text-center space-y-4 sm:space-y-6 max-w-xs sm:max-w-md"
            >
                {/* âœ… THE FIX: Changed h2 to h1 */}
                <h1 className="text-xl sm:text-2xl font-light text-gray-200 tracking-[0.2em] uppercase">
                    {loaderContent.title}
                </h1>
                
                <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed tracking-wide">
                    {loaderContent.description}
                </p>
                <div className="w-48 h-1 sm:w-64 bg-gray-800 rounded-full overflow-hidden mx-auto">
                    <motion.div className="h-full bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full" animate={{ x: ['-100%', '100%'] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
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
    // âœ… REMOVED EXCESSIVE BOTTOM PADDING (pb-24) TO FIX THE GAP
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <Head>
    {/* âœ… FIXED: Template literal prevents hydration comments in Google Search results */}
    <title key={`collection-title-${collection.slug}`}>
        {`${metaContent.title || collection.title || "Filmiway - Movie Collection"}`}
    </title>

    <meta
        key={`collection-desc-${collection.slug}`}
        name="description"
        content={`${metaContent.description || collection.description || ""}`}
    />

    <meta
        key={`collection-keywords-${collection.slug}`}
        name="keywords"
        content={`${metaContent.keywords || ""}`}
    />

    <link rel="canonical" href={`https://filmiway.com/collection/${collection.slug}`} />

    <meta name="robots" content="index, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <meta property="og:title" key={`og-title-${collection.slug}`} content={`${metaContent.ogTitle || metaContent.title || collection.title}`} />
    <meta property="og:description" key={`og-desc-${collection.slug}`} content={`${metaContent.description || collection.description}`} />
    <meta property="og:type" content="website" />
    
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" key={`twitter-title-${collection.slug}`} content={`${metaContent.twitterTitle || metaContent.title || collection.title}`} />
    <meta name="twitter:description" key={`twitter-desc-${collection.slug}`} content={`${metaContent.description || collection.description}`} />
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
                                    : collection?.slug === 'movies-like-the-matrix'
                                    ? 'movies/matrix/'
                                    : collection?.slug === 'movies-like-se7en'
                                    ? 'movies/like-se7en/'
                                    : collection?.slug === 'movies-like-parasite' 
                                    ? 'movies/parasite/'
                                   : collection?.slug === 'movies-like-oldboy'
? 'movies/oldboy/'

: collection?.slug === 'movies-like-donnie-darko'
? 'movies/donnie-darko/'
: collection?.slug === 'movies-like-black-swan'
? 'movies/black-swan/'


: collection?.slug === 'movies-like-eyes-wide-shut'
? 'movies/eyes-wide-shut/'
: collection?.slug === 'best-action-movies-on-hulu'
                                    ? 'movies/best-action-movies-on-hulu/'
: collection?.slug === 'best-romance-movies-on-hulu'
                                   ? 'movies/best-romance-movies-on-hulu/'

: collection?.slug === 'best-horror-movies-on-hulu'
                                 ? 'movies/best-horror-movies-on-hulu/'
: collection?.slug === 'best-comedy-movies-on-hulu'
                                   ? 'movies/best-comedy-movies-on-hulu/'
                                   : collection?.slug === 'best-sci-fi-movies-on-hulu'
? 'movies/best-sci-fi-movies-on-hulu/'
: collection?.slug === 'best-thriller-movies-hulu'
? 'movies/best-thriller-movies-hulu/'
: collection?.slug === 'best-movies-on-hulu'
? 'movies/best-movies-on-hulu/'
: collection?.slug === 'best-drama-movies-on-hulu'
? 'movies/best-drama-movies-on-hulu/'
: collection?.slug === 'best-family-movies-on-hulu'
? 'movies/best-family-movies-on-hulu/'
: collection?.slug === 'best-action-movies-on-hbo-max'
? 'movies/best-action-movies-on-hbo-max/'
: collection?.slug === 'best-romance-movies-on-hbo-max'
? 'movies/best-romance-movies-on-hbo-max/'
: collection?.slug === 'best-thriller-movies-on-hbo-max'
? 'movies/best-thriller-movies-on-hbo-max/'
: collection?.slug === 'best-family-movies-on-hbo-max'
? 'movies/best-family-movies-on-hbo-max/'
: collection?.slug === 'best-sci-fi-movies-on-hbo-max'
? 'movies/best-sci-fi-movies-on-hbo-max/'
: collection?.slug === 'best-horror-movies-on-hbo-max'
? 'movies/best-horror-movies-on-hbo-max/'
: collection?.slug === 'best-movies-on-hbo-max'
? 'movies/best-movies-on-hbo-max/'
: collection?.slug === 'best-drama-movies-on-hbo-max'
? 'movies/best-drama-movies-on-hbo-max/'
: collection?.slug === 'best-comedy-movies-on-hbo-max'
? 'movies/best-comedy-movies-on-hbo-max/'
: collection?.slug === 'best-action-movies-on-paramount-plus'
? 'movies/best-action-movies-on-paramount-plus/'
: collection?.slug === 'best-sci-fi-movies-on-paramount-plus'
? 'movies/best-sci-fi-movies-on-paramount-plus/'
: collection?.slug === 'best-action-adventure-movies-on-peacock'
? 'movies/best-action-adventure-movies-on-peacock/'
: collection?.slug === 'best-sci-fi-movies-on-peacock'
? 'movies/best-sci-fi-movies-on-peacock/'
: collection?.slug === 'best-romance-movies-on-peacock'
? 'movies/best-romance-movies-on-peacock/'
: collection?.slug === 'best-family-movies-on-peacock'
? 'movies/best-family-movies-on-peacock/'
: collection?.slug === 'best-drama-movies-on-peacock'
? 'movies/best-drama-movies-on-peacock/'
: collection?.slug === 'best-thriller-movies-on-peacock'
? 'movies/best-thriller-movies-on-peacock/'
: collection?.slug === 'best-movies-on-peacock'
? 'movies/best-movies-on-peacock/'
: collection?.slug === 'best-romance-movies-on-paramount-plus'
? 'movies/best-romance-movies-on-paramount-plus/'
: collection?.slug === 'best-core-drama-movies-on-paramount-plus'
? 'movies/best-core-drama-movies-on-paramount-plus/'
: collection?.slug === 'best-thriller-movies-on-paramount-plus'
? 'movies/best-thriller-movies-on-paramount-plus/'
: collection?.slug === 'best-family-movies-on-paramount-plus'
? 'movies/best-family-movies-on-paramount-plus/'
: collection?.slug === 'best-horror-movies-on-paramount-plus'
? 'movies/best-horror-movies-on-paramount-plus/'
: collection?.slug === 'best-comedy-movies-on-paramount-plus'
? 'movies/best-comedy-movies-on-paramount-plus/'
: collection?.slug === 'best-movies-on-paramount-plus' // âœ… ADDED THIS LINE
        ? 'movies/best-movies-on-paramount-plus/'
                                    
                                    
                                     
                                    : collection?.slug === 'movies-like-interstellar'
                                    ? 'movies/interstellar/'
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
                                    : collection?.slug === 'best-revenge-movies'
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
        
        <SiteHeader />
        <MobileLogo />
        <MobileHomepageButton />
        
        {/* âœ… FIX: Render Loader as Overlay so Content is always in DOM for SEO */}
<AnimatePresence>
    {isLoading && (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
        >
            <CinematicLoader />
        </motion.div>
    )}
</AnimatePresence>

        <motion.div
            key="collection"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative z-10 flex flex-col min-h-screen" // âœ… Fixes layout height
        >
            {/* âœ… Main Content - Pushes footer down */}
            {/* âœ… Main Content - Pushes footer down. Changed pt-32 to pt-24 */}
            <main className="container mx-auto px-3 sm:px-6 pt-24 sm:pt-40 lg:pt-16 pb-12 flex-grow">
                <CinematicHeader />
                
                <CinematicExplorerSection currentRank={currentRank} />
                
                <div className="relative flex items-center justify-center min-h-[70vh] sm:min-h-[80vh]">
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
                    
                    <AnimatePresence mode="wait">
                        {currentMovie && (
                            <Link
                                href={
                                    collection.slug === 'movies-like-inception'
                                    ? `/movies/like-inception/${currentMovie.imdbID}`
                                    : collection.slug === 'movies-like-the-matrix'
                                    ? `/movies/matrix/${currentMovie.imdbID}`
                                    : collection.slug === 'movies-like-se7en'
                                    ? `/movies/like-se7en/${currentMovie.imdbID}`
                                    : collection.slug === 'movies-like-parasite'
                                    ? `/movies/parasite/${currentMovie.imdbID}`
                                    : collection.slug === 'movies-like-oldboy'
                                    ? `/movies/oldboy/${currentMovie.imdbID}`
                                    : collection.slug === 'movies-like-donnie-darko'
                                    ? `/movies/donnie-darko/${currentMovie.imdbID}`
                                    : collection.slug === 'movies-like-black-swan'
                                    ? `/movies/black-swan/${currentMovie.imdbID}`
                                    : collection.slug === 'movies-like-eyes-wide-shut'
                                    ? `/movies/eyes-wide-shut/${currentMovie.imdbID}`
                                    : collection.slug === 'best-action-movies-on-hulu'
                                    ? `/movies/best-action-movies-on-hulu/${currentMovie.imdbID}`
                                    : collection.slug === 'best-romance-movies-on-hulu'
                                    ? `/movies/best-romance-movies-on-hulu/${currentMovie.imdbID}`
                                    : collection.slug === 'best-horror-movies-on-hulu'
                                    ? `/movies/best-horror-movies-on-hulu/${currentMovie.imdbID}`
                                    : collection.slug === 'best-comedy-movies-on-hulu'
                                    ? `/movies/best-comedy-movies-on-hulu/${currentMovie.imdbID}`
                                    : collection.slug === 'best-sci-fi-movies-on-hulu'
                                    ? `/movies/best-sci-fi-movies-on-hulu/${currentMovie.imdbID}`
                                    : collection.slug === 'best-thriller-movies-hulu'
                                    ? `/movies/best-thriller-movies-hulu/${currentMovie.imdbID}`
                                    : collection.slug === 'best-movies-on-hulu'
                                    ? `/movies/best-movies-on-hulu/${currentMovie.imdbID}`
                                    : collection.slug === 'best-drama-movies-on-hulu'
                                    ? `/movies/best-drama-movies-on-hulu/${currentMovie.imdbID}`
                                    : collection.slug === 'best-family-movies-on-hulu'
                                    ? `/movies/best-family-movies-on-hulu/${currentMovie.imdbID}`
                                    : collection.slug === 'best-action-movies-on-hbo-max'
                                    ? `/movies/best-action-movies-on-hbo-max/${currentMovie.imdbID}`
                                    : collection.slug === 'best-romance-movies-on-hbo-max'
                                    ? `/movies/best-romance-movies-on-hbo-max/${currentMovie.imdbID}`
                                    : collection.slug === 'best-thriller-movies-on-hbo-max'
                                    ? `/movies/best-thriller-movies-on-hbo-max/${currentMovie.imdbID}`
                                    : collection.slug === 'best-family-movies-on-hbo-max'
                                    ? `/movies/best-family-movies-on-hbo-max/${currentMovie.imdbID}`
                                    : collection.slug === 'best-sci-fi-movies-on-hbo-max'
                                    ? `/movies/best-sci-fi-movies-on-hbo-max/${currentMovie.imdbID}`
                                    : collection.slug === 'best-horror-movies-on-hbo-max'
                                    ? `/movies/best-horror-movies-on-hbo-max/${currentMovie.imdbID}`
                                    : collection.slug === 'best-movies-on-hbo-max'
                                    ? `/movies/best-movies-on-hbo-max/${currentMovie.imdbID}`
                                    : collection.slug === 'best-drama-movies-on-hbo-max'
                                    ? `/movies/best-drama-movies-on-hbo-max/${currentMovie.imdbID}`
                                    : collection.slug === 'best-comedy-movies-on-hbo-max'
                                    ? `/movies/best-comedy-movies-on-hbo-max/${currentMovie.imdbID}`
                                    : collection.slug === 'best-action-movies-on-paramount-plus'
                                    ? `/movies/best-action-movies-on-paramount-plus/${currentMovie.imdbID}`
                                    : collection.slug === 'best-sci-fi-movies-on-paramount-plus'
                                    ? `/movies/best-sci-fi-movies-on-paramount-plus/${currentMovie.imdbID}`
                                    : collection.slug === 'best-romance-movies-on-paramount-plus'
                                    ? `/movies/best-romance-movies-on-paramount-plus/${currentMovie.imdbID}`
                                    : collection.slug === 'best-core-drama-movies-on-paramount-plus'
                                    ? `/movies/best-core-drama-movies-on-paramount-plus/${currentMovie.imdbID}`
                                    : collection.slug === 'best-thriller-movies-on-paramount-plus'
                                    ? `/movies/best-thriller-movies-on-paramount-plus/${currentMovie.imdbID}`
                                    : collection.slug === 'best-family-movies-on-paramount-plus'
                                    ? `/movies/best-family-movies-on-paramount-plus/${currentMovie.imdbID}`
                                    : collection.slug === 'best-horror-movies-on-paramount-plus'
                                    ? `/movies/best-horror-movies-on-paramount-plus/${currentMovie.imdbID}`
                                    : collection.slug === 'best-comedy-movies-on-paramount-plus'
                                    ? `/movies/best-comedy-movies-on-paramount-plus/${currentMovie.imdbID}`
                                    : collection.slug === 'best-movies-on-paramount-plus'
                                    ? `/movies/best-movies-on-paramount-plus/${currentMovie.imdbID}`
                                    : collection.slug === 'best-action-adventure-movies-on-peacock'
                                    ? `/movies/best-action-adventure-movies-on-peacock/${currentMovie.imdbID}`
                                    : collection.slug === 'best-sci-fi-movies-on-peacock'
                                    ? `/movies/best-sci-fi-movies-on-peacock/${currentMovie.imdbID}`
                                    : collection.slug === 'best-romance-movies-on-peacock'
                                    ? `/movies/best-romance-movies-on-peacock/${currentMovie.imdbID}`
                                    : collection.slug === 'best-family-movies-on-peacock'
                                    ? `/movies/best-family-movies-on-peacock/${currentMovie.imdbID}`
                                    : collection.slug === 'best-drama-movies-on-peacock'
                                    ? `/movies/best-drama-movies-on-peacock/${currentMovie.imdbID}`
                                    : collection.slug === 'best-thriller-movies-on-peacock'
                                    ? `/movies/best-thriller-movies-on-peacock/${currentMovie.imdbID}`
                                    : collection.slug === 'best-movies-on-peacock'
                                    ? `/movies/best-movies-on-peacock/${currentMovie.imdbID}`
                                    : collection.slug === 'movies-like-interstellar'
                                    ? `/movies/interstellar/${currentMovie.imdbID}`
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
                                    : collection.slug === 'best-revenge-movies'
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
                            <span>â€¢</span>
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
                                } else if (collection.slug === 'movies-like-the-matrix') {
                                    detailPageUrl = `/movies/matrix/${currentMovie.imdbID}`;
                                } else if (collection.slug === 'movies-like-se7en') {
                                    detailPageUrl = `/movies/like-se7en/${currentMovie.imdbID}`;
                                } else if (collection.slug === 'movies-like-parasite') { 
                                    detailPageUrl = `/movies/parasite/${currentMovie.imdbID}`;
                                } else if (collection.slug === 'movies-like-oldboy') {
                                    detailPageUrl = `/movies/oldboy/${currentMovie.imdbID}`;
                                } else if (collection.slug === 'movies-like-donnie-darko') {
                                    detailPageUrl = `/movies/donnie-darko/${currentMovie.imdbID}`;
                                } else if (collection.slug === 'movies-like-black-swan') {
                                    detailPageUrl = `/movies/black-swan/${currentMovie.imdbID}`;
                                } else if (collection.slug === 'movies-like-eyes-wide-shut') {
                                    detailPageUrl = `/movies/eyes-wide-shut/${currentMovie.imdbID}`;
                                } else if (collection.slug === 'best-action-movies-on-hulu') {
                                    detailPageUrl = `/movies/best-action-movies-on-hulu/${currentMovie.imdbID}`;
                                } else if (collection.slug === 'best-romance-movies-on-hulu') {
                                    detailPageUrl = `/movies/best-romance-movies-on-hulu/${currentMovie.imdbID}`;
                                } else if (collection.slug === 'best-horror-movies-on-hulu') {
                                    detailPageUrl = `/movies/best-horror-movies-on-hulu/${currentMovie.imdbID}`;
                                } else if (collection.slug === 'best-comedy-movies-on-hulu') {
                                    detailPageUrl = `/movies/best-comedy-movies-on-hulu/${currentMovie.imdbID}`;
                                    } else if (collection.slug === 'best-sci-fi-movies-on-hulu') {
                                    detailPageUrl = `/movies/best-sci-fi-movies-on-hulu/${currentMovie.imdbID}`;
                                    } else if (collection.slug === 'best-thriller-movies-hulu') {
                                    detailPageUrl = `/movies/best-thriller-movies-hulu/${currentMovie.imdbID}`;
                                    } else if (collection.slug === 'best-movies-on-hulu') {
                                    detailPageUrl = `/movies/best-movies-on-hulu/${currentMovie.imdbID}`;
                                    } else if (collection.slug === 'best-drama-movies-on-hulu') {
                                    detailPageUrl = `/movies/best-drama-movies-on-hulu/${currentMovie.imdbID}`;
                                    } else if (collection.slug === 'best-family-movies-on-hulu') {
                                    detailPageUrl = `/movies/best-family-movies-on-hulu/${currentMovie.imdbID}`;
                                    } else if (collection.slug === 'best-action-movies-on-hbo-max') {
                                    detailPageUrl = `/movies/best-action-movies-on-hbo-max/${currentMovie.imdbID}`;
                                    } else if (collection.slug === 'best-romance-movies-on-hbo-max') {
                                    detailPageUrl = `/movies/best-romance-movies-on-hbo-max/${currentMovie.imdbID}`;
                                    } else if (collection.slug === 'best-thriller-movies-on-hbo-max') {
                                    detailPageUrl = `/movies/best-thriller-movies-on-hbo-max/${currentMovie.imdbID}`;
                                    } else if (collection.slug === 'best-family-movies-on-hbo-max') {
                                    detailPageUrl = `/movies/best-family-movies-on-hbo-max/${currentMovie.imdbID}`;
                                    } else if (collection.slug === 'best-sci-fi-movies-on-hbo-max') {
                                    detailPageUrl = `/movies/best-sci-fi-movies-on-hbo-max/${currentMovie.imdbID}`;
                                    } else if (collection.slug === 'best-horror-movies-on-hbo-max') {
                                    detailPageUrl = `/movies/best-horror-movies-on-hbo-max/${currentMovie.imdbID}`;
                                    } else if (collection.slug === 'best-movies-on-hbo-max') {
                                    detailPageUrl = `/movies/best-movies-on-hbo-max/${currentMovie.imdbID}`;
                                    } else if (collection.slug === 'best-drama-movies-on-hbo-max') {
                                    detailPageUrl = `/movies/best-drama-movies-on-hbo-max/${currentMovie.imdbID}`;
                                    } else if (collection.slug === 'best-comedy-movies-on-hbo-max') {
                                    detailPageUrl = `/movies/best-comedy-movies-on-hbo-max/${currentMovie.imdbID}`;
                                    } else if (collection.slug === 'best-action-movies-on-paramount-plus') {
                                    detailPageUrl = `/movies/best-action-movies-on-paramount-plus/${currentMovie.imdbID}`;
                                    } else if (collection.slug === 'best-sci-fi-movies-on-paramount-plus') {
                                    detailPageUrl = `/movies/best-sci-fi-movies-on-paramount-plus/${currentMovie.imdbID}`;
                                    } else if (collection.slug === 'best-romance-movies-on-paramount-plus') {
                                    detailPageUrl = `/movies/best-romance-movies-on-paramount-plus/${currentMovie.imdbID}`;
                                    } else if (collection.slug === 'best-core-drama-movies-on-paramount-plus') {
                                    detailPageUrl = `/movies/best-core-drama-movies-on-paramount-plus/${currentMovie.imdbID}`;
                                } else if (collection.slug === 'best-thriller-movies-on-paramount-plus') {
                                    detailPageUrl = `/movies/best-thriller-movies-on-paramount-plus/${currentMovie.imdbID}`;
                                    } else if (collection.slug === 'best-family-movies-on-paramount-plus') {
                                        detailPageUrl = `/movies/best-family-movies-on-paramount-plus/${currentMovie.imdbID}`;
                                    } else if (collection.slug === 'best-horror-movies-on-paramount-plus') {
                                        detailPageUrl = `/movies/best-horror-movies-on-paramount-plus/${currentMovie.imdbID}`;
                                    } else if (collection.slug === 'best-comedy-movies-on-paramount-plus') {
                                        detailPageUrl = `/movies/best-comedy-movies-on-paramount-plus/${currentMovie.imdbID}`;
                                        } else if (collection.slug === 'best-movies-on-paramount-plus') {
                                    detailPageUrl = `/movies/best-movies-on-paramount-plus/${currentMovie.imdbID}`;
                                } else if (collection.slug === 'best-action-adventure-movies-on-peacock') {
                                        detailPageUrl = `/movies/best-action-adventure-movies-on-peacock/${currentMovie.imdbID}`;
                                    } else if (collection.slug === 'best-sci-fi-movies-on-peacock') {
                                        detailPageUrl = `/movies/best-sci-fi-movies-on-peacock/${currentMovie.imdbID}`;
                                    } else if (collection.slug === 'best-romance-movies-on-peacock') {
                                        detailPageUrl = `/movies/best-romance-movies-on-peacock/${currentMovie.imdbID}`;
                                    } else if (collection.slug === 'best-family-movies-on-peacock') {
                                        detailPageUrl = `/movies/best-family-movies-on-peacock/${currentMovie.imdbID}`;
                                    } else if (collection.slug === 'best-drama-movies-on-peacock') {
                                        detailPageUrl = `/movies/best-drama-movies-on-peacock/${currentMovie.imdbID}`;
                                    } else if (collection.slug === 'best-thriller-movies-on-peacock') {
                                        detailPageUrl = `/movies/best-thriller-movies-on-peacock/${currentMovie.imdbID}`;
                                    } else if (collection.slug === 'best-movies-on-peacock') {
                                        detailPageUrl = `/movies/best-movies-on-peacock/${currentMovie.imdbID}`;
                                    
                                    } else if (collection.slug === 'best-comedy-movies-on-peacock') {
                                        detailPageUrl = `/movies/best-comedy-movies-on-peacock/${currentMovie.imdbID}`;
                                    } else if (collection.slug === 'movies-like-interstellar') {
                                            detailPageUrl = `/movies/interstellar/${currentMovie.imdbID}`;
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
                                        } else if (collection.slug === 'best-revenge-movies') {
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

                        <NavigationDots 
                            movies={movies}
                            currentMovieIndex={currentMovieIndex}
                            goToMovie={goToMovie}
                        />

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
                    </main>

                    <RelatedCollections collectionIds={collection.relatedCollections} />

                    {/* âœ… FOOTER MOVED OUTSIDE CONTAINER - FIXES SIDE GAPS */}
                    <motion.footer
                        className="w-full bg-gradient-to-t from-gray-900 to-black pt-12 border-t border-gray-800/30 text-center relative z-20 mt-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 4.5 }}
                    >
                        <div className="container mx-auto px-6 pb-12">
                            <p className="text-gray-500 text-sm sm:text-base font-light tracking-wide mb-8">
                                Curated cinema for discerning viewers â€¢ Expert analysis and community insights
                            </p>
                            
                            <div className="flex justify-center items-center gap-8 sm:gap-12 mb-8">
                                <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent to-gray-700"></div>
                                <div className="text-yellow-400/60 text-xs tracking-[0.3em] uppercase font-medium">
                                    Filmiway {collection.title} Collection
                                </div>
                                <div className="w-16 sm:w-24 h-px bg-gradient-to-l from-transparent to-gray-700"></div>
                            </div>
                            
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

                            <div className="flex items-center justify-center space-x-8 text-gray-500 text-sm pb-10">
                                <span>Â© 2026 Filmiway</span>
                                <span>â€¢</span>
                                <span>All Rights Reserved</span>
                                <span>â€¢</span>
                                <span>Where Every Film Finds Its Way</span>
                            </div>
                        </div>
                    </motion.footer>
                </motion.div>
    </div>
);
};

// ðŸ”¥ SSG FUNCTIONS WITH MATRIX COLLECTION ADDED ðŸ”´
// âœ… CORRECT getStaticPaths() - generates all collections
export async function getStaticPaths() {
    const slugs = getAllCollectionSlugs();

    const paths = slugs.map((slug) => ({
        params: { slug }
    }));

    console.log('âœ… Building paths for:', paths.map(p => p.params.slug));

    return {
        paths,
        fallback: false  // âœ… CRITICAL: Must be false for SSG/export
    };
}

// âœ… CORRECT getStaticProps() - maps correct database to each collection WITH MATRIX, SE7EN & PARASITE
export async function getStaticProps({ params }) {
    const slug = params.slug;
    const collection = getCollectionBySlug(slug);

    if (!collection) {
        return { notFound: true };
    }

    // âœ… SELECT DATABASE FOR EACH COLLECTION
    let movieDatabase;
    
    switch(collection.slug) {
        case 'best-survival-movies':
            movieDatabase = SURVIVAL_DATABASE;
            break;
        case 'movies-like-the-matrix': 
            movieDatabase = MATRIX_DATABASE;
            break;
        case 'movies-like-se7en':
            movieDatabase = SE7EN_DATABASE;
            break;
        case 'movies-like-parasite': 
            movieDatabase = PARASITE_DATABASE;
            break;

         case 'movies-like-black-swan':
    movieDatabase = BLACK_SWAN_DATABASE;
    break;



case 'movies-like-oldboy':
    movieDatabase = OLDBOY_DATABASE;
    break;


case 'movies-like-donnie-darko':
    movieDatabase = DONNIE_DARKO_DATABASE;
    break;
case 'movies-like-eyes-wide-shut':
            movieDatabase = EYES_WIDE_SHUT_DATABASE;
            break;

            case 'best-action-movies-on-hulu':
            movieDatabase = HULU_ACTION_DATABASE;
            break;

            case 'best-romance-movies-on-hulu':
            movieDatabase = HULU_ROMANCE_DATABASE;
            break;
               
case 'best-horror-movies-on-hulu':
            movieDatabase = HULU_HORROR_DATABASE;
            break;

            case 'best-comedy-movies-on-hulu':
            movieDatabase = HULU_COMEDY_DATABASE;
            break;

case 'best-sci-fi-movies-on-hulu':
    movieDatabase = HULU_SCIFI_DATABASE;
    break;


    case 'best-thriller-movies-hulu':
    movieDatabase = HULU_THRILLER_DATABASE;
    break;

    case 'best-movies-on-hulu':
        movieDatabase = HULU_BEST_DATABASE;
        break;

case 'best-drama-movies-on-hulu':
        movieDatabase = HULU_DRAMA_DATABASE;
        break;
        case 'best-family-movies-on-hulu':
    movieDatabase = HULU_FAMILY_DATABASE;
    break;
        case 'best-action-movies-on-hbo-max':
    movieDatabase = HBO_ACTION_DATABASE;
    break;
case 'best-romance-movies-on-hbo-max':
            movieDatabase = HBO_MAX_ROMANCE_DATABASE;
            break;


case 'best-thriller-movies-on-hbo-max':
    movieDatabase = HBO_MAX_THRILLER_DATABASE;
    break;

    case 'best-family-movies-on-hbo-max':
            movieDatabase = HBO_MAX_FAMILY_DATABASE;
            break;
case 'best-sci-fi-movies-on-hbo-max':
            movieDatabase = HBO_MAX_SCIFI_DATABASE;
            break;

            case 'best-horror-movies-on-hbo-max':
            movieDatabase = HBO_MAX_HORROR_DATABASE;
            break;

case 'best-movies-on-hbo-max':
            movieDatabase = HBO_MAX_BEST_DATABASE;
            break;

            case 'best-drama-movies-on-hbo-max':
    movieDatabase = HBO_MAX_DRAMA_DATABASE;
    break;

    case 'best-comedy-movies-on-hbo-max':
    movieDatabase = HBO_MAX_COMEDY_DATABASE;
    break;

    case 'best-action-movies-on-paramount-plus':
            movieDatabase = PARAMOUNT_ACTION_DATABASE;
            break;

            case 'best-sci-fi-movies-on-paramount-plus':
        movieDatabase = PARAMOUNT_SCIFI_DATABASE;
        break;
        case 'best-romance-movies-on-paramount-plus':
        movieDatabase = PARAMOUNT_ROMANCE_DATABASE;
        break;

case 'best-core-drama-movies-on-paramount-plus':
            movieDatabase = PARAMOUNT_DRAMA_DATABASE;
            break;

            case 'best-thriller-movies-on-paramount-plus':
            movieDatabase = PARAMOUNT_THRILLER_DATABASE;
            break;
case 'best-family-movies-on-paramount-plus':
                movieDatabase = PARAMOUNT_FAMILY_DATABASE;
                break;
            case 'best-horror-movies-on-paramount-plus':
                movieDatabase = PARAMOUNT_HORROR_DATABASE;
                break;
            case 'best-comedy-movies-on-paramount-plus':
                movieDatabase = PARAMOUNT_COMEDY_DATABASE;
                break;
            case 'best-movies-on-paramount-plus':
                movieDatabase = PARAMOUNT_BEST_DATABASE;

                
                break;        case 'movies-like-interstellar':
            movieDatabase = INTERSTELLAR_DATABASE;
            break;
        case 'movies-like-inception':
            movieDatabase = COMPLETE_MOVIE_DATABASE;
            break;
        case 'movies-like-memento':
            movieDatabase = COMPLETE_MOVIE_DATABASE;
            break;
        case 'movies-like-shutter-island':
            movieDatabase = COMPLETE_MOVIE_DATABASE;
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
            movieDatabase = CRIME_THRILLER_DATABASE;
            break;
        case 'best-heist-thriller-movies':
            movieDatabase = HEIST_THRILLER_MOVIES;
            break;
        case 'best-time-travel-movies':
            movieDatabase = TIME_TRAVEL_MOVIES;
            break;
case 'best-sci-fi-movies':
            movieDatabase = SCI_FI_DATABASE; // âœ… FIXED: Use the correct imported variable name
            break;
        case 'best-revenge-movies':
            movieDatabase = REVENGE_MOVIES;
            break;
        case 'best-war-films':
            movieDatabase = WAR_FILMS_DATABASE;
            break;

        case 'best-action-adventure-movies-on-peacock':
            movieDatabase = PEACOCK_ACTION_ADVENTURE_DATABASE;
            break;

        case 'best-sci-fi-movies-on-peacock':
            movieDatabase = PEACOCK_SCIFI_DATABASE;
            break;

        case 'best-romance-movies-on-peacock':
            movieDatabase = PEACOCK_ROMANCE_DATABASE;
            break;
        case 'best-family-movies-on-peacock':
            movieDatabase = PEACOCK_FAMILY_DATABASE;
            break;
        case 'best-drama-movies-on-peacock':
            movieDatabase = PEACOCK_DRAMA_DATABASE;
            break;
        case 'best-thriller-movies-on-peacock':
            movieDatabase = PEACOCK_THRILLER_DATABASE;
            break;
        case 'best-movies-on-peacock':
            movieDatabase = PEACOCK_BEST_DATABASE;
            break;
        case 'best-comedy-movies-on-peacock':
            movieDatabase = PEACOCK_COMEDY_DATABASE;
            break;
        default:
            movieDatabase = COMPLETE_MOVIE_DATABASE;
    }

    const movieArray = Array.isArray(movieDatabase)
        ? movieDatabase
        : (movieDatabase ? Object.values(movieDatabase) : []);

    // âœ… FIND MOVIES - search by imdbID
 // ... inside getStaticProps ...
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
                
                // âœ… FIX 1: Pass the raw path so the component can use different sizes
                poster_path: movie.poster_path || null,

                // âœ… FIX 2: Force 'Poster' to use High-Res TMDB URL if available (w780 is crisp)
                Poster: movie.poster_path 
                    ? `https://image.tmdb.org/t/p/w780${movie.poster_path}` 
                    : (movie.Poster || movie.poster || ''),

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