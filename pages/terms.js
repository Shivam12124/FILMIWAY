import React from "react";
import Head from "next/head";
import Link from "next/link";
import { FileText } from "lucide-react";
import Image from "next/image";


export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service – Filmiway</title>
        <meta name="description" content="Filmiway Terms of Service. Read our terms and conditions for using our movie discovery platform." />
        <link rel="canonical" href="https://filmiway.com/terms" />
      </Head>

      <div className="min-h-screen bg-black text-white font-sans select-none">
       <nav className="fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md border-b border-gray-800">
  <div className="container mx-auto px-6 py-4 flex items-center justify-between">
    <Link href="/" aria-label="Homepage">
  <Image
    src="/filmiway-logo.svg"
    alt="Filmiway Logo"
    width={192}      // approx Tailwind w-40
    height={112}     // approx Tailwind h-28
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
            <FileText className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h1 className="text-5xl font-extralight mb-4 bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">Terms of Service</h1>
            <p className="text-gray-400">Last Updated: October 13, 2025</p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
            <section>
              <h2 className="text-2xl font-semibold text-yellow-400 mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using Filmiway, you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use our service.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-yellow-400 mb-4">2. Description of Service</h2>
              <p>Filmiway is a movie discovery platform that provides curated collections, recommendations, and information about films from around the world using The Movie Database (TMDB) API.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-yellow-400 mb-4">3. User Responsibilities</h2>
              <p>You agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the service only for lawful purposes</li>
                <li>Not attempt to disrupt or interfere with the service</li>
                <li>Not scrape, copy, or redistribute content without permission</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-yellow-400 mb-4">4. Intellectual Property</h2>
              <p>All content on Filmiway, including design, logos, and text, is owned by Filmiway or its licensors. Movie data and images are provided by TMDB and remain their property.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-yellow-400 mb-4">5. Third-Party Content</h2>
              <p>Filmiway displays movie information from The Movie Database (TMDB). We are not responsible for the accuracy or availability of third-party content.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-yellow-400 mb-4">6. Disclaimer of Warranties</h2>
              <p>Filmiway is provided "as is" without warranties of any kind, either express or implied. We do not guarantee uninterrupted or error-free service.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-yellow-400 mb-4">7. Limitation of Liability</h2>
              <p>Filmiway shall not be liable for any indirect, incidental, or consequential damages arising from your use of the service.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-yellow-400 mb-4">8. Changes to Terms</h2>
              <p>We reserve the right to modify these Terms at any time. Continued use of the service constitutes acceptance of updated Terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-yellow-400 mb-4">9. Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with applicable laws.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-yellow-400 mb-4">10. Contact</h2>
              For questions about these Terms, contact us at: <a href="mailto:filmiway9893@gmail.com" className="text-yellow-400 underline">filmiway9893@gmail.com</a>

            
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
