"use client";
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export function EmotePool() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    const scroll = () => {
      scrollElement.scrollLeft += 1;
      if (scrollElement.scrollLeft >= scrollElement.scrollWidth / 2) {
        scrollElement.scrollLeft = 0;
      }
    };

    const intervalId = setInterval(scroll, 50);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Popular Emotes
        </h2>
        <div 
          ref={scrollRef}
          className="flex overflow-hidden gap-8 mb-12"
        >
          {/* Duplicate the emotes for infinite scroll effect */}
          {[...Array(12)].map((_, i) => (
            <div key={i} className="flex-shrink-0 w-24 h-24 relative">
              <Image
                src={`/emotes/emote${(i % 6) + 1}.png`}
                alt={`Emote ${i + 1}`}
                fill
                className="object-contain hover:scale-110 transition-transform"
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="btn-primary">
            Browse All Emotes
          </button>
        </div>
      </div>
    </section>
  );
} 