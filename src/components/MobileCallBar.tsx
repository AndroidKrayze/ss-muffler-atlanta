"use client";

import { Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

/** Sticky "Call Now" bar for small screens; appears once the hero call buttons scroll out of view. */
export function MobileCallBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById("hero-ctas");
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0);
    });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={site.phoneHref}
      className={`btn btn-primary fixed inset-x-3 bottom-3 z-60 rounded-[14px] p-4 text-[1.1rem] transition-[transform,visibility] duration-250 sm:hidden ${
        visible ? "visible translate-y-0" : "invisible translate-y-[140%]"
      }`}
    >
      <Phone className="size-5" fill="currentColor" strokeWidth={0} aria-hidden />
      Call Now: {site.phoneDisplay}
    </a>
  );
}
