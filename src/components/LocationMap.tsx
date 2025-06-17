
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { map } from 'lucide-react';

const LocationMap = () => {
  const [showDirections, setShowDirections] = useState(false);

  const venue = {
    name: "The Plaza Hotel",
    address: "768 5th Ave, New York, NY 10019",
    phone: "(212) 759-3000",
    description: "An iconic luxury hotel in the heart of Manhattan, perfect for our special celebration."
  };

  const handleGetDirections = () => {
    const encodedAddress = encodeURIComponent(venue.address);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`, '_blank');
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Find Us Here
          </h1>
          <p className="text-lg text-gray-600">
            Join us at this beautiful venue for our anniversary celebration
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mt-6"></div>
        </div>

        {/* Venue Information */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30 overflow-hidden mb-8 animate-fade-in delay-200">
          <div className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-serif text-gray-800 mb-2">{venue.name}</h2>
              <p className="text-gray-600 mb-4">{venue.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Venue Details</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-rose-500 mt-1">📍</span>
                    <div>
                      <p className="font-medium text-gray-800">Address</p>
                      <p className="text-gray-600">{venue.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-rose-500 mt-1">📞</span>
                    <div>
                      <p className="font-medium text-gray-800">Phone</p>
                      <p className="text-gray-600">{venue.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-rose-500 mt-1">🅿️</span>
                    <div>
                      <p className="font-medium text-gray-800">Parking</p>
                      <p className="text-gray-600">Valet parking available</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Transportation */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Getting There</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-500 mt-1">🚇</span>
                    <div>
                      <p className="font-medium text-gray-800">Subway</p>
                      <p className="text-gray-600">N, Q, R, W to 57th St-7th Ave</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-yellow-500 mt-1">🚕</span>
                    <div>
                      <p className="font-medium text-gray-800">Taxi/Uber</p>
                      <p className="text-gray-600">Drop off at 5th Avenue entrance</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-500 mt-1">🚌</span>
                    <div>
                      <p className="font-medium text-gray-800">Bus</p>
                      <p className="text-gray-600">M5, M7, M57 to 57th St/5th Ave</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
              <button
                onClick={handleGetDirections}
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="mr-2">🗺️</span>
                Get Directions
              </button>
              <button
                onClick={() => setShowDirections(!showDirections)}
                className="inline-flex items-center justify-center px-6 py-3 bg-white/80 backdrop-blur-sm text-gray-700 border border-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span className="mr-2">ℹ️</span>
                More Info
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Map Placeholder */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30 overflow-hidden animate-fade-in delay-400">
          <div className="aspect-video bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center relative">
            {/* Map Placeholder */}
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Interactive Map</h3>
              <p className="text-gray-600 max-w-md">
                Click the button below to open the location in your preferred map application
              </p>
              <button
                onClick={handleGetDirections}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Open in Maps
              </button>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 w-8 h-8 bg-blue-200 rounded-full opacity-50 animate-pulse"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 bg-indigo-200 rounded-full opacity-50 animate-pulse delay-300"></div>
            <div className="absolute top-1/3 right-8 w-4 h-4 bg-purple-200 rounded-full opacity-50 animate-pulse delay-500"></div>
          </div>
        </div>

        {/* Additional Info */}
        {showDirections && (
          <div className="mt-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30 p-8 animate-fade-in">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Additional Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Accessibility</h4>
                <p className="text-gray-600 text-sm">
                  The venue is fully wheelchair accessible with elevators and accessible restrooms available.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2">Dress Code</h4>
                <p className="text-gray-600 text-sm">
                  Cocktail attire requested. The venue maintains an elegant atmosphere.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationMap;
