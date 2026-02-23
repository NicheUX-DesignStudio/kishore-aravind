// src/components/GaugeMeter.tsx
import * as React from "react";
import { useState } from "react";

const GaugeMeter = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

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
              src="/LOGO - GRADIENT + WHITE.png" 
              alt="K29 Logo" 
              className={`w-96 h-96 md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] object-contain transition-opacity duration-300 ${
                imgLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImgLoaded(true)}
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