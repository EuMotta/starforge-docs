import { ScrollArea } from '@/components/ui/scroll-area';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('ScrollArea', () => {
  it('renders children inside the viewport', () => {
    render(
      <ScrollArea>
        <p>Scrollable content</p>
      </ScrollArea>
    );
    expect(screen.getByText('Scrollable content')).toBeInTheDocument();
  });
});
