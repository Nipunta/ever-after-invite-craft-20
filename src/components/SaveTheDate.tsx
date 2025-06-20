
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface SaveTheDateProps {
  onNavigateToInvitation?: () => void;
}

const SaveTheDate = ({ onNavigateToInvitation }: SaveTheDateProps) => {
  const [guestName, setGuestName] = useState("John & Emily");

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-6 pt-20 md:pt-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        {/* Enhanced Guest Greeting with input functionality */}
        <div className="text-center mb-6 md:mb-8">
          <div className="bg-gradient-to-br from-white/95 to-rose-50/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg border border-white/50 max-w-lg mx-auto relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-serif text-gray-700 mb-4">
                Dear{' '}
                <input
                  type="text"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="bg-transparent border-b border-rose-300 focus:border-rose-500 outline-none font-serif text-xl md:text-2xl text-gray-700 placeholder-gray-400 transition-colors duration-300"
                  placeholder="Your Name"
                />
              </h3>
              <p className="text-sm md:text-base text-gray-600 font-light">
                You are cordially invited to celebrate with us
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left space-y-6 md:space-y-8 order-2 lg:order-1">
            {/* Header Card */}
            <div className="space-y-3 md:space-y-4 bg-gradient-to-br from-white/90 to-rose-50/70 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg border border-white/50 relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-block">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-500 to-amber-500">
                    Save
                  </h1>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-pink-500 to-rose-600">
                    The Date
                  </h1>
                </div>
              </div>
            </div>

            {/* Couple Names Card */}
            <div className="space-y-2 bg-gradient-to-br from-white/95 to-amber-50/70 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg border border-white/50 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-700">
                  Sarah & Michael
                </h2>
                <div className="w-24 h-px bg-gradient-to-r from-rose-400 to-pink-400 mx-auto lg:mx-0"></div>
              </div>
            </div>

            {/* Anniversary Details Card */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-white/95 to-pink-50/70 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg border border-white/50 relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-base md:text-lg font-medium text-gray-600 mb-3">Celebrating Our</h3>
                  <div className="text-2xl md:text-3xl font-light text-gray-800 mb-2">10th</div>
                  <div className="text-lg md:text-xl text-gray-600 mb-4">Wedding Anniversary</div>
                  
                  <div className="space-y-2 text-sm md:text-base text-gray-700">
                    <div className="flex justify-center lg:justify-start items-center space-x-2">
                      <span>📅</span>
                      <span>June 15, 2025</span>
                    </div>
                    <div className="flex justify-center lg:justify-start items-center space-x-2">
                      <span>🕖</span>
                      <span>7:00 PM</span>
                    </div>
                    <div className="flex justify-center lg:justify-start items-center space-x-2">
                      <span>📍</span>
                      <span className="text-center lg:text-left">Grand Ballroom, The Plaza Hotel</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-white/90 to-amber-50/70 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg border border-white/50 relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-base md:text-lg text-gray-600 mb-6 px-2 md:px-0 font-light leading-relaxed">
                  Join us for an evening of celebration, love, and memories
                </p>
                <button
                  onClick={onNavigateToInvitation}
                  className="inline-block px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:from-rose-600 hover:to-pink-600 active:scale-95 text-sm md:text-base"
                >
                  <span className="font-medium flex items-center space-x-2">
                    <span>✨ Open Our Love Story ✨</span>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right side - Couple Photo with subtle golden sparkles */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group">
              <div className="relative w-64 h-80 sm:w-72 sm:h-90 md:w-80 md:h-96">
                {/* Subtle golden frame */}
                <div className="absolute -inset-1 bg-gradient-to-br from-yellow-300/30 via-amber-300/20 to-yellow-400/30 rounded-3xl shadow-md"></div>
                
                {/* Very subtle sparkles - much smaller and softer */}
                <div className="absolute w-0.5 h-0.5 bg-yellow-400/40 rounded-full top-6 right-6 animate-gentle-pulse"></div>
                <div className="absolute w-0.5 h-0.5 bg-amber-400/30 rounded-full bottom-8 left-8 animate-gentle-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute w-0.5 h-0.5 bg-yellow-300/30 rounded-full top-1/3 left-6 animate-gentle-pulse" style={{animationDelay: '2s'}}></div>
                
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-lg border-2 border-white">
                  <img
                    src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=800&fit=crop&crop=faces"
                    alt="Sarah & Michael - Happy Couple"
                    className="w-full h-full object-cover relative z-10"
                  />
                  
                  {/* Very subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/3 via-transparent to-amber-400/3 z-10 rounded-3xl"></div>
                  
                  {/* Simple floating hearts */}
                  <div className="absolute top-4 right-4 text-xl opacity-70 z-20">💕</div>
                  <div className="absolute bottom-6 left-4 text-lg opacity-60 z-20">❤️</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveTheDate;
