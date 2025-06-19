
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Heart, Send, Phone, Mail, MessageCircle } from 'lucide-react';

interface Message {
  id: number;
  name: string;
  message: string;
  timestamp: string;
}

const CongratulationsWall = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      name: "Emma & David",
      message: "Congratulations on your 10th anniversary! Your love story continues to inspire us all. Wishing you many more years of happiness together! ❤️",
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      name: "The Johnson Family",
      message: "What a beautiful celebration of love! We're so honored to be part of your special day. Here's to another decade of adventures together! 🥂",
      timestamp: "5 hours ago"
    },
    {
      id: 3,
      name: "Sarah's College Friends",
      message: "From college sweethearts to this beautiful milestone - we've watched your love grow stronger every year. Cheers to Sarah & Michael! 💕",
      timestamp: "1 day ago"
    }
  ]);

  const [newMessage, setNewMessage] = useState({ name: '', message: '' });
  const [showInfo, setShowInfo] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.name.trim() && newMessage.message.trim()) {
      const message: Message = {
        id: Date.now(),
        name: newMessage.name,
        message: newMessage.message,
        timestamp: "Just now"
      };
      setMessages([message, ...messages]);
      setNewMessage({ name: '', message: '' });
    }
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 pt-20 sm:pt-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute rounded-full animate-float-particle opacity-20",
              i % 3 === 0 && "bg-rose-300 w-2 h-2",
              i % 3 === 1 && "bg-pink-300 w-1.5 h-1.5",
              i % 3 === 2 && "bg-amber-300 w-3 h-3"
            )}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 animate-elegant-entrance">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800 mb-4 animate-luxury-title">
            Your Wishes
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto animate-typewriter-luxury delay-300 px-4">
            Share your love, wishes, and memories with Sarah & Michael as they celebrate their 10th anniversary
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mt-6 animate-expand-line delay-500"></div>
        </div>

        {/* Add Message Form */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/50 mb-8 sm:mb-12 animate-glass-morph">
          <h2 className="text-xl sm:text-2xl font-serif text-gray-800 mb-6 text-center animate-elegant-reveal">
            Share Your Wishes
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="animate-slide-in-up delay-600">
              <label htmlFor="name" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={newMessage.name}
                onChange={(e) => setNewMessage({ ...newMessage, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                placeholder="Enter your name..."
                required
              />
            </div>
            
            <div className="animate-slide-in-up delay-700">
              <label htmlFor="message" className="block text-sm sm:text-base font-medium text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                value={newMessage.message}
                onChange={(e) => setNewMessage({ ...newMessage, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base"
                placeholder="Share your wishes, memories, or congratulations..."
                required
              />
            </div>
            
            <div className="text-center animate-slide-in-up delay-800">
              <button
                type="submit"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-luxury-glow text-sm sm:text-base"
              >
                <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Send Your Wishes
              </button>
            </div>
          </form>
        </div>

        {/* Messages Display */}
        <div className="space-y-4 sm:space-y-6 mb-12">
          {messages.map((message, index) => (
            <div
              key={message.id}
              className="bg-white/70 backdrop-blur-xl rounded-2xl p-4 sm:p-6 shadow-xl border border-white/40 transform hover:scale-102 transition-all duration-500 animate-card-slide-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold animate-gentle-pulse text-sm sm:text-base">
                  {message.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-800 text-sm sm:text-base">{message.name}</h3>
                    <span className="text-xs sm:text-sm text-gray-500">{message.timestamp}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{message.message}</p>
                  <div className="mt-3 flex items-center text-rose-500">
                    <Heart className="w-4 h-4 mr-1 animate-heartbeat" />
                    <span className="text-xs sm:text-sm">With love</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Need More Information Section */}
        <div className="bg-gradient-to-r from-rose-50/90 to-pink-50/90 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/50 animate-glass-morph delay-1000">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-serif text-gray-800 mb-3 animate-elegant-reveal">
              Need More Information?
            </h2>
            <p className="text-gray-600 text-sm sm:text-base animate-fade-in delay-1200">
              Have questions about the celebration? We're here to help!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <button
              onClick={() => setShowInfo(!showInfo)}
              className="flex items-center justify-center space-x-3 bg-white/80 hover:bg-white backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-card-slide-in delay-1300"
            >
              <Phone className="w-5 h-5 text-rose-500" />
              <span className="text-gray-700 font-medium text-sm sm:text-base">Call Us</span>
            </button>

            <button
              onClick={() => setShowInfo(!showInfo)}
              className="flex items-center justify-center space-x-3 bg-white/80 hover:bg-white backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-card-slide-in delay-1400"
            >
              <Mail className="w-5 h-5 text-rose-500" />
              <span className="text-gray-700 font-medium text-sm sm:text-base">Email Us</span>
            </button>

            <button
              onClick={() => setShowInfo(!showInfo)}
              className="flex items-center justify-center space-x-3 bg-white/80 hover:bg-white backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-card-slide-in delay-1500"
            >
              <MessageCircle className="w-5 h-5 text-rose-500" />
              <span className="text-gray-700 font-medium text-sm sm:text-base">Text Us</span>
            </button>
          </div>

          {showInfo && (
            <div className="mt-6 p-4 sm:p-6 bg-white/60 rounded-xl animate-slide-in-up">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-medium text-gray-800 text-sm sm:text-base">Phone</p>
                  <p className="text-rose-600 text-sm sm:text-base">(555) 123-4567</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800 text-sm sm:text-base">Email</p>
                  <p className="text-rose-600 text-sm sm:text-base">sarah.michael@anniversary.com</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800 text-sm sm:text-base">Text</p>
                  <p className="text-rose-600 text-sm sm:text-base">(555) 987-6543</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CongratulationsWall;
