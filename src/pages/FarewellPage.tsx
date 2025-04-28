
import React, { useState, useEffect, useRef } from "react";
import Hero from "@/components/Hero";
import Envelope from "@/components/Envelope";
import Poem from "@/components/Poem";
import PhotoGallery from "@/components/PhotoGallery";
import Footer from "@/components/Footer";
import Particles from "@/components/Particles";
import MusicPlayer from "@/components/MusicPlayer";
import { ArrowDown } from "lucide-react";

const FarewellPage: React.FC = () => {
  const [showArrow, setShowArrow] = useState(true);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100) {
      setShowArrow(false);
    } else {
      setShowArrow(true);
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

  return (
    <div className="min-h-screen bg-dark-primary text-white overflow-x-hidden">
      <Particles />
      <MusicPlayer />
      
      <section id="hero" className="relative min-h-screen">
        <Hero />
        {showArrow && (
          <div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
            onClick={scrollToNext}
          >
            <ArrowDown className="h-10 w-10 text-white opacity-80" />
          </div>
        )}
      </section>
      
      <section id="message" className="py-20 px-6 md:px-10 min-h-screen flex items-center justify-center">
        <Envelope />
      </section>
      
      <section id="poem" className="py-20 px-6 md:px-10 min-h-screen flex items-center justify-center bg-dark-charcoal">
        <Poem />
      </section>
      
      <section id="gallery" className="py-20 px-6 md:px-10">
        <PhotoGallery />
      </section>
      
      <Footer />
    </div>
  );
};

export default FarewellPage;
