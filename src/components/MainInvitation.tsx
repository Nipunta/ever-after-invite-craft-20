
import React from 'react';
import { cn } from '@/lib/utils';
import PhotoGallery from '@/components/PhotoGallery';
import LocationMap from '@/components/LocationMap';
import CongratulationsWall from '@/components/CongratulationsWall';

interface MainInvitationProps {
  onBackToSaveTheDate?: () => void;
}

const MainInvitation = ({ onBackToSaveTheDate }: MainInvitationProps) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* All sections in one scrollable page */}
      <div className="space-y-8 pb-24">
        {/* Invitation Section */}
        <InvitationContent />
        
        {/* Our Memories Section */}
        <div className="px-4">
          <PhotoGallery />
        </div>
        
        {/* Location Section with enhanced styling */}
        <div className="px-4">
          <div className="bg-gradient-to-br from-white/90 to-amber-50/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-white/50 relative overflow-hidden max-w-6xl mx-auto">
            {/* Subtle sparkle background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 left-4 w-1 h-1 bg-yellow-400 rounded-full animate-gentle-pulse"></div>
              <div className="absolute top-12 right-8 w-0.5 h-0.5 bg-amber-300 rounded-full animate-gentle-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-8 left-12 w-0.5 h-0.5 bg-yellow-300 rounded-full animate-gentle-pulse" style={{animationDelay: '2s'}}></div>
              <div className="absolute bottom-16 right-6 w-1 h-1 bg-amber-400 rounded-full animate-gentle-pulse" style={{animationDelay: '3s'}}></div>
              <div className="absolute top-1/2 left-1/3 w-0.5 h-0.5 bg-yellow-400 rounded-full animate-gentle-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-amber-300 rounded-full animate-gentle-pulse" style={{animationDelay: '1.5s'}}></div>
            </div>
            <div className="relative z-10">
              <LocationMap />
            </div>
          </div>
        </div>
        
        {/* Wishes Section */}
        <div className="px-4">
          <CongratulationsWall />
        </div>
      </div>
    </div>
  );
};

const InvitationContent = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 pt-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto w-full">
        {/* Simplified Main Card with sparkle background */}
        <div className="bg-gradient-to-br from-white/95 to-rose-50/70 backdrop-blur-sm rounded-3xl shadow-lg border border-white/50 overflow-hidden relative">
          {/* Subtle sparkle background */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute top-6 left-6 w-1 h-1 bg-pink-400 rounded-full animate-gentle-pulse"></div>
            <div className="absolute top-16 right-12 w-0.5 h-0.5 bg-rose-300 rounded-full animate-gentle-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-12 left-16 w-0.5 h-0.5 bg-pink-300 rounded-full animate-gentle-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute bottom-20 right-8 w-1 h-1 bg-rose-400 rounded-full animate-gentle-pulse" style={{animationDelay: '3s'}}></div>
            <div className="absolute top-1/2 left-1/4 w-0.5 h-0.5 bg-pink-400 rounded-full animate-gentle-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-rose-300 rounded-full animate-gentle-pulse" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute top-3/4 left-1/2 w-0.5 h-0.5 bg-pink-300 rounded-full animate-gentle-pulse" style={{animationDelay: '2.5s'}}></div>
            <div className="absolute top-1/4 left-3/4 w-1 h-1 bg-rose-400 rounded-full animate-gentle-pulse" style={{animationDelay: '4s'}}></div>
          </div>
          
          {/* Header Section */}
          <div className="relative p-6 md:p-12 lg:p-16 text-center">
            <div className="space-y-6 md:space-y-8 relative z-10">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-gray-800 leading-tight">
                Together We Celebrate
              </h1>
              <div className="flex items-center justify-center space-x-6">
                <div className="w-16 md:w-20 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
                <span className="text-2xl md:text-3xl">💕</span>
                <div className="w-16 md:w-20 h-px bg-gradient-to-l from-transparent via-rose-400 to-transparent"></div>
              </div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-gray-700">
                10 Years of Love
              </h2>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 md:p-12 lg:p-16 space-y-8 md:space-y-12 relative z-10">
            {/* Couple Section with sparkle background */}
            <div className="text-center space-y-6">
              <div className="bg-gradient-to-br from-white/95 to-rose-50/70 backdrop-blur-sm rounded-3xl p-4 md:p-6 lg:p-8 shadow-lg border border-white/50 relative overflow-hidden">
                {/* Subtle sparkle background */}
                <div className="absolute inset-0 opacity-15">
                  <div className="absolute top-4 left-4 w-0.5 h-0.5 bg-purple-400 rounded-full animate-gentle-pulse"></div>
                  <div className="absolute top-8 right-6 w-1 h-1 bg-pink-300 rounded-full animate-gentle-pulse" style={{animationDelay: '1s'}}></div>
                  <div className="absolute bottom-6 left-8 w-0.5 h-0.5 bg-rose-300 rounded-full animate-gentle-pulse" style={{animationDelay: '2s'}}></div>
                  <div className="absolute bottom-12 right-4 w-0.5 h-0.5 bg-purple-300 rounded-full animate-gentle-pulse" style={{animationDelay: '3s'}}></div>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 leading-tight mb-4 md:mb-6">
                    Sarah & Michael Johnson
                  </h3>
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/50 shadow-md relative overflow-hidden">
                    {/* Mini sparkles for inner card */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-2 right-2 w-0.5 h-0.5 bg-pink-400 rounded-full animate-gentle-pulse"></div>
                      <div className="absolute bottom-2 left-2 w-0.5 h-0.5 bg-rose-400 rounded-full animate-gentle-pulse" style={{animationDelay: '2s'}}></div>
                    </div>
                    <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed font-light relative z-10">
                      As we celebrate a decade of marriage, we invite you to join us for an evening 
                      of love, laughter, and cherished memories as we renew our vows and look forward 
                      to many more years together.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Details Grid */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-gradient-to-br from-rose-50/95 to-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 text-center shadow-lg border border-white/50 relative overflow-hidden">
                {/* Subtle sparkle background */}
                <div className="absolute inset-0 opacity-15">
                  <div className="absolute top-3 left-3 w-0.5 h-0.5 bg-rose-400 rounded-full animate-gentle-pulse"></div>
                  <div className="absolute top-6 right-4 w-1 h-1 bg-pink-300 rounded-full animate-gentle-pulse" style={{animationDelay: '1s'}}></div>
                  <div className="absolute bottom-4 left-6 w-0.5 h-0.5 bg-rose-300 rounded-full animate-gentle-pulse" style={{animationDelay: '2s'}}></div>
                  <div className="absolute bottom-8 right-3 w-0.5 h-0.5 bg-pink-400 rounded-full animate-gentle-pulse" style={{animationDelay: '3s'}}></div>
                </div>
                
                <div className="relative z-10">
                  <h4 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 md:mb-6">Ceremony</h4>
                  <div className="space-y-3 md:space-y-4 text-gray-700">
                    <div className="flex items-center justify-center space-x-3">
                      <span className="text-xl md:text-2xl">📅</span>
                      <span className="text-sm md:text-lg">Saturday, June 15, 2025</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <span className="text-xl md:text-2xl">🕖</span>
                      <span className="text-sm md:text-lg">7:00 PM</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <span className="text-xl md:text-2xl">📍</span>
                      <span className="text-sm md:text-lg text-center">The Plaza Hotel Grand Ballroom</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50/95 to-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 text-center shadow-lg border border-white/50 relative overflow-hidden">
                {/* Subtle sparkle background */}
                <div className="absolute inset-0 opacity-15">
                  <div className="absolute top-3 right-3 w-0.5 h-0.5 bg-amber-400 rounded-full animate-gentle-pulse"></div>
                  <div className="absolute top-6 left-4 w-1 h-1 bg-yellow-300 rounded-full animate-gentle-pulse" style={{animationDelay: '1s'}}></div>
                  <div className="absolute bottom-4 right-6 w-0.5 h-0.5 bg-amber-300 rounded-full animate-gentle-pulse" style={{animationDelay: '2s'}}></div>
                  <div className="absolute bottom-8 left-3 w-0.5 h-0.5 bg-yellow-400 rounded-full animate-gentle-pulse" style={{animationDelay: '3s'}}></div>
                </div>
                
                <div className="relative z-10">
                  <h4 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 md:mb-6">Reception</h4>
                  <div className="space-y-3 md:space-y-4 text-gray-700">
                    <div className="flex items-center justify-center space-x-3">
                      <span className="text-xl md:text-2xl">🍽️</span>
                      <span className="text-sm md:text-lg">Dinner & Dancing</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <span className="text-xl md:text-2xl">🕘</span>
                      <span className="text-sm md:text-lg">8:30 PM - 12:00 AM</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <span className="text-xl md:text-2xl">🎵</span>
                      <span className="text-sm md:text-lg">Live Band & DJ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dress Code */}
            <div className="text-center bg-gradient-to-br from-purple-50/95 to-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-lg border border-white/50">
              {/* Subtle sparkle background */}
              <div className="absolute inset-0 opacity-15">
                <div className="absolute top-4 left-4 w-0.5 h-0.5 bg-purple-400 rounded-full animate-gentle-pulse"></div>
                <div className="absolute top-8 right-6 w-1 h-1 bg-pink-300 rounded-full animate-gentle-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-6 left-8 w-0.5 h-0.5 bg-purple-300 rounded-full animate-gentle-pulse" style={{animationDelay: '2s'}}></div>
                <div className="absolute bottom-10 right-4 w-0.5 h-0.5 bg-pink-400 rounded-full animate-gentle-pulse" style={{animationDelay: '3s'}}></div>
              </div>
              
              <div className="relative z-10">
                <h4 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 md:mb-4">Dress Code</h4>
                <p className="text-lg md:text-xl text-gray-700 font-light">Cocktail Attire - Please wear your finest evening wear</p>
              </div>
            </div>

            {/* Special Message */}
            <div className="text-center space-y-6 bg-gradient-to-br from-white/95 to-rose-50/70 backdrop-blur-sm rounded-3xl p-10 md:p-12 border border-white/50 shadow-lg relative overflow-hidden">
              {/* Subtle sparkle background */}
              <div className="absolute inset-0 opacity-15">
                <div className="absolute top-5 left-5 w-1 h-1 bg-rose-400 rounded-full animate-gentle-pulse"></div>
                <div className="absolute top-12 right-8 w-0.5 h-0.5 bg-pink-300 rounded-full animate-gentle-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-8 left-12 w-0.5 h-0.5 bg-rose-300 rounded-full animate-gentle-pulse" style={{animationDelay: '2s'}}></div>
                <div className="absolute bottom-16 right-6 w-1 h-1 bg-pink-400 rounded-full animate-gentle-pulse" style={{animationDelay: '3s'}}></div>
                <div className="absolute top-1/2 left-1/3 w-0.5 h-0.5 bg-rose-400 rounded-full animate-gentle-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-pink-300 rounded-full animate-gentle-pulse" style={{animationDelay: '1.5s'}}></div>
              </div>
              
              <div className="relative z-10">
                <p className="text-xl md:text-2xl text-gray-700 italic font-serif leading-relaxed">
                  "The best thing to hold onto in life is each other."
                </p>
                <p className="text-base md:text-lg text-gray-600 font-medium">- Audrey Hepburn</p>
                <div className="flex items-center justify-center space-x-4 mt-6 md:mt-8">
                  <span className="text-2xl md:text-3xl">💕</span>
                  <span className="text-2xl md:text-3xl">✨</span>
                  <span className="text-2xl md:text-3xl">🌹</span>
                  <span className="text-2xl md:text-3xl">✨</span>
                  <span className="text-2xl md:text-3xl">💕</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainInvitation;
