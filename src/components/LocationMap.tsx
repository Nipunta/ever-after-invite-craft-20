
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
      description: "Beautiful park perfect for a romantic stroll",
      bgImage: "https://images.unsplash.com/photo-1538469625817-2b27ad995d48?w=400&h=300&fit=crop"
    },
    {
      name: "Fifth Avenue Shopping",
      distance: "At your doorstep", 
      description: "World-class shopping and boutiques",
      bgImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop"
    },
    {
      name: "Metropolitan Museum of Art",
      distance: "10 minutes walk",
      description: "Iconic art museum with world-renowned collections",
      bgImage: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop"
    },
    {
      name: "Rockefeller Center", 
      distance: "15 minutes walk",
      description: "Famous landmark with stunning city views",
      bgImage: "https://images.unsplash.com/photo-1605554876080-e75dc2bf7c2e?w=400&h=300&fit=crop"
    }
  ];

  const handleOpenMaps = () => {
    const googleMapsUrl = `https://maps.google.com/maps?q=The+Plaza+Hotel,+768+5th+Ave,+New+York,+NY+10019`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 pt-20 sm:pt-24 relative overflow-hidden">
      {/* Static background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 sm:left-20 w-3 h-3 bg-rose-300/40 rounded-full"></div>
        <div className="absolute bottom-32 right-8 sm:right-16 w-2 h-2 bg-pink-400/40 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-amber-300/40 rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Celebration Venue
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Join us at this magnificent location for our 10th anniversary celebration
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {/* Map Container */}
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl border border-white/40 overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-rose-100/70 to-pink-100/70 backdrop-blur-sm flex items-center justify-center relative">
              <div className="absolute inset-4 border-2 border-dashed border-rose-300/50 rounded-xl"></div>
              
              <div className="text-center p-6 sm:p-8 relative z-10">
                <MapPin className="w-12 h-12 sm:w-16 sm:h-16 text-rose-500 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">Interactive Map</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">Click to view in Google Maps</p>
                <button 
                  onClick={handleOpenMaps}
                  className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full text-sm sm:text-base"
                >
                  Open in Maps
                </button>
              </div>
            </div>
          </div>

          {/* Venue Details */}
          <div className="space-y-6">
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-xl border border-white/40">
              <h3 className="text-xl sm:text-2xl font-serif text-gray-800 mb-6">Venue Information</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-rose-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1 text-sm sm:text-base">{venueDetails.name}</h4>
                    <p className="text-gray-600 text-sm sm:text-base">{venueDetails.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-rose-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1 text-sm sm:text-base">Event Time</h4>
                    <p className="text-gray-600 text-sm sm:text-base">June 15, 2025 at 7:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Navigation className="w-5 h-5 sm:w-6 sm:h-6 text-rose-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1 text-sm sm:text-base">Getting There</h4>
                    <p className="text-gray-600 text-sm sm:text-base">Valet parking available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Transportation Details */}
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-4 sm:p-6 shadow-xl border border-white/40">
              <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">Transportation</h4>
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600">
                <p>• Nearby Airport</p>
                <p>• Train Station</p>
                <p>• Bus Stop</p>
              </div>
            </div>
          </div>
        </div>

        {/* Local Attractions Section */}
        <div className="mb-12">
          <h3 className="text-2xl sm:text-3xl font-serif text-gray-800 text-center mb-8">
            Local Attractions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {localAttractions.map((attraction, index) => (
              <div
                key={attraction.name}
                className="relative overflow-hidden rounded-2xl shadow-xl border border-white/40 h-48 sm:h-52"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${attraction.bgImage})` }}
                />
                
                {/* Dark Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                
                {/* Content with darker, bolder fonts */}
                <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col justify-end text-center">
                  <h4 className="font-bold text-white mb-2 text-base sm:text-lg drop-shadow-lg">{attraction.name}</h4>
                  <div className="flex items-center justify-center mb-2">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400 mr-1" />
                    <span className="text-xs sm:text-sm text-white font-semibold drop-shadow-md">{attraction.distance}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-medium drop-shadow-md">{attraction.description}</p>
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
