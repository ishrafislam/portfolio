import Link from 'next/link';
import { navLinks, site } from '@/data/site';
import { SocialLinks } from '@/components/ui/SocialLinks';

const footerLinks = navLinks.filter((link) =>
  ['home', 'about', 'experience', 'projects', 'contact'].includes(link.id),
);

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-12 sm:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-tight">{site.name}</p>
            <p className="mt-1 font-mono text-xs text-accent">{site.title}</p>
            <p className="mt-3 text-xs text-subtle">{site.location}</p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col-reverse gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-subtle">
            © {new Date().getFullYear()} {site.name}
          </p>
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
