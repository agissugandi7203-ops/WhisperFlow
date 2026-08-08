import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useSmoothScroll = () => {
  useEffect(() => {
    // Create persistent, responsive Lenis smooth scroll instance
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.8,
      infinite: false,
      autoResize: true,
    });

    (window as any).__lenis = lenis;

    // Connect Lenis to GSAP ticker so ScrollTrigger animations work correctly
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // Notify ScrollTrigger about scroll events from Lenis
    lenis.on('scroll', ScrollTrigger.update);

    // Keep Lenis updated on visibility change
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        lenis.start();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      lenis.off('scroll', ScrollTrigger.update);
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      lenis.destroy();
      delete (window as any).__lenis;
    };
  }, []);
};
