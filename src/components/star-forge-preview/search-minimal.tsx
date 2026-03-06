'use client';

import { Search1Input, Search1InputOption } from '@/components/star-forge';

// Mock search function for demo
const mockSearch = async (query: string): Promise<Search1InputOption[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const mockData: Search1InputOption[] = [
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

export function SearchMinimal() {
  const handleSelect = (item: Search1InputOption) => {
    console.log('Selected item:', item);
  };

  return (
    <div className="flex w-full items-center justify-center p-8">
      <Search1Input
        onSearch={mockSearch}
        onSelect={handleSelect}
        placeholder="Basic search..."
        showRecentSearches={false}
        showTrendingSearches={false}
      />
    </div>
  );
}

export default SearchMinimal;
