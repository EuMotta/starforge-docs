import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

function renderCollapsible() {
  return render(
    <Collapsible>
      <CollapsibleTrigger>Toggle details</CollapsibleTrigger>
      <CollapsibleContent>Hidden content</CollapsibleContent>
    </Collapsible>
  );
}

describe('Collapsible', () => {
  it('keeps content unmounted while closed', () => {
    renderCollapsible();
    expect(screen.queryByText('Hidden content')).not.toBeInTheDocument();
  });

  it('reveals content after clicking the trigger', async () => {
    const user = userEvent.setup();
    renderCollapsible();
    await user.click(screen.getByRole('button', { name: 'Toggle details' }));
    expect(screen.getByText('Hidden content')).toBeInTheDocument();
  });
});
