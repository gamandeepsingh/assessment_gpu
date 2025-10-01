import { MoveRight } from "lucide-react";
import React from "react";

const StatsCards: React.FC = () => {
  const stats = [
    { country: "Our Datacenter in Glance", gpus: 0 },
    { country: "United States", gpus: 508 },
    { country: "United Kingdom", gpus: 354 },
    { country: "United Arab Emirates", gpus: 154 },
    { country: "Australia", gpus: 104 },
    { country: "Spain", gpus: 21 },
  ];

  return (
    <div className="bg-black rounded-xl p-2">
      <div className="flex items-center gap-4">
        {stats.map((stat, index) => (
          <div key={stat.country} className="rounded-lg p-4 relative">
            <div
              className={`mb-1 font-bold whitespace-nowrap ${
                index === 0 ? "text-light text-sm" : "text-white/60 text-xs"
              }`}
            >
              {stat.country}
            </div>
            <div className="text-xl font-bold text-light">
              {stat.gpus === 0 ? (
                <span className="flex items-center gap-1">
                  4,254{" "}
                  <span className="text-primary text-xs border border-white/20 p-1 rounded-2xl flex items-center w-fit">
                    +99.9% uptime{" "}
                    <MoveRight className="text-primary -rotate-45" size={12} />
                  </span>
                </span>
              ) : (
                `${stat.gpus} GPUs`
              )}
            </div>
            {index !== stats.length - 1 && (
              <span className="absolute right-0 top-1/2 h-8 w-[1.5px] bg-white/30 -translate-y-1/2"></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCards;
