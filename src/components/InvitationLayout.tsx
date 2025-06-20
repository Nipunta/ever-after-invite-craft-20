
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
      "bg-gradient-to-br from-rose-50/20 via-pink-50/15 to-amber-50/20",
      className
    )}>
      {/* Custom Background Image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};

export default InvitationLayout;
