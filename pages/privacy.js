import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Shield } from "lucide-react";
import Image from "next/image";


export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy – Filmiway</title>
        <meta name="description" content="Filmiway Privacy Policy. Learn how we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://filmiway.com/privacy" />
      </Head>

      <div className="min-h-screen bg-black text-white font-sans select-none">
        <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-gray-800">
  <div className="container mx-auto px-6 py-4 flex items-center justify-between">
    <Link href="/" aria-label="Homepage">
  <Image
    src="/filmiway-logo.svg"
    alt="Filmiway Logo"
    width={192}
    height={112}
    className="w-40 h-28 sm:w-48 sm:h-32 object-contain hover:scale-105 transition-transform duration-300"
    draggable={false}
    priority
  />
</Link>

    <Link 
      href="/" 
      className="px-8 py-3 rounded-full bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition shadow-lg"
    >
      Home
    </Link>
  </div>
</nav>


        <main className="max-w-4xl mx-auto px-6 py-32 pt-40">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-5xl font-extralight mb-4 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">Privacy Policy</h1>
            <p className="text-gray-400">Last Updated: October 13, 2025</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-yellow-400 mb-4">1. Information We Collect</h2>
              <p>Filmiway collects minimal personal information to provide and improve our services. This may include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Email address (if you contact us)</li>
                <li>Usage data (pages visited, movies viewed)</li>
                <li>Device information (browser type, IP address)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-yellow-400 mb-4">2. How We Use Your Information</h2>
              <p>We use collected information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and maintain our service</li>
                <li>Improve user experience and personalize content</li>
                <li>Respond to inquiries and support requests</li>
                <li>Analyze site usage and trends</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-yellow-400 mb-4">3. Data from The Movie Database (TMDB)</h2>
              <p>Filmiway uses The Movie Database (TMDB) API to display movie information, posters, and ratings. This data is provided by TMDB and subject to their own privacy policy and terms of use.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-yellow-400 mb-4">4. Cookies and Tracking</h2>
              <p>We may use cookies and similar tracking technologies to enhance your experience. You can control cookies through your browser settings.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-yellow-400 mb-4">5. Third-Party Services</h2>
              <p>We may use third-party services for analytics and hosting. These services may collect information as described in their own privacy policies.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-yellow-400 mb-4">6. Data Security</h2>
              <p>We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-yellow-400 mb-4">7. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal information. Contact us at contact@filmiway.com for any privacy-related requests.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-yellow-400 mb-4">8. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify users of any significant changes by posting the new policy on this page.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-yellow-400 mb-4">9. Contact Us</h2>
              If you have questions about this Privacy Policy, contact us at: <a href="mailto:filmiway9893@gmail.com" className="text-yellow-400 underline">filmiway9893@gmail.com</a>

        
        
         </section>
          </div>
        </main>
      </div>
    </>
  );
}
