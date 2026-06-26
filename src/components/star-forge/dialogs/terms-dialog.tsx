'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
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
import { ScrollArea } from '@/components/ui/scroll-area';
import { FileText } from 'lucide-react';

const TERMS_SECTIONS = [
  {
    title: '1. Acceptance of Terms',
    content:
      'By accessing or using Star Forge, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing the platform.'
  },
  {
    title: '2. Use of Services',
    content:
      'You agree to use the services only for lawful purposes and in accordance with these Terms. You must not use the platform in any way that could damage, disable, overburden, or impair our servers or networks.'
  },
  {
    title: '3. User Accounts',
    content:
      'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.'
  },
  {
    title: '4. Intellectual Property',
    content:
      'All components, documentation, code, and design assets provided on Star Forge are the intellectual property of their respective authors. You may use them in your projects in accordance with the license attached to each component.'
  },
  {
    title: '5. Limitation of Liability',
    content:
      'We shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the services. Our total liability shall not exceed the amount you have paid, if any, for accessing the platform.'
  },
  {
    title: '6. Termination',
    content:
      'We may terminate or suspend your access to the platform immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.'
  },
  {
    title: '7. Changes to Terms',
    content:
      'We reserve the right to modify these terms at any time. Continued use of the platform after any changes constitutes acceptance of the revised terms. It is your responsibility to review these terms periodically.'
  }
] as const;

export function TermsDialog() {
  const [accepted, setAccepted] = React.useState(false);
  const [acceptedAt, setAcceptedAt] = React.useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleAccept = () => {
    setIsSubmitting(true);
    globalThis.setTimeout(() => {
      setIsSubmitting(false);
      setAcceptedAt(new Date().toLocaleString());
    }, 1200);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <FileText className="mr-2 h-4 w-4" />
          Terms of Service
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] !max-w-3xl">
        <DialogHeader className="border-b px-3 py-4 text-base">
          <DialogTitle>Terms & Conditions</DialogTitle>
          <DialogDescription className="text-primary text-xs">
            Last updated: June 24, 2026. Please read these terms carefully
            before using the platform.
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[50vh] pr-4">
          <div className="text-muted-foreground space-y-5 text-sm">
            {TERMS_SECTIONS.map((section) => (
              <section key={section.title}>
                <h3 className="text-foreground mb-1 font-semibold">
                  {section.title}
                </h3>
                <p>{section.content}</p>
              </section>
            ))}
          </div>
        </ScrollArea>

        <DialogFooter className="flex flex-row items-center justify-between border-t pt-2 sm:justify-between">
          <div className="flex items-start gap-3 pt-4">
            <Checkbox
              id="terms-accept"
              checked={accepted}
              onCheckedChange={(checked) => setAccepted(checked === true)}
              disabled={Boolean(acceptedAt)}
            />
            <div className="grid gap-1.5 leading-none">
              <Label htmlFor="terms-accept">
                I have read and agree to the Terms & Conditions
              </Label>
            </div>
          </div>
          {acceptedAt ? (
            <div className="text-muted-foreground text-sm">
              Accepted on {acceptedAt}
            </div>
          ) : (
            <Button
              onClick={handleAccept}
              disabled={!accepted || isSubmitting}
              aria-disabled={!accepted || isSubmitting}
            >
              {isSubmitting ? 'Accepting...' : 'Accept Terms'}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default TermsDialog;
