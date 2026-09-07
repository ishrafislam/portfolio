'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { navLinks, resumeUrl } from '@/data/site';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { cn } from '@/lib/cn';

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (pathname !== '/') return;
    const update = () => {
      let active = 'home';
      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section && section.getBoundingClientRect().top <= 160) active = link.id;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) active = 'contact';
      setActiveId(active);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 1024px)');
    const onResize = () => { if (desktop.matches) setOpen(false); };
    document.addEventListener('keydown', close);
    desktop.addEventListener('change', onResize);
    return () => {
      document.removeEventListener('keydown', close);
      desktop.removeEventListener('change', onResize);
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    toggleRef.current?.focus();
  };
  const isActive = (id: string) => pathname.startsWith('/projects') ? id === 'projects' : pathname === '/' && activeId === id;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <nav aria-label="Main" className="mx-auto flex h-20 max-w-[1216px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" onClick={closeMenu} className="inline-flex min-h-11 items-center text-lg font-semibold tracking-tight">Ishraf<span className="text-accent">.</span></Link>
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map(link => (
            <li key={link.id}><Link href={link.href} aria-current={isActive(link.id) ? 'location' : undefined}
              className={cn('inline-flex min-h-11 items-center rounded-lg px-3 text-sm font-medium transition-colors', isActive(link.id) ? 'bg-accent-soft text-accent' : 'text-muted hover:bg-surface hover:text-foreground')}>
              {link.label}
            </Link></li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <div className="hidden lg:block"><ThemeToggle /></div>
          {resumeUrl ? <a href={resumeUrl} target="_blank" rel="noreferrer noopener" className="action-secondary hidden text-sm lg:inline-flex">Resume</a> : null}
          <button ref={toggleRef} type="button" onClick={() => setOpen(value => !value)} aria-expanded={open} aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'} className="inline-flex size-11 items-center justify-center rounded-lg border border-border hover:bg-surface lg:hidden">
            {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
          </button>
        </div>
      </nav>
      <div id="mobile-nav" hidden={!open} className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-border bg-background px-4 pb-5 sm:px-6 lg:hidden">
        <nav aria-label="Mobile">
          <ul className="py-2">
            {navLinks.map(link => <li key={link.id}><Link href={link.href} onClick={closeMenu} aria-current={isActive(link.id) ? 'location' : undefined}
              className={cn('flex min-h-12 items-center rounded-lg px-3 font-medium', isActive(link.id) ? 'bg-accent-soft text-accent' : 'text-muted hover:bg-surface')}>{link.label}</Link></li>)}
          </ul>
        </nav>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
          <ThemeToggle />
          {resumeUrl ? <a href={resumeUrl} onClick={closeMenu} target="_blank" rel="noreferrer noopener" className="action-secondary">Resume</a> : null}
        </div>
      </div>
    </header>
  );
}
