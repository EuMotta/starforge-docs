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
}

const LoadingComponent = () => (
  <div className="flex h-full w-full items-center justify-center p-16">
    <div className="flex h-full w-full flex-col items-center justify-center bg-transparent p-4">
      <div className="rounded-full p-3">
        <RotateCw className="text-foreground h-6 w-6 animate-spin" />
      </div>
    </div>
  </div>
);

export function ComponentLoader({
  classNameComponentContainer,
  hasReTrigger = false,
  name,
  fromDocs
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
      component={<Component />}
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
      {author && <AuthorBadge username={author} />}

      {hasReTrigger && (
        <Button
          variant="ghost"
          className="text-muted-foreground/80 group hover:text-foreground absolute top-0 left-0 cursor-pointer hover:bg-transparent"
          onClick={reTrigger}
          aria-label="Refresh component"
        >
          <RotateCw className="group-hover:text-[#49BEB7] h-4 w-4 group-hover:animate-spin" />{' '}
          Reiniciar animação
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
