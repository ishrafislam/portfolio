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
          title={mindset.heading}
          description={mindset.statement}
        />
      </Reveal>

      <ul className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        {mindset.cards.map((card, index) => {
          const Icon = icons[card.icon] ?? Search;

          return (
            <Reveal key={card.title} index={index} as="li">
              <article className="h-full border-t border-border pt-6">
                <Icon aria-hidden="true" className="size-5 text-accent" />
                <h3 className="mt-4 text-base font-semibold tracking-tight">
                  {card.title}
                </h3>
                <p className="mt-2 text-base leading-7 text-muted">
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
