import { Button } from '@/components/ui/button';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Button', () => {
  it('renders children as a button element', () => {
    render(<Button>Deploy</Button>);
    expect(screen.getByRole('button', { name: 'Deploy' })).toBeInTheDocument();
  });

  it('applies variant classes', () => {
    render(<Button variant="destructive">Delete</Button>);
    expect(screen.getByRole('button', { name: 'Delete' }).className).toMatch(
      /destructive/
    );
  });

  it('renders as child element with asChild', () => {
    render(
      <Button asChild>
        <a href="https://example.com">Docs</a>
      </Button>
    );
    const link = screen.getByRole('link', { name: 'Docs' });
    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href', 'https://example.com');
  });

  it('is disabled when disabled prop is set', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button', { name: 'Disabled' })).toBeDisabled();
  });
});
