import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/services";
import Philosophy from "./components/philosophy";
import Portfolio from "./components/portfolio";
import CTA from "./components/CTA";
import Journey from "./components/Journey";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raahii Digital — Hospitality Growth Partner",
  description:
    "Raahii Digital helps hotels, resorts, boutique stays and hospitality brands get discovered, attract the right guests and build memorable brands through marketing, technology and strategy.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Raahii Digital — Hospitality Growth Partner",
    description:
      "Helping hospitality brands get discovered, chosen and remembered.",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="m-0 w-full overflow-x-hidden p-0">
      
      <Hero />

      <Philosophy />

      <Journey />

      <Services />

      <Portfolio />

      <CTA />

  
    </main>
  );
}