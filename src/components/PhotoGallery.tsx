
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const PhotoGallery = () => {
  const photos = [
    {
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
      caption: "Our engagement day - where it all began"
    },
    {
      url: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=400&fit=crop",
      caption: "Dancing under the stars on our wedding night"
    },
    {
      url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop",
      caption: "Our first vacation together in Paris"
    },
    {
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&h=400&fit=crop",
      caption: "Building our first home together"
    },
    {
      url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop",
      caption: "Celebrating our 5th anniversary"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-12 md:py-16">
      {/* Header */}
      <div className="text-center mb-12 bg-gradient-to-br from-white/95 to-rose-50/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-white/50 relative overflow-hidden mx-4">
        <div className="relative z-10">
          <h3 className="text-3xl md:text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 mb-4">
            Our Memories
          </h3>
          <p className="text-lg text-gray-600 font-light">
            A journey through ten beautiful years together
          </p>
          <div className="flex items-center justify-center space-x-4 mt-6">
            <span className="text-2xl">💕</span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
            <span className="text-2xl">💕</span>
          </div>
        </div>
      </div>

      {/* Photo Carousel Container */}
      <div className="bg-gradient-to-br from-white/90 to-amber-50/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-white/50 relative overflow-hidden mx-4">
        <div className="relative z-10">
          <Carousel 
            className="w-full max-w-4xl mx-auto"
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {photos.map((photo, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full">
                  <div className="relative group">
                    {/* Decorative Photo Frame */}
                    <div className="relative mx-auto w-full max-w-2xl">
                      <div className="relative">
                        {/* Simplified golden frame layers */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-yellow-300/40 via-amber-300/30 to-yellow-400/40 rounded-2xl shadow-lg"></div>
                        <div className="absolute -inset-2 bg-gradient-to-br from-amber-200/30 via-yellow-200/20 to-amber-300/30 rounded-2xl shadow-md"></div>
                        
                        {/* Corner decorative elements - simplified */}
                        <div className="absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-br from-yellow-400/60 to-amber-500/60 rounded-full shadow-md">
                          <div className="absolute inset-1 border border-white/60 rounded-full"></div>
                        </div>
                        <div className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-br from-amber-400/60 to-yellow-500/60 rounded-full shadow-md">
                          <div className="absolute inset-1 border border-white/60 rounded-full"></div>
                        </div>
                        <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-br from-yellow-400/60 to-amber-500/60 rounded-full shadow-md">
                          <div className="absolute inset-1 border border-white/60 rounded-full"></div>
                        </div>
                        <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-gradient-to-br from-amber-400/60 to-yellow-500/60 rounded-full shadow-md">
                          <div className="absolute inset-1 border border-white/60 rounded-full"></div>
                        </div>
                        
                        {/* Photo container with inner frame */}
                        <div className="relative bg-white rounded-2xl p-3 shadow-lg border-2 border-white">
                          <div className="relative overflow-hidden rounded-xl">
                            <img
                              src={photo.url}
                              alt={photo.caption}
                              className="w-full h-64 md:h-80 object-cover"
                            />
                            
                            {/* Subtle overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                            
                            {/* Simple romantic elements */}
                            <div className="absolute top-4 right-4 text-2xl opacity-70">💕</div>
                            <div className="absolute bottom-4 left-4 text-xl opacity-60">🌹</div>
                          </div>
                          
                          {/* Caption */}
                          <div className="mt-4 p-4 bg-gradient-to-r from-rose-50/80 via-pink-50/80 to-amber-50/80 rounded-xl border border-white/50">
                            <p className="text-center text-gray-700 font-serif italic text-sm md:text-base leading-relaxed">
                              "{photo.caption}"
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Buttons */}
            <CarouselPrevious className="bg-white/90 backdrop-blur-sm border border-white/60 shadow-lg hover:bg-rose-50 hover:border-rose-200 transition-all duration-300 -left-4 md:-left-12" />
            <CarouselNext className="bg-white/90 backdrop-blur-sm border border-white/60 shadow-lg hover:bg-rose-50 hover:border-rose-200 transition-all duration-300 -right-4 md:-right-12" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
