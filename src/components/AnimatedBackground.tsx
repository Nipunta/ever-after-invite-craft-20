
import React from 'react';

interface AnimatedBackgroundProps {
  variant?: 'subtle' | 'romantic' | 'elegant';
  className?: string;
}

const AnimatedBackground = ({ variant = 'subtle', className = '' }: AnimatedBackgroundProps) => {
  const getBackgroundPattern = () => {
    switch (variant) {
      case 'romantic':
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-rose-100/40 via-pink-50/30 to-amber-50/40 animate-gentle-pulse" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(244,63,94,0.1)_0%,transparent_50%)] animate-gentle-float" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(251,191,36,0.1)_0%,transparent_50%)] animate-gentle-float delay-1000" />
          </>
        );
      case 'elegant':
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50/20 via-white/10 to-rose-50/20 animate-slow-breathe" />
            <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(255,255,255,0.1)_0deg,rgba(244,63,94,0.05)_120deg,rgba(251,191,36,0.05)_240deg,rgba(255,255,255,0.1)_360deg)] animate-slow-spin" />
          </>
        );
      default:
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-rose-50/10 animate-gentle-pulse" />
        );
    }
  };

  return (
    <div className={`fixed inset-0 pointer-events-none overflow-hidden ${className}`}>
      {getBackgroundPattern()}
      
      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-rose-200/20 rounded-full animate-slow-spin" />
      <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-amber-200/20 rounded-full animate-slow-spin-reverse" />
      <div className="absolute top-1/2 left-1/6 w-16 h-16 border border-pink-200/20 rounded-full animate-gentle-float" />
      <div className="absolute bottom-1/4 right-1/3 w-20 h-20 border border-purple-200/20 rounded-full animate-gentle-float delay-1000" />
    </div>
  );
};

export default AnimatedBackground;
