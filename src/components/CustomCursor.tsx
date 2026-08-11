import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';
import { Sparkles } from 'lucide-react';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Raw mouse coordinates
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for outer ring and background gradient glow
  const springConfig = { damping: 28, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Slow spring for background ambient gradient spot
  const bgSpringConfig = { damping: 40, stiffness: 120 };
  const bgX = useSpring(mouseX, bgSpringConfig);
  const bgY = useSpring(mouseY, bgSpringConfig);

  useEffect(() => {
    // Check if touch device
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      if (!isVisible) setIsVisible(true);

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement | null;
      if (target) {
        const isInteractive = Boolean(
          target.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer')
        );
        setIsHovered(isInteractive);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  // If touch device or mouse not moved onto screen yet, hide cursor overlay
  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Dynamic Cursor-Following Linear & Radial Gradient Background Animation */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Cursor Radial Spotlight Glow */}
        <motion.div
          className="absolute w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 dark:opacity-40 blur-[120px]"
          style={{
            x: bgX,
            y: bgY,
            background: 'radial-gradient(circle, rgba(66, 133, 244, 0.25) 0%, rgba(155, 81, 224, 0.2) 35%, rgba(236, 72, 153, 0.15) 70%, transparent 100%)',
          }}
        />

        {/* Dynamic Horizontal & Vertical Gradient Beams tracking cursor */}
        <motion.div
          className="absolute inset-x-0 h-[1px] opacity-25 dark:opacity-20"
          style={{
            y: smoothY,
            background: 'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.6) 30%, rgba(168, 85, 247, 0.8) 50%, rgba(236, 72, 153, 0.6) 70%, transparent 100%)',
          }}
        />
        <motion.div
          className="absolute inset-y-0 w-[1px] opacity-25 dark:opacity-20"
          style={{
            x: smoothX,
            background: 'linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.6) 30%, rgba(168, 85, 247, 0.8) 50%, rgba(236, 72, 153, 0.6) 70%, transparent 100%)',
          }}
        />

        {/* Dynamic Linear Angle Gradient Sweep around cursor */}
        <motion.div
          className="absolute w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 dark:opacity-15 blur-[90px] animate-spin-slow"
          style={{
            x: bgX,
            y: bgY,
            background: 'conic-gradient(from 0deg, #4285F4, #9B51E0, #EC4899, #34A853, #4285F4)',
          }}
        />
      </div>

      {/* Custom Gemini Cursor Outer Glowing Aura */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen"
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          width: isHovered ? 56 : isClicking ? 28 : 42,
          height: isHovered ? 56 : isClicking ? 28 : 42,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      >
        <div className={`w-full h-full rounded-full border border-blue-400/60 bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-[2px] shadow-[0_0_20px_rgba(66,133,244,0.5)] transition-all duration-200 ${
          isHovered ? 'scale-110 border-purple-400/80 shadow-[0_0_30px_rgba(155,81,224,0.7)]' : ''
        }`} />
      </motion.div>

      {/* Inner Gemini Star / Sparkle Cursor Point */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white"
        style={{
          x: mouseX,
          y: mouseY,
        }}
        animate={{
          scale: isHovered ? 1.4 : isClicking ? 0.7 : 1,
          rotate: isHovered ? 45 : 0,
        }}
        transition={{ duration: 0.15 }}
      >
        {/* Gemini Sparkle Core Icon */}
        <div className="relative flex items-center justify-center">
          {/* Glowing core dot */}
          <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-400 via-indigo-300 to-pink-400 shadow-[0_0_12px_#3b82f6]" />
          
          {/* Gemini Sparkle overlay on hover or default subtle star */}
          <Sparkles className={`absolute w-5 h-5 text-blue-300 drop-shadow-[0_0_8px_rgba(168,85,247,0.9)] transition-opacity duration-200 ${
            isHovered ? 'opacity-100 animate-pulse' : 'opacity-70'
          }`} />
        </div>
      </motion.div>
    </>
  );
};
