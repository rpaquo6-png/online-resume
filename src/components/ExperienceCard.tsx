import type { TranslationDictionary } from "@/types";

type Props = {
  record: {
    id: string;
    start: string;
    end: string;
  };
  content: TranslationDictionary["experience"]["items"][string];
  side: "left" | "right";
};

export function ExperienceCard({ record, content, side }: Props) {
  const visibleAchievements = content.achievements.slice(0, 4);
  const hiddenAchievements = content.achievements.slice(4);

  return (
    <article
      className={`glass-card ml-12 md:ml-0 md:col-span-5 ${
        side === "left" ? "md:col-start-1" : "md:col-start-8"
      }`}
    >
      <p className="text-sm text-foreground/70">
        {record.start} - {record.end}
      </p>
      <h3 className="mt-1 text-xl font-semibold">{content.role}</h3>
      <p className="text-foreground/80">
        {content.company} · {content.location}
      </p>
      <p className="mt-3 text-foreground/85">{content.summary}</p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-foreground/85">
        {visibleAchievements.map((achievement) => (
          <li key={achievement}>{achievement}</li>
        ))}
      </ul>

      {hiddenAchievements.length > 0 ? (
        <details className="mt-4 text-sm">
          <summary className="cursor-pointer font-medium text-accent">See more details</summary>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-foreground/85">
            {hiddenAchievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </details>
      ) : null}
    </article>
  );
}
