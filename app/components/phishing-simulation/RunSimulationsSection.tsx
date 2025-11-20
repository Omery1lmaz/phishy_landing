import React from 'react';

const cx = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(' ');

type Highlight = {
  title: string;
  description: string;
  icon: React.ReactNode;
  angle: number;
};

const centralFeature = {
  badge: 'Command Center',
  title: 'Live insight for every phishing drill',
  description:
    'Coordinate campaigns, watch risk signals populate in seconds, and keep every stakeholder aligned with a single operational view.',
  points: ['Launch, pause, or clone any campaign instantly', 'Surface risky behaviours as soon as they appear', 'Push follow-up coaching without leaving the dashboard'],
} as const;

const highlightItems: Highlight[] = [
  {
    title: 'Rapid Launches',
    description: 'Spin up multi-step simulations in under a minute.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 3v14" />
        <path d="M6 11l6 6 6-6" />
      </svg>
    ),
    angle: -90,
  },
  {
    title: 'Signal Alerts',
    description: 'Route critical clicks to responders in real time.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 6v6" />
        <circle cx="12" cy="18" r="1" />
        <path d="M5 4a16 16 0 0 0 0 16" />
        <path d="M19 4a16 16 0 0 1 0 16" />
      </svg>
    ),
    angle: -30,
  },
  {
    title: 'Adaptive Playbooks',
    description: 'Swap payloads mid-campaign without drift.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M4 4h10l6 6v10H4z" />
        <path d="M14 4v6h6" />
      </svg>
    ),
    angle: 30,
  },
  {
    title: 'Executive Reports',
    description: 'Share ready-to-send summaries in two clicks.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M4 4h16v16H4z" />
        <path d="M8 16h2" />
        <path d="M8 12h8" />
        <path d="M8 8h8" />
      </svg>
    ),
    angle: 90,
  },
  {
    title: 'Auto Coaching',
    description: 'Trigger just-in-time learnings after mistakes.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 20v-4" />
        <path d="M8 20h8" />
        <path d="M12 4l7 4-7 4-7-4 7-4z" />
        <path d="M5 8v4a7 7 0 0 0 14 0V8" />
      </svg>
    ),
    angle: 150,
  },
  {
    title: 'Team Targeting',
    description: 'Segment audiences by behaviour or risk score.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M16 3a4 4 0 1 1-4 4" />
        <path d="M10 7a4 4 0 1 1-4 4" />
        <path d="M5 21v-2a4 4 0 0 1 4-4h.5" />
        <path d="M17 21v-2a4 4 0 0 0-3-3.87" />
      </svg>
    ),
    angle: 210,
  },
];

const ORBIT_RADIUS = 300;
const CONNECTOR_LENGTH = 210;

const CentralFeatureCard: React.FC<{ className?: string }> = ({ className }) => (
  <article
    className={cx(
      'relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 text-left shadow-[0_24px_70px_rgba(15,23,42,0.55)] backdrop-blur-xl md:p-9',
      className,
    )}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-transparent" />
    <div className="relative flex h-full flex-col justify-between gap-8">
      <div className="space-y-5">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-sky-200">
          {centralFeature.badge}
        </span>
        <div className="space-y-4">
          <h3 className="text-[1.85rem] font-semibold leading-snug text-white sm:text-3xl">{centralFeature.title}</h3>
          <p className="text-sm leading-relaxed text-white/70">{centralFeature.description}</p>
        </div>
      </div>
    </div>
  </article>
);

const HighlightCard: React.FC<{ item: Highlight; className?: string }> = ({ item, className }) => (
  <article
    className={cx(
      'group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-left shadow-[0_18px_50px_rgba(15,23,42,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/10',
      className,
    )}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    <div className="relative flex flex-col gap-4">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-500/10 text-primary-200">
        {item.icon}
      </span>
      <div className="space-y-2">
        <h4 className="text-lg font-semibold text-white">{item.title}</h4>
        <p className="text-sm leading-snug text-white/70">{item.description}</p>
      </div>
    </div>
  </article>
);

const RunSimulationsSection: React.FC = () => {
  return (
    <section id="run-simulations" className="relative overflow-hidden border-y border-white/5 bg-[#040511]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b1030] to-[#05071c]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.22),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(56,189,248,0.12),transparent_65%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />
      </div>

      <div className="relative container mx-auto px-6 py-24 space-y-16">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary-200">
            Run Simulations
          </span>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">Control every phishing drill from one mission hub</h2>
          <p className="text-base leading-relaxed text-white/70 sm:text-lg">
            Spin up campaigns, watch responses unfold live, and turn every signal into meaningful coaching without leaving the dashboard.
          </p>
        </div>

        <div className="mx-auto max-w-6xl space-y-12">
          {/* Mobil ve Tablet Görünümü */}
          <div className="grid gap-6 sm:grid-cols-2 lg:hidden">
            <CentralFeatureCard className="sm:col-span-2 sm:max-w-lg sm:justify-self-center" />
            {highlightItems.map((item) => (
              <HighlightCard key={item.title} item={item} />
            ))}
          </div>

          {/* Masaüstü Görünümü */}
          <div className="hidden lg:flex lg:items-center lg:justify-center">
            <div className="relative h-[680px] w-full max-w-[980px]">
              {/* Orbit Halkaları */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 z-0" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border-dashed border border-white/10 z-0" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-b from-white/10 via-white/0 to-transparent opacity-40 z-0" />

              {/* Connector Çizgiler */}
              {highlightItems.map((item) => (
                <span
                  key={`${item.title}-connector`}
                  className="pointer-events-none absolute left-1/2 top-1/2 hidden w-px origin-top bg-gradient-to-b from-white/20 via-white/5 to-transparent lg:block z-[1]"
                  style={{ height: `${CONNECTOR_LENGTH}px`, transform: `translate(-50%, -50%) rotate(${item.angle}deg)` }}
                />
              ))}

              {/* Highlight Kartları */}
              {highlightItems.map((item) => (
                <div
                  key={item.title}
                  className="absolute left-1/2 top-1/2 z-[5] w-[210px]"
                  style={{ transform: `translate(-50%, -50%) rotate(${item.angle}deg) translateY(-${ORBIT_RADIUS}px)` }}
                >
                  <div style={{ transform: `rotate(${-item.angle}deg)` }}>
                    <HighlightCard item={item} className="backdrop-blur-xl" />
                  </div>
                </div>
              ))}

              {/* Orta Kart */}
              <CentralFeatureCard className="absolute left-1/2 top-1/2 z-[2] w-[250px] -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RunSimulationsSection;
