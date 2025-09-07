import React, { useState, useEffect } from "react";

const ProcessingScreen = ({ isProcessing }) => {
  const [currentText, setCurrentText] = useState(0);
  
  const loadingTexts = [
    "🎬 Analyzing your cinematic soul...",
    "🍿 Tuning into your vibe...",
    "🎯 Cross-referencing our film vaults...",
    "✨ Almost ready..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="processing-screen">
      <div className="processing-content">
        <div className="film-reel-animation">
          🎞️
        </div>
        
        <h2 className="processing-title">
          {loadingTexts[currentText]}
        </h2>
        
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
        
        <p className="processing-subtitle">
          This won't take long...
        </p>
      </div>

      <style jsx>{`
        .processing-screen {
          min-height: 70vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .processing-content {
          max-width: 500px;
        }

        .film-reel-animation {
          font-size: 8rem;
          margin-bottom: 2rem;
          animation: rotate 3s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .processing-title {
          font-size: clamp(1.5rem, 3vw, 2.5rem);
          font-weight: 600;
          color: #fff;
          margin-bottom: 2rem;
          font-family: 'Chillax', Arial, sans-serif;
          min-height: 3rem;
        }

        .progress-bar {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
          overflow: hidden;
          margin-bottom: 1rem;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1);
          border-radius: 3px;
          animation: loading 2s ease-in-out infinite;
        }

        @keyframes loading {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }

        .processing-subtitle {
          color: #a0a0a0;
          font-size: 1rem;
          margin: 0;
        }
      `}</style>
    </div>
  );
};

export default ProcessingScreen;
