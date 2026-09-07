import { impact } from '@/data/skills';
import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionHeading } from '@/components/ui/Section';

export function Impact() {
  return (
    <Section>
      <Reveal>
        <SectionHeading title="What That Adds Up To" />
      </Reveal>

      <ul className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2">
        {impact.map((item, index) => (
          <Reveal key={item.title} index={index % 2} as="li" className="bg-background p-6">
            <h3 className="text-xs text-accent">
              {item.title}
            </h3>
            <p className="mt-3 text-base leading-7 text-muted">
              {item.description}
            </p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
