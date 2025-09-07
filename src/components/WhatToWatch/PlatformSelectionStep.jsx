import React, { useState } from "react";

const PlatformSelectionStep = ({ selectedPlatforms, onUpdate, onNext, onPrev }) => {
  const [selected, setSelected] = useState(selectedPlatforms);

  const platforms = [
    { id: 'all', name: 'All Platforms', icon: '🎬', color: '#6c5ce7' },
    { id: 'netflix', name: 'Netflix', icon: '🔴', color: '#e74c3c' },
    { id: 'prime', name: 'Prime Video', icon: '📺', color: '#00d4aa' },
    { id: 'disney', name: 'Disney+', icon: '🏰', color: '#0984e3' },
    { id: 'hbo', name: 'HBO Max', icon: '🎭', color: '#8b5cf6' },
    { id: 'hulu', name: 'Hulu', icon: '📱', color: '#1dd1a1' },
    { id: 'apple', name: 'Apple TV+', icon: '🍎', color: '#636e72' }
  ];

  const handlePlatformToggle = (platformId) => {
    if (platformId === 'all') {
      setSelected(['all']);
      onUpdate(['all']);
      return;
    }

    let newSelected;
    if (selected.includes('all')) {
      newSelected = [platformId];
    } else {
      newSelected = selected.includes(platformId)
        ? selected.filter(id => id !== platformId)
        : [...selected.filter(id => id !== 'all'), platformId];
    }
    
    if (newSelected.length === 0) {
      newSelected = ['all'];
    }
    
    setSelected(newSelected);
    onUpdate(newSelected);
  };

  return (
    <div className="platform-selection-step">
      <div className="step-header">
        <h1 className="step-title">Where do you want to watch?</h1>
        <p className="step-subtitle">Choose your preferred streaming platforms</p>
      </div>

      <div className="platforms-grid">
        {platforms.map((platform) => (
          <div
            key={platform.id}
            className={`platform-toggle ${selected.includes(platform.id) ? 'selected' : ''}`}
            onClick={() => handlePlatformToggle(platform.id)}
            style={{ '--platform-color': platform.color }}
          >
            <div className="platform-icon">{platform.icon}</div>
            <div className="platform-name">{platform.name}</div>
          </div>
        ))}
      </div>

      <div className="step-actions">
        <button className="prev-btn" onClick={onPrev}>
          Back
        </button>
        <button className="next-btn" onClick={onNext}>
          Continue
        </button>
      </div>

      <style jsx>{`
        .platform-selection-step {
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

        .platforms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 1.5rem;
          margin-bottom: 3rem;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .platform-toggle {
          background: rgba(255, 255, 255, 0.08);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 1.5rem 1rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
        }

        .platform-toggle:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .platform-toggle.selected {
          background: linear-gradient(135deg, var(--platform-color), rgba(255, 255, 255, 0.1));
          border-color: var(--platform-color);
          box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
        }

        .platform-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .platform-name {
          font-size: 1rem;
          font-weight: 500;
          color: #fff;
          font-family: 'Chillax', Arial, sans-serif;
        }

        .step-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .prev-btn, .next-btn {
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

        .next-btn {
          background: linear-gradient(135deg, #ff6b6b, #ff5722);
          color: #fff;
        }

        .next-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(255, 107, 107, 0.4);
        }
      `}</style>
    </div>
  );
};

export default PlatformSelectionStep;
