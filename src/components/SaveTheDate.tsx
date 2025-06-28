import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { SaveTheDateSkeleton } from './LoadingStates';
import ParticleEffects from './ParticleEffects';
import AnimatedBackground from './AnimatedBackground';
import LuxuryCard from './LuxuryCard';

interface SaveTheDateProps {
  onNavigateToInvitation?: () => void;
}

const SaveTheDate = ({ onNavigateToInvitation }: SaveTheDateProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SaveTheDateSkeleton />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground variant="romantic" />
      
      {/* Particle Effects */}
      <ParticleEffects theme="romantic" density={25} />
      
      <div className="max-w-6xl mx-auto w-full px-4 md:px-6 pt-20 md:pt-24 relative z-20">
        {/* Dear Guest with Dark Red and Pink Gradient */}
        <div className="text-center mb-8 animate-fade-in-stagger">
          <div className="mb-6">
            <p className="dark-red-pink-gradient">
              Dear Guest
            </p>
          </div>
          
          <LuxuryCard variant="accent" className="max-w-lg mx-auto animate-slide-up-elegant">
            <h3 className="text-xl md:text-2xl font-playfair font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 mb-4">
              You're Cordially Invited
            </h3>
            <p className="text-sm md:text-base text-gray-700 font-playfair italic leading-relaxed">
              You are cordially invited to celebrate with us
            </p>
          </LuxuryCard>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left space-y-6 order-2 lg:order-1">
            {/* Save the Date Card */}
            <LuxuryCard variant="primary" delay={200} className="animate-slide-up-elegant">
              <div className="text-center">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-dancing-script font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-500 to-amber-500 leading-tight">
                  Save
                </h1>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-dancing-script font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-pink-500 to-rose-600 leading-tight -mt-4">
                  The Date
                </h1>
              </div>
            </LuxuryCard>

            {/* Sarah & Alex Card */}
            <LuxuryCard variant="secondary" delay={400} className="animate-slide-up-elegant">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-rose-700 to-gray-800">
                  Sarah & Alex
                </h2>
                <div className="w-24 h-px bg-gradient-to-r from-rose-400 to-pink-400 mx-auto lg:mx-0 mt-3"></div>
              </div>
            </LuxuryCard>

            {/* Wedding Details Card - Clean Text */}
            <LuxuryCard variant="primary" delay={600} className="animate-slide-up-elegant">
              <h3 className="text-lg md:text-xl font-playfair font-black text-gray-800 mb-4 text-center lg:text-left clean-text">
                Celebrating Our
              </h3>
              <div className="text-center lg:text-left space-y-4">
                <div className="text-4xl md:text-5xl font-dancing-script font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 clean-text">
                  Wedding Ceremony
                </div>
                
                <div className="space-y-3 text-base md:text-lg text-gray-700">
                  <div className="flex justify-center lg:justify-start items-center space-x-3">
                    <span className="text-xl">📅</span>
                    <span className="font-playfair font-bold">June 15, 2025</span>
                  </div>
                  <div className="flex justify-center lg:justify-start items-center space-x-3">
                    <span className="text-xl">🕖</span>
                    <span className="font-playfair font-bold">7:00 PM</span>
                  </div>
                  <div className="flex justify-center lg:justify-start items-center space-x-3">
                    <span className="text-xl">📍</span>
                    <span className="text-center lg:text-left font-playfair font-bold">Grand Ballroom, The Plaza Hotel</span>
                  </div>
                </div>
              </div>
            </LuxuryCard>

            {/* Call to Action - Enhanced Button */}
            <LuxuryCard variant="accent" delay={800} className="animate-slide-up-elegant">
              <div className="text-center lg:text-left">
                <p className="text-lg md:text-xl text-gray-700 mb-6 font-playfair italic leading-relaxed">
                  Join us for an evening of celebration, love, and memories as we begin our journey together
                </p>
                <button
                  onClick={onNavigateToInvitation}
                  className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 hover:from-rose-600 hover:via-pink-600 hover:to-purple-600 active:scale-95 text-base md:text-lg transform hover:scale-105 group relative overflow-hidden"
                >
                  <span className="relative z-10 font-playfair font-bold flex items-center justify-center space-x-2">
                    <span>✨ Open Our Wedding Invitation ✨</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </button>
              </div>
            </LuxuryCard>
          </div>

          {/* Right side - Couple Photo */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 animate-fade-in-stagger delay-1000">
            <div className="relative group">
              <div className="relative w-72 h-96 sm:w-80 sm:h-[420px] md:w-96 md:h-[480px]">
                {/* Enhanced frame with multiple layers */}
                <div className="absolute -inset-2 bg-gradient-to-br from-yellow-300/40 via-amber-300/30 to-yellow-400/40 rounded-3xl shadow-2xl blur-sm"></div>
                <div className="absolute -inset-1 bg-gradient-to-br from-amber-200/50 via-yellow-200/40 to-amber-300/50 rounded-3xl shadow-xl"></div>
                
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-105 transition-all duration-700 hover:shadow-3xl">
                  <img
                    src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=800&fit=crop&crop=faces"
                    alt="Sarah & Alex - Happy Couple"
                    className="w-full h-full object-cover"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5"></div>
                  
                  {/* Enhanced floating elements */}
                  <div className="absolute top-6 right-6 text-2xl opacity-80 animate-floating-heart">💕</div>
                  <div className="absolute bottom-8 left-6 text-xl opacity-70 animate-floating-heart delay-1000">❤️</div>
                  <div className="absolute top-1/3 left-4 text-lg opacity-60 animate-floating-heart delay-500">✨</div>
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