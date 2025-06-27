
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
      description: "An evening of music, dance, and celebration with family and friends",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-100 to-pink-100",
      icon: "🎵"
    },
    {
      title: "Mehendi Ceremony",
      date: "June 14, 2025", 
      time: "2:00 PM",
      location: "The Plaza Hotel - Terrace Room",
      description: "Traditional henna ceremony with beautiful designs and blessings",
      color: "from-orange-500 to-amber-500",
      bgColor: "from-orange-100 to-amber-100",
      icon: "🌺"
    },
    {
      title: "Wedding Ceremony",
      date: "June 15, 2025",
      time: "7:00 PM", 
      location: "The Plaza Hotel - Grand Ballroom",
      description: "The main wedding ceremony where we exchange vows and begin our journey together",
      color: "from-rose-500 to-red-500",
      bgColor: "from-rose-100 to-red-100",
      icon: "💒"
    },
    {
      title: "Reception",
      date: "June 15, 2025",
      time: "9:00 PM",
      location: "The Plaza Hotel - Grand Ballroom",
      description: "Dinner, dancing, and celebration continuing into the night",
      color: "from-emerald-500 to-teal-500", 
      bgColor: "from-emerald-100 to-teal-100",
      icon: "🎉"
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
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 mb-4">
          Wedding Event Timeline
        </h2>
        <p className="text-lg text-gray-600 font-playfair italic">
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
                <LuxuryCard variant="primary" className={`animate-slide-up-elegant delay-${index * 200}`}>
                  <div className={`bg-gradient-to-br ${event.bgColor} p-6 rounded-2xl border border-white/60`}>
                    <div className="flex items-start space-x-4 mb-4">
                      <span className="text-3xl">{event.icon}</span>
                      <div className="flex-1">
                        <h3 className={`text-xl md:text-2xl font-playfair font-bold bg-gradient-to-r ${event.color} bg-clip-text text-transparent`}>
                          {event.title}
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base font-playfair italic mt-1">
                          {event.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-gray-700">
                        <Calendar className="w-5 h-5 text-rose-500" />
                        <span className="font-playfair font-semibold">{event.date}</span>
                      </div>
                      
                      <div className="flex items-center space-x-3 text-gray-700">
                        <Clock className="w-5 h-5 text-rose-500" />
                        <span className="font-playfair font-semibold">{event.time}</span>
                      </div>
                      
                      <button
                        onClick={() => handleLocationClick(event.location)}
                        className="flex items-center space-x-3 text-gray-700 hover:text-rose-600 transition-colors group w-full text-left"
                      >
                        <MapPin className="w-5 h-5 text-rose-500 group-hover:text-rose-600" />
                        <span className="font-playfair font-semibold group-hover:underline">
                          {event.location}
                        </span>
                      </button>
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
