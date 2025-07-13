'use client';

import { useState, useRef } from 'react';

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { siteConfig } from '@/settings';
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';
import { CheckCheck, Ellipsis, Fullscreen, Terminal } from 'lucide-react';

import { cn } from '@/lib/utils';

import { ComponentLoader } from './component-loader';

export function ComponentPreview({
  classNameComponentContainer,
  code,
  hasReTrigger = false,
  lang,
  name,
  fromDocs
}: any) {
  const componentRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('preview');
  const [isTerminalCopied, setIsTerminalCopied] = useState(false);

  const handleTerminalClick = () => {
    const COPY = `npx shadcn@latest add ${siteConfig.site.url}/r/${name}.json`;
    navigator.clipboard.writeText(COPY);
    setIsTerminalCopied(true);
    setTimeout(() => {
      setIsTerminalCopied(false);
    }, 1000);
  };

  return (
    <div className="not-prose relative z-0 flex items-center justify-between pb-4">
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="relative mr-auto w-full"
      >
        <TabsList className="w-full justify-start rounded-none border-b bg-transparent p-0">
          <TabsTrigger
            value="preview"
            className="text-muted-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pt-2 pb-3 font-semibold shadow-none transition-none data-[state=active]:shadow-none"
          >
            Preview
          </TabsTrigger>
          <TabsTrigger
            value="code"
            className="text-muted-foreground data-[state=active]:border-b-primary data-[state=active]:text-foreground relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pt-2 pb-3 font-semibold shadow-none transition-none data-[state=active]:shadow-none"
          >
            Code
          </TabsTrigger>

          <div className="grow"></div>

          <div className="align-center mb-2 hidden flex-row gap-2 lg:flex">
            <Button
              size="sm"
              onClick={handleTerminalClick}
              variant="outline"
              className="relative"
            >
              {isTerminalCopied ? (
                <>
                  <CheckCheck className="h-3.5 w-3.5" />
                </>
              ) : (
                <>
                  <Terminal
                    className={cn(
                      'h-3.5 w-3.5',
                      'transition-all duration-200',
                      'group-hover:rotate-12'
                    )}
                  />
                </>
              )}
              <span className="font-mono">npx shadcn add {name}</span>{' '}
            </Button>
          </div>

          <div className="mb-2 block lg:hidden">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  <Ellipsis />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="flex w-80 flex-col gap-2">
                <Button
                  size="sm"
                  onClick={handleTerminalClick}
                  variant="outline"
                  className="relative"
                >
                  {isTerminalCopied ? (
                    <>
                      <CheckCheck className="h-3.5 w-3.5" />
                    </>
                  ) : (
                    <>
                      <Terminal
                        className={cn(
                          'h-3.5 w-3.5',
                          'transition-all duration-200',
                          'group-hover:rotate-12'
                        )}
                      />
                    </>
                  )}
                  <span className="font-mono">Install with CLI</span>{' '}
                </Button>
              </PopoverContent>
            </Popover>
          </div>
          <div className="mb-2 ml-2">
            <Button size="sm" asChild variant="default">
              <a
                href={`${siteConfig.site.url}/preview/${name}`}
                target="_blank"
                rel="noreferrer"
                className={cn('group no-underline transition-all duration-200')}
              >
                <Fullscreen
                  className={cn(
                    'h-4 w-4',
                    'transition-transform duration-200 group-hover:rotate-45'
                  )}
                />
              </a>
            </Button>
          </div>
        </TabsList>
        <TabsContent value="preview">
          <div
            className="flex w-full items-center justify-center p-0.5 pt-4"
            ref={componentRef}
          >
            <ComponentLoader
              name={name}
              hasReTrigger={hasReTrigger}
              classNameComponentContainer={classNameComponentContainer}
              fromDocs={fromDocs}
            />
          </div>
        </TabsContent>
        <TabsContent value="code">
          <DynamicCodeBlock lang={lang} code={code} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
