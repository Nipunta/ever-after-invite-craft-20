
import React, { useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ArrowLeft, ArrowRight, Upload, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Message {
  id: string;
  name: string;
  message: string;
  avatar?: string;
  photo?: string;
}

const CongratulationsWall = () => {
  const [message, setMessage] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      name: 'Jessica & David',
      message: 'Congratulations on 10 beautiful years together! Your love story continues to inspire us all.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150&h=150&fit=crop&crop=face',
      photo: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=300&h=200&fit=crop'
    },
    {
      id: '2',
      name: 'Emily Thompson',
      message: 'Wishing you both many more years of happiness, laughter, and love. You are such a beautiful couple!',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: '3',
      name: 'The Martinez Family',
      message: 'Here\'s to celebrating your amazing journey and looking forward to all the wonderful years ahead!',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      photo: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=300&h=200&fit=crop'
    }
  ]);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhoto(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setPhotoPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() === '') {
      alert('Please enter your message.');
      return;
    }

    const newMessage: Message = {
      id: Date.now().toString(),
      name: 'Dear Guest',
      message: message.trim(),
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      photo: photoPreview || undefined
    };

    setMessages(prevMessages => [...prevMessages, newMessage]);
    setMessage('');
    setPhoto(null);
    setPhotoPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const nextMessage = () => {
    setCurrentIndex((prev) => (prev + 1) % messages.length);
  };

  const prevMessage = () => {
    setCurrentIndex((prev) => (prev - 1 + messages.length) % messages.length);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4 animate-fade-in-stagger">
          Your Wishes & Congratulations
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in-stagger delay-200">
          Share your heartfelt wishes and congratulations for Sarah & Michael's 10th anniversary celebration
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto mb-12 animate-slide-up-elegant">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/50">
          <div className="mb-6">
            <textarea
              id="message"
              rows={4}
              className="block p-4 w-full text-sm text-gray-900 bg-white/70 rounded-xl shadow-sm border border-gray-200 focus:ring-rose-500 focus:border-rose-500 transition-all duration-300 hover:shadow-md font-serif"
              placeholder="Share your heartfelt message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          
          {/* Photo Upload Section */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3 font-serif">
              Optional: Add a photo with your message
            </label>
            <div className="flex items-center space-x-4">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
                id="photo-upload"
              />
              <label
                htmlFor="photo-upload"
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-amber-100 to-yellow-100 hover:from-amber-200 hover:to-yellow-200 border border-amber-200 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105"
              >
                <Upload className="w-4 h-4 text-amber-600" />
                <span className="text-sm text-amber-700 font-medium">Upload Photo</span>
              </label>
              
              {photoPreview && (
                <div className="relative">
                  <img
                    src={photoPreview}
                    alt="Preview"
                    className="w-16 h-16 object-cover rounded-lg border-2 border-white shadow-md"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setPhoto(null);
                      setPhotoPreview(null);
                      if (fileInputRef.current) fileInputRef.current.value = '';
                    }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-rose-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-rose-600 transition-colors duration-200"
                  >
                    ×
                  </button>
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 text-white bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 font-serif font-medium"
          >
            Send Your Wishes
          </button>
        </div>
      </form>

      {/* Enhanced Wishes Display */}
      {messages.length > 0 && (
        <div className="max-w-4xl mx-auto">
          {/* Manual Navigation Controls */}
          <div className="flex justify-center items-center mb-6 space-x-4">
            <Button
              onClick={prevMessage}
              variant="outline"
              size="sm"
              className="bg-white/80 hover:bg-white border-rose-200 text-rose-600 rounded-full px-4 py-2 transition-all duration-300 hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            
            <div className="flex space-x-2">
              {messages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125",
                    index === currentIndex
                      ? "bg-gradient-to-r from-rose-500 to-pink-500 shadow-lg"
                      : "bg-gray-300 hover:bg-gray-400"
                  )}
                />
              ))}
            </div>
            
            <Button
              onClick={nextMessage}
              variant="outline"
              size="sm"
              className="bg-white/80 hover:bg-white border-rose-200 text-rose-600 rounded-full px-4 py-2 transition-all duration-300 hover:scale-105"
            >
              Next
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Single Message Display */}
          <div className="flex justify-center">
            <div className="max-w-2xl w-full">
              <div 
                key={messages[currentIndex].id}
                className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/50 relative overflow-hidden animate-fade-in-stagger transform hover:scale-105 transition-all duration-500"
              >
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 text-3xl opacity-20 animate-floating-heart">💕</div>
                <div className="text-6xl text-rose-300 font-serif absolute top-2 left-4 opacity-20">"</div>
                
                <div className="relative z-10 space-y-6">
                  {/* Message Content */}
                  <p className="text-gray-700 italic leading-relaxed text-lg font-serif">
                    {messages[currentIndex].message}
                  </p>
                  
                  {/* Optional Photo */}
                  {messages[currentIndex].photo && (
                    <div className="flex justify-center">
                      <img
                        src={messages[currentIndex].photo}
                        alt="Guest's photo"
                        className="max-w-xs w-full h-48 object-cover rounded-xl shadow-lg border-2 border-white transform hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  
                  {/* Author Info */}
                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex items-center space-x-4">
                      {messages[currentIndex].avatar && (
                        <img 
                          src={messages[currentIndex].avatar} 
                          alt={messages[currentIndex].name}
                          className="w-12 h-12 rounded-full object-cover border-3 border-white shadow-lg transform hover:scale-110 transition-transform duration-300"
                        />
                      )}
                      <h4 className="text-xl font-serif font-semibold text-gray-800">
                        — {messages[currentIndex].name}
                      </h4>
                    </div>
                  </div>
                </div>
                
                <div className="text-6xl text-rose-300 font-serif absolute bottom-2 right-4 opacity-20 rotate-180">"</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CongratulationsWall;
