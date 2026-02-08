import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { URLShortener } from './components/URLShortener';
import { AdBanner } from './components/AdBanner';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Skip to main content for accessibility */}
      <a
        href="#shortener"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-primary-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:top-4 focus:left-4"
      >
        Skip to main content
      </a>

      <Header />

      <main>
        <Hero />

        {/* Ad Banner - Top */}
        <div className="mx-auto max-w-5xl px-4">
          <AdBanner slot="1234567890" format="horizontal" className="my-6" />
        </div>

        <URLShortener />

        {/* Ad Banner - After Shortener */}
        <div className="mx-auto max-w-5xl px-4">
          <AdBanner slot="2345678901" format="auto" className="my-6" />
        </div>

        <Features />

        <HowItWorks />

        {/* Ad Banner - Middle */}
        <div className="mx-auto max-w-5xl px-4">
          <AdBanner slot="3456789012" format="auto" className="my-6" />
        </div>

        <Testimonials />

        <FAQ />

        {/* Ad Banner - Before CTA */}
        <div className="mx-auto max-w-5xl px-4">
          <AdBanner slot="4567890123" format="auto" className="my-6" />
        </div>

        <CTA />
      </main>

      <Footer />

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
}

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary-600 to-accent-600 text-white shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/40 transition-all hover:-translate-y-1 active:translate-y-0 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
}
