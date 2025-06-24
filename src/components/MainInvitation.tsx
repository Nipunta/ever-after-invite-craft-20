
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import PhotoGallery from '@/components/PhotoGallery';
import LocationMap from '@/components/LocationMap';
import CongratulationsWall from '@/components/CongratulationsWall';
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
      {/* Thank You Animation Overlay */}
      {showThankYou && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm animate-fade-in">
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50 text-center animate-scale-in">
            <div className="text-6xl mb-4">💕</div>
            <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-800 mb-2">Thank you, dear guest!</h3>
            <p className="text-gray-600 font-playfair italic">We can't wait to celebrate with you</p>
          </div>
        </div>
      )}

      {/* Scroll Toggle Button */}
      <button
        onClick={handleScrollToggle}
        className="fixed bottom-6 right-6 z-40 bg-white/90 backdrop-blur-xl rounded-full p-3 shadow-lg border border-white/50 hover:scale-110 transition-all duration-300 hover:bg-white"
      >
        {isAtTop ? (
          <ArrowDown className="w-5 h-5 text-gray-600" />
        ) : (
          <ArrowUp className="w-5 h-5 text-gray-600" />
        )}
      </button>

      {/* All sections in one scrollable page */}
      <div className="space-y-8 pb-24">
        {/* Invitation Section - fade-in animation */}
        <div className="animate-fade-in">
          <InvitationContent />
        </div>
        
        {/* Our Memories Section - slide-up animation */}
        <div className="px-4 animate-[slide-up_0.8s_ease-out_0.2s_both]">
          <PhotoGallery />
        </div>
        
        {/* Location Section - zoom-in animation */}
        <div className="px-4 animate-[zoom-in_0.8s_ease-out_0.4s_both]">
          <div className="bg-gradient-to-br from-white/90 to-amber-50/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-white/50 relative overflow-hidden max-w-6xl mx-auto">
            <div className="relative z-10">
              <LocationMap />
            </div>
          </div>
        </div>
        
        {/* Wishes Section - No background, fade-in animation */}
        <div className="px-4 animate-[fade-in_0.8s_ease-out_0.6s_both]">
          <CongratulationsWall />
        </div>

        {/* Accept Invitation Button - slide-up animation */}
        {!invitationAccepted && (
          <div className="px-4 pb-12 animate-[slide-up_0.8s_ease-out_0.8s_both]">
            <div className="max-w-2xl mx-auto text-center">
              <Button
                onClick={handleAcceptInvitation}
                className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 hover:from-rose-600 hover:via-pink-600 hover:to-purple-600 text-white font-playfair text-base md:text-lg px-8 md:px-12 py-3 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                <span className="mr-2">💕</span>
                Accept Invitation
                <span className="ml-2">✨</span>
              </Button>
              <p className="text-gray-600 text-sm mt-4 opacity-80 font-playfair italic">
                Let us know you'll be joining us for this special celebration
              </p>
            </div>
          </div>
        )}

        {/* Confirmation Message after acceptance */}
        {invitationAccepted && (
          <div className="px-4 pb-12 animate-[fade-in_0.8s_ease-out] text-center">
            <div className="max-w-2xl mx-auto bg-gradient-to-br from-green-50/90 to-emerald-50/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/50">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-playfair font-bold text-gray-800 mb-2">Invitation Accepted!</h3>
              <p className="text-gray-600 font-playfair italic">We're excited to celebrate with you on June 15, 2025</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const InvitationContent = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 pt-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto w-full">
        {/* Simplified Main Card with sparkle background */}
        <div className="bg-gradient-to-br from-white/95 to-rose-50/70 backdrop-blur-sm rounded-3xl shadow-lg border border-white/50 overflow-hidden relative animate-slide-up-elegant">
          <div className="sparkle-bg"></div>
          
          {/* Header Section */}
          <div className="relative p-6 md:p-12 lg:p-16 text-center animate-fade-in-stagger">
            <div className="space-y-6 md:space-y-8 relative z-10">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-playfair font-bold text-gray-800 leading-tight animate-luxury-title">
                Together We Celebrate
              </h1>
              <div className="flex items-center justify-center space-x-6">
                <div className="w-16 md:w-20 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
                <span className="text-2xl md:text-3xl animate-floating-heart">💕</span>
                <div className="w-16 md:w-20 h-px bg-gradient-to-l from-transparent via-rose-400 to-transparent"></div>
              </div>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-light text-gray-700 font-dancing-script italic animate-fade-in delay-300">
                10 Years of Love
              </h2>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 md:p-12 lg:p-16 space-y-8 md:space-y-12 relative z-10">
            {/* Couple Section with sparkle background */}
            <div className="text-center space-y-6 animate-slide-up-elegant delay-200">
              <div className="bg-gradient-to-br from-white/95 to-rose-50/70 backdrop-blur-sm rounded-3xl p-4 md:p-6 lg:p-8 shadow-lg border border-white/50 relative overflow-hidden transform hover:scale-105 transition-all duration-500">
                <div className="sparkle-bg"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 leading-tight mb-4 md:mb-6 animate-luxury-title">
                    Sarah & Michael Johnson
                  </h3>
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/50 shadow-md relative overflow-hidden">
                    <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed font-light relative z-10 font-playfair italic">
                      As we celebrate a decade of marriage, we invite you to join us for an evening 
                      of love, laughter, and cherished memories as we renew our vows and look forward 
                      to many more years together.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Details Grid with animated backgrounds */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-gradient-to-br from-rose-50/95 to-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 text-center shadow-lg border border-white/50 relative overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-500 animate-slide-up-elegant delay-400">
                <div className="diagonal-slide-bg ceremony-bg"></div>
                
                <div className="relative z-10">
                  <h4 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 md:mb-6 font-playfair font-bold">Ceremony</h4>
                  <div className="space-y-3 md:space-y-4 text-gray-700">
                    <div className="flex items-center justify-center space-x-3 transform hover:scale-105 transition-transform duration-300">
                      <span className="text-xl md:text-2xl">📅</span>
                      <span className="text-sm md:text-lg font-playfair font-semibold">Saturday, June 15, 2025</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3 transform hover:scale-105 transition-transform duration-300">
                      <span className="text-xl md:text-2xl">🕖</span>
                      <span className="text-sm md:text-lg font-playfair font-semibold">7:00 PM</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3 transform hover:scale-105 transition-transform duration-300">
                      <span className="text-xl md:text-2xl">📍</span>
                      <span className="text-sm md:text-lg text-center font-playfair font-semibold">The Plaza Hotel Grand Ballroom</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50/95 to-white/90 backdrop-blur-sm rounded-3xl p-6 md:p-8 text-center shadow-lg border border-white/50 relative overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-500 animate-slide-up-elegant delay-500">
                <div className="diagonal-slide-bg reception-bg"></div>
                
                <div className="relative z-10">
                  <h4 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 md:mb-6 font-playfair font-bold">Reception</h4>
                  <div className="space-y-3 md:space-y-4 text-gray-700">
                    <div className="flex items-center justify-center space-x-3 transform hover:scale-105 transition-transform duration-300">
                      <span className="text-xl md:text-2xl">🍽️</span>
                      <span className="text-sm md:text-lg font-playfair font-semibold">Dinner & Dancing</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3 transform hover:scale-105 transition-transform duration-300">
                      <span className="text-xl md:text-2xl">🕘</span>
                      <span className="text-sm md:text-lg font-playfair font-semibold">8:30 PM - 12:00 AM</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3 transform hover:scale-105 transition-transform duration-300">
                      <span className="text-xl md:text-2xl">🎵</span>
                      <span className="text-sm md:text-lg font-playfair font-semibold">Live Band & DJ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dress Code with animated background */}
            <div className="text-center bg-gradient-to-br from-purple-50/95 to-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 relative overflow-hidden shadow-lg border border-white/50 transform hover:scale-105 hover:shadow-xl transition-all duration-500 animate-slide-up-elegant delay-600">
              <div className="diagonal-slide-bg dress-code-bg"></div>
              
              <div className="relative z-10">
                <h4 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 md:mb-4 font-playfair font-bold">Dress Code</h4>
                <p className="text-lg md:text-xl text-gray-700 font-light font-playfair italic">Cocktail Attire - Please wear your finest evening wear</p>
              </div>
            </div>

            {/* Special Message with animated background */}
            <div className="text-center space-y-6 bg-gradient-to-br from-white/95 to-rose-50/70 backdrop-blur-sm rounded-3xl p-10 md:p-12 border border-white/50 shadow-lg relative overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-500 animate-slide-up-elegant delay-700">
              <div className="diagonal-slide-bg special-message-bg"></div>
              
              <div className="relative z-10">
                <p className="text-xl md:text-2xl text-gray-700 italic font-playfair leading-relaxed">
                  "The best thing to hold onto in life is each other."
                </p>
                <p className="text-base md:text-lg text-gray-600 font-medium font-playfair">- Audrey Hepburn</p>
                <div className="flex items-center justify-center space-x-4 mt-6 md:mt-8">
                  <span className="text-2xl md:text-3xl animate-floating-heart">💕</span>
                  <span className="text-2xl md:text-3xl animate-floating-heart delay-200">✨</span>
                  <span className="text-2xl md:text-3xl animate-floating-heart delay-400">🌹</span>
                  <span className="text-2xl md:text-3xl animate-floating-heart delay-600">✨</span>
                  <span className="text-2xl md:text-3xl animate-floating-heart delay-800">💕</span>
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
