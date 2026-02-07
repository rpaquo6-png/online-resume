import type { TranslationDictionary } from "@/types";

type Props = {
  record: {
    id: string;
    start: string;
    end: string;
  };
  content: TranslationDictionary["experience"]["items"][string];
};

export function ExperienceCard({ record, content }: Props) {
  return (
    <article className="glass-card relative pl-8">
      <span className="absolute left-3 top-8 h-3 w-3 rounded-full bg-accent" aria-hidden="true" />
      <p className="text-sm text-foreground/70">
        {record.start} - {record.end}
      </p>
      <h3 className="mt-1 text-xl font-semibold">{content.role}</h3>
      <p className="text-foreground/80">
        {content.company} · {content.location}
      </p>
      <p className="mt-3 text-foreground/85">{content.summary}</p>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-foreground/85">
        {content.achievements.map((achievement) => (
          <li key={achievement}>{achievement}</li>
        ))}
      </ul>
    </article>
  );
}
