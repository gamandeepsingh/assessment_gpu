import React from "react";
import { Users, Network, Coins, MoveRight } from "lucide-react";
import RotatingWords from "./RotatingWords";

const Header: React.FC = () => {

  return (
    <div className=" rounded-lg px-2 py-6 mt-3">
      <div className="grid grid-cols-4 gap-2">
        {/* Left Side - Animated Title */}
        <div className="col-span-1 flex items-center gap-4">
          <RotatingWords/>
        </div>

        {/* Right Side - Stats Grid */}
        <div className="col-span-3 flex items-start gap-2">
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center bg-gradient-to-br from-black via-black to-[#f26622]/50 rounded-lg">
              {/* Active Users */}
              <div className="flex items-center gap-2 rounded-xl px-3 py-4">
                <Users className="w-8 h-8 text-primary" />
                <div className="flex flex-col items-start gap-2 mb-2">
                  <span className="text-white/70 text-xs whitespace-nowrap">
                    Active Users
                  </span>
                  <div className="text-2xl font-bold text-light">705K</div>
                </div>
              </div>

              {/* Total Subnets */}
              <div className="flex items-center gap-2 rounded-xl px-3 py-4">
                <Network className="w-8 h-8 text-primary" />
                <div className="flex flex-col items-start gap-2 mb-2">
                  <span className="text-white/70 text-xs whitespace-nowrap">
                    Total Subnets
                  </span>
                  <div className="text-2xl font-bold text-light">11K</div>
                </div>
              </div>

              {/* $GPU Distributed */}
              <div className="flex items-center gap-2 rounded-xl px-3 py-4">
                <Coins className="w-8 h-8 text-primary" />
                <div className="flex flex-col items-start gap-2 mb-2">
                  <span className="text-white/70 text-xs whitespace-nowrap">
                    $GPU Distributed
                  </span>
                  <div className="text-2xl font-bold text-light">1.1m</div>
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
                    src="https://media.istockphoto.com/id/1335941248/photo/shot-of-a-handsome-young-man-standing-against-a-grey-background.jpg?s=612x612&w=0&k=20&c=JSBpwVFm8vz23PZ44Rjn728NwmMtBa_DYL7qxrEWr38="
                    alt="avatar"
                    className="rounded-full h-full w-full object-cover"
                  />
                </div>
                <div className="w-8 h-8 rounded-full">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0pQJAwqGzgbLm_UzMY1OaUkTciysLCZJNjg&s"
                    alt="avatar"
                    className="rounded-full h-full w-full object-cover"
                  />
                </div>
              </div>
              <span className=" text-light flex gap-1">
                Join <span className="text-primary font-bold">11K+</span>{" "}
                Subnets earning{" "}
                <span className="text-primary font-normal underline flex items-center gap-1">
                  400K $GPUs <MoveRight className="text-primary -rotate-45" />
                </span>
              </span>
            </div>

            {/* divider */}
            <div className="w-full h-0.5 bg-white/20 rounded-3xl px-3 my-2"></div>

            {/* Try Astra Section */}
            <div className="mt-4 flex items-center justify-start gap-6 max-w-[90%]">
              <button className="relative pr-6 py-3 flex flex-col items-start transition-all">
                <span className="text-light font-bold text-lg">Try</span>
                <span className="text-light font-bold text-2xl">Astra</span>
                <span className="absolute right-0 top-1/2 h-8 w-[1.5px] bg-white/30 -translate-y-1/2"></span>
              </button>
              <p className="w-full flex-1 text-white/40 text-sm">
                Generate image & video and chat with Industries best trained LLM
                with exclusive partnership with
                <img
                  src="/bytedance.png"
                  alt="bytedance"
                  className="inline-block w-24 ml-2 align-middle pointer-events-none"
                />
              </p>
            </div>
          </div>

          {/* $GPU Price with Chart */}
          <div className="col-span-1 w-full h-full bg-gradient-to-br from-[#f26622]/50 via-black to-black rounded-lg flex flex-col items-start gap-1 px-3 py-4 relative overflow-hidden">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 border border-white/20 py-1 px-2 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-light text-xs font-semibold">LIVE</span>
              </div>
              <span className="text-white text-xs font-bold">$GPU Price</span>
            </div>
            <div className="flex items-end gap-3">
              <div className="text-3xl font-bold text-light">$0.43</div>
              <span className="h-28 w-1 absolute bottom-2 left-[140px] border-r-4 -translate-y-full border-dotted border-[#F97316]/60"></span>
              <span className="h-16 w-1 absolute bottom-0 left-12 -translate-y-full border-r-4 border-dotted border-[#F97316]/60"></span>
              <span className="h-16 w-1 absolute -bottom-3 left-[90px] -translate-y-full border-r-4 border-dotted border-[#F97316]/40"></span>
              <span className="h-16 w-1 absolute bottom-14 left-[188px] -translate-y-full border-r-4 border-dotted border-[#F97316]/20"></span>
              <div className="w-60 mb-1 absolute bottom-0 left-0 z-0">
                <img
                  src="/graph.png"
                  alt="Price Chart"
                  className="w-full h-full object-contain"
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
