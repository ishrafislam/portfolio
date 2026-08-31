import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export function Tag({
  children,
  variant = 'default',
  className,
}: {
  children: ReactNode;
  variant?: 'default' | 'accent' | 'outline';
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md px-2.5 py-1 font-mono text-[11px] leading-none tracking-wide transition-colors',
        variant === 'default' &&
          'bg-surface text-muted ring-1 ring-border hover:text-foreground hover:ring-border-strong',
        variant === 'accent' && 'bg-accent-soft text-accent ring-1 ring-accent/25',
        variant === 'outline' && 'text-subtle ring-1 ring-border',
        className,
      )}
    >
      {children}
    </span>
  );
}
