// src/components/NavigationWheel.tsx
import * as React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import { History, BarChart3, Layers, Award, Mail, X, Home, Compass } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "home", label: "HOME", icon: Home, color: "text-kinetic" },
  { id: "services", label: "CAREERS", icon: Layers, color: "text-systematic" },
  { id: "timeline", label: "TIMELINE", icon: History, color: "text-yellow" },
  { id: "impact", label: "IMPACT", icon: BarChart3, color: "text-green" },
  { id: "verification", label: "SEALS", icon: Award, color: "text-kinetic" },
  { id: "contact", label: "CONTACT", icon: Mail, color: "text-systematic" },
];

const NavigationWheel = () => {
  const [rotation, setRotation] = useState(0);
  const [currentGrip, setCurrentGrip] = useState("HOME");
  const [isMobileWheelOpen, setIsMobileWheelOpen] = useState(false);
  const [isDesktopWheelVisible, setIsDesktopWheelVisible] = useState(false);
  
  const wheelRef = useRef<HTMLDivElement>(null);
  const mobileWheelRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startAngleRef = useRef(0);
  const accumulatedRotationRef = useRef(0);
  const currentRotationRef = useRef(0);

  const navigateToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    
    if (isMobileWheelOpen) {
      setIsMobileWheelOpen(false);
    }
  }, [isMobileWheelOpen]);

  const handleButtonClick = useCallback((id: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    const itemIndex = navItems.findIndex(item => item.id === id);
    if (itemIndex >= 0) {
      const targetRotation = -itemIndex * 60;
      setRotation(targetRotation);
      setCurrentGrip(navItems[itemIndex].label);
      accumulatedRotationRef.current = targetRotation;
      currentRotationRef.current = targetRotation;
      navigateToSection(id);
    }
  }, [navigateToSection]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!isDesktopWheelVisible) return;
    
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
      return;
    }
    
    const currentIndex = navItems.findIndex(item => item.label === currentGrip);
    
    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        const prevIndex = currentIndex === 0 ? navItems.length - 1 : currentIndex - 1;
        handleButtonClick(navItems[prevIndex].id);
        break;
        
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % navItems.length;
        handleButtonClick(navItems[nextIndex].id);
        break;
    }
  }, [currentGrip, handleButtonClick, isDesktopWheelVisible]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const getAngleFromCenter = (clientX: number, clientY: number, rect: DOMRect) => {
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    return Math.atan2(deltaY, deltaX) * (180 / Math.PI);
  };

  const getSectionIndexFromRotation = (currentRotation: number) => {
    let positiveRotation = ((currentRotation % 360) + 360) % 360;
    
    if (positiveRotation >= 330 || positiveRotation < 30) return 0;
    if (positiveRotation >= 30 && positiveRotation < 90) return 5;
    if (positiveRotation >= 90 && positiveRotation < 150) return 4;
    if (positiveRotation >= 150 && positiveRotation < 210) return 3;
    if (positiveRotation >= 210 && positiveRotation < 270) return 2;
    if (positiveRotation >= 270 && positiveRotation < 330) return 1;
    
    return 0;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!wheelRef.current || !isDesktopWheelVisible) return;
    
    e.preventDefault();
    isDraggingRef.current = true;
    const rect = wheelRef.current.getBoundingClientRect();
    startAngleRef.current = getAngleFromCenter(e.clientX, e.clientY, rect);
    
    const onMouseMove = (moveEvent: MouseEvent) => {
      if (!isDraggingRef.current || !wheelRef.current) return;
      
      const currentAngle = getAngleFromCenter(moveEvent.clientX, moveEvent.clientY, rect);
      const angleDiff = currentAngle - startAngleRef.current;
      
      const newRotation = accumulatedRotationRef.current + angleDiff;
      setRotation(newRotation);
      currentRotationRef.current = newRotation;
      
      const sectionIndex = getSectionIndexFromRotation(newRotation);
      setCurrentGrip(navItems[sectionIndex].label);
    };
    
    const onMouseUp = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      
      const finalRotation = currentRotationRef.current;
      const sectionIndex = getSectionIndexFromRotation(finalRotation);
      
      const targetRotation = -sectionIndex * 60;
      setRotation(targetRotation);
      setCurrentGrip(navItems[sectionIndex].label);
      accumulatedRotationRef.current = targetRotation;
      currentRotationRef.current = targetRotation;
      
      navigateToSection(navItems[sectionIndex].id);
    };
    
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  const handleTouchStart = (e: React.TouchEvent, isMobileWheel: boolean = false) => {
    const wheelElement = isMobileWheel ? mobileWheelRef.current : wheelRef.current;
    if (!wheelElement) return;
    if (!isMobileWheel && !isDesktopWheelVisible) return;
    
    const touch = e.touches[0];
    isDraggingRef.current = true;
    const rect = wheelElement.getBoundingClientRect();
    startAngleRef.current = getAngleFromCenter(touch.clientX, touch.clientY, rect);
    
    const onTouchMove = (moveEvent: TouchEvent) => {
      if (!isDraggingRef.current || !wheelElement) return;
      
      const touch = moveEvent.touches[0];
      const currentAngle = getAngleFromCenter(touch.clientX, touch.clientY, rect);
      const angleDiff = currentAngle - startAngleRef.current;
      
      const newRotation = accumulatedRotationRef.current + angleDiff;
      setRotation(newRotation);
      currentRotationRef.current = newRotation;
      
      const sectionIndex = getSectionIndexFromRotation(newRotation);
      setCurrentGrip(navItems[sectionIndex].label);
    };
    
    const onTouchEnd = () => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
      document.removeEventListener("touchcancel", onTouchEnd);
      
      const finalRotation = currentRotationRef.current;
      const sectionIndex = getSectionIndexFromRotation(finalRotation);
      
      const targetRotation = -sectionIndex * 60;
      setRotation(targetRotation);
      setCurrentGrip(navItems[sectionIndex].label);
      accumulatedRotationRef.current = targetRotation;
      currentRotationRef.current = targetRotation;
      
      navigateToSection(navItems[sectionIndex].id);
    };
    
    document.addEventListener("touchmove", onTouchMove);
    document.addEventListener("touchend", onTouchEnd);
    document.addEventListener("touchcancel", onTouchEnd);
  };

  const toggleDesktopWheel = () => {
    setIsDesktopWheelVisible(!isDesktopWheelVisible);
  };

  return (
    <>
      {/* Desktop Navigation Toggle Button */}
      <div className="hidden md:block fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleDesktopWheel}
          className="group relative w-14 h-14 rounded-full bg-card border border-border hover:border-kinetic/50 shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label={isDesktopWheelVisible ? "Close navigation wheel" : "Open navigation wheel"}
        >
          {/* Subtle inner ring */}
          <div className="absolute inset-1 rounded-full border border-border/30"></div>
          
          {/* Inner content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {isDesktopWheelVisible ? (
              <>
                <X className="w-4 h-4 text-muted-foreground group-hover:text-kinetic transition-colors" />
                <span className="text-[7px] font-tech text-muted-foreground group-hover:text-kinetic uppercase tracking-wider mt-0.5 transition-colors">
                  CLOSE
                </span>
              </>
            ) : (
              <>
                {/* Red Compass */}
                <Compass className="w-4 h-4 text-kinetic transition-colors" />
                {/* Blue Text */}
                <span className="text-[7px] font-tech text-systematic uppercase tracking-wider mt-0.5 transition-colors">
                  WHEEL
                </span>
              </>
            )}
          </div>
        </button>

        {/* Desktop Wheel */}
        {isDesktopWheelVisible && (
          <div className="absolute bottom-16 right-0 mb-2 animate-in slide-in-from-bottom-5 duration-300">
            <div className="relative">
              <div 
                ref={wheelRef}
                className="relative w-64 h-64 rounded-full border-2 border-border bg-background/95 backdrop-blur-md shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing select-none"
                onMouseDown={handleMouseDown}
                onTouchStart={(e) => handleTouchStart(e, false)}
                style={{ 
                  transform: `rotate(${rotation}deg)`,
                  transition: isDraggingRef.current ? 'none' : 'transform 0.3s ease-out'
                }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-card border-2 border-border flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="font-tech text-[10px] text-muted-foreground uppercase tracking-wider">
                      {isDraggingRef.current ? "DRAGGING..." : "DRAG ME"}
                    </div>
                  </div>
                </div>

                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const angle = index * 60;
                  const radian = (angle * Math.PI) / 180;
                  const radius = 100;
                  const x = Math.cos(radian) * radius;
                  const y = Math.sin(radian) * radius;

                  return (
                    <button
                      key={item.id}
                      className={cn(
                        "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-border bg-card hover:bg-accent hover:scale-110 hover:shadow-lg transition-all duration-200 flex items-center justify-center",
                        item.color
                      )}
                      style={{
                        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%)) rotate(${-rotation}deg)`,
                      }}
                      onClick={(e) => handleButtonClick(item.id, e)}
                      onTouchEnd={(e) => {
                        e.stopPropagation();
                        handleButtonClick(item.id, e as any);
                      }}
                      aria-label={`Navigate to ${item.label} section`}
                    >
                      <Icon className="w-5 h-5" />
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 text-center space-y-3">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-card border border-border rounded-full">
                  <span className="font-tech text-sm">
                    Current: <span className="text-kinetic font-semibold">{currentGrip}</span>
                  </span>
                  <span className="text-muted-foreground">•</span>
                  <span className="font-tech text-sm">
                    <span className="text-systematic font-semibold">{Math.round(rotation)}°</span>
                  </span>
                </div>
                
                <div className="flex justify-center gap-4">
                  <div className="text-xs text-muted-foreground">
                    Press <kbd className="px-2 py-1 bg-border rounded">←</kbd> <kbd className="px-2 py-1 bg-border rounded">→</kbd>
                  </div>
                </div>

                <button
                  onClick={toggleDesktopWheel}
                  className="text-xs font-tech text-muted-foreground hover:text-foreground uppercase tracking-wider transition-colors"
                >
                  Close Wheel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Navigation*/}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsMobileWheelOpen(!isMobileWheelOpen)}
          onTouchEnd={(e) => {
            e.stopPropagation();
            setIsMobileWheelOpen(!isMobileWheelOpen);
          }}
          className="group relative w-14 h-14 rounded-full bg-card border border-border hover:border-kinetic/50 shadow-lg transition-all duration-300"
          aria-label={isMobileWheelOpen ? "Close navigation wheel" : "Open navigation wheel"}
        >
          {/* Subtle inner ring */}
          <div className="absolute inset-1 rounded-full border border-border/30"></div>
          
          {/* Inner content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {isMobileWheelOpen ? (
              <>
                <X className="w-4 h-4 text-muted-foreground group-hover:text-kinetic transition-colors" />
                <span className="text-[7px] font-tech text-muted-foreground group-hover:text-kinetic uppercase tracking-wider mt-0.5 transition-colors">
                  CLOSE
                </span>
              </>
            ) : (
              <>
                {/* Compass */}
                <Compass className="w-4 h-4 text-kinetic transition-colors" />
                {/* Text */}
                <span className="text-[7px] font-tech text-systematic uppercase tracking-wider mt-0.5 transition-colors">
                  WHEEL
                </span>
              </>
            )}
          </div>
        </button>

        {isMobileWheelOpen && (
          <>
            <div 
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
              onClick={() => setIsMobileWheelOpen(false)}
              onTouchEnd={() => setIsMobileWheelOpen(false)}
            />
            
            <div 
              ref={mobileWheelRef}
              className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <h3 className="font-display text-2xl mb-2">NAVIGATION WHEEL</h3>
                <p className="text-sm text-muted-foreground">
                  Drag the wheel or tap icons to navigate
                </p>
              </div>
              
              <div 
                className="relative w-72 h-72 rounded-full border-2 border-border bg-background/95 backdrop-blur-md shadow-2xl overflow-hidden select-none"
                onTouchStart={(e) => handleTouchStart(e, true)}
                style={{ 
                  transform: `rotate(${rotation}deg)`,
                  transition: isDraggingRef.current ? 'none' : 'transform 0.2s ease-out'
                }}
              >
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-card border-2 border-border flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <div className="font-tech text-xs text-muted-foreground uppercase tracking-wider">
                      DRAG
                    </div>
                  </div>
                </div>

                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const angle = index * 60;
                  const radian = (angle * Math.PI) / 180;
                  const radius = 120;
                  const x = Math.cos(radian) * radius;
                  const y = Math.sin(radian) * radius;

                  return (
                    <button
                      key={item.id}
                      className={cn(
                        "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full border-2 border-border bg-card hover:bg-accent active:scale-110 active:shadow-lg transition-all duration-200 flex items-center justify-center",
                        item.color
                      )}
                      style={{
                        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%)) rotate(${-rotation}deg)`,
                      }}
                      onClick={(e) => handleButtonClick(item.id, e)}
                      onTouchEnd={(e) => {
                        e.stopPropagation();
                        handleButtonClick(item.id, e as any);
                      }}
                      aria-label={`Navigate to ${item.label} section`}
                    >
                      <Icon className="w-6 h-6" />
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 text-center space-y-4">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-card border border-border rounded-full">
                  <span className="font-tech text-sm">
                    Current: <span className="text-kinetic font-semibold">{currentGrip}</span>
                  </span>
                  <span className="text-muted-foreground">•</span>
                  <span className="font-tech text-sm">
                    <span className="text-systematic font-semibold">{Math.round(rotation)}°</span>
                  </span>
                </div>
                
                <button
                  onClick={() => setIsMobileWheelOpen(false)}
                  className="text-sm font-tech text-muted-foreground hover:text-foreground uppercase tracking-wider transition-colors"
                >
                  Close Wheel
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default NavigationWheel;