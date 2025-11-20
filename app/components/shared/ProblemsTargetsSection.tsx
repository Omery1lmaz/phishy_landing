'use client';

import React, {useEffect, useRef} from 'react';
import Image from 'next/image';
import {LucideIcon, AlertCircle, TrendingDown, CheckCircle2} from 'lucide-react';
import {Card, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {gsap, ScrollTrigger} from '@/app/utils/gsap';
import { GlowBadge } from '@/app/components/ui/glow-badge';

export interface ProblemTargetItem {
  title: string;
  description: string;
  icon: LucideIcon;
  color?: string;
}

export interface ProblemTargetPair {
  problem: ProblemTargetItem;
  target: ProblemTargetItem;
}

export interface ProblemTriplet {
  problem: string;
  impact: string;
  result: string;
}

export interface ProblemsTargetsSectionProps {
  badge: string;
  heading: string;
  description: string;
  pairs?: ProblemTargetPair[];
  triplets?: ProblemTriplet[];
  arrowImage?: string;
}

const ProblemsTargetsSection: React.FC<ProblemsTargetsSectionProps> = ({
  badge,
  heading,
  description,
  pairs,
  triplets,
  arrowImage = '/Gemini_Generated_Image_m1fp3xm1fp3xm1fp-removebg-preview.svg',
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const problemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const arrowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const targetRefs = useRef<(HTMLDivElement | null)[]>([]);
  const impactRefs = useRef<(HTMLDivElement | null)[]>([]);
  const resultRefs = useRef<(HTMLDivElement | null)[]>([]);
  const arrow1Refs = useRef<(HTMLDivElement | null)[]>([]); // First arrow for triplets (Problem → Impact)
  const arrow2Refs = useRef<(HTMLDivElement | null)[]>([]); // Second arrow for triplets (Impact → Result)
  const pairRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tripletRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const isTripletMode = !!triplets && triplets.length > 0;
  const isPairMode = !!pairs && pairs.length > 0;

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      if (isPairMode && pairs) {
        // Set initial states for pair mode elements
        problemRefs.current.forEach((ref) => {
          if (ref) {
            gsap.set(ref, {
              opacity: 0,
              y: 50,
            });
          }
        });

        arrowRefs.current.forEach((ref) => {
          if (ref) {
            gsap.set(ref, {
              opacity: 0,
              scale: 0.8,
            });
          }
        });

        targetRefs.current.forEach((ref) => {
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
          const arrowRef = arrowRefs.current[index];
          const targetRef = targetRefs.current[index];

          if (!problemRef || !arrowRef || !targetRef) return;

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

          // Arrow fade in + scale up (starts at 25% of timeline)
          tl.to(
            arrowRef,
            {
              opacity: 1,
              scale: 1,
              duration: 0.25,
              ease: 'power2.out',
            },
            0.25
          );

          // Target card fade in + slide in (starts at 50% of timeline)
          tl.to(
            targetRef,
            {
              opacity: 1,
              x: 0,
              duration: 0.3,
              ease: 'power2.out',
            },
            0.5
          );
        });
      } else if (isTripletMode && triplets) {
        // Set initial states for triplet mode elements
        problemRefs.current.forEach((ref) => {
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

        impactRefs.current.forEach((ref) => {
          if (ref) {
            gsap.set(ref, {
              opacity: 0,
              y: 50,
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
              y: 50,
            });
          }
        });

        // Create ScrollTrigger timeline for each triplet
        tripletRefs.current.forEach((tripletRef, index) => {
          if (!tripletRef) return;

          const problemRef = problemRefs.current[index];
          const arrow1Ref = arrow1Refs.current[index];
          const impactRef = impactRefs.current[index];
          const arrow2Ref = arrow2Refs.current[index];
          const resultRef = resultRefs.current[index];

          if (!problemRef || !arrow1Ref || !impactRef || !arrow2Ref || !resultRef) return;

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: tripletRef,
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

          // First arrow fade in + scale up (starts at 20% of timeline)
          tl.to(
            arrow1Ref,
            {
              opacity: 1,
              scale: 1,
              duration: 0.25,
              ease: 'power2.out',
            },
            0.2
          );

          // Impact card fade in + slide up (starts at 40% of timeline)
          tl.to(
            impactRef,
            {
              opacity: 1,
              y: 0,
              duration: 0.25,
              ease: 'power2.out',
            },
            0.4
          );

          // Second arrow fade in + scale up (starts at 60% of timeline)
          tl.to(
            arrow2Ref,
            {
              opacity: 1,
              scale: 1,
              duration: 0.25,
              ease: 'power2.out',
            },
            0.6
          );

          // Result card fade in + slide up (starts at 80% of timeline)
          tl.to(
            resultRef,
            {
              opacity: 1,
              y: 0,
              duration: 0.25,
              ease: 'power2.out',
            },
            0.8
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isPairMode, isTripletMode, pairs, triplets]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-20 md:py-28 bg-[#050505]">
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050017] via-[#0a001f] to-[#050017]" />

        {/* Animated decorative lines */}
        <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 1400 1000" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="problemsGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(147, 51, 234, 0.3)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgba(147, 51, 234, 0.5)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(99, 102, 241, 0.3)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="problemsGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(99, 102, 241, 0.3)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgba(168, 85, 247, 0.5)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(147, 51, 234, 0.3)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="problemsGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgba(99, 102, 241, 0.4)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(147, 51, 234, 0.3)" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Animated curved lines */}
          <path
            d="M 0 300 Q 300 200, 600 300 T 1200 300"
            fill="none"
            stroke="url(#problemsGradient1)"
            strokeWidth="2"
            className="animate-draw-line-1"
            opacity="0.7"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 100 500 Q 400 400, 700 500 T 1300 500"
            fill="none"
            stroke="url(#problemsGradient2)"
            strokeWidth="2"
            className="animate-draw-line-2"
            opacity="0.6"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 200 700 Q 500 600, 800 700 T 1400 700"
            fill="none"
            stroke="url(#problemsGradient3)"
            strokeWidth="2"
            className="animate-draw-line-3"
            opacity="0.5"
            vectorEffect="non-scaling-stroke"
          />

          {/* Connecting lines */}
          <line
            x1="200"
            y1="0"
            x2="300"
            y2="1000"
            stroke="rgba(147, 51, 234, 0.25)"
            strokeWidth="1.5"
            className="animate-draw-diagonal-1"
            vectorEffect="non-scaling-stroke"
          />
          <line
            x1="700"
            y1="0"
            x2="800"
            y2="1000"
            stroke="rgba(99, 102, 241, 0.25)"
            strokeWidth="1.5"
            className="animate-draw-diagonal-2"
            vectorEffect="non-scaling-stroke"
          />
          <line
            x1="1200"
            y1="0"
            x2="1100"
            y2="1000"
            stroke="rgba(59, 130, 246, 0.25)"
            strokeWidth="1.5"
            className="animate-draw-diagonal-1"
            style={{animationDelay: '1s'}}
            vectorEffect="non-scaling-stroke"
          />

          {/* Animated circles */}
          <circle
            cx="200"
            cy="300"
            r="4"
            fill="rgba(147, 51, 234, 0.5)"
            className="animate-pulse-glow"
          />
          <circle
            cx="700"
            cy="500"
            r="5"
            fill="rgba(99, 102, 241, 0.5)"
            className="animate-pulse-glow"
            style={{animationDelay: '0.5s'}}
          />
          <circle
            cx="1200"
            cy="700"
            r="4.5"
            fill="rgba(168, 85, 247, 0.5)"
            className="animate-pulse-glow"
            style={{animationDelay: '1s'}}
          />
          <circle
            cx="400"
            cy="150"
            r="3"
            fill="rgba(59, 130, 246, 0.4)"
            className="animate-pulse-glow"
            style={{animationDelay: '1.5s'}}
          />
          <circle
            cx="1000"
            cy="850"
            r="3.5"
            fill="rgba(147, 51, 234, 0.4)"
            className="animate-pulse-glow"
            style={{animationDelay: '0.3s'}}
          />
        </svg>

        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-1.5 h-1.5 bg-primary-400/50 rounded-full animate-float-particle" style={{animationDelay: '0s'}} />
        <div className="absolute top-40 right-32 w-1 h-1 bg-secondary-400/50 rounded-full animate-float-particle" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-primary-300/50 rounded-full animate-float-particle" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-20 right-1/4 w-1 h-1 bg-secondary-300/50 rounded-full animate-float-particle" style={{animationDelay: '0.5s'}} />
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-primary-500/50 rounded-full animate-float-particle" style={{animationDelay: '1.5s'}} />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-secondary-500/50 rounded-full animate-float-particle" style={{animationDelay: '0.8s'}} />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30" />
      </div>

      <div className="relative z-10 container mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <div className="inline-block mb-4">
            <GlowBadge variant="primary" className="px-4 py-1.5">
              {badge}
            </GlowBadge>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-base text-white/60 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="space-y-16">
          {isPairMode && pairs && pairs.map((pair, index) => {
            const ProblemIcon = pair.problem.icon;
            const TargetIcon = pair.target.icon;
            return (
              <div
                key={`pair-${index}`}
                ref={(el) => {
                  pairRefs.current[index] = el;
                }}
                className="relative"
              >
                <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-stretch">
                  {/* Problem Card - Minimal Design */}
                  <div
                    ref={(el) => {
                      problemRefs.current[index] = el;
                    }}
                    className="relative group h-full"
                  >
                    <Card className="relative overflow-hidden border-l-4 border-l-primary-500/60 border border-white/10 bg-white/3 backdrop-blur-xl transition-all duration-300 group-hover:border-l-primary-400 group-hover:shadow-lg group-hover:shadow-primary-900/20 h-full flex flex-col">
                      <CardHeader className="relative z-10 p-5 flex-1 flex flex-col justify-center">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-600/10 border border-primary-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                            <ProblemIcon className={`h-6 w-6 ${pair.problem.color || 'text-primary-300'}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-lg font-semibold text-white mb-1.5 leading-tight">{pair.problem.title}</CardTitle>
                            <CardDescription className="text-white/60 text-sm leading-relaxed">{pair.problem.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>

                  {/* Arrow with SVG Image */}
                  <div
                    ref={(el) => {
                      arrowRefs.current[index] = el;
                    }}
                    className="relative flex h-full items-center justify-center z-10 px-6"
                  >
                    {/* Simple Arrow SVG */}
                    <div className="relative flex items-center justify-center">
                      <Image
                        src={arrowImage}
                        alt="Arrow"
                        width={96}
                        height={96}
                        className="transition-all duration-300 hover:scale-110"
                        style={{
                          filter: 'brightness(1.1) saturate(1.3) hue-rotate(250deg)',
                        }}
                      />
                    </div>
                  </div>

                  {/* Target Card - Minimal Design */}
                  <div
                    ref={(el) => {
                      targetRefs.current[index] = el;
                    }}
                    className="relative group h-full"
                  >
                    <Card className="relative overflow-hidden border-r-4 border-r-purple-500/60 border border-white/10 bg-white/3 backdrop-blur-xl transition-all duration-300 group-hover:border-r-purple-400 group-hover:shadow-lg group-hover:shadow-purple-900/20 h-full flex flex-col">
                      <CardHeader className="relative z-10 p-5 flex-1 flex flex-col justify-center">
                        <div className="flex items-center gap-3">
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-lg font-semibold text-white mb-1.5 leading-tight">{pair.target.title}</CardTitle>
                            <CardDescription className="text-white/60 text-sm leading-relaxed">{pair.target.description}</CardDescription>
                          </div>
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                            <TargetIcon className={`h-6 w-6 ${pair.target.color || 'text-purple-300'}`} />
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                </div>
              </div>
            );
          })}

          {isTripletMode && triplets && triplets.map((triplet, index) => (
            <div
              key={`triplet-${index}`}
              ref={(el) => {
                tripletRefs.current[index] = el;
              }}
              className="relative"
            >
              <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] items-stretch">
                {/* Problem Card */}
                <div
                  ref={(el) => {
                    problemRefs.current[index] = el;
                  }}
                  className="relative group h-full"
                >
                  <Card className="relative overflow-hidden border-l-4 border-l-primary-500/60 border border-white/10 bg-white/3 backdrop-blur-xl transition-all duration-300 group-hover:border-l-primary-400 group-hover:shadow-lg group-hover:shadow-primary-900/20 h-full flex flex-col">
                    <CardHeader className="relative z-10 p-5 flex-1 flex flex-col justify-center">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-primary-600/10 border border-primary-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                          <AlertCircle className="h-6 w-6 text-primary-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-lg font-semibold text-white mb-1.5 leading-tight">Problem</CardTitle>
                          <CardDescription className="text-white/60 text-sm leading-relaxed">{triplet.problem}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </div>

                {/* First Arrow */}
                <div
                  ref={(el) => {
                    arrow1Refs.current[index] = el;
                  }}
                  className="relative flex h-full items-center justify-center z-10 px-3"
                >
                  <div className="relative flex items-center justify-center">
                    <Image
                      src={arrowImage}
                      alt="Arrow"
                      width={60}
                      height={60}
                      className="transition-all duration-300 hover:scale-110"
                      style={{
                        filter: 'brightness(1.1) saturate(1.3) hue-rotate(250deg)',
                      }}
                    />
                  </div>
                </div>

                {/* Impact Card */}
                <div
                  ref={(el) => {
                    impactRefs.current[index] = el;
                  }}
                  className="relative group h-full"
                >
                  <Card className="relative overflow-hidden border-l-4 border-l-orange-500/60 border border-white/10 bg-white/3 backdrop-blur-xl transition-all duration-300 group-hover:border-l-orange-400 group-hover:shadow-lg group-hover:shadow-orange-900/20 h-full flex flex-col">
                    <CardHeader className="relative z-10 p-5 flex-1 flex flex-col justify-center">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                          <TrendingDown className="h-6 w-6 text-orange-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-lg font-semibold text-white mb-1.5 leading-tight">Impact</CardTitle>
                          <CardDescription className="text-white/60 text-sm leading-relaxed">{triplet.impact}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </div>

                {/* Second Arrow */}
                <div
                  ref={(el) => {
                    arrow2Refs.current[index] = el;
                  }}
                  className="relative flex h-full items-center justify-center z-10 px-3"
                >
                  <div className="relative flex items-center justify-center">
                    <Image
                      src={arrowImage}
                      alt="Arrow"
                      width={60}
                      height={60}
                      className="transition-all duration-300 hover:scale-110"
                      style={{
                        filter: 'brightness(1.1) saturate(1.3) hue-rotate(250deg)',
                      }}
                    />
                  </div>
                </div>

                {/* Result Card */}
                <div
                  ref={(el) => {
                    resultRefs.current[index] = el;
                  }}
                  className="relative group h-full"
                >
                  <Card className="relative overflow-hidden border-r-4 border-r-purple-500/60 border border-white/10 bg-white/3 backdrop-blur-xl transition-all duration-300 group-hover:border-r-purple-400 group-hover:shadow-lg group-hover:shadow-purple-900/20 h-full flex flex-col">
                    <CardHeader className="relative z-10 p-5 flex-1 flex flex-col justify-center">
                      <div className="flex items-center gap-3">
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-lg font-semibold text-white mb-1.5 leading-tight">Result</CardTitle>
                          <CardDescription className="text-white/60 text-sm leading-relaxed">{triplet.result}</CardDescription>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
                          <CheckCircle2 className="h-6 w-6 text-purple-300" />
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsTargetsSection;