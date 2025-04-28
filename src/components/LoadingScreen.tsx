
import React, { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [dots, setDots] = useState(".");
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prevDots => {
        if (prevDots.length >= 3) {
          return ".";
        } else {
          return prevDots + ".";
        }
      });
    }, 500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-dark-primary z-50">
      <div className="text-center">
        <h2 className="text-3xl font-serif italic text-white text-glow mb-4">
          Loading Memories{dots}
        </h2>
        <div className="w-64 h-2 bg-dark-secondary rounded-full overflow-hidden">
          <div className="h-full bg-highlight-purple animate-pulse rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
