import React, { useState, useEffect, useRef } from 'react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Soft romantic piano instrumental track
  const trackUrl = "https://assets.mixkit.co/music/preview/mixkit-beautiful-dream-293.mp3";

  useEffect(() => {
    // Create audio object
    audioRef.current = new Audio(trackUrl);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4; // Soft background volume

    // Browser security blocks autoplay until user interacts. 
    // We'll listen for first click on the document to offer a premium experience if they want it.
    const handleFirstInteraction = () => {
      // We don't autoplay immediately to avoid annoying the user, 
      // but this unlocks the audio context so click toggles it smoothly.
      document.removeEventListener('click', handleFirstInteraction);
    };
    document.addEventListener('click', handleFirstInteraction);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("Audio play failed:", err.message);
        });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={togglePlay}
        className={`w-12 h-12 rounded-full flex items-center justify-center border shadow-xl transition-all duration-500 transform hover:scale-110 focus:outline-none ${
          isPlaying 
            ? 'bg-wedding-accent border-wedding-accent text-wedding-primary animate-pulse'
            : 'bg-wedding-primary border-wedding-accent/30 text-wedding-accent'
        }`}
        title={isPlaying ? "Mute Background Music" : "Play Background Music"}
      >
        {isPlaying ? (
          <div className="relative w-6 h-6 flex items-center justify-center">
            {/* Spinning music bars or music note */}
            <svg className="w-5 h-5 animate-spin" style={{ animationDuration: '6s' }} fill="currentColor" viewBox="0 0 20 20">
              <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
            </svg>
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-wedding-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-wedding-primary"></span>
            </span>
          </div>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default MusicPlayer;
