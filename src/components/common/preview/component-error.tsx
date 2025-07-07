'use client';
import Link from 'next/link';
import React from 'react';
import { MdError, MdArrowBack, MdRefresh } from 'react-icons/md';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';

import { cn } from '@/lib/utils';

interface ComponentErrorProps extends React.HTMLAttributes<HTMLDivElement> {
  componentName?: string;
}

/**
 * Componente de erro para componente não encontrado
 */
const ComponentError = React.forwardRef<HTMLDivElement, ComponentErrorProps>(
  ({ componentName = 'ComponentName', className, ...props }, ref) => {
    return (
      <div
        id="webcrumbs"
        className={cn(
          'bg-background flex min-h-screen items-center justify-center p-4',
          className
        )}
        ref={ref}
        {...props}
      >
        <div className="w-full max-w-md">
          <div className="border-border bg-card rounded-lg border p-6 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <div className="bg-destructive/10 mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                <MdError
                  className="text-destructive text-2xl"
                  aria-hidden="true"
                />
              </div>

              <h1 className="text-foreground mb-2 text-xl font-semibold">
                Componente não encontrado
              </h1>

              <p className="text-muted-foreground mb-6">
                O componente{' '}
                <span className="bg-muted rounded px-1 py-0.5 font-mono text-sm">
                  {componentName}
                </span>{' '}
                não foi encontrado.
              </p>

              <div className="mb-6 w-full text-left">
                <h3 className="text-foreground mb-3 text-sm font-medium">
                  Passos para solução:
                </h3>
                <ul className="text-muted-foreground space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="bg-muted-foreground mt-2 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full" />
                    Se for um desenvolvedor, certifique-se de que o componente
                    está registrado corretamente no seu registro de componentes.
                  </li>
                  <li className="flex items-start">
                    <span className="bg-muted-foreground mt-2 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full" />
                    Verifique se há erros de digitação no nome do componente ou
                    na instrução de importação.
                  </li>
                  <li className="flex items-start">
                    <span className="bg-muted-foreground mt-2 mr-3 h-1.5 w-1.5 flex-shrink-0 rounded-full" />
                    Se você for um usuário, entre em contato com o desenvolvedor
                    para corrigir esse problema.
                  </li>
                </ul>
              </div>

              <div className="flex w-full flex-col gap-3 sm:flex-row">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => window.history.back()}
                >
                  <MdArrowBack className="mr-2 h-4 w-4" aria-hidden="true" />
                  Voltar
                </Button>
                <Button
                  variant="default"
                  className="flex-1"
                  onClick={() => window.location.reload()}
                >
                  <MdRefresh className="mr-2 h-4 w-4" aria-hidden="true" />
                  Tentar novamente
                </Button>
              </div>
            </div>
          </div>

          <div className="text-muted-foreground mt-6 text-center text-sm">
            Precisa de ajuda?{' '}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="link" className="inline p-0">
                  Contacte o suporte
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Entre em contato com o suporte</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Entre em contato conosco para assistência com o componente{' '}
                    <span className="font-mono">{componentName}</span>.
                  </p>
                  <Button asChild variant="default">
                    <Link href="/contact">Ir para a página de suporte</Link>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    );
  }
);

ComponentError.displayName = 'ComponentError';

export default ComponentError;
