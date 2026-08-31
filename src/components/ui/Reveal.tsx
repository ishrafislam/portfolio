'use client';

import { useEffect, useRef, type ElementType, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

type RevealProps = {
  children: ReactNode;
  /** Stagger index — each step adds 70ms of delay. */
  index?: number;
  as?: ElementType;
  className?: string;
  id?: string;
};

/**
 * Fades content in the first time it scrolls into view. The reveal flag is set
 * on the DOM node rather than in React state: it is a one-way visual effect, so
 * a re-render buys nothing. Under prefers-reduced-motion the node is revealed
 * immediately and no observer is created. With JavaScript off, the noscript
 * style in the root layout keeps everything visible.
 */
export function Reveal({
  children,
  index = 0,
  as: Tag = 'div',
  className,
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reveal = () => {
      node.dataset.revealed = 'true';
    };

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal();
            observer.disconnect();
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      className={cn('reveal', className)}
      style={{ '--reveal-delay': `${index * 70}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
