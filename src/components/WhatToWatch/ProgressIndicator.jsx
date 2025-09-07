import React from "react";

const ProgressIndicator = ({ currentStep, totalSteps }) => {
  const percentage = (currentStep / totalSteps) * 100;

  return (
    <div className="progress-indicator">
      <div className="progress-header">
        <span className="progress-text">Step {currentStep} of {totalSteps}</span>
        <span className="progress-percentage">{Math.round(percentage)}%</span>
      </div>
      
      <div className="progress-track">
        <div 
          className="progress-bar"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <style jsx>{`
        .progress-indicator {
          margin-bottom: 3rem;
        }

        .progress-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .progress-text, .progress-percentage {
          font-size: 1rem;
          color: #a0a0a0;
          font-weight: 500;
          font-family: 'Chillax', Arial, sans-serif;
        }

        .progress-track {
          width: 100%;
          height: 8px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-bar {
          height: 100%;
          background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1);
          border-radius: 4px;
          transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </div>
  );
};

export default ProgressIndicator;
