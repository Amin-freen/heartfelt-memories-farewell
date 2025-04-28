
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star } from 'lucide-react';

const memories = [
  {
    text: "Remember our first day? We were all so nervous! 😊",
    emoji: "🎓"
  },
  {
    text: "Late night study sessions with endless cups of coffee ☕",
    emoji: "📚"
  },
  {
    text: "Those crazy lunch break adventures! 🍕",
    emoji: "😂"
  },
  {
    text: "Supporting each other through tough times 🫂",
    emoji: "💝"
  },
  {
    text: "Dancing in culturals, womens day and much more!!!! ",
    emoji: "💃"
  },{
    text: "Last minute kenjifying for LIL Marks ",
    emoji: "📑"
  },
  {
    text: "Synsara'24 ",
    emoji: "🤍"
  },
  {
    text: "Winning the cricket match'25 ",
    emoji: "🏆"
  },{
    text: "Those unnecessary NPTEL exams!",
    emoji: "🗑️"
  },{
    text: "Looking for Lab coats🥺",
    emoji: "🧥"
  },
  {
    text: "Sheela mam's 'neenga laa en pullainga da'",
    emoji: "👵🏻"
  },{
    text: "IV to pondiiiiiiiiii",
    emoji: "🏖️"
  },
  {
    text: "Bunking class to go to canteen",
    emoji: "😋"
  },{
    text: "From drawing cones and shapes in eg to attending college just for attendance",
    emoji: "✏️"
  }
];

const MemoryWall = () => {
  return (
    <div className="py-20 px-6 md:px-10 min-h-screen bg-gradient-to-b from-dark-primary to-dark-charcoal">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center justify-center gap-3 mb-10">
          <Star className="w-8 h-8 text-highlight-gold" />
          <h2 className="text-3xl md:text-4xl font-serif text-center text-glow">
            Our Precious Moments
          </h2>
          <Heart className="w-8 h-8 text-highlight-pink" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-dark-primary/40 p-6 rounded-lg border border-highlight-purple/20 backdrop-blur-sm"
            >
              <div className="text-4xl mb-4">{memory.emoji}</div>
              <p className="text-lg text-white/90">{memory.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default MemoryWall;
