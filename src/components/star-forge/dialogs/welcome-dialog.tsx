'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Sparkles } from 'lucide-react';

export function WelcomeDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Sparkles className="mr-2 h-4 w-4" />
          Welcome
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <DialogTitle>Welcome to Star Forge</DialogTitle>
          <DialogDescription>
            You are all set! Here is a quick overview of what you can do next.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="rounded-lg border p-4">
              <div className="text-2xl font-bold">1</div>
              <div className="text-muted-foreground text-xs">Create</div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="text-2xl font-bold">2</div>
              <div className="text-muted-foreground text-xs">Customize</div>
            </div>
            <div className="rounded-lg border p-4">
              <div className="text-2xl font-bold">3</div>
              <div className="text-muted-foreground text-xs">Deploy</div>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button className="w-full">Get Started</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default WelcomeDialog;
