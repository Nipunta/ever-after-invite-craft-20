
import React from 'react';
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
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23d4af37" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      {/* Custom Background Image */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-gradient-to-r from-rose-200 to-pink-200 opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 rounded-full bg-gradient-to-r from-amber-200 to-yellow-200 opacity-40 animate-bounce"></div>
      <div className="absolute top-1/3 right-10 w-12 h-12 rounded-full bg-gradient-to-r from-purple-200 to-pink-200 opacity-25 animate-pulse delay-300"></div>
    </div>
  );
};

export default InvitationLayout;
