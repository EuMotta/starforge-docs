'use client';
import { MdSearch } from 'react-icons/md';

import { Button } from '@/components/ui/button';
import { useSearchContext } from 'fumadocs-ui/provider';

export function SearchTriggerButton() {
  const { setOpenSearch } = useSearchContext();

  return (
    <Button onClick={() => setOpenSearch(true)} className="w-full">
      <MdSearch className="mr-2" />
      Search Docs
    </Button>
  );
}
