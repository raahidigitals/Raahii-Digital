import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import { sanityClient } from "@/lib/sanity";
import { urlFor } from "@/lib/sanityImage";
import { experiencePageQuery } from "@/lib/queries";

export const metadata: Metadata = {
  title: "Raahii Experiences — Experience Udaipur Like a Local",
  description:
    "Discover Udaipur through curated local experiences, recommendations, guidance and personalised travel support with Raahii.",
  alternates: {
    canonical: "/experience",
  },
  openGraph: {
    title: "Raahii Experiences — Experience Udaipur Like a Local",
    description:
      "Not just places. Not just a tour. Your personal Raahii.",
    type: "website",
  },
};

type ImageSource = unknown;

type ButtonData = {
  label?: string;
  url?: string;
  openInNewTab?: boolean;
};

type Package = {
  number?: string;
  icon?: string;
  title?: string;
  subtitle?: string;
  points?: string[];
  price?: string;
  cta?: string;
  ctaUrl?: string;
  image?: ImageSource;
  featured?: boolean;
};

type Interest = {
  title?: string;
  places?: string;
  image?: ImageSource;
  icon?: string;
  url?: string;
};

type Mood = {
  title?: string;
  description?: string;
  icon?: string;
  image?: ImageSource;
  url?: string;
};

type ExperiencePageData = {
  hero?: {
    backgroundImage?: ImageSource;
    eyebrow?: string;
    headingLineOne?: string;
    headingLineTwo?: string;
    headingHighlight?: string;
    taglineLineOne?: string;
    taglineLineTwo?: string;
    description?: string;
    primaryButton?: ButtonData;
    secondaryButton?: ButtonData;
    sideLabels?: string[];
  };

  packagesSection?: {
    eyebrow?: string;
    headingLineOne?: string;
    headingHighlight?: string;
    description?: string;
  };

  packages?: Package[];

  interestsSection?: {
    eyebrow?: string;
    headingLineOne?: string;
    headingHighlight?: string;
    description?: string;
  };

  interests?: Interest[];

  moodSection?: {
    eyebrow?: string;
    headingLineOne?: string;
    headingLineTwo?: string;
    description?: string;
  };

  moods?: Mood[];

  promise?: {
    backgroundImage?: ImageSource;
    eyebrow?: string;
    headingLineOne?: string;
    headingLineTwo?: string;
    highlight?: string;
    stages?: {
      number?: string;
      title?: string;
      description?: string;
    }[];
  };

  hotelIntegration?: {
    eyebrow?: string;
    headingLineOne?: string;
    headingLineTwo?: string;
    headingHighlight?: string;
    description?: string;
    buttonLabel?: string;
    buttonUrl?: string;
    backgroundImage?: ImageSource;
    qrImage?: ImageSource;
    qrHeadingLineOne?: string;
    qrHeadingLineTwo?: string;
    qrDescription?: string;
    qrLocations?: string[];
  };

  bookingFlow?: {
    eyebrow?: string;
    heading?: string;
    steps?: {
      number?: string;
      lineOne?: string;
      lineTwo?: string;
    }[];
  };

  finalCta?: {
    backgroundImage?: ImageSource;
    eyebrow?: string;
    headingLineOne?: string;
    headingHighlight?: string;
    description?: string;
    primaryButton?: ButtonData;
    secondaryButton?: ButtonData;
    sideMessage?: string;
  };

  bottomStrip?: {
    brand?: string;
    label?: string;
    statement?: string;
    location?: string;
  };
};

const fallbackPackages: Package[] = [
  {
    number: "01",
    icon: "♧",
    title: "Raahii Guide",
    subtitle:
      "For travellers who simply want to know what to do.",
    points: [
      "Curated Udaipur recommendations",
      "Places to visit",
      "Food recommendations",
      "Sunset spots",
      "Hidden places",
      "Suggested itineraries",
    ],
    price: "Starting at ₹299",
    cta: "Explore Guide",
    ctaUrl: "#contact",
    image: "/hero-bg.jpeg",
  },
  {
    number: "02",
    icon: "⌖",
    title: "Raahii Assisted",
    subtitle:
      "You explore. We make it effortless.",
    points: [
      "Personalised itinerary",
      "Restaurant recommendations",
      "Transport assistance",
      "Local recommendations",
      "WhatsApp support",
      "Day-wise planning",
    ],
    price: "Starting at ₹999",
    cta: "Plan My Udaipur",
    ctaUrl: "#contact",
    image: "/services-hero.jpeg",
  },
  {
    number: "03",
    icon: "♡",
    title: "Raahii Experience",
    subtitle:
      "Don’t just visit Udaipur. Experience it.",
    points: [
      "Dedicated Raahii guide",
      "Personalised itinerary",
      "Local experiences",
      "Hidden places",
      "Food experiences",
      "Sunset spots",
      "Heritage exploration",
      "On-trip assistance",
      "Booking support",
      "Local recommendations",
    ],
    price: "Starting at ₹2,499 / person",
    cta: "Create My Experience",
    ctaUrl: "#contact",
    image: "/philosophy-bg.jpeg",
    featured: true,
  },
  {
    number: "04",
    icon: "♛",
    title: "Raahii Bespoke",
    subtitle:
      "For couples, families & luxury travellers.",
    points: [
      "Custom itinerary",
      "Private guide",
      "Dining",
      "Activities & experiences",
      "Transport",
      "Special occasions",
    ],
    price: "Tailored for you",
    cta: "Request a Bespoke Journey",
    ctaUrl: "#contact",
    image: "/services/services-bottom.jpg",
  },
];

const fallbackInterests: Interest[] = [
  {
    title: "Royal Udaipur",
    places:
      "City Palace · Jagdish Temple · Bagore Ki Haveli · Jagmandir",
    image: "/hero-bg.jpeg",
    icon: "♛",
    url: "#contact",
  },
  {
    title: "Lakes & Sunsets",
    places:
      "Lake Pichola · Fateh Sagar · Badi Lake · Goverdhan Sagar",
    image: "/services-hero.jpeg",
    icon: "◌",
    url: "#contact",
  },
  {
    title: "Hidden Udaipur",
    places:
      "Bahubali Hills · Ahar Cenotaphs · Neemach Mata · Doodh Talai",
    image: "/philosophy-bg.jpeg",
    icon: "✦",
    url: "#contact",
  },
  {
    title: "Taste Udaipur",
    places:
      "Dal Baati · Gatte · Ker Sangri · Pyaaz Kachori · Ghevar",
    image: "/services/services-bottom.jpg",
    icon: "◇",
    url: "#contact",
  },
  {
    title: "Photo Trails",
    places:
      "Gangaur Ghat · Ambrai · Bahubali Hills · Badi Lake · Karni Mata",
    image: "/footer-bg.jpeg",
    icon: "⌾",
    url: "#contact",
  },
];

const fallbackMoods: Mood[] = [
  {
    title: "Romantic",
    description:
      "Sunsets · lakes · rooftop dinners · private moments",
    icon: "♡",
    image: "/hero-bg.jpeg",
    url: "#contact",
  },
  {
    title: "Instagrammable",
    description:
      "Hidden viewpoints · ghats · architecture · photography spots",
    icon: "◎",
    image: "/services-hero.jpeg",
    url: "#contact",
  },
  {
    title: "Royal",
    description:
      "Palaces · heritage · history · culture",
    icon: "♛",
    image: "/philosophy-bg.jpeg",
    url: "#contact",
  },
  {
    title: "Foodie",
    description:
      "Local food · Rajasthani cuisine · cafés · rooftops",
    icon: "◇",
    image: "/services/services-bottom.jpg",
    url: "#contact",
  },
  {
    title: "Slow & Peaceful",
    description:
      "Badi · lakes · early mornings · quiet places",
    icon: "⌁",
    image: "/footer-bg.jpeg",
    url: "#contact",
  },
  {
    title: "Adventure",
    description:
      "Hikes · viewpoints · offbeat experiences",
    icon: "△",
    image: "/hero-bg.jpeg",
    url: "#contact",
  },
];

const fallbackPromiseStages = [
  {
    number: "01",
    title: "Before you arrive",
    description:
      "Itinerary and recommendations designed around your trip.",
  },
  {
    number: "02",
    title: "While you're here",
    description:
      "Guidance, assistance and local recommendations.",
  },
  {
    number: "03",
    title: "When plans change",
    description:
      "Raahii support when your plans need a new direction.",
  },
  {
    number: "04",
    title: "When you leave",
    description:
      "Memories, recommendations and continued connection.",
  },
];

const fallbackBookingSteps = [
  ["01", "Tell us about", "your trip"],
  ["02", "Choose your", "experience"],
  ["03", "Talk to your", "Raahii"],
  ["04", "Confirm your", "bookings"],
  ["05", "Meet your", "Raahii in Udaipur"],
  ["06", "Explore", "with confidence"],
];

const fallbackSideLabels = [
  "People",
  "Places",
  "Stories",
  "Experiences",
];

const fallbackQrLocations = [
  "Room",
  "Reception",
  "Restaurant",
  "Key Card",
  "Welcome Kit",
];

function imageUrl(
  image: ImageSource | undefined,
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
  href,
  openInNewTab,
  className,
  children,
}: {
  href?: string;
  openInNewTab?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const finalHref = href || "#";

  if (isExternalUrl(finalHref)) {
    return (
      <a
        href={finalHref}
        target={
          openInNewTab === false
            ? undefined
            : "_blank"
        }
        rel={
          openInNewTab === false
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
      href={finalHref}
      className={className}
    >
      {children}
    </Link>
  );
}

export default async function ExperiencesPage() {
  let experiencePage: ExperiencePageData | null = null;

  try {
    experiencePage =
      await sanityClient.fetch<ExperiencePageData>(
        experiencePageQuery,
        {},
        {
          cache: "no-store",
        }
      );
  } catch (error) {
    console.error(
      "Failed to fetch Experience Page from Sanity:",
      error
    );
  }

  const hero = experiencePage?.hero;

  const packagesSection =
    experiencePage?.packagesSection;

  const interestsSection =
    experiencePage?.interestsSection;

  const moodSection =
    experiencePage?.moodSection;

  const promise =
    experiencePage?.promise;

  const hotelIntegration =
    experiencePage?.hotelIntegration;

  const bookingFlow =
    experiencePage?.bookingFlow;

  const finalCta =
    experiencePage?.finalCta;

  const bottomStrip =
    experiencePage?.bottomStrip;

  const packages =
    experiencePage?.packages &&
    experiencePage.packages.length > 0
      ? experiencePage.packages
      : fallbackPackages;

  const interests =
    experiencePage?.interests &&
    experiencePage.interests.length > 0
      ? experiencePage.interests
      : fallbackInterests;

  const moods =
    experiencePage?.moods &&
    experiencePage.moods.length > 0
      ? experiencePage.moods
      : fallbackMoods;

  const promiseStages =
    promise?.stages &&
    promise.stages.length > 0
      ? promise.stages
      : fallbackPromiseStages;

  const bookingSteps =
    bookingFlow?.steps &&
    bookingFlow.steps.length > 0
      ? bookingFlow.steps
      : fallbackBookingSteps.map(
          ([number, lineOne, lineTwo]) => ({
            number,
            lineOne,
            lineTwo,
          })
        );

  const sideLabels =
    hero?.sideLabels &&
    hero.sideLabels.length > 0
      ? hero.sideLabels
      : fallbackSideLabels;

  const qrLocations =
    hotelIntegration?.qrLocations &&
    hotelIntegration.qrLocations.length > 0
      ? hotelIntegration.qrLocations
      : fallbackQrLocations;

  const heroImage = imageUrl(
    hero?.backgroundImage,
    "/hero-bg.jpeg"
  );

  const promiseImage = imageUrl(
    promise?.backgroundImage,
    "/services/services-bottom.jpg"
  );

  const hotelImage = imageUrl(
    hotelIntegration?.backgroundImage,
    "/hero-bg.jpeg"
  );

  const finalCtaImage = imageUrl(
    finalCta?.backgroundImage,
    "/hero-bg.jpeg"
  );

  const qrImage = hotelIntegration?.qrImage
    ? imageUrl(
        hotelIntegration.qrImage,
        ""
      )
    : "";

  return (
    <main className="w-full overflow-x-hidden bg-[#f4f0e7] text-[#17352d]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[720px] overflow-hidden bg-[#10110f] text-[#f7f3e8] md:min-h-[760px]">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${heroImage}')`,
          }}
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/5" />

        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/65 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[720px] max-w-[1500px] items-end px-6 pb-16 pt-36 sm:px-10 md:min-h-[760px] md:pb-20 lg:px-16">

          <div className="max-w-[650px]">

            <div className="mb-6 flex items-center gap-4">

              <span className="text-[9px] uppercase tracking-[0.45em] text-[#d8b887]">
                {hero?.eyebrow ||
                  "Raahii Experiences"}
              </span>

              <span className="h-px w-10 bg-[#d8b887]" />

            </div>

            <h1 className="font-serif text-[3.8rem] font-light leading-[0.88] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[6.5rem]">

              {hero?.headingLineOne ||
                "Experience"}

              <br />

              {hero?.headingLineTwo ||
                "Udaipur"}

              <br />

              <span className="italic text-[#d8b887]">
                {hero?.headingHighlight ||
                  "Like a Local."}
              </span>

            </h1>

            <p className="mt-6 font-serif text-xl italic text-[#f7f3e8]/85 sm:text-2xl">

              {hero?.taglineLineOne ||
                "Not just places. Not just a tour."}

              <br />

              {hero?.taglineLineTwo ||
                "Your personal Raahii."}

            </p>

            <p className="mt-6 max-w-[570px] text-sm leading-7 text-[#f7f3e8]/70 sm:text-base sm:leading-8">
              {hero?.description ||
                "Discover the lakes, hidden viewpoints, royal heritage, local food and stories of Udaipur — curated and supported by people who actually know the city."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <SmartLink
                href={
                  hero?.primaryButton?.url ||
                  "#packages"
                }
                openInNewTab={
                  hero?.primaryButton?.openInNewTab
                }
                className="group inline-flex h-13 items-center justify-center gap-5 rounded-full bg-[#d8b887] px-7 text-xs font-medium text-[#17352d] transition-all duration-300 hover:-translate-y-1"
              >
                {hero?.primaryButton?.label ||
                  "Explore Experiences"}

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </SmartLink>

              <SmartLink
                href={
                  hero?.secondaryButton?.url ||
                  "https://wa.me/919950767925"
                }
                openInNewTab={
                  hero?.secondaryButton?.openInNewTab ??
                  true
                }
                className="inline-flex h-13 items-center justify-center rounded-full border border-[#f7f3e8]/60 px-7 text-xs text-[#f7f3e8] transition-all duration-300 hover:bg-[#f7f3e8] hover:text-[#17352d]"
              >
                {hero?.secondaryButton?.label ||
                  "Talk to a Raahii"}
              </SmartLink>

            </div>

          </div>

          <div className="absolute bottom-12 right-6 hidden border-l border-[#f7f3e8]/35 pl-5 md:block lg:right-16">

            <p className="text-[8px] uppercase leading-6 tracking-[0.35em] text-[#f7f3e8]/70">

              {sideLabels.map(
                (label, index) => (
                  <span
                    key={`${label}-${index}`}
                  >
                    {label}

                    {index !==
                      sideLabels.length - 1 && (
                      <br />
                    )}
                  </span>
                )
              )}

            </p>

          </div>

        </div>
      </section>

      {/* =====================================================
          PACKAGES
      ====================================================== */}

      <section
        id="packages"
        className="bg-[#f4f0e7] px-5 py-16 sm:px-7 md:px-10 md:py-24 lg:px-16"
      >

        <div className="mx-auto max-w-[1450px]">

          <div className="grid gap-8 md:grid-cols-[1fr_0.65fr] md:items-end">

            <div>

              <div className="mb-5 flex items-center gap-4">

                <span className="font-serif text-sm text-[#17352d]">
                  01
                </span>

                <span className="h-px w-10 bg-[#17352d]/30" />

                <span className="text-[8px] uppercase tracking-[0.4em] text-[#676a61]">
                  {packagesSection?.eyebrow ||
                    "Our Packages"}
                </span>

              </div>

              <h2 className="font-serif text-4xl font-light leading-[0.95] tracking-[-0.035em] sm:text-5xl md:text-6xl">

                {packagesSection?.headingLineOne ||
                  "Choose Your Way"}

                <br />

                <span className="text-[#8d6462]">
                  {packagesSection?.headingHighlight ||
                    "to Explore."}
                </span>

              </h2>

            </div>

            <p className="max-w-[360px] text-sm leading-6 text-[#60635b] md:ml-auto">
              {packagesSection?.description ||
                "Different travellers. Different needs. Same city. A more meaningful experience."}
            </p>

          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

            {packages.map(
              (item, index) => {

                const image = imageUrl(
                  item.image,
                  [
                    "/hero-bg.jpeg",
                    "/services-hero.jpeg",
                    "/philosophy-bg.jpeg",
                    "/services/services-bottom.jpg",
                  ][index % 4]
                );

                return (
                  <article
                    key={
                      item.number ||
                      `${item.title}-${index}`
                    }
                    className={`group relative flex overflow-hidden rounded-[20px] border border-[#17352d]/15 bg-white ${
                      item.featured
                        ? "ring-1 ring-[#b6815e]/40"
                        : ""
                    }`}
                  >

                    <div className="absolute inset-x-0 top-0 h-[190px]">

                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{
                          backgroundImage: `url('${image}')`,
                        }}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#10251f] via-black/15 to-transparent" />

                    </div>

                    <div className="relative z-10 flex min-h-[590px] w-full flex-col pt-[150px]">

                      <div className="rounded-t-[20px] bg-[#10251f] px-5 pb-5 pt-5 text-[#f7f3e8]">

                        <div className="flex items-center justify-between">

                          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8b887]/60 text-lg text-[#d8b887]">
                            {item.icon || "✦"}
                          </div>

                          <span className="font-serif text-xs text-[#f7f3e8]/40">
                            {item.number ||
                              String(index + 1).padStart(
                                2,
                                "0"
                              )}
                          </span>

                        </div>

                        <h3 className="mt-5 font-serif text-2xl font-light leading-none">
                          {item.title}
                        </h3>

                        <p className="mt-3 min-h-[42px] text-xs leading-5 text-[#f7f3e8]/65">
                          {item.subtitle}
                        </p>

                      </div>

                      <div className="flex flex-1 flex-col bg-[#10251f] px-5 pb-5 text-[#f7f3e8]">

                        <div className="space-y-2 border-t border-[#f7f3e8]/10 pt-5">

                          {item.points?.map(
                            (point, pointIndex) => (
                              <p
                                key={`${point}-${pointIndex}`}
                                className="flex gap-2 text-[10px] leading-4 text-[#f7f3e8]/70"
                              >
                                <span className="text-[#d8b887]">
                                  ✓
                                </span>

                                {point}
                              </p>
                            )
                          )}

                        </div>

                        <div className="mt-auto pt-7">

                          <p className="font-serif text-lg text-[#d8b887]">
                            {item.price}
                          </p>

                          <SmartLink
                            href={
                              item.ctaUrl ||
                              "#contact"
                            }
                            className="group/btn mt-4 flex h-11 items-center justify-center gap-4 rounded-full bg-[#d8b887] text-[9px] font-medium uppercase tracking-[0.18em] text-[#17352d] transition-all duration-300 hover:bg-[#f0d4a6]"
                          >
                            {item.cta ||
                              "Explore"}

                            <span className="transition-transform group-hover/btn:translate-x-1">
                              →
                            </span>
                          </SmartLink>

                        </div>

                      </div>

                    </div>

                  </article>
                );
              }
            )}

          </div>

        </div>
      </section>

      {/* =====================================================
          INTERESTS
      ====================================================== */}

      <section className="overflow-hidden bg-[#10251f] px-5 py-16 text-[#f7f3e8] sm:px-7 md:py-24 lg:px-16">

        <div className="mx-auto max-w-[1450px]">

          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">

            <div>

              <div className="mb-5 flex items-center gap-4">

                <span className="font-serif text-sm text-[#d8b887]">
                  02
                </span>

                <span className="h-px w-10 bg-[#d8b887]/50" />

                <span className="text-[8px] uppercase tracking-[0.4em] text-[#d8b887]/70">
                  {interestsSection?.eyebrow ||
                    "Explore By Interest"}
                </span>

              </div>

              <h2 className="font-serif text-4xl font-light leading-none tracking-[-0.035em] sm:text-5xl md:text-6xl">

                {interestsSection?.headingLineOne ||
                  "Explore Udaipur"}

                <br />

                <span className="italic text-[#d8b887]">
                  {interestsSection?.headingHighlight ||
                    "Through Raahii."}
                </span>

              </h2>

            </div>

            <p className="max-w-[330px] whitespace-pre-line text-sm leading-6 text-[#f7f3e8]/55">
              {interestsSection?.description ||
                "Iconic. Offbeat. Delicious. Photogenic.\nDiscover Udaipur, your way."}
            </p>

          </div>

          <div className="mt-10 flex gap-4 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

            {interests.map(
              (interest, index) => {

                const image = imageUrl(
                  interest.image,
                  [
                    "/hero-bg.jpeg",
                    "/services-hero.jpeg",
                    "/philosophy-bg.jpeg",
                    "/services/services-bottom.jpg",
                    "/footer-bg.jpeg",
                  ][index % 5]
                );

                return (
                  <Link
                    key={
                      interest.title ||
                      `interest-${index}`
                    }
                    href={interest.url || "#contact"}
                    className="group relative block h-[330px] min-w-[245px] overflow-hidden rounded-[18px] border border-[#f7f3e8]/15 sm:min-w-[275px] lg:min-w-[290px]"
                  >

                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{
                        backgroundImage: `url('${image}')`,
                      }}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-5">

                      <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#d8b887]/70 text-[#d8b887]">
                        {interest.icon || "✦"}
                      </div>

                      <h3 className="font-serif text-2xl font-light">
                        {interest.title}
                      </h3>

                      <p className="mt-2 text-[10px] leading-4 text-[#f7f3e8]/60">
                        {interest.places}
                      </p>

                      <span className="mt-5 flex h-8 w-8 items-center justify-center rounded-full bg-[#d8b887] text-[#17352d] transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>

                    </div>

                  </Link>
                );
              }
            )}

          </div>

        </div>
      </section>

      {/* =====================================================
          MOODS
      ====================================================== */}

      <section className="bg-[#f4f0e7] px-5 py-16 sm:px-7 md:py-24 lg:px-16">

        <div className="mx-auto max-w-[1450px]">

          <div className="grid gap-8 md:grid-cols-[1fr_0.6fr] md:items-end">

            <div>

              <div className="mb-5 flex items-center gap-4">

                <span className="font-serif text-sm">
                  03
                </span>

                <span className="h-px w-10 bg-[#17352d]/30" />

                <span className="text-[8px] uppercase tracking-[0.4em] text-[#676a61]">
                  {moodSection?.eyebrow ||
                    "Find Your Vibe"}
                </span>

              </div>

              <h2 className="font-serif text-4xl font-light leading-none tracking-[-0.035em] sm:text-5xl md:text-6xl">

                {moodSection?.headingLineOne ||
                  "What kind of Udaipur"}

                <br />

                {moodSection?.headingLineTwo ||
                  "are you looking for?"}

              </h2>

            </div>

            <p className="max-w-[340px] text-sm leading-6 text-[#60635b] md:ml-auto">
              {moodSection?.description ||
                "Tell us your mood. We'll suggest the perfect experiences and itinerary for you."}
            </p>

          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">

            {moods.map(
              (mood, index) => {

                const image = imageUrl(
                  mood.image,
                  [
                    "/hero-bg.jpeg",
                    "/services-hero.jpeg",
                    "/philosophy-bg.jpeg",
                    "/services/services-bottom.jpg",
                    "/footer-bg.jpeg",
                    "/hero-bg.jpeg",
                  ][index % 6]
                );

                return (
                  <Link
                    key={
                      mood.title ||
                      `mood-${index}`
                    }
                    href={mood.url || "#contact"}
                    className="group relative block min-h-[210px] overflow-hidden rounded-[18px] text-left"
                  >

                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{
                        backgroundImage: `url('${image}')`,
                      }}
                    />

                    <div className="absolute inset-0 bg-black/45 transition-all duration-500 group-hover:bg-black/60" />

                    <div className="relative z-10 flex h-full min-h-[210px] flex-col justify-end p-5 text-[#f7f3e8]">

                      <div className="mb-auto flex h-9 w-9 items-center justify-center rounded-full border border-[#d8b887]/70 text-[#d8b887]">
                        {mood.icon || "✦"}
                      </div>

                      <h3 className="font-serif text-2xl font-light">
                        {mood.title}
                      </h3>

                      <p className="mt-2 max-w-[250px] text-[10px] leading-4 text-[#f7f3e8]/70">
                        {mood.description}
                      </p>

                      <span className="mt-4 text-[8px] uppercase tracking-[0.3em] text-[#d8b887]">
                        Build My Journey →
                      </span>

                    </div>

                  </Link>
                );
              }
            )}

          </div>

        </div>
      </section>

      {/* =====================================================
          RAAHII PROMISE
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#10110f] px-6 py-20 text-[#f7f3e8] md:py-28 lg:px-16">

        <div
          className="absolute inset-0 bg-cover bg-center opacity-35"
          style={{
            backgroundImage: `url('${promiseImage}')`,
          }}
        />

        <div className="absolute inset-0 bg-[#10110f]/75" />

        <div className="relative z-10 mx-auto max-w-[1200px]">

          <div className="text-center">

            <div className="mb-5 flex items-center justify-center gap-4">

              <span className="font-serif text-sm text-[#d8b887]">
                04
              </span>

              <span className="h-px w-10 bg-[#d8b887]/50" />

              <span className="text-[8px] uppercase tracking-[0.4em] text-[#d8b887]/70">
                {promise?.eyebrow ||
                  "The Raahii Promise"}
              </span>

            </div>

            <h2 className="mx-auto max-w-[800px] font-serif text-4xl font-light leading-[0.95] tracking-[-0.035em] sm:text-5xl md:text-6xl">

              {promise?.headingLineOne ||
                "A guide isn't just someone"}

              <br />

              {promise?.headingLineTwo ||
                "who shows you places."}

            </h2>

            <p className="mt-5 font-serif text-xl italic text-[#d8b887] sm:text-2xl">
              {promise?.highlight ||
                "A Raahii helps you understand the place."}
            </p>

          </div>

          <div className="mt-16 grid border-y border-[#f7f3e8]/15 md:grid-cols-4">

            {promiseStages.map(
              (stage, index) => (

                <div
                  key={
                    stage.number ||
                    `stage-${index}`
                  }
                  className={`px-5 py-8 text-center ${
                    index <
                    promiseStages.length - 1
                      ? "border-b border-[#f7f3e8]/15 md:border-b-0 md:border-r"
                      : ""
                  }`}
                >

                  <span className="text-2xl text-[#d8b887]">
                    {stage.number ||
                      String(index + 1).padStart(
                        2,
                        "0"
                      )}
                  </span>

                  <h3 className="mt-4 font-serif text-xl">
                    {stage.title}
                  </h3>

                  <p className="mt-3 text-xs leading-5 text-[#f7f3e8]/55">
                    {stage.description}
                  </p>

                </div>

              )
            )}

          </div>

        </div>
      </section>

      {/* =====================================================
          HOTEL QR INTEGRATION
      ====================================================== */}

      <section className="bg-[#f4f0e7] px-5 py-16 sm:px-7 md:py-24 lg:px-16">

        <div className="mx-auto max-w-[1450px]">

          <div className="grid overflow-hidden rounded-[25px] bg-[#eadfcd] lg:grid-cols-[1fr_1fr]">

            <div className="flex flex-col justify-center px-7 py-12 sm:px-10 md:px-14">

              <div className="mb-5 flex items-center gap-4">

                <span className="font-serif text-sm">
                  05
                </span>

                <span className="h-px w-10 bg-[#17352d]/30" />

                <span className="text-[8px] uppercase tracking-[0.4em] text-[#676a61]">
                  {hotelIntegration?.eyebrow ||
                    "For Hotels"}
                </span>

              </div>

              <h2 className="font-serif text-4xl font-light leading-[0.95] tracking-[-0.035em] sm:text-5xl">

                {hotelIntegration?.headingLineOne ||
                  "Your Guests Already Ask"}

                <br />

                {hotelIntegration?.headingLineTwo ||
                  "What to Do in Udaipur."}

                <br />

                <span className="italic text-[#8d6462]">
                  {hotelIntegration?.headingHighlight ||
                    "Give Them a Raahii."}
                </span>

              </h2>

              <p className="mt-6 max-w-[520px] text-sm leading-6 text-[#555950]">
                {hotelIntegration?.description ||
                  "Integrate Raahii Experiences at your hotel and offer your guests a complete local experience — not just a stay."}
              </p>

              <SmartLink
                href={
                  hotelIntegration?.buttonUrl ||
                  "https://forms.gle/Rbb86sVxxU2fuetC7"
                }
                openInNewTab={true}
                className="mt-7 inline-flex h-12 w-fit items-center gap-4 rounded-full bg-[#17352d] px-6 text-xs text-[#f7f3e8] transition-all hover:-translate-y-1"
              >
                {hotelIntegration?.buttonLabel ||
                  "Partner with Raahii"}

                <span>→</span>
              </SmartLink>

            </div>

            <div className="relative min-h-[430px] overflow-hidden bg-[#17352d] text-[#f7f3e8]">

              <div
                className="absolute inset-0 bg-cover bg-center opacity-35"
                style={{
                  backgroundImage: `url('${hotelImage}')`,
                }}
              />

              <div className="absolute inset-0 bg-[#10251f]/70" />

              <div className="relative z-10 flex h-full items-center justify-center p-8">

                <div className="grid w-full max-w-[520px] items-center gap-8 sm:grid-cols-[170px_1fr]">

                  <div className="mx-auto flex h-[170px] w-[170px] items-center justify-center bg-[#f7f3e8] p-3">

                    {qrImage ? (
                      <img
                        src={qrImage}
                        alt="Scan to meet your Raahii"
                        className="h-full w-full object-contain"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center border-2 border-dashed border-[#17352d] text-center">

                        <div>

                          <div className="text-3xl text-[#17352d]">
                            QR
                          </div>

                          <p className="mt-1 text-[7px] uppercase tracking-[0.2em] text-[#17352d]">
                            Scan to meet
                            <br />
                            your Raahii
                          </p>

                        </div>

                      </div>
                    )}

                  </div>

                  <div>

                    <p className="font-serif text-2xl italic text-[#d8b887]">

                      {hotelIntegration?.qrHeadingLineOne ||
                        "Your Udaipur"}

                      <br />

                      {hotelIntegration?.qrHeadingLineTwo ||
                        "starts here."}

                    </p>

                    <p className="mt-4 text-sm leading-6 text-[#f7f3e8]/65">
                      {hotelIntegration?.qrDescription ||
                        "Scan to meet your Raahii and discover Udaipur beyond the usual tourist trail."}
                    </p>

                    <div className="mt-6 space-y-3 border-t border-[#f7f3e8]/15 pt-5">

                      {qrLocations.map(
                        (location, index) => (
                          <p
                            key={`${location}-${index}`}
                            className="text-[9px] uppercase tracking-[0.25em]"
                          >
                            {location}
                          </p>
                        )
                      )}

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          BOOKING FLOW
      ====================================================== */}

      <section className="bg-[#10251f] px-5 py-16 text-[#f7f3e8] sm:px-7 md:py-24 lg:px-16">

        <div className="mx-auto max-w-[1450px]">

          <div className="mb-12">

            <div className="mb-5 flex items-center gap-4">

              <span className="font-serif text-sm text-[#d8b887]">
                06
              </span>

              <span className="h-px w-10 bg-[#d8b887]/50" />

              <span className="text-[8px] uppercase tracking-[0.4em] text-[#d8b887]/70">
                {bookingFlow?.eyebrow ||
                  "Simple & Seamless"}
              </span>

            </div>

            <h2 className="font-serif text-4xl font-light sm:text-5xl md:text-6xl">
              {bookingFlow?.heading ||
                "The Booking Flow."}
            </h2>

          </div>

          <div className="grid gap-0 md:grid-cols-6">

            {bookingSteps.map(
              (step, index) => {

                const number =
                  "number" in step
                    ? step.number
                    : "";

                const lineOne =
                  "lineOne" in step
                    ? step.lineOne
                    : "";

                const lineTwo =
                  "lineTwo" in step
                    ? step.lineTwo
                    : "";

                return (
                  <div
                    key={
                      number ||
                      `booking-${index}`
                    }
                    className="relative border-b border-[#f7f3e8]/15 px-4 py-8 text-center md:border-b-0 md:border-r md:last:border-r-0"
                  >

                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#d8b887]/60 text-[#d8b887]">
                      {number ||
                        String(index + 1).padStart(
                          2,
                          "0"
                        )}
                    </div>

                    <p className="mt-5 font-serif text-lg leading-tight">

                      {lineOne}

                      <br />

                      {lineTwo}

                    </p>

                    {index < 5 && (
                      <span className="absolute -right-2 top-[55px] z-10 hidden text-[#d8b887] md:block">
                        →
                      </span>
                    )}

                  </div>
                );
              }
            )}

          </div>

        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section
        id="contact"
        className="relative min-h-[590px] overflow-hidden text-[#f7f3e8]"
      >

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${finalCtaImage}')`,
          }}
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[590px] max-w-[1450px] items-center px-6 py-16 sm:px-10 lg:px-16">

          <div className="max-w-[680px]">

            <p className="text-[9px] uppercase tracking-[0.45em] text-[#d8b887]">
              {finalCta?.eyebrow ||
                "Your Journey Starts Here"}
            </p>

            <h2 className="mt-6 font-serif text-[3.5rem] font-light leading-[0.9] tracking-[-0.04em] sm:text-5xl md:text-7xl">

              {finalCta?.headingLineOne ||
                "Book through Raahii."}

              <br />

              <span className="italic text-[#d8b887]">
                {finalCta?.headingHighlight ||
                  "Travel with confidence."}
              </span>

            </h2>

            <p className="mt-7 max-w-[560px] text-sm leading-7 text-[#f7f3e8]/75 sm:text-base sm:leading-8">
              {finalCta?.description ||
                "Hotel booking ho, restaurant recommendation ho, local experience ho, transport ho ya itinerary — your Raahii remains your point of support throughout the journey."}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <SmartLink
                href={
                  finalCta?.primaryButton?.url ||
                  "#packages"
                }
                openInNewTab={
                  finalCta?.primaryButton?.openInNewTab
                }
                className="inline-flex h-13 items-center justify-center gap-5 rounded-full bg-[#d8b887] px-7 text-xs font-medium text-[#17352d] transition-all hover:-translate-y-1"
              >
                {finalCta?.primaryButton?.label ||
                  "Plan My Udaipur"}

                <span>→</span>
              </SmartLink>

              <SmartLink
                href={
                  finalCta?.secondaryButton?.url ||
                  "https://wa.me/919999999999"
                }
                openInNewTab={
                  finalCta?.secondaryButton?.openInNewTab ??
                  true
                }
                className="inline-flex h-13 items-center justify-center rounded-full border border-[#f7f3e8]/60 px-7 text-xs text-[#f7f3e8] transition-all hover:bg-[#f7f3e8] hover:text-[#17352d]"
              >
                {finalCta?.secondaryButton?.label ||
                  "Chat on WhatsApp"}
              </SmartLink>

            </div>

          </div>

          <div className="absolute bottom-10 right-6 hidden text-right md:block lg:right-16">

            <p className="whitespace-pre-line font-serif text-xl italic text-[#f7f3e8]/70">
              {finalCta?.sideMessage ||
                "More\nMeaningful\nJourneys."}
            </p>

            <div className="ml-auto mt-4 h-px w-10 bg-[#d8b887]" />

          </div>

        </div>
      </section>

      {/* =====================================================
          BOTTOM STRIP
      ====================================================== */}

      <section className="flex flex-col justify-between gap-5 bg-[#10251f] px-6 py-7 text-[#f7f3e8] sm:flex-row sm:items-center sm:px-10 lg:px-16">

        <div>

          <p className="font-serif text-xl tracking-[0.18em]">
            {bottomStrip?.brand ||
              "RAAHII"}
          </p>

          <p className="mt-1 text-[7px] uppercase tracking-[0.35em] text-[#d8b887]">
            {bottomStrip?.label ||
              "Experiences"}
          </p>

        </div>

        <p className="font-serif text-sm italic text-[#f7f3e8]/60">
          {bottomStrip?.statement ||
            "People · Places · Stories · Experiences"}
        </p>

        <p className="text-[8px] uppercase tracking-[0.3em] text-[#f7f3e8]/40">
          {bottomStrip?.location ||
            "Udaipur, Rajasthan"}
        </p>

      </section>

    </main>
  );
}