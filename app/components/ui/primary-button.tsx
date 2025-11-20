'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { gsap } from '@/app/utils/gsap';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface PrimaryButtonProps {
  onClick?: () => void;
  text?: string;
  className?: string;
  arrowImage?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onClick,
  text = 'Click Me',
  className = '',
  arrowImage,
  disabled = false,
  type = 'button',
}) => {
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!arrowRef.current || !arrowImage) return;

    const ctx = gsap.context(() => {
      // Arrow width animation from 0 to 60
      gsap.fromTo(
        arrowRef.current,
        {
          width: 0,
        },
        {
          width: 60,
          duration: 1,
          ease: 'power2.out',
          delay: 0.5,
        }
      );
    }, arrowRef);

    return () => ctx.revert();
  }, [arrowImage]);

  return (
    <div className={cn('group relative flex flex-col gap-4 sm:flex-row sm:items-center', className)}>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className="group relative disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span
          className="absolute -inset-1 rounded-2xl blur-lg opacity-50 animate-pulse bg-gradient-to-r from-primary-500/20 via-primary-400/20 to-secondary-500/20"
        />
        <Card className="relative rounded-2xl border border-primary-500/50 bg-gradient-to-br from-white/8 via-white/5 to-white/3 shadow-lg shadow-primary-500/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary-400/70 hover:shadow-lg hover:shadow-primary-500/20 disabled:hover:translate-y-0 disabled:hover:border-primary-500/50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm font-semibold text-white/90 uppercase tracking-wide">{text}</span>
              <ArrowRight className="h-4 w-4 text-white/60 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </CardContent>
        </Card>
      </button>
      {arrowImage && (
        <div className="absolute !left-[-70px] !-bottom-[70px] z-10 overflow-hidden transition-transform duration-300 group-hover:scale-110">
          <div ref={arrowRef} className="h-[60px]">
            <Image
              src={arrowImage}
              alt=""
              width={60}
              height={60}
              className="object-contain h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PrimaryButton;

