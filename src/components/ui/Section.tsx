import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export function Section({
  id,
  children,
  className,
  bordered = true,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  bordered?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        'px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24',
        bordered && 'border-t border-border',
        className,
      )}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn('max-w-2xl', className)}>
      {eyebrow ? (
        <p className="mb-3 text-xs text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-[clamp(1.875rem,3.5vw,2.75rem)] leading-tight font-semibold tracking-tight">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-[65ch] text-base leading-7 text-muted">{description}</p>
      ) : null}
    </div>
  );
}
