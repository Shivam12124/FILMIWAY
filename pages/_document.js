// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preload Critical Resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//m.media-amazon.com" />
        
        {/* Critical CSS - Inline for Performance */}
        <style jsx>{`
          /* Critical CSS for above-the-fold content */
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
        
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Movies Like Inception',
              url: 'https://yoursite.com',
              description: 'Discover mind-bending movies similar to Inception with community reviews and ratings',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://yoursite.com/search?q={search_term_string}'
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
  )
}
