import React, { useState, useRef, useEffect } from 'react';
import { BlurText } from './BlurText';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Default order: Video 1 (pZv7me6dFns), Video 2 (z9Zt8-PdZ4g), Video 3 (SgmuplXU2iY)
const VIDEO_IDS = ['pZv7me6dFns', 'z9Zt8-PdZ4g', 'SgmuplXU2iY'];

const clamp = (min: number, max: number, val: number) =>
  Math.min(Math.max(val, min), max);

const lerp = (start: number, end: number, factor: number) =>
  start + (end - start) * factor;

export const AgentSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const animState = useRef({
    currentScale: 0.86,
    targetScale: 0.86,
    currentWidth: 82,
    targetWidth: 82,
    currentRadius: 28,
    targetRadius: 28,
  });

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
    let animationFrameId: number;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;

      if (totalScrollable <= 0) return;

      // Calculate progress from 0 (when section hits top) to 1 (when pinned section finishes)
      const scrolledPast = -rect.top;
      const rawProgress = clamp(0, 1, scrolledPast / totalScrollable);

      // Scrubber curve: holds user and expands video from 0.0 to 0.75, stays full until 1.0
      const expandProgress = clamp(0, 1, rawProgress / 0.75);

      // Scale from 0.86 to 1.04 (holds user in place while video grows larger)
      animState.current.targetScale = 0.86 + (1.04 - 0.86) * expandProgress;
      // Width from 82% to 100%
      animState.current.targetWidth = 82 + (100 - 82) * expandProgress;
      // Radius from 28px to 16px
      animState.current.targetRadius = 28 + (16 - 28) * expandProgress;
    };

    const render = () => {
      if (window.innerWidth < 768) {
        if (cardRef.current) {
          cardRef.current.style.transform = 'none';
          cardRef.current.style.width = '100%';
          cardRef.current.style.borderRadius = '20px';
        }
        return;
      }

      handleScroll();

      const state = animState.current;
      state.currentScale = lerp(state.currentScale, state.targetScale, 0.1);
      state.currentWidth = lerp(state.currentWidth, state.targetWidth, 0.1);
      state.currentRadius = lerp(state.currentRadius, state.targetRadius, 0.1);

      if (cardRef.current) {
        cardRef.current.style.transform = `scale3d(${state.currentScale.toFixed(4)}, ${state.currentScale.toFixed(4)}, 1)`;
        cardRef.current.style.width = `${state.currentWidth.toFixed(2)}%`;
        cardRef.current.style.borderRadius = `${state.currentRadius.toFixed(1)}px`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    const lenis = (window as any).__lenis;
    if (lenis) {
      lenis.on('scroll', handleScroll);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (lenis) {
        lenis.off('scroll', handleScroll);
      }
    };
  }, []);

  const currentVideoId = VIDEO_IDS[currentIndex];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="w-full h-auto md:h-[160vh] py-12 sm:py-20 md:py-0 bg-[#0a0608] relative select-none z-30"
    >
      {/* Pinned Container on desktop, static clean container on mobile */}
      <div className="relative md:sticky md:top-0 h-auto md:h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 z-30 pointer-events-auto">
        <div className="relative z-30 max-w-5xl w-full mx-auto flex flex-col items-center text-center -mt-2 sm:-mt-4">
          {/* Main Title using ReactBits BlurText Component — Relaxed Smooth Pacing */}
          <div className="max-w-4xl mb-2">
            <BlurText
              text="Meet Our Best Agents On Benchmark"
              delay={140}
              animateBy="words"
              direction="bottom"
              className="font-instrument text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-white justify-center"
            />
          </div>

          {/* Agent Highlight: Aestra S 2.1 in monumental, grand Instrument Serif */}
          <div className="mb-4 sm:mb-6">
            <BlurText
              text="Aestra S 2.1"
              delay={130}
              animateBy="words"
              direction="bottom"
              className="font-instrument text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[88px] leading-none font-normal tracking-wide text-white justify-center italic text-glow"
            />
          </div>

          {/* Big Majestic Video Window (Clean container without internal clipping) */}
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

          {/* Standalone Centered Navigation Toolbar (Never Clipped, 100% Clear & Spacious) */}
          <div className="mt-5 sm:mt-7 flex items-center justify-center gap-4 w-full z-50">
            {/* Previous Button */}
            <button
              type="button"
              onClick={handlePrev}
              className="p-3 sm:p-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white shadow-xl backdrop-blur-md transition-all duration-200 cursor-pointer active:scale-95 flex items-center justify-center"
              aria-label="Previous video"
              title="Previous video"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots indicator */}
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

            {/* Next Button */}
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
