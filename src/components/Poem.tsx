
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Poem: React.FC = () => {
  const poemRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeLineIndex, setActiveLineIndex] = useState(-1);
  
  const poemLines = [
    "Pages may turn, the years may fly,",
    "But some goodbyes are never goodbye.",
    "For hearts once touched, never drift away,",
    "They live in memories, day by day.",
    "",
    "So here's to us — to every laugh and tears,",
    "For surviving together for four years,",
    "We laughed through failures, we stumbled and fell,",
    "Made memories from moments, no words could tell.",
    "",
    "Though we might lose touch, and time might fade,",
    "CSE-A, you'll always be home — where memories were made."
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            
            // Start animating lines when poem section is visible
            let lineIndex = 0;
            const interval = setInterval(() => {
              if (lineIndex < poemLines.length) {
                setActiveLineIndex(lineIndex);
                lineIndex++;
              } else {
                clearInterval(interval);
              }
            }, 800); // Adjust timing as needed

            return () => clearInterval(interval);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (poemRef.current) {
      observer.observe(poemRef.current);
    }

    return () => {
      if (poemRef.current) {
        observer.unobserve(poemRef.current);
      }
    };
  }, [poemLines.length]);

  return (
    <motion.div 
      className="w-full max-w-2xl mx-auto" 
      ref={poemRef}
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : {}}
      transition={{ duration: 1 }}
    >
      <motion.h2 
        className="text-3xl md:text-4xl font-serif text-center mb-10 text-glow"
        initial={{ y: 20, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        A Poem for You
      </motion.h2>
      
      <motion.div 
        className="bg-dark-primary/50 p-8 rounded-lg subtle-glow backdrop-blur-sm border border-white/10"
        initial={{ y: 30, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        whileHover={{ boxShadow: "0 0 25px rgba(255, 255, 255, 0.3)" }}
      >
        {poemLines.map((line, index) => (
          <div key={index} className="overflow-hidden">
            {line ? (
              <motion.p 
                className={`text-xl md:text-2xl font-handwritten mb-3 ${index <= activeLineIndex ? 'text-white' : 'text-white/20'}`}
                initial={{ x: -50, opacity: 0 }}
                animate={index <= activeLineIndex ? { 
                  x: 0, 
                  opacity: 1,
                  textShadow: "0 0 8px rgba(255, 255, 255, 0.6)"
                } : {}}
                transition={{ 
                  duration: 1,
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                whileHover={index <= activeLineIndex ? { 
                  scale: 1.02,
                  color: "#f5e7d3",
                  transition: { duration: 0.2 }
                } : {}}
              >
                {line}
              </motion.p>
            ) : (
              <div className="h-6"></div>
            )}
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Poem;
