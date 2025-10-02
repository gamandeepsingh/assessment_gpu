import React, { useState } from "react";
import { useAppContext } from "../context";
import FeedHeader from "./feed/FeedHeader";
import NewPostInput from "./feed/NewPostInput";
import RegularPost from "./feed/RegularPost";
import BoostPost from "./feed/BoostPost";
import GpuPurchasePost from "./feed/GpuPurchasePost";
import one from "/1.png";

const Feed: React.FC = () => {
  const { feedPosts, isFeedOpen, setIsFeedOpen } = useAppContext();
  const [newPost, setNewPost] = useState("");

  const renderPost = (post: typeof feedPosts[0]) => {
    if (post.postType === 'boost') {
      return <BoostPost key={post.id} post={post} />;
    }
    if (post.postType === 'gpu_purchase') {
      return <GpuPurchasePost key={post.id} post={post} />;
    }
    return <RegularPost key={post.id} post={post} />;
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isFeedOpen && (
        <div
          className="xl:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsFeedOpen(false)}
        />
      )}

      {/* Feed Container */}
      <div
        className={`${
          isFeedOpen ? "fixed right-0" : "hidden"
        } xl:flex relative w-[300px] h-screen overflow-y-auto flex-col bg-background-light pt-0.5 z-50 xl:static transition-transform duration-300 ease-in-out`}
      >
        {/* Background Image */}
        <div className="absolute inset-y-0 right-0 pt-0.5 z-0 pointer-events-none">
          <img
            src={one}
            alt="Background"
            loading="lazy"
            decoding="async"
            className="w-full max-w-[300px] h-full object-fit opacity-10 pt-4 pointer-events-none"
          />
        </div>

        {/* Header */}
        <FeedHeader onClose={() => setIsFeedOpen(false)} />

        {/* New Post Input */}
        <NewPostInput value={newPost} onChange={setNewPost} />

        {/* Feed Posts */}
        <div className="flex-1 overflow-y-auto px-1 relative z-10 hide-scrollbar">
          {feedPosts.map(renderPost)}
        </div>
      </div>
    </>
  );
};

export default Feed;
