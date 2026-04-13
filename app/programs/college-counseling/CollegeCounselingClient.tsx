'use client';

import Link from 'next/link';
import { useApp } from '@/lib/context';
import { SectionBadge } from '@/components/ui/SectionBadge';
import { ArrowRight, CheckCircle2, GraduationCap, Map, FileText, DollarSign } from 'lucide-react';

export function CollegeCounselingClient() {
  const { t } = useApp();

  const pillars = [
    { icon: Map, title: '4-Year Academic Roadmap', desc: 'We build a strategic plan from freshman year: course selection, extracurriculars, leadership, research, and test timelines — all tailored to target universities.' },
    { icon: GraduationCap, title: 'Application Strategy', desc: 'College selection, positioning, and differentiation. We help students build a balanced list and craft an application narrative that stands out in elite applicant pools.' },
    { icon: FileText, title: 'Essay Coaching', desc: 'Every essay undergoes multiple rounds of professional review. We don\'t write it for you — we help your authentic voice reach its highest potential.' },
    { icon: DollarSign, title: 'Financial Aid & Scholarships', desc: 'We demystify FAFSA, CSS Profile, and merit scholarships. Puerto Rico students have access to unique funding opportunities — we find every dollar.' },
  ];

  const destinations = [
    'MIT', 'Stanford', 'Johns Hopkins', 'Cornell', 'NYU', 'UF',
    'Georgia Tech', 'Carnegie Mellon', 'UPR', 'UPRM', 'Boston University', 'Northeastern',
  ];

  return (
    <main className="pt-20 dark:bg-kuni-black bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="relative py-20 dark:bg-kuni-navy-deep bg-white overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionBadge className="mb-6">{t.programs.badge}</SectionBadge>
          <h1 className="font-display text-5xl sm:text-6xl font-black dark:text-white text-kuni-navy mb-6">
            {t.programs.college.title}
          </h1>
          <p className="max-w-2xl mx-auto text-lg dark:text-slate-300 text-slate-600 mb-10 leading-relaxed">
            {t.programs.college.desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-kuni-blue hover:bg-kuni-blue-light text-white font-semibold rounded-xl transition-all duration-300 shadow-glow-blue hover:scale-105"
            >
              {t.nav.registerCta} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 dark:bg-white/5 bg-slate-100 dark:text-white text-kuni-navy font-semibold rounded-xl transition-all"
            >
              Free Strategy Session
            </Link>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold dark:text-white text-kuni-navy text-center mb-12">
          Four Pillars of College Success
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div key={i} className="glass-card light-mode-card rounded-2xl p-8 group hover:border-kuni-blue/40 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-kuni-blue/15 flex items-center justify-center mb-5 group-hover:bg-kuni-blue/25 transition-colors">
                  <Icon className="w-6 h-6 text-kuni-blue-glow" />
                </div>
                <h3 className="font-display text-xl font-bold dark:text-white text-kuni-navy mb-3">{pillar.title}</h3>
                <p className="dark:text-slate-400 text-slate-500 leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* University Destinations */}
      <section className="py-20 dark:bg-kuni-navy-deep bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold dark:text-white text-kuni-navy mb-4">
            Where Our Students Land
          </h2>
          <p className="dark:text-slate-400 text-slate-500 mb-10">A snapshot of universities where Kuni students have been accepted.</p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {destinations.map((uni, i) => (
              <span
                key={i}
                className="px-4 py-2 glass-card light-mode-card rounded-full text-sm font-semibold dark:text-slate-300 text-slate-600 border dark:border-kuni-gray-line border-slate-200"
              >
                {uni}
              </span>
            ))}
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-kuni-blue hover:bg-kuni-blue-light text-white font-semibold rounded-xl transition-all duration-300 shadow-glow-blue"
          >
            Build Your College Strategy <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
