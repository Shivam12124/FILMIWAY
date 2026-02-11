// components/MovieDetailsSection.js - AUTO-FETCH ALL DATA INCLUDING SYNOPSIS ✅

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
  COMPLETE_MOVIE_DATA as HBO_MAX_FAMILY_MOVIE_DATA, 
  SENSITIVE_TIMELINES as HBO_MAX_FAMILY_SENSITIVE_TIMELINES 
} from '../utils/hboMaxFamilyMovieData';
import { 
  COMPLETE_MOVIE_DATA as HBO_MAX_SCIFI_MOVIE_DATA, 
  SENSITIVE_TIMELINES as HBO_MAX_SCIFI_SENSITIVE_TIMELINES 
} from '../utils/hboMaxSciFiMovieData';
import { 
  COMPLETE_MOVIE_DATA as HBO_MAX_HORROR_MOVIE_DATA, 
  SENSITIVE_TIMELINES as HBO_MAX_HORROR_SENSITIVE_TIMELINES 
} from '../utils/hboMaxHorrorMovieData';
import { 
  COMPLETE_MOVIE_DATA as HBO_MAX_BEST_MOVIE_DATA, 
  SENSITIVE_TIMELINES as HBO_MAX_BEST_SENSITIVE_TIMELINES 
} from '../utils/hboMaxBestMoviesData';
import { 
  COMPLETE_MOVIE_DATA as HBO_MAX_DRAMA_MOVIE_DATA, 
  SENSITIVE_TIMELINES as HBO_MAX_DRAMA_SENSITIVE_TIMELINES 
} from '../utils/hboMaxDramaMovieData';
import { 
  COMPLETE_MOVIE_DATA as HBO_MAX_COMEDY_MOVIE_DATA, 
  SENSITIVE_TIMELINES as HBO_MAX_COMEDY_SENSITIVE_TIMELINES 
} from '../utils/hboMaxComedyMovieData';

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
  SENSITIVE_TIMELINES as HULU_BEST_SENSITIVE_TIMELINES 
} from '../utils/huluBestMoviesData';
import { 
  COMPLETE_MOVIE_DATA as HULU_DRAMA_MOVIE_DATA, 
  SENSITIVE_TIMELINES as HULU_DRAMA_SENSITIVE_TIMELINES 
} from '../utils/huluDramaMovieData';
import { 
  COMPLETE_MOVIE_DATA as HULU_FAMILY_MOVIE_DATA, 
  SENSITIVE_TIMELINES as HULU_FAMILY_SENSITIVE_TIMELINES 
} from '../utils/huluFamilyMovieData';

import { 
  COMPLETE_MOVIE_DATA as PARAMOUNT_ACTION_MOVIE_DATA, 
  SENSITIVE_TIMELINES as PARAMOUNT_ACTION_SENSITIVE_TIMELINES 
} from '../utils/paramountActionMovieData';

import { 
  COMPLETE_MOVIE_DATA as PARAMOUNT_SCIFI_MOVIE_DATA, 
  SENSITIVE_TIMELINES as PARAMOUNT_SCIFI_SENSITIVE_TIMELINES 
} from '../utils/paramountSciFiMovieData';

import { 
  COMPLETE_MOVIE_DATA as PARAMOUNT_ROMANCE_MOVIE_DATA, 
  SENSITIVE_TIMELINES as PARAMOUNT_ROMANCE_SENSITIVE_TIMELINES 
} from '../utils/paramountRomanceMovieData';

import { 
  COMPLETE_MOVIE_DATA as PARAMOUNT_DRAMA_MOVIE_DATA, 
  SENSITIVE_TIMELINES as PARAMOUNT_DRAMA_SENSITIVE_TIMELINES 
} from '../utils/paramountDramaMovieData';

import { 
  COMPLETE_MOVIE_DATA as PARAMOUNT_THRILLER_MOVIE_DATA, 
  SENSITIVE_TIMELINES as PARAMOUNT_THRILLER_SENSITIVE_TIMELINES 
} from '../utils/paramountThrillerMovieData';

import { 
  COMPLETE_MOVIE_DATA as PARAMOUNT_FAMILY_MOVIE_DATA, 
  SENSITIVE_TIMELINES as PARAMOUNT_FAMILY_SENSITIVE_TIMELINES 
} from '../utils/paramountFamilyMovieData';

import {
  COMPLETE_MOVIE_DATA as PARAMOUNT_HORROR_MOVIE_DATA,
  SENSITIVE_TIMELINES as PARAMOUNT_HORROR_SENSITIVE_TIMELINES
} from '../utils/paramountHorrorMovieData';

import {
  COMPLETE_MOVIE_DATA as PARAMOUNT_COMEDY_MOVIE_DATA,
  SENSITIVE_TIMELINES as PARAMOUNT_COMEDY_SENSITIVE_TIMELINES
} from '../utils/paramountComedyMovieData';

// ✅ NEW: Paramount Best Movies Import
import { 
  COMPLETE_MOVIE_DATA as PARAMOUNT_BEST_MOVIE_DATA, 
  SENSITIVE_TIMELINES as PARAMOUNT_BEST_SENSITIVE_TIMELINES 
} from '../utils/paramountBestMoviesData';

import {
  COMPLETE_MOVIE_DATA as PEACOCK_ACTION_ADVENTURE_MOVIE_DATA,
  SENSITIVE_TIMELINES as PEACOCK_ACTION_ADVENTURE_SENSITIVE_TIMELINES
} from '../utils/peacockActionAdventureData';

import {
  COMPLETE_MOVIE_DATA as PEACOCK_SCIFI_MOVIE_DATA,
  SENSITIVE_TIMELINES as PEACOCK_SCIFI_SENSITIVE_TIMELINES
} from '../utils/peacockSciFiMovieData';

import {
  COMPLETE_MOVIE_DATA as PEACOCK_ROMANCE_MOVIE_DATA,
  SENSITIVE_TIMELINES as PEACOCK_ROMANCE_SENSITIVE_TIMELINES
} from '../utils/peacockRomanceMovieData';

import {
  COMPLETE_MOVIE_DATA as PEACOCK_FAMILY_MOVIE_DATA,
  SENSITIVE_TIMELINES as PEACOCK_FAMILY_SENSITIVE_TIMELINES
} from '../utils/peacockFamilyMovieData';

import {
  COMPLETE_MOVIE_DATA as PEACOCK_DRAMA_MOVIE_DATA,
  SENSITIVE_TIMELINES as PEACOCK_DRAMA_SENSITIVE_TIMELINES
} from '../utils/peacockDramaMovieData';

import {
  COMPLETE_MOVIE_DATA as PEACOCK_THRILLER_MOVIE_DATA,
  SENSITIVE_TIMELINES as PEACOCK_THRILLER_SENSITIVE_TIMELINES
} from '../utils/peacockThrillerMovieData';

import {
  COMPLETE_MOVIE_DATA as PEACOCK_BEST_MOVIE_DATA,
  SENSITIVE_TIMELINES as PEACOCK_BEST_SENSITIVE_TIMELINES
} from '../utils/peacockBestMoviesData';

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
import  { 
  COMPLETE_MOVIE_DATA as SCI_FI_MOVIE_DATA, 
  SENSITIVE_TIMELINES as SCI_FI_SENSITIVE_TIMELINES 
} from '../utils/sciFiMovieData';
import { 
  COMPLETE_MOVIE_DATA as REVENGE_MOVIE_DATA,
  SENSITIVE_TIMELINES as REVENGE_SENSITIVE_TIMELINES 
} from '../utils/revengeMovieData';
import { COMPLETE_MOVIE_DATA as WAR_FILMS_MOVIE_DATA } from '../utils/warFilmsMovieData';
import { 
  COMPLETE_MOVIE_DATA as THRILLER_MOVIE_DATA,
  SENSITIVE_TIMELINES as THRILLER_SENSITIVE_TIMELINES 
} from '../utils/thrillerMovieData';
import { 
  COMPLETE_MOVIE_DATA as MYSTERY_THRILLER_MOVIE_DATA,
  SENSITIVE_TIMELINES as MYSTERY_THRILLER_SENSITIVE_TIMELINES 
} from '../utils/mysteryThrillerMovieData';
import { 
  COMPLETE_MOVIE_DATA as DETECTIVE_THRILLER_MOVIE_DATA,
  SENSITIVE_TIMELINES as DETECTIVE_THRILLER_SENSITIVE_TIMELINES 
} from '../utils/detectiveThrillerMovieData';
import { 
  COMPLETE_MOVIE_DATA as PSYCH_THRILLER_MOVIE_DATA,
  SENSITIVE_TIMELINES as PSYCH_THRILLER_SENSITIVE_TIMELINES 
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
import HboMaxFamilySEOFAQSection from './HboMaxFamilySEOFAQSection';
import HboMaxSciFiSEOFAQSection from './HboMaxSciFiSEOFAQSection'; 
import HboMaxHorrorSEOFAQSection from './HboMaxHorrorSEOFAQSection'; 
import HboMaxBestSEOFAQSection from './HboMaxBestSEOFAQSection';
import HboMaxDramaSEOFAQSection from './HboMaxDramaSEOFAQSection';
import HboMaxComedySEOFAQSection from './HboMaxComedySEOFAQSection';

import HuluActionSEOFAQSection from './HuluActionSEOFAQSection';
import HuluRomanceSEOFAQSection from './HuluRomanceSEOFAQSection';
import HuluHorrorSEOFAQSection from './HuluHorrorSEOFAQSection';
import HuluComedySEOFAQSection from './HuluComedySEOFAQSection';
import HuluSciFiSEOFAQSection from './HuluSciFiSEOFAQSection';
import HuluThrillerSEOFAQSection from './HuluThrillerSEOFAQSection';
import HuluBestSEOFAQSection from './HuluBestSEOFAQSection';
import HuluDramaSEOFAQSection from './HuluDramaSEOFAQSection';
import HuluFamilySEOFAQSection from './HuluFamilySEOFAQSection';

import ParamountActionSEOFAQSection from './ParamountActionSEOFAQSection';
import ParamountSciFiSEOFAQSection from './ParamountSciFiSEOFAQSection';
import ParamountRomanceSEOFAQSection from './ParamountRomanceSEOFAQSection';
import ParamountDramaSEOFAQSection from './ParamountDramaSEOFAQSection';
import ParamountThrillerSEOFAQSection from './ParamountThrillerSEOFAQSection';
import ParamountFamilySEOFAQSection from './ParamountFamilySEOFAQSection';
import ParamountHorrorSEOFAQSection from './ParamountHorrorSEOFAQSection';
import ParamountComedySEOFAQSection from './ParamountComedySEOFAQSection';
// ✅ NEW: Paramount Best FAQ Import
import ParamountBestSEOFAQSection from './ParamountBestSEOFAQSection';
import PeacockActionAdventureSEOFAQSection from './PeacockActionAdventureSEOFAQSection';
import PeacockSciFiSEOFAQSection from './PeacockSciFiSEOFAQSection';
import PeacockRomanceSEOFAQSection from './PeacockRomanceSEOFAQSection';
import PeacockFamilySEOFAQSection from './PeacockFamilySEOFAQSection';
import PeacockDramaSEOFAQSection from './PeacockDramaSEOFAQSection';
import PeacockThrillerSEOFAQSection from './PeacockThrillerSEOFAQSection';
import PeacockBestSEOFAQSection from './PeacockBestSEOFAQSection';

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
  fromDramaCollection,
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
  fromHboMaxFamilyCollection, 
  fromHboMaxSciFiCollection, 
  fromHboMaxHorrorCollection,
  fromHboMaxBestCollection,
  fromHboMaxDramaCollection,
  fromHboMaxComedyCollection,
  fromHuluActionCollection,
  fromHuluRomanceCollection,
  fromHuluHorrorCollection,
  fromHuluComedyCollection,
  fromHuluSciFiCollection,
  fromHuluThrillerCollection,
  fromHuluBestCollection,
  fromHuluDramaCollection,
  fromHuluFamilyCollection,
  fromParamountActionCollection,
  fromParamountSciFiCollection,
  fromParamountRomanceCollection,
  fromParamountDramaCollection,
  fromParamountThrillerCollection,
  fromParamountFamilyCollection, 
  fromParamountHorrorCollection,
  fromParamountComedyCollection,
  fromParamountBestCollection, // ✅ NEW PROP
  fromPeacockActionAdventureCollection,
  fromPeacockSciFiCollection,
  fromPeacockRomanceCollection,
  fromPeacockFamilyCollection,
  fromPeacockDramaCollection,
  fromPeacockThrillerCollection,
  fromPeacockBestCollection,
}) => {

 if (!movie) return null;

 const safeLookup = (collection, id) => (collection && id && collection[id]) || null;

 // ✅ UNIFIED MOVIE INFO LOOKUP
 const movieInfo = fromHboActionCollection ? safeLookup(HBO_ACTION_MOVIE_DATA, movie.tmdbId) 
  : fromHboRomanceCollection ? safeLookup(HBO_ROMANCE_MOVIE_DATA, movie.tmdbId)
  : fromHboMaxThrillerCollection ? safeLookup(HBO_MAX_THRILLER_MOVIE_DATA, movie.tmdbId)
  : fromHboMaxFamilyCollection ? safeLookup(HBO_MAX_FAMILY_MOVIE_DATA, movie.tmdbId) 
  : fromHboMaxSciFiCollection ? safeLookup(HBO_MAX_SCIFI_MOVIE_DATA, movie.tmdbId) 
  : fromHboMaxHorrorCollection ? safeLookup(HBO_MAX_HORROR_MOVIE_DATA, movie.tmdbId)
  : fromHboMaxBestCollection ? safeLookup(HBO_MAX_BEST_MOVIE_DATA, movie.tmdbId)
  : fromHboMaxDramaCollection ? safeLookup(HBO_MAX_DRAMA_MOVIE_DATA, movie.tmdbId)
  : fromHboMaxComedyCollection ? safeLookup(HBO_MAX_COMEDY_MOVIE_DATA, movie.tmdbId)
  : fromHuluFamilyCollection ? safeLookup(HULU_FAMILY_MOVIE_DATA, movie.tmdbId)
  : fromHuluDramaCollection ? safeLookup(HULU_DRAMA_MOVIE_DATA, movie.tmdbId)
  : fromHuluBestCollection ? safeLookup(HULU_BEST_MOVIE_DATA, movie.tmdbId)
  : fromHuluThrillerCollection ? safeLookup(HULU_THRILLER_MOVIE_DATA, movie.tmdbId)
  : fromHuluSciFiCollection ? safeLookup(HULU_SCIFI_MOVIE_DATA, movie.tmdbId)
  : fromHuluComedyCollection ? safeLookup(HULU_COMEDY_MOVIE_DATA, movie.tmdbId)
  : fromHuluHorrorCollection ? safeLookup(HULU_HORROR_MOVIE_DATA, movie.tmdbId)
  : fromHuluRomanceCollection ? safeLookup(HULU_ROMANCE_MOVIE_DATA, movie.tmdbId)
  : fromHuluActionCollection ? safeLookup(HULU_ACTION_MOVIE_DATA, movie.tmdbId)
  : fromParamountActionCollection ? safeLookup(PARAMOUNT_ACTION_MOVIE_DATA, movie.tmdbId)
  : fromParamountSciFiCollection ? safeLookup(PARAMOUNT_SCIFI_MOVIE_DATA, movie.tmdbId)
  : fromParamountRomanceCollection ? safeLookup(PARAMOUNT_ROMANCE_MOVIE_DATA, movie.tmdbId) 
  : fromParamountDramaCollection ? safeLookup(PARAMOUNT_DRAMA_MOVIE_DATA, movie.tmdbId)
  : fromParamountThrillerCollection ? safeLookup(PARAMOUNT_THRILLER_MOVIE_DATA, movie.tmdbId)
  : fromParamountFamilyCollection ? safeLookup(PARAMOUNT_FAMILY_MOVIE_DATA, movie.tmdbId) 
  : fromParamountHorrorCollection ? safeLookup(PARAMOUNT_HORROR_MOVIE_DATA, movie.tmdbId)
  : fromParamountComedyCollection ? safeLookup(PARAMOUNT_COMEDY_MOVIE_DATA, movie.tmdbId)
  : fromParamountBestCollection ? safeLookup(PARAMOUNT_BEST_MOVIE_DATA, movie.tmdbId) // ✅ ADDED
  : fromPeacockActionAdventureCollection ? safeLookup(PEACOCK_ACTION_ADVENTURE_MOVIE_DATA, movie.tmdbId)
  : fromPeacockSciFiCollection ? safeLookup(PEACOCK_SCIFI_MOVIE_DATA, movie.tmdbId)
  : fromPeacockRomanceCollection ? safeLookup(PEACOCK_ROMANCE_MOVIE_DATA, movie.tmdbId)
  : fromPeacockFamilyCollection ? safeLookup(PEACOCK_FAMILY_MOVIE_DATA, movie.tmdbId)
  : fromPeacockDramaCollection ? safeLookup(PEACOCK_DRAMA_MOVIE_DATA, movie.tmdbId)
  : fromPeacockThrillerCollection ? safeLookup(PEACOCK_THRILLER_MOVIE_DATA, movie.tmdbId)
  : fromPeacockBestCollection ? safeLookup(PEACOCK_BEST_MOVIE_DATA, movie.tmdbId)
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

 // Helper for initial synopsis
 const getUniqueDescription = () => {
   if (safeMovieInfo?.synopsis) return safeMovieInfo.synopsis;
   const t = title.toLowerCase();
   
   if (t.includes('oldboy')) return "After 15 years of mysterious imprisonment, Oh Dae-su is released and seeks vengeance against his unknown captor.";
   if (t.includes('parasite')) return "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.";
   
   return "A compelling exploration of cinema.";
 };

 const year = movie.Year || movie.year || '20XX';
 const runtime = safeMovieInfo.runtime || movie.Runtime || '120 min';
 const rating = safeMovieInfo.rating || movie.imdbRating || 7.5;

 // 🔥🔥🔥 AUTO-FETCH LOGIC FOR ALL MOVIE DATA INCLUDING SYNOPSIS 🔥🔥🔥
 const [dynamicMovieData, setDynamicMovieData] = useState({
   director: safeMovieInfo.director || movie.Director || 'Unknown Director',
   cast: safeMovieInfo.cast?.join(', ') || '',
   budget: safeMovieInfo.budget || 'N/A',
   boxOffice: safeMovieInfo.boxOffice || 'N/A',
   ageRating: safeMovieInfo.ageRating || 'Rated',
   synopsis: safeMovieInfo.synopsis || movie.Plot || getUniqueDescription() // ✅ Added synopsis to state
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

           // ✅ Fetch Synopsis from TMDB
           const newSynopsis = details.overview ? details.overview : dynamicMovieData.synopsis;

           setDynamicMovieData({
               director: newDirector,
               cast: topCast,
               budget: newBudget,
               boxOffice: newRevenue,
               ageRating: newRating,
               synopsis: newSynopsis // ✅ Update state with TMDB synopsis
           });

       } catch (error) {
           console.error("TMDB Auto-Fetch Failed:", error);
       }
   };

   fetchAllData();
 }, [movie.tmdbId]);

 // ✅ UNIFIED SENSITIVE SCENES LOOKUP
 const sensitiveScenes = safeMovieInfo.sensitiveScenes 
   || HBO_ACTION_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes 
   || HBO_ROMANCE_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes 
   || HBO_MAX_THRILLER_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes 
   || HBO_MAX_FAMILY_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes 
   || HBO_MAX_SCIFI_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes 
   || HBO_MAX_HORROR_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes 
   || HBO_MAX_BEST_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes
   || HBO_MAX_DRAMA_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes
   || HBO_MAX_COMEDY_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes
   || HULU_FAMILY_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes 
   || HULU_DRAMA_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes 
   || HULU_BEST_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes 
   || HULU_THRILLER_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes
   || HULU_SCIFI_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes 
   || HULU_COMEDY_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes
   || HULU_HORROR_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes 
   || HULU_ROMANCE_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes
   || HULU_ACTION_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes
   || PARAMOUNT_ACTION_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes
   || PARAMOUNT_SCIFI_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes
   || PARAMOUNT_ROMANCE_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes 
   || PARAMOUNT_DRAMA_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes
   || PARAMOUNT_THRILLER_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes
   || PARAMOUNT_FAMILY_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes 
   || PARAMOUNT_HORROR_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes
   || PARAMOUNT_COMEDY_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes
   || PARAMOUNT_BEST_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes // ✅ ADDED
   || PEACOCK_ACTION_ADVENTURE_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes
   || PEACOCK_SCIFI_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes
   || PEACOCK_ROMANCE_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes
   || PEACOCK_FAMILY_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes
   || PEACOCK_DRAMA_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes
   || PEACOCK_THRILLER_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes
   || PEACOCK_BEST_SENSITIVE_TIMELINES?.[movie?.tmdbId]?.scenes
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
   : fromHboMaxFamilyCollection ? movie.funFactor ?? safeMovieInfo.funFactor ?? 0
   : fromHboMaxSciFiCollection ? movie.spectacularLevel ?? safeMovieInfo.spectacularLevel ?? 0 
   : fromHboMaxHorrorCollection ? movie.scariness ?? safeMovieInfo.scariness ?? 0
   : fromHboMaxBestCollection ? movie.cinematicMastery ?? safeMovieInfo.cinematicMastery ?? 0
   : fromHboMaxDramaCollection ? movie.emotionalIntensity ?? safeMovieInfo.emotionalIntensity ?? 0
   : fromHboMaxComedyCollection ? movie.laughterIndex ?? safeMovieInfo.laughterIndex ?? 0
   : fromHuluFamilyCollection ? movie.wholesomeScore ?? safeMovieInfo.wholesomeScore ?? 0
   : fromHuluDramaCollection ? movie.emotionalIntensity ?? safeMovieInfo.emotionalIntensity ?? 0
   : fromHuluBestCollection ? movie.adrenalineScore ?? safeMovieInfo.adrenalineScore ?? 0 
   : fromHuluThrillerCollection ? movie.suspenseIntensity ?? safeMovieInfo.suspenseIntensity ?? 0
   : fromHuluSciFiCollection ? movie.visualSpectacle ?? safeMovieInfo.visualSpectacle ?? 0 
   : fromHuluComedyCollection ? movie.laughterIndex ?? safeMovieInfo.laughterIndex ?? 0 
   : fromHuluHorrorCollection ? movie.scariness ?? safeMovieInfo.scariness ?? 0 
   : fromHuluRomanceCollection ? movie.romanticIntensity ?? safeMovieInfo.romanticIntensity ?? 0 
   : fromHuluActionCollection ? movie.adrenalineScore ?? safeMovieInfo.adrenalineScore ?? 0
   : fromParamountActionCollection ? movie.adrenalineScore ?? safeMovieInfo.adrenalineScore ?? 0
   : fromParamountSciFiCollection ? movie.sciFiComplexity ?? safeMovieInfo.sciFiComplexity ?? 0
   : fromParamountRomanceCollection ? movie.emotionalIntensity ?? safeMovieInfo.emotionalIntensity ?? 0
   : fromParamountDramaCollection ? movie.emotionalIntensity ?? safeMovieInfo.emotionalIntensity ?? 0
   : fromParamountThrillerCollection ? movie.suspenseIntensity ?? safeMovieInfo.suspenseIntensity ?? 0
   : fromParamountFamilyCollection ? movie.funFactor ?? safeMovieInfo.funFactor ?? 0
   : fromParamountHorrorCollection ? movie.scariness ?? safeMovieInfo.scariness ?? 0
   : fromParamountComedyCollection ? movie.laughterIndex ?? safeMovieInfo.laughterIndex ?? 0
   : fromParamountBestCollection ? movie.cinematicMastery ?? safeMovieInfo.cinematicMastery ?? 0 // ✅ ADDED
   : fromPeacockActionAdventureCollection ? movie.adrenalineScore ?? safeMovieInfo.adrenalineScore ?? 0
   : fromPeacockSciFiCollection ? movie.sciFiComplexity ?? safeMovieInfo.sciFiComplexity ?? 0
   : fromPeacockRomanceCollection ? movie.emotionalIntensity ?? safeMovieInfo.emotionalIntensity ?? 0
   : fromPeacockFamilyCollection ? movie.wholesomeScore ?? safeMovieInfo.wholesomeScore ?? 0
   : fromPeacockDramaCollection ? movie.emotionalIntensity ?? safeMovieInfo.emotionalIntensity ?? 0
   : fromPeacockThrillerCollection ? movie.suspenseIntensity ?? safeMovieInfo.suspenseIntensity ?? 0
   : fromPeacockBestCollection ? movie.cinematicMastery ?? safeMovieInfo.cinematicMastery ?? 0
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
   : fromInterstellarCollection ? movie. cosmicScale ?? safeMovieInfo. cosmicScale ?? 0
   : fromTimeTravelCollection ? movie.complexityScore ?? safeMovieInfo.complexityScore ?? 0
   : fromHeistThrillerCollection ? movie.heistComplexity ?? safeMovieInfo.heistComplexity ?? 0
   : fromCrimeThrillerCollection ? movie. crimeIntensity ?? safeMovieInfo. crimeIntensity ?? 0
   : fromMysteryThrillerCollection ? movie.psychologicalTension ?? safeMovieInfo.psychologicalTension ?? 0
   : fromDetectiveThrillerCollection ? movie.psychologicalTension?? safeMovieInfo.psychologicalTension?? 0
   : fromPsychologicalThrillerCollection 
  ? movie.sanityErosion ?? safeMovieInfo.sanityErosion ?? 0
   : fromDramaCollection ? movie.emotionalIntensity ?? safeMovieInfo.emotionalIntensity ?? 0
   : fromThrillerCollection ? movie.suspenseIntensity ?? safeMovieInfo.suspenseIntensity ?? 0
   : fromSurvivalCollection ? movie.survivabilityIndex ?? safeMovieInfo.survivabilityIndex ?? 0
   : fromInceptionCollection ? movie.mindBendingIndex ?? safeMovieInfo.mindBendingIndex ?? 0
   : safeMovieInfo.mindBendingIndex ?? 0;

 const complexityLevel = safeMovieInfo.complexityLevel || 'HIGH';

 const getComplexityColor = (level) => {
   if (fromHboActionCollection) {
        switch (level) {
     case 'EXTREME': return '#ea0808ff';
     case 'HIGH': return '#eb7a09ff';
     case 'MEDIUM': return '#8d7708ff';
     default: return '#6b7280';
        }
   }
   if (fromHboRomanceCollection) { 
        switch (level) {
     case 'EXTREME': return '#ea0808ff';
     case 'HIGH': return '#eb7a09ff';
     case 'MEDIUM': return '#8d7708ff';
     default: return '#6b7280';
        }
   }
      if (fromHboMaxThrillerCollection) {
           switch (level) {
        case 'EXTREME': return '#ea0808ff';
        case 'HIGH': return '#eb7a09ff';
        case 'MEDIUM': return '#8d7708ff';
        default: return '#6b7280';
           }
      }
      if (fromHboMaxFamilyCollection || fromHuluFamilyCollection || fromParamountFamilyCollection || fromPeacockFamilyCollection) {        switch (level) {
     case 'EXTREME': return '#ea0808ff';
     case 'HIGH': return '#eb7a09ff';
     case 'MEDIUM': return '#8d7708ff';
     default: return '#6b7280';
        }
   }
   if (fromHboMaxSciFiCollection) { 
        switch (level) {
     case 'EXTREME': return '#ea0808ff';
     case 'HIGH': return '#eb7a09ff';
     case 'MEDIUM': return '#8d7708ff';
     default: return '#6b7280';
        }
   }
   if (fromHboMaxHorrorCollection || fromParamountHorrorCollection) { 
        switch (level) {
     case 'EXTREME': return '#ea0808ff';
     case 'HIGH': return '#eb7a09ff';
     case 'MEDIUM': return '#8d7708ff';
     default: return '#6b7280';
        }
   }
   if (fromHboMaxBestCollection || fromParamountBestCollection || fromPeacockBestCollection) { // ✅ ADDED
        switch (level) {
     case 'EXTREME': return '#ea0808ff';
     case 'HIGH': return '#eb7a09ff';
     case 'MEDIUM': return '#8d7708ff';
     default: return '#6b7280';
        }
   }
   if (fromHboMaxDramaCollection || fromParamountDramaCollection) { 
        switch (level) {
     case 'EXTREME': return '#ea0808ff';
     case 'HIGH': return '#eb7a09ff';
     case 'MEDIUM': return '#8d7708ff';
     default: return '#6b7280';
        }
   }
   if (fromHboMaxComedyCollection || fromParamountComedyCollection) {
        switch (level) {
     case 'EXTREME': return '#ea0808ff';
     case 'HIGH': return '#eb7a09ff';
     case 'MEDIUM': return '#8d7708ff';
     default: return '#6b7280';
        }
   }
   if (fromHuluDramaCollection || fromPeacockDramaCollection) { 
        switch (level) {
     case 'EXTREME': return '#ea0808ff';
     case 'HIGH': return '#eb7a09ff';
     case 'MEDIUM': return '#8d7708ff';
     default: return '#6b7280';
        }
   }
   if (fromHuluBestCollection) { 
        switch (level) {
     case 'EXTREME': return '#ea0808ff';
     case 'HIGH': return '#eb7a09ff';
     case 'MEDIUM': return '#8d7708ff';
     default: return '#6b7280';
        }
   }
   if (fromHuluThrillerCollection || fromParamountThrillerCollection || fromPeacockThrillerCollection) { 
        switch (level) {
     case 'EXTREME': return '#ea0808ff';
     case 'HIGH': return '#eb7a09ff';
     case 'MEDIUM': return '#8d7708ff';
     default: return '#6b7280';
        }
   }
   if (fromHuluSciFiCollection) { 
        switch (level) {
     case 'EXTREME': return '#ea0808ff';
     case 'HIGH': return '#eb7a09ff';
     case 'MEDIUM': return '#8d7708ff';
     default: return '#6b7280';
        }
   }
   if (fromHuluComedyCollection) {
        switch (level) {
     case 'EXTREME': return '#ea0808ff';
     case 'HIGH': return '#eb7a09ff';
     case 'MEDIUM': return '#8d7708ff';
     default: return '#6b7280';
        }
   }
   if (fromHuluHorrorCollection) {
        switch (level) {
     case 'EXTREME': return '#ea0808ff';
     case 'HIGH': return '#eb7a09ff';
     case 'MEDIUM': return '#8d7708ff';
     default: return '#6b7280';
        }
   }
   if (fromHuluRomanceCollection) {
        switch (level) {
     case 'EXTREME': return '#ea0808ff';
     case 'HIGH': return '#eb7a09ff';
     case 'MEDIUM': return '#8d7708ff';
     default: return '#6b7280';
        }
   }
   if (fromHuluActionCollection || fromParamountActionCollection || fromPeacockActionAdventureCollection) {
        switch (level) {
     case 'EXTREME': return '#ea0808ff';
     case 'HIGH': return '#eb7a09ff';
     case 'MEDIUM': return '#8d7708ff';
     default: return '#6b7280';
        }
   }
   if (fromParamountSciFiCollection || fromPeacockSciFiCollection) {
        switch (level) {
     case 'EXTREME': return '#ea0808ff';
     case 'HIGH': return '#eb7a09ff';
     case 'MEDIUM': return '#8d7708ff';
     default: return '#6b7280';
        }
   }
   if (fromParamountRomanceCollection || fromPeacockRomanceCollection) { 
        switch (level) {
     case 'EXTREME': return '#ea0808ff';
     case 'HIGH': return '#eb7a09ff';
     case 'MEDIUM': return '#8d7708ff';
     default: return '#6b7280'; 
        }
   }
   if (fromMatrixCollection) {
        switch (level) {
     case 'EXTREME': return '#ea0808ff';
     case 'HIGH': return '#eb7a09ff';
     case 'MEDIUM': return '#8d7708ff';
     default: return '#6b7280';
        }
   }
if (fromPsychologicalThrillerCollection) {
      switch (level) {
        case 'EXTREME': return '#7f1d1d'; // Deep Blood Red for total sanity loss
        case 'HIGH': return '#b91c1c';    // Intense Red
        case 'MEDIUM': return '#c2410c';  // Orange-Red
        default: return '#6b7280';
      }
    }

    if (fromInterstellarCollection) {
      switch (level) {
        case 'EXTREME': return '#7f1d1d'; // Deep Blood Red for total sanity loss
        case 'HIGH': return '#b91c1c';    // Intense Red
        case 'MEDIUM': return '#c2410c';  // Orange-Red
        default: return '#6b7280';
      }
    }

   if (fromRevengeCollection || fromWarFilmsCollection || fromDramaCollection) {
     switch (level) {
     case 'EXTREME': return '#ea0808ff';
     case 'HIGH': return '#eb7a09ff';
     case 'MEDIUM': return '#8d7708ff';
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

 const getComplexityScoreTitle = () => {
   if (fromHboActionCollection) return 'ACTION INTENSITY';
   if (fromHboRomanceCollection) return 'EMOTIONAL INTENSITY'; 
   if (fromHboMaxThrillerCollection) return 'SUSPENSE INTENSITY'; 
   if (fromHboMaxFamilyCollection || fromHuluFamilyCollection || fromParamountFamilyCollection || fromPeacockFamilyCollection) return 'FUN FACTOR SCORE';
   if (fromHboMaxSciFiCollection) return 'SPECTACULAR LEVEL'; 
   if (fromHboMaxHorrorCollection) return 'SCARINESS SCORE';
   if (fromParamountHorrorCollection) return 'SCARINESS SCORE';
   if (fromHboMaxBestCollection || fromParamountBestCollection || fromPeacockBestCollection) return 'CINEMATIC MASTERY'; // ✅ ADDED
   if (fromHboMaxDramaCollection || fromParamountDramaCollection) return 'EMOTIONAL INTENSITY'; 
   if (fromHboMaxComedyCollection) return 'LAUGHTER INDEX';
   if (fromParamountComedyCollection) return 'LAUGHTER INDEX';
   if (fromHuluDramaCollection || fromPeacockDramaCollection) return 'EMOTIONAL INTENSITY';
   if (fromHuluBestCollection) return 'INTENSITY SCORE'; 
   if (fromHuluThrillerCollection || fromParamountThrillerCollection || fromPeacockThrillerCollection) return 'SUSPENSE SCORE'; 
   if (fromHuluSciFiCollection) return 'VISUAL SPECTACLE SCORE'; 
   if (fromHuluComedyCollection) return 'LAUGHTER SCORE'; 
   if (fromHuluHorrorCollection) return 'DREAD SCORE'; 
   if (fromHuluRomanceCollection) return 'EMOTIONAL RESONANCE';
   if (fromHuluActionCollection || fromParamountActionCollection) return 'ADRENALINE SCORE';
   if (fromParamountSciFiCollection) return 'SCI-FI COMPLEXITY';
   if (fromParamountRomanceCollection) return 'EMOTIONAL INTENSITY'; 
   if (fromPeacockActionAdventureCollection) return 'ADRENALINE SCORE';
   if (fromPeacockSciFiCollection) return 'SCI-FI COMPLEXITY';
   if (fromPeacockRomanceCollection) return 'EMOTIONAL INTENSITY';
   if (fromMatrixCollection) return 'SCI-FI COMPLEXITY SCORE';
   if (fromSe7enCollection) return 'SE7EN DNA SCORE';
   if (fromRevengeCollection) return 'REVENGE INTENSITY SCORE';
   if (fromWarFilmsCollection) return 'WAR INTENSITY SCORE';
   if (fromSciFiCollection) return 'SCI-FI COMPLEXITY SCORE';
   if (fromInterstellarCollection) return 'COSMIC SCALE SCORE';
   if (fromTimeTravelCollection) return 'TIME TRAVEL COMPLEXITY SCORE';
   if (fromHeistThrillerCollection) return 'HEIST COMPLEXITY SCORE';
   if (fromCrimeThrillerCollection) return 'CRIME INTENSITY SCORE';
   if (fromDetectiveThrillerCollection || fromMysteryThrillerCollection) return 'MYSTERY COMPLEXITY SCORE';
   if (fromPsychologicalThrillerCollection) return 'SANITY EROSION SCORE'; // 🔥 UPDATED
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
   if (fromHboRomanceCollection) return 'EMOTION INDEX'; 
   if (fromHboMaxThrillerCollection) return 'TENSION INDEX'; 
   if (fromHboMaxFamilyCollection || fromHuluFamilyCollection || fromParamountFamilyCollection || fromPeacockFamilyCollection) return 'FAMILY FUN INDEX';
   if (fromHboMaxSciFiCollection) return 'COSMIC SCALE INDEX'; 
   if (fromHboMaxHorrorCollection) return 'TRAUMA INDEX';
   if (fromParamountHorrorCollection) return 'TRAUMA INDEX';
   if (fromHboMaxBestCollection || fromParamountBestCollection || fromPeacockBestCollection) return 'MASTERY INDEX'; // ✅ ADDED
   if (fromHboMaxDramaCollection || fromParamountDramaCollection) return 'EMOTIONAL IMPACT INDEX'; 
   if (fromHboMaxComedyCollection || fromParamountComedyCollection) return 'LAUGHTER INDEX';
   if (fromHuluDramaCollection || fromPeacockDramaCollection) return 'EMOTIONAL IMPACT INDEX';
   if (fromHuluBestCollection) return 'ACCLAIM INDEX'; 
   if (fromHuluThrillerCollection || fromParamountThrillerCollection || fromPeacockThrillerCollection) return 'TENSION INDEX'; 
   if (fromHuluSciFiCollection) return 'VISUAL SPECTACLE INDEX'; 
   if (fromHuluComedyCollection) return 'LAUGHTER INDEX'; 
   if (fromHuluHorrorCollection) return 'DREAD INDEX'; 
   if (fromHuluRomanceCollection) return 'EMOTION INDEX';
   if (fromHuluActionCollection || fromParamountActionCollection) return 'ADRENALINE INDEX'; 
   if (fromParamountSciFiCollection) return 'HARD SCI-FI INDEX';
   if (fromParamountRomanceCollection) return 'EMOTION INDEX'; 
   if (fromPeacockActionAdventureCollection) return 'ADRENALINE INDEX';
   if (fromPeacockSciFiCollection) return 'HARD SCI-FI INDEX';
   if (fromPeacockRomanceCollection) return 'EMOTION INDEX';
   if (fromMatrixCollection) return 'MIND BENDING SCORE';
   if (fromSe7enCollection) return 'NOIR DARKNESS INDEX';
   if (fromRevengeCollection) return 'REVENGE INTENSITY INDEX';
   if (fromWarFilmsCollection) return 'WAR INTENSITY INDEX';
   if (fromSciFiCollection) return 'SCI-FI COMPLEXITY INDEX';
   if (fromInterstellarCollection) return 'AWE INDEX';
   if (fromTimeTravelCollection) return 'COMPLEXITY INDEX';
   if (fromHeistThrillerCollection) return 'HEIST COMPLEXITY INDEX';
   if (fromCrimeThrillerCollection) return 'CRIME INTENSITY INDEX';
   if (fromDetectiveThrillerCollection || fromMysteryThrillerCollection) return 'MYSTERY INDEX';
   if (fromPsychologicalThrillerCollection) return 'SANITY EROSION INDEX'; // 🔥 UPDATED
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
   if (fromHboMaxFamilyCollection || fromHuluFamilyCollection || fromParamountFamilyCollection || fromPeacockFamilyCollection) return 'WHOLESOME LEVEL';
   if (fromHboMaxSciFiCollection) return 'SPECTACLE TIER LEVEL'; 
   if (fromHboMaxHorrorCollection) return 'NIGHTMARE LEVEL';
   if (fromParamountHorrorCollection) return 'NIGHTMARE LEVEL';
   if (fromHboMaxBestCollection || fromParamountBestCollection || fromPeacockBestCollection) return 'LEGACY LEVEL'; // ✅ ADDED
   if (fromHboMaxDramaCollection || fromParamountDramaCollection) return 'DEPTH LEVEL'; 
   if (fromHboMaxComedyCollection || fromParamountComedyCollection) return 'COMEDY TIER';
   if (fromHuluDramaCollection || fromPeacockDramaCollection) return 'RESONANCE LEVEL';
   if (fromHuluBestCollection) return 'PRESTIGE LEVEL'; 
   if (fromHuluThrillerCollection || fromParamountThrillerCollection || fromPeacockThrillerCollection) return 'THRILL LEVEL'; 
   if (fromHuluSciFiCollection) return 'VISUAL SPECTACLE LEVEL'; 
   if (fromHuluComedyCollection) return 'CHAOS LEVEL';
   if (fromHuluHorrorCollection) return 'SCARINESS LEVEL'; 
   if (fromHuluRomanceCollection) return 'ROMANCE TIER';
   if (fromHuluActionCollection || fromParamountActionCollection) return 'ACTION INTENSITY LEVEL'; 
   if (fromParamountSciFiCollection) return 'COSMIC SCALE LEVEL';
   if (fromParamountRomanceCollection) return 'ROMANCE TIER LEVEL'; 
   if (fromPeacockActionAdventureCollection) return 'ACTION INTENSITY LEVEL';
   if (fromPeacockSciFiCollection) return 'COSMIC SCALE LEVEL';
   if (fromPeacockRomanceCollection) return 'ROMANCE TIER LEVEL';
   if (fromMatrixCollection) return 'SCI-FI COMPLEXITY LEVEL';
   if (fromSe7enCollection) return 'PSYCHOLOGICAL GRIT LEVEL';
   if (fromRevengeCollection) return 'VENGEANCE BRUTALITY LEVEL';
   if (fromWarFilmsCollection) return 'COMBAT REALISM LEVEL';
   if (fromSciFiCollection) return 'SCI-FI COMPLEXITY LEVEL';
   if (fromInterstellarCollection) return 'EXISTENTIAL LEVEL';
   if (fromTimeTravelCollection) return 'COMPLEXITY LEVEL';
   if (fromHeistThrillerCollection) return 'HEIST COMPLEXITY LEVEL';
   if (fromCrimeThrillerCollection) return 'CRIME COMPLEXITY LEVEL';
   if (fromDetectiveThrillerCollection || fromMysteryThrillerCollection) return 'MYSTERY COMPLEXITY LEVEL';
   if (fromPsychologicalThrillerCollection) return 'MENTAL COLLAPSE LEVEL'; //
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
   if (fromHboMaxFamilyCollection || fromHuluFamilyCollection || fromParamountFamilyCollection || fromPeacockFamilyCollection) {
        if (scoreValue >= 90) return 'A heartwarming masterpiece that will delight both kids and adults. Pure wholesome magic.';
        if (scoreValue >= 80) return 'Great family entertainment with positive messages and plenty of fun moments.';
        return 'A solid family movie that offers good laughs and an enjoyable adventure.';
   }
   if (fromHboMaxSciFiCollection) { 
        if (scoreValue >= 90) return 'A visually transcendent masterpiece. A cinematic experience that demands the biggest screen possible.';
        if (scoreValue >= 80) return 'Stunning visuals and grand ideas. A sci-fi epic that delivers on both spectacle and substance.';
        return 'A visually impressive sci-fi film with creative world-building and solid effects.';
   }
   if (fromHboMaxHorrorCollection || fromParamountHorrorCollection) {
        if (scoreValue >= 90) return 'Absolute nightmare fuel. A terrifying experience that will keep you awake for days. Proceed with caution.';
        if (scoreValue >= 80) return 'Extremely scary with intense dread and jump scares. Not for the faint of heart.';
        return 'A solid horror movie with effective scares and a creepy atmosphere.';
   }
   if (fromHboMaxBestCollection || fromParamountBestCollection || fromPeacockBestCollection) { // ✅ ADDED PARAMOUNT BEST
        if (scoreValue >= 90) return 'A cinematic masterpiece that defines its genre. Essential viewing for any serious film lover.';
        if (scoreValue >= 80) return 'A critically acclaimed classic with immense cultural impact and rewatchability.';
        return 'A highly rated, top-tier film that delivers an exceptional viewing experience.';
   }
   if (fromHboMaxDramaCollection || fromParamountDramaCollection) { 
        if (scoreValue >= 90) return 'A devastating, emotional tour de force. An unforgettable character study.';
        if (scoreValue >= 80) return 'A deeply moving film with powerful performances and rich storytelling.';
        return 'A compelling drama with genuine emotional stakes and solid acting.';
   }
   if (fromHboMaxComedyCollection || fromParamountComedyCollection) {
        if (scoreValue >= 90) return 'A satirical masterpiece that defines the genre. Brilliant, witty, and timeless.';
        if (scoreValue >= 80) return 'Extremely funny with sharp writing and memorable performances.';
        return 'A solid comedy that delivers consistent laughs and good entertainment.';
   }
   if (fromHuluDramaCollection || fromPeacockDramaCollection) {
        if (scoreValue >= 90) return 'A devastating, emotional masterpiece that will stay with you forever.';
        if (scoreValue >= 80) return 'A powerful, deeply resonant film with rich character depth.';
        return 'A compelling human drama with genuine emotional stakes.';
   }
   if (fromHuluBestCollection) { 
        if (scoreValue >= 90) return 'A cinematic masterpiece that defines its genre and demands to be seen.';
        if (scoreValue >= 80) return 'Critically acclaimed filmmaking with powerful storytelling and high production value.';
        return 'A highly rated, essential watch that delivers quality entertainment.';
   }
   if (fromHuluThrillerCollection || fromParamountThrillerCollection || fromPeacockThrillerCollection) { 
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
   if (fromHuluActionCollection || fromParamountActionCollection || fromPeacockActionAdventureCollection) {
        if (scoreValue >= 90) return 'A relentless, high-octane adrenaline rush with masterclass choreography.';
        if (scoreValue >= 80) return 'Intense, fast-paced action with thrilling set pieces.';
        return 'Solid action entertainment with satisfying combat and stunts.';
   }
   if (fromParamountSciFiCollection || fromPeacockSciFiCollection) {
        if (scoreValue >= 90) return 'A visionary masterpiece that pushes the boundaries of human imagination and science.';
        if (scoreValue >= 80) return 'Intellectually stimulating with complex concepts and stunning cosmic visuals.';
        return 'A solid sci-fi film with engaging ideas and impressive world-building.';
   }
   if (fromParamountRomanceCollection || fromPeacockRomanceCollection) { 
        if (scoreValue >= 90) return 'A transcendent, epic romance that defines the genre. Prepare to be emotionally devastated.';
        if (scoreValue >= 80) return 'A deeply moving film with incredible chemistry and a heartwarming message.';
        return 'A charming and memorable romance that delivers all the right feelings.';
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
   if (fromHboMaxFamilyCollection || fromHuluFamilyCollection || fromParamountFamilyCollection || fromPeacockFamilyCollection) return 'border-yellow-400/40';
   if (fromHboMaxSciFiCollection) return 'border-cyan-500/40'; 
   if (fromHboMaxHorrorCollection || fromParamountHorrorCollection) return 'border-red-700/40';
   if (fromHboMaxBestCollection || fromParamountBestCollection || fromPeacockBestCollection) return 'border-amber-500/40'; // ✅ ADDED
   if (fromHboMaxDramaCollection || fromParamountDramaCollection) return 'border-indigo-500/40'; 
   if (fromHboMaxComedyCollection || fromParamountComedyCollection) return 'border-yellow-500/40';
   if (fromHuluDramaCollection || fromPeacockDramaCollection) return 'border-blue-500/40';
   if (fromHuluBestCollection) return 'border-amber-500/40'; 
   if (fromHuluThrillerCollection || fromParamountThrillerCollection || fromPeacockThrillerCollection) return 'border-red-500/40'; 
   if (fromHuluSciFiCollection) return 'border-cyan-400/40'; 
   if (fromHuluComedyCollection) return 'border-yellow-400/40';
   if (fromHuluHorrorCollection) return 'border-red-600/40';
   if (fromHuluRomanceCollection) return 'border-pink-500/40';
   if (fromHuluActionCollection || fromParamountActionCollection || fromPeacockActionAdventureCollection) return 'border-red-500/40'; 
   if (fromParamountSciFiCollection || fromPeacockSciFiCollection) return 'border-cyan-500/40'; 
   if (fromParamountRomanceCollection || fromPeacockRomanceCollection) return 'border-pink-500/40'; 
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
   if (fromHboMaxFamilyCollection || fromHuluFamilyCollection || fromParamountFamilyCollection || fromPeacockFamilyCollection) return 'text-yellow-400';
   if (fromHboMaxSciFiCollection) return 'text-cyan-500'; 
   if (fromHboMaxHorrorCollection || fromParamountHorrorCollection) return 'text-red-600';
   if (fromHboMaxBestCollection || fromParamountBestCollection || fromPeacockBestCollection) return 'text-amber-500'; // ✅ ADDED
   if (fromHboMaxDramaCollection || fromParamountDramaCollection) return 'text-indigo-500'; 
   if (fromHboMaxComedyCollection || fromParamountComedyCollection) return 'text-yellow-500';
   if (fromHuluDramaCollection || fromPeacockDramaCollection) return 'text-blue-500';
   if (fromHuluBestCollection) return 'text-amber-500'; 
   if (fromHuluThrillerCollection || fromParamountThrillerCollection || fromPeacockThrillerCollection) return 'text-red-500'; 
   if (fromHuluSciFiCollection) return 'text-cyan-400'; 
   if (fromHuluComedyCollection) return 'text-yellow-400';
   if (fromHuluHorrorCollection) return 'text-red-600'; 
   if (fromHuluRomanceCollection) return 'text-pink-500'; 
   if (fromHuluActionCollection || fromParamountActionCollection || fromPeacockActionAdventureCollection) return 'text-red-500'; 
   if (fromParamountSciFiCollection || fromPeacockSciFiCollection) return 'text-cyan-500';
   if (fromParamountRomanceCollection || fromPeacockRomanceCollection) return 'text-pink-500'; 
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
          {/* ✅ UPDATED TO USE DYNAMIC SYNOPSIS */}
          <p className="text-gray-200 leading-relaxed text-sm sm:text-base md:text-lg">{dynamicMovieData.synopsis}</p>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="p-3 sm:p-5 bg-gray-900/40 rounded-lg sm:rounded-xl border-l-2 border-yellow-400/50 h-full min-h-[160px] flex flex-col justify-start">
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
            <h3 className="text-sm sm:text-base font-light text-white">Cast & Crew</h3>
          </div>
          <div className="space-y-2 sm:space-y-3">
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed"><span className="text-gray-500 font-medium block mb-0.5">Director:</span> {dynamicMovieData.director}</p>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed"><span className="text-gray-500 font-medium block mb-0.5">Starring:</span> {dynamicMovieData.cast}</p>
          </div>
        </div>

        <div className="p-3 sm:p-5 bg-gray-900/40 rounded-lg sm:rounded-xl border-l-2 border-blue-400/50 h-full min-h-[160px] flex flex-col justify-start">
          <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
            <Film className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
            <h3 className="text-sm sm:text-base font-light text-white">Production Details</h3>
          </div>
          <div className="space-y-2 sm:space-y-3">
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
       !fromHuluBestCollection && 
       !fromHuluFamilyCollection && 
       !fromHboMaxFamilyCollection && 
       !fromHboMaxBestCollection && 
       !fromParamountFamilyCollection && 
       !fromParamountHorrorCollection &&
       !fromParamountComedyCollection &&
       !fromParamountBestCollection && // ✅ ADDED
       !fromPeacockBestCollection &&
       (
        <motion.div
          className="mb-6 sm:mb-8 md:mb-12 bg-gradient-to-br from-gray-800/40 to-gray-900/60 rounded-lg sm:rounded-xl border border-gray-700/50 p-3 sm:p-4 md:p-8 shadow-2xl backdrop-blur-sm relative overflow-hidden"
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

      <EnhancedIntensityGraph scenes={safeMovieInfo.scenes} dominantColor={safeMovieInfo.dominantColor} />
      <StrategicDNAHelix dna={safeMovieInfo.dna} dominantColor={safeMovieInfo.dominantColor} />

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
        : fromHboMaxFamilyCollection ? <HboMaxFamilySEOFAQSection movie={movie} /> 
        : fromHboMaxSciFiCollection ? <HboMaxSciFiSEOFAQSection movie={movie} /> 
        : fromHboMaxHorrorCollection ? <HboMaxHorrorSEOFAQSection movie={movie} />
        : fromHboMaxBestCollection ? <HboMaxBestSEOFAQSection movie={movie} />
        : fromHboMaxDramaCollection ? <HboMaxDramaSEOFAQSection movie={movie} />
        : fromHboMaxComedyCollection ? <HboMaxComedySEOFAQSection movie={movie} />
        : fromHuluFamilyCollection ? <HuluFamilySEOFAQSection movie={movie} />
        : fromHuluDramaCollection ? <HuluDramaSEOFAQSection movie={movie} />
        : fromHuluBestCollection ? <HuluBestSEOFAQSection movie={movie} />
        : fromHuluThrillerCollection ? <HuluThrillerSEOFAQSection movie={movie} />
        : fromHuluSciFiCollection ? <HuluSciFiSEOFAQSection movie={movie} />
        : fromHuluComedyCollection ? <HuluComedySEOFAQSection movie={movie} />
        : fromHuluHorrorCollection ? <HuluHorrorSEOFAQSection movie={movie} /> 
        : fromHuluRomanceCollection ? <HuluRomanceSEOFAQSection movie={movie} /> 
        : fromHuluActionCollection ? <HuluActionSEOFAQSection movie={movie} />
        : fromParamountActionCollection ? <ParamountActionSEOFAQSection movie={movie} />
        : fromParamountSciFiCollection ? <ParamountSciFiSEOFAQSection movie={movie} /> 
        : fromParamountRomanceCollection ? <ParamountRomanceSEOFAQSection movie={movie} /> 
        : fromParamountDramaCollection ? <ParamountDramaSEOFAQSection movie={movie} /> 
        : fromParamountThrillerCollection ? <ParamountThrillerSEOFAQSection movie={movie} />
        : fromParamountFamilyCollection ? <ParamountFamilySEOFAQSection movie={movie} /> 
        : fromParamountHorrorCollection ? <ParamountHorrorSEOFAQSection movie={movie} />
        : fromParamountComedyCollection ? <ParamountComedySEOFAQSection movie={movie} />
        : fromParamountBestCollection ? <ParamountBestSEOFAQSection movie={movie} /> // ✅ ADDED
        : fromPeacockBestCollection ? <PeacockBestSEOFAQSection movie={movie} />
        : fromPeacockActionAdventureCollection ? <PeacockActionAdventureSEOFAQSection movie={movie} />
        : fromPeacockSciFiCollection ? <PeacockSciFiSEOFAQSection movie={movie} />
        : fromPeacockRomanceCollection ? <PeacockRomanceSEOFAQSection movie={movie} />
        : fromPeacockFamilyCollection ? <PeacockFamilySEOFAQSection movie={movie} />
        : fromPeacockDramaCollection ? <PeacockDramaSEOFAQSection movie={movie} />
        : fromPeacockThrillerCollection ? <PeacockThrillerSEOFAQSection movie={movie} />
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