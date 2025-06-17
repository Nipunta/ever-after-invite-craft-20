
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface InvitationLayoutProps {
  children: React.ReactNode;
  className?: string;
  backgroundImage?: string;
}

const InvitationLayout = ({ children, className, backgroundImage }: InvitationLayoutProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={cn(
      "min-h-screen relative overflow-hidden cursor-none",
      "bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50",
      className
    )}>
      {/* Custom Cursor */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full pointer-events-none z-50 mix-blend-difference opacity-70 animate-pulse-luxury"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transition: 'all 0.1s ease-out'
        }}
      />
      
      {/* Floating Circles Animation */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute rounded-full opacity-20 animate-float-down",
              i % 4 === 0 && "bg-gradient-to-r from-rose-300 to-pink-300 w-4 h-4",
              i % 4 === 1 && "bg-gradient-to-r from-pink-300 to-purple-300 w-3 h-3",
              i % 4 === 2 && "bg-gradient-to-r from-amber-300 to-yellow-300 w-5 h-5",
              i % 4 === 3 && "bg-gradient-to-r from-purple-300 to-rose-300 w-2 h-2"
            )}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23d4af37%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      {/* Custom Background Image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
      
      {/* Static Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-gradient-to-r from-rose-200 to-pink-200 opacity-30 animate-gentle-float"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 rounded-full bg-gradient-to-r from-amber-200 to-yellow-200 opacity-40 animate-gentle-float delay-1000"></div>
      <div className="absolute top-1/3 right-10 w-12 h-12 rounded-full bg-gradient-to-r from-purple-200 to-pink-200 opacity-25 animate-gentle-float delay-500"></div>
    </div>
  );
};

export default InvitationLayout;
