import React from "react";
import type { FeedPost } from "../../context";
import PostReactions from "./PostReactions";

const MoreHorizontal: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
    <circle cx="5" cy="12" r="1" />
  </svg>
);

interface RegularPostProps {
  post: FeedPost;
}

const RegularPost: React.FC<RegularPostProps> = ({ post }) => {
  return (
    <div className="p-4 bg-transparent border-b border-gray-800 hover:bg-white/10 transition-colors">
      {/* Post Header */}
      <div className="flex items-start gap-3 mb-3">
        <div className="w-10 h-10 rounded-full">
          <img
            src={post.profileImage || "https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg"}
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-bold text-light text-sm truncate">{post.username}</span>
            <span className="text-[10px] text-white/50">●</span>
            <span className="text-xs text-white/50">{post.timestamp}</span>
          </div>
          <div className="text-[10px] text-white/40">{post.role}</div>
        </div>
        <button className="text-gray-400 hover:text-light cursor-pointer">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      {/* Post Content */}
      {post.content && (
        <p className="text-xs text-light mb-2 leading-relaxed">{post.content}</p>
      )}

      {/* Hashtags */}
      {post.hashtags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3 mt-4">
          {post.hashtags.map((tag, i) => (
            <span key={i} className="text-light text-xs hover:underline cursor-pointer">
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Post Image */}
      {post.image && (
        <img src={post.image} alt="Post" className="w-full rounded-lg mb-3 object-cover" />
      )}

      {/* Reactions */}
      <PostReactions likes={post.reactions.likes} comments={post.reactions.comments} views={post.views} />
    </div>
  );
};

export default RegularPost;
