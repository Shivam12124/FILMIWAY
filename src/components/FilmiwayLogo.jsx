// components/FilmiwayLogo.jsx
import React from 'react';

const FilmiwayLogo = ({ 
  width = 100, 
  height = 100, 
  className = "",
  onClick = null 
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 1024 1024"
      className={className}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <path 
        fill="#090907" 
        opacity="1.000000" 
        stroke="none"
        d="M596.000000,1.000000 C738.984558,1.000000 881.969055,1.000000 1024.976807,1.000000 C1024.976807,342.281006 1024.976807,683.562012 1024.976807,1024.921509 C683.755859,1024.921509 342.511688,1024.921509 1.133763,1024.921509 C1.133763,683.666687 1.133763,342.333344 1.127794,1.000009 C117.775917,1.000000 234.430008,1.000000 351.542358,1.402611..."
      />
      <path 
        fill="#0C0A06" 
        opacity="1.000000" 
        stroke="none"
        d="M727.998047,715.607788 C725.775146,715.565002 723.558411,714.846619 721.322998,714.783203..."
      />
      <path 
        fill="#F1E6D7" 
        opacity="1.000000" 
        stroke="none"
        d="M762.248169,725.667603 C767.805237,734.677185 773.155701,743.380127 778.812073,752.580505..."
      />
      <path 
        fill="#F4A60B" 
        opacity="1.000000" 
        stroke="none"
        d="M238.882065,800.944885 C238.461624,800.959595 238.041199,800.974304 236.852203,800.978027..."
      />
      {/* Add all other path elements from your SVG */}
    </svg>
  );
};

export default FilmiwayLogo;
