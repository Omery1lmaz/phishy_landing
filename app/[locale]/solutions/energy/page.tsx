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
  AlertTriangle,
  Battery,
} from 'lucide-react';

const SolutionsEnergyPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Header />

      <HeroSection
        badge="By Industry / Energy & Utilities"
        title="Protect Critical Infrastructure with Field-Focused Micro Training"
        description="Deliver micro training (2-5 min) to field teams. Mitigate incidents with rapid response workflows. Increase risky moment awareness. Protect critical infrastructure from human error."
        centerCard={{
          badge: 'ROI',
          title: 'Prevented Incidents',
          description: 'Critical infrastructure',
          valueLabel: 'Annual Savings',
          value: {
            startValue: 0,
            endValue: 1500,
            unit: 'K',
            direction: 'up',
          },
        }}
        metrics={[
          {
            label: 'Field Engagement',
            icon: Users,
            badge: 'Increase',
            color: 'text-primary-300',
            startValue: 0,
            endValue: 90,
            startDelta: 0,
            endDelta: 90,
            unit: '%',
            direction: 'up',
          },
          {
            label: 'Incident Risk',
            icon: TrendingDown,
            badge: 'Reduction',
            color: 'text-secondary-300',
            startValue: 100,
            endValue: 25,
            startDelta: 0,
            endDelta: -75,
            unit: '%',
            direction: 'down',
          },
          {
            label: 'Protection',
            icon: Battery,
            badge: 'Infrastructure',
            color: 'text-white/70',
            startValue: 0,
            endValue: 100,
            startDelta: 0,
            endDelta: 100,
            unit: '%',
            direction: 'up',
          },
        ]}
      />

      <ProblemsTargetsSection
        badge="Problems"
        heading="Problems → Impact → Target Results"
        description="Addressing energy sector challenges with micro training, incident mitigation, and critical moment awareness"
        triplets={[
          {
            problem: 'Field teams lack time for long training sessions',
            impact: 'Training skipped. Knowledge gaps. Incidents increase.',
            result: 'Micro training (2-5 min) increases completion 80-90%. Field engagement improves.',
          },
          {
            problem: 'Critical infrastructure incidents have severe consequences',
            impact: 'Service disruptions. Safety risks. Regulatory penalties. Reputation damage.',
            result: 'Incident mitigation workflows reduce response time 70-85%. Risk decreased.',
          },
          {
            problem: 'Risky moments lack security awareness',
            impact: 'Vulnerabilities during critical operations. Human error causes incidents.',
            result: 'Risky moment awareness increases. Critical moment training delivered. Incidents prevented.',
          },
        ]}
      />

      <WorkflowSection
        steps={[
              {
                key: 'plan',
                icon: Target,
                label: 'Plan',
                description: 'Configure field-focused micro training. Identify risky moments. Set incident mitigation workflows.',
            video: 'https://www.pexels.com/download/video/5377697/',
              },
              {
                key: 'run',
                icon: Zap,
                label: 'Run',
                description: 'Deploy micro training to field teams. Short content (2-5 min). Mobile-friendly delivery.',
            video: 'https://www.pexels.com/download/video/4709300/',
              },
              {
                key: 'triage',
                icon: Shield,
                label: 'Mitigate',
                description: 'Incident mitigation workflows. Rapid response. Critical infrastructure protection.',
            video: 'https://www.pexels.com/download/video/5495781/',
              },
              {
                key: 'train',
                icon: Users,
                label: 'Aware',
                description: 'Risky moment awareness. Critical operation training. Just-in-time learning.',
            video: 'https://www.pexels.com/download/video/5377700/',
              },
              {
                key: 'report',
                icon: BarChart3,
                label: 'Report',
                description: 'Field engagement metrics. Incident trends. Critical infrastructure status.',
            video: 'https://www.pexels.com/download/video/5495898/',
          },
        ]}
        badge="How It Works"
        title="How It Works"
        description="5-step operational flow for energy & critical infrastructure"
      />

      <TimelineSection
        events={[
          {time: 'Week 1', title: 'Field training plan', description: 'Configure micro training. Identify risky moments. Set incident workflows.'},
          {time: 'Week 1-2', title: 'Mobile deployment', description: 'Deploy mobile-friendly training. Field team onboarding. Test delivery.'},
          {time: 'Week 2-3', title: 'Micro training delivery', description: 'Deploy short content to field teams. Track completion. Monitor engagement.'},
          {time: 'Week 3-4', title: 'Incident mitigation', description: 'Deploy mitigation workflows. Test response. Validate protection.'},
          {time: 'Month-end', title: 'Infrastructure status', description: 'Review field engagement. Analyze incident trends. Validate protection.'},
        ]}
        badge="Timeline"
        heading="Implementation Timeline"
      />

      <KpiSection
        kpis={[
          {label: 'Field Engagement', value: '↑', direction: 'up', tooltip: 'Field engagement increases 80-90%'},
          {label: 'Incident Risk', value: '↓', direction: 'down', tooltip: 'Incident risk decreases 60-75%'},
          {label: 'Critical Moment Awareness', value: '↑', direction: 'up', tooltip: 'Critical moment awareness increases 70-85%'},
          {label: 'Training Completion', value: '↑', direction: 'up', tooltip: 'Training completion increases to 85-95%'},
          {label: 'Response Time', value: '↓', direction: 'down', tooltip: 'Incident response time decreases 70-85%'},
        ]}
        centerCard={{
          badge: 'ROI Model',
          title: 'ROI Formula',
          description: 'Prevented incidents × Average incident cost ($100K-1M+) + Avoided service disruptions = ROI estimate',
          content: 'Example: 3 prevented critical infrastructure incidents × $500K average cost = $1.5M annual savings. Avoided service disruptions ($200K-2M). Program cost typically $80K-150K annually. Industry benchmark: Energy organizations with field-focused training see 60-75% reduction in human error incidents.',
        }}
        badge="KPI & ROI"
        heading="Measurable Business Impact"
      />

      <SecuritySection badge="Security & Privacy" heading="Enterprise-Grade Security" description="Your data security and privacy are our top priorities, with comprehensive protection across all deployment models." dataProtection={{title:'Data Protection',subtitle:'Enterprise encryption',icon:Shield,chartData:[{day:'Mon',encryption:95,access:98,audit:90},{day:'Tue',encryption:97,access:99,audit:92},{day:'Wed',encryption:96,access:97,audit:91},{day:'Thu',encryption:98,access:99,audit:93},{day:'Fri',encryption:99,access:100,audit:95},{day:'Sat',encryption:97,access:98,audit:92},{day:'Sun',encryption:99,access:100,audit:94}],chartConfig:{encryption:{label:'Encryption',color:'rgba(147,51,234,0.8)'},access:{label:'Access Control',color:'rgba(168,85,247,0.8)'},audit:{label:'Audit Logs',color:'rgba(147,51,234,0.6)'}},features:[{icon:FileText,title:'End-to-End Encryption',subtitle:'AES-256',color:'primary'},{icon:Server,title:'On-Premise Deployment',subtitle:'Available',color:'purple'}]}} accessControl={{title:'Access Control',subtitle:'Enterprise authentication',icon:Lock,chartData:[{day:'Mon',mfa:95,sso:92,rbac:98},{day:'Tue',mfa:96,sso:93,rbac:99},{day:'Wed',mfa:95,sso:92,rbac:98},{day:'Thu',mfa:97,sso:94,rbac:99},{day:'Fri',mfa:98,sso:95,rbac:100},{day:'Sat',mfa:96,sso:93,rbac:99},{day:'Sun',mfa:98,sso:95,rbac:100}],chartConfig:{mfa:{label:'MFA',color:'rgba(147,51,234,0.8)'},sso:{label:'SSO',color:'rgba(168,85,247,0.8)'},rbac:{label:'RBAC',color:'rgba(147,51,234,0.6)'}},stats:[{label:'MFA Enabled',value:'98%',color:'primary'},{label:'SSO Active',value:'95%',color:'purple'},{label:'RBAC',value:'100%',color:'primary'}],yAxisDomain:[90,100]}} compliance={{title:'Compliance Status',subtitle:'Enterprise standards',icon:CheckCircle2,items:[{icon:FileText,title:'SOC2',subtitle:'Type II',percentage:100,color:'primary'},{icon:Shield,title:'GDPR',subtitle:'CCPA',percentage:100,color:'purple'},{icon:CheckCircle2,title:'ISO 27001',subtitle:'Security',percentage:100,color:'primary'},{icon:Lock,title:'SOC2',subtitle:'Coming',percentage:95,color:'purple'}]}} monitoring={{title:'Real-time Monitoring',subtitle:'24/7 security oversight',icon:BarChart3,uptimePercentage:'99.9%',uptimeLabel:'Uptime SLA',statusItems:[{icon:Shield,title:'Encryption',subtitle:'Active',color:'primary'},{icon:Lock,title:'MFA',subtitle:'Enabled',color:'purple'},{icon:FileText,title:'Audit Logs',subtitle:'24/7',color:'primary'}]}} securityManagement={{title:'Security Management',subtitle:'Enterprise platform',icon:Server,description:'Real-time monitoring. Seamless automation. Total control with features that keep your security engine running smooth.',stats:[{value:'99.9%',label:'Uptime',color:'primary'},{value:'24/7',label:'Monitoring',color:'purple'},{value:'100%',label:'Secure',color:'primary'},{value:'Zero',label:'Breaches',color:'purple'}]}} />

      <FAQSection
        faqs={[
              {
                question: 'What is micro training for field teams?',
                answer:
                  'Micro training is short, focused content (2-5 minutes) designed for field teams with limited time. Mobile-friendly delivery. High completion rates. Effective learning.',
              },
              {
                question: 'How does mobile-friendly delivery work?',
                answer:
                  'Training content is optimized for mobile devices. Works offline. Syncs when connectivity available. Perfect for remote field locations.',
              },
              {
                question: 'What incident mitigation workflows are available?',
                answer:
                  'Rapid response workflows. Critical infrastructure protection. Field team support. Automated escalation. Incident tracking.',
              },
              {
                question: 'How are risky moments identified?',
                answer:
                  'Risky moments are critical operations or situations where human error has severe consequences. Training delivered just-in-time during these moments.',
              },
              {
                question: 'Can we customize training for field operations?',
                answer:
                  'Yes. All training content is fully customizable. Field-specific scenarios. Operations-focused content. Custom modules available.',
              },
              {
                question: 'What reporting is available for field teams?',
                answer:
                  'Field engagement metrics. Completion rates. Incident trends. Critical infrastructure status. Mobile-friendly dashboards.',
              },
              {
                question: 'How does offline training work?',
                answer:
                  'Training content can be downloaded for offline access. Completion tracked locally. Synced when connectivity available. Perfect for remote locations.',
              },
        ]}
        badge="FAQ's"
        heading="Frequently Asked Questions"
      />

      <FinalCtaSection
        badge="Get Started"
        title="Ready to Protect Critical Infrastructure?"
        description="Let's schedule your live demo. See how field-focused micro training protects critical infrastructure."
        buttonText="Request Demo"
        buttonHref="/request-demo"
      />

      <Footer />
    </main>
  );
};

export default SolutionsEnergyPage;

