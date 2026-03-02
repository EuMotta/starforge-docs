'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { getComponentByName } from '@/registry';
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

/**
 * A comprehensive drawer-style component preview with code display, CLI installation, and preset selection.
 *
 * @param {string} name - The name of the component to load and display.
 * @param {string} code - The component usage code to display in dialogs.
 * @param {string} sourceCode - The source code of the component.
 * @param {boolean} isImproved - Whether this is an improved version of the component.
 * @param {string} title - The title to display in the card header.
 * @param {string} [lang='tsx'] - The programming language for syntax highlighting.
 * @param {string} [classNameComponentContainer] - CSS classes for the component container.
 * @param {boolean} [hasReTrigger=false] - Whether the component has restart animation functionality.
 * @param {boolean} [fromDocs=false] - Whether rendering in documentation context.
 * @param {boolean} [responsive=true] - Whether the component preview should be responsive.
 * @returns {JSX.Element} A card with component preview, controls, and optional preset selection.
 * @remarks
 * - Displays component preview in a styled card with gradient background.
 * - Provides CLI installation button with copy functionality and visual feedback.
 * - Includes separate dialogs for viewing code and source code.
 * - Shows an improved indicator (diamond icon) for enhanced components.
 * - Supports preset selection for components with multiple variations.
 * - Uses Framer Motion for smooth animations on copy feedback.
 * - Responsive design with mobile-friendly layout.
 * @example
 *
 * <DrawerCodePreview
 *   name="Button"
 *   code="<Button variant="primary">Click me</Button>"
 *   sourceCode="const Button = ({ variant }) => <button className={variant}>Click me</button>;"
 *   isImproved={true}
 *   title="Enhanced Button"
 *   lang="tsx"
 *   hasReTrigger={true}
 *   responsive={true}
 * />
 *
 */
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
  const [selectedPresetLabel, setSelectedPresetLabel] = useState<
    string | undefined
  >(undefined);

  const previewPresets = getComponentByName(name)?.previewPresets;
  const selectedPreset = previewPresets?.find(
    (preset) => preset.label === selectedPresetLabel
  );
  const effectivePreset = selectedPreset ?? previewPresets?.[0];
  const effectivePresetLabel = effectivePreset?.label;
  const selectedProps = effectivePreset?.props;

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
    <Card className="not-prose relative !gap-0 overflow-hidden border pt-2 pb-0 shadow-md">
      <CardHeader className="mb-2 flex !w-full items-center justify-between">
        <CardTitle>
          <span className="text-sm font-semibold">{title}</span>
        </CardTitle>
        <div className="flex items-center justify-end gap-2">
          {isImproved && (
            <div className="absolute top-12 left-0 z-20 flex items-center justify-start p-3">
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
              props={selectedProps}
            />
          </div>
        </div>
      </CardContent>
      {previewPresets && previewPresets.length > 0 && (
        <CardFooter className="border-t !py-2">
          <div className="flex w-full items-center justify-between gap-3">
            <Select
              value={selectedPresetLabel ?? effectivePresetLabel}
              onValueChange={setSelectedPresetLabel}
            >
              <SelectTrigger size="sm" className="h-8 text-xs">
                <SelectValue placeholder={effectivePresetLabel} />
              </SelectTrigger>
              <SelectContent>
                {previewPresets.map((preset) => (
                  <SelectItem key={preset.label} value={preset.label}>
                    {preset.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
