
import React from 'react';
import { motion } from 'framer-motion';

const LastClassImage = () => {
  return (
    <motion.div 
      className="relative w-full h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-black/50 z-10" />
      <img 
        src="public/lovable-uploads/72586672-6b60-466a-b2d1-c032c86609bd.png"
        alt="Last Class Together"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <motion.h2 
          className="text-4xl md:text-6xl font-serif italic text-glow text-center px-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Class of CSE-A 2025
        </motion.h2>
      </div>
    </motion.div>
  );
};

export default LastClassImage;
