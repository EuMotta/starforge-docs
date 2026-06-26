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
import { CreditCard } from 'lucide-react';

export function PaymentDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <CreditCard className="mr-2 h-4 w-4" />
          Payment
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Payment method</DialogTitle>
          <DialogDescription>
            Add a new payment method to your account. Your card information is
            encrypted and secure.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="card-name">Name on card</Label>
            <Input id="card-name" placeholder="John Doe" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="card-number">Card number</Label>
            <Input id="card-number" placeholder="0000 0000 0000 0000" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="expiry">Expiry</Label>
              <Input id="expiry" placeholder="MM/YY" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="cvc">CVC</Label>
              <Input id="cvc" placeholder="123" />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button className="w-full">Add Payment Method</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default PaymentDialog;
