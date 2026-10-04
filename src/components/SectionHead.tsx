import type { ReactNode } from "react";

type Props = { id: string; eyebrow: string; title: ReactNode; children?: ReactNode; className?: string };

export function SectionHead({ id, eyebrow, title, children, className = "mb-12" }: Props) {
  return (
    <div className={`max-w-[680px] ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id} className="display mb-3.5 mt-3 text-[clamp(2rem,4.5vw,3rem)] font-bold">
        {title}
      </h2>
      {children && <p className="text-[1.05rem] text-muted">{children}</p>}
    </div>
  );
}
