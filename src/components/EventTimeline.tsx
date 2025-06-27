
import React from 'react';
import LuxuryCard from './LuxuryCard';
import { MapPin, Clock, Calendar } from 'lucide-react';

const EventTimeline = () => {
  const events = [
    {
      title: "Sangeet Ceremony",
      date: "June 13, 2025",
      time: "7:00 PM",
      location: "The Plaza Hotel - Oak Room",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Mehendi Ceremony",
      date: "June 14, 2025", 
      time: "2:00 PM",
      location: "The Plaza Hotel - Terrace Room",
      color: "from-orange-500 to-amber-500"
    },
    {
      title: "Wedding Ceremony",
      date: "June 15, 2025",
      time: "7:00 PM", 
      location: "The Plaza Hotel - Grand Ballroom",
      color: "from-rose-500 to-red-500"
    },
    {
      title: "Reception",
      date: "June 15, 2025",
      time: "9:00 PM",
      location: "The Plaza Hotel - Grand Ballroom",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  const handleLocationClick = (location: string) => {
    const query = encodeURIComponent(location);
    const googleMapsUrl = `https://maps.google.com/maps?q=${query}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 mb-4">
          Wedding Event Timeline
        </h2>
        <p className="text-lg md:text-xl text-gray-700 font-playfair font-semibold italic">
          Join us for these special moments
        </p>
        <div className="w-24 h-px bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mt-6"></div>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-300 via-pink-300 to-purple-300 transform md:-translate-x-0.5"></div>

        <div className="space-y-8">
          {events.map((event, index) => (
            <div key={event.title} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white border-4 border-rose-400 rounded-full transform -translate-x-2 md:-translate-x-2 z-10 shadow-lg"></div>
              
              {/* Event card */}
              <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <div className={`animate-slide-up-elegant delay-${index * 200} relative overflow-hidden`}>
                  <div 
                    className="relative p-4 rounded-xl border border-white/40 shadow-lg animate-gradient-move"
                    style={{
                      background: 'linear-gradient(135deg, #fcd1d1, #fff5e1, #ffe2cc, #f9d29d)',
                      backgroundSize: '200% 200%'
                    }}
                  >
                    <div className="relative z-10">
                      <h3 className={`text-xl md:text-2xl font-playfair font-black bg-gradient-to-r ${event.color} bg-clip-text text-transparent mb-4`}>
                        {event.title}
                      </h3>

                      <div className="space-y-3">
                        <div className="flex items-center space-x-2 text-gray-800">
                          <Calendar className="w-4 h-4 text-rose-500" />
                          <span className="font-playfair font-bold text-sm md:text-base">{event.date}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2 text-gray-800">
                          <Clock className="w-4 h-4 text-rose-500" />
                          <span className="font-playfair font-bold text-sm md:text-base">{event.time}</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-gray-800 flex-1">
                            <MapPin className="w-4 h-4 text-rose-500" />
                            <span className="font-playfair font-bold text-sm md:text-base">
                              {event.location}
                            </span>
                          </div>
                          
                          <button
                            onClick={() => handleLocationClick(event.location)}
                            className="ml-3 px-3 py-1.5 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full text-xs font-playfair font-bold hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-md"
                          >
                            View Location
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-move {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .animate-gradient-move {
          animation: gradient-move 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default EventTimeline;
