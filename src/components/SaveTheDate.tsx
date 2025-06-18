import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface SaveTheDateProps {
  onNavigateToInvitation?: () => void;
}

const SaveTheDate = ({ onNavigateToInvitation }: SaveTheDateProps) => {
  const defaultGuestName = "John & Emily";

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-6 pt-20 md:pt-24 relative overflow-hidden">
      {/* Floating particles animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 md:left-20 w-2 h-2 bg-rose-300 rounded-full animate-float-particle opacity-60"></div>
        <div className="absolute top-40 right-16 md:right-32 w-1 h-1 bg-pink-400 rounded-full animate-float-particle-delayed opacity-70" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-8 md:left-16 w-3 h-3 bg-amber-300 rounded-full animate-float-particle opacity-50" style={{animationDelay: '4s'}}></div>
        <div className="absolute top-60 left-1/3 w-1.5 h-1.5 bg-rose-400 rounded-full animate-float-particle-delayed opacity-60" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 right-10 md:right-20 w-2 h-2 bg-pink-300 rounded-full animate-float-particle opacity-70" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto w-full">
        {/* Guest Greeting */}
        <div className="text-center mb-6 md:mb-8 animate-fade-in">
          <div className="bg-gradient-to-r from-rose-50/90 to-pink-50/90 backdrop-blur-xl rounded-2xl p-4 md:p-6 shadow-lg border border-white/50 max-w-lg mx-auto">
            <h3 className="text-xl md:text-2xl font-serif text-gray-700 mb-2">
              Dear {defaultGuestName},
            </h3>
            <p className="text-sm md:text-base text-gray-600">
              You are cordially invited to celebrate with us
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left space-y-6 md:space-y-8 animate-slide-in-left order-2 lg:order-1">
            {/* Header */}
            <div className="space-y-3 md:space-y-4">
              <div className="inline-block">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-500 to-amber-500 animate-shimmer-text">
                  Save
                </h1>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-pink-500 to-rose-600 animate-shimmer-text delay-200">
                  The Date
                </h1>
              </div>
            </div>

            {/* Couple Names */}
            <div className="space-y-2 animate-elegant-fade-in delay-400">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-700 animate-typewriter-luxury">
                Sarah & Michael
              </h2>
              <div className="w-24 h-px bg-gradient-to-r from-rose-400 to-pink-400 mx-auto lg:mx-0 animate-expand-line delay-500"></div>
            </div>

            {/* Anniversary Details */}
            <div className="space-y-6 animate-luxury-float delay-600">
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 md:p-6 shadow-2xl border border-white/50 transform hover:scale-105 transition-all duration-700 animate-glass-morph">
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

            {/* Call to Action */}
            <div className="animate-luxury-rise delay-1300">
              <p className="text-base md:text-lg text-gray-600 mb-6 animate-fade-in delay-1400 px-2 md:px-0">
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

          {/* Right side - Couple Photo */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right delay-300 order-1 lg:order-2">
            <div className="relative group">
              {/* Photo container with luxury frame effect */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-90 md:w-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-700 animate-photo-reveal">
                {/* Decorative frame */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-200/30 via-transparent to-pink-200/30 z-10 rounded-3xl"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 to-pink-400 rounded-3xl blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-700 animate-pulse-luxury"></div>
                
                {/* Main photo */}
                <img
                  src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=800&fit=crop&crop=faces"
                  alt="Sarah & Michael - Happy Couple"
                  className="w-full h-full object-cover relative z-10 rounded-3xl group-hover:brightness-110 transition-all duration-700"
                />
                
                {/* Floating hearts */}
                <div className="absolute top-4 right-4 text-xl md:text-2xl animate-floating-heart opacity-80">💕</div>
                <div className="absolute bottom-6 left-4 text-lg md:text-xl animate-floating-heart delay-1000 opacity-70">❤️</div>
              </div>
              
              {/* Decorative elements around photo */}
              <div className="absolute -top-4 -left-4 w-6 h-6 md:w-8 md:h-8 border-2 border-rose-300 rounded-full animate-orbit"></div>
              <div className="absolute -bottom-4 -right-4 w-4 h-4 md:w-6 md:h-6 border-2 border-pink-300 rounded-full animate-orbit-reverse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveTheDate;
