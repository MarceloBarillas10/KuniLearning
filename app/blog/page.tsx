import type { Metadata } from 'next';
import { BlogClient } from './BlogClient';

export const metadata: Metadata = {
  title: 'Blog & Resources',
  description:
    'Expert STEM education insights, SAT strategies, science fair guides, and college admissions advice from the Kuni Learning Center team.',
  keywords: ['STEM blog Puerto Rico', 'SAT tips', 'science fair guide', 'college admissions blog'],
};

export default function BlogPage() {
  return <BlogClient />;
}
