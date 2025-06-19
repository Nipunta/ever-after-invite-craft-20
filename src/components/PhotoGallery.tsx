
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

  const getVisiblePhotos = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % photos.length;
      visible.push(photos[index]);
    }
    return visible;
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 pt-20 sm:pt-24 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute w-1 h-1 bg-pink-300 rounded-full animate-float-particle opacity-30",
              i % 3 === 0 && "bg-rose-300",
              i % 3 === 1 && "bg-amber-300"
            )}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 animate-elegant-entrance">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800 mb-4 animate-luxury-title">
            Our Memories
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto animate-typewriter-luxury delay-300 px-4">
            A collection of precious moments from our 10 years of marriage, 
            filled with love, laughter, and unforgettable memories.
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mt-6 animate-expand-line delay-500"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative mb-12">
          {/* Navigation Buttons */}
          <button
            onClick={prevPhoto}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
          </button>
          
          <button
            onClick={nextPhoto}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" />
          </button>

          {/* Carousel Photos */}
          <div className="flex justify-center items-center gap-2 sm:gap-4 px-12 sm:px-16">
            {getVisiblePhotos().map((photo, index) => (
              <div
                key={photo.id}
                className={cn(
                  "relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500",
                  "transform hover:scale-105 hover:shadow-2xl",
                  index === 1 
                    ? "w-64 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[480px] z-20 shadow-2xl" 
                    : "w-48 h-60 sm:w-60 sm:h-72 md:w-72 md:h-80 opacity-70 scale-90 shadow-lg"
                )}
                onClick={() => setSelectedPhoto(photo)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-all duration-700 hover:brightness-110"
                />
                
                {/* Overlay for center image */}
                {index === 1 && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm sm:text-base font-medium">
                        {photo.caption}
                      </p>
                    </div>
                  </div>
                )}
                
                {/* Corner decorations */}
                <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-rose-300 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-pink-300 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300",
                  index === currentIndex 
                    ? "bg-rose-500 scale-125" 
                    : "bg-gray-300 hover:bg-gray-400"
                )}
              />
            ))}
          </div>
        </div>

        {/* Memory Quote */}
        <div className="text-center animate-luxury-float delay-1000">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/50 max-w-2xl mx-auto transform hover:scale-105 transition-all duration-700 animate-glass-morph">
            <p className="text-lg sm:text-xl text-gray-700 italic mb-4 animate-typewriter-luxury delay-1200">
              "Every picture tells a story, but our story is still being written. 
              Here's to the next chapter of our beautiful journey together."
            </p>
            <p className="text-gray-600 animate-fade-in delay-1400">- Sarah & Michael</p>
          </div>
        </div>
      </div>

      {/* Enhanced Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-modal-entrance">
          <div className="relative max-w-4xl max-h-full animate-modal-content">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors transform hover:scale-110 animate-floating-close"
            >
              <X size={32} />
            </button>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl animate-photo-reveal">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              {selectedPhoto.caption && (
                <div className="p-4 sm:p-6 text-center animate-slide-in-up">
                  <p className="text-base sm:text-lg text-gray-700">{selectedPhoto.caption}</p>
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
