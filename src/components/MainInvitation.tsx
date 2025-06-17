
import React from 'react';
import { cn } from '@/lib/utils';

const MainInvitation = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 pt-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-rose-200/20 to-pink-200/20 rounded-full animate-gentle-float"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 bg-gradient-to-r from-amber-200/20 to-yellow-200/20 rounded-full animate-gentle-float delay-1000"></div>
        <div className="absolute top-1/3 right-10 w-12 h-12 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full animate-gentle-float delay-500"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Main Card */}
        <div className="bg-white/85 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 overflow-hidden animate-luxury-entrance">
          {/* Header Section */}
          <div className="relative p-12 text-center bg-gradient-to-br from-rose-50/80 to-pink-50/80 backdrop-blur-sm">
            {/* Decorative Elements */}
            <div className="absolute top-6 left-6 w-16 h-16 border-2 border-rose-300/50 rounded-full animate-slow-spin"></div>
            <div className="absolute bottom-6 right-6 w-12 h-12 border-2 border-pink-300/50 rounded-full animate-slow-spin-reverse"></div>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-serif text-gray-800 animate-elegant-reveal">
                Together We Celebrate
              </h1>
              <div className="flex items-center justify-center space-x-4 animate-fade-in delay-200">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-rose-400 animate-expand-line"></div>
                <span className="text-2xl animate-heartbeat">💕</span>
                <div className="w-16 h-px bg-gradient-to-l from-transparent to-rose-400 animate-expand-line"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-700 animate-elegant-reveal delay-300">
                10 Years of Love
              </h2>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-12 space-y-8">
            {/* Couple Section */}
            <div className="text-center space-y-4 animate-luxury-float delay-400">
              <h3 className="text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 animate-shimmer-text">
                Sarah & Michael Johnson
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-typewriter-luxury delay-600">
                As we celebrate a decade of marriage, we invite you to join us for an evening 
                of love, laughter, and cherished memories as we renew our vows and look forward 
                to many more years together.
              </p>
            </div>

            {/* Event Details */}
            <div className="grid md:grid-cols-2 gap-8 animate-stagger-in delay-700">
              <div className="bg-gradient-to-br from-rose-50/70 to-pink-50/70 backdrop-blur-sm rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-500 animate-card-hover">
                <h4 className="text-xl font-semibold text-gray-800 mb-4 animate-fade-in delay-800">Ceremony</h4>
                <div className="space-y-2 text-gray-600">
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
                    <span>The Plaza Hotel Grand Ballroom</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50/70 to-yellow-50/70 backdrop-blur-sm rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-500 animate-card-hover delay-200">
                <h4 className="text-xl font-semibold text-gray-800 mb-4 animate-fade-in delay-1000">Reception</h4>
                <div className="space-y-2 text-gray-600">
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
            <div className="text-center bg-gradient-to-r from-purple-50/70 to-pink-50/70 backdrop-blur-sm rounded-2xl p-6 animate-luxury-float delay-1200 transform hover:scale-105 transition-all duration-500">
              <h4 className="text-xl font-semibold text-gray-800 mb-2 animate-fade-in delay-1300">Dress Code</h4>
              <p className="text-gray-600 animate-fade-in delay-1400">Cocktail Attire - Please wear your finest evening wear</p>
            </div>

            {/* Special Message */}
            <div className="text-center space-y-4 animate-elegant-reveal delay-1400">
              <p className="text-lg text-gray-700 italic animate-typewriter-luxury delay-1500">
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
