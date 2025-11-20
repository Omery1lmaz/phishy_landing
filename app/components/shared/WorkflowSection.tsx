'use client';

import React, {useEffect, useRef, useState, useCallback} from 'react';
import {LucideIcon} from 'lucide-react';
import {GlowBadge} from '@/app/components/ui/glow-badge';

export interface WorkflowStep {
  key: string;
  icon: LucideIcon;
  label: string;
  description: string;
  video: string;
}

export interface WorkflowSectionProps {
  steps: WorkflowStep[];
  badge?: string;
  title?: string;
  description?: string;
}

const WorkflowSection = ({
  steps,
  badge = 'Workflow',
  title = 'How It Works',
  description,
}: WorkflowSectionProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Scroll-based step güncellemesi kaldırıldı - sadece tab click ile çalışıyor

  const handleTabClick = useCallback((index: number) => {
    if (index >= 0 && index < steps.length) {
      setActiveStep(index);
    }
  }, [steps.length]);

  // Video source update when activeStep changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !steps[activeStep]?.video) return;

    const currentVideoSrc = steps[activeStep].video;
    // Always update video source when step changes
    video.src = currentVideoSrc;
    video.loop = false; // Yeni video için loop'u tekrar aç
    video.load();
    setVideoProgress(0);
    
    // Video bittiğinde sonraki step'e geç
    const handleEnded = () => {
      console.log('video ended', { activeStep, videoSrc: video.src, loop: video.loop });
      // Video bittiğinde tekrar başlamasını engelle ve sonraki step'e geç
      video.pause();
      video.loop = false; // Loop'u kapat ki tekrar başlamasın
      
      if (activeStep < steps.length - 1) {
        const nextStep = activeStep + 1;
        // Kısa bir gecikme ile sonraki step'e geç (smooth transition için)
        setTimeout(() => {
          handleTabClick(nextStep);
        }, 300);
      }
    };
    
    // Play video after it's loaded
    const handleCanPlay = () => {
      console.log('video canplay', { activeStep, videoSrc: video.src, loop: video.loop });
      video.play().catch(() => {
        // Autoplay failed, user interaction required
      });
      video.removeEventListener('canplay', handleCanPlay);
    };
    
    // Video metadata yüklendiğinde kontrol et
    const handleLoadedMetadata = () => {
      console.log('video loadedmetadata', { 
        activeStep, 
        videoSrc: video.src, 
        duration: video.duration,
        loop: video.loop 
      });
    };
    
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('ended', handleEnded);
    
    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('ended', handleEnded);
    };
  }, [activeStep, handleTabClick, steps]);

  // Video progress tracking
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.duration) {
        const progress = (video.currentTime / video.duration) * 100;
        setVideoProgress(progress);
      }
    };

    const handleLoadedMetadata = () => {
      video.play().catch(() => {
        // Autoplay failed, user interaction required
      });
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    // Intersection Observer for autoplay when visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Autoplay failed
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      observer.disconnect();
    };
  }, [activeStep]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-20 md:py-28 bg-[#050505]">
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050017] via-[#0a001f] to-[#050017]" />
        
        {/* Animated decorative lines */}
        <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 1400 1000" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="msspWorkflowGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(147, 51, 234, 0.3)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgba(147, 51, 234, 0.5)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(99, 102, 241, 0.3)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="msspWorkflowGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(99, 102, 241, 0.3)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgba(168, 85, 247, 0.5)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(147, 51, 234, 0.3)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="msspWorkflowGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" stopOpacity="0" />
              <stop offset="50%" stopColor="rgba(99, 102, 241, 0.4)" stopOpacity="1" />
              <stop offset="100%" stopColor="rgba(147, 51, 234, 0.3)" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Animated curved lines - workflow flow */}
          <path
            d="M 0 300 Q 300 200, 600 300 T 1200 300"
            fill="none"
            stroke="url(#msspWorkflowGradient1)"
            strokeWidth="2"
            className="animate-draw-line-1"
            opacity="0.7"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 100 500 Q 400 400, 700 500 T 1300 500"
            fill="none"
            stroke="url(#msspWorkflowGradient2)"
            strokeWidth="2"
            className="animate-draw-line-2"
            opacity="0.6"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 200 700 Q 500 600, 800 700 T 1400 700"
            fill="none"
            stroke="url(#msspWorkflowGradient3)"
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
      
      <div className="relative z-10">
        <div className="container mx-auto max-w-7xl px-6 py-12 flex items-center">
          <div className="grid gap-12 lg:grid-cols-2 w-full items-center">
            {/* Sol Navigasyon - Tabs */}
            <div className="space-y-10">
              <div className="space-y-4">
                <GlowBadge variant="primary" className="px-4 py-1.5">
                  {badge}
                </GlowBadge>
                <h2 className="text-4xl font-semibold tracking-tight text-white lg:text-5xl">
                  {title}
                </h2>
                {description && (
                  <p className="text-lg text-white/70">
                    {description}
                  </p>
                )}
              </div>

              <nav className="space-y-3">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <button
                      key={step.key}
                      onClick={() => handleTabClick(index)}
                      className={`group relative flex w-full items-center gap-4 rounded-3xl border px-5 py-4 text-left transition-all duration-500 cursor-pointer ${
                        activeStep === index
                          ? 'border-indigo-400/70 bg-indigo-500/15 text-white shadow-lg shadow-indigo-900/40'
                          : 'border-white/10 bg-white/5 text-white/60 hover:border-indigo-400/30 hover:bg-indigo-500/5'
                      }`}
                    >
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-semibold transition-all duration-500 ${
                          activeStep === index
                            ? 'bg-gradient-to-br from-indigo-500/40 to-purple-500/40 text-white scale-110'
                            : 'bg-white/10 text-white/70 scale-100 group-hover:scale-105'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm uppercase tracking-wide font-semibold">{step.label}</p>
                        <p className="text-xs text-white/60 mt-1">
                          {step.description}
                        </p>
                      </div>
                      {/* Progress Bar Container - Right Aligned */}
                      {activeStep === index && (
                        <div className="w-16 h-[3px] flex justify-start rounded-lg overflow-hidden backdrop-blur-sm  border-white/10 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 shadow-lg shadow-indigo-900/20">
                          <div
                            className="h-full rounded-lg bg-gradient-to-r from-indigo-400/80 via-indigo-200/80 to-purple-400/80 transition-all duration-300 backdrop-blur-sm"
                            style={{
                              width: `${(videoProgress / 100) * 100}%`,
                              opacity: videoProgress > 0 ? 1 : 0,
                            }}
                          />
                        </div>
                      )}
                      
                      {/* Progress Indicator */}
                      {activeStep === index && (
                        <div className="absolute -left-1 top-1/2 -translate-y-1/2 h-8 w-1 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full" />
                      )}
                    </button>
                  );
                })}
              </nav>

              {/* Progress Bar */}
              <div className="flex items-center gap-2">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleTabClick(index)}
                    className="group relative h-1 flex-1 bg-white/10 rounded-full overflow-hidden cursor-pointer"
                  >
                    <div
                      className={`h-full bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-500 ${
                        activeStep === index ? 'w-full' : activeStep > index ? 'w-full opacity-50' : 'w-0'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Sağ Video */}
            <div ref={cardsRef} className="relative h-[500px] md:h-[600px] overflow-hidden">
              <div className="relative w-full h-full rounded-[32px] overflow-hidden group/video">
                {/* Video Container with Animated Border */}
                <div className="relative w-full h-full rounded-[32px]">
                  {/* Video Container */}
                  <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-[#050505]">
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop={false}
                      muted
                      playsInline
                    >
                      Your browser does not support the video tag.
                    </video>
                    
                    {/* Video Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-secondary-500/10 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;

