import React, { useState } from 'react';
import { MessageSquare, Heart, Eye, Send } from 'lucide-react';
import { useAppContext } from '../context';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Feed: React.FC = () => {
  const { feedPosts } = useAppContext();
  const [newPost, setNewPost] = useState('');

  return (
    <div className="w-96 bg-black border-l border-gray-800 h-screen flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ConnectButton.Custom>
            {({ account, openAccountModal }) => (
              <button onClick={openAccountModal} className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-orange-600"></div>
                <div className="text-left">
                  <div className="text-sm font-bold text-light">Profile</div>
                  <div className="text-xs text-gray-400">
                    {account?.displayName || '0x78...067B'}
                  </div>
                </div>
              </button>
            )}
          </ConnectButton.Custom>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">0x78...067B</span>
          <button className="text-gray-400 hover:text-light">
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Feed Button */}
      <div className="p-4 border-b border-gray-800">
        <button className="w-full flex items-center justify-between bg-primary hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg transition-colors">
          <span>Feed</span>
          <span className="bg-white text-primary rounded-full w-6 h-6 flex items-center justify-center text-xs">
            4
          </span>
        </button>
      </div>

      {/* New Post Input */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-orange-600"></div>
          <input
            type="text"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="What's happening?"
            className="flex-1 bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 text-sm text-light placeholder-gray-500 focus:outline-none focus:border-primary"
          />
          <button className="bg-primary hover:bg-orange-600 text-white rounded-lg px-3 py-2 transition-colors">
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Feed Posts */}
      <div className="flex-1 overflow-y-auto">
        {feedPosts.map((post) => (
          <div key={post.id} className="p-4 border-b border-gray-800 hover:bg-gray-900/50 transition-colors">
            {/* Post Header */}
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-orange-600 flex-shrink-0"></div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-light text-sm truncate">{post.username}</span>
                  <span className="text-xs text-gray-500">{post.timestamp}</span>
                </div>
                <div className="text-xs text-gray-400">{post.role}</div>
              </div>
              <button className="text-gray-400 hover:text-light">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>

            {/* Post Content */}
            {post.content && (
              <p className="text-sm text-light mb-2 leading-relaxed">{post.content}</p>
            )}

            {/* Hashtags */}
            {post.hashtags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {post.hashtags.map((tag, i) => (
                  <span key={i} className="text-primary text-sm hover:underline cursor-pointer">
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
                <button className="flex items-center gap-1 hover:text-primary transition-colors">
                  <Heart className="w-4 h-4" />
                  <span>{post.reactions.likes}</span>
                </button>
                <button className="flex items-center gap-1 hover:text-primary transition-colors">
                  <MessageSquare className="w-4 h-4" />
                  <span>{post.reactions.comments}</span>
                </button>
                <div className="flex items-center gap-1">
                  <span className="text-primary">{post.reactions.votes}</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span>{post.views}</span>
              </div>
            </div>

            {/* Boost Badge if present */}
            {post.id === '2' && (
              <div className="mt-3 bg-gray-800 rounded-lg px-3 py-2 text-xs">
                <span className="text-primary font-bold">Boost</span>
                <span className="text-light"> received </span>
                <span className="text-primary font-bold">178 votes</span>
                <span className="text-light"> from </span>
                <span className="text-primary font-bold">Flaco Moon</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const MoreHorizontal: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <circle cx="12" cy="12" r="1" />
    <circle cx="19" cy="12" r="1" />
    <circle cx="5" cy="12" r="1" />
  </svg>
);

const ChevronDown: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export default Feed;
