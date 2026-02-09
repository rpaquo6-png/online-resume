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
    <div ref={containerRef} className="w-full overflow-x-auto pb-1">
      <div className="flex w-full min-w-max flex-nowrap items-stretch gap-5">
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
  );
}
