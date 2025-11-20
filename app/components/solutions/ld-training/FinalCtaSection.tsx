'use client';

import React, {useState} from 'react';
import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import {ArrowRight} from 'lucide-react';
import {GlowBadge} from '@/app/components/ui/glow-badge';

const FinalCtaSection: React.FC = () => {
  const t = useTranslations('Pages.SolutionsLDTraining');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: t('faq.0.question', {defaultMessage: 'What is micro content?'}),
      answer: t('faq.0.answer', {
        defaultMessage:
          'Micro content is short, focused training modules (2-5 minutes) designed for just-in-time learning. Improves completion rates and engagement compared to long-form training.',
      }),
    },
    {
      question: t('faq.1.question', {defaultMessage: 'How does segmentation work?'}),
      answer: t('faq.1.answer', {
        defaultMessage:
          'Segmentation allows you to assign different training content to different user groups based on role, department, risk level, or custom attributes. Ensures right content to right learners.',
      }),
    },
    {
      question: t('faq.2.question', {defaultMessage: 'Can we customize certificates?'}),
      answer: t('faq.2.answer', {
        defaultMessage:
          'Yes. Certificate templates are fully customizable. Add your branding, format, and specific information. Certificates generate automatically upon completion.',
      }),
    },
    {
      question: t('faq.3.question', {defaultMessage: 'What LMS platforms are supported?'}),
      answer: t('faq.3.answer', {
        defaultMessage:
          'Phishy integrates with major LMS platforms including Cornerstone, Workday, SAP SuccessFactors, Moodle, and more. Custom integrations available.',
      }),
    },
    {
      question: t('faq.4.question', {defaultMessage: 'How is training effectiveness measured?'}),
      answer: t('faq.4.answer', {
        defaultMessage:
          'Effectiveness is measured through completion rates, improvement scores, engagement metrics, and behavior change. Reports show training impact over time.',
      }),
    },
  ] as const;

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-0 left-0 h-96 w-96 -translate-x-1/3 -translate-y-1/3 rounded-full bg-gradient-to-br from-primary-600/15 to-secondary-600/15 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-to-br from-primary-600/15 to-secondary-600/15 blur-3xl" />

      <div className="relative z-10 container mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <GlowBadge variant="primary" className="px-4 py-1.5">
              FAQ&apos;s
            </GlowBadge>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-white/50">
                {t('cta.heading', {defaultMessage: 'Ready to take action?'})}
              </p>
              <h2 className="text-4xl font-semibold text-white lg:text-5xl">
                {t('cta.description', {
                  defaultMessage:
                    'Let\'s schedule your live demo. See how automated training tracking improves completion rates and engagement.',
                })}
              </h2>
              <p className="text-lg text-white/70">
                {t('cta.copy', {
                  defaultMessage:
                    'Learn how the process works with the frequently asked questions below. Contact us for additional details.',
                })}
              </p>
            </div>
            <div className="pt-4">
              <Link
                href="/request-demo"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 px-7 py-3 text-sm font-semibold uppercase tracking-wide shadow-lg shadow-primary-600/40 transition-transform duration-300 hover:scale-105"
              >
                <span>{t('cta.primary', {defaultMessage: 'Request Demo'})}</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.question}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 text-left backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-primary-900/20"
                >
                  <div className="flex items-center justify-between gap-6">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-white/40">Question</p>
                      <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                    </div>
                    <div
                      className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/30 transition-all duration-300 ${
                        openIndex === index ? 'rotate-45 border-primary-400 text-primary-300' : ''
                      }`}
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-96 pt-4 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-base text-white/70">{faq.answer}</p>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
