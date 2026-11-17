import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

function renderTabs() {
  return render(
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">Account panel</TabsContent>
      <TabsContent value="settings">Settings panel</TabsContent>
    </Tabs>
  );
}

describe('Tabs', () => {
  it('shows only the default tab panel', () => {
    renderTabs();
    expect(screen.getByText('Account panel')).toBeInTheDocument();
    expect(screen.queryByText('Settings panel')).not.toBeInTheDocument();
  });

  it('switches the active panel on trigger click', async () => {
    const user = userEvent.setup();
    renderTabs();
    const settingsTab = screen.getByRole('tab', { name: 'Settings' });
    await user.click(settingsTab);

    expect(settingsTab).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('Settings panel')).toBeInTheDocument();
    expect(screen.queryByText('Account panel')).not.toBeInTheDocument();
  });
});
