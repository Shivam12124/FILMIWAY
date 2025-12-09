import React from 'react';
import { motion } from 'framer-motion';
import { Users, Film, BookOpen, Star } from 'lucide-react';

// Data imports
import { COMPLETE_MOVIE_DATA, STRATEGIC_QUOTES } from '../utils/movieData';
import {
  COMPLETE_MOVIE_DATA as SURVIVAL_MOVIE_DATA,
  STRATEGIC_QUOTES as SURVIVAL_QUOTES,
  SENSITIVE_TIMELINES
} from '../utils/survivalMovieData';
import {
  COMPLETE_MOVIE_DATA as INTERSTELLAR_MOVIE_DATA,
  STRATEGIC_QUOTES as INTERSTELLAR_QUOTES,
  SENSITIVE_TIMELINES as INTERSTELLAR_TIMELINES
} from '../utils/interstellarMovieData';

import COMPLETE_THRILLER_DATABASE from '../utils/thrillerMovieData';
import MYSTERY_THRILLER_DATABASE from '../utils/mysteryThrillerMovieData';
import dramaRoutes from '../utils/dramaMovieRoutes';
import DETECTIVE_THRILLER_DATABASE from '../utils/detectiveThrillerMovieData';
import COMPLETE_PSYCH_THRILLER_DATABASE from '../utils/psychologicalThrillerMovieData';
// ✅ CORRECT FORMAT (like Survival Collection)
import {
  COMPLETE_MOVIE_DATA as CRIME_THRILLER_MOVIE_DATA,
  STRATEGIC_QUOTES as CRIME_THRILLER_QUOTES,
  SENSITIVE_TIMELINES as CRIME_THRILLER_SENSITIVE_TIMELINES  // ✅ ADD THIS
} from '../utils/crimeThrillerMovieData';


import HEIST_THRILLER_DATABASE from '../utils/heistThrillerMovieData';
import TIME_TRAVEL_DATABASE from '../utils/timeTravelMovieData';
import { SCI_FI_MOVIES, SENSITIVE_TIMELINES as SCI_FI_SENSITIVE_TIMELINES } from '../utils/sciFiMovieData';
// ✅ SCI-FI IMPORT ADDED
import { REVENGE_MOVIES } from '../utils/revengeMovieData';  // ✅ REVENGE IMPORT ADDED
import { WAR_FILMS_DATABASE } from '../utils/warFilmsMovieData';  // ✅ WAR FILMS IMPORT ADDED

const DRAMA_MOVIE_DATA = dramaRoutes.COMPLETE_MOVIE_DATABASE;

// Build sci-fi database object
const COMPLETE_SCI_FI_DATABASE = Object.fromEntries(
  SCI_FI_MOVIES.map(m => [m.tmdbId, m])
);

// Build revenge database object
const REVENGE_DATABASE = Object.fromEntries(
  REVENGE_MOVIES.map(m => [m.tmdbId, m])
);

// Component imports
import EnhancedIntensityGraph from './EnhancedIntensityGraph';
import StrategicDNAHelix from './StrategicDNAHelix';
import SensitiveContentTimelineSection from './SensitiveContentTimelineSection';
import EnhancedWhereToWatchSection from './EnhancedWhereToWatchSection';
import RealCommentsRatingSection from './RealCommentsRatingSection';
import SEOFAQSection from './SEOFAQSection';
import MementoSEOFAQSection from './MementoSEOFAQSection';
import ShutterIslandSEOFAQSection from './ShutterIslandSEOFAQSection';
import SurvivalSEOFAQSection from './SurvivalSEOFAQSection';
import DramaSEOFAQSection from './DramaSEOFAQSection';
import ThrillerSEOFAQSection from './ThrillerSEOFAQSection';
import MysteryThrillerSEOFAQSection from './MysteryThrillerSEOFAQSection';
import DetectiveThrillerSEOFAQSection from './DetectiveThrillerSEOFAQSection';
import PsychThrillerSEOFAQSection from './PsychThrillerSEOFAQSection';
import CrimeThrillerSEOFAQSection from './CrimeThrillerSEOFAQSection';
import HeistThrillerSEOFAQSection from './HeistThrillerSEOFAQSection';
import TimeTravelSEOFAQSection from './TimeTravelSEOFAQSection';
import SciFiSEOFAQSection from './SciFiSEOFAQSection';  // ✅ SCI-FI FAQ IMPORT ADDED
import RevengeMovieSEOFAQSection from './RevengeMovieSEOFAQSection';  // ✅ REVENGE FAQ IMPORT ADDED
import WarFilmsSEOFAQSection from './WarFilmsSEOFAQSection';  // ✅ WAR FAQ IMPORT ADDED
import InterstellarSEOFAQSection from './InterstellarSEOFAQSection';

const MovieDetailsSection = React.memo(({
  movie,
  fromMementoCollection,
  fromShutterIslandCollection,
  fromInceptionCollection,
  fromSurvivalCollection,
  fromInterstellarCollection,
  fromDramaCollection,
  fromPsychologicalThrillerCollection,
  fromThrillerCollection,
  fromMysteryThrillerCollection,
  fromDetectiveThrillerCollection,
  fromCrimeThrillerCollection,
  fromHeistThrillerCollection,
  fromTimeTravelCollection,
  fromSciFiCollection,   // ✅ SCI-FI FLAG ADDED
  fromRevengeCollection, // ✅ REVENGE FLAG ADDED
  fromWarFilmsCollection // ✅ WAR FLAG ADDED
}) => {



 if (!movie) return null;

const safeLookup = (collection, id) => (collection && id && collection[id]) || null;

// ✅ SCI-FI LOOKUP ADDED
const getSciFiMovieInfo = () => {
  if (!fromSciFiCollection || !movie.tmdbId) return null;
  if (!COMPLETE_SCI_FI_DATABASE) return null;
  return COMPLETE_SCI_FI_DATABASE[movie.tmdbId] || null;
};



// ✅ TIME TRAVEL LOOKUP
const getTimeTravelMovieInfo = () => {
  if (!fromTimeTravelCollection || !movie.tmdbId) return null;
  if (!TIME_TRAVEL_DATABASE) return null;
  return TIME_TRAVEL_DATABASE[movie.tmdbId] || null;
};

// ✅ REVENGE LOOKUP ADDED
const getRevengeMovieInfo = () => {
  if (!fromRevengeCollection || !movie.tmdbId) return null;
  if (!REVENGE_DATABASE) return null;
  return REVENGE_DATABASE[movie.tmdbId] || null;
};

// ✅ WAR FILMS LOOKUP ADDED
const getWarFilmsMovieInfo = () => {
  if (!fromWarFilmsCollection || !movie.tmdbId) return null;
  if (!WAR_FILMS_DATABASE) return null;
  return WAR_FILMS_DATABASE[movie.tmdbId] || null;
};

// ✅ HEIST THRILLER LOOKUP
const getHeistThrillerMovieInfo = () => {
  if (!fromHeistThrillerCollection || !movie.tmdbId) return null;
  if (!HEIST_THRILLER_DATABASE) return null;
  return HEIST_THRILLER_DATABASE[movie.tmdbId] || null;
};




const getPsychologicalThrillerMovieInfo = () => {
  if (!fromPsychologicalThrillerCollection || !movie.tmdbId) return null;
  if (!COMPLETE_PSYCH_THRILLER_DATABASE) return null;
  return COMPLETE_PSYCH_THRILLER_DATABASE[movie.tmdbId] || null;
};

const getDetectiveThrillerMovieInfo = () => {
  if (!fromDetectiveThrillerCollection || !movie.tmdbId) return null;
  if (!DETECTIVE_THRILLER_DATABASE) return null;
  return DETECTIVE_THRILLER_DATABASE[movie.tmdbId] || null;
};

const getThrillerMovieInfo = () => {
  if (!fromThrillerCollection || !movie.tmdbId) return null;
  if (!COMPLETE_THRILLER_DATABASE) return null;
  return COMPLETE_THRILLER_DATABASE[movie.tmdbId] || null;
};

const getMysteryThrillerMovieInfo = () => {
  if (!fromMysteryThrillerCollection || !movie.tmdbId) return null;
  if (!MYSTERY_THRILLER_DATABASE) return null;
  return MYSTERY_THRILLER_DATABASE[movie.tmdbId] || null;
};

// ✅ GET MOVIE INFO FROM CORRECT COLLECTION (REVENGE & WAR FILMS ADDED)
const movieInfo = fromRevengeCollection
  ? getRevengeMovieInfo()
  : fromWarFilmsCollection
  ? getWarFilmsMovieInfo()
  : fromSciFiCollection
  ? getSciFiMovieInfo()
  : fromTimeTravelCollection
  ? getTimeTravelMovieInfo()
  : fromHeistThrillerCollection
  ? getHeistThrillerMovieInfo()
: fromCrimeThrillerCollection  // ✅ SIMPLE WAY
? safeLookup(CRIME_THRILLER_MOVIE_DATA, movie.tmdbId)  // ✅ USE THE ALIAS NAME

  : fromDetectiveThrillerCollection
  ? getDetectiveThrillerMovieInfo()
  : fromMysteryThrillerCollection
  ? getMysteryThrillerMovieInfo()
  : fromPsychologicalThrillerCollection
  ? getPsychologicalThrillerMovieInfo()
  : fromThrillerCollection
  ? getThrillerMovieInfo()
  : fromInterstellarCollection  // ✅ SIMPLE WAY
  ? safeLookup(INTERSTELLAR_MOVIE_DATA, movie.tmdbId)
  : fromSurvivalCollection
  ? safeLookup(SURVIVAL_MOVIE_DATA, movie.tmdbId)
  : fromDramaCollection
  ? safeLookup(DRAMA_MOVIE_DATA, movie.tmdbId)
  : safeLookup(COMPLETE_MOVIE_DATA, movie.tmdbId);


// ✅ DEFAULT FALLBACK DATA
const getMovieSpecificData = (title) => ({
  mindBendingIndex: 85,
  complexityLevel: 'HIGH',
  dominantColor: '#ca8a04',
  rating: movie.imdbRating || 7.5,
  director: movie.Director || 'Acclaimed Director',
  scenes: [
    { time: 20, intensity: 60, label: 'Opening', color: '#92400e' },
    { time: 50, intensity: 75, label: 'Conflict', color: '#ca8a04' },
    { time: 80, intensity: 85, label: 'Climax', color: '#eab308' },
    { time: 100, intensity: 90, label: 'Resolution', color: '#facc15' },
    { time: 120, intensity: 95, label: 'Revelation', color: '#fde047' }
  ],
  dna: { Mystery: 60, Thriller: 30, Drama: 10 },
  cast: ['Lead Actor', 'Supporting Cast'],
  boxOffice: 'N/A',
  budget: 'N/A',
  synopsis: 'A compelling exploration of cinema.',
  ageRating: 'R'
});

const title = movie.Title || (movieInfo && movieInfo.title) || 'Unknown Title';
const safeMovieInfo = movieInfo || getMovieSpecificData(title);

const director = safeMovieInfo.director || movie.Director || 'Unknown Director';
const genre = safeMovieInfo.genre || movie.Genre || 'Drama';
const year = movie.Year || movie.year || '20XX';
const runtime = safeMovieInfo.runtime || movie.Runtime || '120 min';
const ageRating = safeMovieInfo.ageRating || movie.Rated || 'R';
const cast = safeMovieInfo.cast?.join(', ') || '';
const boxOffice = safeMovieInfo.boxOffice || 'N/A';
const budget = safeMovieInfo.budget || 'N/A';
const rating = safeMovieInfo.rating || movie.imdbRating || 7.5;

const sensitiveScenes = safeMovieInfo.sensitiveScenes 
  || SCI_FI_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes
  || CRIME_THRILLER_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes 
  || INTERSTELLAR_TIMELINES?.[movie?.tmdbId]?.scenes
  || SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes 
  || [];



const quote = fromCrimeThrillerCollection
  ? CRIME_THRILLER_QUOTES?.[movie.tmdbId] || ''
  : fromMysteryThrillerCollection
  ? safeMovieInfo.synopsis || ''
  : fromThrillerCollection
  ? safeMovieInfo.synopsis || ''
  : fromInterstellarCollection
  ? INTERSTELLAR_QUOTES?.[movie.tmdbId] || ''
  : fromSurvivalCollection
  ? SURVIVAL_QUOTES?.[movie.tmdbId] || ''
  : STRATEGIC_QUOTES?.[movie.tmdbId] || '';
;


const displayIndex = fromRevengeCollection
  ? safeMovieInfo.revengeIntensity ?? null
  : fromWarFilmsCollection
  ? safeMovieInfo.warIntensity ?? null
  : fromSciFiCollection
  ? safeMovieInfo.sciFiComplexity ?? null
  : fromInterstellarCollection
  ? safeMovieInfo.sciFiComplexity ?? null
  : fromCrimeThrillerCollection  // ✅ ADD THIS
  ? safeMovieInfo.suspenseIntensity ?? null
  : fromMysteryThrillerCollection
  ? safeMovieInfo.mysteryComplexity ?? null
  : fromThrillerCollection
  ? safeMovieInfo.suspenseIntensity ?? null
  : fromSurvivalCollection
  ? safeMovieInfo.survivabilityIndex ?? null
  : safeMovieInfo.mindBendingIndex ?? null;
const scoreValue = fromRevengeCollection
  ? movie.revengeIntensity ?? safeMovieInfo.revengeIntensity ?? 0
  : fromWarFilmsCollection
  ? movie.warIntensity ?? safeMovieInfo.warIntensity ?? 0
  : fromSciFiCollection
  ? movie.sciFiComplexity ?? safeMovieInfo.sciFiComplexity ?? 0
  : fromInterstellarCollection
  ? movie.sciFiComplexity ?? safeMovieInfo.sciFiComplexity ?? 0
  : fromTimeTravelCollection
  ? movie.timeTravelIntensity ?? safeMovieInfo.timeTravelIntensity ?? 0
  : fromHeistThrillerCollection
  ? movie.heistComplexity ?? safeMovieInfo.heistComplexity ?? 0
  : fromCrimeThrillerCollection
  ? movie.suspenseIntensity ?? safeMovieInfo.suspenseIntensity ?? 0
  : fromMysteryThrillerCollection
  ? movie.mysteryComplexity ?? safeMovieInfo.mysteryComplexity ?? 0
  : fromDetectiveThrillerCollection
  ? movie.mysteryComplexity ?? safeMovieInfo.mysteryComplexity ?? 0
  : fromPsychologicalThrillerCollection
  ? movie.suspenseIntensity ?? safeMovieInfo.suspenseIntensity ?? 0
  : fromDramaCollection
  ? movie.emotionalIntensity ?? safeMovieInfo.emotionalIntensity ?? 0
  : fromThrillerCollection
  ? movie.suspenseIntensity ?? safeMovieInfo.suspenseIntensity ?? 0
  : fromSurvivalCollection
  ? movie.survivabilityIndex ?? safeMovieInfo.survivabilityIndex ?? 0
  : fromInceptionCollection
  ? movie.mindBendingIndex ?? safeMovieInfo.mindBendingIndex ?? 0
  : safeMovieInfo.mindBendingIndex ?? 0;


const complexityLevel = safeMovieInfo.complexityLevel || 'HIGH';

const getComplexityColor = (level) => {
  if (fromRevengeCollection) {  // ✅ REVENGE ADDED
    switch (level) {
      case 'EXTREME': return '#7f1d1d';
      case 'HIGH': return '#991b1b';
      case 'MEDIUM': return '#dc2626';
      default: return '#6b7280';
    }
  }

  if (fromWarFilmsCollection) {
    switch (level) {
      case 'EXTREME': return '#991b1b';
      case 'HIGH': return '#dc2626';
      case 'MEDIUM': return '#f87171';
      default: return '#6b7280';
    }
  }

  

  if (fromSciFiCollection) {
    switch (level) {
      case 'EXTREME': return '#0891b2';
      case 'HIGH': return '#06b6d4';
      case 'MEDIUM': return '#22d3ee';
      default: return '#6b7280';
    }
  }

  if (fromTimeTravelCollection) {
    switch (level) {
      case 'EXTREME': return '#0891b2';
      case 'HIGH': return '#06b6d4';
      case 'MEDIUM': return '#22d3ee';
      default: return '#6b7280';
    }
  }

  if (fromHeistThrillerCollection) {
    switch (level) {
      case 'EXTREME': return '#ea0808ff';
      case 'HIGH': return '#f79400ff';
      case 'MEDIUM': return '#bb9e0cff';
      default: return '#6b7280';
    }
  }
  
  if (fromDetectiveThrillerCollection) {
    switch (level) {
      case 'EXTREME': return '#ea0808ff';
      case 'HIGH': return '#f79400ff';
      case 'MEDIUM': return '#bb9e0cff';
      default: return '#6b7280';
    }
  }

  
  
  if (fromMysteryThrillerCollection) {
    switch (level) {
      case 'EXTREME': return '#ea0808ff';
      case 'HIGH': return '#f79400ff';
      case 'MEDIUM': return '#bb9e0cff';
      default: return '#6b7280';
    }
  }
  
  if (fromPsychologicalThrillerCollection) {
    switch (level) {
      case 'EXTREME': return '#ea0808ff';
      case 'HIGH': return '#f79400ff';
      case 'MEDIUM': return '#bb9e0cff';
      default: return '#6b7280';
    }
  }
  
  if (fromDramaCollection) {
    switch (level) {
      case 'EXTREME': return '#ea0808ff';
      case 'HIGH': return '#f79400ff';
      case 'MEDIUM': return '#bb9e0cff';
      default: return '#6b7280';
    }
  }
  
  if (fromThrillerCollection) {
    switch (level) {
      case 'EXTREME': return '#ea0808ff';
      case 'HIGH': return '#f79400ff';
      case 'MEDIUM': return '#bb9e0cff';
      default: return '#6b7280';
    }
  }
  
  switch (level) {
    case 'EXTREME': return '#ea0808ff';
    case 'HIGH': return '#f79400ff';
    case 'MEDIUM': return '#bb9e0cff';
    default: return '#6b7280';
  }
};

const getAgeRatingColor = (rating) => {
  switch (rating) {
    case 'G': return '#22c55e';
    case 'PG': return '#3b82f6';
    case 'PG-13': return '#f59e0b';
    case 'R': return '#ef4444';
    case 'NC-17': return '#7c2d12';
    default: return '#6b7280';
  }
};

const getUniqueDescription = () => {
  if (safeMovieInfo?.synopsis) return safeMovieInfo.synopsis;
  const t = title.toLowerCase();
  
  // Revenge movie descriptions
  if (t.includes('oldboy')) return "After 15 years of mysterious imprisonment, Oh Dae-su is released and seeks vengeance against his unknown captor.";
  if (t.includes('gladiator')) return "A betrayed Roman general becomes a gladiator to avenge his murdered family and restore honor to Rome.";
  if (t.includes('unforgiven')) return "A reformed gunslinger returns to violence for one last bounty, confronting his dark past and moral corruption.";
  if (t.includes('braveheart')) return "William Wallace leads Scotland's rebellion for independence after English soldiers murder his wife.";
  if (t.includes('prestige')) return "Two rival magicians engage in an obsessive battle of one-upmanship with devastating consequences.";
  if (t.includes('revenant')) return "After being left for dead, frontiersman Hugh Glass survives brutal wilderness to track his betrayer.";
  if (t.includes('kill bill')) return "The Bride concludes her roaring rampage of revenge against the assassins who tried to kill her.";
  if (t.includes('john wick')) return "A retired assassin unleashes methodical vengeance after criminals kill the puppy his late wife left him.";
  if (t.includes('i saw the devil')) return "A secret agent captures and tortures the serial killer who murdered his fiancée in an endless cycle of brutality.";
  if (t.includes('count of monte cristo')) return "After 14 years of false imprisonment, Edmond Dantès systematically destroys everyone who betrayed him.";
  
  // War film descriptions
  if (t.includes('saving private ryan')) return "Following D-Day, soldiers undertake a desperate mission to find Private Ryan amid the chaos of Normandy.";
  if (t.includes('apocalypse now')) return "A captain travels upriver through the Vietnamese jungle to locate a rogue colonel descended into madness.";
  if (t.includes('das boot')) return "A German U-boat crew experiences the claustrophobic horror and psychological toll of submarine warfare.";
  if (t.includes('platoon')) return "A young soldier witnesses the brutal reality and moral corruption of the Vietnam War firsthand.";
  if (t.includes('1917')) return "Two soldiers race through no man's land to deliver orders that could save thousands during WWI.";
  if (t.includes('come and see')) return "A young partisan witnesses devastating German atrocities during WWII occupation in Belarus.";
  if (t.includes('schindler')) return "A businessman risks everything to save over a thousand Jewish refugees from the Holocaust.";
  if (t.includes('full metal jacket')) return "Marines endure brutal boot camp training before confronting the chaos of Vietnam combat.";
  if (t.includes('paths of glory')) return "A colonel challenges a senseless WWI military order to defend soldiers condemned to death.";
  if (t.includes('lawrence of arabia')) return "T.E. Lawrence becomes a legendary leader of Arab forces during World War I.";
  
  // Time travel descriptions
  if (t.includes('back to the future')) return "Marty McFly travels back in time to ensure his parents fall in love, while navigating temporal paradoxes.";
  if (t.includes('primer')) return "Engineers accidentally discover time travel in their garage, leading to increasingly complex temporal loops.";
  if (t.includes('interstellar')) return "Astronauts journey through a wormhole seeking a new home, experiencing extreme time dilation.";
  if (t.includes('terminator')) return "A cyborg assassin from the future hunts a woman whose son will lead humanity's resistance.";
  
  // Heist descriptions
  if (t.includes('heat')) return "Master thief Neil McCauley and detective Vincent Hanna face off in a high-stakes cat-and-mouse game across Los Angeles.";
  if (t.includes('italian job')) return "A crew of thieves execute an elaborate gold heist using Mini Coopers through Turin's historic streets.";
  if (t.includes('ocean')) return "Danny Ocean assembles an all-star crew for an impossible casino heist in Las Vegas.";
  if (t.includes('inside man')) return "A perfectly planned bank robbery becomes a tense hostage situation with layers of deception.";
  if (t.includes('town')) return "Charlestown bank robbers navigate loyalty, love, and the FBI closing in on their criminal empire.";
  
  return "A compelling exploration of truth, identity, and the limits of human understanding.";
};

const getComplexityScoreTitle = () => {
  if (fromRevengeCollection) return 'REVENGE INTENSITY SCORE';  // ✅ REVENGE ADDED
  if (fromWarFilmsCollection) return 'WAR INTENSITY SCORE';
  if (fromSciFiCollection) return 'SCI-FI COMPLEXITY SCORE';
  if (fromInterstellarCollection) return 'SCI-FI COMPLEXITY SCORE';  // ✅ ADD THIS
  if (fromTimeTravelCollection) return 'TIME TRAVEL COMPLEXITY SCORE';
  if (fromHeistThrillerCollection) return 'HEIST COMPLEXITY SCORE';
  if (fromCrimeThrillerCollection) return 'CRIME INTENSITY SCORE';
  if (fromDetectiveThrillerCollection) return 'MYSTERY COMPLEXITY SCORE';
  if (fromMysteryThrillerCollection) return 'MYSTERY COMPLEXITY SCORE';
  if (fromPsychologicalThrillerCollection) return 'PSYCHOLOGICAL COMPLEXITY SCORE';
  if (fromDramaCollection) return 'EMOTIONAL INTENSITY SCORE';
  if (fromThrillerCollection) return 'SUSPENSE INTENSITY SCORE';
  if (fromSurvivalCollection) return 'SURVIVAL INTENSITY SCORE';
  if (fromInceptionCollection) return 'MIND-BENDING COMPLEXITY SCORE';
  if (fromShutterIslandCollection) return 'PSYCHOLOGICAL COMPLEXITY SCORE';
  if (fromMementoCollection) return 'MEMORY COMPLEXITY SCORE';
  return 'COMPLEXITY SCORE';
};

const getComplexityIndexLabel = () => {
  if (fromRevengeCollection) return 'REVENGE INTENSITY INDEX';  // ✅ REVENGE ADDED
  if (fromWarFilmsCollection) return 'WAR INTENSITY INDEX';
  if (fromSciFiCollection) return 'SCI-FI COMPLEXITY INDEX';
  if (fromInterstellarCollection) return 'SCI-FI COMPLEXITY INDEX';  // ✅ ADD THIS
  if (fromTimeTravelCollection) return 'TIME COMPLEXITY INDEX';
  if (fromHeistThrillerCollection) return 'HEIST COMPLEXITY INDEX';
  if (fromCrimeThrillerCollection) return 'CRIME INTENSITY INDEX';
  if (fromDetectiveThrillerCollection) return 'MYSTERY INDEX';
  if (fromMysteryThrillerCollection) return 'MYSTERY INDEX';
  if (fromPsychologicalThrillerCollection) return 'PSYCHOLOGICAL INDEX';
  if (fromDramaCollection) return 'EMOTIONAL INTENSITY';
  if (fromThrillerCollection) return 'SUSPENSE INDEX';
  if (fromSurvivalCollection) return 'SURVIVABILITY INDEX';
  if (fromInceptionCollection) return 'MIND-BENDING INDEX';
  if (fromShutterIslandCollection) return 'PSYCHOLOGICAL INDEX';
  if (fromMementoCollection) return 'MEMORY INDEX';
  return 'MIND-BENDING INDEX';
};

const getComplexityLevelLabel = () => {
  if (fromRevengeCollection) return 'VENGEANCE BRUTALITY LEVEL';  // ✅ REVENGE ADDED
  if (fromWarFilmsCollection) return 'COMBAT REALISM LEVEL';
  if (fromSciFiCollection) return 'COSMIC COMPLEXITY LEVEL';
   if (fromInterstellarCollection) return 'SCI-FI COMPLEXITY LEVEL';  // ✅ ADD THIS
  if (fromTimeTravelCollection) return 'TEMPORAL PARADOX LEVEL';
  if (fromHeistThrillerCollection) return 'HEIST COMPLEXITY LEVEL';
  if (fromCrimeThrillerCollection) return 'CRIME COMPLEXITY LEVEL';
  if (fromDetectiveThrillerCollection) return 'MYSTERY COMPLEXITY LEVEL';
  if (fromMysteryThrillerCollection) return 'MYSTERY COMPLEXITY LEVEL';
  if (fromPsychologicalThrillerCollection) return 'PSYCHOLOGICAL DISTORTION LEVEL';
  if (fromDramaCollection) return 'EMOTIONAL RESONANCE LEVEL';
  if (fromThrillerCollection) return 'SUSPENSE INTENSITY LEVEL';
  if (fromSurvivalCollection) return 'SURVIVAL INTENSITY LEVEL';
  if (fromInceptionCollection) return 'COGNITIVE COMPLEXITY LEVEL';
  if (fromShutterIslandCollection) return 'PSYCHOLOGICAL DISTORTION LEVEL';
  if (fromMementoCollection) return 'MEMORY DISTORTION LEVEL';
  return 'COGNITIVE DISTORTION LEVEL';
};


const getComplexityDescription = () => {
  if (fromRevengeCollection) {  // ✅ REVENGE ADDED
    if (scoreValue >= 90) return 'A brutal and devastating revenge masterpiece with visceral violence, profound moral complexity, and the soul-crushing cost of vengeance that transforms both avenger and target.';
    if (scoreValue >= 80) return 'A powerful revenge narrative with intense retribution, complex moral questions, and significant psychological impact exploring the dark path of vengeance.';
    if (scoreValue >= 70) return 'An engaging revenge story with satisfying payback, compelling character motivations, and meaningful exploration of justice versus vengeance.';
    return 'An accessible revenge film with solid action sequences, emotional stakes, and entertaining retribution storytelling.';
  }

  if (fromWarFilmsCollection) {
    if (scoreValue >= 90) return 'An absolutely brutal and unflinching war masterpiece with visceral combat realism, devastating human cost, and profound anti-war sentiment.';
    if (scoreValue >= 80) return 'A powerful war epic with intense combat sequences, complex moral questions, and significant psychological and emotional impact.';
    if (scoreValue >= 70) return 'An engaging war narrative with authentic combat sequences, compelling storytelling, and meaningful war themes.';
    return 'An accessible war film with solid action sequences and engaging military storytelling.';
  }

  if (fromSciFiCollection) {
    if (scoreValue >= 90) return 'A visionary sci-fi masterpiece with groundbreaking concepts, philosophical depth, and transcendent cosmic storytelling.';
    if (scoreValue >= 80) return 'A sophisticated sci-fi epic with innovative world-building, complex themes, and stunning visual spectacle.';
    if (scoreValue >= 70) return 'An engaging sci-fi narrative with compelling ideas, imaginative world-building, and solid execution.';
    return 'An accessible sci-fi adventure with creative concepts and entertaining storytelling.';
  }

  if (fromTimeTravelCollection) {
    if (scoreValue >= 90) return 'A mind-bending temporal masterpiece with paradoxes, causality loops, and revolutionary time travel mechanics.';
    if (scoreValue >= 80) return 'An intricate time travel narrative with complex paradoxes and sophisticated temporal mechanics.';
    if (scoreValue >= 70) return 'An engaging time travel story with thoughtful paradoxes and compelling temporal logic.';
    return 'An accessible time travel adventure with clever mechanics and satisfying temporal storytelling.';
  }

  if (fromHeistThrillerCollection) {
    if (scoreValue >= 90) return 'A masterfully executed heist thriller with unparalleled planning complexity, ingenious execution, and cinematic brilliance.';
    if (scoreValue >= 80) return 'A brilliantly crafted heist film with intricate schemes, masterful execution, and edge-of-your-seat tension.';
    if (scoreValue >= 70) return 'An engaging heist thriller with clever planning, solid execution, and satisfying narrative payoffs.';
    return 'An accessible heist adventure with smart plotting and entertaining criminal masterminds.';
  }
  
 
  
  if (fromDetectiveThrillerCollection) {
    if (scoreValue >= 90) return 'A masterfully intricate detective thriller with unparalleled investigative depth and suspense.';
    if (scoreValue >= 80) return 'A gripping detective story with complex puzzles and expertly crafted suspense.';
    if (scoreValue >= 70) return 'An engaging detective narrative providing solid mystery and thoughtful investigation.';
    return 'An accessible detective thriller that captivates with clever storytelling and intrigue.';
  }
  
  if (fromMysteryThrillerCollection) {
    if (scoreValue >= 90) return 'A masterfully crafted mystery with layers of deception, leaving audiences questioning everything until the final reveal.';
    if (scoreValue >= 80) return 'Intricately plotted thriller with compelling mysteries and shocking revelations throughout.';
    if (scoreValue >= 70) return 'Engaging mystery with well-crafted clues and satisfying detective work.';
    return 'Accessible mystery thriller with genuine intrigue and compelling storylines.';
  }
  
  if (fromPsychologicalThrillerCollection) {
    if (scoreValue >= 90) return 'A mind-bending psychological thriller with intense twists and profound character exploration.';
    if (scoreValue >= 80) return 'An immersive psychological thriller that delves deep into the human psyche and suspense.';
    if (scoreValue >= 70) return 'A compelling psychological thriller with gripping tension and layered storytelling.';
    return 'An engaging psychological thriller that captivates with mystery and emotional depth.';
  }
  
  if (fromDramaCollection) {
    if (scoreValue >= 90) return 'A profoundly moving emotional journey reaching the deepest corners of human experience.';
    if (scoreValue >= 80) return 'Intensely emotional narrative with powerful character moments and deeply affecting connections.';
    if (scoreValue >= 70) return 'Thoughtfully crafted emotional story with genuine heart and compelling drama.';
    return 'Accessible emotional narrative with authentic feeling and relatable moments.';
  }
  
  if (fromThrillerCollection) {
    if (scoreValue >= 90) return 'An absolutely brutal and relentless suspense masterpiece, leaving viewers shaken.';
    if (scoreValue >= 80) return 'Intensely suspenseful thriller with shocking twists and psychological manipulation.';
    if (scoreValue >= 70) return 'Gripping thriller with compelling mysteries and tense moments throughout.';
    return 'Accessible thriller with genuine suspense and engaging mystery elements.';
  }
  
  if (scoreValue >= 90) return 'A transcendent masterpiece redefining narrative complexity.';
  if (scoreValue >= 80) return 'Sophisticated cinematic storytelling with advanced non-linear elements.';
  if (scoreValue >= 70) return 'Thoughtfully complex narrative with engaging mind-bending elements.';
  return 'Accessible complexity with subtle mind-bending elements rewarding careful viewing.';
};

const getBorderColor = () => {
  if (fromRevengeCollection) return 'border-red-400/40';  // ✅ REVENGE ADDED
  if (fromWarFilmsCollection) return 'border-red-400/40';
   if (fromInterstellarCollection)return 'border-cyan-400/40';  // ✅ ADD THIS
  if (fromSciFiCollection) return 'border-cyan-400/40';
  if (fromTimeTravelCollection) return 'border-cyan-400/40';
  if (fromHeistThrillerCollection) return 'border-amber-400/40';
  if (fromCrimeThrillerCollection) return 'border-slate-400/40'; 
  if (fromDetectiveThrillerCollection) return 'border-yellow-400/40';
  if (fromPsychologicalThrillerCollection) return 'border-yellow-400/40';
  if (fromThrillerCollection) return 'border-yellow-400/40';
  if (fromDramaCollection) return 'border-red-400/40';
  if (fromInceptionCollection) return 'border-yellow-400/40';
  if (fromShutterIslandCollection) return 'border-yellow-400/40';
  if (fromMementoCollection) return 'border-yellow-400/40';
  return 'border-yellow-400/40';
};

const getStarColor = () => {
  if (fromRevengeCollection) return 'text-red-400';  // ✅ REVENGE ADDED
  if (fromWarFilmsCollection) return 'text-red-400';
  if (fromSciFiCollection) return 'text-cyan-400';
   if (fromInterstellarCollection)return 'text-cyan-400';
  if (fromTimeTravelCollection) return 'text-cyan-400';
  if (fromHeistThrillerCollection) return 'text-amber-400';
  if (fromCrimeThrillerCollection) return 'text-slate-400';  
  if (fromDetectiveThrillerCollection) return 'text-yellow-400';
  if (fromPsychologicalThrillerCollection) return 'text-yellow-400';
  if (fromThrillerCollection) return 'text-yellow-400';
  if (fromDramaCollection) return 'text-red-400';
  if (fromInceptionCollection) return 'text-yellow-400';
  if (fromShutterIslandCollection) return 'text-yellow-400';
  if (fromMementoCollection) return 'text-yellow-400';
  return 'text-yellow-400';
};


  return (
    <motion.div
      className="space-y-12 mt-16"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* REST OF YOUR JSX STAYS THE SAME */}
      <div className="text-center space-y-6">
        <motion.h2
          className="text-4xl md:text-6xl font-extralight tracking-widest text-white"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          {title}
        </motion.h2>

        <motion.div
          className="flex items-center justify-center space-x-6 text-gray-400 text-sm tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span>{year}</span>
          <span>•</span>
          <span>{director}</span>
          <span>•</span>
          <span>{runtime}</span>
          <span>•</span>
          <span
            className="px-2 py-1 rounded border font-medium"
            style={{
              color: getAgeRatingColor(ageRating),
              borderColor: getAgeRatingColor(ageRating),
              backgroundColor: `${getAgeRatingColor(ageRating)}15`
            }}
          >
            {ageRating}
          </span>
        </motion.div>

      </div>

      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <div className="p-8 bg-gradient-to-r from-gray-800/30 to-gray-900/50 rounded-2xl border border-yellow-400/20">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-yellow-400" />
            <h3 className="text-2xl font-light text-yellow-300">The Experience</h3>
          </div>
          <p className="text-gray-200 leading-relaxed text-lg">{getUniqueDescription()}</p>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="p-6 bg-gray-900/40 rounded-xl border-l-2 border-yellow-400/50">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-5 h-5 text-yellow-400" />
            <h3 className="text-lg font-light text-white">Cast & Crew</h3>
          </div>
          <div className="space-y-2">
            <p className="text-gray-300"><span className="text-gray-500">Director:</span> {director}</p>
            <p className="text-gray-300 text-sm"><span className="text-gray-500">Starring:</span> {cast}</p>
          </div>
        </div>

        <div className="p-6 bg-gray-900/40 rounded-xl border-l-2 border-blue-400/50">
          <div className="flex items-center gap-3 mb-4">
            <Film className="w-5 h-5 text-blue-400" />
            <h3 className="text-lg font-light text-white">Production Details</h3>
          </div>
          <div className="space-y-2">
            <p className="text-gray-300"><span className="text-gray-500">Budget:</span> {budget}</p>
            <p className="text-gray-300"><span className="text-gray-500">Box Office:</span> {boxOffice}</p>
            <p className="text-gray-300">
              <span className="text-gray-500">Age Rating:</span>
              <span
                className="ml-2 px-2 py-1 rounded border text-sm font-medium"
                style={{
                  color: getAgeRatingColor(ageRating),
                  borderColor: getAgeRatingColor(ageRating),
                  backgroundColor: `${getAgeRatingColor(ageRating)}15`
                }}
              >
                {ageRating}
              </span>
            </p>
          </div>
        </div>
      </motion.div>

         <EnhancedWhereToWatchSection movie={movie} />

      {!fromHeistThrillerCollection && (
        <motion.div
          className="mb-8 sm:mb-12 bg-gradient-to-br from-gray-800/40 to-gray-900/60 rounded-xl border border-gray-700/50 p-4 sm:p-8 shadow-2xl backdrop-blur-sm relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.01 }}
        >
          {[
            { pos: 'top-2 left-2 sm:top-4 sm:left-4', border: 'border-t-2 border-l-2' },
            { pos: 'top-2 right-2 sm:top-4 sm:right-4', border: 'border-t-2 border-r-2' },
            { pos: 'bottom-2 left-2 sm:bottom-4 sm:left-4', border: 'border-b-2 border-l-2' },
            { pos: 'bottom-2 right-2 sm:bottom-4 sm:right-4', border: 'border-b-2 border-r-2' }
          ].map((corner, i) => (
            <div
              key={i}
              className={`absolute ${corner.pos} w-3 h-3 sm:w-5 sm:h-5 ${corner.border} ${getBorderColor()}`}
            />
          ))}

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4 sm:gap-6">
            <div className="flex items-center gap-4">
              <Star className={`w-6 h-6 ${getStarColor()}`} />
              <h3 className="text-2xl font-light text-gray-200 tracking-wide uppercase">
                {getComplexityScoreTitle()}
              </h3>
            </div>

            <div className="flex items-center gap-6 sm:gap-8">
              <div className="text-right">
                <div className="text-3xl sm:text-4xl font-extralight mb-1 tracking-wider text-gray-200">{scoreValue}</div>
                <div className="text-xs text-gray-400 font-light tracking-wide uppercase">{getComplexityIndexLabel()}</div>
              </div>
              <div className="text-right">
                <div className="text-3xl sm:text-4xl font-extralight mb-1 tracking-wider text-gray-200">{rating}</div>
                <div className="text-xs text-gray-400 font-light tracking-wide uppercase">IMDB RATING</div>
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <span className="text-sm text-gray-300 font-light tracking-wider uppercase">{getComplexityLevelLabel()}</span>
                <span
                  className="text-sm font-light px-3 py-1 sm:px-4 sm:py-2 rounded-lg border backdrop-blur-sm tracking-wider uppercase"
                  style={{
                    color: getComplexityColor(complexityLevel),
                    borderColor: getComplexityColor(complexityLevel),
                    backgroundColor: `${getComplexityColor(complexityLevel)}15`
                  }}
                >
                  {complexityLevel}
                </span>
              </div>

              <div className="relative w-full bg-gray-700/50 rounded-full h-4 overflow-hidden">
                <motion.div
                  className="h-full rounded-full relative"
                  style={{ backgroundColor: getComplexityColor(complexityLevel) }}
                  initial={{ width: 0 }}
                  animate={{ width: `${scoreValue}%` }}
                  transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-pulse" />
                </motion.div>

                <div className="absolute -top-1 sm:-top-2 left-0 w-full flex justify-between">
                  {[25, 50, 75].map((mark) => (
                    <div
                      key={mark}
                      className={`w-0.5 sm:w-1 h-4 sm:h-7 rounded-full ${getBorderColor().replace('border', 'bg').replace('/40', '/30')}`}
                      style={{ left: `${mark}%` }}
                    />
                  ))}
                </div>
              </div>

              <p className="text-gray-300/90 text-sm font-light leading-relaxed tracking-wide mt-3">{getComplexityDescription()}</p>
            </div>
          </div>
        </motion.div>
      )}

    {!fromWarFilmsCollection && (
  <SensitiveContentTimelineSection movie={movie} sensitiveScenes={sensitiveScenes} />
)}

      {/* ✅ DYNAMIC DNA AND INTENSITY GRAPH FROM MOVIEINFO */}
  <EnhancedIntensityGraph
    scenes={safeMovieInfo.scenes}
    dominantColor={safeMovieInfo.dominantColor}
  />
  <StrategicDNAHelix
    dna={safeMovieInfo.dna}
    dominantColor={safeMovieInfo.dominantColor}
  />

  <RealCommentsRatingSection movie={movie} />

  {/* ✅ FAQ SECTION WITH INTERSTELLAR, REVENGE, WAR, SCI-FI AND TIME TRAVEL SUPPORT */}
  {fromRevengeCollection ? (  // ✅ REVENGE ADDED FIRST
    <RevengeMovieSEOFAQSection movie={movie} />
  ) : fromWarFilmsCollection ? (
    <WarFilmsSEOFAQSection movie={movie} />
  ) : fromSciFiCollection ? (
    <SciFiSEOFAQSection movie={movie} />
  ) : fromTimeTravelCollection ? (
    <TimeTravelSEOFAQSection movie={movie} />
  ) : fromHeistThrillerCollection ? (
    <HeistThrillerSEOFAQSection movie={movie} />
  ) : fromCrimeThrillerCollection ? (
    <CrimeThrillerSEOFAQSection movie={movie} />
  ) : fromDetectiveThrillerCollection ? (
    <DetectiveThrillerSEOFAQSection movie={movie} />
  ) : fromMysteryThrillerCollection ? (
    <MysteryThrillerSEOFAQSection movie={movie} />
  ) : fromPsychologicalThrillerCollection ? (
    <PsychThrillerSEOFAQSection movie={movie} />
  ) : fromThrillerCollection ? (
    <ThrillerSEOFAQSection movie={movie} />
  ) : fromInterstellarCollection ? (  // ✅ INTERSTELLAR ADDED
    <InterstellarSEOFAQSection movie={movie} />
  ) : fromSurvivalCollection ? (
    <SurvivalSEOFAQSection movie={movie} />
  ) : fromDramaCollection ? (
    <DramaSEOFAQSection movie={movie} />
  ) : fromInceptionCollection ? (
    <SEOFAQSection movie={movie} />
  ) : fromShutterIslandCollection ? (
    <ShutterIslandSEOFAQSection movie={movie} />
  ) : fromMementoCollection ? (
    <MementoSEOFAQSection movie={movie} />
  ) : (
    <SEOFAQSection movie={movie} />
  )}


</motion.div>
);
});

MovieDetailsSection.displayName = 'MovieDetailsSection';
export default MovieDetailsSection;
