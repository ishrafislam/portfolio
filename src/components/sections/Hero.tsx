import Link from 'next/link';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { heroMeta, site } from '@/data/site';
import { Reveal } from '@/components/ui/Reveal';
import { HeroPortrait } from '@/components/sections/HeroPortrait';

export function Hero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-24 overflow-hidden px-6 pt-16 pb-20 sm:px-8 sm:pt-24 sm:pb-28"
    >
      <div
        aria-hidden="true"
        className="grid-lines pointer-events-none absolute inset-0 -z-10 opacity-40"
      />

      <div className="mx-auto grid w-full max-w-5xl gap-14 lg:grid-cols-[1.35fr_1fr] lg:items-center">
        <div className="lg:order-first">
          <Reveal as="p" className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
            {site.positioning}
          </Reveal>

          <Reveal index={1} as="h1" className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            {site.name}
          </Reveal>

          <Reveal index={2} as="p" className="mt-3 text-lg text-muted sm:text-xl">
            {site.title}
          </Reveal>

          <Reveal
            index={3}
            as="p"
            className="text-gradient-accent mt-8 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {site.headline}
          </Reveal>

          <Reveal index={4} as="p" className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            I specialize in test automation, API testing, mobile testing,
            performance engineering, and quality-focused software development.
            Over 8 years of experience working across web, mobile, desktop,
            backend, telecom, SaaS, transportation, and consumer applications.
          </Reveal>

          <Reveal index={5} className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              View My Work
              <ArrowDown
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </Link>
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-medium ring-1 ring-border transition-colors hover:bg-surface hover:ring-border-strong"
            >
              Let’s Connect
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Link>
          </Reveal>

          <Reveal index={6} as="ul" className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
            {heroMeta.map((item) => (
              <li key={item} className="font-mono text-xs text-subtle">
                {item}
              </li>
            ))}
          </Reveal>
        </div>

        <Reveal className="order-first flex justify-center lg:order-last lg:justify-self-end">
          <HeroPortrait />
        </Reveal>
      </div>
    </section>
  );
}
