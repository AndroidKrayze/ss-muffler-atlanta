import { site } from "@/lib/site";
import { FacebookIcon } from "./icons";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-[#0f1012] pb-7 pt-14">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-3.5 max-w-[340px] text-[0.95rem] text-muted">
              Muffler, exhaust and brake repair in the Carey Park area of Northwest Atlanta.
            </p>
            {/* Facebook page URL not confirmed yet, so this is intentionally not a link. */}
            <p className="mt-4 inline-flex items-center gap-2.5 text-[0.95rem] font-semibold">
              <FacebookIcon className="size-5 text-[#4d8cff]" />
              Find us on Facebook
            </p>
          </div>
          <nav aria-labelledby="footer-services">
            <h2 id="footer-services" className="mb-3.5 font-display text-base uppercase tracking-[0.08em]">
              Services
            </h2>
            <ul className="grid gap-2 text-[0.95rem] text-muted">
              {["Muffler Replacement", "Exhaust Repair", "Brake Pads & Rotors", "Inspections"].map((s) => (
                <li key={s}>
                  <a href="#services" className="transition-colors hover:text-white">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className="mb-3.5 font-display text-base uppercase tracking-[0.08em]">Contact</h2>
            <address className="not-italic">
              <ul className="grid gap-2 text-[0.95rem] text-muted">
                <li>
                  {site.street}
                  <br />
                  {site.cityLine}
                </li>
                <li>
                  <a href={site.phoneHref} className="transition-colors hover:text-white">
                    {site.phoneDisplay}
                  </a>
                </li>
                <li>Hours: {site.hours}</li>
              </ul>
            </address>
          </div>
        </div>
        <div className="mt-11 flex flex-wrap justify-between gap-3 border-t border-line pt-[22px] text-[0.82rem] text-[#8a9098]">
          <p>&copy; {site.name} &middot; Atlanta, GA</p>
          <p>
            Rating of {site.rating} stars from {site.reviewCount} reviews per {site.ratingSource}.
          </p>
        </div>
      </div>
    </footer>
  );
}
