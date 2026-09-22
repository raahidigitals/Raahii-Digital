"use client";

const coreStrengths = [
  {
    number: "01",
    symbol: "◎",
    title: "Content &\nBrand Strategy",
    description:
      "Building structured content systems aligned with acquisition, positioning and long-term brand leverage.",
  },
  {
    number: "02",
    symbol: "↗",
    title: "Demand\nGeneration",
    description:
      "Using audience behaviour, market demand and search intent to create content that moves beyond awareness.",
  },
  {
    number: "03",
    symbol: "◉",
    title: "Storytelling &\nPositioning",
    description:
      "Turning complex ideas into clear narratives that build trust, authority and audience connection.",
  },
  {
    number: "04",
    symbol: "✦",
    title: "Performance\nContent",
    description:
      "Ad copy, hooks, landing-page messaging and conversion-focused content designed around audience psychology.",
  },
  {
    number: "05",
    symbol: "⚙",
    title: "Content\nSystems",
    description:
      "Research → Strategy → Creation → Distribution → Performance → Iteration.",
  },
];

const selectedExperience = [
  {
    number: "01",
    title: "Creators",
    subtitle: "Content ecosystems",
    description:
      "Building content strategies and systems designed around audience attention, consistency and growth.",
  },
  {
    number: "02",
    title: "Founders",
    subtitle: "Founder-led brands",
    description:
      "Turning founder stories, thinking and vision into narratives that build authority and trust.",
  },
  {
    number: "03",
    title: "Public Figures",
    subtitle: "Personal brand",
    description:
      "Creating strategic content ecosystems that connect public identity with audience perception.",
  },
  {
    number: "04",
    title: "Creator Teams",
    subtitle: "Influencer & content groups",
    description:
      "Designing repeatable workflows that bring strategy, creation, distribution and performance together.",
  },
  {
    number: "05",
    title: "Growth-focused",
    subtitle: "Brands across industries",
    description:
      "Content designed not simply to fill calendars, but to create demand, authority and measurable business impact.",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#0d0f0d] text-[#f7f3e8]"
    >
      {/* =========================================================
          EXPERIENCE INTRO
      ========================================================= */}
      <div className="relative min-h-[720px] overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/portfolio-bg.jpeg')",
          }}
        />

        {/* Dark overlays */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f0d] via-transparent to-black/20" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex min-h-[720px] max-w-[1500px] items-center px-6 py-24 md:px-10 lg:px-16">
          <div className="max-w-[700px]">
            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-[0.42em] text-[#d9c7ad]">
                Raahii — Our Experience
              </span>

              <span className="h-px w-12 bg-[#d9c7ad]/70" />
            </div>

            {/* Main heading */}
            <h2 className="font-serif text-[3.3rem] font-light leading-[0.95] tracking-[-0.035em] sm:text-6xl md:text-7xl lg:text-[5.7rem]">
              Built on strategy.
              <br />
              Driven by storytelling.
              <br />
              <span className="text-[#d8a77a]">
                Designed for growth.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-9 max-w-[590px] text-[15px] leading-7 text-[#f7f3e8]/80 sm:text-base sm:leading-8">
              Raahii&apos;s approach is built around the idea that content
              should not exist just to fill a social media calendar.
              <br className="hidden sm:block" />
              <br className="hidden sm:block" />
              It should create demand, authority, trust and business impact.
            </p>

            {/* Signature statement */}
            <div className="mt-12">
              <p className="font-serif text-xl italic text-[#e5d6c1]">
                More Than Marketing
              </p>

              <p className="mt-2 font-serif text-xl italic text-[#e5d6c1]">
                A Kinder Tomorrow
              </p>

              <div className="mt-4 h-px w-16 rotate-[-4deg] bg-[#d9c7ad]" />
            </div>
          </div>
        </div>

        {/* Top right brand philosophy */}
        <div className="absolute right-6 top-10 z-10 text-right md:right-10 lg:right-16">
          <p className="text-[9px] uppercase tracking-[0.38em] text-[#f7f3e8]/80">
            Travel
          </p>
          <p className="mt-2 text-[9px] uppercase tracking-[0.38em] text-[#f7f3e8]/80">
            Experience
          </p>
          <p className="mt-2 text-[9px] uppercase tracking-[0.38em] text-[#f7f3e8]/80">
            Belong
          </p>

          <div className="ml-auto mt-4 h-px w-8 bg-[#d9c7ad]" />
        </div>

        {/* Bottom right signature */}
        <div className="absolute bottom-10 right-6 z-10 text-right md:right-10 lg:right-16">
          <p className="font-serif text-xl italic text-[#f7f3e8]">
            Raahii
          </p>

          <p className="mt-1 text-[8px] uppercase tracking-[0.3em] text-[#f7f3e8]/60">
            The thinking behind the journey
          </p>
        </div>
      </div>

      {/* =========================================================
          CORE STRENGTHS
      ========================================================= */}
      <div className="relative bg-[#f5f0e6] px-5 py-20 text-[#101210] md:px-10 md:py-24 lg:px-16">
        {/* subtle texture */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "radial-gradient(#171717 0.7px, transparent 0.7px)",
              backgroundSize: "7px 7px",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[1450px]">
          {/* Section heading */}
          <div className="mb-12">
            <div className="flex items-center gap-4">
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#4f514d]">
                Core Strengths
              </span>

              <span className="h-px w-12 bg-[#77756e]" />
            </div>

            <h3 className="mt-5 font-serif text-4xl font-light tracking-[-0.025em] sm:text-5xl md:text-6xl">
              Strategy in Every Story.
            </h3>

            <p className="mt-3 max-w-2xl font-serif text-lg text-[#555650] md:text-xl">
              Turning ideas into impact through content, creativity and data.
            </p>
          </div>

          {/* Strength cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {coreStrengths.map((item, index) => (
              <div
                key={item.number}
                className="
                  group
                  relative
                  min-h-[270px]
                  overflow-hidden
                  rounded-[5px]
                  border
                  border-[#171817]/15
                  bg-[#ebe5d9]
                  p-6
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:bg-[#e6ded0]
                "
              >
                {/* top line */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] tracking-[0.25em] text-[#77756e]">
                    {item.number}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#242521] text-lg transition-transform duration-500 group-hover:rotate-12">
                    {item.symbol}
                  </span>
                </div>

                {/* title */}
                <h4 className="mt-10 whitespace-pre-line font-serif text-[26px] leading-[1.02] tracking-[-0.02em]">
                  {item.title}
                </h4>

                {/* description */}
                <p className="mt-5 text-[12px] leading-5 text-[#555650]">
                  {item.description}
                </p>

                {/* bottom line */}
                <div className="absolute bottom-5 left-6 right-6 flex items-center justify-between">
                  <span className="text-[8px] uppercase tracking-[0.25em] text-[#77756e]">
                    Raahii
                  </span>

                  <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* handwritten corner */}
          <div className="pointer-events-none absolute right-0 top-0 hidden rotate-[-5deg] lg:block">
            <p className="font-serif text-lg italic text-[#77756e]">
              Ideas
            </p>
            <p className="font-serif text-lg italic text-[#77756e]">
              Content
            </p>
            <p className="font-serif text-lg italic text-[#77756e]">
              Community
            </p>
            <p className="font-serif text-lg italic text-[#77756e]">
              Growth.
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================
          SELECTED EXPERIENCE
      ========================================================= */}
      <div className="relative overflow-hidden bg-[#0d0f0d] px-5 py-20 md:px-10 md:py-24 lg:px-16">
        <div className="relative mx-auto max-w-[1450px]">
          {/* Heading */}
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="flex items-center gap-4">
                <span className="text-[10px] uppercase tracking-[0.4em] text-[#d9c7ad]/70">
                  Selected Experience
                </span>

                <span className="h-px w-12 bg-[#d9c7ad]/50" />
              </div>

              <h3 className="mt-5 max-w-[1000px] font-serif text-3xl font-light leading-tight tracking-[-0.025em] sm:text-4xl md:text-5xl lg:text-[3.5rem]">
                Creators
                <span className="mx-3 text-[#b98d68]">•</span>
                Founders
                <span className="mx-3 text-[#b98d68]">•</span>
                Public Figures
                <span className="mx-3 text-[#b98d68]">•</span>
                Growth-focused Brands
              </h3>
            </div>

            <div className="hidden shrink-0 text-right md:block">
              <p className="text-[8px] uppercase tracking-[0.3em] text-[#d9c7ad]/60">
                Real People
              </p>
              <p className="mt-2 text-[8px] uppercase tracking-[0.3em] text-[#d9c7ad]/60">
                Real Impact
              </p>
            </div>
          </div>

          <p className="mt-10 text-sm text-[#f7f3e8]/60">
            Selected work and experience across content, strategy and brand
            growth.
          </p>

          {/* Experience cards */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {selectedExperience.map((item) => (
              <div
                key={item.number}
                className="
                  group
                  relative
                  flex
                  min-h-[300px]
                  flex-col
                  justify-between
                  overflow-hidden
                  rounded-[5px]
                  border
                  border-[#f7f3e8]/15
                  bg-[#171917]
                  p-6
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-[#d9c7ad]/50
                "
              >
                {/* decorative number */}
                <span className="absolute -right-3 -top-7 font-serif text-[110px] font-light leading-none text-[#f7f3e8]/[0.035]">
                  {item.number}
                </span>

                {/* number */}
                <span className="relative text-[9px] tracking-[0.3em] text-[#d9c7ad]/60">
                  {item.number}
                </span>

                {/* title */}
                <div className="relative">
                  <div className="mb-5 h-px w-8 bg-[#b98d68]" />

                  <h4 className="font-serif text-[28px] font-light leading-[1.02] tracking-[-0.02em]">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-[9px] uppercase tracking-[0.22em] text-[#d9c7ad]/65">
                    {item.subtitle}
                  </p>

                  <p className="mt-5 text-[12px] leading-5 text-[#f7f3e8]/60">
                    {item.description}
                  </p>
                </div>

                {/* footer */}
                <div className="relative mt-8 flex items-center justify-between border-t border-[#f7f3e8]/10 pt-4">
                  <span className="text-[8px] uppercase tracking-[0.25em] text-[#f7f3e8]/40">
                    Selected Work
                  </span>

                  <span className="text-sm text-[#d9c7ad] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =========================================================
          FINAL STATEMENT
      ========================================================= */}
      <div
        className="relative min-h-[520px] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: "url('/portfolio-bottom.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[520px] max-w-[1450px] flex-col justify-between px-6 py-16 md:px-10 lg:px-16">
          {/* Left label */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.42em] text-[#d9c7ad]">
              Good Stories
            </p>

            <p className="mt-3 text-[10px] uppercase tracking-[0.42em] text-[#d9c7ad]">
              Create
            </p>

            <p className="mt-3 text-[10px] uppercase tracking-[0.42em] text-[#d9c7ad]">
              Greater
            </p>

            <p className="mt-3 text-[10px] uppercase tracking-[0.42em] text-[#d9c7ad]">
              Destinations
            </p>
          </div>

          {/* Quote */}
          <div className="ml-auto max-w-[680px] text-right">
            <p className="font-serif text-2xl font-light italic leading-[1.25] text-[#f7f3e8] sm:text-3xl md:text-4xl">
              “The right story doesn&apos;t just get seen.
              <br />
              It gets remembered —
              <br />
              and it drives action.”
            </p>

            <div className="mt-7 flex items-center justify-end gap-4">
              <span className="h-px w-10 bg-[#d9c7ad]/60" />

              <span className="text-[9px] uppercase tracking-[0.35em] text-[#d9c7ad]/80">
                Raahii
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}