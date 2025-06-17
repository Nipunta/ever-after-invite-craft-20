
import React from 'react';
import { cn } from '@/lib/utils';

const SaveTheDate = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 pt-24">
      <div className="max-w-2xl mx-auto text-center space-y-8 animate-fade-in">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-block">
            <h1 className="text-6xl md:text-8xl font-light text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-500 to-amber-500 animate-bounce-in">
              Save
            </h1>
            <h1 className="text-6xl md:text-8xl font-light text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-pink-500 to-rose-600 animate-bounce-in delay-200">
              The Date
            </h1>
          </div>
        </div>

        {/* Couple Names */}
        <div className="space-y-2 animate-slide-in-up delay-400">
          <h2 className="text-3xl md:text-4xl font-serif text-gray-700">
            Sarah & Michael
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-rose-400 to-pink-400 mx-auto animate-scale-in delay-500"></div>
        </div>

        {/* Anniversary Details */}
        <div className="space-y-6 animate-float-in delay-600">
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/40 transform hover:scale-105 transition-all duration-500">
            <h3 className="text-xl font-medium text-gray-600 mb-4 animate-fade-in delay-700">Celebrating Our</h3>
            <div className="text-4xl font-light text-gray-800 mb-2 animate-bounce delay-800">10th</div>
            <div className="text-2xl text-gray-600 mb-6 animate-slide-in-up delay-900">Wedding Anniversary</div>
            
            <div className="space-y-3 text-lg text-gray-700">
              <div className="flex justify-center items-center space-x-2 animate-fade-in delay-1000">
                <span className="animate-pulse">📅</span>
                <span>June 15, 2025</span>
              </div>
              <div className="flex justify-center items-center space-x-2 animate-fade-in delay-1100">
                <span className="animate-pulse">🕖</span>
                <span>7:00 PM</span>
              </div>
              <div className="flex justify-center items-center space-x-2 animate-fade-in delay-1200">
                <span className="animate-pulse">📍</span>
                <span>Grand Ballroom, The Plaza Hotel</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="animate-slide-in-up delay-1300">
          <p className="text-lg text-gray-600 mb-6">
            Join us for an evening of celebration, love, and memories
          </p>
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-110 animate-pulse-glow">
            <span className="font-medium">Formal Invitation to Follow</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveTheDate;
