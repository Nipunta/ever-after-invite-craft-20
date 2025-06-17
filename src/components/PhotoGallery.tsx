
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

interface Photo {
  id: number;
  src: string;
  alt: string;
  caption?: string;
}

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

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

  return (
    <div className="min-h-screen p-6 pt-24 relative overflow-hidden">
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
          ></div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-elegant-entrance">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4 animate-luxury-title">
            Our Journey Together
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-typewriter-luxury delay-300">
            A collection of precious moments from our 10 years of marriage, 
            filled with love, laughter, and unforgettable memories.
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mt-6 animate-expand-line delay-500"></div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className={cn(
                "group relative overflow-hidden rounded-2xl cursor-pointer",
                "transform transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:z-10",
                "bg-white shadow-lg animate-photo-cascade hover:rotate-1"
              )}
              style={{ 
                animationDelay: `${index * 200}ms`,
                animationDuration: '0.8s'
              }}
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="aspect-square overflow-hidden relative">
                {/* Shimmer effect on load */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 animate-shimmer z-10"></div>
                
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2 group-hover:brightness-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-white text-sm font-medium animate-fade-in">
                    {photo.caption}
                  </p>
                </div>
              </div>
              
              {/* Floating hearts animation */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="animate-floating-heart text-red-400">❤️</div>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-rose-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-corner-glow"></div>
              <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-pink-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-corner-glow delay-100"></div>
            </div>
          ))}
        </div>

        {/* Memory Quote */}
        <div className="text-center mt-16 animate-luxury-float delay-1000">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/50 max-w-2xl mx-auto transform hover:scale-105 transition-all duration-700 animate-glass-morph">
            <p className="text-xl text-gray-700 italic mb-4 animate-typewriter-luxury delay-1200">
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
                <div className="p-6 text-center animate-slide-in-up">
                  <p className="text-lg text-gray-700">{selectedPhoto.caption}</p>
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
