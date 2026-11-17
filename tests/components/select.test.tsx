import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeAll, describe, expect, it, vi } from 'vitest';

beforeAll(() => {
  globalThis.ResizeObserver ??= class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
  Element.prototype.scrollIntoView ??= vi.fn();
  Element.prototype.hasPointerCapture ??= () => false;
  Element.prototype.setPointerCapture ??= vi.fn();
  Element.prototype.releasePointerCapture ??= vi.fn();
});

function renderSelect() {
  return render(
    <Select>
      <SelectTrigger aria-label="Choose role">
        <SelectValue placeholder="Choose role" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="admin">Admin</SelectItem>
        <SelectItem value="editor">Editor</SelectItem>
      </SelectContent>
    </Select>
  );
}

describe('Select', () => {
  it('renders the trigger with a placeholder', () => {
    renderSelect();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByText('Choose role')).toBeInTheDocument();
  });

  it('lists options after opening', async () => {
    const user = userEvent.setup();
    renderSelect();
    await user.click(screen.getByRole('combobox'));
    expect(screen.getByRole('option', { name: 'Admin' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Editor' })).toBeInTheDocument();
  });
});
