
import React from 'react';
import { MapPin, Navigation, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

const LocationMap = () => {
  const venueDetails = {
    name: "The Plaza Hotel",
    address: "768 5th Ave, New York, NY 10019",
    phone: "(212) 759-3000",
    website: "theplaza.com"
  };

  return (
    <div className="min-h-screen p-6 pt-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-3 h-3 bg-rose-300/40 rounded-full animate-gentle-pulse"></div>
        <div className="absolute bottom-32 right-16 w-2 h-2 bg-pink-400/40 rounded-full animate-gentle-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-amber-300/40 rounded-full animate-gentle-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-elegant-entrance">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4 animate-luxury-title">
            Celebration Venue
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-typewriter-luxury delay-200">
            Join us at this magnificent location for our 10th anniversary celebration
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mt-6 animate-expand-line delay-400"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Container */}
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl border border-white/40 overflow-hidden animate-card-slide-in">
            <div className="aspect-video bg-gradient-to-br from-rose-100/70 to-pink-100/70 backdrop-blur-sm flex items-center justify-center relative">
              {/* Animated map placeholder elements */}
              <div className="absolute inset-4 border-2 border-dashed border-rose-300/50 rounded-xl animate-gentle-pulse"></div>
              
              <div className="text-center p-8 relative z-10">
                <MapPin className="w-16 h-16 text-rose-500 mx-auto mb-4 animate-floating-icon" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2 animate-fade-in delay-600">Interactive Map</h3>
                <p className="text-gray-600 mb-4 animate-fade-in delay-700">Click to view in Google Maps</p>
                <button className="px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full hover:shadow-lg transition-all duration-500 transform hover:scale-105 animate-luxury-glow hover:rotate-1">
                  Open in Maps
                </button>
              </div>
            </div>
          </div>

          {/* Venue Details */}
          <div className="space-y-6 animate-card-slide-in delay-300">
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/40 animate-glass-morph">
              <h3 className="text-2xl font-serif text-gray-800 mb-6 animate-elegant-reveal">Venue Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group animate-slide-in-up delay-500">
                  <MapPin className="w-6 h-6 text-rose-500 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <div className="animate-fade-in delay-600">
                    <h4 className="font-medium text-gray-800 mb-1">{venueDetails.name}</h4>
                    <p className="text-gray-600">{venueDetails.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group animate-slide-in-up delay-700">
                  <Clock className="w-6 h-6 text-rose-500 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <div className="animate-fade-in delay-800">
                    <h4 className="font-medium text-gray-800 mb-1">Event Time</h4>
                    <p className="text-gray-600">June 15, 2025 at 7:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group animate-slide-in-up delay-900">
                  <Navigation className="w-6 h-6 text-rose-500 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <div className="animate-fade-in delay-1000">
                    <h4 className="font-medium text-gray-800 mb-1">Getting There</h4>
                    <p className="text-gray-600">Valet parking available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Transportation Details */}
            <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/40 animate-glass-morph delay-400">
              <h4 className="text-lg font-semibold text-gray-800 mb-4 animate-elegant-reveal delay-1100">Transportation</h4>
              <div className="space-y-3 text-sm text-gray-600">
                <p className="animate-slide-in-up delay-1200 hover:text-gray-800 transition-colors duration-300">• Subway: N, R, W to 5th Ave/59th St</p>
                <p className="animate-slide-in-up delay-1300 hover:text-gray-800 transition-colors duration-300">• Taxi/Uber: Drop off at main entrance</p>
                <p className="animate-slide-in-up delay-1400 hover:text-gray-800 transition-colors duration-300">• Parking: Valet service available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
