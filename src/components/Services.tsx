import type { ComponentType, SVGProps } from "react";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import { SectionHead } from "./SectionHead";
import { BrakeDiscIcon, BrakePadsIcon, ExhaustIcon, InspectionIcon, MufflerIcon, NoiseIcon } from "./icons";

type Service = { title: string; text: string; Icon: ComponentType<SVGProps<SVGSVGElement>> };

const services: Service[] = [
  {
    title: "Muffler Replacement",
    text: "Rusted, rattling or blown-out muffler? We'll get your vehicle back to running quiet.",
    Icon: MufflerIcon,
  },
  {
    title: "Exhaust Repair",
    text: "Leaks, broken hangers, damaged pipes and tailpipes, fixed so fumes go where they should.",
    Icon: ExhaustIcon,
  },
  {
    title: "Noise Diagnosis",
    text: "Loud rumble, hissing or rattling underneath? We'll track down where it's coming from.",
    Icon: NoiseIcon,
  },
  {
    title: "Brake Pads",
    text: "Squealing, grinding or soft pedal feel? Fresh pads bring back smooth, confident stops.",
    Icon: BrakePadsIcon,
  },
  {
    title: "Rotors & Brake Repair",
    text: "Rotor service and replacement, plus repairs for vibration, pulling and other brake issues.",
    Icon: BrakeDiscIcon,
  },
  {
    title: "Inspections",
    text: "Not sure what that sound is? Bring it in for a brake and exhaust check before it gets worse.",
    Icon: InspectionIcon,
  },
];

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="bg-bg2 py-[72px] sm:py-24">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-6">
        <SectionHead id="services-title" eyebrow="What we do" title="Muffler, Exhaust & Brake Repair">
          The name says it all. We focus on the systems that keep your car quiet, clean-running and stopping safely.
        </SectionHead>

        <ul className="grid gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, text, Icon }) => (
            <li
              key={title}
              className="card-accent relative overflow-hidden rounded-[14px] border border-line bg-panel px-7 py-[30px] transition duration-200 hover:-translate-y-1 hover:border-[#454a52]"
            >
              <div className="icon-tile mb-5 size-14">
                <Icon className="size-[30px]" />
              </div>
              <h3 className="display mb-2.5 text-[1.35rem] font-semibold">{title}</h3>
              <p className="text-[0.97rem] text-muted">{text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-[34px] flex flex-wrap items-center justify-between gap-[18px] rounded-[14px] border border-accent/30 bg-linear-90 from-accent/12 to-accent2/4 px-7 py-6">
          <p className="text-[1.05rem] font-semibold">
            Not sure what your car needs?
            <span className="block text-[0.95rem] font-medium text-muted">
              Give us a call and describe the problem. We&apos;ll point you in the right direction.
            </span>
          </p>
          <a href={site.phoneHref} className="btn btn-primary">
            <Phone className="size-5" fill="currentColor" strokeWidth={0} aria-hidden />
            Call the Shop
          </a>
        </div>
      </div>
    </section>
  );
}
