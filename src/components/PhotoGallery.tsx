
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
      {/* Animated background with subtle pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft pattern overlay */}
        <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-rose-100 via-pink-50 to-amber-50" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f43f5e' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v60C43.431 60 30 46.569 30 30zM0 30c0 16.569 13.431 30 30 30V0C13.431 0 0 13.431 0 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
             }}>
        </div>
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute w-2 h-2 bg-rose-200 rounded-full animate-float-particle opacity-20",
              i % 3 === 0 && "bg-pink-200",
              i % 3 === 1 && "bg-amber-200"
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
        {/* Enhanced Header */}
        <div className="text-center mb-12 animate-elegant-entrance">
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-rose-300 opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-pink-300 opacity-60"></div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800 mb-4 animate-luxury-title relative">
              Our Memories
              <span className="absolute -top-2 -right-2 text-2xl animate-heartbeat">💕</span>
            </h1>
          </div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto animate-typewriter-luxury delay-300 px-4">
            A collection of precious moments from our 10 years of marriage, 
            filled with love, laughter, and unforgettable memories.
          </p>
          <div className="w-32 h-px bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400 mx-auto mt-6 animate-expand-line delay-500"></div>
        </div>

        {/* Single Photo Carousel Container */}
        <div className="relative mb-12">
          {/* Navigation Buttons */}
          <button
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-3 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 border border-white/50"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          
          <button
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full p-3 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 border border-white/50"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Single Photo Display */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl">
              <div
                className="relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-700 shadow-2xl hover:shadow-3xl transform hover:scale-105 bg-white/10 backdrop-blur-sm border border-white/30"
                onClick={() => setSelectedPhoto(currentPhoto)}
              >
                <div className="aspect-[4/3] w-full">
                  <img
                    src={currentPhoto.src}
                    alt={currentPhoto.alt}
                    className="w-full h-full object-cover transition-all duration-700 hover:brightness-110"
                  />
                </div>
                
                {/* Elegant overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-white text-lg font-medium text-center">
                      {currentPhoto.caption}
                    </p>
                  </div>
                </div>
                
                {/* Corner decorations */}
                <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-white/60 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-white/60 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 hover:opacity-100 hover:animate-pulse transition-opacity duration-700"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "transition-all duration-500 rounded-full border",
                  index === currentIndex 
                    ? "w-8 h-3 bg-gradient-to-r from-rose-500 to-pink-500 border-rose-300 shadow-lg" 
                    : "w-3 h-3 bg-white/60 border-gray-300 hover:bg-gray-200 hover:scale-125"
                )}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Memory Quote */}
        <div className="text-center animate-luxury-float delay-1000">
          <div className="bg-white/70 backdrop-blur-2xl rounded-3xl p-8 shadow-2xl border border-white/60 max-w-3xl mx-auto transform hover:scale-105 transition-all duration-700 animate-glass-morph relative overflow-hidden">
            {/* Decorative pattern */}
            <div className="absolute inset-0 opacity-5" 
                 style={{
                   backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f43f5e' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046 8.954-20 20-20v40c-11.046 0-20-8.954-20-20zM0 20c0 11.046 8.954 20 20 20V0C8.954 0 0 8.954 0 20z'/%3E%3C/g%3E%3C/svg%3E")`
                 }}>
            </div>
            
            <div className="relative z-10">
              <p className="text-xl sm:text-2xl text-gray-700 italic mb-6 animate-typewriter-luxury delay-1200 font-serif leading-relaxed">
                "Every picture tells a story, but our story is still being written. 
                Here's to the next chapter of our beautiful journey together."
              </p>
              <p className="text-gray-600 animate-fade-in delay-1400 text-lg">- Sarah & Michael</p>
              <div className="flex items-center justify-center space-x-3 mt-6 animate-floating-heart delay-1700">
                <span className="text-2xl">💕</span>
                <span className="text-2xl">✨</span>
                <span className="text-2xl">💕</span>
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
              className="absolute -top-16 right-0 text-white hover:text-gray-300 transition-colors transform hover:scale-110 animate-floating-close bg-white/10 backdrop-blur-sm rounded-full p-3"
            >
              <X size={32} />
            </button>
            
            <div className="bg-white rounded-3xl overflow-hidden shadow-2xl animate-photo-reveal border border-white/20">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              {selectedPhoto.caption && (
                <div className="p-6 text-center animate-slide-in-up bg-gradient-to-r from-rose-50 to-pink-50">
                  <p className="text-xl text-gray-700 font-serif">{selectedPhoto.caption}</p>
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
