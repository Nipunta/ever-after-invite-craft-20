
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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-50/20 via-pink-50/15 to-amber-50/20">
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
          <div className="bg-gradient-to-br from-white/95 to-amber-50/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-white/50 relative overflow-hidden max-w-6xl mx-auto">
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
        {/* Simplified Main Card */}
        <div className="bg-gradient-to-br from-white/95 to-rose-50/70 backdrop-blur-sm rounded-3xl shadow-lg border border-white/50 overflow-hidden relative">
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
            {/* Couple Section - Improved mobile responsiveness */}
            <div className="text-center space-y-6">
              <div className="bg-gradient-to-br from-white/95 to-rose-50/70 backdrop-blur-sm rounded-3xl p-4 md:p-6 lg:p-8 shadow-lg border border-white/50 relative overflow-hidden">
                <div className="relative z-10">
                  {/* Mobile-friendly heading with better spacing */}
                  <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 leading-tight mb-4 md:mb-6">
                    Sarah & Michael Johnson
                  </h3>
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/50 shadow-md">
                    <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed font-light">
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
              <div className="relative z-10">
                <h4 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 md:mb-4">Dress Code</h4>
                <p className="text-lg md:text-xl text-gray-700 font-light">Cocktail Attire - Please wear your finest evening wear</p>
              </div>
            </div>

            {/* Special Message */}
            <div className="text-center space-y-6 bg-gradient-to-br from-white/95 to-rose-50/70 backdrop-blur-sm rounded-3xl p-10 md:p-12 border border-white/50 shadow-lg relative overflow-hidden">
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
