import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Label', () => {
  it('renders its text content', () => {
    render(<Label>Email address</Label>);
    expect(screen.getByText('Email address')).toBeInTheDocument();
  });

  it('associates with a control via htmlFor', () => {
    render(
      <>
        <Label htmlFor="email">Email address</Label>
        <Input id="email" type="email" />
      </>
    );
    expect(screen.getByLabelText('Email address')).toHaveAttribute(
      'type',
      'email'
    );
  });
});
