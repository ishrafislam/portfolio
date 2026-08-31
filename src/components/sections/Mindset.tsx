import { Search, TrendingUp, Workflow, type LucideIcon } from 'lucide-react';
import { mindset } from '@/data/skills';
import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionHeading } from '@/components/ui/Section';

const icons: Record<string, LucideIcon> = {
  search: Search,
  workflow: Workflow,
  'trending-up': TrendingUp,
};

export function Mindset() {
  return (
    <Section>
      <Reveal>
        <SectionHeading
          eyebrow="07 / Mindset"
          title={mindset.heading}
          description={mindset.statement}
        />
      </Reveal>

      <ul className="mt-10 grid gap-4 sm:grid-cols-3">
        {mindset.cards.map((card, index) => {
          const Icon = icons[card.icon] ?? Search;

          return (
            <Reveal key={card.title} index={index} as="li">
              <article className="h-full rounded-xl border border-border bg-surface/60 p-6 transition-colors duration-300 hover:border-border-strong hover:bg-surface">
                <Icon aria-hidden="true" className="size-5 text-accent" />
                <h3 className="mt-4 text-base font-semibold tracking-tight">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {card.description}
                </p>
              </article>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
