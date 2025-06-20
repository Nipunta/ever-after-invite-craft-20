import React, { useState } from 'react';
import { cn } from '@/lib/utils';

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
  const [messages, setMessages] = useState<Message[]>([]);

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
      {/* Remove background styling to let main page background show through */}
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

      {/* Display Messages */}
      <div className="space-y-6">
        {messages.map((msg) => (
          <div key={msg.id} className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-white/50">
            <h4 className="text-lg font-semibold text-gray-800">{msg.name}</h4>
            <p className="text-gray-700">{msg.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CongratulationsWall;
