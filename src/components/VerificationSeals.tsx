// src/components/VerificationSeals.tsx
import * as React from "react";
import { useState, useEffect } from "react";
import { Award, GraduationCap, FileText, Heart, X, Calendar } from "lucide-react";

const seals = [
  {
    icon: Award,
    title: "LEVEL 2 COACH",
    borderColor: "border-kinetic",
    iconColor: "text-kinetic",
    bgGlow: "hover:shadow-[0_0_30px_rgba(230,57,70,0.3)]",
    description: "WSF Certified Coaching Accreditation",
    longDescription: "This Level 2 Coaching Certification represents an advanced standard of professional squash coaching. Awarded by the World Squash Federation (WSF), this qualification confirms competency in advanced technical instruction, session planning, performance analysis, and long-term player development within competitive squash environments.",
    issuer: "World Squash Federation (WSF)",
    date: "Issued: October 2024",
    badgeType: "certification"
  },
  {
    icon: FileText,
    title: "MENTAL HEALTH",
    borderColor: "border-yellow",
    iconColor: "text-yellow",
    bgGlow: "hover:shadow-[0_0_30px_rgba(255,200,0,0.3)]",
    description: "Mental Health in Elite Sport",
    longDescription: "This certification recognises formal training in mental health awareness and support within elite sport environments. Awarded by the International Olympic Committee (IOC), the programme focuses on athlete wellbeing, psychological safety, stress management, performance pressure, and responsible coaching practices in high-performance settings.",
    issuer: "International Olympic Committee (IOC)",
    date: "Issued: March 2026",
    badgeType: "certification"
  },
  {
    icon: GraduationCap,
    title: "DIGITAL JOURNALISM",
    borderColor: "border-systematic",
    iconColor: "text-systematic",
    bgGlow: "hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]",
    description: "Vocational Degree",
    longDescription: "This degree represents formal training in digital journalism, content creation, branding, and social media strategy. The programme covers storytelling for digital platforms, media ethics, audience engagement, visual communication, and brand-focused content across modern social channels.",
    issuer: "Loyola College (Chennai)",
    date: "Issued: March 2025",
    badgeType: "degree",
    certificateDetails: "Bachelor's of Vocational: Digital Journalism"
  },
  {
    icon: Heart,
    title: "SQUASH UNITED FOUNDATION",
    borderColor: "border-green",
    iconColor: "text-green",
    bgGlow: "hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]",
    description: "Squash United Foundation Member",
    longDescription: "An active member of the Squash United Foundation, a global nonprofit dedicated to using squash as a tool for social development, community engagement, and positive impact. Through this membership, I support initiatives that expand access to sport, education, and opportunity for underserved communities.",
    issuer: "Squash United Foundation",
    date: "Involvement Since: 2026",
    badgeType: "recognition",
    partnershipAreas: ["Community Development", "Youth Access", "Education Through Sport"]
  },
];

const VerificationSeals = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedSeal, setSelectedSeal] = useState<typeof seals[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSealClick = (seal: typeof seals[0]) => {
    setSelectedSeal(seal);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSeal(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isModalOpen]);

  return (
    <>
      <section 
        id="verification"
        className="py-16 md:py-20 lg:py-28"
        aria-labelledby="seals-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 
              id="seals-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.1em] mb-4 sm:mb-5 uppercase"
            >
              Verification Seals
            </h2>
            <p className="font-tech text-sm sm:text-base text-muted-foreground tracking-[0.2em] uppercase">
              CLICK SEALS TO KNOW MORE
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16">
            {seals.map((seal, index) => {
              const Icon = seal.icon;
              const isHovered = hoveredIndex === index;

              return (
                <div 
                  key={index} 
                  className="flex flex-col items-center gap-4 group relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <button 
                    onClick={() => handleSealClick(seal)}
                    className={`relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-2 ${seal.borderColor} flex items-center justify-center bg-[#12121a] transition-all duration-300 cursor-pointer ${
                      isHovered ? 'scale-110 ' + seal.bgGlow : ''
                    } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-primary`}
                    aria-label={`View ${seal.title} details`}
                  >
                    <Icon 
                      className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 ${seal.iconColor} transition-transform duration-300 ${
                        isHovered ? 'scale-110' : ''
                      }`} 
                    />
                  </button>
                  
                  <span className="font-tech text-xs sm:text-sm text-muted-foreground tracking-[0.15em] uppercase text-center max-w-[120px] sm:max-w-[140px]">
                    {seal.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedSeal && (
        <div 
          className="fixed inset-0 z-50 flex items-start md:items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
          aria-modal="true"
          role="dialog"
          aria-labelledby="modal-title"
        >
          <div 
            className="absolute bottom-0 md:relative w-full md:max-w-2xl bg-background border-0 md:border border-muted-foreground/30 rounded-t-2xl md:rounded-lg shadow-2xl max-h-[90vh] md:max-h-[80vh] flex flex-col animate-in slide-in-from-bottom-96 md:zoom-in-95 duration-300"
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-background border-b border-muted-foreground/20 p-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className={`flex-shrink-0 w-10 h-10 rounded-full border-2 ${selectedSeal.borderColor} flex items-center justify-center bg-[#12121a]`}>
                  <selectedSeal.icon className={`w-5 h-5 ${selectedSeal.iconColor}`} />
                </div>
                <div className="min-w-0">
                  <h3 
                    id="modal-title"
                    className="font-display text-base font-bold tracking-[0.05em] uppercase truncate"
                  >
                    {selectedSeal.title}
                  </h3>
                  <p className="font-tech text-xs text-muted-foreground tracking-[0.1em] uppercase truncate">
                    {selectedSeal.description}
                  </p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center hover:bg-muted-foreground/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 md:space-y-6">
              {/* Description */}
              <div>
                <h4 className="font-tech text-xs md:text-sm text-muted-foreground tracking-[0.1em] uppercase mb-2">
                  Description
                </h4>
                <p className="text-foreground text-sm md:text-base leading-relaxed">
                  {selectedSeal.longDescription}
                </p>
              </div>

              {/* Issuer & Date Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div>
                  <h4 className="font-tech text-xs md:text-sm text-muted-foreground tracking-[0.1em] uppercase mb-1 md:mb-2">
                    Issuer
                  </h4>
                  <p className="text-foreground text-sm md:text-base">{selectedSeal.issuer}</p>
                </div>
                <div>
                  <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2">
                    <Calendar className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <h4 className="font-tech text-xs md:text-sm text-muted-foreground tracking-[0.1em] uppercase">
                      Date
                    </h4>
                  </div>
                  <p className="text-foreground text-sm md:text-base pl-5 md:pl-0">{selectedSeal.date}</p>
                </div>
              </div>

              {/* Certificate Details */}
              {selectedSeal.badgeType === 'degree' && selectedSeal.certificateDetails && (
                <div>
                  <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2">
                    <FileText className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <h4 className="font-tech text-xs md:text-sm text-muted-foreground tracking-[0.1em] uppercase">
                      Certificate
                    </h4>
                  </div>
                  <p className="text-foreground text-sm md:text-base pl-5 md:pl-0">{selectedSeal.certificateDetails}</p>
                </div>
              )}

              {/* Partnership Areas */}
              {selectedSeal.badgeType === 'recognition' && selectedSeal.partnershipAreas && (
                <div>
                  <div className="flex items-center gap-1 md:gap-2 mb-2">
                    <Heart className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    <h4 className="font-tech text-xs md:text-sm text-muted-foreground tracking-[0.1em] uppercase">
                      Partnership Areas
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2 pl-5 md:pl-0">
                    {selectedSeal.partnershipAreas.map((area, index) => (
                      <span 
                        key={index}
                        className="px-2 md:px-3 py-1 bg-muted-foreground/10 border border-muted-foreground/20 rounded text-xs md:text-sm"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="sticky bottom-0 bg-background border-t border-muted-foreground/20 p-4">
              <button
                onClick={closeModal}
                className="w-full py-3 px-4 bg-primary text-primary-foreground font-tech tracking-[0.1em] uppercase rounded hover:bg-primary/90 transition-colors text-sm md:text-base"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VerificationSeals;
