// pages/_app.js - 🔥 SEO + CLARITY (Script Method - Next.js Safe)
import '../styles/globals.css'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  
  // ✅ Initialize Clarity (client-side only)
  useEffect(() => {
    setMounted(true);
    console.log('🎬 Filmiway - SEO Optimized Version Loaded');

    if (typeof window !== "undefined") {
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "u1n9jixukw");
      console.log("🎯 Microsoft Clarity script loaded");
    }
  }, []);
  
  // ✅ Create canonical URL safely
  const getCanonicalUrl = () => {
    if (!mounted) return 'https://filmiway.com';  // Default during SSR
    const cleanPath = router.asPath.split('?')[0].split('#')[0];
    return `https://filmiway.com${cleanPath}`;
  };

  return (
    <>
      <Head>
        {/* 🔥 SEO Meta Tags */} 
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* ✅ Canonical URL */}
        <link rel="canonical" href={getCanonicalUrl()} />
        
        {/* Viewport & Theme */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Open Graph */}
        <meta property="og:url" content={getCanonicalUrl()} />
        <meta property="og:site_name" content="Filmiway" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@filmiway" />
        <meta name="twitter:creator" content="@filmiway" />
        
        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Filmiway",
            "url": "https://filmiway.com",
            "description": "Discover curated collections of mind-bending movies like Inception, Memento, and Shutter Island",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://filmiway.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>

        {/* Fonts, Icons, Manifest */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}
