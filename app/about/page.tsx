import Link from "next/link";
import type { Metadata } from "next";

import { sanityClient } from "@/lib/sanity";
import { urlFor } from "@/lib/sanityImage";
import { aboutPageQuery } from "@/lib/queries";

export const metadata: Metadata = {
  title: "About Raahii Digital",
  description:
    "Discover the story, philosophy and vision behind Raahii Digital — a hospitality growth partner building better ways for hotels and travellers to connect.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Raahii Digital",
    description:
      "The story, philosophy and vision behind Raahii Digital.",
    type: "website",
  },
};

type SanityImage = unknown;

type LinkData = {
  label?: string;
  url?: string;
  openInNewTab?: boolean;
};

type StoryCardData = {
  number?: string;
  title?: string;
  text?: string;
  image?: SanityImage;
};

type ValueData = {
  icon?: string;
  title?: string;
  text?: string;
  services?: string;
};

type BuildingStage = {
  number?: string;
  label?: string;
  title?: string;
  text?: string;
};

type PersonData = {
  image?: SanityImage;
  name?: string;
  role?: string;
  text?: string;
  profileUrl?: string;
};

type WorkStep = {
  icon?: string;
  title?: string;
  text?: string;
};

type WorldItem = {
  image?: SanityImage;
  label?: string;
};

type CompanionStep = {
  number?: string;
  title?: string;
  text?: string;
};

type TimelineItem = {
  year?: string;
  text?: string;
};

type AboutData = {
  hero?: {
    backgroundImage?: SanityImage;
    eyebrow?: string;
    headingLineOne?: string;
    headingLineTwo?: string;
    headingHighlight?: string;
    description?: string;
    ctaLabel?: string;
    ctaUrl?: string;
    sideMessage?: string;
  };

  beginning?: {
    eyebrow?: string;
    heading?: string;
    description?: string;
    quote?: string;
    cards?: StoryCardData[];
  };

  nameMeaning?: {
    eyebrow?: string;
    headingLineOne?: string;
    headingLineTwo?: string;
    meaning?: string;
    description?: string;
    journeyStages?: string[];
    backgroundImage?: SanityImage;
  };

  raahiiWay?: {
    eyebrow?: string;
    heading?: string;
    description?: string;
    values?: ValueData[];
  };

  beliefs?: {
    eyebrow?: string;
    headingLineOne?: string;
    headingLineTwo?: string;
    items?: string[];
    image?: SanityImage;
  };

  building?: {
    eyebrow?: string;
    heading?: string;
    description?: string;
    stages?: BuildingStage[];
  };

  people?: {
    eyebrow?: string;
    heading?: string;
    sideText?: string;
    members?: PersonData[];
  };

  howWeWork?: {
    eyebrow?: string;
    heading?: string;
    steps?: WorkStep[];
  };

  world?: {
    eyebrow?: string;
    heading?: string;
    description?: string;
    items?: WorldItem[];
  };

  companion?: {
    eyebrow?: string;
    heading?: string;
    description?: string;
    journeyLine?: string;
    cardEyebrow?: string;
    steps?: CompanionStep[];
  };

  future?: {
    eyebrow?: string;
    heading?: string;
    timeline?: TimelineItem[];
    closingLine?: string;
  };

  finalCta?: {
    backgroundImage?: SanityImage;
    eyebrow?: string;
    headingLineOne?: string;
    headingHighlight?: string;
    description?: string;
    primaryButton?: LinkData;
    secondaryButton?: LinkData;
    bottomBrand?: string;
    bottomTagline?: string;
    bottomMessage?: string;
  };
};

const fallbackImages = {
  hero: "/hero-bg.jpeg",
  beginning: "/philosophy-bg.jpeg",
  name: "/services-hero.jpeg",
  belief: "/services/services-bottom.jpg",
  world: "/footer-bg.jpeg",
  future: "/hero-bg.jpeg",
  jigar: "/jigar.jpg",
  chitraj: "/chitraj.jpg",
  world1: "/philosophy-bg.jpeg",
  world2: "/services-hero.jpeg",
  world3: "/services/services-bottom.jpg",
  world4: "/footer-bg.jpeg",
};

const fallbackValues: ValueData[] = [
  {
    icon: "◎",
    title: "GET THE GUEST",
    text: "Be discovered by the right guest, at the right moment.",
    services: "Marketing · SEO · Performance · Content",
  },
  {
    icon: "⌂",
    title: "SERVE THE GUEST",
    text: "Turn a booking into an experience.",
    services:
      "Guest Communication · Digital Experience · Local Discovery",
  },
  {
    icon: "↗",
    title: "BUILD THE BRAND",
    text: "Give every great stay a reason to be remembered.",
    services:
      "Branding · Storytelling · Reputation · Direct Relationships",
  },
];

const fallbackBeliefs = [
  "Hotels are more than rooms.",
  "Marketing is more than impressions.",
  "A booking is more than a transaction.",
  "A guest is more than a customer.",
  "Growth is more than revenue.",
];

const fallbackBuildingStages: BuildingStage[] = [
  {
    number: "01",
    label: "TODAY",
    title: "Hospitality Growth Partner",
    text:
      "Helping hotels grow through content, marketing, technology and strategy.",
  },
  {
    number: "02",
    label: "TOMORROW",
    title: "Hospitality Growth Platform",
    text:
      "A connected system for hotel owners to manage growth, digital presence and guest relationships.",
  },
  {
    number: "03",
    label: "THE VISION",
    title: "Premium Travel Platform",
    text:
      "Connecting hotels, guests, experiences and local discovery into a more meaningful way to travel.",
  },
];

const fallbackWorkSteps: WorkStep[] = [
  {
    icon: "♡",
    title: "Understand",
    text: "The property, guests and business.",
  },
  {
    icon: "◎",
    title: "Strategize",
    text: "Where growth is actually possible.",
  },
  {
    icon: "✦",
    title: "Create",
    text: "The story, content and digital experience.",
  },
  {
    icon: "⌁",
    title: "Optimize",
    text: "Measure, learn and improve.",
  },
];

const fallbackCompanionSteps: CompanionStep[] = [
  {
    number: "01",
    title: "Stay",
    text: "A place to begin.",
  },
  {
    number: "02",
    title: "Discover",
    text: "A city to understand.",
  },
  {
    number: "03",
    title: "Experience",
    text: "Moments to remember.",
  },
  {
    number: "04",
    title: "Remember",
    text: "A reason to return.",
  },
];

const fallbackTimeline: TimelineItem[] = [
  {
    year: "2026",
    text: "Raahii begins with hospitality growth.",
  },
  {
    year: "Next",
    text: "More properties. More cities. More technology.",
  },
  {
    year: "Vision",
    text: "A connected hospitality + travel ecosystem.",
  },
];

const fallbackWorldLabels = [
  "People",
  "Places",
  "Culture",
  "Experiences",
];

function imageUrl(
  image: SanityImage | undefined,
  fallback: string
) {
  if (!image) {
    return fallback;
  }

  try {
    return urlFor(image as Parameters<typeof urlFor>[0])
      .width(1800)
      .quality(90)
      .url();
  } catch {
    return fallback;
  }
}

function splitLines(value?: string, fallback = "") {
  return (value || fallback).split("\n");
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
  link?: LinkData;
  className?: string;
  children: React.ReactNode;
}) {
  const href = link?.url || "#";
  const external = isExternalUrl(href);

  if (external) {
    return (
      <a
        href={href}
        target={link?.openInNewTab === false ? undefined : "_blank"}
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
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default async function AboutPage() {
  let aboutPage: AboutData | null = null;

  try {
    aboutPage = await sanityClient.fetch<AboutData>(
      aboutPageQuery,
      {},
      { cache: "no-store" }
    );
  } catch (error) {
    console.error(
      "Failed to fetch About Page from Sanity:",
      error
    );
  }

  const hero = aboutPage?.hero;

  const beginning = aboutPage?.beginning;

  const nameMeaning = aboutPage?.nameMeaning;

  const raahiiWay = aboutPage?.raahiiWay;

  const beliefs = aboutPage?.beliefs;

  const building = aboutPage?.building;

  const people = aboutPage?.people;

  const howWeWork = aboutPage?.howWeWork;

  const world = aboutPage?.world;

  const companion = aboutPage?.companion;

  const future = aboutPage?.future;

  const finalCta = aboutPage?.finalCta;

  const storyCards =
    beginning?.cards && beginning.cards.length > 0
      ? beginning.cards
      : [
          {
            number: "01",
            title: "The Problem",
            text:
              "Hotels were becoming increasingly dependent on OTAs, changing algorithms and scattered marketing.",
            image: undefined,
          },
          {
            number: "02",
            title: "The Realization",
            text:
              "A hotel doesn't just need visibility. It needs a relationship that lasts beyond the booking.",
            image: undefined,
          },
          {
            number: "03",
            title: "The Idea",
            text:
              "A Raahii Digital hospitality ecosystem connecting strategy, technology, marketing and guest experience.",
            image: undefined,
          },
        ];

  const values =
    raahiiWay?.values && raahiiWay.values.length > 0
      ? raahiiWay.values
      : fallbackValues;

  const beliefItems =
    beliefs?.items && beliefs.items.length > 0
      ? beliefs.items
      : fallbackBeliefs;

  const buildingStages =
    building?.stages && building.stages.length > 0
      ? building.stages
      : fallbackBuildingStages;

  const teamMembers =
    people?.members && people.members.length > 0
      ? people.members
      : [
          {
            image: undefined,
            name: "Jigar",
            role: "Co-Founder / Creative & Digital",
            text:
              "A visual storyteller and digital creator at heart. Jigar brings ideas to life through content and strategy, helping hospitality brands look as good as they feel.",
            profileUrl: "#contact",
          },
          {
            image: undefined,
            name: "Chitraj",
            role: "Founder / Hospitality Growth",
            text:
              "An entrepreneur and strategist who understands business, people and possibilities. Chitraj helps hotels grow beyond OTAs and build brands that last.",
            profileUrl: "#contact",
          },
        ];

  const workSteps =
    howWeWork?.steps && howWeWork.steps.length > 0
      ? howWeWork.steps
      : fallbackWorkSteps;

  const worldItems =
    world?.items && world.items.length > 0
      ? world.items
      : [
          { image: undefined, label: "People" },
          { image: undefined, label: "Places" },
          { image: undefined, label: "Culture" },
          { image: undefined, label: "Experiences" },
        ];

  const companionSteps =
    companion?.steps && companion.steps.length > 0
      ? companion.steps
      : fallbackCompanionSteps;

  const timeline =
    future?.timeline && future.timeline.length > 0
      ? future.timeline
      : fallbackTimeline;

  const heroImage = imageUrl(
    hero?.backgroundImage,
    fallbackImages.hero
  );

  const beginningFallbackImages = [
    fallbackImages.beginning,
    fallbackImages.name,
    fallbackImages.belief,
  ];

  const nameImage = imageUrl(
    nameMeaning?.backgroundImage,
    fallbackImages.name
  );

  const beliefImage = imageUrl(
    beliefs?.image,
    fallbackImages.belief
  );

  const finalCtaImage = imageUrl(
    finalCta?.backgroundImage,
    fallbackImages.future
  );

  const journeyStages =
    nameMeaning?.journeyStages &&
    nameMeaning.journeyStages.length > 0
      ? nameMeaning.journeyStages
      : [
          "Discover",
          "Consider",
          "Book",
          "Experience",
          "Remember",
          "Return",
        ];

  const worldFallbackImages = [
    fallbackImages.world1,
    fallbackImages.world2,
    fallbackImages.world3,
    fallbackImages.world4,
  ];

  return (
    <main className="overflow-hidden bg-[#f5f0e6] text-[#172a23]">
      {/* =====================================================
          01 — HERO
      ====================================================== */}

      <section className="relative min-h-[88vh] overflow-hidden bg-[#101511] text-[#f7f3e8]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${heroImage}')`,
          }}
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-[1500px] items-end px-6 pb-16 pt-36 md:px-10 md:pb-20 lg:px-16">
          <div className="max-w-[720px]">
            <div className="mb-7 flex items-center gap-4">
              <span className="text-[9px] uppercase tracking-[0.45em] text-[#d8b887]">
                {hero?.eyebrow || "About Raahii"}
              </span>

              <span className="h-px w-12 bg-[#d8b887]/70" />
            </div>

            <h1 className="font-serif text-[3.5rem] font-light leading-[0.9] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[6.8rem]">
              {hero?.headingLineOne || "We're Building"}
              <br />
              {hero?.headingLineTwo || "More Than a"}
              <br />
              <span className="text-[#d8b887]">
                {hero?.headingHighlight || "Digital Agency."}
              </span>
            </h1>

            <p className="mt-8 max-w-[580px] font-serif text-base leading-7 text-[#f7f3e8]/75 sm:text-lg">
              {hero?.description ||
                "We're building a hospitality growth company designed around one simple belief — great hotels deserve more than bookings. They deserve a brand, a story and a reason for guests to return."}
            </p>

            <Link
              href={hero?.ctaUrl || "#beginning"}
              className="mt-8 inline-flex items-center gap-5 rounded-full bg-[#f3dfb5] px-7 py-4 text-xs uppercase tracking-[0.18em] text-[#17352d] transition-all duration-300 hover:-translate-y-1"
            >
              {hero?.ctaLabel || "Discover Our Story"}

              <span className="text-base">↓</span>
            </Link>
          </div>

          <div className="absolute bottom-8 right-7 hidden max-w-[150px] text-right md:block lg:right-16">
            <p className="whitespace-pre-line font-serif text-lg italic text-[#f7f3e8]/75">
              {hero?.sideMessage ||
                "Better\nStays.\nBrighter\nTomorrows."}
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          02 — THE BEGINNING
      ====================================================== */}

      <section
        id="beginning"
        className="bg-[#f5f0e6] px-6 py-20 md:px-10 md:py-24 lg:px-16 lg:py-28"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <div className="flex items-center gap-4">
                <span className="font-serif text-sm text-[#a56b3a]">
                  02
                </span>

                <span className="h-px w-8 bg-[#a56b3a]/50" />

                <span className="text-[9px] uppercase tracking-[0.4em] text-[#68736d]">
                  {beginning?.eyebrow || "The Beginning"}
                </span>
              </div>

              <h2 className="mt-8 max-w-[570px] whitespace-pre-line font-serif text-4xl font-light leading-[0.95] tracking-[-0.03em] sm:text-5xl md:text-6xl">
                {beginning?.heading ||
                  "It Started With a\nSimple Observation."}
              </h2>

              <p className="mt-7 max-w-[500px] text-sm leading-7 text-[#33433b]/75">
                {beginning?.description ||
                  "We noticed that many great hotels — with amazing locations, stories and hospitality — were still struggling. Not because they lacked quality, but because they lacked the right digital presence, strategy and systems to grow."}
              </p>

              <p className="mt-6 whitespace-pre-line font-serif text-xl italic text-[#90616a]">
                {beginning?.quote ||
                  "Good Hotels.\nDeserve Better Journeys."}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {storyCards.map((card, index) => (
                <StoryCard
                  key={`${card.title || "story"}-${index}`}
                  number={card.number || `0${index + 1}`}
                  title={card.title || ""}
                  text={card.text || ""}
                  image={imageUrl(
                    card.image,
                    beginningFallbackImages[index] ||
                      fallbackImages.beginning
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          03 — THE NAME
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#12221c] px-6 py-20 text-[#f7f3e8] md:px-10 md:py-24 lg:px-16">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45"
          style={{
            backgroundImage: `url('${nameImage}')`,
          }}
        />

        <div className="absolute inset-0 bg-[#12221c]/75" />

        <div className="relative z-10 mx-auto max-w-[1400px]">
          <div className="flex items-center gap-4">
            <span className="font-serif text-sm text-[#d8b887]">
              03
            </span>

            <span className="h-px w-8 bg-[#d8b887]/60" />

            <span className="text-[9px] uppercase tracking-[0.4em] text-[#d8b887]/80">
              {nameMeaning?.eyebrow ||
                'What "Raahii" Means'}
            </span>
          </div>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <h2 className="max-w-[650px] font-serif text-5xl font-light leading-[0.92] tracking-[-0.04em] md:text-7xl">
                {nameMeaning?.headingLineOne ||
                  "Every Journey"}
                <br />
                {nameMeaning?.headingLineTwo ||
                  "Needs a Guide."}
              </h2>

              <p className="mt-5 font-serif text-lg italic text-[#d8b887]">
                {nameMeaning?.meaning ||
                  "Raahii — traveller / one who journeys."}
              </p>

              <p className="mt-7 max-w-[570px] text-sm leading-7 text-[#f7f3e8]/70">
                {nameMeaning?.description ||
                  "Hospitality is a journey too. A guest discovers a hotel, considers it, books it, arrives, experiences it, remembers it and returns. Raahii exists to help hotels become better guides throughout that journey."}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5 border-t border-[#f7f3e8]/15 pt-7 sm:grid-cols-4 lg:border-t-0 lg:border-l lg:pl-10">
              {journeyStages.map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className="flex items-center gap-3"
                >
                  <span className="font-serif text-xs text-[#d8b887]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#f7f3e8]/65">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          04 — THE RAAHII WAY
      ====================================================== */}

      <section className="bg-[#f5f0e6] px-6 py-20 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-center gap-4">
            <span className="font-serif text-sm text-[#a56b3a]">
              04
            </span>

            <span className="h-px w-8 bg-[#a56b3a]/50" />

            <span className="text-[9px] uppercase tracking-[0.4em] text-[#68736d]">
              {raahiiWay?.eyebrow || "The Raahii Way"}
            </span>
          </div>

          <div className="mt-7 grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <h2 className="whitespace-pre-line font-serif text-4xl font-light leading-[0.95] tracking-[-0.03em] sm:text-5xl">
                {raahiiWay?.heading ||
                  "From Discovery\nto Loyalty —\nand Beyond."}
              </h2>

              <p className="mt-5 max-w-md text-sm leading-6 text-[#33433b]/65">
                {raahiiWay?.description ||
                  "A complete approach to help hotels grow, sustainably."}
              </p>
            </div>

            <div className="grid gap-0 md:grid-cols-3">
              {values.map((value, index) => (
                <div
                  key={`${value.title || "value"}-${index}`}
                  className={`border-[#263a31]/15 p-6 ${
                    index !== values.length - 1
                      ? "md:border-r"
                      : ""
                  }`}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#a56b3a]/45 text-lg text-[#a56b3a]">
                    {value.icon || "✦"}
                  </div>

                  <p className="mt-5 text-[8px] uppercase tracking-[0.35em] text-[#a56b3a]">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-3 font-serif text-xl leading-tight">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-xs leading-5 text-[#33433b]/65">
                    {value.text}
                  </p>

                  <p className="mt-5 text-[9px] leading-5 text-[#68736d]">
                    {value.services}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          05 — WHAT WE BELIEVE
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#101511] text-[#f7f3e8]">
        <div className="grid min-h-[440px] lg:grid-cols-[1fr_0.85fr]">
          <div className="flex items-center px-6 py-20 md:px-10 lg:px-16">
            <div className="max-w-[620px]">
              <div className="flex items-center gap-4">
                <span className="font-serif text-sm text-[#d8b887]">
                  05
                </span>

                <span className="h-px w-8 bg-[#d8b887]/50" />

                <span className="text-[9px] uppercase tracking-[0.4em] text-[#d8b887]/75">
                  {beliefs?.eyebrow ||
                    "What We Believe"}
                </span>
              </div>

              <h2 className="mt-7 font-serif text-5xl font-light leading-[0.92] md:text-6xl">
                {beliefs?.headingLineOne ||
                  "A Few Things"}
                <br />
                <span className="text-[#d8b887]">
                  {beliefs?.headingLineTwo ||
                    "We Believe."}
                </span>
              </h2>

              <div className="mt-8 space-y-3">
                {beliefItems.map((belief, index) => (
                  <p
                    key={`${belief}-${index}`}
                    className="flex items-center gap-4 border-b border-[#f7f3e8]/10 pb-3 font-serif text-base text-[#f7f3e8]/85"
                  >
                    <span className="text-[#d8b887]">
                      →
                    </span>

                    {belief}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div
            className="min-h-[330px] bg-cover bg-center"
            style={{
              backgroundImage: `url('${beliefImage}')`,
            }}
          />
        </div>
      </section>

      {/* =====================================================
          06 — WHAT WE ARE BUILDING
      ====================================================== */}

      <section className="bg-[#f5f0e6] px-6 py-20 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-center gap-4">
            <span className="font-serif text-sm text-[#a56b3a]">
              06
            </span>

            <span className="h-px w-8 bg-[#a56b3a]/50" />

            <span className="text-[9px] uppercase tracking-[0.4em] text-[#68736d]">
              {building?.eyebrow ||
                "What We're Building"}
            </span>
          </div>

          <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-[650px] whitespace-pre-line font-serif text-4xl font-light leading-[0.94] tracking-[-0.03em] sm:text-5xl md:text-6xl">
              {building?.heading ||
                "From Growth Partner\nto Hospitality Ecosystem."}
            </h2>

            <p className="max-w-xs text-xs leading-5 text-[#68736d]">
              {building?.description ||
                "A bigger, bolder tomorrow — for hotels, travellers and destinations."}
            </p>
          </div>

          <div className="mt-12 grid gap-0 md:grid-cols-3">
            {buildingStages.map((stage, index) => (
              <div
                key={`${stage.number || "stage"}-${index}`}
                className={`relative border-[#263a31]/15 px-1 py-7 md:px-8 ${
                  index !== buildingStages.length - 1
                    ? "md:border-r"
                    : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-sm text-[#a56b3a]">
                    {stage.number ||
                      String(index + 1).padStart(2, "0")}
                  </span>

                  {index !==
                    buildingStages.length - 1 && (
                    <span className="hidden font-serif text-xl text-[#a56b3a] md:block">
                      →
                    </span>
                  )}
                </div>

                <p className="mt-6 text-[8px] uppercase tracking-[0.35em] text-[#68736d]">
                  {stage.label}
                </p>

                <h3 className="mt-2 max-w-[230px] font-serif text-2xl leading-tight">
                  {stage.title}
                </h3>

                <p className="mt-4 max-w-[290px] text-xs leading-5 text-[#33433b]/65">
                  {stage.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          07 — THE PEOPLE
      ====================================================== */}

      <section className="bg-[#101511] px-6 py-20 text-[#f7f3e8] md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-center gap-4">
            <span className="font-serif text-sm text-[#d8b887]">
              07
            </span>

            <span className="h-px w-8 bg-[#d8b887]/50" />

            <span className="text-[9px] uppercase tracking-[0.4em] text-[#d8b887]/75">
              {people?.eyebrow ||
                "The People Behind Raahii"}
            </span>
          </div>

          <div className="mt-7 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-[700px] whitespace-pre-line font-serif text-4xl font-light leading-[0.94] sm:text-5xl md:text-6xl">
              {people?.heading ||
                "Built By People Who\nSee Hospitality Differently."}
            </h2>

            <p className="max-w-[220px] whitespace-pre-line text-xs leading-5 text-[#f7f3e8]/50">
              {people?.sideText ||
                "Different skills.\nSame purpose."}
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {teamMembers.map((member, index) => (
              <PersonCard
                key={`${member.name || "person"}-${index}`}
                image={imageUrl(
                  member.image,
                  index === 0
                    ? fallbackImages.jigar
                    : fallbackImages.chitraj
                )}
                name={member.name || ""}
                role={member.role || ""}
                text={member.text || ""}
                profileUrl={
                  member.profileUrl || "#contact"
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          08 — HOW WE WORK
      ====================================================== */}

      <section className="bg-[#f5f0e6] px-6 py-20 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-center gap-4">
            <span className="font-serif text-sm text-[#a56b3a]">
              08
            </span>

            <span className="h-px w-8 bg-[#a56b3a]/50" />

            <span className="text-[9px] uppercase tracking-[0.4em] text-[#68736d]">
              {howWeWork?.eyebrow || "How We Work"}
            </span>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
            <h2 className="whitespace-pre-line font-serif text-4xl font-light leading-[0.94] sm:text-5xl">
              {howWeWork?.heading ||
                "We Don't Work\nFrom Templates."}
            </h2>

            <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
              {workSteps.map((step, index) => (
                <div
                  key={`${step.title || "step"}-${index}`}
                  className={`border-[#263a31]/15 px-5 py-5 ${
                    index !== workSteps.length - 1
                      ? "lg:border-r"
                      : ""
                  }`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#a56b3a]/40 text-[#a56b3a]">
                    {step.icon || "✦"}
                  </div>

                  <h3 className="mt-5 font-serif text-xl">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-[#33433b]/65">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          09 — OUR WORLD
      ====================================================== */}

      <section className="bg-[#101511] px-6 py-20 text-[#f7f3e8] md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex items-center gap-4">
            <span className="font-serif text-sm text-[#d8b887]">
              09
            </span>

            <span className="h-px w-8 bg-[#d8b887]/50" />

            <span className="text-[9px] uppercase tracking-[0.4em] text-[#d8b887]/75">
              {world?.eyebrow || "Our World"}
            </span>
          </div>

          <div className="mt-7 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="whitespace-pre-line font-serif text-4xl font-light leading-[0.94] sm:text-5xl">
              {world?.heading ||
                "Hospitality Doesn't\nHappen Behind a Desk."}
            </h2>

            <p className="max-w-[240px] text-xs leading-5 text-[#f7f3e8]/50">
              {world?.description ||
                "That's why we go where the experience happens."}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            {worldItems.slice(0, 4).map((item, index) => (
              <div
                key={`${item.label || "world"}-${index}`}
                className="group relative aspect-[0.82] overflow-hidden rounded-[18px]"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${imageUrl(
                      item.image,
                      worldFallbackImages[index] ||
                        fallbackImages.world
                    )}')`,
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />

                <div className="absolute bottom-5 left-5">
                  <p className="text-[8px] uppercase tracking-[0.35em] text-[#d8b887]">
                    0{index + 1}
                  </p>

                  <p className="mt-1 font-serif text-xl">
                    {item.label ||
                      fallbackWorldLabels[index]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          10 — RAAHII COMPANION
      ====================================================== */}

      <section className="bg-[#f5f0e6] px-6 py-20 md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <div className="flex items-center gap-4">
                <span className="font-serif text-sm text-[#a56b3a]">
                  10
                </span>

                <span className="h-px w-8 bg-[#a56b3a]/50" />

                <span className="text-[9px] uppercase tracking-[0.4em] text-[#68736d]">
                  {companion?.eyebrow ||
                    "Raahii Companion"}
                </span>
              </div>

              <h2 className="mt-7 whitespace-pre-line font-serif text-4xl font-light leading-[0.94] sm:text-5xl md:text-6xl">
                {companion?.heading ||
                  "The Journey Doesn't\nEnd With a Booking."}
              </h2>

              <p className="mt-6 max-w-[520px] text-sm leading-7 text-[#33433b]/70">
                {companion?.description ||
                  "Raahii Companion helps guests discover the destination beyond their hotel room — with curated itineraries, local experiences and on-ground support."}
              </p>

              <p className="mt-6 max-w-[480px] font-serif text-xl italic text-[#90616a]">
                {companion?.journeyLine ||
                  "Stay → Discover → Experience → Remember"}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-[26px] bg-[#172a23] p-8 text-[#f7f3e8] md:p-10">
              <p className="text-[9px] uppercase tracking-[0.4em] text-[#d8b887]">
                {companion?.cardEyebrow ||
                  "One Guest. One Journey."}
              </p>

              <div className="mt-8 space-y-5">
                {companionSteps
                  .slice(0, 4)
                  .map((step, index) => (
                    <div
                      key={`${step.number || index}-${step.title || "step"}`}
                      className="flex items-center gap-5 border-b border-[#f7f3e8]/10 pb-5"
                    >
                      <span className="font-serif text-sm text-[#d8b887]">
                        {step.number ||
                          String(index + 1).padStart(2, "0")}
                      </span>

                      <div>
                        <p className="font-serif text-xl">
                          {step.title}
                        </p>

                        <p className="mt-1 text-xs text-[#f7f3e8]/50">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          11 — THE FUTURE
      ====================================================== */}

      <section className="bg-[#f5f0e6] px-6 pb-20 md:px-10 md:pb-24 lg:px-16">
        <div className="mx-auto max-w-[1400px] border-t border-[#263a31]/15 pt-16">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="flex items-center gap-4">
                <span className="font-serif text-sm text-[#a56b3a]">
                  11
                </span>

                <span className="h-px w-8 bg-[#a56b3a]/50" />

                <span className="text-[9px] uppercase tracking-[0.4em] text-[#68736d]">
                  {future?.eyebrow || "Our Future"}
                </span>
              </div>

              <h2 className="mt-7 whitespace-pre-line font-serif text-5xl font-light leading-[0.92] md:text-6xl">
                {future?.heading ||
                  "We're Just\nGetting Started."}
              </h2>
            </div>

            <div className="relative">
              <div className="absolute bottom-2 left-[13px] top-2 w-px bg-[#a56b3a]/25" />

              <div className="space-y-9">
                {timeline.map((item, index) => (
                  <div
                    key={`${item.year || "timeline"}-${index}`}
                    className="relative flex gap-7"
                  >
                    <div className="relative z-10 mt-1 h-7 w-7 shrink-0 rounded-full border border-[#a56b3a]/50 bg-[#f5f0e6]" />

                    <div>
                      <p className="text-[8px] uppercase tracking-[0.35em] text-[#a56b3a]">
                        {item.year}
                      </p>

                      <p className="mt-2 max-w-[480px] font-serif text-xl leading-tight">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-10 text-right whitespace-pre-line font-serif text-lg italic text-[#90616a]">
                {future?.closingLine ||
                  "The journey\ncontinues."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          12 — FINAL CTA
      ====================================================== */}

      <section className="relative min-h-[620px] overflow-hidden bg-[#101511] text-[#f7f3e8]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${finalCtaImage}')`,
          }}
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1400px] flex-col justify-between px-6 py-16 md:px-10 md:py-20 lg:px-16">
          <div className="flex items-center gap-4">
            <span className="text-[9px] uppercase tracking-[0.4em] text-[#d8b887]">
              {finalCta?.eyebrow ||
                "Let's Build the Future Together"}
            </span>

            <span className="h-px w-10 bg-[#d8b887]/60" />
          </div>

          <div>
            <h2 className="max-w-[760px] font-serif text-5xl font-light leading-[0.9] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[6.5rem]">
              {finalCta?.headingLineOne ||
                "Every Great Journey"}
              <br />
              <span className="text-[#d8b887]">
                {finalCta?.headingHighlight ||
                  "Begins Somewhere."}
              </span>
            </h2>

            <p className="mt-7 max-w-[520px] text-sm leading-7 text-[#f7f3e8]/70 sm:text-base">
              {finalCta?.description ||
                "Whether you're building a hotel, growing a hospitality brand, or simply believe there is a better way forward — we'd love to build what's next with you."}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <SmartLink
                link={{
                  label:
                    finalCta?.primaryButton?.label ||
                    "Work With Raahii",
                  url:
                    finalCta?.primaryButton?.url ||
                    "/#contact",
                  openInNewTab:
                    finalCta?.primaryButton
                      ?.openInNewTab,
                }}
                className="inline-flex h-14 items-center justify-center gap-5 rounded-full bg-[#f3dfb5] px-7 text-xs uppercase tracking-[0.2em] text-[#17352d] transition-all duration-300 hover:-translate-y-1"
              >
                {finalCta?.primaryButton?.label ||
                  "Work With Raahii"}

                <span className="text-base">
                  →
                </span>
              </SmartLink>

              <SmartLink
                link={{
                  label:
                    finalCta?.secondaryButton?.label ||
                    "Join the Journey",
                  url:
                    finalCta?.secondaryButton?.url ||
                    "/careers",
                  openInNewTab:
                    finalCta?.secondaryButton
                      ?.openInNewTab,
                }}
                className="inline-flex h-14 items-center justify-center gap-5 rounded-full border border-[#f7f3e8]/35 px-7 text-xs uppercase tracking-[0.2em] text-[#f7f3e8] transition-all duration-300 hover:bg-[#f7f3e8] hover:text-[#17352d]"
              >
                {finalCta?.secondaryButton?.label ||
                  "Join the Journey"}

                <span className="text-base">
                  →
                </span>
              </SmartLink>
            </div>
          </div>

          <div className="flex items-end justify-between border-t border-[#f7f3e8]/15 pt-7">
            <div>
              <p className="font-serif text-2xl tracking-[0.18em]">
                {finalCta?.bottomBrand ||
                  "RAAHII"}
              </p>

              <p className="mt-1 text-[7px] uppercase tracking-[0.35em] text-[#d8b887]">
                {finalCta?.bottomTagline ||
                  "Hospitality Growth Partner"}
              </p>
            </div>

            <p className="hidden whitespace-pre-line text-right font-serif text-lg italic text-[#f7f3e8]/60 sm:block">
              {finalCta?.bottomMessage ||
                "Better Stays.\nBrighter Tomorrows."}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ============================================================
   SMALL REUSABLE COMPONENTS
============================================================ */

function StoryCard({
  number,
  title,
  text,
  image,
}: {
  number: string;
  title: string;
  text: string;
  image: string;
}) {
  return (
    <article className="group overflow-hidden rounded-[16px] border border-[#263a31]/10 bg-[#eee7da]">
      <div className="relative h-[150px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage: `url('${image}')`,
          }}
        />

        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div className="p-5">
        <div className="flex items-center gap-3">
          <span className="font-serif text-xs text-[#a56b3a]">
            {number}
          </span>

          <span className="h-px w-5 bg-[#a56b3a]/40" />
        </div>

        <h3 className="mt-3 font-serif text-lg leading-tight">
          {title}
        </h3>

        <p className="mt-3 text-[11px] leading-5 text-[#33433b]/65">
          {text}
        </p>
      </div>
    </article>
  );
}

function PersonCard({
  image,
  name,
  role,
  text,
  profileUrl,
}: {
  image: string;
  name: string;
  role: string;
  text: string;
  profileUrl: string;
}) {
  return (
    <article className="grid overflow-hidden rounded-[18px] border border-[#f7f3e8]/10 bg-[#17231e] sm:grid-cols-[0.8fr_1.2fr]">
      <div className="relative min-h-[320px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${image}')`,
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
      </div>

      <div className="flex flex-col justify-center p-7 md:p-9">
        <p className="text-[8px] uppercase tracking-[0.35em] text-[#d8b887]">
          {role}
        </p>

        <h3 className="mt-3 font-serif text-3xl">
          {name}
        </h3>

        <p className="mt-5 text-xs leading-6 text-[#f7f3e8]/60">
          {text}
        </p>

        <Link
          href={profileUrl || "#contact"}
          className="mt-7 inline-flex w-fit items-center gap-3 text-[8px] uppercase tracking-[0.3em] text-[#d8b887]"
        >
          View Full Profile

          <span className="text-sm">→</span>
        </Link>
      </div>
    </article>
  );
}