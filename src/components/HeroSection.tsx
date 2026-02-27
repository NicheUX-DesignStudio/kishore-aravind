// src/components/HeroSection.tsx
import GaugeMeter from "./GaugeMeter";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 py-0 -mt-16 md:-mt-20"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Logo */}
        <div className="w-full mb-4 sm:mb-6 md:mb-8 lg:mb-10">
          <GaugeMeter />
        </div>

        {/* Headline */}
        <h1 className="
          mt-0
          font-display
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
          font-bold
          tracking-[0.06em] sm:tracking-[0.08em]
          leading-tight sm:leading-normal
          px-2 sm:px-4
        ">
          <span className="text-kinetic block sm:inline">PLAYER</span>

          <span className="mx-1 sm:mx-2 md:mx-3 text-muted-foreground text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            +
          </span>

          <span className="bg-gradient-to-r from-kinetic to-systematic bg-clip-text text-transparent block sm:inline">
            COACH
          </span>

          <span className="mx-1 sm:mx-2 md:mx-3 text-muted-foreground text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            +
          </span>

          <span className="text-systematic block sm:inline">DESIGNER</span>
        </h1>

        {/* Description */}
        <p className="
          mt-4 sm:mt-5 md:mt-6 lg:mt-8
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
