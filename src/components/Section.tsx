import type { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, title, children, className = "" }: Props) {
  return (
    <section id={id} className={`scroll-mt-24 py-6 sm:py-8 ${className}`}>
      <div className="section-shell fade-up">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}
