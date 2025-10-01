import React from 'react';
import { Menu, MessageCircle } from 'lucide-react';
import Marquee from './Marquee';
import Header from './Header';
import StatsCards from './StatsCards';
import GpuGrid from './GpuGrid';
import { useAppContext } from '../context';

const MainContent: React.FC = () => {
  const { setIsSidebarOpen, setIsFeedOpen } = useAppContext();

  return (
    <div className="flex-1 overflow-y-auto p-2 sm:p-3 bg-background-light hide-scrollbar relative">
      {/* Mobile Toggle Buttons */}
      <div className="lg:hidden fixed top-4 left-4 z-30">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all active:scale-95"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      <div className="xl:hidden fixed top-4 right-4 z-30">
        <button
          onClick={() => setIsFeedOpen(true)}
          className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all active:scale-95"
          aria-label="Open feed"
        >
          <MessageCircle className="w-5 h-5" />
        </button>
      </div>

      <Marquee />
      <Header />
      <StatsCards />
      <GpuGrid />
    </div>
  );
};

export default MainContent;
