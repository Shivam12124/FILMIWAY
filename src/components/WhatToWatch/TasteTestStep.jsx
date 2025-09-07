import React, { useState, useEffect } from "react";

const TasteTestStep = ({ likedMovies, onUpdate, onGenerateRecommendations, onPrev }) => {
  const [selected, setSelected] = useState(likedMovies);
  const [popularMovies, setPopularMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const TMDB_API_KEY = "6054e5498fb2619274454959c38bbdfa";
  const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  const fetchPopularMovies = async () => {
    try {
      // Get a curated mix of popular movies from different pages
      const responses = await Promise.all([
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&page=1`),
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_API_KEY}&page=1`),
        fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}`)
      ]);

      const [popular, topRated, trending] = await Promise.all(
        responses.map(res => res.json())
      );

      // Mix and curate 20 diverse movies
      const allMovies = [
        ...popular.results.slice(0, 8),
        ...topRated.results.slice(0, 7),
        ...trending.results.slice(0, 5)
      ];

      // Remove duplicates and shuffle
      const uniqueMovies = allMovies.filter((movie, index, self) => 
        index === self.findIndex(m => m.id === movie.id)
      );

      setPopularMovies(shuffleArray(uniqueMovies).slice(0, 20));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movies:", error);
      setLoading(false);
    }
  };

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleMovieSelect = (movie) => {
    const newSelected = selected.find(m => m.id === movie.id)
      ? selected.filter(m => m.id !== movie.id)
      : [...selected, movie];
    
    setSelected(newSelected);
    onUpdate(newSelected);
  };

  const canProceed = selected.length >= 3;

  if (loading) {
    return (
      <div className="taste-test-step loading">
        <div className="loading-spinner">🎬</div>
        <p>Curating movie selection...</p>
      </div>
    );
  }

  return (
    <div className="taste-test-step">
      <div className="step-header">
        <h1 className="step-title">Which of these have you seen and loved?</h1>
        <p className="step-subtitle">Select at least 3 movies to help us understand your taste</p>
        <div className="selection-counter">
          {selected.length}/3+ selected
        </div>
      </div>

      <div className="movies-grid">
        {popularMovies.map((movie) => (
          <div
            key={movie.id}
            className={`movie-poster-card ${selected.find(m => m.id === movie.id) ? 'selected' : ''}`}
            onClick={() => handleMovieSelect(movie)}
          >
            <img
              src={`${TMDB_IMAGE_BASE}${movie.poster_path}`}
              alt={movie.title}
              className="movie-poster"
            />
            <div className="movie-overlay">
              <div className="movie-title">{movie.title}</div>
              <div className="movie-year">
                {new Date(movie.release_date).getFullYear()}
              </div>
            </div>
            {selected.find(m => m.id === movie.id) && (
              <div className="selection-indicator">✓</div>
            )}
          </div>
        ))}
      </div>

      <div className="step-actions">
        <button className="prev-btn" onClick={onPrev}>
          Back
        </button>
        <button
          className={`generate-btn ${canProceed ? 'enabled' : 'disabled'}`}
          onClick={onGenerateRecommendations}
          disabled={!canProceed}
        >
          🎯 Get My Recommendations
        </button>
      </div>

      <style jsx>{`
        .taste-test-step {
          padding: 2rem 0;
          text-align: center;
        }

        .taste-test-step.loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 400px;
        }

        .loading-spinner {
          font-size: 4rem;
          animation: spin 2s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .step-header {
          margin-bottom: 2rem;
        }

        .step-title {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 600;
          color: #fff;
          margin-bottom: 0.5rem;
          font-family: 'Chillax', Arial, sans-serif;
        }

        .step-subtitle {
          font-size: 1.1rem;
          color: #a0a0a0;
          font-weight: 400;
          margin-bottom: 1rem;
        }

        .selection-counter {
          display: inline-block;
          background: rgba(255, 107, 107, 0.2);
          color: #ff6b6b;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .movies-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
        }

        .movie-poster-card {
          position: relative;
          cursor: pointer;
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 3px solid transparent;
        }

        .movie-poster-card:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .movie-poster-card.selected {
          border-color: #00ff88;
          box-shadow: 0 0 0 2px rgba(0, 255, 136, 0.3);
        }

        .movie-poster {
          width: 100%;
          height: 220px;
          object-fit: cover;
          transition: all 0.3s ease;
        }

        .movie-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
          padding: 1rem;
          color: #fff;
          text-align: left;
        }

        .movie-title {
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
          line-height: 1.2;
        }

        .movie-year {
          font-size: 0.8rem;
          color: #ccc;
        }

        .selection-indicator {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 30px;
          height: 30px;
          background: #00ff88;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: bold;
          font-size: 1.2rem;
        }

        .step-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .prev-btn, .generate-btn {
          border: none;
          border-radius: 50px;
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Chillax', Arial, sans-serif;
        }

        .prev-btn {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
        }

        .prev-btn:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .generate-btn.enabled {
          background: linear-gradient(135deg, #00ff88, #00d4aa);
          color: #fff;
        }

        .generate-btn.enabled:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 255, 136, 0.4);
        }

        .generate-btn.disabled {
          background: rgba(255, 255, 255, 0.1);
          color: #666;
          cursor: not-allowed;
        }

        @media (max-width: 768px) {
          .movies-grid {
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
            gap: 1rem;
          }

          .movie-poster {
            height: 180px;
          }
        }
      `}</style>
    </div>
  );
};

export default TasteTestStep;
