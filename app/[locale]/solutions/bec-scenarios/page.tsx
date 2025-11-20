'use client';

export const runtime = 'edge';

import React from 'react';
import {Link} from '@/i18n/routing';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import HeroSection, {HeroMetric, CenterCardData} from '../../../components/shared/HeroSection';
import ProblemsTargetsSection, {ProblemTriplet} from '../../../components/shared/ProblemsTargetsSection';
import FAQSection from '../../../components/shared/FAQSection';
import FinalCtaSection from '../../../components/shared/FinalCtaSection';
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
  DollarSign,
} from 'lucide-react';

const SolutionsBECScenariosPage: React.FC = () => {
  const heroMetrics: HeroMetric[] = [
    {
      label: 'Approval Risk',
      icon: TrendingDown,
      badge: 'Reduction',
      color: 'text-primary-300',
      startValue: 60,
      endValue: 75,
      startDelta: 0,
      endDelta: -45,
      unit: '%',
      direction: 'down',
    },
    {
      label: 'Verification Rate',
      icon: TrendingUp,
      badge: 'Increase',
      color: 'text-secondary-300',
      startValue: 0,
      endValue: 85,
      startDelta: 0,
      endDelta: 85,
      unit: '%',
      direction: 'up',
    },
    {
      label: 'Financial Loss',
      icon: DollarSign,
      badge: 'Prevented',
      color: 'text-white/70',
      startValue: 130,
      endValue: 0,
      startDelta: 0,
      endDelta: -130,
      unit: 'K',
      direction: 'down',
    },
  ];

  const centerCard: CenterCardData = {
    badge: 'ROI',
    title: 'Prevented Losses',
    description: 'Average BEC loss',
    valueLabel: 'Per Incident',
    value: {
      startValue: 0,
      endValue: 130,
      unit: 'K',
      direction: 'up',
    },
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />

      <HeroSection
        badge="By Scenario / BEC Scenarios"
        title="Prevent Financial Losses with BEC Scenario Testing"
        description="Simulate CEO fraud, IBAN change requests, and invoice manipulation. Test approval workflows. Measure verification rates. Generate executive summaries."
        centerCard={centerCard}
        metrics={heroMetrics}
      />

      <ProblemsTargetsSection
        badge="Problems"
        heading="Problems → Impact → Target Results"
        description="Addressing BEC challenges with comprehensive testing and verification workflows"
        triplets={[
          {
            problem: 'Employees approve financial requests without verification',
            impact: 'BEC attacks succeed. Financial losses average $130K per incident. Reputation damage.',
            result: 'Verification rate increases 70-85%. Approval risk decreases 60-75%. Zero financial losses from BEC.',
          },
          {
            problem: 'No testing of approval workflows',
            impact: 'Vulnerabilities unknown. Processes not improved. Culture remains risky.',
            result: 'Quarterly BEC simulations. Approval workflows tested. Culture shifts to verification-first.',
          },
          {
            problem: 'Management lacks visibility into approval risk',
            impact: 'Executives unaware of risk. No data for decision-making. Compliance gaps.',
            result: 'Executive dashboards show approval rates. Management summaries generated. Risk visibility at board level.',
          },
        ]}
      />

      <WorkflowSection
        steps={[
              {
                key: 'plan',
                icon: Target,
                label: 'Plan',
                description: 'Select BEC scenario template (CEO fraud, IBAN change, invoice manipulation). Configure approval workflow test.',
            video: 'https://www.pexels.com/download/video/5377697/',
              },
              {
                key: 'run',
                icon: Zap,
                label: 'Run',
                description: 'Deploy BEC simulation to finance, executive assistants, and approval-authority roles. Realistic CEO impersonation.',
            video: 'https://www.pexels.com/download/video/4709300/',
              },
              {
                key: 'triage',
                icon: Shield,
                label: 'Triage',
                description: 'Track approval responses. Flag users who approve without verification. Create cases for high-risk approvals.',
            video: 'https://www.pexels.com/download/video/5495781/',
              },
              {
                key: 'train',
                icon: Users,
                label: 'Train',
                description: 'Immediate training for approvers. Approval workflow education. Verification process reinforcement.',
            video: 'https://www.pexels.com/download/video/5377700/',
              },
              {
                key: 'report',
                icon: BarChart3,
                label: 'Report',
                description: 'Management summary generated. Approval rates by role. Risk trends. Executive dashboard updated.',
            video: 'https://www.pexels.com/download/video/5495898/',
          },
        ]}
        badge="How It Works"
        title="How It Works"
        description="5-step operational flow for BEC scenario testing"
      />

      <TimelineSection
        events={[
          {time: 'Week 1', title: 'KPI setup & role segmentation', description: 'Define approval risk thresholds. Configure finance and executive assistant segments.'},
          {time: 'Week 2', title: 'BEC simulation deployment', description: 'Deploy CEO fraud scenario. IBAN change request test. Invoice manipulation test.'},
          {time: 'Week 2-3', title: 'Triage & case management', description: 'Review approval responses. Flag high-risk approvers. Create cases for training.'},
          {time: 'Week 3-4', title: 'Training & workflow improvement', description: 'Approval workflow training assigned. Verification process reinforced.'},
          {time: 'Month-end', title: 'Management summary', description: 'Executive dashboard updated. Board report generated. Risk trends analyzed.'},
        ]}
        badge="Timeline"
        heading="Implementation Timeline"
      />

      <KpiSection
        kpis={[
          {label: 'Approval Risk', value: '↓', direction: 'down', tooltip: 'Approval risk decreases 60-75%'},
          {label: 'Verification Rate', value: '↑', direction: 'up', tooltip: 'Verification rate increases 70-85%'},
          {label: 'Financial Loss', value: '↓', direction: 'down', tooltip: 'BEC-related financial losses eliminated'},
          {label: 'Response Time', value: '↓', direction: 'down', tooltip: 'Approval response time decreases with verification'},
          {label: 'Training Completion', value: '↑', direction: 'up', tooltip: 'Approval workflow training completion increases to 95%+'},
        ]}
        centerCard={{
          badge: 'ROI Model',
          title: 'ROI Formula',
          description: 'Prevented BEC incidents × Average loss per incident ($130K) = ROI estimate',
          content: 'Example: 5 prevented BEC attacks × $130K average loss = $650K annual savings. Program cost typically $50K-150K annually. Industry benchmark: Organizations with BEC testing programs see 80-95% reduction in successful BEC attacks.',
        }}
        badge="KPI & ROI"
        heading="Measurable Business Impact"
      />

      <SecuritySection
        badge="Security & Privacy"
        heading="Enterprise-Grade Security"
        description="Your data security and privacy are our top priorities, with comprehensive protection across all deployment models."
        dataProtection={{
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
            encryption: { label: 'Encryption', color: 'rgba(147, 51, 234, 0.8)' },
            access: { label: 'Access Control', color: 'rgba(168, 85, 247, 0.8)' },
            audit: { label: 'Audit Logs', color: 'rgba(147, 51, 234, 0.6)' },
          },
          features: [
            { icon: FileText, title: 'End-to-End Encryption', subtitle: 'AES-256', color: 'primary' },
            { icon: Server, title: 'On-Premise Deployment', subtitle: 'Available', color: 'purple' },
          ],
        }}
        accessControl={{
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
            mfa: { label: 'MFA', color: 'rgba(147, 51, 234, 0.8)' },
            sso: { label: 'SSO', color: 'rgba(168, 85, 247, 0.8)' },
            rbac: { label: 'RBAC', color: 'rgba(147, 51, 234, 0.6)' },
          },
          stats: [
            { label: 'MFA Enabled', value: '98%', color: 'primary' },
            { label: 'SSO Active', value: '95%', color: 'purple' },
            { label: 'RBAC', value: '100%', color: 'primary' },
          ],
          yAxisDomain: [90, 100],
        }}
        compliance={{
          title: 'Compliance Status',
          subtitle: 'Enterprise standards',
          icon: CheckCircle2,
          items: [
            { icon: FileText, title: 'SOC2', subtitle: 'Type II', percentage: 100, color: 'primary' },
            { icon: Shield, title: 'GDPR', subtitle: 'CCPA', percentage: 100, color: 'purple' },
            { icon: CheckCircle2, title: 'ISO 27001', subtitle: 'Security', percentage: 100, color: 'primary' },
            { icon: Lock, title: 'HIPAA', subtitle: 'Healthcare', percentage: 98, color: 'purple' },
          ],
        }}
        monitoring={{
          title: 'Real-time Monitoring',
          subtitle: '24/7 security oversight',
          icon: BarChart3,
          uptimePercentage: '99.9%',
          uptimeLabel: 'Uptime SLA',
          statusItems: [
            { icon: Shield, title: 'Encryption', subtitle: 'Active', color: 'primary' },
            { icon: Lock, title: 'MFA', subtitle: 'Enabled', color: 'purple' },
            { icon: FileText, title: 'Audit Logs', subtitle: '24/7', color: 'primary' },
          ],
        }}
        securityManagement={{
          title: 'Security Management',
          subtitle: 'Enterprise-grade platform',
          icon: Server,
          description: 'Real-time monitoring. Seamless automation. Total control with features that keep your security engine running smooth.',
          stats: [
            { value: '99.9%', label: 'Uptime', color: 'primary' },
            { value: '24/7', label: 'Monitoring', color: 'purple' },
            { value: '100%', label: 'Secure', color: 'primary' },
            { value: 'Zero', label: 'Breaches', color: 'purple' },
          ],
        }}
      />

      <FAQSection
        faqs={[
              {
                question: 'What BEC scenarios are available?',
                answer:
                  'CEO fraud, IBAN change requests, invoice manipulation, vendor impersonation, executive assistant requests. All scenarios are customizable to match your organization\'s approval workflows.',
              },
              {
                question: 'How realistic are the CEO impersonation emails?',
                answer:
                  'Very realistic. Phishy uses advanced email spoofing techniques that mirror real BEC attacks. Executive email signatures, writing style, and urgency are replicated. Templates are customizable.',
              },
              {
                question: 'Can we test approval workflows in our ERP system?',
                answer:
                  'Yes. Phishy integrates with major ERP platforms (SAP, Oracle, Microsoft Dynamics). Approval workflow testing can be configured to test actual ERP processes.',
              },
              {
                question: 'What happens when an employee approves a fraudulent request?',
                answer:
                  'Approval is logged immediately. User receives instant feedback. Training assigned automatically. Security team notified. Case created for review. High-risk approvers flagged for enhanced monitoring.',
              },
              {
                question: 'How do management summaries work?',
                answer:
                  'Executive dashboards show approval rates by role, department, and time period. Risk trends visualized. Board-ready reports generated automatically. Custom summaries available.',
              },
              {
                question: 'Can we customize approval workflows for testing?',
                answer:
                  'Yes. Approval workflows can be configured to match your organization\'s processes. Multi-step approvals, verification requirements, and escalation paths can all be tested.',
              },
              {
                question: 'What compliance frameworks support BEC testing?',
                answer:
                  'ISO 27001, NIST CSF, PCI-DSS, GDPR. BEC testing evidence can be mapped to compliance requirements. Audit trails maintained. Evidence packages generated automatically.',
              },
        ]}
        badge="FAQ's"
        heading="Frequently Asked Questions"
      />

      <FinalCtaSection
        badge="Get Started"
        title="Ready to Prevent BEC Attacks?"
        description="Let's schedule your live demo. See how BEC scenario testing prevents financial losses and improves approval culture."
        buttonText="Request Demo"
        buttonHref="/request-demo"
      />

      <Footer />
    </main>
  );
};

export default SolutionsBECScenariosPage;

