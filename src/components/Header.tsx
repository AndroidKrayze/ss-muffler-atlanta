import { MapPin, Phone, Star } from "lucide-react";
import { site } from "@/lib/site";
import { Logo } from "./Logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <>
      <div className="bg-linear-90 from-accent to-accent2 text-[0.85rem] font-semibold text-white">
        <div className="mx-auto flex max-w-[1180px] items-center justify-center gap-4 px-5 py-2 sm:justify-between sm:px-6">
          <p className="inline-flex items-center gap-2">
            <MapPin className="size-[15px]" aria-hidden />
            {site.street}, Atlanta
          </p>
          <p className="hidden items-center gap-2 sm:inline-flex">
            <Star className="size-[15px]" fill="currentColor" strokeWidth={0} aria-hidden />
            {site.rating} stars &middot; {site.reviewCount} reviews
          </p>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between gap-5 px-5 sm:h-[72px] sm:px-6">
          <Logo />
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex gap-7 text-[0.95rem] font-semibold text-muted">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href={site.phoneHref}
            className="btn btn-primary px-3.5 py-2.5 text-[0.95rem] sm:px-5 sm:py-[11px]"
            aria-label={`Call ${site.phoneDisplay}`}
          >
            <Phone className="size-5" fill="currentColor" strokeWidth={0} aria-hidden />
            <span className="hidden sm:inline">{site.phoneDisplay}</span>
          </a>
        </div>
      </header>
    </>
  );
}
