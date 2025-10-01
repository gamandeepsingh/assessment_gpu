import React from "react";

const Marquee: React.FC = () => {
  const announcements = [
    "5000 Drops with Astra Quest Now",
    "nVidia RTX 6067 is now available in dApp",
    "Block Rate has been doubled now",
    "Earn 5000 Drops",
    "5000 Drops with Astra Quest Now",
    "nVidia RTX 6067 is now available in dApp",
    "Block Rate has been doubled now",
    "Earn 5000 Drops",
  ];

  return (
    <div className="relative bg-black overflow-hidden py-2 sm:py-3 rounded-lg">
      <div className="animate-marquee whitespace-nowrap flex gap-4 sm:gap-8">
        {[...announcements, ...announcements].map((text, i) => (
          <span key={i} className="text-light font-[600] text-[10px] sm:text-xs inline-block px-2 sm:px-4">
            {text}
          </span>
        ))}
      </div>

      {/* Left gradient overlay */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 sm:w-48 bg-gradient-to-r from-[#0f0f0f] to-transparent"></div>

      {/* Right gradient overlay */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 sm:w-48 bg-gradient-to-l from-[#0f0f0f] to-transparent"></div>
    </div>
  );
};

export default Marquee;
