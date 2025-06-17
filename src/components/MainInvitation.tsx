
import React from 'react';
import { cn } from '@/lib/utils';

const MainInvitation = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl mx-auto">
        {/* Main Card */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30 overflow-hidden animate-scale-in">
          {/* Header Section */}
          <div className="relative p-12 text-center bg-gradient-to-br from-rose-50 to-pink-50">
            {/* Decorative Elements */}
            <div className="absolute top-6 left-6 w-16 h-16 border-2 border-rose-300 rounded-full opacity-30"></div>
            <div className="absolute bottom-6 right-6 w-12 h-12 border-2 border-pink-300 rounded-full opacity-30"></div>
            
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-serif text-gray-800 animate-fade-in">
                Together We Celebrate
              </h1>
              <div className="flex items-center justify-center space-x-4 animate-fade-in delay-200">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-rose-400"></div>
                <span className="text-2xl">💕</span>
                <div className="w-16 h-px bg-gradient-to-l from-transparent to-rose-400"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-light text-gray-700 animate-fade-in delay-300">
                10 Years of Love
              </h2>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-12 space-y-8">
            {/* Couple Section */}
            <div className="text-center space-y-4 animate-fade-in delay-400">
              <h3 className="text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">
                Sarah & Michael Johnson
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                As we celebrate a decade of marriage, we invite you to join us for an evening 
                of love, laughter, and cherished memories as we renew our vows and look forward 
                to many more years together.
              </p>
            </div>

            {/* Event Details */}
            <div className="grid md:grid-cols-2 gap-8 animate-fade-in delay-500">
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 text-center">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Ceremony</h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center justify-center space-x-2">
                    <span>📅</span>
                    <span>Saturday, June 15, 2025</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span>🕖</span>
                    <span>7:00 PM</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span>📍</span>
                    <span>The Plaza Hotel Grand Ballroom</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 text-center">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Reception</h4>
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center justify-center space-x-2">
                    <span>🍽️</span>
                    <span>Dinner & Dancing</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span>🕘</span>
                    <span>8:30 PM - 12:00 AM</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span>🎵</span>
                    <span>Live Band & DJ</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dress Code */}
            <div className="text-center bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 animate-fade-in delay-600">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Dress Code</h4>
              <p className="text-gray-600">Cocktail Attire - Please wear your finest evening wear</p>
            </div>

            {/* Special Message */}
            <div className="text-center space-y-4 animate-fade-in delay-700">
              <p className="text-lg text-gray-700 italic">
                "The best thing to hold onto in life is each other."
              </p>
              <p className="text-sm text-gray-500">- Audrey Hepburn</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainInvitation;
