import React from 'react';
import { ArrowLeft } from 'lucide-react';

const LOCAL_VIDEO = '/videos/404-bg-opt.mp4';
const FALLBACK_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260801_001207_ec20d138-aa45-4b2b-ab8c-bdc71607f240.mp4';

export const NotFound: React.FC = () => {
  const handleGoHome = (e: React.MouseEvent) => {
    e.preventDefault();
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <main
      className="relative w-full min-h-[100svh] overflow-x-hidden bg-black select-none"
      style={{ minHeight: '100svh', backgroundColor: '#000000' }}
    >
      {/* 1. BACKGROUND VIDEO: Lowest layer, 100% opacity, no overlay */}
      <video
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 1,
        }}
      >
        <source src={LOCAL_VIDEO} type="video/mp4" />
        <source src={FALLBACK_VIDEO} type="video/mp4" />
      </video>

      {/* 2. HEADER LOGO & WHISPERFLOW BRAND IDENTITY: Centered horizontally at top */}
      <header
        className="absolute z-10 top-8 sm:top-20 left-1/2 -translate-x-1/2 flex items-center justify-center gap-6 origin-top"
        aria-label="WhisperFlow 404 Header"
      >
        {/* WhisperFlow Brand Logo */}
        <a
          href="/"
          onClick={handleGoHome}
          className="flex items-center gap-2.5 group cursor-pointer select-none"
          title="Return to WhisperFlow"
        >
          <img
            src="/assets/logos/logo-white-icon.png"
            alt="WhisperFlow Logo"
            className="w-7 h-7 sm:w-8 sm:h-8 object-contain transition-transform group-hover:scale-105"
          />
          <span
            className="font-dancing text-xl sm:text-2xl tracking-tight text-white font-bold"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            WhisperFlow
          </span>
        </a>

        {/* Separator Pipe */}
        <span className="hidden sm:inline-block w-[1px] h-5 bg-white/30" aria-hidden="true" />

        {/* LGPSM Pixel Geometric Mark Logo Frame (233px × 40px) */}
        <div
          className="hidden sm:flex items-center scale-90 sm:scale-100"
          style={{ width: '233px', height: '40px' }}
          aria-label="LGPSM"
        >
          {/* Mark: 54px × 40px */}
          <svg
            viewBox="0 0 54 40"
            fill="none"
            className="w-[54px] h-[40px] flex-shrink-0"
            aria-hidden="true"
          >
            <path d="M38 0H26V12H38V0Z" fill="white" />
            <path d="M54 12H38V28H54V12Z" fill="white" />
            <path d="M38 28H26V40H38V28Z" fill="white" />
            <path d="M26 12H16V22H26V12Z" fill="white" />
            <path d="M16 22H8V30H16V22Z" fill="white" />
            <path d="M16 2H6V12H16V2Z" fill="white" />
            <path d="M6 12H0V18H6V12Z" fill="white" />
          </svg>

          {/* Logotype: 14px to the right of mark */}
          <div style={{ marginLeft: '14px' }} className="flex items-center">
            <svg
              viewBox="0 0 164.311 100"
              fill="none"
              className="w-[165px] h-[40px]"
              aria-hidden="true"
            >
              <path
                d="M122.498 37.4573H131.321L139.533 51.6222L147.772 37.4573H156.595V56.0604H152.449V37.6433L141.739 56.0604H137.354L126.617 37.6433V56.0604H122.498V37.4573ZM95.921 48.8317C92.785 48.8317 90.261 46.307 90.261 43.1445C90.261 40.0086 92.785 37.4573 95.921 37.4573H119.972V41.6031H95.921C95.071 41.6031 94.38 42.2941 94.38 43.1445C94.38 44.0215 95.071 44.7125 95.921 44.7125H114.285C117.421 44.7125 119.972 47.2372 119.972 50.3997C119.972 53.5357 117.421 56.0604 114.285 56.0604H90.261V51.9411H114.285C115.136 51.9411 115.827 51.2501 115.827 50.3997C115.827 49.5227 115.136 48.8317 114.285 48.8317H95.921ZM80.857 37.4573C84.843 37.4573 88.086 40.6995 88.086 44.7125C88.086 48.6989 84.843 51.9411 80.857 51.9411H62.254V56.0604H58.135V37.4573H80.857ZM80.83 47.7953C82.558 47.7953 83.94 46.4133 83.94 44.7125C83.94 42.985 82.558 41.6031 80.83 41.6031H62.254V47.7953H80.83ZM35.975 41.6031C33.105 41.6031 30.7927 43.9152 30.7927 46.7588C30.7927 49.629 33.105 51.9411 35.975 51.9411H51.336V48.6989H35.576V44.5796H55.482V56.0604H35.975C30.8192 56.0604 26.6734 51.9145 26.6734 46.7588C26.6734 41.6297 30.8192 37.4573 35.975 37.4573H55.482V41.6031H35.975ZM0 56.0604V37.4573H4.1192V51.9411H24.9281V56.0604H0ZM164.311 36.4177C164.311 37.7529 163.228 38.8354 161.893 38.8354C160.558 38.8354 159.475 37.7529 159.475 36.4177C159.475 35.0824 160.558 34 161.893 34C163.228 34 164.311 35.0824 164.311 36.4177Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </header>

      {/* 3. CENTERED 404 CONTENT: Exact center of viewport */}
      <div
        className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center w-[min(100%-40px,360px)] sm:w-[483px] gap-6 sm:gap-[40px]"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* 404 HEADING */}
        <h1
          className="font-geist-mono text-gradient-404 pb-2 select-none"
          style={{
            fontFamily: '"Geist Mono:SemiBold", ui-monospace, monospace',
            fontWeight: 600,
            lineHeight: 1.1,
            height: 'auto',
            minHeight: 0,
          }}
        >
          {/* Desktop & Mobile font styling */}
          <span className="hidden sm:inline-block text-[295.751px] tracking-[-24.6459px]">
            404
          </span>
          <span className="sm:hidden inline-block text-[clamp(140px,52vw,200px)] tracking-[-0.09em]">
            404
          </span>
        </h1>

        {/* THIN HORIZONTAL DIVIDER: 425px on desktop, 100% on mobile */}
        <div
          className="w-full sm:w-[425px] h-[1px] bg-white flex-shrink-0"
          style={{ height: '1px', backgroundColor: '#ffffff' }}
          aria-hidden="true"
        />

        {/* MESSAGE TEXT */}
        <p
          className="font-geist-mono text-white text-center w-full"
          style={{
            fontFamily: '"Geist Mono:SemiBold", ui-monospace, monospace',
            fontWeight: 600,
            lineHeight: 1.1,
          }}
        >
          <span className="hidden sm:inline-block text-[24px] tracking-[-2px]">
            The path may be broken, but the journey isn't. Let's get you back.
          </span>
          <span className="sm:hidden inline-block text-[clamp(16px,4.5vw,20px)] tracking-[-1.3px]">
            The path may be broken, but the journey isn't. Let's get you back.
          </span>
        </p>

        {/* 4. PROMINENT BACK TO HOME BUTTON */}
        <div className="pt-2">
          <a
            href="/"
            onClick={handleGoHome}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white text-black font-semibold text-sm tracking-wide shadow-2xl hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer select-none"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
