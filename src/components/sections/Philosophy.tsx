import { philosophy } from '@/data/site';
import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionHeading } from '@/components/ui/Section';

export function Philosophy() {
  return (
    <Section className="bg-surface/40">
      <Reveal>
        <SectionHeading title={philosophy.heading} />
      </Reveal>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
        <div>
          <Reveal index={1} as="p" className="text-xl leading-snug font-medium tracking-tight sm:text-2xl">
            {philosophy.statement}
          </Reveal>
          <Reveal index={2} as="p" className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            {philosophy.supporting}
          </Reveal>
        </div>

        <Reveal index={2}>
          <ol className="space-y-2">
            {philosophy.steps.map((step, index) => (
              <li key={step} className="flex items-center gap-4">
                <span className="w-6 text-xs text-subtle tabular-nums">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="flex-1 border-b border-border py-2.5 text-base">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </Section>
  );
}
