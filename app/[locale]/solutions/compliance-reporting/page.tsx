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
  FileCheck,
} from 'lucide-react';

const SolutionsComplianceReportingPage: React.FC = () => {
  const heroMetrics: HeroMetric[] = [
    {
      label: 'Audit Readiness',
      icon: FileCheck,
      badge: 'Coverage',
      color: 'text-primary-300',
      startValue: 0,
      endValue: 100,
      startDelta: 0,
      endDelta: 100,
      unit: '%',
      direction: 'up',
    },
    {
      label: 'Report Time',
      icon: Clock,
      badge: 'Reduction',
      color: 'text-secondary-300',
      startValue: 100,
      endValue: 10,
      startDelta: 0,
      endDelta: -90,
      unit: '%',
      direction: 'down',
    },
    {
      label: 'Compliance',
      icon: CheckCircle2,
      badge: 'Coverage',
      color: 'text-white/70',
      startValue: 0,
      endValue: 95,
      startDelta: 0,
      endDelta: 95,
      unit: '%',
      direction: 'up',
    },
  ];

  const centerCard: CenterCardData = {
    badge: 'ROI',
    title: 'Time Saved',
    description: 'Report generation',
    valueLabel: 'Per Audit',
    value: {
      startValue: 0,
      endValue: 80,
      unit: ' hrs',
      direction: 'up',
    },
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />

      <HeroSection
        badge="By Solution / Compliance Reporting"
        title="Automated Compliance Reporting & Audit Readiness"
        description="Automate ISO/NIST/GDPR mapping. Generate audit-ready evidence packages (PDF/CSV). Maintain a complete audit trail. Pass audits with confidence."
        centerCard={centerCard}
        metrics={heroMetrics}
      />

      <ProblemsTargetsSection
        badge="Problems"
        heading="Problems → Impact → Target Results"
        description="Addressing compliance reporting challenges with automated evidence generation, framework mapping, and audit trails"
        triplets={[
          {
            problem: 'Manual compliance reporting takes weeks',
            impact: 'Audit preparation delayed. Evidence gathering fragmented. Compliance gaps missed.',
            result: 'Evidence packages generated automatically. Report generation time reduced 90%.',
          },
          {
            problem: 'Framework mapping is complex and error-prone',
            impact: 'Activities not mapped to requirements. Compliance gaps unidentified. Audit failures occur.',
            result: 'Automatic mapping to ISO/NIST/KVKK. Compliance coverage visible. Gaps identified.',
          },
          {
            problem: 'Audit trail incomplete or missing',
            impact: 'Evidence not traceable. Audit failures. Regulatory penalties.',
            result: 'Full audit trail maintained. All activities logged. Evidence packages complete.',
          },
        ]}
      />

      <WorkflowSection
        steps={[
              {
                key: 'plan',
                icon: Target,
                label: 'Plan',
                description: 'Select compliance frameworks (ISO/NIST/KVKK). Configure mapping rules. Define evidence requirements.',
            video: 'https://www.pexels.com/download/video/5377697/',
              },
              {
                key: 'run',
                icon: Zap,
                label: 'Run',
                description: 'Security awareness activities run. All activities logged automatically. Data collected for mapping.',
            video: 'https://www.pexels.com/download/video/4709300/',
              },
              {
                key: 'triage',
                icon: Shield,
                label: 'Map',
                description: 'Activities automatically mapped to framework requirements. Compliance coverage calculated. Gaps identified.',
            video: 'https://www.pexels.com/download/video/5495781/',
              },
              {
                key: 'train',
                icon: FileText,
                label: 'Generate',
                description: 'Evidence packages generated (PDF/CSV). Audit trail compiled. Reports formatted for auditors.',
            video: 'https://www.pexels.com/download/video/5377700/',
              },
              {
                key: 'report',
                icon: BarChart3,
                label: 'Report',
                description: 'Compliance reports generated. Executive summaries created. Evidence packages exported.',
            video: 'https://www.pexels.com/download/video/5495898/',
          },
        ]}
        badge="How It Works"
        title="How It Works"
        description="5-step operational flow for compliance reporting"
      />

      <TimelineSection
        events={[
          {time: 'Week 1', title: 'Framework configuration', description: 'Select compliance frameworks. Configure mapping rules. Define evidence requirements.'},
          {time: 'Week 1-2', title: 'Activity tracking setup', description: 'Enable activity logging. Configure audit trail. Set up evidence collection.'},
          {time: 'Week 2-3', title: 'Mapping validation', description: 'Validate framework mapping. Review compliance coverage. Identify gaps.'},
          {time: 'Week 3-4', title: 'Evidence package generation', description: 'Generate initial evidence packages. Review format. Validate completeness.'},
          {time: 'Month-end', title: 'Audit readiness', description: 'Final evidence packages. Compliance reports. Audit trail complete.'},
        ]}
        badge="Timeline"
        heading="Implementation Timeline"
      />

      <KpiSection
        kpis={[
          {label: 'Audit Readiness', value: '↑', direction: 'up', tooltip: 'Audit readiness increases to 100%'},
          {label: 'Report Generation Time', value: '↓', direction: 'down', tooltip: 'Report generation time reduced 90%'},
          {label: 'Compliance Coverage', value: '↑', direction: 'up', tooltip: 'Compliance coverage increases to 95%+'},
          {label: 'Evidence Completeness', value: '↑', direction: 'up', tooltip: 'Evidence completeness increases to 100%'},
          {label: 'Audit Pass Rate', value: '↑', direction: 'up', tooltip: 'Audit pass rate increases to 100%'},
        ]}
        centerCard={{
          badge: 'ROI Model',
          title: 'ROI Formula',
          description: 'Time saved × Compliance team cost + Avoided audit failures = ROI estimate',
          content: 'Example: 80 hours saved per audit × $150/hour = $12K per audit. Avoided audit failure penalties ($50K-500K). Annual ROI: $62K-512K+. Industry benchmark: Organizations with automated compliance reporting see 90% reduction in report generation time and 100% audit pass rate.',
        }}
        badge="KPI & ROI"
        heading="Measurable Business Impact"
      />

      <SecuritySection badge="Security & Privacy" heading="Enterprise-Grade Security" description="Your data security and privacy are our top priorities, with comprehensive protection across all deployment models." dataProtection={{title:'Data Protection',subtitle:'Enterprise encryption',icon:Shield,chartData:[{day:'Mon',encryption:95,access:98,audit:90},{day:'Tue',encryption:97,access:99,audit:92},{day:'Wed',encryption:96,access:97,audit:91},{day:'Thu',encryption:98,access:99,audit:93},{day:'Fri',encryption:99,access:100,audit:95},{day:'Sat',encryption:97,access:98,audit:92},{day:'Sun',encryption:99,access:100,audit:94}],chartConfig:{encryption:{label:'Encryption',color:'rgba(147,51,234,0.8)'},access:{label:'Access Control',color:'rgba(168,85,247,0.8)'},audit:{label:'Audit Logs',color:'rgba(147,51,234,0.6)'}},features:[{icon:FileText,title:'End-to-End Encryption',subtitle:'AES-256',color:'primary'},{icon:Server,title:'On-Premise Deployment',subtitle:'Available',color:'purple'}]}} accessControl={{title:'Access Control',subtitle:'Enterprise authentication',icon:Lock,chartData:[{day:'Mon',mfa:95,sso:92,rbac:98},{day:'Tue',mfa:96,sso:93,rbac:99},{day:'Wed',mfa:95,sso:92,rbac:98},{day:'Thu',mfa:97,sso:94,rbac:99},{day:'Fri',mfa:98,sso:95,rbac:100},{day:'Sat',mfa:96,sso:93,rbac:99},{day:'Sun',mfa:98,sso:95,rbac:100}],chartConfig:{mfa:{label:'MFA',color:'rgba(147,51,234,0.8)'},sso:{label:'SSO',color:'rgba(168,85,247,0.8)'},rbac:{label:'RBAC',color:'rgba(147,51,234,0.6)'}},stats:[{label:'MFA Enabled',value:'98%',color:'primary'},{label:'SSO Active',value:'95%',color:'purple'},{label:'RBAC',value:'100%',color:'primary'}],yAxisDomain:[90,100]}} compliance={{title:'Compliance Status',subtitle:'Compliance standards',icon:CheckCircle2,items:[{icon:FileText,title:'SOC2',subtitle:'Type II',percentage:100,color:'primary'},{icon:Shield,title:'GDPR',subtitle:'CCPA',percentage:100,color:'purple'},{icon:CheckCircle2,title:'ISO 27001',subtitle:'Security',percentage:100,color:'primary'},{icon:Lock,title:'HIPAA',subtitle:'Healthcare',percentage:100,color:'purple'}]}} monitoring={{title:'Real-time Monitoring',subtitle:'24/7 security oversight',icon:BarChart3,uptimePercentage:'99.9%',uptimeLabel:'Uptime SLA',statusItems:[{icon:Shield,title:'Encryption',subtitle:'Active',color:'primary'},{icon:Lock,title:'MFA',subtitle:'Enabled',color:'purple'},{icon:FileText,title:'Audit Logs',subtitle:'24/7',color:'primary'}]}} securityManagement={{title:'Security Management',subtitle:'Enterprise platform',icon:Server,description:'Real-time monitoring. Seamless automation. Total control with features that keep your security engine running smooth.',stats:[{value:'99.9%',label:'Uptime',color:'primary'},{value:'24/7',label:'Monitoring',color:'purple'},{value:'100%',label:'Secure',color:'primary'},{value:'Zero',label:'Breaches',color:'purple'}]}} />

      <FAQSection
        faqs={[
              {
                question: 'What compliance frameworks are supported?',
                answer:
                  'ISO 27001, NIST CSF, GDPR, HIPAA, PCI-DSS, KVKK, and more. Custom frameworks can be configured. Framework mapping is automatic.',
              },
              {
                question: 'How are activities mapped to compliance requirements?',
                answer:
                  'Activities are automatically mapped to framework requirements based on configuration rules. Mapping is validated and can be customized.',
              },
              {
                question: 'What is included in evidence packages?',
                answer:
                  'Evidence packages include simulation results, training completion records, incident response logs, policy acknowledgments, audit trails, and compliance mapping reports. Available in PDF and CSV formats.',
              },
              {
                question: 'How long does it take to generate evidence packages?',
                answer:
                  'Evidence packages are generated automatically in minutes. Manual report generation that previously took weeks is now instant.',
              },
              {
                question: 'Can we customize evidence package format?',
                answer:
                  'Yes. Evidence package templates are customizable. Add your branding, format, and specific requirements. PDF and CSV exports available.',
              },
              {
                question: 'What audit trail is maintained?',
                answer:
                  'Full audit trail includes all security awareness activities, user actions, training completions, incident responses, and compliance mappings. Immutable logs maintained.',
              },
              {
                question: 'Can we integrate with GRC platforms?',
                answer:
                  'Yes. Phishy integrates with major GRC platforms via API. Compliance data can be synced automatically. Evidence packages can be forwarded.',
              },
        ]}
        badge="FAQ's"
        heading="Frequently Asked Questions"
      />

      <FinalCtaSection
        badge="Get Started"
        title="Ready to Automate Compliance Reporting?"
        description="Let's schedule your live demo. See how automated compliance reporting passes audits and saves time."
        buttonText="Request Demo"
        buttonHref="/request-demo"
      />

      <Footer />
    </main>
  );
};

export default SolutionsComplianceReportingPage;

