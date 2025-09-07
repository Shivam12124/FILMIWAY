export default function OverviewSection({ movie }) {
  return (
    <div className="overview-section">
      <div className="overview-grid">
        <div className="overview-main">
          <h2 className="section-heading">About {movie.title}</h2>
          <p className="movie-description">{movie.overview}</p>
          
          <div className="genre-tags">
            {movie.genres?.map(genre => (
              <span key={genre.id} className="genre-tag">
                {genre.name}
              </span>
            ))}
          </div>
        </div>

        <div className="movie-stats">
          <div className="stat-item">
            <span className="stat-label">Rating</span>
            <span className="stat-value">⭐ {movie.vote_average?.toFixed(1)}/10</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Runtime</span>
            <span className="stat-value">
              {movie.runtime ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m` : "N/A"}
            </span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Release Date</span>
            <span className="stat-value">{new Date(movie.release_date).toLocaleDateString()}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Language</span>
            <span className="stat-value">{movie.original_language?.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
