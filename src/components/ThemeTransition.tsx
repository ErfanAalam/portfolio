'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface ThemeTransitionProps {
  isTransitioning: boolean;
  newTheme: 'light' | 'dark';
  onComplete: () => void;
}

export function ThemeTransition({ isTransitioning, newTheme, onComplete }: ThemeTransitionProps) {
  const [size, setSize] = useState(2000);

  // Calculate diagonal distance to cover entire screen from top-right corner
  useEffect(() => {
    const calculateSize = () => {
      if (typeof window === 'undefined') return 2000;
      const width = window.innerWidth;
      const height = window.innerHeight;
      // Use diagonal * 2.5 to ensure full coverage
      return Math.sqrt(width * width + height * height) * 2.5;
    };

    setSize(calculateSize());
    const handleResize = () => setSize(calculateSize());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isTransitioning && (
        <motion.div
          initial={{ 
            scale: 0,
            opacity: 0,
          }}
          animate={{ 
            scale: 1,
            opacity: [0, 0.4, 0.8, 1, 1],
          }}
          exit={{ 
            opacity: [1, 0.5, 0],
            transition: {
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1],
            }
          }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
            opacity: {
              times: [0, 0.2, 0.5, 0.7, 1],
              duration: 0.8,
            },
            scale: {
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
            }
          }}
          className="fixed top-0 right-0 z-[9999] pointer-events-none"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: '50%',
            background: newTheme === 'dark' 
              ? 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.99) 35%, rgba(0,0,0,1) 100%)'
              : 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.99) 35%, rgba(255,255,255,1) 100%)',
            transformOrigin: 'top right',
            marginTop: `-${size / 2}px`,
            marginRight: `-${size / 2}px`,
            filter: 'blur(0px)',
          }}
          onAnimationComplete={() => {
            // Small delay to ensure smooth transition
            setTimeout(() => {
              onComplete();
            }, 50);
          }}
        />
      )}
    </AnimatePresence>
  );
}
