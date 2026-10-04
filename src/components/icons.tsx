import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export function MufflerIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" {...base} {...props}>
      <rect x="7" y="10" width="16" height="12" rx="6" />
      <path d="M2 16h5M23 16h3l3-3M11 14v4M15 14v4M19 14v4" />
    </svg>
  );
}

export function ExhaustIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" {...base} {...props}>
      <path d="M3 22h14a4 4 0 0 0 4-4v-4" />
      <path d="M3 26h14a8 8 0 0 0 8-8v-4" />
      <path d="M21 8c0-2 2-2 2-4M25 9c0-2 2-2 2-4M17 9c0-2 2-2 2-4" />
    </svg>
  );
}

export function BrakeDiscIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" {...base} {...props}>
      <circle cx="16" cy="16" r="12" />
      <circle cx="16" cy="16" r="4" />
      <path d="M16 7.5v1M16 23.5v1M7.5 16h1M23.5 16h1" />
      <path fill="currentColor" stroke="none" d="M22 4.5a13 13 0 0 1 5.5 6.5l-4 1.6A9 9 0 0 0 19.8 8z" />
    </svg>
  );
}

export function BrakePadsIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" {...base} {...props}>
      <path d="M5 9h22l-2 7H7z" />
      <path d="M7 20h18l-2 5H9z" />
      <path d="M10 16v4M22 16v4" />
    </svg>
  );
}

export function InspectionIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" {...base} {...props}>
      <rect x="6" y="5" width="16" height="22" rx="2" />
      <path d="M10 12l2 2 4-4M10 20h8" />
      <circle cx="23" cy="21" r="4" />
      <path d="M26 24l3 3" />
    </svg>
  );
}

export function NoiseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" {...base} {...props}>
      <path d="M4 12h5l6-5v18l-6-5H4z" />
      <path d="M20 11a7 7 0 0 1 0 10M24 7a12 12 0 0 1 0 18" />
    </svg>
  );
}

/** Facebook brand mark (lucide no longer ships brand icons). */
export function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden focusable={false} {...props}>
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z" />
    </svg>
  );
}
