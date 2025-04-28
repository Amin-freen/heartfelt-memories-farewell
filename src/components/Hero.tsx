
import React, { useEffect, useRef } from "react";

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Add animation classes after component mounts
    setTimeout(() => {
      if (titleRef.current) {
        titleRef.current.classList.add("opacity-100", "translate-y-0");
      }
    }, 500);
    
    setTimeout(() => {
      if (subtitleRef.current) {
        subtitleRef.current.classList.add("opacity-100", "translate-y-0");
      }
    }, 1000);
  }, []);

  return (
    <div 
      className="min-h-screen w-full bg-cover bg-center bg-fixed flex items-center justify-center px-6" 
      style={{ 
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&q=80')" 
      }}
    >
      <div className="text-center max-w-4xl">
        <h1 
          ref={titleRef}
          className="font-serif italic font-bold text-4xl md:text-6xl lg:text-7xl mb-6 text-glow opacity-0 transform translate-y-10 transition-all duration-1000 ease-out"
        >
          Not goodbye, just see you later
        </h1>
        <div 
          ref={subtitleRef}
          className="opacity-0 transform translate-y-10 transition-all duration-1000 ease-out delay-300"
        >
          <p className="text-lg md:text-xl font-light text-highlight-pink mb-8">
            A collection of memories, moments, and messages from the past four years
          </p>
          <div className="mt-8">
            <p className="font-handwritten text-2xl text-white">
              — Amin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
