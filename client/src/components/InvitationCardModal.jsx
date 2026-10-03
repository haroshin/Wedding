import React from 'react';

const InvitationCardModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-10 max-w-2xl w-full max-h-[90vh] bg-wedding-primary border border-wedding-accent/40 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-scale-up">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-wedding-accent/20 bg-wedding-secondary/30">
          <div>
            <span className="font-sans text-[10px] tracking-[0.3em] text-wedding-accent uppercase font-medium block">
              Official Invitation
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-wedding-ivory font-semibold">
              Physical Wedding Card
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-wedding-cream/70 hover:text-wedding-accent hover:bg-wedding-accent/10 rounded-full transition-colors"
            aria-label="Close Modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Image View */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 flex items-center justify-center bg-black/40">
          <img
            src="/invitation_card.png"
            alt="Official Physical Wedding Invitation Card"
            className="max-w-full h-auto rounded-xl shadow-lg border border-wedding-accent/20"
          />
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-wedding-accent/20 bg-wedding-secondary/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-wedding-cream/70 text-center sm:text-left">
            Sharun & Niveditha Wedding Invitation
          </p>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <a
              href="/invitation_card.png"
              download="Sharun_Niveditha_Wedding_Invitation.png"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center space-x-2 px-5 py-2.5 bg-wedding-accent hover:bg-wedding-goldMuted text-wedding-primary font-sans text-xs tracking-widest font-semibold uppercase rounded-xl transition-all duration-300 shadow-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download Card</span>
            </a>

            <button
              onClick={onClose}
              className="px-5 py-2.5 border border-wedding-accent/30 text-wedding-cream hover:bg-wedding-accent/10 rounded-xl font-sans text-xs tracking-widest uppercase font-semibold transition-all"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InvitationCardModal;
