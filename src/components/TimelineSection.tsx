// src/components/TimelineSection.tsx
import * as React from "react";
import { useState } from "react";
import { Trophy, GraduationCap, Layers, Rocket, Target, Award, Users, Heart, Code } from "lucide-react";

interface TimelineSectionProps {
  activeTimeline: "playing" | "coaching" | "designing";
}

const timelineData = {
  playing: [
    {
      year: "2011",
      title: "Started Squash",
      details: "Foundation years | Competitive entry",
      status: "Athletic Genesis",
      statusColor: "bg-kinetic",
      icon: Target,
      iconBg: "bg-kinetic",
      yearColor: "text-kinetic",
    },
    {
      year: "2012",
      title: "National-Level Entry (U-11)",
      details: "Junior Sub-Junior Nationals – Quarterfinalist",
      status: "First National Breakthrough",
      statusColor: "bg-kinetic",
      icon: Award,
      iconBg: "bg-kinetic",
      yearColor: "text-kinetic",
    },
    {
      year: "2014",
      title: "Consistent National Semifinalist (U-13)",
      details: "Multiple Junior Circuit Semifinals",
      status: "Rising Junior Contender",
      statusColor: "bg-kinetic",
      icon: Trophy,
      iconBg: "bg-kinetic",
      yearColor: "text-kinetic",
    },
    {
      year: "2016",
      title: "Strong National Presence (U-15)",
      details: "Multiple National Quarterfinals",
      status: "Competitive Maturity Phase",
      statusColor: "bg-kinetic",
      icon: Layers,
      iconBg: "bg-kinetic",
      yearColor: "text-kinetic",
    },
    {
      year: "2018",
      title: "Leadership Begins",
      details: "National Team Bronze – Captain | SGFI National Championship (Team) – | Indian Junior Open – Semifinalist",
      status: "Emerging Leader",
      statusColor: "bg-kinetic",
      icon: Trophy,
      iconBg: "bg-kinetic",
      yearColor: "text-kinetic",
    },
    {
      year: "2019",
      title: "Breakthrough & State Dominance",
      details: "Tamil Nadu State Closed – Winner | OORJA Junior & Professional Open – Winner | Greater Chennai Open – Runner-Up",
      status: "State Champion | National Podium Leader",
      statusColor: "bg-kinetic",
      icon: Trophy,
      iconBg: "bg-kinetic",
      yearColor: "text-kinetic",
    },
    {
      year: "2020",
      title: "National Peak (Junior Era)",
      details: "SGFI National Championship – Team Gold (Captain) | Individual Silver (Captain) | ISA Circuit – Semifinalist",
      status: "National Champion | Peak Junior Leadership",
      statusColor: "bg-kinetic",
      icon: Trophy,
      iconBg: "bg-kinetic",
      yearColor: "text-kinetic",
    },
    {
      year: "2021",
      title: "Senior Transition",
      details: "Men's Category Entry | TN State Closed – Semifinal | Bengal Open – Quarterfinal",
      status: "Senior Circuit Establishment",
      statusColor: "bg-kinetic",
      icon: Rocket,
      iconBg: "bg-kinetic",
      yearColor: "text-kinetic",
    },
  ],
  coaching: [
    {
      year: "2022",
      title: "Assistant Coach Phase",
      details: "Indian Squash Academy – Junior Program | Supported junior athlete development | Organized competitive box matches",
      status: "Began Structured Player Mentoring",
      statusColor: "bg-yellow",
      icon: Users,
      iconBg: "bg-yellow",
      yearColor: "text-yellow",
    },
    {
      year: "2022",
      title: "Level 1 Coaching Certification",
      details: "Completed October 2022, Delhi | Officially certified to coach at junior level",
      status: "Certified Coach",
      statusColor: "bg-yellow",
      icon: GraduationCap,
      iconBg: "bg-yellow",
      yearColor: "text-yellow",
    },
    {
      year: "2023",
      title: "International Coaching Transition",
      details: "Moved to Malaysia (September 2023) | Head Coach – Vision Squash | Full program responsibility",
      status: "Assistant → International Head Coach",
      statusColor: "bg-yellow",
      icon: Rocket,
      iconBg: "bg-yellow",
      yearColor: "text-yellow",
    },
    {
      year: "2024",
      title: "Competitive Progression Year",
      details: "Players achieved multiple State-Level Top 8 finishes | Improved Junior Asian Rankings | National-level tracking selections",
      status: "System Establishment Phase",
      statusColor: "bg-yellow",
      icon: Target,
      iconBg: "bg-yellow",
      yearColor: "text-yellow",
    },
    {
      year: "2024",
      title: "Level 2 Coaching Certification",
      details: "Completed November 2024, Kuala Lumpur | Advanced coaching credentials for high-performance athlete development",
      status: "Advanced Certification",
      statusColor: "bg-yellow",
      icon: GraduationCap,
      iconBg: "bg-yellow",
      yearColor: "text-yellow",
    },
    {
      year: "2025",
      title: "Title Breakthrough & High-Performance Integration",
      details: "State-Level Champion produced | Multiple junior ranking improvements (Asian Level) | Players in national tracking pathway",
      status: "Program Validation & Elite Coaching Identity",
      statusColor: "bg-yellow",
      icon: Trophy,
      iconBg: "bg-yellow",
      yearColor: "text-yellow",
    },
    {
      year: "2025",
      title: "IOC Mental Health Certification",
      details: "IOC Mental Health in Elite Sport – Completed 2025 | High-performance coaching integration",
      status: "Holistic Coach Development",
      statusColor: "bg-yellow",
      icon: Heart,
      iconBg: "bg-yellow",
      yearColor: "text-yellow",
    },
  ],
  designing: [
    {
      year: "2020",
      title: "Bachelor's of Vocational: Digital Journalism",
      details: "Started a 3-year degree program | Learned social media marketing strategies and tools | Enhanced pre-existing passion for design",
      status: "Foundation Phase: Education + Skill-building",
      statusColor: "bg-systematic",
      icon: Layers,
      iconBg: "bg-systematic",
      yearColor: "text-systematic",
    },
    {
      year: "2023",
      title: "Graduation & Launch of K29",
      details: "Completed Bachelor's Degree | Launched personal brand K29 | Focus: Design projects for people in need, free of cost",
      status: "Designer with a purpose",
      statusColor: "bg-systematic",
      icon: Rocket,
      iconBg: "bg-systematic",
      yearColor: "text-systematic",
    },
    {
      year: "2024",
      title: "Expanded Project Work & Media Exposure",
      details: "Took on multiple design projects: course materials, event posters, squash media content | Worked for clients in India and Malaysia",
      status: "Social-impact designer + Creative media producer",
      statusColor: "bg-systematic",
      icon: Code,
      iconBg: "bg-systematic",
      yearColor: "text-systematic",
    },
    {
      year: "2025",
      title: "Professional Project Phase",
      details: "Worked on professional-level design projects | Continued supporting events, clients, and charitable contributions",
      status: "Professional designer delivering impactful work",
      statusColor: "bg-systematic",
      icon: Trophy,
      iconBg: "bg-systematic",
      yearColor: "text-systematic",
    },
    {
      year: "2026",
      title: "Dual Concept: K29 Squash & K29 Space",
      details: "K29 Squash – All squash-related initiatives | K29 Space – All creative/media work and charitable design projects",
      status: "Designer + Impact Creator + Sports Program Developer",
      statusColor: "bg-systematic",
      icon: Layers,
      iconBg: "bg-systematic",
      yearColor: "text-systematic",
    },
  ],
};

const TimelineSection = ({ activeTimeline }: TimelineSectionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const currentTimeline = timelineData[activeTimeline];

  return (
    <section
      id="timeline"
      className="py-16 md:py-20 lg:py-28 bg-[#0a0a0f]"
      aria-labelledby="timeline-heading"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative max-w-4xl lg:max-w-6xl mx-auto">
          <div 
            className="hidden md:block absolute left-1/2 top-14 bottom-20 w-[3px] bg-gradient-to-b from-kinetic via-systematic to-green transform -translate-x-1/2" 
            aria-hidden="true"
          />
          
          <div 
            className="md:hidden absolute left-6 sm:left-8 top-14 w-[2px] bg-gradient-to-b from-kinetic via-systematic to-green" 
            style={{ height: 'calc(100% - 10rem)' }}
            aria-hidden="true"
          />

          {currentTimeline.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;
            const isActive = activeIndex === index;

            return (
              <div
                key={`${item.year}-${index}`}
                className={`relative flex flex-col md:flex-row items-start md:items-center mb-16 md:mb-20 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                onFocus={() => setActiveIndex(index)}
                onBlur={() => setActiveIndex(null)}
              >
                <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${
                  isEven 
                    ? 'md:pr-10 lg:pr-12 md:text-right' 
                    : 'md:pl-10 lg:pl-12 md:text-left'
                }`}>
                  <div 
                    className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${item.yearColor} mb-2 sm:mb-3 transition-transform duration-300 mt-4 md:mt-0 ${
                      isActive ? 'scale-105' : ''
                    }`}
                  >
                    {item.year}
                  </div>
                  
                  <h3 className="font-display text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-3 tracking-wide">
                    {item.title}
                  </h3>
                  
                  <p className="font-tech text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 tracking-wide leading-relaxed">
                    {item.details}
                  </p>
                  
                  <div className={`flex items-center gap-2 ${
                    isEven ? 'md:justify-end' : 'md:justify-start'
                  }`}>
                    <span 
                      className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${item.statusColor} transition-all duration-300 ${
                        isActive ? 'scale-150' : ''
                      }`}
                    />
                    <span className="font-tech text-xs sm:text-sm text-muted-foreground tracking-wide">
                      {item.status}
                    </span>
                  </div>
                </div>

                <div 
                  className={`absolute left-6 sm:left-8 md:left-1/2 top-8 md:top.1/2 transform -translate-x-1/2 z-10 transition-all duration-300 ${
                    isActive ? 'scale-125' : ''
                  }`}
                >
                  <div 
                    className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full ${item.iconBg} flex items-center justify-center shadow-xl ring-4 ring-background transition-all duration-300 ${
                      isActive ? 'ring-8 shadow-2xl' : ''
                    }`}
                    aria-hidden="true"
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                  </div>
                </div>
                
                <div className="hidden md:block w-[45%]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
