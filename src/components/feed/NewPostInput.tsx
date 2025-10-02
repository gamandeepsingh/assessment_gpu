import React from "react";
import { Image } from "lucide-react";

interface NewPostInputProps {
  value: string;
  onChange: (value: string) => void;
}

const NewPostInput: React.FC<NewPostInputProps> = ({ value, onChange }) => {
  return (
    <div className="px-4 pb-4 relative z-10 mt-4">
      <div className="flex items-center gap-2 relative">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="What's happening?"
          className="flex-1 bg-white/10 border border-white/10 rounded-lg px-4 pl-12 py-2 pb-10 text-sm text-light placeholder-white/40 focus:outline-none focus:border-primary"
          rows={5}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0pQJAwqGzgbLm_UzMY1OaUkTciysLCZJNjg&s"
          alt="Profile"
          loading="lazy"
          decoding="async"
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
  );
};

export default NewPostInput;
