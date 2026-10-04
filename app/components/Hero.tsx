import Link from "next/link";
import { urlFor } from "@/lib/sanityImage";

type SanityImage = {
  asset?: {
    _ref?: string;
    _type?: string;
  };
};

type HeroProps = {
  hero?: {
    desktopImage?: SanityImage;
    mobileImage?: SanityImage;

    eyebrow?: string;

    headingLineOne?: string;
    headingLineTwo?: string;

    description?: string;

    cta?: {
      label?: string;
      url?: string;
      openInNewTab?: boolean;
    };

    problems?: string[];

    bottomMessage?: string;
  } | null;
};

export default function Hero({ hero }: HeroProps) {
  // =====================================================
  // HERO CONTENT
  // =====================================================

  const eyebrow =
    hero?.eyebrow ||
    "Your Hospitality Growth Partner";

  const headingLineOne =
    hero?.headingLineOne ||
    "Find the Right";

  const headingLineTwo =
    hero?.headingLineTwo ||
    "Direction.";

  const description =
    hero?.description ||
    "We help hospitality brands find their story, connect with the right guests, and grow with meaning.";

  // =====================================================
  // CTA
  // =====================================================

  const ctaLabel =
    hero?.cta?.label ||
    "Book Free Consultation";

  const ctaUrl =
    hero?.cta?.url ||
    "https://forms.gle/Rbb86sVxxU2fuetC7";

  const openInNewTab =
    hero?.cta?.openInNewTab ?? true;

  // =====================================================
  // JOURNEY PROBLEMS
  // =====================================================

  const problems =
    hero?.problems?.length
      ? hero.problems
      : [
          "Confusion",
          "Low Bookings",
          "No Clear Brand Story",
          "Scattered Marketing",
        ];

  // =====================================================
  // BOTTOM MESSAGE
  // =====================================================

  const bottomMessage =
    hero?.bottomMessage ||
    "A kinder tomorrow\nthrough meaningful\ntravel.";

  // =====================================================
  // SANITY IMAGES
  // =====================================================

  const desktopImage = hero?.desktopImage
    ? urlFor(hero.desktopImage)
        .width(2400)
        .quality(90)
        .auto("format")
        .url()
    : "/hero-bg.jpeg";

  const mobileImage = hero?.mobileImage
    ? urlFor(hero.mobileImage)
        .width(1400)
        .quality(90)
        .auto("format")
        .url()
    : "/hero-mobile.jpeg";

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <section
      id="home"
      className="
        relative min-h-screen overflow-hidden
        bg-[#101311] text-[#f7f3e8]
      "
    >

      {/* =================================================
          BACKGROUND IMAGES
      ================================================= */}

      <div className="absolute inset-0">

        {/* DESKTOP */}

        <div
          className="
            absolute inset-0 hidden
            bg-cover bg-center md:block
          "
          style={{
            backgroundImage: `url("${desktopImage}")`,
          }}
        />

        {/* MOBILE */}

        <div
          className="
            absolute inset-0
            bg-cover bg-center md:hidden
          "
          style={{
            backgroundImage: `url("${mobileImage}")`,
          }}
        />

      </div>


      {/* =================================================
          HERO CONTENT
      ================================================= */}

      <div
        className="
          relative z-10 mx-auto flex min-h-screen
          max-w-[1500px] items-center
          px-6 pb-20 pt-32
          md:px-10 md:pt-36
          lg:px-16
        "
      >

        <div className="max-w-2xl">

          {/* EYEBROW */}

          <p
            className="
              mb-6 text-[15px]
              uppercase tracking-[0.42em]
              text-[#ffffff]/80
              sm:text-sm
            "
          >
            {eyebrow}
          </p>


          {/* MAIN HEADING */}

          <h1
            className="
              font-serif text-[3.7rem]
              font-light leading-[0.9]
              tracking-[-0.035em]
              sm:text-6xl
              md:text-7xl
              lg:text-[6.2rem]
            "
          >
            {headingLineOne}
            <br />
            {headingLineTwo}
          </h1>


          {/* SMALL LINE */}

          <div className="mt-7 h-px w-10 bg-[#eadbc3]" />


          {/* DESCRIPTION */}

          <p
            className="
              mt-7 max-w-xl
              text-base leading-7
              text-[#f7f3e8]/85
              sm:text-lg sm:leading-8
            "
          >
            {description}
          </p>


          {/* =================================================
              CTA
          ================================================= */}

          {openInNewTab ? (
            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group mt-8 inline-flex h-14
                items-center gap-5
                rounded-full
                bg-[#f7f3e8]
                pl-7 pr-2
                text-sm font-medium
                text-[#17352d]
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              <span>{ctaLabel}</span>

              <span
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  bg-[#17352d]
                  text-lg
                  text-[#f7f3e8]
                  transition-transform duration-300
                  group-hover:translate-x-0.5
                "
              >
                →
              </span>
            </a>
          ) : (
            <Link
              href={ctaUrl}
              className="
                group mt-8 inline-flex h-14
                items-center gap-5
                rounded-full
                bg-[#f7f3e8]
                pl-7 pr-2
                text-sm font-medium
                text-[#17352d]
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              <span>{ctaLabel}</span>

              <span
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  bg-[#17352d]
                  text-lg
                  text-[#f7f3e8]
                  transition-transform duration-300
                  group-hover:translate-x-0.5
                "
              >
                →
              </span>
            </Link>
          )}

        </div>
      </div>


      {/* =================================================
          BOTTOM LEFT — JOURNEY PROBLEMS
      ================================================= */}

      <div
        className="
          absolute bottom-85 left-30
          z-10 hidden md:block
          lg:left-170
        "
      >

        <div className="flex flex-col gap-2">

          {problems.map((problem, index) => (
            <span
              key={`${problem}-${index}`}
              className="
                text-[12px]
                uppercase
                tracking-[0.3em]
                text-[#eadbc3]/75
              "
            >
              {problem}
            </span>
          ))}

        </div>

      </div>


      {/* =================================================
          BOTTOM RIGHT MESSAGE
      ================================================= */}

      <div
        className="
          absolute bottom-8 right-6
          z-10 hidden max-w-[180px]
          text-right md:block
          lg:right-16
        "
      >

        <p
          className="
            whitespace-pre-line
            font-serif text-sm
            italic leading-6
            text-[#f7f3e8]/75
          "
        >
          {bottomMessage}
        </p>

        <div
          className="
            ml-auto mt-4
            h-px w-10
            bg-[#eadbc3]/60
          "
        />

      </div>

    </section>
  );
}