// components/EnhancedWhereToWatchSection.js - SEO HIERARCHY FIXED (H2 -> H3) 🍷✅
import React, { useState, useEffect, useMemo } from 'react';
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
  if (typeof window === 'undefined') return 'US';

  // 1. Check Session Cache to prevent repeat lookups
  try {
    const cached = sessionStorage.getItem('fw_user_country');
    if (cached && ALL_REGIONS.some(r => r.code === cached)) {
      return cached;
    }
  } catch (e) {}

  // 2. High-speed TimeZone mapping (Instant, 0 network requests, immune to ad blockers/rate limits)
  const timezoneToCountry = {
    'Asia/Kolkata': 'IN', 'Asia/Calcutta': 'IN',
    'Europe/London': 'GB',
    'America/Toronto': 'CA', 'America/Vancouver': 'CA', 'America/Montreal': 'CA', 'America/Edmonton': 'CA',
    'Australia/Sydney': 'AU', 'Australia/Melbourne': 'AU', 'Australia/Brisbane': 'AU', 'Australia/Perth': 'AU', 'Australia/Adelaide': 'AU',
    'Europe/Berlin': 'DE', 'Europe/Paris': 'FR', 'Europe/Madrid': 'ES', 'Europe/Rome': 'IT',
    'Europe/Amsterdam': 'NL', 'Europe/Dublin': 'IE', 'Europe/Brussels': 'BE', 'Europe/Vienna': 'AT',
    'Europe/Zurich': 'CH', 'Europe/Stockholm': 'SE', 'Europe/Oslo': 'NO', 'Europe/Copenhagen': 'DK',
    'Europe/Helsinki': 'FI', 'Europe/Warsaw': 'PL', 'Europe/Prague': 'CZ', 'Europe/Budapest': 'HU',
    'Europe/Bucharest': 'RO', 'Europe/Athens': 'GR', 'Europe/Lisbon': 'PT',
    'America/Sao_Paulo': 'BR', 'America/Mexico_City': 'MX', 'America/Buenos_Aires': 'AR', 'America/Bogota': 'CO',
    'Asia/Tokyo': 'JP', 'Asia/Seoul': 'KR', 'Asia/Singapore': 'SG', 'Asia/Bangkok': 'TH',
    'Asia/Jakarta': 'ID', 'Asia/Manila': 'PH', 'Asia/Dubai': 'AE', 'Asia/Riyadh': 'SA',
    'Pacific/Auckland': 'NZ', 'Africa/Johannesburg': 'ZA'
  };

  let tzCountry = null;
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz) {
      if (timezoneToCountry[tz]) {
        tzCountry = timezoneToCountry[tz];
      } else if (tz.startsWith('America/') && !tz.includes('Toronto') && !tz.includes('Vancouver') && !tz.includes('Sao_Paulo') && !tz.includes('Mexico_City')) {
        tzCountry = 'US';
      }
    }
  } catch (e) {}

  // 3. Ultra-fast Cloudflare Edge & Public IP Geolocation Fallbacks
  const ipServices = [
    { url: 'https://api.country.is/', key: 'country' },
    { url: 'https://ipwho.is/', key: 'country_code' },
    { url: 'https://ipinfo.io/json', key: 'country' }
  ];

  for (const service of ipServices) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);
      const res = await fetch(service.url, { signal: controller.signal, headers: { 'Accept': 'application/json' } });
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        const code = (data[service.key] || '').toUpperCase();
        if (code && ALL_REGIONS.some(r => r.code === code)) {
          try { sessionStorage.setItem('fw_user_country', code); } catch (e) {}
          return code;
        }
      }
    } catch (e) {
      continue;
    }
  }

  // 4. If IP services blocked by ad blocker, use timezone detection
  if (tzCountry && ALL_REGIONS.some(r => r.code === tzCountry)) {
    try { sessionStorage.setItem('fw_user_country', tzCountry); } catch (e) {}
    return tzCountry;
  }

  return 'US';
}

async function getAllRegionStreamingData(tmdbId, title) {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const streamingData = {};

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

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

function getDeepLink(providerId, region, title, tmdbId, providerName, type, userCountry) {
  const pId = Number(providerId);
  const name = (providerName || '').toLowerCase();
  const isRentOrBuy = type === 'rent' || type === 'buy';

  // 119 = Amazon Prime Video, 9 = Amazon Video (Rent/Buy), 10 = Amazon Video (Rent), 2100 = Amazon Prime Video with Ads
  if (name.includes('amazon') || pId === 119 || pId === 9 || pId === 10 || pId === 2100 || isRentOrBuy) {
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
    
    // Direct user to store matching their actual detected location if available, otherwise viewing region
    const targetCode = (userCountry && amazonDomains[userCountry]) ? userCountry : (region || 'US');
    const domain = amazonDomains[targetCode] || 'amazon.com';

    // Country-specific tracking tag routing
    const trackingTags = {
      GB: 'filmiway09-21',
      US: 'filmiway-20',
      CA: 'filmiway06-20'
    };
    const tag = trackingTags[targetCode] || 'filmiway-20';

    // Normalize accents (e.g., "Irréversible" -> "Irreversible") so Amazon search finds the exact movie/physical disc
    const normalizedTitle = (title || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();

    return `https://www.${domain}/s?k=${encodeURIComponent(normalizedTitle + " movie")}&tag=${tag}`;
  }
  return `https://www.themoviedb.org/movie/${tmdbId}/watch?locale=${region}`;
}

function selectBestRegion(streamingData, userCountry) {
  const availableRegions = Object.keys(streamingData);
  const effectiveCountry = userCountry || 'US';
  if (availableRegions.length === 0) return { selectedRegion: effectiveCountry, fallbackMessage: null };

  // 1. If streaming exists in the user's detected country, show it directly!
  if (streamingData[effectiveCountry]) return { selectedRegion: effectiveCountry, fallbackMessage: null };

  const userRegionInfo = ALL_REGIONS.find(r => r.code === effectiveCountry);
  const userRegionName = userRegionInfo?.name || effectiveCountry;

  // 2. If not available in their country, fallback to US catalog
  if (streamingData['US']) {
    return {
      selectedRegion: 'US',
      fallbackMessage: effectiveCountry === 'US' ? null : `Not streaming in ${userRegionName}. Showing USA availability.`
    };
  }

  const firstAvailableName = ALL_REGIONS.find(r => r.code === availableRegions[0])?.name || availableRegions[0];

  return {
    selectedRegion: availableRegions[0],
    fallbackMessage: `Not streaming in ${userRegionName}. Showing ${firstAvailableName} availability.`
  };
}

// 🧠 DYNAMIC VPN STREAMING TIP ENGINE (3 Strict Priorities: 1. Free, 2. Cheaper Abroad, 3. Buffering/ISP)
function getVpnStreamingTip(streamingData, userCountry, movieTitle) {
  const uCountry = userCountry || 'US';
  const data = streamingData || {};

  // =========================================================================
  // PRIORITY 1: FREE OPTION (Mention exact platform and country)
  // =========================================================================

  // Check UK 100% Free Broadcasters (Channel 4, BBC iPlayer, ITVX, My5)
  const gbProviders = [
    ...(data['GB']?.flatrate || []),
    ...(data['GB']?.free || []),
    ...(data['GB']?.ads || [])
  ];
  const gbFree = gbProviders.find(p => {
    const name = (p.provider_name || '').toLowerCase();
    return name.includes('channel 4') || name.includes('all 4') || name.includes('bbc iplayer') || name.includes('itvx') || name.includes('my5');
  });

  if (gbFree) {
    return {
      type: 'free',
      eyebrow: '100% Free Streaming Available',
      title: `Stream Free on UK ${gbFree.provider_name}`,
      description: `Instead of paying rental fees, ${movieTitle || 'this movie'} is streaming completely free with no subscription on the UK public network ${gbFree.provider_name}. Connect to the UK with ExpressVPN to stream right now with zero fees.`,
      cta: `Watch Free on UK ${gbFree.provider_name}`,
      provider: gbFree.provider_name
    };
  }

  // Check Australia 100% Free Broadcasters (SBS On Demand, ABC iview, 10 Play, 7plus, 9Now)
  const auProviders = [
    ...(data['AU']?.flatrate || []),
    ...(data['AU']?.free || []),
    ...(data['AU']?.ads || [])
  ];
  const auFree = auProviders.find(p => {
    const name = (p.provider_name || '').toLowerCase();
    return name.includes('sbs on demand') || name.includes('abc iview') || name.includes('7plus') || name.includes('9now') || name.includes('10 play');
  });

  if (auFree) {
    return {
      type: 'free',
      eyebrow: '100% Free Streaming Available',
      title: `Stream Free on Australia's ${auFree.provider_name}`,
      description: `Instead of paying rental fees, ${movieTitle || 'this movie'} is streaming completely free on Australia's public network ${auFree.provider_name}. Connect to Australia with ExpressVPN to stream right now with zero fees.`,
      cta: `Watch Free on Australian ${auFree.provider_name}`,
      provider: auFree.provider_name
    };
  }

  // Check US 100% Free Broadcasters (Tubi, Pluto TV, Freevee, The Roku Channel)
  const usFreeProviders = [
    ...(data['US']?.free || []),
    ...(data['US']?.ads || [])
  ];
  const usFree = usFreeProviders.find(p => {
    const name = (p.provider_name || '').toLowerCase();
    return name.includes('tubi') || name.includes('pluto') || name.includes('freevee') || name.includes('roku channel');
  });

  if (usFree) {
    return {
      type: 'free',
      eyebrow: '100% Free Streaming Available',
      title: `Stream Free on ${usFree.provider_name} (US)`,
      description: `Instead of paying $3.99+ on rentals, ${movieTitle || 'this movie'} is streaming 100% free with ads on ${usFree.provider_name} in the United States. Connect with ExpressVPN ($2.99/mo + 4 months free) to stream in Ultra HD without ISP speed throttling.`,
      cta: `Watch Free on ${usFree.provider_name}`,
      provider: usFree.provider_name
    };
  }

  // =========================================================================
  // PRIORITY 2: NETFLIX INTERNATIONAL CATALOG (Clever & High-Converting)
  // =========================================================================
  const usFlatrate = data['US']?.flatrate || [];
  const hasUsNetflix = usFlatrate.some(p => (p.provider_name || '').toLowerCase().includes('netflix') || p.provider_id === 8);

  if (!hasUsNetflix) {
    const targetCodes = ['GB', 'CA', 'AU'].filter(c => c !== uCountry);
    const netflixMatches = [];
    for (const code of targetCodes) {
      const hasNet = (data[code]?.flatrate || []).some(p => (p.provider_name || '').toLowerCase().includes('netflix') || p.provider_id === 8);
      if (hasNet) {
        const cName = code === 'GB' ? 'UK' : code === 'CA' ? 'Canada' : 'Australia';
        netflixMatches.push(cName);
      }
    }

    if (netflixMatches.length > 0) {
      const targetCountriesStr = netflixMatches.slice(0, 2).join(' & ');
      return {
        type: 'netflix',
        eyebrow: 'Streaming on International Netflix',
        title: `Available on Netflix ${targetCountriesStr}`,
        description: `${movieTitle || 'This movie'} is streaming on Netflix in ${targetCountriesStr}. Connect with ExpressVPN ($2.99/mo + 4 months free) to unlock international streaming catalogs and watch on your TV, phone, or PC.`,
        cta: `Stream on Netflix ${targetCountriesStr}`,
        provider: 'Netflix'
      };
    }
  }

  // Also check other foreign subscription platforms (e.g. Peacock, Max, Hulu in US for non-US users; Crave, Stan, Sky Cinema abroad for US users)
  const foreignCodes = (uCountry === 'US' ? ['GB', 'CA', 'AU'] : ['US', 'GB', 'CA', 'AU']).filter(c => c !== uCountry);
  for (const code of foreignCodes) {
    const foreignStreams = (data[code]?.flatrate || []).filter(p => {
      const n = (p.provider_name || '').toLowerCase();
      // Exclude Amazon so it never clashes with our dedicated Amazon button
      return !n.includes('amazon') && !n.includes('prime') && !n.includes('netflix');
    });

    if (foreignStreams.length > 0) {
      const topForeign = foreignStreams[0].provider_name.replace(/ Premium| Plus|\+/, '');
      const cName = code === 'GB' ? 'UK' : code === 'CA' ? 'Canada' : code === 'AU' ? 'Australia' : 'US';
      const isUS = code === 'US';
      return {
        type: 'unblock',
        eyebrow: isUS ? 'US Streaming Catalog' : 'International Streaming Catalog',
        title: isUS ? `Unlock US ${topForeign} & Global Catalogs` : `Unlock ${topForeign} (${cName}) & Global Catalogs`,
        description: isUS
          ? `Get ExpressVPN ($2.99/mo + 4 months free) to watch ${movieTitle || 'this movie'} on ${topForeign} (USA), plus unlock thousands of US-exclusive movies, original series, and global streaming libraries with complete browsing privacy.`
          : `Get ExpressVPN ($2.99/mo + 4 months free) to watch ${movieTitle || 'this movie'} on ${topForeign} (${cName}), plus unlock thousands of international films, BBC, and global streaming libraries with complete browsing privacy.`,
        cta: isUS ? `Unlock US ${topForeign} with ExpressVPN` : `Unlock ${topForeign} (${cName}) with ExpressVPN`,
        provider: topForeign
      };
    }
  }

  // =========================================================================
  // PRIORITY 3: HIGH-SPEED STREAMING & ANTI-THROTTLING (Fallback for All Other Films)
  // =========================================================================
  return {
    type: 'speed',
    eyebrow: 'High-Speed Cinema Access',
    title: `Streaming ${movieTitle || 'this movie'} tonight?`,
    description: `Stop ISP bandwidth throttling, eliminate buffering during peak evening hours, and stream privately in Ultra HD with ExpressVPN ($2.99/mo + 4 months free).`,
    cta: `Stream with ExpressVPN`,
    provider: 'ExpressVPN'
  };
}

// 🛡️ SMART VPN STREAMING CARD COMPONENT (Clean Editorial Cinema Design - Straight Clear Words, NO Truncation, NO Cheap Capsules/Boxes)
const SmartVpnStreamingCard = ({ tip, movieTitle }) => {
  if (!tip) return null;

  const handleVpnClick = async () => {
    try {
      await addDoc(collection(db, 'affiliate_clicks'), {
        type: 'expressvpn_smart_tip',
        tipType: tip.type,
        movieTitle: movieTitle || 'Unknown',
        deal: '$2.99/mo + 4 mos free',
        timestamp: serverTimestamp()
      });
    } catch (e) {}
  };

  const ctaButtonText = tip.cta.includes('ExpressVPN') ? tip.cta : `${tip.cta} with ExpressVPN`;

  return (
    <div className="relative p-4 sm:p-5 rounded-2xl border border-red-900/40 bg-gradient-to-br from-[#130709] via-[#0c0506] to-[#070304] shadow-xl shadow-black/80 overflow-hidden group my-3">
      {/* Subtle top crimson accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

      <a
        href="https://go.expressvpn.com/c/7564909/1462856/16063"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleVpnClick}
        className="flex flex-col gap-3.5"
      >
        {/* Content Row: Icon + Full Title + Clear Explanatory Body */}
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-black/60 border border-red-500/30 p-1.5 shrink-0 flex items-center justify-center shadow-lg shadow-red-900/30 mt-0.5">
            <Image
              src="/images/expressvpn/Red, Icon.png"
              alt="ExpressVPN"
              width={30}
              height={30}
              className="object-contain"
            />
          </div>

          <div className="flex-1 min-w-0">
            {tip.eyebrow && (
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-red-400/90 block mb-1">
                {tip.eyebrow}
              </span>
            )}
            <h4 className="text-white text-sm sm:text-base font-bold group-hover:text-red-400 transition-colors leading-snug break-words">
              {tip.title}
            </h4>

            <p className="text-gray-300 text-xs sm:text-[13px] leading-relaxed mt-1 font-normal break-words">
              {tip.description}
            </p>
          </div>
        </div>

        {/* Full-Width Solid Red CTA Button: Complete Text, NO Nested Pills, NO Truncation */}
        <div className="flex flex-col items-center justify-center gap-1 px-4 py-3 bg-[#e01931] hover:bg-[#c0152a] text-white rounded-xl shadow-lg shadow-red-600/30 transition-all border border-red-500/40 group-hover:scale-[1.01] w-full text-center">
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold">
            <span>{ctaButtonText}</span>
            <ExternalLink size={14} className="shrink-0" />
          </div>
          <span className="text-[11px] font-medium text-red-100/90 tracking-wide">
            Special Filmiway Deal: $2.99/mo + 4 Months Free
          </span>
        </div>

        {/* Reassurance Micro-Footer: Clean Centered Layout (No mobile collision) */}
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between text-[11px] text-gray-400 gap-1 pt-2 border-t border-white/[0.06] text-center sm:text-left">
          <div className="flex items-center justify-center gap-1.5 text-gray-300">
            <ShieldCheck size={13} className="text-emerald-400 shrink-0" />
            <span>30-Day Money-Back Guarantee</span>
          </div>
          <span className="text-gray-500 text-[10.5px]">Smart TVs • Phones • PC</span>
        </div>
      </a>
    </div>
  );
};

const EnhancedWhereToWatchSection = React.memo(({ movie, compact = false }) => {
  const [streamingData, setStreamingData] = useState({});
  const [userCountry, setUserCountry] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [fallbackMessage, setFallbackMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showOtherRegions, setShowOtherRegions] = useState(false);
  const [showAllOptions, setShowAllOptions] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const vpnTip = useMemo(() => {
    return getVpnStreamingTip(streamingData, userCountry, movie?.Title);
  }, [streamingData, userCountry, movie?.Title]);

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
          setSelectedRegion(bestRegion || detectedCountry || 'US');
          setFallbackMessage(message);
        } else {
          setStreamingData({});
          setSelectedRegion(detectedCountry || 'US');
          setFallbackMessage(null);
        }
      } catch (error) {
        setStreamingData({});
        setSelectedRegion(userCountry || 'US');
        setFallbackMessage(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [movie?.tmdbId, movie?.Title, mounted]);

  if (!mounted) {
    return (
      <div className="w-full h-28 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center justify-center animate-pulse">
        <Loader className="w-5 h-5 animate-spin text-gray-400" />
      </div>
    );
  }

  const currentRegionData = streamingData[selectedRegion];
  const availableRegions = Object.keys(streamingData);
  const candidateRegions = availableRegions.length > 0 ? availableRegions : ALL_REGIONS.map(r => r.code);
  const otherRegions = candidateRegions.filter((code) => code !== selectedRegion);
  const selectedRegionInfo = ALL_REGIONS.find((r) => r.code === selectedRegion);

  // --- HERO AMAZON LOGIC (GLOBAL FOR ALL COUNTRIES & REGIONS) ---
  let heroAmazonProvider = null;
  let heroAmazonType = null;
  let filteredFlatrate = currentRegionData?.flatrate || [];
  let filteredRent = currentRegionData?.rent || [];
  let filteredBuy = currentRegionData?.buy || [];

  const isAmazon = (p) => (p?.provider_name || '').toLowerCase().includes('amazon') || [119, 9, 10, 2100].includes(p?.provider_id);

  if (currentRegionData) {
    // 1. Check flatrate first
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

  // 2. GLOBAL AMAZON FALLBACK: If Amazon was not in the region's TMDB feed, ALWAYS show Hero Amazon Card!
  // Every film can be rented, purchased digitally, or bought on 4K/Blu-ray/DVD on Amazon globally.
  if (!heroAmazonProvider) {
    heroAmazonProvider = {
      provider_id: 9,
      provider_name: 'Amazon',
      logo_path: '/pvske1MyAoymrs5bguRfVqYiM9a.jpg',
      isFallback: true
    };
    heroAmazonType = 'buy';
  }
  const hasOtherOptions = filteredFlatrate.length > 0 || filteredRent.length > 0 || filteredBuy.length > 0;
  const isMovieAvailableInRegion = Boolean(currentRegionData && (heroAmazonProvider || hasOtherOptions));
  const isAvailableInUserCountry = Boolean(userCountry && streamingData[userCountry]);
  const isGeoBlocked = !isMovieAvailableInRegion || Boolean(fallbackMessage) || (Boolean(userCountry) && selectedRegion !== userCountry && !isAvailableInUserCountry);
  const displayCountryName = (isGeoBlocked && userCountry && ALL_REGIONS.find(r => r.code === userCountry)?.name) || selectedRegionInfo?.name || 'Your Region';



  const StreamingPlatformCard = ({ provider, type, region }) => {
    const logoUrl = provider.logo_path ? `https://image.tmdb.org/t/p/w45${provider.logo_path}` : null;
    const deepLink = getDeepLink(provider.provider_id, region, movie?.Title || movie?.title, movie?.tmdbId, provider.provider_name, type, userCountry);
    const typeLabel = type === 'flatrate' ? 'Stream' : type === 'rent' ? 'Rent' : 'Buy';

    const handleCardClick = () => {
      // 🚀 Open link IMMEDIATELY within the direct user gesture tick (never blocked by popup blockers)
      window.open(deepLink, '_blank', 'noopener,noreferrer');

      // Check if this click routes to an Amazon search page link
      const isAmazonLink = deepLink.includes('amazon.') || (provider.provider_name || '').toLowerCase().includes('amazon') || type === 'rent' || type === 'buy';

      if (isAmazonLink) {
        addDoc(collection(db, 'wheretowatch_amazon_clicks'), {
          movieTitle: movie?.Title || movie?.title || 'Unknown',
          movieSlug: movie?.slug || 'unknown',
          tmdbId: movie?.tmdbId || null,
          country: userCountry || region || 'US',
          storeRegion: region || 'US',
          providerName: provider?.provider_name || 'Amazon',
          type: type || 'buy',
          targetUrl: deepLink,
          timestamp: serverTimestamp(),
          userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'Unknown'
        }).catch(e => {
          console.error('Error tracking where-to-watch Amazon click:', e);
        });
      }
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
    const deepLink = getDeepLink(provider.provider_id, region, movie?.Title || movie?.title, movie?.tmdbId, provider.provider_name, type, userCountry);
    const typeLabel = provider.isFallback ? 'Stream, Rent, or Buy (Blu-ray / 4K)' : (type === 'flatrate' ? 'Stream Now' : type === 'rent' ? 'Rent Now' : 'Buy Now');
    const buttonText = provider.isFallback ? 'Stream or Buy on Amazon' : (type === 'flatrate' ? 'Stream on Amazon' : 'Watch on Amazon');

    const handleAmazonClick = () => {
      // 🚀 Open Amazon link IMMEDIATELY within the direct user gesture tick (never blocked by popup blockers)
      window.open(deepLink, '_blank', 'noopener,noreferrer');

      // Non-blocking fire-and-forget Firestore tracking to dedicated where-to-watch Amazon collection
      addDoc(collection(db, 'wheretowatch_amazon_clicks'), {
        movieTitle: movie?.Title || movie?.title || 'Unknown',
        movieSlug: movie?.slug || 'unknown',
        tmdbId: movie?.tmdbId || null,
        country: userCountry || region || 'US',
        storeRegion: region || 'US',
        providerName: provider?.provider_name || 'Amazon',
        type: provider?.isFallback ? 'fallback_search' : (type || 'flatrate'),
        targetUrl: deepLink,
        timestamp: serverTimestamp(),
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'Unknown'
      }).catch(e => {
        console.error('Error tracking where-to-watch Amazon click:', e);
      });
    };

    return (
      <motion.button
        onClick={handleAmazonClick}
        className={compact
          ? "group relative w-full p-4 rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-transparent hover:bg-yellow-500/20 hover:border-yellow-500/50 transition-all duration-500 flex flex-col items-center gap-4 backdrop-blur-md overflow-hidden shadow-2xl shadow-yellow-500/5"
          : "group relative w-full p-6 sm:p-8 rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-transparent hover:bg-yellow-500/20 hover:border-yellow-500/50 transition-all duration-500 flex flex-col sm:flex-row items-center gap-6 backdrop-blur-md overflow-hidden shadow-2xl shadow-yellow-500/5"}
        whileHover={{ y: -4, scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
      >
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-yellow-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {logoUrl ? (
          <div className={compact ? "relative w-14 h-14 rounded-2xl overflow-hidden shadow-xl shadow-yellow-500/20 group-hover:shadow-yellow-500/40 transition-all duration-500 shrink-0 border border-white/10" : "relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shadow-xl shadow-yellow-500/20 group-hover:shadow-yellow-500/40 transition-all duration-500 shrink-0 border border-white/10"}>
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

        <div className={compact ? "text-center w-full flex flex-col gap-1.5 z-10" : "text-center sm:text-left w-full flex flex-col gap-1.5 sm:gap-2 z-10"}>
          <div className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-yellow-500/90 sm:text-yellow-400 group-hover:text-yellow-300 transition-colors">
            Featured on Amazon
          </div>
          <div className={compact ? "text-base font-bold text-white group-hover:text-yellow-50 transition-colors leading-snug" : "text-xl sm:text-2xl lg:text-3xl font-semibold sm:font-bold text-white group-hover:text-yellow-50 transition-colors"}>
            Watch {movie.Title} on Amazon
          </div>
          <div className={compact ? "text-xs text-gray-300 group-hover:text-white transition-colors flex flex-wrap items-center justify-center gap-2" : "text-xs sm:text-sm lg:text-base text-gray-400 sm:text-gray-300 group-hover:text-white transition-colors flex items-center justify-center sm:justify-start gap-2"}>
            <span className="font-medium">{provider.provider_name}</span>
            <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-gray-600 sm:bg-gray-500" />
            <span className="text-yellow-500/80 sm:text-yellow-400 font-medium">
              {provider.isFallback ? 'Stream, Rent, or Buy (Blu-ray / 4K)' : typeLabel}
            </span>
          </div>
        </div>

        <div className={compact ? "shrink-0 w-full z-10" : "shrink-0 w-full sm:w-auto mt-4 sm:mt-0 z-10"}>
          <div className={compact ? "w-full px-4 py-3 rounded-xl bg-yellow-500 text-black font-semibold text-xs tracking-wide flex items-center justify-center gap-2 group-hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/25" : "w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl bg-yellow-500 text-black font-semibold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 group-hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/25"}>
            <Play fill="currentColor" size={16} />
            {buttonText}
          </div>
        </div>
      </motion.button>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className={compact ? "text-lg font-bold text-white mb-4 flex items-center gap-2.5 tracking-wide" : "text-xl sm:text-2xl lg:text-3xl font-light sm:font-bold text-gray-200 sm:text-white mb-5 sm:mb-6 flex items-center gap-2.5 sm:gap-3 tracking-wide"}>
        <Play className="text-yellow-500 w-5 h-5 sm:w-6 sm:h-6" />
        Where to Watch
      </h2>




      {isLoading ? (
        <div className="w-full h-28 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center justify-center animate-pulse">
          <Loader className="w-5 h-5 animate-spin text-gray-500" />
        </div>
      ) : (
        <div className="space-y-5 sm:space-y-6">

          {fallbackMessage && selectedRegion && selectedRegion !== userCountry && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-2.5 px-1 py-0.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400/90 shrink-0 mt-1.5" />
              <p className="text-gray-400 text-xs sm:text-[13px] leading-relaxed">
                {fallbackMessage} {heroAmazonProvider?.isFallback && `(Stream, rent, or buy physical editions on Amazon below)`}
              </p>
            </motion.div>
          )}

          {selectedRegionInfo && (
            <div className={compact ? "flex flex-col gap-3 p-3 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-md" : "flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-md"}>
              <div className="flex items-center gap-3.5 sm:gap-4">
                <span className="text-2xl sm:text-3xl drop-shadow-md">{selectedRegionInfo.flag}</span>
                <div className="flex flex-col">
                  <span className="text-gray-200 sm:text-white font-medium text-sm sm:text-base">
                    {selectedRegionInfo.name}
                  </span>
                </div>
              </div>

              {otherRegions.length > 0 && (
                <button
                  onClick={() => setShowOtherRegions(!showOtherRegions)}
                  className="flex items-center justify-center sm:justify-between gap-2 px-4 py-2 sm:py-2 rounded-lg sm:rounded-full bg-white/5 hover:bg-white/10 border border-white/5 transition-all w-full sm:w-auto group cursor-pointer"
                >
                  <span className="text-xs sm:text-[13px] text-gray-300 font-medium">Change Region</span>
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
                <div className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm">
                  <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">
                    {availableRegions.length > 0 ? "Also available in" : "Select Region"}
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
                          className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/10 hover:border-white/25 transition-all text-gray-300 hover:text-white group cursor-pointer"
                        >
                          <span className="text-lg grayscale-[30%] group-hover:grayscale-0">{region.flag}</span>
                          <span className="text-xs sm:text-sm font-medium">{region.name}</span>
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
                  <div className="w-full pb-2">
                    <HeroAmazonCard provider={heroAmazonProvider} type={heroAmazonType} region={selectedRegion} />
                  </div>
                )}

                {/* 🚀 SMART STREAMING TIP (Angle A & B: Free on UK/AU or Netflix Stacking) */}
                {vpnTip && (
                  <div className="w-full">
                    <SmartVpnStreamingCard tip={vpnTip} movieTitle={movie?.Title} />
                  </div>
                )}

                {heroAmazonProvider && hasOtherOptions && !showAllOptions && (
                  <div className="flex justify-center -mt-4">
                    <button
                      onClick={() => setShowAllOptions(true)}
                      className="px-6 py-2.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 transition-colors text-xs sm:text-sm text-gray-200 hover:text-white flex items-center gap-2 cursor-pointer font-medium"
                    >
                      Show other viewing options
                      <ChevronDown size={16} />
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
                        <h3 className="text-xs sm:text-sm lg:text-base font-bold uppercase tracking-[0.2em] text-yellow-400 flex items-center gap-2.5">
                          <div className="w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(234,179,8,0.6)]" />
                          Stream with Subscription
                        </h3>
                        <div className={compact ? "grid grid-cols-3 gap-2.5" : "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4"}>
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
                        <h3 className="text-xs sm:text-sm lg:text-base font-bold uppercase tracking-[0.2em] text-gray-300 flex items-center gap-2.5">
                          <div className="w-2 h-2 rounded-full bg-gray-400" />
                          Rent Digital Copy
                        </h3>
                        <div className={compact ? "grid grid-cols-3 gap-2.5" : "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4"}>
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
                        <h3 className="text-xs sm:text-sm lg:text-base font-bold uppercase tracking-[0.2em] text-gray-300 flex items-center gap-2.5">
                          <div className="w-2 h-2 rounded-full bg-gray-400" />
                          Buy Digital Copy
                        </h3>
                        <div className={compact ? "grid grid-cols-3 gap-2.5" : "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4"}>
                          {filteredBuy.map((provider) => (
                            <StreamingPlatformCard key={`buy-${provider.provider_id}`} provider={provider} type="buy" region={selectedRegion} />
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </>
                )}

                {filteredFlatrate.length === 0 && filteredRent.length === 0 && filteredBuy.length === 0 && (
                  <div className="flex items-center gap-3 p-3.5 rounded-xl border border-white/10 bg-white/[0.02] text-xs text-gray-400">
                    <Info className="w-4 h-4 text-yellow-500/80 shrink-0" />
                    <span>No digital subscription services currently licensed in {selectedRegionInfo?.name || selectedRegion}. Digital and physical editions available on Amazon above.</span>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key={selectedRegion}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                  <MapPin className="w-5 h-5 text-yellow-500/80 shrink-0 mt-0.5" />
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                    <strong>{movie?.Title}</strong> is not currently streaming on digital subscription services in <strong>{selectedRegionInfo?.name || selectedRegion}</strong>. You can find physical Blu-ray, 4K UHD, DVD, or digital rental editions on Amazon below, or use ExpressVPN to access foreign streaming catalogs.
                  </p>
                </div>

                {heroAmazonProvider && (
                  <div className="w-full">
                    <HeroAmazonCard provider={heroAmazonProvider} type={heroAmazonType} region={selectedRegion || userCountry || 'US'} />
                  </div>
                )}

                {vpnTip && (
                  <div className="w-full">
                    <SmartVpnStreamingCard tip={vpnTip} movieTitle={movie?.Title} />
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="text-center pt-5 sm:pt-6 border-t border-white/10">
            <p className="text-xs sm:text-[13px] text-gray-300/80 leading-relaxed max-w-lg mx-auto">
              If you want to support Filmiway, buying through our links earns us a small commission at no extra cost to you.
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
    </motion.div>
  );
});

EnhancedWhereToWatchSection.displayName = 'EnhancedWhereToWatchSection';

export default EnhancedWhereToWatchSection;