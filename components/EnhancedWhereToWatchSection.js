// components/EnhancedWhereToWatchSection.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Globe, ExternalLink, Loader, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';


// 🎨 UNIFIED COLOR SYSTEM
const COLORS = {
  accent: '#EAB308',
  accentHover: '#FACC15',
  bgPrimary: '#0B0B0C',
  bgCard: 'rgba(55, 65, 81, 0.3)',
  bgCardHover: 'rgba(55, 65, 81, 0.5)',
  textPrimary: '#FFFFFF',
  textSecondary: '#D1D5DB',
  textMuted: '#9CA3AF',
  textDisabled: '#6B7280',
  borderAccent: 'rgba(234, 179, 8, 0.2)',
  borderAccentHover: 'rgba(234, 179, 8, 0.4)',
  borderNeutral: 'rgba(107, 114, 128, 0.5)',
  borderLight: 'rgba(107, 114, 128, 0.2)',
};

// 🌍 ALL TMDB SUPPORTED COUNTRIES - FULLY ALPHABETICAL (100+)
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
      const country = data.country?.toUpperCase();
      console.log('🌍 Auto-detected user country:', country);
      return country || 'US';
    }
  } catch (e) {
    console.log('❌ Location detection failed, defaulting to US');
  }
  return 'US';
}

async function getAllRegionStreamingData(tmdbId, title) {
  const apiKey = '6054e5498fb2619274454959c38bbdfa';
  const streamingData = {};

  console.log(`🎬 Fetching streaming data for TMDB ID: ${tmdbId}`);

  try {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${tmdbId}/watch/providers?api_key=${apiKey}`);

    if (!response.ok) {
      if (response.status === 404) {
        console.warn(`⚠️ Movie not found in TMDB: ${tmdbId} (${title})`);
        return {};
      }
      throw new Error(`TMDB API failed: ${response.status}`);
    }

    const data = await response.json();
    console.log('📡 TMDB Response:', data);

    const results = data.results || {};

    ALL_REGIONS.forEach((region) => {
      const regionData = results[region.code];
      if (regionData) {
        streamingData[region.code] = {
          ...regionData,
          region: region
        };
        console.log(`✅ Found data for ${region.name}:`, regionData);
      }
    });

    return streamingData;
  } catch (error) {
    console.error('❌ Error fetching TMDB data:', error);
    return {};
  }
}

function getDeepLink(providerId, region, title, tmdbId) {
  return `https://www.themoviedb.org/movie/${tmdbId}/watch?locale=${region}`;
}

// 🔧 SMART REGION SELECTION LOGIC
function selectBestRegion(streamingData, userCountry) {
  const availableRegions = Object.keys(streamingData);
  
  if (availableRegions.length === 0) {
    return { selectedRegion: null, fallbackMessage: 'No data' };
  }

  // Priority 1: User's country
  if (streamingData[userCountry]) {
    console.log(`✅ Using user's country: ${userCountry}`);
    return { selectedRegion: userCountry, fallbackMessage: null };
  }

  // Priority 2: USA (fallback)
  if (streamingData['US']) {
    console.log(`⚠️ ${userCountry} not available, falling back to USA`);
    return { 
      selectedRegion: 'US', 
      fallbackMessage: `Not available in your country (${userCountry}). Showing USA availability instead.` 
    };
  }

  // Priority 3: First available region
  console.log(`⚠️ Neither ${userCountry} nor US available, using first available: ${availableRegions[0]}`);
  return { 
    selectedRegion: availableRegions[0], 
    fallbackMessage: `Not available in your country. Showing ${ALL_REGIONS.find(r => r.code === availableRegions[0])?.name || availableRegions[0]} availability instead.` 
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

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !movie?.tmdbId) return;

    const fetchData = async () => {
      setIsLoading(true);
      console.log(`🎬 Loading streaming data for ${movie.Title}`);

      try {
        const detectedCountry = await detectUserCountry();
        setUserCountry(detectedCountry);

        const data = await getAllRegionStreamingData(movie.tmdbId, movie.Title);

        if (data && Object.keys(data).length > 0) {
          setStreamingData(data);

          // Use smart selection logic
          const { selectedRegion: bestRegion, fallbackMessage: message } = selectBestRegion(data, detectedCountry);
          setSelectedRegion(bestRegion);
          setFallbackMessage(message);

          console.log('✅ Complete streaming data:', data);
        } else {
          console.warn('⚠️ No streaming data available for this movie');
          setStreamingData({});
          setFallbackMessage('No streaming data available');
        }
      } catch (error) {
        console.error('❌ Error fetching streaming data:', error);
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
      <motion.section className="mb-12" style={{ marginTop: '48px' }}>
        <div
          className="p-6 rounded-2xl border"
          style={{
            backgroundColor: COLORS.bgCard,
            borderColor: COLORS.borderNeutral
          }}
        >
          <div className="flex items-center justify-center">
            <Loader className="w-5 h-5 animate-spin" style={{ color: COLORS.accent }} />
            <span className="ml-3" style={{ color: COLORS.textSecondary, fontSize: '14px' }}>
              Loading streaming options...
            </span>
          </div>
        </div>
      </motion.section>
    );
  }

  const currentRegionData = streamingData[selectedRegion];
  const availableRegions = Object.keys(streamingData);
  const otherRegions = availableRegions.filter((code) => code !== selectedRegion);

  const selectedRegionInfo = ALL_REGIONS.find((r) => r.code === selectedRegion);
  const userCountryInfo = ALL_REGIONS.find((r) => r.code === userCountry);

  const StreamingPlatformCard = ({ provider, type, region }) => {
    const logoUrl = provider.logo_path ? `https://image.tmdb.org/t/p/w45${provider.logo_path}` : null;
    const deepLink = getDeepLink(provider.provider_id, region, movie.Title, movie.tmdbId);

    const handleClick = () => {
      console.log(`🔗 Opening ${provider.provider_name} for ${movie.Title} in ${region}`);
      window.open(deepLink, '_blank', 'noopener,noreferrer');
    };

    return (
      <motion.button
        onClick={handleClick}
        className="group relative p-2 xs:p-3 rounded-lg border transition-all duration-300 flex flex-col items-center gap-2 w-full"
        style={{
          backgroundColor: `${COLORS.accent}0D`,
          borderColor: COLORS.borderAccent
        }}
        whileHover={{ y: -2, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = `${COLORS.accent}1A`;
          e.currentTarget.style.borderColor = COLORS.borderAccentHover;
          e.currentTarget.style.boxShadow = `0 0 20px ${COLORS.accent}33`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = `${COLORS.accent}0D`;
          e.currentTarget.style.borderColor = COLORS.borderAccent;
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
{logoUrl && (
  <Image
    src={logoUrl}
    alt={provider.provider_name}
    width={40}
    height={40}
    className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 object-contain rounded"
    loading="lazy"
    onError={(e) => {
      // hide the logo if it fails to load
      e.target.style.display = 'none';
    }}
  />
)}

        <div className="text-center w-full min-h-[32px] flex flex-col justify-center">
          <div className="text-xs font-medium truncate w-full px-1" style={{ color: COLORS.textSecondary }}>
            {provider.provider_name}
          </div>
          <div className="text-xs leading-tight" style={{ color: COLORS.accent, fontSize: '10px' }}>
            {type === 'flatrate' ? 'Stream' : type === 'rent' ? 'Rent' : 'Buy'}
          </div>
        </div>

        <ExternalLink className="absolute top-1 right-1 xs:top-1.5 xs:right-1.5 w-2.5 h-2.5 xs:w-3 xs:h-3 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: COLORS.textMuted }} />
      </motion.button>
    );
  };

  return (
    <motion.section
      className="mb-12"
      style={{ marginTop: '48px' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <h2 className="text-2xl font-medium mb-6 flex items-center gap-3" style={{ color: COLORS.accent, fontSize: '22px' }}>
        <Play size={20} />
        Where to Watch
      </h2>

      {isLoading ? (
        <div
          className="p-8 rounded-2xl border"
          style={{
            backgroundColor: COLORS.bgCard,
            borderColor: COLORS.borderNeutral
          }}
        >
          <div className="flex items-center justify-center gap-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="w-8 h-8 rounded-full"
              style={{
                border: `2px solid ${COLORS.accent}4D`,
                borderTopColor: COLORS.accent
              }}
            />
            <div>
              <p style={{ color: COLORS.textSecondary, fontWeight: '500', fontSize: '16px' }}>
                Detecting your location and streaming options...
              </p>
              <p style={{ color: COLORS.textMuted, fontSize: '14px' }}>
                Checking availability for {movie?.Title || 'this movie'}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* 🟡 FALLBACK MESSAGE - Shows when region is different from user country */}
          {fallbackMessage && selectedRegion && selectedRegion !== userCountry && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-lg border"
              style={{
                backgroundColor: 'rgba(251, 146, 60, 0.1)',
                borderColor: 'rgba(251, 146, 60, 0.3)'
              }}
            >
              <p style={{ color: '#FB923C', fontSize: '14px', fontWeight: '500' }}>
                📍 {fallbackMessage}
              </p>
            </motion.div>
          )}

          {/* 🔵 REGION SELECTOR */}
          {selectedRegionInfo && availableRegions.length > 0 && (
            <div
              className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-3 xs:gap-4 p-3 xs:p-4 sm:p-6 rounded-lg xs:rounded-xl border"
              style={{
                backgroundColor: COLORS.bgCard,
                borderColor: COLORS.borderNeutral
              }}
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl xs:text-3xl">{selectedRegionInfo.flag}</span>
                <div className="min-w-0">
                  <div style={{ color: COLORS.textPrimary, fontWeight: '500', fontSize: '14px' }} className="xs:text-base truncate">
                    {selectedRegionInfo.name}
                  </div>
                  {selectedRegion === userCountry ? (
                    <div className="flex items-center gap-2 mt-0.5 xs:mt-1" style={{ color: '#22C55E', fontSize: '12px' }}>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#22C55E' }}></div>
                      <span>Auto-detected</span>
                    </div>
                  ) : (
                    <div style={{ color: COLORS.accent, fontSize: '12px', marginTop: '2px' }}>
                      {userCountryInfo?.name || userCountry} unavailable
                    </div>
                  )}
                </div>
              </div>

              {otherRegions.length > 0 && (
                <motion.button
                  onClick={() => setShowOtherRegions(!showOtherRegions)}
                  className="flex items-center justify-center xs:justify-start gap-2 px-3 xs:px-4 py-2 rounded-lg text-xs xs:text-sm transition-all duration-300 w-full xs:w-auto"
                  style={{
                    backgroundColor: COLORS.bgCardHover,
                    color: COLORS.textSecondary,
                    border: `1px solid ${COLORS.borderLight}`
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Other regions ({otherRegions.length})</span>
                  {showOtherRegions ? <ChevronUp size={14} className="xs:w-4 xs:h-4" /> : <ChevronDown size={14} className="xs:w-4 xs:h-4" />}
                </motion.button>
              )}
            </div>
          )}

          {/* 🟣 OTHER REGIONS DROPDOWN */}
          <AnimatePresence>
            {showOtherRegions && otherRegions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div
                  className="p-6 rounded-2xl border"
                  style={{
                    backgroundColor: `${COLORS.bgCard}66`,
                    borderColor: COLORS.borderLight
                  }}
                >
                  <h4 className="text-sm font-medium mb-4" style={{ color: COLORS.textSecondary }}>
                    Also available in:
                  </h4>
                  <div className="flex flex-wrap gap-3 max-h-96 overflow-y-auto">
                    {otherRegions.map((regionCode) => {
                      const region = ALL_REGIONS.find((r) => r.code === regionCode);
                      if (!region) return null;

                      return (
                        <motion.button
                          key={regionCode}
                          onClick={() => {
                            setSelectedRegion(regionCode);
                            setShowOtherRegions(false);
                            setFallbackMessage(null);
                          }}
                          className="px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-300 flex items-center gap-2"
                          style={{
                            backgroundColor: COLORS.bgCardHover,
                            borderColor: COLORS.borderNeutral,
                            color: COLORS.textSecondary
                          }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = COLORS.borderAccent;
                            e.currentTarget.style.backgroundColor = `${COLORS.accent}1A`;
                            e.currentTarget.style.color = COLORS.accent;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = COLORS.borderNeutral;
                            e.currentTarget.style.backgroundColor = COLORS.bgCardHover;
                            e.currentTarget.style.color = COLORS.textSecondary;
                          }}
                        >
                          <span className="text-lg">{region.flag}</span>
                          <span>{region.name}</span>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 🟢 STREAMING CONTENT */}
          <AnimatePresence mode="wait">
            {currentRegionData ? (
              <motion.div
                key={selectedRegion}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {currentRegionData.flatrate?.length > 0 && (
                  <div>
                    <h4
                      className="text-sm font-medium mb-4 flex items-center gap-2"
                      style={{ color: COLORS.accent }}
                    >
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS.accent }}></div>
                      Stream with Subscription
                    </h4>
                    <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 xs:gap-3 sm:gap-4">
                      {currentRegionData.flatrate.map((provider) => (
                        <StreamingPlatformCard
                          key={`${selectedRegion}-flatrate-${provider.provider_id}`}
                          provider={provider}
                          type="flatrate"
                          region={selectedRegion}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {currentRegionData.rent?.length > 0 && (
                  <div>
                    <h4
                      className="text-sm font-medium mb-4 flex items-center gap-2"
                      style={{ color: COLORS.accent }}
                    >
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS.accent }}></div>
                      Rent Digital Copy
                    </h4>
                    <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 xs:gap-3 sm:gap-4">
                      {currentRegionData.rent.map((provider) => (
                        <StreamingPlatformCard
                          key={`${selectedRegion}-rent-${provider.provider_id}`}
                          provider={provider}
                          type="rent"
                          region={selectedRegion}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {currentRegionData.buy?.length > 0 && (
                  <div>
                    <h4
                      className="text-sm font-medium mb-4 flex items-center gap-2"
                      style={{ color: COLORS.accent }}
                    >
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS.accent }}></div>
                      Buy Digital Copy
                    </h4>
                    <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 xs:gap-3 sm:gap-4">
                      {currentRegionData.buy.map((provider) => (
                        <StreamingPlatformCard
                          key={`${selectedRegion}-buy-${provider.provider_id}`}
                          provider={provider}
                          type="buy"
                          region={selectedRegion}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {!currentRegionData.flatrate?.length &&
                  !currentRegionData.rent?.length &&
                  !currentRegionData.buy?.length && (
                  <div
                    className="text-center p-6 rounded-2xl border"
                    style={{
                      backgroundColor: COLORS.bgCard,
                      borderColor: COLORS.borderLight
                    }}
                  >
                    <MapPin className="w-8 h-8 mx-auto mb-3" style={{ color: COLORS.textMuted }} />
                    <p style={{ color: COLORS.textMuted, fontSize: '14px' }}>
                      No streaming options found for {selectedRegionInfo?.name || selectedRegion}
                    </p>
                  </div>
                )}
              </motion.div>
            ) : availableRegions.length === 0 ? (
              <div
                className="text-center p-8 rounded-2xl border"
                style={{
                  backgroundColor: 'rgba(234, 88, 12, 0.1)',
                  borderColor: 'rgba(234, 88, 12, 0.5)'
                }}
              >
                <Globe className="w-12 h-12 mx-auto mb-4" style={{ color: '#EA580C' }} />
                <h4 className="text-lg font-medium mb-2" style={{ color: '#FB923C' }}>
                  No Streaming Data Available
                </h4>
                <p
                  className="mb-4"
                  style={{
                    color: 'rgba(251, 146, 60, 0.9)',
                    fontSize: '14px',
                    lineHeight: '1.6'
                  }}
                >
                  <strong>{movie?.Title}</strong> is not available on any streaming platform in the database, or streaming data is not yet available for this title.
                </p>
                <motion.button
                  onClick={() =>
                    window.open(`https://www.justwatch.com/search?q=${encodeURIComponent(movie?.Title || '')}`, '_blank')
                  }
                  className="px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 mx-auto"
                  style={{
                    backgroundColor: '#EA580C',
                    color: '#FFFFFF'
                  }}
                  whileHover={{ scale: 1.05 }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#DC2626')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#EA580C')}
                >
                  <ExternalLink size={14} />
                  Search on JustWatch
                </motion.button>
              </div>
            ) : null}
          </AnimatePresence>

          <div className="text-center pt-4">
            <p style={{ color: COLORS.textDisabled, fontSize: '12px' }}>
              Streaming availability powered by <span style={{ color: '#3B82F6', fontWeight: '500' }}>TMDB</span> • Auto-detected location via IPinfo • Supports 100+ Countries (A-Z)
            </p>
          </div>
        </div>
      )}
    </motion.section>
  );
});

EnhancedWhereToWatchSection.displayName = 'EnhancedWhereToWatchSection';

export default EnhancedWhereToWatchSection;