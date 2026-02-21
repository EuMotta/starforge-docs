'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { siteConfig } from '@/settings';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCheck, DiamondPlus, Terminal } from 'lucide-react';

import { cn } from '@/lib/utils';

import { CodeDialog } from './code-dialog';
import { ComponentLoader } from './component-loader';

type DrawerCodePreviewProps = {
  name: string;
  code: string;
  sourceCode: string;
  isImproved: boolean;
  title: string;
  lang?: string;
  classNameComponentContainer?: string;
  hasReTrigger?: boolean;
  fromDocs?: boolean;
  responsive?: boolean;
};

export function DrawerCodePreview({
  name,
  code,
  sourceCode,
  isImproved,
  title,
  lang = 'tsx',
  classNameComponentContainer,
  hasReTrigger = false,
  fromDocs = false,
  responsive = true
}: DrawerCodePreviewProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [sourceDialogOpen, setSourceDialogOpen] = useState(false);
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
      <CardHeader className="flex !w-full items-center justify-between">
        <CardTitle>
          <span className="text-xs font-semibold">{title}</span>
        </CardTitle>
        <div className="flex items-center justify-end gap-2">
          {isImproved && (
            <div className="absolute top-0 left-0 z-20 flex items-center justify-start p-3">
              <div className="text-destructive h-8 gap-1.5 text-xs">
                <DiamondPlus />
              </div>
            </div>
          )}
          <Button
            variant="outline"
            size="sm"
            className="h-8 gap-1.5 text-xs"
            onClick={handleCopy}
          >
            <Terminal className="size-3.5" />
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
                {copied && <CheckCheck className="size-3.5 text-green-500" />}
              </motion.div>
            </AnimatePresence>
          </Button>

          <CodeDialog
            open={dialogOpen}
            onOpenChange={setDialogOpen}
            title={formattedName}
            code={code}
            lang={lang}
          >
            <Terminal className="h-3.5 w-3.5" />
          </CodeDialog>

          <CodeDialog
            open={sourceDialogOpen}
            onOpenChange={setSourceDialogOpen}
            title={formattedName}
            code={sourceCode}
            lang={lang}
            disabled={!sourceCode}
          >
            SC
            <Terminal className="h-3.5 w-3.5" />
          </CodeDialog>
        </div>
      </CardHeader>
      <CardContent className="h-full min-h-64 p-0">
        <div className="text-muted-foreground absolute top-10 left-0 z-20 flex items-center justify-end p-3"></div>
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
