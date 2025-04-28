
import React from 'react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-dark-charcoal py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-10 animation-float">
          <div className="inline-block p-4 rounded-full bg-highlight-purple/20 subtle-glow mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-highlight-purple animate-float"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-serif mb-4 text-glow">Until we meet again...</h3>
          <p className="text-lg text-white/80 mb-8">I'll carry the memories with me forever.</p>
          
          <button
            onClick={scrollToTop}
            className="px-6 py-3 rounded-md bg-gradient-to-r from-highlight-purple/80 to-highlight-pink/80 text-white font-medium hover:from-highlight-purple hover:to-highlight-pink transition-all duration-300 subtle-glow"
          >
            Back to Top
          </button>
        </div>
        
        <p className="text-white/60 text-sm">
          Class of 2021-2025 • CSE-A • Sai Ram Engineering College
        </p>
      </div>
    </footer>
  );
};

export default Footer;
