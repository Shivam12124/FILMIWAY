// components/PeacockDramaSEOFAQSection.js
import React from 'react';

const PeacockDramaSEOFAQSection = ({ movie }) => {
  if (!movie) return null;

  return (
    <div className="p-4 bg-gray-800 rounded-lg">
      <h3 className="text-xl font-bold mb-4">Frequently Asked Questions for {movie.title}</h3>
      {/* Add your FAQ questions and answers here */}
    </div>
  );
};

export default PeacockDramaSEOFAQSection;
