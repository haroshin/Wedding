import React, { useState } from 'react';

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: 'true', // string representing boolean for radio buttons
    guestsCount: 1,
    dietaryRestrictions: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!formData.name.trim()) {
      setError('Please enter your name.');
      setLoading(false);
      return;
    }

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        attending: formData.attending === 'true',
        guestsCount: formData.attending === 'true' ? Number(formData.guestsCount) : 0,
        dietaryRestrictions: formData.attending === 'true' ? formData.dietaryRestrictions.trim() : '',
        message: formData.message.trim(),
      };

      const response = await fetch(`${API_BASE_URL}/rsvps`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Something went wrong. Please try again.');
      }

      setSubmitted(true);
      
      // If attending and they left a message, let's also automatically post to the guestbook!
      if (payload.message) {
        try {
          await fetch(`${API_BASE_URL}/guestbook`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: payload.name,
              message: payload.message,
            }),
          });
        } catch (gbErr) {
          console.warn('Auto-posting wish to guestbook failed, but RSVP succeeded:', gbErr);
        }
      }

    } catch (err) {
      setError(err.message || 'Server connection failed. Please ensure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="rsvp" className="py-24 bg-wedding-primary relative overflow-hidden">
      
      {/* Background Gold Accents */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-wedding-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-wedding-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-sans text-xs tracking-[0.3em] text-wedding-accent uppercase font-medium">
            Be Our Guest
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-wedding-ivory mt-2 mb-4">
            Will You Attend?
          </h2>
          <p className="font-sans text-sm text-wedding-cream/80 max-w-md mx-auto">
            Please respond by November 15, 2026 so we can finalize our arrangements.
          </p>
          <div className="flex items-center justify-center space-x-2 mt-4">
            <div className="w-8 h-[1px] bg-wedding-accent/50" />
            <span className="text-wedding-accent text-lg">❦</span>
            <div className="w-8 h-[1px] bg-wedding-accent/50" />
          </div>
        </div>

        {/* Card Form */}
        <div className="glass-card-dark rounded-3xl p-8 sm:p-12 shadow-2xl border border-wedding-accent/25">
          {submitted ? (
            <div className="text-center py-10 animate-fade-in">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-wedding-accent/20 border border-wedding-accent mb-6">
                <svg className="w-8 h-8 text-wedding-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-serif text-3xl text-wedding-ivory mb-4">Thank You!</h3>
              <p className="font-sans text-wedding-cream/90 max-w-md mx-auto leading-relaxed">
                {formData.attending === 'true' 
                  ? "Your RSVP has been saved. We are thrilled to celebrate our special day with you!"
                  : "Thank you for letting us know. We will miss you, but we appreciate your warm wishes!"
                }
              </p>
              
              {formData.attending === 'true' && (
                <div className="mt-8 inline-block px-6 py-2 bg-wedding-accent/15 border border-wedding-accent/30 rounded-xl text-wedding-accent text-sm font-sans tracking-wide">
                  Guests Attending: {formData.guestsCount}
                </div>
              )}

              <button
                onClick={() => setSubmitted(false)}
                className="mt-8 block mx-auto text-sm text-wedding-accent hover:text-wedding-ivory underline transition-colors"
              >
                Submit another response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-200 text-sm rounded-xl font-sans text-center">
                  {error}
                </div>
              )}

              {/* Name & Email Group */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-sans tracking-widest text-wedding-cream uppercase mb-2">
                    Full Name <span className="text-wedding-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-wedding-secondary/40 border border-wedding-accent/20 rounded-xl text-wedding-ivory placeholder-wedding-cream/30 focus:border-wedding-accent focus:outline-none transition-colors duration-200"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-sans tracking-widest text-wedding-cream uppercase mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-wedding-secondary/40 border border-wedding-accent/20 rounded-xl text-wedding-ivory placeholder-wedding-cream/30 focus:border-wedding-accent focus:outline-none transition-colors duration-200"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Attendance Selection */}
              <div>
                <span className="block text-xs font-sans tracking-widest text-wedding-cream uppercase mb-3">
                  Will you be attending?
                </span>
                <div className="flex space-x-6">
                  <label className="flex items-center space-x-3 cursor-pointer group text-wedding-ivory select-none">
                    <input
                      type="radio"
                      name="attending"
                      value="true"
                      checked={formData.attending === 'true'}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                      formData.attending === 'true' ? 'border-wedding-accent bg-wedding-accent' : 'border-wedding-accent/40 bg-transparent group-hover:border-wedding-accent'
                    }`}>
                      {formData.attending === 'true' && <div className="w-2 h-2 rounded-full bg-wedding-primary" />}
                    </div>
                    <span className="font-sans text-sm">Joyfully Attend</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer group text-wedding-ivory select-none">
                    <input
                      type="radio"
                      name="attending"
                      value="false"
                      checked={formData.attending === 'false'}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                      formData.attending === 'false' ? 'border-wedding-accent bg-wedding-accent' : 'border-wedding-accent/40 bg-transparent group-hover:border-wedding-accent'
                    }`}>
                      {formData.attending === 'false' && <div className="w-2 h-2 rounded-full bg-wedding-primary" />}
                    </div>
                    <span className="font-sans text-sm">Regretfully Decline</span>
                  </label>
                </div>
              </div>

              {/* Conditional attending details */}
              {formData.attending === 'true' && (
                <div className="grid md:grid-cols-2 gap-6 p-6 bg-wedding-secondary/20 border border-wedding-accent/15 rounded-2xl animate-fade-in">
                  <div>
                    <label htmlFor="guestsCount" className="block text-xs font-sans tracking-widest text-wedding-cream uppercase mb-2">
                      Number of Guests
                    </label>
                    <select
                      id="guestsCount"
                      name="guestsCount"
                      value={formData.guestsCount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-wedding-secondary/60 border border-wedding-accent/20 rounded-xl text-wedding-ivory focus:border-wedding-accent focus:outline-none transition-colors"
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num} className="bg-wedding-primary text-wedding-ivory">
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="dietaryRestrictions" className="block text-xs font-sans tracking-widest text-wedding-cream uppercase mb-2">
                      Dietary Requirements (e.g., Veg, Jain)
                    </label>
                    <input
                      type="text"
                      id="dietaryRestrictions"
                      name="dietaryRestrictions"
                      value={formData.dietaryRestrictions}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-wedding-secondary/60 border border-wedding-accent/20 rounded-xl text-wedding-ivory placeholder-wedding-cream/30 focus:border-wedding-accent focus:outline-none transition-colors"
                      placeholder="Vegetarian, vegan, allergies..."
                    />
                  </div>
                </div>
              )}

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-sans tracking-widest text-wedding-cream uppercase mb-2">
                  {formData.attending === 'true' 
                    ? "Leave a note for the couple (Optional)" 
                    : "Leave a congratulatory message (Optional)"
                  }
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-wedding-secondary/40 border border-wedding-accent/20 rounded-xl text-wedding-ivory placeholder-wedding-cream/30 focus:border-wedding-accent focus:outline-none transition-colors resize-none"
                  placeholder="Write your wishes here..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-wedding-accent hover:bg-wedding-goldMuted disabled:bg-wedding-accent/50 text-wedding-primary font-sans text-sm tracking-widest font-semibold uppercase rounded-xl transition-all duration-300 shadow-md transform hover:-translate-y-0.5"
              >
                {loading ? 'Submitting...' : 'Send RSVP'}
              </button>

            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default RSVP;
