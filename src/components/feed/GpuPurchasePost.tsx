import React from "react";
import type { FeedPost } from "../../context";
import PostReactions from "./PostReactions";

interface GpuPurchasePostProps {
  post: FeedPost;
}

const GpuPurchasePost: React.FC<GpuPurchasePostProps> = ({ post }) => {
  if (!post.gpuPurchaseData) return null;

  return (
    <div className="p-4 bg-transparent border-b border-gray-800 hover:bg-white/10 transition-colors">
      <div className="flex items-center gap-1 mb-3 flex-wrap">
        <div className="text-light font-bold text-xs">{post.username}</div>
        <span className="text-white/50 text-xs">bought at</span>
        <span className="text-primary font-bold text-xs">
          {post.gpuPurchaseData.pricePerGpu}
        </span>
        <span className="text-white/50 text-xs">-</span>
        <span className="text-white/50 text-xs">{post.timestamp}</span>
      </div>

      <PostReactions likes={post.reactions.likes} comments={post.reactions.comments} views={post.views} />
    </div>
  );
};

export default GpuPurchasePost;
