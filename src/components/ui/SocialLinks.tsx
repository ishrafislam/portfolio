import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons';
import type { SocialLink } from '@/lib/types';
import { socials } from '@/data/site';
import { cn } from '@/lib/cn';

const icons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: Mail,
} as const;

/**
 * Renders only the links that actually exist in site data — an unsupplied
 * profile URL produces no button at all rather than a dead link.
 */
export function SocialLinks({
  variant = 'icon',
  className,
}: {
  variant?: 'icon' | 'button';
  className?: string;
}) {
  if (socials.length === 0) return null;

  return (
    <ul className={cn('flex flex-wrap items-center gap-3', className)}>
      {socials.map((link: SocialLink) => {
        const Icon = icons[link.icon];
        const isEmail = link.icon === 'mail';

        return (
          <li key={link.label}>
            <a
              href={link.href}
              target={isEmail ? undefined : '_blank'}
              rel={isEmail ? undefined : 'noreferrer noopener'}
              aria-label={isEmail ? "Send email" : link.label}
              className={cn(
                'inline-flex items-center gap-2 rounded-lg transition-colors',
                variant === 'icon' &&
                  'size-11 justify-center text-muted ring-1 ring-border hover:text-foreground hover:ring-border-strong',
                variant === 'button' &&
                  'min-h-11 px-4 py-2.5 text-sm font-medium text-foreground ring-1 ring-border hover:bg-surface hover:ring-border-strong',
              )}
            >
              <Icon aria-hidden="true" className="size-4" />
              {variant === 'button' ? (
                <span>{isEmail ? 'Send email' : link.label}</span>
              ) : (
                <span className="sr-only">{link.label}</span>
              )}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
