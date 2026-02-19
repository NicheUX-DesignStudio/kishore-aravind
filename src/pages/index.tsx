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
        {/* HeroSection */}
        <HeroSection />
        
        {/* Service Cards */}
        <ServiceCards 
          activeTimeline={activeTimeline} 
          onTimelineChange={setActiveTimeline} 
        />
        
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