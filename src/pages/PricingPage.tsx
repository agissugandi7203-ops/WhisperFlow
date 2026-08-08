import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { VideoHero } from '../components/VideoHero';
import { Check, ChevronDown } from 'lucide-react';

const PRICING_TIERS = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Get started with real-time transcription & API access.',
    monthlyPrice: 0,
    annualPrice: 0,
    isCustom: false,
    isFree: true,
    ctaText: 'Start Free Trial',
    isPopular: false,
    features: [
      '14 days unlimited access',
      'Sub-30ms audio transcription',
      '20 hours / month',
      'REST & WebSocket endpoints',
      'Zero-data retention',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: 'For sales, product syncs, and engineering teams.',
    monthlyPrice: 42,
    annualPrice: 31,
    originalPrice: 49,
    isCustom: false,
    isFree: false,
    ctaText: 'Get Started',
    isPopular: false,
    features: [
      'Everything in Starter, plus:',
      '120 hours / seat / month',
      'Automated meeting summaries',
      'Slack, Notion & Jira sync',
      '99.9% uptime SLA',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'Full stack with custom vocabulary & CRM sync.',
    monthlyPrice: 95,
    annualPrice: 71,
    originalPrice: 119,
    isCustom: false,
    isFree: false,
    ctaText: 'Deploy Now',
    isPopular: true,
    features: [
      'Everything in Pro, plus:',
      'Unlimited speech processing',
      '32-speaker diarization',
      'Custom vocabulary tuning',
      '99.99% uptime guarantee',
    ],
  },
  {
    id: 'sovereign',
    name: 'Sovereign VPC',
    tagline: 'Private VPC or on-premise for regulated industries.',
    monthlyPrice: 0,
    annualPrice: 0,
    isCustom: true,
    isFree: false,
    ctaText: 'Talk to Sales',
    isPopular: false,
    features: [
      'Everything in Enterprise, plus:',
      'Private AWS / GCP / Azure tenant',
      'SOC2, HIPAA & GDPR compliant',
      'Air-gapped on-premise LLM',
      '24/7 dedicated support',
    ],
  },
];

const FAQS = [
  {
    q: 'How does the sub-30ms latency work?',
    a: 'WhisperFlow uses proprietary streaming acoustic decoders on distributed GPU edge clusters, delivering transcription in under 30ms compared to standard cloud APIs averaging 250–400ms.',
  },
  {
    q: 'What is zero-data retention?',
    a: 'Raw audio streams are processed in memory and immediately purged. We never use your proprietary voice data to train foundation models.',
  },
  {
    q: 'Can I switch billing plans anytime?',
    a: 'Yes. You can upgrade or switch to annual billing directly from your dashboard at any time to receive the 25% discount.',
  },
  {
    q: 'Do you offer enterprise proof-of-concept trials?',
    a: 'Yes. Our solutions architects provide 30-day PoC deployments with signed BAAs and SOC2 verification for your staging environment.',
  },
];

export const PricingPage: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleNavContact = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, '', '/contact');
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#0a0608] min-h-screen text-white font-inter selection:bg-white/20 selection:text-white flex flex-col">
      <Navbar />

      {/* Hero */}
      <VideoHero videoSrc="/videos/pricing-bg-opt.mp4" videoPosition="center 90%">
        <div className="w-full max-w-4xl mx-auto text-center pt-12 sm:pt-16 pb-6 px-4">
          <h1
            className="text-white text-[36px] sm:text-5xl md:text-6xl lg:text-[80px] leading-[1] tracking-tight select-none italic font-normal"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
          >
            Predictable Pricing.
          </h1>
          <p className="text-white/70 text-sm sm:text-base mt-5 max-w-xl mx-auto leading-relaxed">
            Transparent seat-based plans for every team size. No hidden fees.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 flex flex-col items-center gap-3">
            <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-white/5 border border-white/15">
              <button
                type="button"
                onClick={() => setIsAnnual(false)}
                className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  !isAnnual ? 'bg-white text-black font-bold' : 'text-white/60 hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setIsAnnual(true)}
                className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider uppercase flex items-center gap-2 transition-all duration-200 cursor-pointer ${
                  isAnnual ? 'bg-white text-black font-bold' : 'text-white/60 hover:text-white'
                }`}
              >
                Annual
                <span className="px-2 py-0.5 rounded-full bg-white/15 text-white text-[10px] font-bold border border-white/20">
                  Save 25%
                </span>
              </button>
            </div>
            <span className="text-[11px] font-mono text-white/35">
              14-day free trial • No credit card required
            </span>
          </div>
        </div>
      </VideoHero>

      {/* Pricing Cards */}
      <section className="relative w-full py-16 sm:py-24 px-4 sm:px-8 md:px-16 bg-[#0a0608]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PRICING_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`relative flex flex-col rounded-2xl p-6 border transition-all duration-200 ${
                  tier.isPopular
                    ? 'border-purple-400/40 bg-[#160e1d] shadow-[0_0_40px_rgba(192,132,252,0.12)]'
                    : 'border-white/10 bg-white/[0.03]'
                }`}
              >
                {tier.isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-mono uppercase font-bold bg-purple-500/30 border border-purple-400/40 text-purple-300">
                    Most Popular
                  </span>
                )}

                {/* Name */}
                <p className="text-xs font-mono uppercase tracking-widest text-white/50 mb-4">
                  {tier.name}
                </p>

                {/* Price */}
                <div className="mb-5">
                  {tier.isCustom ? (
                    <span
                      className="text-4xl text-white font-normal italic"
                      style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                    >
                      Custom
                    </span>
                  ) : tier.isFree ? (
                    <div className="flex items-baseline gap-1.5">
                      <span
                        className="text-4xl text-white font-normal italic"
                        style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                      >
                        $0
                      </span>
                      <span className="text-white/40 text-xs font-mono">/ 14 days</span>
                    </div>
                  ) : (
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span
                          className="text-4xl text-white font-normal italic"
                          style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                        >
                          ${isAnnual ? tier.annualPrice : tier.monthlyPrice}
                        </span>
                        <span className="text-white/40 text-xs font-mono">/ seat / mo</span>
                      </div>
                      {isAnnual && tier.originalPrice && (
                        <span className="text-[11px] font-mono text-white/30 line-through mt-0.5 block">
                          ${tier.originalPrice}/mo billed monthly
                        </span>
                      )}
                    </div>
                  )}
                  <p className="text-white/55 text-xs mt-3 leading-relaxed">{tier.tagline}</p>
                </div>

                {/* Features */}
                <div className="flex-1 space-y-2.5 mb-7">
                  {tier.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-2 text-xs text-white/75">
                      <div className="w-3.5 h-3.5 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-white" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="/contact"
                  onClick={handleNavContact}
                  className={`w-full py-3 rounded-full font-mono text-xs font-semibold uppercase tracking-wider text-center transition-all duration-200 cursor-pointer ${
                    tier.isPopular
                      ? 'bg-white text-black hover:bg-white/90'
                      : 'bg-white/8 hover:bg-white/15 text-white border border-white/15'
                  }`}
                >
                  {tier.ctaText}
                </a>
              </div>
            ))}
          </div>

          {/* Simple CTA Banner */}
          <div className="mt-16 sm:mt-20 rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:p-10 text-center max-w-3xl mx-auto">
            <h3
              className="text-2xl sm:text-4xl text-white font-normal italic mb-3"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              Replace 4 Legacy Tools
            </h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-xl mx-auto mb-6">
              One acoustic engine replaces your transcription bot, speech API, diarizer, and meeting recorder — starting from $31/seat/mo.
            </p>
            <a
              href="/contact"
              onClick={handleNavContact}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-mono text-xs font-semibold tracking-wider uppercase bg-white text-black hover:bg-white/90 cursor-pointer transition-all duration-200"
            >
              Talk to Sales
            </a>
          </div>

          {/* FAQ */}
          <div className="mt-20 sm:mt-28 max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h3
                className="text-2xl sm:text-4xl text-white font-normal italic"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                Common Questions
              </h3>
            </div>
            <div className="space-y-3">
              {FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-medium text-white/90">{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-white/50 transition-transform duration-300 shrink-0 ${
                        openFaq === idx ? 'rotate-180 text-white' : ''
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm text-white/60 leading-relaxed border-t border-white/5 pt-4">
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
