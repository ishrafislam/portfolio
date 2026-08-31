import Link from 'next/link';
import { experiences } from '@/data/experience';
import { getProject, hasCaseStudy } from '@/data/projects';
import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionHeading } from '@/components/ui/Section';

export function Experience() {
  return (
    <Section id="experience">
      <Reveal>
        <SectionHeading
          eyebrow="02 / Career"
          title="Experience"
          description="Eight years of QA and quality engineering across consumer, telecom and SaaS products."
        />
      </Reveal>

      <ol className="mt-12 relative border-l border-border">
        {experiences.map((experience, index) => (
          <Reveal
            key={experience.company}
            index={index}
            as="li"
            className="relative pb-14 pl-8 last:pb-0 sm:pl-10"
          >
            <span
              aria-hidden="true"
              className="absolute top-2 -left-[0.3125rem] size-2.5 rounded-full bg-accent ring-4 ring-background"
            />

            <p className="font-mono text-xs text-subtle">
              {experience.startDate} — {experience.endDate ?? 'Present'}
            </p>

            <h3 className="mt-2 text-xl font-semibold tracking-tight">
              {experience.company}
            </h3>
            <p className="mt-1 text-sm text-accent">{experience.role}</p>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
              {experience.description}
            </p>

            <ul className="mt-6 grid max-w-2xl gap-x-8 gap-y-2 sm:grid-cols-2">
              {experience.responsibilities.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-sm leading-relaxed text-muted"
                >
                  <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-border-strong" />
                  {item}
                </li>
              ))}
            </ul>

            {experience.projects.length > 0 ? (
              <div className="mt-7">
                <h4 className="font-mono text-xs tracking-[0.14em] text-subtle uppercase">
                  Projects
                </h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {experience.projects.map((slug) => {
                    const project = getProject(slug);
                    if (!project) return null;

                    const className =
                      'inline-flex items-center rounded-lg border border-border bg-surface/60 px-3 py-1.5 text-xs transition-colors hover:border-border-strong hover:bg-surface';

                    return (
                      <li key={slug}>
                        {hasCaseStudy(project) ? (
                          <Link href={`/projects/${project.slug}`} className={className}>
                            {project.name}
                          </Link>
                        ) : (
                          <span className={className}>{project.name}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : null}
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
