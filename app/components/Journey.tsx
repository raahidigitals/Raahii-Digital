"use client";

const journeyStages = [
  {
    number: "01",
    title: "GET THE GUEST",
    statement: "Be discovered.",
    microcopy: "RIGHT PEOPLE. REAL INTEREST.",
    image: "/journey-get-guest.jpeg",
    imageText: "Be\nDiscovered",

    services: [
      {
        icon: "⌕",
        label: "Content",
      },
      {
        icon: "G",
        label: "Google",
      },
      {
        icon: "▥",
        label: "SEO",
      },
      {
        icon: "⌁",
        label: "Ads",
      },
      {
        icon: "▱",
        label: "OTA",
      },
      {
        icon: "▣",
        label: "Website",
      },
    ],
  },

  {
    number: "02",
    title: "SERVE THE GUEST",
    statement: "Create the experience.",
    microcopy: "BETTER EXPERIENCES. HAPPIER GUESTS.",
    image: "/journey-serve-guest.jpeg",
    imageText: "Create\nthe Experience",

    services: [
      {
        icon: "⌑",
        label: "Local\nGuidance",
      },
      {
        icon: "✧",
        label: "Recommendations",
      },
      {
        icon: "•••",
        label: "Assistance",
      },
    ],
  },

  {
    number: "03",
    title: "BUILD THE BRAND",
    statement: "Become the reason they return.",
    microcopy: "STRONGER BRANDS. LONGER RELATIONSHIPS.",
    image: "/journey-build-brand.jpeg",
    imageText: "They\nReturn",

    services: [
      {
        icon: "◇",
        label: "Brand",
      },
      {
        icon: "☆",
        label: "Reputation",
      },
      {
        icon: "▦",
        label: "Direct\nBookings",
      },
      {
        icon: "♡",
        label: "Loyalty",
      },
    ],
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-[#102b23] text-[#f5efe3]"
    >
      {/* =====================================================
          BACKGROUND TEXTURE
      ===================================================== */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(#f5efe3 0.7px, transparent 0.7px)",
            backgroundSize: "8px 8px",
          }}
        />
      </div>

      {/* =====================================================
          TOP HEADER
      ===================================================== */}
      <div className="relative z-10 mx-auto max-w-[1450px] px-6 pb-12 pt-24 text-center sm:px-10 md:pb-16 md:pt-28 lg:px-16">
        {/* eyebrow */}
        <div className="flex items-center justify-center gap-4">
          <span className="text-[12px] uppercase tracking-[0.45em] text-[#d8c5a8]/80 sm:text-[25px]">
            The Raahii System
          </span>
        </div>

        {/* heading */}
        <h2 className="mt-5 font-serif text-[2.8rem] font-light leading-[0.98] tracking-[-0.035em] sm:text-5xl md:text-6xl lg:text-[4.5rem]">
          From Discovery to Loyalty
        </h2>

        {/* subtitle */}
        <p className="mt-4 font-serif text-base text-[#f5efe3]/65 sm:text-lg">
          A complete growth journey for hospitality brands.
        </p>

        {/* decorative line */}
        <div className="mx-auto mt-7 h-px w-10 bg-[#c79b67]" />
      </div>

      {/* =====================================================
          JOURNEY BODY
      ===================================================== */}
      <div className="relative z-10 mx-auto max-w-[1450px] px-6 pb-20 sm:px-10 md:pb-28 lg:px-16">
        {/* Desktop center line */}
        <div className="absolute bottom-28 left-[47.2%] top-0 hidden w-px bg-[#d8c5a8]/20 lg:block" />

        <div className="space-y-20 lg:space-y-0">
          {journeyStages.map((stage, index) => (
            <div
              key={stage.number}
              className="relative lg:grid lg:min-h-[390px] lg:grid-cols-[47%_53%]"
            >
              {/* =================================================
                  LEFT CONTENT
              ================================================= */}
              <div className="relative pr-0 lg:pr-14">
                {/* stage number */}
                <div className="flex items-center gap-4">
                  <span className="text-sm font-light tracking-[0.18em] text-[#d8c5a8]">
                    {stage.number}
                  </span>

                  <span className="h-px w-9 bg-[#c79b67]/70" />
                </div>

                {/* title */}
                <h3 className="mt-7 font-serif text-[2.6rem] font-light leading-[0.94] tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem]">
                  {stage.title}
                </h3>

                {/* statement */}
                <p className="mt-3 font-serif text-lg italic text-[#f5efe3]/75 sm:text-xl">
                  {stage.statement}
                </p>

                {/* services */}
                <div
                  className={`
                    mt-8
                    flex
                    flex-wrap
                    gap-y-5
                    ${
                      stage.services.length >= 5
                        ? "max-w-[570px]"
                        : "max-w-[500px]"
                    }
                  `}
                >
                  {stage.services.map((service, serviceIndex) => (
                    <div
                      key={service.label}
                      className={`
                        flex
                        min-w-[78px]
                        flex-col
                        items-center
                        text-center
                        ${
                          serviceIndex !== 0
                            ? "border-l border-[#d8c5a8]/15 pl-4 sm:pl-5"
                            : ""
                        }
                      `}
                    >
                      {/* icon circle */}
                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#c79b67]/60
                          font-serif
                          text-sm
                          text-[#d8c5a8]
                          transition-all
                          duration-500
                          group-hover:border-[#d8c5a8]
                        "
                      >
                        {service.icon}
                      </div>

                      {/* label */}
                      <span className="mt-2 whitespace-pre-line text-[9px] leading-4 text-[#f5efe3]/55 sm:text-[10px]">
                        {service.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* microcopy */}
                <div className="mt-7 flex items-center gap-3">
                  <span className="h-px w-5 bg-[#c79b67]/60" />

                  <span className="text-[8px] uppercase tracking-[0.3em] text-[#d8c5a8]/55">
                    {stage.microcopy}
                  </span>
                </div>

                {/* desktop down arrow */}
                {index < journeyStages.length - 1 && (
                  <div className="absolute -bottom-[34px] right-[-23px] z-20 hidden h-11 w-11 items-center justify-center rounded-full border border-[#c79b67]/70 bg-[#102b23] lg:flex">
                    <span className="text-lg font-light text-[#d8c5a8]">
                      ↓
                    </span>
                  </div>
                )}
              </div>

              {/* =================================================
                  RIGHT IMAGE
              ================================================= */}
              <div className="mt-10 lg:mt-0 lg:pl-12">
                <div className="group relative overflow-hidden">
                  {/* image */}
                  <div
                    className="
                      relative
                      h-[260px]
                      overflow-hidden
                      sm:h-[330px]
                      lg:h-[330px]
                    "
                  >
                    <img
                      src={stage.image}
                      alt={stage.title}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-1000
                        ease-out
                        group-hover:scale-[1.04]
                      "
                    />

                    {/* dark overlay */}
                    <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/10" />

                    {/* gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                    {/* handwritten visual text */}
                    <div className="absolute bottom-6 right-6">
                      <p className="whitespace-pre-line text-right font-serif text-2xl italic leading-[0.95] text-[#f5efe3] sm:text-3xl">
                        {stage.imageText}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* =================================================
                  MOBILE ARROW
              ================================================= */}
              {index < journeyStages.length - 1 && (
                <div className="relative ml-4 mt-8 flex h-10 w-10 items-center justify-center rounded-full border border-[#c79b67]/60 lg:hidden">
                  <span className="text-lg text-[#d8c5a8]">↓</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* =====================================================
          BOTTOM MESSAGE
      ===================================================== */}
      <div className="relative z-10 border-t border-[#f5efe3]/10 bg-[#0c211b]">
        <div className="mx-auto flex max-w-[1450px] flex-col items-center justify-between gap-8 px-6 py-16 text-center sm:px-10 md:py-20 lg:flex-row lg:px-16 lg:text-left">
          {/* left */}
          <div>
            <p className="text-[9px] uppercase tracking-[0.42em] text-[#d8c5a8]/65">
              The Destination
            </p>

            <h3 className="mt-4 font-serif text-3xl font-light leading-tight sm:text-4xl md:text-5xl">
              Don&apos;t just get the booking.
            </h3>

            <p className="mt-3 font-serif text-xl italic text-[#c79b67]">
              Become the reason they return.
            </p>
          </div>

          {/* right */}
          <div className="max-w-[500px]">
            <p className="text-sm leading-7 text-[#f5efe3]/55">
              OTAs can bring the guest to your doorstep. Raahii helps you
              build the relationship that brings them back.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <span className="text-[8px] uppercase tracking-[0.28em] text-[#d8c5a8]/65">
                Get the Guest
              </span>

              <span className="text-[#c79b67]">→</span>

              <span className="text-[8px] uppercase tracking-[0.28em] text-[#d8c5a8]/65">
                Serve the Guest
              </span>

              <span className="text-[#c79b67]">→</span>

              <span className="text-[8px] uppercase tracking-[0.28em] text-[#d8c5a8]/65">
                Build the Brand
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}