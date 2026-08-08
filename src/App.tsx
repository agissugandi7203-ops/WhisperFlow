import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AgentSection } from './components/AgentSection';
import { QuoteSection } from './components/QuoteSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { NotFound } from './pages/NotFound';
import { SolutionsPage } from './pages/SolutionsPage';
import { ModelsPage } from './pages/ModelsPage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';
import { PartnerLogos } from './components/PartnerLogos';

export const MainLandingPage: React.FC = () => {
  return (
    <div className="bg-[#0a0608] min-h-screen text-white font-inter selection:bg-white/20 selection:text-white transition-colors duration-500 w-full max-w-full overflow-x-hidden relative">
      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Main Content Sections with Generous Breathing Room */}
      <main className="flex flex-col w-full max-w-full overflow-x-hidden">
        {/* Section 1: Fullscreen Hero ("Every Conversation. Every Insight.") */}
        <Hero />

        {/* Logo Marquee Loop */}
        <PartnerLogos />

        {/* Generous Spacing between Logo Marquee and Meet Our Models */}
        <div className="w-full h-24 sm:h-36 md:h-44 bg-[#0a0608]" aria-hidden="true" />

        {/* Section 2: Unified Showcase Section (BlurText + Expanded Video Window) */}
        <AgentSection />

        {/* Section 3: Quote Section with Parallax Animations */}
        <QuoteSection />

        {/* Section 4: Core Contact Section with ScrollReveal & Magic Rings Waves */}
        <ContactSection />

        {/* Section 5: Exact Wispr Flow Iconic Footer */}
        <Footer />
      </main>
    </div>
  );
};

type Route = 'home' | 'solutions' | 'models' | 'pricing' | 'contact' | 'notfound';

const getRoute = (): Route => {
  if (typeof window === 'undefined') return 'home';

  const path = window.location.pathname;

  if (path === '/' || path === '' || path === '/index.html' || path === '/product') return 'home';
  if (path === '/solutions') return 'solutions';
  if (path === '/models') return 'models';
  if (path === '/pricing') return 'pricing';
  if (path === '/contact') return 'contact';

  return 'notfound';
};

export const App: React.FC = () => {
  // Global Lenis Smooth Scroll initialized across ALL pages and routes
  useSmoothScroll();

  const [route, setRoute] = useState<Route>(() => getRoute());

  useEffect(() => {
    const handleRouteChange = () => {
      setRoute(getRoute());

      // Reset scroll position on route navigation
      const lenis = (window as any).__lenis;
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
        setTimeout(() => lenis.resize(), 50);
      } else {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return (
    <ThemeProvider>
      {route === 'home'      && <MainLandingPage />}
      {route === 'solutions' && <SolutionsPage />}
      {route === 'models'    && <ModelsPage />}
      {route === 'pricing'   && <PricingPage />}
      {route === 'contact'   && <ContactPage />}
      {route === 'notfound'  && <NotFound />}
    </ThemeProvider>
  );
};

export default App;
