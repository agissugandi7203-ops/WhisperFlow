import React, { useRef, useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { VideoHero } from '../components/VideoHero';
import MorphSlider, { MorphSliderItem } from '../components/MorphSlider';
import ScrollReveal from '../components/ScrollReveal';
import BorderGlow from '../components/BorderGlow';
import DepthCarousel, { DepthCarouselItem } from '../components/DepthCarousel';

const MODEL_MORPH_ITEMS: MorphSliderItem[] = [
  {
    image: '/images/model-claude.webp',
    caption: 'Claude Speech Omniverse — Multi-Turn Conversational Reasoning',
    title: 'Claude Speech Omniverse',
    description: 'High-context semantic speech intelligence tuned for multi-speaker deliberation and deep logical extraction.'
  },
  {
    image: '/images/model-aestra.webp',
    caption: 'Aestra 2.1 Sonic — Ultra Low Sub-30ms Acoustic Latency',
    title: 'Aestra 2.1 Sonic',
    description: 'Proprietary streaming acoustic decoder engineered for live voice synthesis and instantaneous dictation.'
  },
  {
    image: '/images/model-pulse.webp',
    caption: 'Pulse Diarize Pro — 32-Speaker Voiceprint Separation',
    title: 'Pulse Diarize Pro',
    description: 'Real-time multi-speaker acoustic separation with zero voice collision, even in noisy meeting environments.'
  },
  {
    image: '/images/model-titan.webp',
    caption: 'Titan Sovereign — Air-Gapped Enterprise Governance',
    title: 'Titan Sovereign',
    description: 'Dedicated VPC-native voice reasoning model with complete SOC2 Type II, zero-retention memory guarantees.'
  }
];

const BENCHMARK_ITEMS: DepthCarouselItem[] = [
  { image: '/images/benchmark-wer.webp', alt: 'Speech Word Error Rate (WER) Benchmark', title: 'WER Accuracy' },
  { image: '/images/benchmark-latency.webp', alt: 'Streaming Audio Latency & TTFT Benchmark', title: 'Sub-30ms Latency' },
  { image: '/images/benchmark-diarize.webp', alt: 'Speaker Diarization Error Rate (DER %) Benchmark', title: 'Diarization Matrix' },
  { image: '/images/benchmark-noise.webp', alt: 'Acoustic Noise SNR Robustness (-10dB to +20dB)', title: 'Noise Robustness' },
  { image: '/images/benchmark-wer.webp', alt: 'Comprehensive Telemetry Evaluation', title: 'Empirical Benchmark' }
];

interface ModelCardSpec {
  badge: string;
  name: string;
  latency: string;
  highlight: string;
  icon: React.ReactNode;
}

// Handcrafted Custom Vector Acoustic Emblems (Clean, minimal, engineering-grade SVG glyphs)
const MODEL_SPECS: ModelCardSpec[] = [
  {
    badge: 'Semantic Reasoning',
    name: 'Claude Omniverse',
    latency: '< 45ms',
    highlight: 'Multi-turn conversational comprehension and deep logical intent extraction.',
    icon: (
      <svg className="w-5 h-5 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 2.5v3m0 13v3M2.5 12h3m13 0h3" />
        <path d="M5.3 5.3l2.1 2.1m9.2 9.2l2.1 2.1M5.3 18.7l2.1-2.1m9.2-9.2l2.1-2.1" opacity="0.5" />
        <circle cx="12" cy="12" r="8.5" strokeDasharray="2 3" opacity="0.35" />
      </svg>
    )
  },
  {
    badge: 'Acoustic Streamer',
    name: 'Aestra 2.1 Sonic',
    latency: '< 28ms',
    highlight: 'Sub-30ms direct audio packet streaming for live dictation and synthesis.',
    icon: (
      <svg className="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h2.5M19.5 12H22" />
        <path d="M6 8.5v7M9.5 4.5v15M14.5 6.5v11M18 9v6" />
        <circle cx="9.5" cy="4.5" r="1" fill="currentColor" />
        <circle cx="14.5" cy="17.5" r="1" fill="currentColor" />
      </svg>
    )
  },
  {
    badge: 'Multi-Speaker Separation',
    name: 'Pulse Diarize Pro',
    latency: '< 35ms',
    highlight: 'Separates up to 32 overlapping voices in complex acoustic environments.',
    icon: (
      <svg className="w-5 h-5 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3.5 6h17M3.5 12h11M3.5 18h15" />
        <circle cx="8" cy="6" r="2" fill="currentColor" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <circle cx="16" cy="18" r="2" fill="currentColor" />
      </svg>
    )
  },
  {
    badge: 'Enterprise Sovereign',
    name: 'Titan LLM Guard',
    latency: '< 40ms',
    highlight: 'On-premise zero retention model with SOC2 Type II compliance guarantees.',
    icon: (
      <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.5l7.5 4.2v5.8c0 4.8-3.2 9.2-7.5 10.5C7.7 21.7 4.5 17.3 4.5 12.5V6.7L12 2.5z" />
        <path d="M9.5 12l2 2 3.5-3.5" />
      </svg>
    )
  }
];

export const ModelsPage: React.FC = () => {
  const showcaseCardRef = useRef<HTMLDivElement | null>(null);

  // Lenis / scroll-driven expansion effect: transforms MorphSlider from scale(0.85) to scale(1.0)
  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      const el = showcaseCardRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress from entering bottom of screen to reaching center
      const start = windowHeight;
      const end = windowHeight * 0.35;
      const progress = Math.min(Math.max((start - rect.top) / (start - end), 0), 1);

      // Smooth expansion curve
      const scale = 0.85 + 0.15 * progress;
      const radius = 36 - 12 * progress;
      const opacity = 0.75 + 0.25 * progress;

      el.style.transform = `scale3d(${scale.toFixed(4)}, ${scale.toFixed(4)}, 1)`;
      el.style.borderRadius = `${radius.toFixed(1)}px`;
      el.style.opacity = opacity.toFixed(3);
    };

    const render = () => {
      handleScroll();
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

  return (
    <div className="bg-[#0a0608] min-h-screen text-white font-inter selection:bg-white/20 selection:text-white flex flex-col">
      <Navbar />

      {/* Hero Section with Video — Lowered 2x Further Down for Optimal Subject Framing */}
      <VideoHero
        videoSrc="/videos/models-bg-opt.mp4"
        videoPosition="center 100%"
        videoTransform="translateY(240px) scale(1.24)"
      >
        <div className="w-full max-w-5xl mx-auto text-center pt-8 sm:pt-12 pb-6">
          <h1
            className="text-white text-[36px] xs:text-[42px] sm:text-5xl md:text-6xl lg:text-[88px] leading-[1] tracking-tight select-none italic font-normal px-2"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
          >
            State-Of-The-Art Speech Models.
          </h1>
          <p className="text-white/75 text-sm sm:text-base md:text-lg mt-5 sm:mt-6 max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-2">
            Engineered with sub-30ms latency, multi-speaker diarization, and custom vocabulary tuning for domain-specific technical conversations.
          </p>
          <div className="mt-7 sm:mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#models-showcase"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('models-showcase');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center px-8 sm:px-11 py-3.5 sm:py-4 rounded-full font-mono text-xs font-semibold tracking-wider uppercase theme-cta-btn cursor-pointer"
            >
              Explore Best Models
            </a>
          </div>
        </div>
      </VideoHero>

      {/* ── Section: "Meet Our Best Models" — Shifted Up with ScrollReveal and Lenis Zoom Expansion ── */}
      <section
        id="models-showcase"
        className="relative w-full -mt-8 sm:-mt-16 md:-mt-24 pt-16 sm:pt-24 pb-28 sm:pb-36 px-5 sm:px-10 md:px-16 lg:px-24 bg-[#0a0608] overflow-hidden"
      >
        {/* Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-gradient-to-b from-purple-500/8 via-sky-500/6 to-transparent blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center">
          <span className="text-xs font-mono font-semibold tracking-[0.25em] uppercase text-white/40 mb-3 block">
            Acoustic Architecture
          </span>

          {/* Reveal Text Headline */}
          <div className="w-full max-w-4xl mx-auto mb-6">
            <ScrollReveal
              enableBlur
              baseOpacity={0.06}
              baseRotation={2}
              blurStrength={8}
              wordAnimationEnd="top 35%"
              containerClassName="text-center"
              textClassName="font-instrument text-4xl sm:text-6xl md:text-7xl lg:text-[84px] text-white font-normal italic leading-tight tracking-tight"
            >
              Meet Our Best Models
            </ScrollReveal>
          </div>

          {/* Reveal Text Subtitle */}
          <div className="w-full max-w-3xl mx-auto mb-14 sm:mb-20">
            <ScrollReveal
              enableBlur
              baseOpacity={0.08}
              baseRotation={1}
              blurStrength={6}
              wordAnimationEnd="top 30%"
              containerClassName="text-center"
              textClassName="font-inter text-white/70 text-base sm:text-xl leading-relaxed"
            >
              From Claude-powered semantic speech reasoning to ultra-low latency streaming decoders, discover the industry-leading models powering WhisperFlow intelligence.
            </ScrollReveal>
          </div>

          {/* ── Interactive WebGL Liquid Morph Slider with Lenis Scroll-Driven Zoom-In Expansion ── */}
          <div
            ref={showcaseCardRef}
            className="w-full overflow-hidden border border-white/10 shadow-2xl relative mb-16 sm:mb-24 will-change-transform transition-transform duration-100 ease-out origin-center"
            style={{
              height: '520px',
              transform: 'scale3d(0.85, 0.85, 1)',
              borderRadius: '36px',
            }}
          >
            <MorphSlider
              items={MODEL_MORPH_ITEMS}
              transition="melt"
              intensity={0.55}
              aberration={0.35}
              drift={0.4}
              autoplay={false}
              overlayColor="#05060a"
              duration={1.1}
              ease="power2.inOut"
              scale={2.4}
              autoplayDelay={4}
              loop
              radius={24}
              showCaptions
              showControls
              showIndicators
            />
          </div>

          {/* ── Model Spec Cards Grid with Uniform React Bits BorderGlow ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {MODEL_SPECS.map((m) => (
              <BorderGlow
                key={m.name}
                edgeSensitivity={30}
                glowColor="40 80 80"
                backgroundColor="#120F17"
                borderRadius={28}
                glowRadius={40}
                glowIntensity={1.0}
                coneSpread={25}
                animated={false}
                colors={['#c084fc', '#f472b6', '#38bdf8']}
                fillOpacity={0.5}
                className="h-full"
              >
                <div className="p-6 sm:p-8 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
                        {m.icon}
                      </div>
                      <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
                        {m.latency}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-white/40 block mb-1">
                      {m.badge}
                    </span>
                    <h3
                      className="text-2xl text-white font-normal italic mb-3"
                      style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                    >
                      {m.name}
                    </h3>
                    <p className="text-white/65 text-xs sm:text-sm leading-relaxed">
                      {m.highlight}
                    </p>
                  </div>
                </div>
              </BorderGlow>
            ))}
          </div>

          {/* ── Empirical Benchmark Validation Section with 3D DepthCarousel ── */}
          <div className="mt-32 sm:mt-44 text-center">
            <span className="text-xs font-mono font-semibold tracking-[0.25em] uppercase text-white/40 mb-3 block">
              Empirical Validation
            </span>
            <h3
              className="text-3xl sm:text-5xl md:text-6xl text-white font-normal italic mb-4"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              Benchmark Performance Matrix
            </h3>
            <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-12 sm:mb-16">
              Rigorous comparative evaluations across conversational Word Error Rate (WER), streaming audio latency, 32-speaker diarization, and noisy telemetry.
            </p>

            {/* DepthCarousel 3D Stage */}
            <div className="w-full relative" style={{ height: '540px' }}>
              <DepthCarousel
                items={BENCHMARK_ITEMS}
                depth={220}
                spread={90}
                tilt={22}
                tiltDirection="right"
                perspective={1400}
                visibleCards={4}
                falloff={0.2}
                blur={6}
                autoplay={false}
                loop
                cardWidth={330}
                cardHeight={440}
                radius={20}
                tint="#05060a"
                duration={700}
                ease="power3.out"
                autoplayDelay={3200}
                showControls
                showIndicators
              />
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-20 sm:mt-28">
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/contact');
                window.dispatchEvent(new PopStateEvent('popstate'));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center px-10 sm:px-14 py-4 sm:py-5 rounded-full font-mono text-xs sm:text-sm font-semibold tracking-wider uppercase theme-cta-btn cursor-pointer shadow-2xl"
            >
              Deploy Dedicated Model Cluster
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ModelsPage;
