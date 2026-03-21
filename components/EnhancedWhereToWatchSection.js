// components/EnhancedWhereToWatchSection.js - SEO HIERARCHY FIXED (H2 -> H3) 🍷✅
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Globe, ExternalLink, Loader, MapPin, ChevronDown, ChevronUp, Tv, Search, Info } from 'lucide-react';
import Image from 'next/image';

// 🌍 ALL TMDB SUPPORTED COUNTRIES - FULLY ALPHABETICAL
const ALL_REGIONS = [
  { code: 'AL', name: 'Albania', flag: '🇦🇱' },
  { code: 'DZ', name: 'Algeria', flag: '🇩🇿' },
  { code: 'AM', name: 'Armenia', flag: '🇦🇲' },
  { code: 'AZ', name: 'Azerbaijan', flag: '🇦🇿' },
  { code: 'BS', name: 'Bahamas', flag: '🇧🇸' },
  { code: 'BH', name: 'Bahrain', flag: '🇧🇭' },
  { code: 'BD', name: 'Bangladesh', flag: '🇧🇩' },
  { code: 'BB', name: 'Barbados', flag: '🇧🇧' },
  { code: 'BY', name: 'Belarus', flag: '🇧🇾' },
  { code: 'BE', name: 'Belgium', flag: '🇧🇪' },
  { code: 'BZ', name: 'Belize', flag: '🇧🇿' },
  { code: 'BT', name: 'Bhutan', flag: '🇧🇹' },
  { code: 'BO', name: 'Bolivia', flag: '🇧🇴' },
  { code: 'BA', name: 'Bosnia and Herzegovina', flag: '🇧🇦' },
  { code: 'BW', name: 'Botswana', flag: '🇧🇼' },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷' },
  { code: 'BN', name: 'Brunei', flag: '🇧🇳' },
  { code: 'BG', name: 'Bulgaria', flag: '🇧🇬' },
  { code: 'KH', name: 'Cambodia', flag: '🇰🇭' },
  { code: 'CM', name: 'Cameroon', flag: '🇨🇲' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: 'CL', name: 'Chile', flag: '🇨🇱' },
  { code: 'CN', name: 'China', flag: '🇨🇳' },
  { code: 'CO', name: 'Colombia', flag: '🇨🇴' },
  { code: 'CR', name: 'Costa Rica', flag: '🇨🇷' },
  { code: 'HR', name: 'Croatia', flag: '🇭🇷' },
  { code: 'CU', name: 'Cuba', flag: '🇨🇺' },
  { code: 'CY', name: 'Cyprus', flag: '🇨🇾' },
  { code: 'CZ', name: 'Czech Republic', flag: '🇨🇿' },
  { code: 'DK', name: 'Denmark', flag: '🇩🇰' },
  { code: 'DO', name: 'Dominican Republic', flag: '🇩🇴' },
  { code: 'EC', name: 'Ecuador', flag: '🇪🇨' },
  { code: 'EG', name: 'Egypt', flag: '🇪🇬' },
  { code: 'SV', name: 'El Salvador', flag: '🇸🇻' },
  { code: 'EE', name: 'Estonia', flag: '🇪🇪' },
  { code: 'ET', name: 'Ethiopia', flag: '🇪🇹' },
  { code: 'FI', name: 'Finland', flag: '🇫🇮' },
  { code: 'FR', name: 'France', flag: '🇫🇷' },
  { code: 'GE', name: 'Georgia', flag: '🇬🇪' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪' },
  { code: 'GH', name: 'Ghana', flag: '🇬🇭' },
  { code: 'GR', name: 'Greece', flag: '🇬🇷' },
  { code: 'GT', name: 'Guatemala', flag: '🇬🇹' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'GY', name: 'Guyana', flag: '🇬🇾' },
  { code: 'HK', name: 'Hong Kong', flag: '🇭🇰' },
  { code: 'HN', name: 'Honduras', flag: '🇭🇳' },
  { code: 'HU', name: 'Hungary', flag: '🇭🇺' },
  { code: 'IS', name: 'Iceland', flag: '🇮🇸' },
  { code: 'IN', name: 'India', flag: '🇮🇳' },
  { code: 'ID', name: 'Indonesia', flag: '🇮🇩' },
  { code: 'IQ', name: 'Iraq', flag: '🇮🇶' },
  { code: 'IR', name: 'Iran', flag: '🇮🇷' },
  { code: 'IE', name: 'Ireland', flag: '🇮🇪' },
  { code: 'IL', name: 'Israel', flag: '🇮🇱' },
  { code: 'IT', name: 'Italy', flag: '🇮🇹' },
  { code: 'CI', name: 'Ivory Coast', flag: '🇨🇮' },
  { code: 'JM', name: 'Jamaica', flag: '🇯🇲' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵' },
  { code: 'JO', name: 'Jordan', flag: '🇯🇴' },
  { code: 'KZ', name: 'Kazakhstan', flag: '🇰🇿' },
  { code: 'KE', name: 'Kenya', flag: '🇰🇪' },
  { code: 'KG', name: 'Kyrgyzstan', flag: '🇰🇬' },
  { code: 'LA', name: 'Laos', flag: '🇱🇦' },
  { code: 'LV', name: 'Latvia', flag: '🇱🇻' },
  { code: 'LB', name: 'Lebanon', flag: '🇱🇧' },
  { code: 'LT', name: 'Lithuania', flag: '🇱🇹' },
  { code: 'LU', name: 'Luxembourg', flag: '🇱🇺' },
  { code: 'MG', name: 'Madagascar', flag: '🇲🇬' },
  { code: 'MW', name: 'Malawi', flag: '🇲🇼' },
  { code: 'MY', name: 'Malaysia', flag: '🇲🇾' },
  { code: 'MT', name: 'Malta', flag: '🇲🇹' },
  { code: 'MX', name: 'Mexico', flag: '🇲🇽' },
  { code: 'MD', name: 'Moldova', flag: '🇲🇩' },
  { code: 'MN', name: 'Mongolia', flag: '🇲🇳' },
  { code: 'ME', name: 'Montenegro', flag: '🇲🇪' },
  { code: 'MA', name: 'Morocco', flag: '🇲🇦' },
  { code: 'MZ', name: 'Mozambique', flag: '🇲🇿' },
  { code: 'MM', name: 'Myanmar', flag: '🇲🇲' },
  { code: 'NA', name: 'Namibia', flag: '🇳🇦' },
  { code: 'NP', name: 'Nepal', flag: '🇳🇵' },
  { code: 'NL', name: 'Netherlands', flag: '🇳🇱' },
  { code: 'NZ', name: 'New Zealand', flag: '🇳🇿' },
  { code: 'NI', name: 'Nicaragua', flag: '🇳🇮' },
  { code: 'NG', name: 'Nigeria', flag: '🇳🇬' },
  { code: 'NO', name: 'Norway', flag: '🇳🇴' },
  { code: 'OM', name: 'Oman', flag: '🇴🇲' },
  { code: 'PA', name: 'Panama', flag: '🇵🇦' },
  { code: 'PY', name: 'Paraguay', flag: '🇵🇾' },
  { code: 'PE', name: 'Peru', flag: '🇵🇪' },
  { code: 'PH', name: 'Philippines', flag: '🇵🇭' },
  { code: 'PK', name: 'Pakistan', flag: '🇵🇰' },
  { code: 'PL', name: 'Poland', flag: '🇵🇱' },
  { code: 'PT', name: 'Portugal', flag: '🇵🇹' },
  { code: 'QA', name: 'Qatar', flag: '🇶🇦' },
  { code: 'RO', name: 'Romania', flag: '🇷🇴' },
  { code: 'RU', name: 'Russia', flag: '🇷🇺' },
  { code: 'SA', name: 'Saudi Arabia', flag: '🇸🇦' },
  { code: 'SN', name: 'Senegal', flag: '🇸🇳' },
  { code: 'RS', name: 'Serbia', flag: '🇷🇸' },
  { code: 'SG', name: 'Singapore', flag: '🇸🇬' },
  { code: 'SK', name: 'Slovakia', flag: '🇸🇰' },
  { code: 'SI', name: 'Slovenia', flag: '🇸🇮' },
  { code: 'ZA', name: 'South Africa', flag: '🇿🇦' },
  { code: 'KR', name: 'South Korea', flag: '🇰🇷' },
  { code: 'ES', name: 'Spain', flag: '🇪🇸' },
  { code: 'LK', name: 'Sri Lanka', flag: '🇱🇰' },
  { code: 'SR', name: 'Suriname', flag: '🇸🇷' },
  { code: 'SE', name: 'Sweden', flag: '🇸🇪' },
  { code: 'CH', name: 'Switzerland', flag: '🇨🇭' },
  { code: 'SY', name: 'Syria', flag: '🇸🇾' },
  { code: 'TW', name: 'Taiwan', flag: '🇹🇼' },
  { code: 'TJ', name: 'Tajikistan', flag: '🇹🇯' },
  { code: 'TZ', name: 'Tanzania', flag: '🇹🇿' },
  { code: 'TH', name: 'Thailand', flag: '🇹🇭' },
  { code: 'TL', name: 'Timor-Leste', flag: '🇹🇱' },
  { code: 'TG', name: 'Togo', flag: '🇹🇬' },
  { code: 'TR', name: 'Turkey', flag: '🇹🇷' },
  { code: 'TM', name: 'Turkmenistan', flag: '🇹🇲' },
  { code: 'UA', name: 'Ukraine', flag: '🇺🇦' },
  { code: 'AE', name: 'United Arab Emirates', flag: '🇦🇪' },
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'UY', name: 'Uruguay', flag: '🇺🇾' },
  { code: 'UZ', name: 'Uzbekistan', flag: '🇺🇿' },
  { code: 'VE', name: 'Venezuela', flag: '🇻🇪' },
  { code: 'VN', name: 'Vietnam', flag: '🇻🇳' },
  { code: 'ZM', name: 'Zambia', flag: '🇿🇲' },
  { code: 'ZW', name: 'Zimbabwe', flag: '🇿🇼' },
];

async function detectUserCountry() {
  try {
    const response = await fetch('https://ipinfo.io/json');
    if (response.ok) {
      const data = await response.json();
      return data.country?.toUpperCase() || 'US';
    }
  } catch (e) {
    return 'US';
  }
  return 'US';
}

async function getAllRegionStreamingData(tmdbId, title) {
  const apiKey = '6054e5498fb2619274454959c38bbdfa';
  const streamingData = {};

  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${tmdbId}/watch/providers?api_key=${apiKey}`);
    if (!response.ok) return {};

    const data = await response.json();
    const results = data.results || {};

    ALL_REGIONS.forEach((region) => {
      if (results[region.code]) {
        streamingData[region.code] = {
          ...results[region.code],
          region: region
        };
      }
    });

    return streamingData;
  } catch (error) {
    return {};
  }
}

function getDeepLink(providerId, region, title, tmdbId) {
  return `https://www.themoviedb.org/movie/${tmdbId}/watch?locale=${region}`;
}

function selectBestRegion(streamingData, userCountry) {
  const availableRegions = Object.keys(streamingData);
  if (availableRegions.length === 0) return { selectedRegion: null, fallbackMessage: 'No data' };
  
  const userCountryName = ALL_REGIONS.find(r => r.code === userCountry)?.name || 'your country';

  if (streamingData[userCountry]) return { selectedRegion: userCountry, fallbackMessage: null };
  if (streamingData['US']) return { selectedRegion: 'US', fallbackMessage: `Not available in ${userCountryName}. Showing USA availability.` };
  
  const firstAvailableName = ALL_REGIONS.find(r => r.code === availableRegions[0])?.name || availableRegions[0];
  
  return { 
    selectedRegion: availableRegions[0], 
    fallbackMessage: `Not available in ${userCountryName}. Showing ${firstAvailableName} availability.` 
  };
}

const EnhancedWhereToWatchSection = React.memo(({ movie }) => {
  const [streamingData, setStreamingData] = useState({});
  const [userCountry, setUserCountry] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [fallbackMessage, setFallbackMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showOtherRegions, setShowOtherRegions] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted || !movie?.tmdbId) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const detectedCountry = await detectUserCountry();
        setUserCountry(detectedCountry);
        const data = await getAllRegionStreamingData(movie.tmdbId, movie.Title);

        if (data && Object.keys(data).length > 0) {
          setStreamingData(data);
          const { selectedRegion: bestRegion, fallbackMessage: message } = selectBestRegion(data, detectedCountry);
          setSelectedRegion(bestRegion);
          setFallbackMessage(message);
        } else {
          setStreamingData({});
          setFallbackMessage('No streaming data available');
        }
      } catch (error) {
        setStreamingData({});
        setFallbackMessage('Error loading streaming data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [movie?.tmdbId, movie?.Title, mounted]);

  if (!mounted) {
    return (
      <div className="mb-12 mt-12 w-full h-32 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center justify-center animate-pulse">
        <Loader className="w-5 h-5 animate-spin text-gray-500" />
      </div>
    );
  }

  const currentRegionData = streamingData[selectedRegion];
  const availableRegions = Object.keys(streamingData);
  const otherRegions = availableRegions.filter((code) => code !== selectedRegion);
  const selectedRegionInfo = ALL_REGIONS.find((r) => r.code === selectedRegion);

  const StreamingPlatformCard = ({ provider, type, region }) => {
    const logoUrl = provider.logo_path ? `https://image.tmdb.org/t/p/w45${provider.logo_path}` : null;
    const deepLink = getDeepLink(provider.provider_id, region, movie.Title, movie.tmdbId);
    const typeLabel = type === 'flatrate' ? 'Stream' : type === 'rent' ? 'Rent' : 'Buy';

    return (
      <motion.button
        onClick={() => window.open(deepLink, '_blank', 'noopener,noreferrer')}
        className="group relative p-3 sm:p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-yellow-500/30 transition-all duration-300 flex flex-col items-center gap-3 w-full backdrop-blur-sm overflow-hidden"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {logoUrl ? (
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-[10px] sm:rounded-xl overflow-hidden shadow-lg group-hover:shadow-yellow-500/20 transition-all duration-300">
            <Image
              src={logoUrl}
              alt={provider.provider_name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 40px, 48px"
              loading="lazy"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
        ) : (
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-[10px] sm:rounded-xl bg-white/5 flex items-center justify-center">
            <Tv className="w-5 h-5 text-gray-500" />
          </div>
        )}

        <div className="text-center w-full flex flex-col gap-1">
          <div className="text-[11px] sm:text-xs font-medium text-gray-300 group-hover:text-white truncate w-full px-1 transition-colors">
            {provider.provider_name}
          </div>
          <div className="text-[9px] font-bold uppercase tracking-widest text-yellow-500/70 group-hover:text-yellow-400 transition-colors">
            {typeLabel}
          </div>
        </div>

        <ExternalLink className="absolute top-2 right-2 w-3 h-3 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.button>
    );
  };

  return (
    <motion.section
      className="mb-12 mt-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-light text-gray-200 mb-6 flex items-center gap-3 tracking-wide">
        <Play className="text-yellow-500 w-5 h-5 sm:w-6 sm:h-6" />
        Where to Watch
      </h2>

      {isLoading ? (
        <div className="w-full h-32 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center justify-center animate-pulse">
           <Loader className="w-5 h-5 animate-spin text-gray-500" />
        </div>
      ) : (
        <div className="space-y-6">
          
          {fallbackMessage && selectedRegion && selectedRegion !== userCountry && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 backdrop-blur-sm"
            >
              <Info size={14} className="text-orange-400" />
              <p className="text-orange-300 text-[13px] font-medium tracking-wide">
                {fallbackMessage}
              </p>
            </motion.div>
          )}

          {selectedRegionInfo && availableRegions.length > 0 && (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md">
              <div className="flex items-center gap-4">
                <span className="text-3xl drop-shadow-md">{selectedRegionInfo.flag}</span>
                <div className="flex flex-col">
                  <span className="text-gray-200 font-medium text-sm sm:text-base">
                    {selectedRegionInfo.name}
                  </span>
                  {selectedRegion === userCountry ? (
                    <div className="flex items-center gap-1.5 mt-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                      <span className="text-emerald-400 text-[11px] font-medium uppercase tracking-wider">Auto-detected Location</span>
                    </div>
                  ) : (
                    <span className="text-yellow-500/80 text-[11px] font-medium uppercase tracking-wider mt-1">
                      Manual Selection
                    </span>
                  )}
                </div>
              </div>

              {otherRegions.length > 0 && (
                <button
                  onClick={() => setShowOtherRegions(!showOtherRegions)}
                  className="flex items-center justify-center sm:justify-between gap-2 px-4 py-2.5 sm:py-2 rounded-lg sm:rounded-full bg-white/5 hover:bg-white/10 border border-white/5 transition-all w-full sm:w-auto group"
                >
                  <span className="text-[13px] text-gray-300 font-medium">Change Region</span>
                  {showOtherRegions ? <ChevronUp size={14} className="text-gray-400 group-hover:text-white" /> : <ChevronDown size={14} className="text-gray-400 group-hover:text-white" />}
                </button>
              )}
            </div>
          )}

          <AnimatePresence>
            {showOtherRegions && otherRegions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="p-5 rounded-2xl border border-white/5 bg-black/40 backdrop-blur-sm">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
                    Also available in
                  </h3>
                  <div className="flex flex-wrap gap-2.5 max-h-72 overflow-y-auto pr-2 custom-scrollbar">
                    {otherRegions.map((regionCode) => {
                      const region = ALL_REGIONS.find((r) => r.code === regionCode);
                      if (!region) return null;

                      return (
                        <button
                          key={regionCode}
                          onClick={() => {
                            setSelectedRegion(regionCode);
                            setShowOtherRegions(false);
                            setFallbackMessage(null);
                          }}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/[0.03] hover:bg-white/10 hover:border-white/20 transition-all text-gray-300 hover:text-white group"
                        >
                          <span className="text-base grayscale-[30%] group-hover:grayscale-0">{region.flag}</span>
                          <span className="text-[13px] font-medium">{region.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {currentRegionData ? (
              <motion.div
                key={selectedRegion}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {currentRegionData.flatrate?.length > 0 && (
                  <div>
                    <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-yellow-500/80 mb-4 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-yellow-500" />
                      Stream with Subscription
                    </h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
                      {currentRegionData.flatrate.map((provider) => (
                        <StreamingPlatformCard key={`flatrate-${provider.provider_id}`} provider={provider} type="flatrate" region={selectedRegion} />
                      ))}
                    </div>
                  </div>
                )}

                {currentRegionData.rent?.length > 0 && (
                  <div>
                    <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-gray-400" />
                      Rent Digital Copy
                    </h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
                      {currentRegionData.rent.map((provider) => (
                        <StreamingPlatformCard key={`rent-${provider.provider_id}`} provider={provider} type="rent" region={selectedRegion} />
                      ))}
                    </div>
                  </div>
                )}

                {currentRegionData.buy?.length > 0 && (
                  <div>
                    <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-4 flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-gray-400" />
                      Buy Digital Copy
                    </h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
                      {currentRegionData.buy.map((provider) => (
                        <StreamingPlatformCard key={`buy-${provider.provider_id}`} provider={provider} type="buy" region={selectedRegion} />
                      ))}
                    </div>
                  </div>
                )}

                {!currentRegionData.flatrate?.length && !currentRegionData.rent?.length && !currentRegionData.buy?.length && (
                  <div className="flex flex-col items-center justify-center p-10 rounded-2xl border border-white/5 bg-white/[0.02]">
                    <MapPin className="w-8 h-8 text-gray-600 mb-3" />
                    <p className="text-gray-400 text-sm font-medium">No streaming options found in {selectedRegionInfo?.name || selectedRegion}</p>
                  </div>
                )}
              </motion.div>
            ) : availableRegions.length === 0 ? (
              <div className="flex flex-col items-center text-center p-10 rounded-2xl border border-orange-500/20 bg-orange-500/[0.05]">
                <Globe className="w-10 h-10 text-orange-500 mb-4 opacity-80" />
                <h3 className="text-base font-semibold text-orange-300 mb-2">No Global Streaming Data</h3>
                <p className="text-[13px] text-orange-200/70 max-w-md leading-relaxed mb-6">
                  <strong>{movie?.Title}</strong> is not currently listed on major digital platforms, or TMDB data is unavailable.
                </p>
                <button
                  onClick={() => window.open(`https://www.justwatch.com/search?q=${encodeURIComponent(movie?.Title || '')}`, '_blank')}
                  className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 transition-all text-orange-400 hover:text-orange-300 text-[13px] font-medium tracking-wide"
                >
                  <Search size={14} />
                  Search JustWatch manually
                </button>
              </div>
            ) : null}
          </AnimatePresence>

          <div className="text-center pt-6 border-t border-white/5">
            <p className="text-[11px] text-gray-500 uppercase tracking-widest font-medium">
              Data via <span className="text-blue-400">TMDB</span> • Auto-IP Detection • 100+ Regions
            </p>
          </div>
        </div>
      )}
      
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </motion.section>
  );
});

EnhancedWhereToWatchSection.displayName = 'EnhancedWhereToWatchSection';

export default EnhancedWhereToWatchSection;