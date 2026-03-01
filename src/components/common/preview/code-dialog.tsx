'use client';

import { type ReactNode } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';
import { Code, X } from 'lucide-react';

type CodeDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  code: string;
  lang?: string;
  children?: ReactNode;
  disabled?: boolean;
};

/**
 * A dialog component that displays code in a modal with syntax highlighting.
 *
 * @param {boolean} open - Whether the dialog is currently open.
 * @param {(open: boolean) => void} onOpenChange - Function to call when the dialog open state changes.
 * @param {string} title - The title to display in the dialog header.
 * @param {string} code - The source code to display in the dialog.
 * @param {string} [lang='tsx'] - The programming language for syntax highlighting.
 * @param {ReactNode} [children] - Custom trigger element for opening the dialog.
 * @param {boolean} [disabled=false] - Whether the trigger button should be disabled.
 * @returns {JSX.Element} A dialog with code display and syntax highlighting.
 * @remarks
 * - Uses DynamicCodeBlock from fumadocs-ui for syntax highlighting.
 * - Provides a default code icon trigger if no children are provided.
 * - Has a sticky header with title and close button.
 * - Supports responsive design with max-width constraints.
 * - The dialog content is scrollable for long code blocks.
 * @example
 *
 * <CodeDialog
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 *   title="Component Source Code"
 *   code="const Button = () => <button>Click me</button>;"
 *   lang="tsx"
 *   disabled={false}
 * />
 *
 */
export function CodeDialog({
  open,
  onOpenChange,
  title,
  code,
  lang = 'tsx',
  children,
  disabled = false
}: CodeDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          disabled={disabled}
          className="h-8 gap-1.5 text-xs"
        >
          {children ? children : <Code className="h-3.5 w-3.5" />}
        </Button>
      </DialogTrigger>
      <DialogContent className="not-prose flex max-h-[80vh] !w-full !max-w-4xl flex-col overflow-auto p-0">
        <DialogHeader className="bg-background sticky top-0 z-10 border-b px-6 py-4">
          <DialogTitle className="flex items-center justify-between text-lg font-semibold">
            <span>{title}</span>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-foreground hover:bg-transparent"
              onClick={() => onOpenChange(false)}
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="flex w-full flex-col">
          <div className="overflow-x-auto p-6">
            <div className="w-full max-w-full [&_code]:break-words [&_code]:whitespace-pre-wrap [&_pre]:!overflow-x-visible">
              <DynamicCodeBlock code={code} lang={lang} />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
