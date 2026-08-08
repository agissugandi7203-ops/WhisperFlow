import React, { useState, useEffect, useCallback } from 'react';
import { Sun, Moon, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const NAV_LINKS = [
  { name: 'Product', href: '/product' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Models', href: '/models' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState(() =>
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Update active route on popstate/navigation
  useEffect(() => {
    const updatePath = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', updatePath);
    return () => window.removeEventListener('popstate', updatePath);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const navigate = useCallback((href: string) => {
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
    setCurrentPath(href);
    window.scrollTo({ top: 0, behavior: 'instant' });
    setIsOpen(false);
  }, []);

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    navigate(href);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
  };

  // Helper to check if link is currently active
  const isLinkActive = (href: string) => {
    if (href === '/product') {
      return currentPath === '/' || currentPath === '' || currentPath === '/product' || currentPath === '/index.html';
    }
    return currentPath === href;
  };

  return (
    <>
      {/* ── Desktop / Tablet Header ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 pointer-events-auto transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5 sm:py-6'
        }`}
      >
        <div className={`mx-auto transition-all duration-500 max-w-7xl px-4 sm:px-6 ${scrolled ? '' : 'md:px-10'}`}>
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              scrolled ? 'rounded-2xl px-6 py-3.5' : 'px-0 py-0'
            }`}
            style={
              scrolled
                ? {
                    backdropFilter: 'blur(28px) saturate(160%)',
                    WebkitBackdropFilter: 'blur(28px) saturate(160%)',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    boxShadow:
                      '0 0 0 1px rgba(255,255,255,0.12), 0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
                  }
                : {}
            }
          >
            {/* Brand Logo */}
            <a
              href="/"
              onClick={handleLogoClick}
              className="flex items-center gap-3 group select-none cursor-pointer shrink-0"
              aria-label="WhisperFlow Home"
            >
              <img
                src="/assets/logos/logo-white-icon.png"
                alt="WhisperFlow Logo"
                className="w-8 h-8 sm:w-9 sm:h-9 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span
                className="text-2xl sm:text-3xl tracking-tight text-white select-none transition-colors duration-200 italic font-normal"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                WhisperFlow
              </span>
            </a>

            {/* Desktop Nav — Simple Clear Active State (Bold + Bright White + Indicator) */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-10">
              {NAV_LINKS.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(link.href, e)}
                    className={`text-xs lg:text-[13px] font-mono tracking-[0.18em] uppercase transition-all duration-200 cursor-pointer relative py-1 ${
                      active
                        ? 'text-white font-bold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-white'
                        : 'text-white/50 hover:text-white font-medium after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-white/70 after:transition-all after:duration-300 hover:after:w-full'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Right Actions */}
            <div className="hidden md:flex items-center gap-3.5">
              <button
                type="button"
                onClick={toggleTheme}
                className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 transition-all duration-200 cursor-pointer"
                style={{ boxShadow: '0 0 0 1px rgba(255,255,255,0.12)' }}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-3.5 h-3.5 text-amber-300" />
                ) : (
                  <Moon className="w-3.5 h-3.5 text-slate-300" />
                )}
              </button>

              <a
                href="/contact"
                onClick={(e) => handleNavClick('/contact', e)}
                className="inline-flex items-center justify-center px-5 lg:px-6 py-2.5 rounded-full font-mono text-xs font-semibold tracking-wider uppercase theme-cta-btn cursor-pointer"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                onClick={toggleTheme}
                className="w-8 h-8 rounded-lg flex items-center justify-center bg-white/5 border border-white/10"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-3.5 h-3.5 text-amber-300" />
                ) : (
                  <Moon className="w-3.5 h-3.5 text-slate-300" />
                )}
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="relative w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-lg bg-white/5 border border-white/10 focus:outline-none"
                aria-label="Open menu"
              >
                <span
                  className="w-4 h-[1.5px] bg-white rounded-full transition-all duration-300 origin-center"
                  style={{ transform: 'none' }}
                />
                <span className="w-4 h-[1.5px] bg-white rounded-full transition-all duration-300" />
                <span
                  className="w-4 h-[1.5px] bg-white rounded-full transition-all duration-300 origin-center"
                  style={{ transform: 'none' }}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu — Full Screen Premium Overlay ── */}
      <div
        className={`fixed inset-0 z-[9999] md:hidden flex flex-col transition-all duration-400 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{
          backdropFilter: 'blur(32px) saturate(150%)',
          WebkitBackdropFilter: 'blur(32px) saturate(150%)',
          backgroundColor: 'rgba(8,6,7,0.97)',
        }}
      >
        {/* Top bar inside mobile menu */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 shrink-0">
          <a
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-2.5 select-none cursor-pointer"
          >
            <img src="/assets/logos/logo-white-icon.png" alt="WhisperFlow" className="w-8 h-8 object-contain" />
            <span
              className="text-2xl text-white italic font-normal"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              WhisperFlow
            </span>
          </a>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/8 border border-white/12 text-white/70 hover:text-white hover:bg-white/14 transition-all duration-200"
            aria-label="Close menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Divider */}
        <div className="mx-6 h-px bg-white/8" />

        {/* Nav Links */}
        <nav className="flex-1 flex flex-col justify-center px-6 py-4 gap-1">
          {NAV_LINKS.map((link, index) => {
            const active = isLinkActive(link.href);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(link.href, e)}
                className={`group flex items-center justify-between w-full py-4 border-b border-white/6 last:border-0 cursor-pointer ${
                  active ? 'text-white' : 'text-white/60'
                }`}
                style={{
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.35s ease ${80 + index * 60}ms, transform 0.35s ease ${80 + index * 60}ms`,
                }}
              >
                <span
                  className={`text-2xl sm:text-3xl italic transition-colors duration-200 ${
                    active ? 'font-bold text-white' : 'font-normal text-white/70 group-hover:text-white'
                  }`}
                  style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                >
                  {link.name}
                </span>
                <span
                  className={`text-[10px] font-mono uppercase tracking-[0.2em] transition-colors duration-200 ${
                    active ? 'text-white font-bold' : 'text-white/30 group-hover:text-white/60'
                  }`}
                >
                  {active ? '● ACTIVE' : `0${index + 1}`}
                </span>
              </a>
            );
          })}
        </nav>

        {/* Bottom CTA */}
        <div
          className="px-6 pb-10 pt-2"
          style={{
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.35s ease 440ms, transform 0.35s ease 440ms',
          }}
        >
          <a
            href="/contact"
            onClick={(e) => handleNavClick('/contact', e)}
            className="w-full flex items-center justify-center px-6 py-4 rounded-2xl font-mono text-xs font-semibold tracking-widest uppercase theme-cta-btn cursor-pointer"
          >
            Get Started
          </a>
          <p className="text-center text-[10px] text-white/20 tracking-widest uppercase font-mono mt-4">
            AI-Powered Workplace Intelligence
          </p>
        </div>
      </div>
    </>
  );
};
