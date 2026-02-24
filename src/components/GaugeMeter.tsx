// src/components/GaugeMeter.tsx

const GaugeMeter = () => {
  return (
    <div className="relative flex justify-center items-center">

      {/* Gradient Circle */}
      <div className="absolute w-[420px] h-[420px] rounded-full 
        bg-gradient-to-tr from-red-500 via-purple-500 to-cyan-400 
        blur-3xl opacity-30">
      </div>

      {/* Inner Clean Circle */}
      <div className="relative w-[380px] h-[380px] rounded-full 
        bg-black flex items-center justify-center shadow-2xl">

        {/* Logo */}
        <img
          src="public/LOGO - GRADIENT + WHITE.png"
          alt="K29 Logo"
          className="w-[70%] h-auto object-contain"
        />

      </div>

    </div>
  );
};

export default GaugeMeter;