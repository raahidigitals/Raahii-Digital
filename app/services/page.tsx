import Link from "next/link";
import type { Metadata } from "next";

import Navbar from "../components/Navbar";

import { sanityClient } from "@/lib/sanity";
import { urlFor } from "@/lib/sanityImage";
import { servicesPageQuery } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Hospitality Marketing & Growth Services",
  description:
    "Explore Raahii Digital's hospitality growth services including social media, content, photography, videography, websites, SEO, Google Business Profile, performance marketing, branding and OTA strategy.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Hospitality Marketing & Growth Services | Raahii Digital",
    description:
      "Strategy, creativity, technology and guidance for hospitality brands.",
    type: "website",
  },
};

type SanityImage = unknown;

type ButtonData = {
  label?: string;
  url?: string;
  openInNewTab?: boolean;
};

type Service = {
  number?: string;
  title?: string;
  description?: string;
  icon?: string;
  link?: string;
};

type ServicesPageData = {
  hero?: {
    backgroundImage?: SanityImage;
    eyebrow?: string;
    headingLineOne?: string;
    headingLineTwo?: string;
    headingLineThree?: string;
    headingLineFour?: string;
    description?: string;
    sideMessage?: string;
  };

  whatWeDo?: {
    eyebrow?: string;
    headingLineOne?: string;
    headingLineTwo?: string;
    description?: string;
  };

  services?: Service[];

  finalCta?: {
    backgroundImage?: SanityImage;
    eyebrow?: string;
    headingLineOne?: string;
    headingHighlight?: string;
    description?: string;

    primaryButton?: ButtonData;

    secondaryButton?: ButtonData;

    journeyLabels?: string[];
  };
};

const fallbackServices: Service[] = [
  {
    number: "01",
    title: "Reels & Content Production",
    description:
      "Scroll-stopping content that showcases your property and brings in the right audience.",
    icon: "◫",
    link: "#contact",
  },
  {
    number: "02",
    title: "Hotel Photography & Videography",
    description:
      "Cinematic visuals that capture the true essence of your property.",
    icon: "◎",
    link: "#contact",
  },
  {
    number: "03",
    title: "Branding Strategy",
    description:
      "Positioning, identity and storytelling that make your hotel stand out.",
    icon: "✎",
    link: "#contact",
  },
  {
    number: "04",
    title: "Website Development",
    description:
      "High-performance, SEO-ready websites built for direct bookings.",
    icon: "</>",
    link: "#contact",
  },
  {
    number: "05",
    title: "Google Business Profile Optimization",
    description:
      "Better visibility, more enquiries and stronger trust across Google Search and Maps.",
    icon: "⌖",
    link: "#contact",
  },
  {
    number: "06",
    title: "SEO Services",
    description:
      "On-page, off-page and technical SEO to rank higher and attract quality traffic.",
    icon: "▥",
    link: "#contact",
  },
  {
    number: "07",
    title: "Meta & Google Ads",
    description:
      "Performance campaigns that drive direct bookings and measurable ROI.",
    icon: "⌁",
    link: "#contact",
  },
  {
    number: "08",
    title: "OTA Optimization",
    description:
      "Better visibility, improved rankings and higher conversions on OTAs.",
    icon: "▣",
    link: "#contact",
  },
  {
    number: "09",
    title: "Reputation Management",
    description:
      "Turn reviews into revenue with proactive reputation building and guest trust.",
    icon: "☆",
    link: "#contact",
  },
  {
    number: "10",
    title: "Direct Booking Strategy",
    description:
      "More direct enquiries, WhatsApp integrations and lower OTA dependency.",
    icon: "◌",
    link: "#contact",
  },
  {
    number: "11",
    title: "Influencer Marketing",
    description:
      "Collaborations that bring authentic visibility and the right guests.",
    icon: "♧",
    link: "#contact",
  },
  {
    number: "12",
    title: "Raahii Companion",
    description:
      "A local guide service for your guests — curated itineraries, on-call support and meaningful experiences.",
    icon: "✦",
    link: "#contact",
  },
];

const fallbackJourneyLabels = [
  "Get The Guest",
  "Serve The Guest",
  "Build The Brand",
];

function imageUrl(
  image: SanityImage | undefined,
  fallback: string
) {
  if (!image) {
    return fallback;
  }

  try {
    return urlFor(
      image as Parameters<typeof urlFor>[0]
    )
      .width(1800)
      .quality(90)
      .url();
  } catch {
    return fallback;
  }
}

function isExternalUrl(url?: string) {
  if (!url) return false;

  return (
    url.startsWith("http://") ||
    url.startsWith("https://") ||
    url.startsWith("mailto:") ||
    url.startsWith("tel:")
  );
}

function SmartLink({
  link,
  className,
  children,
}: {
  link?: ButtonData;
  className?: string;
  children: React.ReactNode;
}) {
  const href = link?.url || "#";

  if (isExternalUrl(href)) {
    return (
      <a
        href={href}
        target={
          link?.openInNewTab === false
            ? undefined
            : "_blank"
        }
        rel={
          link?.openInNewTab === false
            ? undefined
            : "noopener noreferrer"
        }
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={className}
    >
      {children}
    </Link>
  );
}

export default async function ServicesPage() {
  let servicesPage: ServicesPageData | null = null;

  try {
    servicesPage =
      await sanityClient.fetch<ServicesPageData>(
        servicesPageQuery,
        {},
        {
          cache: "no-store",
        }
      );
  } catch (error) {
    console.error(
      "Failed to fetch Services Page from Sanity:",
      error
    );
  }

  const hero = servicesPage?.hero;
  const whatWeDo = servicesPage?.whatWeDo;
  const finalCta = servicesPage?.finalCta;

  const services =
    servicesPage?.services &&
    servicesPage.services.length > 0
      ? servicesPage.services
      : fallbackServices;

  const journeyLabels =
    finalCta?.journeyLabels &&
    finalCta.journeyLabels.length > 0
      ? finalCta.journeyLabels
      : fallbackJourneyLabels;

  const heroImage = imageUrl(
    hero?.backgroundImage,
    "/services-page-hero.jpeg"
  );

  const ctaImage = imageUrl(
    finalCta?.backgroundImage,
    "/services-bottom.jpeg"
  );

  return (
    <main className="w-full overflow-x-hidden bg-[#f4f0e7] text-[#151713]">
      <Navbar />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[650px] overflow-hidden bg-[#10110f] text-[#f7f3e8] md:min-h-[680px]">

        {/* HERO IMAGE */}

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${heroImage}')`,
          }}
        />

        {/* DARK OVERLAY */}

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/10" />

        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/60 to-transparent" />

        {/* HERO CONTENT */}

        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-[1450px] items-end px-6 pb-16 pt-32 sm:px-10 md:min-h-[680px] lg:px-16 lg:pb-20">

          <div className="max-w-[680px]">

            {/* EYEBROW */}

            <div className="mb-7 flex items-center gap-4">

              <span className="text-[9px] uppercase tracking-[0.45em] text-[#d8b887]">
                {hero?.eyebrow || "Our Services"}
              </span>

              <span className="h-px w-10 bg-[#d8b887]/70" />

            </div>

            {/* HEADING */}

            <h1 className="font-serif text-[3.7rem] font-light leading-[0.9] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[6.4rem]">

              {hero?.headingLineOne || "More Than"}

              <br />

              {hero?.headingLineTwo || "Marketing."}

              <br />

              <span className="italic text-[#d8b887]">
                {hero?.headingLineThree ||
                  "A Growth Partner"}
              </span>

              <br />

              <span className="italic text-[#d8b887]">
                {hero?.headingLineFour ||
                  "for Your Hotel."}
              </span>

            </h1>

            {/* LINE */}

            <div className="mt-8 h-px w-12 bg-[#d8b887]" />

            {/* DESCRIPTION */}

            <p className="mt-7 max-w-[560px] font-serif text-sm leading-7 text-[#f7f3e8]/75 sm:text-base md:text-lg md:leading-8">
              {hero?.description ||
                "From visibility to bookings, from guest experiences to brand value — we help hospitality businesses grow, sustainably."}
            </p>

          </div>

          {/* TOP RIGHT MESSAGE */}

          <div className="absolute right-6 top-32 hidden max-w-[150px] text-right md:block lg:right-16">

            <p className="whitespace-pre-line font-serif text-xl italic leading-tight text-[#d8b887]/90">
              {hero?.sideMessage ||
                "Better\nStays.\nBrighter\nTomorrows."}
            </p>

            <div className="ml-auto mt-4 h-px w-10 bg-[#d8b887]" />

          </div>

        </div>
      </section>

      {/* =====================================================
          WHAT WE DO
      ====================================================== */}

      <section className="bg-[#f4f0e7] px-6 py-16 sm:px-10 md:py-20 lg:px-16">

        <div className="mx-auto max-w-[1450px]">

          <div className="grid items-end gap-8 md:grid-cols-[1fr_0.7fr]">

            {/* CENTER / LEFT TITLE */}

            <div className="text-center md:text-left">

              <div className="mb-5 flex items-center justify-center gap-4 md:justify-start">

                <span className="text-[9px] uppercase tracking-[0.45em] text-[#666960]">
                  {whatWeDo?.eyebrow ||
                    "What We Do"}
                </span>

                <span className="h-px w-10 bg-[#88877d]" />

              </div>

              <h2 className="mx-auto max-w-[720px] font-serif text-4xl font-light leading-[0.95] tracking-[-0.035em] sm:text-5xl md:mx-0 md:text-6xl">

                {whatWeDo?.headingLineOne ||
                  "End-to-End Solutions"}

                <br />

                <span className="text-[#8d6462]">
                  {whatWeDo?.headingLineTwo ||
                    "for Hospitality Growth."}
                </span>

              </h2>

            </div>

            {/* DESCRIPTION */}

            <p className="max-w-[360px] text-sm leading-6 text-[#5f625a] md:ml-auto">
              {whatWeDo?.description ||
                "A complete suite of digital, creative and strategic services designed exclusively for hotels, resorts, villas, boutique stays and homestays."}
            </p>

          </div>

          {/* GOLD LINE */}

          <div className="mx-auto mt-7 h-px w-10 bg-[#b6815e] md:mx-0" />

        </div>
      </section>

      {/* =====================================================
          SERVICES GRID
      ====================================================== */}

      <section className="bg-[#f4f0e7] px-5 pb-16 sm:px-6 md:px-8 md:pb-24 lg:px-10">

        <div className="mx-auto max-w-[1450px]">

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

            {services.map((service, index) => (

              <article
                key={
                  service.number ||
                  `${service.title}-${index}`
                }
                className="
                  group
                  relative
                  flex
                  min-h-[265px]
                  flex-col
                  overflow-hidden
                  rounded-[18px]
                  border
                  border-[#17352d]/15
                  bg-[#10251f]
                  px-6
                  py-6
                  text-[#f7f3e8]
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-[#d8b887]/70
                  hover:shadow-xl
                  sm:min-h-[275px]
                  md:px-7
                  md:py-7
                "
              >

                {/* TOP */}

                <div className="flex items-start justify-between">

                  {/* ICON */}

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#d8b887]/65
                      text-lg
                      text-[#d8b887]
                      transition-all
                      duration-500
                      group-hover:scale-105
                      group-hover:bg-[#d8b887]
                      group-hover:text-[#10251f]
                    "
                  >
                    {service.icon || "✦"}
                  </div>

                  {/* NUMBER */}

                  <span className="font-serif text-sm text-[#f7f3e8]/35">
                    {service.number ||
                      String(index + 1).padStart(2, "0")}
                  </span>

                </div>

                {/* TITLE */}

                <h3
                  className="
                    mt-8
                    max-w-[340px]
                    font-serif
                    text-[24px]
                    font-light
                    leading-[1.02]
                    tracking-[-0.02em]
                    sm:text-[25px]
                  "
                >
                  {service.title}
                </h3>

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-4
                    max-w-[360px]
                    text-[12px]
                    leading-5
                    text-[#f7f3e8]/60
                  "
                >
                  {service.description}
                </p>

                {/* LEARN MORE */}

                <div className="mt-auto pt-6">

                  <Link
                    href={service.link || "#contact"}
                    className="
                      inline-flex
                      items-center
                      gap-3
                      text-[8px]
                      uppercase
                      tracking-[0.32em]
                      text-[#d8b887]
                      transition-all
                      duration-300
                      group-hover:gap-5
                    "
                  >
                    Learn More

                    <span className="text-sm tracking-normal">
                      →
                    </span>

                  </Link>

                </div>

                {/* DECORATIVE NUMBER */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    -bottom-10
                    -right-4
                    font-serif
                    text-[110px]
                    font-light
                    leading-none
                    text-[#f7f3e8]/[0.025]
                  "
                >
                  {service.number ||
                    String(index + 1).padStart(2, "0")}
                </span>

              </article>

            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section
        id="contact"
        className="relative min-h-[570px] overflow-hidden text-[#f7f3e8]"
      >

        {/* BACKGROUND IMAGE */}

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${ctaImage}')`,
          }}
        />

        {/* OVERLAYS */}

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/15" />

        {/* CONTENT */}

        <div className="relative z-10 mx-auto flex min-h-[570px] max-w-[1450px] items-center px-6 py-16 sm:px-10 md:py-20 lg:px-16">

          <div className="max-w-[620px]">

            {/* EYEBROW */}

            <div className="mb-6 flex items-center gap-4">

              <span className="text-[9px] uppercase tracking-[0.45em] text-[#d8b887]">
                {finalCta?.eyebrow ||
                  "Let's Build Together"}
              </span>

              <span className="h-px w-10 bg-[#d8b887]" />

            </div>

            {/* HEADING */}

            <h2 className="font-serif text-[3.3rem] font-light leading-[0.91] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-[5.4rem]">

              {finalCta?.headingLineOne ||
                "Your Hotel Deserves"}

              <br />

              <span className="text-[#d8b887]">
                {finalCta?.headingHighlight ||
                  "a Bigger Story."}
              </span>

            </h2>

            {/* LINE */}

            <div className="mt-7 h-px w-12 bg-[#d8b887]" />

            {/* DESCRIPTION */}

            <p className="mt-7 max-w-[520px] text-sm leading-7 text-[#f7f3e8]/75 sm:text-base">
              {finalCta?.description ||
                "Whether you're a boutique stay or a luxury resort, Raahii Digital is here to help you grow — with strategy, creativity and a deep understanding of hospitality."}
            </p>

            {/* BUTTONS */}

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <SmartLink
                link={
                  finalCta?.primaryButton || {
                    label: "Book a Free Consultation",
                    url:
                      "https://forms.gle/Rbb86sVxxU2fuetC7",
                    openInNewTab: true,
                  }
                }
                className="
                  group
                  inline-flex
                  h-13
                  items-center
                  justify-center
                  gap-5
                  rounded-full
                  bg-[#d8b887]
                  px-7
                  text-xs
                  font-medium
                  text-[#17352d]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                {finalCta?.primaryButton?.label ||
                  "Book a Free Consultation"}

                <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </SmartLink>

              <SmartLink
                link={
                  finalCta?.secondaryButton || {
                    label: "View Our Work",
                    url: "/experience",
                    openInNewTab: false,
                  }
                }
                className="
                  inline-flex
                  h-13
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#f7f3e8]/60
                  px-7
                  text-xs
                  text-[#f7f3e8]
                  transition-all
                  duration-300
                  hover:bg-[#f7f3e8]
                  hover:text-[#17352d]
                "
              >
                {finalCta?.secondaryButton?.label ||
                  "View Our Work"}
              </SmartLink>

            </div>

          </div>

          {/* RIGHT JOURNEY LABEL */}

          <div className="absolute bottom-10 right-6 hidden border-l border-[#f7f3e8]/40 pl-5 md:block lg:right-16">

            <p className="text-[8px] uppercase leading-6 tracking-[0.35em] text-[#f7f3e8]/70">

              {journeyLabels.map(
                (label, index) => (
                  <span key={`${label}-${index}`}>
                    {label}

                    {index !==
                      journeyLabels.length - 1 && (
                      <br />
                    )}
                  </span>
                )
              )}

            </p>

          </div>

        </div>
      </section>

    </main>
  );
}