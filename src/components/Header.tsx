// src/components/Header.tsx
import * as React from "react";
import { useEffect, useState } from 'react';

const Header = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            {/* Fallback while image loads */}
            {!imgLoaded && (
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-kinetic to-systematic animate-pulse" />
            )}
            
            <img 
              src="/icon-gradient.png" 
              alt="K29 Logo" 
              className={`w-8 h-8 object-contain transition-opacity duration-300 ${
                imgLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImgLoaded(true)}
              loading="eager"
            />
            
            <span className="font-display text-xl font-bold tracking-wider">
              K29
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;