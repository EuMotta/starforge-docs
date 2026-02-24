'use client';

import { useState, useEffect, useCallback } from 'react';

import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxLabel
} from '@/components/ui/combobox';
import { useDebounce } from '@/hooks/star-forge/useDebounce';
import { Search, X, Clock, Loader2, TrendingUp } from 'lucide-react';

import { cn } from '@/lib/utils';

export interface SearchOption {
  id: string;
  title: string;
  description?: string;
  category?: string;
}

export interface SearchProps {
  onSearch?: (query: string) => Promise<SearchOption[]>;
  trendingSearches?: SearchOption[];
  onSelect?: (item: SearchOption) => void;
  placeholder?: string;
  className?: string;
  maxRecentSearches?: number;
  showRecentSearches?: boolean;
  showTrendingSearches?: boolean;
}

function getSearchDisplayValue(item: SearchOption) {
  return item.description ? `${item.title} - ${item.description}` : item.title;
}

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
function SearchItem({ item }: { item: SearchOption }) {
  return (
    <div className="flex flex-col">
      <div className="font-medium">{item.title}</div>
      {item.description && (
        <div className="text-muted-foreground text-sm">{item.description}</div>
      )}
      {item.category && (
        <div className="text-muted-foreground mt-1 text-xs">
          {item.category}
        </div>
      )}
    </div>
  );
}

export function SearchComponent({
  onSearch = mockSearch,
  trendingSearches = [],
  onSelect,
  placeholder = 'Search documentation, examples, and more...',
  className,
  maxRecentSearches = 5,
  showRecentSearches = true,
  showTrendingSearches = true
}: SearchProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchOption[]>([]);
  const [loading, setLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    const saved = localStorage.getItem('recent-searches');
    if (saved) {
      try {
        setRecentSearches(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load recent searches:', e);
      }
    }
  }, []);

  const saveRecentSearch = useCallback(
    (searchQuery: string) => {
      if (!searchQuery.trim()) return;

      setRecentSearches((prev) => {
        const updated = [
          searchQuery,
          ...prev.filter((s) => s !== searchQuery)
        ].slice(0, maxRecentSearches);
        localStorage.setItem('recent-searches', JSON.stringify(updated));
        return updated;
      });
    },
    [maxRecentSearches]
  );

  useEffect(() => {
    if (debouncedQuery.trim()) {
      const performSearch = async () => {
        setLoading(true);
        try {
          const searchResults = await onSearch(debouncedQuery);
          setResults(searchResults);
        } catch (error) {
          console.error('Search failed:', error);
          setResults([]);
        } finally {
          setLoading(false);
        }
      };

      performSearch();
    } else {
      setResults([]);
      setLoading(false);
    }
  }, [debouncedQuery, onSearch]);

  const handleSelect = useCallback(
    (item: SearchOption) => {
      const displayValue = getSearchDisplayValue(item);
      saveRecentSearch(displayValue);
      onSelect?.(item);
      setOpen(false);
      setQuery(displayValue);
    },
    [onSelect, saveRecentSearch]
  );

  const clearRecentSearches = useCallback(() => {
    setRecentSearches([]);
    localStorage.removeItem('recent-searches');
  }, []);

  const removeRecentSearch = useCallback(
    (searchToRemove: string, e: React.MouseEvent) => {
      e.stopPropagation();
      setRecentSearches((prev) => {
        const updated = prev.filter((s) => s !== searchToRemove);
        localStorage.setItem('recent-searches', JSON.stringify(updated));
        return updated;
      });
    },
    []
  );

  const showTrending = showTrendingSearches && !query.trim() && open;
  const showRecent =
    showRecentSearches && !query.trim() && recentSearches.length > 0 && open;
  const showResults = query.trim() && (results.length > 0 || loading);

  return (
    <div className={cn('relative w-full max-w-lg', className)}>
      <Combobox
        open={open}
        onOpenChange={setOpen}
        inputValue={query}
        onInputValueChange={setQuery}
        onValueChange={(value: unknown) => {
          const stringValue = String(value);

          if (recentSearches.includes(stringValue)) {
            setQuery(stringValue);
            saveRecentSearch(stringValue);
            setOpen(false);
            return;
          }

          const allItems = [...trendingSearches, ...results];
          const selectedItem = allItems.find(
            (item) => getSearchDisplayValue(item) === stringValue
          );
          if (selectedItem) {
            handleSelect(selectedItem);
          }
        }}
      >
        <ComboboxInput
          placeholder={placeholder}
          className="w-full"
          showTrigger={false}
          showClear={false}
        />

        <ComboboxContent>
          <ComboboxList>
            {showTrending && (
              <ComboboxGroup>
                <ComboboxLabel className="flex items-center gap-2">
                  <TrendingUp className="text-muted-foreground h-4 w-4" />
                  Trending Searches
                </ComboboxLabel>
                {trendingSearches.map((item) => (
                  <ComboboxItem
                    key={item.id}
                    value={getSearchDisplayValue(item)}
                  >
                    <SearchItem item={item} />
                  </ComboboxItem>
                ))}
              </ComboboxGroup>
            )}

            {showRecent && (
              <ComboboxGroup>
                <ComboboxLabel className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Clock className="text-muted-foreground h-4 w-4" />
                    Recent Searches
                  </span>
                  <button
                    onClick={clearRecentSearches}
                    className="muted-foreground hover:text-foreground text-xs"
                  >
                    Clear all
                  </button>
                </ComboboxLabel>
                {recentSearches.map((search, index) => (
                  <ComboboxItem
                    key={`recent-${index}`}
                    value={search}
                    className="group flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <Clock className="text-muted-foreground h-4 w-4" />
                      <span>{search}</span>
                    </div>
                    <button
                      onClick={(e) => removeRecentSearch(search, e)}
                      className="transition-opacity group-hover:opacity-100"
                    >
                      <X className="text-muted-foreground hover:text-foreground h-3 w-3" />
                    </button>
                  </ComboboxItem>
                ))}
              </ComboboxGroup>
            )}

            {showResults && (
              <ComboboxGroup>
                {loading ? (
                  <div className="flex items-center justify-center p-4">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span className="text-muted-foreground ml-2 text-sm">
                      Searching...
                    </span>
                  </div>
                ) : results.length > 0 ? (
                  <>
                    <ComboboxLabel>Search Results</ComboboxLabel>
                    {results.map((item) => (
                      <ComboboxItem
                        key={item.id}
                        value={getSearchDisplayValue(item)}
                      >
                        <SearchItem item={item} />
                      </ComboboxItem>
                    ))}
                  </>
                ) : (
                  <ComboboxEmpty>
                    <div className="p-4 text-center">
                      <Search className="text-muted-foreground mx-auto mb-2 h-8 w-8" />
                      <p className="text-muted-foreground text-sm">
                        No results found for &quot;{query}&quot;
                      </p>
                    </div>
                  </ComboboxEmpty>
                )}
              </ComboboxGroup>
            )}

            {!query.trim() && !showRecent && !showTrending && (
              <div className="p-6 text-center">
                <Search className="text-muted-foreground mx-auto mb-2 h-8 w-8" />
                <p className="muted-foreground text-sm">
                  Start typing to search
                </p>
              </div>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}

export default SearchComponent;
