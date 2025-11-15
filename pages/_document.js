import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preload Critical Resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//m.media-amazon.com" />

        {/* Global CSS - moved out of styled-jsx */}
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

        {/* Structured Data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Filmiway',
              url: 'https://filmiway.com',
              description: 'Discover curated movie collections with expert analysis and community reviews',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://filmiway.com/search?q={search_term_string}'
                },
                'query-input': 'required name=search_term_string'
              },
              hasPart: [
                {
                  '@type': 'WebPage',
                  name: 'Movies Like Memento',
                  url: 'https://filmiway.com/collection/movies-like-memento',
                  description: 'Best Movies Like Memento – 10 Best Mind-Bending Memory Loss Thrillers You Must Watch'
                },
                {
                  '@type': 'WebPage',
                  name: 'Movies Like Inception',
                  url: 'https://filmiway.com/collection/movies-like-inception',
                  description: 'Best Movies Like Inception – 10 Best Mind-Bending Thrillers You Must Watch'
                },
                {
                  '@type': 'WebPage',
                  name: 'Movies Like Shutter Island',
                  url: 'https://filmiway.com/collection/movies-like-shutter-island',
                  description: 'Best Movies Like Shutter Island – 10 Best Mind-Bending Psychological Thrillers You Must Watch'
                }
              ]
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
