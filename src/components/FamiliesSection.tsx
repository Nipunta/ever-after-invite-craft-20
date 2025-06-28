import React, { useState } from 'react';
import LuxuryCard from './LuxuryCard';

const FamiliesSection = () => {
  const [selectedFamily, setSelectedFamily] = useState<'bride' | 'groom' | null>(null);
  const [selectedMember, setSelectedMember] = useState<any>(null);

  const brideFamily = [
    { name: "Margaret Thompson", relation: "Mother", bio: "A loving mother and successful entrepreneur who has always been Sarah's greatest supporter." },
    { name: "Robert Thompson", relation: "Father", bio: "A retired teacher and devoted father who taught Sarah the value of kindness and perseverance." },
    { name: "Emily Thompson", relation: "Sister", bio: "Sarah's younger sister and best friend, a talented artist currently pursuing her master's degree." }
  ];

  const groomFamily = [
    { name: "Patricia Williams", relation: "Mother", bio: "A compassionate nurse and wonderful cook who welcomed Sarah into the family with open arms." },
    { name: "David Williams", relation: "Father", bio: "A veteran and skilled carpenter who taught Alex the importance of hard work and integrity." },
    { name: "Marcus Williams", relation: "Brother", bio: "Alex's older brother and role model, a successful architect and devoted family man." }
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
        <LuxuryCard variant="primary" className="animate-slide-up-elegant guest-card-hover">
          <div className="mb-6">
            <h3 className="text-2xl font-playfair font-bold text-gray-800 mb-2">
              Bride's Family
            </h3>
            <p className="text-gray-600 font-playfair italic">The Thompson Family</p>
          </div>

          <div className="space-y-4">
            {brideFamily.map((member, index) => (
              <button
                key={member.name}
                onClick={() => openMemberModal(member, 'bride')}
                className="w-full bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/40 hover:bg-white/80 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-200 to-pink-300 rounded-full flex items-center justify-center text-lg font-bold text-rose-700">
                    {member.name.charAt(0)}
                  </div>
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
        <LuxuryCard variant="secondary" className="animate-slide-up-elegant delay-200 guest-card-hover">
          <div className="mb-6">
            <h3 className="text-2xl font-playfair font-bold text-gray-800 mb-2">
              Groom's Family
            </h3>
            <p className="text-gray-600 font-playfair italic">The Williams Family</p>
          </div>

          <div className="space-y-4">
            {groomFamily.map((member, index) => (
              <button
                key={member.name}
                onClick={() => openMemberModal(member, 'groom')}
                className="w-full bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/40 hover:bg-white/80 transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full flex items-center justify-center text-lg font-bold text-blue-700">
                    {member.name.charAt(0)}
                  </div>
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

      {/* Member Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm modal-backdrop" onClick={closeMemberModal}>
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 max-w-md mx-4 shadow-3xl border border-white/60 modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="text-center">
              <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-bold ${
                selectedMember.family === 'bride' 
                  ? 'bg-gradient-to-br from-rose-200 to-pink-300 text-rose-700' 
                  : 'bg-gradient-to-br from-blue-200 to-indigo-300 text-blue-700'
              }`}>
                {selectedMember.name.charAt(0)}
              </div>
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