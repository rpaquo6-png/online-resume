"use client";

import { useEffect, useId, useRef, useState } from "react";

import { ExperienceCard } from "@/components/ExperienceCard";
import type { ExperienceRecord, TranslationDictionary } from "@/types";

type Props = {
  records: ExperienceRecord[];
  items: TranslationDictionary["experience"]["items"];
};

export function ExperienceTimeline({ records, items }: Props) {
  const clipPathId = useId().replace(/:/g, "");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [progress, setProgress] = useState(0);
  const [markerRatios, setMarkerRatios] = useState<number[]>([]);
  const [trackHeight, setTrackHeight] = useState(1);

  useEffect(() => {
    let rafId = 0;

    const updateMarkerRatios = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const height = containerRect.height || 1;
      setTrackHeight(height);
      const ratios = itemRefs.current.map((item) => {
        if (!item) return 1;
        const itemRect = item.getBoundingClientRect();
        const markerCenterY = itemRect.top - containerRect.top + 39;
        return Math.min(1, Math.max(0, markerCenterY / height));
      });

      setMarkerRatios(ratios);
    };

    const updateProgress = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const startOffset = viewportHeight * 0.7;
      const distance = rect.height + viewportHeight * 0.5;
      const rawProgress = (startOffset - rect.top) / distance;
      const nextProgress = Math.min(1, Math.max(0, rawProgress));

      setProgress(nextProgress);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        updateProgress();
        updateMarkerRatios();
      });
    };

    updateProgress();
    updateMarkerRatios();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const safeTrackHeight = Math.max(trackHeight, 1);
  const progressHeight = safeTrackHeight * progress;
  const markerPoints = markerRatios.map((ratio) => safeTrackHeight * ratio);
  const firstMarkerY = markerPoints[0] ?? 0;
  const activeHeight = Math.max(0, progressHeight - firstMarkerY);

  return (
    <div ref={containerRef} className="relative space-y-8">
      <svg
        className="pointer-events-none absolute bottom-0 left-4 top-0 w-6 -translate-x-1/2 md:left-1/2"
        viewBox={`0 0 24 ${safeTrackHeight}`}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <clipPath id={clipPathId}>
            <rect x="0" y={firstMarkerY} width="24" height={activeHeight} />
          </clipPath>
        </defs>

        <line
          x1="12"
          y1={firstMarkerY}
          x2="12"
          y2={safeTrackHeight}
          stroke="rgb(var(--border))"
          strokeWidth="4"
        />
        {markerPoints.map((y, index) => (
          <circle
            key={`marker-${index}`}
            cx="12"
            cy={y}
            r="9"
            fill={progressHeight >= y ? "rgb(var(--accent))" : "rgb(var(--border))"}
          />
        ))}

        <g clipPath={`url(#${clipPathId})`}>
          <line
            x1="12"
            y1={firstMarkerY}
            x2="12"
            y2={safeTrackHeight}
            stroke="rgb(var(--accent))"
            strokeWidth="4"
          />
        </g>
      </svg>

      {records.map((record, index) => {
        const content = items[record.id];
        const side = index % 2 === 0 ? "right" : "left";
        const markerY = markerPoints[index] ?? safeTrackHeight;
        const revealWindow = 120;
        const revealProgress = Math.min(
          1,
          Math.max(0, (progressHeight - (markerY - revealWindow)) / revealWindow),
        );

        return (
          <div
            key={record.id}
            ref={(node) => {
              itemRefs.current[index] = node;
            }}
            className="relative grid grid-cols-1 md:grid-cols-12"
          >
            <ExperienceCard
              record={record}
              content={content}
              side={side}
              revealProgress={revealProgress}
            />
          </div>
        );
      })}
    </div>
  );
}
