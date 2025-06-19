
import React from 'react';
import { cn } from '@/lib/utils';
import PhotoGallery from '@/components/PhotoGallery';
import LocationMap from '@/components/LocationMap';
import CongratulationsWall from '@/components/CongratulationsWall';
import { ArrowLeft } from 'lucide-react';

interface MainInvitationProps {
  onBackToSaveTheDate?: () => void;
}

const MainInvitation = ({ onBackToSaveTheDate }: MainInvitationProps) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Back Button */}
      {onBackToSaveTheDate && (
        <button
          onClick={onBackToSaveTheDate}
          className="fixed top-20 left-4 z-20 bg-white/90 backdrop-blur-xl rounded-full p-3 shadow-xl border border-white/50 hover:scale-110 transition-all duration-300 animate-bounce-in"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
      )}

      {/* All sections in one scrollable page */}
      <div className="space-y-16 pb-24">
        {/* Invitation Section */}
        <InvitationContent />
        
        {/* Our Memories Section */}
        <div className="px-4">
          <PhotoGallery />
        </div>
        
        {/* Location Section */}
        <div className="px-4">
          <LocationMap />
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
      {/* Enhanced floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute rounded-full animate-float-particle opacity-40",
              i % 4 === 0 && "bg-gradient-to-r from-rose-300 to-pink-300 w-3 h-3 animate-heartbeat",
              i % 4 === 1 && "bg-gradient-to-r from-pink-300 to-purple-300 w-2 h-2 animate-gentle-pulse",
              i % 4 === 2 && "bg-gradient-to-r from-amber-300 to-yellow-300 w-4 h-4 animate-floating-heart",
              i % 4 === 3 && "bg-gradient-to-r from-purple-300 to-rose-300 w-1.5 h-1.5 animate-orbit"
            )}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto w-full">
        {/* Enhanced Main Card */}
        <div className="bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden animate-luxury-entrance transform hover:scale-[1.02] transition-all duration-700">
          {/* Header Section */}
          <div className="relative p-6 md:p-12 text-center bg-gradient-to-br from-rose-50/90 to-pink-50/90 backdrop-blur-sm">
            {/* Enhanced Decorative Elements */}
            <div className="absolute top-4 left-4 w-12 h-12 border-2 border-rose-300/60 rounded-full animate-slow-spin"></div>
            <div className="absolute bottom-4 right-4 w-10 h-10 border-2 border-pink-300/60 rounded-full animate-slow-spin-reverse"></div>
            <div className="absolute top-8 right-8 w-6 h-6 bg-gradient-to-r from-amber-200 to-yellow-200 rounded-full animate-gentle-pulse"></div>
            
            <div className="space-y-6 relative z-10">
              <h1 className="text-3xl md:text-5xl font-serif text-gray-800 animate-elegant-reveal">
                Together We Celebrate
              </h1>
              <div className="flex items-center justify-center space-x-4 animate-fade-in delay-200">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-rose-400 animate-expand-line"></div>
                <span className="text-2xl animate-heartbeat">💕</span>
                <div className="w-16 h-px bg-gradient-to-l from-transparent to-rose-400 animate-expand-line"></div>
              </div>
              <h2 className="text-2xl md:text-4xl font-light text-gray-700 animate-elegant-reveal delay-300">
                10 Years of Love
              </h2>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 md:p-12 space-y-8">
            {/* Couple Section */}
            <div className="text-center space-y-4 animate-luxury-float delay-400">
              <h3 className="text-4xl md:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 animate-shimmer-text">
                Sarah & Michael Johnson
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-typewriter-luxury delay-600 leading-relaxed">
                As we celebrate a decade of marriage, we invite you to join us for an evening 
                of love, laughter, and cherished memories as we renew our vows and look forward 
                to many more years together.
              </p>
            </div>

            {/* Event Details Grid */}
            <div className="grid md:grid-cols-2 gap-8 animate-stagger-in delay-700">
              <div className="bg-gradient-to-br from-rose-50/80 to-pink-50/80 backdrop-blur-sm rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-500 animate-card-hover">
                <h4 className="text-xl font-semibold text-gray-800 mb-4 animate-fade-in delay-800">Ceremony</h4>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center justify-center space-x-2 animate-slide-in-up delay-900">
                    <span className="animate-pulse text-lg">📅</span>
                    <span>Saturday, June 15, 2025</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 animate-slide-in-up delay-1000">
                    <span className="animate-pulse text-lg">🕖</span>
                    <span>7:00 PM</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 animate-slide-in-up delay-1100">
                    <span className="animate-pulse text-lg">📍</span>
                    <span>The Plaza Hotel Grand Ballroom</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50/80 to-yellow-50/80 backdrop-blur-sm rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-500 animate-card-hover delay-200">
                <h4 className="text-xl font-semibold text-gray-800 mb-4 animate-fade-in delay-1000">Reception</h4>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center justify-center space-x-2 animate-slide-in-up delay-1100">
                    <span className="animate-pulse text-lg">🍽️</span>
                    <span>Dinner & Dancing</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 animate-slide-in-up delay-1200">
                    <span className="animate-pulse text-lg">🕘</span>
                    <span>8:30 PM - 12:00 AM</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 animate-slide-in-up delay-1300">
                    <span className="animate-pulse text-lg">🎵</span>
                    <span>Live Band & DJ</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Dress Code */}
            <div className="text-center bg-gradient-to-r from-purple-50/80 to-pink-50/80 backdrop-blur-sm rounded-2xl p-6 animate-luxury-float delay-1200 transform hover:scale-105 transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-200/20 to-pink-200/20 animate-shimmer"></div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2 animate-fade-in delay-1300 relative z-10">Dress Code</h4>
              <p className="text-gray-600 animate-fade-in delay-1400 relative z-10">Cocktail Attire - Please wear your finest evening wear</p>
            </div>

            {/* Enhanced Special Message */}
            <div className="text-center space-y-4 animate-elegant-reveal delay-1400 bg-gradient-to-br from-white/60 to-rose-50/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40">
              <p className="text-lg text-gray-700 italic animate-typewriter-luxury delay-1500 font-serif">
                "The best thing to hold onto in life is each other."
              </p>
              <p className="text-sm text-gray-500 animate-fade-in delay-1600">- Audrey Hepburn</p>
              <div className="flex items-center justify-center space-x-2 mt-4 animate-floating-heart delay-1700">
                <span className="text-xl">💕</span>
                <span className="text-xl">✨</span>
                <span className="text-xl">💕</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainInvitation;
