import React, { useEffect, useState, useRef } from 'react';

export const MouseReflection: React.FC = () => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const [smoothPos, setSmoothPos] = useState<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);
  const targetRef = useRef<{ x: number; y: number }>({ x: -1000, y: -1000 });
  const animFrameRef = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on fine pointer (mouse)
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check if hovering clickable element
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = Boolean(
          target.closest('button, a, input, select, textarea, [role="button"], .cursor-pointer')
        );
        setIsHoveringClickable(isClickable);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // Smooth lerp loop for the organic ambient reflection glide
    const updateSmoothPosition = () => {
      setSmoothPos((prev) => {
        const dx = targetRef.current.x - prev.x;
        const dy = targetRef.current.y - prev.y;
        return {
          x: prev.x + dx * 0.14,
          y: prev.y + dy * 0.14
        };
      });
      animFrameRef.current = requestAnimationFrame(updateSmoothPosition);
    };

    animFrameRef.current = requestAnimationFrame(updateSmoothPosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      {/* 1. Primary Broad Ambient Reflection (Silky luminous spotlight) */}
      <div
        className="absolute inset-0 transition-transform duration-75 ease-out"
        style={{
          background: `radial-gradient(750px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 255, 255, 0.04), transparent 65%)`
        }}
      />

      {/* 2. Secondary Smooth Lagging Reflection (Creates depth and glass-like refraction) */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(350px circle at ${smoothPos.x}px ${smoothPos.y}px, rgba(255, 255, 255, 0.035), transparent 70%)`
        }}
      />

      {/* 3. Sleek Floating Reflection Dot & Ring */}
      <div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 transition-all duration-150 ease-out"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
          width: isHoveringClickable ? '48px' : '28px',
          height: isHoveringClickable ? '48px' : '28px',
          backgroundColor: isHoveringClickable ? 'rgba(255, 255, 255, 0.06)' : 'rgba(255, 255, 255, 0.02)',
          boxShadow: isHoveringClickable 
            ? '0 0 24px 2px rgba(255, 255, 255, 0.12), inset 0 0 8px rgba(255, 255, 255, 0.1)' 
            : '0 0 16px rgba(255, 255, 255, 0.05)'
        }}
      />

      {/* 4. Center Specular Micro Dot */}
      <div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-white/70 shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        style={{
          transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`,
          opacity: isHoveringClickable ? 0.3 : 0.8
        }}
      />
    </div>
  );
};
