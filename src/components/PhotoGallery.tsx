
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

  // Sample photos - in a real app, these would come from props or API
  const photos: Photo[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop",
      alt: "Wedding Day",
      caption: "Our Wedding Day - June 15, 2015"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
      alt: "Honeymoon",
      caption: "Honeymoon in the Mountains"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800&h=600&fit=crop",
      alt: "Anniversary",
      caption: "5th Anniversary Celebration"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=800&h=600&fit=crop",
      alt: "Family Time",
      caption: "Family Vacation 2023"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
      alt: "Date Night",
      caption: "Date Night Adventures"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=800&h=600&fit=crop",
      alt: "Together",
      caption: "Just the Two of Us"
    }
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Our Journey Together
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of precious moments from our 10 years of marriage, 
            filled with love, laughter, and unforgettable memories.
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mt-6"></div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className={cn(
                "group relative overflow-hidden rounded-2xl cursor-pointer",
                "transform transition-all duration-300 hover:scale-105 hover:shadow-xl",
                "bg-white shadow-lg animate-fade-in"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Memory Quote */}
        <div className="text-center mt-16 animate-fade-in delay-1000">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30 max-w-2xl mx-auto">
            <p className="text-xl text-gray-700 italic mb-4">
              "Every picture tells a story, but our story is still being written. 
              Here's to the next chapter of our beautiful journey together."
            </p>
            <p className="text-gray-600">- Sarah & Michael</p>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
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
                <div className="p-6 text-center">
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
