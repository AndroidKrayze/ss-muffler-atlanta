import { Phone } from "lucide-react";
import { site } from "@/lib/site";

export function CallToAction() {
  return (
    <section id="contact" aria-labelledby="cta-title" className="my-[72px] sm:my-24">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-6">
        <div className="cta-stripes relative grid items-center gap-8 overflow-hidden rounded-[20px] bg-linear-135 from-accent to-[#ff7a00] px-[26px] py-10 sm:rounded-3xl sm:px-14 sm:py-16 lg:grid-cols-[1.3fr_auto]">
          <div className="relative">
            <h2 id="cta-title" className="display text-[clamp(2rem,4.2vw,3.1rem)] font-bold text-white">
              Hear a Rattle? Feel a Grind?
            </h2>
            <p className="mt-3 max-w-[560px] text-[1.1rem] text-white/90">
              Don&apos;t wait until a small noise becomes a big repair. Call {site.name} and tell us what&apos;s going on.
            </p>
          </div>
          <div className="relative">
            <a href={site.phoneHref} className="btn btn-dark w-full px-6 py-[18px] text-[1.15rem] sm:w-auto sm:px-9 sm:py-5 sm:text-xl">
              <Phone className="size-6" fill="currentColor" strokeWidth={0} aria-hidden />
              {site.phoneDisplay}
            </a>
            <p className="mt-3 text-center text-[0.95rem] font-semibold text-white/90">Tap to call the shop</p>
          </div>
        </div>
      </div>
    </section>
  );
}
