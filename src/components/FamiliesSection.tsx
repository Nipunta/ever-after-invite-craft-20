
import React, { useState } from 'react';
import LuxuryCard from './LuxuryCard';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FamiliesSection = () => {
  const [expandedFamily, setExpandedFamily] = useState<'bride' | 'groom' | null>(null);

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

  const toggleFamily = (family: 'bride' | 'groom') => {
    setExpandedFamily(expandedFamily === family ? null : family);
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
        <LuxuryCard variant="primary" className="animate-slide-up-elegant">
          <button
            onClick={() => toggleFamily('bride')}
            className="w-full text-left group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <span className="text-4xl">🕊️</span>
                <div>
                  <h3 className="text-2xl font-playfair font-bold text-gray-800 group-hover:text-rose-600 transition-colors">
                    Bride's Family
                  </h3>
                  <p className="text-gray-600 font-playfair italic">The Thompson Family</p>
                </div>
              </div>
              {expandedFamily === 'bride' ? (
                <ChevronUp className="w-6 h-6 text-rose-600 transition-transform group-hover:scale-110" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-400 transition-transform group-hover:scale-110 group-hover:text-rose-600" />
              )}
            </div>
          </button>

          {expandedFamily === 'bride' && (
            <div className="mt-6 space-y-4 animate-fade-in">
              {brideFamily.map((member, index) => (
                <div key={member.name} className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-200 to-pink-300 rounded-full flex items-center justify-center text-lg font-bold text-rose-700">
                      {member.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-playfair font-bold text-gray-800">{member.name}</h4>
                      <p className="text-sm text-rose-600 font-medium mb-2">{member.relation}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </LuxuryCard>

        {/* Groom's Family */}
        <LuxuryCard variant="secondary" className="animate-slide-up-elegant delay-200">
          <button
            onClick={() => toggleFamily('groom')}
            className="w-full text-left group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <span className="text-4xl">🤵</span>
                <div>
                  <h3 className="text-2xl font-playfair font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    Groom's Family
                  </h3>
                  <p className="text-gray-600 font-playfair italic">The Williams Family</p>
                </div>
              </div>
              {expandedFamily === 'groom' ? (
                <ChevronUp className="w-6 h-6 text-blue-600 transition-transform group-hover:scale-110" />
              ) : (
                <ChevronDown className="w-6 h-6 text-gray-400 transition-transform group-hover:scale-110 group-hover:text-blue-600" />
              )}
            </div>
          </button>

          {expandedFamily === 'groom' && (
            <div className="mt-6 space-y-4 animate-fade-in">
              {groomFamily.map((member, index) => (
                <div key={member.name} className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full flex items-center justify-center text-lg font-bold text-blue-700">
                      {member.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-playfair font-bold text-gray-800">{member.name}</h4>
                      <p className="text-sm text-blue-600 font-medium mb-2">{member.relation}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </LuxuryCard>
      </div>
    </div>
  );
};

export default FamiliesSection;
