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
    views: '101K'
  },
  {
    id: '2',
    username: 'Flaco Moon',
    role: 'ML Engineer',
    timestamp: '3h ago',
    content: 'received 178 votes from',
    profileImage:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFuJTIwYXZhdGFyfGVufDB8fDB8fHww",
    hashtags: [],
    reactions: { likes: 13, comments: 30 },
    views: '401K'
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
    views: '31K'
  },
  {
    id: '4',
    username: 'Stephen Smith',
    role: 'Senior developer | Boston University',
    profileImage:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFuJTIwYXZhdGFyfGVufDB8fDB8fHww",
    timestamp: '8h ago',
    content: 'Just conquered algorithms & data structures! 🎯\nTime for a breather. Suggestions for a binge-worthy show? 🍿',
    hashtags: ['#StudyBreak', '#NetflixTime'],
    reactions: { likes: 63, comments: 300 },
    views: '401K'
  }
];

export const mockGpuListings: GpuListing[] = Array(8).fill(null).map(() => ({
  id: '#124852',
  name: 'H100 PCIe',
  cpu: 'AMD EPYC™ 9654',
  gpuRam: '80 GB',
  vram: '4 GB',
  cpuRam: '64 GB',
  storageType: 'nvme',
  price: '$0.45/ Per Hour',
  location: 'United States'
}));
