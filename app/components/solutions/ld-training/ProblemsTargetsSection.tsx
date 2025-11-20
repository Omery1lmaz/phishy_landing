'use client';

import React, {useEffect, useRef} from 'react';
import {useTranslations} from 'next-intl';
import {ArrowRight, AlertCircle, Target, TrendingUp, FileText, GraduationCap, BarChart3, CheckCircle, AlertTriangle} from 'lucide-react';
import {GlowBadge} from '@/app/components/ui/glow-badge';
import {Card, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {gsap, ScrollTrigger} from '@/app/utils/gsap';

const problemDefaults = {
  1: {
    icon: FileText,
    color: 'text-primary-300',
  },
  2: {
    icon: Target,
    color: 'text-primary-300',
  },
  3: {
    icon: BarChart3,
    color: 'text-primary-300',
  },
} as const;

const impactDefaults = {
  1: {
    icon: AlertTriangle,
    color: 'text-orange-300',
  },
  2: {
    icon: AlertCircle,
    color: 'text-orange-300',
  },
  3: {
    icon: AlertCircle,
    color: 'text-orange-300',
  },
} as const;

const resultDefaults = {
  1: {
    icon: CheckCircle,
    color: 'text-secondary-300',
  },
  2: {
    icon: TrendingUp,
    color: 'text-secondary-300',
  },
  3: {
    icon: GraduationCap,
    color: 'text-secondary-300',
  },
} as const;

const ProblemsTargetsSection: React.FC = () => {
  const t = useTranslations('Pages.SolutionsLDTraining');
  const sectionRef = useRef<HTMLElement>(null);
  const problemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const impactRefs = useRef<(HTMLDivElement | null)[]>([]);
  const resultRefs = useRef<(HTMLDivElement | null)[]>([]);
  const arrow1Refs = useRef<(HTMLDivElement | null)[]>([]);
  const arrow2Refs = useRef<(HTMLDivElement | null)[]>([]);
  const pairRefs = useRef<(HTMLDivElement | null)[]>([]);

  const problemTargetPairs = [0, 1, 2].map((index) => ({
    problem: {
      title: t(`problems.${index}.problem`, {
        defaultMessage: index === 0
          ? 'Training completion not tracked automatically'
          : index === 1
            ? 'Content not segmented by role or risk'
            : 'Training effectiveness not measured',
      }),
      description: '',
      icon: problemDefaults[(index + 1) as 1 | 2 | 3].icon,
      color: problemDefaults[(index + 1) as 1 | 2 | 3].color,
    },
    impact: {
      title: t(`problems.${index}.impact`, {
        defaultMessage:
          index === 0
            ? 'Completion rates unknown. Certificates manual. Compliance gaps occur.'
            : index === 1
              ? 'One-size-fits-all training. Low engagement. Resources wasted.'
              : 'ROI unclear. Program improvements not data-driven. Budget support wanes.',
      }),
      description: '',
      icon: impactDefaults[(index + 1) as 1 | 2 | 3].icon,
      color: impactDefaults[(index + 1) as 1 | 2 | 3].color,
    },
    result: {
      title: t(`problems.${index}.result`, {
        defaultMessage:
          index === 0
            ? '100% completion tracking. Automatic certificate generation. Compliance evidence maintained.'
            : index === 1
              ? 'Role-based segmentation. Risk-based targeting. Engagement increases 60-80%.'
              : 'Effectiveness metrics tracked. Improvement scores calculated. ROI visible.',
      }),
      description: '',
      icon: resultDefaults[(index + 1) as 1 | 2 | 3].icon,
      color: resultDefaults[(index + 1) as 1 | 2 | 3].color,
    },
  }));

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Set initial states for all elements
      problemRefs.current.forEach((ref) => {
        if (ref) {
          gsap.set(ref, {
            opacity: 0,
            y: 50,
          });
        }
      });

      impactRefs.current.forEach((ref) => {
        if (ref) {
          gsap.set(ref, {
            opacity: 0,
            y: 50,
          });
        }
      });

      arrow1Refs.current.forEach((ref) => {
        if (ref) {
          gsap.set(ref, {
            opacity: 0,
            scale: 0.8,
          });
        }
      });

      arrow2Refs.current.forEach((ref) => {
        if (ref) {
          gsap.set(ref, {
            opacity: 0,
            scale: 0.8,
          });
        }
      });

      resultRefs.current.forEach((ref) => {
        if (ref) {
          gsap.set(ref, {
            opacity: 0,
            x: 50,
          });
        }
      });

      // Create ScrollTrigger timeline for each pair
      pairRefs.current.forEach((pairRef, index) => {
        if (!pairRef) return;

        const problemRef = problemRefs.current[index];
        const impactRef = impactRefs.current[index];
        const arrow1Ref = arrow1Refs.current[index];
        const arrow2Ref = arrow2Refs.current[index];
        const resultRef = resultRefs.current[index];

        if (!problemRef || !impactRef || !arrow1Ref || !arrow2Ref || !resultRef) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pairRef,
            start: 'top 85%',
            end: '+=80vh',
            scrub: true,
          },
        });

        // Problem card fade in + slide up (starts immediately)
        tl.to(
          problemRef,
          {
            opacity: 1,
            y: 0,
            duration: 0.25,
            ease: 'power2.out',
          },
          0
        );

        // First arrow fade in + scale up (starts at 25% of timeline)
        tl.to(
          arrow1Ref,
          {
            opacity: 1,
            scale: 1,
            duration: 0.25,
            ease: 'power2.out',
          },
          0.25
        );

        // Impact card fade in + slide up (starts at 50% of timeline)
        tl.to(
          impactRef,
          {
            opacity: 1,
            y: 0,
            duration: 0.25,
            ease: 'power2.out',
          },
          0.5
        );

        // Second arrow fade in + scale up (starts at 75% of timeline)
        tl.to(
          arrow2Ref,
          {
            opacity: 1,
            scale: 1,
            duration: 0.25,
            ease: 'power2.out',
          },
          0.75
        );

        // Result card fade in + slide in (starts at 100% of timeline)
        tl.to(
          resultRef,
          {
            opacity: 1,
            x: 0,
            duration: 0.3,
            ease: 'power2.out',
          },
          1
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="overview" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050017] via-[#0a001f] to-[#050017]" />

        {/* Animated decorative lines */}
        <svg
          className="absolute inset-0 w-full h-full overflow-visible"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="ldTrainingLineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(147, 51, 234, 0.3)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgba(147, 51, 234, 0.4)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.3)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="ldTrainingLineGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgba(168, 85, 247, 0.4)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(147, 51, 234, 0.3)" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Animated curved lines */}
          <path
            d="M 0 200 Q 200 100, 400 200 T 800 200"
            fill="none"
            stroke="url(#ldTrainingLineGradient1)"
            strokeWidth="1.5"
            className="animate-draw-line-1"
            opacity="0.6"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 100 400 Q 300 300, 500 400 T 900 400"
            fill="none"
            stroke="url(#ldTrainingLineGradient2)"
            strokeWidth="1.5"
            className="animate-draw-line-2"
            opacity="0.5"
            vectorEffect="non-scaling-stroke"
          />

          {/* Animated diagonal lines */}
          <line
            x1="120"
            y1="0"
            x2="240"
            y2="800"
            stroke="rgba(147, 51, 234, 0.2)"
            strokeWidth="1"
            className="animate-draw-diagonal-1"
            vectorEffect="non-scaling-stroke"
          />
          <line
            x1="960"
            y1="0"
            x2="1080"
            y2="800"
            stroke="rgba(59, 130, 246, 0.2)"
            strokeWidth="1"
            className="animate-draw-diagonal-2"
            vectorEffect="non-scaling-stroke"
          />

          {/* Animated circles */}
          <circle
            cx="180"
            cy="160"
            r="3"
            fill="rgba(147, 51, 234, 0.4)"
            className="animate-pulse-glow"
          />
          <circle
            cx="1020"
            cy="240"
            r="4"
            fill="rgba(59, 130, 246, 0.4)"
            className="animate-pulse-glow"
            style={{animationDelay: '0.5s'}}
          />
          <circle
            cx="240"
            cy="560"
            r="2.5"
            fill="rgba(168, 85, 247, 0.4)"
            className="animate-pulse-glow"
            style={{animationDelay: '1s'}}
          />
          <circle
            cx="900"
            cy="640"
            r="3.5"
            fill="rgba(99, 102, 241, 0.4)"
            className="animate-pulse-glow"
            style={{animationDelay: '1.5s'}}
          />
        </svg>

        {/* Floating particles */}
        <div
          className="absolute top-20 left-10 w-1 h-1 bg-primary-400/40 rounded-full animate-float-particle"
          style={{animationDelay: '0s'}}
        />
        <div
          className="absolute top-40 right-20 w-1.5 h-1.5 bg-secondary-400/40 rounded-full animate-float-particle"
          style={{animationDelay: '1s'}}
        />
        <div
          className="absolute bottom-32 left-1/4 w-1 h-1 bg-primary-300/40 rounded-full animate-float-particle"
          style={{animationDelay: '2s'}}
        />
        <div
          className="absolute bottom-20 right-1/3 w-1.5 h-1.5 bg-secondary-300/40 rounded-full animate-float-particle"
          style={{animationDelay: '0.5s'}}
        />
        <div
          className="absolute top-1/2 left-1/3 w-1 h-1 bg-primary-500/40 rounded-full animate-float-particle"
          style={{animationDelay: '1.5s'}}
        />
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <div className="inline-block mb-4">
            <GlowBadge variant="primary" className="px-4 py-1.5">
              {t('problems.badge', {defaultMessage: 'Problems & Solutions'})}
            </GlowBadge>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {t('problems.heading', {defaultMessage: 'Problems → Impact → Target Results'})}
          </h2>
          <p className="mt-4 text-base text-white/60 max-w-2xl mx-auto">
            {t('problems.subheading', {
              defaultMessage: 'Each problem leads to impact, which drives targeted results.',
            })}
          </p>
        </div>

        <div className="space-y-10">
          {problemTargetPairs.map((pair, index) => {
            const ProblemIcon = pair.problem.icon;
            const ImpactIcon = pair.impact.icon;
            const ResultIcon = pair.result.icon;
            return (
              <div
                key={`pair-${index}`}
                ref={(el) => {
                  pairRefs.current[index] = el;
                }}
                className="relative"
              >
                <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_100px_minmax(0,1fr)_100px_minmax(0,1fr)] items-stretch">
                  {/* Problem Card */}
                  <div
                    ref={(el) => {
                      problemRefs.current[index] = el;
                    }}
                    className="relative group"
                  >
                    <Card className="relative flex h-full overflow-hidden border border-white/10 bg-gradient-to-b from-white/10 via-primary-500/5 to-transparent backdrop-blur-2xl shadow-2xl shadow-primary-900/20 transition-all duration-300 group-hover:border-primary-400/50 group-hover:shadow-primary-500/30">
                      <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -inset-8 rounded-[inherit] bg-gradient-to-r from-primary-500/20 via-fuchsia-500/10 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                        <div className="absolute inset-0 rounded-[inherit] border border-white/5 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_70%)] opacity-30" />
                      </div>
                      <CardHeader className="relative z-10 flex flex-col justify-between space-y-3">
                        <div className="flex items-center justify-between">
                          <GlowBadge variant="primary">Problem 0{index + 1}</GlowBadge>
                          <div className="rounded-xl bg-black/40 p-2.5">
                            <ProblemIcon className={`h-5 w-5 ${pair.problem.color} transition-all duration-300`} />
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                          <CardTitle className="text-lg text-white mb-1.5">{pair.problem.title}</CardTitle>
                          {pair.problem.description && (
                            <CardDescription className="text-white/70 text-sm leading-relaxed">
                              {pair.problem.description}
                            </CardDescription>
                          )}
                        </div>
                      </CardHeader>
                    </Card>
                    <div className="hidden md:block absolute right-[-22px] top-1/2 h-1 w-6 rounded-full bg-gradient-to-r from-primary-400/60 to-orange-400/30" />
                  </div>

                  {/* First Arrow */}
                  <div
                    ref={(el) => {
                      arrow1Refs.current[index] = el;
                    }}
                    className="relative flex h-full items-center justify-center"
                  >
                    <div className="hidden md:flex absolute inset-x-0 mx-auto h-[2px] w-[160px] bg-gradient-to-r from-transparent via-white/30 to-transparent blur-[2px]" />
                    <div className="relative flex h-16 w-16 items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/40 to-orange-400/40 blur-xl animate-pulse" />
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-[1rem] border border-white/20 bg-[#08040f]/80 shadow-[0_10px_40px_rgba(2,0,12,0.8)] backdrop-blur-xl">
                        <ArrowRight className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Impact Card */}
                  <div
                    ref={(el) => {
                      impactRefs.current[index] = el;
                    }}
                    className="relative group"
                  >
                    <Card className="relative flex h-full overflow-hidden border border-white/10 bg-gradient-to-b from-white/10 via-orange-500/5 to-transparent backdrop-blur-2xl shadow-2xl shadow-orange-900/20 transition-all duration-300 group-hover:border-orange-400/50 group-hover:shadow-orange-500/30">
                      <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -inset-8 rounded-[inherit] bg-gradient-to-r from-orange-500/20 via-yellow-500/10 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                        <div className="absolute inset-0 rounded-[inherit] border border-white/5 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_70%)] opacity-30" />
                      </div>
                      <CardHeader className="relative z-10 flex flex-col justify-between space-y-3">
                        <div className="flex items-center justify-between">
                          <GlowBadge variant="secondary">Impact 0{index + 1}</GlowBadge>
                          <div className="rounded-xl bg-black/40 p-2.5">
                            <ImpactIcon className={`h-5 w-5 ${pair.impact.color} transition-all duration-300`} />
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                          <CardTitle className="text-lg text-white mb-1.5">{pair.impact.title}</CardTitle>
                          {pair.impact.description && (
                            <CardDescription className="text-white/70 text-sm leading-relaxed">
                              {pair.impact.description}
                            </CardDescription>
                          )}
                        </div>
                      </CardHeader>
                    </Card>
                    <div className="hidden md:block absolute right-[-22px] top-1/2 h-1 w-6 rounded-full bg-gradient-to-r from-orange-400/60 to-secondary-400/30" />
                  </div>

                  {/* Second Arrow */}
                  <div
                    ref={(el) => {
                      arrow2Refs.current[index] = el;
                    }}
                    className="relative flex h-full items-center justify-center"
                  >
                    <div className="hidden md:flex absolute inset-x-0 mx-auto h-[2px] w-[160px] bg-gradient-to-r from-transparent via-white/30 to-transparent blur-[2px]" />
                    <div className="relative flex h-16 w-16 items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/40 to-secondary-400/40 blur-xl animate-pulse" />
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-[1rem] border border-white/20 bg-[#08040f]/80 shadow-[0_10px_40px_rgba(2,0,12,0.8)] backdrop-blur-xl">
                        <ArrowRight className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Result Card */}
                  <div
                    ref={(el) => {
                      resultRefs.current[index] = el;
                    }}
                    className="relative group"
                  >
                    <Card className="relative flex h-full overflow-hidden border border-white/10 bg-gradient-to-b from-white/10 via-secondary-500/5 to-transparent backdrop-blur-2xl shadow-2xl shadow-secondary-900/20 transition-all duration-300 group-hover:border-secondary-400/50 group-hover:shadow-secondary-500/30">
                      <div className="pointer-events-none absolute inset-0">
                        <div className="absolute -inset-8 rounded-[inherit] bg-gradient-to-r from-secondary-500/20 via-cyan-500/10 to-primary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                        <div className="absolute inset-0 rounded-[inherit] border border-white/5 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_70%)] opacity-30" />
                      </div>
                      <CardHeader className="relative z-10 flex flex-col justify-between space-y-3">
                        <div className="flex items-center justify-between">
                          <GlowBadge variant="secondary">Outcome 0{index + 1}</GlowBadge>
                          <div className="rounded-xl bg-black/40 p-2.5">
                            <ResultIcon className={`h-5 w-5 ${pair.result.color} transition-all duration-300`} />
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                          <CardTitle className="text-lg text-white mb-1.5">{pair.result.title}</CardTitle>
                          {pair.result.description && (
                            <CardDescription className="text-white/70 text-sm leading-relaxed">
                              {pair.result.description}
                            </CardDescription>
                          )}
                        </div>
                      </CardHeader>
                    </Card>
                    <div className="hidden md:block absolute left-[-22px] top-1/2 h-1 w-6 rounded-full bg-gradient-to-l from-secondary-400/60 to-orange-400/30" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemsTargetsSection;
