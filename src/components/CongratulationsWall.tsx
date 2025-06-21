
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

interface CongratulationsWallProps {
  // No props needed for now
}

interface Message {
  id: string;
  name: string;
  message: string;
}

const CongratulationsWall = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      name: 'Jessica & David',
      message: 'Congratulations on 10 beautiful years together! Your love story continues to inspire us all.'
    },
    {
      id: '2',
      name: 'Emily Thompson',
      message: 'Wishing you both many more years of happiness, laughter, and love. You are such a beautiful couple!'
    },
    {
      id: '3',
      name: 'The Martinez Family',
      message: 'Here\'s to celebrating your amazing journey and looking forward to all the wonderful years ahead!'
    }
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() === '' || message.trim() === '') {
      alert('Please enter both your name and message.');
      return;
    }

    const newMessage: Message = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
    };

    setMessages(prevMessages => [...prevMessages, newMessage]);
    setName('');
    setMessage('');
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">
          Your Wishes & Congratulations
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Share your heartfelt wishes and congratulations for Sarah & Michael's 10th anniversary celebration
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto mb-12">
        <div className="mb-6">
          <input
            type="text"
            id="name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500 dark:shadow-sm-light"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-rose-500 focus:border-rose-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rose-500 dark:focus:border-rose-500"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gradient-to-r from-rose-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-rose-300 dark:focus:ring-rose-800"
        >
          Send Your Wishes
        </button>
      </form>

      {/* Display Messages in Carousel */}
      {messages.length > 0 && (
        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {messages.map((msg) => (
                <CarouselItem key={msg.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/50 relative overflow-hidden min-h-[200px] flex flex-col justify-between">
                      {/* Subtle floating animation */}
                      <div className="absolute top-2 right-2 text-2xl opacity-20 animate-floating-heart">💕</div>
                      
                      {/* Quote marks */}
                      <div className="text-4xl text-rose-300 font-serif absolute top-2 left-4 opacity-30">"</div>
                      
                      <div className="relative z-10 flex-1 flex flex-col justify-between pt-6">
                        <p className="text-gray-700 italic leading-relaxed mb-4 flex-1">{msg.message}</p>
                        <div className="border-t border-gray-200 pt-4">
                          <h4 className="text-lg font-semibold text-gray-800">— {msg.name}</h4>
                        </div>
                      </div>
                      
                      <div className="text-4xl text-rose-300 font-serif absolute bottom-2 right-4 opacity-30 rotate-180">"</div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white/80 hover:bg-white border-rose-200 text-rose-600" />
            <CarouselNext className="bg-white/80 hover:bg-white border-rose-200 text-rose-600" />
          </Carousel>
        </div>
      )}
    </div>
  );
};

export default CongratulationsWall;
