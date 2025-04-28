import React, { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import Envelope from "@/components/Envelope";
import Poem from "@/components/Poem";
import PhotoGallery from "@/components/PhotoGallery";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";
import MusicPlayer from "@/components/MusicPlayer";
import { ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LastClassImage from "@/components/LastClassImage";
import EmotionalSection from "@/components/EmotionalSection";
import MemoryWall from "@/components/MemoryWall";

const FarewellPage: React.FC = () => {
  const [showArrow, setShowArrow] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    
    if (scrollPosition > 100) {
      setShowArrow(false);
    } else {
      setShowArrow(true);
    }
    
    // Determine which section is in view
    if (scrollPosition < windowHeight * 0.5) {
      setActiveSection("hero");
    } else if (scrollPosition < windowHeight * 1.5) {
      setActiveSection("message");
    } else if (scrollPosition < windowHeight * 2.5) {
      setActiveSection("poem");
    } else {
      setActiveSection("gallery");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToNext = () => {
    const heroSection = document.getElementById("hero");
    const nextSection = document.getElementById("message");
    
    if (heroSection && nextSection) {
      const heroHeight = heroSection.offsetHeight;
      window.scrollTo({
        top: heroHeight,
        behavior: "smooth",
      });
    }
  };

  const pageVariants = {
    initial: {
      opacity: 0
    },
    in: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-dark-primary text-white overflow-x-hidden"
      initial="initial"
      animate="in"
      variants={pageVariants}
    >
      <Particles />
      <MusicPlayer />
      
      <section id="hero" className="relative min-h-screen">
        <Hero />
        <AnimatePresence>
          {showArrow && (
            <motion.div 
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
              onClick={scrollToNext}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 0.2
              }}
            >
              <ArrowDown className="h-10 w-10 text-white opacity-80" />
              <p className="text-sm text-white/70 mt-1">Scroll to read</p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      
      <section id="last-class" className="min-h-screen">
        <LastClassImage />
      </section>

      <section id="message" className="py-20 px-6 md:px-10 min-h-screen flex items-center justify-center">
        <Envelope />
      </section>
      
      <section id="emotional" className="min-h-screen py-20 px-6 md:px-10">
        <EmotionalSection />
      </section>
      
      <section id="poem" className="py-20 px-6 md:px-10 min-h-screen flex items-center justify-center bg-dark-charcoal">
        <Poem />
      </section>
      
      <section id="gallery" className="py-20 px-6 md:px-10">
        <PhotoGallery />
      </section>
      
      <section id="memory-wall" className="min-h-screen">
        <MemoryWall />
      </section>
      
      <Footer />
    </motion.div>
  );
};

export default FarewellPage;
