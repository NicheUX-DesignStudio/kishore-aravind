// TEST CHANGE - DELETE LATER
// src/components/HeroSection.tsx
import GaugeMeter from "./GaugeMeter";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-start justify-center px-4 pt-0 md:pt-0"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Logo */}
        <div className="w-full">
          <GaugeMeter />
        </div>

        {/* Description */}
        <p className="
          mt-4
          font-tech 
          text-sm sm:text-base md:text-lg 
          text-muted-foreground 
          leading-relaxed 
          max-w-[90%] sm:max-w-2xl 
          mx-auto
          px-2 sm:px-4
        ">
          K29 is a performance architecture.
Integrating elite sport methodology, structured development systems, and strategic visual communication to create sustainable excellence.
        </p>

      </div>
    </section>
  );
};

export default HeroSection;
