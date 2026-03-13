'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const slides = [
  {
    id: 1,
    title: 'Professional Property Management',
    description: 'Comprehensive solutions for all your property needs in Sri Lanka',
    gradient: 'from-primary/20 to-secondary/20',
    bgImage: '/hero-1.jpg',
  },
  {
    id: 2,
    title: 'Seamless Rental Management',
    description: 'Efficient rental collection and tenant management services',
    gradient: 'from-secondary/20 to-primary/20',
    bgImage: '/hero-2.jpg',
  },
  {
    id: 3,
    title: 'Complete Maintenance Services',
    description: 'Professional maintenance, cleaning, and daily operations',
    gradient: 'from-primary/30 to-secondary/20',
    bgImage: '/hero-3.jpg',
  },
  {
    id: 4,
    title: 'Legal Compliance & Security',
    description: 'Full legal support and advanced security solutions',
    gradient: 'from-secondary/30 to-primary/20',
    bgImage: '/hero-4.jpg',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const goToPrevious = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setAutoplay(false);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setAutoplay(false);
  };

  return (
    <div className="relative w-full h-screen min-h-screen overflow-hidden">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Overlay Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} bg-black/40`} />

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-700 drop-shadow-lg">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 drop-shadow">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Learn more
                </Button>
            
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/80 backdrop-blur hover:bg-background text-primary transition-all hover:scale-110"
        aria-label="Previous slide"
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-background/80 backdrop-blur hover:bg-background text-primary transition-all hover:scale-110"
        aria-label="Next slide"
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrent(index);
              setAutoplay(false);
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current
                ? 'bg-primary w-8'
                : 'bg-primary/40 hover:bg-primary/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 animate-bounce text-primary">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}
