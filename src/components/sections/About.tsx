import { about } from '@/data/site';
import { experiences } from '@/data/experience';
import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionHeading } from '@/components/ui/Section';

export function About() {
  return (
    <Section id="about">
      <Reveal>
        <SectionHeading title={about.heading} />
      </Reveal>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-5">
          {about.paragraphs.map((paragraph, index) => (
            <Reveal key={paragraph} index={index} as="p" className="text-base leading-relaxed text-muted">
              {paragraph}
            </Reveal>
          ))}
        </div>

        <Reveal index={1}>
          <ol className="relative border-l border-border pl-6">
            {experiences
              .slice()
              .reverse()
              .map((experience) => (
                <li key={experience.company} className="relative pb-8 last:pb-0">
                  <span
                    aria-hidden="true"
                    className="absolute top-1.5 -left-[1.8125rem] size-2 rounded-full bg-border-strong ring-4 ring-background"
                  />
                  <p className="text-xs text-accent">
                    {experience.startDate.split(' ')[1]}
                  </p>
                  <p className="mt-1 text-sm font-medium">{experience.company}</p>
                </li>
              ))}
            <li className="relative">
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-[1.8125rem] size-2 rounded-full bg-accent ring-4 ring-background"
              />
              <p className="text-xs text-accent">Present</p>
              <p className="mt-1 text-sm font-medium">Software QA Engineer</p>
            </li>
          </ol>
        </Reveal>
      </div>
    </Section>
  );
}
