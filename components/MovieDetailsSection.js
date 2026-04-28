// components/MovieDetailsSection.js - AUTO-FETCH ALL DATA INCLUDING SYNOPSIS AND RUNTIME ✅

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, Film, BookOpen, Star } from 'lucide-react';

// ==================== COMPONENT IMPORTS ==================== 
// ⚡ OPTIMIZED: Dynamic Code Splitting drops payload by ~2.5MB
import dynamic from 'next/dynamic';
import EnhancedIntensityGraph from './EnhancedIntensityGraph';
import StrategicDNAHelix from './StrategicDNAHelix';
import SensitiveContentTimelineSection from './SensitiveContentTimelineSection';
import EnhancedWhereToWatchSection from './EnhancedWhereToWatchSection';
import RealCommentsRatingSection from './RealCommentsRatingSection';

// FAQ Sections
const SEOFAQSection = dynamic(() => import('./SEOFAQSection'));
const SurvivalSEOFAQSection = dynamic(() => import('./SurvivalSEOFAQSection'));
const ThrillerSEOFAQSection = dynamic(() => import('./ThrillerSEOFAQSection'));
const MysteryThrillerSEOFAQSection = dynamic(() => import('./MysteryThrillerSEOFAQSection'));
const DetectiveThrillerSEOFAQSection = dynamic(() => import('./DetectiveThrillerSEOFAQSection'));
const PsychThrillerSEOFAQSection = dynamic(() => import('./PsychThrillerSEOFAQSection'));
const CrimeThrillerSEOFAQSection = dynamic(() => import('./CrimeThrillerSEOFAQSection'));
const HeistThrillerSEOFAQSection = dynamic(() => import('./HeistThrillerSEOFAQSection'));
const TimeTravelSEOFAQSection = dynamic(() => import('./TimeTravelSEOFAQSection'));
const SciFiSEOFAQSection = dynamic(() => import('./SciFiSEOFAQSection'));
const RevengeMovieSEOFAQSection = dynamic(() => import('./RevengeMovieSEOFAQSection'));
const WarFilmsSEOFAQSection = dynamic(() => import('./WarFilmsSEOFAQSection'));
const InterstellarSEOFAQSection = dynamic(() => import('./InterstellarSEOFAQSection'));
const MatrixSEOFAQSection = dynamic(() => import('./MatrixSEOFAQSection'));
const Se7enSEOFAQSection = dynamic(() => import('./Se7enSEOFAQSection')); 
const ParasiteSEOFAQSection = dynamic(() => import('./ParasiteSEOFAQSection')); 
const OldboySEOFAQSection = dynamic(() => import('./OldboySEOFAQSection'));
const DonnieDarkoSEOFAQSection = dynamic(() => import('./DonnieDarkoSEOFAQSection'));
const FightClubSEOFAQSection = dynamic(() => import('./FightClubSEOFAQSection'));
const BlackSwanSEOFAQSection = dynamic(() => import('./BlackSwanSEOFAQSection'));
const EyesWideShutSEOFAQSection = dynamic(() => import('./EyesWideShutSEOFAQSection'));
const EroticThrillerSEOFAQSection = dynamic(() => import('./EroticThrillerSEOFAQSection'));
const EroticRomanceSEOFAQSection = dynamic(() => import('./EroticRomanceSEOFAQSection'));
const GreedSEOFAQSection = dynamic(() => import('./GreedSEOFAQSection'));
const PrestigeSEOFAQSection = dynamic(() => import('./PrestigeSEOFAQSection'));
const HboActionSEOFAQSection = dynamic(() => import('./HboActionSEOFAQSection'));
const HboMaxRomanceSEOFAQSection = dynamic(() => import('./HboMaxRomanceSEOFAQSection'));
const HboMaxThrillerSEOFAQSection = dynamic(() => import('./HboMaxThrillerSEOFAQSection'));
const HboMaxFamilySEOFAQSection = dynamic(() => import('./HboMaxFamilySEOFAQSection'));
const HboMaxSciFiSEOFAQSection = dynamic(() => import('./HboMaxSciFiSEOFAQSection')); 
const HboMaxHorrorSEOFAQSection = dynamic(() => import('./HboMaxHorrorSEOFAQSection')); 
const HboMaxBestSEOFAQSection = dynamic(() => import('./HboMaxBestSEOFAQSection'));
const HboMaxDramaSEOFAQSection = dynamic(() => import('./HboMaxDramaSEOFAQSection'));
const HboMaxComedySEOFAQSection = dynamic(() => import('./HboMaxComedySEOFAQSection'));
const RaunchyComedySEOFAQSection = dynamic(() => import('./RaunchyComedySEOFAQSection'));
const RoadTripSEOFAQSection = dynamic(() => import('./RoadTripSEOFAQSection'));
const ThoughtProvokingSEOFAQSection = dynamic(() => import('./ThoughtProvokingSEOFAQSection'));
const NeoNoirSEOFAQSection = dynamic(() => import('./NeoNoirSEOFAQSection'));
const BestActionMoviesSEOFAQSection = dynamic(() => import('./BestActionMoviesSEOFAQSection'));
const TrueStorySEOFAQSection = dynamic(() => import('./TrueStorySEOFAQSection'));
const DecadeSEOFAQSection = dynamic(() => import('./DecadeSEOFAQSection'));
const GangsterSEOFAQSection = dynamic(() => import('./GangsterSEOFAQSection'));
const BookAdaptationSEOFAQSection = dynamic(() => import('./BookAdaptationSEOFAQSection'));
const MarriageCrisisSEOFAQSection = dynamic(() => import('./MarriageCrisisSEOFAQSection'));
const A24SEOFAQSection = dynamic(() => import('./A24SEOFAQSection'));
const DarkComedySEOFAQSection = dynamic(() => import('./DarkComedySEOFAQSection'));
const PtaSEOFAQSection = dynamic(() => import('./PtaSEOFAQSection'));
const BasicInstinctSEOFAQSection = dynamic(() => import('./BasicInstinctSEOFAQSection'));
const EnemiesToLoversSEOFAQSection = dynamic(() => import('./EnemiesToLoversSEOFAQSection'));

const HuluActionSEOFAQSection = dynamic(() => import('./HuluActionSEOFAQSection'));
const HuluRomanceSEOFAQSection = dynamic(() => import('./HuluRomanceSEOFAQSection'));
const HuluHorrorSEOFAQSection = dynamic(() => import('./HuluHorrorSEOFAQSection'));
const HuluComedySEOFAQSection = dynamic(() => import('./HuluComedySEOFAQSection'));
const HuluSciFiSEOFAQSection = dynamic(() => import('./HuluSciFiSEOFAQSection'));
const HuluThrillerSEOFAQSection = dynamic(() => import('./HuluThrillerSEOFAQSection'));
const HuluBestSEOFAQSection = dynamic(() => import('./HuluBestSEOFAQSection'));
const HuluDramaSEOFAQSection = dynamic(() => import('./HuluDramaSEOFAQSection'));
const HuluFamilySEOFAQSection = dynamic(() => import('./HuluFamilySEOFAQSection'));

const ParamountActionSEOFAQSection = dynamic(() => import('./ParamountActionSEOFAQSection'));
const ParamountSciFiSEOFAQSection = dynamic(() => import('./ParamountSciFiSEOFAQSection'));
const ParamountRomanceSEOFAQSection = dynamic(() => import('./ParamountRomanceSEOFAQSection'));
const ParamountDramaSEOFAQSection = dynamic(() => import('./ParamountDramaSEOFAQSection'));
const ParamountThrillerSEOFAQSection = dynamic(() => import('./ParamountThrillerSEOFAQSection'));
const ParamountFamilySEOFAQSection = dynamic(() => import('./ParamountFamilySEOFAQSection'));
const ParamountHorrorSEOFAQSection = dynamic(() => import('./ParamountHorrorSEOFAQSection'));
const ParamountComedySEOFAQSection = dynamic(() => import('./ParamountComedySEOFAQSection'));
const ParamountBestSEOFAQSection = dynamic(() => import('./ParamountBestSEOFAQSection'));
const PeacockActionAdventureSEOFAQSection = dynamic(() => import('./PeacockActionAdventureSEOFAQSection'));
const PeacockSciFiSEOFAQSection = dynamic(() => import('./PeacockSciFiSEOFAQSection'));
const PeacockRomanceSEOFAQSection = dynamic(() => import('./PeacockRomanceSEOFAQSection'));
const PeacockFamilySEOFAQSection = dynamic(() => import('./PeacockFamilySEOFAQSection'));
const PeacockDramaSEOFAQSection = dynamic(() => import('./PeacockDramaSEOFAQSection'));
const PeacockThrillerSEOFAQSection = dynamic(() => import('./PeacockThrillerSEOFAQSection'));
const PeacockBestSEOFAQSection = dynamic(() => import('./PeacockBestSEOFAQSection'));
const PeacockComedySEOFAQSection = dynamic(() => import('./PeacockComedySEOFAQSection'));
import FanFavoritesSection from './FanFavoritesSection';

const MovieDetailsSection = React.memo(({
  movie,
  fromEyesWideShutCollection,
  fromMementoCollection,
  fromShutterIslandCollection,
  fromInceptionCollection,
  fromSurvivalCollection,
  fromMatrixCollection,
  fromBlackSwanCollection,
  fromPrestigeCollection,
  fromEroticThrillerCollection,
  fromEroticRomanceCollection,
  fromGreedCollection,
  fromSe7enCollection,
  fromRaunchyComedyCollection,
  fromRoadTripCollection,
  fromThoughtProvokingCollection,
  fromNeoNoirCollection,
  fromBestActionMoviesCollection,
  fromTrueStoryCollection,
  fromDecadeCollection,
  fromGangsterCollection,
  fromBookAdaptationCollection,
  fromMarriageCrisisCollection,
  fromA24Collection,
  fromDarkComedyCollection,
  fromPtaCollection,
  fromBasicInstinctCollection,
  fromEnemiesToLoversCollection,
  fromParasiteCollection,
  fromDonnieDarkoCollection,
  fromFightClubCollection,
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
  fromParamountBestCollection,
  fromPeacockActionAdventureCollection,
  fromPeacockSciFiCollection,
  fromPeacockRomanceCollection,
  fromPeacockFamilyCollection,
  fromPeacockDramaCollection,
  fromPeacockThrillerCollection,
  fromPeacockBestCollection,
  fromPeacockComedyCollection,
}) => {

 if (!movie) return null;

 const isTrueStoryMovie = movie.isTrueStory;

 // ⚡ SERVER-RESOLVED: Massive DB switch moved to getStaticProps to save ~3MB client payload
 const movieInfo = movie.resolvedMovieInfo || null;

 const getMovieSpecificData = (title) => ({
   mindBendingIndex: 85,
   complexityLevel: 'HIGH',
   dominantColor: '#ca8a04',
   rating: movie.imdbRating || 7.5,
   director: movie.Director || 'Acclaimed Director',
   scenes: [], // ✅ NO PLACEHOLDER SCENES
   dna: null, // ✅ NO PLACEHOLDER DNA
   cast: ['Lead Actor', 'Supporting Cast'],
   boxOffice: 'N/A',
   budget: 'N/A',
   synopsis: 'A compelling exploration of cinema.',
   ageRating: 'NR'
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
 const rating = safeMovieInfo.rating || movie.imdbRating || 7.5;

 // 🔥🔥🔥 AUTO-FETCH LOGIC FOR ALL MOVIE DATA INCLUDING SYNOPSIS AND RUNTIME 🔥🔥🔥
 const [dynamicMovieData, setDynamicMovieData] = useState({
   director: safeMovieInfo.director || movie.Director || 'Unknown Director',
   cast: safeMovieInfo.cast?.join(', ') || '',
   budget: safeMovieInfo.budget || 'N/A',
   boxOffice: safeMovieInfo.boxOffice || 'N/A',
   ageRating: safeMovieInfo.ageRating || movie.Rated || 'NR',
   runtime: safeMovieInfo.runtime || movie.Runtime || '120 min',
   synopsis: safeMovieInfo.synopsis || movie.Plot || getUniqueDescription(),
   tagline: '' // 🔥 NEW: We will store the official movie tagline here
 });

 useEffect(() => {

   const fetchAllData = async () => {
       try {
           const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY || 'a07e22bc18f5cb106bfe4cc1f83ad8ed';
           let targetTmdbId = movie.tmdbId || movie.tmdbID;
           
           // 🔥 ADDED ABORT CONTROLLER TO PREVENT HANGING FETCHES
           const controller = new AbortController();
           const timeoutId = setTimeout(() => controller.abort(), 5000);

           // 🔥 FIRST FETCH ATTEMPT
           let detailsRes = await fetch(`https://api.themoviedb.org/3/movie/${targetTmdbId}?api_key=${API_KEY}`, { signal: controller.signal });
           
           // 🔥 THE ULTIMATE CURE: If the TMDB ID in the database is outdated/wrong, the fetch returns a 404.
           // If it fails, we instantly use the infallible IMDb ID to find the correct, updated TMDB ID!
           if (!detailsRes.ok && movie.imdbID) {
               const findRes = await fetch(`https://api.themoviedb.org/3/find/${movie.imdbID}?api_key=${API_KEY}&external_source=imdb_id`, { signal: controller.signal });
               const findData = await findRes.json();
               if (findData.movie_results?.length > 0) {
                   targetTmdbId = findData.movie_results[0].id;
                   detailsRes = await fetch(`https://api.themoviedb.org/3/movie/${targetTmdbId}?api_key=${API_KEY}`, { signal: controller.signal });
               } else {
                   clearTimeout(timeoutId);
                   return; // Exit if movie truly doesn't exist on TMDB
               }
           }

           const [creditsRes, releasesRes] = await Promise.all([
               fetch(`https://api.themoviedb.org/3/movie/${targetTmdbId}/credits?api_key=${API_KEY}`, { signal: controller.signal }),
               fetch(`https://api.themoviedb.org/3/movie/${targetTmdbId}/release_dates?api_key=${API_KEY}`, { signal: controller.signal })
           ]);
           
           clearTimeout(timeoutId);

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
           if (newRating === 'Rated') newRating = 'NR'; // Clean up bad initial states
           const usRelease = releases.results?.find(r => r.iso_3166_1 === 'US');
           if (usRelease) {
               const cert = usRelease.release_dates.find(d => d.certification !== '')?.certification;
               if (cert) newRating = cert;
           } else {
               // Fallback to International ratings if US rating is missing
               const anyRelease = releases.results?.find(r => r.release_dates?.some(d => d.certification && d.certification !== ''));
               if (anyRelease) {
                   const cert = anyRelease.release_dates.find(d => d.certification && d.certification !== '')?.certification;
                   if (cert) newRating = cert;
               }
           }

           const newSynopsis = details.overview ? details.overview : dynamicMovieData.synopsis;
           
           // ✅ Fetch Runtime from TMDB and format it
           const newRuntime = details.runtime ? `${details.runtime} min` : dynamicMovieData.runtime;
           const newTagline = details.tagline ? details.tagline : ''; // 🔥 Grab the TMDB Tagline

           setDynamicMovieData({
               director: newDirector,
               cast: topCast,
               budget: newBudget,
               boxOffice: newRevenue,
               ageRating: newRating,
               synopsis: newSynopsis,
               runtime: newRuntime,
               tagline: newTagline // ✅ Update state
           });

       } catch (error) {
           // 🔥 SILENT FAIL: Prevents terminal spam and hydration crashes if offline/ad-blocked
           console.warn(`TMDB Client Fetch Skipped for ${movie.Title} (Using Local Data).`);
       }
   };

   fetchAllData();
 }, [movie.tmdbId, movie.imdbID]);

 // ⚡ SERVER-RESOLVED: Sensitive scenes directly from getStaticProps!
 const sensitiveScenes = movie.resolvedSensitiveScenes || [];

 // ✅ DYNAMIC SCORE VALUE SELECTION
 const scoreValue = fromHboActionCollection ? movie.actionIntensity ?? safeMovieInfo.actionIntensity ?? 0
   : fromHboRomanceCollection ? movie.emotionalIntensity ?? safeMovieInfo.emotionalIntensity ?? 0 
   : fromInceptionCollection ? movie.mindBendingIndex ?? safeMovieInfo.mindBendingIndex ?? 0
   : fromShutterIslandCollection ? movie.psychologicalComplexity ?? safeMovieInfo.psychologicalComplexity ?? 0
   : fromMementoCollection ? movie.memoryComplexity ?? safeMovieInfo.memoryComplexity ?? 0
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
   : fromParamountBestCollection ? movie.cinematicMastery ?? safeMovieInfo.cinematicMastery ?? 0 
   : fromPeacockActionAdventureCollection ? movie.adrenalineScore ?? safeMovieInfo.adrenalineScore ?? 0
   : fromPeacockSciFiCollection ? movie.sciFiComplexity ?? safeMovieInfo.sciFiComplexity ?? 0
   : fromPeacockRomanceCollection ? movie.emotionalIntensity ?? safeMovieInfo.emotionalIntensity ?? 0
   : fromPeacockFamilyCollection ? movie.wholesomeScore ?? safeMovieInfo.wholesomeScore ?? 0
   : fromPeacockDramaCollection ? movie.emotionalIntensity ?? safeMovieInfo.emotionalIntensity ?? 0
   : fromPeacockThrillerCollection ? movie.suspenseIntensity ?? safeMovieInfo.suspenseIntensity ?? 0
   : fromPeacockBestCollection ? movie.cinematicMastery ?? safeMovieInfo.cinematicMastery ?? 0
   : fromPeacockComedyCollection ? movie.laughterIndex ?? safeMovieInfo.laughterIndex ?? 0
   : fromDonnieDarkoCollection ? movie.realityWarpIndex ?? safeMovieInfo.realityWarpIndex ?? 0
   : fromFightClubCollection ? movie.anarchyLevel ?? safeMovieInfo.anarchyLevel ?? 0
   : fromDarkComedyCollection ? movie.cynicismLevel ?? safeMovieInfo.cynicismLevel ?? 0
   : fromBasicInstinctCollection ? movie.eroticTension ?? safeMovieInfo.eroticTension ?? 0
   : fromEnemiesToLoversCollection ? movie.romanticChemistry ?? safeMovieInfo.romanticChemistry ?? 0
   : fromParasiteCollection ? movie.classWarfareIndex ?? safeMovieInfo.classWarfareIndex ?? 0
   : fromMatrixCollection ? movie.cyberComplexity ?? safeMovieInfo.cyberComplexity ?? 0
   : fromOldboyCollection ? movie.revengeIntensity ?? safeMovieInfo.revengeIntensity ?? 0
   : fromBlackSwanCollection ? movie.psychologicalIntensity ?? safeMovieInfo.psychologicalIntensity ?? 0
   : fromPrestigeCollection ? movie. deceptionScore ?? safeMovieInfo. deceptionScore ?? 0
   : fromEroticThrillerCollection ? movie.eroticTension ?? safeMovieInfo.eroticTension ?? 0
   : fromEroticRomanceCollection ? movie.passionIndex ?? safeMovieInfo.eroticTension ?? 0
   : fromGreedCollection ? movie.greedIndex ?? safeMovieInfo.greedIndex ?? 0
   : fromRaunchyComedyCollection ? movie.raunchinessScore ?? safeMovieInfo.raunchinessScore ?? 0
   : fromRoadTripCollection ? movie.wanderlustScore ?? safeMovieInfo.wanderlustScore ?? 0
   : fromThoughtProvokingCollection ? movie.philosophicalDepth ?? safeMovieInfo.philosophicalDepth ?? 0
  : fromNeoNoirCollection ? movie.moralAmbiguity ?? safeMovieInfo.moralAmbiguity ?? 0
   : fromEyesWideShutCollection ? movie.paranoiaIntensity ?? safeMovieInfo.paranoiaIntensity ?? 0
   : fromSe7enCollection ? movie.se7enDNAScore ?? safeMovieInfo.se7enDNAScore ?? 0
   : fromRevengeCollection ? movie.revengeIntensity ?? safeMovieInfo.revengeIntensity ?? 0
   : fromWarFilmsCollection ? movie.warIntensity ?? safeMovieInfo.warIntensity ?? 0
   : fromSciFiCollection ? movie.cosmicScale ?? safeMovieInfo.cosmicScale ?? 0
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
   if (scoreValue >= 90) return '#ef4444'; // Red for Top/Extreme
   if (scoreValue >= 80) return '#f97316'; // Orange for High
   return '#22c55e'; // Green for Mid/Default
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
   if (fromInceptionCollection) return 'MIND-BENDING COMPLEXITY SCORE';
   if (fromShutterIslandCollection) return 'PSYCHOLOGICAL COMPLEXITY SCORE';
   if (fromMementoCollection) return 'MEMORY COMPLEXITY SCORE';
   if (fromHboMaxThrillerCollection) return 'SUSPENSE INTENSITY'; 
   if (fromHboMaxFamilyCollection || fromHuluFamilyCollection || fromParamountFamilyCollection || fromPeacockFamilyCollection) return 'FUN FACTOR SCORE';
   if (fromHboMaxSciFiCollection) return 'SPECTACULAR LEVEL'; 
   if (fromHboMaxHorrorCollection) return 'SCARINESS SCORE';
   if (fromParamountHorrorCollection) return 'SCARINESS SCORE';
   if (fromHboMaxBestCollection || fromParamountBestCollection || fromPeacockBestCollection) return 'CINEMATIC MASTERY'; 
   if (fromHboMaxDramaCollection || fromParamountDramaCollection) return 'EMOTIONAL INTENSITY'; 
   if (fromHboMaxComedyCollection) return 'LAUGHTER INDEX';
   if (fromParamountComedyCollection) return 'LAUGHTER INDEX';
   if (fromPeacockComedyCollection) return 'LAUGHTER INDEX';
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
   if (fromEyesWideShutCollection) return 'PARANOIA INTENSITY';
   if (fromPrestigeCollection) return 'RIVALRY INDEX';
   if (fromEroticThrillerCollection) return 'EROTIC TENSION SCORE';
   if (fromEroticRomanceCollection) return 'EROTIC TENSION SCORE';
   if (fromGreedCollection) return 'GREED INDEX';
   if (fromRaunchyComedyCollection) return 'CHAOS SCORE';
   if (fromRoadTripCollection) return 'WANDERLUST SCORE';
   if (fromThoughtProvokingCollection) return 'PHILOSOPHICAL DEPTH SCORE';
   if (fromNeoNoirCollection) return 'MORAL AMBIGUITY SCORE';
   if (fromSe7enCollection) return 'SE7EN DNA SCORE';
   if (fromA24Collection) return 'EMOTIONAL RESONANCE SCORE';
   if (fromRevengeCollection) return 'REVENGE INTENSITY SCORE';
   if (fromWarFilmsCollection) return 'WAR INTENSITY SCORE';
   if (fromSciFiCollection) return 'COSMIC SCALE SCORE';
   if (fromInterstellarCollection) return 'COSMIC SCALE SCORE';
   if (fromTimeTravelCollection) return 'TIME TRAVEL COMPLEXITY SCORE';
   if (fromHeistThrillerCollection) return 'HEIST COMPLEXITY SCORE';
   if (fromCrimeThrillerCollection) return 'CRIME INTENSITY SCORE';
   if (fromDetectiveThrillerCollection || fromMysteryThrillerCollection) return 'MYSTERY COMPLEXITY SCORE';
   if (fromPsychologicalThrillerCollection) return 'SANITY EROSION SCORE'; 
   if (fromDramaCollection) return 'EMOTIONAL INTENSITY SCORE';
   if (fromThrillerCollection) return 'SUSPENSE INTENSITY SCORE';
   if (fromSurvivalCollection) return 'SURVIVAL INTENSITY SCORE';
   if (fromInceptionCollection) return 'MIND-BENDING COMPLEXITY SCORE';
   if (fromEnemiesToLoversCollection) return 'ROMANTIC CHEMISTRY SCORE';
   return 'COMPLEXITY SCORE';
 };

 const getComplexityIndexLabel = () => {
   if (fromHboActionCollection) return 'EPIC SCALE INDEX'; 
   if (fromHboRomanceCollection) return 'EMOTION INDEX'; 
   if (fromInceptionCollection) return 'MIND-BENDING INDEX';
   if (fromShutterIslandCollection) return 'PSYCHOLOGICAL INDEX';
   if (fromMementoCollection) return 'MEMORY INDEX';
   if (fromHboMaxThrillerCollection) return 'TENSION INDEX'; 
   if (fromHboMaxFamilyCollection || fromHuluFamilyCollection || fromParamountFamilyCollection || fromPeacockFamilyCollection) return 'FAMILY FUN INDEX';
   if (fromHboMaxSciFiCollection) return 'COSMIC SCALE INDEX'; 
   if (fromHboMaxHorrorCollection) return 'TRAUMA INDEX';
   if (fromParamountHorrorCollection) return 'TRAUMA INDEX';
   if (fromHboMaxBestCollection || fromParamountBestCollection || fromPeacockBestCollection) return 'MASTERY INDEX'; 
   if (fromHboMaxDramaCollection || fromParamountDramaCollection) return 'EMOTIONAL IMPACT INDEX'; 
   if (fromHboMaxComedyCollection || fromParamountComedyCollection || fromPeacockComedyCollection) return 'LAUGHTER INDEX';
   if (fromHuluDramaCollection || fromPeacockDramaCollection) return 'EMOTIONAL IMPACT INDEX';
   if (fromHuluBestCollection) return 'ACCLAIM INDEX'; 
   if (fromHuluThrillerCollection || fromParamountThrillerCollection || fromPeacockThrillerCollection) return 'TENSION INDEX'; 
   if (fromHuluSciFiCollection) return 'VISUAL SPECTACLE INDEX'; 
   if (fromHuluComedyCollection) return 'LAUGHTER INDEX'; 
   if (fromHuluHorrorCollection) return 'DREAD INDEX'; 
   if (fromHuluRomanceCollection) return 'EMOTION INDEX';
   if (fromHuluActionCollection || fromParamountActionCollection) return 'ADRENALINE INDEX'; 
   if (fromParamountSciFiCollection) return 'SCI-FI INDEX';
   if (fromParamountRomanceCollection) return 'EMOTION INDEX'; 
   if (fromPeacockActionAdventureCollection) return 'ADRENALINE INDEX';
   if (fromPeacockSciFiCollection) return 'HARD SCI-FI INDEX';
   if (fromPeacockRomanceCollection) return 'EMOTION INDEX';
   if (fromMatrixCollection) return 'MIND BENDING SCORE';
   if (fromSe7enCollection) return 'NOIR DARKNESS INDEX';
   if (fromRevengeCollection) return 'REVENGE INTENSITY INDEX';
   if (fromWarFilmsCollection) return 'WAR INTENSITY INDEX';
   if (fromSciFiCollection) return 'COSMIC SCALE SCORE';
   if (fromInterstellarCollection) return 'AWE INDEX';
   if (fromTimeTravelCollection) return 'COMPLEXITY INDEX';
   if (fromHeistThrillerCollection) return 'HEIST COMPLEXITY INDEX';
   if (fromCrimeThrillerCollection) return 'CRIME INTENSITY INDEX';
   if (fromDetectiveThrillerCollection || fromMysteryThrillerCollection) return 'MYSTERY INDEX';
   if (fromPsychologicalThrillerCollection) return 'SANITY EROSION INDEX'; 
   if (fromDramaCollection) return 'EMOTIONAL INTENSITY';
   if (fromThrillerCollection) return 'SUSPENSE INDEX';
   if (fromSurvivalCollection) return 'SURVIVAL INTENSITY INDEX';
   if (fromInceptionCollection) return 'MIND-BENDING INDEX';
   if (fromPrestigeCollection) return 'DECEPTION INDEX';
   if (fromEroticThrillerCollection) return 'EROTIC TENSION INDEX';
   if (fromEroticRomanceCollection) return 'EROTIC TENSION INDEX';
   if (fromGreedCollection) return 'CORRUPTION INDEX';
   if (fromRaunchyComedyCollection) return 'RAUNCHINESS INDEX';
   if (fromRoadTripCollection) return 'WANDERLUST INDEX';
   if (fromThoughtProvokingCollection) return 'PROFOUNDNESS INDEX';
   if (fromNeoNoirCollection) return 'MORAL AMBIGUITY INDEX';
   if (fromBestActionMoviesCollection) return 'ADRENALINE INDEX';
   if (fromTrueStoryCollection) return 'HISTORICAL FIDELITY INDEX';
   if (fromDecadeCollection) return 'VISCERAL IMPACT INDEX';
   if (fromGangsterCollection) return 'UNDERWORLD GRIT INDEX';
   if (fromBookAdaptationCollection) return 'PAGE-TO-SCREEN FIDELITY';
   if (fromFightClubCollection) return 'ANTI-SYSTEM REBELLION INDEX';
   if (fromMarriageCrisisCollection) return 'DEVASTATION INDEX';
   if (fromA24Collection) return 'EMOTIONAL RESONANCE INDEX';
   if (fromDarkComedyCollection) return 'CYNICISM INDEX';
   if (fromBasicInstinctCollection) return 'EROTIC TENSION INDEX';
   if (fromEnemiesToLoversCollection) return 'CHEMISTRY INDEX';
   return 'MIND-BENDING INDEX';
 };

 const getComplexityLevelLabel = () => {
   if (fromHboActionCollection) return 'CINEMATIC SCALE LEVEL';
   if (fromHboRomanceCollection) return 'ROMANCE TIER LEVEL'; 
   if (fromInceptionCollection) return 'COGNITIVE COMPLEXITY LEVEL';
   if (fromShutterIslandCollection) return 'PSYCHOLOGICAL DISTORTION LEVEL';
   if (fromMementoCollection) return 'MEMORY DISTORTION LEVEL';
   if (fromHboMaxThrillerCollection) return 'PSYCHOLOGICAL LEVEL'; 
   if (fromHboMaxFamilyCollection || fromHuluFamilyCollection || fromParamountFamilyCollection || fromPeacockFamilyCollection) return 'WHOLESOME LEVEL';
   if (fromHboMaxSciFiCollection) return 'SPECTACLE TIER LEVEL'; 
   if (fromHboMaxHorrorCollection) return 'NIGHTMARE LEVEL';
   if (fromParamountHorrorCollection) return 'NIGHTMARE LEVEL';
   if (fromHboMaxBestCollection || fromParamountBestCollection || fromPeacockBestCollection) return 'LEGACY LEVEL'; 
   if (fromHboMaxDramaCollection || fromParamountDramaCollection) return 'DEPTH LEVEL'; 
   if (fromHboMaxComedyCollection || fromParamountComedyCollection || fromPeacockComedyCollection) return 'COMEDY TIER';
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
   if (fromSciFiCollection) return 'COSMIC SCALE LEVEL';
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
   if (fromPrestigeCollection) return 'ILLUSION LEVEL';
   if (fromEroticThrillerCollection) return 'EROTIC LEVEL';
   if (fromEroticRomanceCollection) return 'EROTIC LEVEL';
   if (fromGreedCollection) return 'MORAL DECAY LEVEL';
   if (fromRaunchyComedyCollection) return 'ABSURDITY LEVEL';
   if (fromRoadTripCollection) return 'TRANSFORMATION LEVEL';
   if (fromThoughtProvokingCollection) return 'PHILOSOPHICAL IMPACT';
   if (fromNeoNoirCollection) return 'DREAD & AMBIGUITY LEVEL';
   if (fromBestActionMoviesCollection) return 'ACTION INTENSITY LEVEL';
   if (fromTrueStoryCollection) return 'HISTORICAL IMPACT LEVEL';
   if (fromDecadeCollection) return 'CINEMATIC IMPACT LEVEL';
   if (fromGangsterCollection) return 'CRIMINAL PSYCHOLOGY LEVEL';
   if (fromBookAdaptationCollection) return 'ADAPTATION MASTERY LEVEL';
   if (fromFightClubCollection) return 'PSYCHOLOGICAL COLLAPSE LEVEL';
   if (fromMarriageCrisisCollection) return 'EMOTIONAL DEVASTATION LEVEL';
   if (fromA24Collection) return 'ARTISTIC COMPLEXITY LEVEL';
   if (fromDarkComedyCollection) return 'BLEAKNESS LEVEL';
   if (fromPtaCollection) return 'AUTEUR EXECUTION LEVEL';
   if (fromBasicInstinctCollection) return 'PSYCHOLOGICAL MANIPULATION LEVEL';
   if (fromEnemiesToLoversCollection) return 'SLOW BURN TENSION LEVEL';
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
        return 'A solid horror movie with effective scares and creepy atmosphere.';
   }
   if (fromHboMaxBestCollection || fromParamountBestCollection || fromPeacockBestCollection) { 
        if (scoreValue >= 90) return 'A cinematic masterpiece that defines its genre. Essential viewing for any serious film lover.';
        if (scoreValue >= 80) return 'A critically acclaimed classic with immense cultural impact and rewatchability.';
        return 'A highly rated, top-tier film that delivers an exceptional viewing experience.';
   }
   if (fromHboMaxDramaCollection || fromParamountDramaCollection) { 
        if (scoreValue >= 90) return 'A devastating, emotional tour de force. An unforgettable character study.';
        if (scoreValue >= 80) return 'A deeply moving film with powerful performances and rich storytelling.';
        return 'A compelling drama with genuine emotional stakes and solid acting.';
   }
   if (fromHboMaxComedyCollection || fromParamountComedyCollection || fromPeacockComedyCollection) {
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
   if (fromPrestigeCollection) {
     if (scoreValue >= 90) return 'A masterclass in narrative deception, where every scene is a piece of a larger, devastating puzzle.';
     if (scoreValue >= 80) return 'A complex tale of rivalry and obsession with a shocking, game-changing twist.';
     return 'An engaging story of competition and illusion that keeps you guessing until the end.';
   }
   if (fromEroticThrillerCollection) {
     if (scoreValue >= 90) return 'A masterful blend of intense passion and fatal manipulation. Highly provocative and dangerous.';
     if (scoreValue >= 80) return 'Highly charged with dark romance and dangerous stakes. A gripping psychological descent.';
     return 'A suspenseful thriller balancing desire and danger perfectly.';
   }
   if (fromEroticRomanceCollection) {
     if (scoreValue >= 90) return 'A masterful exploration of deep passion and intimacy. Highly provocative and emotionally resonant.';
     if (scoreValue >= 80) return 'Highly charged with romantic tension and deep emotional stakes.';
     return 'A compelling romantic drama exploring the complexities of human connection.';
   }
   if (fromGreedCollection) {
     if (scoreValue >= 90) return 'A devastating portrait of extreme capitalism and total moral collapse.';
     if (scoreValue >= 80) return 'A sharp, thrilling exploration of corporate greed and compromised morals.';
     return 'An engaging look into the pursuit of wealth and its consequences.';
   }
   if (fromRaunchyComedyCollection) {
     if (scoreValue >= 90) return 'Absolute R-rated chaos. A genre-defining comedy pushing all boundaries.';
     if (scoreValue >= 80) return 'Highly raunchy and hilarious with legendary gross-out gags.';
     return 'A solid comedy with plenty of mature, boundary-pushing humor.';
   }
   if (fromRoadTripCollection) {
     if (scoreValue >= 90) return 'A deeply moving, transformative journey that captures the essence of wanderlust.';
     if (scoreValue >= 80) return 'A profound road trip experience filled with emotional textures and memorable characters.';
     return 'An engaging road trip movie that makes you want to hit the open road.';
   }
   if (fromThoughtProvokingCollection) {
     if (scoreValue >= 90) return 'A deeply profound, emotionally devastating masterpiece that challenges the human condition.';
     if (scoreValue >= 80) return 'A highly thought-provoking and emotionally resonant cinematic journey.';
     return 'An engaging philosophical movie that leaves you questioning reality and existence.';
   }
   if (fromNeoNoirCollection) {
     if (scoreValue >= 90) return 'A deeply cynical, morally bankrupt masterpiece that completely blurs the line between right and wrong.';
     if (scoreValue >= 80) return 'A highly atmospheric and morally ambiguous descent into the dark side of human nature.';
     return 'A gritty cinematic experience exploring the dark, morally ambiguous underbelly of society.';
   }
   if (fromBestActionMoviesCollection) {
     if (scoreValue >= 90) return 'A relentless, high-octane adrenaline rush with masterclass choreography.';
     if (scoreValue >= 80) return 'Intense, fast-paced action with thrilling set pieces.';
     return 'Solid action entertainment with satisfying combat and stunts.';
   }
   if (fromTrueStoryCollection) {
     if (scoreValue >= 90) return 'A historically profound and accurate masterpiece that defined an era.';
     if (scoreValue >= 80) return 'A highly impactful true story with incredible dramatic tension.';
     return 'A compelling movie based on true events with solid performances.';
   }
   if (fromDecadeCollection) {
     if (scoreValue >= 90) return 'A decade-defining cinematic masterpiece with groundbreaking visual and narrative achievements.';
     if (scoreValue >= 80) return 'An essential film of the 2020s with immense cultural and visceral impact.';
     return 'A highly influential modern film that left a significant mark on the decade.';
   }
   if (fromGangsterCollection) {
     if (scoreValue >= 90) return 'A defining cinematic masterpiece of the criminal underworld with profound narrative authenticity and moral complexity.';
     if (scoreValue >= 80) return 'A deeply compelling gangster epic with high visceral impact and iconic characters.';
     return 'A solid gangster film exploring the brutal realities of the criminal life.';
   }
   if (fromBookAdaptationCollection) {
     if (scoreValue >= 90) return 'A flawless adaptation that honors the original text while elevating it into an unforgettable cinematic masterpiece.';
     if (scoreValue >= 80) return 'A highly faithful and emotionally resonant translation of the written word to the screen.';
     return 'A solid book-to-movie adaptation with great performances and literary depth.';
   }
   if (fromMarriageCrisisCollection) {
     if (scoreValue >= 90) return 'An emotionally devastating, incredibly raw, and hauntingly authentic portrayal of a marriage in crisis.';
     if (scoreValue >= 80) return 'A powerful and heartbreaking exploration of love, resentment, and relationship breakdown.';
     return 'A solid, emotionally challenging look at the difficult realities of marriage and divorce.';
   }
   if (fromFightClubCollection) {
     if (scoreValue >= 90) return 'Total systemic collapse and extreme psychological fracture. Pure cinematic anarchy.';
     if (scoreValue >= 80) return 'Highly chaotic and subversive, deeply questioning the foundations of modern society.';
     return 'A dark exploration of identity fracture and anti-system rebellion.';
   }
   if (fromA24Collection) {
     if (scoreValue >= 90) return 'A deeply profound, artistically complex masterpiece that defines modern auteur cinema.';
     if (scoreValue >= 80) return 'A highly resonant and visually striking film with uncompromising artistic vision.';
     return 'A compelling A24 film with unique storytelling and emotional depth.';
   }
   if (fromDarkComedyCollection) {
     if (scoreValue >= 90) return 'A pitch-black, uncompromising masterpiece of cynical humor.';
     if (scoreValue >= 80) return 'Highly absurd and bleakly hilarious satire.';
     return 'A sharp, dark comedy with biting social commentary.';
   }
   if (fromPtaCollection) {
     if (scoreValue >= 95) return 'A masterclass in modern American cinema. A defining cultural milestone.';
     if (scoreValue >= 85) return 'A complex, ambitious, and brilliantly executed character study.';
     return 'A compelling film showcasing PTA\'s signature auteur vision.';
   }
       if (fromBasicInstinctCollection) {
         if (scoreValue >= 90) return 'A masterful, steamy neo-noir with intense psychological manipulation and deadly stakes.';
         if (scoreValue >= 80) return 'A highly charged erotic thriller filled with dangerous seduction and suspense.';
         return 'A solid psychological thriller balancing desire and danger perfectly.';
       }
   if (fromEnemiesToLoversCollection) {
     if (scoreValue >= 90) return 'Electrifying chemistry with the ultimate slow-burn payoff. A masterpiece of romantic tension.';
     if (scoreValue >= 80) return 'A deeply satisfying enemies-to-lovers arc filled with sharp banter and undeniable sparks.';
     return 'A fun, engaging romance with great friction and sweet moments.';
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
   if (fromInceptionCollection) return 'border-yellow-400/40'; // Assuming yellow for inception
   if (fromShutterIslandCollection) return 'border-yellow-400/40'; // Assuming yellow for shutter island
   if (fromMementoCollection) return 'border-yellow-400/40'; // Assuming yellow for memento
   if (fromHboMaxThrillerCollection) return 'border-red-500/40'; 
   if (fromHboMaxFamilyCollection || fromHuluFamilyCollection || fromParamountFamilyCollection || fromPeacockFamilyCollection) return 'border-yellow-400/40';
   if (fromHboMaxSciFiCollection) return 'border-cyan-500/40'; 
   if (fromHboMaxHorrorCollection || fromParamountHorrorCollection) return 'border-red-700/40';
   if (fromHboMaxBestCollection || fromParamountBestCollection || fromPeacockBestCollection) return 'border-amber-500/40'; // ✅ ADDED
   if (fromHboMaxDramaCollection || fromParamountDramaCollection) return 'border-indigo-500/40'; 
   if (fromHboMaxComedyCollection || fromParamountComedyCollection || fromPeacockComedyCollection) return 'border-yellow-500/40';
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
   if (fromPrestigeCollection) return 'border-blue-400/40'; 
   if (fromEroticThrillerCollection) return 'border-rose-600/40';
   if (fromEroticRomanceCollection) return 'border-pink-500/40';
   if (fromGreedCollection) return 'border-emerald-600/40';
   if (fromRaunchyComedyCollection) return 'border-pink-600/40';
   if (fromRoadTripCollection) return 'border-amber-600/40';
   if (fromThoughtProvokingCollection) return 'border-indigo-600/40';
   if (fromNeoNoirCollection) return 'border-pink-700/40';
   if (fromBestActionMoviesCollection) return 'border-red-600/40';
   if (fromTrueStoryCollection) return 'border-amber-700/40';
   if (fromDecadeCollection) return 'border-amber-500/40';
   if (fromGangsterCollection) return 'border-red-800/40';
   if (fromBookAdaptationCollection) return 'border-blue-500/40';
   if (fromMarriageCrisisCollection) return 'border-slate-500/40';
   if (fromFightClubCollection) return 'border-red-700/40';
   if (fromA24Collection) return 'border-amber-500/40';
   if (fromPtaCollection) return 'border-stone-500/40';
   if (fromDarkComedyCollection) return 'border-zinc-500/40';
   if (fromBasicInstinctCollection) return 'border-rose-700/40';
   if (fromEnemiesToLoversCollection) return 'border-rose-500/40';
   return 'border-yellow-400/40';
 };

 const getStarColor = () => {
   if (fromHboActionCollection) return 'text-red-600';
   if (fromHboRomanceCollection) return 'text-pink-500'; 
   if (fromInceptionCollection) return 'text-yellow-400';
   if (fromShutterIslandCollection) return 'text-yellow-400';
   if (fromMementoCollection) return 'text-yellow-400';
   if (fromHboMaxThrillerCollection) return 'text-red-500'; 
   if (fromHboMaxFamilyCollection || fromHuluFamilyCollection || fromParamountFamilyCollection || fromPeacockFamilyCollection) return 'text-yellow-400';
   if (fromHboMaxSciFiCollection) return 'text-cyan-500'; 
   if (fromHboMaxHorrorCollection || fromParamountHorrorCollection) return 'text-red-600';
   if (fromHboMaxBestCollection || fromParamountBestCollection || fromPeacockBestCollection) return 'text-amber-500'; // ✅ ADDED
   if (fromHboMaxDramaCollection || fromParamountDramaCollection) return 'text-indigo-500'; 
   if (fromHboMaxComedyCollection || fromParamountComedyCollection || fromPeacockComedyCollection) return 'text-yellow-500';
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
   if (fromPrestigeCollection) return 'text-blue-400';
   if (fromEroticThrillerCollection) return 'text-rose-500';
   if (fromEroticRomanceCollection) return 'text-pink-500';
   if (fromGreedCollection) return 'text-emerald-500';
   if (fromRaunchyComedyCollection) return 'text-pink-500';
   if (fromRoadTripCollection) return 'text-amber-500';
   if (fromThoughtProvokingCollection) return 'text-indigo-500';
   if (fromNeoNoirCollection) return 'text-pink-600';
   if (fromBestActionMoviesCollection) return 'text-red-600';
   if (fromTrueStoryCollection) return 'text-amber-600';
   if (fromDecadeCollection) return 'text-amber-500';
   if (fromGangsterCollection) return 'text-red-700';
   if (fromBookAdaptationCollection) return 'text-blue-500';
   if (fromMarriageCrisisCollection) return 'text-slate-500';
   if (fromFightClubCollection) return 'text-red-700';
   if (fromA24Collection) return 'text-amber-500';
   if (fromPtaCollection) return 'text-stone-400';
   if (fromDarkComedyCollection) return 'text-zinc-400';
   if (fromBasicInstinctCollection) return 'text-rose-600';
   if (fromEnemiesToLoversCollection) return 'text-rose-500';
   return 'text-yellow-400';
 };

  return (
<motion.div
  className="space-y-12 mt-16"
  initial={{ opacity: 1, y: 40 }} // WAS: opacity: 0
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
      <div className="text-center space-y-6">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-extralight tracking-tight sm:tracking-wider text-white"
          style={{ fontFamily: "'Playfair Display', serif" }}
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          {title}
        </motion.h2>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 sm:space-x-6 text-gray-400 text-xs sm:text-sm tracking-normal sm:tracking-wider uppercase"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span>{year}</span>
          <span>•</span>
          <span>{dynamicMovieData.director}</span>
          <span>•</span>
          <span>{dynamicMovieData.runtime}</span>
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
        initial={{ opacity: 1, y: 0 }}
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

      {/* 🔥 MOVED SENSITIVE CONTENT HIGH UP TO IMMEDIATELY SHOW TIMESTAMP VALUE 🔥 */}
      <SensitiveContentTimelineSection movie={{...movie, Runtime: dynamicMovieData.runtime}} sensitiveScenes={sensitiveScenes} />

      {/* 🔥 THE BOUNCE INTERCEPTOR: FAN FAVORITES 🔥 */}
      <FanFavoritesSection currentMovieSlug={movie.slug} />

      {/* ✅ SEO FIX: Only render graphs if data exists! No placeholder data shown to users. */}
      {safeMovieInfo?.scenes && safeMovieInfo.scenes.length > 0 && (
        <EnhancedIntensityGraph 
            scenes={safeMovieInfo.scenes} 
            dominantColor={safeMovieInfo.dominantColor} 
            aria-label={`Intensity graph showing narrative peaks for ${movie.Title}.`}
        />
      )}
      
      {/* ✅ SEO FIX: Only render DNA if data exists! No placeholder data shown to users. */}
      {safeMovieInfo?.dna && Object.keys(safeMovieInfo.dna).length > 0 && (
        <StrategicDNAHelix 
            dna={safeMovieInfo.dna} 
            dominantColor={safeMovieInfo.dominantColor} 
            aria-label={`Genre DNA breakdown for ${movie.Title}: ${Object.entries(safeMovieInfo.dna || {}).map(([k, v]) => `${k} ${v}%`).join(', ')}.`}
        />
      )}

      <EnhancedWhereToWatchSection movie={movie} />

      {/* ❌ REMOVED THE DANGEROUS SR-ONLY BLOCK HERE ❌ */}

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
        : fromParamountBestCollection ? <ParamountBestSEOFAQSection movie={movie} />
        : fromPeacockBestCollection ? <PeacockBestSEOFAQSection movie={movie} />
        : fromPeacockComedyCollection ? <PeacockComedySEOFAQSection movie={movie} />
        : fromPeacockActionAdventureCollection ? <PeacockActionAdventureSEOFAQSection movie={movie} />
        : fromPeacockSciFiCollection ? <PeacockSciFiSEOFAQSection movie={movie} />
        : fromPeacockRomanceCollection ? <PeacockRomanceSEOFAQSection movie={movie} />
        : fromPeacockFamilyCollection ? <PeacockFamilySEOFAQSection movie={movie} />
        : fromPeacockDramaCollection ? <PeacockDramaSEOFAQSection movie={movie} />
        : fromPeacockThrillerCollection ? <PeacockThrillerSEOFAQSection movie={movie} />
        : fromDonnieDarkoCollection ? <DonnieDarkoSEOFAQSection movie={movie} />
        : fromFightClubCollection ? <FightClubSEOFAQSection movie={movie} />
        : fromParasiteCollection ? <ParasiteSEOFAQSection movie={movie} />
        : fromMatrixCollection ? <MatrixSEOFAQSection movie={movie} />
        : fromOldboyCollection ? <OldboySEOFAQSection movie={movie} />
        : fromBlackSwanCollection ? <BlackSwanSEOFAQSection movie={movie} />
        : fromEyesWideShutCollection ? <EyesWideShutSEOFAQSection movie={movie} />
        : fromEroticThrillerCollection ? <EroticThrillerSEOFAQSection movie={movie} />
        : fromEroticRomanceCollection ? <EroticRomanceSEOFAQSection movie={movie} />
        : fromGreedCollection ? <GreedSEOFAQSection movie={movie} />
        : fromRaunchyComedyCollection ? <RaunchyComedySEOFAQSection movie={movie} />
        : fromRoadTripCollection ? <RoadTripSEOFAQSection movie={movie} />
        : fromThoughtProvokingCollection ? <ThoughtProvokingSEOFAQSection movie={movie} />
        : fromNeoNoirCollection ? <NeoNoirSEOFAQSection movie={movie} />
        : fromBestActionMoviesCollection ? <BestActionMoviesSEOFAQSection movie={movie} />
        : fromTrueStoryCollection ? <TrueStorySEOFAQSection movie={movie} />
        : fromGangsterCollection ? <GangsterSEOFAQSection movie={movie} />
        : fromBookAdaptationCollection ? <BookAdaptationSEOFAQSection movie={movie} />
        : fromMarriageCrisisCollection ? <MarriageCrisisSEOFAQSection movie={movie} />
        : fromA24Collection ? <A24SEOFAQSection movie={movie} />
        : fromDarkComedyCollection ? <DarkComedySEOFAQSection movie={movie} />
        : fromPtaCollection ? <PtaSEOFAQSection movie={movie} />
        : fromBasicInstinctCollection ? <BasicInstinctSEOFAQSection movie={movie} />
        : fromEnemiesToLoversCollection ? <EnemiesToLoversSEOFAQSection movie={movie} />
        : fromDecadeCollection ? <DecadeSEOFAQSection movie={movie} />
        : fromPrestigeCollection ? <PrestigeSEOFAQSection movie={movie} />
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
        
        // Final safety fallbacks so empty FAQ isn't rendered
        : fromInceptionCollection ? <SEOFAQSection movie={movie} />
        : fromShutterIslandCollection ? <SEOFAQSection movie={movie} />
        : fromMementoCollection ? <SEOFAQSection movie={movie} />
        : movieInfo?.faqs ? <SEOFAQSection movie={movie} /> : null
      }
    </motion.div>
  );
});

MovieDetailsSection.displayName = 'MovieDetailsSection';
export default MovieDetailsSection;