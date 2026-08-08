import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import MagicRings from './MagicRings';
import { ArrowRight, Mail, CheckCircle2, X } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsModalOpen(false);
    }, 2400);
  };

  return (
    <section
      id="contact"
      className="relative w-full max-w-full overflow-hidden bg-[#0a0608] text-white select-none z-40"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-[700px] h-[400px] bg-gradient-to-b from-sky-500/6 via-indigo-500/6 to-transparent blur-3xl rounded-full pointer-events-none" />

      {/* ── Text content — centered, constrained, shifted up ── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 pt-14 sm:pt-20 md:pt-28 pb-8 text-center flex flex-col items-center">

        {/* ScrollReveal Headline */}
        <div className="max-w-4xl w-full">
          <ScrollReveal
            enableBlur
            baseOpacity={0.08}
            baseRotation={2}
            blurStrength={8}
            wordAnimationEnd="top 35%"
            containerClassName="text-center"
            textClassName="font-instrument text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-white font-normal"
          >
            Experience The Next Generation Of Workplace Intelligence
          </ScrollReveal>
        </div>

        {/* ScrollReveal Subtitle */}
        <div className="max-w-2xl w-full mt-3">
          <ScrollReveal
            enableBlur
            baseOpacity={0.08}
            baseRotation={1}
            blurStrength={6}
            wordAnimationEnd="top 30%"
            containerClassName="text-center"
            textClassName="font-inter text-sm sm:text-base md:text-lg text-white/55 font-normal leading-relaxed"
          >
            Transform meetings, team voice notes, and customer interactions into secure, actionable insights with real-time clarity.
          </ScrollReveal>
        </div>
      </div>

      {/* ── MagicRings — direct child of section (full section width = 100vw) ── */}
      {/* The button sits in a SEPARATE absolute-centered overlay so it's always truly centered */}
      <div className="relative w-full h-[380px] sm:h-[450px] md:h-[480px]">

        {/* Three.js Canvas fills the full width naturally */}
        <div className="absolute inset-0 w-full h-full">
          <MagicRings
            color="#38bdf8"
            colorTwo="#818cf8"
            ringCount={6}
            speed={0.9}
            attenuation={9}
            lineThickness={2.5}
            baseRadius={0.28}
            radiusStep={0.1}
            scaleRate={0.12}
            opacity={1}
            blur={0}
            noiseAmount={0.06}
            rotation={0}
            ringGap={1.5}
            fadeIn={0.7}
            fadeOut={0.5}
            followMouse={true}
            mouseInfluence={0.18}
            hoverScale={1.15}
            parallax={0.06}
            clickBurst={true}
          />
        </div>

        {/* Button — absolutely centered, 3D pop-out style (no glow) */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
          <div className="pointer-events-auto">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="relative inline-flex items-center gap-3 px-10 sm:px-12 py-5 sm:py-6 rounded-full bg-white text-black font-semibold text-base sm:text-lg tracking-wide cursor-pointer select-none transition-all duration-150 active:translate-y-[4px]"
              style={{
                boxShadow: '0 8px 0 0 rgba(0,0,0,0.55), 0 12px 24px rgba(0,0,0,0.35)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 5px 0 0 rgba(0,0,0,0.55), 0 8px 16px rgba(0,0,0,0.3)';
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(3px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 0 0 rgba(0,0,0,0.55), 0 12px 24px rgba(0,0,0,0.35)';
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
              }}
              onMouseDown={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 2px 0 0 rgba(0,0,0,0.55), 0 4px 8px rgba(0,0,0,0.25)';
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(6px)';
              }}
              onMouseUp={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 5px 0 0 rgba(0,0,0,0.55), 0 8px 16px rgba(0,0,0,0.3)';
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(3px)';
              }}
            >
              <Mail className="w-5 h-5 text-black" />
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom padding */}
      <div className="h-2 sm:h-4" />

      {/* Contact Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-lg bg-[#0e090d] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center gap-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 animate-bounce" />
                <h3 className="text-xl font-semibold text-white">Message Sent Successfully</h3>
                <p className="text-sm text-white/70">Our intelligence team will reach out to you within 24 hours.</p>
              </div>
            ) : (
              <div>
                <h3
                  className="text-2xl sm:text-3xl text-white font-normal mb-2"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  Get In Touch With WhisperFlow
                </h3>
                <p className="text-xs sm:text-sm text-white/60 mb-6">
                  Schedule a customized demo or discuss workplace intelligence for your organization.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-1.5">Your Name</label>
                    <input type="text" required placeholder="e.g. Sarah Connor"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-cyan-400 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-1.5">Work Email</label>
                    <input type="email" required placeholder="sarah@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-cyan-400 transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-1.5">Message</label>
                    <textarea rows={3} required placeholder="Tell us about your team and use case..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none" />
                  </div>
                  <button type="submit"
                    className="w-full mt-2 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all cursor-pointer shadow-xl">
                    Send Message
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;
