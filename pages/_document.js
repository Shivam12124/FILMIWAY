import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Impact.com Site Verification */}
        <meta name='impact-site-verification' value='6b59a763-6f50-4bca-a43c-817e01c6a068' />

        {/* Google Site Verification */}
        <meta name="google-site-verification" content="rbc-nkW2usal1o0pyLwW70o8f-fewlFIR6sx19YOJik" />

        {/* 🔥 MEDIAVINE JOURNEY MONETIZATION SCRIPT */}
        <script
          type="text/javascript"
          async
          data-noptimize="1"
          data-cfasync="false"
          src="//scripts.scriptwrapper.com/tags/3f77b114-7d11-4865-b94a-4814cd1f02ef.js"
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
              url: 'https://www.filmiway.com',
              description: 'Filmiway is a parents guide website with skip timestamps. We help families from all over the world by telling them exactly what is in a movie as it is, so they can expect what they are going to see.',
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://www.filmiway.com/search?q={search_term_string}'
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
