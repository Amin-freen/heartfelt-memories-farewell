
import React from 'react';
import { motion } from 'framer-motion';

const EmotionalSection = () => {
  const memories = [
    "Four years of togetherness",
    "Countless cups of tea shared",
    "Infinite laughter echoing in corridors",
    "Last-minute assignment rushes",
    "Friendship that will last forever",
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <motion.h2 
        className="text-3xl md:text-4xl font-serif text-center mb-10 text-glow"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Moments We'll Cherish Forever
      </motion.h2>

      <div className="grid gap-8">
        {memories.map((memory, index) => (
          <motion.div
            key={index}
            className="bg-dark-primary/50 p-8 rounded-lg subtle-glow backdrop-blur-sm border border-white/10"
            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-2xl font-handwritten text-center text-white/90">
              {memory}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EmotionalSection;
