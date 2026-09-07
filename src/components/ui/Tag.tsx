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
        'inline-flex items-center rounded-md px-2.5 py-1 text-xs leading-5',
        variant === 'default' &&
          'bg-surface text-muted ring-1 ring-border',
        variant === 'accent' && 'bg-accent-soft text-accent ring-1 ring-accent/25',
        variant === 'outline' && 'text-subtle ring-1 ring-border',
        className,
      )}
    >
      {children}
    </span>
  );
}
