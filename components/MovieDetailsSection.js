// components/MovieDetailsSection.js - AUTO-FETCH ALL DATA (Cast, Crew, Budget, Ratings) ✅

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Film, BookOpen, Star } from 'lucide-react';

// ==================== DATA IMPORTS ====================
import { COMPLETE_MOVIE_DATA, STRATEGIC_QUOTES } from '../utils/movieData';
import { 
  COMPLETE_MOVIE_DATA as SURVIVAL_MOVIE_DATA, 
  STRATEGIC_QUOTES as SURVIVAL_QUOTES, 
  SENSITIVE_TIMELINES 
} from '../utils/survivalMovieData';
import { 
  COMPLETE_MOVIE_DATA as BLACK_SWAN_MOVIE_DATA, 
  STRATEGIC_QUOTES as BLACK_SWAN_QUOTES, 
  SENSITIVE_TIMELINES as BLACK_SWAN_SENSITIVE_TIMELINES 
} from '../utils/blackSwanMovieData';
import { 
  COMPLETE_MOVIE_DATA as MATRIX_MOVIE_DATA, 
  STRATEGIC_QUOTES as MATRIX_QUOTES, 
  SENSITIVE_TIMELINES as MATRIX_SENSITIVE_TIMELINES 
} from '../utils/matrixMovieData';
import { 
  COMPLETE_MOVIE_DATA as PARASITE_MOVIE_DATA, 
  STRATEGIC_QUOTES as PARASITE_QUOTES, 
  SENSITIVE_TIMELINES as PARASITE_SENSITIVE_TIMELINES 
} from '../utils/parasiteMovieData';
import { 
  COMPLETE_MOVIE_DATA as OLDBOY_MOVIE_DATA, 
  STRATEGIC_QUOTES as OLDBOY_QUOTES, 
  SENSITIVE_TIMELINES as OLDBOY_SENSITIVE_TIMELINES 
} from '../utils/oldboyMovieData';
import { 
  COMPLETE_MOVIE_DATA as SE7EN_MOVIE_DATA, 
  STRATEGIC_QUOTES as SE7EN_QUOTES, 
  SENSITIVE_TIMELINES as SE7EN_SENSITIVE_TIMELINES 
} from '../utils/se7enMovieData';
import { 
  COMPLETE_MOVIE_DATA as INTERSTELLAR_MOVIE_DATA, 
  STRATEGIC_QUOTES as INTERSTELLAR_QUOTES, 
  SENSITIVE_TIMELINES as INTERSTELLAR_TIMELINES 
} from '../utils/interstellarMovieData';
import { 
  COMPLETE_MOVIE_DATA as DONNIE_DARKO_MOVIE_DATA, 
  STRATEGIC_QUOTES as DONNIE_DARKO_QUOTES, 
  SENSITIVE_TIMELINES as DONNIE_DARKO_SENSITIVE_TIMELINES 
} from '../utils/donnieDarkoMovieData';
import { 
  COMPLETE_MOVIE_DATA as EYES_WIDE_SHUT_MOVIE_DATA, 
  STRATEGIC_QUOTES as EYES_WIDE_SHUT_QUOTES, 
  SENSITIVE_TIMELINES as EYES_WIDE_SHUT_SENSITIVE_TIMELINES 
} from '../utils/eyesWideShutMovieData';
import { 
  COMPLETE_MOVIE_DATA as HBO_ACTION_MOVIE_DATA, 
  STRATEGIC_QUOTES as HBO_ACTION_QUOTES, 
  SENSITIVE_TIMELINES as HBO_ACTION_SENSITIVE_TIMELINES 
} from '../utils/hboActionMovieData';
import { 
  COMPLETE_MOVIE_DATA as HBO_ROMANCE_MOVIE_DATA, 
  STRATEGIC_QUOTES as HBO_ROMANCE_QUOTES, 
  SENSITIVE_TIMELINES as HBO_ROMANCE_SENSITIVE_TIMELINES 
} from '../utils/hboMaxRomanceMovieData'; 
import { 
  COMPLETE_MOVIE_DATA as HBO_MAX_THRILLER_MOVIE_DATA, 
  SENSITIVE_TIMELINES as HBO_MAX_THRILLER_SENSITIVE_TIMELINES 
} from '../utils/hboMaxThrillerMovieData';
import { 
  COMPLETE_MOVIE_DATA as HULU_ACTION_MOVIE_DATA, 
  STRATEGIC_QUOTES as HULU_ACTION_QUOTES, 
  SENSITIVE_TIMELINES as HULU_ACTION_SENSITIVE_TIMELINES 
} from '../utils/huluActionMovieData';
import { 
  COMPLETE_MOVIE_DATA as HULU_ROMANCE_MOVIE_DATA, 
  STRATEGIC_QUOTES as HULU_ROMANCE_QUOTES, 
  SENSITIVE_TIMELINES as HULU_ROMANCE_SENSITIVE_TIMELINES 
} from '../utils/huluRomanceMovieData';
import { 
  COMPLETE_MOVIE_DATA as HULU_HORROR_MOVIE_DATA, 
  STRATEGIC_QUOTES as HULU_HORROR_QUOTES, 
  SENSITIVE_TIMELINES as HULU_HORROR_SENSITIVE_TIMELINES 
} from '../utils/huluHorrorMovieData';
import { 
  COMPLETE_MOVIE_DATA as HULU_COMEDY_MOVIE_DATA, 
  STRATEGIC_QUOTES as HULU_COMEDY_QUOTES, 
  SENSITIVE_TIMELINES as HULU_COMEDY_SENSITIVE_TIMELINES 
} from '../utils/huluComedyMovieData';
import { 
  COMPLETE_MOVIE_DATA as HULU_SCIFI_MOVIE_DATA, 
  STRATEGIC_QUOTES as HULU_SCIFI_QUOTES, 
  SENSITIVE_TIMELINES as HULU_SCIFI_SENSITIVE_TIMELINES 
} from '../utils/huluSciFiMovieData';
import { 
  COMPLETE_MOVIE_DATA as HULU_THRILLER_MOVIE_DATA, 
  STRATEGIC_QUOTES as HULU_THRILLER_QUOTES, 
  SENSITIVE_TIMELINES as HULU_THRILLER_SENSITIVE_TIMELINES 
} from '../utils/huluThrillerMovieData';
import { 
  COMPLETE_MOVIE_DATA as HULU_BEST_MOVIE_DATA, 
  HULU_BEST_MOVIE_FAQS,
  SENSITIVE_TIMELINES as HULU_BEST_SENSITIVE_TIMELINES 
} from '../utils/huluBestMoviesData';
import { 
  COMPLETE_MOVIE_DATA as HULU_DRAMA_MOVIE_DATA, 
  HULU_DRAMA_MOVIE_FAQS,
  SENSITIVE_TIMELINES as HULU_DRAMA_SENSITIVE_TIMELINES 
} from '../utils/huluDramaMovieData';
// ✅ NEW: Hulu Family Import
import { 
  COMPLETE_MOVIE_DATA as HULU_FAMILY_MOVIE_DATA, 
  HULU_FAMILY_MOVIE_FAQS,
  SENSITIVE_TIMELINES as HULU_FAMILY_SENSITIVE_TIMELINES 
} from '../utils/huluFamilyMovieData';

import { 
  COMPLETE_MOVIE_DATA as CRIME_THRILLER_MOVIE_DATA, 
  SENSITIVE_TIMELINES as CRIME_THRILLER_SENSITIVE_TIMELINES 
} from '../utils/crimeThrillerMovieData';
import { 
  COMPLETE_MOVIE_DATA as HEIST_THRILLER_MOVIE_DATA, 
  SENSITIVE_TIMELINES as HEIST_THRILLER_SENSITIVE_TIMELINES 
} from '../utils/heistThrillerMovieData';
import { 
  COMPLETE_MOVIE_DATA as TIME_TRAVEL_MOVIE_DATA, 
  SENSITIVE_TIMELINES as TIME_TRAVEL_SENSITIVE_TIMELINES 
} from '../utils/timeTravelMovieData';
import { 
  COMPLETE_MOVIE_DATA as SCI_FI_MOVIE_DATA, 
  SENSITIVE_TIMELINES as SCI_FI_SENSITIVE_TIMELINES 
} from '../utils/sciFiMovieData';
import { 
  COMPLETE_MOVIE_DATA as REVENGE_MOVIE_DATA, 
  SENSITIVE_TIMELINES as REVENGE_SENSITIVE_TIMELINES 
} from '../utils/revengeMovieData';
import { 
  COMPLETE_MOVIE_DATA as WAR_FILMS_MOVIE_DATA 
} from '../utils/warFilmsMovieData';
import { 
  COMPLETE_MOVIE_DATA as THRILLER_MOVIE_DATA, 
  SENSITIVE_TIMELINES as THRILLER_SENSITIVE_TIMELINES 
} from '../utils/thrillerMovieData';
import { 
  COMPLETE_MOVIE_DATA as MYSTERY_THRILLER_MOVIE_DATA, 
  SENSITIVE_TIMELINES as MYSTERY_THRILLER_SENSITIVE_TIMELINES 
} from '../utils/mysteryThrillerMovieData';
import { 
  COMPLETE_MOVIE_DATA as DETECTIVE_THRILLER_MOVIE_DATA 
} from '../utils/detectiveThrillerMovieData';
import { 
  COMPLETE_MOVIE_DATA as PSYCH_THRILLER_MOVIE_DATA 
} from '../utils/psychologicalThrillerMovieData';


// ==================== COMPONENT IMPORTS ====================
import EnhancedIntensityGraph from './EnhancedIntensityGraph';
import StrategicDNAHelix from './StrategicDNAHelix';
import SensitiveContentTimelineSection from './SensitiveContentTimelineSection';
import EnhancedWhereToWatchSection from './EnhancedWhereToWatchSection';
import RealCommentsRatingSection from './RealCommentsRatingSection';

// FAQ Sections
import SEOFAQSection from './SEOFAQSection';
import MementoSEOFAQSection from './MementoSEOFAQSection';
import ShutterIslandSEOFAQSection from './ShutterIslandSEOFAQSection';
import SurvivalSEOFAQSection from './SurvivalSEOFAQSection';
import ThrillerSEOFAQSection from './ThrillerSEOFAQSection';
import MysteryThrillerSEOFAQSection from './MysteryThrillerSEOFAQSection';
import DetectiveThrillerSEOFAQSection from './DetectiveThrillerSEOFAQSection';
import PsychThrillerSEOFAQSection from './PsychThrillerSEOFAQSection';
import CrimeThrillerSEOFAQSection from './CrimeThrillerSEOFAQSection';
import HeistThrillerSEOFAQSection from './HeistThrillerSEOFAQSection';
import TimeTravelSEOFAQSection from './TimeTravelSEOFAQSection';
import SciFiSEOFAQSection from './SciFiSEOFAQSection';
import RevengeMovieSEOFAQSection from './RevengeMovieSEOFAQSection';
import WarFilmsSEOFAQSection from './WarFilmsSEOFAQSection';
import InterstellarSEOFAQSection from './InterstellarSEOFAQSection';
import MatrixSEOFAQSection from './MatrixSEOFAQSection';
import Se7enSEOFAQSection from './Se7enSEOFAQSection'; 
import ParasiteSEOFAQSection from './ParasiteSEOFAQSection'; 
import OldboySEOFAQSection from './OldboySEOFAQSection';
import DonnieDarkoSEOFAQSection from './DonnieDarkoSEOFAQSection';
import BlackSwanSEOFAQSection from './BlackSwanSEOFAQSection';
import EyesWideShutSEOFAQSection from './EyesWideShutSEOFAQSection';
import HboActionSEOFAQSection from './HboActionSEOFAQSection';
import HboMaxRomanceSEOFAQSection from './HboMaxRomanceSEOFAQSection';
import HboMaxThrillerSEOFAQSection from './HboMaxThrillerSEOFAQSection';
import HuluActionSEOFAQSection from './HuluActionSEOFAQSection';
import HuluRomanceSEOFAQSection from './HuluRomanceSEOFAQSection';
import HuluHorrorSEOFAQSection from './HuluHorrorSEOFAQSection';
import HuluComedySEOFAQSection from './HuluComedySEOFAQSection';
import HuluSciFiSEOFAQSection from './HuluSciFiSEOFAQSection';
import HuluThrillerSEOFAQSection from './HuluThrillerSEOFAQSection';
import HuluBestSEOFAQSection from './HuluBestSEOFAQSection';
import HuluDramaSEOFAQSection from './HuluDramaSEOFAQSection';
// ✅ NEW: Hulu Family FAQ Import
import HuluFamilySEOFAQSection from './HuluFamilySEOFAQSection';

const MovieDetailsSection = React.memo(({
  movie,
  fromEyesWideShutCollection,
  fromMementoCollection,
  fromShutterIslandCollection,
  fromInceptionCollection,
  fromSurvivalCollection,
  fromMatrixCollection,
  fromBlackSwanCollection,
  fromSe7enCollection,
  fromParasiteCollection,
  fromDonnieDarkoCollection,
  fromOldboyCollection,
  fromInterstellarCollection,
  fromDramaCollection, // This is Netflix Drama
  fromPsychologicalThrillerCollection,
  fromThrillerCollection,
  fromMysteryThrillerCollection,
  fromDetectiveThrillerCollection,
  fromCrimeThrillerCollection,
  fromHeistThrillerCollection,
  fromTimeTravelCollection,
  fromSciFiCollection,
  fromRevengeCollection,
  fromWarFilmsCollection,
  fromHboActionCollection, 
  fromHboRomanceCollection, 
  fromHboMaxThrillerCollection, 
  fromHuluActionCollection,
  fromHuluRomanceCollection,
  fromHuluHorrorCollection,
  fromHuluComedyCollection,
  fromHuluSciFiCollection,
  fromHuluThrillerCollection,
  fromHuluBestCollection,
  fromHuluDramaCollection,
  fromHuluFamilyCollection // ✅ NEW: Hulu Family Prop
}) => {

 if (!movie) return null;

 const safeLookup = (collection, id) => (collection && id && collection[id]) || null;

 // ✅ UNIFIED MOVIE INFO LOOKUP
 const movieInfo = fromHboActionCollection ? safeLookup(HBO_ACTION_MOVIE_DATA, movie.tmdbId) 
  : fromHboRomanceCollection ? safeLookup(HBO_ROMANCE_MOVIE_DATA, movie.tmdbId)
  : fromHboMaxThrillerCollection ? safeLookup(HBO_MAX_THRILLER_MOVIE_DATA, movie.tmdbId)
  : fromHuluFamilyCollection ? safeLookup(HULU_FAMILY_MOVIE_DATA, movie.tmdbId) // ✅ Hulu Family Added
  : fromHuluDramaCollection ? safeLookup(HULU_DRAMA_MOVIE_DATA, movie.tmdbId)
  : fromHuluBestCollection ? safeLookup(HULU_BEST_MOVIE_DATA, movie.tmdbId)
  : fromHuluThrillerCollection ? safeLookup(HULU_THRILLER_MOVIE_DATA, movie.tmdbId)
  : fromHuluSciFiCollection ? safeLookup(HULU_SCIFI_MOVIE_DATA, movie.tmdbId)
  : fromHuluComedyCollection ? safeLookup(HULU_COMEDY_MOVIE_DATA, movie.tmdbId)
  : fromHuluHorrorCollection ? safeLookup(HULU_HORROR_MOVIE_DATA, movie.tmdbId)
  : fromHuluRomanceCollection ? safeLookup(HULU_ROMANCE_MOVIE_DATA, movie.tmdbId)
  : fromHuluActionCollection ? safeLookup(HULU_ACTION_MOVIE_DATA, movie.tmdbId)
  : fromDonnieDarkoCollection ? safeLookup(DONNIE_DARKO_MOVIE_DATA, movie.tmdbId)
  : fromParasiteCollection ? safeLookup(PARASITE_MOVIE_DATA, movie.tmdbId)
  : fromMatrixCollection ? safeLookup(MATRIX_MOVIE_DATA, movie.tmdbId)
  : fromSe7enCollection ? safeLookup(SE7EN_MOVIE_DATA, movie.tmdbId)
  : fromOldboyCollection ? safeLookup(OLDBOY_MOVIE_DATA, movie.tmdbId)
  : fromBlackSwanCollection ? safeLookup(BLACK_SWAN_MOVIE_DATA, movie.tmdbId)
  : fromEyesWideShutCollection ? safeLookup(EYES_WIDE_SHUT_MOVIE_DATA, movie.tmdbId)
  : fromRevengeCollection ? safeLookup(REVENGE_MOVIE_DATA, movie.tmdbId)
  : fromWarFilmsCollection ? safeLookup(WAR_FILMS_MOVIE_DATA, movie.tmdbId)
  : fromSciFiCollection ? safeLookup(SCI_FI_MOVIE_DATA, movie.tmdbId)
  : fromTimeTravelCollection ? safeLookup(TIME_TRAVEL_MOVIE_DATA, movie.tmdbId)
  : fromHeistThrillerCollection ? safeLookup(HEIST_THRILLER_MOVIE_DATA, movie.tmdbId)
  : fromCrimeThrillerCollection ? safeLookup(CRIME_THRILLER_MOVIE_DATA, movie.tmdbId)
  : fromDetectiveThrillerCollection ? safeLookup(DETECTIVE_THRILLER_MOVIE_DATA, movie.tmdbId)
  : fromMysteryThrillerCollection ? safeLookup(MYSTERY_THRILLER_MOVIE_DATA, movie.tmdbId)
  : fromPsychologicalThrillerCollection ? safeLookup(PSYCH_THRILLER_MOVIE_DATA, movie.tmdbId)
  : fromThrillerCollection ? safeLookup(THRILLER_MOVIE_DATA, movie.tmdbId)
  : fromInterstellarCollection ? safeLookup(INTERSTELLAR_MOVIE_DATA, movie.tmdbId)
  : fromSurvivalCollection ? safeLookup(SURVIVAL_MOVIE_DATA, movie.tmdbId)
  : fromDramaCollection ? safeLookup(DRAMA_MOVIE_DATA, movie.tmdbId)
  : safeLookup(COMPLETE_MOVIE_DATA, movie.tmdbId);

 const getMovieSpecificData = (title) => ({
   mindBendingIndex: 85,
   complexityLevel: 'HIGH',
   dominantColor: '#ca8a04',
   rating: movie.imdbRating || 7.5,
   director: movie.Director || 'Acclaimed Director',
   scenes: [],
   dna: { Mystery: 60, Thriller: 30, Drama: 10 },
   cast: ['Lead Actor', 'Supporting Cast'],
   boxOffice: 'N/A',
   budget: 'N/A',
   synopsis: 'A compelling exploration of cinema.',
   ageRating: 'Rated'
 });

 const title = movie.Title || (movieInfo && movieInfo.title) || 'Unknown Title';
 const safeMovieInfo = movieInfo || getMovieSpecificData(title);

 const year = movie.Year || movie.year || '20XX';
 const runtime = safeMovieInfo.runtime || movie.Runtime || '120 min';
 const rating = safeMovieInfo.rating || movie.imdbRating || 7.5;

 // 🔥🔥🔥 AUTO-FETCH LOGIC FOR ALL MOVIE DATA 🔥🔥🔥
 const [dynamicMovieData, setDynamicMovieData] = useState({
   director: safeMovieInfo.director || movie.Director || 'Unknown Director',
   cast: safeMovieInfo.cast?.join(', ') || '',
   budget: safeMovieInfo.budget || 'N/A',
   boxOffice: safeMovieInfo.boxOffice || 'N/A',
   ageRating: safeMovieInfo.ageRating || 'Rated'
 });

 useEffect(() => {
   if (!movie.tmdbId) return;

   const fetchAllData = async () => {
       try {
           const API_KEY = 'a07e22bc18f5cb106bfe4cc1f83ad8ed';
           
           const [detailsRes, creditsRes, releasesRes] = await Promise.all([
               fetch(`https://api.themoviedb.org/3/movie/${movie.tmdbId}?api_key=${API_KEY}`),
               fetch(`https://api.themoviedb.org/3/movie/${movie.tmdbId}/credits?api_key=${API_KEY}`),
               fetch(`https://api.themoviedb.org/3/movie/${movie.tmdbId}/release_dates?api_key=${API_KEY}`)
           ]);

           const details = await detailsRes.json();
           const credits = await creditsRes.json();
           const releases = await releasesRes.json();

           const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
           
           const newBudget = details.budget && details.budget > 0 
               ? formatter.format(details.budget) 
               : dynamicMovieData.budget;

           const newRevenue = details.revenue && details.revenue > 0 
               ? formatter.format(details.revenue) 
               : dynamicMovieData.boxOffice;

           const directorObj = credits.crew?.find(person => person.job === 'Director');
           const newDirector = directorObj ? directorObj.name : dynamicMovieData.director;

           const topCast = credits.cast?.slice(0, 3).map(c => c.name).join(', ') || dynamicMovieData.cast;

           let newRating = dynamicMovieData.ageRating;
           const usRelease = releases.results?.find(r => r.iso_3166_1 === 'US');
           if (usRelease) {
               const cert = usRelease.release_dates.find(d => d.certification !== '')?.certification;
               if (cert) newRating = cert;
           }

           setDynamicMovieData({
               director: newDirector,
               cast: topCast,
               budget: newBudget,
               boxOffice: newRevenue,
               ageRating: newRating
           });

       } catch (error) {
           console.error("TMDB Auto-Fetch Failed:", error);
       }
   };

   fetchAllData();
 }, [movie.tmdbId]);
 // 🔥🔥🔥 END AUTO-FETCH LOGIC 🔥🔥🔥

 // ✅ UNIFIED SENSITIVE SCENES LOOKUP
 const sensitiveScenes = safeMovieInfo.sensitiveScenes 
   || HBO_ACTION_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes 
   || HBO_ROMANCE_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes 
   || HBO_MAX_THRILLER_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes 
   || HULU_FAMILY_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes // ✅ Hulu Family Added
   || HULU_DRAMA_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes 
   || HULU_BEST_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes 
   || HULU_THRILLER_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes
   || HULU_SCIFI_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes 
   || HULU_COMEDY_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes
   || HULU_HORROR_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes 
   || HULU_ROMANCE_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes
   || HULU_ACTION_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes
   || DONNIE_DARKO_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes
   || PARASITE_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes
   || BLACK_SWAN_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes
   || EYES_WIDE_SHUT_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes
   || OLDBOY_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes
   || MATRIX_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes 
   || SE7EN_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes
   || SCI_FI_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes
   || TIME_TRAVEL_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes
   || HEIST_THRILLER_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes
   || REVENGE_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes
   || CRIME_THRILLER_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes 
   || THRILLER_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes
   || MYSTERY_THRILLER_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes
   || INTERSTELLAR_TIMELINES?.[movie?.tmdbId]?.scenes 
   || SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes 
   || [];

 // ✅ DYNAMIC SCORE VALUE SELECTION
 const scoreValue = fromHboActionCollection ? movie.actionIntensity ?? safeMovieInfo.actionIntensity ?? 0
   : fromHboRomanceCollection ? movie.emotionalIntensity ?? safeMovieInfo.emotionalIntensity ?? 0 
   : fromHboMaxThrillerCollection ? movie.suspenseIntensity ?? safeMovieInfo.suspenseIntensity ?? 0 
   : fromHuluFamilyCollection ? movie.wholesomeScore ?? safeMovieInfo.wholesomeScore ?? 0 // ✅ Hulu Family Added
   : fromHuluDramaCollection ? movie.emotionalIntensity ?? safeMovieInfo.emotionalIntensity ?? 0
   : fromHuluBestCollection ? movie.adrenalineScore ?? safeMovieInfo.adrenalineScore ?? 0 
   : fromHuluThrillerCollection ? movie.suspenseIntensity ?? safeMovieInfo.suspenseIntensity ?? 0
   : fromHuluSciFiCollection ? movie.visualSpectacle ?? safeMovieInfo.visualSpectacle ?? 0 
   : fromHuluComedyCollection ? movie.laughterIndex ?? safeMovieInfo.laughterIndex ?? 0 
   : fromHuluHorrorCollection ? movie.scariness ?? safeMovieInfo.scariness ?? 0 
   : fromHuluRomanceCollection ? movie.romanticIntensity ?? safeMovieInfo.romanticIntensity ?? 0 
   : fromHuluActionCollection ? movie.adrenalineScore ?? safeMovieInfo.adrenalineScore ?? 0
   : fromDonnieDarkoCollection ? movie.realityWarpIndex ?? safeMovieInfo.realityWarpIndex ?? 0
   : fromParasiteCollection ? movie.classWarfareIndex ?? safeMovieInfo.classWarfareIndex ?? 0
   : fromMatrixCollection ? movie.cyberComplexity ?? safeMovieInfo.cyberComplexity ?? 0
   : fromOldboyCollection ? movie.revengeIntensity ?? safeMovieInfo.revengeIntensity ?? 0
   : fromBlackSwanCollection ? movie.psychologicalIntensity ?? safeMovieInfo.psychologicalIntensity ?? 0
   : fromEyesWideShutCollection ? movie.paranoiaIntensity ?? safeMovieInfo.paranoiaIntensity ?? 0
   : fromSe7enCollection ? movie.se7enDNAScore ?? safeMovieInfo.se7enDNAScore ?? 0
   : fromRevengeCollection ? movie.revengeIntensity ?? safeMovieInfo.revengeIntensity ?? 0
   : fromWarFilmsCollection ? movie.warIntensity ?? safeMovieInfo.warIntensity ?? 0
   : fromSciFiCollection ? movie.sciFiComplexity ?? safeMovieInfo.sciFiComplexity ?? 0
   : fromInterstellarCollection ? movie.spaceComplexity ?? safeMovieInfo.spaceComplexity ?? 0
   : fromTimeTravelCollection ? movie.timeTravelIntensity ?? safeMovieInfo.timeTravelIntensity ?? 0
   : fromHeistThrillerCollection ? movie.heistComplexity ?? safeMovieInfo.heistComplexity ?? 0
   : fromCrimeThrillerCollection ? movie.suspenseIntensity ?? safeMovieInfo.suspenseIntensity ?? 0
   : fromMysteryThrillerCollection ? movie.mysteryComplexity ?? safeMovieInfo.mysteryComplexity ?? 0
   : fromDetectiveThrillerCollection ? movie.mysteryComplexity ?? safeMovieInfo.mysteryComplexity ?? 0
   : fromPsychologicalThrillerCollection ? movie.suspenseIntensity ?? safeMovieInfo.suspenseIntensity ?? 0
   : fromDramaCollection ? movie.emotionalIntensity ?? safeMovieInfo.emotionalIntensity ?? 0
   : fromThrillerCollection ? movie.suspenseIntensity ?? safeMovieInfo.suspenseIntensity ?? 0
   : fromSurvivalCollection ? movie.survivabilityIndex ?? safeMovieInfo.survivabilityIndex ?? 0
   : fromInceptionCollection ? movie.mindBendingIndex ?? safeMovieInfo.mindBendingIndex ?? 0
   : safeMovieInfo.mindBendingIndex ?? 0;

 const complexityLevel = safeMovieInfo.complexityLevel || 'HIGH';

 const getComplexityColor = (level) => {
   if (fromHboActionCollection) {
        switch (level) {
            case 'LEGENDARY': return '#ef4444'; 
            case 'MASTERPIECE': return '#b91c1c'; 
            case 'DIRECT': return '#f87171'; 
            default: return '#fbbf24'; 
        }
   }
   if (fromHboRomanceCollection) { 
        switch (level) {
            case 'LEGENDARY': return '#ec4899'; 
            case 'MASTERPIECE': return '#be123c'; 
            case 'ICONIC': return '#f43f5e'; 
            default: return '#fbbf24'; 
        }
   }
   if (fromHboMaxThrillerCollection) { 
        switch (level) {
            case 'MASTERPIECE': return '#ef4444'; 
            case 'DISTURBING': return '#7f1d1d'; 
            case 'SURREAL': return '#b91c1c'; 
            default: return '#f87171'; 
        }
   }
   if (fromHuluFamilyCollection) { // ✅ Hulu Family Added
        switch (level) {
            case 'MASTERPIECE': return '#f59e0b'; // Amber 500
            case 'HEARTWARMING': return '#fbbf24'; // Amber 400
            case 'FUN': return '#fcd34d'; // Amber 300
            default: return '#fde047'; // Yellow 300
        }
   }
   if (fromHuluDramaCollection) { 
        switch (level) {
            case 'MASTERPIECE': return '#3b82f6';
            case 'DEVASTATING': return '#7e22ce';
            case 'HEALING': return '#4f46e5';
            default: return '#60a5fa';
        }
   }
   if (fromHuluBestCollection) { 
        switch (level) {
            case 'ESSENTIAL': return '#f59e0b';
            case 'LEGENDARY': return '#d97706';
            case 'MASTERPIECE': return '#b45309';
            default: return '#fbbf24';
        }
   }
   if (fromHuluThrillerCollection) {
        switch (level) {
            case 'MASTERPIECE': return '#ef4444'; 
            case 'VISCERAL': return '#b91c1c'; 
            case 'CEREBRAL': return '#991b1b'; 
            default: return '#f87171'; 
        }
   }
   if (fromHuluSciFiCollection) { 
        switch (level) {
            case 'LEGENDARY': return '#0ea5e9'; 
            case 'PUZZLE': return '#a855f7'; 
            case 'MASTERPIECE': return '#22d3ee'; 
            default: return '#38bdf8'; 
        }
   }
   if (fromHuluComedyCollection) {
        switch (level) {
            case 'LEGENDARY': return '#ca8a04'; 
            case 'CHAOTIC': return '#ea580c'; 
            case 'MASTERPIECE': return '#eab308'; 
            default: return '#facc15'; 
        }
   }
   if (fromHuluHorrorCollection) {
        switch (level) {
            case 'TRAUMA': return '#7f1d1d'; 
            case 'DREAD': return '#dc2626'; 
            case 'DISTURBING': return '#ea580c'; 
            default: return '#b91c1c';
        }
   }
   if (fromHuluRomanceCollection) {
        switch (level) {
            case 'MASTERPIECE': return '#8b5cf6'; 
            case "PALME D'OR": return '#ec4899'; 
            case 'NOSTALGIC': return '#facc15'; 
            default: return '#fbbf24'; 
        }
   }
   if (fromHuluActionCollection) {
        switch (level) {
            case 'LEGENDARY': return '#ef4444'; 
            case 'DIRECT': return '#f97316'; 
            default: return '#fbbf24'; 
        }
   }
   if (fromRevengeCollection || fromWarFilmsCollection || fromDramaCollection) {
     switch (level) {
       case 'EXTREME': return '#991b1b';
       case 'HIGH': return '#dc2626';
       case 'MEDIUM': return '#f87171';
       default: return '#6b7280';
     }
   }
   switch (level) {
     case 'EXTREME': return '#ea0808ff';
     case 'HIGH': return '#eb7a09ff';
     case 'MEDIUM': return '#8d7708ff';
     default: return '#6b7280';
   }
 };

 // ✅ HELPER: Age Rating Colors
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
   
   if (t.includes('oldboy')) return "After 15 years of mysterious imprisonment, Oh Dae-su is released and seeks vengeance against his unknown captor.";
   if (t.includes('parasite')) return "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.";
   
   return "A compelling exploration of truth, identity, and the limits of human understanding.";
 };

 const getComplexityScoreTitle = () => {
   if (fromHboActionCollection) return 'ACTION INTENSITY';
   if (fromHboRomanceCollection) return 'EMOTIONAL INTENSITY'; 
   if (fromHboMaxThrillerCollection) return 'SUSPENSE INTENSITY'; 
   if (fromHuluFamilyCollection) return 'WHOLESOME SCORE'; // ✅ Hulu Family Added
   if (fromHuluDramaCollection) return 'EMOTIONAL INTENSITY';
   if (fromHuluBestCollection) return 'INTENSITY SCORE'; 
   if (fromHuluThrillerCollection) return 'SUSPENSE SCORE';
   if (fromHuluSciFiCollection) return 'VISUAL SPECTACLE SCORE'; 
   if (fromHuluComedyCollection) return 'LAUGHTER SCORE'; 
   if (fromHuluHorrorCollection) return 'DREAD SCORE'; 
   if (fromHuluRomanceCollection) return 'EMOTIONAL RESONANCE';
   if (fromHuluActionCollection) return 'ADRENALINE SCORE';
   if (fromMatrixCollection) return 'SCI-FI COMPLEXITY SCORE';
   if (fromSe7enCollection) return 'SE7EN DNA SCORE';
   if (fromRevengeCollection) return 'REVENGE INTENSITY SCORE';
   if (fromWarFilmsCollection) return 'WAR INTENSITY SCORE';
   if (fromSciFiCollection) return 'SCI-FI COMPLEXITY SCORE';
   if (fromInterstellarCollection) return 'SPACE COMPLEXITY SCORE';
   if (fromTimeTravelCollection) return 'TIME TRAVEL COMPLEXITY SCORE';
   if (fromHeistThrillerCollection) return 'HEIST COMPLEXITY SCORE';
   if (fromCrimeThrillerCollection) return 'CRIME INTENSITY SCORE';
   if (fromDetectiveThrillerCollection || fromMysteryThrillerCollection) return 'MYSTERY COMPLEXITY SCORE';
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
   if (fromHboActionCollection) return 'EPIC SCALE INDEX'; 
   if (fromHboRomanceCollection) return 'HEARTBREAK INDEX'; 
   if (fromHboMaxThrillerCollection) return 'TENSION INDEX'; 
   if (fromHuluFamilyCollection) return 'FAMILY FRIENDLY INDEX'; // ✅ Hulu Family Added
   if (fromHuluDramaCollection) return 'IMPACT INDEX';
   if (fromHuluBestCollection) return 'ACCLAIM INDEX'; 
   if (fromHuluThrillerCollection) return 'TENSION INDEX';
   if (fromHuluSciFiCollection) return 'VISUAL SPECTACLE INDEX'; 
   if (fromHuluComedyCollection) return 'HILARITY INDEX'; 
   if (fromHuluHorrorCollection) return 'DREAD INDEX'; 
   if (fromHuluRomanceCollection) return 'EMOTION INDEX';
   if (fromHuluActionCollection) return 'ADRENALINE INDEX';
   if (fromMatrixCollection) return 'MIND BENDING SCORE';
   if (fromSe7enCollection) return 'NOIR DARKNESS INDEX';
   if (fromRevengeCollection) return 'REVENGE INTENSITY INDEX';
   if (fromWarFilmsCollection) return 'WAR INTENSITY INDEX';
   if (fromSciFiCollection) return 'SCI-FI COMPLEXITY INDEX';
   if (fromInterstellarCollection) return 'COSMIC REALISM INDEX';
   if (fromTimeTravelCollection) return 'TIME COMPLEXITY INDEX';
   if (fromHeistThrillerCollection) return 'HEIST COMPLEXITY INDEX';
   if (fromCrimeThrillerCollection) return 'CRIME INTENSITY INDEX';
   if (fromDetectiveThrillerCollection || fromMysteryThrillerCollection) return 'MYSTERY INDEX';
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
   if (fromHboActionCollection) return 'CINEMATIC SCALE LEVEL';
   if (fromHboRomanceCollection) return 'ROMANCE TIER LEVEL'; 
   if (fromHboMaxThrillerCollection) return 'PSYCHOLOGICAL LEVEL'; 
   if (fromHuluFamilyCollection) return 'WHOLESOME LEVEL'; // ✅ Hulu Family Added
   if (fromHuluDramaCollection) return 'RESONANCE LEVEL';
   if (fromHuluBestCollection) return 'PRESTIGE LEVEL'; 
   if (fromHuluThrillerCollection) return 'THRILL LEVEL';
   if (fromHuluSciFiCollection) return 'VISUAL SPECTACLE LEVEL'; 
   if (fromHuluComedyCollection) return 'CHAOS LEVEL';
   if (fromHuluHorrorCollection) return 'SCARINESS LEVEL'; 
   if (fromHuluRomanceCollection) return 'ROMANCE TIER';
   if (fromHuluActionCollection) return 'ACTION INTENSITY LEVEL';
   if (fromMatrixCollection) return 'SCI-FI COMPLEXITY LEVEL';
   if (fromSe7enCollection) return 'PSYCHOLOGICAL GRIT LEVEL';
   if (fromRevengeCollection) return 'VENGEANCE BRUTALITY LEVEL';
   if (fromWarFilmsCollection) return 'COMBAT REALISM LEVEL';
   if (fromSciFiCollection) return 'SCI-FI COMPLEXITY LEVEL';
   if (fromInterstellarCollection) return 'COSMIC SCALE LEVEL';
   if (fromTimeTravelCollection) return 'TEMPORAL PARADOX LEVEL';
   if (fromHeistThrillerCollection) return 'HEIST COMPLEXITY LEVEL';
   if (fromCrimeThrillerCollection) return 'CRIME COMPLEXITY LEVEL';
   if (fromDetectiveThrillerCollection || fromMysteryThrillerCollection) return 'MYSTERY COMPLEXITY LEVEL';
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
   if (fromHboActionCollection) {
        if (scoreValue >= 90) return 'A legendary cinematic experience with unmatched scale and visceral combat.';
        if (scoreValue >= 80) return 'A massive blockbuster epic with high-stakes action and world-building.';
        return 'A solid action movie with impressive scale and fight choreography.';
   }
   if (fromHboRomanceCollection) { 
        if (scoreValue >= 90) return 'A god-tier emotional masterpiece. Prepare to be devastated in the best way possible.';
        if (scoreValue >= 80) return 'A deeply resonant romance with unforgettable chemistry and heart.';
        return 'A beautiful, classic romance that hits all the right emotional notes.';
   }
   if (fromHboMaxThrillerCollection) { 
        if (scoreValue >= 90) return 'A masterclass in psychological tension. Visceral, disturbing, and unforgettable.';
        if (scoreValue >= 80) return 'Extremely suspenseful with mind-bending twists and high stakes.';
        return 'A gripping thriller that keeps you on the edge of your seat.';
   }
   if (fromHuluFamilyCollection) { // ✅ Hulu Family Added
        if (scoreValue >= 90) return 'A heartwarming masterpiece that will delight both kids and adults. Pure wholesome magic.';
        if (scoreValue >= 80) return 'Great family entertainment with positive messages and plenty of fun moments.';
        return 'A solid family movie that offers good laughs and an enjoyable adventure.';
   }
   if (fromHuluDramaCollection) {
        if (scoreValue >= 90) return 'A devastating, emotional masterpiece that will stay with you forever.';
        if (scoreValue >= 80) return 'A powerful, deeply resonant film with rich character depth.';
        return 'A compelling human drama with genuine emotional stakes.';
   }
   if (fromHuluBestCollection) { 
        if (scoreValue >= 90) return 'A cinematic masterpiece that defines its genre and demands to be seen.';
        if (scoreValue >= 80) return 'Critically acclaimed filmmaking with powerful storytelling and high production value.';
        return 'A highly rated, essential watch that delivers quality entertainment.';
   }
   if (fromHuluThrillerCollection) { 
        if (scoreValue >= 90) return 'A masterclass in tension that will leave you breathless and shaken.';
        if (scoreValue >= 80) return 'Incredibly suspenseful with high stakes and gripping pacing.';
        return 'A solid thriller with engaging twists and moments of real tension.';
   }
   if (fromHuluSciFiCollection) { 
        if (scoreValue >= 90) return 'A visionary masterpiece that challenges reality and expands your mind.';
        if (scoreValue >= 80) return 'Intellectually stimulating with complex concepts and stunning visuals.';
        return 'A solid sci-fi film with engaging ideas and great world-building.';
   }
   if (fromHuluComedyCollection) {
        if (scoreValue >= 90) return 'Legendary status. A film that defines a generation of humor and is quoted endlessly.';
        if (scoreValue >= 80) return 'Extremely funny with unforgettable lines and chaotic energy.';
        return 'A solid comedy that delivers consistent laughs and good vibes.';
   }
   if (fromHuluHorrorCollection) {
        if (scoreValue >= 90) return 'Pure nightmare fuel. A visceral, traumatizing experience that ignores all safety rules.';
        if (scoreValue >= 80) return 'Suffocating dread and high-stakes terror. Will leave you unsettled for days.';
        return 'Effective horror with solid scares and creepy atmosphere.';
   }
   if (fromHuluRomanceCollection) {
        if (scoreValue >= 90) return 'A deeply emotional masterpiece that will linger in your heart for days.';
        if (scoreValue >= 80) return 'A beautiful, resonant film with undeniable chemistry and heart.';
        return 'A solid romance with sweet moments and genuine connection.';
   }
   if (fromHuluActionCollection) {
        if (scoreValue >= 90) return 'A relentless, high-octane adrenaline rush with masterclass choreography.';
        if (scoreValue >= 80) return 'Intense, fast-paced action with thrilling set pieces.';
        return 'Solid action entertainment with satisfying combat and stunts.';
   }
   if (fromMatrixCollection) {
        if (scoreValue >= 90) return 'A groundbreaking sci-fi masterpiece exploring deep philosophical questions about reality and consciousness.';
        if (scoreValue >= 80) return 'A visually stunning and intellectually stimulating sci-fi experience.';
        return 'An engaging sci-fi film with intriguing concepts and solid execution.';
   }
   if (fromRevengeCollection) {
     if (scoreValue >= 90) return 'A brutal and devastating revenge masterpiece with visceral violence, profound moral complexity, and the soul-crushing cost of vengeance.';
     if (scoreValue >= 80) return 'A powerful revenge narrative with intense retribution, complex moral questions, and significant psychological impact.';
     return 'An engaging revenge story with satisfying payback and compelling character motivations.';
   }
   // Generic fallback
   if (scoreValue >= 90) return 'A transcendent masterpiece redefining narrative complexity.';
   if (scoreValue >= 80) return 'Sophisticated cinematic storytelling with advanced non-linear elements.';
   if (scoreValue >= 70) return 'Thoughtfully complex narrative with engaging mind-bending elements.';
   return 'Accessible complexity with subtle mind-bending elements rewarding careful viewing.';
 };

 const getBorderColor = () => {
   if (fromHboActionCollection) return 'border-red-600/40';
   if (fromHboRomanceCollection) return 'border-pink-500/40'; 
   if (fromHboMaxThrillerCollection) return 'border-red-500/40'; 
   if (fromHuluFamilyCollection) return 'border-yellow-400/40'; // ✅ Hulu Family Added
   if (fromHuluDramaCollection) return 'border-blue-500/40';
   if (fromHuluBestCollection) return 'border-amber-500/40'; 
   if (fromHuluThrillerCollection) return 'border-red-500/40';
   if (fromHuluSciFiCollection) return 'border-cyan-400/40'; 
   if (fromHuluComedyCollection) return 'border-yellow-400/40';
   if (fromHuluHorrorCollection) return 'border-red-600/40';
   if (fromHuluRomanceCollection) return 'border-pink-500/40';
   if (fromHuluActionCollection) return 'border-red-500/40';
   if (fromMatrixCollection) return 'border-emerald-400/40'; 
   if (fromSe7enCollection) return 'border-amber-700/40';
   if (fromRevengeCollection || fromWarFilmsCollection || fromDramaCollection) return 'border-red-400/40';
   if (fromInterstellarCollection || fromSciFiCollection || fromTimeTravelCollection) return 'border-cyan-400/40';
   if (fromHeistThrillerCollection) return 'border-amber-400/40';
   if (fromCrimeThrillerCollection) return 'border-slate-400/40'; 
   return 'border-yellow-400/40';
 };

 const getStarColor = () => {
   if (fromHboActionCollection) return 'text-red-600';
   if (fromHboRomanceCollection) return 'text-pink-500'; 
   if (fromHboMaxThrillerCollection) return 'text-red-500'; 
   if (fromHuluFamilyCollection) return 'text-yellow-400'; // ✅ Hulu Family Added
   if (fromHuluDramaCollection) return 'text-blue-500';
   if (fromHuluBestCollection) return 'text-amber-500'; 
   if (fromHuluThrillerCollection) return 'text-red-500';
   if (fromHuluSciFiCollection) return 'text-cyan-400'; 
   if (fromHuluComedyCollection) return 'text-yellow-400';
   if (fromHuluHorrorCollection) return 'text-red-600'; 
   if (fromHuluRomanceCollection) return 'text-pink-500'; 
   if (fromHuluActionCollection) return 'text-red-500';
   if (fromMatrixCollection) return 'text-emerald-400'; 
   if (fromSe7enCollection) return 'text-amber-600';
   if (fromRevengeCollection || fromWarFilmsCollection || fromDramaCollection) return 'text-red-400';
   if (fromSciFiCollection || fromInterstellarCollection || fromTimeTravelCollection) return 'text-cyan-400';
   if (fromHeistThrillerCollection) return 'text-amber-400';
   if (fromCrimeThrillerCollection) return 'text-slate-400';
   return 'text-yellow-400';
 };

  return (
    <motion.div
      className="space-y-12 mt-16"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center space-y-6">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extralight tracking-tight sm:tracking-wider text-white"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          {title}
        </motion.h2>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 sm:space-x-6 text-gray-400 text-xs sm:text-sm tracking-normal sm:tracking-wider uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span>{year}</span>
          <span>•</span>
          {/* 🔥 UPDATED TO USE DYNAMIC STATE */}
          <span>{dynamicMovieData.director}</span>
          <span>•</span>
          <span>{runtime}</span>
          <span>•</span>
          <span
            className="px-2 py-1 rounded border font-medium"
            style={{
              color: getAgeRatingColor(dynamicMovieData.ageRating),
              borderColor: getAgeRatingColor(dynamicMovieData.ageRating),
              backgroundColor: `${getAgeRatingColor(dynamicMovieData.ageRating)}15`
            }}
          >
            {dynamicMovieData.ageRating}
          </span>
        </motion.div>
      </div>

      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-r from-gray-800/30 to-gray-900/50 rounded-xl sm:rounded-2xl border border-yellow-400/20">
          <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
            <h3 className="text-lg sm:text-xl md:text-2xl font-light text-yellow-300">The Experience</h3>
          </div>
          <p className="text-gray-200 leading-relaxed text-sm sm:text-base md:text-lg">{getUniqueDescription()}</p>
        </div>
      </motion.div>

      {/* ✅ FIXED: Smaller, Equal Height Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        {/* CAST & CREW CARD */}
        <div className="p-3 sm:p-5 bg-gray-900/40 rounded-lg sm:rounded-xl border-l-2 border-yellow-400/50 h-full min-h-[160px] flex flex-col justify-start">
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
            <h3 className="text-sm sm:text-base font-light text-white">Cast & Crew</h3>
          </div>
          <div className="space-y-2 sm:space-y-3">
            {/* 🔥 UPDATED TO USE DYNAMIC STATE */}
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed"><span className="text-gray-500 font-medium block mb-0.5">Director:</span> {dynamicMovieData.director}</p>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed"><span className="text-gray-500 font-medium block mb-0.5">Starring:</span> {dynamicMovieData.cast}</p>
          </div>
        </div>

        {/* PRODUCTION DETAILS CARD */}
        <div className="p-3 sm:p-5 bg-gray-900/40 rounded-lg sm:rounded-xl border-l-2 border-blue-400/50 h-full min-h-[160px] flex flex-col justify-start">
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <Film className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
            <h3 className="text-sm sm:text-base font-light text-white">Production Details</h3>
          </div>
          <div className="space-y-2 sm:space-y-3">
            {/* 🔥 UPDATED TO USE DYNAMIC STATE */}
            <p className="text-gray-300 text-xs sm:text-sm"><span className="text-gray-500 font-medium block mb-0.5">Budget:</span> {dynamicMovieData.budget}</p>
            <p className="text-gray-300 text-xs sm:text-sm"><span className="text-gray-500 font-medium block mb-0.5">Box Office:</span> {dynamicMovieData.boxOffice}</p>
            <div className="text-gray-300 text-xs sm:text-sm">
              <span className="text-gray-500 font-medium block mb-0.5">Age Rating:</span>
              <span
                className="inline-block px-1.5 py-0.5 rounded border text-[10px] sm:text-xs font-medium mt-0.5"
                style={{
                  color: getAgeRatingColor(dynamicMovieData.ageRating),
                  borderColor: getAgeRatingColor(dynamicMovieData.ageRating),
                  backgroundColor: `${getAgeRatingColor(dynamicMovieData.ageRating)}15`
                }}
              >
                {dynamicMovieData.ageRating}
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      <EnhancedWhereToWatchSection movie={movie} />

      {!fromParasiteCollection && 
       !fromOldboyCollection && 
       !fromHeistThrillerCollection && 
       !fromDonnieDarkoCollection && 
       !fromBlackSwanCollection && 
       !fromEyesWideShutCollection && 
       !fromHuluBestCollection && (
        <motion.div
          className="mb-6 sm:mb-8 md:mb-12 bg-gradient-to-br from-gray-800/40 to-gray-900/60 rounded-lg sm:rounded-xl border border-gray-700/50 p-3 sm:p-4 md:p-8 shadow-2xl backdrop-blur-sm relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.01 }}
        >
          {/* Decorative corners */}
          {[
            { pos: 'top-2 left-2 sm:top-4 sm:left-4', border: 'border-t-2 border-l-2' },
            { pos: 'top-2 right-2 sm:top-4 sm:right-4', border: 'border-t-2 border-r-2' },
            { pos: 'bottom-2 left-2 sm:bottom-4 sm:left-4', border: 'border-b-2 border-l-2' },
            { pos: 'bottom-2 right-2 sm:bottom-4 sm:right-4', border: 'border-b-2 border-r-2' }
          ].map((corner, i) => (
            <div key={i} className={`absolute ${corner.pos} w-3 h-3 sm:w-5 sm:h-5 ${corner.border} ${getBorderColor()}`} />
          ))}

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 md:mb-8 gap-3 sm:gap-4 md:gap-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <Star className={`w-5 h-5 sm:w-6 sm:h-6 ${getStarColor()}`} />
              <h3 className="text-lg sm:text-xl md:text-2xl font-light text-gray-200 tracking-normal sm:tracking-wide uppercase">
                {getComplexityScoreTitle()}
              </h3>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
              <div className="text-right">
                <div className="text-2xl sm:text-3xl md:text-4xl font-extralight mb-0.5 sm:mb-1 tracking-normal sm:tracking-wider text-gray-200">{scoreValue}</div>
                <div className="text-xs text-gray-400 font-light tracking-normal sm:tracking-wide uppercase">{getComplexityIndexLabel()}</div>
              </div>
              <div className="text-right">
                <div className="text-2xl sm:text-3xl md:text-4xl font-extralight mb-0.5 sm:mb-1 tracking-normal sm:tracking-wider text-gray-200">{rating}</div>
                <div className="text-xs text-gray-400 font-light tracking-normal sm:tracking-wide uppercase">IMDB RATING</div>
              </div>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2 sm:mb-2.5">
                <span className="text-xs sm:text-sm text-gray-300 font-light tracking-normal sm:tracking-wider uppercase">{getComplexityLevelLabel()}</span>
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
                    <div key={mark} className={`w-0.5 sm:w-1 h-4 sm:h-7 rounded-full ${getBorderColor().replace('border', 'bg').replace('/40', '/30')}`} style={{ left: `${mark}%` }} />
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

      {/* ✅ VISIBLE GRAPHS (For Humans) */}
      <EnhancedIntensityGraph scenes={safeMovieInfo.scenes} dominantColor={safeMovieInfo.dominantColor} />
      <StrategicDNAHelix dna={safeMovieInfo.dna} dominantColor={safeMovieInfo.dominantColor} />

      {/* 🔥🔥🔥 NEW: HIDDEN SEO LISTS (For Bots/LLMs) 🔥🔥🔥 */}
      <div className="sr-only">
        <h3>Genre DNA Distribution</h3>
        <ul>
          {Object.entries(safeMovieInfo.dna || {}).map(([key, value]) => (
            <li key={key}>{key}: {value}%</li>
          ))}
        </ul>
        <h3>Movie Intensity Arc</h3>
        <ul>
          {safeMovieInfo.scenes?.map((scene, idx) => (
            <li key={idx}>Minute {scene.time}: {scene.label} ({scene.intensity}/100 Intensity)</li>
          ))}
        </ul>
      </div>

      <RealCommentsRatingSection movie={movie} />

      {/* FAQ SECTIONS */}
      {fromHboActionCollection ? <HboActionSEOFAQSection movie={movie} />
        : fromHboRomanceCollection ? <HboMaxRomanceSEOFAQSection movie={movie} /> 
        : fromHboMaxThrillerCollection ? <HboMaxThrillerSEOFAQSection movie={movie} /> 
        : fromHuluFamilyCollection ? <HuluFamilySEOFAQSection movie={movie} /> // ✅ Hulu Family FAQ Added
        : fromHuluDramaCollection ? <HuluDramaSEOFAQSection movie={movie} />
        : fromHuluBestCollection ? <HuluBestSEOFAQSection movie={movie} />
        : fromHuluThrillerCollection ? <HuluThrillerSEOFAQSection movie={movie} />
        : fromHuluSciFiCollection ? <HuluSciFiSEOFAQSection movie={movie} />
        : fromHuluComedyCollection ? <HuluComedySEOFAQSection movie={movie} />
        : fromHuluHorrorCollection ? <HuluHorrorSEOFAQSection movie={movie} /> 
        : fromHuluRomanceCollection ? <HuluRomanceSEOFAQSection movie={movie} /> 
        : fromHuluActionCollection ? <HuluActionSEOFAQSection movie={movie} />
        : fromDonnieDarkoCollection ? <DonnieDarkoSEOFAQSection movie={movie} />
        : fromParasiteCollection ? <ParasiteSEOFAQSection movie={movie} />
        : fromMatrixCollection ? <MatrixSEOFAQSection movie={movie} />
        : fromOldboyCollection ? <OldboySEOFAQSection movie={movie} />
        : fromBlackSwanCollection ? <BlackSwanSEOFAQSection movie={movie} />
        : fromEyesWideShutCollection ? <EyesWideShutSEOFAQSection movie={movie} />
        : fromSe7enCollection ? <Se7enSEOFAQSection movie={movie} />
        : fromRevengeCollection ? <RevengeMovieSEOFAQSection movie={movie} />
        : fromWarFilmsCollection ? <WarFilmsSEOFAQSection movie={movie} />
        : fromSciFiCollection ? <SciFiSEOFAQSection movie={movie} />
        : fromTimeTravelCollection ? <TimeTravelSEOFAQSection movie={movie} />
        : fromInterstellarCollection ? <InterstellarSEOFAQSection movie={movie} />
        : fromHeistThrillerCollection ? <HeistThrillerSEOFAQSection movie={movie} />
        : fromCrimeThrillerCollection ? <CrimeThrillerSEOFAQSection movie={movie} />
        : fromDetectiveThrillerCollection ? <DetectiveThrillerSEOFAQSection movie={movie} />
        : fromMysteryThrillerCollection ? <MysteryThrillerSEOFAQSection movie={movie} />
        : fromPsychologicalThrillerCollection ? <PsychThrillerSEOFAQSection movie={movie} />
        : fromThrillerCollection ? <ThrillerSEOFAQSection movie={movie} />
        : fromSurvivalCollection ? <SurvivalSEOFAQSection movie={movie} />
        : fromDramaCollection ? <DramaSEOFAQSection movie={movie} />
        : fromInceptionCollection ? <SEOFAQSection movie={movie} />
        : fromShutterIslandCollection ? <ShutterIslandSEOFAQSection movie={movie} />
        : fromMementoCollection ? <MementoSEOFAQSection movie={movie} />
        : <SEOFAQSection movie={movie} />
      }
    </motion.div>
  );
});

MovieDetailsSection.displayName = 'MovieDetailsSection';
export default MovieDetailsSection;