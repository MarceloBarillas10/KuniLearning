'use client';

import Link from 'next/link';
import { useApp } from '@/lib/context';
import { SectionBadge } from '@/components/ui/SectionBadge';
import { FlaskConical, ArrowRight, CheckCircle2, Microscope, BarChart2, PresentationIcon, Lightbulb } from 'lucide-react';

export function ScienceFairClient() {
  const { t } = useApp();

  const phases = [
    { icon: Lightbulb, step: '01', title: 'Topic & Hypothesis', desc: 'We help students identify a research question that is original, feasible, and aligned with their passions — the foundation of every great project.' },
    { icon: FlaskConical, step: '02', title: 'Experimental Design', desc: 'Our mentors guide the design of rigorous, reproducible experiments following the scientific method and fair testing principles.' },
    { icon: Microscope, step: '03', title: 'Data Collection & Analysis', desc: 'Students collect real data and use age-appropriate statistical tools to draw meaningful, evidence-based conclusions.' },
    { icon: BarChart2, step: '04', title: 'Visualization & Reporting', desc: 'We teach professional data visualization and written reporting skills, including abstract writing for science fair submissions.' },
    { icon: PresentationIcon, step: '05', title: 'Presentation Mastery', desc: 'Every student undergoes mock judging sessions with feedback from actual STEM professionals before competition day.' },
  ];

  return (
    <main className="pt-20 dark:bg-kuni-black bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="relative py-20 dark:bg-kuni-navy-deep bg-white overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionBadge className="mb-6">{t.programs.badge}</SectionBadge>
          <h1 className="font-display text-5xl sm:text-6xl font-black dark:text-white text-kuni-navy mb-6">
            {t.programs.science.title}
          </h1>
          <p className="max-w-2xl mx-auto text-lg dark:text-slate-300 text-slate-600 mb-10 leading-relaxed">
            {t.programs.science.desc}
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-kuni-blue hover:bg-kuni-blue-light text-white font-semibold rounded-xl transition-all duration-300 shadow-glow-blue hover:scale-105"
          >
            {t.nav.registerCta} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold dark:text-white text-kuni-navy text-center mb-4">
          The Research Lifecycle
        </h2>
        <p className="text-center dark:text-slate-400 text-slate-500 mb-12 max-w-xl mx-auto">
          We walk alongside students through every phase of the scientific process, from first idea to final award.
        </p>
        <div className="space-y-4">
          {phases.map((phase, i) => {
            const Icon = phase.icon;
            return (
              <div key={i} className="glass-card light-mode-card rounded-2xl p-6 flex items-start gap-6 group hover:border-kuni-blue/40 transition-all duration-300">
                <div className="font-mono text-3xl font-black text-kuni-blue/30 group-hover:text-kuni-blue/50 transition-colors w-12 shrink-0">
                  {phase.step}
                </div>
                <div className="w-10 h-10 rounded-xl bg-kuni-blue/15 flex items-center justify-center shrink-0 group-hover:bg-kuni-blue/25 transition-colors">
                  <Icon className="w-5 h-5 text-kuni-blue-glow" />
                </div>
                <div>
                  <h3 className="font-semibold dark:text-white text-kuni-navy mb-1">{phase.title}</h3>
                  <p className="text-sm dark:text-slate-400 text-slate-500 leading-relaxed">{phase.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Competitions */}
      <section className="py-20 dark:bg-kuni-navy-deep bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold dark:text-white text-kuni-navy mb-4">
            Where Our Students Compete
          </h2>
          <p className="dark:text-slate-400 text-slate-500 mb-10">We prepare students for the full spectrum of science competition — from school-level to international stages.</p>
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {['Puerto Rico Science Fair', 'Intel ISEF', 'Regeneron STS', 'Google Science Fair', 'JSHS', 'Regional STEM Olympiads'].map((comp, i) => (
              <div key={i} className="flex items-center gap-2 p-4 glass-card light-mode-card rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-kuni-accent shrink-0" />
                <span className="text-sm dark:text-slate-300 text-slate-600 font-medium">{comp}</span>
              </div>
            ))}
          </div>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-kuni-blue hover:bg-kuni-blue-light text-white font-semibold rounded-xl transition-all duration-300 shadow-glow-blue"
          >
            Start Your Research Journey <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
