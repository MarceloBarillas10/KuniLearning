'use client';

import { useApp } from '@/lib/context';
import { SectionBadge } from '@/components/ui/SectionBadge';
import { Target, Microscope, TrendingUp, Globe } from 'lucide-react';

const icons = [Target, Microscope, TrendingUp, Globe];

export function AboutSection() {
  const { t } = useApp();
  const values = [
    { title: t.about.value1Title, desc: t.about.value1Desc },
    { title: t.about.value2Title, desc: t.about.value2Desc },
    { title: t.about.value3Title, desc: t.about.value3Desc },
    { title: t.about.value4Title, desc: t.about.value4Desc },
  ];

  return (
    <section id="about" className="py-24 dark:bg-kuni-navy-deep bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l dark:from-kuni-blue/5 from-kuni-blue/3 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <div>
            <SectionBadge className="mb-6">{t.about.badge}</SectionBadge>
            <h2 className="font-display text-4xl sm:text-5xl font-bold dark:text-white text-kuni-navy leading-tight mb-6">
              {t.about.headline}
            </h2>
            <div className="space-y-4 text-lg dark:text-slate-300 text-slate-600 leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>

            {/* Decorative accent line */}
            <div className="mt-8 flex items-center gap-4">
              <div className="h-0.5 w-12 bg-gradient-to-r from-kuni-blue to-kuni-accent" />
              <span className="text-sm font-mono text-kuni-blue-glow uppercase tracking-wider">Kuni Learning Center</span>
            </div>
          </div>

          {/* Right: Values grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((val, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={i}
                  className="glass-card light-mode-card rounded-2xl p-6 group hover:border-kuni-blue/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-kuni-blue/15 flex items-center justify-center mb-4 group-hover:bg-kuni-blue/25 transition-colors">
                    <Icon className="w-5 h-5 text-kuni-blue-glow" />
                  </div>
                  <h3 className="font-semibold dark:text-white text-kuni-navy mb-2 text-sm">
                    {val.title}
                  </h3>
                  <p className="text-sm dark:text-slate-400 text-slate-500 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
