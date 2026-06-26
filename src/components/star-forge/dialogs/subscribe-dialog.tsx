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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail } from 'lucide-react';

export function SubscribeDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Mail className="mr-2 h-4 w-4" />
          Subscribe
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Subscribe to our newsletter</DialogTitle>
          <DialogDescription>
            Get the latest updates, tips, and resources delivered straight to
            your inbox.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="subscribe-email">Email address</Label>
            <Input id="subscribe-email" placeholder="you@example.com" />
          </div>
        </div>
        <DialogFooter>
          <Button className="w-full">Subscribe</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default SubscribeDialog;
