import React from 'react';

const Details = () => {
  const events = [
    {
      title: "Wedding Ceremony (Muhurtham)",
      time: "12:00 PM - 12:30 PM",
      date: "Monday, December 21, 2026",
      venue: "Bengaluru, Karnataka",
      dressCode: "Traditional Indian Attire (Veshti, Kurta, Saree)",
      mapUrl: "https://maps.app.goo.gl/Ae6d4YvwwsSfuuVv5",
      calendarUrl: `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Wedding Ceremony (Muhurtham) - Sharun & Niveditha")}&dates=20261221T063000Z/20261221T070000Z&details=You+are+invited+to+witness+the+marriage+ceremony+of+Sharun+%26+Niveditha&location=${encodeURIComponent("Bengaluru")}`,
      icon: (
        <svg className="w-8 h-8 text-wedding-accent mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
        </svg>
      )
    },
    {
      title: "Grand Reception",
      time: "3:30 PM Onwards",
      date: "Monday, December 21, 2026",
      venue: "Bengaluru, Karnataka",
      dressCode: "Formal Wear / Indo-Western / Tuxedo",
      mapUrl: "https://maps.app.goo.gl/Ae6d4YvwwsSfuuVv5",
      calendarUrl: `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Grand Reception - Sharun & Niveditha")}&dates=20261221T100000Z/20261221T150000Z&details=Join+us+for+an+evening+of+dinner%2C+dancing%2C+and+celebration+of+Sharun+%26+Niveditha&location=${encodeURIComponent("Bengaluru")}`,
      icon: (
        <svg className="w-8 h-8 text-wedding-accent mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      )
    }
  ];

  return (
    <section id="details" className="py-24 bg-wedding-cream relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-sans text-xs tracking-[0.3em] text-wedding-accent uppercase font-medium">
            Join Us
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-wedding-primary mt-2 mb-4">
            Event Details & Location
          </h2>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-8 h-[1px] bg-wedding-accent" />
            <span className="text-wedding-accent text-lg">❦</span>
            <div className="w-8 h-[1px] bg-wedding-accent" />
          </div>
        </div>

        {/* Grid Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {events.map((event, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-wedding-accent/20 hover:border-wedding-accent/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-center md:justify-start">
                  {event.icon}
                </div>
                <h3 className="font-serif text-2xl lg:text-3xl text-wedding-primary font-semibold mb-4 text-center md:text-left">
                  {event.title}
                </h3>
                
                {/* Event Metadata list */}
                <div className="space-y-4 font-sans text-wedding-charcoal/90 text-sm sm:text-base text-center md:text-left">
                  {/* Date */}
                  <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-3">
                    <span className="font-semibold text-wedding-accent min-w-[70px]">Date:</span>
                    <span>{event.date}</span>
                  </div>

                  {/* Time */}
                  <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-3">
                    <span className="font-semibold text-wedding-accent min-w-[70px]">Time:</span>
                    <span>{event.time}</span>
                  </div>

                  {/* Venue */}
                  <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-3">
                    <span className="font-semibold text-wedding-accent min-w-[70px]">Venue:</span>
                    <span className="leading-relaxed">{event.venue}</span>
                  </div>

                  {/* Dress Code */}
                  <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-3">
                    <span className="font-semibold text-wedding-accent min-w-[70px]">Dress Code:</span>
                    <span className="italic text-wedding-secondary font-medium">{event.dressCode}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-wedding-accent/10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <a
                  href={event.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center px-6 py-2.5 bg-wedding-primary hover:bg-wedding-secondary text-wedding-cream rounded-full text-sm font-semibold tracking-wider uppercase transition-colors duration-200"
                >
                  View on Google Maps
                </a>
                
                <a
                  href={event.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto text-center px-6 py-2.5 border border-wedding-accent text-wedding-primary hover:bg-wedding-accent hover:text-white rounded-full text-sm font-semibold tracking-wider uppercase transition-all duration-200"
                >
                  Add to Calendar
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Embedded Google Map Section */}
        <div className="mt-16 bg-white rounded-3xl p-6 sm:p-8 border border-wedding-accent/20 shadow-md overflow-hidden">
          <div className="text-center mb-6">
            <h3 className="font-serif text-2xl text-wedding-primary font-semibold">
              Venue Location Map
            </h3>
            <p className="font-sans text-xs text-wedding-charcoal/70 mt-1 uppercase tracking-widest">
              Click below to get step-by-step directions on Google Maps
            </p>
          </div>

          {/* Interactive Map Embed Container */}
          <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-inner border border-wedding-accent/10">
            <iframe
              title="Venue Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8936998960136!2d77.5855!3d13.0035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAwJzEyLjYiTiA3N8KwMzUnMDcuOCJF!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter saturate-110"
            />
          </div>

          <div className="mt-6 text-center">
            <a
              href="https://maps.app.goo.gl/Ae6d4YvwwsSfuuVv5"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-wedding-accent hover:bg-wedding-goldMuted text-wedding-primary font-sans text-xs tracking-widest font-semibold uppercase rounded-full transition-all duration-300 shadow-md hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4 text-wedding-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span>Open in Google Maps App</span>
            </a>
          </div>
        </div>

        {/* Accommodation / Travel note */}
        <div className="mt-12 text-center max-w-2xl mx-auto glass-card p-6 rounded-2xl border border-wedding-accent/20">
          <h4 className="font-serif text-lg text-wedding-primary font-semibold mb-2">Need Help with Accommodations?</h4>
          <p className="font-sans text-wedding-charcoal/80 text-sm leading-relaxed">
            If you are traveling from outside Bengaluru and need assistance with hotel bookings or transportation, please mention it in the RSVP form comments or contact the couple directly. We're happy to help!
          </p>
        </div>

      </div>
    </section>
  );
};

export default Details;
