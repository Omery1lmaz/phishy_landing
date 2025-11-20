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
  Heart,
} from 'lucide-react';

const SolutionsHealthcarePage: React.FC = () => {
  const heroMetrics: HeroMetric[] = [
    {
      label: 'Clinical Engagement',
      icon: Heart,
      badge: 'Increase',
      color: 'text-primary-300',
      startValue: 0,
      endValue: 95,
      startDelta: 0,
      endDelta: 95,
      unit: '%',
      direction: 'up',
    },
    {
      label: 'PHI Protection',
      icon: Shield,
      badge: 'Awareness',
      color: 'text-secondary-300',
      startValue: 0,
      endValue: 90,
      startDelta: 0,
      endDelta: 90,
      unit: '%',
      direction: 'up',
    },
    {
      label: 'Audit Readiness',
      icon: FileText,
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

  const centerCard: CenterCardData = {
    badge: 'ROI',
    title: 'Prevented Breaches',
    description: 'Average breach cost',
    valueLabel: 'Per Breach',
    value: {
      startValue: 0,
      endValue: 5000,
      unit: 'K',
      direction: 'up',
    },
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />

      <HeroSection
        badge="By Industry / Healthcare & Hospitals"
        title="PHI Protection with Short Content & HIPAA Compliance"
        description="Deliver short content (2-3 min) for clinical teams. Emphasize PHI sensitivity. Generate HIPAA audit evidence. Protect patient data and ensure compliance."
        centerCard={centerCard}
        metrics={heroMetrics}
      />

      <ProblemsTargetsSection
        badge="Problems"
        heading="Problems → Impact → Target Results"
        description="Addressing healthcare challenges with time-efficient training, PHI awareness, and HIPAA compliance"
        triplets={[
          {
            problem: 'Clinical teams have no time for long training sessions',
            impact: 'Training skipped. PHI awareness gaps. Breaches occur.',
            result: 'Short content (2-3 min) increases completion 85-95%. Clinical engagement improves.',
          },
          {
            problem: 'PHI sensitivity not emphasized in training',
            impact: 'PHI breaches. HIPAA violations. Fines up to $1.5M per incident.',
            result: 'PHI sensitivity training increases awareness 80-90%. Breaches prevented.',
          },
          {
            problem: 'HIPAA audit evidence missing or incomplete',
            impact: 'Audit failures. Regulatory penalties. Compliance gaps.',
            result: 'Audit-ready documentation. HIPAA evidence generated. Compliance demonstrated.',
          },
        ]}
      />

      <WorkflowSection
        steps={[
              {
                key: 'plan',
                icon: Target,
                label: 'Plan',
                description: 'Configure short content for clinical teams. Set PHI sensitivity training. Define HIPAA requirements.',
            video: 'https://www.pexels.com/download/video/5377697/',
              },
              {
                key: 'run',
                icon: Zap,
                label: 'Run',
                description: 'Deploy short content (2-3 min) to clinical teams. PHI awareness campaigns. Mobile-friendly delivery.',
            video: 'https://www.pexels.com/download/video/4709300/',
              },
              {
                key: 'triage',
                icon: Shield,
                label: 'Protect',
                description: 'PHI sensitivity emphasized. Breach prevention. Risk awareness increased.',
            video: 'https://www.pexels.com/download/video/5495781/',
              },
              {
                key: 'train',
                icon: Users,
                label: 'Train',
                description: 'Short training delivered. PHI awareness reinforced. Completion tracked.',
            video: 'https://www.pexels.com/download/video/5377700/',
              },
              {
                key: 'report',
                icon: BarChart3,
                label: 'Audit',
                description: 'HIPAA evidence generated. Audit-ready documentation. Compliance demonstrated.',
            video: 'https://www.pexels.com/download/video/5495898/',
          },
        ]}
        badge="How It Works"
        title="5-step operational flow for healthcare organizations"
      />

      <TimelineSection
        events={[
          {time: 'Week 1', title: 'Clinical content setup', description: 'Configure short content for clinical teams. PHI sensitivity modules. HIPAA requirements.'},
          {time: 'Week 1-2', title: 'Clinical team deployment', description: 'Deploy short training to clinical teams. Mobile-friendly delivery. Track completion.'},
          {time: 'Week 2-3', title: 'PHI awareness reinforcement', description: 'PHI sensitivity training. Breach prevention. Risk awareness.'},
          {time: 'Week 3-4', title: 'HIPAA evidence generation', description: 'Generate HIPAA compliance evidence. Audit-ready documentation. Compliance validation.'},
          {time: 'Month-end', title: 'Audit readiness', description: 'Review audit documentation. HIPAA compliance validated. Ready for audits.'},
        ]}
        badge="Timeline"
        heading="Deployment & Impact Timeline"
      />

      <KpiSection
        kpis={[
          {label: 'Clinical Engagement', value: '↑', direction: 'up', tooltip: 'Clinical engagement increases 85-95%'},
          {label: 'PHI Protection', value: '↑', direction: 'up', tooltip: 'PHI protection awareness increases 80-90%'},
          {label: 'Audit Readiness', value: '↑', direction: 'up', tooltip: 'Audit readiness increases to 100%'},
          {label: 'Training Completion', value: '↑', direction: 'up', tooltip: 'Training completion increases to 90%+'},
          {label: 'PHI Breach Risk', value: '↓', direction: 'down', tooltip: 'PHI breach risk decreases 70-85%'},
        ]}
        centerCard={{
          badge: 'ROI Model',
          title: 'ROI Formula',
          description: 'Prevented PHI breaches × Average breach cost ($1M-10M) + Avoided HIPAA fines = ROI estimate',
          content: 'Example: 2 prevented PHI breaches × $5M average cost = $10M annual savings. Avoided HIPAA fines ($1.5M per incident). Program cost typically $60K-120K annually. Industry benchmark: Healthcare organizations with PHI awareness training see 70-85% reduction in PHI breach risk.',
        }}
        badge="KPI & ROI"
        heading="Measurable Business Impact"
        description="Transform your healthcare security with quantifiable results that protect PHI and ensure HIPAA compliance."
      />

      <SecuritySection badge="Security & Privacy" heading="Enterprise-Grade Security" description="Your data security and privacy are our top priorities, with comprehensive protection across all deployment models." dataProtection={{title:'Data Protection',subtitle:'Enterprise encryption',icon:Shield,chartData:[{day:'Mon',encryption:95,access:98,audit:90},{day:'Tue',encryption:97,access:99,audit:92},{day:'Wed',encryption:96,access:97,audit:91},{day:'Thu',encryption:98,access:99,audit:93},{day:'Fri',encryption:99,access:100,audit:95},{day:'Sat',encryption:97,access:98,audit:92},{day:'Sun',encryption:99,access:100,audit:94}],chartConfig:{encryption:{label:'Encryption',color:'rgba(147,51,234,0.8)'},access:{label:'Access Control',color:'rgba(168,85,247,0.8)'},audit:{label:'Audit Logs',color:'rgba(147,51,234,0.6)'}},features:[{icon:FileText,title:'End-to-End Encryption',subtitle:'AES-256',color:'primary'},{icon:Server,title:'On-Premise Deployment',subtitle:'Available',color:'purple'}]}} accessControl={{title:'Access Control',subtitle:'Enterprise authentication',icon:Lock,chartData:[{day:'Mon',mfa:95,sso:92,rbac:98},{day:'Tue',mfa:96,sso:93,rbac:99},{day:'Wed',mfa:95,sso:92,rbac:98},{day:'Thu',mfa:97,sso:94,rbac:99},{day:'Fri',mfa:98,sso:95,rbac:100},{day:'Sat',mfa:96,sso:93,rbac:99},{day:'Sun',mfa:98,sso:95,rbac:100}],chartConfig:{mfa:{label:'MFA',color:'rgba(147,51,234,0.8)'},sso:{label:'SSO',color:'rgba(168,85,247,0.8)'},rbac:{label:'RBAC',color:'rgba(147,51,234,0.6)'}},stats:[{label:'MFA Enabled',value:'98%',color:'primary'},{label:'SSO Active',value:'95%',color:'purple'},{label:'RBAC',value:'100%',color:'primary'}],yAxisDomain:[90,100]}} compliance={{title:'Compliance Status',subtitle:'Enterprise standards',icon:CheckCircle2,items:[{icon:FileText,title:'SOC2',subtitle:'Type II',percentage:100,color:'primary'},{icon:Shield,title:'GDPR',subtitle:'CCPA',percentage:100,color:'purple'},{icon:CheckCircle2,title:'ISO 27001',subtitle:'Security',percentage:100,color:'primary'},{icon:Lock,title:'HIPAA',subtitle:'Healthcare',percentage:100,color:'purple'}]}} monitoring={{title:'Real-time Monitoring',subtitle:'24/7 security oversight',icon:BarChart3,uptimePercentage:'99.9%',uptimeLabel:'Uptime SLA',statusItems:[{icon:Shield,title:'Encryption',subtitle:'Active',color:'primary'},{icon:Lock,title:'MFA',subtitle:'Enabled',color:'purple'},{icon:FileText,title:'Audit Logs',subtitle:'24/7',color:'primary'}]}} securityManagement={{title:'Security Management',subtitle:'Enterprise platform',icon:Server,description:'Real-time monitoring. Seamless automation. Total control with features that keep your security engine running smooth.',stats:[{value:'99.9%',label:'Uptime',color:'primary'},{value:'24/7',label:'Monitoring',color:'purple'},{value:'100%',label:'Secure',color:'primary'},{value:'Zero',label:'Breaches',color:'purple'}]}} />

      <FAQSection
        faqs={[
              {
                question: 'What is short content for clinical teams?',
                answer:
                  'Short content is 2-3 minute training modules designed for busy clinical teams. Mobile-friendly. High completion rates. Effective learning.',
              },
              {
                question: 'How is PHI sensitivity emphasized?',
                answer:
                  'PHI sensitivity training is integrated into all content. Breach prevention emphasized. Real-world scenarios. Awareness reinforced.',
              },
              {
                question: 'What HIPAA compliance evidence is generated?',
                answer:
                  'HIPAA compliance evidence includes training records, completion certificates, awareness metrics, and audit trails. Generated automatically in audit-ready format.',
              },
              {
                question: 'Can we customize content for clinical workflows?',
                answer:
                  'Yes. All content is fully customizable. Clinical-specific scenarios. Workflow integration. Custom modules available.',
              },
              {
                question: 'How does mobile-friendly delivery work?',
                answer:
                  'Training content optimized for mobile devices. Works on tablets and phones. Perfect for clinical teams on the go.',
              },
              {
                question: 'What audit documentation is available?',
                answer:
                  'Audit-ready documentation includes training records, completion certificates, awareness metrics, HIPAA mapping, and audit trails. PDF/CSV exports.',
              },
              {
                question: 'Can we integrate with EMR systems?',
                answer:
                  'Yes. Phishy integrates with major EMR systems (Epic, Cerner). Clinical team sync. Workflow integration available.',
              },
        ]}
        cta={{
          heading: 'Ready to take action?',
          description: 'Let\'s schedule your live demo. See how short content protects PHI and ensures HIPAA compliance.',
          buttonText: 'Request Demo',
          buttonHref: '/request-demo',
        }}
      />

      <FinalCtaSection />

      <Footer />
    </main>
  );
};

export default SolutionsHealthcarePage;

