
import React, { useState, useEffect } from 'react';
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
    },
    {
      id: 4,
      name: "Michael's Work Team",
      message: "Your love is an inspiration to all of us. Watching you two together shows us what true partnership looks like. Happy 10th Anniversary! 🎉",
      timestamp: "2 days ago"
    },
    {
      id: 5,
      name: "The Wilson Family",
      message: "Ten years of beautiful memories and countless more to come! Thank you for showing us what love looks like. Congratulations! 💝",
      timestamp: "3 days ago"
    }
  ]);

  const [newMessage, setNewMessage] = useState({ name: '', message: '' });
  const [showInfo, setShowInfo] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  // Auto-rotate messages every 4 seconds
  useEffect(() => {
    if (messages.length > 0) {
      const interval = setInterval(() => {
        setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [messages.length]);

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
    <div className="min-h-screen p-4 sm:p-6 relative overflow-hidden">
      {/* Enhanced background with subtle pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-3 bg-gradient-to-br from-rose-100 via-pink-50 to-amber-50" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f43f5e' fill-opacity='0.08'%3E%3Cpath d='M0 0h80v80H0z'/%3E%3Cpath d='M20 20h40v40H20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
             }}>
        </div>
        
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute rounded-full animate-float-particle opacity-15",
              i % 3 === 0 && "bg-rose-300 w-3 h-3",
              i % 3 === 1 && "bg-pink-300 w-2 h-2",
              i % 3 === 2 && "bg-amber-300 w-4 h-4"
            )}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center mb-12 animate-elegant-entrance">
          <div className="relative">
            <div className="absolute -top-3 -left-3 w-6 h-6 border-l-2 border-t-2 border-rose-300 opacity-50"></div>
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-r-2 border-b-2 border-pink-300 opacity-50"></div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800 mb-4 animate-luxury-title">
              Your Wishes
            </h1>
          </div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto animate-typewriter-luxury delay-300 px-4">
            Share your love, wishes, and memories with Sarah & Michael as they celebrate their 10th anniversary
          </p>
          <div className="w-32 h-px bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400 mx-auto mt-6 animate-expand-line delay-500"></div>
        </div>

        {/* Enhanced Add Message Form */}
        <div className="bg-white/80 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/60 mb-8 animate-glass-morph relative overflow-hidden">
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-5" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f43f5e' fill-opacity='0.1'%3E%3Cpath d='M25 25c0-13.807 11.193-25 25-25v50c-13.807 0-25-11.193-25-25zM0 25c0 13.807 11.193 25 25 25V0C11.193 0 0 11.193 0 25z'/%3E%3C/g%3E%3C/svg%3E")`
               }}>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-2xl font-serif text-gray-800 mb-8 text-center animate-elegant-reveal">
              Share Your Wishes
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="animate-slide-in-up delay-600">
                <label htmlFor="name" className="block text-base font-medium text-gray-700 mb-3">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={newMessage.name}
                  onChange={(e) => setNewMessage({ ...newMessage, name: e.target.value })}
                  className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300 text-base bg-white/70 backdrop-blur-sm"
                  placeholder="e.g., John & Jane Smith, The Anderson Family, Sarah's Friends..."
                  required
                />
              </div>
              
              <div className="animate-slide-in-up delay-700">
                <label htmlFor="message" className="block text-base font-medium text-gray-700 mb-3">
                  Your Message
                </label>
                <textarea
                  id="message"
                  value={newMessage.message}
                  onChange={(e) => setNewMessage({ ...newMessage, message: e.target.value })}
                  rows={4}
                  className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300 resize-none text-base bg-white/70 backdrop-blur-sm"
                  placeholder="Share your heartfelt wishes, favorite memories, or congratulations for Sarah & Michael..."
                  required
                />
              </div>
              
              <div className="text-center animate-slide-in-up delay-800">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 animate-luxury-glow text-base font-medium"
                >
                  <Send className="w-5 h-5 mr-3" />
                  Send Your Wishes
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Enhanced Automatic Slideshow */}
        <div className="mb-12">
          <h3 className="text-2xl font-serif text-gray-800 text-center mb-8 animate-elegant-reveal">
            Messages from Loved Ones
          </h3>
          
          <div className="relative h-80 overflow-hidden rounded-3xl">
            {messages.map((message, index) => (
              <div
                key={message.id}
                className={cn(
                  "absolute inset-0 transition-all duration-1000 transform",
                  index === currentMessageIndex 
                    ? "translate-x-0 opacity-100 scale-100" 
                    : index === (currentMessageIndex - 1 + messages.length) % messages.length
                      ? "-translate-x-full opacity-0 scale-95"
                      : "translate-x-full opacity-0 scale-95"
                )}
              >
                <div className="bg-white/80 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/60 h-full flex flex-col justify-center relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-rose-300 opacity-40 rounded-tl-lg"></div>
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-pink-300 opacity-40 rounded-br-lg"></div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6 shadow-lg animate-gentle-pulse">
                      {message.name.charAt(0)}
                    </div>
                    <h4 className="font-semibold text-xl text-gray-800 mb-4">{message.name}</h4>
                    <p className="text-gray-700 leading-relaxed text-lg mb-6 italic font-serif">"{message.message}"</p>
                    <div className="flex items-center justify-center text-rose-500">
                      <Heart className="w-5 h-5 mr-2 animate-heartbeat" />
                      <span className="text-sm">{message.timestamp}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Slideshow Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {messages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentMessageIndex(index)}
                className={cn(
                  "transition-all duration-300 rounded-full",
                  index === currentMessageIndex 
                    ? "w-8 h-3 bg-gradient-to-r from-rose-500 to-pink-500 shadow-lg" 
                    : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                )}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Contact Section */}
        <div className="bg-gradient-to-br from-rose-50/90 via-pink-50/90 to-amber-50/90 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/60 animate-glass-morph delay-1000 relative overflow-hidden">
          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-5" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f43f5e' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v60C43.431 60 30 46.569 30 30zM0 30c0 16.569 13.431 30 30 30V0C13.431 0 0 13.431 0 30z'/%3E%3C/g%3E%3C/svg%3E")`
               }}>
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-serif text-gray-800 mb-4 animate-elegant-reveal">
                Need More Information?
              </h2>
              <p className="text-gray-600 animate-fade-in delay-1200">
                Have questions about the celebration? We're here to help!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <button
                onClick={() => setShowInfo(!showInfo)}
                className="flex items-center justify-center space-x-3 bg-white/90 hover:bg-white backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-card-slide-in delay-1300 border border-white/50"
              >
                <Phone className="w-6 h-6 text-rose-500" />
                <span className="text-gray-700 font-medium">Call Us</span>
              </button>

              <button
                onClick={() => setShowInfo(!showInfo)}
                className="flex items-center justify-center space-x-3 bg-white/90 hover:bg-white backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-card-slide-in delay-1400 border border-white/50"
              >
                <Mail className="w-6 h-6 text-rose-500" />
                <span className="text-gray-700 font-medium">Email Us</span>
              </button>

              <button
                onClick={() => setShowInfo(!showInfo)}
                className="flex items-center justify-center space-x-3 bg-white/90 hover:bg-white backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-card-slide-in delay-1500 border border-white/50"
              >
                <MessageCircle className="w-6 h-6 text-rose-500" />
                <span className="text-gray-700 font-medium">Text Us</span>
              </button>
            </div>

            {showInfo && (
              <div className="mt-8 p-6 bg-white/70 backdrop-blur-sm rounded-2xl animate-slide-in-up border border-white/40">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Phone</p>
                    <p className="text-rose-600 text-lg">(555) 123-4567</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Email</p>
                    <p className="text-rose-600 text-lg">sarah.michael@anniversary.com</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 mb-2">Text</p>
                    <p className="text-rose-600 text-lg">(555) 987-6543</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CongratulationsWall;
