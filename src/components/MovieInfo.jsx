export default function MovieInfo({ movie }) {
  return (
    <section className="movie-info-section">
      <div className="info-container">
        <div className="info-grid">
          <div className="info-card">
            <h3>Director</h3>
            <p>Christopher Nolan</p>
          </div>
          <div className="info-card">
            <h3>Writer</h3>
            <p>Christopher Nolan</p>
          </div>
          <div className="info-card">
            <h3>Budget</h3>
            <p>{movie.budget ? `$${(movie.budget / 1000000).toFixed(0)}M` : 'N/A'}</p>
          </div>
          <div className="info-card">
            <h3>Revenue</h3>
            <p>{movie.revenue ? `$${(movie.revenue / 1000000).toFixed(0)}M` : 'N/A'}</p>
          </div>
          <div className="info-card">
            <h3>Language</h3>
            <p>{movie.original_language?.toUpperCase()}</p>
          </div>
          <div className="info-card">
            <h3>Status</h3>
            <p>{movie.status}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
