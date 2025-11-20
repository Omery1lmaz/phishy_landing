'use client';

export const runtime = 'edge';

import React from 'react';
import { Link } from '@/i18n/routing';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import HeroSection, { HeroMetric, CenterCardData } from '../../../components/shared/HeroSection';
import ProblemsTargetsSection, { ProblemTriplet } from '../../../components/shared/ProblemsTargetsSection';
import FAQSection from '../../../components/shared/FAQSection';
import FinalCtaSection from '../../../components/shared/FinalCtaSection';
import WorkflowSection, { WorkflowStep } from '../../../components/shared/WorkflowSection';
import TimelineSection, { TimelineEvent } from '../../../components/shared/TimelineSection';
import KpiSection, { KpiItem, CenterCard } from '../../../components/shared/KpiSection';
import SecuritySection from '../../../components/shared/SecuritySection';

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
  Phone,
} from 'lucide-react';

const SolutionsTelecomPage: React.FC = () => {
  const heroMetrics: HeroMetric[] = [
    {
      label: 'Scalability',
      icon: Users,
      badge: 'Users',
      color: 'text-primary-300',
      startValue: 50,
      endValue: 100,
      startDelta: 0,
      endDelta: 50,
      unit: 'K+',
      direction: 'up',
    },
    {
      label: 'Click Rate',
      icon: TrendingDown,
      badge: 'Reduction',
      color: 'text-secondary-300',
      startValue: 40,
      endValue: 60,
      startDelta: 0,
      endDelta: -20,
      unit: '%',
      direction: 'down',
    },
    {
      label: 'Reporting',
      icon: BarChart3,
      badge: 'Visibility',
      color: 'text-white/70',
      startValue: 0,
      endValue: 100,
      startDelta: 0,
      endDelta: 100,
      unit: '%',
      direction: 'up',
    },
  ];

  const centerCard: CenterCardData = {
    badge: 'ROI',
    title: 'Operational Efficiency',
    description: '5-10x improvement',
    valueLabel: 'Time Saved',
    value: {
      startValue: 0,
      endValue: 200,
      unit: ' hrs/month',
      direction: 'up',
    },
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />

      <HeroSection
        badge="By Industry / Telecom & ISP"
        title="Large User Base Management with Segmentation & Centralized Reports"
        description="Scale to 100K+ users seamlessly. Segment-based campaigns for diverse employee groups. Centralized reporting for executive visibility. Manage massive user bases efficiently."
        centerCard={centerCard}
        metrics={heroMetrics}
      />

      <ProblemsTargetsSection
        badge="Problems"
        heading="Problems → Impact → Target Results"
        description="Addressing telecom challenges with scalable infrastructure, segmentation, and centralized reporting"
        triplets={[
          {
            problem: 'Systems don\'t scale to 50K+ users',
            impact: 'Performance degrades. User experience suffers. Operations fail.',
            result: 'Proven scalability to 100K+ users. Performance maintained. Operations smooth.',
          },
          {
            problem: 'No segmentation for diverse employee groups',
            impact: 'One-size-fits-all campaigns. Low engagement. Resources wasted.',
            result: 'Advanced segmentation. Role-based campaigns. Engagement increases 60-80%.',
          },
          {
            problem: 'Reporting fragmented across departments',
            impact: 'Executive visibility limited. Decision-making delayed. Accountability unclear.',
            result: 'Centralized reporting. Executive dashboards. Visibility improved.',
          },
        ]}
      />

      <WorkflowSection
        steps={[
          {
            key: 'plan',
            icon: Target,
            label: 'Plan',
            description: 'Configure segmentation for large user base. Define department/role segments. Set campaign parameters.',
            video: 'https://www.pexels.com/download/video/5377697/',
          },
          {
            key: 'run',
            icon: Zap,
            label: 'Run',
            description: 'Deploy campaigns to 100K+ users. Segment-based sending. Scalable delivery.',
            video: 'https://www.pexels.com/download/video/4709300/',
          },
          {
            key: 'triage',
            icon: Shield,
            label: 'Monitor',
            description: 'Monitor performance across segments. Track metrics at scale. Identify issues.',
            video: 'https://www.pexels.com/download/video/5495781/',
          },
          {
            key: 'train',
            icon: Users,
            label: 'Train',
            description: 'Deploy training to segments. Scale to 100K+ users. Track completion.',
            video: 'https://www.pexels.com/download/video/5377700/',
          },
          {
            key: 'report',
            icon: BarChart3,
            label: 'Report',
            description: 'Centralized reporting. Executive dashboards. Department-level metrics.',
            video: 'https://www.pexels.com/download/video/5495898/',
          },
        ]}
        badge="How It Works"
        title="How It Works"
        description="5-step operational flow for telecom organizations"
      />

      <TimelineSection
        events={[
          { time: 'Week 1', title: 'Segmentation setup', description: 'Configure segments for large user base. Department/role mapping. Campaign parameters.' },
          { time: 'Week 1-2', title: 'Large-scale deployment', description: 'Deploy to 100K+ users. Segment-based sending. Performance validation.' },
          { time: 'Week 2-3', title: 'Monitoring & optimization', description: 'Monitor performance at scale. Optimize delivery. Track metrics.' },
          { time: 'Week 3-4', title: 'Training deployment', description: 'Deploy training to segments. Scale to 100K+ users. Track completion.' },
          { time: 'Month-end', title: 'Centralized reporting', description: 'Generate centralized reports. Executive dashboards. Department metrics.' },
        ]}
        badge="Timeline"
        heading="Implementation Timeline"
      />

      <KpiSection
        kpis={[
          { label: 'Scalability', value: '↑', direction: 'up', tooltip: 'Proven scalability to 100K+ users' },
          { label: 'Click Rate', value: '↓', direction: 'down', tooltip: 'Click rate decreases 40-60%' },
          { label: 'Centralized Reporting', value: '↑', direction: 'up', tooltip: 'Centralized reporting improves visibility' },
          { label: 'Segment Engagement', value: '↑', direction: 'up', tooltip: 'Segment engagement increases 60-80%' },
          { label: 'Operational Efficiency', value: '↑', direction: 'up', tooltip: 'Operational efficiency increases 5-10x' },
        ]}
        centerCard={{
          badge: 'ROI Model',
          title: 'ROI Formula',
          description: 'Reduced incidents × Average incident cost ($50K-200K) = ROI estimate',
          content: 'Example: 20 prevented incidents × $100K average cost = $2M annual savings. Program cost typically $100K-250K annually. Industry benchmark: Telecom organizations with scalable programs see 40-60% reduction in incidents across 100K+ user bases.',
        }}
        badge="KPI & ROI"
        heading="Measurable Business Impact"
      />

      <SecuritySection badge="Security & Privacy" heading="Enterprise-Grade Security" description="Your data security and privacy are our top priorities, with comprehensive protection across all deployment models." dataProtection={{ title: 'Data Protection', subtitle: 'Enterprise encryption', icon: Shield, chartData: [{ day: 'Mon', encryption: 95, access: 98, audit: 90 }, { day: 'Tue', encryption: 97, access: 99, audit: 92 }, { day: 'Wed', encryption: 96, access: 97, audit: 91 }, { day: 'Thu', encryption: 98, access: 99, audit: 93 }, { day: 'Fri', encryption: 99, access: 100, audit: 95 }, { day: 'Sat', encryption: 97, access: 98, audit: 92 }, { day: 'Sun', encryption: 99, access: 100, audit: 94 }], chartConfig: { encryption: { label: 'Encryption', color: 'rgba(147,51,234,0.8)' }, access: { label: 'Access Control', color: 'rgba(168,85,247,0.8)' }, audit: { label: 'Audit Logs', color: 'rgba(147,51,234,0.6)' } }, features: [{ icon: FileText, title: 'End-to-End Encryption', subtitle: 'AES-256', color: 'primary' }, { icon: Server, title: 'On-Premise Deployment', subtitle: 'Available', color: 'purple' }] }} accessControl={{ title: 'Access Control', subtitle: 'Enterprise authentication', icon: Lock, chartData: [{ day: 'Mon', mfa: 95, sso: 92, rbac: 98 }, { day: 'Tue', mfa: 96, sso: 93, rbac: 99 }, { day: 'Wed', mfa: 95, sso: 92, rbac: 98 }, { day: 'Thu', mfa: 97, sso: 94, rbac: 99 }, { day: 'Fri', mfa: 98, sso: 95, rbac: 100 }, { day: 'Sat', mfa: 96, sso: 93, rbac: 99 }, { day: 'Sun', mfa: 98, sso: 95, rbac: 100 }], chartConfig: { mfa: { label: 'MFA', color: 'rgba(147,51,234,0.8)' }, sso: { label: 'SSO', color: 'rgba(168,85,247,0.8)' }, rbac: { label: 'RBAC', color: 'rgba(147,51,234,0.6)' } }, stats: [{ label: 'MFA Enabled', value: '98%', color: 'primary' }, { label: 'SSO Active', value: '95%', color: 'purple' }, { label: 'RBAC', value: '100%', color: 'primary' }], yAxisDomain: [90, 100] }} compliance={{ title: 'Compliance Status', subtitle: 'Enterprise standards', icon: CheckCircle2, items: [{ icon: FileText, title: 'SOC2', subtitle: 'Type II', percentage: 100, color: 'primary' }, { icon: Shield, title: 'GDPR', subtitle: 'CCPA', percentage: 100, color: 'purple' }, { icon: CheckCircle2, title: 'ISO 27001', subtitle: 'Security', percentage: 100, color: 'primary' }, { icon: Lock, title: 'SOC2', subtitle: 'Coming', percentage: 95, color: 'purple' }] }} monitoring={{ title: 'Real-time Monitoring', subtitle: '24/7 security oversight', icon: BarChart3, uptimePercentage: '99.9%', uptimeLabel: 'Uptime SLA', statusItems: [{ icon: Shield, title: 'Encryption', subtitle: 'Active', color: 'primary' }, { icon: Lock, title: 'MFA', subtitle: 'Enabled', color: 'purple' }, { icon: FileText, title: 'Audit Logs', subtitle: '24/7', color: 'primary' }] }} securityManagement={{ title: 'Security Management', subtitle: 'Enterprise platform', icon: Server, description: 'Real-time monitoring. Seamless automation. Total control with features that keep your security engine running smooth.', stats: [{ value: '99.9%', label: 'Uptime', color: 'primary' }, { value: '24/7', label: 'Monitoring', color: 'purple' }, { value: '100%', label: 'Secure', color: 'primary' }, { value: 'Zero', label: 'Breaches', color: 'purple' }] }} />

      <FAQSection
        faqs={[
          {
            question: 'How does Phishy scale to 100K+ users?',
            answer:
              'Proven architecture handles 100K+ users seamlessly. Distributed processing. Performance optimization. Scalable infrastructure. No degradation at scale.',
          },
          {
            question: 'What segmentation options are available?',
            answer:
              'Advanced segmentation by department, role, location, risk level, custom attributes. Segment-based campaigns. Targeted delivery.',
          },
          {
            question: 'How does centralized reporting work?',
            answer:
              'Centralized dashboards aggregate metrics across all segments. Executive summaries. Department-level reports. Custom reporting available.',
          },
          {
            question: 'Can we customize for different departments?',
            answer:
              'Yes. Department-specific campaigns, content, and reporting. Custom configurations per segment. Flexible segmentation.',
          },
          {
            question: 'What performance can we expect at scale?',
            answer:
              'Proven performance at 100K+ users. No degradation. Fast delivery. Responsive interface. Optimized architecture.',
          },
          {
            question: 'How does user sync work for large bases?',
            answer:
              'Efficient user sync for 100K+ users. Incremental updates. Directory service integration. Performance optimized.',
          },
          {
            question: 'What support is available for large deployments?',
            answer:
              'Dedicated support for large deployments. Architecture review. Performance optimization. Scaling guidance. Enterprise support.',
          },
        ]}
        badge="FAQ's"
        heading="Frequently Asked Questions"
      />

      <FinalCtaSection
        badge="Get Started"
        title="Ready to Scale Your Security Awareness?"
        description="Let's schedule your live demo. See how scalable segmentation manages large user bases efficiently."
        buttonText="Request Demo"
        buttonHref="/request-demo"
      />

      <Footer />
    </main>
  );
};

export default SolutionsTelecomPage;

