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
import { ScrollArea } from '@/components/ui/scroll-area';
import { FileText } from 'lucide-react';

export function TermsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <FileText className="mr-2 h-4 w-4" />
          Terms of Service
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] max-w-2xl">
        <DialogHeader>
          <DialogTitle>Terms of Service</DialogTitle>
          <DialogDescription>
            Last updated: June 24, 2026. Please read these terms carefully
            before using the platform.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[50vh] pr-4">
          <div className="text-muted-foreground space-y-4 text-sm">
            <p>
              <strong>1. Acceptance of Terms</strong>
              <br />
              By accessing or using our services, you agree to be bound by these
              Terms of Service.
            </p>
            <p>
              <strong>2. Use of Services</strong>
              <br />
              You agree to use the services only for lawful purposes and in
              accordance with these Terms.
            </p>
            <p>
              <strong>3. User Accounts</strong>
              <br />
              You are responsible for maintaining the confidentiality of your
              account credentials.
            </p>
            <p>
              <strong>4. Limitation of Liability</strong>
              <br />
              We shall not be liable for any indirect, incidental, or
              consequential damages arising from your use of the services.
            </p>
            <p>
              <strong>5. Changes to Terms</strong>
              <br />
              We reserve the right to modify these terms at any time. Continued
              use constitutes acceptance of the revised terms.
            </p>
          </div>
        </ScrollArea>
        <DialogFooter>
          <Button>Accept Terms</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default TermsDialog;
