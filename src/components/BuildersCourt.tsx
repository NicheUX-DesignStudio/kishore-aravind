import { useState } from "react";
import { Users, Target, Palette, BarChart3, X } from "lucide-react";

type ZoneType = "coaching" | "service" | "design" | "impact" | null;

const zoneContent = {
  coaching: {
    title: "Coaching Programs",
    icon: Users,
    color: "kinetic",
    description: "Kishore athlete development systems",
    metrics: [
      { label: "Players Developed", value: "147" },
      { label: "Win Rate", value: "92%" },
      { label: "Training Sessions", value: "2,847" },
    ],
  },
  service: {
    title: "Service Box",
    icon: Target,
    color: "yellow",
    description: "Performance consulting services",
    metrics: [
      { label: "Projects Delivered", value: "43" },
      { label: "Client Satisfaction", value: "98%" },
      { label: "Retention Rate", value: "94%" },
    ],
  },
  design: {
    title: "Design Portfolio",
    icon: Palette,
    color: "systematic",
    description: "Design systems & digital products",
    metrics: [
      { label: "Systems Shipped", value: "23" },
      { label: "Components Built", value: "1,247" },
      { label: "Quality Score", value: "98.5%" },
    ],
  },
  impact: {
    title: "Impact Metrics",
    icon: BarChart3,
    color: "green",
    description: "Social impact & community contribution",
    metrics: [
      { label: "Users Impacted", value: "500K" },
      { label: "Open Source", value: "12 Projects" },
      { label: "Community Hours", value: "2,400+" },
    ],
  },
};

const BuildersCourt = () => {
  const [activeZone, setActiveZone] = useState<ZoneType>(null);

  const handleZoneClick = (zone: ZoneType) => {
    setActiveZone(activeZone === zone ? null : zone);
  };

  const currentZone = activeZone ? zoneContent[activeZone] : null;

  return (
    <section 
      id="builders-court" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.08em] mb-4 uppercase">
            The Builder's Court
          </h2>
          <p className="font-tech text-sm sm:text-base text-muted-foreground tracking-[0.15em] uppercase">
            Zones of Expertise • Click to Explore
          </p>
        </div>

        <div className="max-w-3xl lg:max-w-4xl mx-auto">
          {/* Court */}
          <div 
            className="relative border border-border/50 rounded-xl overflow-hidden bg-[#0a0a0f] shadow-2xl"
            style={{ aspectRatio: "4/3" }}
          >
            {/* Corner indicators */}
            <div className="absolute top-3 left-3 w-3 h-3 rounded-full bg-kinetic z-20 shadow-[0_0_8px_rgba(230,57,70,0.5)]" />
            <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-green z-20 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
            <div className="absolute bottom-3 left-3 w-3 h-3 rounded-full bg-yellow z-20 shadow-[0_0_8px_rgba(255,140,0,0.5)]" />
            <div className="absolute bottom-3 right-3 w-3 h-3 rounded-full bg-systematic z-20 shadow-[0_0_8px_rgba(0,212,255,0.5)]" />

            {/* Top Zone */}
            <button
              onClick={() => handleZoneClick("coaching")}
              className={`absolute top-0 left-0 right-0 h-[30%] flex items-center justify-center transition-all duration-300 border-b border-border/30 group ${
                activeZone === "coaching" 
                  ? "bg-kinetic/20" 
                  : "bg-gradient-to-b from-kinetic/10 via-kinetic/5 to-transparent hover:from-kinetic/20 hover:via-kinetic/10"
              }`}
              aria-label="Coaching Programs Zone"
              aria-expanded={activeZone === "coaching"}
            >
              <span className="font-display text-lg md:text-xl lg:text-2xl text-kinetic tracking-[0.15em] uppercase group-hover:scale-105 transition-transform">
                Coaching Programs
              </span>
            </button>

            {/* Middle Row */}
            <div className="absolute top-[30%] left-0 right-0 h-[35%] flex">
              {/* Service Box */}
              <button
                onClick={() => handleZoneClick("service")}
                className={`w-1/2 flex items-center justify-center transition-all duration-300 border-r border-border/30 group ${
                  activeZone === "service" 
                    ? "bg-yellow/20" 
                    : "bg-[#1a1a24] hover:bg-[#22222e]"
                }`}
                aria-label="Service Box Zone"
                aria-expanded={activeZone === "service"}
              >
                <span className="font-display text-base md:text-lg lg:text-xl text-yellow tracking-[0.15em] uppercase group-hover:scale-105 transition-transform">
                  Service Box
                </span>
              </button>

              {/* Impact Metrics */}
              <button
                onClick={() => handleZoneClick("impact")}
                className={`w-1/2 flex items-center justify-center transition-all duration-300 border-l-2 border-green group ${
                  activeZone === "impact" 
                    ? "bg-green/20" 
                    : "bg-green/5 hover:bg-green/10"
                }`}
                aria-label="Impact Metrics Zone"
                aria-expanded={activeZone === "impact"}
              >
                <span className="font-display text-base md:text-lg lg:text-xl text-green tracking-[0.15em] uppercase group-hover:scale-105 transition-transform">
                  Impact Metrics
                </span>
              </button>
            </div>

            {/* Bottom Zone */}
            <button
              onClick={() => handleZoneClick("design")}
              className={`absolute bottom-0 left-0 right-0 h-[35%] flex items-center justify-center transition-all duration-300 border-t border-border/30 group ${
                activeZone === "design" 
                  ? "bg-systematic/20" 
                  : "bg-[#0f0f14] hover:bg-[#151520]"
              }`}
              aria-label="Design Portfolio Zone"
              aria-expanded={activeZone === "design"}
            >
              <span className="font-display text-lg md:text-xl lg:text-2xl text-systematic tracking-[0.15em] uppercase group-hover:scale-105 transition-transform">
                Design Portfolio
              </span>
            </button>
          </div>

          {/* Active Zone Content */}
          {currentZone && (
            <div className="mt-8 animate-in bg-[#0a0a0f] border border-border/50 rounded-xl p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-${currentZone.color}/10 border border-${currentZone.color}/20`}>
                    <currentZone.icon className={`w-6 h-6 text-${currentZone.color}`} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-bold tracking-[0.05em]">
                      {currentZone.title}
                    </h3>
                    <p className="font-tech text-sm text-muted-foreground mt-1">
                      {currentZone.description}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setActiveZone(null)}
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {currentZone.metrics.map((metric, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-lg bg-muted/10 border border-border/20 text-center"
                  >
                    <div className={`font-display text-2xl md:text-3xl font-bold text-${currentZone.color} mb-1`}>
                      {metric.value}
                    </div>
                    <div className="font-tech text-xs text-muted-foreground uppercase tracking-[0.1em]">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Instructions */}
          <div className="mt-6 text-center">
            <p className="font-tech text-xs text-muted-foreground tracking-[0.15em] uppercase">
              SELECT A ZONE TO VIEW DETAILED METRICS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildersCourt;