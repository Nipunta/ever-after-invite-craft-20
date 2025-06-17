
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface RSVPData {
  guestName: string;
  email: string;
  attendance: 'yes' | 'no' | '';
  guestCount: number;
  dietaryRestrictions: string;
  congratulationsMessage: string;
  phone: string;
}

const RSVPForm = () => {
  const [formData, setFormData] = useState<RSVPData>({
    guestName: '',
    email: '',
    attendance: '',
    guestCount: 1,
    dietaryRestrictions: '',
    congratulationsMessage: '',
    phone: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setLoading(false);
    setSubmitted(true);
    
    console.log('RSVP Submitted:', formData);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-2xl mx-auto text-center animate-scale-in">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30 p-12">
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-3xl">✓</span>
            </div>
            <h1 className="text-3xl font-serif text-gray-800 mb-4">
              Thank You!
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Your RSVP has been received. We're so excited to celebrate with you!
            </p>
            {formData.congratulationsMessage && (
              <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-6 mb-6">
                <h3 className="font-medium text-gray-800 mb-2">Your Message:</h3>
                <p className="text-gray-600 italic">"{formData.congratulationsMessage}"</p>
              </div>
            )}
            <div className="text-sm text-gray-500">
              You'll receive a confirmation email shortly with event details.
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            RSVP
          </h1>
          <p className="text-lg text-gray-600">
            Please let us know if you'll be joining our celebration
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mt-6"></div>
        </div>

        {/* Form */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-white/30 p-8 animate-fade-in delay-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="guestName" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="guestName"
                name="guestName"
                required
                value={formData.guestName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your email"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Attendance */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Will you be attending? *
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className={cn(
                  "flex items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200",
                  formData.attendance === 'yes' 
                    ? "border-green-500 bg-green-50 text-green-700" 
                    : "border-gray-200 hover:border-green-300"
                )}>
                  <input
                    type="radio"
                    name="attendance"
                    value="yes"
                    checked={formData.attendance === 'yes'}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <span className="text-sm font-medium">
                    ✓ Yes, I'll be there!
                  </span>
                </label>
                <label className={cn(
                  "flex items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-200",
                  formData.attendance === 'no' 
                    ? "border-red-500 bg-red-50 text-red-700" 
                    : "border-gray-200 hover:border-red-300"
                )}>
                  <input
                    type="radio"
                    name="attendance"
                    value="no"
                    checked={formData.attendance === 'no'}
                    onChange={handleInputChange}
                    className="sr-only"
                  />
                  <span className="text-sm font-medium">
                    ✗ Sorry, can't make it
                  </span>
                </label>
              </div>
            </div>

            {/* Guest Count - only show if attending */}
            {formData.attendance === 'yes' && (
              <div>
                <label htmlFor="guestCount" className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Guests
                </label>
                <select
                  id="guestCount"
                  name="guestCount"
                  value={formData.guestCount}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                >
                  {[1, 2, 3, 4].map(num => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Dietary Restrictions - only show if attending */}
            {formData.attendance === 'yes' && (
              <div>
                <label htmlFor="dietaryRestrictions" className="block text-sm font-medium text-gray-700 mb-2">
                  Dietary Restrictions or Allergies
                </label>
                <textarea
                  id="dietaryRestrictions"
                  name="dietaryRestrictions"
                  rows={3}
                  value={formData.dietaryRestrictions}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                  placeholder="Please let us know about any dietary restrictions..."
                />
              </div>
            )}

            {/* Congratulations Message */}
            <div>
              <label htmlFor="congratulationsMessage" className="block text-sm font-medium text-gray-700 mb-2">
                Congratulations Message for Sarah & Michael
              </label>
              <textarea
                id="congratulationsMessage"
                name="congratulationsMessage"
                rows={4}
                value={formData.congratulationsMessage}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
                placeholder="Share your congratulations and best wishes for the happy couple..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || !formData.guestName || !formData.email || !formData.attendance}
              className={cn(
                "w-full py-4 rounded-xl font-medium transition-all duration-300 transform",
                "focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2",
                loading || !formData.guestName || !formData.email || !formData.attendance
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              )}
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Submitting...</span>
                </div>
              ) : (
                'Send RSVP'
              )}
            </button>
          </form>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 animate-fade-in delay-400">
          <p className="text-sm text-gray-500">
            Having trouble with the form? Please email us at{' '}
            <a href="mailto:rsvp@sarahandmichael.com" className="text-rose-500 hover:text-rose-600">
              rsvp@sarahandmichael.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RSVPForm;
