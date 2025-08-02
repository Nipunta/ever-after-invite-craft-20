import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import PhotoGallery from '@/components/PhotoGallery';
import CongratulationsWall from '@/components/CongratulationsWall';
import FamiliesSection from '@/components/FamiliesSection';
import EventTimeline from '@/components/EventTimeline';
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
  const [guestName, setGuestName] = useState('dear guest');

  const handleAcceptInvitation = () => {
    setShowThankYou(true);
    setInvitationAccepted(true);
    
    // Create celebration particles
    createCelebrationParticles();
    
    setTimeout(() => setShowThankYou(false), 3000);
  };

  const createCelebrationParticles = () => {
    const colors = ['#C0C0C0', '#FFD700', '#ff6b6b', '#4ecdc4', '#45b7d1', '#f093fb'];
    
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'fixed w-2 h-2 rounded-full pointer-events-none z-50';
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.left = '50%';
      particle.style.top = '50%';
      particle.style.transform = `translate(-50%, -50%)`;
      
      const angle = (Math.PI * 2 * i) / 30;
      const velocity = 100 + Math.random() * 100;
      const finalX = Math.cos(angle) * velocity;
      const finalY = Math.sin(angle) * velocity;
      
      particle.animate([
        { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
        { transform: `translate(${finalX}px, ${finalY}px) scale(1)`, opacity: 0.8, offset: 0.5 },
        { transform: `translate(${finalX * 1.5}px, ${finalY * 1.5}px) scale(0)`, opacity: 0 }
      ], {
        duration: 3000,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      });
      
      document.body.appendChild(particle);
      
      setTimeout(() => {
        if (document.body.contains(particle)) {
          document.body.removeChild(particle);
        }
      }, 3000);
    }
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

  // Ensure page starts from top
  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
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
              Thank you, {guestName}!
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

      {/* All sections - Starting from page top immediately */}
      <div className="space-y-12 pb-24 relative z-20 pt-0">
        {/* Simplified Invitation Header Section - Loads immediately */}
        <div className="animate-fade-in">
          <InvitationHeader />
        </div>

        {/* Our Blessed Families Section */}
        <div className="animate-slide-up-elegant delay-200">
          <FamiliesSection />
        </div>

        {/* Wedding Event Timeline Section */}
        <div className="animate-slide-up-elegant delay-400">
          <EventTimeline />
        </div>
        
        {/* Our Memories Section */}
        <div className="px-4 animate-slide-up-elegant delay-600">
          <PhotoGallery />
        </div>
        
        {/* Location Section - Only Local Attractions */}
        <div className="px-4 animate-slide-up-elegant delay-800">
          <LocalAttractionsOnly />
        </div>
        
        {/* Wishes Section */}
        <div className="px-4 animate-fade-in delay-1000">
          <CongratulationsWall />
        </div>

        {/* Card-Style Accept Invitation Button */}
        {!invitationAccepted && (
          <div className="px-4 pb-6 animate-slide-up-elegant delay-1200">
            <div className="max-w-4xl mx-auto">
              <LuxuryCard variant="primary" className="text-center card-style-accept-button">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="space-y-4">
                    <div className="text-6xl animate-floating-heart">💕</div>
                    <h3 className="text-2xl md:text-3xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600">
                      Join Our Celebration
                    </h3>
                  </div>

                  {/* Accept Button */}
                  <div className="pt-4">
                    <Button
                      onClick={handleAcceptInvitation}
                      className="card-accept-button bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 hover:from-rose-600 hover:via-pink-600 hover:to-purple-600 text-white font-playfair text-xl md:text-2xl px-12 md:px-16 py-6 md:py-8 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 active:scale-95 w-full sm:w-auto group relative overflow-hidden border-4 border-white/30"
                    >
                      <span className="relative z-10 flex items-center justify-center space-x-3">
                        <span className="text-2xl md:text-3xl">✨</span>
                        <span className="font-black tracking-wide uppercase">Accept Our Invitation</span>
                        <span className="text-2xl md:text-3xl">✨</span>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      
                      {/* Enhanced glow effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 -z-10"></div>
                    </Button>
                  </div>

                  {/* Footer message */}
                  <div className="pt-2">
                    <p className="text-gray-500 text-sm md:text-base font-playfair italic">
                      Click to confirm your attendance • June 15, 2025
                    </p>
                  </div>
                </div>
              </LuxuryCard>
            </div>
          </div>
        )}

        {/* Contact Information Section */}
        <div className="px-4 pb-12 animate-fade-in delay-1400">
          <div className="max-w-4xl mx-auto">
            <LuxuryCard variant="secondary" className="text-center">
              <div className="space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <div className="text-4xl animate-floating-heart">📞</div>
                  <h3 className="text-2xl md:text-3xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-500 to-amber-400">
                    Contact Information
                  </h3>
                  <p className="text-gray-600 text-lg font-playfair italic">
                    For any questions or assistance, please reach out to our coordinators
                  </p>
                  <div className="w-24 h-px bg-gradient-to-r from-rose-400 to-pink-400 mx-auto"></div>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                  {/* Wedding Coordinator */}
                  <div className="contact-card-enhanced bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                    {/* Animated gradient border */}
                    <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400 opacity-0 hover:opacity-60 transition-opacity duration-500">
                      <div className="absolute inset-[1px] rounded-2xl bg-white/80 backdrop-blur-sm" />
                    </div>
                    
                    <div className="relative z-10 space-y-4">
                      <h4 className="text-lg sm:text-xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-500 to-amber-400">
                        Wedding Coordinator
                      </h4>
                      <div className="space-y-3 text-gray-700">
                        <p className="font-semibold text-gray-800 text-base sm:text-lg">Emily Johnson</p>
                        <div className="flex flex-col items-center space-y-2">
                          <a 
                            href="tel:+15551234567" 
                            className="flex items-center justify-center space-x-2 text-gray-600 hover:text-rose-600 transition-colors duration-300 text-sm sm:text-base"
                          >
                            <span>📱</span>
                            <span>(555) 123-4567</span>
                          </a>
                          
                          {/* Tap to Call Button */}
                          <a 
                            href="tel:+15551234567"
                            className="tap-to-call-button bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center space-x-2 shadow-md hover:shadow-lg"
                          >
                            <span className="text-sm">📞</span>
                            <span>Tap to Call</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Family Contact */}
                  <div className="contact-card-enhanced bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                    {/* Animated gradient border */}
                    <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400 opacity-0 hover:opacity-60 transition-opacity duration-500">
                      <div className="absolute inset-[1px] rounded-2xl bg-white/80 backdrop-blur-sm" />
                    </div>
                    
                    <div className="relative z-10 space-y-4">
                      <h4 className="text-lg sm:text-xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-500 to-amber-400">
                        Family Contact
                      </h4>
                      <div className="space-y-3 text-gray-700">
                        <p className="font-semibold text-gray-800 text-base sm:text-lg">Margaret Thompson</p>
                        <div className="flex flex-col items-center space-y-2">
                          <a 
                            href="tel:+15559876543" 
                            className="flex items-center justify-center space-x-2 text-gray-600 hover:text-rose-600 transition-colors duration-300 text-sm sm:text-base"
                          >
                            <span>📱</span>
                            <span>(555) 987-6543</span>
                          </a>
                          
                          {/* Tap to Call Button */}
                          <a 
                            href="tel:+15559876543"
                            className="tap-to-call-button bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center space-x-2 shadow-md hover:shadow-lg"
                          >
                            <span className="text-sm">📞</span>
                            <span>Tap to Call</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="pt-4">
                  <p className="text-gray-500 text-xs sm:text-sm font-playfair italic px-4">
                    Available Monday - Friday, 9 AM - 6 PM EST
                  </p>
                </div>
              </div>
            </LuxuryCard>
          </div>
        </div>
        {/* Confirmation Message */}
        {invitationAccepted && (
          <div className="px-4 pb-6 animate-fade-in text-center">
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

const InvitationHeader = () => {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16 relative">
      <div className="max-w-5xl mx-auto w-full">
        {/* Simplified Main Header Card */}
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
                Join Us in Celebration
              </h1>
              <div className="flex items-center justify-center space-x-6">
                <div className="w-20 md:w-24 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
                <span className="text-3xl md:text-4xl animate-floating-heart">💕</span>
                <div className="w-20 md:w-24 h-px bg-gradient-to-l from-transparent via-rose-400 to-transparent"></div>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-dancing-script italic text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600">
                Sarah & Alex's Wedding
              </h2>
            </div>
          </LuxuryCard>
        </div>
      </div>
    </div>
  );
};

const LocalAttractionsOnly = () => {
  const localAttractions = [
    {
      name: "Central Park",
      distance: "Across the street",
      description: "Beautiful park perfect for a romantic stroll",
      bgImage: "https://images.unsplash.com/photo-1538469625817-2b27ad995d48?w=400&h=300&fit=crop"
    },
    {
      name: "Fifth Avenue Shopping",
      distance: "At your doorstep", 
      description: "World-class shopping and boutiques",
      bgImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop"
    },
    {
      name: "Metropolitan Museum of Art",
      distance: "10 minutes walk",
      description: "Iconic art museum with world-renowned collections",
      bgImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop"
    },
    {
      name: "Rockefeller Center", 
      distance: "15 minutes walk",
      description: "Famous landmark with stunning city views",
      bgImage: "https://images.unsplash.com/photo-1605554876080-e75dc2bf7c2e?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-2xl sm:text-3xl font-playfair font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-rose-700 to-gray-800 mb-4 heading-light-sweep">
          Local Attractions
        </h3>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
          Explore these wonderful places during your visit to New York City
        </p>
        <div className="w-24 h-px bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mt-6"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {localAttractions.map((attraction, index) => (
          <LuxuryCard key={attraction.name} variant="secondary" delay={index * 100} className="hover:scale-105 transition-all duration-300">
            <div className="relative overflow-hidden rounded-2xl shadow-xl border border-white/40 h-48 sm:h-52">
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${attraction.bgImage})` }}
              />
              
              {/* Dark Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              
              {/* Content with darker, bolder fonts */}
              <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col justify-end text-center">
                <h4 className="font-bold text-white mb-2 text-base sm:text-lg drop-shadow-lg">{attraction.name}</h4>
              </div>
            </div>
          </LuxuryCard>
        ))}
      </div>
    </div>
  );
};

export default MainInvitation;