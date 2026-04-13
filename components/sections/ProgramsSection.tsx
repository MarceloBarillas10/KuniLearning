'use client';

import Link from 'next/link';
import { useApp } from '@/lib/context';
import { SectionBadge } from '@/components/ui/SectionBadge';
import { BookOpen, FlaskConical, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';

export function ProgramsSection() {
  const { t } = useApp();

  const programs = [
    {
      icon: BookOpen,
      href: '/programs/sat-prep',
      color: 'from-blue-600 to-blue-800',
      glowColor: 'rgba(37, 99, 235, 0.3)',
      ...t.programs.sat,
    },
    {
      icon: FlaskConical,
      href: '/programs/science-fair',
      color: 'from-cyan-600 to-blue-700',
      glowColor: 'rgba(8, 145, 178, 0.3)',
      ...t.programs.science,
    },
    {
      icon: GraduationCap,
      href: '/programs/college-counseling',
      color: 'from-indigo-600 to-blue-800',
      glowColor: 'rgba(79, 70, 229, 0.3)',
      ...t.programs.college,
    },
  ];

  return (
    <section id="programs" className="py-24 dark:bg-kuni-black bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-kuni-blue/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionBadge className="mb-6">{t.programs.badge}</SectionBadge>
          <h2 className="font-display text-4xl sm:text-5xl font-bold dark:text-white text-kuni-navy mb-4">
            {t.programs.headline}
          </h2>
          <p className="max-w-2xl mx-auto dark:text-slate-400 text-slate-500 text-lg">
            {t.programs.subheadline}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((prog, i) => {
            const Icon = prog.icon;
            return (
              <article
                key={i}
                className="program-card glass-card light-mode-card rounded-3xl p-8 flex flex-col"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${prog.color} flex items-center justify-center mb-6 shadow-lg`}
                  style={{ boxShadow: `0 8px 24px ${prog.glowColor}` }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl font-bold dark:text-white text-kuni-navy mb-3">
                  {prog.title}
                </h3>
                <p className="dark:text-slate-400 text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                  {prog.desc}
                </p>

                {/* Features list */}
                <ul className="space-y-2 mb-8">
                  {prog.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-2.5 text-sm dark:text-slate-300 text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-kuni-accent mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={prog.href}
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-kuni-blue/15 hover:bg-kuni-blue text-kuni-blue-glow hover:text-white border border-kuni-blue/30 hover:border-kuni-blue rounded-xl font-medium text-sm transition-all duration-300"
                >
                  {prog.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </article>
            );
          })}
        </div>

        {/* Big CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 px-10 py-4 bg-kuni-blue hover:bg-kuni-blue-light text-white font-semibold rounded-xl text-lg transition-all duration-300 shadow-glow-blue hover:shadow-glow-accent hover:scale-105"
          >
            {t.nav.registerCta}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
