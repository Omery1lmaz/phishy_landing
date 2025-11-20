'use client';

import { useEffect } from 'react';
import { gsap, ScrollTrigger } from '@/app/utils/gsap';

export default function HomeAnimations() {
  useEffect(() => {
    // Hero section animations
    gsap.from('.hero-title', {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
    });

    gsap.from('.hero-description', {
      opacity: 0,
      y: 30,
      duration: 1,
      delay: 0.2,
      ease: 'power3.out',
    });

    gsap.from('.hero-stats > *', {
      opacity: 0,
      y: 20,
      duration: 0.6,
      stagger: 0.1,
      delay: 0.4,
      ease: 'power3.out',
    });

    gsap.from('.hero-cta', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.6,
      ease: 'power3.out',
    });

    // Liquid cards animation
    gsap.from('.liquid-card', {
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      stagger: 0.15,
      delay: 0.8,
      ease: 'back.out(1.7)',
    });

    // Section animations with ScrollTrigger
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      gsap.fromTo(
        section.querySelectorAll('h2, h3, .liquid-card, .trust-card, .feature-card, .compliance-card, .function-card'),
        {
          opacity: 0,
          y: 60,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    // Stagger animations for grid items
    const gridItems = document.querySelectorAll('section .liquid-card, section .trust-card, section .feature-card, section .function-card');
    ScrollTrigger.batch(gridItems, {
      onEnter: (elements) => {
        gsap.from(elements, {
          opacity: 0,
          y: 40,
          scale: 0.9,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
        });
      },
      start: 'top 85%',
    });

    // Community section specific animations
    const communitySection = document.querySelector('#community');
    if (communitySection) {
      gsap.fromTo(
        communitySection.querySelectorAll('.community-title'),
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: communitySection,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        communitySection.querySelectorAll('.community-form'),
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: communitySection,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        communitySection.querySelectorAll('.community-disclaimer'),
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.4,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: communitySection,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Compliance section specific animations
    const complianceSection = document.querySelector('#compliance');
    if (complianceSection) {
      gsap.fromTo(
        complianceSection.querySelectorAll('h2, h3'),
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: complianceSection,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        complianceSection.querySelectorAll('p'),
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: complianceSection,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Function section specific animations
    const functionSection = document.querySelector('#function');
    if (functionSection) {
      gsap.fromTo(
        functionSection.querySelectorAll('h2, h3'),
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: functionSection,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        functionSection.querySelectorAll('p'),
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: functionSection,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}

