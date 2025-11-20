'use client';

export const runtime = 'edge';

import React, {useEffect, useState, Suspense} from 'react';
import {useTranslations} from 'next-intl';
import {useSearchParams} from 'next/navigation';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import {GlowBadge} from '@/app/components/ui/glow-badge';
import {Card, CardContent, CardTitle} from '@/components/ui/card';
import {useToast} from '../../components/ui/toast';
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip';
import {AlertCircle, ArrowRight} from 'lucide-react';

const SearchParamsHandler: React.FC<{onSourceChange: (source: string | null) => void}> = ({onSourceChange}) => {
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const source = searchParams.get('source');
    onSourceChange(source);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);
  
  return null;
};

const ContactForm: React.FC<{sourcePage: string | null}> = ({sourcePage}) => {
  const t = useTranslations('Pages.Contact');
  
  const title = t('title');
  const subtitle = t('subtitle', {defaultMessage: ''}) || undefined;
  const description = t('description', {defaultMessage: ''}) || undefined;
  const cardTitle = t('cardTitle', {defaultMessage: title}) || title;
  const cardDescriptionRaw = t('cardDescription', {
    defaultMessage: t('ctaPrompt', {defaultMessage: ''}),
  });
  const cardDescription = cardDescriptionRaw || undefined;
  const emailPlaceholder =
    t('emailPlaceholder', {defaultMessage: 'work.email@company.com'}) || 'work.email@company.com';
  const ctaLabel = t('cta.label', {defaultMessage: 'Gönder'});
  const {showToast} = useToast();

  const validationSchema = Yup.object({
    firstName: Yup.string().required('İsim gereklidir'),
    lastName: Yup.string().required('Soyisim gereklidir'),
    email: Yup.string()
      .required('Email gereklidir')
      .email('Geçerli bir email adresi giriniz'),
    phone: Yup.string(),
    company: Yup.string().required('Şirket adı gereklidir'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
    },
    validationSchema,
    onSubmit: async (values: {firstName: string; lastName: string; email: string; phone: string; company: string}) => {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...values,
            sourcePage: sourcePage || 'direct',
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          showToast(data.error || 'Bir hata oluştu. Lütfen tekrar deneyin.', 'error');
          return;
        }
      } catch (error: unknown) {
        showToast('Mesaj gönderilirken bir hata oluştu.', 'error');
        return;
      }
      showToast('Mesajınız gönderildi. En kısa sürede size dönüş yapacağız.', 'success');
      formik.resetForm();
    },
  });

  return (
    <section className="relative overflow-hidden pt-32 pb-24 min-h-screen">
      <div className="absolute inset-0">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050017] via-[#0a001f] to-[#050017]" />
        
        {/* Animated decorative lines */}
        <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="contactLineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(147, 51, 234, 0.3)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgba(147, 51, 234, 0.4)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="contactLineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgba(168, 85, 247, 0.4)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(147, 51, 234, 0.3)" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Animated curved lines */}
          <path
            d="M 0 200 Q 200 100, 400 200 T 800 200"
            fill="none"
            stroke="url(#contactLineGradient1)"
            strokeWidth="1.5"
            className="animate-draw-line-1"
            opacity="0.6"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 100 400 Q 300 300, 500 400 T 900 400"
            fill="none"
            stroke="url(#contactLineGradient2)"
            strokeWidth="1.5"
            className="animate-draw-line-2"
            opacity="0.5"
            vectorEffect="non-scaling-stroke"
          />
          
          {/* Animated diagonal lines */}
          <line
            x1="120"
            y1="0"
            x2="240"
            y2="800"
            stroke="rgba(147, 51, 234, 0.2)"
            strokeWidth="1"
            className="animate-draw-diagonal-1"
            vectorEffect="non-scaling-stroke"
          />
          <line
            x1="960"
            y1="0"
            x2="1080"
            y2="800"
            stroke="rgba(59, 130, 246, 0.2)"
            strokeWidth="1"
            className="animate-draw-diagonal-2"
            vectorEffect="non-scaling-stroke"
          />
          
          {/* Animated circles */}
          <circle
            cx="180"
            cy="160"
            r="3"
            fill="rgba(147, 51, 234, 0.4)"
            className="animate-pulse-glow"
          />
          <circle
            cx="1020"
            cy="240"
            r="4"
            fill="rgba(59, 130, 246, 0.4)"
            className="animate-pulse-glow"
            style={{animationDelay: '0.5s'}}
          />
          <circle
            cx="240"
            cy="560"
            r="2.5"
            fill="rgba(168, 85, 247, 0.4)"
            className="animate-pulse-glow"
            style={{animationDelay: '1s'}}
          />
          <circle
            cx="900"
            cy="640"
            r="3.5"
            fill="rgba(99, 102, 241, 0.4)"
            className="animate-pulse-glow"
            style={{animationDelay: '1.5s'}}
          />
        </svg>
        
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-1 h-1 bg-primary-400/40 rounded-full" />
        <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-secondary-400/40 rounded-full" />
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-primary-300/40 rounded-full" />
        <div className="absolute bottom-20 right-1/3 w-1.5 h-1.5 bg-secondary-300/40 rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-primary-500/40 rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-6">
          {subtitle ? (
            <div className="flex items-center justify-center">
              <GlowBadge variant="primary">
                {subtitle}
              </GlowBadge>
            </div>
          ) : null}
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl text-white">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg max-w-3xl mx-auto">
              {description}
            </p>
          ) : null}
        </div>

        {/* Main Content - Contact Form Card */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-2xl flex flex-col">
            {/* Card */}
            <Card className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 via-primary-500/5 to-secondary-500/3 shadow-xl shadow-black/40 backdrop-blur-xl flex flex-col">
              <CardContent className="flex flex-col gap-8 p-8 md:p-10 flex-1 justify-between">
                <div className="space-y-3">
                  <CardTitle className="text-2xl font-semibold md:text-3xl text-white">
                    {cardTitle}
                  </CardTitle>
              
                </div>

                <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="flex items-center gap-2 text-xs font-medium text-white/70 mb-2 justify-between">
                        <span>İsim <span className="text-primary-400">*</span></span>
                        {formik.touched.firstName && formik.errors.firstName && (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <AlertCircle className="h-3.5 w-3.5 text-red-400 cursor-help" />
                              </TooltipTrigger>
                              <TooltipContent className="bg-red-500/10 border-red-500/50 text-red-300">
                                <p>{formik.errors.firstName}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )}
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        disabled={formik.isSubmitting}
                        className={`w-full rounded-xl border px-5 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-white/[0.06] ${
                          formik.touched.firstName && formik.errors.firstName
                            ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/40'
                            : 'border-white/10 focus:border-primary-500 focus:ring-primary-500/40'
                        }`}
                        placeholder="İsim"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="flex items-center gap-2 text-xs font-medium text-white/70 mb-2 justify-between">
                        <span>Soyisim <span className="text-primary-400">*</span></span>
                        {formik.touched.lastName && formik.errors.lastName && (
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <AlertCircle className="h-3.5 w-3.5 text-red-400 cursor-help" />
                              </TooltipTrigger>
                              <TooltipContent className="bg-red-500/10 border-red-500/50 text-red-300">
                                <p>{formik.errors.lastName}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )}
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        disabled={formik.isSubmitting}
                        className={`w-full rounded-xl border px-5 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-white/[0.06] ${
                          formik.touched.lastName && formik.errors.lastName
                            ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/40'
                            : 'border-white/10 focus:border-primary-500 focus:ring-primary-500/40'
                        }`}
                        placeholder="Soyisim"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="flex items-center gap-2 text-xs font-medium text-white/70 mb-2 justify-between">
                     <span> Email <span className="text-primary-400">*</span></span>
                      {formik.touched.email && formik.errors.email && (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <AlertCircle className="h-3.5 w-3.5 text-red-400 cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent className="bg-red-500/10 border-red-500/50 text-red-300">
                              <p>{formik.errors.email}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      disabled={formik.isSubmitting}
                      placeholder={emailPlaceholder}
                      className={`w-full rounded-xl border px-5 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-white/[0.06] ${
                        formik.touched.email && formik.errors.email
                          ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/40'
                          : 'border-white/10 focus:border-primary-500 focus:ring-primary-500/40'
                      }`}
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="flex items-center gap-2 text-xs font-medium text-white/70 mb-2 justify-between">
                      <span> Telefon <span className="text-white/40 text-xs">(Opsiyonel)</span></span>   
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      disabled={formik.isSubmitting}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-5 py-3 text-sm text-white placeholder:text-white/40 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/40 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="+90 555 123 45 67"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="flex items-center gap-2 text-xs font-medium text-white/70 mb-2 justify-between">
<span>Şirket Adı <span className="text-primary-400">*</span></span>                        
                      {formik.touched.company && formik.errors.company && (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <AlertCircle className="h-3.5 w-3.5 text-red-400 cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent className="bg-red-500/10 border-red-500/50 text-red-300">
                              <p>{formik.errors.company}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      )}
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      required
                      value={formik.values.company}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      disabled={formik.isSubmitting}
                      className={`w-full rounded-xl border px-5 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-white/[0.06] ${
                        formik.touched.company && formik.errors.company
                          ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/40'
                          : 'border-white/10 focus:border-primary-500 focus:ring-primary-500/40'
                      }`}
                      placeholder="Şirket Adı"
                    />
                  </div>

                  <div className="group relative flex justify-end">
                    <button
                      type="submit"
                      disabled={formik.isSubmitting}
                      className="group/button relative"
                    >
                      <Card className="relative rounded-2xl border border-primary-500/50 bg-gradient-to-br from-white/8 via-white/5 to-white/3 shadow-lg shadow-primary-500/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/70 hover:shadow-lg hover:shadow-primary-500/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:-translate-y-0 disabled:hover:border-primary-500/50">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-semibold text-white/90 uppercase tracking-wide">
                              {formik.isSubmitting ? 'Gönderiliyor...' : ctaLabel}
                            </span>
                            <ArrowRight className="h-4 w-4 text-white/60 transition-transform duration-300 group-hover/button:translate-x-1" />
                          </div>
                        </CardContent>
                      </Card>
                    </button>
                  </div>
                  
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactPage: React.FC = () => {
  const [sourcePage, setSourcePage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />
      <Suspense fallback={<div className="min-h-screen" />}>
        <SearchParamsHandler onSourceChange={setSourcePage} />
        <ContactForm sourcePage={sourcePage} />
      </Suspense>
      <Footer />
    </main>
  );
};

export default ContactPage;
