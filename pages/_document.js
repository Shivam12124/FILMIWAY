import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9989540501740548"
          crossorigin="anonymous"
        />

        {/* Global CSS */}
        <style>{`
          body {
            margin: 0;
            padding: 0;
            background-color: #000000;
            color: #ffffff;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            overflow-x: hidden;
          }
          * { 
            box-sizing: border-box; 
          }
          .loading-fallback {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background-color: #000000;
            color: #ca8a04;
          }
        `}</style>

        {/* ✅ SIMPLIFIED: Just site-level schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Filmiway',
              url: 'https://filmiway.com',
              description: 'Filmiway is a parents guide website with skip timestamps. We help families from all over the world by telling them exactly what is in a movie as it is, so they can expect what they are going to see.',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://filmiway.com/search?q={search_term_string}'
                },
                'query-input': 'required name=search_term_string'
              }
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
