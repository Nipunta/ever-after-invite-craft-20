
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
      src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&h=600&fit=crop",
      alt: "Wedding Day",
      caption: "Our Wedding Day - June 15, 2015"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=600&fit=crop",
      alt: "Romantic Dinner",
      caption: "Anniversary Dinner 2020"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800&h=600&fit=crop",
      alt: "Beach Walk",
      caption: "Sunset Walk on Our Honeymoon"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1529902645092-4695fa5d4d8c?w=800&h=600&fit=crop",
      alt: "Dancing",
      caption: "First Dance as Married Couple"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop",
      alt: "Anniversary Celebration",
      caption: "5th Anniversary Celebration"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop",
      alt: "Together",
      caption: "Just the Two of Us"
    }
  ];

  return (
    <div className="min-h-screen p-6 pt-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4 animate-bounce-in">
            Our Journey Together
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-slide-in-up delay-200">
            A collection of precious moments from our 10 years of marriage, 
            filled with love, laughter, and unforgettable memories.
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mt-6 animate-scale-in delay-300"></div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className={cn(
                "group relative overflow-hidden rounded-2xl cursor-pointer",
                "transform transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:z-10",
                "bg-white shadow-lg animate-float-in"
              )}
              style={{ 
                animationDelay: `${index * 150}ms`,
                animationDuration: '0.8s'
              }}
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
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
                <div className="animate-bounce text-red-400">❤️</div>
              </div>
            </div>
          ))}
        </div>

        {/* Memory Quote */}
        <div className="text-center mt-16 animate-fade-in delay-1000">
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/40 max-w-2xl mx-auto transform hover:scale-105 transition-all duration-500">
            <p className="text-xl text-gray-700 italic mb-4 animate-typewriter">
              "Every picture tells a story, but our story is still being written. 
              Here's to the next chapter of our beautiful journey together."
            </p>
            <p className="text-gray-600 animate-fade-in delay-500">- Sarah & Michael</p>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative max-w-4xl max-h-full animate-zoom-in">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors transform hover:scale-110 animate-bounce"
            >
              <X size={32} />
            </button>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl animate-scale-in">
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
