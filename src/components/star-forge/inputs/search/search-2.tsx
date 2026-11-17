'use client';

import { Search1Input, type Search1InputProps } from './search-1';

export type Search2InputProps = Search1InputProps;

export function Search2Input(props: Search2InputProps) {
  return (
    <Search1Input
      placeholder="Search without recent searches..."
      showRecentSearches={false}
      {...props}
    />
  );
}

export default Search2Input;
