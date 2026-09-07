import type { ElementType, ReactNode } from 'react';

/** Static wrapper: content remains visible without hydration or scroll observers. */
export function Reveal({ children, as: Tag = 'div', className, id }: {
  children: ReactNode;
  index?: number;
  as?: ElementType;
  className?: string;
  id?: string;
}) {
  return <Tag className={className} id={id}>{children}</Tag>;
}
