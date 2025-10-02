import React from "react";
import type { FeedPost } from "../../context";
import PostReactions from "./PostReactions";

interface BoostPostProps {
  post: FeedPost;
}

const BoostPost: React.FC<BoostPostProps> = ({ post }) => {
  if (!post.boostData) return null;

  return (
    <div className="p-4 bg-transparent border-b border-gray-800 hover:bg-white/10 transition-colors">
      <div className="flex flex-nowrap items-center gap-1 mb-3">
        <div className="text-light font-bold text-xs inline-block">Boost</div>
        <span className="text-white/50 text-xs inline-block"> recieved</span>
        <span className="text-primary font-bold text-xs inline-block">
          {post.boostData.votes} votes
        </span>
        <span className="text-white/50 text-xs inline-block">from</span>
        <span className="text-light font-bold text-xs inline-block">
          {post.boostData.fromUser}
        </span>
      </div>

      <PostReactions likes={post.reactions.likes} comments={post.reactions.comments} views={post.views} />
    </div>
  );
};

export default BoostPost;
