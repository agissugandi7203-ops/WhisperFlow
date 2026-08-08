import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { VideoHero } from '../components/VideoHero';
import ScrollReveal from '../components/ScrollReveal';
import BorderGlow from '../components/BorderGlow';
import Lanyard from '../components/Lanyard';
import { Mail, CheckCircle2, Copy, Check } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        workEmail: '',
        company: '',
        message: ''
      });
    }, 4500);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('arieffajarmarhas@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="bg-[#0a0608] min-h-screen text-white font-inter selection:bg-white/20 selection:text-white flex flex-col">
      <Navbar />

      {/* Hero Section with Video */}
      <VideoHero videoSrc="/videos/contact-bg-opt.mp4" videoPosition="center 88%">
        <div className="w-full max-w-5xl mx-auto text-center pt-8 sm:pt-12 pb-4">
          <h1
            className="text-white text-[36px] xs:text-[42px] sm:text-5xl md:text-6xl lg:text-[84px] leading-[1] tracking-tight select-none italic font-normal px-2"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
          >
            Connect With WhisperFlow.
          </h1>
          <p className="text-white/75 text-sm sm:text-base md:text-lg mt-4 sm:mt-5 max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-2">
            Meet the founding team, evaluate sovereign speech intelligence, or schedule a customized 1-on-1 architecture walkthrough.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact-form"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('contact-form');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 rounded-full font-mono text-xs font-semibold tracking-wider uppercase theme-cta-btn cursor-pointer"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </VideoHero>

      {/* ── Section: "About The Creator" — Full Dedicated 3D Lanyard Section ── */}
      <section
        id="about-the-creator"
        className="relative w-full py-10 sm:py-14 px-5 sm:px-10 md:px-16 lg:px-24 bg-[#0a0608] border-b border-white/5 overflow-hidden text-center"
      >
        <div className="max-w-6xl mx-auto">
          {/* Elegant Headline Only */}
          <div className="max-w-3xl mx-auto mb-6 sm:mb-8">
            <ScrollReveal
              enableBlur
              baseOpacity={0.06}
              baseRotation={2}
              blurStrength={8}
              wordAnimationEnd="top 35%"
              containerClassName="text-center"
              textClassName="font-instrument text-4xl sm:text-6xl md:text-7xl lg:text-[80px] text-white font-normal italic leading-tight tracking-tight"
            >
              About The Creator
            </ScrollReveal>
          </div>

          {/* Full-Width Centered 3D Lanyard — transparent, free-hanging */}
          <div className="w-full max-w-4xl mx-auto relative">
            <Lanyard
              position={[0, 0, 20]}
              gravity={[0, -40, 0]}
              frontImage="/images/lanyard.jpg"
              backImage="/images/lanyard.jpg"
              imageFit="cover"
              lanyardWidth={1}
            />
          </div>
        </div>
      </section>

      {/* ── Section: IT Fest 2026 Story with Text Reveal ── */}
      <section className="relative w-full py-12 sm:py-18 px-5 sm:px-10 md:px-16 lg:px-24 bg-[#080507] border-b border-white/5 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6 sm:mb-8">
            <ScrollReveal
              enableBlur
              baseOpacity={0.06}
              baseRotation={2}
              blurStrength={8}
              wordAnimationEnd="top 35%"
              containerClassName="text-center"
              textClassName="font-instrument text-4xl sm:text-6xl md:text-7xl lg:text-[76px] text-white font-normal italic leading-[1.08] tracking-tight"
            >
              Beyond Innovation, Towards The Future
            </ScrollReveal>
          </div>

          <div className="max-w-3xl mx-auto space-y-5">
            <ScrollReveal
              enableBlur
              baseOpacity={0.08}
              baseRotation={1}
              blurStrength={6}
              wordAnimationEnd="top 30%"
              containerClassName="text-center"
              textClassName="font-inter text-white/75 text-base sm:text-lg leading-relaxed"
            >
              Website ini dirancang dan dibangun secara khusus sebagai karya inovasi dalam ajang kompetisi Landing Page IT Fest 2026. Mengusung visi 'Beyond Innovation, Towards The Future', WhisperFlow menghadirkan standar baru dalam arsitektur kecerdasan suara akustik berlatensi ultra-rendah sub-30ms, integrasi WebGL 3D physics interaktif, dan estetika web modern tanpa kompromi.
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Main Simple, Clear Contact Section ── */}
      <section id="contact-form" className="relative w-full py-12 sm:py-18 px-5 sm:px-10 md:px-16 lg:px-24 bg-[#0a0608] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <ScrollReveal
              enableBlur
              baseOpacity={0.06}
              baseRotation={2}
              blurStrength={8}
              wordAnimationEnd="top 35%"
              containerClassName="text-center"
              textClassName="font-instrument text-3xl sm:text-5xl md:text-6xl text-white font-normal italic leading-tight tracking-tight"
            >
              Send Us A Message
            </ScrollReveal>
            <p className="text-white/60 text-sm sm:text-base mt-2">
              We typically review and reply to all architecture inquiries within 2-4 business hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* ── Left Column: Clean, Streamlined Contact Form (7 cols) ── */}
            <div className="lg:col-span-7">
              <BorderGlow
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
                className="w-full"
              >
                <div className="p-8 sm:p-10 relative">
                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-14 text-center gap-3">
                      <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
                        <CheckCircle2 className="w-7 h-7 animate-pulse" />
                      </div>
                      <h3
                        className="text-2xl sm:text-3xl text-white font-normal italic mt-2"
                        style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                      >
                        Message Sent Successfully
                      </h3>
                      <p className="text-xs sm:text-sm text-white/70 max-w-sm">
                        Our engineering team has received your note and will reach out to your work email shortly.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Sarah Connor"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-white/40 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="sarah@company.com"
                            value={formData.workEmail}
                            onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                            className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-white/40 transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">
                          Company / Organization
                        </label>
                        <input
                          type="text"
                          placeholder="Acme Intelligence Inc."
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-white/40 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-white/70 mb-2">
                          How Can We Help? *
                        </label>
                        <textarea
                          rows={4}
                          required
                          placeholder="Tell us about your team size, audio latency requirements, or use case..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/15 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-white/40 transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 rounded-full bg-white text-black font-semibold text-xs sm:text-sm uppercase font-mono tracking-wider hover:bg-white/90 transition-all duration-150 cursor-pointer shadow-xl mt-1"
                      >
                        Send Inquiry
                      </button>
                    </form>
                  )}
                </div>
              </BorderGlow>
            </div>

            {/* ── Right Column: Clear Direct Channels (5 cols) ── */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Direct Mailbox Box */}
              <BorderGlow
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
              >
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-white/50 block">
                        Direct Contact
                      </span>
                      <h4 className="text-lg font-medium text-white">Founding Team & Support</h4>
                    </div>
                  </div>
                  <p className="text-white/65 text-xs sm:text-sm mb-5 leading-relaxed">
                    Prefer direct email? Send a message directly to our engineering mailbox for priority response.
                  </p>
                  <div className="flex items-center gap-2">
                    <a
                      href="mailto:arieffajarmarhas@gmail.com"
                      className="flex-1 py-3 px-4 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-purple-300 hover:text-white transition-colors truncate"
                    >
                      arieffajarmarhas@gmail.com
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      aria-label="Copy email address"
                      className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </BorderGlow>

              {/* Quick Summary Card */}
              <BorderGlow
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
              >
                <div className="p-8">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-white/50 block mb-3">
                    Enterprise Standards
                  </span>
                  <div className="space-y-3 text-xs sm:text-sm text-white/80 font-mono">
                    <div className="flex items-center justify-between py-2 border-b border-white/5">
                      <span className="text-white/50">Response Time</span>
                      <span className="text-white font-semibold">Under 4 Hours</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/5">
                      <span className="text-white/50">Trial Evaluation</span>
                      <span className="text-white font-semibold">14 Days Full Access</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-white/5">
                      <span className="text-white/50">Security Policy</span>
                      <span className="text-white font-semibold">Zero-Data Retention</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-white/50">Private VPC</span>
                      <span className="text-white font-semibold">AWS / GCP / Azure</span>
                    </div>
                  </div>
                </div>
              </BorderGlow>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
