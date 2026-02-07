type Props = {
  items: string[];
};

export function SkillsGrid({ items }: Props) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((skill) => (
        <div key={skill} className="glass-card p-4 text-sm font-medium">
          {skill}
        </div>
      ))}
    </div>
  );
}
