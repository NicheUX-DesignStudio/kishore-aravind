// src/components/GaugeMeter.tsx
import * as React from "react";
import { useState } from "react";

const GaugeMeter = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  // If image failed to load, show a more explicit fallback
  if (imgError) {
    return (
      <div className="w-full max-w-xl lg:max-w-2xl mx-auto select-none">
        <div className="relative px-2 sm:px-4">
          <div className="relative flex justify-center">
            <div className="w-96 h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] rounded-full bg-gradient-to-r from-kinetic to-systematic flex items-center justify-center">
              <span className="font-display text-white text-4xl">K29</span>
            </div>
            <div className="absolute bottom-12 left-0 font-display text-2xl md:text-3xl lg:text-4xl font-bold text-kinetic whitespace-nowrap">
              SQUASH
            </div>
            <div className="absolute bottom-12 right-0 font-display text-2xl md:text-3xl lg:text-4xl font-bold text-systematic whitespace-nowrap">
              SPACE
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="w-full max-w-xl lg:max-w-2xl mx-auto select-none"
      role="img"
      aria-label="K29 Logo with Squash and Space"
    >
      <div className="relative px-2 sm:px-4">
        {/* Main container with relative positioning */}
        <div className="relative flex justify-center">
          {/* Logo - massive size now */}
          <div className="flex justify-center">
            {/* Fallback while image loads */}
            {!imgLoaded && (
              <div className="w-96 h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] rounded-full bg-gradient-to-r from-kinetic to-systematic animate-pulse" />
            )}
            
            <img 
              src="/LOGO%20-%20GRADIENT%20+%20WHITE.png" 
              alt="K29 Logo" 
              className={`w-96 h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] object-contain transition-opacity duration-300 ${
                imgLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => {
                console.log("Logo loaded successfully");
                setImgLoaded(true);
              }}
              onError={(e) => {
                console.error("Logo failed to load:", e);
                setImgError(true);
              }}
              loading="eager"
            />
          </div>

          {/* SQUASH text - bottom left, moved up slightly */}
          <div className="absolute bottom-12 left-0 font-display text-2xl md:text-3xl lg:text-4xl font-bold text-kinetic whitespace-nowrap">
            SQUASH
          </div>

          {/* SPACE text - bottom right, moved up slightly */}
          <div className="absolute bottom-12 right-0 font-display text-2xl md:text-3xl lg:text-4xl font-bold text-systematic whitespace-nowrap">
            SPACE
          </div>
        </div>
      </div>
    </div>
  );
};

export default GaugeMeter;