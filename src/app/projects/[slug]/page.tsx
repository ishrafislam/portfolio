import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { getProject, hasCaseStudy, projects } from '@/data/projects';
import { Reveal } from '@/components/ui/Reveal';
import { Tag } from '@/components/ui/Tag';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects
    .filter(hasCaseStudy)
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  const title = `${project.name} — ${project.kind}`;

  return {
    title: project.name,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title, description: project.description, type: 'article' },
    twitter: { card: 'summary', title, description: project.description },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project || !hasCaseStudy(project)) notFound();

  const facts = [
    { label: 'Role', value: project.role },
    { label: 'Domain', value: project.domain.join(', ') },
    { label: 'Platforms', value: project.platforms.join(' · ') },
    project.company ? { label: 'Company', value: project.company } : null,
    project.caseStudy?.duration
      ? { label: 'Duration', value: project.caseStudy.duration }
      : null,
  ].filter((fact): fact is { label: string; value: string } => fact !== null);

  return (
    <article className="px-6 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto w-full max-w-3xl">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 font-mono text-xs text-subtle transition-colors hover:text-foreground"
        >
          <ArrowLeft
            aria-hidden="true"
            className="size-3.5 transition-transform duration-300 group-hover:-translate-x-0.5"
          />
          All projects
        </Link>

        <Reveal className="mt-10">
          <p className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
            {project.kind}
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            {project.name}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {project.description}
          </p>
        </Reveal>

        <Reveal index={1} as="dl" className="mt-10 grid gap-5 border-y border-border py-7 sm:grid-cols-2">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt className="font-mono text-xs tracking-[0.14em] text-subtle uppercase">
                {fact.label}
              </dt>
              <dd className="mt-2 text-sm">{fact.value}</dd>
            </div>
          ))}
        </Reveal>

        <div className="mt-14 space-y-14">
          {project.caseStudy?.sections.map((section, index) => (
            <Reveal key={section.heading} index={index % 3} as="section">
              <h2 className="text-xl font-semibold tracking-tight">
                {section.heading}
              </h2>

              {section.body ? (
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {section.body}
                </p>
              ) : null}

              {section.bullets ? (
                <ul className="mt-5 space-y-2.5">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm leading-relaxed text-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1 shrink-0 rounded-full bg-accent"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              ) : null}
            </Reveal>
          ))}

          <Reveal as="section">
            <h2 className="text-xl font-semibold tracking-tight">
              Testing Areas
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {project.testingAreas.map((area) => (
                <li key={area}>
                  <Tag variant="accent">{area}</Tag>
                </li>
              ))}
            </ul>
          </Reveal>

          {project.technologies ? (
            <Reveal as="section">
              <h2 className="text-xl font-semibold tracking-tight">
                Technical Environment
              </h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <li key={technology}>
                    <Tag>{technology}</Tag>
                  </li>
                ))}
              </ul>
            </Reveal>
          ) : null}
        </div>

        <Reveal className="mt-16 border-t border-border pt-8">
          <Link
            href="/#contact"
            className="text-sm font-medium text-accent transition-opacity hover:opacity-80"
          >
            Want the detail behind this work? Get in touch →
          </Link>
        </Reveal>
      </div>
    </article>
  );
}
