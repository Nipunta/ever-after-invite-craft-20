
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface CongratulationMessage {
  id: number;
  name: string;
  message: string;
  timestamp: string;
}

const CongratulationsWall = () => {
  // Sample messages - in a real app, these would come from a database
  const [messages, setMessages] = useState<CongratulationMessage[]>([
    {
      id: 1,
      name: "Emma & David",
      message: "Congratulations on 10 beautiful years together! Your love story continues to inspire us all. Here's to many more decades of happiness, laughter, and love. ❤️",
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      name: "The Johnson Family",
      message: "What an incredible milestone! Watching your love grow stronger each year has been a joy. Wishing you both endless happiness on your special day! 🥂",
      timestamp: "5 hours ago"
    },
    {
      id: 3,
      name: "Lisa & Robert",
      message: "Ten years of marriage and still going strong! You two are proof that true love exists. Congratulations and here's to your next adventure together! 💕",
      timestamp: "1 day ago"
    },
    {
      id: 4,
      name: "College Friends Group",
      message: "From college sweethearts to this amazing milestone - we've loved watching your journey! Sarah & Michael, you're perfect for each other. Cheers to 10 more! 🎉",
      timestamp: "2 days ago"
    },
    {
      id: 5,
      name: "Grandma Rose",
      message: "My dear Sarah and Michael, seeing your love bloom over these 10 years has warmed my heart. May your marriage continue to be blessed with joy, understanding, and endless love. 🌹",
      timestamp: "3 days ago"
    },
    {
      id: 6,
      name: "Work Team",
      message: "Happy 10th Anniversary! Your partnership is goals - both in life and in how you support each other. We're so happy to celebrate this special day with you! 🎊",
      timestamp: "1 week ago"
    }
  ]);

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Congratulations Wall
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Read the heartfelt messages from family and friends celebrating 
            Sarah & Michael's 10th wedding anniversary
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mt-6"></div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-fade-in delay-200">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/30">
            <div className="text-3xl font-bold text-rose-500 mb-2">{messages.length}</div>
            <div className="text-gray-600">Messages</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/30">
            <div className="text-3xl font-bold text-pink-500 mb-2">10</div>
            <div className="text-gray-600">Years Together</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-white/30">
            <div className="text-3xl font-bold text-purple-500 mb-2">∞</div>
            <div className="text-gray-600">Love & Joy</div>
          </div>
        </div>

        {/* Messages Grid */}
        <div className="space-y-6">
          {messages.map((message, index) => (
            <div
              key={message.id}
              className={cn(
                "bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/30 p-6",
                "transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl",
                "animate-fade-in"
              )}
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="flex items-start space-x-4">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center text-white font-semibold">
                    {message.name.charAt(0)}
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-800">{message.name}</h3>
                    <span className="text-sm text-gray-500">{message.timestamp}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{message.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Message Prompt */}
        <div className="mt-12 text-center animate-fade-in delay-1000">
          <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-8 border border-rose-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Want to add your congratulations?
            </h3>
            <p className="text-gray-600 mb-6">
              Send your heartfelt message to Sarah & Michael through the RSVP form
            </p>
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
              <span>Go to RSVP Form</span>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="text-center mt-16 animate-fade-in delay-1200">
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-gray-700 italic mb-4">
              "The love and support from our family and friends means the world to us. 
              Thank you for being part of our journey and celebrating this special milestone with us."
            </p>
            <p className="text-gray-600">- Sarah & Michael Johnson</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CongratulationsWall;
