"use client"

import { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
}

export default function AnimatedText({ text, className, once = true }: AnimatedTextProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (elementRef.current) {
            elementRef.current.classList.add('animate-text-reveal');
          }
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          if (elementRef.current) {
            elementRef.current.classList.remove('animate-text-reveal');
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [once]);

  return (
    <div
      ref={elementRef}
      className={cn(
        "overflow-hidden opacity-0",
        className
      )}
    >
      <div className="transform translate-y-full">
        {text}
      </div>
    </div>
  );
}