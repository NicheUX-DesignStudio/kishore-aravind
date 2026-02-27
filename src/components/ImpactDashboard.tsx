// src/components/ImpactDashboard.tsx
import * as React from "react";
import { Zap, Layers } from "lucide-react";

const stats = [
  { value: "90+", label: "PLAYERS COACHED", barColor: "bg-kinetic", textColor: "text-kinetic" },
  { value: "5+", label: "YEARS COACHED", barColor: "bg-yellow", textColor: "text-yellow" },
  { value: "50+", label: "DESIGN SYSTEMS DELIVERED", barColor: "bg-systematic", textColor: "text-systematic" },
  { value: "50K+", label: "DONATED (RS)", barColor: "bg-green", textColor: "text-green" },
];

const squashMetrics = [
  { label: "Tournament Played (State/National/International)", value: "45+", valueClass: "text-kinetic font-display" },
  { label: "Medals (State/National/International)", value: "18", valueClass: "text-kinetic font-display" },
  { label: "Workshops and Clinics", value: "1", valueClass: "text-kinetic font-display" },
  { label: "Private Coaching Hours", value: "577 hrs", valueClass: "text-kinetic font-display" },
];

const designMetrics = [
  { label: "System Design Available", value: "YES", valueClass: "text-systematic font-display" },
  { label: "Projects Delivered", value: "50+", valueClass: "text-systematic font-display" },
  { label: "Design Components Built", value: "250+", valueClass: "text-systematic font-display" },
  { label: "Lives Impacted", value: "30+", valueClass: "text-systematic font-display" },
];

const ImpactDashboard = () => {
  return (
    <section id="impact" className="py-20 md:py-28 bg-[#0a0a0f]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.1em] mb-3 uppercase">
            Impact Dashboard
          </h2>
          <p className="font-tech text-xs sm:text-sm text-muted-foreground tracking-[0.2em]">
            Dual-Domain Performance Analytics
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-14">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#12121a] border border-border/50 rounded-lg p-4 sm:p-6 text-center"
            >
              <div 
                className={`font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 ${stat.textColor}`}
              >
                {stat.value}
              </div>
              <div className="font-tech text-[10px] xs:text-xs text-muted-foreground tracking-[0.15em] mb-4 uppercase leading-tight">
                {stat.label}
              </div>
              <div className={`h-1.5 rounded-full ${stat.barColor}`} />
            </div>
          ))}
        </div>

        {/* Metrics Panels */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Coaching Impact */}
          <div className="bg-[#12121a] border-l-4 border-kinetic rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-lg sm:text-xl text-kinetic tracking-[0.15em] uppercase">Coaching Impact</h3>
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-kinetic" />
            </div>
            <div className="space-y-4">
              {squashMetrics.map((metric, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="font-tech text-xs sm:text-sm text-muted-foreground">{metric.label}</span>
                  <span className={`text-xs sm:text-sm tracking-wide ${metric.valueClass}`}>{metric.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Design Output */}
          <div className="bg-[#12121a] border-l-4 border-systematic rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-lg sm:text-xl text-systematic tracking-[0.15em] uppercase">Design Output</h3>
              <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-systematic" />
            </div>
            <div className="space-y-4">
              {designMetrics.map((metric, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="font-tech text-xs sm:text-sm text-muted-foreground">{metric.label}</span>
                  <span className={`text-xs sm:text-sm tracking-wide ${metric.valueClass}`}>{metric.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactDashboard;
