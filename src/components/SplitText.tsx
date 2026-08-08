import React, { useRef, useEffect, useState } from 'react';
import { motion, TargetAndTransition } from 'framer-motion';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  animationFrom?: TargetAndTransition;
  animationTo?: TargetAndTransition;
  easing?: [number, number, number, number] | any;
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'center' | 'right';
  onLetterAnimationComplete?: () => void;
}

export const SplitText: React.FC<SplitTextProps> = ({
  text = '',
  className = '',
  delay = 14,
  duration = 0.45,
  animationFrom,
  animationTo,
  easing = [0.22, 1, 0.36, 1],
  threshold = 0.2,
  rootMargin = '0px',
  textAlign = 'center',
  onLetterAnimationComplete,
}) => {
  const words = text.split(' ');
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

  const defaultFrom: TargetAndTransition = {
    opacity: 0,
    transform: 'translate3d(0, 20px, 0)',
    filter: isMobile ? 'none' : 'blur(8px)',
  };

  const defaultTo: TargetAndTransition = {
    opacity: 1,
    transform: 'translate3d(0, 0, 0)',
    filter: 'none',
  };

  return (
    <p
      ref={ref}
      className={`inline-flex flex-wrap ${
        textAlign === 'center'
          ? 'justify-center text-center'
          : textAlign === 'right'
          ? 'justify-end text-right'
          : 'justify-start text-left'
      } ${className}`}
    >
      {words.map((word, wordIndex) => {
        return (
          <motion.span
            key={wordIndex}
            initial={animationFrom || defaultFrom}
            animate={inView ? animationTo || defaultTo : animationFrom || defaultFrom}
            transition={{
              duration,
              delay: inView
                ? (wordIndex * delay) / 1000
                : ((words.length - 1 - wordIndex) * (delay * 0.4)) / 1000,
              ease: easing,
            }}
            onAnimationComplete={
              wordIndex === words.length - 1
                ? onLetterAnimationComplete
                : undefined
            }
            className="inline-block whitespace-nowrap mr-[0.28em] last:mr-0"
            style={{ willChange: 'transform, opacity, filter' }}
          >
            {word}
          </motion.span>
        );
      })}
    </p>
  );
};

export default SplitText;
