import type { Metadata } from 'next';
import { ScienceFairClient } from './ScienceFairClient';

export const metadata: Metadata = {
  title: 'Science Fair & Engineering Program',
  description:
    'From hypothesis to award-winning presentation. Kuni Learning Center mentors Puerto Rico students through the full science fair and engineering research lifecycle.',
  keywords: ['science fair Puerto Rico', 'engineering mentorship', 'ISEF preparation', 'STEM research students'],
};

export default function ScienceFairPage() {
  return <ScienceFairClient />;
}
