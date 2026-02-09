"use client";

import { useEffect, useRef, useState } from "react";
import { LanguageCard } from "@/components/LanguageCard";

type Props = {
  items: Array<{ name: string; level: string }>;
};

export function LanguagesSection({ items }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = containerRef.current;
    if (!element || hasAnimated) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [hasAnimated]);

  return (
    <div ref={containerRef} className="w-full pb-2 pt-1 md:pb-0 md:pt-0">
      <div className="overflow-x-auto md:overflow-visible">
        <div className="flex w-full min-w-max flex-nowrap items-stretch gap-5 py-1 md:py-0">
          {items.map((item, index) => (
            <LanguageCard
              key={item.name}
              name={item.name}
              level={item.level}
              animate={hasAnimated}
              delayMs={index * 120}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
