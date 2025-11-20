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
  Building2,
} from 'lucide-react';

const SolutionsGovernmentPage: React.FC = () => {
  const heroMetrics: HeroMetric[] = [
    {
      label: 'On-Premise',
      icon: Server,
      badge: 'Deployment',
      color: 'text-primary-300',
      startValue: 0,
      endValue: 100,
      startDelta: 0,
      endDelta: 100,
      unit: '%',
      direction: 'up',
    },
    {
      label: 'Transparency',
      icon: FileText,
      badge: 'Reporting',
      color: 'text-secondary-300',
      startValue: 0,
      endValue: 100,
      startDelta: 0,
      endDelta: 100,
      unit: '%',
      direction: 'up',
    },
    {
      label: 'Accessibility',
      icon: Users,
      badge: 'UX Design',
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
    title: 'Prevented Incidents',
    description: 'Average incident cost',
    valueLabel: 'Per Incident',
    value: {
      startValue: 0,
      endValue: 75,
      unit: 'K',
      direction: 'up',
    },
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />

      <HeroSection
        badge="By Industry / Government & Public Sector"
        title="On-Premise & Air-Gapped Security Awareness for Government"
        description="Deploy security awareness in air-gapped environments. Meet government security requirements. Provide transparent reporting for public accountability. Ensure accessible UX for diverse user bases."
        centerCard={centerCard}
        metrics={heroMetrics}
      />

      <ProblemsTargetsSection
        badge="Problems"
        heading="Problems → Impact → Target Results"
        description="Addressing government challenges with secure deployment, transparent reporting, and accessible design"
        triplets={[
          {
            problem: 'Cloud solutions don\'t meet government security requirements',
            impact: 'Deployment blocked. Compliance gaps. Security risks.',
            result: 'Full on-premise/air-gapped deployment. Government security requirements met.',
          },
          {
            problem: 'Reporting lacks transparency for public accountability',
            impact: 'Public trust issues. Accountability gaps. Transparency requirements unmet.',
            result: 'Transparent reporting. Public accountability maintained. Trust increased.',
          },
          {
            problem: 'Complex interfaces exclude diverse user bases',
            impact: 'Low adoption. Accessibility issues. Training gaps.',
            result: 'Accessible UX. High adoption. Inclusive design.',
          },
        ]}
      />

      <WorkflowSection
        steps={[
              {
                key: 'plan',
                icon: Target,
                label: 'Plan',
                description: 'On-premise deployment planning. Air-gapped configuration. Security requirements review.',
            video: 'https://www.pexels.com/download/video/5377697/',
              },
              {
                key: 'run',
                icon: Zap,
                label: 'Deploy',
                description: 'On-premise installation. Air-gapped setup. Government network integration.',
            video: 'https://www.pexels.com/download/video/4709300/',
              },
              {
                key: 'triage',
                icon: Shield,
                label: 'Secure',
                description: 'Data stays on-premise. No cloud connectivity required. Full control maintained.',
            video: 'https://www.pexels.com/download/video/5495781/',
              },
              {
                key: 'train',
                icon: Users,
                label: 'Train',
                description: 'Accessible training delivery. Diverse user support. Inclusive content.',
            video: 'https://www.pexels.com/download/video/5377700/',
              },
              {
                key: 'report',
                icon: BarChart3,
                label: 'Report',
                description: 'Transparent reporting. Public accountability. Accessible formats.',
            video: 'https://www.pexels.com/download/video/5495898/',
          },
        ]}
        badge="How It Works"
        title="5-step operational flow for government deployments"
      />

      <TimelineSection
        events={[
          {time: 'Week 1-2', title: 'Security review & approval', description: 'Security requirements review. Deployment plan approval. Air-gapped configuration.'},
          {time: 'Week 2-4', title: 'On-premise deployment', description: 'On-premise installation. Government network integration. Security validation.'},
          {time: 'Week 4-5', title: 'Configuration & testing', description: 'System configuration. User sync. Test campaigns. Accessibility validation.'},
          {time: 'Week 5-6', title: 'Training deployment', description: 'Deploy accessible training. Support diverse users. Track completion.'},
          {time: 'Month-end', title: 'Transparent reporting', description: 'Generate transparent reports. Public accountability. Accessible formats.'},
        ]}
        badge="Timeline"
        heading="Deployment & Impact Timeline"
      />

      <KpiSection
        kpis={[
          {label: 'On-Premise Ready', value: '↑', direction: 'up', tooltip: '100% on-premise deployment capability'},
          {label: 'Transparency', value: '↑', direction: 'up', tooltip: 'Transparent reporting for public accountability'},
          {label: 'Accessibility', value: '↑', direction: 'up', tooltip: 'Accessible UX for diverse user bases'},
          {label: 'Security Compliance', value: '↑', direction: 'up', tooltip: 'Government security requirements met'},
          {label: 'User Adoption', value: '↑', direction: 'up', tooltip: 'User adoption increases with accessible design'},
        ]}
        centerCard={{
          badge: 'ROI Model',
          title: 'ROI Formula',
          description: 'Prevented incidents × Average incident cost + Avoided compliance penalties = ROI estimate',
          content: 'Example: 10 prevented incidents × $75K average cost = $750K annual savings. Avoided compliance penalties ($50K-200K). Program cost typically $60K-120K annually. Industry benchmark: Government organizations with on-premise security awareness see 60-80% reduction in incidents.',
        }}
        badge="KPI & ROI"
        heading="Measurable Business Impact"
        description="Transform your government security with quantifiable results that meet compliance requirements."
      />

      <SecuritySection badge="Security & Privacy" heading="Enterprise-Grade Security" description="Your data security and privacy are our top priorities, with comprehensive protection across all deployment models." dataProtection={{title:'Data Protection',subtitle:'Government-grade encryption',icon:Shield,chartData:[{day:'Mon',encryption:98,access:99,audit:95},{day:'Tue',encryption:99,access:100,audit:96},{day:'Wed',encryption:98,access:99,audit:95},{day:'Thu',encryption:99,access:100,audit:97},{day:'Fri',encryption:100,access:100,audit:98},{day:'Sat',encryption:99,access:100,audit:96},{day:'Sun',encryption:100,access:100,audit:98}],chartConfig:{encryption:{label:'Encryption',color:'rgba(147,51,234,0.8)'},access:{label:'Access Control',color:'rgba(168,85,247,0.8)'},audit:{label:'Audit Logs',color:'rgba(147,51,234,0.6)'}},features:[{icon:FileText,title:'End-to-End Encryption',subtitle:'AES-256',color:'primary'},{icon:Server,title:'Air-Gapped Deployment',subtitle:'Available',color:'purple'}]}} accessControl={{title:'Access Control',subtitle:'Government authentication',icon:Lock,chartData:[{day:'Mon',mfa:98,sso:95,rbac:100},{day:'Tue',mfa:99,sso:96,rbac:100},{day:'Wed',mfa:98,sso:95,rbac:100},{day:'Thu',mfa:99,sso:97,rbac:100},{day:'Fri',mfa:100,sso:98,rbac:100},{day:'Sat',mfa:99,sso:96,rbac:100},{day:'Sun',mfa:100,sso:98,rbac:100}],chartConfig:{mfa:{label:'MFA',color:'rgba(147,51,234,0.8)'},sso:{label:'SSO',color:'rgba(168,85,247,0.8)'},rbac:{label:'RBAC',color:'rgba(147,51,234,0.6)'}},stats:[{label:'MFA Enabled',value:'100%',color:'primary'},{label:'SSO Active',value:'98%',color:'purple'},{label:'RBAC',value:'100%',color:'primary'}],yAxisDomain:[90,100]}} compliance={{title:'Compliance Status',subtitle:'Government standards',icon:CheckCircle2,items:[{icon:FileText,title:'FedRAMP',subtitle:'Compliant',percentage:100,color:'primary'},{icon:Shield,title:'NIST',subtitle:'Framework',percentage:100,color:'purple'},{icon:CheckCircle2,title:'ISO 27001',subtitle:'Security',percentage:100,color:'primary'},{icon:Lock,title:'FISMA',subtitle:'Compliant',percentage:100,color:'purple'}]}} monitoring={{title:'Real-time Monitoring',subtitle:'24/7 security oversight',icon:BarChart3,uptimePercentage:'99.9%',uptimeLabel:'Uptime SLA',statusItems:[{icon:Shield,title:'Encryption',subtitle:'Active',color:'primary'},{icon:Lock,title:'MFA',subtitle:'Enabled',color:'purple'},{icon:FileText,title:'Audit Logs',subtitle:'24/7',color:'primary'}]}} securityManagement={{title:'Security Management',subtitle:'Government platform',icon:Server,description:'Real-time monitoring. Seamless automation. Total control with features that keep your security engine running smooth.',stats:[{value:'99.9%',label:'Uptime',color:'primary'},{value:'24/7',label:'Monitoring',color:'purple'},{value:'100%',label:'Secure',color:'primary'},{value:'Zero',label:'Breaches',color:'purple'}]}} />

      <FAQSection
        faqs={[
              {
                question: 'What on-premise deployment options are available?',
                answer:
                  'Full on-premise deployment with complete data isolation. Air-gapped deployment for maximum security. No cloud connectivity required. Government network integration supported.',
              },
              {
                question: 'How does air-gapped deployment work?',
                answer:
                  'Air-gapped deployment operates completely offline. No internet connectivity required. Updates delivered via secure media. Full control maintained.',
              },
              {
                question: 'What transparent reporting is available?',
                answer:
                  'Transparent reports show all security awareness activities, metrics, and outcomes. Public accountability maintained. Accessible formats (PDF, CSV, HTML).',
              },
              {
                question: 'How is accessibility ensured?',
                answer:
                  'Accessible UX design. WCAG compliance. Screen reader support. Keyboard navigation. Diverse user support. Inclusive content.',
              },
              {
                question: 'What government security requirements are met?',
                answer:
                  'FISMA, FedRAMP, NIST 800-53, and more. On-premise deployment meets all requirements. Air-gapped option for highest security.',
              },
              {
                question: 'Can we integrate with government email systems?',
                answer:
                  'Yes. Phishy integrates with government email systems. On-premise integration. Air-gapped connectivity. No cloud dependencies.',
              },
              {
                question: 'What compliance frameworks are supported?',
                answer:
                  'FISMA, FedRAMP, NIST 800-53, FIPS 140-2, and more. Compliance evidence generated automatically. Audit-ready documentation.',
              },
        ]}
        cta={{
          heading: 'Ready to take action?',
          description: 'Let\'s schedule your live demo. See how on-premise deployment meets government security requirements.',
          buttonText: 'Request Demo',
          buttonHref: '/request-demo',
        }}
      />

      <FinalCtaSection />

      <Footer />
    </main>
  );
};

export default SolutionsGovernmentPage;

