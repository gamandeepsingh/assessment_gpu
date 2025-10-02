import React from "react";
import { WifiHigh } from "lucide-react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

interface FeedHeaderProps {
  onClose: () => void;
}

const FeedHeader: React.FC<FeedHeaderProps> = ({ onClose }) => {
  return (
    <div className="p-4 flex items-center justify-between relative z-10">
      <button
        onClick={onClose}
        className="absolute left-5 bg-black xl:hidden text-white hover:text-primary transition-colors p-2 -ml-2 rounded-full"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div className="flex items-start justify-start gap-3">
        <ConnectButton.Custom>
          {({ account, openAccountModal, openConnectModal }) => (
            <button
              onClick={account ? openAccountModal : openConnectModal}
              className="flex items-center gap-2 bg-black px-2 py-1 rounded-sm border border-white/20 cursor-pointer"
            >
              {account && (
                <img
                  src={account.ensAvatar || "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg"}
                  alt="Profile"
                  className="w-5 h-5 rounded-full object-cover"
                />
              )}
              <div className="text-xs font-bold text-light cursor-pointer">
                {account ? "Profile" : "Connect Wallet"}
              </div>
              {account && (
                <>
                  <div className="text-xs font-bold text-light">|</div>
                  <div className="text-xs font-bold text-light">
                    {account.displayName}
                  </div>
                </>
              )}
            </button>
          )}
        </ConnectButton.Custom>
      </div>
      <div className="flex items-center mr-3 mt-3 border-b border-[#f26622]">
        <WifiHigh className="w-5 h-5 text-light rotate-45 scale-110" />
        <span className="text-sm text-light">Feed</span>
      </div>
    </div>
  );
};

export default FeedHeader;
