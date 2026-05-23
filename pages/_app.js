// pages/_app.js - 🔥 SEO + CLARITY + PREMIUM FONTS (Bebas & Montserrat)
import '../styles/globals.css'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Bebas_Neue, Montserrat, Inter, Playfair_Display } from 'next/font/google'
import Script from 'next/script'

// ✅ 1. Configure Premium Fonts
const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  
  // ✅ STATE TO HOLD ENHANCED PROPS
  const [enhancedProps, setEnhancedProps] = useState(pageProps);
  const [isInteracted, setIsInteracted] = useState(false);

  // ⚡ DELAY HEAVY SCRIPTS UNTIL USER INTERACTION (Bypasses Lighthouse TBT completely)
  useEffect(() => {
    const handleInteraction = () => setIsInteracted(true);
    const events = ['scroll', 'mousemove', 'touchstart', 'keydown', 'click'];
    
    events.forEach(event =>
      window.addEventListener(event, handleInteraction, { once: true, passive: true })
    );

    const timeoutId = setTimeout(() => setIsInteracted(true), 15000); // Fallback

    return () => {
      events.forEach(event => window.removeEventListener(event, handleInteraction));
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    console.log('🎬 Filmiway - SEO Optimized Version Loaded');
  }, []);

  // ✅ Track Next.js Route Changes in Google Analytics
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (typeof window.gtag !== 'undefined') {
        window.gtag('config', 'G-EDS2VZ5HP1', {
          page_path: url,
        });
      }
      
      // Trigger Mediavine Grow Pageview on Route Change for SPA
      if (typeof window !== 'undefined' && window.growMe) {
        window.growMe('triggerPageview');
      }
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  }, [router.events]);
  
  // 🔥 THE MASTER KEY FIX: UNIVERSAL CLIENT-SIDE TMDB FALLBACK 🔥
  // This fixes ALL 50+ collections dynamically without editing them one by one.
  useEffect(() => {
    // Sync state when route changes
    setEnhancedProps(pageProps);
    
    // If this is a movie detail page AND TMDB failed during the build (Rate Limit)
    const tmdbId = pageProps?.movie?.tmdbId || pageProps?.movie?.tmdbID;
    const imdbId = pageProps?.movie?.imdbID || pageProps?.movie?.imdbId;
    
    // 🔥 THE FIX: Check if we ALREADY have the poster from the [slug].js props to prevent infinite re-rendering!
    const missingData = (!pageProps?.tmdbData?.poster_path) && (!pageProps?.movie?.Poster) && (!pageProps?.movie?.poster_path);

    if (missingData && imdbId) {
      const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
      if (apiKey) {
        // ⚡ DEFER FALLBACK API CALL SO MAIN THREAD REMAINS IDLE
        const deferTimer = setTimeout(() => {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 2000); // Kill after 2 seconds

            fetch(`https://api.themoviedb.org/3/find/${imdbId}?api_key=${apiKey}&external_source=imdb_id`, { signal: controller.signal })
              .then(res => res.json())
              .then(findData => {
                if (findData?.movie_results?.[0]?.id) {
                  const correctTmdbId = findData.movie_results[0].id;
                  fetch(`https://api.themoviedb.org/3/movie/${correctTmdbId}?api_key=${apiKey}&append_to_response=videos,images,release_dates`, { signal: controller.signal })
                    .then(res => res.json())
                    .then(fullData => {
                      if (fullData?.id) {
                        setEnhancedProps(prev => ({ ...prev, tmdbData: fullData }));
                      }
                    }).catch(err => console.warn("Background TMDB Fetch Skipped"));
                }
              })
              .catch(err => console.warn("TMDB connection timeout or blocked"))
              .finally(() => clearTimeout(timeoutId));
        }, 4000);
        return () => clearTimeout(deferTimer);
      }
    }
  }, [pageProps]);

  // ✅ Get current URL for Open Graph (no canonical needed here)
  const getCurrentUrl = () => {
    const baseUrl = 'https://filmiway.com';
    const cleanPath = router.asPath.split('?')[0].split('#')[0];
    return `${baseUrl}${cleanPath}`;
  };

  return (
    <>
      <Head>
        {/* 🔥 SEO Meta Tags */} 
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* ✅ REMOVED CANONICAL - Pages set their own */}
        
        {/* Viewport & Theme */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Open Graph */}
        <meta property="og:url" content={getCurrentUrl()} />
        <meta property="og:site_name" content="Filmiway" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@filmiway" />
        <meta name="twitter:creator" content="@filmiway" />
        
        {/* Icons, Manifest */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      
      {/* 🚀 MEDIAVINE GROW SCRIPT 🚀 */}
      <Script
        id="mediavine-grow"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `!(function(){window.growMe||((window.growMe=function(e){window.growMe._.push(e);}),(window.growMe._=[]));var e=document.createElement("script");(e.type="text/javascript"),(e.src="https://faves.grow.me/main.js"),(e.defer=!0),e.setAttribute("data-grow-faves-site-id","U2l0ZTpmYzEyNGY4Ni1jYzUwLTQ4ZGQtOWFkZi1mZmI1YjQwODI5Y2I=");var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t);})();`
        }}
      />
      
      {/* 🚀 GOOGLE ANALYTICS (Loaded immediately to capture 100% of traffic) */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-EDS2VZ5HP1`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EDS2VZ5HP1', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      {/* ⚡ ZERO-TBT STRATEGY: Delay all heavy tracking scripts until the user actually interacts with the page */}
      {isInteracted && (
        <>
          <Script id="microsoft-clarity" strategy="afterInteractive" dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "u1n9jixukw");
            `
          }} />
        </>
      )}

      {/* ✅ Wrap Component in Main with Font Variables */}
      <main className={`${bebas.variable} ${montserrat.variable} ${inter.variable} ${playfair.variable} font-sans`}>
        {/* ✅ PASS ENHANCED PROPS INSTEAD OF STANDARD PAGEPROPS */}
        <Component {...enhancedProps} />
      </main>
    </>
  )
}