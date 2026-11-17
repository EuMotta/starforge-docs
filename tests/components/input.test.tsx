import { Input } from '@/components/ui/input';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

describe('Input', () => {
  it('renders a textbox with placeholder', () => {
    render(<Input placeholder="Email" />);
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
  });

  it('forwards type and disabled attributes', () => {
    render(<Input type="password" disabled aria-label="Password" />);
    const input = screen.getByLabelText('Password');
    expect(input).toHaveAttribute('type', 'password');
    expect(input).toBeDisabled();
  });

  it('accepts typed text', async () => {
    const user = userEvent.setup();
    render(<Input aria-label="Username" />);
    const input = screen.getByLabelText('Username');
    await user.type(input, 'starforge');
    expect(input).toHaveValue('starforge');
  });
});
