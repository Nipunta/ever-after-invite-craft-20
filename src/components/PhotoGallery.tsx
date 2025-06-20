
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
    <div className="max-w-6xl mx-auto py-12 md:py-16 animate-luxury-float delay-300">
      {/* Enhanced Header with luxury background */}
      <div className="text-center mb-12 bg-gradient-to-br from-white/95 via-rose-50/90 to-pink-50/95 backdrop-blur-3xl rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-white/60 relative overflow-hidden mx-4 transform hover:scale-105 transition-all duration-700">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-8" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f43f5e' fill-opacity='0.12'%3E%3Cpath d='M50 50c0-27.614 22.386-50 50-50v100c-27.614 0-50-22.386-50-50zM0 50c0 27.614 22.386 50 50 50V0C22.386 0 0 22.386 0 50z'/%3E%3C/g%3E%3C/svg%3E")`
             }}>
        </div>
        
        {/* Decorative corners */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-rose-300/60 rounded-tl-xl animate-gentle-pulse"></div>
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-pink-300/60 rounded-tr-xl animate-gentle-pulse delay-200"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-rose-300/60 rounded-bl-xl animate-gentle-pulse delay-400"></div>
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-pink-300/60 rounded-br-xl animate-gentle-pulse delay-600"></div>
        
        <div className="relative z-10">
          <h3 className="text-3xl md:text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 mb-4 animate-shimmer-text">
            Our Memories
          </h3>
          <p className="text-lg text-gray-600 font-light animate-fade-in delay-200">
            A journey through ten beautiful years together
          </p>
          <div className="flex items-center justify-center space-x-4 mt-6 animate-floating-heart delay-300">
            <span className="text-2xl">💕</span>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"></div>
            <span className="text-2xl">💕</span>
          </div>
        </div>
      </div>

      {/* Enhanced Photo Carousel Container */}
      <div className="bg-gradient-to-br from-white/90 via-amber-50/80 to-rose-50/90 backdrop-blur-3xl rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-white/60 relative overflow-hidden mx-4 transform hover:scale-[1.02] transition-all duration-700">
        {/* Luxury background pattern */}
        <div className="absolute inset-0 opacity-6" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4af37' fill-opacity='0.15'%3E%3Cpath d='M60 60c0-33.137 26.863-60 60-60v120c-33.137 0-60-26.863-60-60zM0 60c0 33.137 26.863 60 60 60V0C26.863 0 0 26.863 0 60z'/%3E%3C/g%3E%3C/svg%3E")`
             }}>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-6 left-6 w-12 h-12 border-2 border-amber-300/50 rounded-full animate-gentle-pulse">
          <div className="absolute inset-2 border border-rose-300/60 rounded-full animate-gentle-pulse delay-300"></div>
        </div>
        <div className="absolute bottom-6 right-6 w-10 h-10 border-2 border-pink-300/50 rounded-full animate-gentle-pulse delay-500">
          <div className="absolute inset-2 border border-amber-300/60 rounded-full animate-gentle-pulse delay-700"></div>
        </div>
        
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
                  <div className="relative group animate-slide-in-up">
                    {/* Ornate Photo Frame */}
                    <div className="relative mx-auto w-full max-w-2xl">
                      {/* Outer decorative frame with golden elements */}
                      <div className="relative">
                        {/* Main golden frame layers */}
                        <div className="absolute -inset-6 bg-gradient-to-br from-yellow-400 via-amber-400 to-yellow-500 rounded-2xl shadow-2xl opacity-60 transform rotate-1 animate-gentle-pulse"></div>
                        <div className="absolute -inset-4 bg-gradient-to-br from-amber-300 via-yellow-300 to-amber-400 rounded-2xl shadow-xl opacity-50 transform -rotate-1"></div>
                        <div className="absolute -inset-2 bg-gradient-to-br from-yellow-200 via-amber-200 to-yellow-300 rounded-2xl shadow-lg opacity-30"></div>
                        
                        {/* Corner decorative elements */}
                        <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full shadow-lg animate-gentle-pulse">
                          <div className="absolute inset-1 border-2 border-white rounded-full"></div>
                        </div>
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full shadow-lg animate-gentle-pulse delay-200">
                          <div className="absolute inset-1 border-2 border-white rounded-full"></div>
                        </div>
                        <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full shadow-lg animate-gentle-pulse delay-400">
                          <div className="absolute inset-1 border-2 border-white rounded-full"></div>
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full shadow-lg animate-gentle-pulse delay-600">
                          <div className="absolute inset-1 border-2 border-white rounded-full"></div>
                        </div>
                        
                        {/* Photo container with inner frame */}
                        <div className="relative bg-white rounded-2xl p-3 shadow-2xl border-4 border-white group-hover:scale-105 transition-all duration-700">
                          <div className="relative overflow-hidden rounded-xl">
                            <img
                              src={photo.url}
                              alt={photo.caption}
                              className="w-full h-64 md:h-80 object-cover transform group-hover:scale-110 transition-all duration-700"
                            />
                            
                            {/* Subtle overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                            
                            {/* Floating romantic elements */}
                            <div className="absolute top-4 right-4 text-2xl animate-floating-heart opacity-70">💕</div>
                            <div className="absolute bottom-4 left-4 text-xl animate-floating-heart delay-1000 opacity-60">🌹</div>
                          </div>
                          
                          {/* Enhanced Caption */}
                          <div className="mt-4 p-4 bg-gradient-to-r from-rose-50 via-pink-50 to-amber-50 rounded-xl border border-white/50">
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
            
            {/* Enhanced Navigation Buttons */}
            <CarouselPrevious className="bg-white/90 backdrop-blur-xl border-2 border-white/60 shadow-xl hover:bg-rose-50 hover:border-rose-200 hover:scale-110 transition-all duration-300 -left-4 md:-left-12" />
            <CarouselNext className="bg-white/90 backdrop-blur-xl border-2 border-white/60 shadow-xl hover:bg-rose-50 hover:border-rose-200 hover:scale-110 transition-all duration-300 -right-4 md:-right-12" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
