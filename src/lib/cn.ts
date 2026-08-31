type ClassValue = string | false | null | undefined;

/** Minimal class joiner — avoids pulling in clsx for a one-line need. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(' ');
}
