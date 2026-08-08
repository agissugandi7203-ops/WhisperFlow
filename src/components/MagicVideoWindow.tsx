import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MonitorPlay } from 'lucide-react';

export const MagicVideoWindow: React.FC = () => {
  return (
    <section
      id="demo"
      className="w-full min-h-screen py-28 md:py-40 bg-[#0a0608] relative overflow-hidden flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 select-none"
    >
      {/* Magical Ambient Aura & Neon Rays */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[700px] md:max-w-[1000px] h-[450px] md:h-[650px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-cyan-500/20 rounded-full blur-[150px] pointer-events-none" />

      {/* Decorative Grid Lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-6xl w-full mx-auto flex flex-col items-center text-center">
        {/* Section Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6 transition-all duration-300 hover:border-white/20">
          <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
          <span className="text-[11px] sm:text-xs font-medium tracking-wider text-white/80 uppercase font-inter">
            Interactive Showcase
          </span>
        </div>

        {/* Section Heading */}
        <h2
          className="font-instrument text-3xl sm:text-5xl md:text-6xl text-white text-glow max-w-3xl leading-[1.1] mb-4"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Watch WhisperFlow In Real-Time Action
        </h2>
        <p className="text-white/60 text-sm sm:text-base max-w-xl font-inter font-light mb-12">
          Experience seamless intelligence, high-fidelity reasoning, and ultra-fluid conversational latency.
        </p>

        {/* Magical Floating Video Window Frame */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-5xl rounded-2xl sm:rounded-3xl bg-[#0f0c11]/85 border border-white/15 p-2 sm:p-3.5 shadow-2xl backdrop-blur-2xl relative group"
          style={{
            boxShadow:
              '0 25px 80px -20px rgba(99, 102, 241, 0.25), 0 0 40px rgba(255, 255, 255, 0.05)',
          }}
        >
          {/* Top Window Chrome Bar */}
          <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 mb-2 border-b border-white/10">
            {/* macOS Dot Window Controls */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-400/40" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-400/40" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-400/40" />
            </div>

            {/* Window Center Title */}
            <div className="flex items-center gap-2 text-white/70 text-xs font-inter font-medium tracking-wide">
              <MonitorPlay className="w-3.5 h-3.5 text-indigo-300" />
              <span>WhisperFlow Architecture & Live Demonstration</span>
            </div>

            {/* Window Right Status */}
            <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-white/50 font-inter">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>Live 1080p</span>
            </div>
          </div>

          {/* Video Container (16:9 Responsive Ratio) */}
          <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-black/90 border border-white/10 shadow-inner">
            <iframe
              src="https://www.youtube-nocookie.com/embed/ZZSROGCVg9M?rel=0&modestbranding=1"
              title="WhisperFlow Demonstration"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full object-cover rounded-xl sm:rounded-2xl"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
