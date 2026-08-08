import React, { useRef, useEffect, useState } from 'react';

interface VideoHeroProps {
  videoSrc: string;
  overlayOpacity?: number;
  videoTransform?: string;
  videoPosition?: string;
  children: React.ReactNode;
}

export const VideoHero: React.FC<VideoHeroProps> = ({
  videoSrc,
  overlayOpacity = 0.35,
  videoTransform,
  videoPosition = 'center center',
  children,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [srcAssigned, setSrcAssigned] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSrcAssigned(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!srcAssigned) return;
    const vid = videoRef.current;
    if (!vid) return;
    const tryPlay = () => vid.play().catch(() => {});
    vid.addEventListener('canplay', tryPlay, { once: true });
    vid.load();
  }, [srcAssigned]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden flex items-center justify-center bg-[#0a0608]"
      style={{ minHeight: '100svh' }}
    >
      {/* Skeleton shimmer */}
      <div
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-700 skeleton-shimmer"
        style={{ opacity: isReady ? 0 : 1 }}
        aria-hidden="true"
      />

      {/* Video */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        onCanPlay={() => setIsReady(true)}
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none transition-opacity duration-700"
        style={{
          opacity: isReady ? 1 : 0,
          objectPosition: videoPosition,
          transform: videoTransform,
        }}
        aria-hidden="true"
      >
        {srcAssigned && <source src={videoSrc} type="video/mp4" />}
      </video>

      {/* Dark overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity})` }}
      />

      {/* Content */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center px-5 sm:px-6 md:px-8">
        {children}
      </div>
    </section>
  );
};

export default VideoHero;
