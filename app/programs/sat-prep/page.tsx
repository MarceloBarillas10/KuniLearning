import type { Metadata } from 'next';
import { SatPrepClient } from './SatPrepClient';

export const metadata: Metadata = {
  title: 'SAT Preparation Program',
  description:
    'Achieve 200+ point SAT score improvement with Kuni Learning Center\'s diagnostic-first, personalized SAT prep in Puerto Rico and online.',
  keywords: ['SAT prep Puerto Rico', 'SAT tutoring', 'SAT score improvement', 'SAT prep online'],
};

export default function SatPrepPage() {
  return <SatPrepClient />;
}
