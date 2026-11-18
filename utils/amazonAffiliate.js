// utils/amazonAffiliate.js
import { db } from '../lib/firebase';
import { collection, addDoc, doc, setDoc, increment, serverTimestamp } from 'firebase/firestore';

export const AMAZON_STORES = {
  US: { domain: 'amazon.com', tag: 'filmiway-20', videoSupported: true },
  GB: { domain: 'amazon.co.uk', tag: 'filmiway09-21', videoSupported: true },
  CA: { domain: 'amazon.ca', tag: 'filmiway06-20', videoSupported: true },
  AU: { domain: 'amazon.com.au', tag: 'filmiway-20', videoSupported: false },
  IN: { domain: 'amazon.in', tag: 'filmiway-21', videoSupported: false },
  DE: { domain: 'amazon.de', tag: 'filmiway-20', videoSupported: true },
  FR: { domain: 'amazon.fr', tag: 'filmiway-20', videoSupported: false },
  ES: { domain: 'amazon.es', tag: 'filmiway-20', videoSupported: false },
  IT: { domain: 'amazon.it', tag: 'filmiway-20', videoSupported: false },
  JP: { domain: 'amazon.co.jp', tag: 'filmiway-20', videoSupported: false },
};

const TIMEZONE_TO_COUNTRY = {
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

/** Synchronous best-guess country from session cache or browser timezone (zero network delay). */
export function getTimezoneCountrySync() {
  if (typeof window === 'undefined') return 'US';
  try {
    const cached = sessionStorage.getItem('fw_user_country');
    if (cached) return cached;
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz) {
      if (TIMEZONE_TO_COUNTRY[tz]) return TIMEZONE_TO_COUNTRY[tz];
      if (tz.startsWith('America/')) return 'US';
    }
  } catch (e) {}
  return 'US';
}

/** Resolves 2-letter country code with IP fallback and instant timezone safety net. */
export async function detectCountryCode(validCodesSet = null) {
  if (typeof window === 'undefined') return 'US';

  const isValid = (code) => Boolean(code) && (!validCodesSet || validCodesSet.has(code));

  try {
    const cached = sessionStorage.getItem('fw_user_country');
    if (isValid(cached)) return cached;
  } catch (e) {}

  const tzCountry = getTimezoneCountrySync();

  const ipServices = [
    { url: 'https://api.country.is/', key: 'country' },
    { url: 'https://ipwho.is/', key: 'country_code' },
    { url: 'https://ipinfo.io/json', key: 'country' }
  ];

  for (const service of ipServices) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);
      const res = await fetch(service.url, { signal: controller.signal, headers: { Accept: 'application/json' } });
      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        const code = (data[service.key] || '').toUpperCase();
        if (isValid(code)) {
          try { sessionStorage.setItem('fw_user_country', code); } catch (e) {}
          return code;
        }
      }
    } catch (e) {
      continue;
    }
  }

  if (isValid(tzCountry)) {
    try { sessionStorage.setItem('fw_user_country', tzCountry); } catch (e) {}
    return tzCountry;
  }

  return 'US';
}

export function getAmazonStoreInfo(countryCode) {
  const code = (countryCode || 'US').toUpperCase();
  return AMAZON_STORES[code] || AMAZON_STORES.US;
}

export function getPrimeTrialUrl(countryCode) {
  const { domain, tag } = getAmazonStoreInfo(countryCode);
  return `https://www.${domain}/prime?tag=${tag}`;
}

export function getAmazonMovieSearchUrl(title, targetCode) {
  const { domain, tag, videoSupported } = getAmazonStoreInfo(targetCode);
  const normalizedTitle = (title || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
  const videoParam = videoSupported ? '&i=instant-video' : '';
  return `https://www.${domain}/s?k=${encodeURIComponent(normalizedTitle + ' movie')}${videoParam}&tag=${tag}`;
}

/** Non-blocking analytics log for Prime 30-Day Free Trial clicks. */
export function trackPrimeTrialClick({ movieSlug, movieTitle, country, targetUrl, placement = 'prime_trial_card' }) {
  try {
    const now = new Date();
    const todayDateStr = now.toISOString().slice(0, 10);
    const timeStr = now.toTimeString().slice(0, 8);
    const countryCode = (country || 'US').toUpperCase();
    const title = movieTitle || 'Unknown';
    const slug = movieSlug || 'unknown';

    addDoc(collection(db, 'prime_trial_clicks'), {
      promoType: 'prime_video_trial',
      placement,
      movieSlug: slug,
      movieTitle: title,
      country: countryCode,
      deal: 'Amazon Prime 30-Day Free Trial ($0.00)',
      bountyValue: '$3.00',
      targetUrl,
      date: todayDateStr,
      time: timeStr,
      timestamp: serverTimestamp(),
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'Unknown'
    }).catch(() => {});

    const dailySummaryRef = doc(db, 'prime_trial_daily_summary', todayDateStr);
    setDoc(dailySummaryRef, {
      date: todayDateStr,
      totalClicks: increment(1),
      lastClickedMovie: title,
      lastClickedSlug: slug,
      lastClickedCountry: countryCode,
      lastClickedAt: serverTimestamp(),
      [`countries.${countryCode}`]: increment(1)
    }, { merge: true }).catch(() => {});
  } catch (e) {}
}
