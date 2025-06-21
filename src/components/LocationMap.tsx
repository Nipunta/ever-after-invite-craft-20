
import React from 'react';
import { MapPin, Navigation, Clock, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const LocationMap = () => {
  const venueDetails = {
    name: "The Plaza Hotel",
    address: "768 5th Ave, New York, NY 10019",
    phone: "(212) 759-3000",
    website: "theplaza.com"
  };

  const localAttractions = [
    {
      name: "Central Park",
      distance: "Across the street",
      description: "Beautiful park perfect for a romantic stroll"
    },
    {
      name: "Fifth Avenue Shopping",
      distance: "At your doorstep", 
      description: "World-class shopping and boutiques"
    },
    {
      name: "Metropolitan Museum of Art",
      distance: "10 minutes walk",
      description: "Iconic art museum with world-renowned collections"
    },
    {
      name: "Rockefeller Center", 
      distance: "15 minutes walk",
      description: "Famous landmark with stunning city views"
    }
  ];

  return (
    <div className="min-h-screen p-4 sm:p-6 pt-20 sm:pt-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 sm:left-20 w-3 h-3 bg-rose-300/40 rounded-full animate-gentle-pulse"></div>
        <div className="absolute bottom-32 right-8 sm:right-16 w-2 h-2 bg-pink-400/40 rounded-full animate-gentle-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-amber-300/40 rounded-full animate-gentle-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 animate-elegant-entrance">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800 mb-4 animate-luxury-title">
            Celebration Venue
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto animate-typewriter-luxury delay-200 px-4">
            Join us at this magnificent location for our 10th anniversary celebration
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mt-6 animate-expand-line delay-400"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {/* Map Container */}
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl border border-white/40 overflow-hidden animate-card-slide-in">
            <div className="aspect-video bg-gradient-to-br from-rose-100/70 to-pink-100/70 backdrop-blur-sm flex items-center justify-center relative">
              {/* Animated map placeholder elements */}
              <div className="absolute inset-4 border-2 border-dashed border-rose-300/50 rounded-xl animate-gentle-pulse"></div>
              
              <div className="text-center p-6 sm:p-8 relative z-10">
                <MapPin className="w-12 h-12 sm:w-16 sm:h-16 text-rose-500 mx-auto mb-4 animate-floating-icon" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2 animate-fade-in delay-600">Interactive Map</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 animate-fade-in delay-700">Click to view in Google Maps</p>
                <button className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full hover:shadow-lg transition-all duration-500 transform hover:scale-105 animate-luxury-glow hover:rotate-1 text-sm sm:text-base">
                  Open in Maps
                </button>
              </div>
            </div>
          </div>

          {/* Venue Details */}
          <div className="space-y-6 animate-card-slide-in delay-300">
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-xl border border-white/40 animate-glass-morph">
              <h3 className="text-xl sm:text-2xl font-serif text-gray-800 mb-6 animate-elegant-reveal">Venue Information</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-4 group animate-slide-in-up delay-500">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-rose-500 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <div className="animate-fade-in delay-600">
                    <h4 className="font-medium text-gray-800 mb-1 text-sm sm:text-base">{venueDetails.name}</h4>
                    <p className="text-gray-600 text-sm sm:text-base">{venueDetails.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group animate-slide-in-up delay-700">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-rose-500 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <div className="animate-fade-in delay-800">
                    <h4 className="font-medium text-gray-800 mb-1 text-sm sm:text-base">Event Time</h4>
                    <p className="text-gray-600 text-sm sm:text-base">June 15, 2025 at 7:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group animate-slide-in-up delay-900">
                  <Navigation className="w-5 h-5 sm:w-6 sm:h-6 text-rose-500 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <div className="animate-fade-in delay-1000">
                    <h4 className="font-medium text-gray-800 mb-1 text-sm sm:text-base">Getting There</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Valet parking available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Transportation Details */}
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-4 sm:p-6 shadow-xl border border-white/40 animate-glass-morph delay-400">
              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 animate-elegant-reveal delay-1100">Transportation</h4>
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600">
                <p className="animate-slide-in-up delay-1200 hover:text-gray-800 transition-colors duration-300">• Nearby Airport</p>
                <p className="animate-slide-in-up delay-1300 hover:text-gray-800 transition-colors duration-300">• Train Station</p>
                <p className="animate-slide-in-up delay-1400 hover:text-gray-800 transition-colors duration-300">• Bus Stop</p>
              </div>
            </div>
          </div>
        </div>

        {/* Local Attractions Section - removed icons */}
        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-serif text-gray-800 text-center mb-8 animate-luxury-title">
            Local Attractions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {localAttractions.map((attraction, index) => (
              <div
                key={attraction.name}
                className="bg-white/70 backdrop-blur-xl rounded-2xl p-4 sm:p-6 shadow-xl border border-white/40 transform hover:scale-105 transition-all duration-500 animate-card-slide-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-center">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{attraction.name}</h4>
                  <div className="flex items-center justify-center mb-2">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-amber-500 mr-1" />
                    <span className="text-xs sm:text-sm text-gray-600">{attraction.distance}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{attraction.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
