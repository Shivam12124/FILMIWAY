"use client";
import { useEffect, useState } from "react";

const TMDB_API_KEY = "6054e5498fb2619274454959c38bbdfa";

// Country codes for TMDB API
const SUPPORTED_COUNTRIES = {
  US: { name: "United States", flag: "🇺🇸" },
  GB: { name: "United Kingdom", flag: "🇬🇧" },
  IN: { name: "India", flag: "🇮🇳" },
  AU: { name: "Australia", flag: "🇦🇺" }
};

function detectUserCountry() {
  if (typeof window === "undefined") return "US";
  
  try {
    const savedCountry = localStorage.getItem("user_country");
    if (savedCountry && SUPPORTED_COUNTRIES[savedCountry]) return savedCountry;
    
    const language = navigator.language || navigator.languages[0];
    if (language.includes("en-IN") || language.includes("hi")) return "IN";
    if (language.includes("en-GB")) return "GB";
    if (language.includes("en-AU")) return "AU";
    return "US";
  } catch {
    return "US";
  }
}

export default function WhereToWatch({ movieId }) {
  const [country, setCountry] = useState("US");
  const [streamingData, setStreamingData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userCountry = detectUserCountry();
    setCountry(userCountry);
  }, []);

  useEffect(() => {
    async function fetchStreamingData() {
      if (!movieId) return;
      
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?api_key=${TMDB_API_KEY}`
        );
        const data = await response.json();
        setStreamingData(data.results || {});
      } catch (error) {
        console.error('Error fetching streaming data:', error);
        setStreamingData({});
      } finally {
        setLoading(false);
      }
    }

    fetchStreamingData();
  }, [movieId]);

  const handleCountryChange = (newCountry) => {
    setCountry(newCountry);
    localStorage.setItem("user_country", newCountry);
  };

  const currentCountryData = streamingData?.[country];
  const availablePlatforms = [
    ...(currentCountryData?.flatrate || []),
    ...(currentCountryData?.rent || []),
    ...(currentCountryData?.buy || [])
  ];

  // Remove duplicates based on provider_id
  const uniquePlatforms = availablePlatforms.filter((platform, index, self) => 
    index === self.findIndex(p => p.provider_id === platform.provider_id)
  );

  if (loading) {
    return (
      <div className="wheretowatch-clean">
        <h2 className="clean-section-title">Where to Watch</h2>
        <div className="loading-platforms">Loading streaming options...</div>
      </div>
    );
  }

  return (
    <div className="wheretowatch-clean">
      <h2 className="clean-section-title">Where to Watch</h2>
      
      <div className="country-selector-clean">
        <div className="country-current-clean">
          <span className="current-flag">{SUPPORTED_COUNTRIES[country]?.flag}</span>
          <span className="current-name">{SUPPORTED_COUNTRIES[country]?.name}</span>
        </div>
        <div className="country-buttons">
          {Object.entries(SUPPORTED_COUNTRIES).map(([code, info]) => (
            <button
              key={code}
              className={`country-btn-clean ${country === code ? 'active' : ''}`}
              onClick={() => handleCountryChange(code)}
            >
              {info.flag} {code}
            </button>
          ))}
        </div>
      </div>
      
      {uniquePlatforms.length > 0 ? (
        <div className="platforms-clean-grid">
          {uniquePlatforms.map((platform) => (
            <div key={platform.provider_id} className="platform-card-clean">
              <img
                src={`https://image.tmdb.org/t/p/original${platform.logo_path}`}
                alt={platform.provider_name}
                className="platform-logo-clean"
              />
              <div className="platform-info-clean">
                <div className="platform-name-clean">{platform.provider_name}</div>
                <div className="platform-type-clean">
                  {currentCountryData?.flatrate?.some(p => p.provider_id === platform.provider_id) && "Subscription"}
                  {currentCountryData?.rent?.some(p => p.provider_id === platform.provider_id) && "Rent"}
                  {currentCountryData?.buy?.some(p => p.provider_id === platform.provider_id) && "Buy"}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-platforms">
          <p>No streaming options available in {SUPPORTED_COUNTRIES[country]?.name}</p>
        </div>
      )}
    </div>
  );
}
