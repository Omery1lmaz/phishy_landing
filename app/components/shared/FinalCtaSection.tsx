'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GlowBadge } from '@/app/components/ui/glow-badge';
import RequestDemoButton from './RequestDemoButton';

export interface FinalCtaSectionProps {
  badge?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  arrowImage?: string;
  className?: string;
}

const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  badge = 'Get Started',
  title = 'Ready to Transform Your MSSP?',
  description = "Let's schedule your live demo. See how multi-tenant management scales your security awareness services.",
  buttonText = 'Request Demo',
  buttonHref = '/contact-us',
  arrowImage,
  className = '',
}) => {
  const pathname = usePathname();
  
  // Add source page as query parameter
  const hrefWithSource = buttonHref.includes('?') 
    ? `${buttonHref}&source=${encodeURIComponent(pathname)}`
    : `${buttonHref}?source=${encodeURIComponent(pathname)}`;

  return (
    <section className={`relative overflow-hidden py-20 md:py-28 bg-[#050505] ${className}`}>
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050017] via-[#0a001f] to-[#050017]" />
        
        {/* Animated decorative lines */}
        <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 1400 1000" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="finalCtaGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(147, 51, 234, 0.3)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgba(147, 51, 234, 0.5)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(99, 102, 241, 0.3)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="finalCtaGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(99, 102, 241, 0.3)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgba(168, 85, 247, 0.5)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(147, 51, 234, 0.3)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="finalCtaGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgba(99, 102, 241, 0.4)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(147, 51, 234, 0.3)" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Animated curved lines */}
          <path
            d="M 0 300 Q 300 200, 600 300 T 1200 300"
            fill="none"
            stroke="url(#finalCtaGradient1)"
            strokeWidth="2"
            className="animate-draw-line-1"
            opacity="0.7"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 100 500 Q 400 400, 700 500 T 1300 500"
            fill="none"
            stroke="url(#finalCtaGradient2)"
            strokeWidth="2"
            className="animate-draw-line-2"
            opacity="0.6"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 200 700 Q 500 600, 800 700 T 1400 700"
            fill="none"
            stroke="url(#finalCtaGradient3)"
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
      
      <div className="relative z-10 container mx-auto max-w-4xl px-6">
        <Card className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 via-primary-500/5 to-secondary-500/3 shadow-xl shadow-black/40 backdrop-blur-xl w-full">
          <CardHeader className="text-center">
            <div className="inline-block mb-4">
              <GlowBadge variant="primary" className="px-4 py-1.5">
                {badge}
              </GlowBadge>
            </div>
            <CardTitle className="text-2xl md:text-3xl">
              {title}
            </CardTitle>
            <CardDescription className="text-lg text-white/80 mt-4">
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center items-center pb-6">
            <RequestDemoButton
              href={hrefWithSource}
              text={buttonText}
              arrowImage={arrowImage}
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FinalCtaSection;

