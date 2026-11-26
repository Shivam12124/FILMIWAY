import Head from 'next/head';
import Script from 'next/script';

export default function App() {
  return (
    <>
      <Head>
        <title>Filmiway</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {/* 🚀 GOOGLE ANALYTICS (To monitor visitor drop in real-time) */}
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
          backgroundColor: '#000000',
          color: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          textAlign: 'center',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
      >
        <h1
          style={{
            fontSize: '28px',
            fontWeight: '700',
            letterSpacing: '5px',
            marginBottom: '12px',
          }}
        >
          FILMIWAY
        </h1>
        <p style={{ color: '#888888', fontSize: '16px', margin: 0 }}>
          filmiway.com is officially closed.
        </p>
      </div>
    </>
  );
}
