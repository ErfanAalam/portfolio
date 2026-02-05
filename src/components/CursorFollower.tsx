'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorFollower() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Check if device is desktop (not mobile/tablet)
  useEffect(() => {
    const checkDesktop = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isLargeScreen = window.innerWidth >= 768; // md breakpoint
      setIsDesktop(!isTouchDevice && isLargeScreen);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    // Don't set up mouse events on mobile
    if (!isDesktop) return;
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Check if hovering over interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.style.cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousemove', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousemove', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [cursorX, cursorY, isDesktop]);

  // Don't render on mobile devices
  if (!isDesktop) {
    return null;
  }

  return (
    <>
      {/* Main cursor circle */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          x: '-50%',
          y: '-50%',
        }}
        animate={{
          scale: isVisible ? (isHovering ? 1.5 : 1) : 0,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          scale: { type: 'spring', stiffness: 500, damping: 25 },
          opacity: { duration: 0.2 },
        }}
      >
        <div 
          className={`rounded-full transition-all duration-300 ${
            isHovering 
              ? 'w-6 h-6 bg-[var(--color-primary)]/80 border-2 border-[var(--color-primary)]' 
              : 'w-5 h-5 bg-[var(--color-primary)]/60'
          }`}
        />
      </motion.div>
      
      {/* Outer ring for extra visibility */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
          x: '-50%',
          y: '-50%',
        }}
        animate={{
          scale: isVisible ? (isHovering ? 2 : 1.5) : 0,
          opacity: isVisible ? (isHovering ? 0.3 : 0.1) : 0,
        }}
        transition={{
          scale: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
      >
        <div className="w-3 h-3 rounded-full border border-[var(--color-primary)]/40" />
      </motion.div>
    </>
  );
}
