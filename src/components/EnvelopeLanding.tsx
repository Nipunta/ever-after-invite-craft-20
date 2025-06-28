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
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-gradient-to-br from-rose-100 via-pink-50 via-amber-50 to-orange-100">
      {/* Enhanced floating particles with more variety */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute rounded-full opacity-40 animate-float-particle",
              i % 5 === 0 && "bg-gradient-to-br from-rose-400 to-pink-500 w-3 h-3",
              i % 5 === 1 && "bg-gradient-to-br from-pink-400 to-purple-500 w-2 h-2", 
              i % 5 === 2 && "bg-gradient-to-br from-amber-400 to-yellow-500 w-4 h-4",
              i % 5 === 3 && "bg-gradient-to-br from-purple-400 to-rose-500 w-2.5 h-2.5",
              i % 5 === 4 && "bg-gradient-to-br from-orange-400 to-red-500 w-1.5 h-1.5"
            )}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Elegant background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23d4af37%22%20fill-opacity%3D%220.2%22%3E%3Cpath%20d%3D%22M30%2030c0-8.284-6.716-15-15-15s-15%206.716-15%2015%206.716%2015%2015%2015%2015-6.716%2015-15zm15%200c0-8.284-6.716-15-15-15s-15%206.716-15%2015%206.716%2015%2015%2015%2015-6.716%2015-15z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-gentle-float"></div>
      </div>

      <div className="text-center animate-elegant-entrance relative z-10">
        {/* Enhanced Envelope Container */}
        <div className="relative mx-auto mb-8 group">
          <div className={cn(
            "relative w-80 h-52 sm:w-96 sm:h-64 md:w-[450px] md:h-80 mx-auto transition-all duration-1500 transform-gpu",
            isOpening && "scale-110 rotate-1"
          )}>
            {/* Envelope shadow for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-300/30 to-amber-500/50 rounded-lg blur-xl transform translate-y-4 scale-105"></div>
            
            {/* Envelope Base with luxury gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200 rounded-lg shadow-2xl border-2 border-amber-300/60 transform transition-all duration-700 hover:shadow-3xl">
              {/* Inner golden border */}
              <div className="absolute inset-3 border-2 border-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 rounded-md opacity-60"></div>
              <div className="absolute inset-5 border border-amber-300/40 rounded-sm"></div>
              
              {/* Decorative corner elements */}
              <div className="absolute top-3 left-3 w-6 h-6 bg-gradient-to-br from-amber-300 to-yellow-400 rounded-full opacity-70 animate-gentle-pulse"></div>
              <div className="absolute top-3 right-3 w-6 h-6 bg-gradient-to-br from-amber-300 to-yellow-400 rounded-full opacity-70 animate-gentle-pulse delay-500"></div>
              <div className="absolute bottom-3 left-3 w-6 h-6 bg-gradient-to-br from-amber-300 to-yellow-400 rounded-full opacity-70 animate-gentle-pulse delay-1000"></div>
              <div className="absolute bottom-3 right-3 w-6 h-6 bg-gradient-to-br from-amber-300 to-yellow-400 rounded-full opacity-70 animate-gentle-pulse delay-1500"></div>

              {/* Elegant texture overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent rounded-lg"></div>
            </div>

            {/* Enhanced Envelope Flap with luxury styling */}
            <div className={cn(
              "absolute top-0 left-0 right-0 h-36 sm:h-44 md:h-48 bg-gradient-to-b from-amber-200 via-amber-300 to-amber-400 transition-all duration-1500 origin-top rounded-t-lg shadow-2xl border-2 border-amber-300/60 overflow-hidden",
              isOpening ? "rotate-x-180 -translate-y-6 opacity-50 scale-105" : "rotate-x-0"
            )}>
              {/* Flap texture and shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-amber-500/20"></div>
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              
              {/* Enhanced Wax Seal */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {/* Wax seal glow effect */}
                <div className="absolute inset-0 w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-br from-rose-400 to-pink-600 rounded-full blur-lg opacity-60 animate-pulse-luxury"></div>
                
                {/* Main wax seal */}
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 bg-gradient-to-br from-rose-500 via-pink-600 to-rose-700 rounded-full shadow-2xl border-4 border-rose-400/50 flex items-center justify-center animate-gentle-pulse transform hover:scale-110 transition-all duration-500">
                  {/* Inner seal design */}
                  <div className="absolute inset-2 border-2 border-white/30 rounded-full"></div>
                  <span className="text-white text-lg sm:text-xl md:text-2xl font-playfair font-bold tracking-wider drop-shadow-lg">S&A</span>
                  
                  {/* Seal shine effect */}
                  <div className="absolute top-1 left-1 w-3 h-3 bg-white/40 rounded-full blur-sm"></div>
                </div>
              </div>

              {/* Decorative flap patterns */}
              <div className="absolute top-2 left-4 w-8 h-1 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent rounded-full"></div>
              <div className="absolute top-2 right-4 w-8 h-1 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent rounded-full"></div>
            </div>

            {/* Enhanced Invitation Content Peek */}
            {isOpening && (
              <div className="absolute inset-8 bg-gradient-to-br from-white via-rose-50 to-pink-50 rounded-lg shadow-inner animate-fade-in opacity-90 border border-rose-200/50">
                <div className="p-6 text-center h-full flex flex-col justify-center">
                  <div className="text-rose-600 text-lg md:text-xl font-playfair mb-3 animate-luxury-title">Sarah & Alex</div>
                  <div className="text-sm text-gray-600 animate-fade-in delay-300">Wedding Ceremony</div>
                  <div className="text-xs text-gray-500 mt-2 animate-fade-in delay-500">June 15, 2025</div>
                  <div className="mt-3 animate-floating-heart">💕</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Dear Guest with Typing Animation */}
        <div className="mb-8 animate-fade-in-stagger delay-300">
          <p className="dear-guest-typing">
            Dear Guest
          </p>
        </div>

        {/* Enhanced Title and Description */}
        <div className="mb-10 animate-luxury-float delay-500 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 mb-6 animate-luxury-title tracking-wide font-black">
            You're Invited
          </h1>
          <div className="space-y-3">
            <p className="text-lg md:text-xl text-gray-800 mb-3 animate-fade-in delay-700 font-bold font-playfair italic">
              Sarah & Alex's Wedding Ceremony
            </p>
            <div className="flex items-center justify-center space-x-2 animate-fade-in delay-900">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-rose-400"></div>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 font-semibold font-playfair">
                June 15, 2025 • The Plaza Hotel
              </p>
              <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-rose-400"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Open Button */}
        <button
          onClick={handleOpenClick}
          disabled={isOpening}
          className={cn(
            "relative px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-white rounded-full shadow-2xl transition-all duration-700 transform font-bold text-base sm:text-lg lg:text-xl tracking-wide overflow-hidden group",
            isOpening ? "opacity-60 cursor-not-allowed scale-95" : "hover:scale-110 hover:shadow-3xl hover:rotate-1 active:scale-95 animate-luxury-glow"
          )}
        >
          {/* Button glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
          
          {/* Button content */}
          <div className="relative z-10">
            {isOpening ? (
              <span className="flex items-center space-x-3">
                <span className="animate-pulse font-playfair">Opening</span>
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-white rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-white rounded-full animate-bounce delay-100"></div>
                  <div className="w-1 h-1 bg-white rounded-full animate-bounce delay-200"></div>
                </div>
                <span className="animate-floating-heart text-2xl">💌</span>
              </span>
            ) : (
              <span className="flex items-center space-x-3">
                <span className="font-playfair">Open Invitation</span>
                <span className="animate-heartbeat text-2xl">💕</span>
              </span>
            )}
          </div>

          {/* Button shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transform translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
        </button>

        {/* Enhanced decorative elements */}
        <div className="absolute top-10 left-5 md:left-10 w-20 h-20 border-2 border-rose-300/40 rounded-full animate-slow-spin">
          <div className="absolute inset-2 border border-pink-300/30 rounded-full"></div>
        </div>
        <div className="absolute bottom-10 right-5 md:right-10 w-16 h-16 border-2 border-purple-300/40 rounded-full animate-slow-spin-reverse">
          <div className="absolute inset-2 border border-rose-300/30 rounded-full"></div>
        </div>
        <div className="absolute top-1/3 right-5 md:right-20 w-12 h-12 border-2 border-amber-300/40 rounded-full animate-gentle-float"></div>
        <div className="absolute bottom-1/3 left-5 md:left-20 w-14 h-14 border-2 border-pink-300/40 rounded-full animate-gentle-float delay-1000"></div>
      </div>
    </div>
  );
};

export default EnvelopeLanding;