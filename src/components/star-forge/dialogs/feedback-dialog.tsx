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
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare } from 'lucide-react';

export function FeedbackDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <MessageSquare className="mr-2 h-4 w-4" />
          Feedback
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Send feedback</DialogTitle>
          <DialogDescription>
            Let us know how we can improve your experience. Your feedback helps
            us build better tools.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="feedback">Your feedback</Label>
            <Textarea
              id="feedback"
              placeholder="Tell us what you think..."
              className="min-h-[100px]"
            />
          </div>
        </div>
        <DialogFooter>
          <Button>Send Feedback</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default FeedbackDialog;
