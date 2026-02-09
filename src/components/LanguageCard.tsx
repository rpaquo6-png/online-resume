type Props = {
  name: string;
  level: string;
  animate?: boolean;
  delayMs?: number;
};

const levelScoreRules = [
  { tokens: ["native", "natif", "nativo"], score: 100 },
  { tokens: ["fluent", "courant", "fluido"], score: 85 },
  { tokens: ["intermediate", "intermediaire", "intermedio"], score: 40 },
  { tokens: ["beginner", "debutant", "principiante"], score: 10 }
];

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export function getLanguageLevelScore(level: string) {
  const normalized = normalize(level);
  const matched = levelScoreRules.find((rule) =>
    rule.tokens.some((token) => normalized.includes(token))
  );
  return matched?.score ?? 50;
}

export function LanguageCard({ name, level, animate = true, delayMs = 0 }: Props) {
  const score = getLanguageLevelScore(level);
  const size = 96;
  const strokeWidth = 11;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const targetStrokeDashoffset = circumference * (1 - score / 100);
  const strokeDashoffset = animate ? targetStrokeDashoffset : circumference;

  return (
    <div className="glass-card flex min-w-[190px] flex-1 basis-0 flex-col items-center gap-3 p-4 text-center shadow-[0_2px_10px_rgba(17,24,39,0.06)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(17,24,39,0.12)]">
      <div className="relative h-24 w-24" aria-label={`${name}: ${level}`}>
        <svg className="-rotate-90" width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgb(var(--muted))"
            strokeWidth={strokeWidth}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="rgb(var(--accent))"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{
              transition: "stroke-dashoffset 1.1s cubic-bezier(0.22, 1, 0.36, 1)",
              transitionDelay: `${delayMs}ms`
            }}
          />
        </svg>
        <div className="absolute inset-0 grid place-items-center px-1 text-center">
          <span className="max-w-[62px] text-[9px] font-semibold leading-tight text-foreground/90 sm:text-[10px]">
            {level}
          </span>
        </div>
      </div>
      <p className="text-lg font-semibold leading-none">{name}</p>
    </div>
  );
}
