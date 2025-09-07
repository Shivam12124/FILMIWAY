"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OverviewSection from "@/components/OverviewSection";
import CastSection from "@/components/CastSection";
import WhereToWatch from "@/components/WhereToWatch";
import NetflixHeroBanner from "@/components/NetflixHeroBanner";

const TMDB_API_KEY = "6054e5498fb2619274454959c38bbdfa";
const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/original";

export default function MovieDetailPage() {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    async function fetchDetails() {
      try {
        const [movieRes, creditsRes] = await Promise.all([
          fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${TMDB_API_KEY}`),
          fetch(`https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${TMDB_API_KEY}`)
        ]);
        const movieData = await movieRes.json();
        const creditsData = await creditsRes.json();
        setMovie(movieData);
        setCast(creditsData.cast || []);
      } catch {
        setMovie(null);
      } finally {
        setLoading(false);
      }
    }
    if (params.id) fetchDetails();
  }, [params.id]);

  if (loading) {
    return (
      <div className="app">
        <Header />
        <div className="ultimate-loading">
          <div className="loading-content">
            <div className="loading-spinner-ultimate" />
            <p>Loading cinematic experience...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="app">
        <Header />
        <div className="error-page-ultimate">
          <h1>Movie not found</h1>
          <button className="back-btn" onClick={() => window.history.back()}>
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <main className="ultimate-movie-detail">
        {/* Netflix-style Hero Banner with only styled text */}
       <NetflixHeroBanner
  title={movie.title}
  backdropImage={TMDB_IMAGE_BASE + movie.backdrop_path}
  movie={movie}
/>

        

        {/* Tabs section */}
        <section
          className="ultimate-tabs-section"
          style={{ marginTop: "120px" }}
        >
          <div className="ultimate-tabs-container">
            <nav className="ultimate-tab-nav">
              <button
                className={`ultimate-tab ${activeTab === "overview" ? "active" : ""}`}
                onClick={() => setActiveTab("overview")}
              >
                <span>Overview</span>
              </button>
              <button
                className={`ultimate-tab ${activeTab === "cast" ? "active" : ""}`}
                onClick={() => setActiveTab("cast")}
              >
                <span>Cast</span>
              </button>
              <button
                className={`ultimate-tab ${activeTab === "where-watch" ? "active" : ""}`}
                onClick={() => setActiveTab("where-watch")}
              >
                <span>Where to Watch</span>
              </button>
            </nav>
          </div>
        </section>

        <section className="ultimate-content" style={{ marginTop: "40px" }}>
          <div className="content-container-ultimate">
            {activeTab === "overview" && <OverviewSection movie={movie} />}
            {activeTab === "cast" && <CastSection cast={cast} />}
            {activeTab === "where-watch" && <WhereToWatch movieId={movie.id} />}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
