
import React from 'react';
import { cn } from '@/lib/utils';

const MainInvitation = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-6 pt-20 md:pt-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-5 left-5 md:top-10 md:left-10 w-12 h-12 md:w-20 md:h-20 bg-gradient-to-r from-rose-200/20 to-pink-200/20 rounded-full animate-gentle-float"></div>
        <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 w-10 h-10 md:w-16 md:h-16 bg-gradient-to-r from-amber-200/20 to-yellow-200/20 rounded-full animate-gentle-float delay-1000"></div>
        <div className="absolute top-1/3 right-5 md:right-10 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full animate-gentle-float delay-500"></div>
      </div>

      <div className="max-w-4xl mx-auto w-full">
        {/* Main Card */}
        <div className="bg-white/85 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 overflow-hidden animate-luxury-entrance">
          {/* Header Section */}
          <div className="relative p-6 md:p-12 text-center bg-gradient-to-br from-rose-50/80 to-pink-50/80 backdrop-blur-sm">
            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 w-10 h-10 md:w-16 md:h-16 border-2 border-rose-300/50 rounded-full animate-slow-spin"></div>
            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-8 h-8 md:w-12 md:h-12 border-2 border-pink-300/50 rounded-full animate-slow-spin-reverse"></div>
            
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-gray-800 animate-elegant-reveal">
                Together We Celebrate
              </h1>
              <div className="flex items-center justify-center space-x-4 animate-fade-in delay-200">
                <div className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent to-rose-400 animate-expand-line"></div>
                <span className="text-xl md:text-2xl animate-heartbeat">💕</span>
                <div className="w-12 md:w-16 h-px bg-gradient-to-l from-transparent to-rose-400 animate-expand-line"></div>
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 animate-elegant-reveal delay-300">
                10 Years of Love
              </h2>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 md:p-12 space-y-6 md:space-y-8">
            {/* Couple Section */}
            <div className="text-center space-y-4 animate-luxury-float delay-400">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 animate-shimmer-text">
                Sarah & Michael Johnson
              </h3>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto animate-typewriter-luxury delay-600 px-2">
                As we celebrate a decade of marriage, we invite you to join us for an evening 
                of love, laughter, and cherished memories as we renew our vows and look forward 
                to many more years together.
              </p>
            </div>

            {/* Event Details */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 animate-stagger-in delay-700">
              <div className="bg-gradient-to-br from-rose-50/70 to-pink-50/70 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center transform hover:scale-105 transition-all duration-500 animate-card-hover">
                <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 animate-fade-in delay-800">Ceremony</h4>
                <div className="space-y-2 text-gray-600 text-sm md:text-base">
                  <div className="flex items-center justify-center space-x-2 animate-slide-in-up delay-900">
                    <span className="animate-pulse">📅</span>
                    <span>Saturday, June 15, 2025</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 animate-slide-in-up delay-1000">
                    <span className="animate-pulse">🕖</span>
                    <span>7:00 PM</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 animate-slide-in-up delay-1100">
                    <span className="animate-pulse">📍</span>
                    <span className="text-center">The Plaza Hotel Grand Ballroom</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50/70 to-yellow-50/70 backdrop-blur-sm rounded-2xl p-4 md:p-6 text-center transform hover:scale-105 transition-all duration-500 animate-card-hover delay-200">
                <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 animate-fade-in delay-1000">Reception</h4>
                <div className="space-y-2 text-gray-600 text-sm md:text-base">
                  <div className="flex items-center justify-center space-x-2 animate-slide-in-up delay-1100">
                    <span className="animate-pulse">🍽️</span>
                    <span>Dinner & Dancing</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 animate-slide-in-up delay-1200">
                    <span className="animate-pulse">🕘</span>
                    <span>8:30 PM - 12:00 AM</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 animate-slide-in-up delay-1300">
                    <span className="animate-pulse">🎵</span>
                    <span>Live Band & DJ</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dress Code */}
            <div className="text-center bg-gradient-to-r from-purple-50/70 to-pink-50/70 backdrop-blur-sm rounded-2xl p-4 md:p-6 animate-luxury-float delay-1200 transform hover:scale-105 transition-all duration-500">
              <h4 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 animate-fade-in delay-1300">Dress Code</h4>
              <p className="text-gray-600 animate-fade-in delay-1400 text-sm md:text-base px-2">Cocktail Attire - Please wear your finest evening wear</p>
            </div>

            {/* Special Message */}
            <div className="text-center space-y-4 animate-elegant-reveal delay-1400">
              <p className="text-base md:text-lg text-gray-700 italic animate-typewriter-luxury delay-1500 px-2">
                "The best thing to hold onto in life is each other."
              </p>
              <p className="text-sm text-gray-500 animate-fade-in delay-1600">- Audrey Hepburn</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainInvitation;
