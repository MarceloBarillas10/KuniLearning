import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProgramsSection } from '@/components/sections/ProgramsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ResourcesSection } from '@/components/sections/ResourcesSection';
import { ContactSection } from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  title: 'Kuni Learning Center | Elite STEM Education in Puerto Rico',
  description:
    "Puerto Rico's premier STEM academy — SAT prep, science fair mentorship, and Ivy-caliber college counseling for students who refuse to be ordinary.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <TestimonialsSection />
      <ResourcesSection />
      <ContactSection />
    </>
  );
}
