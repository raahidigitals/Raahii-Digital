import Hero from "./components/Hero";
import Services from "./components/services";
import Philosophy from "./components/philosophy";
import Portfolio from "./components/portfolio";
import CTA from "./components/CTA";
import Journey from "./components/Journey";

import type { Metadata } from "next";

import { sanityClient } from "@/lib/sanity";
import { homePageQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Raahii Digital — Hospitality Growth Partner",

  description:
    "Raahii Digital helps hotels, resorts, boutique stays and hospitality brands get discovered, attract the right guests and build memorable brands through marketing, technology and strategy.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Raahii Digital — Hospitality Growth Partner",

    description:
      "Helping hospitality brands get discovered, chosen and remembered.",

    type: "website",
  },
};

export default async function Home() {
  let homePage = null;

  try {
    homePage = await sanityClient.fetch(
      homePageQuery,
      {},
      {
        cache: "no-store",
      }
    );
  } catch (error) {
    console.error(
      "Failed to fetch Home Page from Sanity:",
      error
    );
  }

  return (
    <main className="m-0 w-full overflow-x-hidden p-0">

      <Hero hero={homePage?.hero} />

      <Philosophy philosophy={homePage?.philosophy} />

      <Journey journey={homePage?.journey} />

      <Services services={homePage?.services} />

      <Portfolio portfolio={homePage?.portfolio} />

      <CTA cta={homePage?.cta} />

    </main>
  );
}