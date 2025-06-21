
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface InvitationLayoutProps {
  children: React.ReactNode;
  className?: string;
  backgroundImage?: string;
  page?: 'save-the-date' | 'full-invitation';
}

const InvitationLayout = ({ children, className, backgroundImage, page }: InvitationLayoutProps) => {
  const getBackgroundImage = () => {
    if (backgroundImage) return backgroundImage;
    
    if (page === 'save-the-date') {
      return '/lovable-uploads/8ed6f91f-3a61-4766-a9cd-b3cf98ac8379.png';
    } else if (page === 'full-invitation') {
      return '/lovable-uploads/14435b28-e5fa-44b3-99ea-60faf74aeeba.png';
    }
    
    return '';
  };

  const bgImage = getBackgroundImage();

  return (
    <div className={cn(
      "min-h-screen relative overflow-hidden",
      !bgImage && "bg-gradient-to-br from-rose-50/20 via-pink-50/15 to-amber-50/20",
      className
    )}>
      {/* Custom Background Image */}
      {bgImage && (
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${bgImage})` }}
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
