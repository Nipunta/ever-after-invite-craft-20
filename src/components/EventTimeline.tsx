
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
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-100 to-pink-100",
      pattern: "sangeet"
    },
    {
      title: "Mehendi Ceremony",
      date: "June 14, 2025", 
      time: "2:00 PM",
      location: "The Plaza Hotel - Terrace Room",
      color: "from-orange-500 to-amber-500",
      bgColor: "from-orange-100 to-amber-100",
      pattern: "mehendi"
    },
    {
      title: "Wedding Ceremony",
      date: "June 15, 2025",
      time: "7:00 PM", 
      location: "The Plaza Hotel - Grand Ballroom",
      color: "from-rose-500 to-red-500",
      bgColor: "from-rose-100 to-red-100",
      pattern: "wedding"
    },
    {
      title: "Reception",
      date: "June 15, 2025",
      time: "9:00 PM",
      location: "The Plaza Hotel - Grand Ballroom",
      color: "from-emerald-500 to-teal-500", 
      bgColor: "from-emerald-100 to-teal-100",
      pattern: "reception"
    }
  ];

  const handleLocationClick = (location: string) => {
    const query = encodeURIComponent(location);
    const googleMapsUrl = `https://maps.google.com/maps?q=${query}`;
    window.open(googleMapsUrl, '_blank');
  };

  const getPatternBackground = (pattern: string) => {
    switch (pattern) {
      case 'sangeet':
        return `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c084fc' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;
      case 'mehendi':
        return `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.15'%3E%3Cpath d='M15 0C6.7 0 0 6.7 0 15s6.7 15 15 15 15-6.7 15-15S23.3 0 15 0zm0 2c7.2 0 13 5.8 13 13s-5.8 13-13 13S2 22.2 2 15 7.8 2 15 2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;
      case 'wedding':
        return `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f43f5e' fill-opacity='0.08'%3E%3Cpath d='M30 30l15-15v30l-15-15zm0 0l-15-15v30l15-15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;
      case 'reception':
        return `url("data:image/svg+xml,%3Csvg width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2310b981' fill-opacity='0.12'%3E%3Cpath d='M25 0l5 15h15l-12 9 5 15-13-10-13 10 5-15-12-9h15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;
      default:
        return '';
    }
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

        <div className="space-y-12">
          {events.map((event, index) => (
            <div key={event.title} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-white border-4 border-rose-400 rounded-full transform -translate-x-2 md:-translate-x-2 z-10 shadow-lg"></div>
              
              {/* Event card */}
              <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                <LuxuryCard variant="primary" className={`animate-slide-up-elegant delay-${index * 200} relative overflow-hidden`}>
                  <div 
                    className={`bg-gradient-to-br ${event.bgColor} p-6 rounded-2xl border border-white/60 relative`}
                    style={{ backgroundImage: getPatternBackground(event.pattern) }}
                  >
                    <div className="relative z-10">
                      <h3 className={`text-2xl md:text-3xl font-playfair font-black bg-gradient-to-r ${event.color} bg-clip-text text-transparent mb-6`}>
                        {event.title}
                      </h3>

                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 text-gray-800">
                          <Calendar className="w-5 h-5 text-rose-500" />
                          <span className="font-playfair font-bold text-base md:text-lg">{event.date}</span>
                        </div>
                        
                        <div className="flex items-center space-x-3 text-gray-800">
                          <Clock className="w-5 h-5 text-rose-500" />
                          <span className="font-playfair font-bold text-base md:text-lg">{event.time}</span>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3 text-gray-800 flex-1">
                            <MapPin className="w-5 h-5 text-rose-500" />
                            <span className="font-playfair font-bold text-base md:text-lg">
                              {event.location}
                            </span>
                          </div>
                          
                          <button
                            onClick={() => handleLocationClick(event.location)}
                            className="ml-4 px-4 py-2 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full text-sm font-playfair font-bold hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                          >
                            View Location
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </LuxuryCard>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventTimeline;
