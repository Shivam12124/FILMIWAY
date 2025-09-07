import React, { useState } from "react";

const ContentPreferenceStep = ({ selectedRating, onUpdate, onNext, onPrev }) => {
  const [selected, setSelected] = useState(selectedRating);

  const contentOptions = [
    {
      id: 'family-friendly',
      title: 'Family-Friendly',
      subtitle: 'Clean content suitable for all ages',
      emoji: '👨‍👩‍👧‍👦',
      description: 'G, PG rated movies'
    },
    {
      id: 'teen-mature',
      title: 'Teen / Mild Mature',
      subtitle: 'PG-13 style content with some intensity',
      emoji: '🎭',
      description: 'Young adult themes, mild language'
    },
    {
      id: 'no-restrictions',
      title: 'No Restrictions',
      subtitle: 'All content including mature themes',
      emoji: '🔞',
      description: 'Unfiltered recommendations'
    }
  ];

  const handleSelect = (optionId) => {
    setSelected(optionId);
    onUpdate(optionId);
  };

  return (
    <div className="content-preference-step">
      <div className="step-header">
        <h1 className="step-title">What's the vibe for tonight?</h1>
        <p className="step-subtitle">This helps us respect your comfort zone</p>
      </div>

      <div className="content-options">
        {contentOptions.map((option) => (
          <div
            key={option.id}
            className={`content-option ${selected === option.id ? 'selected' : ''}`}
            onClick={() => handleSelect(option.id)}
          >
            <div className="option-emoji">{option.emoji}</div>
            <div className="option-content">
              <h3 className="option-title">{option.title}</h3>
              <p className="option-subtitle">{option.subtitle}</p>
              <span className="option-description">{option.description}</span>
            </div>
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
        .content-preference-step {
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

        .content-options {
          max-width: 600px;
          margin: 0 auto 3rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .content-option {
          background: rgba(255, 255, 255, 0.08);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 1.5rem;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          text-align: left;
        }

        .content-option:hover {
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .content-option.selected {
          background: linear-gradient(135deg, #4ecdc4, rgba(255, 255, 255, 0.1));
          border-color: #4ecdc4;
          box-shadow: 0 0 0 2px rgba(78, 205, 196, 0.3);
        }

        .option-emoji {
          font-size: 3rem;
          margin-right: 1.5rem;
        }

        .option-content {
          flex: 1;
        }

        .option-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: #fff;
          margin: 0 0 0.5rem 0;
          font-family: 'Chillax', Arial, sans-serif;
        }

        .option-subtitle {
          font-size: 1rem;
          color: #e0e0e0;
          margin: 0 0 0.25rem 0;
        }

        .option-description {
          font-size: 0.9rem;
          color: #a0a0a0;
          font-style: italic;
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

export default ContentPreferenceStep;
