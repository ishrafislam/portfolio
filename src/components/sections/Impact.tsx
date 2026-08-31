import { impact } from '@/data/skills';
import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionHeading } from '@/components/ui/Section';

export function Impact() {
  return (
    <Section>
      <Reveal>
        <SectionHeading eyebrow="09 / Impact" title="What That Adds Up To" />
      </Reveal>

      <ul className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
        {impact.map((item, index) => (
          <Reveal key={item.title} index={index % 2} as="li" className="bg-background p-6">
            <h3 className="font-mono text-xs tracking-[0.14em] text-accent uppercase">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {item.description}
            </p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
