// src/components/HeroSection.tsx
import * as React from "react";
import GaugeMeter from "./GaugeMeter";

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-4 pt-0 pb-12 md:pt-0 md:pb-20 relative overflow-hidden -mt-[73px]"
      aria-labelledby="hero-heading"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-transparent opacity-50" />
      
      <div className="w-full max-w-4xl mx-auto text-center relative z-10">
        
        {/* Gauge Meter */}
        <div className="mb-8 md:mb-12 px-2 mt-0">
          <GaugeMeter />
        </div>

        {/* Main Headline */}
        <h1 
          id="hero-heading"
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-[0.08em] mb-6 px-2"
        >
          <span className="text-kinetic">PLAYER</span>
          <span 
            className="text-muted-foreground mx-2 sm:mx-3 md:mx-4 inline-block"
            aria-hidden="true"
          >
            +
          </span>
          <span className="bg-gradient-to-r from-kinetic to-systematic bg-clip-text text-transparent">
            COACH
          </span>
          <span 
            className="text-muted-foreground mx-2 sm:mx-3 md:mx-4 inline-block"
            aria-hidden="true"
          >
            +
          </span>
          <span className="text-systematic">DESIGNER</span>
        </h1>

        {/* Bio text */}
        <p className="font-tech text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8 md:mb-10 px-4">
          I'm Kishore Aravind — a professional squash coach and performance-driven designer. 
          I work at the intersection of elite sport, systems thinking, and visual communication 
          to build athletes, programs, and ideas with purpose.
        </p>

      </div>
    </section>
  );
};

export default HeroSection;