import React, { useState, useRef } from 'react';

const LOCAL_VIDEO = '/videos/hero-bg-opt.mp4';
const FALLBACK_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260613_180732_a54afbf6-b30d-470e-861f-669871f09f67.mp4';
const POSTER_IMAGE = '/videos/hero-poster.jpg';

export const Hero: React.FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#0a0608]">
      {/* 1. Skeleton Loading Placeholder before video is ready */}
      {!isVideoLoaded && (
        <div className="absolute inset-0 z-0 skeleton-shimmer bg-[#0e0a0d] flex items-center justify-center">
          <img
            src={POSTER_IMAGE}
            alt="Hero Background Preview"
            className="w-full h-full object-cover opacity-40 filter blur-sm"
          />
        </div>
      )}

      {/* 2. Full-Viewport Earth Background Video (100% top to bottom) */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        poster={POSTER_IMAGE}
        onLoadedData={() => setIsVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover select-none pointer-events-none transition-opacity duration-1000 ${
          isVideoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      >
        <source src={LOCAL_VIDEO} type="video/mp4" />
        <source src={FALLBACK_VIDEO} type="video/mp4" />
      </video>

      {/* 3. Dark overlay */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none z-10" />

      {/* 4. Center content (Shifted down gently: -mt-[50px] instead of -120px) */}
      <div className="relative z-20 flex flex-col items-center justify-center px-4 md:px-6 max-w-5xl -mt-[45px] md:-mt-[55px] text-center">
        {/* Heading */}
        <h1
          className="font-instrument text-white text-[40px] sm:text-5xl md:text-7xl lg:text-[102px] leading-[0.95] tracking-tight text-center text-glow select-none"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Every Conversation. Every Insight.
        </h1>

        {/* Subtext */}
        <p className="text-white/75 text-sm md:text-base text-center mt-5 md:mt-7 max-w-xl font-inter leading-relaxed">
          AI-powered workplace intelligence, transforming conversations into actionable insights with clarity and intention.
        </p>

        {/* CTA Button */}
        <div className="mt-7 md:mt-10">
          <a
            href="#services"
            className="inline-flex items-center justify-center px-10 md:px-12 py-4 md:py-4.5 rounded-full font-semibold text-sm md:text-base tracking-wide theme-cta-btn cursor-pointer"
          >
            Start Conversation
          </a>
        </div>
      </div>
    </section>
  );
};
