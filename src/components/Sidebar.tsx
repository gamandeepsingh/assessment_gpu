import React from "react";
import {
  Home,
  Trophy,
  Search,
  LineChart,
  Plus,
  MessageCircle,
  Captions,
  Send,
  Instagram,
  Twitter,
} from "lucide-react";
import { useAppContext } from "../context";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Sidebar: React.FC = () => {
  const { walletBalance } = useAppContext();

  const navItems = [
    { icon: Home, label: "dApp", active: true, badge: true },
    { icon: MessageCircle, label: "Astra Chat" },
    { icon: Captions, label: "Subnet" },
    { icon: Trophy, label: "Quest" },
    { icon: Search, label: "GANscan" },
    { icon: LineChart, label: "GVEX" },
  ];

  return (
    <div className="w-64 max-w-64 bg-black h-screen flex flex-col p-2">
      {/* Logo */}
      <div className="mb-8">
        <img src="/full_logo.png" alt="GPU.NET" className="w-4/5 px-2" />
      </div>

      {/* Wallet Balance */}
      <div className="bg-white/5 rounded-lg px-4 py-2 mb-6 flex items-center justify-between">
        <div className="flex flex-col justify-center items-center">
          <div className="text-gray-50/50 font-medium text-sm mb-2">
            Wallet Balance
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-white text-black rounded-full flex items-center justify-center w-5 h-5 text-sm">
              G
            </div>
            <span className="text-xl font-bold text-light">
              {walletBalance}
              <span className="text-sm font-medium mt-1 text-white/50 ml-1">
                .98
              </span>
            </span>
          </div>
        </div>
        <ConnectButton.Custom>
          {({ openConnectModal }) => (
            <button
              onClick={openConnectModal}
              className="bg-light text-background rounded-full hover:bg-gray-200 p-3.5 cursor-pointer active:scale-90 transition-all duration-200 ease-in-out"
            >
              <Plus className="w-3 h-3 font-bold" />
            </button>
          )}
        </ConnectButton.Custom>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col flex-1">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`flex flex-col items-start gap-3 px-4 py-2 rounded-lg transition-colors  cursor-pointer  hover:bg-white/10  ${
              item.active ? "text-light" : "text-gray-400"
            }`}
          >
            <span className="flex items-center gap-3 ">
              {
                <span
                  className={`h-7 w-1.5  rounded-4xl ${
                    item.active
                      ? "bg-gradient-to-t from-yellow-400 to-[#f26622]"
                      : "bg-white/20"
                  }`}
                />
              }
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-bold">{item.label}</span>
            </span>
            {item.label === "dApp" && (
              <span className="flex flex-col items-start mb-2">
                <span className="text-xs font-medium hover:text-white text-white/50">
                  Provide GPUs
                </span>
                <span className="text-xs font-medium hover:text-white mt-1 text-white/50">
                  Get Credits
                </span>
                <span className="text-xs font-medium hover:text-white mt-1 text-white/50">
                  Profile
                </span>
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* Social Links */}
      <div className="flex gap-4 text-light mt-4">
        <a href="#" className="hover:text-light transition-colors">
          <Send className="w-5 h-5" />
        </a>
        <a href="#" className="hover:text-light transition-colors">
          <Twitter className="w-5 h-5" />
        </a>
        <a href="#" className="hover:text-light transition-colors">
          <Instagram className="w-5 h-5" />
        </a>
        <a href="#" className="hover:text-light transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g fill="none" fill-rule="evenodd">
              <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
              <path
                fill="currentColor"
                d="M15.003 4c.744 0 1.53.26 2.25.547l.527.216c1.26.528 1.968 1.636 2.517 2.853c.891 1.975 1.51 4.608 1.724 6.61c.102.95.127 1.906-.056 2.549c-.197.687-.867 1.173-1.518 1.555l-.322.183l-.334.186q-.26.144-.525.284l-.522.27l-.717.357l-.577.284a1 1 0 1 1-.894-1.788l.79-.39l-.58-.609c-1.39.57-3.027.893-4.766.893s-3.376-.322-4.766-.893l-.58.608l.793.39a1 1 0 1 1-.894 1.79l-.544-.27c-.402-.2-.805-.398-1.203-.607l-.928-.505l-.321-.183c-.651-.382-1.322-.868-1.518-1.555c-.184-.643-.158-1.598-.057-2.55c.214-2.001.833-4.634 1.724-6.609c.549-1.217 1.257-2.325 2.517-2.853C7.059 4.413 8.072 4 9 4c.603 0 1.077.555.99 1.147A14 14 0 0 1 12 5c.691 0 1.366.05 2.014.148A1.012 1.012 0 0 1 15.004 4ZM8.75 10.5a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5m6.5 0a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5"
              />
            </g>
          </svg>
        </a>
      </div>

      {/* Status Indicator */}
      <button className="relative px-6 py-2 my-2 bg-black rounded-2xl overflow-hidden w-fit group">
        {/* Border gradient effect - darker on top, lighter on bottom */}
        <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-b from-gray-400 via-gray-600 to-gray-700">
          <div className="h-full w-full bg-black rounded-2xl"></div>
        </div>
        {/* Content */}
        <div className="relative flex items-center gap-3">
          <div className="relative flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.8)] hover:shadow-[0_0_40px_rgba(34,197,94,1)] transition-shadow duration-400 animate-pulse"></div>
            <div className="absolute w-4 h-4 bg-green-500 rounded-full blur-sm"></div>
            <div className="absolute w-4 h-4 bg-green-500 rounded-full blur-sm"></div>
            <div className="absolute w-4 h-4 bg-green-500 rounded-full blur-sm"></div>
          </div>
          <span className="text-light font-bold text-xs whitespace-nowrap">
            All System Operational
          </span>
        </div>
      </button>
      <div className="text-[10px]">
        <span className="text-white/80">@2025 </span>
        <span className="text-white/30">All Right Reserved | GPU.NET</span>
      </div>
    </div>
  );
};

export default Sidebar;
