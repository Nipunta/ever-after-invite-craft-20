
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
    <div className="min-h-screen p-6 pt-24">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4 animate-scale-in">
            Celebration Venue
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in delay-200">
            Join us at this magnificent location for our 10th anniversary celebration
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mt-6 animate-fade-in delay-300"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Container */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-xl border border-white/30 overflow-hidden animate-fade-in delay-400">
            <div className="aspect-video bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="w-16 h-16 text-rose-500 mx-auto mb-4 animate-bounce" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Interactive Map</h3>
                <p className="text-gray-600 mb-4">Click to view in Google Maps</p>
                <button className="px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  Open in Maps
                </button>
              </div>
            </div>
          </div>

          {/* Venue Details */}
          <div className="space-y-6 animate-fade-in delay-500">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30">
              <h3 className="text-2xl font-serif text-gray-800 mb-6">Venue Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-rose-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-800">{venueDetails.name}</h4>
                    <p className="text-gray-600">{venueDetails.address}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-rose-500" />
                  <div>
                    <h4 className="font-medium text-gray-800">Event Time</h4>
                    <p className="text-gray-600">June 15, 2025 at 7:00 PM</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Navigation className="w-5 h-5 text-rose-500" />
                  <div>
                    <h4 className="font-medium text-gray-800">Getting There</h4>
                    <p className="text-gray-600">Valet parking available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/30">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Transportation</h4>
              <div className="space-y-3 text-sm text-gray-600">
                <p>• Subway: N, R, W to 5th Ave/59th St</p>
                <p>• Taxi/Uber: Drop off at main entrance</p>
                <p>• Parking: Valet service available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
