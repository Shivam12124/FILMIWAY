import fs from 'fs';
import path from 'path';

// ⚡ ALL 74 MOVIE DATABASES IMPORTED 
import * as SURVIVAL from '../../utils/survivalMovieData';
import * as MATRIX from '../../utils/matrixMovieData';
import * as SE7EN from '../../utils/se7enMovieData';
import * as PARASITE from '../../utils/parasiteMovieData'; 
import * as OLDBOY from '../../utils/oldboyMovieData'; 
import * as DONNIE_DARKO from '../../utils/donnieDarkoMovieData';
import * as FIGHT_CLUB from '../../utils/fightClubMovieData';
import * as BLACK_SWAN from '../../utils/blackSwanMovieData';
import * as EYES_WIDE_SHUT from '../../utils/eyesWideShutMovieData';
import * as PRESTIGE from '../../utils/prestigeMovieData';
import * as EROTIC_THRILLER from '../../utils/eroticThrillerMovieData';
import * as EROTIC_ROMANCE from '../../utils/eroticRomanceMovieData';
import * as GREED from '../../utils/greedMovieData';
import * as INTERSTELLAR from '../../utils/interstellarMovieData';
import * as CRIME_THRILLER from '../../utils/crimeThrillerMovieData';
import * as WAR_FILMS from '../../utils/warFilmsMovieData';
import * as HULU_ACTION from '../../utils/huluActionMovieData';
import * as HULU_ROMANCE from '../../utils/huluRomanceMovieData';
import * as HULU_HORROR from '../../utils/huluHorrorMovieData';
import * as HULU_COMEDY from '../../utils/huluComedyMovieData';
import * as HULU_SCIFI from '../../utils/huluSciFiMovieData';
import * as HULU_THRILLER from '../../utils/huluThrillerMovieData';
import * as MOVIE_DATA from '../../utils/movieData';
import * as HULU_BEST from '../../utils/huluBestMoviesData';
import * as HULU_DRAMA from '../../utils/huluDramaMovieData';
import * as HBO_MAX_COMEDY from '../../utils/hboMaxComedyMovieData';
import * as PARAMOUNT_ACTION from '../../utils/paramountActionMovieData';
import * as PARAMOUNT_SCIFI from '../../utils/paramountSciFiMovieData';
import * as PARAMOUNT_ROMANCE from '../../utils/paramountRomanceMovieData';
import * as PARAMOUNT_DRAMA from '../../utils/paramountDramaMovieData';
import * as PARAMOUNT_THRILLER from '../../utils/paramountThrillerMovieData';
import * as PARAMOUNT_FAMILY from '../../utils/paramountFamilyMovieData';
import * as PARAMOUNT_HORROR from '../../utils/paramountHorrorMovieData';
import * as PARAMOUNT_COMEDY from '../../utils/paramountComedyMovieData';
import * as PARAMOUNT_BEST from '../../utils/paramountBestMoviesData';
import * as PEACOCK_ACTION_ADVENTURE from '../../utils/peacockActionAdventureData';
import * as PEACOCK_SCIFI from '../../utils/peacockSciFiMovieData';
import * as PEACOCK_ROMANCE from '../../utils/peacockRomanceMovieData';
import * as PEACOCK_FAMILY from '../../utils/peacockFamilyMovieData';
import * as PEACOCK_DRAMA from '../../utils/peacockDramaMovieData';
import * as PEACOCK_THRILLER from '../../utils/peacockThrillerMovieData';
import * as PEACOCK_BEST from '../../utils/peacockBestMoviesData';
import * as PEACOCK_COMEDY from '../../utils/peacockComedyMovieData';
import * as RAUNCHY_COMEDY from '../../utils/raunchyComedyMovieData';
import * as ROAD_TRIP from '../../utils/roadTripMovieData';
import * as THOUGHT_PROVOKING from '../../utils/thoughtProvokingMovieData';
import * as NEO_NOIR from '../../utils/neoNoirMovieData';
import * as BEST_ACTION from '../../utils/bestActionMoviesData';
import * as TRUE_STORY from '../../utils/trueStoryMovieData';
import * as GANGSTER from '../../utils/gangsterMovieData';
import * as DECADE from '../../utils/decadeMovieData';
import * as BOOK_ADAPTATION from '../../utils/bookAdaptationData';
import * as MARRIAGE_CRISIS from '../../utils/marriageCrisisMovieData';
import * as A24 from '../../utils/a24MovieData';
import * as DARK_COMEDY from '../../utils/darkComedyMovieData';
import * as PTA from '../../utils/ptaMoviesData';
import * as BASIC_INSTINCT from '../../utils/basicInstinctMovieData';
import * as HULU_FAMILY from '../../utils/huluFamilyMovieData';
import * as HBO_ACTION from '../../utils/hboActionMovieData';
import * as HBO_MAX_ROMANCE from '../../utils/hboMaxRomanceMovieData';
import * as HBO_MAX_THRILLER from '../../utils/hboMaxThrillerMovieData';
import * as HBO_MAX_FAMILY from '../../utils/hboMaxFamilyMovieData';
import * as HBO_MAX_SCIFI from '../../utils/hboMaxSciFiMovieData';
import * as HBO_MAX_HORROR from '../../utils/hboMaxHorrorMovieData';
import * as HBO_MAX_BEST from '../../utils/hboMaxBestMoviesData';
import * as HBO_MAX_DRAMA from '../../utils/hboMaxDramaMovieData';
import * as SCI_FI from '../../utils/sciFiMovieData';
import * as THRILLER_MOVIES from '../../utils/thrillerMovieData';
import * as MYSTERY_THRILLER from '../../utils/mysteryThrillerMovieData'; 
import * as DETECTIVE_THRILLER from '../../utils/detectiveThrillerMovieData';
import * as PSYCH_THRILLER from '../../utils/psychologicalThrillerMovieData'; 
import * as HEIST_THRILLER from '../../utils/heistThrillerMovieData';
import * as TIME_TRAVEL from '../../utils/timeTravelMovieData';
import * as REVENGE from '../../utils/revengeMovieData';

export default function handler(req, res) {
  const allModules = [
    SURVIVAL, MATRIX, SE7EN, PARASITE, OLDBOY, DONNIE_DARKO, FIGHT_CLUB, BLACK_SWAN, EYES_WIDE_SHUT, PRESTIGE, EROTIC_THRILLER, EROTIC_ROMANCE, GREED, INTERSTELLAR, CRIME_THRILLER, WAR_FILMS, HULU_ACTION, HULU_ROMANCE, HULU_HORROR, HULU_COMEDY, HULU_SCIFI, HULU_THRILLER, MOVIE_DATA, HULU_BEST, HULU_DRAMA, HBO_MAX_COMEDY, PARAMOUNT_ACTION, PARAMOUNT_SCIFI, PARAMOUNT_ROMANCE, PARAMOUNT_DRAMA, PARAMOUNT_THRILLER, PARAMOUNT_FAMILY, PARAMOUNT_HORROR, PARAMOUNT_COMEDY, PARAMOUNT_BEST, PEACOCK_ACTION_ADVENTURE, PEACOCK_SCIFI, PEACOCK_ROMANCE, PEACOCK_FAMILY, PEACOCK_DRAMA, PEACOCK_THRILLER, PEACOCK_BEST, PEACOCK_COMEDY, RAUNCHY_COMEDY, ROAD_TRIP, THOUGHT_PROVOKING, NEO_NOIR, BEST_ACTION, TRUE_STORY, GANGSTER, DECADE, BOOK_ADAPTATION, MARRIAGE_CRISIS, A24, DARK_COMEDY, PTA, BASIC_INSTINCT, HULU_FAMILY, HBO_ACTION, HBO_MAX_ROMANCE, HBO_MAX_THRILLER, HBO_MAX_FAMILY, HBO_MAX_SCIFI, HBO_MAX_HORROR, HBO_MAX_BEST, HBO_MAX_DRAMA, SCI_FI, THRILLER_MOVIES, MYSTERY_THRILLER, DETECTIVE_THRILLER, PSYCH_THRILLER, HEIST_THRILLER, TIME_TRAVEL, REVENGE
  ];

  const masterTimestamps = {};
  const titleMap = {};

  // ⚡ 1. Build a lookup map so we know the Title for every TMDB ID
  allModules.forEach(mod => {
    if (!mod) return;
    const db = mod.COMPLETE_MOVIE_DATABASE || mod.SCI_FI_MOVIES || mod.COMPLETE_SCI_FI_DATABASE || mod.THRILLER_MOVIES || mod.MYSTERY_THRILLER_MOVIES || mod.DETECTIVE_THRILLER_MOVIES || mod.PSYCH_THRILLER_MOVIES || mod.HEIST_THRILLER_MOVIES || mod.TIME_TRAVEL_MOVIES || mod.REVENGE_MOVIES || mod.WAR_FILMS;
    if (db) {
      const moviesArray = Array.isArray(db) ? db : Object.values(db);
      moviesArray.forEach(m => {
        if (m && m.tmdbId) {
          titleMap[m.tmdbId] = m.Title || m.title || "Unknown Movie";
        }
      });
    }
  });

  allModules.forEach(mod => {
    if (mod && mod.SENSITIVE_TIMELINES) {
      Object.keys(mod.SENSITIVE_TIMELINES).forEach(tmdbId => {
        const currentScenes = mod.SENSITIVE_TIMELINES[tmdbId].scenes;
        
        // ⚡ THE MAGIC LOGIC: Automatically keeps the version that ACTUALLY has scenes!
        if (!masterTimestamps[tmdbId] || (masterTimestamps[tmdbId].scenes?.length === 0 && currentScenes?.length > 0)) {
          masterTimestamps[tmdbId] = {
            Title: titleMap[tmdbId] || "Unknown Movie",
            ...mod.SENSITIVE_TIMELINES[tmdbId]
          };
        }
      });
    }
  });

  const filePath = path.join(process.cwd(), 'utils', 'masterTimestamps.json');
  fs.writeFileSync(filePath, JSON.stringify(masterTimestamps, null, 4));

  res.status(200).json({ 
    success: true, 
    message: "✅ SUCCESS! masterTimestamps.json perfectly created!",
    totalMoviesExtracted: Object.keys(masterTimestamps).length 
  });
}
