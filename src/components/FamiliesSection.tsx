import React, { useState } from 'react';
import LuxuryCard from './LuxuryCard';

const FamiliesSection = () => {
  const [selectedFamily, setSelectedFamily] = useState<'bride' | 'groom' | null>(null);

  const brideFamily = [
    { 
      name: "Margaret Thompson", 
      relation: "Mother", 
      bio: "A loving mother and successful entrepreneur who has always been Sarah's greatest supporter.",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150&h=150&fit=crop&crop=face"
    },
    { 
      name: "Robert Thompson", 
      relation: "Father", 
      bio: "A retired teacher and devoted father who taught Sarah the value of kindness and perseverance.",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    { 
      name: "Emily Thompson", 
      relation: "Sister", 
      bio: "Sarah's younger sister and best friend, a talented artist currently pursuing her master's degree.",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const groomFamily = [
    { 
      name: "Patricia Williams", 
      relation: "Mother", 
      bio: "A compassionate nurse and wonderful cook who welcomed Sarah into the family with open arms.",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    { 
      name: "David Williams", 
      relation: "Father", 
      bio: "A veteran and skilled carpenter who taught Alex the importance of hard work and integrity.",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    { 
      name: "Marcus Williams", 
      relation: "Brother", 
      bio: "Alex's older brother and role model, a successful architect and devoted family man.",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  // Family group photos
  const brideFamilyPhoto = "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=150&h=150&fit=crop&crop=faces";
  const groomFamilyPhoto = "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=150&h=150&fit=crop&crop=faces";

  const openFamilyModal = (family: 'bride' | 'groom') => {
    setSelectedFamily(family);
  };

  const closeFamilyModal = () => {
    setSelectedFamily(null);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 mb-4 heading-wave">
          Our Blessed Families
        </h2>
        <p className="text-lg text-gray-600 font-playfair italic">
          Two families coming together as one
        </p>
        <div className="w-24 h-px bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mt-6"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Bride's Family */}
        <LuxuryCard variant="primary" className="animate-slide-up-elegant text-center family-section-card">
          <div className="family-title-with-photo">
            <img 
              src={brideFamilyPhoto}
              alt="Thompson Family"
              className="family-profile-photo"
            />
            <div>
              <h3 className="family-title-only">Bride's Family</h3>
              <p className="text-gray-600 font-playfair italic text-sm">The Thompson Family</p>
            </div>
          </div>
          <button 
            onClick={() => openFamilyModal('bride')}
            className="view-details-button"
          >
            View Family Details
          </button>
        </LuxuryCard>

        {/* Groom's Family */}
        <LuxuryCard variant="secondary" className="animate-slide-up-elegant delay-200 text-center family-section-card">
          <div className="family-title-with-photo">
            <img 
              src={groomFamilyPhoto}
              alt="Williams Family"
              className="family-profile-photo"
            />
            <div>
              <h3 className="family-title-only">Groom's Family</h3>
              <p className="text-gray-600 font-playfair italic text-sm">The Williams Family</p>
            </div>
          </div>
          <button 
            onClick={() => openFamilyModal('groom')}
            className="view-details-button"
          >
            View Family Details
          </button>
        </LuxuryCard>
      </div>

      {/* Enhanced Family Modal with Cohesive Design and Proper Height */}
      {selectedFamily && (
        <div className="fixed inset-0 z-50 flex items-center justify-center family-modal" onClick={closeFamilyModal}>
          <div className="family-modal-content relative" onClick={(e) => e.stopPropagation()}>
            
            {/* Visible Close Button */}
            <button
              onClick={closeFamilyModal}
              className="family-modal-close"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-800 mb-2">
                {selectedFamily === 'bride' ? 'The Thompson Family' : 'The Williams Family'}
              </h3>
              <p className="text-lg text-gray-600 font-playfair italic">
                {selectedFamily === 'bride' ? "Bride's Family" : "Groom's Family"}
              </p>
            </div>

            <div className="space-y-4">
              {(selectedFamily === 'bride' ? brideFamily : groomFamily).map((member, index) => (
                <div key={member.name} className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                  <div className="flex items-start space-x-4">
                    <img 
                      src={member.photo}
                      alt={member.name}
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-white shadow-lg flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg md:text-xl font-playfair font-bold text-gray-800">{member.name}</h4>
                      <p className={`text-sm font-medium mb-2 ${
                        selectedFamily === 'bride' ? 'text-rose-600' : 'text-blue-600'
                      }`}>
                        {member.relation}
                      </p>
                      <p className="text-sm md:text-base text-gray-700 leading-relaxed font-playfair">{member.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-6">
              <button
                onClick={closeFamilyModal}
                className="px-6 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 font-playfair font-bold text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FamiliesSection;