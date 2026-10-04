import { site } from "@/lib/site";

export function Logo({ as: Tag = "a" }: { as?: "a" | "div" }) {
  const props = Tag === "a" ? { href: "#top", "aria-label": `${site.name}, back to top` } : {};
  return (
    <Tag {...props} className="flex items-center gap-3">
      <span
        aria-hidden
        className="grid size-10 place-items-center rounded-[10px] bg-linear-135 from-accent to-accent2 font-display text-[0.95rem] font-bold tracking-tight text-white shadow-[inset_0_-3px_0_rgba(0,0,0,0.2)] sm:size-11 sm:text-[1.05rem]"
      >
        S&amp;S
      </span>
      <span className="display text-[1.02rem] font-bold sm:text-[1.2rem]">
        S &amp; S Muffler &amp; Brake
        <span className="block font-sans text-[0.6rem] font-semibold tracking-[0.14em] text-muted sm:text-[0.68rem] sm:tracking-[0.2em]">
          Atlanta, Georgia
        </span>
      </span>
    </Tag>
  );
}
