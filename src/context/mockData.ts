import type { FeedPost, GpuListing } from './context';

export const mockFeedPosts: FeedPost[] = [
  {
    id: '1',
    username: 'Stephen Smith',
    role: 'Senior developer | Boston University',
    timestamp: '2h ago',
    profileImage:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFuJTIwYXZhdGFyfGVufDB8fDB8fHww",
    content: 'Just conquered algorithms & data structures! 🎯\nTime for a breather. Suggestions for a binge-worthy show? 🍿',
    hashtags: ['#StudyBreak', '#NetflixTime'],
    reactions: { likes: 40, comments: 300 },
    views: '101K',
    postType: 'regular'
  },
  {
    id: '2',
    username: 'Boost',
    role: '',
    timestamp: '3h ago',
    content: '',
    profileImage:"",
    hashtags: [],
    reactions: { likes: 13, comments: 203 },
    views: '401K',
    postType: 'boost',
    boostData: {
      votes: 176,
      fromUser: 'Flaco Moon'
    }
  },
  {
    id: '3',
    username: 'Surai Chawla',
    role: 'Data Scientist',
    timestamp: '5h ago',
    profileImage:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFuJTIwYXZhdGFyfGVufDB8fDB8fHww",
    content: '',
    hashtags: [],
    image:"https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg",
    reactions: { likes: 6, comments: 140 },
    views: '31K',
    postType: 'regular'
  },
  {
    id: '3.5',
    username: 'GPU SS 55GPU',
    role: '',
    timestamp: '6h ago',
    content: '',
    profileImage:"",
    hashtags: [],
    reactions: { likes: 13, comments: 203 },
    views: '401K',
    postType: 'gpu_purchase',
    gpuPurchaseData: {
      gpuAmount: 55,
      pricePerGpu: '$317'
    }
  },
  {
    id: '4',
    username: 'Stephen Smith',
    role: 'Senior developer | Boston University',
    profileImage:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFuJTIwYXZhdGFyfGVufDB8fDB8fHww",
    timestamp: '8h ago',
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFglw4q4cKnNUhiWHI9vG7EmQy3m4pyigiXQ&s",
    content: 'Just conquered algorithms & data structures! 🎯\nTime for a breather. Suggestions for a binge-worthy show? 🍿',
    hashtags: ['#StudyBreak', '#NetflixTime'],
    reactions: { likes: 63, comments: 300 },
    views: '401K',
    postType: 'regular'
  }
];

export const mockGpuListings: GpuListing[] = [
  {
    id: '#124852',
    name: 'H100 PCIe',
    cpu: 'AMD EPYC™ 9654',
    gpuRam: '80 GB',
    vram: '4 GB',
    cpuRam: '64 GB',
    storageType: 'nvme',
    price: '$0.45/ Per Hour',
    location: 'us'
  },
  {
    id: '#124853',
    name: 'A100',
    cpu: 'Intel Xeon 8375C',
    gpuRam: '40 GB',
    vram: '8 GB',
    cpuRam: '128 GB',
    storageType: 'ssd',
    price: '$0.35/ Per Hour',
    location: 'uk'
  },
  {
    id: '#124854',
    name: 'RTX 6000',
    cpu: 'AMD EPYC™ 7763',
    gpuRam: '24 GB',
    vram: '16 GB',
    cpuRam: '256 GB',
    storageType: 'nvme',
    price: '$0.28/ Per Hour',
    location: 'uae'
  },
  {
    id: '#124855',
    name: 'H100 PCIe',
    cpu: 'Intel Xeon 8480+',
    gpuRam: '80 GB',
    vram: '4 GB',
    cpuRam: '64 GB',
    storageType: 'hdd',
    price: '$0.42/ Per Hour',
    location: 'us'
  },
  {
    id: '#124856',
    name: 'A100',
    cpu: 'AMD EPYC™ 9654',
    gpuRam: '40 GB',
    vram: '8 GB',
    cpuRam: '128 GB',
    storageType: 'nvme',
    price: '$0.38/ Per Hour',
    location: 'uk'
  },
  {
    id: '#124857',
    name: 'RTX 6000',
    cpu: 'Intel Xeon 8375C',
    gpuRam: '24 GB',
    vram: '12 GB',
    cpuRam: '192 GB',
    storageType: 'ssd',
    price: '$0.25/ Per Hour',
    location: 'us'
  },
  {
    id: '#124858',
    name: 'H100 PCIe',
    cpu: 'AMD EPYC™ 9654',
    gpuRam: '80 GB',
    vram: '4 GB',
    cpuRam: '64 GB',
    storageType: 'nvme',
    price: '$0.47/ Per Hour',
    location: 'uae'
  },
  {
    id: '#124859',
    name: 'A100',
    cpu: 'AMD EPYC™ 7763',
    gpuRam: '40 GB',
    vram: '8 GB',
    cpuRam: '128 GB',
    storageType: 'hdd',
    price: '$0.32/ Per Hour',
    location: 'uk'
  }
];
