import { Switch } from '@/components/ui/switch';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

function getSwitchButton(name: string) {
  const matches = screen.getAllByRole('switch', { name });
  const button = matches.find((el) => el.tagName === 'BUTTON');
  if (!button) throw new Error('Switch button not found');
  return button;
}

describe('Switch', () => {
  it('renders with the switch role', () => {
    render(<Switch aria-label="Toggle feature" />);
    expect(getSwitchButton('Toggle feature')).toBeInTheDocument();
  });

  it('toggles checked state on click', async () => {
    const user = userEvent.setup();
    render(<Switch aria-label="Toggle feature" />);
    const toggle = getSwitchButton('Toggle feature');

    expect(toggle).toHaveAttribute('aria-checked', 'false');
    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-checked', 'true');
    await user.click(toggle);
    expect(toggle).toHaveAttribute('aria-checked', 'false');
  });

  it('respects defaultChecked', () => {
    render(<Switch aria-label="Toggle feature" defaultChecked />);
    expect(getSwitchButton('Toggle feature')).toHaveAttribute(
      'aria-checked',
      'true'
    );
  });
});
