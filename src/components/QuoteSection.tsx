import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SplitText } from './SplitText';

const RAINBOW_IMG = '/images/rainbow.webp';
const CLOUD_IMG = '/images/cloud.webp';

const clamp = (min: number, max: number, value: number) =>
  Math.min(Math.max(value, min), max);

const lerp = (start: number, end: number, factor: number) =>
  start + (end - start) * factor;

const QUOTE_TEXT =
  'WhisperFlow is an AI-powered workplace intelligence platform that transforms conversations into actionable insights. By analyzing meetings, customer interactions, and team communications with transparency and privacy in mind. WhisperFlow helps organizations improve productivity, service quality, and operational performance.';

export const QuoteSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const rainbowRef = useRef<HTMLImageElement | null>(null);
  const leftCloudRef = useRef<HTMLImageElement | null>(null);
  const rightCloudRef = useRef<HTMLImageElement | null>(null);

  const [rainbowLoaded, setRainbowLoaded] = useState(false);
  const [cloudLoaded, setCloudLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const animState = useRef({
    currentRainbowY: 120,
    targetRainbowY: 120,
    currentLeftCloudX: -200,
    targetLeftCloudX: -200,
    currentLeftCloudY: 0,
    targetLeftCloudY: 0,
    currentRightCloudX: 200,
    targetRightCloudX: 200,
    currentRightCloudY: 0,
    targetRightCloudY: 0,
    currentLeftOpacity: 0,
    currentRightOpacity: 0,
  });

  useEffect(() => {
    // On mobile: skip entire parallax loop — no rAF needed
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      if (rainbowRef.current) {
        rainbowRef.current.style.transform = 'none';
      }
      return;
    }

    let animationFrameId: number;
    let lastTime = 0;

    const updateScrollTargets = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const totalDistance = windowHeight + rect.height;
      const currentScroll = windowHeight - rect.top;
      const progress = clamp(0, 1, currentScroll / totalDistance);

      animState.current.targetRainbowY = 130 - progress * 270;

      const isInView = progress >= 0.12 && progress <= 0.92;
      animState.current.targetLeftCloudX = isInView ? 0 : -200;
      animState.current.targetRightCloudX = isInView ? 0 : 200;

      const cloudY = progress * -50;
      animState.current.targetLeftCloudY = cloudY;
      animState.current.targetRightCloudY = cloudY;
    };

    const render = (time: number) => {
      const delta = time - lastTime;
      if (delta < 16) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }
      lastTime = time;

      updateScrollTargets();

      const state = animState.current;

      state.currentRainbowY = lerp(state.currentRainbowY, state.targetRainbowY, 0.08);
      state.currentLeftCloudX = lerp(state.currentLeftCloudX, state.targetLeftCloudX, 0.06);
      state.currentLeftCloudY = lerp(state.currentLeftCloudY, state.targetLeftCloudY, 0.06);
      state.currentRightCloudX = lerp(state.currentRightCloudX, state.targetRightCloudX, 0.06);
      state.currentRightCloudY = lerp(state.currentRightCloudY, state.targetRightCloudY, 0.06);

      const targetLeftOpacity = clamp(0, 1, 1 - Math.abs(state.currentLeftCloudX) / 200);
      const targetRightOpacity = clamp(0, 1, 1 - Math.abs(state.currentRightCloudX) / 200);

      state.currentLeftOpacity = lerp(state.currentLeftOpacity, targetLeftOpacity, 0.08);
      state.currentRightOpacity = lerp(state.currentRightOpacity, targetRightOpacity, 0.08);

      if (rainbowRef.current) {
        rainbowRef.current.style.transform = `translate3d(0, ${state.currentRainbowY.toFixed(1)}px, 0)`;
      }
      if (leftCloudRef.current) {
        leftCloudRef.current.style.transform = `translate3d(${state.currentLeftCloudX.toFixed(1)}px, ${state.currentLeftCloudY.toFixed(1)}px, 0)`;
        leftCloudRef.current.style.opacity = (state.currentLeftOpacity * (cloudLoaded ? 1 : 0)).toFixed(2);
      }
      if (rightCloudRef.current) {
        rightCloudRef.current.style.transform = `translate3d(${state.currentRightCloudX.toFixed(1)}px, ${state.currentRightCloudY.toFixed(1)}px, 0) scaleX(-1)`;
        rightCloudRef.current.style.opacity = (state.currentRightOpacity * (cloudLoaded ? 1 : 0)).toFixed(2);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [cloudLoaded]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full min-h-0 sm:min-h-[120vh] py-20 sm:py-48 md:py-60 overflow-hidden flex items-center justify-center select-none"
      style={{
        background:
          'linear-gradient(180deg, #0a0608 0%, #0a0608 15%, #010A17 32%, #0A4267 48%, #1B567A 60%, #0A4267 76%, #010A17 88%, #0a0608 100%)',
      }}
    >
      {/* Dimmed Rainbow image */}
      <img
        ref={rainbowRef}
        src={RAINBOW_IMG}
        alt="Atmospheric light reflection"
        loading="lazy"
        onLoad={() => setRainbowLoaded(true)}
        className={`hidden sm:block absolute inset-x-0 top-0 w-full h-auto object-cover pointer-events-none z-10 mix-blend-screen transition-opacity duration-700 ${
          rainbowLoaded ? 'opacity-35' : 'opacity-0'
        }`}
        style={{
          willChange: 'transform',
          transform: 'translate3d(0, 130px, 0)',
        }}
      />

      {/* Left Cloud (desktop only) */}
      <img
        ref={leftCloudRef}
        src={CLOUD_IMG}
        alt="Ethereal cloud left"
        loading="lazy"
        onLoad={() => setCloudLoaded(true)}
        className="hidden sm:block absolute left-0 bottom-[10%] w-[500px] md:w-[650px] pointer-events-none z-10 opacity-70"
        style={{
          marginLeft: '-50%',
          willChange: 'transform, opacity',
          opacity: 0,
          transform: 'translate3d(-200px, 0px, 0)',
        }}
      />

      {/* Right Cloud (desktop only) */}
      <img
        ref={rightCloudRef}
        src={CLOUD_IMG}
        alt="Ethereal cloud right"
        loading="lazy"
        className="hidden sm:block absolute right-0 bottom-[15%] w-[500px] md:w-[650px] pointer-events-none z-10 opacity-70"
        style={{
          marginRight: '-75%',
          willChange: 'transform, opacity',
          opacity: 0,
          transform: 'translate3d(200px, 0px, 0) scaleX(-1)',
        }}
      />

      {/* Quote Content: Clean static text on mobile, SplitText animation on desktop */}
      <div className="relative z-20 max-w-5xl px-6 md:px-14 text-center flex flex-col items-center">
        <blockquote
          className="font-instrument text-white text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.36] md:leading-[1.42] text-glow tracking-normal font-normal"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          <span className="text-white/90 mr-1.5 inline">“</span>
          {isMobile ? (
            <span className="text-white inline">{QUOTE_TEXT}</span>
          ) : (
            <SplitText
              text={QUOTE_TEXT}
              delay={12}
              duration={0.42}
              textAlign="center"
              className="font-instrument text-white"
            />
          )}
          <span className="text-white/90 ml-1.5 inline">”</span>
        </blockquote>

        {/* Attribution */}
        <motion.cite
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="not-italic mt-6 sm:mt-8 md:mt-12 text-white/85 text-base md:text-lg tracking-wide font-inter block"
        >
          WhisperFlow Intelligence
        </motion.cite>
      </div>
    </section>
  );
};

export default QuoteSection;
