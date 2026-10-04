import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { site } from "@/lib/site";
import { SectionHead } from "./SectionHead";

function InfoRow({ icon, label, children }: { icon: ReactNode; label: string; children: ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <div className="icon-tile size-[46px]">{icon}</div>
      <div>
        <dt className="mb-1 text-[0.75rem] font-bold uppercase tracking-[0.16em] text-muted">{label}</dt>
        <dd className="text-[1.08rem] font-semibold">{children}</dd>
      </div>
    </div>
  );
}

export function Location() {
  return (
    <section id="location" aria-labelledby="location-title" className="bg-bg2 py-[72px] sm:py-24">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-6">
        <SectionHead id="location-title" eyebrow="Visit the shop" title={`Find Us in ${site.neighborhood}`}>
          Located on Donald Lee Hollowell Parkway NW in Northwest Atlanta.
        </SectionHead>

        <div className="grid items-stretch gap-7 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col gap-6 rounded-[14px] border border-line bg-panel p-6 sm:p-8">
            <address className="not-italic">
              <dl className="flex flex-col gap-6">
                <InfoRow icon={<MapPin className="size-[22px]" aria-hidden />} label="Address">
                  {site.street}
                  <br />
                  {site.cityLine}
                </InfoRow>
                <InfoRow icon={<Phone className="size-[22px]" aria-hidden />} label="Phone">
                  <a href={site.phoneHref} className="transition-colors hover:text-accent2">
                    {site.phoneDisplay}
                  </a>
                </InfoRow>
                <InfoRow icon={<Clock className="size-[22px]" aria-hidden />} label="Hours">
                  {site.hours}
                  <span className="mt-1.5 block w-fit rounded-md border border-dashed border-gold/60 px-2 py-0.5 text-[0.72rem] font-bold uppercase tracking-[0.08em] text-gold">
                    Placeholder: confirm hours
                  </span>
                </InfoRow>
              </dl>
            </address>
            <div className="mt-auto flex flex-wrap gap-3">
              <a
                href={site.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex-[1_1_180px] px-5 py-3.5"
              >
                <Navigation className="size-5" fill="currentColor" strokeWidth={0} aria-hidden />
                Get Directions
                <span className="sr-only">(opens Google Maps in a new tab)</span>
              </a>
              <a href={site.phoneHref} className="btn btn-ghost flex-[1_1_180px] px-5 py-3.5">
                <Phone className="size-5" fill="currentColor" strokeWidth={0} aria-hidden />
                Call
              </a>
            </div>
          </div>

          <div className="min-h-80 overflow-hidden rounded-[14px] border border-line bg-[#2a2d32] lg:min-h-[420px]">
            <iframe
              title={`Map showing ${site.name} at ${site.street}, ${site.cityLine}`}
              src={site.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="block h-full min-h-80 w-full border-0 grayscale-25 contrast-105 lg:min-h-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
