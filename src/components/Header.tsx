import React from "react";
import { Users, Network, Coins, MoveRight } from "lucide-react";
import RotatingWords from "./RotatingWords";

const Header: React.FC = () => {

  return (
    <div className="rounded-lg px-2 sm:px-4 py-4 sm:py-6 mt-2 sm:mt-3">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 sm:gap-4">
        {/* Left Side - Animated Title */}
        <div className="col-span-1 flex items-center justify-center md:justify-start gap-2 sm:gap-4">
          <RotatingWords/>
        </div>

        {/* Right Side - Stats Grid */}
        <div className="col-span-1  md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-2 sm:gap-4 z-20">
          <div className="md:col-span-2 flex flex-col items-start gap-1">
            <div className="grid md:grid-cols-3 place-items-center gap-1 bg-gradient-to-br from-black via-black to-[#f26622]/50 rounded-lg w-full">
              {/* Active Users */}
              <div className="flex items-center gap-1 rounded-xl py-3 sm:py-4 min-w-fit">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                <div className="flex flex-col items-start gap-1">
                  <span className="text-white/70 text-[10px] whitespace-nowrap">
                    Active Users
                  </span>
                  <div className="text-lg sm:text-xl font-bold text-light">705K</div>
                </div>
              </div>

              {/* Total Subnets */}
              <div className="flex items-center gap-2 rounded-xl px-2 sm:px-3 py-3 sm:py-4">
                <Network className="w-6 h-6 sm:min-w-7 sm:min-h-7 text-primary" />
                <div className="flex flex-col items-start gap-1">
                  <span className="text-white/70 text-[10px] whitespace-nowrap">
                    Total Subnets
                  </span>
                  <div className="text-lg sm:text-xl font-bold text-light">11K</div>
                </div>
              </div>

              {/* $GPU Distributed */}
              <div className="flex items-center gap-2 rounded-xl px-2 sm:px-3 py-3 sm:py-4">
                <Coins className="w-6 h-6 sm:min-w-7 sm:min-h-7 text-primary" />
                <div className="flex flex-col items-start gap-1">
                  <span className="text-white/70 text-[10px] whitespace-nowrap">
                    $GPU Distributed
                  </span>
                  <div className="text-lg sm:text-xl font-bold text-light">1.1m</div>
                </div>
              </div>
            </div>

            {/* Subnet Banner */}
            <div className="mt-2 rounded-xl py-3 flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0pQJAwqGzgbLm_UzMY1OaUkTciysLCZJNjg&s"
                    alt="avatar"
                    className="rounded-full h-full w-full object-cover"
                  />
                </div>
                <div className="w-8 h-8 rounded-full">
                  <img
                    src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFuJTIwYXZhdGFyfGVufDB8fDB8fHww"
                    alt="avatar"
                    className="rounded-full h-full w-full object-cover"
                  />
                </div>
                <div className="w-8 h-8 rounded-full">
                  <img
                    src="https://media.istockphoto.com/id/544350498/photo/carefree-man.jpg?s=612x612&w=0&k=20&c=lssOyvwjWKkNJmoxaYbLOynsmVA_IHMfhf2JiF746e0="
                    alt="avatar"
                    className="rounded-full h-full w-full object-cover"
                  />
                </div>
              </div>
              <p className="text-light flex flex-wrap gap-1 text-[10px]">
                Join <span className="text-primary font-bold">11K+</span>{" "}
                Subnets earning{" "}
                <span className="text-primary font-normal underline flex items-center gap-1">
                  400K $GPUs <MoveRight className="text-primary -rotate-45 w-4 h-4 sm:w-5 sm:h-5" />
                </span>
              </p>
            </div>

            {/* divider */}
            <div className="w-full h-0.5 bg-white/20 rounded-3xl px-3 mt-2"></div>

            {/* Try Astra Section */}
            <div className="mt-4 flex flex-row items-start sm:items-center justify-start gap-3 sm:gap-6 w-full">
              <button className="relative pr-4 sm:pr-6 py-2 sm:py-3 flex flex-col items-start transition-all">
                <span className="text-light font-bold text-base sm:text-lg">Try</span>
                <span className="text-light font-bold text-xl sm:text-2xl">Astra</span>
                <span className="absolute right-0 top-1/2 h-8 w-[1.5px] bg-white/30 -translate-y-1/2"></span>
              </button>
              <p className="w-full text-white/40 text-xs">
                Generate image & video and chat with Industries best trained LLM
                with exclusive with
                <img
                  src="/bytedance.png"
                  alt="bytedance"
                  className="inline-block w-20 ml-1 align-middle pointer-events-none"
                />
              </p>
            </div>
          </div>

          {/* $GPU Price with Chart */}
          <div className="col-span-1 w-full h-full bg-gradient-to-br from-[#f26622]/50 via-black to-black rounded-lg flex flex-col items-start gap-1 px-3 py-4 relative overflow-hidden min-h-[200px] sm:min-h-[200px]">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 border border-white/20 py-1 px-2 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-light text-[10px] font-semibold">LIVE</span>
              </div>
              <span className="text-white text-[10px] font-bold whitespace-nowrap">$GPU Price</span>
            </div>
            <div className="flex items-end gap-3">
              <div className="text-2xl sm:text-3xl font-bold text-light flex items-center gap-2">$0.43
                <span className="w-2 h-2 bg-primary rounded-2xl opacity-50"></span>
              </div>
              <span className="h-28 w-1 absolute bottom-2 left-[140px] border-r-4 -translate-y-full border-dotted border-[#F97316]/60"></span>
              <span className="h-16 w-1 absolute bottom-0 left-12 -translate-y-full border-r-4 border-dotted border-[#F97316]/60"></span>
              <span className="h-16 w-1 absolute -bottom-3 left-[90px] -translate-y-full border-r-4 border-dotted border-[#F97316]/40"></span>
              <span className="h-16 w-1 absolute bottom-14 left-[188px] -translate-y-full border-r-4 border-dotted border-[#F97316]/20"></span>
              <div className="w-60 mb-1 absolute bottom-0 left-0 z-0">
                <img
                  src="/graph.png"
                  alt="Price Chart"
                  className="w-full h-full object-contain pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
