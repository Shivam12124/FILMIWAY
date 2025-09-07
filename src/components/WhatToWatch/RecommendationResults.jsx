import React from "react";
import { useState } from "react";

const RecommendationResults = ({ recommendations, userPreferences, onRestart }) => {
  const [hoveredMovie, setHoveredMovie] = useState(null);
  const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

  const getPlatformBadge = (movieId) => {
    // This would ideally come from a streaming availability API
    const platforms = ['Netflix', 'Prime Video', 'Disney+', 'HBO Max'];
    return platforms[Math.floor(Math.random() * platforms.length)];
  };

  const getIntensityLevel = (voteAverage) => {
    if (voteAverage >= 8) return { level: 'High', color: '#ff6b6b' };
    if (voteAverage >= 6.5) return { level: 'Medium', color: '#feca57' };
    return { level: 'Chill', color: '#48dbfb' };
  };

  const addToWatchlist = async (movie) => {
    // Firebase watchlist integration
    try {
      if (userPreferences.userId) {
        const watchlistRef = doc(db, "watchlists", userPreferences.userId);
        const watchlistDoc = await getDoc(watchlistRef);
        
        const currentMovies = watchlistDoc.exists() ? watchlistDoc.data().movies : [];
        const updatedMovies = [...currentMovies, movie];
        
        await setDoc(watchlistRef, { movies: updatedMovies }, { merge: true });
        alert("Added to your watchlist!");
      }
    } catch (error) {
      console.error("Error adding to watchlist:", error);
    }
  };

  return (
    <div className="recommendation-results">
      <div className="results-header">
        <h1 className="results-title">🎉 Perfect picks for tonight!</h1>
        <p className="results-subtitle">
          Based on your love for {userPreferences.genres.map(g => g.name || g).join(", ")} 
          {userPreferences.likedMovies.length > 0 && ` and movies like "${userPreferences.likedMovies[0].title}"`}
        </p>
      </div>

      <div className="recommendations-grid">
        {recommendations.map((movie, index) => (
          <div
            key={movie.id}
            className="recommendation-card"
            onMouseEnter={() => setHoveredMovie(movie.id)}
            onMouseLeave={() => setHoveredMovie(null)}
          >
            <div className="card-rank">#{index + 1}</div>
            
            <div className="movie-poster-container">
              <img
                src={`${TMDB_IMAGE_BASE}${movie.poster_path}`}
                alt={movie.title}
                className="recommendation-poster"
              />
              <div className="movie-overlay">
                <div className="movie-rating">⭐ {movie.vote_average.toFixed(1)}</div>
              </div>
            </div>

            <div className="movie-info">
              <h3 className="movie-title">{movie.title}</h3>
              <p className="movie-year">{new Date(movie.release_date).getFullYear()}</p>
              
              <div className="movie-badges">
                <span className="platform-badge">{getPlatformBadge(movie.id)}</span>
                <span 
                  className="intensity-badge"
                  style={{ background: getIntensityLevel(movie.vote_average).color }}
                >
                  {getIntensityLevel(movie.vote_average).level}
                </span>
              </div>

              {hoveredMovie === movie.id && (
                <div className="movie-actions">
                  <button 
                    className="action-btn watchlist"
                    onClick={() => addToWatchlist(movie)}
                  >
                    + Watchlist
                  </button>
                  <button className="action-btn more">
                    More Like This
                  </button>
                  <button className="action-btn trailer">
                    Play Trailer
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="results-actions">
        <button className="restart-btn" onClick={onRestart}>
          🔄 Try Again
        </button>
      </div>

      <style jsx>{`
        .recommendation-results {
          padding: 2rem 0;
          text-align: center;
        }

        .results-header {
          margin-bottom: 3rem;
        }

        .results-title {
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 600;
          color: #fff;
          margin-bottom: 1rem;
          font-family: 'Chillax', Arial, sans-serif;
        }

        .results-subtitle {
          font-size: 1.2rem;
          color: #a0a0a0;
          font-weight: 400;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.5;
        }

        .recommendations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }

        .recommendation-card {
          background: rgba(255, 255, 255, 0.08);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 1.5rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
          position: relative;
        }

        .recommendation-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .card-rank {
          position: absolute;
          top: -10px;
          left: -10px;
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #ff6b6b, #ff5722);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: bold;
          font-size: 1.1rem;
          z-index: 2;
        }

        .movie-poster-container {
          position: relative;
          margin-bottom: 1rem;
        }

        .recommendation-poster {
          width: 100%;
          height: 280px;
          object-fit: cover;
          border-radius: 12px;
        }

        .movie-overlay {
          position: absolute;
          top: 10px;
          right: 10px;
        }

        .movie-rating {
          background: rgba(0, 0, 0, 0.8);
          color: #fff;
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .movie-info {
          text-align: left;
        }

        .movie-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #fff;
          margin: 0 0 0.25rem 0;
          line-height: 1.3;
          font-family: 'Chillax', Arial, sans-serif;
        }

        .movie-year {
          font-size: 0.9rem;
          color: #ccc;
          margin: 0 0 1rem 0;
        }

        .movie-badges {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .platform-badge, .intensity-badge {
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          border-radius: 12px;
          font-weight: 600;
        }

        .platform-badge {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
        }

        .intensity-badge {
          color: #fff;
        }

        .movie-actions {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          animation: fadeInUp 0.3s ease;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .action-btn {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          border: none;
          border-radius: 8px;
          padding: 0.5rem;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .action-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-1px);
        }

        .action-btn.watchlist {
          background: rgba(0, 255, 136, 0.2);
          color: #00ff88;
        }

        .results-actions {
          text-align: center;
        }

        .restart-btn {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Chillax', Arial, sans-serif;
        }

        .restart-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};

export default RecommendationResults;
