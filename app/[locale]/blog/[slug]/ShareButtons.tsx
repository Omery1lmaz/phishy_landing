'use client';

import React, { useEffect, useState } from 'react';
import type { Locale } from '@/i18n/routing';

interface ShareButtonsProps {
  postTitle: string;
  postSlug: string;
  locale: Locale;
}

export default function ShareButtons({ postTitle, postSlug, locale }: ShareButtonsProps) {
  const [currentUrl, setCurrentUrl] = useState<string>('');
  const [isCopied, setIsCopied] = useState(false);
  const copyTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  // Get current URL on client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(`${window.location.origin}/${locale}/blog/${postSlug}`);
    }
  }, [locale, postSlug]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  // Copy link to clipboard
  const copyToClipboard = () => {
    const url = currentUrl || `${typeof window !== 'undefined' ? window.location.origin : ''}/${locale}/blog/${postSlug}`;
    if (!url) return;

    // Prevent multiple calls
    if (isCopied) return;

    // Clear existing timeout if any
    if (copyTimeoutRef.current) {
      clearTimeout(copyTimeoutRef.current);
    }

    navigator.clipboard.writeText(url).then(() => {
      setIsCopied(true);
      // Reset after 2.5 seconds
      copyTimeoutRef.current = setTimeout(() => {
        setIsCopied(false);
        copyTimeoutRef.current = null;
      }, 2500);
    }).catch(() => {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = url;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setIsCopied(true);
      // Reset after 2.5 seconds
      copyTimeoutRef.current = setTimeout(() => {
        setIsCopied(false);
        copyTimeoutRef.current = null;
      }, 2500);
    });
  };

  const socialMedia = [
    {
      name: 'Twitter',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
        </svg>
      ),
      color: 'hover:bg-blue-500/20 hover:border-blue-500/50 hover:text-blue-400',
      url: (url: string, title: string) => `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
    },
    {
      name: 'Facebook',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      color: 'hover:bg-blue-600/20 hover:border-blue-600/50 hover:text-blue-500',
      url: (url: string, title: string) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(title)}`
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      color: 'hover:bg-blue-700/20 hover:border-blue-700/50 hover:text-blue-600',
      url: (url: string, title: string) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&summary=${encodeURIComponent(title)}`
    },
    {
      name: 'WhatsApp',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
      color: 'hover:bg-green-500/20 hover:border-green-500/50 hover:text-green-400',
      url: (url: string, title: string) => `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`
    },
    {
      name: 'Telegram',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.559z" />
        </svg>
      ),
      color: 'hover:bg-blue-400/20 hover:border-blue-400/50 hover:text-blue-300',
      url: (url: string, title: string) => `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
    }
  ];

  return (
    <>
      <div className="flex items-center gap-2">
        {/* Copy Link Button */}
        <button
          onClick={copyToClipboard}
          className={`group relative flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 border backdrop-blur-sm overflow-hidden ${
            isCopied
              ? 'bg-gradient-to-r from-green-600/90 to-green-500/90 text-white border-green-500/50 scale-105'
              : 'bg-gradient-to-r from-gray-800/60 to-gray-800/40 hover:from-gray-700/60 hover:to-gray-700/40 text-gray-300 hover:text-white border-gray-700/40 hover:border-gray-600/60'
          }`}
          title={locale === 'tr' ? 'Linki Kopyala' : 'Copy Link'}
        >
          <div className="relative flex items-center gap-2">
            {isCopied ? (
              <>
                <svg 
                  className="w-4 h-4 copy-checkmark" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-xs font-medium hidden sm:inline copy-text">
                  {locale === 'tr' ? 'Kopyalandı' : 'Copied'}
                </span>
              </>
            ) : (
              <>
                <svg 
                  className="w-4 h-4 transition-transform group-hover:scale-110" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span className="text-xs font-medium hidden sm:inline">{locale === 'tr' ? 'Kopyala' : 'Copy'}</span>
              </>
            )}
          </div>
        </button>

        {/* Social Media Icons */}
        <div className="flex items-center gap-1.5">
          {socialMedia.map((social) => {
            const shareUrl = currentUrl 
              ? social.url(currentUrl, postTitle)
              : '#';
            
            return (
              <a
                key={social.name}
                href={shareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-gray-800/60 to-gray-800/40 hover:from-gray-700/60 hover:to-gray-700/40 text-gray-300 transition-all duration-300 border border-gray-700/40 hover:border-gray-600/60 backdrop-blur-sm hover:scale-110 hover:shadow-lg ${social.color}`}
                aria-label={`Share on ${social.name}`}
                title={social.name}
              >
                <div className="relative z-10 flex items-center justify-center">
                  {social.icon}
                </div>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-500/0 via-primary-500/0 to-secondary-500/0 group-hover:from-primary-500/10 group-hover:via-primary-500/5 group-hover:to-secondary-500/10 transition-all duration-300"></div>
              </a>
            );
          })}
        </div>
      </div>

    </>
  );
}

