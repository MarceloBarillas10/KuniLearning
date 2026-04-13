'use client';

import Link from 'next/link';
import { useApp } from '@/lib/context';
import { SectionBadge } from '@/components/ui/SectionBadge';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';

const posts = [
  {
    slug: 'sat-math-strategies-2024',
    tag: 'SAT Prep',
    tagColor: 'bg-blue-500/15 border-blue-500/30 text-blue-400',
    date: 'November 12, 2024',
    readTime: '7 min read',
    titleEn: '5 SAT Math Strategies That Actually Work in 2024',
    titleEs: '5 Estrategias de Matemáticas SAT que Realmente Funcionan en 2024',
    excerptEn: 'Most SAT math mistakes aren\'t mathematical — they\'re strategic. Discover the five approaches our top scorers use to gain an edge on test day.',
    excerptEs: 'La mayoría de los errores matemáticos en el SAT no son matemáticos — son estratégicos. Descubre los cinco enfoques que nuestros mejores estudiantes usan para ganar ventaja el día del examen.',
  },
  {
    slug: 'science-fair-topic-selection',
    tag: 'Science Fair',
    tagColor: 'bg-cyan-500/15 border-cyan-500/30 text-cyan-400',
    date: 'October 28, 2024',
    readTime: '9 min read',
    titleEn: 'How to Choose a Winning Science Fair Topic (A Judge\'s Perspective)',
    titleEs: 'Cómo Elegir un Tema Ganador de Feria de Ciencias (La Perspectiva de un Juez)',
    excerptEn: 'The topic you choose determines 40% of your score before you run a single experiment. Here\'s what science fair judges actually look for — straight from the judging table.',
    excerptEs: 'El tema que eliges determina el 40% de tu puntaje antes de realizar un solo experimento. Aquí está lo que los jueces realmente buscan — directo de la mesa de evaluación.',
  },
  {
    slug: 'college-application-timeline',
    tag: 'College Counseling',
    tagColor: 'bg-indigo-500/15 border-indigo-500/30 text-indigo-400',
    date: 'October 10, 2024',
    readTime: '11 min read',
    titleEn: 'The Definitive College Application Timeline for Puerto Rico Students',
    titleEs: 'El Cronograma Definitivo de Solicitudes Universitarias para Estudiantes de Puerto Rico',
    excerptEn: 'Month-by-month, from 9th grade to enrollment: exactly when to do what to maximize your chances at top universities — including FAFSA, CSS Profile, and scholarship deadlines.',
    excerptEs: 'Mes a mes, desde el 9.° grado hasta la inscripción: exactamente cuándo hacer qué para maximizar tus posibilidades en las mejores universidades.',
  },
  {
    slug: 'stem-career-pathways',
    tag: 'Career Guidance',
    tagColor: 'bg-purple-500/15 border-purple-500/30 text-purple-400',
    date: 'September 19, 2024',
    readTime: '8 min read',
    titleEn: 'STEM Careers That Don\'t Exist Yet (And How to Prepare for Them)',
    titleEs: 'Carreras STEM que Todavía No Existen (Y Cómo Prepararse para Ellas)',
    excerptEn: 'The fastest-growing STEM careers weren\'t in job boards 10 years ago. We break down the emerging fields your students should be positioning for right now.',
    excerptEs: 'Las carreras STEM de mayor crecimiento no estaban en bolsas de trabajo hace 10 años. Analizamos los campos emergentes para los que tus estudiantes deben posicionarse ahora.',
  },
  {
    slug: 'parents-guide-sat-prep',
    tag: 'SAT Prep',
    tagColor: 'bg-blue-500/15 border-blue-500/30 text-blue-400',
    date: 'September 5, 2024',
    readTime: '6 min read',
    titleEn: 'A Parent\'s Guide to SAT Prep: What You Should (and Shouldn\'t) Do',
    titleEs: 'Guía para Padres sobre la Preparación del SAT: Lo que Debes (y No Debes) Hacer',
    excerptEn: 'Parents play a critical role in SAT success — but the wrong kind of support can backfire. This guide explains exactly how to help without adding pressure.',
    excerptEs: 'Los padres juegan un papel crítico en el éxito del SAT — pero el tipo equivocado de apoyo puede ser contraproducente. Esta guía explica exactamente cómo ayudar sin añadir presión.',
  },
  {
    slug: 'research-methodology-high-school',
    tag: 'Science Fair',
    tagColor: 'bg-cyan-500/15 border-cyan-500/30 text-cyan-400',
    date: 'August 22, 2024',
    readTime: '10 min read',
    titleEn: 'Research Methodology 101: Teaching High Schoolers to Think Like Scientists',
    titleEs: 'Metodología de Investigación 101: Enseñar a los Estudiantes a Pensar como Científicos',
    excerptEn: 'Rigorous methodology is the single biggest differentiator between prize-winning and runner-up science fair projects. Here\'s how we teach it at Kuni.',
    excerptEs: 'La metodología rigurosa es el mayor diferenciador entre los proyectos ganadores y los segundos lugares en ferias de ciencias. Así es como lo enseñamos en Kuni.',
  },
];

export function BlogClient() {
  const { locale } = useApp();

  return (
    <main className="pt-20 dark:bg-kuni-black bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="relative py-20 dark:bg-kuni-navy-deep bg-white overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionBadge className="mb-6">
            {locale === 'en' ? 'Knowledge Hub' : 'Centro de Conocimiento'}
          </SectionBadge>
          <h1 className="font-display text-5xl sm:text-6xl font-black dark:text-white text-kuni-navy mb-6">
            {locale === 'en' ? 'Blog & Resources' : 'Blog y Recursos'}
          </h1>
          <p className="max-w-xl mx-auto text-lg dark:text-slate-300 text-slate-600">
            {locale === 'en'
              ? 'Expert insights on STEM education, SAT prep, science fairs, and college admissions — written by our faculty.'
              : 'Perspectivas expertas sobre educación STEM, preparación SAT, ferias de ciencias y admisiones universitarias — escrito por nuestro equipo.'}
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article
              key={i}
              className="program-card glass-card light-mode-card rounded-2xl overflow-hidden flex flex-col"
            >
              {/* Color bar */}
              <div className="h-1 bg-gradient-to-r from-kuni-blue to-kuni-accent" />

              <div className="p-6 flex flex-col flex-1">
                {/* Meta */}
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs px-2.5 py-1 rounded-full border font-mono ${post.tagColor}`}>
                    {post.tag}
                  </span>
                  <div className="flex items-center gap-1 text-xs dark:text-slate-500 text-slate-400">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>

                {/* Title */}
                <h2 className="font-display text-lg font-bold dark:text-white text-kuni-navy mb-3 leading-snug">
                  {locale === 'en' ? post.titleEn : post.titleEs}
                </h2>

                {/* Excerpt */}
                <p className="text-sm dark:text-slate-400 text-slate-500 leading-relaxed mb-5 flex-1">
                  {locale === 'en' ? post.excerptEn : post.excerptEs}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t dark:border-kuni-gray-line border-slate-100">
                  <div className="flex items-center gap-1.5 text-xs dark:text-slate-500 text-slate-400">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-kuni-blue-glow hover:text-kuni-accent transition-colors group"
                  >
                    {locale === 'en' ? 'Read More' : 'Leer Más'}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 dark:bg-kuni-navy-deep bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold dark:text-white text-kuni-navy mb-4">
            {locale === 'en' ? 'Stay Ahead of the Curve' : 'Mantente a la Vanguardia'}
          </h2>
          <p className="dark:text-slate-400 text-slate-500 mb-8">
            {locale === 'en'
              ? 'Get our monthly newsletter with STEM education insights, deadlines, and exclusive resources delivered straight to your inbox.'
              : 'Recibe nuestro boletín mensual con perspectivas sobre educación STEM, fechas límite y recursos exclusivos directo a tu correo.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder={locale === 'en' ? 'Your email address' : 'Tu correo electrónico'}
              className="flex-1 px-4 py-3 rounded-xl text-sm dark:bg-kuni-navy bg-white dark:border-kuni-gray-line border-slate-200 dark:text-slate-200 text-slate-700 dark:placeholder-slate-500 placeholder-slate-400 border focus:outline-none dark:focus:border-kuni-blue focus:border-kuni-blue"
            />
            <button className="px-6 py-3 bg-kuni-blue hover:bg-kuni-blue-light text-white font-semibold rounded-xl transition-all whitespace-nowrap">
              {locale === 'en' ? 'Subscribe' : 'Suscribirse'}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
