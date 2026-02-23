// src/components/ServiceCards.tsx
import * as React from "react";
import { Users, Layers, Heart } from "lucide-react";

interface ServiceCardsProps {
  activeTimeline: "playing" | "coaching" | "designing";
  onTimelineChange: (timeline: "playing" | "coaching" | "designing") => void;
}

const services = [
  {
    id: "playing" as const,
    icon: Users,
    title: "PLAYING CAREER",
    description: "Professional athlete journey with championship victories",
    iconColor: "text-kinetic",
    titleColor: "text-kinetic",
    borderColor: "border-kinetic",
    bgHover: "hover:bg-kinetic/10",
  },
  {
    id: "coaching" as const,
    icon: Layers,
    title: "COACHING CAREER",
    description: "High-performance coach & player development specialist",
    iconColor: "text-systematic",
    titleColor: "text-systematic",
    borderColor: "border-systematic",
    bgHover: "hover:bg-systematic/10",
  },
  {
    id: "designing" as const,
    icon: Heart,
    title: "DESIGNING CAREER",
    description: "Community contribution metrics",
    iconColor: "text-green",
    titleColor: "text-green",
    borderColor: "border-green",
    bgHover: "hover:bg-green/10",
  },
];

const ServiceCards = ({ activeTimeline, onTimelineChange }: ServiceCardsProps) => {
  return (
    <section id="services" className="py-8 md:py-12 bg-[#0a0a0f]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            const isActive = activeTimeline === service.id;
            
            return (
              <button
                key={service.id}
                onClick={() => onTimelineChange(service.id)}
                className={`bg-[#12121a] border-2 rounded-lg p-6 sm:p-8 md:p-10 text-center transition-all duration-300 group w-full ${
                  isActive 
                    ? `${service.borderColor} shadow-[0_0_30px_rgba(230,57,70,0.15)] scale-105` 
                    : `border-border/50 ${service.bgHover} hover:border-muted-foreground/50`
                }`}
                aria-label={`View ${service.title} timeline`}
                aria-pressed={isActive}
              >
                <div className="mb-4 sm:mb-6">
                  <Icon 
                    className={`w-10 h-10 sm:w-12 sm:h-12 ${service.iconColor} mx-auto transition-transform duration-300 group-hover:scale-110`} 
                  />
                </div>
                <h3 className={`font-display text-lg sm:text-xl md:text-2xl ${service.titleColor} tracking-[0.15em] mb-2 sm:mb-4`}>
                  {service.title}
                </h3>
                <p className="font-tech text-xs sm:text-sm text-muted-foreground tracking-wide">
                  {service.description}
                </p>
                
                {/* Active indicator */}
                {isActive && (
                  <div className="mt-4 flex justify-center">
                    <div className={`w-2 h-2 rounded-full ${service.iconColor} animate-pulse`} />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
