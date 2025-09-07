import React, { useState } from "react";

const MovieRankCard = ({ movie, rank, onNext, onPrev, onRate, hasNext, hasPrev, user }) => {
  const [selectedRating, setSelectedRating] = useState("");
  const [comment, setComment] = useState("");
  const [showRatingForm, setShowRatingForm] = useState(false);

  const ratingOptions = [
    { id: "disappointment", label: "A Disappointment", color: "#ff4757" },
    { id: "flawed", label: "Flawed", color: "#ffa502" },
    { id: "worth-ride", label: "Worth the Ride", color: "#3742fa" },
    { id: "exceptional", label: "Exceptional", color: "#2ed573" }
  ];

  const handleSubmitRating = () => {
    if (selectedRating) {
      onRate(movie.id, selectedRating, comment);
      setShowRatingForm(false);
      setSelectedRating("");
      setComment("");
    }
  };

  const getComplexityLevel = (complexity) => {
    if (complexity >= 95) return { label: "🔥 Extreme", color: "#ff4757" };
    if (complexity >= 85) return { label: "🌶️ High", color: "#ffa502" };
    if (complexity >= 70) return { label: "🧠 Medium", color: "#3742fa" };
    return { label: "🌱 Low", color: "#2ed573" };
  };

  const complexityLevel = getComplexityLevel(movie.complexity);

  return (
    <div className="movie-rank-card">
      <div className="rank-badge">#{rank}</div>
      
      <div className="movie-content">
        <div className="movie-poster-section">
          <img 
            src={movie.poster} 
            alt={`${movie.title} poster`}
            className="movie-poster"
          />
          
          <div className="movie-info">
            <h2 className="movie-title">{movie.title}</h2>
            <span className="movie-year">({movie.year})</span>
            <p className="movie-description">{movie.description}</p>
          </div>
        </div>

        <div className="visual-features">
          {/* Intensity Graph */}
          <div className="feature-section">
            <h3 className="feature-title">Intensity Graph</h3>
            <div className="intensity-graph">
              {movie.intensityPoints.map((point, index) => (
                <div
                  key={index}
                  className="intensity-bar"
                  style={{ height: `${point}%` }}
                />
              ))}
            </div>
          </div>

          {/* Genre DNA Strand */}
          <div className="feature-section">
            <h3 className="feature-title">Genre DNA</h3>
            <div className="dna-strand">
              {Object.entries(movie.genres).map(([genre, percentage], index) => (
                <div
                  key={genre}
                  className={`dna-segment ${genre}`}
                  style={{ 
                    width: `${percentage}%`,
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  <span className="dna-label">{genre.toUpperCase()} {percentage}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Complexity Bar */}
          <div className="feature-section">
            <h3 className="feature-title">Mind-Bending Level</h3>
            <div className="complexity-container">
              <div className="complexity-bar">
                <div 
                  className="complexity-fill"
                  style={{ 
                    width: `${movie.complexity}%`,
                    background: complexityLevel.color
                  }}
                />
              </div>
              <span 
                className="complexity-label"
                style={{ color: complexityLevel.color }}
              >
                {complexityLevel.label}
              </span>
            </div>
          </div>

          {/* Sensitive Timeline */}
          <div className="feature-section">
            <h3 className="feature-title">Sensitive Timeline</h3>
            <div className="timeline-container">
              {movie.sensitiveTimeline.length > 0 ? (
                <div className="sensitive-timeline">
                  <div className="timeline-track">
                    {movie.sensitiveTimeline.map((scene, index) => (
                      <div
                        key={index}
                        className={`sensitive-marker ${scene.type}`}
                        title={`${scene.start} - ${scene.end}: ${scene.type}`}
                      />
                    ))}
                  </div>
                  <div className="timeline-labels">
                    <span>0:00</span>
                    <span>Runtime</span>
                  </div>
                </div>
              ) : (
                <div className="safe-indicator">
                  ✅ Family Safe - No intimate scenes
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Rating Section */}
        {user && (
          <div className="rating-section">
            {!showRatingForm ? (
              <button 
                className="rate-button"
                onClick={() => setShowRatingForm(true)}
              >
                Rate This Film
              </button>
            ) : (
              <div className="rating-form">
                <h4>What did you think?</h4>
                <div className="rating-options">
                  {ratingOptions.map((option) => (
                    <button
                      key={option.id}
                      className={`rating-option ${selectedRating === option.id ? 'selected' : ''}`}
                      style={{ borderColor: option.color }}
                      onClick={() => setSelectedRating(option.id)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Add your thoughts (optional)"
                  className="comment-textarea"
                />
                <div className="rating-actions">
                  <button 
                    className="submit-rating"
                    onClick={handleSubmitRating}
                    disabled={!selectedRating}
                  >
                    Submit Rating
                  </button>
                  <button 
                    className="cancel-rating"
                    onClick={() => setShowRatingForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Navigation */}
        <div className="navigation-controls">
          <button 
            className="nav-button prev"
            onClick={onPrev}
            disabled={!hasPrev}
          >
            ← Previous
          </button>
          
          <button 
            className="nav-button next"
            onClick={onNext}
            disabled={!hasNext && rank === 1}
          >
            {rank === 1 ? "🔓 Unlock #1" : "Next →"}
          </button>
        </div>
      </div>

      <style jsx>{`
        .movie-rank-card {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 2rem;
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          animation: slideIn 0.6s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .rank-badge {
          position: absolute;
          top: -15px;
          left: 2rem;
          background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
          color: #fff;
          font-size: 1.5rem;
          font-weight: bold;
          padding: 0.5rem 1.5rem;
          border-radius: 20px;
          z-index: 10;
        }

        .movie-content {
          margin-top: 1rem;
        }

        .movie-poster-section {
          display: flex;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .movie-poster {
          width: 200px;
          height: 300px;
          border-radius: 16px;
          object-fit: cover;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }

        .movie-info {
          flex: 1;
        }

        .movie-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 0.5rem;
        }

        .movie-year {
          color: #a0a0a0;
          font-size: 1.2rem;
          margin-bottom: 1rem;
          display: block;
        }

        .movie-description {
          color: #e0e0e0;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .visual-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .feature-section {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .feature-title {
          color: #fff;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .intensity-graph {
          display: flex;
          align-items: flex-end;
          gap: 4px;
          height: 80px;
        }

        .intensity-bar {
          flex: 1;
          background: linear-gradient(to top, #ff6b6b, #4ecdc4);
          border-radius: 2px;
          min-height: 10%;
          animation: growUp 0.8s ease-out;
        }

        @keyframes growUp {
          from { height: 0; }
        }

        .dna-strand {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .dna-segment {
          height: 20px;
          border-radius: 10px;
          position: relative;
          animation: expandWidth 0.8s ease-out;
          display: flex;
          align-items: center;
          padding: 0 10px;
        }

        .dna-segment.scifi { background: #3742fa; }
        .dna-segment.thriller { background: #ff4757; }
        .dna-segment.mystery { background: #5f27cd; }
        .dna-segment.drama { background: #00d2d3; }
        .dna-segment.romance { background: #ff6b6b; }

        .dna-label {
          color: #fff;
          font-size: 0.8rem;
          font-weight: 600;
          white-space: nowrap;
        }

        @keyframes expandWidth {
          from { width: 0; }
        }

        .complexity-container {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .complexity-bar {
          height: 20px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          overflow: hidden;
        }

        .complexity-fill {
          height: 100%;
          border-radius: 10px;
          animation: fillBar 1s ease-out;
        }

        @keyframes fillBar {
          from { width: 0; }
        }

        .complexity-label {
          font-size: 1rem;
          font-weight: 600;
        }

        .timeline-container {
          min-height: 60px;
        }

        .sensitive-timeline {
          position: relative;
        }

        .timeline-track {
          height: 20px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          position: relative;
          overflow: hidden;
        }

        .sensitive-marker {
          position: absolute;
          height: 100%;
          width: 3px;
          border-radius: 2px;
        }

        .sensitive-marker.kissing { background: #ffa502; }
        .sensitive-marker.sex { background: #ff4757; }
        .sensitive-marker.nudity { background: #ff3838; }
        .sensitive-marker.intimate { background: #ff6b81; }

        .timeline-labels {
          display: flex;
          justify-content: space-between;
          margin-top: 5px;
          color: #a0a0a0;
          font-size: 0.8rem;
        }

        .safe-indicator {
          color: #2ed573;
          font-weight: 600;
          text-align: center;
          padding: 1rem;
        }

        .rating-section {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 1.5rem;
          margin-bottom: 2rem;
        }

        .rate-button {
          background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
          color: #fff;
          border: none;
          border-radius: 12px;
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .rate-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }

        .rating-form h4 {
          color: #fff;
          margin-bottom: 1rem;
        }

        .rating-options {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .rating-option {
          background: rgba(255, 255, 255, 0.05);
          color: #fff;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 0.75rem;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .rating-option:hover,
        .rating-option.selected {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .comment-textarea {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 1rem;
          font-family: inherit;
          resize: vertical;
          min-height: 80px;
        }

        .rating-actions {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .submit-rating,
        .cancel-rating {
          padding: 0.75rem 1.5rem;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-rating {
          background: linear-gradient(135deg, #2ed573, #1dd1a1);
          color: #fff;
          border: none;
        }

        .submit-rating:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .cancel-rating {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .navigation-controls {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
        }

        .nav-button {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .nav-button:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .nav-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .nav-button.next {
          background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
          border: none;
        }

        @media (max-width: 768px) {
          .movie-poster-section {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .visual-features {
            grid-template-columns: 1fr;
          }

          .navigation-controls {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default MovieRankCard;
