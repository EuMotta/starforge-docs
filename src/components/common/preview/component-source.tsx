'use client';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible';
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';

import { cn } from '@/lib/utils';

/**
 * A collapsible code block component with expand/collapse functionality.
 *
 * @param {string} code - The source code to display with syntax highlighting.
 * @param {string} highlightedCode - The syntax-highlighted version of the code (deprecated parameter).
 * @param {string} [className] - Additional CSS classes to apply to the container.
 * @param {string} [expandButtonTitle='Expand'] - Text to display on the expand/collapse button.
 * @param {string} [maxHeight='550px'] - Maximum height of the expanded code block.
 * @returns {JSX.Element} A collapsible code block with syntax highlighting.
 * @remarks
 * - Uses Collapsible component for expand/collapse functionality.
 * - Shows a preview of the code when collapsed (limited height).
 * - Provides a gradient overlay to indicate more content is available.
 * - Button text changes between "Expand" and "Collapse" based on state.
 * - Uses DynamicCodeBlock for syntax highlighting with TypeScript language.
 * - Responsive design with smooth transitions.
 * @example
 *
 * <ComponentSource
 *   code="const Button = () => <button>Click me</button>;"
 *   highlightedCode="<span>const Button = () => <button>Click me</button>;</span>"
 *   expandButtonTitle="View Code"
 *   maxHeight="600px"
 *   className="custom-code-block"
 * />
 *
 */
export function ComponentSource({
  className,
  code,
  expandButtonTitle = 'Expand',
  maxHeight = '550px',
  ...props
}: {
  code: string;
  highlightedCode: string;
  className?: string;
  expandButtonTitle?: string;
  maxHeight?: string;
}) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <Collapsible
      open={isOpened}
      onOpenChange={setIsOpened}
      className="not-prose"
    >
      <div
        className={cn(
          'group/item bg-card text-card-foreground relative my-4 overflow-hidden rounded-lg border',
          className
        )}
        {...props}
      >
        <CollapsibleContent
          forceMount
          className={cn('overflow-hidden', !isOpened && 'max-h-32')}
        >
          <div
            className={cn(
              '[&_pre]:my-0 [&_pre]:pb-[100px]',
              !isOpened ? '[&_pre]:overflow-hidden' : '[&_pre]:overflow-auto'
            )}
            style={{
              maxHeight: isOpened ? maxHeight : 'none',
              overflow: 'auto'
            }}
          >
            <DynamicCodeBlock code={code} lang="ts" />
          </div>
        </CollapsibleContent>

        <div
          className={cn(
            'from-background/30 to-background/90 absolute flex items-center justify-center bg-linear-to-b p-2',
            isOpened ? 'inset-x-0 bottom-0 h-12' : 'inset-0'
          )}
        >
          <CollapsibleTrigger asChild>
            <Button variant="secondary" size="sm" className="h-8 text-xs">
              {isOpened ? 'Collapse' : expandButtonTitle}
            </Button>
          </CollapsibleTrigger>
        </div>
      </div>
    </Collapsible>
  );
}
