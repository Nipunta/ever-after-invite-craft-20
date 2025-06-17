
import React, { useState } from 'react';
import InvitationLayout from '@/components/InvitationLayout';
import NavigationTabs from '@/components/NavigationTabs';
import SaveTheDate from '@/components/SaveTheDate';
import MainInvitation from '@/components/MainInvitation';
import PhotoGallery from '@/components/PhotoGallery';
import LocationMap from '@/components/LocationMap';
import RSVPForm from '@/components/RSVPForm';
import CongratulationsWall from '@/components/CongratulationsWall';

const Index = () => {
  const [activeTab, setActiveTab] = useState('save-the-date');

  const tabs = [
    { id: 'save-the-date', label: 'Save The Date', icon: '💌' },
    { id: 'invitation', label: 'Invitation', icon: '💕' },
    { id: 'gallery', label: 'Gallery', icon: '📸' },
    { id: 'location', label: 'Location', icon: '📍' },
    { id: 'rsvp', label: 'RSVP', icon: '✉️' },
    { id: 'messages', label: 'Messages', icon: '💬' }
  ];

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'save-the-date':
        return <SaveTheDate />;
      case 'invitation':
        return <MainInvitation />;
      case 'gallery':
        return <PhotoGallery />;
      case 'location':
        return <LocationMap />;
      case 'rsvp':
        return <RSVPForm />;
      case 'messages':
        return <CongratulationsWall />;
      default:
        return <SaveTheDate />;
    }
  };

  return (
    <InvitationLayout>
      <NavigationTabs 
        tabs={tabs} 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />
      
      <div className="pt-20">
        {renderActiveComponent()}
      </div>
      
      {/* Footer */}
      <footer className="text-center py-8 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30">
            <p className="text-gray-600 text-sm mb-2">
              Created with love for Sarah & Michael's 10th Anniversary
            </p>
            <p className="text-gray-500 text-xs">
              June 15, 2025 • The Plaza Hotel • New York City
            </p>
          </div>
        </div>
      </footer>
    </InvitationLayout>
  );
};

export default Index;
