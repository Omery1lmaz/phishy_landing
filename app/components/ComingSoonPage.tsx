'use client';

import React from 'react';

import {Link} from '@/i18n/routing';

import Footer from './Footer';
import Header from './Header';

export type SimplePageSection = {
  title: string;
  description: string;
  points?: string[];
};

export type SimplePageCta = {
  label: string;
  href: string;
};

interface ComingSoonPageProps {
  title: string;
  subtitle?: string;
  description?: string;
  sections?: SimplePageSection[];
  cta?: SimplePageCta;
}

const ComingSoonPage: React.FC<ComingSoonPageProps> = ({
  title,
  subtitle,
  description,
  sections,
  cta,
}) => {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#050505]" />
          <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-primary-600/10 blur-3xl" />
          <div className="absolute bottom-[-15%] right-[-10%] w-[42rem] h-[42rem] rounded-full bg-secondary-500/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(127,61,255,0.08),_transparent_55%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            {subtitle ? (
              <span className="inline-flex items-center justify-center px-4 py-2 mb-6 text-xs font-medium tracking-wide uppercase rounded-full bg-white/5 border border-white/10 text-white/80">
                {subtitle}
              </span>
            ) : null}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
              {title}
            </h1>
            {description ? (
              <p className="text-base md:text-lg text-white/70 leading-relaxed">
                {description}
              </p>
            ) : null}
            {cta && cta.href ? (
              <div className="mt-10 flex justify-center">
                {cta.href.startsWith('mailto:') || cta.href.startsWith('http') ? (
                  <a
                    href={cta.href}
                    className="group relative inline-flex items-center gap-3 px-8 py-3 rounded-xl bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 font-medium text-sm uppercase tracking-wider shadow-lg shadow-primary-600/40 transition-transform duration-300 hover:shadow-primary-600/60 hover:scale-[1.02]"
                  >
                    <span>{cta.label}</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0-4 4m4-4H3" />
                    </svg>
                  </a>
                ) : (
                  <Link
                    href={cta.href}
                    className="group relative inline-flex items-center gap-3 px-8 py-3 rounded-xl bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 font-medium text-sm uppercase tracking-wider shadow-lg shadow-primary-600/40 transition-transform duration-300 hover:shadow-primary-600/60 hover:scale-[1.02]"
                  >
                    <span>{cta.label}</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0-4 4m4-4H3" />
                    </svg>
                  </Link>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {sections && sections.length > 0 ? (
        <section className="relative py-16 md:py-24">
          <div className="absolute inset-0 bg-[#050505]" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/5 via-transparent to-transparent opacity-40" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/5 via-transparent to-transparent opacity-40" />
          <div className="absolute inset-0 bg-[linear-gradient(-45deg,rgba(127,61,255,0.06)_0%,transparent_45%,transparent_55%,rgba(59,130,246,0.06)_100%)] opacity-70" />

          <div className="relative z-10 container mx-auto px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sections.map((section) => (
                <article
                  key={section.title}
                  className="group relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-8 transition-all duration-300 hover:border-primary-500/40 hover:bg-white/[0.06]"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/0 via-primary-500/10 to-secondary-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative">
                    <h2 className="text-xl font-semibold mb-4 text-white">
                      {section.title}
                    </h2>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {section.description}
                    </p>
                    {section.points && section.points.length > 0 ? (
                      <ul className="mt-5 space-y-2">
                        {section.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2 text-sm text-white/70"
                          >
                            <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <Footer />
    </main>
  );
};

export default ComingSoonPage;

