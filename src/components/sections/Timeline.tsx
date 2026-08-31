import { careerTimeline } from '@/data/timeline';
import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionHeading } from '@/components/ui/Section';

export function Timeline() {
  return (
    <Section>
      <Reveal>
        <SectionHeading eyebrow="10 / Timeline" title="Education & Career" />
      </Reveal>

      <ol className="mt-10 space-y-0">
        {careerTimeline.map((entry, index) => (
          <Reveal
            key={`${entry.year}-${entry.title}`}
            index={index % 3}
            as="li"
            className="grid gap-1 border-b border-border py-5 last:border-b-0 sm:grid-cols-[6rem_1fr] sm:gap-6"
          >
            <p className="font-mono text-sm text-accent tabular-nums">
              {entry.year}
            </p>
            <div>
              <p className="text-sm font-medium">{entry.title}</p>
              {entry.detail ? (
                <p className="mt-1 text-sm text-muted">{entry.detail}</p>
              ) : null}
              {entry.meta ? (
                <p className="mt-1 text-xs text-subtle">{entry.meta}</p>
              ) : null}
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
