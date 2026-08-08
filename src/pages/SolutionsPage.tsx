import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { VideoHero } from '../components/VideoHero';
import ScrollReveal from '../components/ScrollReveal';
import AccordionGallery, { AccordionGalleryItem } from '../components/AccordionGallery';
import DriftWall, { DriftWallItem } from '../components/DriftWall';

// High-resolution curated authentic open-source photography
const SOLUTION_GALLERY_ITEMS: AccordionGalleryItem[] = [
  { image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1200&auto=format&fit=crop', label: 'Sales & Customer Discovery', link: '#contact' },
  { image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop', label: 'Engineering & Product Sync', link: '#contact' },
  { image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop', label: 'Zero-Retention Governance', link: '#contact' },
  { image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop', label: 'Executive Board Briefings', link: '#contact' },
  { image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop', label: 'Hybrid Team Workspaces', link: '#contact' }
];

const DRIFT_WALL_ITEMS: DriftWallItem[] = [
  { image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop', title: 'Sales Meeting Telemetry', href: '#contact' },
  { image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop', title: 'Sprint Retrospective', href: '#contact' },
  { image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop', title: 'Glass Boardroom Discussion', href: '#contact' },
  { image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop', title: 'Executive Deliberation', href: '#contact' },
  { image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop', title: 'Creative Studio Sync', href: '#contact' },
  { image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&auto=format&fit=crop', title: 'Studio Acoustic Hardware', href: '/models' },
  { image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop', title: 'Strategy Workshop', href: '#contact' },
  { image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop', title: 'Data Telemetry Analysis', href: '#contact' },
  { image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop', title: 'Enterprise Headquarters', href: '#contact' },
  { image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop', title: 'Open Loft Engineering', href: '#contact' },
  { image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop', title: 'Conference Coordination', href: '#contact' },
  { image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop', title: 'Sub-30ms Dictation Code', href: '/models' },
  { image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop', title: 'Executive All-Hands', href: '#contact' },
  { image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=800&auto=format&fit=crop', title: 'Acoustic Soundboard', href: '/models' },
  { image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop', title: 'Leadership Alignment', href: '#contact' }
];

export const SolutionsPage: React.FC = () => {
  return (
    <div className="bg-[#0a0608] min-h-screen text-white font-inter selection:bg-white/20 selection:text-white flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <VideoHero videoSrc="/videos/solutions-bg-opt.mp4">
        <div className="w-full max-w-5xl mx-auto text-center pt-16 pb-6">
          <h1
            className="text-white text-[36px] xs:text-[42px] sm:text-5xl md:text-6xl lg:text-[88px] leading-[1] tracking-tight select-none italic font-normal px-2"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
          >
            Solutions For High-Impact Teams.
          </h1>
          <p className="text-white/75 text-sm sm:text-base md:text-lg mt-5 sm:mt-6 max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-2">
            Empower sales, product, engineering, and executive leadership with acoustic intelligence, automated decision logs, and zero-trust governance.
          </p>
          <div className="mt-7 sm:mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#solutions-overview"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('solutions-overview');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center px-8 sm:px-11 py-3.5 sm:py-4 rounded-full font-mono text-xs font-semibold tracking-wider uppercase theme-cta-btn cursor-pointer"
            >
              Explore Solutions Below
            </a>
          </div>
        </div>
      </VideoHero>

      {/* ── Scroll Reveal Section with Monumental Typography & Generous Spacing ── */}
      <section
        id="solutions-overview"
        className="relative w-full py-28 sm:py-40 md:py-52 px-5 sm:px-10 md:px-16 lg:px-24 bg-[#0a0608] overflow-hidden"
      >
        <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
          {/* Main Grand ScrollReveal Headline */}
          <div className="w-full max-w-4xl">
            <ScrollReveal
              enableBlur
              baseOpacity={0.06}
              baseRotation={2}
              blurStrength={8}
              wordAnimationEnd="top 35%"
              containerClassName="text-center"
              textClassName="font-instrument text-3xl sm:text-5xl md:text-6xl lg:text-[76px] leading-[1.12] tracking-tight text-white font-normal italic"
            >
              We Build Voice Intelligence For Modern Teams
            </ScrollReveal>
          </div>

          {/* Deep ScrollReveal Exposition — Large, Monumental, Clean Typography */}
          <div className="w-full max-w-4xl mt-8 sm:mt-12">
            <ScrollReveal
              enableBlur
              baseOpacity={0.08}
              baseRotation={1}
              blurStrength={6}
              wordAnimationEnd="top 30%"
              containerClassName="text-center"
              textClassName="font-instrument text-xl sm:text-3xl md:text-4xl lg:text-[38px] text-white/85 font-normal italic leading-[1.35] tracking-wide"
            >
              WhisperFlow turns everyday conversations, sales calls, and team meetings into clear action items, decision logs, and searchable knowledge in real time.
            </ScrollReveal>
          </div>

          {/* Second Exposition Paragraph */}
          <div className="w-full max-w-3xl mt-6 sm:mt-8">
            <ScrollReveal
              enableBlur
              baseOpacity={0.08}
              baseRotation={1}
              blurStrength={5}
              wordAnimationEnd="top 25%"
              containerClassName="text-center"
              textClassName="font-inter text-sm sm:text-base md:text-lg text-white/55 font-normal leading-relaxed"
            >
              With sub-30ms speech models and zero data retention, your team gets instant clarity without sacrificing security or privacy.
            </ScrollReveal>
          </div>
        </div>

        {/* ── Section: "Our Solutions" with Extra Large Headline & Open-Source Accordion Gallery ── */}
        <div className="max-w-6xl mx-auto mt-28 sm:mt-36">
          <div className="text-center mb-10 sm:mb-14">
            <h2
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] text-white font-normal italic leading-none tracking-tight"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              Our Solutions
            </h2>
          </div>

          {/* AccordionGallery Component */}
          <div className="w-full">
            <AccordionGallery
              items={SOLUTION_GALLERY_ITEMS}
              defaultIndex={2}
              expandRatio={0.52}
              trigger="hover"
              accentColor="#ffffff"
              overlayColor="#0a0608"
              textColor="#ffffff"
              grayscale={false}
              showLabels
              duration={0.6}
              ease="power3.out"
              parallax={0.5}
              tilt={8}
              stagger={0.06}
              height={500}
              gap={12}
              radius={20}
              orientation="horizontal"
            />
          </div>
        </div>

        {/* ── Closing Section: Drift Wall Unified Seamlessly with Background #0a0608 ── */}
        <div className="max-w-7xl mx-auto mt-32 sm:mt-44 text-center">
          <div className="mb-10 sm:mb-14">
            <span className="text-xs font-mono font-semibold tracking-[0.25em] uppercase text-white/40 mb-3 block">
              Enterprise Ecosystem
            </span>
            <h3
              className="text-3xl sm:text-5xl md:text-6xl text-white font-normal italic"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              Unified Intelligence In Motion
            </h3>
          </div>

          {/* DriftWall 3D Plane Component Seamless with Dark Background */}
          <div className="w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0608]" style={{ height: 600 }}>
            <DriftWall
              items={DRIFT_WALL_ITEMS}
              columns={5}
              tileWidth={200}
              tileHeight={132}
              gap={18}
              tilt={16}
              turn={-14}
              perspective={1200}
              depth={120}
              speed={42}
              direction="up"
              variance={0.45}
              parallax={0.6}
              lift={64}
              fade={0.6}
              dim={0.5}
              overlayColor="#0a0608"
              radius={14}
              roll={0}
              pauseOnHover={false}
              grayscale={false}
            />
          </div>
        </div>

        {/* Action CTA */}
        <div className="max-w-xl mx-auto mt-20 sm:mt-28 text-center">
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
            Deploy Custom Solution For Your Team
          </a>
        </div>
      </section>

      {/* Full Footer */}
      <Footer />
    </div>
  );
};

export default SolutionsPage;
