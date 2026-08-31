import { ArrowUpRight } from 'lucide-react';
import { personalProjects } from '@/data/personal';
import { Reveal } from '@/components/ui/Reveal';
import { Section, SectionHeading } from '@/components/ui/Section';
import { Tag } from '@/components/ui/Tag';

export function PersonalProjects() {
  return (
    <Section className="bg-surface/40">
      <Reveal>
        <SectionHeading
          eyebrow="08 / Side Work"
          title="Things I Build"
          description="Products I design and build myself — testing is how I think about software, but building is how I understand it."
        />
      </Reveal>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {personalProjects.map((project, index) => (
          <Reveal key={project.name} index={index} as="li">
            <article className="flex h-full flex-col rounded-xl border border-border bg-background p-6 transition-colors duration-300 hover:border-border-strong">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {project.name}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-accent">
                    {project.kind}
                  </p>
                </div>
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`Visit ${project.name}`}
                    className="text-subtle transition-colors hover:text-accent"
                  >
                    <ArrowUpRight aria-hidden="true" className="size-4" />
                  </a>
                ) : null}
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag}>
                    <Tag>{tag}</Tag>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
