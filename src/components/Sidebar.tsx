import React from "react";
import {
  Home,
  MessageCircle,
  Captions,
  Send,
  Instagram,
  Network,
} from "lucide-react";
import { useAppContext } from "../context";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { TbExchange } from "react-icons/tb";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";

const Sidebar: React.FC = () => {
  const { walletBalance, isSidebarOpen, setIsSidebarOpen } = useAppContext();

  const navItems = [
    { icon: Home, label: "dApp", active: true, badge: true },
    { icon: MessageCircle, label: "Astra Chat" },
    { icon: Captions, label: "Subnet" },
    { icon: Network, label: "Quest" },
    { icon: TbExchange, label: "GANscan" },
    { icon: LiaNetworkWiredSolid, label: "GVEX" },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`${
        isSidebarOpen ? 'fixed' : 'hidden'
      } lg:flex w-64 max-w-64 bg-black h-screen flex flex-col justify-between p-2 z-50 lg:static transition-transform duration-300 ease-in-out`}>
      {/* Logo with Close button */}
      <div className="mb-8 flex items-center justify-between">
        <img src="/full_logo.png" alt="GPU.NET" className="w-4/5 px-2" />
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="lg:hidden text-white hover:text-primary transition-colors p-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
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
          {({ account, openAccountModal, openConnectModal }) => (
            <button
              onClick={account ? openAccountModal : openConnectModal}
              className="bg-light text-background rounded-full hover:bg-gray-200 p-3.5 cursor-pointer active:scale-90 transition-all duration-200 ease-in-out w-8 h-8 flex justify-center items-center font-bold"
            >
              +
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
          <FaXTwitter className="w-5 h-5" /> 
        </a>
        <a href="#" className="hover:text-light transition-colors">
          <Instagram className="w-5 h-5" />
        </a>
        <a href="#" className="hover:text-light transition-colors">
          <FaDiscord className="w-5 h-5" /> 
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
            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.8)] hover:shadow-[0_0_40px_rgba(34,197,94,1)] transition-shadow duration-400 animate-ping"></div>
            <div className="absolute w-3 h-3 bg-green-400 rounded-full blur-sm"></div>
            <div className="absolute w-3 h-3 bg-green-500 rounded-full blur-sm"></div>
            <div className="absolute w-3 h-3 bg-green-500 rounded-full blur-sm"></div>
            <div className="absolute w-3 h-3 bg-green-400 rounded-full blur-sm"></div>
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
    </>
  );
};

export default Sidebar;
