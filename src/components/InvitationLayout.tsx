
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface InvitationLayoutProps {
  children: React.ReactNode;
  className?: string;
  backgroundImage?: string;
}

const InvitationLayout = ({ children, className, backgroundImage }: InvitationLayoutProps) => {
  return (
    <div className={cn(
      "min-h-screen relative overflow-hidden",
      "bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50",
      className
    )}>
      {/* Enhanced Floating Circles Animation - Mobile Optimized */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute rounded-full opacity-20 animate-float-down",
              i % 4 === 0 && "bg-gradient-to-r from-rose-300 to-pink-300 w-3 h-3 md:w-4 md:h-4",
              i % 4 === 1 && "bg-gradient-to-r from-pink-300 to-purple-300 w-2 h-2 md:w-3 md:h-3",
              i % 4 === 2 && "bg-gradient-to-r from-amber-300 to-yellow-300 w-4 h-4 md:w-5 md:h-5",
              i % 4 === 3 && "bg-gradient-to-r from-purple-300 to-rose-300 w-1.5 h-1.5 md:w-2 md:h-2"
            )}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: `${10 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23d4af37%22%20fill-opacity%3D%220.15%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-gentle-float"></div>
      </div>
      
      {/* Custom Background Image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
      
      {/* Enhanced Static Floating Elements - Mobile Responsive */}
      <div className="absolute top-4 left-4 md:top-10 md:left-10 w-10 h-10 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-rose-200 to-pink-200 opacity-30 animate-gentle-float"></div>
      <div className="absolute bottom-6 right-6 md:bottom-20 md:right-20 w-8 h-8 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-amber-200 to-yellow-200 opacity-40 animate-gentle-float delay-1000"></div>
      <div className="absolute top-1/3 right-4 md:right-10 w-6 h-6 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-purple-200 to-pink-200 opacity-25 animate-gentle-float delay-500"></div>
      <div className="absolute bottom-1/3 left-4 md:left-10 w-7 h-7 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-yellow-200 to-amber-200 opacity-35 animate-gentle-float delay-1500"></div>
    </div>
  );
};

export default InvitationLayout;
