import { MapPin, Target, Users } from "lucide-react";
import { site } from "@/lib/site";
import { SectionHead } from "./SectionHead";
import { Stars } from "./Stars";

const reasons = [
  {
    title: `${site.reviewCount} Reviews and Counting`,
    text: "That's a lot of neighbors who took the time to share their experience with our shop.",
    Icon: Users,
  },
  {
    title: "Specialists, Not Generalists",
    text: "Mufflers, exhaust and brakes are what we do. That's our focus, right in our name.",
    Icon: Target,
  },
  {
    title: "Right in Your Neighborhood",
    text: "Easy to find on Donald Lee Hollowell Pkwy NW in the Carey Park area of Northwest Atlanta.",
    Icon: MapPin,
  },
];

export function WhyUs() {
  return (
    <section id="why" aria-labelledby="why-title" className="py-[72px] sm:py-24">
      <div className="mx-auto grid max-w-[1180px] items-center gap-14 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <figure className="relative overflow-hidden rounded-[20px] border border-line bg-panel px-6 py-9 text-center sm:px-9 sm:py-11">
          <span aria-hidden className="absolute inset-x-0 top-0 h-1.5 bg-linear-90 from-accent to-accent2" />
          <p className="font-display text-[5.2rem] font-bold leading-none sm:text-[6.5rem]">
            <span className="bg-linear-180 from-white to-[#c9ced4] bg-clip-text text-transparent">{site.rating}</span>
            <span className="text-[2.2rem] text-muted">/5</span>
          </p>
          <Stars rating={site.rating} sizeClass="size-[30px]" className="mb-3 mt-3.5 justify-center" />
          <figcaption>
            <span className="block text-[1.15rem] font-semibold">Based on {site.reviewCount} customer reviews</span>
            <span className="mt-2 block text-[0.85rem] text-muted">Google Maps rating, as of October 2026</span>
          </figcaption>
        </figure>

        <div>
          <SectionHead id="why-title" eyebrow="Why choose S & S" title="Atlanta Drivers Trust Us" className="mb-7">
            Ratings don&apos;t lie. Over two hundred customers have weighed in, and they&apos;ve given us a 4.6-star
            average.
          </SectionHead>
          <ul className="mt-2 grid gap-[18px]">
            {reasons.map(({ title, text, Icon }) => (
              <li key={title} className="flex items-start gap-[18px] rounded-[14px] border border-line bg-white/[0.025] p-[22px]">
                <div className="icon-tile size-12">
                  <Icon className="size-6" aria-hidden />
                </div>
                <div>
                  <h3 className="display mb-1 text-[1.15rem] font-semibold">{title}</h3>
                  <p className="text-[0.96rem] text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
