import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

function renderAlertDialog() {
  return render(
    <AlertDialog>
      <AlertDialogTrigger>Delete item</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action is permanent.
        </AlertDialogDescription>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
      </AlertDialogContent>
    </AlertDialog>
  );
}

describe('AlertDialog', () => {
  it('opens when the trigger is clicked', async () => {
    const user = userEvent.setup();
    renderAlertDialog();
    await user.click(screen.getByRole('button', { name: 'Delete item' }));
    expect(screen.getByRole('alertdialog')).toBeInTheDocument();
    expect(screen.getByText('Are you sure?')).toBeInTheDocument();
  });

  it('closes when cancel is clicked', async () => {
    const user = userEvent.setup();
    renderAlertDialog();
    await user.click(screen.getByRole('button', { name: 'Delete item' }));
    await user.click(screen.getByRole('button', { name: 'Cancel' }));
    expect(screen.queryByRole('alertdialog')).not.toBeInTheDocument();
  });
});
