import React, { useState, useEffect } from 'react';

const Hero = () => {
  // Target date: Dec 21, 2026 at 12:00 PM
  const targetDate = new Date('2026-12-21T12:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/wedding_hero.png')" }}
    >
      {/* Premium Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-wedding-primary/60 to-wedding-primary/90 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 text-center max-w-4xl px-4 flex flex-col items-center justify-center">
        
        {/* Subtitle */}
        <span className="font-sans text-xs sm:text-sm tracking-[0.3em] text-wedding-accent uppercase mb-4 font-medium animate-cascade-1">
          Save the Date
        </span>

        {/* Title / Names */}
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl text-wedding-ivory mb-6 tracking-wide drop-shadow-lg animate-cascade-2">
          Sharun <span className="text-wedding-accent">&</span> Niveditha
        </h1>

        {/* Line Decoration */}
        <div className="flex items-center justify-center space-x-4 mb-6 animate-cascade-3">
          <div className="w-12 h-[1px] bg-wedding-accent/50" />
          <span className="font-serif italic text-lg sm:text-xl text-wedding-accent font-light">
            Are getting married
          </span>
          <div className="w-12 h-[1px] bg-wedding-accent/50" />
        </div>

        {/* Date & Location */}
        <p className="font-sans text-sm sm:text-base tracking-[0.2em] text-wedding-cream uppercase mb-12 animate-cascade-4">
          December 21, 2026 &bull; Bengaluru, India
        </p>

        {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-2 sm:gap-6 bg-wedding-primary/40 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-wedding-accent/30 shadow-xl max-w-lg w-full mb-12 animate-cascade-5">
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl sm:text-4xl font-bold text-wedding-accent">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="font-sans text-[10px] sm:text-xs tracking-widest text-wedding-cream/80 uppercase mt-1">
              Days
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl sm:text-4xl font-bold text-wedding-accent">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="font-sans text-[10px] sm:text-xs tracking-widest text-wedding-cream/80 uppercase mt-1">
              Hours
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl sm:text-4xl font-bold text-wedding-accent">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="font-sans text-[10px] sm:text-xs tracking-widest text-wedding-cream/80 uppercase mt-1">
              Mins
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-serif text-2xl sm:text-4xl font-bold text-wedding-accent">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="font-sans text-[10px] sm:text-xs tracking-widest text-wedding-cream/80 uppercase mt-1">
              Secs
            </span>
          </div>
        </div>

        {/* RSVP Quick Button */}
        <a
          href="#rsvp"
          className="inline-block px-8 py-3 bg-wedding-accent hover:bg-wedding-goldMuted text-wedding-primary font-sans text-sm tracking-widest font-semibold uppercase rounded-full shadow-lg hover:shadow-wedding-accent/20 transition-all duration-300 transform hover:-translate-y-0.5 animate-cascade-5"
        >
          RSVP Now
        </a>
      </div>

      {/* Floating Animated Scroll Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        <a href="#details" className="text-wedding-accent hover:text-wedding-ivory transition-colors duration-300">
          <svg
            className="w-6 h-6 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
