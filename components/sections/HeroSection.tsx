'use client';

import Link from 'next/link';
import { useApp } from '@/lib/context';
import { ArrowRight, ChevronDown } from 'lucide-react';

export function HeroSection() {
  const { t } = useApp();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden dark:bg-kuni-black bg-slate-50"
    >
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Blue glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-kuni-blue/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-kuni-accent/10 rounded-full blur-3xl pointer-events-none" />

      {/* Animated circuit lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
          <line x1="0" y1="200" x2="1440" y2="200" stroke="#0047AB" strokeWidth="0.5" strokeDasharray="8 16"/>
          <line x1="0" y1="500" x2="1440" y2="500" stroke="#0047AB" strokeWidth="0.5" strokeDasharray="8 16"/>
          <line x1="200" y1="0" x2="200" y2="900" stroke="#0047AB" strokeWidth="0.5" strokeDasharray="8 16"/>
          <line x1="1240" y1="0" x2="1240" y2="900" stroke="#0047AB" strokeWidth="0.5" strokeDasharray="8 16"/>
          <circle cx="200" cy="200" r="4" fill="#00D4FF" opacity="0.6"/>
          <circle cx="1240" cy="500" r="4" fill="#00D4FF" opacity="0.6"/>
          <circle cx="200" cy="500" r="2" fill="#0047AB" opacity="0.8"/>
          <circle cx="1240" cy="200" r="2" fill="#0047AB" opacity="0.8"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-medium uppercase tracking-widest bg-kuni-blue/10 border border-kuni-blue/30 text-kuni-blue-glow mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-kuni-accent animate-pulse" />
          {t.hero.badge}
          <span className="w-1.5 h-1.5 rounded-full bg-kuni-accent animate-pulse" />
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-6 animate-slide-up">
          <span className="dark:text-white text-kuni-navy">{t.hero.headline1}</span>
          <br />
          <span className="gradient-text">{t.hero.headline2}</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl dark:text-slate-300 text-slate-600 leading-relaxed mb-10 animate-fade-in">
          {t.hero.subheadline}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="/#programs"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-kuni-blue hover:bg-kuni-blue-light text-white font-semibold rounded-xl transition-all duration-300 shadow-glow-blue hover:shadow-glow-accent hover:scale-105"
          >
            {t.hero.cta1}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 dark:bg-white/5 bg-slate-200/80 dark:hover:bg-white/10 hover:bg-slate-300/80 dark:text-white text-kuni-navy font-semibold rounded-xl transition-all duration-300 dark:border border-white/10"
          >
            {t.hero.cta2}
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          {[
            { value: t.hero.stat1, label: t.hero.stat1Label },
            { value: t.hero.stat2, label: t.hero.stat2Label },
            { value: t.hero.stat3, label: t.hero.stat3Label },
          ].map((stat, i) => (
            <div
              key={i}
              className="stat-item glass-card rounded-2xl p-4 sm:p-6 text-center"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="font-display text-3xl sm:text-4xl font-black gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm dark:text-slate-400 text-slate-500 font-medium leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 dark:text-slate-500 text-slate-400 hover:text-kuni-accent transition-colors group"
      >
        <span className="text-xs font-mono tracking-wider uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform animate-bounce" />
      </a>
    </section>
  );
}
