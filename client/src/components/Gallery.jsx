import React, { useState } from 'react';

const Gallery = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const images = [
    {
      src: '/pre_wedding_1.png',
      caption: 'A Moment of Togetherness',
      category: 'Portrait'
    },
    {
      src: '/pre_wedding_2.png',
      caption: 'The Promise of Eternity',
      category: 'Details'
    },
    {
      src: '/pre_wedding_3.png',
      caption: 'Celebrating our Love Story',
      category: 'Decor'
    },
    {
      src: '/wedding_hero.png',
      caption: 'Under the Emerald Canopy',
      category: 'Portrait'
    }
  ];

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleClose = () => {
    setActiveImageIndex(null);
  };

  return (
    <section id="gallery" className="py-24 bg-wedding-ivory relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-xs tracking-[0.3em] text-wedding-accent uppercase font-medium">
            Gallery
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-wedding-primary mt-2 mb-4">
            Pre-Wedding Moments
          </h2>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-[1px] bg-wedding-accent" />
            <span className="text-wedding-accent text-lg">❦</span>
            <div className="w-8 h-[1px] bg-wedding-accent" />
          </div>
        </div>

        {/* Grid Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setActiveImageIndex(index)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer border border-wedding-accent/10 shadow-sm hover:shadow-lg transition-all duration-500 bg-wedding-cream"
            >
              {/* Photo Box */}
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-90"
                  loading="lazy"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-wedding-primary/90 via-wedding-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                <span className="font-sans text-[10px] tracking-widest text-wedding-accent uppercase mb-1">
                  {image.category}
                </span>
                <h4 className="font-serif text-lg text-wedding-ivory font-medium">
                  {image.caption}
                </h4>
                <div className="w-8 h-[1px] bg-wedding-accent mt-3 transition-all duration-300 group-hover:w-16" />
              </div>

              {/* Frame Border Effect on hover */}
              <div className="absolute inset-4 border border-wedding-accent/0 group-hover:border-wedding-accent/30 pointer-events-none transition-all duration-500 rounded-lg z-20" />
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          onClick={handleClose}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 transition-all duration-300"
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 text-wedding-cream/70 hover:text-wedding-accent focus:outline-none z-50 p-2"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 text-wedding-cream/70 hover:text-wedding-accent focus:outline-none z-50 p-2"
          >
            <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Image Container */}
          <div className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[activeImageIndex].src}
              alt={images[activeImageIndex].caption}
              className="max-w-full max-h-[75vh] object-contain rounded-lg border border-wedding-accent/20 shadow-2xl animate-fade-in"
            />
            
            {/* Caption */}
            <div className="text-center mt-6">
              <h3 className="font-serif text-xl md:text-2xl text-wedding-accent font-medium">
                {images[activeImageIndex].caption}
              </h3>
              <p className="font-sans text-xs tracking-wider text-wedding-cream/60 uppercase mt-1">
                Image {activeImageIndex + 1} of {images.length}
              </p>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 text-wedding-cream/70 hover:text-wedding-accent focus:outline-none z-50 p-2"
          >
            <svg className="w-8 h-8 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
