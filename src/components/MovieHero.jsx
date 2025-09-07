"use client";
import { useState } from "react";
import { Play, Plus, Share, Star, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import NetflixDetailHeroBanner from './NetflixHeroBanner';

const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/original";
const TMDB_POSTER_BASE = "https://image.tmdb.org/t/p/w500";

export default function MovieHero({ movie }) {
  const [trailerOpen, setTrailerOpen] = useState(false);

  const formatRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <section className="movie-hero">
      <div className="movie-hero-bg">
        <Image
          src={TMDB_IMAGE_BASE + movie.backdrop_path}
          fill
          alt={movie.title}
          className="hero-backdrop"
          priority
        />
        <div className="hero-overlay" />
      </div>

      <div className="movie-hero-content">
        <div className="hero-container">
          <div className="movie-poster-section">
            <div className="poster-wrapper">
              <Image
                src={TMDB_POSTER_BASE + movie.poster_path}
                width={300}
                height={450}
                alt={movie.title}
                className="movie-poster"
              />
            </div>
          </div>

          <div className="movie-details-section">
            <div className="movie-badges">
              {movie.vote_average >= 8 && (
                <span className="badge badge-gold">Highly Rated</span>
              )}
              <span className="badge badge-glass">
                {movie.genres?.[0]?.name || 'Drama'}
              </span>
            </div>

            <h1 className="movie-title">{movie.title}</h1>

            <div className="movie-meta">
              <div className="meta-item">
                <Calendar size={16} />
                <span>{new Date(movie.release_date).getFullYear()}</span>
              </div>
              <div className="meta-item">
                <Star size={16} />
                <span>{movie.vote_average.toFixed(1)} IMDb</span>
              </div>
              <div className="meta-item">
                <Clock size={16} />
                <span>{formatRuntime(movie.runtime)}</span>
              </div>
            </div>

            <div className="movie-genres">
              {movie.genres?.map(genre => (
                <span key={genre.id} className="genre-tag">
                  {genre.name}
                </span>
              ))}
            </div>

            <p className="movie-overview">{movie.overview}</p>

            <div className="movie-actions">
              <button 
                className="btn-primary"
                onClick={() => setTrailerOpen(true)}
              >
                <Play size={20} fill="currentColor" />
                Watch Trailer
              </button>
              <button className="btn-secondary">
                <Plus size={20} />
                Add to List
              </button>
              <button className="btn-icon">
                <Share size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
