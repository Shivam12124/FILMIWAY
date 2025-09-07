"use client";
import React, { useState, useEffect } from "react";
import { auth, db } from "@/config/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import GenreSelectionStep from "./GenreSelectionStep";
import PlatformSelectionStep from "./PlatformSelectionStep";
import ContentPreferenceStep from "./ContentPreferenceStep";
import TasteTestStep from "./TasteTestStep";
import ProcessingScreen from "./ProcessingScreen";
import RecommendationResults from "./RecommendationResults";
import ProgressIndicator from "./ProgressIndicator";

const WhatToWatchWizard = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userPreferences, setUserPreferences] = useState({
    genres: [],
    platforms: ['all'],
    contentRating: 'no-restrictions',
    likedMovies: [],
    userId: null
  });
  const [recommendations, setRecommendations] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    // Set user ID from Firebase Auth
    if (auth.currentUser) {
      setUserPreferences(prev => ({ ...prev, userId: auth.currentUser.uid }));
    }
  }, []);

  const updatePreferences = (step, data) => {
    setUserPreferences(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateRecommendations = async () => {
    setIsProcessing(true);
    setCurrentStep(5); // Processing screen
    
    try {
      // Save user preferences to Firebase
      if (userPreferences.userId) {
        await setDoc(doc(db, "userPreferences", userPreferences.userId), {
          ...userPreferences,
          lastUpdated: new Date()
        });
      }

      // Call recommendation engine
      const recs = await getMovieRecommendations(userPreferences);
      setRecommendations(recs);
      
      // Wait a bit for dramatic effect
      setTimeout(() => {
        setIsProcessing(false);
        setCurrentStep(6); // Results screen
        if (onComplete) onComplete(recs);
      }, 3000);
    } catch (error) {
      console.error("Error generating recommendations:", error);
      setIsProcessing(false);
    }
  };

  return (
    <div className="what-to-watch-wizard">
      <div className="wizard-container">
        {/* Progress Indicator */}
        {currentStep <= 4 && (
          <ProgressIndicator currentStep={currentStep} totalSteps={4} />
        )}

        {/* Step Components */}
        {currentStep === 1 && (
          <GenreSelectionStep
            selectedGenres={userPreferences.genres}
            onUpdate={(genres) => updatePreferences('genres', { genres })}
            onNext={nextStep}
          />
        )}

        {currentStep === 2 && (
          <PlatformSelectionStep
            selectedPlatforms={userPreferences.platforms}
            onUpdate={(platforms) => updatePreferences('platforms', { platforms })}
            onNext={nextStep}
            onPrev={prevStep}
          />
        )}

        {currentStep === 3 && (
          <ContentPreferenceStep
            selectedRating={userPreferences.contentRating}
            onUpdate={(rating) => updatePreferences('contentRating', { contentRating: rating })}
            onNext={nextStep}
            onPrev={prevStep}
          />
        )}

        {currentStep === 4 && (
          <TasteTestStep
            likedMovies={userPreferences.likedMovies}
            onUpdate={(movies) => updatePreferences('likedMovies', { likedMovies: movies })}
            onGenerateRecommendations={generateRecommendations}
            onPrev={prevStep}
          />
        )}

        {currentStep === 5 && (
          <ProcessingScreen isProcessing={isProcessing} />
        )}

        {currentStep === 6 && (
          <RecommendationResults
            recommendations={recommendations}
            userPreferences={userPreferences}
            onRestart={() => {
              setCurrentStep(1);
              setUserPreferences({
                genres: [],
                platforms: ['all'],
                contentRating: 'no-restrictions',
                likedMovies: [],
                userId: auth.currentUser?.uid || null
              });
              setRecommendations([]);
            }}
          />
        )}
      </div>

      <style jsx>{`
        .what-to-watch-wizard {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f1419 0%, #1a2332 100%);
          padding: 2rem;
          font-family: 'Chillax', Arial, sans-serif;
        }

        .wizard-container {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
        }

        @media (max-width: 768px) {
          .what-to-watch-wizard {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

// Recommendation Engine Function
async function getMovieRecommendations(preferences) {
  const TMDB_API_KEY = "6054e5498fb2619274454959c38bbdfa";
  const { genres, platforms, contentRating, likedMovies } = preferences;
  
  try {
    // Build discovery URL with filters
    let discoverUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&sort_by=vote_average.desc&vote_count.gte=100`;
    
    // Add genre filter
    if (genres.length > 0) {
      discoverUrl += `&with_genres=${genres.join(',')}`;
    }
    
    // Add content rating filter
    const ratingMap = {
      'family-friendly': '&certification_country=US&certification.lte=PG',
      'teen-mature': '&certification_country=US&certification.lte=PG-13',
      'no-restrictions': '' // No filter
    };
    discoverUrl += ratingMap[contentRating] || '';
    
    // Fetch movies
    const response = await fetch(discoverUrl);
    const data = await response.json();
    
    // Simple content-based filtering based on liked movies
    let movies = data.results || [];
    
    if (likedMovies.length > 0) {
      // Get genres from liked movies for better filtering
      const likedGenres = new Set();
      likedMovies.forEach(movie => {
        movie.genre_ids?.forEach(id => likedGenres.add(id));
      });
      
      // Score movies based on genre overlap
      movies = movies.map(movie => {
        const genreOverlap = movie.genre_ids?.filter(id => likedGenres.has(id)).length || 0;
        return { ...movie, score: genreOverlap + (movie.vote_average / 2) };
      }).sort((a, b) => b.score - a.score);
    }
    
    // Return top 5
    return movies.slice(0, 5);
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    return [];
  }
}

export default WhatToWatchWizard;
