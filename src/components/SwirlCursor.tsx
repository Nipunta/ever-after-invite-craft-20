
import React, { useEffect, useState } from 'react';

const SwirlCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Add new trail point
      setTrails(prev => {
        const newTrail = { x: e.clientX, y: e.clientY, id: trailId++ };
        const updatedTrails = [newTrail, ...prev].slice(0, 8); // Keep only last 8 points
        return updatedTrails;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup old trails
    const trailCleanup = setInterval(() => {
      setTrails(prev => prev.slice(0, 6));
    }, 100);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(trailCleanup);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 hidden sm:block">
      {/* Main cursor */}
      <div
        className="absolute w-4 h-4 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full opacity-60 transition-all duration-75 ease-out"
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
            width: Math.max(2, 8 - index),
            height: Math.max(2, 8 - index),
            backgroundColor: index % 2 === 0 ? 'rgba(244, 63, 94, 0.3)' : 'rgba(236, 72, 153, 0.3)',
            opacity: Math.max(0, 0.6 - index * 0.1),
            transform: `scale(${Math.max(0.3, 1 - index * 0.15)}) rotate(${index * 45}deg)`,
          }}
        />
      ))}
      
      {/* Swirl particles */}
      {trails.slice(0, 4).map((trail, index) => (
        <div
          key={`swirl-${trail.id}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: trail.x + Math.cos(Date.now() * 0.001 + index) * 20,
            top: trail.y + Math.sin(Date.now() * 0.001 + index) * 20,
            backgroundColor: index % 2 === 0 ? 'rgba(251, 191, 36, 0.4)' : 'rgba(244, 63, 94, 0.4)',
            opacity: Math.max(0, 0.5 - index * 0.15),
            transition: 'all 0.3s ease-out',
          }}
        />
      ))}
    </div>
  );
};

export default SwirlCursor;
