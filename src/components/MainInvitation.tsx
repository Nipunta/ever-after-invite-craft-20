
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import PhotoGallery from '@/components/PhotoGallery';
import LocationMap from '@/components/LocationMap';
import CongratulationsWall from '@/components/CongratulationsWall';
import ParticleEffects from './ParticleEffects';
import AnimatedBackground from './AnimatedBackground';
import LuxuryCard from './LuxuryCard';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { ArrowUp, ArrowDown } from 'lucide-react';

interface MainInvitationProps {
  onBackToSaveTheDate?: () => void;
}

const MainInvitation = ({ onBackToSaveTheDate }: MainInvitationProps) => {
  const [showThankYou, setShowThankYou] = useState(false);
  const [invitationAccepted, setInvitationAccepted] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  const handleAcceptInvitation = () => {
    setShowThankYou(true);
    setInvitationAccepted(true);
    setTimeout(() => setShowThankYou(false), 3000);
  };

  const handleScrollToggle = () => {
    if (isAtTop) {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground variant="elegant" />
      
      {/* Particle Effects */}
      <ParticleEffects theme="luxury" density={35} />

      {/* Thank You Animation Overlay */}
      {showThankYou && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm animate-fade-in">
          <LuxuryCard variant="primary" className="text-center animate-scale-in max-w-md mx-4">
            <div className="text-6xl mb-4">💕</div>
            <h3 className="text-2xl md:text-3xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 mb-2">
              Thank you, dear guest!
            </h3>
            <p className="text-gray-700 font-playfair italic">We can't wait to celebrate with you</p>
          </LuxuryCard>
        </div>
      )}

      {/* Scroll Toggle Button */}
      <button
        onClick={handleScrollToggle}
        className="fixed bottom-6 right-6 z-40 bg-white/95 backdrop-blur-xl rounded-full p-4 shadow-2xl border border-white/60 hover:scale-110 transition-all duration-300 hover:bg-white hover:shadow-3xl group"
      >
        {isAtTop ? (
          <ArrowDown className="w-6 h-6 text-gray-700 group-hover:text-rose-600 transition-colors" />
        ) : (
          <ArrowUp className="w-6 h-6 text-gray-700 group-hover:text-rose-600 transition-colors" />
        )}
      </button>

      {/* All sections */}
      <div className="space-y-12 pb-24 relative z-20">
        {/* Invitation Section */}
        <div className="animate-fade-in">
          <InvitationContent />
        </div>
        
        {/* Our Memories Section */}
        <div className="px-4 animate-slide-up-elegant delay-200">
          <PhotoGallery />
        </div>
        
        {/* Location Section */}
        <div className="px-4 animate-slide-up-elegant delay-400">
          <LuxuryCard variant="secondary" className="max-w-6xl mx-auto">
            <LocationMap />
          </LuxuryCard>
        </div>
        
        {/* Wishes Section */}
        <div className="px-4 animate-fade-in delay-600">
          <CongratulationsWall />
        </div>

        {/* Accept Invitation Button */}
        {!invitationAccepted && (
          <div className="px-4 pb-12 animate-slide-up-elegant delay-800">
            <div className="max-w-2xl mx-auto text-center">
              <Button
                onClick={handleAcceptInvitation}
                className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 hover:from-rose-600 hover:via-pink-600 hover:to-purple-600 text-white font-playfair text-base md:text-lg px-8 md:px-12 py-4 md:py-5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 active:scale-95 w-full sm:w-auto group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>💕</span>
                  <span className="font-semibold">Accept Invitation</span>
                  <span>✨</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Button>
              <p className="text-gray-600 text-sm mt-4 opacity-80 font-playfair italic">
                Let us know you'll be joining us for this special celebration
              </p>
            </div>
          </div>
        )}

        {/* Confirmation Message */}
        {invitationAccepted && (
          <div className="px-4 pb-12 animate-fade-in text-center">
            <div className="max-w-2xl mx-auto">
              <LuxuryCard variant="accent">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-xl font-playfair font-bold text-gray-800 mb-2">Invitation Accepted!</h3>
                <p className="text-gray-600 font-playfair italic">We're excited to celebrate with you on June 15, 2025</p>
              </LuxuryCard>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const InvitationContent = () => {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });
  const ceremonyAnimation = useScrollAnimation({ threshold: 0.3 });
  const receptionAnimation = useScrollAnimation({ threshold: 0.3 });
  const dressCodeAnimation = useScrollAnimation({ threshold: 0.3 });
  const messageAnimation = useScrollAnimation({ threshold: 0.3 });

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-24 relative">
      <div className="max-w-5xl mx-auto w-full">
        {/* Main Header Card */}
        <div ref={headerAnimation.ref}>
          <LuxuryCard 
            variant="primary" 
            className={cn(
              "mb-12 text-center transition-all duration-1000",
              headerAnimation.isVisible ? "animate-slide-up-elegant opacity-100" : "opacity-0 translate-y-20"
            )}
          >
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-rose-700 to-gray-800 leading-tight">
                Together We Celebrate
              </h1>
              <div className="flex items-center justify-center space-x-6">
                <div className="w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
                <span className="text-3xl md:text-4xl animate-floating-heart">💕</span>
                <div className="w-20 md:w-24 h-px bg-gradient-to-l from-transparent via-rose-400 to-transparent"></div>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-dancing-script italic text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600">
                10 Years of Love
              </h2>
            </div>
          </LuxuryCard>
        </div>

        {/* Couple Section */}
        <LuxuryCard variant="accent" className="mb-12 text-center animate-slide-up-elegant delay-300">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 mb-6">
            Sarah & Michael Johnson
          </h3>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/60 shadow-xl">
            <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-playfair italic">
              As we celebrate a decade of marriage, we invite you to join us for an evening 
              of love, laughter, and cherished memories as we renew our vows and look forward 
              to many more years together.
            </p>
          </div>
        </LuxuryCard>

        {/* Event Details Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div ref={ceremonyAnimation.ref}>
            <LuxuryCard 
              variant="primary"
              className={cn(
                "text-center transition-all duration-1000 delay-500",
                ceremonyAnimation.isVisible ? "animate-slide-up-elegant opacity-100" : "opacity-0 translate-y-20"
              )}
            >
              <h4 className="text-2xl md:text-3xl font-playfair font-bold text-gray-800 mb-6">Ceremony</h4>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-center justify-center space-x-3 transform hover:scale-105 transition-transform duration-300">
                  <span className="text-2xl md:text-3xl">📅</span>
                  <span className="text-base md:text-lg font-playfair font-bold">Saturday, June 15, 2025</span>
                </div>
                <div className="flex items-center justify-center space-x-3 transform hover:scale-105 transition-transform duration-300">
                  <span className="text-2xl md:text-3xl">🕖</span>
                  <span className="text-base md:text-lg font-playfair font-bold">7:00 PM</span>
                </div>
                <div className="flex items-center justify-center space-x-3 transform hover:scale-105 transition-transform duration-300">
                  <span className="text-2xl md:text-3xl">📍</span>
                  <span className="text-base md:text-lg text-center font-playfair font-bold">The Plaza Hotel Grand Ballroom</span>
                </div>
              </div>
            </LuxuryCard>
          </div>

          <div ref={receptionAnimation.ref}>
            <LuxuryCard 
              variant="secondary"
              className={cn(
                "text-center transition-all duration-1000 delay-700",
                receptionAnimation.isVisible ? "animate-slide-up-elegant opacity-100" : "opacity-0 translate-y-20"
              )}
            >
              <h4 className="text-2xl md:text-3xl font-playfair font-bold text-gray-800 mb-6">Reception</h4>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-center justify-center space-x-3 transform hover:scale-105 transition-transform duration-300">
                  <span className="text-2xl md:text-3xl">🍽️</span>
                  <span className="text-base md:text-lg font-playfair font-bold">Dinner & Dancing</span>
                </div>
                <div className="flex items-center justify-center space-x-3 transform hover:scale-105 transition-transform duration-300">
                  <span className="text-2xl md:text-3xl">🕘</span>
                  <span className="text-base md:text-lg font-playfair font-bold">8:30 PM - 12:00 AM</span>
                </div>
                <div className="flex items-center justify-center space-x-3 transform hover:scale-105 transition-transform duration-300">
                  <span className="text-2xl md:text-3xl">🎵</span>
                  <span className="text-base md:text-lg font-playfair font-bold">Live Band & DJ</span>
                </div>
              </div>
            </LuxuryCard>
          </div>
        </div>

        {/* Dress Code */}
        <div ref={dressCodeAnimation.ref}>
          <LuxuryCard 
            variant="accent"
            className={cn(
              "mb-12 text-center transition-all duration-1000 delay-900",
              dressCodeAnimation.isVisible ? "animate-slide-up-elegant opacity-100" : "opacity-0 translate-y-20"
            )}
          >
            <h4 className="text-2xl md:text-3xl font-playfair font-bold text-gray-800 mb-4">Dress Code</h4>
            <p className="text-lg md:text-xl text-gray-700 font-playfair italic">
              Cocktail Attire - Please wear your finest evening wear
            </p>
          </LuxuryCard>
        </div>

        {/* Special Message */}
        <div ref={messageAnimation.ref}>
          <LuxuryCard 
            variant="primary"
            className={cn(
              "text-center transition-all duration-1000 delay-1100",
              messageAnimation.isVisible ? "animate-slide-up-elegant opacity-100" : "opacity-0 translate-y-20"
            )}
          >
            <p className="text-xl md:text-2xl text-gray-700 italic font-playfair leading-relaxed mb-4">
              "The best thing to hold onto in life is each other."
            </p>
            <p className="text-base md:text-lg text-gray-600 font-playfair font-semibold mb-6">- Audrey Hepburn</p>
            <div className="flex items-center justify-center space-x-4">
              <span className="text-2xl md:text-3xl animate-floating-heart">💕</span>
              <span className="text-2xl md:text-3xl animate-floating-heart delay-200">✨</span>
              <span className="text-2xl md:text-3xl animate-floating-heart delay-400">🌹</span>
              <span className="text-2xl md:text-3xl animate-floating-heart delay-600">✨</span>
              <span className="text-2xl md:text-3xl animate-floating-heart delay-800">💕</span>
            </div>
          </LuxuryCard>
        </div>
      </div>
    </div>
  );
};

export default MainInvitation;
