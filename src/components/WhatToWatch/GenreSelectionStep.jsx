import React, { useState } from "react";

const GenreSelectionStep = ({ selectedGenres, onUpdate, onNext }) => {
  const [selected, setSelected] = useState(selectedGenres);

  const genres = [
    { id: 28, name: "Action", emoji: "💥", color: "#ff6b6b" },
    { id: 35, name: "Comedy", emoji: "😂", color: "#4ecdc4" },
    { id: 18, name: "Drama", emoji: "🎭", color: "#45b7d1" },
    { id: 27, name: "Horror", emoji: "👻", color: "#96ceb4" },
    { id: 10749, name: "Romance", emoji: "❤️", color: "#feca57" },
    { id: 878, name: "Sci-Fi", emoji: "🚀", color: "#ff9ff3" },
    { id: 53, name: "Thriller", emoji: "🔥", color: "#54a0ff" },
    { id: 9648, name: "Mystery", emoji: "🧩", color: "#5f27cd" },
    { id: 16, name: "Animation", emoji: "🎨", color: "#00d2d3" },
    { id: 12, name: "Adventure", emoji: "🗺️", color: "#ff9f43" },
    { id: 14, name: "Fantasy", emoji: "🧙‍♂️", color: "#a55eea" },
    { id: 80, name: "Crime", emoji: "🕵️", color: "#26de81" }
  ];

  const handleGenreSelect = (genreId) => {
    const newSelected = selected.includes(genreId)
      ? selected.filter(id => id !== genreId)
      : [...selected, genreId];
    
    setSelected(newSelected);
    onUpdate(newSelected);
  };

  const canProceed = selected.length > 0;

  return (
    <div className="genre-selection-step">
      <div className="step-header">
        <h1 className="step-title">What mood are you in tonight?</h1>
        <p className="step-subtitle">Select one or more genres that sound appealing</p>
      </div>

      <div className="genres-grid">
        {genres.map((genre) => (
          <div
            key={genre.id}
            className={`genre-card ${selected.includes(genre.id) ? 'selected' : ''}`}
            onClick={() => handleGenreSelect(genre.id)}
            style={{ '--genre-color': genre.color }}
          >
            <div className="genre-emoji">{genre.emoji}</div>
            <div className="genre-name">{genre.name}</div>
          </div>
        ))}
      </div>

      <div className="step-actions">
        <button
          className={`next-btn ${canProceed ? 'enabled' : 'disabled'}`}
          onClick={onNext}
          disabled={!canProceed}
        >
          Continue ({selected.length} selected)
        </button>
      </div>

      <style jsx>{`
        .genre-selection-step {
          padding: 2rem 0;
          text-align: center;
        }

        .step-header {
          margin-bottom: 3rem;
        }

        .step-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 600;
          color: #fff;
          margin-bottom: 0.5rem;
          font-family: 'Chillax', Arial, sans-serif;
        }

        .step-subtitle {
          font-size: 1.2rem;
          color: #a0a0a0;
          font-weight: 400;
        }

        .genres-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .genre-card {
          background: rgba(255, 255, 255, 0.08);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 1.5rem 1rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }

        .genre-card:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .genre-card.selected {
          background: linear-gradient(135deg, var(--genre-color), rgba(255, 255, 255, 0.1));
          border-color: var(--genre-color);
          box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
        }

        .genre-card.selected::before {
          content: '';
          position: absolute;
          top: 10px;
          right: 10px;
          width: 20px;
          height: 20px;
          background: #00ff88;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .genre-card.selected::after {
          content: '✓';
          position: absolute;
          top: 10px;
          right: 10px;
          color: #fff;
          font-weight: bold;
          font-size: 12px;
          z-index: 1;
        }

        .genre-emoji {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        .genre-name {
          font-size: 1rem;
          font-weight: 500;
          color: #fff;
          font-family: 'Chillax', Arial, sans-serif;
        }

        .step-actions {
          text-align: center;
        }

        .next-btn {
          background: linear-gradient(135deg, #ff6b6b, #ff5722);
          color: #fff;
          border: none;
          border-radius: 50px;
          padding: 1rem 2.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Chillax', Arial, sans-serif;
        }

        .next-btn.enabled:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(255, 107, 107, 0.4);
        }

        .next-btn.disabled {
          background: rgba(255, 255, 255, 0.1);
          cursor: not-allowed;
          transform: none;
        }

        @media (max-width: 768px) {
          .genres-grid {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default GenreSelectionStep;
