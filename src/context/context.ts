import { createContext } from 'react';

export interface FeedPost {
  id: string;
  username: string;
  role: string;
  timestamp: string;
  content: string;
  hashtags: string[];
  image?: string;
  profileImage?: string;
  reactions: {
    likes: number;
    comments: number;
  };
  views: string;
}

export interface GpuListing {
  id: string;
  name: string;
  cpu: string;
  gpuRam: string;
  vram: string;
  cpuRam: string;
  storageType: string;
  price: string;
  location: string;
}

export interface Filters {
  location: string;
  gpuType: string;
  storage: string;
}

export interface AppContextType {
  feedPosts: FeedPost[];
  walletBalance: number;
  gpuListings: GpuListing[];
  filters: Filters;
  setFilters: (filters: Filters) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
  isFeedOpen: boolean;
  setIsFeedOpen: (isOpen: boolean) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);
