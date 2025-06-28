import React, { useState } from 'react';
import LuxuryCard from './LuxuryCard';

const FamiliesSection = () => {
  const [selectedMember, setSelectedMember] = useState<any>(null);

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

  const openMemberModal = (member: any, family: 'bride' | 'groom') => {
    setSelectedMember({ ...member, family });
  };

  const closeMemberModal = () => {
    setSelectedMember(null);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 mb-4">
          Our Blessed Families
        </h2>
        <p className="text-lg text-gray-600 font-playfair italic">
          Two families coming together as one
        </p>
        <div className="w-24 h-px bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mt-6"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Bride's Family */}
        <LuxuryCard variant="primary" className="animate-slide-up-elegant three-tone-hover">
          <div className="flex items-center space-x-4 mb-6">
            <img 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150&h=150&fit=crop&crop=face"
              alt="Bride's Family"
              className="profile-photo"
            />
            <div>
              <button className="family-button text-left">
                <h3 className="text-2xl font-playfair font-bold text-gray-800 mb-2">
                  Bride's Family
                </h3>
                <p className="text-gray-600 font-playfair italic">The Thompson Family</p>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {brideFamily.map((member, index) => (
              <button
                key={member.name}
                onClick={() => openMemberModal(member, 'bride')}
                className="w-full bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/40 hover:bg-white/80 transition-all duration-300 transform hover:scale-105 family-button"
              >
                <div className="flex items-start space-x-4">
                  <img 
                    src={member.photo}
                    alt={member.name}
                    className="profile-photo"
                  />
                  <div className="flex-1 text-left">
                    <h4 className="font-playfair font-bold text-gray-800">{member.name}</h4>
                    <p className="text-sm text-rose-600 font-medium">{member.relation}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </LuxuryCard>

        {/* Groom's Family */}
        <LuxuryCard variant="secondary" className="animate-slide-up-elegant delay-200 three-tone-hover">
          <div className="flex items-center space-x-4 mb-6">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
              alt="Groom's Family"
              className="profile-photo"
            />
            <div>
              <button className="family-button text-left">
                <h3 className="text-2xl font-playfair font-bold text-gray-800 mb-2">
                  Groom's Family
                </h3>
                <p className="text-gray-600 font-playfair italic">The Williams Family</p>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {groomFamily.map((member, index) => (
              <button
                key={member.name}
                onClick={() => openMemberModal(member, 'groom')}
                className="w-full bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/40 hover:bg-white/80 transition-all duration-300 transform hover:scale-105 family-button"
              >
                <div className="flex items-start space-x-4">
                  <img 
                    src={member.photo}
                    alt={member.name}
                    className="profile-photo"
                  />
                  <div className="flex-1 text-left">
                    <h4 className="font-playfair font-bold text-gray-800">{member.name}</h4>
                    <p className="text-sm text-blue-600 font-medium">{member.relation}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </LuxuryCard>
      </div>

      {/* Enhanced Member Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in" onClick={closeMemberModal}>
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 max-w-md mx-4 shadow-3xl border border-white/60 animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <div className="text-center">
              <img 
                src={selectedMember.photo}
                alt={selectedMember.name}
                className="w-24 h-24 mx-auto mb-4 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <h3 className="text-2xl font-playfair font-bold text-gray-800 mb-2">{selectedMember.name}</h3>
              <p className={`text-lg font-medium mb-4 ${
                selectedMember.family === 'bride' ? 'text-rose-600' : 'text-blue-600'
              }`}>
                {selectedMember.relation}
              </p>
              <p className="text-gray-700 leading-relaxed mb-6 font-playfair italic">{selectedMember.bio}</p>
              <button
                onClick={closeMemberModal}
                className="px-6 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
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