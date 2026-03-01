'use client';
import React, { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { getComponentByName } from '@/registry';
import { siteConfig } from '@/settings';
import { RotateCw } from 'lucide-react';

import { cn } from '@/lib/utils';

import { AuthorBadge } from '../../ui/author-badge';
import ComponentError from './component-error';

interface ComponentLoaderProps {
  name: string;
  hasReTrigger?: boolean;
  classNameComponentContainer?: string;
  fromDocs?: boolean;
  props?: Record<string, unknown>;
}

/**
 * Renders a loading spinner component for component loading states.
 *
 * @returns {JSX.Element} A centered loading spinner with rotation animation.
 * @remarks
 * - Uses RotateCw icon from lucide-react with continuous spin animation.
 * - Displays in a full-height, full-width container with centered content.
 * - Has transparent background to blend with parent container.
 * @example
 *
 * <LoadingComponent />
 *
 */
const LoadingComponent = () => (
  <div className="flex h-full w-full items-center justify-center p-16">
    <div className="flex h-full w-full flex-col items-center justify-center bg-transparent p-4">
      <div className="rounded-full p-3">
        <RotateCw className="text-foreground h-6 w-6 animate-spin" />
      </div>
    </div>
  </div>
);

/**
 * Dynamically loads and displays a React component from the component registry.
 *
 * @param {string} name - The name of the component to load from the registry.
 * @param {boolean} [hasReTrigger=false] - Whether to show a restart animation button for components with animations.
 * @param {string} [classNameComponentContainer] - Additional CSS classes to apply to the component container.
 * @param {boolean} [fromDocs] - Whether the component is being loaded from documentation context.
 * @param {Record<string, unknown>} [props] - Additional props to pass to the loaded component.
 * @returns {JSX.Element} A component loader with loading states, error handling, and optional restart functionality.
 * @throws {Error} Does not throw errors directly, but displays ComponentError component when component is not found.
 * @remarks
 * - Uses the component registry to locate and dynamically import components.
 * - Shows a loading spinner while the component is being fetched.
 * - Displays author badge if author information is available in the registry.
 * - Supports iframe rendering for documentation context.
 * - Provides restart functionality for animated components.
 * @example
 *
 * <ComponentLoader
 *   name="Button"
 *   hasReTrigger={true}
 *   classNameComponentContainer="custom-class"
 *   fromDocs={false}
 *   props={{ variant: "primary" }}
 * />
 *
 */
export function ComponentLoader({
  classNameComponentContainer,
  hasReTrigger = false,
  name,
  fromDocs,
  props
}: ComponentLoaderProps) {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);
  const [reTriggerKey, setReTriggerKey] = useState<number>(Date.now());
  const [loading, setLoading] = useState(true);
  const [author, setAuthor] = useState<string | null>(null);

  useEffect(() => {
    const componentInfo = getComponentByName(name);
    const component = componentInfo?.component;

    if (component) {
      setComponent(() => component);
    }

    if (componentInfo?.author) {
      setAuthor(componentInfo.author);
    }

    setLoading(false);
  }, [name]);

  const reTrigger = () => {
    setReTriggerKey(Date.now());
  };

  if (loading) {
    return <LoadingComponent />;
  }

  if (!Component) {
    return <ComponentError componentName={name} />;
  }

  return (
    <ComponentDisplay
      component={<Component {...props} />}
      hasReTrigger={hasReTrigger}
      className={classNameComponentContainer}
      reTriggerKey={reTriggerKey}
      reTrigger={reTrigger}
      name={name}
      fromDocs={fromDocs}
      author={author}
    />
  );
}

type ComponentDisplayProps = {
  className?: string;
  component: React.ReactElement;
  hasReTrigger?: boolean;
  reTrigger?: () => void;
  reTriggerKey?: number;
  fromDocs?: boolean;
  name: string;
  author?: string | null;
};

/**
 * Displays the loaded component with optional controls and author information.
 *
 * @param {string} [className] - Additional CSS classes for the container.
 * @param {React.ReactElement} component - The React element to display.
 * @param {boolean} [hasReTrigger] - Whether to show the restart animation button.
 * @param {() => void} [reTrigger] - Function to restart component animations.
 * @param {number} [reTriggerKey] - Key to force component re-rendering.
 * @param {boolean} [fromDocs] - Whether rendering in documentation context.
 * @param {string} name - The name of the component being displayed.
 * @param {string | null} [author] - Author information for the component.
 * @returns {JSX.Element} A container with the component and optional controls.
 * @remarks
 * - Shows author badge in bottom-right corner if author is provided.
 * - Displays restart button in top-left corner for animated components.
 * - Uses iframe for documentation context rendering.
 * - Clones component with dynamic key for animation restart functionality.
 * @example
 *
 * <ComponentDisplay
 *   component={<Button />}
 *   hasReTrigger={true}
 *   reTrigger={handleRestart}
 *   name="Button"
 *   author="John Doe"
 * />
 *
 */
function ComponentDisplay({
  className,
  component,
  hasReTrigger,
  reTrigger,
  reTriggerKey,
  fromDocs,
  name,
  author
}: ComponentDisplayProps) {
  return (
    <div
      className={cn(
        'relative flex w-full items-center justify-center overflow-y-auto rounded-lg',
        className
      )}
      id="preview"
    >
      {author && (
        <AuthorBadge className="absolute right-2 bottom-2" username={author} />
      )}
      {hasReTrigger && (
        <Button
          variant="ghost"
          className="text-muted-foreground/80 group hover:text-foreground absolute top-0 left-0 cursor-pointer hover:bg-transparent"
          onClick={reTrigger}
          aria-label="Refresh component"
        >
          <RotateCw className="h-4 w-4 group-hover:animate-spin group-hover:text-[#49BEB7]" />{' '}
          Restart animation
        </Button>
      )}
      {hasReTrigger ? (
        React.cloneElement(component, { key: reTriggerKey })
      ) : fromDocs ? (
        <iframe
          src={`${siteConfig.site.url}/preview/${name}`}
          className={`${className} w-full`}
        />
      ) : (
        component
      )}
    </div>
  );
}
