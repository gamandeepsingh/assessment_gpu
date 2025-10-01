import React from 'react';
import Marquee from './Marquee';
import Header from './Header';
import StatsCards from './StatsCards';
import GpuGrid from './GpuGrid';

const MainContent: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto p-3 bg-background-light">
      <Marquee />
      <Header />
      <StatsCards />
      <GpuGrid />
    </div>
  );
};

export default MainContent;
