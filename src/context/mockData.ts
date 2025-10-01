import type { FeedPost, GpuListing } from './context';

export const mockFeedPosts: FeedPost[] = [
  {
    id: '1',
    username: 'Stephen Smith',
    role: 'AI Engineer',
    timestamp: '2h ago',
    content: 'Just conquered algorithms & data structures! 🎯\nTime for a breather. Suggestions for a binge-worthy show? 🍿',
    hashtags: ['#StudyBreak', '#NetflixTime'],
    reactions: { likes: 63, comments: 300, votes: '●●●●●●' },
    views: '401K'
  },
  {
    id: '2',
    username: 'Flaco Moon',
    role: 'ML Engineer',
    timestamp: '3h ago',
    content: 'received 178 votes from',
    hashtags: [],
    reactions: { likes: 63, comments: 300, votes: '●●●●●●' },
    views: '401K'
  },
  {
    id: '3',
    username: 'Surai Chawla',
    role: 'Data Scientist',
    timestamp: '5h ago',
    content: '',
    hashtags: [],
    image: '/image.jpg',
    reactions: { likes: 63, comments: 300, votes: '●●●●●●' },
    views: '401K'
  },
  {
    id: '4',
    username: 'Stephen Smith',
    role: 'AI Engineer',
    timestamp: '8h ago',
    content: 'Just conquered algorithms & data structures! 🎯\nTime for a breather. Suggestions for a binge-worthy show? 🍿',
    hashtags: ['#StudyBreak', '#NetflixTime'],
    reactions: { likes: 63, comments: 300, votes: '●●●●●●' },
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
