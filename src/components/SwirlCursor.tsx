
import React, { useEffect, useState } from 'react';

const SwirlCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                            window.innerWidth <= 768 ||
                            'ontouchstart' in window;
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Only add mouse tracking on non-mobile devices
    if (!isMobile) {
      let trailId = 0;

      const handleMouseMove = (e: MouseEvent) => {
        setMousePos({ x: e.clientX, y: e.clientY });
        
        // Add new trail point with reduced frequency for better performance
        setTrails(prev => {
          const newTrail = { x: e.clientX, y: e.clientY, id: trailId++ };
          const updatedTrails = [newTrail, ...prev].slice(0, 6); // Reduced trail length
          return updatedTrails;
        });
      };

      // Throttle mouse move events for better performance
      let timeoutId: number;
      const throttledMouseMove = (e: MouseEvent) => {
        if (timeoutId) return;
        timeoutId = window.setTimeout(() => {
          handleMouseMove(e);
          timeoutId = 0;
        }, 16); // ~60fps
      };

      window.addEventListener('mousemove', throttledMouseMove);

      // Cleanup old trails more frequently
      const trailCleanup = setInterval(() => {
        setTrails(prev => prev.slice(0, 4));
      }, 100);

      return () => {
        window.removeEventListener('mousemove', throttledMouseMove);
        window.removeEventListener('resize', checkMobile);
        clearInterval(trailCleanup);
        if (timeoutId) clearTimeout(timeoutId);
      };
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  // Don't render cursor effects on mobile devices
  if (isMobile) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main cursor */}
      <div
        className="absolute w-4 h-4 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full opacity-70 transition-all duration-100 ease-out"
        style={{
          left: mousePos.x - 8,
          top: mousePos.y - 8,
          transform: 'scale(1)',
        }}
      />
      
      {/* Trail effects */}
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="absolute rounded-full transition-all duration-300 ease-out"
          style={{
            left: trail.x - 4,
            top: trail.y - 4,
            width: Math.max(2, 8 - index * 1.5),
            height: Math.max(2, 8 - index * 1.5),
            backgroundColor: index % 2 === 0 ? 'rgba(244, 63, 94, 0.4)' : 'rgba(236, 72, 153, 0.4)',
            opacity: Math.max(0, 0.7 - index * 0.15),
            transform: `scale(${Math.max(0.3, 1 - index * 0.2)}) rotate(${index * 60}deg)`,
          }}
        />
      ))}
      
      {/* Swirl particles - reduced count for performance */}
      {trails.slice(0, 3).map((trail, index) => (
        <div
          key={`swirl-${trail.id}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: trail.x + Math.cos(Date.now() * 0.002 + index) * 15,
            top: trail.y + Math.sin(Date.now() * 0.002 + index) * 15,
            backgroundColor: index % 2 === 0 ? 'rgba(251, 191, 36, 0.5)' : 'rgba(244, 63, 94, 0.5)',
            opacity: Math.max(0, 0.6 - index * 0.2),
            transition: 'all 0.3s ease-out',
          }}
        />
      ))}
    </div>
  );
};

export default SwirlCursor;
