import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";

import { sanityClient } from "@/lib/sanity";
import { siteSettingsQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: {
    default: "Raahii Digital — Hospitality Growth Partner",
    template: "%s | Raahii Digital",
  },

  description:
    "Raahii Digital is a hospitality growth partner helping hotels, resorts, boutique stays and hospitality brands get discovered, attract the right guests and build memorable brands.",

  applicationName: "Raahii Digital",

  authors: [{ name: "Raahii Digital" }],

  creator: "Raahii Digital",

  publisher: "Raahii Digital",

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    siteName: "Raahii Digital",

    title: "Raahii Digital — Hospitality Growth Partner",

    description:
      "We help hospitality brands find their story, connect with the right guests, and grow with meaning.",

    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",

    title: "Raahii Digital — Hospitality Growth Partner",

    description:
      "Helping hospitality brands get discovered, chosen and remembered.",
  },

  metadataBase: new URL("http://localhost:3000"),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let siteSettings = null;

  try {
    siteSettings = await sanityClient.fetch(
      siteSettingsQuery,{},
      {
        cache: "no-store",
      }
    );
  } catch (error) {
    console.error(
      "Failed to fetch Site Settings from Sanity:",
      error
    );
  }

  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <Navbar settings={siteSettings} />

        {children}

        <Footer settings={siteSettings} />

        <FloatingCTA settings={siteSettings?.floatingCta} />
      </body>
    </html>
  );
}