import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import { Stars } from "./Stars";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="hero-bg relative overflow-hidden pb-20 pt-14 sm:pb-[120px] sm:pt-[110px]">
      <div className="relative mx-auto grid max-w-[1180px] items-center gap-14 px-5 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="eyebrow">{site.neighborhood} &middot; Northwest Atlanta</p>
          <h1 id="hero-title" className="display mb-5 mt-[18px] text-[clamp(2.6rem,6.4vw,5rem)] font-bold">
            S &amp; S Muffler
            <br />
            &amp; <span className="text-gradient">Brake Shop</span>
          </h1>
          <p className="mb-[34px] max-w-[560px] text-[clamp(1.05rem,1.6vw,1.25rem)] text-[#c9ced4]">
            Quiet rides and confident stops. Muffler, exhaust and brake repair on Donald Lee Hollowell Parkway, right
            here in Atlanta.
          </p>
          <div id="hero-ctas" className="flex flex-wrap items-center gap-3.5">
            <a href={site.phoneHref} className="btn btn-primary w-full px-6 py-[18px] text-[1.15rem] sm:w-auto sm:px-9 sm:py-5 sm:text-xl">
              <Phone className="size-6" fill="currentColor" strokeWidth={0} aria-hidden />
              Call {site.phoneDisplay}
            </a>
            <a href="#services" className="btn btn-ghost w-full sm:w-auto">
              View Services
            </a>
          </div>
          <div className="mt-[34px] inline-flex items-center gap-3 rounded-full border border-line bg-white/5 py-2.5 pl-3 pr-[18px] text-[0.95rem]">
            <Stars rating={site.rating} />
            <b className="text-[1.05rem]">{site.rating}</b>
            <span className="text-muted">from {site.reviewCount} reviews</span>
          </div>
        </div>

        <div aria-hidden className="hero-art mx-auto hidden max-w-[320px] sm:block lg:order-none lg:max-w-[440px] max-lg:order-first">
          <span className="glow" />
          <span className="disc" />
          <span className="vents" />
          <span className="hub" />
          <span className="caliper">
            <b>S&amp;S</b>
          </span>
        </div>
      </div>
      <div aria-hidden className="hazard-stripe absolute inset-x-0 bottom-0 h-2.5 opacity-90" />
    </section>
  );
}
