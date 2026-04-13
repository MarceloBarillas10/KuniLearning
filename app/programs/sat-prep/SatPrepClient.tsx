'use client';

import Link from 'next/link';
import { useApp } from '@/lib/context';
import { SectionBadge } from '@/components/ui/SectionBadge';
import { CheckCircle2, ArrowRight, BookOpen, Clock, Users, Award } from 'lucide-react';

export function SatPrepClient() {
  const { t } = useApp();

  const features = [
    { icon: BookOpen, title: 'Personalized Curriculum', desc: 'Every student begins with a diagnostic test. We build your study plan around your unique strengths and gaps — not a generic syllabus.' },
    { icon: Clock, title: 'Flexible Scheduling', desc: 'In-person sessions in Puerto Rico and live online classes available 6 days a week. We work around your school schedule.' },
    { icon: Users, title: 'Small Group & 1-on-1', desc: 'Choose between focused private tutoring or collaborative small groups (max 6 students) for peer-driven learning.' },
    { icon: Award, title: 'Proven Results', desc: 'Our students average a 220-point improvement. Our top performers have achieved perfect 800 section scores.' },
  ];

  const included = [
    'Full diagnostic assessment',
    'Personalized study roadmap',
    '10 full-length timed practice tests',
    'Math & Evidence-Based Reading/Writing modules',
    'Weekly 1-on-1 progress review',
    'Score analytics dashboard',
    'Parent progress reports',
    'College application test strategy session',
  ];

  return (
    <main className="pt-20 dark:bg-kuni-black bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="relative py-20 dark:bg-kuni-navy-deep bg-white overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-kuni-blue/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionBadge className="mb-6">{t.programs.badge}</SectionBadge>
          <h1 className="font-display text-5xl sm:text-6xl font-black dark:text-white text-kuni-navy mb-6">
            {t.programs.sat.title}
          </h1>
          <p className="max-w-2xl mx-auto text-lg dark:text-slate-300 text-slate-600 mb-10 leading-relaxed">
            {t.programs.sat.desc}
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
              className="inline-flex items-center justify-center gap-2 px-8 py-4 dark:bg-white/5 bg-slate-100 dark:text-white text-kuni-navy font-semibold rounded-xl transition-all duration-300"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold dark:text-white text-kuni-navy text-center mb-12">
          The Kuni SAT Advantage
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="glass-card light-mode-card rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl bg-kuni-blue/15 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-kuni-blue-glow" />
                </div>
                <h3 className="font-semibold dark:text-white text-kuni-navy mb-2">{f.title}</h3>
                <p className="text-sm dark:text-slate-400 text-slate-500 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 dark:bg-kuni-navy-deep bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold dark:text-white text-kuni-navy mb-4">
            Everything Included
          </h2>
          <p className="dark:text-slate-400 text-slate-500 mb-10">No hidden fees. No add-ons. Everything you need to maximize your score.</p>
          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {included.map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 glass-card light-mode-card rounded-xl text-left">
                <CheckCircle2 className="w-5 h-5 text-kuni-accent shrink-0" />
                <span className="text-sm dark:text-slate-300 text-slate-600">{item}</span>
              </div>
            ))}
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-kuni-blue hover:bg-kuni-blue-light text-white font-semibold rounded-xl transition-all duration-300 shadow-glow-blue"
          >
            Start Your SAT Journey <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
