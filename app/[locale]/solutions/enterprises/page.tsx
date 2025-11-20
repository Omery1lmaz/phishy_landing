'use client';

export const runtime = 'edge';

import React from 'react';
import {Link} from '@/i18n/routing';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import HeroSection, {HeroMetric, CenterCardData} from '../../../components/shared/HeroSection';
import ProblemsTargetsSection, {ProblemTriplet} from '../../../components/shared/ProblemsTargetsSection';
import WorkflowSection, {WorkflowStep} from '../../../components/shared/WorkflowSection';
import TimelineSection, {TimelineEvent} from '../../../components/shared/TimelineSection';
import KpiSection, {KpiItem, CenterCard} from '../../../components/shared/KpiSection';
import SecuritySection, {
  DataProtectionCard,
  AccessControlCard,
  ComplianceCard,
  MonitoringCard,
  SecurityManagementCard,
} from '../../../components/shared/SecuritySection';
import FAQSection from '../../../components/shared/FAQSection';
import FinalCtaSection from '../../../components/shared/FinalCtaSection';
import {
  Shield,
  TrendingDown,
  TrendingUp,
  Clock,
  Target,
  BarChart3,
  FileText,
  Users,
  Zap,
  CheckCircle2,
  Lock,
  Server,
  Building2,
  BarChart,
} from 'lucide-react';

const SolutionsEnterprisesPage: React.FC = () => {
  const heroMetrics: HeroMetric[] = [
    {
      label: 'Scalability',
        icon: BarChart,
      badge: 'Users',
      color: 'text-primary-300',
      startValue: 0,
      endValue: 100,
      startDelta: 0,
      endDelta: 100,
      unit: 'K+',
      direction: 'up',
    },
    {
      label: 'On-Premise',
      icon: Server,
      badge: 'Deployment',
      color: 'text-secondary-300',
      startValue: 0,
      endValue: 100,
      startDelta: 0,
      endDelta: 100,
      unit: '%',
      direction: 'up',
    },
    {
      label: 'Security Compliance',
      icon: Shield,
      badge: 'Coverage',
      color: 'text-white/70',
      startValue: 0,
      endValue: 100,
      startDelta: 0,
      endDelta: 100,
      unit: '%',
      direction: 'up',
    },
  ];

  const heroCenterCard: CenterCardData = {
    badge: 'ROI',
    title: 'Prevented Incidents',
    description: 'Average incident cost',
    valueLabel: 'Per Incident',
    value: {
      startValue: 0,
      endValue: 150,
      unit: 'K',
      direction: 'up',
    },
  };

  const problemTriplets: ProblemTriplet[] = [
    {
      problem: 'Solutions don\'t scale to enterprise user bases',
      impact: 'Performance degrades at scale. User experience suffers. Operations fail.',
      result: 'Proven scalability to 100K+ users. Performance maintained. Operations smooth.',
    },
    {
      problem: 'Cloud solutions don\'t meet enterprise security requirements',
      impact: 'Deployment blocked. Compliance gaps. Security risks.',
      result: 'Full on-premise/air-gapped deployment. Enterprise security requirements met.',
    },
    {
      problem: 'Complex interfaces exclude diverse user bases',
      impact: 'Low adoption. Accessibility issues. Training gaps.',
      result: 'Accessible UX. High adoption. Inclusive design.',
    },
  ];

  const workflowSteps: WorkflowStep[] = [
    {
      key: 'plan',
      icon: Target,
      label: 'Plan',
      description: 'Enterprise deployment planning. Security requirements review. Scalability assessment.',
      video: 'https://www.pexels.com/download/video/5377697/',
    },
    {
      key: 'deploy',
      icon: Zap,
      label: 'Deploy',
      description: 'On-premise or cloud deployment. Scale to 100K+ users. Performance validation.',
      video: 'https://www.pexels.com/download/video/4709300/',
    },
    {
      key: 'secure',
      icon: Shield,
      label: 'Secure',
      description: 'Enterprise security configured. MFA/SSO enabled. Data residency ensured.',
      video: 'https://www.pexels.com/download/video/5495781/',
    },
    {
      key: 'train',
      icon: Users,
      label: 'Train',
      description: 'Enterprise-wide training deployment. Accessible content. High adoption.',
      video: 'https://www.pexels.com/download/video/5377700/',
    },
    {
      key: 'report',
      icon: BarChart3,
      label: 'Report',
      description: 'Executive dashboards. Enterprise metrics. ROI visibility.',
      video: 'https://www.pexels.com/download/video/5495898/',
    },
  ];

  const timelineEvents: TimelineEvent[] = [
    {time: 'Week 1-2', title: 'Security review & approval', description: 'Security requirements review. Deployment plan approval. Architecture validation.'},
    {time: 'Week 2-4', title: 'Enterprise deployment', description: 'On-premise or cloud deployment. Scale to 100K+ users. Performance testing.'},
    {time: 'Week 4-5', title: 'Configuration & testing', description: 'Enterprise security configured. User sync. Test campaigns. Accessibility validation.'},
    {time: 'Week 5-6', title: 'Training deployment', description: 'Enterprise-wide training. Accessible content. Track completion.'},
    {time: 'Month-end', title: 'Enterprise reporting', description: 'Executive dashboards. Enterprise metrics. ROI demonstrated.'},
  ];

  const kpis: KpiItem[] = [
    {label: 'Scalability', value: '↑', direction: 'up', tooltip: 'Proven scalability to 100K+ users'},
    {label: 'On-Premise Ready', value: '↑', direction: 'up', tooltip: '100% on-premise deployment capability'},
    {label: 'Security Compliance', value: '↑', direction: 'up', tooltip: 'Enterprise security requirements met'},
    {label: 'User Adoption', value: '↑', direction: 'up', tooltip: 'User adoption increases with accessible design'},
    {label: 'Performance', value: '↑', direction: 'up', tooltip: 'Performance maintained at enterprise scale'},
  ];

  const centerCard: CenterCard = {
    badge: 'ROI Model',
    title: 'ROI Formula',
    description: 'Prevented incidents × Average incident cost + Time saved = ROI estimate',
    content: 'Example: 20 prevented incidents × $150K average cost = $3M annual savings. Time saved from automation ($200K-500K). Program cost typically $150K-300K annually. Industry benchmark: Enterprise organizations with scalable security awareness see 60-80% reduction in incidents.',
  };

  const dataProtection: DataProtectionCard = {
    title: 'Data Protection',
    subtitle: 'Enterprise-grade encryption',
    icon: Shield,
    chartData: [
      { day: 'Mon', encryption: 95, access: 98, audit: 90 },
      { day: 'Tue', encryption: 97, access: 99, audit: 92 },
      { day: 'Wed', encryption: 96, access: 97, audit: 91 },
      { day: 'Thu', encryption: 98, access: 99, audit: 93 },
      { day: 'Fri', encryption: 99, access: 100, audit: 95 },
      { day: 'Sat', encryption: 97, access: 98, audit: 92 },
      { day: 'Sun', encryption: 99, access: 100, audit: 94 },
    ],
    chartConfig: {
      encryption: {
        label: 'Encryption',
        color: 'rgba(147, 51, 234, 0.8)',
      },
      access: {
        label: 'Access Control',
        color: 'rgba(168, 85, 247, 0.8)',
      },
      audit: {
        label: 'Audit Logs',
        color: 'rgba(147, 51, 234, 0.6)',
      },
    },
    features: [
      {
        icon: FileText,
        title: 'End-to-End Encryption',
        subtitle: 'AES-256',
        color: 'primary',
      },
      {
        icon: Server,
        title: 'On-Premise Deployment',
        subtitle: 'Air-gapped',
        color: 'purple',
      },
    ],
  };

  const accessControl: AccessControlCard = {
    title: 'Access Control',
    subtitle: 'Enterprise authentication',
    icon: Lock,
    chartData: [
      { day: 'Mon', mfa: 95, sso: 92, rbac: 98 },
      { day: 'Tue', mfa: 96, sso: 93, rbac: 99 },
      { day: 'Wed', mfa: 95, sso: 92, rbac: 98 },
      { day: 'Thu', mfa: 97, sso: 94, rbac: 99 },
      { day: 'Fri', mfa: 98, sso: 95, rbac: 100 },
      { day: 'Sat', mfa: 96, sso: 93, rbac: 99 },
      { day: 'Sun', mfa: 98, sso: 95, rbac: 100 },
    ],
    chartConfig: {
      mfa: {
        label: 'MFA',
        color: 'rgba(147, 51, 234, 0.8)',
      },
      sso: {
        label: 'SSO',
        color: 'rgba(168, 85, 247, 0.8)',
      },
      rbac: {
        label: 'RBAC',
        color: 'rgba(147, 51, 234, 0.6)',
      },
    },
    stats: [
      {
        label: 'MFA Enabled',
        value: '98%',
        color: 'primary',
      },
      {
        label: 'SSO Active',
        value: '95%',
        color: 'purple',
      },
      {
        label: 'RBAC',
        value: '100%',
        color: 'primary',
      },
    ],
    yAxisDomain: [90, 100],
  };

  const compliance: ComplianceCard = {
    title: 'Compliance Status',
    subtitle: 'Enterprise standards',
    icon: CheckCircle2,
    items: [
      {
        icon: FileText,
        title: 'SOC2',
        subtitle: 'Type II',
        percentage: 100,
        color: 'primary',
      },
      {
        icon: Shield,
        title: 'GDPR',
        subtitle: 'CCPA',
        percentage: 100,
        color: 'purple',
      },
      {
        icon: CheckCircle2,
        title: 'ISO 27001',
        subtitle: 'Security',
        percentage: 100,
        color: 'primary',
      },
      {
        icon: Lock,
        title: 'HIPAA',
        subtitle: 'Healthcare',
        percentage: 98,
        color: 'purple',
      },
    ],
  };

  const monitoring: MonitoringCard = {
    title: 'Real-time Monitoring',
    subtitle: '24/7 security oversight',
    icon: BarChart3,
    uptimePercentage: '99.9%',
    uptimeLabel: 'Uptime SLA',
    statusItems: [
      {
        icon: Shield,
        title: 'Encryption',
        subtitle: 'Active',
        color: 'primary',
      },
      {
        icon: Lock,
        title: 'MFA',
        subtitle: 'Enabled',
        color: 'purple',
      },
      {
        icon: FileText,
        title: 'Audit Logs',
        subtitle: '24/7',
        color: 'primary',
      },
    ],
  };

  const securityManagement: SecurityManagementCard = {
    title: 'Security Management',
    subtitle: 'Enterprise-grade platform',
    icon: Server,
    description: 'Real-time monitoring. Seamless automation. Total control with features that keep your security engine running smooth.',
    stats: [
      {
        value: '99.9%',
        label: 'Uptime',
        color: 'primary',
      },
      {
        value: '24/7',
        label: 'Monitoring',
        color: 'purple',
      },
      {
        value: '100%',
        label: 'Secure',
        color: 'primary',
      },
      {
        value: 'Zero',
        label: 'Breaches',
        color: 'purple',
      },
    ],
  };

  const faqs = [
    {
      question: 'What scalability is supported?',
      answer:
        'Proven scalability to 100K+ users. Distributed architecture. Performance optimization. No degradation at scale.',
    },
    {
      question: 'What on-premise deployment options are available?',
      answer:
        'Full on-premise deployment with complete data isolation. Air-gapped deployment for maximum security. No cloud connectivity required.',
    },
    {
      question: 'What enterprise security requirements are met?',
      answer:
        'MFA/SSO, data residency, encryption, audit trails, access controls, and more. Meets enterprise security standards.',
    },
    {
      question: 'How does accessibility work?',
      answer:
        'Accessible UX design. WCAG compliance. Screen reader support. Keyboard navigation. Diverse user support.',
    },
    {
      question: 'Can we integrate with enterprise systems?',
      answer:
        'Yes. Phishy integrates with major enterprise systems (Active Directory, LDAP, SAML, etc.). Custom integrations available.',
    },
    {
      question: 'What reporting is available for executives?',
      answer:
        'Executive dashboards, enterprise metrics, ROI calculations, trend analysis, and custom reports. Board-ready reports available.',
    },
    {
      question: 'What support is available for enterprise deployments?',
      answer:
        'Dedicated enterprise support. Architecture review. Performance optimization. Scaling guidance. 24/7 support available.',
    },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />

      <HeroSection
        badge="By Industry / Enterprise"
        title="Enterprise-Grade Security Awareness at Scale"
        description="Scale to 100K+ users seamlessly. Deploy on-premise or air-gapped. Meet enterprise security requirements. Ensure accessible UX for diverse user bases."
        centerCard={heroCenterCard}
        metrics={heroMetrics}
        arrowImage="/arrow.png"
      />

      {/* Problem Section */}
      <ProblemsTargetsSection
        badge="Problems"
        heading="Problems → Impact → Target Results"
        description="Addressing enterprise challenges with scalable, secure, and accessible solutions"
        triplets={problemTriplets}
      />

      {/* Workflow Section */}
      <WorkflowSection
        badge="How It Works"
        title="5-step operational flow for enterprise deployments"
        steps={workflowSteps}
      />

      {/* Timeline Section */}
      <TimelineSection
        badge="Timeline"
        heading="Deployment & Impact Timeline"
        subheading="See how quickly you can achieve results"
        events={timelineEvents}
      />

      {/* KPI & ROI Section */}
      <KpiSection
        badge="KPI & ROI"
        heading="Measurable Business Impact"
        description="Transform your enterprise security awareness with quantifiable results that scale and ensure compliance."
        kpis={kpis}
        centerCard={centerCard}
      />

      {/* Security & Privacy Section */}
      <SecuritySection
        badge="Security & Privacy"
        heading="Enterprise-Grade Security"
        description="Your data security and privacy are our top priorities, with comprehensive protection across all deployment models."
        dataProtection={dataProtection}
        accessControl={accessControl}
        compliance={compliance}
        monitoring={monitoring}
        securityManagement={securityManagement}
      />

      {/* FAQ Section */}
      <FAQSection
        faqs={faqs}
        cta={{
          heading: 'Ready to take action?',
          description: 'Let\'s schedule your live demo. See how enterprise-grade security awareness scales to 100K+ users.',
          buttonText: 'Request Demo',
          buttonHref: '/request-demo',
        }}
      />

      {/* Final CTA Section */}
      <FinalCtaSection />

      <Footer />
    </main>
  );
};

export default SolutionsEnterprisesPage;
