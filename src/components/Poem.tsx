
import React, { useEffect, useRef } from 'react';

const Poem: React.FC = () => {
  const poemRef = useRef<HTMLDivElement>(null);
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

  const observerCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const lines = document.querySelectorAll('.poem-line');
        lines.forEach((line, index) => {
          setTimeout(() => {
            line.classList.add('visible');
          }, 300 * index);
        });
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    if (poemRef.current) {
      observer.observe(poemRef.current);
    }

    return () => {
      if (poemRef.current) {
        observer.unobserve(poemRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto" ref={poemRef}>
      <h2 className="text-3xl md:text-4xl font-serif text-center mb-10 text-glow">A Poem for You</h2>
      
      <div className="bg-dark-primary/50 p-8 rounded-lg subtle-glow">
        {poemLines.map((line, index) => (
          <div key={index} className="overflow-hidden">
            {line ? (
              <p 
                className="poem-line text-xl md:text-2xl font-handwritten mb-3 opacity-0 transition-opacity duration-500"
                style={{ 
                  animationDelay: `${index * 0.3}s`, 
                  animationFillMode: 'forwards' 
                }}
              >
                {line}
              </p>
            ) : (
              <div className="h-6"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Poem;
