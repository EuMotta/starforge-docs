'use client';

import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';

import { cn } from '@/lib/utils';

const ModalSheet = Dialog;
const ModalSheetTrigger = DialogTrigger;
const ModalSheetClose = DialogClose;
const ModalSheetHeader = DialogHeader;
const ModalSheetFooter = DialogFooter;
const ModalSheetTitle = DialogTitle;
const ModalSheetDescription = DialogDescription;

function ModalSheetHandle({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn('bg-muted mx-auto mb-4 h-1.5 w-12 rounded-full', className)}
    />
  );
}

interface ModalSheetContentProps extends React.ComponentProps<
  typeof DialogContent
> {
  showHandle?: boolean;
}

function ModalSheetContent({
  className,
  showHandle = true,
  children,
  ...props
}: ModalSheetContentProps) {
  return (
    <DialogContent
      className={cn(
        'data-[state=closed]:zoom-out-100 data-[state=closed]:slide-out-to-bottom data-[state=open]:zoom-in-100 data-[state=open]:slide-in-from-bottom data-closed:zoom-out-100 data-closed:slide-out-to-bottom data-open:zoom-in-100 data-open:slide-in-from-bottom top-auto bottom-0 translate-y-0 rounded-t-2xl rounded-b-none border-x-0 border-b-0',
        className
      )}
      {...props}
    >
      {showHandle && <ModalSheetHandle />}
      {children}
    </DialogContent>
  );
}

function ModalSheetDemo() {
  return (
    <ModalSheet>
      <ModalSheetTrigger asChild>
        <Button variant="outline">Open sheet</Button>
      </ModalSheetTrigger>
      <ModalSheetContent>
        <ModalSheetHeader>
          <ModalSheetTitle>Task details</ModalSheetTitle>
          <ModalSheetDescription>
            Review the details below, then confirm to finish.
          </ModalSheetDescription>
        </ModalSheetHeader>
        <div className="grid gap-3 py-4">
          <div className="flex items-center justify-between rounded-lg border p-3">
            <span className="text-sm font-medium">Status</span>
            <span className="text-muted-foreground text-sm">In progress</span>
          </div>
          <div className="flex items-center justify-between rounded-lg border p-3">
            <span className="text-sm font-medium">Due date</span>
            <span className="text-muted-foreground text-sm">Tomorrow</span>
          </div>
          <div className="flex items-center justify-between rounded-lg border p-3">
            <span className="text-sm font-medium">Assignee</span>
            <span className="text-muted-foreground text-sm">You</span>
          </div>
        </div>
        <ModalSheetFooter>
          <ModalSheetClose asChild>
            <Button className="w-full">Done</Button>
          </ModalSheetClose>
        </ModalSheetFooter>
      </ModalSheetContent>
    </ModalSheet>
  );
}

export default ModalSheetDemo;
export {
  ModalSheet,
  ModalSheetClose,
  ModalSheetContent,
  ModalSheetDescription,
  ModalSheetFooter,
  ModalSheetHandle,
  ModalSheetHeader,
  ModalSheetTitle,
  ModalSheetTrigger
};
export type { ModalSheetContentProps };
