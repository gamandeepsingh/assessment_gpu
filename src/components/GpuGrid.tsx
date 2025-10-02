import React from "react";
import { Cpu } from "lucide-react";
import { useAppContext } from "../context";

const GpuGrid: React.FC = () => {
  const { gpuListings, filters, setFilters } = useAppContext();

  // Filter the GPU listings based on selected filters
  const filteredGpuListings = gpuListings.filter((gpu) => {
    const matchesLocation = !filters.location || gpu.location === filters.location;
    const matchesGpuType = !filters.gpuType || gpu.name.toLowerCase().includes(filters.gpuType);
    const matchesStorage = !filters.storage || gpu.storageType.toLowerCase() === filters.storage.toLowerCase();
    
    return matchesLocation && matchesGpuType && matchesStorage;
  });

  return (
    <div className="px-6 py-6">
      {/* Header with Filters */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-2">
        <h2 className="text-sm font-bold text-light whitespace-nowrap">
          Latest added GPUs
        </h2>
        {/* divider */}
        <div className="w-full h-0.5 bg-gradient-to-r from-white/40 via-white/10 to-transparent rounded-full px-3 my-2"></div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-40">
            <select
              className="appearance-none bg-black border border-white/20 rounded-lg px-4 py-2 pr-8 text-sm text-light focus:text-white transition-colors cursor-pointer w-full"
              value={filters.location}
              onChange={(e) =>
                setFilters({ ...filters, location: e.target.value })
              }
            >
              <option value="">Location</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="uae">UAE</option>
            </select>
            {/* Custom arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          <div className="relative w-full sm:w-40">
            <select
              className="appearance-none bg-black border border-white/20 rounded-lg px-4 py-2 pr-8 text-sm text-light focus:text-white focus:border-primary focus:ring-1 focus:ring-primary transition-colors cursor-pointer w-full"
              value={filters.gpuType}
              onChange={(e) =>
                setFilters({ ...filters, gpuType: e.target.value })
              }
            >
              <option value="">GPU Type</option>
              <option value="h100">H100 PCIe</option>
              <option value="a100">A100</option>
              <option value="rtx6000">RTX 6000</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          <div className="relative w-full sm:w-40">
            <select
              className="appearance-none bg-black border border-white/20 rounded-lg px-4 py-2 pr-8 text-sm text-light focus:text-white focus:border-primary focus:ring-1 focus:ring-primary transition-colors cursor-pointer w-full"
              value={filters.storage}
              onChange={(e) =>
                setFilters({ ...filters, storage: e.target.value })
              }
            >
              <option value="">Storage</option>
              <option value="nvme">NVMe</option>
              <option value="ssd">SSD</option>
              <option value="hdd">HDD</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* GPU Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 sm:gap-4">
        {filteredGpuListings.length === 0 ? (
          <div className="col-span-3 text-center py-12">
            <p className="text-gray-400 text-lg">No GPUs found matching your filters.</p>
            <button 
              onClick={() => setFilters({ location: '', gpuType: '', storage: '' })}
              className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-colors cursor-pointer"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          filteredGpuListings.map((gpu, index) => (
          <div
            key={index}
            className="p-[1px] rounded-xl bg-gradient-to-b from-white/30 to-white/10"
          >
            <div className="bg-black rounded-xl p-4 hover:border-primary transition-colors">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-light">{gpu.name}</h3>
              </div>
              <p className="text-[10px] text-white/70 my-3">{gpu.id}</p>

              {/* Badges */}
              <div className="flex gap-0 items-center mb-4">
                <span className="bg-primary/20px-2 text-light font-bold py-1 rounded text-[10px] flex items-center gap-1">
                  <Cpu className="w-4 h-4 text-primary-light" color="#F97316" />
                  AMD
                </span>
                <span className="bg-primary/20 font-bold text-light px-2 py-1 rounded text-[10px] whitespace-nowrap">
                  {gpu.cpu}
                </span>
              </div>

              {/* Specs Grid */}
              <div className="space-y-2 mb-4 text-[10px] ">
                <div className="flex justify-between">
                  <span className="text-white/70">Storage Type</span>
                  <span className="text-light">{gpu.storageType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">GPU RAM</span>
                  <span className="text-light">{gpu.gpuRam}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">vCPU</span>
                  <span className="text-light">{gpu.vram}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">CPU RAM</span>
                  <span className="text-light">{gpu.cpuRam}</span>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex gap-2 mb-4">
                {["x1", "x2", "x4", "x8"].map((qty) => (
                  <button
                    key={qty}
                    className={`flex-1 ${
                      qty === "x2"
                        ? "bg-white text-black"
                        : "bg-white/20 text-white"
                    } rounded-xl p-2 text-[10px] font-bold transition-colors border border-white/40`}
                  >
                    {qty}
                  </button>
                ))}
              </div>

              {/* Price */}
              <div className="flex items-center gap-2 mb-4">
                <span className="w-4 h-4 bg-light rounded-full font-bold text-sm text-black flex justify-center items-center">$</span>
                <span className="text-white/70 text-xs">{gpu.price}</span>
              </div>

              {/* Rent Button */}
              <button className="w-fit px-8 py-2 text-xs bg-light hover:bg-gray-200 text-background font-bold rounded-lg cursor-pointer active:scale-90 transition-all duration-500 ease-in-out">
                Rent Now
              </button>
            </div>
          </div>
        ))
        )}
      </div>
    </div>
  );
};

export default GpuGrid;
