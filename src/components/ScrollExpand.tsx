import React, { useRef, useEffect } from 'react';

interface ScrollExpandProps {
  children: React.ReactNode;
  className?: string;
  minScale?: number;
  maxScale?: number;
  minWidth?: number; // percentage, e.g. 88
  maxWidth?: number; // percentage, e.g. 100
  minRadius?: number; // px, e.g. 28
  maxRadius?: number; // px, e.g. 16
}

const clamp = (min: number, max: number, val: number) =>
  Math.min(Math.max(val, min), max);

const lerp = (start: number, end: number, factor: number) =>
  start + (end - start) * factor;

export const ScrollExpand: React.FC<ScrollExpandProps> = ({
  children,
  className = '',
  minScale = 0.94,
  maxScale = 1.04,
  minWidth = 88,
  maxWidth = 100,
  minRadius = 28,
  maxRadius = 16,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  const animState = useRef({
    currentScale: minScale,
    targetScale: minScale,
    currentWidth: minWidth,
    targetWidth: minWidth,
    currentRadius: minRadius,
    targetRadius: minRadius,
  });

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress: 0 when entering bottom, 1 when centered
      const totalScrollable = windowHeight + rect.height;
      const currentScroll = windowHeight - rect.top;
      const rawProgress = currentScroll / totalScrollable;

      // Smooth symmetric in/out curve
      const progress = clamp(0, 1, (rawProgress - 0.15) / 0.55);

      animState.current.targetScale = minScale + (maxScale - minScale) * progress;
      animState.current.targetWidth = minWidth + (maxWidth - minWidth) * progress;
      animState.current.targetRadius = minRadius + (maxRadius - minRadius) * progress;
    };

    const render = () => {
      handleScroll();

      const state = animState.current;
      state.currentScale = lerp(state.currentScale, state.targetScale, 0.1);
      state.currentWidth = lerp(state.currentWidth, state.targetWidth, 0.1);
      state.currentRadius = lerp(state.currentRadius, state.targetRadius, 0.1);

      if (cardRef.current) {
        cardRef.current.style.transform = `scale3d(${state.currentScale.toFixed(4)}, ${state.currentScale.toFixed(4)}, 1)`;
        cardRef.current.style.width = `${state.currentWidth.toFixed(2)}%`;
        cardRef.current.style.borderRadius = `${state.currentRadius.toFixed(1)}px`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [minScale, maxScale, minWidth, maxWidth, minRadius, maxRadius]);

  return (
    <div
      ref={containerRef}
      className={`w-full flex items-center justify-center relative ${className}`}
    >
      <div
        ref={cardRef}
        className="will-change-transform transition-[border-radius] duration-150 ease-out"
        style={{
          width: `${minWidth}%`,
          transform: `scale3d(${minScale}, ${minScale}, 1)`,
          borderRadius: `${minRadius}px`,
          transformOrigin: 'center center',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ScrollExpand;
