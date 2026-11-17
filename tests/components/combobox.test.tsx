import { Combobox, ComboboxInput } from '@/components/ui/combobox';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

describe('Combobox', () => {
  it('renders the input with a placeholder', () => {
    render(
      <Combobox>
        <ComboboxInput placeholder="Search users" />
      </Combobox>
    );
    expect(screen.getByPlaceholderText('Search users')).toBeInTheDocument();
  });

  it('forwards typed text to onInputValueChange', async () => {
    const user = userEvent.setup();
    const onInputValueChange = vi.fn();
    render(
      <Combobox onInputValueChange={onInputValueChange}>
        <ComboboxInput placeholder="Search users" />
      </Combobox>
    );
    await user.type(screen.getByPlaceholderText('Search users'), 'a');
    expect(onInputValueChange).toHaveBeenCalled();
  });
});
