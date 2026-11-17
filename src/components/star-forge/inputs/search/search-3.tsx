'use client';

import { Search1Input, type Search1InputProps } from './search-1';

export type Search3InputProps = Search1InputProps;

export function Search3Input(props: Search3InputProps) {
  return (
    <Search1Input
      placeholder="Basic search..."
      showRecentSearches={false}
      showTrendingSearches={false}
      {...props}
    />
  );
}

export default Search3Input;
