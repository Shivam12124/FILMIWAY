import React, { useState } from "react";

const NetflixHeroBanner = ({ title, backdropImage, movie }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const posterUrl = movie?.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  return (
    <div
      style={{
        width: "94vw",
        maxWidth: "1000x",
        height: "78vh",
        position: "relative",
        overflow: "hidden",
        margin: "40px auto",
        background: "#0a0c0f",
        borderRadius: "42px",
        boxShadow: `
          0 38px 120px 0 rgba(0,0,0,0.85),
          0 8px 64px 12px rgba(0,0,0,0.92),
          inset 0 1px 0 rgba(255,255,255,0.1)
        `,
        transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: isHovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Cinematic backdrop image */}
      <img
        src={backdropImage}
        alt={title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center 0.1%",
          position: "absolute",
          top: 0,
          left: 0,
          borderRadius: "42px",
          transition: "transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: imageLoaded ? (isHovered ? "scale(1.08)" : "scale(1.05)") : "scale(1.13)"
        }}
        onLoad={() => setImageLoaded(true)}
      />

      {/* 3D curve layers for cinematic uplift */}
      <div style={{
        position: "absolute", left: "-12vw", bottom: "-120px", width: "124vw", height: "200px",
        background: "radial-gradient(ellipse 140% 90% at 50% 110%, #0a0c0f 92%, transparent 100%)",
        clipPath: "ellipse(140% 85% at 50% 100%)",
        boxShadow: "0 60px 180px 32px rgba(6,6,10,0.98)", zIndex: 1
      }} />
      <div style={{
        position: "absolute", left: "-10vw", bottom: "-100px", width: "120vw", height: "180px",
        background: "radial-gradient(ellipse 130% 85% at 50% 108%, #12141a 90%, rgba(18,20,26,0.7) 96%, transparent 100%)",
        clipPath: "ellipse(130% 80% at 50% 100%)",
        boxShadow: "0 45px 120px 16px rgba(10,12,18,0.92)", zIndex: 2
      }} />
      <div style={{
        position: "absolute", left: "-8vw", bottom: "-80px", width: "116vw", height: "160px",
        background: "radial-gradient(ellipse 125% 80% at 50% 105%, #191c23 88%, rgba(25,28,35,0.5) 94%, transparent 100%)",
        clipPath: "ellipse(125% 75% at 50% 100%)", zIndex: 3
      }} />
      <div style={{
        position: "absolute", left: "-6vw", bottom: "-60px", width: "112vw", height: "140px",
        background: "radial-gradient(ellipse 120% 75% at 50% 102%, #1f222a 85%, rgba(31,34,42,0.3) 92%, transparent 100%)",
        clipPath: "ellipse(120% 70% at 50% 100%)", zIndex: 4
      }} />

      {/* Gradients for depth */}
      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(to top, #0a0c0f 0%, rgba(20,25,35,0.8) 45%, rgba(35,42,58,0.4) 70%, transparent 92%)`,
        zIndex: 5, pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute", inset: 0,
        background: `linear-gradient(to right, #0a0c0f 0%, rgba(25,32,45,0.6) 35%, rgba(45,52,68,0.2) 65%, transparent 95%)`,
        zIndex: 6, pointerEvents: "none"
      }} />

      {/* Movie Poster - positioned where text was */}
      <div
        style={{
          position: "absolute",
          left: "64px",
          bottom: "120px",
          zIndex: 10
        }}
      >
        <div
          style={{
            width: "200px",
            height: "300px",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.8), 0 8px 24px rgba(0,0,0,0.6)",
            border: "2px solid rgba(255,255,255,0.1)",
            transition: "transform 0.3s ease"
          }}
        >
          {posterUrl ? (
            <img
              src={posterUrl}
              alt={`${title} Poster`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#666"
              }}
            >
              No Poster
            </div>
          )}
        </div>
      </div>

      {/* Ambient light effect */}
      <div style={{
        position: "absolute",
        top: "-20%",
        left: "30%",
        width: "40%",
        height: "60%",
        background: "radial-gradient(ellipse, rgba(100,150,255,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 7,
        opacity: imageLoaded ? 1 : 0,
        transition: "opacity 2s ease"
      }} />
    </div>
  );
};

export default NetflixHeroBanner;
