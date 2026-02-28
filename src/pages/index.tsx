// src/pages/Index.tsx
import * as React from "react";
import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceCards from "@/components/ServiceCards";
import TimelineSection from "@/components/TimelineSection";
import ImpactDashboard from "@/components/ImpactDashboard";
import VerificationSeals from "@/components/VerificationSeals";
import NavigationWheel from "@/components/NavigationWheel";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [activeTimeline, setActiveTimeline] = useState<"playing" | "coaching" | "designing">("playing");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        
        {/* Integrated Timeline Header + Service Cards Section */}
        <section className="relative">
          {/* Timeline Header - Positioned above service cards */}
          <div className="container mx-auto px-4 sm:px-6 pt-16 md:pt-20 lg:pt-24">
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-[0.1em] mb-3 uppercase">
                Career Timelines
              </h2>
              <p className="font-tech text-xs sm:text-sm md:text-base text-muted-foreground tracking-[0.2em] uppercase">
                15-Year Evolution
              </p>
            </div>
          </div>
          
          {/* Service Cards */}
          <ServiceCards 
            activeTimeline={activeTimeline} 
            onTimelineChange={setActiveTimeline} 
          />
        </section>
        
        <TimelineSection activeTimeline={activeTimeline} />
        <ImpactDashboard />
        <VerificationSeals />
        <ContactSection />
      </main>
      <NavigationWheel />
    </div>
  );
};

export default Index;