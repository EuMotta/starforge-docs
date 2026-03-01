'use client';

import { useState } from 'react';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible';
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';
import { ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';

import { ComponentLoader } from './component-loader';

interface ComponentPreviewProps {
  classNameComponentContainer: string;
  code: string;
  hasReTrigger: boolean;
  lang: string;
  name: string;
}
/**
 * A collapsible component that displays a component preview with expandable code view.
 *
 * @param {string} classNameComponentContainer - CSS classes for the component container.
 * @param {string} code - The source code to display when expanded.
 * @param {boolean} hasReTrigger - Whether the component has restart animation functionality.
 * @param {string} lang - The programming language for syntax highlighting.
 * @param {string} name - The name of the component to load and display.
 * @returns {JSX.Element} A collapsible preview component with code display.
 * @remarks
 * - Uses Collapsible component for expand/collapse functionality.
 * - Shows component preview in the collapsed state by default.
 * - Displays syntax-highlighted code when expanded.
 * - Chevron icon rotates when the component is expanded.
 * - Integrates with ComponentLoader for dynamic component rendering.
 * @example
 *
 * <ComponentCollapse
 *   classNameComponentContainer="preview-container"
 *   code="const Button = () => <button>Click me</button>;"
 *   hasReTrigger={true}
 *   lang="tsx"
 *   name="Button"
 * />
 *
 */
export function ComponentCollapse({
  classNameComponentContainer,
  code,
  hasReTrigger = false,
  lang,
  name
}: ComponentPreviewProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="not-prose relative w-full rounded-md border"
    >
      <div className="flex flex-col space-y-4">
        <div className="component-preview flex min-h-[100px] flex-1 items-center justify-center px-4">
          <ComponentLoader
            name={name}
            hasReTrigger={hasReTrigger}
            classNameComponentContainer={classNameComponentContainer}
          />
        </div>
        <CollapsibleTrigger asChild>
          <div className="bg-secondary text-muted-foreground hover:text-foreground flex cursor-pointer items-center gap-2 rounded-b-md border-t px-4 py-2 text-sm">
            <ChevronDown
              className={cn(
                'h-4 w-4 transition-transform duration-200',
                isOpen && 'rotate-180'
              )}
            />
            {isOpen ? 'Hide' : 'Show'} code
          </div>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent>
        <div className="border-t">
          <DynamicCodeBlock code={code} lang={lang} />
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
