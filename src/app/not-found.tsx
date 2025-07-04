import Link from 'next/link';
import { memo } from 'react';
import { MdHome, MdSearch } from 'react-icons/md';

import Logo from '@/components/common/logo';
import { SearchTriggerButton } from '@/components/common/search';
import { Text } from '@/components/star-forge/text';
import { Button, buttonVariants } from '@/components/ui/button';
import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';

import { cn } from '@/lib/utils';

import { baseOptions } from './layout.config';

interface CardLinkProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href?: string;
  search?: boolean;
}

interface DocLinkProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const CardLink = memo(
  ({ icon: Icon, title, description, href, search }: CardLinkProps) => (
    <div className="border-border bg-card flex h-full max-w-96 flex-col justify-between rounded-xl border p-6 shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="space-y-2">
        <Icon className="bg-primary text-primary-foreground mx-auto mb-4 h-12 w-12 rounded-lg p-3" />
        <Text.H3 className="text-foreground mb-2 text-xl font-semibold">
          {title}
        </Text.H3>
        <Text.P className="text-muted-foreground mb-4">{description}</Text.P>
      </div>
      {search ? (
        <SearchTriggerButton />
      ) : (
        <Button asChild variant="default" className="w-full">
          <a href={href}>{title}</a>
        </Button>
      )}
    </div>
  )
);
CardLink.displayName = 'CardLink';

const DocLink = memo(({ icon: Icon, title, description }: DocLinkProps) => (
  <Link
    href="#"
    className={cn(
      buttonVariants({ variant: 'ghost' }),
      'group hover:bg-accent flex items-center rounded-lg p-4 transition-colors duration-200'
    )}
  >
    <Icon className="text-primary mr-3 h-6 w-6 transition-transform duration-200 group-hover:scale-110" />
    <div className="text-left">
      <Text.H4 className="text-foreground font-medium">{title}</Text.H4>
      <Text.P className="text-muted-foreground">{description}</Text.P>
    </div>
  </Link>
));
DocLink.displayName = 'DocLink';

const Error = () => {
  return (
    <DocsLayout tree={source.pageTree} {...baseOptions}>
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-full w-full px-6 py-12">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8">
              <div className="bg-primary/10 mb-6 inline-flex h-32 w-32 items-center justify-center rounded-full shadow-lg">
                <Logo size="xl" />
              </div>
              <Text.H1 className="mb-4 text-6xl font-bold">404</Text.H1>
              <Text.H2 className="mb-4 text-3xl font-semibold">
                Página não encontrada
              </Text.H2>
              <Text.P className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg">
                A pagina que procura não existe, tente novamente.
              </Text.P>
            </div>

            <div className="mb-12 grid grid-cols-2 gap-6">
              <CardLink
                icon={MdHome}
                title="Voltar"
                description="Volte para a página inicial"
                href="/docs"
              />
              <CardLink
                icon={MdSearch}
                title="Pesquisar"
                description="Encontre o que procura na documentação"
                search
              />
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
};

export default Error;
