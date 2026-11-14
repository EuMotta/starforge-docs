'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton
} from '@/components/ui/input-group';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { Command as CommandPrimitive } from 'cmdk';
import { ChevronDownIcon, XIcon, CheckIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

interface ComboboxContextValue {
  inputValue?: string;
  onInputValueChange?: (value: string) => void;
  value?: string;
  onValueChange?: (value: string) => void;
  setOpen: (open: boolean) => void;
}

const ComboboxContext = React.createContext<ComboboxContextValue>({
  setOpen: () => undefined
});

interface ComboboxProps {
  children?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  inputValue?: string;
  onInputValueChange?: (value: string) => void;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  shouldFilter?: boolean;
  filter?: React.ComponentProps<typeof CommandPrimitive>['filter'];
  loop?: boolean;
}

function Combobox({
  children,
  open,
  onOpenChange,
  inputValue,
  onInputValueChange,
  value,
  defaultValue,
  onValueChange,
  shouldFilter = true,
  filter,
  loop
}: Readonly<ComboboxProps>) {
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? '');

  const contextValue = React.useMemo<ComboboxContextValue>(
    () => ({
      inputValue,
      onInputValueChange,
      value: value ?? internalValue,
      onValueChange: (next: string) => {
        setInternalValue(next);
        onValueChange?.(next);
      },
      setOpen: (next: boolean) => onOpenChange?.(next)
    }),
    [
      inputValue,
      onInputValueChange,
      value,
      internalValue,
      onValueChange,
      onOpenChange
    ]
  );

  return (
    <ComboboxContext.Provider value={contextValue}>
      <PopoverPrimitive.Root open={open} onOpenChange={onOpenChange}>
        <CommandPrimitive
          shouldFilter={shouldFilter}
          filter={filter}
          loop={loop}
        >
          {children}
        </CommandPrimitive>
      </PopoverPrimitive.Root>
    </ComboboxContext.Provider>
  );
}

interface ComboboxValueProps extends Omit<
  React.HTMLAttributes<HTMLSpanElement>,
  'children'
> {
  children?: React.ReactNode | ((value: string | undefined) => React.ReactNode);
  placeholder?: React.ReactNode;
}

function ComboboxValue({
  className,
  children,
  placeholder,
  ...props
}: Readonly<ComboboxValueProps>) {
  const { value } = React.useContext(ComboboxContext);
  const content =
    typeof children === 'function'
      ? children(value)
      : (value ?? children ?? placeholder);

  return (
    <span data-slot="combobox-value" className={cn(className)} {...props}>
      {content}
    </span>
  );
}

function ComboboxTrigger({
  className,
  children,
  ...props
}: Readonly<React.ComponentProps<typeof PopoverPrimitive.Trigger>>) {
  return (
    <PopoverPrimitive.Trigger
      data-slot="combobox-trigger"
      className={cn(
        "cursor-pointer [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4" />
    </PopoverPrimitive.Trigger>
  );
}

function ComboboxClear({
  className,
  onClick,
  ...props
}: Readonly<React.ComponentProps<typeof InputGroupButton>>) {
  const { onInputValueChange, onValueChange } =
    React.useContext(ComboboxContext);

  return (
    <InputGroupButton
      data-slot="combobox-clear"
      variant="ghost"
      size="icon-xs"
      className={cn('cursor-pointer', className)}
      onClick={(event) => {
        onClick?.(event);
        onInputValueChange?.('');
        onValueChange?.('');
      }}
      {...props}
    >
      <XIcon className="pointer-events-none" />
    </InputGroupButton>
  );
}

interface ComboboxInputProps extends Omit<
  React.ComponentProps<'input'>,
  'value' | 'onChange'
> {
  showTrigger?: boolean;
  showClear?: boolean;
}

function ComboboxInput({
  className,
  children,
  disabled = false,
  showTrigger = true,
  showClear = false,
  onFocus,
  ...props
}: Readonly<ComboboxInputProps>) {
  const { inputValue, onInputValueChange, setOpen } =
    React.useContext(ComboboxContext);

  return (
    <PopoverPrimitive.Anchor data-slot="combobox-anchor" className="w-full">
      <InputGroup className={cn('w-auto', className)}>
        <CommandPrimitive.Input
          data-slot="input-group-control"
          className="file:text-foreground placeholder:text-muted-foreground flex h-9 w-full flex-1 rounded-none border-0 bg-transparent px-3 py-1 text-base shadow-none transition-colors outline-none file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-transparent"
          value={inputValue}
          onValueChange={onInputValueChange}
          onFocus={(event) => {
            setOpen(true);
            onFocus?.(event);
          }}
          disabled={disabled}
          {...props}
        />
        <InputGroupAddon align="inline-end">
          {showTrigger && (
            <InputGroupButton
              size="icon-xs"
              variant="ghost"
              asChild
              data-slot="input-group-button"
              className="cursor-pointer group-has-data-[slot=combobox-clear]/input-group:hidden data-pressed:bg-transparent"
              disabled={disabled}
            >
              <ComboboxTrigger />
            </InputGroupButton>
          )}
          {showClear && <ComboboxClear disabled={disabled} />}
        </InputGroupAddon>
        {children}
      </InputGroup>
    </PopoverPrimitive.Anchor>
  );
}

type ComboboxContentProps = React.ComponentProps<
  typeof PopoverPrimitive.Content
> & {
  anchor?: React.ComponentProps<typeof PopoverPrimitive.Anchor>['virtualRef'];
};

function ComboboxContent({
  className,
  side = 'bottom',
  sideOffset = 6,
  align = 'start',
  alignOffset = 0,
  anchor,
  children,
  ...props
}: Readonly<ComboboxContentProps>) {
  return (
    <>
      {anchor ? <PopoverPrimitive.Anchor virtualRef={anchor} /> : null}
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          data-slot="combobox-content"
          data-chips={!!anchor}
          side={side}
          sideOffset={sideOffset}
          align={align}
          alignOffset={alignOffset}
          onOpenAutoFocus={(event) => event.preventDefault()}
          className={cn(
            'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ring-foreground/10 *:data-[slot=input-group]:bg-input/30 *:data-[slot=input-group]:border-input/30 group/combobox-content relative max-h-(--radix-popper-available-height) w-(--radix-popper-anchor-width) max-w-(--radix-popper-available-width) min-w-[calc(var(--radix-popper-anchor-width)+--spacing(7))] origin-(--radix-popper-content-transform-origin) overflow-hidden rounded-lg shadow-md ring-1 duration-100 data-[chips=true]:min-w-(--radix-popper-anchor-width) *:data-[slot=input-group]:m-1 *:data-[slot=input-group]:mb-0 *:data-[slot=input-group]:h-8 *:data-[slot=input-group]:shadow-none',
            className
          )}
          {...props}
        >
          {children}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </>
  );
}

function ComboboxList({
  className,
  ...props
}: Readonly<React.ComponentProps<typeof CommandPrimitive.List>>) {
  return (
    <CommandPrimitive.List
      data-slot="combobox-list"
      className={cn(
        'no-scrollbar max-h-[min(calc(--spacing(72)---spacing(9)),calc(var(--radix-popper-available-height)---spacing(9)))] scroll-py-1 overflow-y-auto overscroll-contain p-1',
        className
      )}
      {...props}
    />
  );
}

function ComboboxItem({
  className,
  children,
  value,
  onSelect,
  ...props
}: Readonly<React.ComponentProps<typeof CommandPrimitive.Item>>) {
  const { value: selectedValue, onValueChange } =
    React.useContext(ComboboxContext);
  const isSelected = selectedValue === value;

  return (
    <CommandPrimitive.Item
      data-slot="combobox-item"
      value={value}
      className={cn(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground not-data-[variant=destructive]:data-[selected=true]:**:text-accent-foreground relative flex w-full cursor-pointer items-center gap-2 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      onSelect={(selected) => {
        onSelect?.(selected);
        onValueChange?.(selected);
      }}
      {...props}
    >
      {children}
      {isSelected && (
        <span
          data-slot="combobox-item-indicator"
          className="pointer-events-none absolute right-2 flex size-4 items-center justify-center"
        >
          <CheckIcon className="pointer-events-none" />
        </span>
      )}
    </CommandPrimitive.Item>
  );
}

function ComboboxGroup({
  className,
  ...props
}: Readonly<React.ComponentProps<typeof CommandPrimitive.Group>>) {
  return (
    <CommandPrimitive.Group
      data-slot="combobox-group"
      className={cn(className)}
      {...props}
    />
  );
}

function ComboboxLabel({
  className,
  ...props
}: Readonly<React.ComponentProps<'div'>>) {
  return (
    <div
      data-slot="combobox-label"
      className={cn('text-muted-foreground px-2 py-1.5 text-xs', className)}
      {...props}
    />
  );
}

function ComboboxCollection({
  ...props
}: Readonly<React.ComponentProps<'div'>>) {
  return <div data-slot="combobox-collection" {...props} />;
}

function ComboboxEmpty({
  className,
  ...props
}: Readonly<React.ComponentProps<typeof CommandPrimitive.Empty>>) {
  return (
    <CommandPrimitive.Empty
      data-slot="combobox-empty"
      className={cn(
        'text-muted-foreground flex w-full justify-center py-2 text-center text-sm',
        className
      )}
      {...props}
    />
  );
}

function ComboboxSeparator({
  className,
  ...props
}: Readonly<React.ComponentProps<typeof CommandPrimitive.Separator>>) {
  return (
    <CommandPrimitive.Separator
      data-slot="combobox-separator"
      className={cn('bg-border -mx-1 my-1 h-px', className)}
      {...props}
    />
  );
}

function ComboboxChips({
  className,
  ...props
}: Readonly<React.ComponentProps<'div'>>) {
  return (
    <div
      data-slot="combobox-chips"
      className={cn(
        'dark:bg-input/30 border-input focus-within:border-ring focus-within:ring-ring/50 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 has-aria-invalid:border-destructive dark:has-aria-invalid:border-destructive/50 flex min-h-8 flex-wrap items-center gap-1 rounded-lg border bg-transparent bg-clip-padding px-2.5 py-1 text-sm transition-colors focus-within:ring-3 has-aria-invalid:ring-3 has-data-[slot=combobox-chip]:px-1',
        className
      )}
      {...props}
    />
  );
}

interface ComboboxChipProps extends React.ComponentProps<'span'> {
  showRemove?: boolean;
  onRemove?: () => void;
}

function ComboboxChip({
  className,
  children,
  showRemove = true,
  onRemove,
  ...props
}: Readonly<ComboboxChipProps>) {
  return (
    <span
      data-slot="combobox-chip"
      className={cn(
        'bg-muted text-foreground flex h-[calc(--spacing(5.25))] w-fit items-center justify-center gap-1 rounded-sm px-1.5 text-xs font-medium whitespace-nowrap has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-disabled:opacity-50 has-data-[slot=combobox-chip-remove]:pr-0',
        className
      )}
      {...props}
    >
      {children}
      {showRemove && (
        <Button
          type="button"
          variant="ghost"
          size="icon"
          data-slot="combobox-chip-remove"
          className="-ml-1 cursor-pointer opacity-50 hover:opacity-100"
          onClick={onRemove}
        >
          <XIcon className="pointer-events-none" />
        </Button>
      )}
    </span>
  );
}

function ComboboxChipsInput({
  className,
  ...props
}: Readonly<Omit<React.ComponentProps<'input'>, 'value' | 'onChange'>>) {
  const { inputValue, onInputValueChange } = React.useContext(ComboboxContext);

  return (
    <input
      data-slot="combobox-chip-input"
      className={cn('min-w-16 flex-1 outline-none', className)}
      value={inputValue}
      onChange={(event) => onInputValueChange?.(event.target.value)}
      {...props}
    />
  );
}

function useComboboxAnchor() {
  return React.useRef<HTMLDivElement | null>(null);
}

export type { ComboboxProps };

export {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxCollection,
  ComboboxEmpty,
  ComboboxSeparator,
  ComboboxChips,
  ComboboxChip,
  ComboboxChipsInput,
  ComboboxTrigger,
  ComboboxValue,
  useComboboxAnchor
};
