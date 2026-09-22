import Link from "next/link";
import type { Metadata } from "next";

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

const images = {
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

const values = [
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
    services: "Guest Communication · Digital Experience · Local Discovery",
  },
  {
    icon: "↗",
    title: "BUILD THE BRAND",
    text: "Give every great stay a reason to be remembered.",
    services: "Branding · Storytelling · Reputation · Direct Relationships",
  },
];

const beliefs = [
  "Hotels are more than rooms.",
  "Marketing is more than impressions.",
  "A booking is more than a transaction.",
  "A guest is more than a customer.",
  "Growth is more than revenue.",
];

const futureStages = [
  {
    number: "01",
    label: "TODAY",
    title: "Hospitality Growth Partner",
    text: "Helping hotels grow through content, marketing, technology and strategy.",
  },
  {
    number: "02",
    label: "TOMORROW",
    title: "Hospitality Growth Platform",
    text: "A connected system for hotel owners to manage growth, digital presence and guest relationships.",
  },
  {
    number: "03",
    label: "THE VISION",
    title: "Premium Travel Platform",
    text: "Connecting hotels, guests, experiences and local discovery into a more meaningful way to travel.",
  },
];

const workSteps = [
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

const worldImages = [
  images.world1,
  images.world2,
  images.world3,
  images.world4,
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#f5f0e6] text-[#172a23]">

      {/* =====================================================
          01 — HERO
      ====================================================== */}

      <section className="relative min-h-[88vh] overflow-hidden bg-[#101511] text-[#f7f3e8]">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${images.hero}')` }}
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-[1500px] items-end px-6 pb-16 pt-36 md:px-10 md:pb-20 lg:px-16">

          <div className="max-w-[720px]">

            <div className="mb-7 flex items-center gap-4">
              <span className="text-[9px] uppercase tracking-[0.45em] text-[#d8b887]">
                About Raahii
              </span>

              <span className="h-px w-12 bg-[#d8b887]/70" />
            </div>

            <h1 className="font-serif text-[3.5rem] font-light leading-[0.9] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[6.8rem]">
              We&apos;re Building
              <br />
              More Than a
              <br />
              <span className="text-[#d8b887]">
                Digital Agency.
              </span>
            </h1>

            <p className="mt-8 max-w-[580px] font-serif text-base leading-7 text-[#f7f3e8]/75 sm:text-lg">
              We&apos;re building a hospitality growth company designed around
              one simple belief — great hotels deserve more than bookings.
              They deserve a brand, a story and a reason for guests to return.
            </p>

            <Link
              href="#beginning"
              className="mt-8 inline-flex items-center gap-5 rounded-full bg-[#f3dfb5] px-7 py-4 text-xs uppercase tracking-[0.18em] text-[#17352d] transition-all duration-300 hover:-translate-y-1"
            >
              Discover Our Story
              <span className="text-base">↓</span>
            </Link>

          </div>

          <div className="absolute bottom-8 right-7 hidden max-w-[150px] text-right md:block lg:right-16">
            <p className="font-serif text-lg italic text-[#f7f3e8]/75">
              Better
              <br />
              Stays.
              <br />
              Brighter
              <br />
              Tomorrows.
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
                  The Beginning
                </span>
              </div>

              <h2 className="mt-8 max-w-[570px] font-serif text-4xl font-light leading-[0.95] tracking-[-0.03em] sm:text-5xl md:text-6xl">
                It Started With a
                <br />
                Simple Observation.
              </h2>

              <p className="mt-7 max-w-[500px] text-sm leading-7 text-[#33433b]/75">
                We noticed that many great hotels — with amazing locations,
                stories and hospitality — were still struggling. Not because
                they lacked quality, but because they lacked the right digital
                presence, strategy and systems to grow.
              </p>

              <p className="mt-6 font-serif text-xl italic text-[#90616a]">
                Good Hotels.
                <br />
                Deserve Better Journeys.
              </p>

            </div>


            <div className="grid gap-3 sm:grid-cols-3">

              <StoryCard
                number="01"
                title="The Problem"
                text="Hotels were becoming increasingly dependent on OTAs, changing algorithms and scattered marketing."
                image={images.beginning}
              />

              <StoryCard
                number="02"
                title="The Realization"
                text="A hotel doesn't just need visibility. It needs a relationship that lasts beyond the booking."
                image={images.name}
              />

              <StoryCard
                number="03"
                title="The Idea"
                text="A Raahii Digital hospitality ecosystem connecting strategy, technology, marketing and guest experience."
                image={images.belief}
              />

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
          style={{ backgroundImage: `url('${images.name}')` }}
        />

        <div className="absolute inset-0 bg-[#12221c]/75" />

        <div className="relative z-10 mx-auto max-w-[1400px]">

          <div className="flex items-center gap-4">
            <span className="font-serif text-sm text-[#d8b887]">
              03
            </span>

            <span className="h-px w-8 bg-[#d8b887]/60" />

            <span className="text-[9px] uppercase tracking-[0.4em] text-[#d8b887]/80">
              What “Raahii” Means
            </span>
          </div>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">

            <div>

              <h2 className="max-w-[650px] font-serif text-5xl font-light leading-[0.92] tracking-[-0.04em] md:text-7xl">
                Every Journey
                <br />
                Needs a Guide.
              </h2>

              <p className="mt-5 font-serif text-lg italic text-[#d8b887]">
                Raahii — traveller / one who journeys.
              </p>

              <p className="mt-7 max-w-[570px] text-sm leading-7 text-[#f7f3e8]/70">
                Hospitality is a journey too. A guest discovers a hotel,
                considers it, books it, arrives, experiences it, remembers it
                and returns. Raahii exists to help hotels become better
                guides throughout that journey.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-5 border-t border-[#f7f3e8]/15 pt-7 sm:grid-cols-4 lg:border-t-0 lg:border-l lg:pl-10">

              {["Discover", "Consider", "Book", "Experience", "Remember", "Return"].map(
                (item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="font-serif text-xs text-[#d8b887]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#f7f3e8]/65">
                      {item}
                    </span>
                  </div>
                )
              )}

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
              The Raahii Way
            </span>
          </div>

          <div className="mt-7 grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">

            <div>
              <h2 className="font-serif text-4xl font-light leading-[0.95] tracking-[-0.03em] sm:text-5xl">
                From Discovery
                <br />
                to Loyalty —
                <br />
                and Beyond.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-6 text-[#33433b]/65">
                A complete approach to help hotels grow, sustainably.
              </p>
            </div>

            <div className="grid gap-0 md:grid-cols-3">

              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`border-[#263a31]/15 p-6 ${
                    index !== 2 ? "md:border-r" : ""
                  }`}
                >

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#a56b3a]/45 text-lg text-[#a56b3a]">
                    {value.icon}
                  </div>

                  <p className="mt-5 text-[8px] uppercase tracking-[0.35em] text-[#a56b3a]">
                    0{index + 1}
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
                  What We Believe
                </span>
              </div>

              <h2 className="mt-7 font-serif text-5xl font-light leading-[0.92] md:text-6xl">
                A Few Things
                <br />
                <span className="text-[#d8b887]">
                  We Believe.
                </span>
              </h2>

              <div className="mt-8 space-y-3">

                {beliefs.map((belief) => (
                  <p
                    key={belief}
                    className="flex items-center gap-4 border-b border-[#f7f3e8]/10 pb-3 font-serif text-base text-[#f7f3e8]/85"
                  >
                    <span className="text-[#d8b887]">→</span>
                    {belief}
                  </p>
                ))}

              </div>

            </div>

          </div>

          <div
            className="min-h-[330px] bg-cover bg-center"
            style={{ backgroundImage: `url('${images.belief}')` }}
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
              What We&apos;re Building
            </span>
          </div>

          <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <h2 className="max-w-[650px] font-serif text-4xl font-light leading-[0.94] tracking-[-0.03em] sm:text-5xl md:text-6xl">
              From Growth Partner
              <br />
              to Hospitality Ecosystem.
            </h2>

            <p className="max-w-xs text-xs leading-5 text-[#68736d]">
              A bigger, bolder tomorrow — for hotels, travellers and
              destinations.
            </p>

          </div>

          <div className="mt-12 grid gap-0 md:grid-cols-3">

            {futureStages.map((stage, index) => (
              <div
                key={stage.number}
                className={`relative border-[#263a31]/15 px-1 py-7 md:px-8 ${
                  index !== 2 ? "md:border-r" : ""
                }`}
              >

                <div className="flex items-center justify-between">

                  <span className="font-serif text-sm text-[#a56b3a]">
                    {stage.number}
                  </span>

                  {index !== 2 && (
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
              The People Behind Raahii
            </span>
          </div>

          <div className="mt-7 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <h2 className="max-w-[700px] font-serif text-4xl font-light leading-[0.94] sm:text-5xl md:text-6xl">
              Built By People Who
              <br />
              See Hospitality Differently.
            </h2>

            <p className="max-w-[220px] text-xs leading-5 text-[#f7f3e8]/50">
              Different skills.
              <br />
              Same purpose.
            </p>

          </div>


          <div className="mt-12 grid gap-5 md:grid-cols-2">

            <PersonCard
              image={images.jigar}
              name="Jigar"
              role="Co-Founder / Creative & Digital"
              text="A visual storyteller and digital creator at heart. Jigar brings ideas to life through content and strategy, helping hospitality brands look as good as they feel."
            />

            <PersonCard
              image={images.chitraj}
              name="Chitraj"
              role="Founder / Hospitality Growth"
              text="An entrepreneur and strategist who understands business, people and possibilities. Chitraj helps hotels grow beyond OTAs and build brands that last."
            />

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
              How We Work
            </span>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">

            <h2 className="font-serif text-4xl font-light leading-[0.94] sm:text-5xl">
              We Don&apos;t Work
              <br />
              From Templates.
            </h2>

            <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">

              {workSteps.map((step, index) => (
                <div
                  key={step.title}
                  className={`border-[#263a31]/15 px-5 py-5 ${
                    index !== 3 ? "lg:border-r" : ""
                  }`}
                >

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#a56b3a]/40 text-[#a56b3a]">
                    {step.icon}
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
              Our World
            </span>
          </div>

          <div className="mt-7 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <h2 className="font-serif text-4xl font-light leading-[0.94] sm:text-5xl">
              Hospitality Doesn&apos;t
              <br />
              Happen Behind a Desk.
            </h2>

            <p className="max-w-[240px] text-xs leading-5 text-[#f7f3e8]/50">
              That&apos;s why we go where the experience happens.
            </p>

          </div>


          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">

            {worldImages.map((image, index) => {
              const labels = [
                "People",
                "Places",
                "Culture",
                "Experiences",
              ];

              return (
                <div
                  key={image}
                  className="group relative aspect-[0.82] overflow-hidden rounded-[18px]"
                >

                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${image}')` }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />

                  <div className="absolute bottom-5 left-5">
                    <p className="text-[8px] uppercase tracking-[0.35em] text-[#d8b887]">
                      0{index + 1}
                    </p>

                    <p className="mt-1 font-serif text-xl">
                      {labels[index]}
                    </p>
                  </div>

                </div>
              );
            })}

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
                  Raahii Companion
                </span>
              </div>

              <h2 className="mt-7 font-serif text-4xl font-light leading-[0.94] sm:text-5xl md:text-6xl">
                The Journey Doesn&apos;t
                <br />
                End With a Booking.
              </h2>

              <p className="mt-6 max-w-[520px] text-sm leading-7 text-[#33433b]/70">
                Raahii Companion helps guests discover the destination beyond
                their hotel room — with curated itineraries, local experiences
                and on-ground support.
              </p>

              <p className="mt-6 max-w-[480px] font-serif text-xl italic text-[#90616a]">
                Stay → Discover → Experience → Remember
              </p>

            </div>


            <div className="relative overflow-hidden rounded-[26px] bg-[#172a23] p-8 text-[#f7f3e8] md:p-10">

              <p className="text-[9px] uppercase tracking-[0.4em] text-[#d8b887]">
                One Guest. One Journey.
              </p>

              <div className="mt-8 space-y-5">

                {[
                  ["01", "Stay", "A place to begin."],
                  ["02", "Discover", "A city to understand."],
                  ["03", "Experience", "Moments to remember."],
                  ["04", "Remember", "A reason to return."],
                ].map(([number, title, text]) => (
                  <div
                    key={number}
                    className="flex items-center gap-5 border-b border-[#f7f3e8]/10 pb-5"
                  >

                    <span className="font-serif text-sm text-[#d8b887]">
                      {number}
                    </span>

                    <div>
                      <p className="font-serif text-xl">
                        {title}
                      </p>

                      <p className="mt-1 text-xs text-[#f7f3e8]/50">
                        {text}
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
                  Our Future
                </span>
              </div>

              <h2 className="mt-7 font-serif text-5xl font-light leading-[0.92] md:text-6xl">
                We&apos;re Just
                <br />
                Getting Started.
              </h2>

            </div>


            <div className="relative">

              <div className="absolute left-[13px] top-2 bottom-2 w-px bg-[#a56b3a]/25" />

              <div className="space-y-9">

                {[
                  ["2026", "Raahii begins with hospitality growth."],
                  ["Next", "More properties. More cities. More technology."],
                  ["Vision", "A connected hospitality + travel ecosystem."],
                ].map(([year, text]) => (
                  <div key={year} className="relative flex gap-7">

                    <div className="relative z-10 mt-1 h-7 w-7 rounded-full border border-[#a56b3a]/50 bg-[#f5f0e6]" />

                    <div>
                      <p className="text-[8px] uppercase tracking-[0.35em] text-[#a56b3a]">
                        {year}
                      </p>

                      <p className="mt-2 max-w-[480px] font-serif text-xl leading-tight">
                        {text}
                      </p>
                    </div>

                  </div>
                ))}

              </div>

              <p className="mt-10 text-right font-serif text-lg italic text-[#90616a]">
                The journey
                <br />
                continues.
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
          style={{ backgroundImage: `url('${images.future}')` }}
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-[1400px] flex-col justify-between px-6 py-16 md:px-10 md:py-20 lg:px-16">

          <div className="flex items-center gap-4">

            <span className="text-[9px] uppercase tracking-[0.4em] text-[#d8b887]">
              Let&apos;s Build the Future Together
            </span>

            <span className="h-px w-10 bg-[#d8b887]/60" />

          </div>


          <div>

            <h2 className="max-w-[760px] font-serif text-5xl font-light leading-[0.9] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[6.5rem]">
              Every Great Journey
              <br />
              <span className="text-[#d8b887]">
                Begins Somewhere.
              </span>
            </h2>

            <p className="mt-7 max-w-[520px] text-sm leading-7 text-[#f7f3e8]/70 sm:text-base">
              Whether you&apos;re building a hotel, growing a hospitality
              brand, or simply believe there is a better way forward —
              we&apos;d love to build what&apos;s next with you.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <Link
                href="/#contact"
                className="inline-flex h-14 items-center justify-center gap-5 rounded-full bg-[#f3dfb5] px-7 text-xs uppercase tracking-[0.2em] text-[#17352d] transition-all duration-300 hover:-translate-y-1"
              >
                Work With Raahii
                <span className="text-base">→</span>
              </Link>

              <Link
                href="/careers"
                className="inline-flex h-14 items-center justify-center gap-5 rounded-full border border-[#f7f3e8]/35 px-7 text-xs uppercase tracking-[0.2em] text-[#f7f3e8] transition-all duration-300 hover:bg-[#f7f3e8] hover:text-[#17352d]"
              >
                Join the Journey
                <span className="text-base">→</span>
              </Link>

            </div>

          </div>


          <div className="flex items-end justify-between border-t border-[#f7f3e8]/15 pt-7">

            <div>
              <p className="font-serif text-2xl tracking-[0.18em]">
                RAAHII
              </p>

              <p className="mt-1 text-[7px] uppercase tracking-[0.35em] text-[#d8b887]">
                Hospitality Growth Partner
              </p>
            </div>

            <p className="hidden text-right font-serif text-lg italic text-[#f7f3e8]/60 sm:block">
              Better Stays.
              <br />
              Brighter Tomorrows.
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
          style={{ backgroundImage: `url('${image}')` }}
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
}: {
  image: string;
  name: string;
  role: string;
  text: string;
}) {
  return (
    <article className="grid overflow-hidden rounded-[18px] border border-[#f7f3e8]/10 bg-[#17231e] sm:grid-cols-[0.8fr_1.2fr]">

      <div className="relative min-h-[320px]">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${image}')` }}
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
          href="#contact"
          className="mt-7 inline-flex w-fit items-center gap-3 text-[8px] uppercase tracking-[0.3em] text-[#d8b887]"
        >
          View Full Profile
          <span className="text-sm">→</span>
        </Link>

      </div>

    </article>
  );
}