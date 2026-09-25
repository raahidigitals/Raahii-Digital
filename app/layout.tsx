import type { Metadata } from "next";
import Script from "next/script";
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

  metadataBase: new URL("http://www.raahiidigital.com/"),
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let siteSettings = null;

  try {
    siteSettings = await sanityClient.fetch(
      siteSettingsQuery,
      {},
      {
        cache: "no-store",
      }
    );
  } catch (error) {
    console.error("Failed to fetch Site Settings from Sanity:", error);
  }

  return (
    <html lang="en">
      <head>
  <Script
    id="google-tag-manager"
    strategy="afterInteractive"
    dangerouslySetInnerHTML={{
      __html: `
        (function(w,d,s,l,i){
          w[l]=w[l]||[];
          w[l].push({
            'gtm.start': new Date().getTime(),
            event:'gtm.js'
          });
          var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),
              dl=l!='dataLayer'?'&l='+l:'';
          j.async=true;
          j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
          f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NWD575FG');
      `,
    }}
  />
</head>

      <body className="min-h-screen antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
  <iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-NWD575FG"
    height="0"
    width="0"
    style={{
      display: "none",
      visibility: "hidden",
    }}
  />
</noscript>

        <Navbar settings={siteSettings} />

        {children}

        <Footer settings={siteSettings} />
        <FloatingCTA settings={siteSettings?.floatingCTA} />
      </body>
    </html>
  );
}