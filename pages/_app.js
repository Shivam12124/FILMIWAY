// pages/_app.js - 🔥 SEO-FIXED VERSION WITH INDEXABLE META TAGS
import '../styles/globals.css'
import { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter();
  
  useEffect(() => {
    // Add any global JavaScript here
    console.log('🎬 Movies Like Inception - SSG Version Loaded');
  }, []);

  return (
    <>
      <Head>
        {/* 🔥 CRITICAL SEO FIX: ROBOTS META TAGS FOR INDEXABILITY */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        
        {/* 🔥 CANONICAL URL FOR EVERY PAGE */}
        <link rel="canonical" href={`https://filmiway.com${router.asPath}`} />
        
        {/* Global Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* 🔥 GLOBAL OPEN GRAPH FOR SOCIAL SHARING */}
        <meta property="og:url" content={`https://filmiway.com${router.asPath}`} />
        <meta property="og:site_name" content="Filmiway" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        
        {/* 🔥 TWITTER CARDS FOR SOCIAL MEDIA */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@filmiway" />
        <meta name="twitter:creator" content="@filmiway" />
        
        {/* 🔥 STRUCTURED DATA FOR WEBSITE */}
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
        
        {/* Preload Important Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
