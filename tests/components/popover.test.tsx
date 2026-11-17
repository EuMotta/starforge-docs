import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

describe('Popover', () => {
  it('shows content when the trigger is clicked', async () => {
    const user = userEvent.setup();
    render(
      <Popover>
        <PopoverTrigger>Open info</PopoverTrigger>
        <PopoverContent>Extra details</PopoverContent>
      </Popover>
    );

    expect(screen.queryByText('Extra details')).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Open info' }));
    expect(screen.getByText('Extra details')).toBeInTheDocument();
  });
});
