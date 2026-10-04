import { Star } from "lucide-react";

type StarsProps = {
  rating: number;
  /** Tailwind size classes for each star, e.g. "size-5" */
  sizeClass?: string;
  className?: string;
};

/** Five stars with the gold layer clipped to the exact rating (e.g. 4.6 → 92%). */
export function Stars({ rating, sizeClass = "size-[18px]", className = "" }: StarsProps) {
  const pct = Math.max(0, Math.min(100, (rating / 5) * 100));
  const row = (color: string) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`${sizeClass} shrink-0 ${color}`} fill="currentColor" strokeWidth={0} aria-hidden />
    ));

  return (
    <span
      role="img"
      aria-label={`Rated ${rating} out of 5 stars`}
      className={`relative inline-flex gap-0.5 ${className}`}
    >
      <span className="inline-flex gap-0.5">{row("text-[#4a4f57]")}</span>
      <span className="absolute inset-y-0 left-0 inline-flex gap-0.5 overflow-hidden" style={{ width: `${pct}%` }}>
        {row("text-gold")}
      </span>
    </span>
  );
}
