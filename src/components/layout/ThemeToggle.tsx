'use client';

import { useSyncExternalStore } from 'react';
import { useTheme } from 'next-themes';
import { Monitor, Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/cn';

const options = [
  { value: 'light', label: 'Light', Icon: Sun },
  { value: 'dark', label: 'Dark', Icon: Moon },
  { value: 'system', label: 'System', Icon: Monitor },
] as const;

const subscribeNever = () => () => {};

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  // Hydration-safe "are we on the client yet" flag: the server snapshot is
  // false, the client snapshot true, with no state write in an effect.
  const mounted = useSyncExternalStore(
    subscribeNever,
    () => true,
    () => false,
  );

  return (
    <div
      role="group"
      aria-label="Color theme"
      className={cn(
        'inline-flex items-center gap-0.5 rounded-lg p-0.5 ring-1 ring-border',
        className,
      )}
    >
      {options.map(({ value, label, Icon }) => {
        // Before hydration the resolved theme is unknown; render all three
        // unpressed rather than guessing and flashing the wrong state.
        const active = mounted && theme === value;

        return (
          <button
            key={value}
            type="button"
            onClick={() => setTheme(value)}
            aria-label={`${label} theme`}
            aria-pressed={active}
            className={cn(
              'inline-flex size-11 items-center justify-center rounded-md transition-colors',
              active
                ? 'bg-surface-raised text-accent'
                : 'text-subtle hover:text-foreground',
            )}
          >
            <Icon aria-hidden="true" className="size-4" />
          </button>
        );
      })}
    </div>
  );
}
