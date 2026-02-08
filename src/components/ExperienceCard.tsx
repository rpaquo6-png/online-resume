import type { TranslationDictionary } from "@/types";

type Props = {
  record: {
    id: string;
    start: string;
    end: string;
  };
  content: TranslationDictionary["experience"]["items"][string];
  side: "left" | "right";
  revealProgress: number;
};

export function ExperienceCard({ record, content, side, revealProgress }: Props) {
  const clampedReveal = Math.min(1, Math.max(0, revealProgress));
  const revealPercent = Math.round(clampedReveal * 100);
  const cardBackground = `color-mix(in srgb, rgb(var(--border)) ${100 - revealPercent}%, rgb(var(--bg)) ${revealPercent}%)`;
  const titleColor = `color-mix(in srgb, rgb(var(--fg)) ${100 - revealPercent}%, rgb(var(--accent)) ${revealPercent}%)`;
  const seeMoreColor = `color-mix(in srgb, rgb(var(--border)) ${100 - revealPercent}%, rgb(var(--accent)) ${revealPercent}%)`;

  return (
    <article
      className={`glass-card ml-12 md:ml-0 md:col-span-5 ${
        side === "left" ? "md:col-start-1" : "md:col-start-8"
      } transition-[background-color,border-color] duration-300 ease-out`}
      style={{
        backgroundColor: cardBackground,
      }}
    >
      <p className="text-sm text-foreground/70">
        {record.end ? `${record.start} - ${record.end}` : record.start}
      </p>
      <h3 className="mt-1 text-xl font-semibold transition-colors duration-300 ease-out" style={{ color: titleColor }}>
        {content.role}
      </h3>
      <p className="text-foreground/80">{content.company}</p>
      <p className="mt-3 text-foreground/85">{content.summary}</p>

      {content.achievements.length > 0 ? (
        <details className="mt-4 text-sm">
          <summary className="cursor-pointer font-medium transition-colors duration-300 ease-out" style={{ color: seeMoreColor }}>
            See more details
          </summary>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-foreground/85">
            {content.achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </details>
      ) : null}
    </article>
  );
}
