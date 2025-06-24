
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { SaveTheDateSkeleton } from './LoadingStates';

interface SaveTheDateProps {
  onNavigateToInvitation?: () => void;
}

const SaveTheDate = ({ onNavigateToInvitation }: SaveTheDateProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SaveTheDateSkeleton />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-6 pt-20 md:pt-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        {/* Enhanced Guest Greeting with default text */}
        <div className="text-center mb-6 md:mb-8 animate-fade-in-stagger">
          <div className="bg-gradient-to-br from-white/95 to-rose-50/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg border border-white/50 max-w-lg mx-auto relative overflow-hidden transform hover:scale-105 transition-all duration-700">
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-playfair font-bold text-gray-800 mb-4 animate-typewriter-elegant">
                Dear Guest, You're Invited
              </h3>
              <p className="text-sm md:text-base text-gray-600 font-light animate-fade-in delay-300 font-playfair italic">
                You are cordially invited to celebrate with us
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left space-y-6 md:space-y-8 order-2 lg:order-1">
            {/* Header Card */}
            <div className="space-y-3 md:space-y-4 bg-gradient-to-br from-white/90 to-rose-50/70 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg border border-white/50 relative overflow-hidden animate-slide-up-elegant">
              <div className="relative z-10">
                <div className="inline-block">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-dancing-script font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-500 to-amber-500">
                    Save
                  </h1>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-dancing-script font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-pink-500 to-rose-600">
                    The Date
                  </h1>
                </div>
              </div>
            </div>

            {/* Couple Names Card */}
            <div className="space-y-2 bg-gradient-to-br from-white/95 to-amber-50/70 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg border border-white/50 relative overflow-hidden animate-slide-up-elegant delay-200">
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-gray-800">
                  Sarah & Michael
                </h2>
                <div className="w-24 h-px bg-gradient-to-r from-rose-400 to-pink-400 mx-auto lg:mx-0"></div>
              </div>
            </div>

            {/* Anniversary Details Card */}
            <div className="space-y-6 animate-slide-up-elegant delay-400">
              <div className="bg-gradient-to-br from-white/95 to-pink-50/70 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg border border-white/50 relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-base md:text-lg font-medium text-gray-700 mb-3 font-playfair font-bold">Celebrating Our</h3>
                  <div className="text-2xl md:text-3xl font-dancing-script font-bold text-gray-800 mb-2">10th</div>
                  <div className="text-lg md:text-xl text-gray-700 mb-4 font-playfair font-bold italic">Wedding Anniversary</div>
                  
                  <div className="space-y-2 text-sm md:text-base text-gray-700">
                    <div className="flex justify-center lg:justify-start items-center space-x-2">
                      <span>📅</span>
                      <span className="font-playfair font-semibold">June 15, 2025</span>
                    </div>
                    <div className="flex justify-center lg:justify-start items-center space-x-2">
                      <span>🕖</span>
                      <span className="font-playfair font-semibold">7:00 PM</span>
                    </div>
                    <div className="flex justify-center lg:justify-start items-center space-x-2">
                      <span>📍</span>
                      <span className="text-center lg:text-left font-playfair font-semibold">Grand Ballroom, The Plaza Hotel</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-white/90 to-amber-50/70 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg border border-white/50 relative overflow-hidden animate-slide-up-elegant delay-600">
              <div className="relative z-10">
                <p className="text-base md:text-lg text-gray-700 mb-6 px-2 md:px-0 font-light leading-relaxed font-playfair italic">
                  Join us for an evening of celebration, love, and memories
                </p>
                <button
                  onClick={onNavigateToInvitation}
                  className="inline-block px-4 md:px-6 py-3 md:py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:from-rose-600 hover:to-pink-600 active:scale-95 text-sm md:text-base transform hover:scale-105 w-full sm:w-auto"
                >
                  <span className="font-medium flex items-center justify-center space-x-2 font-playfair">
                    <span>✨ Open Our Love Story ✨</span>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right side - Couple Photo */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 animate-fade-in-stagger delay-800">
            <div className="relative group">
              <div className="relative w-64 h-80 sm:w-72 sm:h-90 md:w-80 md:h-96">
                <div className="absolute -inset-1 bg-gradient-to-br from-yellow-300/30 via-amber-300/20 to-yellow-400/30 rounded-3xl shadow-md"></div>
                
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-lg border-2 border-white transform hover:scale-105 transition-all duration-700">
                  <img
                    src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=800&fit=crop&crop=faces"
                    alt="Sarah & Michael - Happy Couple"
                    className="w-full h-full object-cover relative z-10"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/3 via-transparent to-amber-400/3 z-10 rounded-3xl"></div>
                  
                  <div className="absolute top-4 right-4 text-xl opacity-70 z-20 animate-floating-heart">💕</div>
                  <div className="absolute bottom-6 left-4 text-lg opacity-60 z-20 animate-floating-heart delay-1000">❤️</div>
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
