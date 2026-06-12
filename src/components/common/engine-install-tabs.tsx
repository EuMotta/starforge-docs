'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { siteConfig } from '@/settings';
import { CheckCheck, Terminal } from 'lucide-react';

import { cn } from '@/lib/utils';

interface EngineInstallTabsProps {
  blockName: string;
  primitives: string[];
  className?: string;
}

const ENGINE_CONFIG = {
  radix: {
    label: 'Radix UI',
    badgeClass:
      'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300'
  },
  base: {
    label: 'Base UI',
    badgeClass:
      'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
  }
} as const;

type Engine = keyof typeof ENGINE_CONFIG;

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Button
      size="sm"
      variant="ghost"
      onClick={handleCopy}
      className="absolute top-2 right-2 h-8 w-8 p-0"
      aria-label={copied ? 'Copied' : 'Copy command'}
    >
      {copied ? (
        <CheckCheck className="h-4 w-4 text-green-500" />
      ) : (
        <Terminal className="h-4 w-4" />
      )}
    </Button>
  );
}

function InstallCommand({
  blockName,
  engine,
  primitives
}: {
  blockName: string;
  engine: Engine;
  primitives: string[];
}) {
  const baseUrl = siteConfig.site.url;
  const blockCmd = `npx shadcn@latest add ${baseUrl}/r/${blockName}.json`;

  const primitiveCmds = primitives.map((p) => {
    const prefix = engine === 'base' ? 'base-' : '';
    return `npx shadcn@latest add ${baseUrl}/r/${prefix}${p}.json`;
  });

  const lines = [blockCmd, ...primitiveCmds];
  const fullCommand = lines.join('\n');

  return (
    <div className="relative">
      <pre className="bg-muted overflow-x-auto rounded-lg p-4 text-sm">
        <code>{fullCommand}</code>
      </pre>
      <CopyButton text={fullCommand} />
    </div>
  );
}

export function EngineInstallTabs({
  blockName,
  primitives,
  className
}: EngineInstallTabsProps) {
  const [activeEngine, setActiveEngine] = React.useState<Engine>('radix');

  return (
    <div className={cn('space-y-3', className)}>
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground text-sm font-medium">
          Engine:
        </span>
        <Tabs
          value={activeEngine}
          onValueChange={(v) => setActiveEngine(v as Engine)}
        >
          <TabsList className="h-8">
            {(Object.keys(ENGINE_CONFIG) as Engine[]).map((engine) => (
              <TabsTrigger
                key={engine}
                value={engine}
                className="px-3 py-1 text-xs capitalize"
              >
                {ENGINE_CONFIG[engine].label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <InstallCommand
        blockName={blockName}
        engine={activeEngine}
        primitives={primitives}
      />
    </div>
  );
}
