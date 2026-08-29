import React from 'react';

const Story = () => {
  const milestones = [
    {
      title: "First Meeting",
      date: "September 2024",
      description: "It started with a casual introduction through mutual friends. What was meant to be a quick conversation turned into hours of talking and discovering how much they had in common.",
      icon: (
        <svg className="w-6 h-6 text-wedding-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      title: "The First Date",
      date: "November 2024",
      description: "A cozy evening walk followed by coffee. That night, amidst shared jokes and endless conversations, they both realized they had found something truly extraordinary.",
      icon: (
        <svg className="w-6 h-6 text-wedding-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "The Proposal",
      date: "February 2026",
      description: "Under a starry sky at a scenic hilltop, Sharun asked the most important question of his life. With happy tears and a pounding heart, Niveditha whispered 'Yes!'",
      icon: (
        <svg className="w-6 h-6 text-wedding-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    },
    {
      title: "The Big Day",
      date: "December 2026",
      description: "The beginning of their forever. Surrounded by family, friends, and love, they will take their vows and step into a beautiful new chapter of life together.",
      icon: (
        <svg className="w-6 h-6 text-wedding-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ];

  return (
    <section id="story" className="py-24 bg-wedding-ivory relative overflow-hidden">
      
      {/* Background Floral SVGs */}
      <div className="absolute top-0 right-0 -mt-10 opacity-10 pointer-events-none">
        <svg width="300" height="300" fill="none" viewBox="0 0 24 24" stroke="#d4af37">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-xs tracking-[0.3em] text-wedding-accent uppercase font-medium">
            Our Journey
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-wedding-primary mt-2 mb-4">
            How We Met
          </h2>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-[1px] bg-wedding-accent" />
            <span className="text-wedding-accent text-lg">❦</span>
            <div className="w-8 h-[1px] bg-wedding-accent" />
          </div>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative">
          
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full timeline-line top-0 hidden md:block" />

          {/* Timeline Cards */}
          <div className="space-y-12 md:space-y-24">
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={index}
                  className={`flex flex-col md:flex-row items-center justify-between ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Text Container */}
                  <div className="w-full md:w-5/12 flex justify-center">
                    <div className="glass-card p-8 rounded-2xl shadow-sm border border-wedding-accent/15 hover:border-wedding-accent/45 transition-all duration-300 relative">
                      <span className="font-sans text-xs tracking-wider text-wedding-accent font-semibold uppercase block mb-1">
                        {item.date}
                      </span>
                      <h3 className="font-serif text-2xl text-wedding-primary mb-3 font-semibold">
                        {item.title}
                      </h3>
                      <p className="font-sans text-wedding-charcoal/90 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon Circle (Timeline Node) */}
                  <div className="my-6 md:my-0 relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-wedding-primary border-2 border-wedding-accent shadow-md">
                    {item.icon}
                  </div>

                  {/* Spacer for structure */}
                  <div className="hidden md:block w-5/12" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Story;
