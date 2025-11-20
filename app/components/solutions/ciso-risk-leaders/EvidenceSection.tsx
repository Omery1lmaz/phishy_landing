'use client';

import React from 'react';
import {useTranslations} from 'next-intl';
import {Card, CardContent} from '@/components/ui/card';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Kurulum süresi ve veri güvenliği nasıl?',
    answer:
      'Kurulum süresi organizasyonunuzun büyüklüğüne göre değişir. Verileriniz tamamen güvende, on-premise seçeneği mevcuttur.',
  },
  {
    question: 'Hangi entegrasyonlar mevcut (M365/Google/Exchange)?',
    answer: 'M365, Google Workspace ve Exchange entegrasyonları mevcuttur. Ayrıntılar için demo talep edin.',
  },
  {
    question: 'Uyum kanıt paketinde neler yer alır?',
    answer: 'ISO/NIST/KVKK haritalama, kanıt paketleri (PDF/CSV) ve denetim izi dahildir.',
  },
  {
    question: 'Eğitim içeriğini özelleştirebilir miyiz?',
    answer: 'Evet, eğitim içeriklerini tamamen özelleştirebilir ve kendi markanızla sunabilirsiniz.',
  },
  {
    question: 'Lisanslama ve destek modeli nedir?',
    answer: 'Esnek lisanslama seçenekleri ve 7/24 destek hizmeti sunuyoruz. Detaylar için iletişime geçin.',
  },
] as const;

const EvidenceSection: React.FC = () => {
  const t = useTranslations('Pages.SolutionsCISO');

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="relative z-10 container mx-auto max-w-6xl px-6">
       {/*  <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {t('evidence.heading', {defaultMessage: 'Kanıt & SSS'})}
          </h2>
        </div>

        <div className="mb-12">
          <Card className="border-white/10 bg-white/5 backdrop-blur-xl">
            <CardContent className="p-8">
              <blockquote className="text-lg italic text-white/80">
                &ldquo;İlk 90 günde click rate&apos;i %x&apos;ten %y&apos;ye indirdik; triage süremiz dakikalar seviyesine düştü.&rdquo;
              </blockquote>
              <p className="mt-4 text-sm text-white/60">— CISO, Fortune 500 Şirketi</p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center">Güvenilen Markalar</h3>
          <div className="grid grid-cols-4 gap-4 opacity-60">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-16 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <span className="text-xs text-white/40">Logo {i}</span>
              </div>
            ))}
          </div>
        </div> */}

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item, index) => (
            <AccordionItem
              key={item.question}
              value={`item-${index}`}
              className="border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl mb-4 px-6"
            >
              <AccordionTrigger className="text-white hover:text-primary-300">{item.question}</AccordionTrigger>
              <AccordionContent className="text-white/70">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default EvidenceSection;


