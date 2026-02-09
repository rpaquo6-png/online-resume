type Props = {
  items: string[];
};

export function SkillsGrid({ items }: Props) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {items.map((skill) => (
        <span
          key={skill}
          className="glass-card inline-flex rounded-full !bg-white !p-0 !px-3.5 !py-1.5 !shadow-soft text-sm font-medium text-foreground/90 transition-colors duration-200 hover:!bg-accent hover:!text-white"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}
