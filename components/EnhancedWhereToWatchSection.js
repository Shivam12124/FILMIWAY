// components/EnhancedWhereToWatchSection.js - SEO HIERARCHY FIXED (H2 -> H3) 🍷✅
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Globe, ExternalLink, Loader, MapPin, ChevronDown, ChevronUp, Tv, Search, Info, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// 🌍 ALL TMDB SUPPORTED COUNTRIES - FULLY ALPHABETICAL
const ALL_REGIONS = [
  { code: 'AF', name: 'Afghanistan', flag: '🇦🇫' },
  { code: 'AL', name: 'Albania', flag: '🇦🇱' },
  { code: 'DZ', name: 'Algeria', flag: '🇩🇿' },
  { code: 'AO', name: 'Angola', flag: '🇦🇴' },
  { code: 'AR', name: 'Argentina', flag: '🇦🇷' },
  { code: 'AM', name: 'Armenia', flag: '🇦🇲' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺' },
  { code: 'AT', name: 'Austria', flag: '🇦🇹' },
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
  { code: 'CD', name: 'Democratic Republic of the Congo', flag: '🇨🇩' },
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
  { code: 'GY', name: 'Guyana', flag: '🇬🇾' },
  { code: 'HN', name: 'Honduras', flag: '🇭🇳' },
  { code: 'HK', name: 'Hong Kong', flag: '🇭🇰' },
  { code: 'HU', name: 'Hungary', flag: '🇭🇺' },
  { code: 'IS', name: 'Iceland', flag: '🇮🇸' },
  { code: 'IN', name: 'India', flag: '🇮🇳' },
  { code: 'ID', name: 'Indonesia', flag: '🇮🇩' },
  { code: 'IR', name: 'Iran', flag: '🇮🇷' },
  { code: 'IQ', name: 'Iraq', flag: '🇮🇶' },
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
  { code: 'PK', name: 'Pakistan', flag: '🇵🇰' },
  { code: 'PA', name: 'Panama', flag: '🇵🇦' },
  { code: 'PY', name: 'Paraguay', flag: '🇵🇾' },
  { code: 'PE', name: 'Peru', flag: '🇵🇪' },
  { code: 'PH', name: 'Philippines', flag: '🇵🇭' },
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
  { code: 'SD', name: 'Sudan', flag: '🇸🇩' },
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
  { code: 'UG', name: 'Uganda', flag: '🇺🇬' },
  { code: 'UA', name: 'Ukraine', flag: '🇺🇦' },
  { code: 'AE', name: 'United Arab Emirates', flag: '🇦🇪' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'UY', name: 'Uruguay', flag: '🇺🇾' },
  { code: 'UZ', name: 'Uzbekistan', flag: '🇺🇿' },
  { code: 'VE', name: 'Venezuela', flag: '🇻🇪' },
  { code: 'VN', name: 'Vietnam', flag: '🇻🇳' },
  { code: 'YE', name: 'Yemen', flag: '🇾🇪' },
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
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const streamingData = {};

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);

    const response = await fetch(`https://api.themoviedb.org/3/movie/${tmdbId}/watch/providers?api_key=${apiKey}`, { signal: controller.signal });
    clearTimeout(timeoutId);

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

function getDeepLink(providerId, region, title, tmdbId, providerName) {
  const pId = Number(providerId);
  const name = (providerName || '').toLowerCase();

  // 119 = Amazon Prime Video, 9 = Amazon Video (Rent/Buy), 10 = Amazon Video (Rent), 2100 = Amazon Prime Video with Ads
  if (name.includes('amazon') || pId === 119 || pId === 9 || pId === 10 || pId === 2100) {
    const amazonDomains = {
      US: 'amazon.com',
      GB: 'amazon.co.uk',
      CA: 'amazon.ca',
      AU: 'amazon.com.au',
      IN: 'amazon.in',
      DE: 'amazon.de',
      FR: 'amazon.fr',
      ES: 'amazon.es',
      IT: 'amazon.it',
      JP: 'amazon.co.jp'
    };
    const domain = amazonDomains[region] || 'amazon.com';

    // Country-specific tracking tag routing
    const trackingTags = {
      IN: 'filmiway-21',
      GB: 'filmiway09-21',
      US: 'filmiway-20',
      CA: 'filmiway06-20'
    };
    const tag = trackingTags[region] || 'filmiway-20';

    return `https://www.${domain}/s?k=${encodeURIComponent(title + " movie")}&tag=${tag}`;
  }
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
  const [showAllOptions, setShowAllOptions] = useState(false);
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
      <div className="mb-12 mt-12 w-full min-h-[250px] rounded-2xl border border-white/5 bg-white/[0.02] flex items-center justify-center animate-pulse">
        <Loader className="w-5 h-5 animate-spin text-gray-500" />
      </div>
    );
  }

  const currentRegionData = streamingData[selectedRegion];
  const availableRegions = Object.keys(streamingData);
  const otherRegions = availableRegions.filter((code) => code !== selectedRegion);
  const selectedRegionInfo = ALL_REGIONS.find((r) => r.code === selectedRegion);

  // --- NEW LOGIC FOR HERO AMAZON ---
  const targetRegions = ['US', 'GB', 'CA', 'IN'];
  const isTargetRegion = targetRegions.includes(selectedRegion);

  let heroAmazonProvider = null;
  let heroAmazonType = null;
  let filteredFlatrate = currentRegionData?.flatrate || [];
  let filteredRent = currentRegionData?.rent || [];
  let filteredBuy = currentRegionData?.buy || [];

  const isAmazon = (p) => p.provider_name.toLowerCase().includes('amazon') || [119, 9, 10, 2100].includes(p.provider_id);

  if (isTargetRegion && currentRegionData) {
    // Check flatrate first
    const amzFlatrate = filteredFlatrate.find(isAmazon);
    if (amzFlatrate) {
      heroAmazonProvider = amzFlatrate;
      heroAmazonType = 'flatrate';
      filteredFlatrate = filteredFlatrate.filter(p => !isAmazon(p));
    } else {
      const amzRent = filteredRent.find(isAmazon);
      if (amzRent) {
        heroAmazonProvider = amzRent;
        heroAmazonType = 'rent';
        filteredRent = filteredRent.filter(p => !isAmazon(p));
      } else {
        const amzBuy = filteredBuy.find(isAmazon);
        if (amzBuy) {
          heroAmazonProvider = amzBuy;
          heroAmazonType = 'buy';
          filteredBuy = filteredBuy.filter(p => !isAmazon(p));
        }
      }
    }
  }
  const hasOtherOptions = filteredFlatrate.length > 0 || filteredRent.length > 0 || filteredBuy.length > 0;
  const isMovieAvailableInRegion = Boolean(currentRegionData && (heroAmazonProvider || hasOtherOptions));

  const handleExpressVpnClick = async (e) => {
    e.preventDefault();
    // Open ExpressVPN tracking link immediately in a new tab
    window.open("https://go.expressvpn.com/c/7564909/1462856/16063", "_blank", "noopener,noreferrer");

    // Log click event & geolocation analytics to Firebase Firestore
    try {
      let country = selectedRegion || userCountry || 'US';
      let city = 'Unknown';

      try {
        const response = await fetch('https://ipinfo.io/json');
        if (response.ok) {
          const data = await response.json();
          country = data.country?.toUpperCase() || country;
          city = data.city || 'Unknown';
        }
      } catch (err) {
        // Silent fallback if IP info fails
      }

      await addDoc(collection(db, 'affiliate_clicks'), {
        movieSlug: movie?.slug || movie?.tmdbId || 'unknown',
        movieTitle: movie?.Title || 'Unknown Movie',
        promoType: 'expressvpn',
        isAvailableInRegion: isMovieAvailableInRegion,
        selectedRegion: selectedRegion || 'US',
        userCountry: country,
        city: city,
        timestamp: serverTimestamp(),
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'Unknown'
      });
    } catch (err) {
      console.error("Firebase ExpressVPN click tracking error:", err);
    }
  };
  // ----------------------------------

  const StreamingPlatformCard = ({ provider, type, region }) => {
    const logoUrl = provider.logo_path ? `https://image.tmdb.org/t/p/w45${provider.logo_path}` : null;
    const deepLink = getDeepLink(provider.provider_id, region, movie.Title, movie.tmdbId, provider.provider_name);
    const typeLabel = type === 'flatrate' ? 'Stream' : type === 'rent' ? 'Rent' : 'Buy';

    const handleCardClick = async () => {
      try {
        await addDoc(collection(db, 'amazon_affiliate_clicks'), {
          movieTitle: movie.Title,
          tmdbId: movie.tmdbId,
          country: userCountry || region || 'US',
          storeRegion: region,
          providerName: provider.provider_name,
          timestamp: serverTimestamp()
        });
      } catch (e) {
        console.error('Error tracking platform click:', e);
      }
      window.open(deepLink, '_blank', 'noopener,noreferrer');
    };

    return (
      <motion.button
        onClick={handleCardClick}
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

  const HeroAmazonCard = ({ provider, type, region }) => {
    const logoUrl = provider.logo_path ? `https://image.tmdb.org/t/p/w45${provider.logo_path}` : null;
    const deepLink = getDeepLink(provider.provider_id, region, movie.Title, movie.tmdbId, provider.provider_name);
    const typeLabel = type === 'flatrate' ? 'Stream Now' : type === 'rent' ? 'Rent Now' : 'Buy Now';

    const handleAmazonClick = async () => {
      try {
        await addDoc(collection(db, 'amazon_affiliate_clicks'), {
          movieTitle: movie.Title,
          tmdbId: movie.tmdbId,
          country: userCountry || region || 'US',
          storeRegion: region,
          providerName: provider.provider_name,
          timestamp: serverTimestamp()
        });
      } catch (e) {
        console.error('Error tracking Amazon click:', e);
      }
      window.open(deepLink, '_blank', 'noopener,noreferrer');
    };

    return (
      <motion.button
        onClick={handleAmazonClick}
        className="group relative w-full p-6 sm:p-8 rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-transparent hover:bg-yellow-500/20 hover:border-yellow-500/50 transition-all duration-500 flex flex-col sm:flex-row items-center gap-6 backdrop-blur-md overflow-hidden shadow-2xl shadow-yellow-500/5"
        whileHover={{ y: -4, scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-yellow-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {logoUrl ? (
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shadow-xl shadow-yellow-500/20 group-hover:shadow-yellow-500/40 transition-all duration-500 shrink-0 border border-white/10">
            <Image
              src={logoUrl}
              alt={provider.provider_name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 64px, 80px"
            />
          </div>
        ) : (
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
            <Tv className="w-8 h-8 text-yellow-500/80" />
          </div>
        )}

        <div className="text-center sm:text-left w-full flex flex-col gap-2 z-10">
          <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-yellow-500/90 group-hover:text-yellow-400 transition-colors">
            Featured on Amazon
          </div>
          <div className="text-xl sm:text-2xl font-semibold text-white group-hover:text-yellow-50 transition-colors">
            Watch {movie.Title}
          </div>
          <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors flex items-center justify-center sm:justify-start gap-2">
            <span>{provider.provider_name}</span>
            <span className="w-1 h-1 rounded-full bg-gray-600" />
            <span className="text-yellow-500/80 font-medium">{typeLabel}</span>
          </div>
        </div>

        <div className="shrink-0 w-full sm:w-auto mt-4 sm:mt-0 z-10">
          <div className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-yellow-500 text-black font-semibold tracking-wide flex items-center justify-center gap-2 group-hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/25">
            <Play fill="currentColor" size={16} />
            {typeLabel}
          </div>
        </div>
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

      {/* 🚀 ExpressVPN Official Affiliate Link Banner (Prominent Brand & Dynamic Geo-Messaging) */}
      <motion.a
        href="https://go.expressvpn.com/c/7564909/1462856/16063"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleExpressVpnClick}
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        className="group relative flex flex-col md:flex-row items-start md:items-center justify-between gap-5 p-5 lg:p-6 mb-6 rounded-2xl border border-red-500/35 bg-gradient-to-r from-red-950/50 via-[#120507] to-black/90 hover:border-red-500/70 transition-all duration-300 backdrop-blur-md shadow-xl shadow-black/50 hover:shadow-red-600/15 cursor-pointer overflow-hidden"
      >
        {/* Subtle red background aura */}
        <div className="absolute -left-10 -top-10 w-40 h-40 bg-red-600/15 rounded-full blur-3xl group-hover:bg-red-600/25 transition-all pointer-events-none" />

        <div className="flex items-start sm:items-center gap-4 flex-1 min-w-0 z-10">
          {/* ExpressVPN Official Red Brand Badge */}
          <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#e01931] border border-red-400/40 text-white shrink-0 group-hover:scale-105 transition-transform shadow-md shadow-red-900/60 mt-0.5 sm:mt-0">
            <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
              <path d="M12 2L2 7v6c0 5.55 3.84 10.74 10 12 6.16-1.26 10-6.45 10-12V7l-10-5zm0 4.5l6 3v4.5c0 3.85-2.6 7.42-6 8.4-3.4-.98-6-4.55-6-8.4V9.5l6-3z" />
            </svg>
          </div>

          <div className="flex flex-col flex-1 min-w-0">
            {/* ExpressVPN Brand Header */}
            <div className="flex items-center gap-2.5 mb-1 flex-wrap">
              <span className="text-sm font-extrabold text-white tracking-wide uppercase">
                ExpressVPN
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-red-600/30 text-red-300 border border-red-500/40 shrink-0">
                {!isMovieAvailableInRegion ? `🔒 REGION LOCKED IN ${selectedRegionInfo?.name?.toUpperCase() || 'YOUR REGION'}` : '🌐 OFFICIAL STREAMING PARTNER'}
              </span>
            </div>

            {/* Dynamic Headline */}
            <h4 className="text-sm sm:text-base font-semibold text-gray-100 group-hover:text-red-200 transition-colors m-0">
              {!isMovieAvailableInRegion
                ? `Not Available for Streaming in ${selectedRegionInfo?.name || 'Your Region'}?`
                : `Unlock 10,000+ Hidden Global Movies with ExpressVPN`}
            </h4>

            {/* Dynamic Body Description */}
            <p className="text-xs text-gray-300 font-light mt-1 leading-relaxed m-0">
              {!isMovieAvailableInRegion
                ? `This film is geo-blocked or missing from ${selectedRegionInfo?.name || 'local'} platforms. Connect to US or UK servers with ExpressVPN to bypass regional blocks &amp; stream ${movie?.Title || 'it'} immediately.`
                : `Streaming ${movie?.Title || 'this movie'} in ${selectedRegionInfo?.name || 'your country'}? Use ExpressVPN to easily switch server regions &amp; access international US Netflix, Max, &amp; Prime video catalogs.`}
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-white shrink-0 w-full md:w-auto justify-center px-5 py-3 rounded-xl bg-gradient-to-r from-[#e01931] to-red-700 hover:from-red-500 hover:to-rose-600 transition-all shadow-md shadow-red-600/30 group-hover:shadow-red-600/50 z-10 border border-red-400/40 whitespace-nowrap">
          <span>{!isMovieAvailableInRegion ? `Stream with ExpressVPN` : 'Get ExpressVPN (49% Off)'}</span>
          <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </div>
      </motion.a>



      {isLoading ? (
        <div className="w-full min-h-[250px] rounded-2xl border border-white/5 bg-white/[0.02] flex items-center justify-center animate-pulse">
          <Loader className="w-5 h-5 animate-spin text-gray-500" />
        </div>
      ) : (
        <div className="space-y-6">

          {fallbackMessage && selectedRegion && selectedRegion !== userCountry && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 px-1"
            >
              <Info size={14} className="text-gray-500" />
              <p className="text-gray-400 text-sm font-light tracking-wide">
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

                {heroAmazonProvider && (
                  <div className="w-full pb-4">
                    <HeroAmazonCard provider={heroAmazonProvider} type={heroAmazonType} region={selectedRegion} />
                  </div>
                )}

                {heroAmazonProvider && hasOtherOptions && !showAllOptions && (
                  <div className="flex justify-center -mt-4">
                    <button
                      onClick={() => setShowAllOptions(true)}
                      className="px-5 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-[13px] text-gray-300 hover:text-white flex items-center gap-2"
                    >
                      Show other viewing options
                      <ChevronDown size={14} />
                    </button>
                  </div>
                )}

                {(!heroAmazonProvider || showAllOptions) && (
                  <>
                    {filteredFlatrate.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-4"
                      >
                        <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-yellow-500/80 flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-yellow-500" />
                          Stream with Subscription
                        </h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
                          {filteredFlatrate.map((provider) => (
                            <StreamingPlatformCard key={`flatrate-${provider.provider_id}`} provider={provider} type="flatrate" region={selectedRegion} />
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {filteredRent.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-4"
                      >
                        <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-gray-400" />
                          Rent Digital Copy
                        </h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
                          {filteredRent.map((provider) => (
                            <StreamingPlatformCard key={`rent-${provider.provider_id}`} provider={provider} type="rent" region={selectedRegion} />
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {filteredBuy.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-4"
                      >
                        <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-gray-400" />
                          Buy Digital Copy
                        </h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
                          {filteredBuy.map((provider) => (
                            <StreamingPlatformCard key={`buy-${provider.provider_id}`} provider={provider} type="buy" region={selectedRegion} />
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </>
                )}

                {!heroAmazonProvider && filteredFlatrate.length === 0 && filteredRent.length === 0 && filteredBuy.length === 0 && (
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