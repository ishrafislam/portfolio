import Link from 'next/link';
import { heroMeta, site } from '@/data/site';
import { HeroPortrait } from '@/components/sections/HeroPortrait';

export function Hero() {
  return (
    <section id="home" className="px-4 pt-12 pb-16 sm:px-6 sm:pt-20 sm:pb-24 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center md:gap-8 xl:grid-cols-[1.7fr_1fr] xl:gap-16">
        <HeroPortrait />
        <div className="min-w-0 md:order-first">
          <p className="text-lg font-medium">{site.name}</p>
          <p className="mt-1 text-base text-accent">{site.title}</p>
          <h1 className="mt-7 max-w-[13ch] text-[clamp(2.75rem,5.8vw,4.75rem)] leading-[1.06] font-semibold tracking-[-0.045em]">{site.headline}</h1>
          <p className="mt-6 max-w-[62ch] text-base leading-7 text-muted sm:text-lg">
            I specialize in test automation, API testing, mobile testing,
            performance engineering, and quality-focused software development.
            Over 8 years of experience working across web, mobile, desktop,
            backend, telecom, SaaS, transportation, and consumer applications.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/#projects" className="action-primary">View projects</Link>
            <Link href="/#contact" className="action-secondary">Contact me</Link>
          </div>
          <p className="mt-8 max-w-[65ch] text-sm leading-6 text-muted">{site.positioning}</p>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            {heroMeta.map(item => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
