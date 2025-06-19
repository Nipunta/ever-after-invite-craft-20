
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
        
        {/* Location Section */}
        <div className="px-4">
          <LocationMap />
        </div>
        
        {/* Wishes Section - Reduced top spacing */}
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
      {/* Enhanced floating particles with luxury feel */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle luxury pattern overlay */}
        <div className="absolute inset-0 opacity-3" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f43f5e' fill-opacity='0.04'%3E%3Cpath d='M50 50c0-27.614 22.386-50 50-50v100c-27.614 0-50-22.386-50-50zM0 50c0 27.614 22.386 50 50 50V0C22.386 0 0 22.386 0 50z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
             }}>
        </div>
        
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute rounded-full animate-float-particle opacity-20",
              i % 5 === 0 && "bg-gradient-to-r from-rose-300 to-pink-300 w-4 h-4 animate-heartbeat",
              i % 5 === 1 && "bg-gradient-to-r from-pink-300 to-purple-300 w-3 h-3 animate-gentle-pulse",
              i % 5 === 2 && "bg-gradient-to-r from-amber-300 to-orange-300 w-5 h-5 animate-floating-heart",
              i % 5 === 3 && "bg-gradient-to-r from-purple-300 to-rose-300 w-2 h-2 animate-orbit",
              i % 5 === 4 && "bg-gradient-to-r from-yellow-300 to-amber-300 w-1.5 h-1.5 animate-twinkle"
            )}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.4}s`,
              animationDuration: `${8 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto w-full">
        {/* Luxury Enhanced Main Card */}
        <div className="bg-white/85 backdrop-blur-3xl rounded-[2rem] shadow-2xl border border-white/60 overflow-hidden animate-luxury-entrance transform hover:scale-[1.01] transition-all duration-1000 relative">
          {/* Decorative pattern overlay */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f43f5e' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-22.091 17.909-40 40-40v80c-22.091 0-40-17.909-40-40zM0 40c0 22.091 17.909 40 40 40V0C17.909 0 0 17.909 0 40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
               }}>
          </div>
          
          {/* Header Section with Enhanced Luxury */}
          <div className="relative p-8 md:p-16 text-center bg-gradient-to-br from-rose-50/90 via-pink-50/80 to-amber-50/90 backdrop-blur-sm">
            {/* Enhanced Decorative Corner Elements */}
            <div className="absolute top-6 left-6 w-16 h-16 border-2 border-rose-300/50 rounded-full animate-slow-spin">
              <div className="absolute inset-2 border border-rose-400/60 rounded-full animate-gentle-pulse"></div>
            </div>
            <div className="absolute bottom-6 right-6 w-14 h-14 border-2 border-pink-300/50 rounded-full animate-slow-spin-reverse">
              <div className="absolute inset-2 border border-pink-400/60 rounded-full animate-gentle-pulse delay-500"></div>
            </div>
            <div className="absolute top-12 right-12 w-8 h-8 bg-gradient-to-r from-amber-200 to-yellow-200 rounded-full animate-gentle-pulse opacity-70"></div>
            <div className="absolute bottom-12 left-12 w-6 h-6 bg-gradient-to-r from-rose-200 to-pink-200 rounded-full animate-heartbeat opacity-70"></div>
            
            <div className="space-y-8 relative z-10">
              <h1 className="text-4xl md:text-6xl font-serif text-gray-800 animate-elegant-reveal leading-tight">
                Together We Celebrate
              </h1>
              <div className="flex items-center justify-center space-x-6 animate-fade-in delay-200">
                <div className="w-20 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent animate-expand-line"></div>
                <span className="text-3xl animate-heartbeat">💕</span>
                <div className="w-20 h-px bg-gradient-to-l from-transparent via-rose-400 to-transparent animate-expand-line"></div>
              </div>
              <h2 className="text-3xl md:text-5xl font-light text-gray-700 animate-elegant-reveal delay-300">
                10 Years of Love
              </h2>
            </div>
          </div>

          {/* Enhanced Content Section */}
          <div className="p-8 md:p-16 space-y-12 relative z-10">
            {/* Couple Section with Enhanced Design */}
            <div className="text-center space-y-6 animate-luxury-float delay-400">
              <h3 className="text-5xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 animate-shimmer-text">
                Sarah & Michael Johnson
              </h3>
              <div className="max-w-3xl mx-auto bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-white/40 shadow-xl">
                <p className="text-xl text-gray-700 animate-typewriter-luxury delay-600 leading-relaxed font-light">
                  As we celebrate a decade of marriage, we invite you to join us for an evening 
                  of love, laughter, and cherished memories as we renew our vows and look forward 
                  to many more years together.
                </p>
              </div>
            </div>

            {/* Enhanced Event Details Grid */}
            <div className="grid md:grid-cols-2 gap-8 animate-stagger-in delay-700">
              <div className="bg-gradient-to-br from-rose-50/90 via-pink-50/80 to-white/90 backdrop-blur-xl rounded-3xl p-8 text-center transform hover:scale-105 transition-all duration-700 animate-card-hover shadow-2xl border border-white/50 relative overflow-hidden">
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-10" 
                     style={{
                       backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f43f5e' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046 8.954-20 20-20v40c-11.046 0-20-8.954-20-20zM0 20c0 11.046 8.954 20 20 20V0C8.954 0 0 8.954 0 20z'/%3E%3C/g%3E%3C/svg%3E")`
                     }}>
                </div>
                
                <div className="relative z-10">
                  <h4 className="text-2xl font-semibold text-gray-800 mb-6 animate-fade-in delay-800">Ceremony</h4>
                  <div className="space-y-4 text-gray-700">
                    <div className="flex items-center justify-center space-x-3 animate-slide-in-up delay-900">
                      <span className="animate-pulse text-2xl">📅</span>
                      <span className="text-lg">Saturday, June 15, 2025</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3 animate-slide-in-up delay-1000">
                      <span className="animate-pulse text-2xl">🕖</span>
                      <span className="text-lg">7:00 PM</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3 animate-slide-in-up delay-1100">
                      <span className="animate-pulse text-2xl">📍</span>
                      <span className="text-lg">The Plaza Hotel Grand Ballroom</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50/90 via-yellow-50/80 to-white/90 backdrop-blur-xl rounded-3xl p-8 text-center transform hover:scale-105 transition-all duration-700 animate-card-hover delay-200 shadow-2xl border border-white/50 relative overflow-hidden">
                {/* Decorative pattern */}
                <div className="absolute inset-0 opacity-10" 
                     style={{
                       backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f59e0b' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046 8.954-20 20-20v40c-11.046 0-20-8.954-20-20zM0 20c0 11.046 8.954 20 20 20V0C8.954 0 0 8.954 0 20z'/%3E%3C/g%3E%3C/svg%3E")`
                     }}>
                </div>
                
                <div className="relative z-10">
                  <h4 className="text-2xl font-semibold text-gray-800 mb-6 animate-fade-in delay-1000">Reception</h4>
                  <div className="space-y-4 text-gray-700">
                    <div className="flex items-center justify-center space-x-3 animate-slide-in-up delay-1100">
                      <span className="animate-pulse text-2xl">🍽️</span>
                      <span className="text-lg">Dinner & Dancing</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3 animate-slide-in-up delay-1200">
                      <span className="animate-pulse text-2xl">🕘</span>
                      <span className="text-lg">8:30 PM - 12:00 AM</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3 animate-slide-in-up delay-1300">
                      <span className="animate-pulse text-2xl">🎵</span>
                      <span className="text-lg">Live Band & DJ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Dress Code */}
            <div className="text-center bg-gradient-to-r from-purple-50/90 via-pink-50/80 to-rose-50/90 backdrop-blur-xl rounded-3xl p-8 animate-luxury-float delay-1200 transform hover:scale-105 transition-all duration-700 relative overflow-hidden shadow-2xl border border-white/50">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-200/10 via-pink-200/10 to-rose-200/10 animate-shimmer"></div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-8 h-8 border-2 border-purple-300/40 rounded-full animate-gentle-pulse"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-2 border-pink-300/40 rounded-full animate-gentle-pulse delay-300"></div>
              
              <div className="relative z-10">
                <h4 className="text-2xl font-semibold text-gray-800 mb-4 animate-fade-in delay-1300">Dress Code</h4>
                <p className="text-xl text-gray-700 animate-fade-in delay-1400">Cocktail Attire - Please wear your finest evening wear</p>
              </div>
            </div>

            {/* Enhanced Special Message */}
            <div className="text-center space-y-6 animate-elegant-reveal delay-1400 bg-gradient-to-br from-white/80 via-rose-50/70 to-pink-50/80 backdrop-blur-xl rounded-3xl p-10 border border-white/50 shadow-2xl relative overflow-hidden">
              {/* Elegant decorative frame */}
              <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-rose-300/50 rounded-tl-2xl"></div>
              <div className="absolute top-6 right-6 w-12 h-12 border-r-2 border-t-2 border-pink-300/50 rounded-tr-2xl"></div>
              <div className="absolute bottom-6 left-6 w-12 h-12 border-l-2 border-b-2 border-rose-300/50 rounded-bl-2xl"></div>
              <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-pink-300/50 rounded-br-2xl"></div>
              
              <div className="relative z-10">
                <p className="text-2xl text-gray-700 italic animate-typewriter-luxury delay-1500 font-serif leading-relaxed">
                  "The best thing to hold onto in life is each other."
                </p>
                <p className="text-lg text-gray-600 animate-fade-in delay-1600">- Audrey Hepburn</p>
                <div className="flex items-center justify-center space-x-4 mt-8 animate-floating-heart delay-1700">
                  <span className="text-3xl">💕</span>
                  <span className="text-3xl">✨</span>
                  <span className="text-3xl">💕</span>
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
