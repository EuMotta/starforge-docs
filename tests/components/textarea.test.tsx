import { Textarea } from '@/components/ui/textarea';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

describe('Textarea', () => {
  it('renders a textbox with placeholder', () => {
    render(<Textarea placeholder="Write a message" />);
    expect(screen.getByPlaceholderText('Write a message')).toBeInTheDocument();
  });

  it('respects the disabled prop', () => {
    render(<Textarea disabled aria-label="Message" />);
    expect(screen.getByLabelText('Message')).toBeDisabled();
  });

  it('accepts typed text', async () => {
    const user = userEvent.setup();
    render(<Textarea aria-label="Message" />);
    const textarea = screen.getByLabelText('Message');
    await user.type(textarea, 'hello world');
    expect(textarea).toHaveValue('hello world');
  });
});
