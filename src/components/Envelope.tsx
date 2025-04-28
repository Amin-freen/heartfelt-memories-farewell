
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Envelope: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const envelopeRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (envelopeRef.current) {
      observer.observe(envelopeRef.current);
    }

    return () => {
      if (envelopeRef.current) {
        observer.unobserve(envelopeRef.current);
      }
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto" ref={envelopeRef}>
      <motion.h2 
        className="text-3xl md:text-4xl font-serif text-center mb-10 text-glow"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        A Letter to Remember
      </motion.h2>
      
      <motion.div 
        className={`envelope ${isOpen ? 'open' : ''} bg-gradient-to-br from-[#7e2134] to-[#431220] rounded-md p-4 mx-auto max-w-2xl relative subtle-glow cursor-pointer`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
        whileHover={!isOpen ? { scale: 1.02 } : {}}
        transition={{ duration: 0.5 }}
        onClick={!isOpen ? handleOpen : undefined}
      >
        {!isOpen ? (
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Button 
              className="bg-highlight-peach text-dark-primary hover:bg-highlight-peach/90 shadow-lg"
            >
              Open Letter
            </Button>
            <p className="text-white/70 mt-2 text-sm">Click to read</p>
          </motion.div>
        ) : null}
        
        <motion.div 
          className="envelope-lid absolute top-0 left-0 right-0 h-24 bg-gradient-to-br from-[#a02c45] to-[#591a2b] z-10 rounded-t-md"
          animate={isOpen ? { rotateX: '-180deg' } : {}}
          style={{ transformOrigin: 'top' }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        ></motion.div>
        
        <motion.div 
          className="envelope-content mt-6 p-6 bg-[#f5e7d3] text-dark-primary rounded-md"
          initial={{ opacity: 0, height: 0 }}
          animate={isOpen ? { opacity: 1, height: 'auto' } : {}}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.div 
            className="max-h-[60vh] overflow-y-auto p-4"
            initial={{ opacity: 0 }}
            animate={isOpen ? { opacity: 1 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <p className="font-handwritten text-xl mb-4 leading-relaxed">
              I don't even know how to begin — because how do you say goodbye to a place, to people, who became your whole world without you even realizing it?
            </p>
            
            <p className="font-handwritten text-xl mb-4 leading-relaxed">
              Four years ago, we walked into college, scared, clueless, with dreams bigger than our fears — not knowing what awaited us.
            </p>
            
            <p className="font-handwritten text-xl mb-4 leading-relaxed">
              And somewhere between those first awkward hellos, figuring out who is who from the names in the attendance sheet and today's silent goodbyes, we lived a lifetime. honestly,
            </p>
            
            <p className="font-handwritten text-xl mb-4 leading-relaxed">
              We didn't just survive engineering, we lived it.
            </p>
            
            <p className="font-handwritten text-xl mb-4 leading-relaxed">
              From studying the whole syllabus one night before exams, shivering thinking about failing, to standing outside class for being late, still laughing about it...
            </p>
            
            <p className="font-handwritten text-xl mb-4 leading-relaxed">
              From entering labs without lab coats and getting roasted, to running in the last minute to get reports signed — even without observations...
            </p>
            
            <p className="font-handwritten text-xl mb-4 leading-relaxed">
              From bunking classes and sitting on stone benches, wasting hours doing nothing but just being together...
            </p>
            
            <p className="font-handwritten text-xl mb-4 leading-relaxed">
              From the fear of getting caught by FS when bunking, to that mad panic before submissions...
            </p>
            
            <p className="font-handwritten text-xl mb-6 leading-relaxed">
              We did it all. Together.
            </p>
            
            <p className="font-handwritten text-xl mb-4 leading-relaxed">
              Thank you — for every time you said "Seri vidu, pathukalam" even when we both knew we were screwed.
            </p>
            
            <p className="font-handwritten text-xl mb-4 leading-relaxed">
              Thank you for every laugh, every bunk, every last-minute "ada seekram mudichitu va lusu, podhum eludhunadhu" moment.
            </p>
            
            <p className="font-handwritten text-xl mb-4 leading-relaxed">
              Thank you for standing by me when everything felt like it was falling apart.
            </p>
            
            <p className="font-handwritten text-xl mb-6 leading-relaxed">
              To the girls, especially who stood by me, through every low and high —
            </p>
            
            <p className="font-handwritten text-xl mb-6 leading-relaxed">
              I love you.. You were my comfort when everything felt too loud, my calm when everything else was rushing, and you'll always have a special place in my heart.
            </p>
            
            <p className="font-handwritten text-xl mb-4 leading-relaxed">
              If I have ever hurt anyone, knowingly or unknowingly, I'm really sorry from the bottom of my heart.
            </p>
            
            <p className="font-handwritten text-xl mb-6 leading-relaxed">
              Please don't remember me for the bad moments — remember me for the stupid jokes, the late-night laughs, and the way we made even failures memorable.
            </p>
            
            <p className="font-handwritten text-xl mb-6 leading-relaxed">
              I will miss it all —
            </p>
            
            <p className="font-handwritten text-xl mb-2 leading-relaxed ml-8">
              the chaos,
            </p>
            
            <p className="font-handwritten text-xl mb-2 leading-relaxed ml-8">
              the inside jokes only we understand,
            </p>
            
            <p className="font-handwritten text-xl mb-2 leading-relaxed ml-8">
              the late-night assignment panics,
            </p>
            
            <p className="font-handwritten text-xl mb-2 leading-relaxed ml-8">
              the games,
            </p>
            
            <p className="font-handwritten text-xl mb-6 leading-relaxed ml-8">
              the smiles that needed no reason.
            </p>
            
            <p className="font-handwritten text-xl mb-8 leading-relaxed">
              And no matter how far life takes us from here,
            </p>
            
            <p className="font-handwritten text-xl mb-8 leading-relaxed">
              You will always be a chapter, I will never forget, my "once upon a time."
            </p>
            
            <p className="font-handwritten text-xl mb-2 leading-relaxed">
              Goodbye... until we meet again. ❤️
            </p>
            
            <motion.p 
              className="font-handwritten text-2xl text-right mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              Forever yours,<br />Amin
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Envelope;
