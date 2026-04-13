import type { Metadata } from 'next';
import { CollegeCounselingClient } from './CollegeCounselingClient';

export const metadata: Metadata = {
  title: 'College Counseling Program',
  description:
    'Ivy-caliber college counseling in Puerto Rico. Strategic planning from 9th grade through enrollment. MIT, Stanford, Johns Hopkins — our students get in.',
  keywords: ['college counseling Puerto Rico', 'college admissions help', 'Ivy League prep Puerto Rico', 'college application essay help'],
};

export default function CollegeCounselingPage() {
  return <CollegeCounselingClient />;
}
