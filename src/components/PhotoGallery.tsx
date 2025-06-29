import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const PhotoGallery = () => {
  const photos = [
    {
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop",
      caption: "Our engagement day - where it all began"
    },
    {
      url: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop",
      caption: "Dancing under the stars on our wedding night"
    },
    {
      url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop",
      caption: "Our first vacation together in Paris"
    },
    {
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&h=600&fit=crop",
      caption: "Building our first home together"
    },
    {
      url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop",
      caption: "Celebrating our 5th anniversary"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-12 md:py-16">
      {/* Enhanced Header with Hover Effects */}
      <div className="text-center mb-12 bg-gradient-to-br from-white/95 to-rose-50/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-white/50 relative overflow-hidden mx-4 memory-hover">
        <div className="relative z-10">
          <h3 className="text-3xl md:text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 mb-4 animate-fade-in-stagger">
            Our Memories
          </h3>
          <p className="text-lg text-gray-600 font-light animate-fade-in-stagger delay-200">
            A journey through ten beautiful years together
          </p>
          <div className="flex items-center justify-center space-x-4 mt-6 animate-fade-in-stagger delay-400">
            <span className="text-2xl animate-floating-heart">💕</span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
            <span className="text-2xl animate-floating-heart delay-500">💕</span>
          </div>
        </div>
      </div>

      {/* Enhanced Photo Carousel Container - Full Space Utilization */}
      <div className="bg-gradient-to-br from-white/90 to-amber-50/70 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-lg border border-white/50 relative overflow-hidden mx-4">
        <div className="relative z-10">
          <Carousel 
            className="w-full max-w-6xl mx-auto"
            opts={{
              align: "center",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {photos.map((photo, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full">
                  <div className="relative group memory-item">
                    {/* Full Space Photo Container - Edge to Edge */}
                    <div className="relative mx-auto w-full">
                      <div className="relative memory-hover overflow-hidden rounded-2xl shadow-2xl">
                        {/* Full container image - no cropping, maintains aspect ratio */}
                        <div className="relative w-full h-80 md:h-96 lg:h-[500px] overflow-hidden">
                          <img
                            src={photo.url}
                            alt={photo.caption}
                            className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                            style={{
                              objectFit: 'cover',
                              objectPosition: 'center'
                            }}
                          />
                          
                          {/* Subtle overlay for text readability */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                          
                          {/* Enhanced romantic elements */}
                          <div className="absolute top-6 right-6 text-3xl opacity-70 animate-floating-heart">💕</div>
                          <div className="absolute bottom-6 left-6 text-2xl opacity-60 animate-floating-heart delay-1000">🌹</div>
                          <div className="absolute top-1/2 left-6 text-xl opacity-50 animate-floating-heart delay-500">✨</div>
                          
                          {/* Caption overlay at bottom - full width */}
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                            <p className="text-white font-serif italic text-lg md:text-xl leading-relaxed text-center">
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
            
            {/* Enhanced Navigation Buttons */}
            <CarouselPrevious className="bg-white/90 backdrop-blur-sm border border-white/60 shadow-lg hover:bg-rose-50 hover:border-rose-200 transition-all duration-300 -left-4 md:-left-12 hover:scale-110 memory-hover" />
            <CarouselNext className="bg-white/90 backdrop-blur-sm border border-white/60 shadow-lg hover:bg-rose-50 hover:border-rose-200 transition-all duration-300 -right-4 md:-right-12 hover:scale-110 memory-hover" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;