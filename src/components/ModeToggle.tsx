import { useState } from "react";
import { Trophy, Code } from "lucide-react";

const ModeToggle = () => {
  const [activeMode, setActiveMode] = useState<"squash" | "design">("squash");

  return (
    <div className="relative bg-[#0a0a0f] border border-muted-foreground/30 rounded-full p-1">
      <div className="flex">
        {/* Squash Mode Button */}
        <button
          onClick={() => setActiveMode("squash")}
          className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full transition-all duration-300 flex-1 ${
            activeMode === "squash"
              ? "bg-gradient-to-r from-kinetic to-kinetic/80 text-white shadow-lg"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Trophy className="w-4 h-4" />
          <span className="font-tech text-sm tracking-wider uppercase">
            SQUASH MODE
          </span>
        </button>

        {/* Design Mode Button */}
        <button
          onClick={() => setActiveMode("design")}
          className={`flex items-center justify-center gap-2 px-6 py-3 rounded-full transition-all duration-300 flex-1 ${
            activeMode === "design"
              ? "bg-gradient-to-r from-systematic to-systematic/80 text-white shadow-lg"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Code className="w-4 h-4" />
          <span className="font-tech text-sm tracking-wider uppercase">
            DESIGN MODE
          </span>
        </button>
      </div>
      
      {/* Active indicator*/}
    </div>
  );
};

export default ModeToggle;