import React from 'react';

const cx = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(' ');

type ChartPoint = {
  label: string;
  value: number;
};

type InsightHighlight = {
  title: string;
  description: string;
  icon: React.ReactNode;
  statLabel: string;
  statValue: string;
  trendLabel: string;
  trendDelta: string;
  trendClass: string;
  iconClass: string;
  accentClass: string;
  layoutClass?: string;
};

const centralInsight = {
  badge: 'Outcomes Hub',
  title: 'Measure resilience in real time',
  description:
    'Surface how engagement, reporting velocity, and remediation quality evolve after every campaign. Share one source of truth with leaders, responders, and educators.',
  highlights: ['Live adoption score across business units', 'Automated leadership summaries in seconds', 'Benchmarks calibrated to your risk model'],
  trend: [
    { label: 'Jan', value: 52 },
    { label: 'Feb', value: 58 },
    { label: 'Mar', value: 64 },
    { label: 'Apr', value: 71 },
    { label: 'May', value: 76 },
    { label: 'Jun', value: 81 },
  ] as const,
} as const;

const insightHighlights: InsightHighlight[] = [
  {
    title: 'Engagement Pulse',
    description: 'Track open, click, and credential submission rates in a single operational panel.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M4 20l4-8 4 6 4-10 4 8" />
        <path d="M3 3h18" />
      </svg>
    ),
    statLabel: 'Average open rate',
    statValue: '74%',
    trendLabel: 'Monthly lift',
    trendDelta: '+12%',
    trendClass: 'text-emerald-200',
    iconClass: 'text-primary-200 bg-primary-500/10',
    accentClass: 'from-primary-400/20',
    layoutClass: 'lg:col-start-1 lg:row-start-1',
  },
  {
    title: 'Reflex Reporting',
    description: 'Quantify how rapidly employees escalate suspicious messages after simulations.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M5 12l5 5L20 7" />
        <path d="M4 4h6" />
        <path d="M4 8h4" />
      </svg>
    ),
    statLabel: 'Median response time',
    statValue: '2.1h',
    trendLabel: 'Week-over-week',
    trendDelta: '-32%',
    trendClass: 'text-sky-200',
    iconClass: 'text-emerald-200 bg-emerald-500/10',
    accentClass: 'from-emerald-400/20',
    layoutClass: 'lg:col-start-4 lg:row-start-1',
  },
  {
    title: 'Risk Interventions',
    description: 'See how targeted coaching reduces repeat offenders and high-risk behaviours.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 3v18" />
        <path d="M5 10h14" />
        <path d="M7 5v6" />
        <path d="M17 13v6" />
      </svg>
    ),
    statLabel: 'Repeat-click drop',
    statValue: '46%',
    trendLabel: 'Quarterly trend',
    trendDelta: '-18%',
    trendClass: 'text-emerald-200',
    iconClass: 'text-amber-200 bg-amber-500/10',
    accentClass: 'from-amber-400/20',
    layoutClass: 'lg:col-start-4 lg:row-start-2',
  },
  {
    title: 'Executive Visibility',
    description: 'Deliver audit-ready impact summaries with supporting evidence in two clicks.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M4 4h16v16H4z" />
        <path d="M8 16h2" />
        <path d="M8 12h8" />
        <path d="M8 8h8" />
      </svg>
    ),
    statLabel: 'Reports auto-built',
    statValue: '38',
    trendLabel: 'Time saved',
    trendDelta: '5.4h',
    trendClass: 'text-sky-200',
    iconClass: 'text-sky-200 bg-sky-500/10',
    accentClass: 'from-sky-400/20',
    layoutClass: 'lg:col-start-1 lg:row-start-2',
  },
  {
    title: 'Human Firewall',
    description: 'Scorecard employees and teams against baseline resilience indicators.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12h6" />
        <path d="M9 8h6" />
      </svg>
    ),
    statLabel: 'Org resilience index',
    statValue: '87',
    trendLabel: 'Against peers',
    trendDelta: '+9pts',
    trendClass: 'text-emerald-200',
    iconClass: 'text-purple-200 bg-purple-500/10',
    accentClass: 'from-purple-400/20',
    layoutClass: 'lg:col-span-3 lg:row-span-1 lg:col-start-1 lg:row-start-3',
  },
  {
    title: 'Signal Quality',
    description: 'Monitor false positive rate and triage accuracy from reporting workflows.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M3 12h18" />
        <path d="M12 3v18" />
        <path d="M6 6l12 12" />
      </svg>
    ),
    statLabel: 'Signal fidelity',
    statValue: '94%',
    trendLabel: 'False positives',
    trendDelta: '-7%',
    trendClass: 'text-rose-200',
    iconClass: 'text-rose-200 bg-rose-500/10',
    accentClass: 'from-rose-400/20',
    layoutClass: 'lg:col-start-4 lg:row-start-3',
  },
];

const TrendBarChart: React.FC<{ data: readonly ChartPoint[] }> = ({ data }) => {
  const maxValue = Math.max(...data.map((point) => point.value));

  return (
    <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-6">
      <div className="flex items-end justify-between gap-3">
        {data.map((point) => (
          <div key={point.label} className="flex flex-1 flex-col items-center gap-3 text-center">
            <div className="relative flex h-28 w-full items-end justify-center">
              <div className="relative w-full overflow-hidden rounded-full bg-white/5">
                <div
                  className="w-full rounded-full bg-gradient-to-t from-sky-500/50 via-primary-500/70 to-white"
                  style={{ height: `${(point.value / maxValue) * 100}%` }}
                />
              </div>
              <span className="absolute -top-8 text-xs font-semibold text-white/80">{point.value}</span>
            </div>
            <span className="text-xs uppercase tracking-[0.2em] text-white/40">{point.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const CentralInsightCard: React.FC<{ className?: string }> = ({ className }) => (
  <article
    className={cx(
      'relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 text-left shadow-[0_24px_70px_rgba(15,23,42,0.55)] backdrop-blur-xl md:p-9',
      className,
    )}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-transparent" />
    <div className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-primary-500/20 blur-3xl" />
    <div className="absolute -left-20 bottom-[-60px] h-52 w-52 rounded-full bg-sky-400/10 blur-3xl" />
    <div className="relative flex h-full flex-col justify-between gap-8">
      <div className="space-y-5">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-primary-100">
          {centralInsight.badge}
        </span>
        <div className="space-y-4">
          <h3 className="text-[1.85rem] font-semibold leading-snug text-white sm:text-3xl">{centralInsight.title}</h3>
          <p className="text-sm leading-relaxed text-white/70">{centralInsight.description}</p>
        </div>
        <ul className="space-y-2 text-sm text-white/60">
          {centralInsight.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-1.5 inline-flex h-2 w-2 flex-none rounded-full bg-primary-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <TrendBarChart data={centralInsight.trend} />
    </div>
  </article>
);

const InsightHighlightCard: React.FC<{ insight: InsightHighlight; className?: string }> = ({ insight, className }) => (
  <article
    className={cx(
      'group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-left shadow-[0_18px_50px_rgba(15,23,42,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/10',
      className,
    )}
  >
    <div className={cx('absolute inset-0 bg-gradient-to-br via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100', insight.accentClass)} />
    <div className="relative flex flex-col gap-5">
      <span className={cx('flex h-11 w-11 items-center justify-center rounded-xl text-white/80', insight.iconClass)}>
        {insight.icon}
      </span>
      <div className="space-y-2">
        <h4 className="text-lg font-semibold text-white">{insight.title}</h4>
        <p className="text-sm leading-snug text-white/70">{insight.description}</p>
      </div>
      <div className="rounded-xl border border-white/10 bg-black/30 p-4">
        <dl className="space-y-3">
          <div className="space-y-1">
            <dt className="text-xs uppercase tracking-[0.18em] text-white/50">{insight.statLabel}</dt>
            <dd className="text-2xl font-semibold text-white">{insight.statValue}</dd>
          </div>
          <div className="flex items-center justify-between text-xs text-white/60">
            <span className="uppercase tracking-[0.3em] text-white/40">{insight.trendLabel}</span>
            <span className={cx('font-semibold', insight.trendClass)}>{insight.trendDelta}</span>
          </div>
        </dl>
      </div>
    </div>
  </article>
);

const SeeResultsSection: React.FC = () => {
  return (
    <section id="see-results" className="relative overflow-hidden border-y border-white/5 bg-[#090919]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#121437] to-[#080a1f]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(168,85,247,0.12),transparent_65%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] opacity-10" />
      </div>

      <div className="relative container mx-auto px-6 py-24 space-y-16">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-secondary-200">
            See the Results
          </span>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">Transform data into measurable defence gains</h2>
          <p className="text-base leading-relaxed text-white/70 sm:text-lg">
            Build a culture of reporting and resilience with dashboards that show progress as it happens.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:auto-rows-[minmax(0,1fr)] lg:grid-cols-4 lg:[grid-auto-flow:dense]">
            <CentralInsightCard className="sm:col-span-2 sm:max-w-xl sm:justify-self-center lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:self-stretch lg:max-w-none lg:justify-self-stretch" />
            {insightHighlights.map((insight) => (
              <InsightHighlightCard key={insight.title} insight={insight} className={cx('backdrop-blur-xl h-full', insight.layoutClass)} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeeResultsSection;

