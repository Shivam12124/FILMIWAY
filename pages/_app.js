import Head from 'next/head';
import Script from 'next/script';

export default function App() {
  return (
    <>
      <Head>
        <title>Filmiway — Rebranded to Does It Get Awkward</title>
        <meta name="robots" content="noindex, nofollow, noarchive" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* 🚀 GA4 Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-WSQMYM9R9G"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WSQMYM9R9G');
            gtag('config', 'G-EDS2VZ5HP1');
          `,
        }}
      />

      <div
        style={{
          minHeight: '100vh',
          backgroundColor: '#0a0a0c',
          color: '#f4f4f5',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '60px 24px 40px',
          fontFamily:
            '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          boxSizing: 'border-box',
          textAlign: 'center',
        }}
      >
        {/* Top Minimal Eyebrow */}
        <div style={{ paddingTop: '10px' }}>
          <span
            style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#71717a',
            }}
          >
            Official Notice
          </span>
        </div>

        {/* Main Content (Zero Links - Pure Editorial Typography) */}
        <div style={{ maxWidth: '680px', width: '100%', margin: 'auto 0' }}>
          <div
            style={{
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#a1a1aa',
              marginBottom: '20px',
            }}
          >
            Filmiway.com is officially closed
          </div>

          <h1
            style={{
              fontSize: 'clamp(32px, 5.5vw, 52px)',
              fontWeight: 800,
              letterSpacing: '-0.035em',
              lineHeight: '1.15',
              color: '#ffffff',
              margin: '0 0 24px',
            }}
          >
            We have rebranded to <br />
            <span
              style={{
                color: '#eab308',
                display: 'inline-block',
                marginTop: '4px',
              }}
            >
              Does It Get Awkward
            </span>
          </h1>

          <p
            style={{
              fontSize: 'clamp(15px, 2vw, 17px)',
              fontWeight: 400,
              lineHeight: '1.7',
              color: '#a1a1aa',
              margin: '0 auto 28px',
              maxWidth: '540px',
            }}
          >
            All verified movie guides, scene breakdowns, and database records have permanently transitioned to our new platform.
          </p>

          {/* Sub-tagline: Timestamps to Skip • Parents Guide for Movies */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '12px',
              fontSize: '14px',
              fontWeight: 500,
              color: '#e4e4e7',
              letterSpacing: '0.02em',
              marginBottom: '44px',
            }}
          >
            <span>Timestamps to Skip</span>
            <span style={{ color: '#52525b', fontSize: '10px' }}>•</span>
            <span>Parents Guide for Movies</span>
          </div>

          {/* Pure Text Search Callout (ZERO HTML HYPERLINKS, ZERO BOX OUTLINE) */}
          <div style={{ margin: '0 auto', maxWidth: '440px' }}>
            <div
              style={{
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#71717a',
                marginBottom: '10px',
              }}
            >
              Search on Google
            </div>

            <div
              style={{
                fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                fontSize: 'clamp(22px, 3.5vw, 28px)',
                fontWeight: 700,
                letterSpacing: '-0.01em',
                color: '#facc15',
                userSelect: 'all',
                cursor: 'text',
                padding: '6px 0',
              }}
            >
              doesitgetawkward.com
            </div>

            <div
              style={{
                fontSize: '13px',
                color: '#71717a',
                marginTop: '8px',
                letterSpacing: '0.01em',
              }}
            >
              or type <span style={{ color: '#d4d4d8' }}>doesitgetawkward.com</span> directly in your browser
            </div>
          </div>
        </div>

        {/* Minimal Bottom Legal Note */}
        <div style={{ paddingTop: '20px' }}>
          <p
            style={{
              fontSize: '12px',
              color: '#52525b',
              margin: 0,
              letterSpacing: '0.02em',
            }}
          >
            &copy; 2026 Does It Get Awkward. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
