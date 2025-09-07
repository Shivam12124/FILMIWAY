"use client";
export default function MovieCard({ movie }) {
  if (!movie) return null;
  return (
    <div
      style={{
        background: `linear-gradient(115deg, rgba(23,25,44,0.82) 60%, rgba(18,20,34,0.90)), 
          url(https://image.tmdb.org/t/p/w500${movie.poster_path}) center/cover no-repeat`,
        borderRadius: 20,
        boxShadow: "0 6px 28px #181a25aa",
        height: 340,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        overflow: "hidden",
        transition: "transform 0.22s, box-shadow 0.22s",
        cursor: "pointer",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "scale(1.045)";
        e.currentTarget.style.boxShadow = "0 10px 34px #ffd70077";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 6px 28px #181a25aa";
      }}
    >
      <div style={{
        width: "100%", padding: "18px",
        background: "rgba(21,19,38,0.77)", backdropFilter: "blur(12px)", borderRadius: 20,
        color: "#ffd700", fontWeight: 650, fontSize: "1.07rem",
        boxShadow: "0 2px 8px #23294555",
      }}>
        <div style={{ fontWeight: 900, color: "#fff", fontSize: "1.12rem" }}>{movie.title}</div>
        <div style={{ fontWeight: 700, color: "#ffd700", fontSize: "1.05rem", marginTop: "4px" }}>★ {movie.vote_average?.toFixed(1)}</div>
      </div>
    </div>
  );
}
