'use client';

export const runtime = 'edge';

import React from 'react';
import {useTranslations} from 'next-intl';
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
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from '@/components/ui/card';
import {Accordion, AccordionItem, AccordionContent, AccordionTrigger} from '@/components/ui/accordion';
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
  Mail,
  Phone,
  MessageSquare,
  CheckCircle2,
  Lock,
  Server,
  ArrowRight,
} from 'lucide-react';

const SolutionsPhishingProgramsPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />

      <HeroSection
        badge="By Solution / Phishing Programs"
        title="Multi-Channel Phishing Programs (Email, SMS, Voice)"
        description="Deploy phishing simulations across email, SMS, and voice. Identify clickers across all channels. Deliver targeted training. Centralize reporting for comprehensive risk visibility."
        centerCard={{
          badge: 'ROI',
          title: 'Click Rate',
          description: 'Reduction across channels',
          valueLabel: 'Improvement',
          value: {
            startValue: 100,
            endValue: 40,
            unit: '%',
            direction: 'down',
          },
        }}
        metrics={[
          {
            label: 'Click Rate',
            icon: TrendingDown,
            badge: 'Reduction',
            color: 'text-primary-300',
            startValue: 100,
            endValue: 40,
            startDelta: 0,
            endDelta: -60,
            unit: '%',
            direction: 'down',
          },
          {
            label: 'Report Rate',
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
            label: 'Engagement',
            icon: Users,
            badge: 'Increase',
            color: 'text-white/70',
            startValue: 0,
            endValue: 90,
            startDelta: 0,
            endDelta: 90,
            unit: '%',
            direction: 'up',
          },
        ]}
      />

      <ProblemsTargetsSection
        badge="Problems"
        heading="Problems → Impact → Target Results"
        description="Addressing multi-channel phishing challenges with comprehensive coverage and automation"
        triplets={[
              {
                problem: 'Email-only programs miss SMS and voice threats',
                impact: 'Employees vulnerable to smishing and vishing. Multi-channel attacks succeed.',
                result: 'Coverage across email, SMS, and voice. Click rate reduced 40-60% across all channels.',
              },
              {
                problem: 'Manual campaign creation is time-consuming',
                impact: 'Programs run infrequently. Templates are inconsistent. Scaling is difficult.',
                result: 'Ready templates deployed in minutes. Segment-based sending automates targeting. 10x faster campaign creation.',
              },
              {
                problem: 'Training not triggered automatically after clicks',
                impact: 'Users click but don\'t receive immediate education. Behavior doesn\'t change.',
                result: 'Automatic training assignment on click. Just-in-time education. Improvement scores increase 50-70%.',
              },
        ]}
      />

      <WorkflowSection
        steps={[
              {
                key: 'plan',
                icon: Target,
                label: 'Plan',
                description: 'Select ready templates (email, SMS, voice). Configure segments. Set training triggers.',
            video: 'https://www.pexels.com/download/video/5377697/',
              },
              {
                key: 'run',
                icon: Zap,
                label: 'Run',
                description: 'Deploy campaigns across channels. Segment-based sending ensures right content to right users.',
            video: 'https://www.pexels.com/download/video/4709300/',
              },
              {
                key: 'triage',
                icon: Shield,
                label: 'Triage',
                description: 'Clicks tracked automatically. High-risk users flagged. Cases created for security review.',
            video: 'https://www.pexels.com/download/video/5495781/',
              },
              {
                key: 'train',
                icon: Users,
                label: 'Train',
                description: 'Automatic training assignment on click. Channel-specific education (email vs SMS vs voice).',
            video: 'https://www.pexels.com/download/video/5377700/',
              },
              {
                key: 'report',
                icon: BarChart3,
                label: 'Report',
                description: 'Cross-channel analytics. Segment performance. Improvement trends. Executive dashboards.',
            video: 'https://www.pexels.com/download/video/5495898/',
          },
        ]}
        badge="How It Works"
        title="5-step operational flow for multi-channel phishing programs"
      />

      <TimelineSection
        events={[
          {time: 'Week 1', title: 'KPI setup & segmentation', description: 'Define program goals. Configure user segments. Set click rate thresholds.'},
          {time: 'Week 2–3', title: 'Multi-channel simulation', description: 'Deploy email, SMS, and voice campaigns. Segment-based sending active.'},
          {time: 'Week 3', title: 'Triage & playbooks', description: 'Review click data. Configure automated triage. Set up playbook workflows.'},
          {time: 'Week 4', title: 'Micro training + assessment', description: 'Training modules assigned to clickers. Follow-up assessment deployed.'},
          {time: 'Month-end', title: 'Evidence package', description: 'Executive report generated. Compliance evidence exported. ROI calculated.'},
        ]}
        badge="Timeline"
        heading="Deployment & Impact Timeline"
      />

      <KpiSection
        kpis={[
          {label: 'Click Rate', value: '↓', direction: 'down', tooltip: 'Click rate decreases 40-60% across all channels'},
          {label: 'Report Rate', value: '↑', direction: 'up', tooltip: 'Report rate increases 3-5x with training'},
          {label: 'Time-to-Triage', value: '↓', direction: 'down', tooltip: 'Triage time reduced from hours to minutes'},
          {label: 'Completion Rate', value: '↑', direction: 'up', tooltip: 'Training completion rate increases to 85-95%'},
          {label: 'Improvement Score', value: '↑', direction: 'up', tooltip: 'User improvement score increases 50-70%'},
        ]}
        centerCard={{
          badge: 'ROI Model',
          title: 'ROI Formula',
          description: 'Reduced incidents × Average incident cost ($50K-250K) = ROI estimate',
          content: 'Example: 1,000 employees × 50% click rate reduction × $100K average cost = $50M annual savings. Industry benchmark: Organizations with comprehensive multi-channel programs see 40-60% reduction in phishing incidents.',
        }}
        badge="KPI & ROI"
        heading="Measurable Business Impact"
        description="Transform your phishing program with quantifiable results across all channels."
      />

      {/* Security & Privacy Section */}
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
            { icon: Lock, title: 'SOC2', subtitle: 'Coming', percentage: 95, color: 'purple' },
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

      {/* 10. FAQ */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="relative z-10 container mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: 'How many ready templates are available?',
                answer:
                  '50+ ready templates across email, SMS, and voice channels. Templates cover common attack vectors: credential phishing, malware delivery, CEO fraud, invoice scams, and more. All templates are customizable.',
              },
              {
                question: 'Can we create custom scenarios?',
                answer:
                  'Yes. Custom scenario builder allows you to create email, SMS, and voice simulations tailored to your organization. Import your own content, branding, and attack vectors.',
              },
              {
                question: 'How does segment-based sending work?',
                answer:
                  'Define segments by department, role, risk level, or custom attributes. Assign specific templates to each segment. Campaigns send automatically based on segment membership. Results tracked per segment.',
              },
              {
                question: 'What happens when a user clicks?',
                answer:
                  'Click is logged immediately. User receives instant feedback. Training module assigned automatically. Security team notified if risk threshold exceeded. Case created for review if needed.',
              },
              {
                question: 'Can we integrate with our existing security tools?',
                answer:
                  'Yes. Phishy integrates with SIEM, SOAR, and ticketing systems via API. Click data can be forwarded to security operations. Training completion synced to LMS platforms.',
              },
              {
                question: 'How do we measure program effectiveness?',
                answer:
                  'Executive dashboard shows click rates, report rates, improvement scores, and ROI. Segment-level analytics available. Trend analysis over time. Custom reports exportable to PDF/CSV.',
              },
              {
                question: 'What compliance frameworks are supported?',
                answer:
                  'ISO 27001, NIST CSF, GDPR, HIPAA, PCI-DSS. Evidence packages generated automatically. Audit trails maintained. Compliance mapping available for all frameworks.',
              },
            ].map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl mb-4 px-6"
              >
                <AccordionTrigger className="text-white hover:text-primary-300">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* 11. Final CTA */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="relative z-10 container mx-auto max-w-4xl px-6">
          <Card className="border-primary-500/30 bg-gradient-to-br from-primary-500/20 via-transparent to-secondary-500/20 backdrop-blur-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl">
                Ready to take action?
              </CardTitle>
              <CardDescription className="text-lg text-white/80 mt-4">
                Let's schedule your live demo. See how multi-channel phishing programs reduce risk across all attack vectors.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/request-demo"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 px-7 py-3 text-sm font-semibold uppercase tracking-wide shadow-lg shadow-primary-600/40 transition-transform duration-300 hover:scale-105"
              >
                <span>Request Demo</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="#overview"
                className="text-sm text-white/60 hover:text-white/80 transition-colors"
              >
                Watch 2-minute overview
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SolutionsPhishingProgramsPage;

