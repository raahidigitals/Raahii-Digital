import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Raahii Digital",
  description:
    "Tell Raahii where you're going. Whether you're growing a hospitality brand or exploring a destination, find the right journey with Raahii.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Raahii Digital",
    description:
      "Whether you're building a hospitality brand or exploring a new destination, you're in the right place.",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}