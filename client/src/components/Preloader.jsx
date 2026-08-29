import React, { useState, useEffect } from 'react';

const Preloader = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let completeTimer;
    const timer = setTimeout(() => {
      setFadeOut(true);
      // Wait for the css fade-out transition to complete
      completeTimer = setTimeout(onComplete, 800);
    }, 2200);

    return () => {
      clearTimeout(timer);
      if (completeTimer) clearTimeout(completeTimer);
    };
  }, []);


  return (
    <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-wedding-primary transition-all duration-700 ease-in-out ${
      fadeOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
    }`}>
      {/* Decorative Golden Corners */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-wedding-accent/40 rounded-tl-lg" />
      <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-wedding-accent/40 rounded-tr-lg" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b-2 border-l-2 border-wedding-accent/40 rounded-bl-lg" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-wedding-accent/40 rounded-br-lg" />

      {/* Main Content */}
      <div className="text-center px-4 flex flex-col items-center justify-center max-w-md">
        
        {/* Shubh Vivah Sanskrit Greeting */}
        <span className="font-sans text-[10px] tracking-[0.4em] text-wedding-accent uppercase mb-3 animate-pulse-subtle font-medium">
          || Shubh Vivah ||
        </span>
        
        {/* Elegant Animated Ring and Initials */}
        <div className="relative mb-6 flex items-center justify-center w-28 h-28">
          <svg className="absolute w-full h-full text-wedding-accent animate-spin" style={{ animationDuration: '10s' }} fill="none" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.75" strokeDasharray="8 12" />
          </svg>
          <span className="font-serif text-3xl font-semibold tracking-wider text-wedding-accent mt-0.5">
            S & N
          </span>
        </div>

        <div className="h-[1px] w-16 bg-wedding-accent/30 my-4" />

        {/* Welcoming message */}
        <h2 className="font-serif italic text-wedding-cream text-lg tracking-wide animate-fade-in">
          Welcoming you to the wedding celebrations of
        </h2>
        <h1 className="font-serif text-2xl text-wedding-accent font-semibold tracking-widest mt-2 uppercase">
          Sharun & Niveditha
        </h1>
      </div>
    </div>
  );
};

export default Preloader;
