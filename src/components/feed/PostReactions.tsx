import React from "react";
import { MessageSquare, Heart, Eye } from "lucide-react";
import luvEmoji from "../../assets/emojis/love.png";
import likeEmoji from "../../assets/emojis/like.png";
import angryEmoji from "../../assets/emojis/angry.png";
import shockEmoji from "../../assets/emojis/surprised.png";
import laughEmoji from "../../assets/emojis/laugh.png";

interface PostReactionsProps {
  likes: number;
  comments: number;
  views: string;
}

const PostReactions: React.FC<PostReactionsProps> = ({ likes, comments, views }) => {
  return (
    <div className="flex items-center justify-between text-xs text-gray-400">
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-1 text-primary transition-colors">
          <Heart className="w-4 h-4" fill="#f26622" />
          <span>{likes}</span>
        </button>
        <button className="flex items-center gap-1 hover:text-primary transition-colors">
          <MessageSquare className="w-4 h-4" fill="#fff" />
          <span>{comments}</span>
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
        <span>{views}</span>
      </div>
    </div>
  );
};

export default PostReactions;
