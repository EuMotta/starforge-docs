import { Checkbox } from '@/components/ui/checkbox';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

describe('Checkbox', () => {
  it('renders with the checkbox role', () => {
    render(<Checkbox aria-label="Accept terms" />);
    expect(
      screen.getByRole('checkbox', { name: 'Accept terms' })
    ).toBeInTheDocument();
  });

  it('toggles checked state on click', async () => {
    const user = userEvent.setup();
    render(<Checkbox aria-label="Accept terms" />);
    const checkbox = screen.getByRole('checkbox', { name: 'Accept terms' });

    expect(checkbox).toHaveAttribute('aria-checked', 'false');
    await user.click(checkbox);
    expect(checkbox).toHaveAttribute('aria-checked', 'true');
  });

  it('does not toggle when disabled', async () => {
    const user = userEvent.setup();
    render(<Checkbox aria-label="Accept terms" disabled />);
    const checkbox = screen.getByRole('checkbox', { name: 'Accept terms' });
    await user.click(checkbox);
    expect(checkbox).toHaveAttribute('aria-checked', 'false');
  });
});
