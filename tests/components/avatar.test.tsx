import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Avatar', () => {
  it('renders the fallback when no image is provided', () => {
    render(
      <Avatar>
        <AvatarFallback>SF</AvatarFallback>
      </Avatar>
    );
    expect(screen.getByText('SF')).toBeInTheDocument();
  });
});
