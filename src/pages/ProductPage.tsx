import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { VideoHero } from '../components/VideoHero';
import ScrollReveal from '../components/ScrollReveal';
import BorderGlow from '../components/BorderGlow';
import {
  Cpu,
  Shield,
  Zap,
  Activity,
  Layers,
  ArrowRight,
  Lock,
  Radio
} from 'lucide-react';

export const ProductPage: React.FC = () => {
  const navigate = (href: string) => {
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="bg-[#0a0608] min-h-screen text-white font-inter selection:bg-white/20 selection:text-white flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <VideoHero videoSrc="/videos/product-bg-opt.mp4" videoPosition="center 75%">
        <div className="w-full max-w-5xl mx-auto text-center pt-10 sm:pt-14 pb-4">
          <h1
            className="text-white text-[36px] xs:text-[42px] sm:text-5xl md:text-6xl lg:text-[84px] leading-[1] tracking-tight select-none italic font-normal px-2"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
          >
            The Speech Engine Built for Speed.
          </h1>
          <p className="text-white/75 text-sm sm:text-base md:text-lg mt-4 sm:mt-5 max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-2">
            Transforming multi-speaker conversations into real-time structured telemetry, sub-30ms voice dictation, and actionable intelligence.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/pricing"
              onClick={(e) => {
                e.preventDefault();
                navigate('/pricing');
              }}
              className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 rounded-full font-mono text-xs font-semibold tracking-wider uppercase theme-cta-btn cursor-pointer"
            >
              Start 14-Day Free Trial
            </a>
            <a
              href="/models"
              onClick={(e) => {
                e.preventDefault();
                navigate('/models');
              }}
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-mono text-xs font-semibold tracking-wider uppercase bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors cursor-pointer"
            >
              Explore Models
            </a>
          </div>
        </div>
      </VideoHero>

      {/* ── Architecture Overview Headline with ScrollReveal ── */}
      <section className="relative w-full py-16 sm:py-24 px-5 sm:px-10 md:px-16 lg:px-24 bg-[#0a0608] border-b border-white/5 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6">
            <ScrollReveal
              enableBlur
              baseOpacity={0.06}
              baseRotation={2}
              blurStrength={8}
              wordAnimationEnd="top 35%"
              containerClassName="text-center"
              textClassName="font-instrument text-4xl sm:text-6xl md:text-7xl text-white font-normal italic leading-tight tracking-tight"
            >
              Unified Acoustic Pipeline
            </ScrollReveal>
          </div>
          <p className="text-white/65 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            From raw audio packet ingress to semantic reasoning, every step in our stack is engineered for deterministic latency and enterprise sovereignty.
          </p>
        </div>

        {/* ── 4 Architecture Pillars ── */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 sm:mt-16">
          <BorderGlow
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor="#120F17"
            borderRadius={24}
            glowRadius={36}
            glowIntensity={1.0}
            coneSpread={25}
            animated={false}
            colors={['#c084fc', '#f472b6', '#38bdf8']}
            fillOpacity={0.5}
          >
            <div className="p-7 flex flex-col h-full">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5">
                <Radio className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-purple-300 mb-2">Stage 01 // Ingress</span>
              <h3 className="text-xl font-medium text-white mb-2" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
                WebSocket PCM Ingestion
              </h3>
              <p className="text-xs sm:text-sm text-white/65 leading-relaxed">
                Stream 16kHz/48kHz linear PCM directly over TLS WebSocket with zero client-side buffering.
              </p>
            </div>
          </BorderGlow>

          <BorderGlow
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor="#120F17"
            borderRadius={24}
            glowRadius={36}
            glowIntensity={1.0}
            coneSpread={25}
            animated={false}
            colors={['#c084fc', '#f472b6', '#38bdf8']}
            fillOpacity={0.5}
          >
            <div className="p-7 flex flex-col h-full">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-5">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-sky-300 mb-2">Stage 02 // Neural</span>
              <h3 className="text-xl font-medium text-white mb-2" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
                Acoustic Tokenization
              </h3>
              <p className="text-xs sm:text-sm text-white/65 leading-relaxed">
                Aestra 2.1 transformer engine decodes phonemes in sub-30ms frames with continuous speaker embeddings.
              </p>
            </div>
          </BorderGlow>

          <BorderGlow
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor="#120F17"
            borderRadius={24}
            glowRadius={36}
            glowIntensity={1.0}
            coneSpread={25}
            animated={false}
            colors={['#c084fc', '#f472b6', '#38bdf8']}
            fillOpacity={0.5}
          >
            <div className="p-7 flex flex-col h-full">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-5">
                <Layers className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300 mb-2">Stage 03 // Reasoning</span>
              <h3 className="text-xl font-medium text-white mb-2" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
                Semantic Structuring
              </h3>
              <p className="text-xs sm:text-sm text-white/65 leading-relaxed">
                Extract action items, decision registries, consensus votes, and structured meeting artifacts in real time.
              </p>
            </div>
          </BorderGlow>

          <BorderGlow
            edgeSensitivity={30}
            glowColor="40 80 80"
            backgroundColor="#120F17"
            borderRadius={24}
            glowRadius={36}
            glowIntensity={1.0}
            coneSpread={25}
            animated={false}
            colors={['#c084fc', '#f472b6', '#38bdf8']}
            fillOpacity={0.5}
          >
            <div className="p-7 flex flex-col h-full">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-300 mb-2">Stage 04 // Sovereign</span>
              <h3 className="text-xl font-medium text-white mb-2" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
                Zero-Retention Vault
              </h3>
              <p className="text-xs sm:text-sm text-white/65 leading-relaxed">
                Raw audio buffers are securely purged from GPU memory immediately upon completion of token streaming.
              </p>
            </div>
          </BorderGlow>
        </div>
      </section>

      {/* ── Feature Comparison & Live Telemetry Spec ── */}
      <section className="relative w-full py-16 sm:py-24 px-5 sm:px-10 md:px-16 lg:px-24 bg-[#080507] border-b border-white/5 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-mono font-semibold tracking-[0.25em] uppercase text-white/40 mb-3 block">
              Core Capabilities
            </span>
            <ScrollReveal
              enableBlur
              baseOpacity={0.06}
              baseRotation={2}
              blurStrength={8}
              wordAnimationEnd="top 35%"
              containerClassName="text-center"
              textClassName="font-instrument text-3xl sm:text-5xl md:text-6xl text-white font-normal italic leading-tight tracking-tight"
            >
              Engineered For Demanding Workflows
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-5">
                  <Zap className="w-5 h-5 text-purple-400" />
                </div>
                <h4 className="text-xl text-white font-normal italic mb-3" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
                  Sub-30ms Direct Dictation
                </h4>
                <p className="text-xs sm:text-sm text-white/65 leading-relaxed mb-6">
                  Words appear on screen before the speaker finishes their cadence. Engineered for live executive transcription, medical dictation, and legal depositions.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 font-mono text-xs text-white/80 space-y-2">
                <div className="flex justify-between"><span>Time to First Token</span><span className="text-purple-300 font-semibold">&lt; 28ms</span></div>
                <div className="flex justify-between"><span>Frame Window</span><span className="text-white">10ms Chunk</span></div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-5">
                  <Activity className="w-5 h-5 text-sky-400" />
                </div>
                <h4 className="text-xl text-white font-normal italic mb-3" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
                  32-Speaker Diarization
                </h4>
                <p className="text-xs sm:text-sm text-white/65 leading-relaxed mb-6">
                  Disentangle overlapping chatter, cross-talk, and boardroom debate with continuous biometric voiceprint clustering.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 font-mono text-xs text-white/80 space-y-2">
                <div className="flex justify-between"><span>DER Error Rate</span><span className="text-sky-300 font-semibold">2.8%</span></div>
                <div className="flex justify-between"><span>Max Concurrent</span><span className="text-white">32 Voices</span></div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-5">
                  <Lock className="w-5 h-5 text-amber-400" />
                </div>
                <h4 className="text-xl text-white font-normal italic mb-3" style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}>
                  Air-Gapped Sovereign VPC
                </h4>
                <p className="text-xs sm:text-sm text-white/65 leading-relaxed mb-6">
                  Deploy containerized WhisperFlow inference pods on your own AWS, GCP, or on-premise NVIDIA DGX clusters without third-party network egress.
                </p>
              </div>
              <div className="pt-4 border-t border-white/5 font-mono text-xs text-white/80 space-y-2">
                <div className="flex justify-between"><span>Compliance</span><span className="text-amber-300 font-semibold">SOC2 + HIPAA</span></div>
                <div className="flex justify-between"><span>Data Egress</span><span className="text-white">0 KB</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ready to Build CTA ── */}
      <section className="relative w-full py-16 sm:py-20 px-5 sm:px-10 bg-[#0a0608] text-center overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl sm:text-5xl text-white font-normal italic mb-4"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
          >
            Ready to integrate sovereign speech intelligence?
          </h2>
          <p className="text-white/65 text-sm sm:text-base mb-8 max-w-xl mx-auto">
            Get instant API credentials with 14-day free access, or schedule an architectural consultation for dedicated VPC deployment.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="/pricing"
              onClick={(e) => {
                e.preventDefault();
                navigate('/pricing');
              }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-mono text-xs font-semibold tracking-wider uppercase theme-cta-btn cursor-pointer"
            >
              <span>View Pricing Plans</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                navigate('/contact');
              }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-mono text-xs font-semibold tracking-wider uppercase bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-colors cursor-pointer"
            >
              <span>Contact Architecture Team</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductPage;
