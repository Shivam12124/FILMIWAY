import Image from "next/image";

const TMDB_POSTER_BASE = "https://image.tmdb.org/t/p/w300";

export default function SimilarMovies({ movies }) {
  return (
    <section className="similar-section">
      <div className="section-container">
        <h2 className="section-title">Similar Movies</h2>
        <div className="similar-grid">
          {movies.map(movie => (
            <div key={movie.id} className="similar-card">
              <div className="similar-poster">
                <Image
                  src={TMDB_POSTER_BASE + movie.poster_path}
                  width={150}
                  height={225}
                  alt={movie.title}
                  className="similar-img"
                />
                <div className="similar-rating">
                  {movie.vote_average.toFixed(1)}
                </div>
              </div>
              <div className="similar-info">
                <h4 className="similar-title">{movie.title}</h4>
                <p className="similar-year">
                  {new Date(movie.release_date).getFullYear()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
