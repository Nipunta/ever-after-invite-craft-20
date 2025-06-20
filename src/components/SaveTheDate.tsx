
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface SaveTheDateProps {
  onNavigateToInvitation?: () => void;
}

const SaveTheDate = ({ onNavigateToInvitation }: SaveTheDateProps) => {
  const defaultGuestName = "John & Emily";

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-6 pt-20 md:pt-24 relative overflow-hidden">
      {/* Enhanced floating particles animation with golden sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Golden sparkles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className={cn(
              "absolute animate-float-particle opacity-40",
              i % 3 === 0 && "w-1 h-1 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full animate-twinkle",
              i % 3 === 1 && "w-1.5 h-1.5 bg-gradient-to-r from-amber-400 to-yellow-300 transform rotate-45 animate-shimmer",
              i % 3 === 2 && "w-0.5 h-0.5 bg-gradient-to-r from-yellow-300 to-amber-300 rounded-full animate-gentle-pulse"
            )}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Romantic particles */}
        <div className="absolute top-20 left-10 md:left-20 w-2 h-2 bg-rose-300 rounded-full animate-float-particle opacity-60"></div>
        <div className="absolute top-40 right-16 md:right-32 w-1 h-1 bg-pink-400 rounded-full animate-float-particle-delayed opacity-70" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-8 md:left-16 w-3 h-3 bg-amber-300 rounded-full animate-float-particle opacity-50" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-60 left-1/3 w-1.5 h-1.5 bg-rose-400 rounded-full animate-float-particle-delayed opacity-60" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 right-10 md:right-20 w-2 h-2 bg-pink-300 rounded-full animate-float-particle opacity-70" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto w-full">
        {/* Enhanced Guest Greeting with luxury background */}
        <div className="text-center mb-6 md:mb-8 animate-fade-in">
          <div className="bg-gradient-to-br from-white/95 via-rose-50/90 to-pink-50/95 backdrop-blur-3xl rounded-3xl p-6 md:p-8 shadow-2xl border-2 border-white/60 max-w-lg mx-auto relative overflow-hidden transform hover:scale-105 transition-all duration-700 animate-glass-morph">
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-10" 
                 style={{
                   backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f43f5e' fill-opacity='0.2'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v60c-16.569 0-30-13.431-30-30zM0 30c0 16.569 13.431 30 30 30V0C13.431 0 0 13.431 0 30z'/%3E%3C/g%3E%3C/svg%3E")`
                 }}>
            </div>
            
            {/* Corner decorations */}
            <div className="absolute top-3 left-3 w-6 h-6 border-l-2 border-t-2 border-rose-300/60 rounded-tl-xl"></div>
            <div className="absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 border-pink-300/60 rounded-tr-xl"></div>
            <div className="absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 border-rose-300/60 rounded-bl-xl"></div>
            <div className="absolute bottom-3 right-3 w-6 h-6 border-r-2 border-b-2 border-pink-300/60 rounded-br-xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-serif text-gray-700 mb-2">
                Dear {defaultGuestName},
              </h3>
              <p className="text-sm md:text-base text-gray-600 font-light">
                You are cordially invited to celebrate with us
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text content with enhanced cards */}
          <div className="text-center lg:text-left space-y-6 md:space-y-8 animate-slide-in-left order-2 lg:order-1">
            {/* Enhanced Header Card */}
            <div className="space-y-3 md:space-y-4 bg-gradient-to-br from-white/90 via-rose-50/80 to-pink-50/90 backdrop-blur-3xl rounded-3xl p-6 md:p-8 shadow-2xl border-2 border-white/60 relative overflow-hidden transform hover:scale-105 transition-all duration-700 animate-glass-morph">
              {/* Elegant pattern overlay */}
              <div className="absolute inset-0 opacity-8" 
                   style={{
                     backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f43f5e' fill-opacity='0.12'%3E%3Cpath d='M50 50c0-27.614 22.386-50 50-50v100c-27.614 0-50-22.386-50-50zM0 50c0 27.614 22.386 50 50 50V0C22.386 0 0 22.386 0 50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                   }}>
              </div>
              
              <div className="relative z-10">
                <div className="inline-block">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-500 to-amber-500 animate-shimmer-text">
                    Save
                  </h1>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-pink-500 to-rose-600 animate-shimmer-text delay-200">
                    The Date
                  </h1>
                </div>
              </div>
            </div>

            {/* Enhanced Couple Names Card */}
            <div className="space-y-2 animate-elegant-fade-in delay-400 bg-gradient-to-br from-white/95 via-amber-50/80 to-yellow-50/90 backdrop-blur-3xl rounded-3xl p-6 md:p-8 shadow-2xl border-2 border-white/60 relative overflow-hidden transform hover:scale-105 transition-all duration-700">
              {/* Golden pattern */}
              <div className="absolute inset-0 opacity-10" 
                   style={{
                     backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4af37' fill-opacity='0.2'%3E%3Cpath d='M40 40c0-22.091 17.909-40 40-40v80c-22.091 0-40-17.909-40-40zM0 40c0 22.091 17.909 40 40 40V0C17.909 0 0 17.909 0 40z'/%3E%3C/g%3E%3C/svg%3E")`
                   }}>
              </div>
              
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-700 animate-typewriter-luxury">
                  Sarah & Michael
                </h2>
                <div className="w-24 h-px bg-gradient-to-r from-rose-400 to-pink-400 mx-auto lg:mx-0 animate-expand-line delay-500"></div>
              </div>
            </div>

            {/* Enhanced Anniversary Details Card */}
            <div className="space-y-6 animate-luxury-float delay-600">
              <div className="bg-gradient-to-br from-white/95 via-pink-50/85 to-purple-50/90 backdrop-blur-3xl rounded-3xl p-6 md:p-8 shadow-2xl border-2 border-white/60 transform hover:scale-105 transition-all duration-700 animate-glass-morph relative overflow-hidden">
                {/* Romantic pattern */}
                <div className="absolute inset-0 opacity-8" 
                     style={{
                       backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ec4899' fill-opacity='0.15'%3E%3Cpath d='M60 60c0-33.137 26.863-60 60-60v120c-33.137 0-60-26.863-60-60zM0 60c0 33.137 26.863 60 60 60V0C26.863 0 0 26.863 0 60z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                     }}>
                </div>
                
                {/* Floating hearts decoration */}
                <div className="absolute top-4 right-4 text-2xl animate-floating-heart opacity-60">💕</div>
                <div className="absolute bottom-4 left-4 text-xl animate-floating-heart delay-1000 opacity-60">❤️</div>
                
                <div className="relative z-10">
                  <h3 className="text-base md:text-lg font-medium text-gray-600 mb-3 animate-fade-in delay-700">Celebrating Our</h3>
                  <div className="text-2xl md:text-3xl font-light text-gray-800 mb-2 animate-count-up delay-800">10th</div>
                  <div className="text-lg md:text-xl text-gray-600 mb-4 animate-slide-in-up delay-900">Wedding Anniversary</div>
                  
                  <div className="space-y-2 text-sm md:text-base text-gray-700">
                    <div className="flex justify-center lg:justify-start items-center space-x-2 animate-fade-in delay-1000">
                      <span className="animate-heartbeat">📅</span>
                      <span>June 15, 2025</span>
                    </div>
                    <div className="flex justify-center lg:justify-start items-center space-x-2 animate-fade-in delay-1100">
                      <span className="animate-heartbeat" style={{animationDelay: '0.5s'}}>🕖</span>
                      <span>7:00 PM</span>
                    </div>
                    <div className="flex justify-center lg:justify-start items-center space-x-2 animate-fade-in delay-1200">
                      <span className="animate-heartbeat" style={{animationDelay: '1s'}}>📍</span>
                      <span className="text-center lg:text-left">Grand Ballroom, The Plaza Hotel</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Call to Action */}
            <div className="animate-luxury-rise delay-1300 bg-gradient-to-br from-white/90 via-amber-50/80 to-rose-50/90 backdrop-blur-3xl rounded-3xl p-6 md:p-8 shadow-2xl border-2 border-white/60 relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-base md:text-lg text-gray-600 mb-6 animate-fade-in delay-1400 px-2 md:px-0 font-light leading-relaxed">
                  Join us for an evening of celebration, love, and memories
                </p>
                <button
                  onClick={onNavigateToInvitation}
                  className="inline-block px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:scale-110 animate-luxury-glow cursor-pointer hover:from-rose-600 hover:to-pink-600 active:scale-95 hover:rotate-1 text-sm md:text-base"
                >
                  <span className="font-medium flex items-center space-x-2">
                    <span>✨ Open Our Love Story ✨</span>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced Right side - Couple Photo with Golden Frame */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right delay-300 order-1 lg:order-2">
            <div className="relative group">
              {/* Luxury Golden Frame with Sparkles */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-90 md:w-80 md:h-96 animate-photo-reveal">
                {/* Outer golden frame */}
                <div className="absolute -inset-4 bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-500 rounded-3xl shadow-2xl opacity-80 animate-gentle-pulse"></div>
                <div className="absolute -inset-3 bg-gradient-to-br from-amber-300 via-yellow-300 to-amber-400 rounded-3xl shadow-xl opacity-60"></div>
                <div className="absolute -inset-2 bg-gradient-to-br from-yellow-200 via-amber-200 to-yellow-300 rounded-3xl shadow-lg opacity-40"></div>
                
                {/* Moving golden sparkles around frame */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-orbit opacity-80"
                    style={{
                      top: '50%',
                      left: '50%',
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: '4s'
                    }}
                  />
                ))}
                
                {/* Main photo container */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-700 border-4 border-white">
                  {/* Photo */}
                  <img
                    src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=800&fit=crop&crop=faces"
                    alt="Sarah & Michael - Happy Couple"
                    className="w-full h-full object-cover relative z-10 group-hover:brightness-110 transition-all duration-700"
                  />
                  
                  {/* Golden shimmer overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-amber-400/20 z-10 rounded-3xl animate-shimmer"></div>
                  
                  {/* Floating hearts and sparkles */}
                  <div className="absolute top-4 right-4 text-xl md:text-2xl animate-floating-heart opacity-80 z-20">💕</div>
                  <div className="absolute bottom-6 left-4 text-lg md:text-xl animate-floating-heart delay-1000 opacity-70 z-20">❤️</div>
                  <div className="absolute top-1/3 left-4 text-sm animate-twinkle opacity-60 z-20">✨</div>
                  <div className="absolute bottom-1/3 right-4 text-sm animate-twinkle delay-500 opacity-60 z-20">⭐</div>
                </div>
              </div>
              
              {/* Enhanced decorative elements around photo */}
              <div className="absolute -top-6 -left-6 w-8 h-8 md:w-10 md:h-10 border-3 border-amber-400 rounded-full animate-orbit shadow-lg">
                <div className="absolute inset-1 border-2 border-yellow-300 rounded-full animate-gentle-pulse"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-6 h-6 md:w-8 md:h-8 border-3 border-rose-400 rounded-full animate-orbit-reverse shadow-lg">
                <div className="absolute inset-1 border-2 border-pink-300 rounded-full animate-gentle-pulse delay-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveTheDate;
