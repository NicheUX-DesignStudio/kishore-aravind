// src/components/GaugeMeter.tsx
import * as React from "react";
import { useState, useEffect, useRef } from "react";

const GaugeMeter = () => {
  const [rotation, setRotation] = useState(0);
  const [baseRotation, setBaseRotation] = useState(0);
  const [clickBoost, setClickBoost] = useState(0);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    const animate = () => {
      const currentTime = Date.now();
      const swingPeriod = 2000; 
      const progress = (currentTime % swingPeriod) / swingPeriod;
      const sineValue = Math.sin(progress * Math.PI * 2);
      const newBaseRotation = sineValue * 30; // ±30 degrees
      
      setBaseRotation(newBaseRotation);
      
      if (Math.abs(clickBoost) > 0.5) {
        const decay = 0.95;
        setClickBoost(prev => prev * decay);
      } else {
        setClickBoost(0);
      }

      const totalRotation = newBaseRotation + clickBoost;
      setRotation(totalRotation);
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [clickBoost]);

  const handleLeftClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Clicking K29 SQUASH (right) should go TOWARD K29 SQUASH (right/positive)
    setClickBoost(prev => prev - 15);
  };

  const handleRightClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Clicking K29 SPACE (left) should go TOWARD K29 SPACE (left/negative)
    setClickBoost(prev => prev + 15);
  };

  return (
    <div 
      className="w-full max-w-xl lg:max-w-2xl mx-auto select-none"
      role="img"
      aria-label="Interactive gauge meter showing kinetic to systematic balance."
    >
      <div className="relative px-2 sm:px-4">
        <svg 
          viewBox="0 0 400 220"
          className="w-full h-auto"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="gauge-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(355, 80%, 55%)" />
              <stop offset="50%" stopColor="hsl(230, 100%, 70%)" />
              <stop offset="100%" stopColor="hsl(187, 100%, 50%)" />
            </linearGradient>
          </defs>

          {/* Arc */}
          <path
            d="M 60 170 A 140 140 0 0 1 340 170"
            fill="none"
            stroke="url(#gauge-gradient)"
            strokeWidth="20"
            strokeLinecap="round"
          />

          {/* Needle */}
          <g
            style={{ 
              transformOrigin: '200px 170px',
              transform: `rotate(${rotation}deg)`,
              transition: 'transform 0.03s linear',
            }}
          >
            <line
              x1="200"
              y1="170"
              x2="200"
              y2="85"
              stroke="#ffffff"
              strokeWidth="5"
              strokeLinecap="round"
            />
            <circle 
              cx="200" 
              cy="85" 
              r="7"
              fill="#ffffff"
            />
          </g>
          
          {/* Center pivot */}
          <circle 
            cx="200" 
            cy="170" 
            r="15"
            fill="hsl(230, 20%, 4%)" 
            stroke="#ffffff" 
            strokeWidth="3"
          />

          <text 
            x="70" 
            y="215"
            fill="hsl(355, 80%, 55%)" 
            fontSize="18" 
            fontFamily="Orbitron, monospace" 
            fontWeight="900"
            textAnchor="middle"
            letterSpacing="1.5px"
          >
            K29 SQUASH
          </text>
          
          <text 
            x="310" 
            y="215"
            fill="hsl(187, 100%, 50%)" 
            fontSize="18" 
            fontFamily="Orbitron, monospace" 
            fontWeight="900"
            textAnchor="middle"
            letterSpacing="1.5px"
          >
            K29 SPACE
          </text>
        </svg>

        {/* Click areas - FIXED: Clicking label makes needle go TOWARD that label */}
        <div className="absolute inset-0 flex">
          {/* Right side - K29 Space - Clicking makes needle go RIGHT (positive) toward K29 Space */}
          <div 
            className="w-1/2 h-full cursor-pointer" 
            onClick={handleLeftClick}
            aria-label="Click for K29 Squash mode"
          />
          
          {/* Left side - K29 SQUASH - Clicking makes needle go LEFT (negative) toward K29 SQUASH */}
          <div 
            className="w-1/2 h-full cursor-pointer"
            onClick={handleRightClick}
            aria-label="Click for K29 Space mode"
          />
        </div>
      </div>
    </div>
  );
};

export default GaugeMeter;
