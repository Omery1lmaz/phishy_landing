'use client';

export const runtime = 'edge';

import React from 'react';
import {useTranslations} from 'next-intl';

import ComingSoonPage, {
  SimplePageCta,
  SimplePageSection,
} from '../../components/ComingSoonPage';

const HowItWorksPage: React.FC = () => {
  const t = useTranslations('Pages.HowItWorks');
  const subtitle = t('subtitle', {defaultMessage: ''}) || undefined;
  const description = t('description', {defaultMessage: ''}) || undefined;
  const sections = (t.raw('sections') as SimplePageSection[] | undefined) ?? [];
  const cta = (t.raw('cta') as SimplePageCta | undefined) ?? undefined;

  return (
    <ComingSoonPage
      title={t('title')}
      subtitle={subtitle}
      description={description}
      sections={sections}
      cta={cta}
    />
  );
};

export default HowItWorksPage;

