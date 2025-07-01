'use client';

import { useState, type ReactNode } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { siteConfig } from '@/settings';
import { motion, AnimatePresence } from 'framer-motion';
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';
import { CheckCheck, Code, Terminal, X } from 'lucide-react';

import { cn } from '@/lib/utils';

import { ComponentLoader } from './component-loader';

type DrawerCodePreviewProps = {
  name: string;
  code: string;
  lang?: string;
  classNameComponentContainer?: string;
  hasReTrigger?: boolean;
  fromDocs?: boolean;
  responsive?: boolean;
  children?: ReactNode;
};

export function DrawerCodePreview({
  name,
  code,
  lang = 'tsx',
  classNameComponentContainer,
  hasReTrigger = false,
  fromDocs = false,
  responsive = true,
  children
}: DrawerCodePreviewProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const cli = `npx shadcn@latest add ${siteConfig.site.url}/r/${name}.json`;
    navigator.clipboard.writeText(cli);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const formattedName = name
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <Card className="not-prose relative overflow-hidden border shadow-md">
      <div className="absolute top-0 right-0 z-20 flex items-center justify-end p-3">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            className="h-8 gap-1.5 text-xs"
            onClick={handleCopy}
          >
            <Terminal className="h-3.5 w-3.5" />
            <span className="font-mono">CLI</span>
            <AnimatePresence mode="wait">
              <motion.div
                key={copied ? 'check' : 'copy'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="ml-1"
              >
                {copied && (
                  <CheckCheck className="h-3.5 w-3.5 text-green-500" />
                )}
              </motion.div>
            </AnimatePresence>
          </Button>

          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="h-8 gap-1.5 text-xs"
              >
                <Code className="h-3.5 w-3.5" />
              </Button>
            </DialogTrigger>
            <DialogContent className="not-prose flex max-h-[80vh] w-full max-w-4xl flex-col overflow-auto p-0">
              <DialogHeader className="bg-background sticky top-0 z-10 border-b px-6 py-4">
                <DialogTitle className="flex items-center justify-between text-lg font-semibold">
                  <span>{formattedName}</span>
                  {/* Cross button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-foreground hover:bg-transparent"
                    onClick={() => setDialogOpen(false)}
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

                {children && (
                  <div className="border-t">
                    <div className="dark:prose-invert prose p-6">
                      {children}
                    </div>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <CardContent className="h-full p-0">
        <div className="component-preview from-background to-muted/30 flex h-full items-center justify-center bg-gradient-to-br shadow-[0px_2px_10px_0px_rgba(255,255,255,0.1)_inset]">
          <div
            className={cn(
              'h-full w-full max-w-md transition-all duration-200',
              responsive && 'flex justify-center'
            )}
          >
            <ComponentLoader
              name={name}
              hasReTrigger={hasReTrigger}
              classNameComponentContainer={classNameComponentContainer}
              fromDocs={fromDocs}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
