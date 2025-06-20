
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface Photo {
  id: number;
  src: string;
  alt: string;
  caption?: string;
}

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // AI-generated couple photos
  const photos: Photo[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop&crop=faces",
      alt: "Wedding Day",
      caption: "Our Wedding Day - June 15, 2015"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop&crop=faces",
      alt: "Romantic Dinner",
      caption: "Anniversary Dinner 2020"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop&crop=faces",
      alt: "Beach Walk",
      caption: "Sunset Walk on Our Honeymoon"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1529902645092-4695fa5d4d8c?w=800&h=600&fit=crop&crop=faces",
      alt: "Dancing",
      caption: "First Dance as Married Couple"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop&crop=faces",
      alt: "Anniversary Celebration",
      caption: "5th Anniversary Celebration"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800&h=600&fit=crop&crop=faces",
      alt: "Together",
      caption: "Just the Two of Us"
    }
  ];

  const nextPhoto = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const currentPhoto = photos[currentIndex];

  return (
    <div className="min-h-screen p-4 sm:p-6 pt-20 sm:pt-24 relative overflow-hidden">
      {/* Animated background with luxury patterns */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Multiple layered patterns for depth */}
        <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-rose-100 via-pink-50 to-amber-50" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f43f5e' fill-opacity='0.08'%3E%3Cpath d='M60 60c0-33.137 26.863-60 60-60v120c-33.137 0-60-26.863-60-60zM0 60c0 33.137 26.863 60 60 60V0C26.863 0 0 26.863 0 60z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
             }}>
        </div>
        
        {/* Decorative damask pattern */}
        <div className="absolute inset-0 opacity-3" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4af37' fill-opacity='0.06'%3E%3Cpath d='M100 100c-20 0-40-20-40-40s20-40 40-40 40 20 40 40-20 40-40 40zm0-60c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20z'/%3E%3Cpath d='M100 180c-20 0-40-20-40-40s20-40 40-40 40 20 40 40-20 40-40 40zm0-60c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20z'/%3E%3Cpath d='M20 100c-20 0-40-20-40-40s20-40 40-40 40 20 40 40-20 40-40 40zm0-60c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20z'/%3E%3Cpath d='M180 100c-20 0-40-20-40-40s20-40 40-40 40 20 40 40-20 40-40 40zm0-60c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20z'/%3E%3C/g%3E%3C/svg%3E")`
             }}>
        </div>
        
        {/* Enhanced floating particles with different shapes */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute animate-float-particle opacity-20",
              i % 4 === 0 && "w-3 h-3 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full animate-heartbeat",
              i % 4 === 1 && "w-2 h-2 bg-gradient-to-r from-amber-300 to-yellow-300 rounded-full animate-gentle-pulse",
              i % 4 === 2 && "w-4 h-4 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full animate-floating-heart",
              i % 4 === 3 && "w-1.5 h-1.5 bg-gradient-to-r from-yellow-300 to-amber-300 transform rotate-45 animate-twinkle"
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

      <div className="max-w-6xl mx-auto">
        {/* Enhanced Header with cultural motifs */}
        <div className="text-center mb-12 animate-elegant-entrance transform hover:scale-105 transition-all duration-700">
          <div className="relative bg-gradient-to-br from-white/90 via-rose-50/80 to-pink-50/90 backdrop-blur-3xl rounded-3xl p-8 shadow-2xl border border-white/60 animate-glass-morph">
            {/* Decorative cultural frame elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 border-4 border-rose-300/60 rounded-full opacity-70 animate-slow-spin">
              <div className="absolute inset-2 border-2 border-amber-300/60 rounded-full animate-gentle-pulse"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 border-4 border-pink-300/60 rounded-full opacity-70 animate-slow-spin-reverse">
              <div className="absolute inset-2 border-2 border-rose-300/60 rounded-full animate-gentle-pulse delay-500"></div>
            </div>
            
            {/* Traditional corner decorations */}
            <div className="absolute top-4 left-4 w-8 h-8 opacity-60">
              <div className="w-full h-full border-l-3 border-t-3 border-rose-300 rounded-tl-xl"></div>
              <div className="absolute inset-1 border-l-2 border-t-2 border-amber-300 rounded-tl-lg"></div>
            </div>
            <div className="absolute top-4 right-4 w-8 h-8 opacity-60">
              <div className="w-full h-full border-r-3 border-t-3 border-pink-300 rounded-tr-xl"></div>
              <div className="absolute inset-1 border-r-2 border-t-2 border-rose-300 rounded-tr-lg"></div>
            </div>
            <div className="absolute bottom-4 left-4 w-8 h-8 opacity-60">
              <div className="w-full h-full border-l-3 border-b-3 border-rose-300 rounded-bl-xl"></div>
              <div className="absolute inset-1 border-l-2 border-b-2 border-amber-300 rounded-bl-lg"></div>
            </div>
            <div className="absolute bottom-4 right-4 w-8 h-8 opacity-60">
              <div className="w-full h-full border-r-3 border-b-3 border-pink-300 rounded-br-xl"></div>
              <div className="absolute inset-1 border-r-2 border-b-2 border-rose-300 rounded-br-lg"></div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800 mb-4 animate-luxury-title relative">
              Our Memories
              <span className="absolute -top-2 -right-2 text-2xl animate-heartbeat">💕</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto animate-typewriter-luxury delay-300 px-4 font-light leading-relaxed">
              A collection of precious moments from our 10 years of marriage, 
              filled with love, laughter, and unforgettable memories.
            </p>
            <div className="w-32 h-px bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400 mx-auto mt-6 animate-expand-line delay-500"></div>
          </div>
        </div>

        {/* Enhanced Single Photo Carousel Container with decorative frame */}
        <div className="relative mb-12 animate-luxury-float delay-200">
          {/* Navigation Buttons with luxury styling */}
          <button
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-white/95 to-rose-50/95 hover:from-white hover:to-rose-100 backdrop-blur-sm rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-125 border-2 border-white/60 animate-floating-icon"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          
          <button
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-l from-white/95 to-pink-50/95 hover:from-white hover:to-pink-100 backdrop-blur-sm rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-125 border-2 border-white/60 animate-floating-icon delay-500"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Single Photo Display with Traditional Decorative Frame */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl">
              {/* Ornate Traditional Frame */}
              <div className="relative p-8 bg-gradient-to-br from-amber-100/80 via-yellow-50/70 to-rose-100/80 rounded-[3rem] shadow-2xl animate-gentle-pulse">
                {/* Frame decorative elements */}
                <div className="absolute inset-4 border-4 border-amber-300/40 rounded-[2.5rem] animate-shimmer"></div>
                <div className="absolute inset-6 border-2 border-rose-300/30 rounded-[2rem]"></div>
                
                {/* Corner ornaments */}
                <div className="absolute top-2 left-2 w-12 h-12 bg-gradient-to-br from-amber-300/60 to-yellow-300/60 rounded-full animate-gentle-pulse">
                  <div className="absolute inset-2 bg-gradient-to-br from-rose-300/60 to-pink-300/60 rounded-full"></div>
                </div>
                <div className="absolute top-2 right-2 w-12 h-12 bg-gradient-to-bl from-amber-300/60 to-yellow-300/60 rounded-full animate-gentle-pulse delay-200">
                  <div className="absolute inset-2 bg-gradient-to-bl from-rose-300/60 to-pink-300/60 rounded-full"></div>
                </div>
                <div className="absolute bottom-2 left-2 w-12 h-12 bg-gradient-to-tr from-amber-300/60 to-yellow-300/60 rounded-full animate-gentle-pulse delay-400">
                  <div className="absolute inset-2 bg-gradient-to-tr from-rose-300/60 to-pink-300/60 rounded-full"></div>
                </div>
                <div className="absolute bottom-2 right-2 w-12 h-12 bg-gradient-to-tl from-amber-300/60 to-yellow-300/60 rounded-full animate-gentle-pulse delay-600">
                  <div className="absolute inset-2 bg-gradient-to-tl from-rose-300/60 to-pink-300/60 rounded-full"></div>
                </div>
                
                {/* Photo container */}
                <div
                  className="relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] bg-white/20 backdrop-blur-sm border-2 border-white/40 animate-photo-reveal"
                  onClick={() => setSelectedPhoto(currentPhoto)}
                >
                  <div className="aspect-[4/3] w-full relative">
                    <img
                      src={currentPhoto.src}
                      alt={currentPhoto.alt}
                      className="w-full h-full object-cover transition-all duration-700 hover:brightness-110"
                    />
                    
                    {/* Photo overlay effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-6 left-6 right-6">
                        <p className="text-white text-lg font-medium text-center drop-shadow-lg">
                          {currentPhoto.caption}
                        </p>
                      </div>
                    </div>
                    
                    {/* Romantic corner hearts */}
                    <div className="absolute top-4 left-4 text-2xl animate-floating-heart opacity-80">💕</div>
                    <div className="absolute top-4 right-4 text-2xl animate-floating-heart delay-1000 opacity-80">❤️</div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 hover:opacity-100 hover:animate-shimmer transition-opacity duration-700"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Dots Indicator with luxury styling */}
          <div className="flex justify-center mt-10 space-x-4">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "transition-all duration-500 rounded-full border-2 shadow-lg hover:shadow-xl transform hover:scale-125",
                  index === currentIndex 
                    ? "w-10 h-4 bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 border-rose-300 shadow-lg animate-gentle-pulse" 
                    : "w-4 h-4 bg-gradient-to-r from-white/80 to-rose-100/80 border-gray-300 hover:bg-gradient-to-r hover:from-rose-200 hover:to-pink-200"
                )}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Memory Quote with cultural background */}
        <div className="text-center animate-luxury-float delay-1000 transform hover:scale-105 transition-all duration-700">
          <div className="bg-gradient-to-br from-white/90 via-rose-50/80 to-pink-50/90 backdrop-blur-3xl rounded-3xl p-10 shadow-2xl border-2 border-white/60 max-w-3xl mx-auto animate-glass-morph relative overflow-hidden">
            {/* Cultural pattern background */}
            <div className="absolute inset-0 opacity-8" 
                 style={{
                   backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f43f5e' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-22.091 17.909-40 40-40v80c-22.091 0-40-17.909-40-40zM0 40c0 22.091 17.909 40 40 40V0C17.909 0 0 17.909 0 40z'/%3E%3Cpath d='M40 20c11.046 0 20 8.954 20 20s-8.954 20-20 20-20-8.954-20-20 8.954-20 20-20z'/%3E%3C/g%3E%3C/svg%3E")`
                 }}>
            </div>
            
            {/* Decorative border elements */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent opacity-60"></div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent opacity-60"></div>
            
            <div className="relative z-10">
              <p className="text-xl sm:text-2xl text-gray-700 italic mb-6 animate-typewriter-luxury delay-1200 font-serif leading-relaxed">
                "Every picture tells a story, but our story is still being written. 
                Here's to the next chapter of our beautiful journey together."
              </p>
              <p className="text-gray-600 animate-fade-in delay-1400 text-lg font-medium">- Sarah & Michael</p>
              <div className="flex items-center justify-center space-x-4 mt-8 animate-floating-heart delay-1700">
                <span className="text-3xl">💕</span>
                <span className="text-3xl">✨</span>
                <span className="text-3xl">🌹</span>
                <span className="text-3xl">✨</span>
                <span className="text-3xl">💕</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex items-center justify-center p-4 animate-modal-entrance">
          <div className="relative max-w-5xl max-h-full animate-modal-content">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-16 right-0 text-white hover:text-gray-300 transition-colors transform hover:scale-110 animate-floating-close bg-white/20 backdrop-blur-sm rounded-full p-4 border border-white/30"
            >
              <X size={32} />
            </button>
            
            <div className="bg-gradient-to-br from-white via-rose-50/50 to-pink-50/50 rounded-3xl overflow-hidden shadow-2xl animate-photo-reveal border-4 border-white/30 relative">
              {/* Decorative frame for modal */}
              <div className="absolute inset-2 border-2 border-rose-300/40 rounded-2xl pointer-events-none"></div>
              
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="w-full h-auto max-h-[70vh] object-contain relative z-10"
              />
              {selectedPhoto.caption && (
                <div className="p-8 text-center animate-slide-in-up bg-gradient-to-r from-rose-50/90 to-pink-50/90 backdrop-blur-sm relative">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
                  <p className="text-xl text-gray-700 font-serif leading-relaxed">{selectedPhoto.caption}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
