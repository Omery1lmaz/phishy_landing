'use client';

import React, {useEffect, useRef, useState} from 'react';
import {AlertTriangle, Zap, Target, CheckCircle2, ShieldCheck} from 'lucide-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {GlowBadge} from '@/app/components/ui/glow-badge';

// GSAP'i register et
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Card = ({className, children}: {className: string, children: React.ReactNode}) => (
  <div className={className}>{children}</div>
);

const CardContent = ({className, children}: {className: string, children: React.ReactNode}) => (
  <div className={className}>{children}</div>
);

const howItWorksSteps = [
  {key: 'receive', icon: AlertTriangle, label: 'Al'},
  {key: 'enrich', icon: Zap, label: 'Zenginleştir'},
  {key: 'analyze', icon: Target, label: 'Analiz Et'},
  {key: 'decide', icon: CheckCircle2, label: 'Karar Ver'},
  {key: 'close', icon: ShieldCheck, label: 'Kapat'},
];

const getWorkflowInsight = (label: string) => {
  switch (label) {
    case 'Al':
      return 'Şüpheli e-posta raporlanır';
    case 'Zenginleştir':
      return 'Otomatik IOC çıkarımı ve zenginleştirme';
    case 'Analiz Et':
      return 'Playbook\'lar ile analiz';
    case 'Karar Ver':
      return 'Güvenli mi yoksa kötü amaçlı mı?';
    default:
      return 'Kapat veya eskalasyon';
  }
};

const getDescription = (key: string) => {
  switch (key) {
    case 'receive':
      return 'Şüpheli e-posta raporlanır.';
    case 'enrich':
      return 'Otomatik IOC çıkarımı ve zenginleştirme.';
    case 'analyze':
      return 'Playbook\'lar ile analiz.';
    case 'decide':
      return 'Güvenli mi yoksa kötü amaçlı mı?';
    default:
      return 'Kapat veya eskalasyon.';
  }
};

const WorkflowSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  const cardElementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
  
    const ctx = gsap.context(() => {
      // Kartları üst üste yerleştir
      gsap.set(cardElementsRef.current, {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0,
      });
  
      // İlk kart görünür olsun
      if (cardElementsRef.current[0]) {
        gsap.set(cardElementsRef.current[0], { opacity: 1 });
      }
  
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${howItWorksSteps.length * window.innerHeight}`,
          pin: true,
          scrub: 1,
        },
      });
  
      cardElementsRef.current.forEach((card, index) => {
        if (index === 0) return; // ilk kart zaten görünür
        tl.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power1.inOut',
        }, index); // index ile sırayla
        tl.to(cardElementsRef.current[index - 1], {
          opacity: 0,
          duration: 0.5,
          ease: 'power1.inOut',
        }, index);
      });
  
      // ScrollTrigger ile aktif step güncelleme
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: () => `+=${howItWorksSteps.length * window.innerHeight}`,
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const newStep = Math.floor(progress * howItWorksSteps.length);
          setActiveStep(Math.min(newStep, howItWorksSteps.length - 1));
        },
      });
  
    }, sectionRef);
  
    return () => ctx.revert();
  }, []);
    
  const handleTabClick = (index: number) => {
    if (typeof window === 'undefined') return;
    
    const scrollTrigger = ScrollTrigger.getAll().find(
      st => st.trigger === sectionRef.current
    );
    
    if (scrollTrigger) {
      const progress = index / (howItWorksSteps.length - 1);
      const scrollPosition = scrollTrigger.start + (scrollTrigger.end - scrollTrigger.start) * progress;
      
      gsap.to(window, {
        scrollTo: scrollPosition,
        duration: 1,
        ease: 'power2.inOut',
      });
    }
  };

  return (
    <section ref={sectionRef} className="relative overflow-hidden h-screen bg-[#050505]">
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050017] via-[#0a001f] to-[#050017]" />
        
        {/* Animated decorative lines */}
        <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 1400 1000" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="secopsWorkflowGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(147, 51, 234, 0.3)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgba(147, 51, 234, 0.5)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(99, 102, 241, 0.3)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="secopsWorkflowGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(99, 102, 241, 0.3)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgba(168, 85, 247, 0.5)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(147, 51, 234, 0.3)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="secopsWorkflowGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgba(99, 102, 241, 0.4)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(147, 51, 234, 0.3)" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Animated curved lines - workflow flow */}
          <path
            d="M 0 300 Q 300 200, 600 300 T 1200 300"
            fill="none"
            stroke="url(#secopsWorkflowGradient1)"
            strokeWidth="2"
            className="animate-draw-line-1"
            opacity="0.7"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 100 500 Q 400 400, 700 500 T 1300 500"
            fill="none"
            stroke="url(#secopsWorkflowGradient2)"
            strokeWidth="2"
            className="animate-draw-line-2"
            opacity="0.6"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 200 700 Q 500 600, 800 700 T 1400 700"
            fill="none"
            stroke="url(#secopsWorkflowGradient3)"
            strokeWidth="2"
            className="animate-draw-line-3"
            opacity="0.5"
            vectorEffect="non-scaling-stroke"
          />
          
          {/* Connecting lines - workflow steps */}
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
          
          {/* Animated circles - workflow nodes */}
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
      
      <div className="relative z-10 h-full">
        <div className="container mx-auto max-w-7xl px-6 h-full flex items-center">
          <div className="grid gap-12 lg:grid-cols-2 w-full items-center">
            {/* Sol Navigasyon - Tabs */}
            <div className="space-y-10">
              <div className="space-y-4">
                <GlowBadge variant="primary" className="px-4 py-1.5">
                  Workflow
                </GlowBadge>
                <h2 className="text-4xl font-semibold tracking-tight text-white lg:text-5xl">
                  Nasıl Çalışır
                </h2>
                <p className="text-lg text-white/70">
                  5 adımda triage süreci
                </p>
              </div>

              <nav className="space-y-3">
                {howItWorksSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <button
                      key={step.key}
                      onClick={() => handleTabClick(index)}
                      className={`group relative flex w-full items-center gap-4 rounded-3xl border px-5 py-4 text-left transition-all duration-500 cursor-pointer ${
                        activeStep === index
                          ? 'border-primary-400/70 bg-primary-500/15 text-white shadow-lg shadow-primary-900/40'
                          : 'border-white/10 bg-white/5 text-white/60 hover:border-primary-400/30 hover:bg-primary-500/5'
                      }`}
                    >
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-semibold transition-all duration-500 ${
                          activeStep === index
                            ? 'bg-gradient-to-br from-primary-500/40 to-secondary-500/40 text-white scale-110'
                            : 'bg-white/10 text-white/70 scale-100 group-hover:scale-105'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm uppercase tracking-wide font-semibold">{step.label}</p>
                        <p className="text-xs text-white/60 mt-1">
                          {getDescription(step.key)}
                        </p>
                      </div>
                      <span
                        className={`h-1 w-16 rounded-full bg-gradient-to-r from-primary-400 via-primary-200 to-secondary-400 transition-all duration-500 ${
                          activeStep === index ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                        }`}
                      />
                      
                      {/* Progress Indicator */}
                      {activeStep === index && (
                        <div className="absolute -left-1 top-1/2 -translate-y-1/2 h-8 w-1 bg-gradient-to-b from-primary-400 to-secondary-400 rounded-full" />
                      )}
                    </button>
                  );
                })}
              </nav>

              {/* Progress Bar */}
              <div className="flex items-center gap-2">
                {howItWorksSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleTabClick(index)}
                    className="group relative h-1 flex-1 bg-white/10 rounded-full overflow-hidden cursor-pointer"
                  >
                    <div
                      className={`h-full bg-gradient-to-r from-primary-400 to-secondary-400 transition-all duration-500 ${
                        activeStep === index ? 'w-full' : activeStep > index ? 'w-full opacity-50' : 'w-0'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Sağ Kartlar - Horizontal Scroll */}
            <div ref={cardsRef} className="relative h-[70vh] overflow-hidden">
              {howItWorksSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.key}
                    ref={(el) => {
                      if (cardElementsRef.current) {
                        cardElementsRef.current[index] = el;
                      }
                    }}
                    className="w-full h-full"
                  >
                    <Card className="relative h-full overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-transparent to-primary-500/20 shadow-[0_25px_70px_-30px_rgba(79,70,229,0.6)] backdrop-blur-2xl">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),transparent_65%)] opacity-60" />
                      <CardContent className="relative z-10 flex h-full flex-col justify-between gap-8 p-10">
                        <div className="space-y-6">
                          <GlowBadge variant="primary" className="px-4 py-2">
                            <span className="flex items-center gap-3">
                              <span>Step 0{index + 1}</span>
                              <span className="h-1 w-6 rounded-full bg-white/30" />
                              <span>{step.label}</span>
                            </span>
                          </GlowBadge>
                          <div className="space-y-4">
                            <div className="flex items-center gap-4">
                              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500/40 to-secondary-500/30 text-white shadow-lg shadow-primary-900/40">
                                <Icon className="h-8 w-8" />
                              </div>
                              <h3 className="text-3xl font-semibold text-white">{step.label}</h3>
                            </div>
                            <p className="text-lg text-white/70 leading-relaxed">
                              {getDescription(step.key)}
                            </p>
                          </div>
                        </div>
                        <div className="rounded-3xl border border-white/10 bg-[#050505]/60 p-6">
                          <div className="flex items-center gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 text-primary-300">
                              <Icon className="h-7 w-7" />
                            </div>
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                                Workflow insight
                              </p>
                              <p className="text-xl font-semibold text-white mt-1">{getWorkflowInsight(step.label)}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;

