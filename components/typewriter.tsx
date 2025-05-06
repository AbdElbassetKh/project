"use client"

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TypewriterProps {
  texts: string[];
  delay?: number;
  className?: string;
}

export default function Typewriter({ texts, delay = 150, className }: TypewriterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(delay);

  useEffect(() => {
    const ticker = setTimeout(() => {
      if (texts.length === 0) return;

      const currentText = texts[currentTextIndex];
      
      if (isDeleting) {
        setText(currentText.substring(0, currentCharIndex - 1));
        setCurrentCharIndex(prev => prev - 1);
        setDelta(delay / 2);
      } else {
        setText(currentText.substring(0, currentCharIndex + 1));
        setCurrentCharIndex(prev => prev + 1);
        setDelta(delay);
      }

      if (!isDeleting && currentCharIndex === currentText.length) {
        setIsDeleting(true);
        setDelta(1500);
      } else if (isDeleting && currentCharIndex === 0) {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setDelta(500);
      }
    }, delta);

    return () => clearTimeout(ticker);
  }, [texts, currentTextIndex, currentCharIndex, isDeleting, delta, delay]);

  return (
    <span className={cn("inline-block", className)}>
      {text}
      <span className="animate-blink">|</span>
    </span>
  );
}