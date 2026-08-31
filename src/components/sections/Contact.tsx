import { contact, site } from '@/data/site';
import { Reveal } from '@/components/ui/Reveal';
import { Section } from '@/components/ui/Section';
import { SocialLinks } from '@/components/ui/SocialLinks';

export function Contact() {
  return (
    <Section id="contact" className="bg-surface/40">
      <div className="max-w-2xl">
        <Reveal as="p" className="font-mono text-xs tracking-[0.18em] text-accent uppercase">
          11 / Contact
        </Reveal>

        <Reveal index={1} as="h2" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          {contact.heading}
        </Reveal>

        <Reveal index={2} as="p" className="mt-5 text-base leading-relaxed text-muted">
          {contact.copy}
        </Reveal>

        <Reveal index={3} className="mt-9">
          <SocialLinks variant="button" />
        </Reveal>

        <Reveal index={4} as="p" className="mt-6 font-mono text-sm text-subtle">
          {site.email}
        </Reveal>
      </div>
    </Section>
  );
}
