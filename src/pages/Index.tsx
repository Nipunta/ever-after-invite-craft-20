
import React, { useState, useEffect } from 'react';
import InvitationLayout from '@/components/InvitationLayout';
import SaveTheDate from '@/components/SaveTheDate';
import MainInvitation from '@/components/MainInvitation';
import EnvelopeLanding from '@/components/EnvelopeLanding';
import SwirlCursor from '@/components/SwirlCursor';

const Index = () => {
  const [currentPage, setCurrentPage] = useState<'envelope' | 'save-the-date' | 'main-invitation'>('envelope');
  const [showNavigation, setShowNavigation] = useState(true);

  const handleOpenEnvelope = () => {
    setCurrentPage('save-the-date');
  };

  const handleNavigateToInvitation = () => {
    setCurrentPage('main-invitation');
  };

  const handleBackToSaveTheDate = () => {
    setCurrentPage('save-the-date');
  };

  // Handle scroll to hide/show navigation
  useEffect(() => {
    if (currentPage === 'envelope') return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShowNavigation(scrollPosition < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  if (currentPage === 'envelope') {
    return (
      <>
        <SwirlCursor />
        <EnvelopeLanding onOpenEnvelope={handleOpenEnvelope} />
      </>
    );
  }

  return (
    <>
      <SwirlCursor />
      <InvitationLayout page={currentPage === 'save-the-date' ? 'save-the-date' : 'full-invitation'}>
        {/* Compact Navigation Pills - made wider and shorter */}
        <div className={`fixed top-2 left-1/2 transform -translate-x-1/2 z-30 transition-all duration-500 ${
          showNavigation ? 'translate-y-0 opacity-100' : '-translate-y-12 opacity-0'
        }`}>
          <div className="bg-white/90 backdrop-blur-xl rounded-full px-2 py-0.5 shadow-lg border border-white/50">
            <div className="flex space-x-1">
              <button
                onClick={() => setCurrentPage('save-the-date')}
                className={`px-4 py-1 rounded-full text-xs font-medium transition-all duration-500 transform ${
                  currentPage === 'save-the-date'
                    ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-md scale-105'
                    : 'text-gray-600 hover:bg-gray-100 hover:scale-105'
                }`}
              >
                <span className="flex items-center space-x-1.5">
                  <span>💌</span>
                  <span>Save The Date</span>
                </span>
              </button>
              <button
                onClick={() => setCurrentPage('main-invitation')}
                className={`px-4 py-1 rounded-full text-xs font-medium transition-all duration-500 transform ${
                  currentPage === 'main-invitation'
                    ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-md scale-105'
                    : 'text-gray-600 hover:bg-gray-100 hover:scale-105'
                }`}
              >
                <span className="flex items-center space-x-1.5">
                  <span>💕</span>
                  <span>Full Invitation</span>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="min-h-screen pt-16">
          {currentPage === 'save-the-date' ? (
            <SaveTheDate onNavigateToInvitation={handleNavigateToInvitation} />
          ) : (
            <MainInvitation onBackToSaveTheDate={handleBackToSaveTheDate} />
          )}
        </div>
        
        {/* Enhanced Footer */}
        <footer className="text-center py-6 px-4 animate-fade-in delay-1000">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-2xl border border-white/50 animate-glass-morph transform hover:scale-105 transition-all duration-700 hover:rotate-1">
              <div className="flex items-center justify-center space-x-2 mb-3 animate-floating-heart">
                <span className="text-2xl">💕</span>
                <p className="text-gray-600 text-sm font-medium">
                  Created with love for Sarah & Michael's 10th Anniversary
                </p>
                <span className="text-2xl">💕</span>
              </div>
              <p className="text-gray-500 text-xs animate-shimmer-text">
                June 15, 2025 • The Plaza Hotel • New York City
              </p>
            </div>
          </div>
        </footer>
      </InvitationLayout>
    </>
  );
};

export default Index;
