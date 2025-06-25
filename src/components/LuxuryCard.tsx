
import React from 'react';
import { cn } from '@/lib/utils';

interface LuxuryCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'accent';
  hover?: boolean;
  delay?: number;
}

const LuxuryCard = ({ 
  children, 
  className = '', 
  variant = 'primary', 
  hover = true, 
  delay = 0 
}: LuxuryCardProps) => {
  const baseClasses = "relative overflow-hidden rounded-3xl backdrop-blur-xl border transition-all duration-700 transform-gpu";
  
  const variantClasses = {
    primary: "bg-gradient-to-br from-white/95 to-rose-50/80 border-white/60 shadow-2xl",
    secondary: "bg-gradient-to-br from-white/90 to-amber-50/70 border-amber-200/50 shadow-xl",
    accent: "bg-gradient-to-br from-rose-50/95 to-pink-50/80 border-rose-200/60 shadow-xl"
  };

  const hoverClasses = hover 
    ? "hover:scale-105 hover:shadow-3xl hover:-rotate-1 hover:border-rose-300/70" 
    : "";

  return (
    <div 
      className={cn(baseClasses, variantClasses[variant], hoverClasses, className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Luxury border gradient */}
      <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-br from-rose-400/30 via-pink-300/20 to-amber-400/30">
        <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-white/95 to-rose-50/80" />
      </div>
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      
      {/* Corner accents */}
      <div className="absolute top-3 left-3 w-2 h-2 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full opacity-60" />
      <div className="absolute top-3 right-3 w-2 h-2 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full opacity-60" />
      <div className="absolute bottom-3 left-3 w-2 h-2 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-60" />
      <div className="absolute bottom-3 right-3 w-2 h-2 bg-gradient-to-br from-rose-400 to-amber-500 rounded-full opacity-60" />
      
      {/* Content */}
      <div className="relative z-10 p-6 md:p-8">
        {children}
      </div>
    </div>
  );
};

export default LuxuryCard;
