import React from 'react';
import LogoLoop from './LogoLoop';
import {
  SiGooglecloud,
  SiNvidia,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPython,
  SiGithub,
  SiVercel,
} from 'react-icons/si';

const partnerLogos = [
  { node: <SiGooglecloud />, title: 'Google Cloud', href: 'https://cloud.google.com' },
  { node: <SiNvidia />, title: 'NVIDIA', href: 'https://nvidia.com' },
  { node: <SiReact />, title: 'React', href: 'https://react.dev' },
  { node: <SiNextdotjs />, title: 'Next.js', href: 'https://nextjs.org' },
  { node: <SiTypescript />, title: 'TypeScript', href: 'https://typescriptlang.org' },
  { node: <SiTailwindcss />, title: 'Tailwind CSS', href: 'https://tailwindcss.com' },
  { node: <SiPython />, title: 'Python', href: 'https://python.org' },
  { node: <SiGithub />, title: 'GitHub', href: 'https://github.com' },
  { node: <SiVercel />, title: 'Vercel', href: 'https://vercel.com' },
];

export const PartnerLogos: React.FC = () => {
  return (
    <div
      className="w-full max-w-full py-12 bg-[#0a0608] border-y border-white/5 select-none relative z-20 overflow-hidden"
      style={{ isolation: 'isolate', contain: 'paint' }}
    >
      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-white/40">
          Powering Benchmark-Leading AI Models
        </p>
      </div>
      <div className="w-full overflow-hidden" style={{ isolation: 'isolate' }}>
        <LogoLoop
          logos={partnerLogos}
          speed={70}
          direction="left"
          logoHeight={38}
          gap={64}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#0a0608"
          ariaLabel="Technology partners marquee"
        />
      </div>
    </div>
  );
};
