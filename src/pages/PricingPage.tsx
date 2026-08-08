import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { VideoHero } from '../components/VideoHero';
import ScrollReveal from '../components/ScrollReveal';
import BorderGlow from '../components/BorderGlow';
import { Check, ChevronDown } from 'lucide-react';

interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  monthlyPrice: number;
  annualPrice: number;
  originalPrice?: number;
  isCustom?: boolean;
  ctaText: string;
  ctaHref: string;
  isPopular?: boolean;
  features: string[];
  specs: { label: string; value: string }[];
}

const PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter Developer',
    badge: 'Zero Commitment',
    tagline: 'Get started instantly with real-time acoustic streaming & API access.',
    monthlyPrice: 0,
    annualPrice: 0,
    ctaText: 'Start Free 14-Day Trial',
    ctaHref: '/contact',
    features: [
      '14 days unlimited platform access',
      'Sub-30ms real-time audio transcription',
      'Claude Speech multi-turn reasoning',
      '20 hours speech intelligence / month',
      'REST & WebSocket streaming endpoints',
      'Zero-data retention guarantee'
    ],
    specs: [
      { label: 'Latency', value: '< 30ms' },
      { label: 'Diarization', value: 'Up to 4 speakers' },
      { label: 'API Quota', value: '20 hrs / mo' }
    ]
  },
  {
    id: 'pro',
    name: 'Pro Growth',
    badge: 'High Velocity',
    tagline: 'Ideal for sales discovery, product syncs, and engineering deliberation.',
    monthlyPrice: 42,
    annualPrice: 31,
    originalPrice: 49,
    ctaText: 'Deploy Pro Workspace',
    ctaHref: '/contact',
    features: [
      'Everything in Starter, plus:',
      '120 hours speech intelligence / seat / mo',
      'Automated meeting action items & summaries',
      'Linear, Jira, Slack & Notion automated sync',
      'Searchable organizational conversation memory',
      'Standard 99.9% uptime SLA'
    ],
    specs: [
      { label: 'Latency', value: '< 28ms' },
      { label: 'Diarization', value: 'Up to 12 speakers' },
      { label: 'Retention', value: 'Zero-data retention' }
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise Dedicated',
    badge: 'Most Popular',
    tagline: 'The complete acoustic intelligence stack with custom vocabulary & CRM sync.',
    monthlyPrice: 95,
    annualPrice: 71,
    originalPrice: 119,
    isPopular: true,
    ctaText: 'Deploy Enterprise Cluster',
    ctaHref: '/contact',
    features: [
      'Everything in Pro Growth, plus:',
      'Pulse Diarize Pro (32-speaker separation)',
      'Unlimited high-fidelity speech processing',
      'Custom technical & medical vocabulary tuning',
      'Automated CRM & executive decision logs',
      'Dedicated Customer Success Architect',
      'Custom webhooks & 99.99% uptime guarantee'
    ],
    specs: [
      { label: 'Latency', value: '< 24ms' },
      { label: 'Diarization', value: 'Up to 32 speakers' },
      { label: 'SLA', value: '99.99% Guaranteed' }
    ]
  },
  {
    id: 'sovereign',
    name: 'Sovereign VPC',
    badge: 'Air-Gapped Cloud',
    tagline: 'Dedicated private VPC or on-premise hardware for regulated industries.',
    monthlyPrice: 0,
    annualPrice: 0,
    isCustom: true,
    ctaText: 'Schedule Architecture Review',
    ctaHref: '/contact',
    features: [
      'Everything in Enterprise Dedicated, plus:',
      'Dedicated AWS, GCP or Azure private tenant',
      'Air-gapped on-premise Titan LLM deployment',
      'Strict SOC2 Type II, HIPAA & GDPR compliance',
      'Zero external API dependencies or logs',
      '24/7/365 priority incident escalation line',
      'Custom hardware acceleration tuning'
    ],
    specs: [
      { label: 'Deployment', value: 'Private VPC / On-Prem' },
      { label: 'Compliance', value: 'SOC2 & HIPAA' },
      { label: 'Support', value: '24/7 Dedicated Team' }
    ]
  }
];

const COMPARISON_ROWS = [
  { feature: 'Streaming Audio Latency', starter: '< 30ms', pro: '< 28ms', enterprise: '< 24ms', sovereign: '< 20ms' },
  { feature: 'Diarization (Speaker Separation)', starter: '4 Speakers', pro: '12 Speakers', enterprise: '32 Speakers', sovereign: 'Unlimited' },
  { feature: 'Claude Speech Intent Reasoning', starter: 'Basic', pro: 'Included', enterprise: 'Advanced Multi-Turn', sovereign: 'Full On-Prem' },
  { feature: 'Custom Vocabulary Biasing', starter: '—', pro: '100 terms', enterprise: 'Unlimited Domain Terms', sovereign: 'Proprietary Fine-Tuning' },
  { feature: 'Automated CRM & Project Sync', starter: '—', pro: 'Linear / Jira / Notion', enterprise: 'Salesforce / Hubspot / All', sovereign: 'Custom Webhooks' },
  { feature: 'Data Retention Policy', starter: 'Zero Retention', pro: 'Zero Retention', enterprise: 'Zero Retention', sovereign: 'Air-Gapped Sovereign' },
  { feature: 'SLA & Uptime Guarantee', starter: '99.5%', pro: '99.9%', enterprise: '99.99%', sovereign: '99.999% Dedicated' }
];

const FAQS = [
  {
    q: 'How does the sub-30ms streaming latency compare to standard models?',
    a: 'WhisperFlow uses proprietary streaming acoustic decoders running on distributed GPU edge clusters, delivering transcription and intent extraction in under 30ms compared to standard cloud speech APIs that average 250ms to 400ms.'
  },
  {
    q: 'What is zero-data retention and how are our voice logs protected?',
    a: 'We operate under a strict zero-retention guarantee: raw audio streams are processed in memory and immediately purged upon summary and decision log generation. We never use your proprietary voice data for foundation model training.'
  },
  {
    q: 'Can WhisperFlow adapt to our company-specific acronyms and jargon?',
    a: 'Yes. Enterprise tiers include custom vocabulary biasing, allowing WhisperFlow to achieve 98.4%+ accuracy on internal acronyms, software terms, medical names, and domain-specific vocabulary.'
  },
  {
    q: 'Can we switch between Monthly and Annual billing at any time?',
    a: 'Absolutely. You can upgrade or switch to annual billing directly from your workspace dashboard at any time to receive the 25% annual discount and 2 months free.'
  },
  {
    q: 'Do you offer proof-of-concept trials for enterprise security reviews?',
    a: 'Yes. Our solutions architects provide 30-day proof-of-concept deployments with signed BAAs and SOC2 verification reports to evaluate in your staging environment.'
  }
];

export const PricingPage: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleNavContact = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, '', '/contact');
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0a0608] min-h-screen text-white font-inter selection:bg-white/20 selection:text-white flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <VideoHero videoSrc="/videos/pricing-bg-opt.mp4" videoPosition="center 90%">
        <div className="w-full max-w-5xl mx-auto text-center pt-12 sm:pt-16 pb-6">
          <h1
            className="text-white text-[36px] xs:text-[42px] sm:text-5xl md:text-6xl lg:text-[88px] leading-[1] tracking-tight select-none italic font-normal px-2"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
          >
            Predictable Pricing For Modern Teams.
          </h1>
          <p className="text-white/75 text-sm sm:text-base md:text-lg mt-5 sm:mt-6 max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-2">
            Transparent seat-based subscriptions or dedicated enterprise VPC deployments designed for maximum speed, security, and ROI.
          </p>

          {/* Billing Toggle (Monthly / Annual) with Clean White/Purple Badge */}
          <div className="mt-8 sm:mt-12 flex flex-col items-center gap-3">
            <div className="inline-flex items-center gap-2 p-1.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-xl shadow-2xl">
              <button
                type="button"
                onClick={() => setIsAnnual(false)}
                className={`px-5 sm:px-7 py-2 sm:py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  !isAnnual ? 'bg-white text-black font-bold shadow-lg' : 'text-white/60 hover:text-white'
                }`}
              >
                Monthly Billing
              </button>
              <button
                type="button"
                onClick={() => setIsAnnual(true)}
                className={`px-5 sm:px-7 py-2 sm:py-2.5 rounded-full text-xs font-mono tracking-wider uppercase flex items-center gap-2 transition-all duration-200 cursor-pointer ${
                  isAnnual ? 'bg-white text-black font-bold shadow-lg' : 'text-white/60 hover:text-white'
                }`}
              >
                <span>Annual Billing</span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/15 text-white text-[10px] font-bold border border-white/20">
                  Save 25% + 2 Mo Free
                </span>
              </button>
            </div>
            <span className="text-[11px] font-mono text-white/40">
              14-day zero-risk trial on all tiers • No credit card required to start
            </span>
          </div>
        </div>
      </VideoHero>

      {/* ── Main Pricing Cards Section with 4 Tiers & Base Sale Prominence ── */}
      <section className="relative w-full py-20 sm:py-28 px-5 sm:px-10 md:px-16 lg:px-24 bg-[#0a0608] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <ScrollReveal
              enableBlur
              baseOpacity={0.06}
              baseRotation={2}
              blurStrength={8}
              wordAnimationEnd="top 35%"
              containerClassName="text-center"
              textClassName="font-instrument text-3xl sm:text-5xl md:text-6xl text-white font-normal italic leading-tight tracking-tight"
            >
              Engineered For Every Scale
            </ScrollReveal>
            <p className="text-white/60 text-sm sm:text-base mt-4">
              Replace fragmented transcription, summarizer, and call recorder tools with a unified acoustic engine.
            </p>
          </div>

          {/* Pricing Grid (4 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {PRICING_TIERS.map((tier) => (
              <BorderGlow
                key={tier.id}
                edgeSensitivity={30}
                glowColor="40 80 80"
                backgroundColor={tier.isPopular ? '#160e1d' : '#120F17'}
                borderRadius={28}
                glowRadius={40}
                glowIntensity={1.0}
                coneSpread={25}
                animated={false}
                colors={['#c084fc', '#f472b6', '#38bdf8']}
                fillOpacity={0.5}
                className="h-full flex flex-col"
              >
                <div className={`p-6 sm:p-8 flex flex-col justify-between h-full relative ${tier.isPopular ? 'border-2 border-purple-400/40 rounded-[27px] shadow-[0_0_40px_rgba(192,132,252,0.15)]' : ''}`}>
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono uppercase tracking-widest text-white/50">
                        {tier.name}
                      </span>
                      {tier.badge && (
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold shadow-sm ${
                          tier.isPopular
                            ? 'bg-purple-500/20 text-purple-300 border border-purple-400/40'
                            : 'bg-white/10 border border-white/20 text-white/80'
                        }`}>
                          {tier.badge}
                        </span>
                      )}
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      {tier.isCustom ? (
                        <div className="flex items-baseline gap-2">
                          <span
                            className="text-4xl sm:text-5xl text-white font-normal italic"
                            style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                          >
                            Custom
                          </span>
                          <span className="text-white/50 text-[11px] font-mono">/ private tenant</span>
                        </div>
                      ) : tier.monthlyPrice === 0 ? (
                        <div className="flex items-baseline gap-1.5">
                          <span
                            className="text-4xl sm:text-5xl text-white font-normal italic"
                            style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                          >
                            $0
                          </span>
                          <span className="text-white/50 text-xs font-mono">
                            / 14-day trial
                          </span>
                        </div>
                      ) : (
                        <div>
                          <div className="flex items-baseline gap-2">
                            <span
                              className="text-4xl sm:text-5xl text-white font-normal italic"
                              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                            >
                              ${isAnnual ? tier.annualPrice : tier.monthlyPrice}
                            </span>
                            <span className="text-white/50 text-xs font-mono">
                              / seat / mo
                            </span>
                          </div>
                          {isAnnual && tier.originalPrice && (
                            <span className="text-[11px] font-mono text-white/40 line-through mt-1 block">
                              Regularly ${tier.originalPrice}/mo
                            </span>
                          )}
                        </div>
                      )}
                      <p className="text-white/65 text-xs sm:text-sm mt-3 leading-relaxed">
                        {tier.tagline}
                      </p>
                    </div>

                    {/* Specs Pills */}
                    <div className="grid grid-cols-3 gap-1.5 py-3 border-y border-white/10 mb-6 text-center">
                      {tier.specs.map((s) => (
                        <div key={s.label} className="p-1.5 rounded-lg bg-white/[0.03]">
                          <span className="text-[8px] font-mono uppercase text-white/40 block mb-0.5">
                            {s.label}
                          </span>
                          <span className="text-[10px] font-semibold text-white/90 truncate block">
                            {s.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Feature List */}
                    <div className="space-y-3 mb-8">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-white/40 block mb-2">
                        Features Included
                      </span>
                      {tier.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2.5 text-xs text-white/80 leading-snug">
                          <div className="w-3.5 h-3.5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5 text-white">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={tier.ctaHref}
                    onClick={handleNavContact}
                    className={`w-full py-3.5 rounded-full font-mono text-xs font-semibold uppercase tracking-wider text-center transition-all duration-200 cursor-pointer shadow-xl ${
                      tier.isPopular
                        ? 'bg-white text-black hover:bg-white/90 shadow-[0_0_24px_rgba(255,255,255,0.25)]'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/15'
                    }`}
                  >
                    {tier.ctaText}
                  </a>
                </div>
              </BorderGlow>
            ))}
          </div>

          {/* ── Tool Consolidation & ROI Breakdown Banner ── */}
          <div className="mt-20 sm:mt-28 p-8 sm:p-12 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-white/60 font-semibold mb-2 block">
                  ROI & Tool Consolidation
                </span>
                <h3
                  className="text-2xl sm:text-4xl text-white font-normal italic mb-3"
                  style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                >
                  Replace 4 Legacy Subscriptions
                </h3>
                <p className="text-white/65 text-xs sm:text-sm leading-relaxed">
                  Consolidate standalone transcription bots, meeting recorders, speech APIs, and diarization tools into one sub-30ms sovereign acoustic engine.
                </p>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-white/60">Standalone Bot Recorders (e.g. Otter / Fireflies)</span>
                  <span className="text-white line-through text-white/40">$20 / seat</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-white/60">Sales Intelligence (e.g. Gong / Chorus)</span>
                  <span className="text-white line-through text-white/40">$120 / seat</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-white/60">Speech-to-Text API (e.g. Deepgram / AssemblyAI)</span>
                  <span className="text-white line-through text-white/40">$60 / mo</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-white/10 border border-white/20 text-white font-semibold">
                  <span>WhisperFlow All-in-One Sub-30ms Stack</span>
                  <span>From $31 / seat / mo</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Feature Comparison Matrix Table ── */}
          <div className="mt-24 sm:mt-32 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-mono font-semibold tracking-[0.25em] uppercase text-white/40 mb-2 block">
                Feature Breakdown
              </span>
              <h3
                className="text-2xl sm:text-4xl text-white font-normal italic"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                Comprehensive Tier Matrix
              </h3>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.02]">
              <table className="w-full text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="p-4 sm:p-5 text-white/60 uppercase">Capability</th>
                    <th className="p-4 sm:p-5 text-white/60 uppercase">Starter</th>
                    <th className="p-4 sm:p-5 text-white/60 uppercase">Pro Growth</th>
                    <th className="p-4 sm:p-5 text-white font-bold uppercase text-purple-300">Enterprise</th>
                    <th className="p-4 sm:p-5 text-white/60 uppercase">Sovereign VPC</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {COMPARISON_ROWS.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 sm:p-5 text-white font-sans text-xs sm:text-sm font-medium">{row.feature}</td>
                      <td className="p-4 sm:p-5 text-white/70">{row.starter}</td>
                      <td className="p-4 sm:p-5 text-white/80">{row.pro}</td>
                      <td className="p-4 sm:p-5 text-white font-bold bg-white/[0.02]">{row.enterprise}</td>
                      <td className="p-4 sm:p-5 text-white/90">{row.sovereign}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ── FAQ Section ── */}
          <div className="mt-28 sm:mt-40 max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-xs font-mono font-semibold tracking-[0.25em] uppercase text-white/40 mb-3 block">
                Frequently Asked Questions
              </span>
              <h3
                className="text-3xl sm:text-5xl text-white font-normal italic"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                Everything You Need To Know
              </h3>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-medium text-white/90">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-white/50 transition-transform duration-300 shrink-0 ${
                        openFaq === idx ? 'rotate-180 text-white' : ''
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 sm:px-7 pb-6 sm:pb-7 text-sm sm:text-base text-white/65 leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPage;
