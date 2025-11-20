'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { gsap } from '@/app/utils/gsap';
import { renderMarkdown, extractAudioPath } from '@/lib/markdown';
import type { BlogPost } from '@/lib/blog';
import type { Locale } from '@/i18n/routing';

interface BlogPostClientProps {
  post: BlogPost;
  locale: Locale;
  blogUrl: string;
}

export default function BlogPostClient({ post, locale, blogUrl }: BlogPostClientProps) {
  const t = useTranslations('Blog');
  const contentRef = useRef<HTMLElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioPath = extractAudioPath(post.content);

  // AI model URLs with prompt
  const getAIUrl = (model: string) => {
    const prompt = locale === 'tr' 
      ? `${blogUrl} adresindeki makaleyi kapsamlı bir şekilde özetle`
      : `Summarize the article at ${blogUrl} comprehensively`;
    
    const urls: Record<string, string> = {
      chatgpt: `https://chat.openai.com/?q=${encodeURIComponent(prompt)}`,
      grok: `https://x.com/i/grok?q=${encodeURIComponent(prompt)}`,
      perplexity: `https://www.perplexity.ai/search?q=${encodeURIComponent(prompt)}`,
      claude: `https://claude.ai/chat?q=${encodeURIComponent(prompt)}`,
    };
    
    return urls[model] || '#';
  };

  useEffect(() => {
    if (!contentRef.current) return;

    // Set initial styles
    gsap.set(contentRef.current, { opacity: 0, y: 30 });

    // Page entrance animation
    gsap.to(contentRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: 0.3,
      ease: 'power3.out',
    });

    return () => {
      // Cleanup animations
      if (contentRef.current) gsap.killTweensOf(contentRef.current);
    };
  }, [post]);

  // Format time helper
  const formatTime = (seconds: number): string => {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Handle progress bar click (seek)
  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !audioDuration) return;

    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newTime = percentage * audioDuration;

    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
    setAudioProgress(percentage * 100);
  };

  // Audio playback functions
  const startAudio = () => {
    if (!audioPath) return;

    // If audio already exists and is paused, resume it
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
      return;
    }

    // Stop any existing audio
    stopAudio();

    const audio = new Audio(audioPath);
    audioRef.current = audio;

    audio.addEventListener('loadedmetadata', () => {
      setAudioDuration(audio.duration);
    });

    audio.addEventListener('loadstart', () => {
      setIsPlaying(true);
      setAudioProgress(0);
      setCurrentTime(0);
    });

    audio.addEventListener('timeupdate', () => {
      if (audio.duration) {
        const progress = (audio.currentTime / audio.duration) * 100;
        setAudioProgress(progress);
        setCurrentTime(audio.currentTime);
        setAudioDuration(audio.duration);
      }
    });

    audio.addEventListener('ended', () => {
      setIsPlaying(false);
      setAudioProgress(100);
      setCurrentTime(audioDuration);
      setTimeout(() => {
        setAudioProgress(0);
        setCurrentTime(0);
      }, 1000);
    });

    audio.addEventListener('error', (event) => {
      console.error('Audio playback error:', event);
      setIsPlaying(false);
      setAudioProgress(0);
      setCurrentTime(0);
      alert(locale === 'tr' 
        ? 'Ses dosyası oynatılırken bir hata oluştu.' 
        : 'An error occurred while playing audio.');
    });

    audio.play().catch((error) => {
      console.error('Error playing audio:', error);
      setIsPlaying(false);
      setAudioProgress(0);
      setCurrentTime(0);
    });
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
  };

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
    setIsPlaying(false);
    setAudioProgress(0);
    setCurrentTime(0);
    setAudioDuration(0);
  };

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      stopAudio();
    };
  }, []);

  return (
    <>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-stretch gap-3 mb-8">
        {/* AI Summary Options - Card Style */}
        <div className="flex-1 min-w-0 audio-player-card rounded-xl px-4 py-3 bg-gradient-to-br from-primary-900/20 via-secondary-900/15 to-primary-900/20 backdrop-blur-sm">
          <div className="flex items-center gap-3 w-full">
            {/* AI Icon */}
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 shadow-lg shadow-primary-500/40">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-sm font-semibold text-white">
                  {locale === 'tr' ? 'Bu İçeriği Yapay Zekâ (AI) ile Özetleyin:' : 'Summarize this content with AI:'}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {/* ChatGPT */}
                <a
                  href={getAIUrl('chatgpt')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-primary-400/50 transition-all duration-200 backdrop-blur-sm"
                >
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.928 11.607c-.202-.125-5.495-3.157-7.207-4.102C13.697 6.446 12.857 6 12 6s-1.697.446-2.721 1.505C7.567 8.45 2.274 11.482 2.072 11.607a.996.996 0 0 0 0 1.786c.202.125 5.495 3.157 7.207 4.102C10.303 17.554 11.143 18 12 18s1.697-.446 2.721-1.505c1.712-.945 7.005-3.977 7.207-4.102a.996.996 0 0 0 0-1.786zM12 16c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                  </svg>
                  <span className="text-xs font-medium text-white">ChatGPT</span>
                </a>

                {/* Grok */}
                <a
                  href={getAIUrl('grok')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-primary-400/50 transition-all duration-200 backdrop-blur-sm"
        >
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                  <span className="text-xs font-medium text-white">Grok</span>
                </a>

                {/* Perplexity */}
                <a
                  href={getAIUrl('perplexity')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-primary-400/50 transition-all duration-200 backdrop-blur-sm"
                >
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  <span className="text-xs font-medium text-white">Perplexity</span>
                </a>

                {/* Claude.ai */}
                <a
                  href={getAIUrl('claude')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-primary-400/50 transition-all duration-200 backdrop-blur-sm"
                >
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
          </svg>
                  <span className="text-xs font-medium text-white">Claude.ai</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Podcast Audio Player */}
        {audioPath && (
          <div className="flex-1 min-w-0 audio-player-card rounded-xl px-4 py-2 bg-gradient-to-br from-primary-900/20 via-secondary-900/15 to-primary-900/20 backdrop-blur-sm flex items-center">
            <div className="flex items-center gap-3 w-full">
            {/* Play/Pause Button */}
            {!isPlaying && (!audioRef.current || audioRef.current.paused) ? (
              <button
                onClick={startAudio}
                className="group relative flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:from-primary-400 hover:to-secondary-400 transition-all duration-300 shadow-lg shadow-primary-500/40 hover:shadow-primary-500/60 hover:scale-105 active:scale-95"
              >
                <svg 
                  className="w-5 h-5 text-white ml-0.5" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            ) : (
                <button
                  onClick={pauseAudio}
                  className="group relative flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-500 hover:from-red-400 hover:to-orange-400 transition-all duration-300 shadow-lg shadow-red-500/40 hover:shadow-red-500/60 hover:scale-105 active:scale-95"
                >
                  <svg 
                    className="w-5 h-5 text-white" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M6 6h4v12H6V6zm8 0h4v12h-4V6z" />
                  </svg>
                </button>
              )}

              {/* Text and Progress */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-base flex-shrink-0">🎧</span>
                  <p className="text-gray-300 text-sm font-medium truncate">
                    {locale === 'tr' 
                      ? 'Dilerseniz bu içeriğimizi podcast olarak da dinleyebilirsiniz'
                      : 'You can also listen to this content as a podcast'}
                  </p>
                </div>
                
                {/* Progress Bar */}
                {(isPlaying || audioDuration > 0) && (
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-xs text-gray-400 min-w-[35px] font-medium flex-shrink-0">
                      {formatTime(currentTime)}
                    </span>
                    <div 
                      className="flex-1 h-2 bg-gray-700/50 rounded-full overflow-hidden cursor-pointer hover:h-2.5 transition-all group relative"
                      onClick={handleProgressClick}
                    >
                      <div 
                        className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-100 rounded-full relative"
                        style={{ width: `${audioProgress}%` }}
                      >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"></div>
                      </div>
                    </div>
                    <span className="text-xs text-gray-400 min-w-[35px] text-right font-medium flex-shrink-0">
                      {formatTime(audioDuration)}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <article ref={contentRef} className="blog-post-content relative mb-16">
        <div className="prose prose-invert max-w-none">
          {renderMarkdown(post.content)}
        </div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="mt-8 pt-8 border-t border-gray-700/50">
            <h3 className="text-lg font-semibold text-white mb-4">{t('tags')}</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-gray-800/50 text-gray-300 text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </article>
    </>
  );
}

