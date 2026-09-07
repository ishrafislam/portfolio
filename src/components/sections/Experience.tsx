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
          title="Experience"
          description="Eight years of QA and quality engineering across consumer, telecom and SaaS products."
        />
      </Reveal>

      <ol className="mt-10">
        {experiences.map((experience, index) => (
          <Reveal
            key={experience.company}
            index={index}
            as="li"
            className="grid gap-4 border-t border-border py-8 md:grid-cols-[12rem_1fr] md:gap-10"
          >
            <p className="pt-1 text-sm text-muted">
              {experience.startDate} — {experience.endDate ?? 'Present'}
            </p>

            <div>
              <h3 className="mt-2 text-xl font-semibold tracking-tight">
                {experience.company}
              </h3>
              <p className="mt-1 text-sm text-accent">{experience.role}</p>

              <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
                {experience.description}
              </p>

              <ul className="mt-6 grid max-w-2xl gap-2">
                {experience.responsibilities.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-base leading-7 text-muted"
                  >
                    <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-border-strong" />
                    {item}
                  </li>
                ))}
              </ul>

              {experience.projects.length > 0 ? (
                <div className="mt-7">
                  <h4 className="text-xs text-subtle">
                    Projects
                  </h4>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {experience.projects.map((slug) => {
                      const project = getProject(slug);
                      if (!project) return null;

                      const className =
                        'inline-flex min-h-11 items-center rounded-lg border border-border bg-surface/60 px-3 py-2 text-sm';

                      return (
                        <li key={slug}>
                          {hasCaseStudy(project) ? (
                            <Link href={`/projects/${project.slug}`} className={`${className} text-accent hover:bg-accent-soft`}>
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
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
