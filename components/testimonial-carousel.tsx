"use client"

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { testimonials } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const goToNext = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }
  }, [isTransitioning]);

  const goToPrevious = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }
  }, [isTransitioning]);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 7000);
    
    return () => clearInterval(interval);
  }, [goToNext]);

  // Reset transition state
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <div className="relative overflow-hidden max-w-3xl mx-auto px-6">
      <Quote className="absolute text-primary opacity-10 top-0 left-0 h-20 w-20 transform -translate-x-1/4 -translate-y-1/4" />
      
      <div className="flex flex-col items-center text-center px-4 py-8">
        <div className="mb-6 relative">
          <div className="relative overflow-hidden h-[4.5rem]">
            {testimonials.map((testimonial, index) => (
              <p 
                key={index}
                className={cn(
                  "text-lg leading-relaxed italic absolute w-full transition-all duration-500 transform",
                  index === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
              >
                "{testimonial.quote}"
              </p>
            ))}
          </div>
        </div>
        
        <div className="mt-6 relative">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={cn(
                "flex flex-col items-center absolute left-1/2 transform -translate-x-1/2 transition-all duration-500",
                index === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
            >
              <div className="w-16 h-16 rounded-full overflow-hidden mb-4 relative border-2 border-primary/20">
                <Image 
                  src={testimonial.avatarUrl}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          ))}
          <div className="h-[5.5rem]"></div>
        </div>
        
        <div className="flex space-x-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurrent(index);
                }
              }}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === current ? "bg-primary w-6" : "bg-primary/30"
              )}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-2">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={goToPrevious}
          className="bg-background/80 backdrop-blur-sm hover:bg-background rounded-full"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={goToNext}
          className="bg-background/80 backdrop-blur-sm hover:bg-background rounded-full"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}