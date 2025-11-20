'use client';

import React, {useEffect, useRef, useState} from 'react';
import Image from 'next/image';
import {useTranslations} from 'next-intl';

import {gsap, ScrollTrigger} from '@/app/utils/gsap';

interface TooltipCard {
  id: string;
  title: string;
  description: string;
  point: { x: number; y: number };
  position: 'left' | 'right' | 'top' | 'bottom';
}

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const glowContainerRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('Hero');

  const tooltipCards: TooltipCard[] = [
    {
      id: 'simulation',
      title: t('tooltipCards.simulation.title'),
      description: t('tooltipCards.simulation.description'),
      point: { x: 0, y: 20 },
      position: 'left',
    },
    {
      id: 'training',
      title: t('tooltipCards.training.title'),
      description: t('tooltipCards.training.description'),
      point: { x: 100, y: 20 },
      position: 'right',
    },
    {
      id: 'detection',
      title: t('tooltipCards.detection.title'),
      description: t('tooltipCards.detection.description'),
      point: { x: 0, y: 80 },
      position: 'left',
    },
    {
      id: 'analytics',
      title: t('tooltipCards.analytics.title'),
      description: t('tooltipCards.analytics.description'),
      point: { x: 100, y: 80 },
      position: 'right',
    },
  ];
  useEffect(() => {
    if (!imageContainerRef.current || !imageRef.current || !heroRef.current) return;

    const topSection = heroRef.current.querySelector('.hero-top-section') as HTMLElement;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        endTrigger: heroRef.current,
        end: '50%',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        markers: true,
        pinSpacing: false,
      },    
    });

    const updatePositions = () => {
      const initialRect = imageContainerRef.current!.getBoundingClientRect();
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const initialCenterX = initialRect.left + initialRect.width / 2;
      const initialCenterY = initialRect.top + initialRect.height / 2;

      return {
        moveX: centerX - initialCenterX,
        moveY: centerY - initialCenterY,
      };
    };

    const { moveX, moveY } = updatePositions();

    gsap.set(imageContainerRef.current, {
      zIndex: 50,
      transformOrigin: 'center center',
      force3D: true,
    });

    gsap.set(glowContainerRef.current, {
      transformOrigin: 'center center',
      opacity: 0.6,
      force3D: true,
    });

    cardRefs.current.forEach((card) => {
      if (!card) return;
      gsap.set(card, {
        opacity: 0,
        scale: 0.5,
        pointerEvents: 'none',
        transformOrigin: 'center center',
        force3D: true,
      });
    });

    if (topSection) {
      tl.to(
        topSection,
        {
          opacity: 0,
          y: -50,
          ease: 'power2.out',
        },
        0
      );
    }

    tl.to(
      glowContainerRef.current,
      {
        opacity: 1,
        scale: 1.1,
        x: moveX,
        y: moveY,
        ease: 'power2.out',
        force3D: true,
      },
      0
    );

    tl.to(
      imageContainerRef.current,
      {
        scale: 0.95,
        x: moveX,
        y: moveY,
        ease: 'power2.out',
        force3D: true,
      },
      0
    );

    tl.to(
      imageContainerRef.current,
      {
        zIndex: 100,
        ease: 'power2.out',
      },
      0
    );

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      tl.to(
        card,
        {
          opacity: 1,
          scale: 1,
          pointerEvents: 'auto',
          ease: 'back.out(1.5)',
          duration: 0.6,
          force3D: true,
        },
        0.8 + index * 0.15
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === heroRef.current) trigger.kill();
      });
      tl.kill();
    };
  }, []);

  return (
    <section ref={heroRef} className="relative   pt-32 pb-20 overflow-hidden">
      {/* SVG Filter for Frosted Glass Effect */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="frosted">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle base background */}
        <div className="absolute inset-0 bg-black" />
        
        {/* Top left gradient orb */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary-600/30 rounded-full blur-3xl -translate-x-1/4 -translate-y-1/4 animate-pulse" style={{ animationDuration: '4s' }} />
        
        {/* Top right gradient orb */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary-600/30 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4 animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 py-20">
        {/* Animated Gradient Badge */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary-500/30 bg-gradient-to-r from-primary-600/20 via-primary-500/20 to-secondary-600/20 backdrop-blur-sm animate-badge-glow overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 animate-gradient-shift opacity-20" />
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            
            {/* Content */}
            <div className="relative z-10 flex items-center gap-2">
              <div className="relative flex items-center">
                <div className="absolute inset-0 bg-primary-500 rounded-full blur-md opacity-50 animate-pulse" />
                <div className="relative w-2 h-2 bg-primary-400 rounded-full" />
              </div>
              <span className="text-sm font-medium animate-text-shimmer">
            {t('statsBadge')}
              </span>
              <svg 
                className="w-4 h-4 text-primary-400 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="hero-top-section max-w-4xl mx-auto text-center mb-20">
          <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 tracking-tight">
            {t('heading')}
          </h1>

          <p className="hero-description text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            {t('subheading')}
          </p>

          <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-5">
            <button className="group relative px-10 py-4 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 rounded-xl font-semibold text-white hover:shadow-2xl hover:shadow-primary-600/60 transition-all duration-300 transform hover:scale-105 active:scale-95 overflow-hidden border border-primary-500/30 hover:border-primary-400/50">
              {/* Shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/0 via-primary-400/40 to-primary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Content */}
              <span className="relative z-10 text-lg flex items-center gap-2">
                {t('cta.primary')}
                <svg 
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>

            <button className="px-10 py-4 border border-white/30 rounded-lg font-semibold text-white hover:border-white/50 hover:bg-white/5 transition-all backdrop-blur-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="text-lg">{t('cta.secondary')}</span>
            </button>
          </div>
        </div>

        <div className="relative w-full max-w-5xl mx-auto h-[600px]">
          <div
            ref={glowContainerRef}
            className="absolute inset-0 flex items-center justify-center z-0 origin-center will-change-transform"
          >
            <div className="absolute w-full h-full max-w-4xl max-h-[550px] bg-gradient-to-br from-primary-600/60 via-primary-500/40 to-secondary-600/50 rounded-3xl blur-3xl" style={{ top: '-15%', bottom: 'auto' }} />
            <div className="absolute w-full h-full max-w-3xl max-h-[500px] bg-gradient-radial from-primary-600/70 via-primary-500/40 to-transparent rounded-full blur-2xl" style={{ top: '-12%', bottom: 'auto' }} />
            <div className="absolute w-full h-full max-w-5xl max-h-[600px] bg-gradient-to-br from-primary-700/30 via-primary-600/20 to-secondary-700/30 rounded-full blur-3xl" style={{ top: '-18%', bottom: 'auto' }} />
          </div>

          <div
            ref={imageContainerRef}
            className="relative w-full h-full flex items-center justify-center z-20 origin-center will-change-transform"
          >
            <div ref={imageRef} className="relative w-full h-full flex items-center justify-center">
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-primary-600/40 shadow-2xl shadow-primary-600/50 backdrop-blur-sm z-30">
                <div className="relative w-full h-full">
                  <Image
                    src="/original-ede80759dd15f85f0122765013d6e0b0.webp"
                    alt={t('platformImageAlt')}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-secondary-900/20" />
                </div>
              </div>

              {/* Tooltip Cards */}
              {tooltipCards.map((card, index) => {
                const { x, y } = card.point;
                return (
                  <div
                    key={card.id}
                    ref={(el) => {
                      if (cardRefs.current) {
                        cardRefs.current[index] = el;
                      }
                    }}
                    className="group absolute liquid-card max-w-xs z-40 p-6 rounded-2xl transition-all duration-300 cursor-pointer outline-none"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    onMouseEnter={() => setHoveredCard(card.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Card Content */}
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-1">
                        <svg className="w-4 h-4 text-white opacity-60" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                        <h3 className="text-lg font-bold text-white">{card.title}</h3>
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">{card.description}</p>
                    </div>
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

export default Hero;
