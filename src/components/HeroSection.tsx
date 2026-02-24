// src/components/HeroSection.tsx

import GaugeMeter from "./GaugeMeter";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden"
    >
      <div className="w-full max-w-6xl mx-auto text-center relative z-10 space-y-10">
        
        {/* Logo */}
        <GaugeMeter />

        {/* Squash / Space */}
        <div className="flex justify-between items-center text-xl md:text-2xl tracking-widest font-semibold">
          <span className="text-red-500">SQUASH</span>
          <span className="text-cyan-400">SPACE</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wide">
          <span className="text-red-500">Player</span>{" "}
          <span className="text-gray-400">+ Coach</span>{" "}
          <span className="text-cyan-400">+ Designer</span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          I'm Kishore Aravind – a professional squash coach and performance-driven designer.
          I work at the intersection of elite sport, systems thinking, and visual communication
          to build athletes, programs, and ideas with purpose.
        </p>

      </div>
    </section>
  );
};

export default HeroSection;