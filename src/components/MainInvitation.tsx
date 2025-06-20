
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
        {/* Multiple layered luxury patterns */}
        <div className="absolute inset-0 opacity-4" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f43f5e' fill-opacity='0.08'%3E%3Cpath d='M100 100c0-55.228 44.772-100 100-100v200c-55.228 0-100-44.772-100-100zM0 100c0 55.228 44.772 100 100 100V0C44.772 0 0 44.772 0 100z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
             }}>
        </div>
        
        {/* Damask pattern overlay */}
        <div className="absolute inset-0 opacity-3" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4af37' fill-opacity='0.06'%3E%3Cpath d='M60 60c-20 0-40-20-40-40s20-40 40-40 40 20 40 40-20 40-40 40zm0-60c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20z'/%3E%3Cpath d='M60 120c-20 0-40-20-40-40s20-40 40-40 40 20 40 40-20 40-40 40zm0-60c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20z'/%3E%3C/g%3E%3C/svg%3E")`
             }}>
        </div>
        
        {/* Enhanced floating particles with varied shapes and golden sparkles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute animate-float-particle opacity-20",
              i % 6 === 0 && "w-4 h-4 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full animate-heartbeat",
              i % 6 === 1 && "w-3 h-3 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full animate-gentle-pulse",
              i % 6 === 2 && "w-5 h-5 bg-gradient-to-r from-amber-300 to-orange-300 rounded-full animate-floating-heart",
              i % 6 === 3 && "w-2 h-2 bg-gradient-to-r from-purple-300 to-rose-300 rounded-full animate-orbit",
              i % 6 === 4 && "w-1.5 h-1.5 bg-gradient-to-r from-yellow-300 to-amber-300 transform rotate-45 animate-twinkle",
              i % 6 === 5 && "w-1 h-1 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full animate-shimmer"
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
        {/* Luxury Enhanced Main Card with motion animations */}
        <div className="bg-gradient-to-br from-white/90 via-rose-50/85 to-pink-50/90 backdrop-blur-3xl rounded-[2.5rem] shadow-2xl border-2 border-white/70 overflow-hidden animate-luxury-entrance transform hover:scale-[1.01] transition-all duration-1000 relative">
          {/* Enhanced decorative pattern overlay */}
          <div className="absolute inset-0 opacity-8 pointer-events-none" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='160' height='160' viewBox='0 0 160 160' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f43f5e' fill-opacity='0.12'%3E%3Cpath d='M80 80c0-44.183 35.817-80 80-80v160c-44.183 0-80-35.817-80-80zM0 80c0 44.183 35.817 80 80 80V0C35.817 0 0 35.817 0 80z'/%3E%3Cpath d='M80 40c22.091 0 40 17.909 40 40s-17.909 40-40 40-40-17.909-40-40 17.909-40 40-40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
               }}>
          </div>
          
          {/* Cultural motif corners */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-6 left-6 w-16 h-16 border-3 border-rose-300/50 rounded-full animate-slow-spin">
              <div className="absolute inset-2 border-2 border-rose-400/60 rounded-full animate-gentle-pulse"></div>
              <div className="absolute inset-4 border border-amber-400/60 rounded-full animate-gentle-pulse delay-300"></div>
            </div>
            <div className="absolute bottom-6 right-6 w-14 h-14 border-3 border-pink-300/50 rounded-full animate-slow-spin-reverse">
              <div className="absolute inset-2 border-2 border-pink-400/60 rounded-full animate-gentle-pulse delay-500"></div>
              <div className="absolute inset-4 border border-purple-400/60 rounded-full animate-gentle-pulse delay-700"></div>
            </div>
            <div className="absolute top-12 right-12 w-10 h-10 bg-gradient-to-r from-amber-200 to-yellow-200 rounded-full animate-gentle-pulse opacity-70"></div>
            <div className="absolute bottom-12 left-12 w-8 h-8 bg-gradient-to-r from-rose-200 to-pink-200 rounded-full animate-heartbeat opacity-70"></div>
          </div>
          
          {/* Header Section with Enhanced Luxury and Motion */}
          <div className="relative p-8 md:p-16 text-center bg-gradient-to-br from-rose-50/95 via-pink-50/85 to-amber-50/95 backdrop-blur-sm animate-card-slide-in">
            {/* Enhanced Decorative Corner Elements with motion */}
            <div className="absolute top-8 left-8 w-12 h-12 opacity-60">
              <div className="w-full h-full border-l-3 border-t-3 border-rose-300 rounded-tl-2xl animate-corner-glow"></div>
              <div className="absolute inset-2 border-l-2 border-t-2 border-amber-300 rounded-tl-xl animate-gentle-pulse delay-200"></div>
            </div>
            <div className="absolute top-8 right-8 w-12 h-12 opacity-60">
              <div className="w-full h-full border-r-3 border-t-3 border-pink-300 rounded-tr-2xl animate-corner-glow delay-300"></div>
              <div className="absolute inset-2 border-r-2 border-t-2 border-rose-300 rounded-tr-xl animate-gentle-pulse delay-500"></div>
            </div>
            <div className="absolute bottom-8 left-8 w-12 h-12 opacity-60">
              <div className="w-full h-full border-l-3 border-b-3 border-rose-300 rounded-bl-2xl animate-corner-glow delay-600"></div>
              <div className="absolute inset-2 border-l-2 border-b-2 border-amber-300 rounded-bl-xl animate-gentle-pulse delay-800"></div>
            </div>
            <div className="absolute bottom-8 right-8 w-12 h-12 opacity-60">
              <div className="w-full h-full border-r-3 border-b-3 border-pink-300 rounded-br-2xl animate-corner-glow delay-900"></div>
              <div className="absolute inset-2 border-r-2 border-b-2 border-rose-300 rounded-br-xl animate-gentle-pulse delay-1000"></div>
            </div>
            
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

          {/* Enhanced Content Section with varied card animations */}
          <div className="p-8 md:p-16 space-y-12 relative z-10">
            {/* Couple Section with Enhanced Design and Motion */}
            <div className="text-center space-y-6 animate-luxury-float delay-400 transform hover:scale-105 transition-all duration-700">
              <div className="bg-gradient-to-br from-white/95 via-rose-50/90 to-pink-50/95 backdrop-blur-3xl rounded-3xl p-10 shadow-2xl border-2 border-white/60 relative overflow-hidden animate-card-slide-in delay-200">
                {/* Enhanced pattern */}
                <div className="absolute inset-0 opacity-8" 
                     style={{
                       backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ec4899' fill-opacity='0.15'%3E%3Cpath d='M50 50c0-27.614 22.386-50 50-50v100c-27.614 0-50-22.386-50-50zM0 50c0 27.614 22.386 50 50 50V0C22.386 0 0 22.386 0 50z'/%3E%3Cpath d='M50 25c13.807 0 25 11.193 25 25s-11.193 25-25 25-25-11.193-25-25 11.193-25 25-25z'/%3E%3C/g%3E%3C/svg%3E")`
                     }}>
                </div>
                
                <div className="relative z-10">
                  <h3 className="text-5xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 animate-shimmer-text">
                    Sarah & Michael Johnson
                  </h3>
                  <div className="mt-8 bg-white/70 backdrop-blur-xl rounded-2xl p-8 border border-white/50 shadow-xl">
                    <p className="text-xl text-gray-700 animate-typewriter-luxury delay-600 leading-relaxed font-light">
                      As we celebrate a decade of marriage, we invite you to join us for an evening 
                      of love, laughter, and cherished memories as we renew our vows and look forward 
                      to many more years together.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Event Details Grid with Staggered Animations */}
            <div className="grid md:grid-cols-2 gap-8 animate-stagger-in delay-700">
              <div className="bg-gradient-to-br from-rose-50/95 via-pink-50/85 to-white/95 backdrop-blur-3xl rounded-3xl p-8 text-center transform hover:scale-105 transition-all duration-700 animate-card-hover shadow-2xl border-2 border-white/60 relative overflow-hidden">
                {/* Enhanced pattern with motion */}
                <div className="absolute inset-0 opacity-12 animate-shimmer" 
                     style={{
                       backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f43f5e' fill-opacity='0.15'%3E%3Cpath d='M40 40c0-22.091 17.909-40 40-40v80c-22.091 0-40-17.909-40-40zM0 40c0 22.091 17.909 40 40 40V0C17.909 0 0 17.909 0 40z'/%3E%3C/g%3E%3C/svg%3E")`
                     }}>
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute top-4 right-4 text-2xl animate-floating-heart opacity-60">💕</div>
                <div className="absolute bottom-4 left-4 text-xl animate-floating-heart delay-500 opacity-60">🌹</div>
                
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

              <div className="bg-gradient-to-br from-amber-50/95 via-yellow-50/85 to-white/95 backdrop-blur-3xl rounded-3xl p-8 text-center transform hover:scale-105 transition-all duration-700 animate-card-hover delay-200 shadow-2xl border-2 border-white/60 relative overflow-hidden">
                {/* Golden pattern with motion */}
                <div className="absolute inset-0 opacity-12 animate-shimmer delay-300" 
                     style={{
                       backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f59e0b' fill-opacity='0.15'%3E%3Cpath d='M40 40c0-22.091 17.909-40 40-40v80c-22.091 0-40-17.909-40-40zM0 40c0 22.091 17.909 40 40 40V0C17.909 0 0 17.909 0 40z'/%3E%3C/g%3E%3C/svg%3E")`
                     }}>
                </div>
                
                {/* Floating decorative elements */}
                <div className="absolute top-4 right-4 text-2xl animate-floating-heart opacity-60">🥂</div>
                <div className="absolute bottom-4 left-4 text-xl animate-floating-heart delay-700 opacity-60">🎵</div>
                
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

            {/* Enhanced Dress Code with Cultural Background */}
            <div className="text-center bg-gradient-to-br from-purple-50/95 via-pink-50/85 to-rose-50/95 backdrop-blur-3xl rounded-3xl p-10 animate-luxury-float delay-1200 transform hover:scale-105 transition-all duration-700 relative overflow-hidden shadow-2xl border-2 border-white/60">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-200/15 via-pink-200/15 to-rose-200/15 animate-shimmer"></div>
              
              {/* Cultural decorative pattern */}
              <div className="absolute inset-0 opacity-10" 
                   style={{
                     backgroundImage: `url("data:image/svg+xml,%3Csvg width='140' height='140' viewBox='0 0 140 140' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23a855f7' fill-opacity='0.2'%3E%3Cpath d='M70 70c0-38.66 31.34-70 70-70v140c-38.66 0-70-31.34-70-70zM0 70c0 38.66 31.34 70 70 70V0C31.34 0 0 31.34 0 70z'/%3E%3C/g%3E%3C/svg%3E")`
                   }}>
              </div>
              
              {/* decorative elements with motion */}
              <div className="absolute top-4 left-4 w-10 h-10 border-2 border-purple-300/50 rounded-full animate-gentle-pulse">
                <div className="absolute inset-2 border border-pink-300/60 rounded-full animate-gentle-pulse delay-200"></div>
              </div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-pink-300/50 rounded-full animate-gentle-pulse delay-400">
                <div className="absolute inset-2 border border-rose-300/60 rounded-full animate-gentle-pulse delay-600"></div>
              </div>
              
              <div className="relative z-10">
                <h4 className="text-2xl font-semibold text-gray-800 mb-4 animate-fade-in delay-1300">Dress Code</h4>
                <p className="text-xl text-gray-700 animate-fade-in delay-1400 font-light">Cocktail Attire - Please wear your finest evening wear</p>
              </div>
            </div>

            {/* Enhanced Special Message with Luxury Styling */}
            <div className="text-center space-y-6 animate-elegant-reveal delay-1400 bg-gradient-to-br from-white/95 via-rose-50/85 to-pink-50/95 backdrop-blur-3xl rounded-3xl p-12 border-2 border-white/60 shadow-2xl relative overflow-hidden transform hover:scale-105 transition-all duration-700">
              {/* Elegant decorative frame with motion */}
              <div className="absolute top-8 left-8 w-16 h-16 border-l-3 border-t-3 border-rose-300/60 rounded-tl-3xl animate-corner-glow"></div>
              <div className="absolute top-8 right-8 w-16 h-16 border-r-3 border-t-3 border-pink-300/60 rounded-tr-3xl animate-corner-glow delay-200"></div>
              <div className="absolute bottom-8 left-8 w-16 h-16 border-l-3 border-b-3 border-rose-300/60 rounded-bl-3xl animate-corner-glow delay-400"></div>
              <div className="absolute bottom-8 right-8 w-16 h-16 border-r-3 border-b-3 border-pink-300/60 rounded-br-3xl animate-corner-glow delay-600"></div>
              
              {/* Ornate pattern overlay */}
              <div className="absolute inset-0 opacity-8" 
                   style={{
                     backgroundImage: `url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f43f5e' fill-opacity='0.12'%3E%3Cpath d='M90 90c0-49.706 40.294-90 90-90v180c-49.706 0-90-40.294-90-90zM0 90c0 49.706 40.294 90 90 90V0C40.294 0 0 40.294 0 90z'/%3E%3Cpath d='M90 45c24.853 0 45 20.147 45 45s-20.147 45-45 45-45-20.147-45-45 20.147-45 45-45z'/%3E%3C/g%3E%3C/svg%3E")`
                   }}>
              </div>
              
              <div className="relative z-10">
                <p className="text-2xl text-gray-700 italic animate-typewriter-luxury delay-1500 font-serif leading-relaxed">
                  "The best thing to hold onto in life is each other."
                </p>
                <p className="text-lg text-gray-600 animate-fade-in delay-1600 font-medium">- Audrey Hepburn</p>
                <div className="flex items-center justify-center space-x-4 mt-8 animate-floating-heart delay-1700">
                  <span className="text-3xl">💕</span>
                  <span className="text-3xl">✨</span>
                  <span className="text-3xl">🌹</span>
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
