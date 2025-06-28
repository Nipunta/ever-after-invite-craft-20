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
      particle.className = 'celebration-particle';
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.left = '50%';
      particle.style.top = '50%';
      particle.style.transform = `translate(-50%, -50%)`;
      
      const angle = (Math.PI * 2 * i) / 30;
      const velocity = 100 + Math.random() * 100;
      const finalX = Math.cos(angle) * velocity;
      const finalY = Math.sin(angle) * velocity;
      
      particle.style.setProperty('--final-x', `${finalX}px`);
      particle.style.setProperty('--final-y', `${finalY}px`);
      
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

      {/* All sections */}
      <div className="space-y-12 pb-24 relative z-20">
        {/* Simplified Invitation Header Section */}
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

        {/* Accept Invitation Button */}
        {!invitationAccepted && (
          <div className="px-4 pb-6 animate-slide-up-elegant delay-1200">
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
    <div className="min-h-screen flex items-center justify-center px-4 pt-24 relative">
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
        <h3 className="bold-dark-gradient mb-4">
          Local Attractions
        </h3>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
          Explore these wonderful places during your visit to New York City
        </p>
        <div className="w-24 h-px bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mt-6"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {localAttractions.map((attraction, index) => (
          <LuxuryCard key={attraction.name} variant="secondary" delay={index * 100} className="three-tone-hover">
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
                <div className="flex items-center justify-center mb-2">
                  <span className="text-xs sm:text-sm text-white font-semibold drop-shadow-md">{attraction.distance}</span>
                </div>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-medium drop-shadow-md">{attraction.description}</p>
              </div>
            </div>
          </LuxuryCard>
        ))}
      </div>
    </div>
  );
};

export default MainInvitation;