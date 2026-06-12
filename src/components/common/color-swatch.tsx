'use client';

import { useEffect, useState } from 'react';

interface ColorItem {
  name: string;
  variable: string;
  cssVar: string;
}

interface ColorGroupProps {
  title: string;
  colors: ColorItem[];
}

function ColorGroup({ title, colors }: ColorGroupProps) {
  const [resolved, setResolved] = useState<Record<string, string>>({});

  useEffect(() => {
    const map: Record<string, string> = {};
    colors.forEach((c) => {
      const value = getComputedStyle(document.documentElement).getPropertyValue(
        c.cssVar
      );
      map[c.name] = value.trim();
    });
    setResolved(map);
  }, [colors]);

  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {colors.map((color) => {
          const value = resolved[color.name] || '';
          return (
            <div
              key={color.name}
              className="hover:bg-accent/50 flex items-center gap-3 rounded-lg border p-3 transition-colors"
            >
              <div
                className="h-10 w-10 shrink-0 rounded-md border shadow-sm"
                style={{ backgroundColor: `var(${color.cssVar})` }}
              />
              <div className="min-w-0">
                <p className="text-sm font-medium">{color.name}</p>
                <p className="text-muted-foreground truncate font-mono text-xs">
                  {color.variable}
                </p>
                {value && (
                  <p className="text-muted-foreground/70 truncate font-mono text-xs">
                    {value}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const themeColors: ColorItem[] = [
  { name: 'Background', variable: '--background', cssVar: '--background' },
  { name: 'Foreground', variable: '--foreground', cssVar: '--foreground' },
  { name: 'Card', variable: '--card', cssVar: '--card' },
  {
    name: 'Card Foreground',
    variable: '--card-foreground',
    cssVar: '--card-foreground'
  },
  { name: 'Popover', variable: '--popover', cssVar: '--popover' },
  {
    name: 'Popover Foreground',
    variable: '--popover-foreground',
    cssVar: '--popover-foreground'
  },
  { name: 'Primary', variable: '--primary', cssVar: '--primary' },
  {
    name: 'Primary Foreground',
    variable: '--primary-foreground',
    cssVar: '--primary-foreground'
  },
  { name: 'Secondary', variable: '--secondary', cssVar: '--secondary' },
  {
    name: 'Secondary Foreground',
    variable: '--secondary-foreground',
    cssVar: '--secondary-foreground'
  },
  { name: 'Muted', variable: '--muted', cssVar: '--muted' },
  {
    name: 'Muted Foreground',
    variable: '--muted-foreground',
    cssVar: '--muted-foreground'
  },
  { name: 'Accent', variable: '--accent', cssVar: '--accent' },
  {
    name: 'Accent Foreground',
    variable: '--accent-foreground',
    cssVar: '--accent-foreground'
  },
  { name: 'Destructive', variable: '--destructive', cssVar: '--destructive' },
  { name: 'Border', variable: '--border', cssVar: '--border' },
  { name: 'Input', variable: '--input', cssVar: '--input' },
  { name: 'Ring', variable: '--ring', cssVar: '--ring' }
];

const chartColors: ColorItem[] = [
  { name: 'Chart 1', variable: '--chart-1', cssVar: '--chart-1' },
  { name: 'Chart 2', variable: '--chart-2', cssVar: '--chart-2' },
  { name: 'Chart 3', variable: '--chart-3', cssVar: '--chart-3' },
  { name: 'Chart 4', variable: '--chart-4', cssVar: '--chart-4' },
  { name: 'Chart 5', variable: '--chart-5', cssVar: '--chart-5' }
];

const sidebarColors: ColorItem[] = [
  { name: 'Sidebar', variable: '--sidebar', cssVar: '--sidebar' },
  {
    name: 'Sidebar Foreground',
    variable: '--sidebar-foreground',
    cssVar: '--sidebar-foreground'
  },
  {
    name: 'Sidebar Primary',
    variable: '--sidebar-primary',
    cssVar: '--sidebar-primary'
  },
  {
    name: 'Sidebar Primary Foreground',
    variable: '--sidebar-primary-foreground',
    cssVar: '--sidebar-primary-foreground'
  },
  {
    name: 'Sidebar Accent',
    variable: '--sidebar-accent',
    cssVar: '--sidebar-accent'
  },
  {
    name: 'Sidebar Accent Foreground',
    variable: '--sidebar-accent-foreground',
    cssVar: '--sidebar-accent-foreground'
  },
  {
    name: 'Sidebar Border',
    variable: '--sidebar-border',
    cssVar: '--sidebar-border'
  },
  { name: 'Sidebar Ring', variable: '--sidebar-ring', cssVar: '--sidebar-ring' }
];

export function ColorsPreview() {
  return (
    <div className="space-y-8">
      <ColorGroup title="Theme Colors" colors={themeColors} />
      <ColorGroup title="Chart Colors" colors={chartColors} />
      <ColorGroup title="Sidebar Colors" colors={sidebarColors} />
    </div>
  );
}
