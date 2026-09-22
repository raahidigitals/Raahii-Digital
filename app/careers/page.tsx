import type { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers at Raahii Digital",
  description:
    "Explore opportunities to build what's next at Raahii Digital, a hospitality growth partner working across creativity, technology, marketing and travel.",
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Careers at Raahii Digital",
    description:
      "Don't just build a career. Build what's next.",
    type: "website",
  },
};

export default function CareersPage() {
  return <CareersClient />;
}