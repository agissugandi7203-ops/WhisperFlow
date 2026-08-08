import React, { useState } from 'react';

// ─── Modal types ────────────────────────────────────────────────────────────
type ModalKey =
  | 'features'
  | 'pricing'
  | 'security'
  | 'demo'
  | 'blog'
  | 'usecases'
  | 'help'
  | 'changelog'
  | 'about'
  | 'careers'
  | 'press'
  | 'contact'
  | 'terms'
  | 'privacy'
  | 'data'
  | null;

// ─── Modal content definitions ───────────────────────────────────────────────
const MODAL_CONTENT: Record<
  Exclude<ModalKey, null>,
  { title: string; body: React.ReactNode }
> = {
  features: {
    title: 'Product Features',
    body: (
      <div className="flex flex-col gap-4" style={{ color: '#b0b0b0', fontSize: '14px', lineHeight: '1.8' }}>
        <h4 style={{ color: '#e0e0e0', fontSize: '15px', fontWeight: 600 }}>Real-Time Conversation Intelligence</h4>
        <p>WhisperFlow transcribes meeting audio instantly with zero latency, identifying key action items, decisions, and owner attributions across teams.</p>
        <h4 style={{ color: '#e0e0e0', fontSize: '15px', fontWeight: 600 }}>Multi-Model Benchmark Routing</h4>
        <p>Dynamic routing automatically picks the most specialized model (Aestra S 2.1, Claude 3.5, GPT-4o) depending on conversation complexity and technical depth.</p>
        <h4 style={{ color: '#e0e0e0', fontSize: '15px', fontWeight: 600 }}>Enterprise Privacy Engine</h4>
        <p>Zero-retention architecture ensures confidential conversations never leave your compliant infrastructure. SOC2 Type II and HIPAA ready.</p>
      </div>
    ),
  },
  pricing: {
    title: 'Pricing & Plans',
    body: (
      <div className="flex flex-col gap-4" style={{ color: '#b0b0b0', fontSize: '14px', lineHeight: '1.8' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', padding: '16px', borderRadius: '12px' }}>
            <h5 style={{ color: '#fff', fontSize: '16px', fontWeight: 700 }}>Pro Plan</h5>
            <p className="text-2xl font-bold text-white my-2">$29 <span className="text-xs text-white/50 font-normal">/ seat / mo</span></p>
            <p className="text-xs text-white/60">Unlimited meeting transcription, automated summaries, and Slack/Jira sync.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', padding: '16px', borderRadius: '12px' }}>
            <h5 style={{ color: '#fff', fontSize: '16px', fontWeight: 700 }}>Enterprise</h5>
            <p className="text-2xl font-bold text-white my-2">Custom</p>
            <p className="text-xs text-white/60">Dedicated VPC deployment, custom LLM fine-tuning, 99.99% SLA, and SSO.</p>
          </div>
        </div>
      </div>
    ),
  },
  security: {
    title: 'Security & Compliance',
    body: (
      <div className="flex flex-col gap-4" style={{ color: '#b0b0b0', fontSize: '14px', lineHeight: '1.8' }}>
        <h4 style={{ color: '#e0e0e0', fontSize: '15px', fontWeight: 600 }}>Zero Data Retention (ZDR)</h4>
        <p>Your audio and transcripts belong exclusively to your organization. Data is processed in ephemeral memory and scrubbed immediately.</p>
        <h4 style={{ color: '#e0e0e0', fontSize: '15px', fontWeight: 600 }}>Certifications & Standards</h4>
        <p>SOC 2 Type II Certified, ISO 27001, GDPR, and HIPAA compliant. End-to-end encryption in transit (TLS 1.3) and at rest (AES-256).</p>
      </div>
    ),
  },
  demo: {
    title: 'Request a Demo',
    body: (
      <div className="flex flex-col gap-4" style={{ color: '#b0b0b0', fontSize: '14px', lineHeight: '1.8' }}>
        <p>Experience how WhisperFlow accelerates team productivity. Get a tailored 1-on-1 walkthrough with our technical architects.</p>
        <a
          href="mailto:arieffajarmarhas@gmail.com?subject=WhisperFlow%20Demo%20Request"
          className="inline-flex items-center justify-center py-3 px-6 rounded-xl bg-white text-black font-semibold text-sm hover:bg-white/90 transition-all text-center"
        >
          Book 1-on-1 Demo via Email
        </a>
      </div>
    ),
  },
  blog: {
    title: 'WhisperFlow Blog & Insights',
    body: (
      <div className="flex flex-col gap-4" style={{ color: '#b0b0b0', fontSize: '14px', lineHeight: '1.8' }}>
        <article className="border-b border-white/10 pb-3">
          <span className="text-xs text-cyan-400 font-mono">Benchmark Release</span>
          <h5 className="text-white font-semibold text-base mt-1">Aestra S 2.1: Breaking New Ground in Speech Intelligence</h5>
          <p className="text-xs text-white/50 mt-1">Exploring how our sub-30ms latency architecture outperforms traditional Whisper models.</p>
        </article>
        <article>
          <span className="text-xs text-indigo-400 font-mono">Engineering</span>
          <h5 className="text-white font-semibold text-base mt-1">Zero-Trust Audio Processing in High-Security Environments</h5>
          <p className="text-xs text-white/50 mt-1">How financial & healthcare engineering teams implement live meeting AI safely.</p>
        </article>
      </div>
    ),
  },
  usecases: {
    title: 'Use Cases & Workflows',
    body: (
      <div className="flex flex-col gap-4" style={{ color: '#b0b0b0', fontSize: '14px', lineHeight: '1.8' }}>
        <div>
          <h5 className="text-white font-semibold">Product & Engineering</h5>
          <p className="text-xs text-white/60">Turn customer feedback calls into auto-populated Jira tickets and specs.</p>
        </div>
        <div>
          <h5 className="text-white font-semibold">Executive & Operations</h5>
          <p className="text-xs text-white/60">Synthesize multi-hour board meetings into concise decision matrices.</p>
        </div>
      </div>
    ),
  },
  help: {
    title: 'Help Center & Documentation',
    body: (
      <div className="flex flex-col gap-4" style={{ color: '#b0b0b0', fontSize: '14px', lineHeight: '1.8' }}>
        <p>Need support or integrating WhisperFlow into your ecosystem?</p>
        <ul className="list-disc list-inside text-xs text-white/70 flex flex-col gap-2">
          <li>API Quickstart & SDKs (Python, Node.js, Go)</li>
          <li>Zapier, Slack, and Zoom App Integration Guides</li>
          <li>Troubleshooting audio input and microphone permissions</li>
        </ul>
      </div>
    ),
  },
  changelog: {
    title: 'Product Changelog',
    body: (
      <div className="flex flex-col gap-4" style={{ color: '#b0b0b0', fontSize: '14px', lineHeight: '1.8' }}>
        <div>
          <span className="text-xs text-emerald-400 font-mono">v2.4.0 — Jan 2026</span>
          <p className="text-white text-sm font-medium">Added Aestra S 2.1 Real-Time Waveform Integration</p>
        </div>
        <div>
          <span className="text-xs text-white/40 font-mono">v2.3.1 — Dec 2025</span>
          <p className="text-white text-sm font-medium">Enhanced Speaker Diarization Accuracy to 99.2%</p>
        </div>
      </div>
    ),
  },
  about: {
    title: 'About WhisperFlow',
    body: (
      <div className="flex flex-col gap-4" style={{ color: '#b0b0b0', fontSize: '14px', lineHeight: '1.8' }}>
        <p>WhisperFlow is founded by AI researchers and system engineers dedicated to unlocking human conversational intelligence without sacrificing privacy.</p>
      </div>
    ),
  },
  careers: {
    title: 'Careers at WhisperFlow',
    body: (
      <div className="flex flex-col gap-4" style={{ color: '#b0b0b0', fontSize: '14px', lineHeight: '1.8' }}>
        <p>We are building the future of workplace intelligence. Open roles:</p>
        <div className="flex flex-col gap-2">
          <div className="p-3 bg-white/5 rounded-lg border border-white/10 flex justify-between items-center">
            <span className="text-white text-sm font-medium">Senior ML Engineer — Audio/Speech</span>
            <span className="text-xs text-cyan-400">Remote</span>
          </div>
          <div className="p-3 bg-white/5 rounded-lg border border-white/10 flex justify-between items-center">
            <span className="text-white text-sm font-medium">Full Stack Systems Architect</span>
            <span className="text-xs text-cyan-400">San Francisco / Remote</span>
          </div>
        </div>
      </div>
    ),
  },
  press: {
    title: 'Press & Media Kit',
    body: (
      <div className="flex flex-col gap-4" style={{ color: '#b0b0b0', fontSize: '14px', lineHeight: '1.8' }}>
        <p>Download official WhisperFlow brand assets, high-resolution logos, product screenshots, and executive headshots.</p>
        <a href="/assets/logos/logo-white-full.png" download className="text-xs text-cyan-400 underline">Download Official Logo Pack (.PNG)</a>
      </div>
    ),
  },
  terms: {
    title: 'Terms of Service',
    body: (
      <div className="flex flex-col gap-5" style={{ color: '#b0b0b0', fontSize: '14px', lineHeight: '1.8' }}>
        <p style={{ color: '#777' }}>Last updated: January 1, 2026</p>
        <h4 style={{ color: '#e0e0e0', fontSize: '15px', fontWeight: 600 }}>1. Acceptance of Terms</h4>
        <p>By accessing or using WhisperFlow ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.</p>
        <h4 style={{ color: '#e0e0e0', fontSize: '15px', fontWeight: 600 }}>2. Description of Service</h4>
        <p>WhisperFlow provides AI-powered workplace intelligence tools that transform audio conversations into actionable insights.</p>
      </div>
    ),
  },
  privacy: {
    title: 'Privacy Policy',
    body: (
      <div className="flex flex-col gap-5" style={{ color: '#b0b0b0', fontSize: '14px', lineHeight: '1.8' }}>
        <p style={{ color: '#777' }}>Last updated: January 1, 2026</p>
        <h4 style={{ color: '#e0e0e0', fontSize: '15px', fontWeight: 600 }}>1. Information We Collect</h4>
        <p>We collect information you provide directly to us, such as account registration details, audio recordings submitted for transcription, and usage data generated when you interact with the Service.</p>
      </div>
    ),
  },
  data: {
    title: 'Data Controls',
    body: (
      <div className="flex flex-col gap-5" style={{ color: '#b0b0b0', fontSize: '14px', lineHeight: '1.8' }}>
        <p style={{ color: '#777' }}>Manage how WhisperFlow stores and processes your data.</p>
        <h4 style={{ color: '#e0e0e0', fontSize: '15px', fontWeight: 600 }}>Audio Retention</h4>
        <p>By default, raw audio files are deleted immediately after transcription is complete.</p>
      </div>
    ),
  },
  contact: {
    title: 'Contact Us',
    body: (
      <div className="flex flex-col gap-6" style={{ color: '#b0b0b0', fontSize: '14px', lineHeight: '1.8' }}>
        <p>Have a question, feedback, or need support? Send us an email and we'll get back to you within 1–2 business days.</p>
        <div
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '12px',
            padding: '20px 24px',
          }}
          className="flex flex-col gap-3"
        >
          <span style={{ color: '#777', fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'monospace' }}>Email</span>
          <span style={{ color: '#e0e0e0', fontSize: '16px', fontWeight: 500 }}>arieffajarmarhas@gmail.com</span>
        </div>
        <a
          href="mailto:arieffajarmarhas@gmail.com"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            background: 'rgba(255,255,255,0.92)',
            color: '#0a0a0a',
            fontWeight: 600,
            fontSize: '14px',
            borderRadius: '10px',
            padding: '12px 28px',
            textDecoration: 'none',
            transition: 'background 0.2s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#ffffff')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.92)')}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M2 7l10 7 10-7" />
          </svg>
          Send Email
        </a>
      </div>
    ),
  },
};

// ─── Reusable Modal component with z-[99999] ──────────────────────────────────
const Modal: React.FC<{ modalKey: Exclude<ModalKey, null>; onClose: () => void }> = ({ modalKey, onClose }) => {
  const { title, body } = MODAL_CONTENT[modalKey];

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-8"
      style={{ backdropFilter: 'blur(24px) saturate(150%)', WebkitBackdropFilter: 'blur(24px) saturate(150%)', background: 'rgba(0,0,0,0.80)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl flex flex-col"
        style={{
          background: '#0f0b0e',
          border: '1px solid rgba(255,255,255,0.12)',
          maxHeight: '80vh',
          boxShadow: '0 24px 80px rgba(0,0,0,0.85)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex items-center justify-between px-7 py-5 flex-shrink-0"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
        >
          <h2 style={{ color: '#f0f0f0', fontSize: '18px', fontWeight: 700, letterSpacing: '-0.01em' }}>{title}</h2>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.10)',
              borderRadius: '8px',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#888',
              transition: 'background 0.15s ease, color 0.15s ease',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
              e.currentTarget.style.color = '#888';
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto px-7 py-6" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(255,255,255,0.1) transparent' }}>
          {body}
        </div>
      </div>
    </div>
  );
};

// ─── Footer ──────────────────────────────────────────────────────────────────
export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ModalKey>(null);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openModal = (key: Exclude<ModalKey, null>) => setActiveModal(key);
  const closeModal = () => setActiveModal(null);

  const linkButtonStyle: React.CSSProperties = {
    color: '#8A8A8A',
    fontSize: '16.5px',
    fontWeight: 500,
    transition: 'color 0.2s ease',
    textDecoration: 'none',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    padding: 0,
    fontFamily: 'inherit',
    textAlign: 'left',
    display: 'block',
    lineHeight: 1,
  };

  return (
    <>
      {activeModal && <Modal modalKey={activeModal} onClose={closeModal} />}

      <footer className="w-full bg-[#080607] text-white select-none relative z-20">
        <div
          aria-hidden="true"
          style={{
            marginTop: '-1px',
            lineHeight: 0,
            overflow: 'hidden',
            width: '100%',
          }}
        >
          <svg
            viewBox="0 0 1440 72"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ display: 'block', width: '100%', height: '72px' }}
          >
            <path
              d="M0,0 C360,72 1080,72 1440,0 L1440,72 L0,72 Z"
              fill="#080607"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-28">

          {/* ── Top: Brand + 3 Columns ── */}
          <div className="pt-6 sm:pt-10 pb-10 sm:pb-14 w-full flex flex-col sm:flex-row items-start justify-between gap-8 sm:gap-10">
            {/* Brand column */}
            <div className="flex flex-col gap-4 max-w-xs">
              <a
                href="/"
                onClick={handleLogoClick}
                className="flex items-center gap-3 group select-none cursor-pointer w-fit"
                aria-label="WhisperFlow Home"
              >
                <img
                  src="/assets/logos/logo-white-icon.png"
                  alt="WhisperFlow"
                  className="w-10 h-10 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-200"
                />
                <span
                  className="text-2xl sm:text-3xl tracking-tight text-white/90 group-hover:text-white transition-colors duration-200 italic font-normal"
                  style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                >
                  WhisperFlow
                </span>
              </a>
              <p style={{ color: '#888888', fontSize: '15px', lineHeight: '1.7' }}>
                AI-powered workplace intelligence, transforming conversations into actionable insights.
              </p>
            </div>

            {/* Product column */}
            <div className="flex flex-col gap-4">
              <h3 style={{ color: '#C0C0C0', fontSize: '16px', letterSpacing: '0.15em', fontWeight: 700 }} className="uppercase font-mono mb-2">
                Product
              </h3>
              <ul className="flex flex-col gap-3.5">
                {[
                  { name: 'Features', key: 'features' as const },
                  { name: 'Pricing', key: 'pricing' as const },
                  { name: 'Security', key: 'security' as const },
                  { name: 'Request Demo', key: 'demo' as const },
                ].map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => openModal(item.key)}
                      style={linkButtonStyle}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#8A8A8A')}
                      className="py-1"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources column */}
            <div className="flex flex-col gap-4">
              <h3 style={{ color: '#C0C0C0', fontSize: '16px', letterSpacing: '0.15em', fontWeight: 700 }} className="uppercase font-mono mb-2">
                Resources
              </h3>
              <ul className="flex flex-col gap-3.5">
                {[
                  { name: 'Blog', key: 'blog' as const },
                  { name: 'Use Cases', key: 'usecases' as const },
                  { name: 'Help Center', key: 'help' as const },
                  { name: 'Changelog', key: 'changelog' as const },
                ].map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => openModal(item.key)}
                      style={linkButtonStyle}
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#8A8A8A')}
                      className="py-1"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company column */}
            <div className="flex flex-col gap-4 text-left items-start">
              <h3 style={{ color: '#C0C0C0', fontSize: '16px', letterSpacing: '0.15em', fontWeight: 700 }} className="uppercase font-mono mb-2">
                Company
              </h3>
              <ul className="flex flex-col gap-3.5 items-start">
                {[
                  { name: 'About', key: 'about' as const },
                  { name: 'Careers', key: 'careers' as const },
                  { name: 'Press', key: 'press' as const },
                  { name: 'Contact', key: 'contact' as const },
                ].map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => openModal(item.key)}
                      style={linkButtonStyle}
                      className="py-1"
                      onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = '#8A8A8A')}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Brand Signature Mark: WhisperFlow wordmark (Centered) ── */}
          <div className="pb-8 sm:pb-12 w-full overflow-hidden flex items-center justify-center text-center">
            <span
              className="font-black select-none leading-none tracking-[-0.04em] text-center"
              style={{
                fontSize: 'clamp(52px, 12vw, 172px)',
                color: 'rgba(255,255,255,0.09)',
                fontFamily: "system-ui, -apple-system, 'Inter', sans-serif",
              }}
            >
              WhisperFlow
            </span>
          </div>

          {/* ── Bottom bar ── */}
          <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-5">

            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-5 sm:gap-6">
              <span style={{ color: '#555555', fontSize: '13px' }}>© WhisperFlow 2026</span>

              {(
                [
                  { label: 'Terms', key: 'terms' as const },
                  { label: 'Privacy Policy', key: 'privacy' as const },
                  { label: 'Data Controls', key: 'data' as const },
                ] as const
              ).map(({ label, key }) => (
                <button
                  key={key}
                  onClick={() => openModal(key)}
                  style={{
                    color: '#555555',
                    fontSize: '13px',
                    transition: 'color 0.2s',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#999999')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#555555')}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-5">
              {[
                {
                  label: 'X',
                  href: 'https://x.com',
                  path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
                  size: 15,
                },
                {
                  label: 'LinkedIn',
                  href: 'https://linkedin.com',
                  path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
                  size: 16,
                },
                {
                  label: 'Instagram',
                  href: 'https://instagram.com',
                  path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
                  size: 16,
                },
                {
                  label: 'YouTube',
                  href: 'https://youtube.com',
                  path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
                  size: 18,
                },
              ].map(({ label, href, path, size }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  style={{ color: 'rgba(255,255,255,0.45)', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,1)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                >
                  <svg style={{ width: size, height: size }} viewBox="0 0 24 24" fill="currentColor">
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
