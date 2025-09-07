"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const TMDB_API_KEY = "6054e5498fb2619274454959c38bbdfa";
const TMDB_POSTER_BASE = "https://image.tmdb.org/t/p/w300";

const endpoints = {
  trending: `trending/movie/week`,
  now_playing: `movie/now_playing`,
  top_rated: `movie/top_rated`,
};

export default function MovieShelf({ category, title, accent }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const res = await fetch(
        `https://api.themoviedb.org/3/${endpoints[category]}?api_key=${TMDB_API_KEY}`
      );
      const data = await res.json();
      setMovies(data.results?.slice(0, 12) || []);
    }
    fetchMovies();
  }, [category]);

  return (
    <section className="shelf">
      <div className="shelf-header">
        <h2 className={`shelf-title ${accent}`}>{title}</h2>
        <button className="view-all">View All →</button>
      </div>
      <div className="movies-grid">
        {movies.map(movie => (
          <Link 
            key={movie.id} 
            href={`/movie/${movie.id}`}
            className="movie-card"
          >
            <div className="movie-poster">
              <Image
                src={TMDB_POSTER_BASE + movie.poster_path}
                alt={movie.title}
                width={150}
                height={225}
                className="poster-img"
              />
              <div className="rating">{movie.vote_average.toFixed(1)}</div>
            </div>
            <h3 className="movie-title">{movie.title}</h3>
            <p className="movie-year">{movie.release_date?.slice(0, 4)}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
