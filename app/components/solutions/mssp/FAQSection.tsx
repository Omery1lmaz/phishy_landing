'use client';

import React from 'react';
import FAQSection from '@/app/components/shared/FAQSection';
import { FAQItem } from '@/app/components/shared/FAQSection';

const MSSPFAQSection: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: 'How does multi-tenant management work?',
      answer:
        'Multi-tenant platform allows you to manage multiple clients from one interface. Each client has isolated data, configurations, and reporting. Client-specific branding supported.',
    },
    {
      question: 'What white-label options are available?',
      answer:
        'Full white-label interface available. Custom branding, logos, colors, and domain. Clients see your branding, not vendor branding. Professional image maintained.',
    },
    {
      question: 'How does automated billing work?',
      answer:
        'Billing integration with Stripe, QuickBooks, and custom systems. Usage-based or fixed pricing. Automated invoice generation. Revenue recognition tracking.',
    },
    {
      question: 'What monthly summaries are included?',
      answer:
        'Monthly summaries include client-specific metrics, performance trends, compliance status, and recommendations. White-label format. Automated delivery.',
    },
    {
      question: 'Can we customize service packages?',
      answer:
        'Yes. Service packages are fully customizable. Define modules, features, and pricing per package. Client-specific configurations available.',
    },
    {
      question: 'How is client data isolated?',
      answer:
        'Complete data isolation per tenant. Client data never shared. Secure multi-tenancy architecture. Compliance with data residency requirements.',
    },
    {
      question: 'What reporting is available for MSSPs?',
      answer:
        'Client performance reports, revenue reports, operational metrics, client health dashboards. Custom reports available. Export to PDF/CSV.',
    },
  ];

  return (
    <FAQSection
      faqs={faqs}
      badge="FAQ"
      heading="Common Questions"
      description="Everything you need to know about implementing Phishy for your MSSP operations."
      showGridLayout={true}
    />
  );
};

export default MSSPFAQSection;
