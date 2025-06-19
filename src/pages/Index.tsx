
import React, { useState } from 'react';
import InvitationLayout from '@/components/InvitationLayout';
import SaveTheDate from '@/components/SaveTheDate';
import MainInvitation from '@/components/MainInvitation';
import EnvelopeLanding from '@/components/EnvelopeLanding';
import SwirlCursor from '@/components/SwirlCursor';

const Index = () => {
  const [currentPage, setCurrentPage] = useState<'envelope' | 'save-the-date' | 'main-invitation'>('envelope');

  const handleOpenEnvelope = () => {
    setCurrentPage('save-the-date');
  };

  const handleNavigateToInvitation = () => {
    setCurrentPage('main-invitation');
  };

  const handleBackToSaveTheDate = () => {
    setCurrentPage('save-the-date');
  };

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
      <InvitationLayout>
        {/* Navigation Pills */}
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-30 animate-slide-in-top">
          <div className="bg-white/90 backdrop-blur-xl rounded-full p-2 shadow-xl border border-white/50">
            <div className="flex space-x-2">
              <button
                onClick={() => setCurrentPage('save-the-date')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 transform ${
                  currentPage === 'save-the-date'
                    ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg scale-105'
                    : 'text-gray-600 hover:bg-gray-100 hover:scale-105'
                }`}
              >
                💌 Save The Date
              </button>
              <button
                onClick={() => setCurrentPage('main-invitation')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 transform ${
                  currentPage === 'main-invitation'
                    ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg scale-105'
                    : 'text-gray-600 hover:bg-gray-100 hover:scale-105'
                }`}
              >
                💕 Full Invitation
              </button>
            </div>
          </div>
        </div>

        <div className="min-h-screen pt-20">
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
