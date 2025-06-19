
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface EnvelopeLandingProps {
  onOpenEnvelope: () => void;
}

const EnvelopeLanding = ({ onOpenEnvelope }: EnvelopeLandingProps) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpenEnvelope();
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute rounded-full opacity-20 animate-float-particle",
              i % 3 === 0 && "bg-rose-300 w-2 h-2",
              i % 3 === 1 && "bg-pink-300 w-1.5 h-1.5", 
              i % 3 === 2 && "bg-amber-300 w-3 h-3"
            )}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="text-center animate-elegant-entrance">
        {/* Envelope Container */}
        <div className="relative mx-auto mb-8">
          <div className={cn(
            "relative w-80 h-52 sm:w-96 sm:h-64 md:w-[420px] md:h-72 mx-auto transition-all duration-1500",
            isOpening && "scale-110 rotate-1"
          )}>
            {/* Envelope Base */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg shadow-2xl border border-amber-300/50">
              {/* Decorative borders */}
              <div className="absolute inset-2 border-2 border-amber-300/30 rounded-md"></div>
              <div className="absolute inset-4 border border-amber-300/20 rounded-sm"></div>
            </div>

            {/* Envelope Flap */}
            <div className={cn(
              "absolute top-0 left-0 right-0 h-32 sm:h-40 md:h-44 bg-gradient-to-b from-amber-200 to-amber-300 transition-all duration-1500 origin-top rounded-t-lg shadow-lg border border-amber-300/50",
              isOpening ? "rotate-x-180 -translate-y-4 opacity-60" : "rotate-x-0"
            )}>
              {/* Wax Seal */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full shadow-lg border-4 border-rose-400/50 flex items-center justify-center animate-gentle-pulse">
                  <span className="text-white text-lg sm:text-xl md:text-2xl font-serif">S&M</span>
                </div>
              </div>
            </div>

            {/* Invitation Content Peek */}
            {isOpening && (
              <div className="absolute inset-6 bg-white rounded-md shadow-inner animate-fade-in opacity-80">
                <div className="p-4 text-center">
                  <div className="text-rose-600 text-sm md:text-base font-serif mb-2">Sarah & Michael</div>
                  <div className="text-xs text-gray-600">10th Anniversary</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Title and Description */}
        <div className="mb-8 animate-luxury-float delay-500">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800 mb-4 animate-luxury-title">
            You're Invited
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-2 animate-fade-in delay-700">
            Sarah & Michael's 10th Anniversary Celebration
          </p>
          <p className="text-sm sm:text-base text-gray-500 animate-fade-in delay-900">
            June 15, 2025 • The Plaza Hotel
          </p>
        </div>

        {/* Open Button */}
        <button
          onClick={handleOpenClick}
          disabled={isOpening}
          className={cn(
            "px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full shadow-xl transition-all duration-700 transform hover:scale-110 animate-luxury-glow font-medium text-lg sm:text-xl",
            isOpening ? "opacity-50 cursor-not-allowed scale-95" : "hover:shadow-2xl hover:rotate-1 active:scale-95"
          )}
        >
          {isOpening ? (
            <span className="flex items-center space-x-2">
              <span className="animate-pulse">Opening...</span>
              <span className="animate-floating-heart">💌</span>
            </span>
          ) : (
            <span className="flex items-center space-x-2">
              <span>Open Invitation</span>
              <span className="animate-heartbeat">💕</span>
            </span>
          )}
        </button>

        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-16 h-16 border-2 border-rose-300/30 rounded-full animate-slow-spin"></div>
        <div className="absolute bottom-10 right-10 w-12 h-12 border-2 border-pink-300/30 rounded-full animate-slow-spin-reverse"></div>
      </div>
    </div>
  );
};

export default EnvelopeLanding;
