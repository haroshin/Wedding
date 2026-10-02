import React, { useState, useEffect } from 'react';

const Guestbook = () => {
  const [wishes, setWishes] = useState([]);
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [posting, setPosting] = useState(false);
  const [error, setError] = useState('');
  const [postSuccess, setPostSuccess] = useState(false);

  const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

  // Fetch guestbook entries
  const fetchWishes = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/guestbook`);
      if (!response.ok) {
        throw new Error('Failed to fetch guestbook wishes');
      }
      const data = await response.json();
      setWishes(data);
    } catch (err) {
      console.error('Fetch guestbook error:', err);
      // Fallback with a few default mock messages if the server is offline or loading fails
      setWishes([
        {
          _id: 'mock1',
          name: 'Anjali Sharma',
          message: 'Congratulations Sharun and Niveditha! Wishing you both a lifetime of happiness, laughter, and endless love.',
          createdAt: new Date(Date.now() - 3600000 * 2).toISOString(),
        },
        {
          _id: 'mock2',
          name: 'Rahul & Meera',
          message: 'Can\'t wait to celebrate with you guys in Bangalore! So happy for you two. Cheers to a beautiful journey ahead!',
          createdAt: new Date(Date.now() - 3600000 * 5).toISOString(),
        },
        {
          _id: 'mock3',
          name: 'Uncle Suresh',
          message: 'Blessings to the wonderful couple. May your married life be filled with understanding and bliss.',
          createdAt: new Date(Date.now() - 3600000 * 24).toISOString(),
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWishes();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) {
      setError('Please fill in both name and message.');
      return;
    }

    setPosting(true);
    setError('');
    setPostSuccess(false);

    try {
      const response = await fetch(`${API_BASE_URL}/guestbook`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          message: formData.message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to post your message.');
      }

      const newWish = await response.json();
      
      // Update local state by placing new wish at the top
      setWishes((prev) => [newWish, ...prev]);
      setFormData({ name: '', message: '' });
      setPostSuccess(true);
      
      // Clear success notification after 3 seconds
      setTimeout(() => setPostSuccess(false), 4000);

    } catch (err) {
      setError(err.message || 'Server connection failed. Could not post wish.');
    } finally {
      setPosting(false);
    }
  };

  const formatDate = (dateString) => {
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section id="guestbook" className="py-24 bg-wedding-cream relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-xs tracking-[0.3em] text-wedding-accent uppercase font-medium">
            Wishes
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-wedding-primary mt-2 mb-4">
            Guestbook
          </h2>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-[1px] bg-wedding-accent" />
            <span className="text-wedding-accent text-lg">❦</span>
            <div className="w-8 h-[1px] bg-wedding-accent" />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Write a Wish Form Column */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-8 border border-wedding-accent/20 shadow-sm sticky top-28">
              <h3 className="font-serif text-2xl text-wedding-primary font-semibold mb-6">
                Leave a Wish
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 bg-red-500/5 border border-red-500/10 text-red-700 text-xs rounded-xl text-center">
                    {error}
                  </div>
                )}
                {postSuccess && (
                  <div className="p-3 bg-green-500/5 border border-green-500/10 text-green-700 text-xs rounded-xl text-center">
                    Wish posted successfully! Thank you.
                  </div>
                )}

                <div>
                  <label htmlFor="gb-name" className="block text-[10px] font-sans tracking-wider text-wedding-secondary uppercase mb-1.5 font-semibold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="gb-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-wedding-lightGreen/50 border border-wedding-accent/15 rounded-xl text-wedding-charcoal placeholder-wedding-charcoal/30 focus:border-wedding-accent focus:outline-none text-sm transition-colors"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="gb-message" className="block text-[10px] font-sans tracking-wider text-wedding-secondary uppercase mb-1.5 font-semibold">
                    Message
                  </label>
                  <textarea
                    id="gb-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-2.5 bg-wedding-lightGreen/50 border border-wedding-accent/15 rounded-xl text-wedding-charcoal placeholder-wedding-charcoal/30 focus:border-wedding-accent focus:outline-none text-sm transition-colors resize-none"
                    placeholder="Write a warm note for Sharun & Niveditha..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={posting}
                  className="w-full py-3 bg-wedding-primary hover:bg-wedding-secondary text-wedding-cream font-sans text-xs tracking-widest font-semibold uppercase rounded-xl transition-all duration-300 shadow-sm"
                >
                  {posting ? 'Posting...' : 'Post Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Wishes Display Wall Column */}
          <div className="lg:col-span-2">
            {loading && wishes.length === 0 ? (
              <div className="text-center py-10">
                <div className="inline-block w-8 h-8 border-4 border-wedding-accent border-t-transparent rounded-full animate-spin" />
                <p className="mt-4 text-sm text-wedding-charcoal/60 font-sans">Loading sweet wishes...</p>
              </div>
            ) : wishes.length === 0 ? (
              <div className="text-center py-10 bg-white rounded-3xl border border-wedding-accent/15">
                <p className="text-sm text-wedding-charcoal/60 font-sans">No wishes left yet. Be the first to leave one!</p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-6 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin">
                {wishes.map((wish, index) => (
                  <div
                    key={wish._id || index}
                    className="bg-white p-6 rounded-2xl border border-wedding-accent/15 hover:border-wedding-accent/30 shadow-sm transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Decorative quote icon */}
                      <span className="font-serif text-3xl text-wedding-accent/30 block -mt-2 leading-none">“</span>
                      <p className="font-sans text-wedding-charcoal/90 text-sm leading-relaxed italic -mt-1 mb-4">
                        {wish.message}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-wedding-accent/10">
                      <span className="font-serif text-sm font-semibold text-wedding-primary">
                        {wish.name}
                      </span>
                      <span className="font-sans text-[10px] text-wedding-charcoal/50">
                        {formatDate(wish.createdAt)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Guestbook;
