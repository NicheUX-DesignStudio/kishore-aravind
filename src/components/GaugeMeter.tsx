// src/components/GaugeMeter.tsx
import * as React from "react";

const GaugeMeter = () => {
  return (
    <div className="w-full max-w-xl lg:max-w-2xl mx-auto select-none">
      <div className="relative px-2 sm:px-4">
        {/* Main container with relative positioning */}
        <div className="relative flex justify-center">
          {/* Logo */}
          <img
            src="/logo.png"
            alt="K29 Logo"
            className="w-[420px] max-w-full h-auto object-contain"
          />

          {/* SQUASH text */}
          <div 
            className="absolute font-display"
            style={{
              left: "8%",
              bottom: "12%",
              fontWeight: 900,
              letterSpacing: "2px",
              fontSize: "clamp(20px, 5vw, 36px)",
              color: "hsl(355, 80%, 55%)",
              whiteSpace: "nowrap",
              fontFamily: "Orbitron, monospace",
            }}
          >
            SQUASH
          </div>

          {/* SPACE text */}
          <div 
            className="absolute font-display"
            style={{
              right: "8%",
              bottom: "12%",
              fontWeight: 900,
              letterSpacing: "2px",
              fontSize: "clamp(20px, 5vw, 36px)",
              color: "hsl(187, 100%, 50%)",
              whiteSpace: "nowrap",
              fontFamily: "Orbitron, monospace",
            }}
          >
            SPACE
          </div>
        </div>
      </div>
    </div>
  );
};

export default GaugeMeter;