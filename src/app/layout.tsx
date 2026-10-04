import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const title = `${site.name} | Muffler, Exhaust & Brake Repair in Atlanta, GA`;
const description = `${site.name}: muffler, exhaust and brake repair at ${site.street}, ${site.cityLine}. Rated ${site.rating} stars from ${site.reviewCount} reviews. Call ${site.phoneDisplay}.`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  // Unsolicited demo: keep it out of search results so it isn't mistaken for the official site.
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title,
    description,
    locale: "en_US",
  },
  twitter: { card: "summary", title, description },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#141518",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="pb-[76px] sm:pb-0">{children}</body>
    </html>
  );
}
