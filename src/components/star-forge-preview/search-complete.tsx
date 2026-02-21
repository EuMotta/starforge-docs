'use client';

import {
  SearchComponent,
  SearchOption
} from '@/components/star-forge/inputs/search';

const mockSearch = async (query: string): Promise<SearchOption[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const mockData: SearchOption[] = [
    {
      id: '1',
      title: 'React Documentation',
      description: 'Official React docs and tutorials',
      category: 'Documentation'
    },
    {
      id: '2',
      title: 'TypeScript Handbook',
      description: 'Learn TypeScript from scratch',
      category: 'Documentation'
    },
    {
      id: '3',
      title: 'Next.js Examples',
      description: 'Production-ready Next.js examples',
      category: 'Examples'
    },
    {
      id: '4',
      title: 'Tailwind CSS',
      description: 'Utility-first CSS framework',
      category: 'Styling'
    },
    {
      id: '5',
      title: 'Vite Configuration',
      description: 'Build tool configuration guide',
      category: 'Tools'
    },
    {
      id: '6',
      title: 'React Hooks',
      description: 'Complete guide to React Hooks',
      category: 'React'
    },
    {
      id: '7',
      title: 'JavaScript ES6+',
      description: 'Modern JavaScript features',
      category: 'JavaScript'
    },
    {
      id: '8',
      title: 'Node.js Best Practices',
      description: 'Server-side JavaScript guide',
      category: 'Node.js'
    }
  ];

  if (!query.trim()) return [];

  return mockData.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description?.toLowerCase().includes(query.toLowerCase()) ||
      item.category?.toLowerCase().includes(query.toLowerCase())
  );
};

const trendingSearches: SearchOption[] = [
  {
    id: 'trending-1',
    title: 'React Documentation trending',
    description: 'Official React docs and tutorials',
    category: 'Documentation'
  },
  {
    id: 'trending-2',
    title: 'TypeScript Handbook trending',
    description: 'Learn TypeScript from scratch',
    category: 'Documentation'
  },
  {
    id: 'trending-3',
    title: 'Next.js Examples trending',
    description: 'Production-ready Next.js examples',
    category: 'Examples'
  },
  {
    id: 'trending-4',
    title: 'Tailwind CSS trending',
    description: 'Utility-first CSS framework',
    category: 'Styling'
  },
  {
    id: 'trending-5',
    title: 'React Hooks trending',
    description: 'Complete guide to React Hooks',
    category: 'React'
  },
  {
    id: 'trending-6',
    title: 'React Hooks trending',
    description: 'Complete guide to React Hooks',
    category: 'React'
  }
];

export function SearchComplete() {
  const handleSelect = (item: SearchOption) => {
    console.log('Selected item:', item);
  };

  return (
    <div className="flex w-full items-center justify-center p-8">
      <SearchComponent
        onSearch={mockSearch}
        trendingSearches={trendingSearches}
        onSelect={handleSelect}
        placeholder="Search documentation, examples, and more..."
        showRecentSearches={true}
        showTrendingSearches={true}
      />
    </div>
  );
}

export default SearchComplete;
