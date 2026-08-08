import React, { useState, useRef, useEffect } from 'react';
import { BlurText } from './BlurText';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VIDEO_IDS = ['pZv7me6dFns', 'z9Zt8-PdZ4g', 'SgmuplXU2iY'];

const clamp = (min: number, max: number, val: number) =>
  Math.min(Math.max(val, min), max);

export const AgentSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % VIDEO_IDS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + VIDEO_IDS.length) % VIDEO_IDS.length);
  };

  // Prevent YouTube iframe from blocking Lenis smooth wheel scrolling
  const handleIframeWheel = (e: React.WheelEvent) => {
    const lenis = (window as any).__lenis;
    if (lenis) {
      window.scrollBy({ top: e.deltaY, behavior: 'auto' });
    }
  };

  useEffect(() => {
    // Mobile bypass: static clean view without scroll pinning/scrubbing
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      if (cardRef.current) {
        cardRef.current.style.transform = 'none';
        cardRef.current.style.width = '100%';
        cardRef.current.style.borderRadius = '20px';
      }
      return;
    }

    if (!sectionRef.current || !cardRef.current) return;

    // Desktop: GSAP ScrollTrigger Pinning + Scrubbing effect
    // When section hits top, pin section in place while video card widens from 82% to 100%
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: '+=100%',
      pin: true,
      pinSpacing: true,
      scrub: 0.5,
      onUpdate: (self) => {
        const rawProgress = self.progress;
        // Hold user in place and expand card sideways from 0.0 to 0.75 progress
        const expandProgress = clamp(0, 1, rawProgress / 0.75);

        const scale = 0.86 + (1.04 - 0.86) * expandProgress;
        const width = 82 + (100 - 82) * expandProgress;
        const radius = 28 + (16 - 28) * expandProgress;

        if (cardRef.current) {
          cardRef.current.style.transform = `scale3d(${scale.toFixed(4)}, ${scale.toFixed(4)}, 1)`;
          cardRef.current.style.width = `${width.toFixed(2)}%`;
          cardRef.current.style.borderRadius = `${radius.toFixed(1)}px`;
        }
      },
    });

    return () => {
      trigger.kill();
    };
  }, []);

  const currentVideoId = VIDEO_IDS[currentIndex];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="w-full min-h-screen py-12 md:py-16 bg-[#0a0608] relative select-none z-30 flex flex-col justify-center"
    >
      <div className="w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 z-30 pointer-events-auto">
        <div className="relative z-30 max-w-5xl w-full mx-auto flex flex-col items-center text-center">
          {/* Main Title using ReactBits BlurText Component */}
          <div className="max-w-4xl mb-2">
            <BlurText
              text="Meet Our Best Agents On Benchmark"
              delay={140}
              animateBy="words"
              direction="bottom"
              className="font-instrument text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-white justify-center"
            />
          </div>

          {/* Agent Highlight: Aestra S 2.1 */}
          <div className="mb-4 sm:mb-6">
            <BlurText
              text="Aestra S 2.1"
              delay={130}
              animateBy="words"
              direction="bottom"
              className="font-instrument text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px] leading-none font-normal tracking-wide text-white justify-center italic text-glow"
            />
          </div>

          {/* Video Window that expands sideways when pinned */}
          <div className="w-full flex items-center justify-center max-w-5xl relative">
            {/* Desktop Left Side Quick Arrow */}
            <button
              type="button"
              onClick={handlePrev}
              className="hidden lg:flex absolute -left-20 xl:-left-24 2xl:-left-28 top-1/2 -translate-y-1/2 z-40 p-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white shadow-2xl backdrop-blur-md transition-all duration-200 cursor-pointer active:scale-90 items-center justify-center"
              aria-label="Previous video"
              title="Previous video"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>

            {/* Video Card */}
            <div
              ref={cardRef}
              onWheel={handleIframeWheel}
              className="will-change-transform bg-[#0c090e] border border-white/10 p-2 sm:p-2.5 shadow-2xl relative group cursor-pointer"
              style={{
                width: '82%',
                transform: 'scale3d(0.86, 0.86, 1)',
                borderRadius: '28px',
                transformOrigin: 'center center',
              }}
            >
              {/* Minimal Clean macOS Dots Header */}
              <div className="flex items-center justify-between px-3 py-1.5 mb-1.5 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[11px] text-white/50 font-inter font-medium tracking-wider uppercase">
                  Showcase {currentIndex + 1} of {VIDEO_IDS.length}
                </div>
              </div>

              {/* Video Player (Standard 16:9 YouTube Ratio) */}
              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-black shadow-inner cursor-pointer">
                <iframe
                  key={currentVideoId}
                  src={`https://www.youtube-nocookie.com/embed/${currentVideoId}?autoplay=0&rel=0&modestbranding=1&vq=hd1080&hd=1`}
                  title="YouTube Demonstration Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full object-cover rounded-xl cursor-pointer border-0"
                  loading="eager"
                />
              </div>
            </div>

            {/* Desktop Right Side Quick Arrow */}
            <button
              type="button"
              onClick={handleNext}
              className="hidden lg:flex absolute -right-20 xl:-right-24 2xl:-right-28 top-1/2 -translate-y-1/2 z-40 p-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white shadow-2xl backdrop-blur-md transition-all duration-200 cursor-pointer active:scale-90 items-center justify-center"
              aria-label="Next video"
              title="Next video"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>

          {/* Navigation Toolbar */}
          <div className="mt-5 sm:mt-7 flex items-center justify-center gap-4 w-full z-50">
            <button
              type="button"
              onClick={handlePrev}
              className="p-3 sm:p-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white shadow-xl backdrop-blur-md transition-all duration-200 cursor-pointer active:scale-95 flex items-center justify-center"
              aria-label="Previous video"
              title="Previous video"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 shadow-xl backdrop-blur-md">
              {VIDEO_IDS.map((id, idx) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex
                      ? 'w-7 bg-white shadow-md'
                      : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
                  aria-label={`Go to video ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="p-3 sm:p-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white shadow-xl backdrop-blur-md transition-all duration-200 cursor-pointer active:scale-95 flex items-center justify-center"
              aria-label="Next video"
              title="Next video"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentSection;
