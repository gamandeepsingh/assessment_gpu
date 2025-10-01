import { useState } from 'react';
import type { ReactNode } from 'react';
import { AppContext } from './context';
import { mockFeedPosts, mockGpuListings } from './mockData';

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [feedPosts] = useState(mockFeedPosts);
  const [walletBalance] = useState(3900);
  const [gpuListings] = useState(mockGpuListings);
  const [filters, setFilters] = useState({
    location: '',
    gpuType: '',
    storage: ''
  });

  return (
    <AppContext.Provider value={{ feedPosts, walletBalance, gpuListings, filters, setFilters }}>
      {children}
    </AppContext.Provider>
  );
};
