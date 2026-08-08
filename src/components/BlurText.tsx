import React, { useRef, useEffect, useState } from 'react';
import { motion, TargetAndTransition } from 'framer-motion';

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: 'words' | 'letters';
  direction?: 'left' | 'right' | 'top' | 'bottom';
  threshold?: number;
  rootMargin?: string;
  animationFrom?: TargetAndTransition;
  animationTo?: TargetAndTransition;
  onAnimationComplete?: () => void;
}

export const BlurText: React.FC<BlurTextProps> = ({
  text = '',
  delay = 50,
  className = '',
  animateBy = 'words',
  direction = 'left',
  threshold = 0.15,
  rootMargin = '-30px',
  animationFrom,
  animationTo,
  onAnimationComplete,
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // Initial hidden state with smooth blur for desktop
  const defaultFrom: TargetAndTransition =
    direction === 'left'
      ? { opacity: 0, x: -30, y: 0, filter: isMobile ? 'none' : 'blur(10px)' }
      : direction === 'right'
      ? { opacity: 0, x: 30, y: 0, filter: isMobile ? 'none' : 'blur(10px)' }
      : direction === 'bottom'
      ? { opacity: 0, x: 0, y: 25, filter: isMobile ? 'none' : 'blur(10px)' }
      : { opacity: 0, x: 0, y: -25, filter: isMobile ? 'none' : 'blur(10px)' };

  const defaultTo: TargetAndTransition = {
    opacity: 1,
    x: 0,
    y: 0,
    filter: 'none',
  };

  return (
    <p
      ref={ref}
      className={`inline-flex flex-wrap items-center justify-center ${className}`}
    >
      {elements.map((element, index) => (
        <motion.span
          key={index}
          initial={animationFrom || defaultFrom}
          animate={inView ? animationTo || defaultTo : animationFrom || defaultFrom}
          transition={{
            duration: 0.5,
            delay: inView ? (index * delay) / 1000 : 0,
            ease: [0.22, 1, 0.36, 1],
          }}
          onAnimationComplete={
            index === elements.length - 1 ? onAnimationComplete : undefined
          }
          className="inline-block"
          style={{ willChange: 'transform, opacity' }}
        >
          {element === ' ' ? '\u00A0' : element}
          {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </p>
  );
};

export default BlurText;
