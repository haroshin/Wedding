import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Details from './components/Details';
import Gallery from './components/Gallery';
import Guestbook from './components/Guestbook';
import MusicPlayer from './components/MusicPlayer';
import Preloader from './components/Preloader';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <div className={`relative min-h-screen bg-wedding-cream text-wedding-charcoal selection:bg-wedding-accent selection:text-wedding-primary transition-opacity duration-1000 ${
        loading ? 'opacity-0' : 'opacity-100'
      }`}>

      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <Details />
        <Gallery />
        <Guestbook />
      </main>

      {/* Floating Music player widget */}
      <MusicPlayer />

      {/* Footer */}
      <footer className="bg-wedding-primary py-16 border-t border-wedding-accent/20 relative overflow-hidden">
        {/* Background decorative flower svg */}
        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
          <svg width="400" height="400" fill="none" viewBox="0 0 24 24" stroke="#d4af37">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <span className="font-serif text-3xl md:text-4xl text-wedding-accent block mb-6 font-semibold tracking-wider">
            S & N
          </span>
          <p className="font-serif italic text-lg text-wedding-cream/90 max-w-md mx-auto mb-8 font-light">
            "Therefore what God has joined together, let no one separate."
          </p>
          <div className="w-16 h-[1px] bg-wedding-accent/40 mx-auto mb-8" />
          <p className="font-sans text-[11px] tracking-[0.2em] text-wedding-cream/60 uppercase">
            Sharun & Niveditha &bull; December 20–21, 2026 &bull; Kozhikode, Kerala
          </p>
          <p className="font-sans text-[9px] tracking-widest text-wedding-cream/40 uppercase mt-4">
            &copy; {new Date().getFullYear()} All Rights Reserved. Created with love.
          </p>
        </div>
      </footer>
    </div>
    </>
  );
}

export default App;

