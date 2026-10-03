import React, { useState } from 'react';
import { FEATURE_FLAGS } from '../config/features';

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
        
        {/* Pre-Wedding Moments Grid (Controlled by FEATURE_FLAGS.SHOW_PRE_WEDDING_GALLERY) */}
        {FEATURE_FLAGS.SHOW_PRE_WEDDING_GALLERY && (
          <>
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
          </>
        )}

        {/* Wedding Photos / Google Drive Album Section */}
        {FEATURE_FLAGS.SHOW_WEDDING_PHOTOS_ALBUM && (
          <div className="mt-16 max-w-4xl mx-auto bg-wedding-primary border border-wedding-accent/30 rounded-3xl p-8 sm:p-10 shadow-xl text-center relative overflow-hidden">
            {/* Decorative background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-wedding-accent/10 rounded-full blur-3xl pointer-events-none" />

            <span className="font-sans text-xs tracking-[0.3em] text-wedding-accent uppercase font-medium block mb-2">
              Official Memories
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-wedding-ivory font-semibold mb-4">
              Wedding Day Photo Album
            </h3>

            {FEATURE_FLAGS.GOOGLE_DRIVE_ALBUM_URL ? (
              <div>
                <p className="font-sans text-wedding-cream/80 text-sm max-w-lg mx-auto mb-6 leading-relaxed">
                  Access all high-resolution photos and videos from Sharun & Niveditha's wedding on Google Drive.
                </p>
                <a
                  href={FEATURE_FLAGS.GOOGLE_DRIVE_ALBUM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 px-8 py-3.5 bg-wedding-accent hover:bg-wedding-goldMuted text-wedding-primary font-sans text-xs tracking-widest font-semibold uppercase rounded-full shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <svg className="w-5 h-5 text-wedding-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"/>
                  </svg>
                  <span>Open Google Drive Album</span>
                </a>
              </div>
            ) : (
              <div>
                <div className="inline-flex items-center space-x-2 px-5 py-2 bg-wedding-accent/15 border border-wedding-accent/30 rounded-full text-wedding-accent text-xs font-sans tracking-widest uppercase mb-4">
                  <span className="w-2 h-2 rounded-full bg-wedding-accent animate-ping" />
                  <span>Coming Soon — Google Drive Album</span>
                </div>
                <p className="font-sans text-wedding-cream/70 text-sm max-w-lg mx-auto leading-relaxed">
                  High-resolution wedding ceremony & reception photos will be uploaded here after the celebrations. Stay tuned!
                </p>
              </div>
            )}
          </div>
        )}
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
