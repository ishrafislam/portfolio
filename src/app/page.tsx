import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Expertise } from '@/components/sections/Expertise';
import { TechStack } from '@/components/sections/TechStack';
import { Philosophy } from '@/components/sections/Philosophy';
import { Mindset } from '@/components/sections/Mindset';
import { PersonalProjects } from '@/components/sections/PersonalProjects';
import { Impact } from '@/components/sections/Impact';
import { Timeline } from '@/components/sections/Timeline';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Expertise />
      <TechStack />
      <Philosophy />
      <Mindset />
      <PersonalProjects />
      <Impact />
      <Timeline />
      <Contact />
    </>
  );
}
