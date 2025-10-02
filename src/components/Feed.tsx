import React, { useState } from "react";
import { MessageSquare, Heart, Eye, WifiHigh, Image } from "lucide-react";
import { useAppContext } from "../context";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import luvEmoji from "../assets/emojis/love.png";
import likeEmoji from "../assets/emojis/like.png";
import angryEmoji from "../assets/emojis/angry.png";
import shockEmoji from "../assets/emojis/surprised.png";
import laughEmoji from "../assets/emojis/laugh.png";
import one from "/1.png";

const Feed: React.FC = () => {
  const { feedPosts, isFeedOpen, setIsFeedOpen } = useAppContext();
  const [newPost, setNewPost] = useState("");

  return (
    <>
      {/* Mobile Overlay */}
      {isFeedOpen && (
        <div
          className="xl:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsFeedOpen(false)}
        />
      )}

      {/* Feed */}
      <div className={`${
        isFeedOpen ? 'fixed right-0' : 'hidden'
      } xl:flex relative w-[300px] h-screen overflow-y-auto flex-col bg-background-light pt-0.5 z-50 xl:static transition-transform duration-300 ease-in-out`}>
      {/* Curved Background */}
      <div className="absolute inset-y-0 right-0 pt-0.5 z-0 pointer-events-none">
        <img
          src={one}
          alt="Background"
          className="w-full max-w-[300px] h-full object-fit opacity-10 pt-4 pointer-events-none"
        />
      </div>
      {/* Header */}
      <div className="p-4 flex items-center justify-between relative z-10">
        <button
          onClick={() => setIsFeedOpen(false)}
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
                onClick={
                  account ? openAccountModal : openConnectModal
                }
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

      {/* New Post Input */}
      <div className="px-4 pb-4 relative z-10 mt-4">
        <div className="flex items-center gap-2 relative">
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="What's happening?"
            className="flex-1 bg-white/10 border border-white/10 rounded-lg px-4 pl-12 py-2 pb-10 text-sm text-light placeholder-white/40 focus:outline-none focus:border-primary"
            rows={5}
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0pQJAwqGzgbLm_UzMY1OaUkTciysLCZJNjg&s"
            alt="Profile"
            className="absolute left-2 top-5 transform -translate-y-1/2 w-7 h-7 rounded-full object-cover"
          />
          <Image className="absolute bottom-2 left-2 w-4 h-4 text-white/70 cursor-pointer" />
          <span className="absolute bottom-1.5 left-8 text-sm text-white/70 cursor-pointer">
            GIF
          </span>
          <button className="absolute right-2 bottom-2 bg-light text-black font-bold rounded-2xl px-2 py-0.5 text-xs cursor-pointer">
            Post now
          </button>
        </div>
      </div>

      {/* Feed Posts */}
      <div className="flex-1 overflow-y-auto px-1 relative z-10 hide-scrollbar">
        {feedPosts.map((post) => {
          // Render Boost Post
          if (post.postType === 'boost' && post.boostData) {
            return (
              <div
                key={post.id}
                className="p-4 bg-transparent border-b border-gray-800 hover:bg-white/10 transition-colors"
              >
                <div className="flex flex-nowrap items-center gap-1 mb-3">
                  <div className="text-light font-bold text-xs inline-block">Boost</div>
                  <span className="text-white/50 text-xs inline-block"> recieved</span>
                  <span className="text-primary font-bold text-xs inline-block">{post.boostData.votes} votes</span>
                  <span className="text-white/50 text-xs inline-block">from</span>
                  <span className="text-light font-bold text-xs inline-block">{post.boostData.fromUser}</span>
                </div>
                
                {/* Reactions */}
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 text-primary transition-colors">
                      <Heart className="w-4 h-4" fill="#f26622" />
                      <span>{post.reactions.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-primary transition-colors">
                      <MessageSquare className="w-4 h-4" fill="#fff" />
                      <span>{post.reactions.comments}</span>
                    </button>
                    <div className="flex items-center gap-1">
                      <img src={likeEmoji} alt="like" className="w-2 h-2" />
                      <img src={luvEmoji} alt="love" className="w-2 h-2" />
                      <img src={laughEmoji} alt="laugh" className="w-2 h-2" />
                      <img src={shockEmoji} alt="surprised" className="w-2 h-2" />
                      <img src={angryEmoji} alt="angry" className="w-2 h-2" />
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4 text-light" />
                    <span>{post.views}</span>
                  </div>
                </div>
              </div>
            );
          }

          // Render GPU Purchase Post
          if (post.postType === 'gpu_purchase' && post.gpuPurchaseData) {
            return (
              <div
                key={post.id}
                className="p-4 bg-transparent border-b border-gray-800 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center gap-1 mb-3 flex-wrap">
                  <div className="text-light font-bold text-xs">{post.username}</div>
                  <span className="text-white/50 text-xs">bought at</span>
                  <span className="text-primary font-bold text-xs">{post.gpuPurchaseData.pricePerGpu}</span>
                  <span className="text-white/50 text-xs">-</span>
                  <span className="text-white/50 text-xs">{post.timestamp}</span>
                </div>
                
                {/* Reactions */}
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 text-primary transition-colors">
                      <Heart className="w-4 h-4" fill="#f26622" />
                      <span>{post.reactions.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-primary transition-colors">
                      <MessageSquare className="w-4 h-4" fill="#fff" />
                      <span>{post.reactions.comments}</span>
                    </button>
                    <div className="flex items-center gap-1">
                      <img src={likeEmoji} alt="like" className="w-2 h-2" />
                      <img src={luvEmoji} alt="love" className="w-2 h-2" />
                      <img src={laughEmoji} alt="laugh" className="w-2 h-2" />
                      <img src={shockEmoji} alt="surprised" className="w-2 h-2" />
                      <img src={angryEmoji} alt="angry" className="w-2 h-2" />
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="w-4 h-4 text-light" />
                    <span>{post.views}</span>
                  </div>
                </div>
              </div>
            );
          }

          // Render Regular Post
          return (
          <div
            key={post.id}
            className="p-4 bg-transparent border-b border-gray-800 hover:bg-white/10 transition-colors"
          >
            {/* Post Header */}
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-full">
                <img
                  src={
                    post.profileImage ||
                    "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg"
                  }
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-light text-sm truncate">
                    {post.username}
                  </span>
                  <span className="text-[10px] text-white/50">●</span>
                  <span className="text-xs text-white/50">
                    {post.timestamp}
                  </span>
                </div>
                <div className="text-[10px] text-white/40">{post.role}</div>
              </div>
              <button className="text-gray-400 hover:text-light cursor-pointer">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>

            {/* Post Content */}
            {post.content && (
              <p className="text-xs text-light mb-2 leading-relaxed">
                {post.content}
              </p>
            )}

            {/* Hashtags */}
            {post.hashtags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3 mt-4">
                {post.hashtags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-light text-xs hover:underline cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Post Image */}
            {post.image && (
              <img
                src={post.image}
                alt="Post"
                className="w-full rounded-lg mb-3 object-cover"
              />
            )}

            {/* Reactions */}
            <div className="flex items-center justify-between text-xs text-gray-400">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 text-primary transition-colors">
                  <Heart className="w-4 h-4" fill="#f26622" />
                  <span>{post.reactions.likes}</span>
                </button>
                <button className="flex items-center gap-1 hover:text-primary transition-colors">
                  <MessageSquare className="w-4 h-4" fill="#fff" />
                  <span>{post.reactions.comments}</span>
                </button>
                <div className="flex items-center gap-1">
                  <img src={likeEmoji} alt="like" className="w-2 h-2" />
                  <img src={luvEmoji} alt="love" className="w-2 h-2" />
                  <img src={laughEmoji} alt="laugh" className="w-2 h-2" />
                  <img src={shockEmoji} alt="surprised" className="w-2 h-2" />
                  <img src={angryEmoji} alt="angry" className="w-2 h-2" />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4 text-light" />
                <span>{post.views}</span>
              </div>
            </div>
          </div>
          );
        })}
      </div>
      </div>
    </>
  );
};

const MoreHorizontal: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
    <circle cx="5" cy="12" r="1" />
  </svg>
);

export default Feed;
