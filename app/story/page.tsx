"use client";

import Navbar from "../components/Navbar";

const raahiiJourney = [
  {
    number: "01",
    title: "GET",
    subtitle: "THE GUEST",
    description: "Attract the right travellers to your hotel.",
    icon: "♧",
  },
  {
    number: "02",
    title: "SERVE",
    subtitle: "THE GUEST",
    description: "Create meaningful experiences that delight.",
    icon: "⌂",
  },
  {
    number: "03",
    title: "BUILD",
    subtitle: "THE BRAND",
    description: "Turn great stays into long-term relationships.",
    icon: "↗",
  },
];

export default function StoryPage() {
  return (
    <main className="m-0 w-full overflow-x-hidden bg-[#f4f0e7] text-[#151713]">

      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-[650px] overflow-hidden bg-[#ddd5c7] lg:min-h-[700px]">

        {/* IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/story/hero.jpg')",
          }}
        />

        {/* LEFT LIGHT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#eee9df]/95 via-[#eee9df]/75 to-transparent" />

        {/* BOTTOM OVERLAY */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/45 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[650px] max-w-[1450px] items-center px-6 pb-20 pt-28 sm:px-10 lg:min-h-[700px] lg:px-16">

          <div className="max-w-[620px]">

            <div className="mb-7 flex items-center gap-4">
              <span className="text-[9px] uppercase tracking-[0.42em] text-[#5d625b]">
                Our Story
              </span>

              <span className="h-px w-10 bg-[#65675f]" />
            </div>

            <h1 className="font-serif text-[3.7rem] font-light leading-[0.91] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[6rem]">
              A different
              <br />
              way forward
              <br />
              <span className="text-[#8d6462]">
                for hospitality.
              </span>
            </h1>

            <p className="mt-7 max-w-[430px] font-serif text-base leading-7 text-[#4f524c] sm:text-lg">
              People remember how a place made them feel.
              <br />
              That&apos;s where real growth begins.
            </p>

          </div>

        </div>

        {/* RIGHT LABEL */}
        <div className="absolute bottom-10 right-6 z-10 sm:right-10 lg:right-16">
          <div className="border-l border-[#f5eee2]/50 pl-4">
            <p className="text-[8px] uppercase leading-5 tracking-[0.3em] text-[#f7f3e8]/80">
              Better
              <br />
              Guests
              <br />
              Brighter
              <br />
              Brands
            </p>
          </div>
        </div>

      </section>


      {/* =====================================================
          01 — WHY WE EXIST
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f4f0e7]">

        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">

          {/* TEXT */}
          <div className="flex flex-col justify-center px-6 py-16 sm:px-10 md:py-20 lg:px-16">

            <div className="flex items-center gap-4">
              <span className="font-serif text-xs text-[#444740]">
                01
              </span>

              <span className="h-px w-7 bg-[#77786f]" />

              <span className="text-[8px] uppercase tracking-[0.35em] text-[#77786f]">
                Why We Exist
              </span>
            </div>

            <div className="mt-7 grid gap-8 md:grid-cols-[1.15fr_0.85fr]">

              <h2 className="font-serif text-3xl font-light leading-[0.98] tracking-[-0.025em] sm:text-4xl md:text-[2.8rem]">
                Hotels don&apos;t need
                <br />
                more bookings.
                <br />
                <span className="text-[#90616a]">
                  They need more reasons to come back.
                </span>
              </h2>

              <p className="max-w-[280px] text-xs leading-5 text-[#60625b]">
                We believe hospitality is bigger than transactions. It&apos;s
                about creating moments that stay with people — and bring them
                back, again and again.
              </p>

            </div>

          </div>

          {/* IMAGE */}
          <div
            className="min-h-[320px] bg-cover bg-center lg:min-h-[360px]"
            style={{
              backgroundImage: "url('/story/why-we-exist.jpg')",
            }}
          />

        </div>

      </section>


      {/* =====================================================
          02 — THE PROBLEM
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#10251f] text-[#f7f3e8]">

        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">

          {/* IMAGE */}
          <div
            className="min-h-[350px] bg-cover bg-center lg:min-h-[430px]"
            style={{
              backgroundImage: "url('/story/problem.jpg')",
            }}
          />

          {/* CONTENT */}
          <div className="flex flex-col justify-center px-6 py-16 sm:px-10 md:py-20 lg:px-16">

            <div className="flex items-center gap-4">
              <span className="font-serif text-xs text-[#d9c7ad]">
                02
              </span>

              <span className="h-px w-7 bg-[#d9c7ad]/50" />

              <span className="text-[8px] uppercase tracking-[0.35em] text-[#d9c7ad]/70">
                The Problem
              </span>
            </div>

            <h2 className="mt-7 max-w-[600px] font-serif text-4xl font-light leading-[0.94] tracking-[-0.03em] sm:text-5xl">
              The guest journey
              <br />
              became fragmented.
            </h2>

            {/* JOURNEY LINE */}
            <div className="mt-9 flex max-w-[580px] flex-wrap items-center gap-y-5">

              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d9c7ad]/40 text-sm">
                  +
                </span>

                <span className="text-[8px] uppercase tracking-[0.2em] text-[#d9c7ad]/65">
                  OTA
                </span>
              </div>

              <span className="mx-3 text-[#d9c7ad]/50">
                →
              </span>

              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d9c7ad]/40 text-sm">
                  →
                </span>

                <span className="text-[8px] uppercase tracking-[0.2em] text-[#d9c7ad]/65">
                  Booking
                </span>
              </div>

              <span className="mx-3 text-[#d9c7ad]/50">
                →
              </span>

              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d9c7ad]/40 text-sm">
                  □
                </span>

                <span className="text-[8px] uppercase tracking-[0.2em] text-[#d9c7ad]/65">
                  Check-in
                </span>
              </div>

              <span className="mx-3 text-[#d9c7ad]/50">
                →
              </span>

              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d9c7ad]/40 text-sm">
                  ◇
                </span>

                <span className="text-[8px] uppercase tracking-[0.2em] text-[#d9c7ad]/65">
                  Checkout
                </span>
              </div>

            </div>

            <p className="mt-8 font-serif text-lg italic text-[#d9a878]">
              But the relationship ends too early.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          03 — OUR BELIEF
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f4f0e7]">

        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">

          {/* TEXT */}
          <div className="flex flex-col justify-center px-6 py-16 sm:px-10 md:py-20 lg:px-16">

            <div className="flex items-center gap-4">
              <span className="font-serif text-xs text-[#444740]">
                03
              </span>

              <span className="h-px w-7 bg-[#77786f]" />

              <span className="text-[8px] uppercase tracking-[0.35em] text-[#77786f]">
                Our Belief
              </span>
            </div>

            <h2 className="mt-7 max-w-[560px] font-serif text-4xl font-light leading-[0.94] tracking-[-0.03em] sm:text-5xl md:text-[3.5rem]">
              A booking is only
              <br />
              <span className="text-[#90616a]">
                the beginning.
              </span>
            </h2>

            <p className="mt-7 max-w-[420px] text-sm leading-6 text-[#5d5f59]">
              Every guest is a relationship in the making — and every stay is
              an opportunity to create a lasting connection.
            </p>

          </div>

          {/* IMAGE */}
          <div
            className="min-h-[330px] bg-cover bg-center lg:min-h-[390px]"
            style={{
              backgroundImage: "url('/story/belief.jpg')",
            }}
          />

        </div>

      </section>


      {/* =====================================================
          04 — THE RAAHII WAY
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#10251f] px-6 py-20 text-[#f7f3e8] sm:px-10 md:py-24 lg:px-16">

        {/* subtle background */}
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(215,190,153,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(215,190,153,.08) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[1250px]">

          {/* HEADER */}
          <div className="text-center">

            <div className="flex items-center justify-center gap-4">
              <span className="font-serif text-xs text-[#d9c7ad]">
                04
              </span>

              <span className="h-px w-7 bg-[#d9c7ad]/50" />

              <span className="text-[8px] uppercase tracking-[0.35em] text-[#d9c7ad]/70">
                The Raahii Way
              </span>
            </div>

            <h2 className="mt-7 font-serif text-4xl font-light sm:text-5xl md:text-6xl">
              One journey.
            </h2>

            <p className="mt-3 font-serif text-lg italic text-[#d9a878]">
              Three moments that matter.
            </p>

          </div>


          {/* THREE STAGES */}
          <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">

            {raahiiJourney.map((stage, index) => (
              <div
                key={stage.number}
                className="relative text-center"
              >

                {/* connector */}
                {index < raahiiJourney.length - 1 && (
                  <div className="absolute right-[-15%] top-8 hidden w-[30%] items-center md:flex">
                    <div className="h-px w-full bg-[#d9c7ad]/20" />
                    <span className="ml-[-4px] text-[#d9a878]">
                      →
                    </span>
                  </div>
                )}

                {/* icon */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#d9a878]/60">
                  <span className="font-serif text-2xl text-[#d9c7ad]">
                    {stage.icon}
                  </span>
                </div>

                {/* title */}
                <h3 className="mt-6 font-serif text-2xl font-light leading-none">
                  {stage.title}
                  <br />
                  {stage.subtitle}
                </h3>

                {/* description */}
                <p className="mx-auto mt-5 max-w-[230px] text-xs leading-5 text-[#f7f3e8]/55">
                  {stage.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          05 — BEYOND THE OTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f4f0e7]">

        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">

          {/* TEXT */}
          <div className="flex flex-col justify-center px-6 py-16 sm:px-10 md:py-20 lg:px-16">

            <div className="flex items-center gap-4">
              <span className="font-serif text-xs text-[#444740]">
                05
              </span>

              <span className="h-px w-7 bg-[#77786f]" />

              <span className="text-[8px] uppercase tracking-[0.35em] text-[#77786f]">
                Beyond the OTA
              </span>
            </div>

            <h2 className="mt-7 max-w-[650px] font-serif text-3xl font-light leading-[0.96] tracking-[-0.03em] sm:text-4xl md:text-[3rem]">

              OTAs can bring the guest.

              <br />

              <span className="italic text-[#90616a]">
                We help you build the relationship.
              </span>

            </h2>

            <p className="mt-7 max-w-[480px] text-sm leading-6 text-[#5d5f59]">
              They bring the traveller to your door. We help you turn them
              into loyal guests, direct bookings and brand advocates.
            </p>

          </div>

          {/* IMAGE */}
          <div
            className="min-h-[340px] bg-cover bg-center lg:min-h-[390px]"
            style={{
              backgroundImage: "url('/story/beyond-ota.jpg')",
            }}
          />

        </div>

      </section>


      {/* =====================================================
          06 — MINDS BEHIND RAAHII
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#151713] text-[#f7f3e8]">

        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

          {/* TEXT */}
          <div className="flex flex-col justify-center px-6 py-16 sm:px-10 md:py-20 lg:px-16">

            <div className="flex items-center gap-4">
              <span className="font-serif text-xs text-[#d9c7ad]">
                06
              </span>

              <span className="h-px w-7 bg-[#d9c7ad]/50" />

              <span className="text-[8px] uppercase tracking-[0.35em] text-[#d9c7ad]/70">
                The Minds Behind Raahii
              </span>
            </div>

            <h2 className="mt-7 font-serif text-4xl font-light leading-[0.94] sm:text-5xl">
              Jigar
              <br />
              <span className="text-[#d9a878]">+</span>
              <br />
              Chitraj
            </h2>

            <p className="mt-7 max-w-[380px] text-sm leading-6 text-[#f7f3e8]/55">
              Two minds. One shared belief — a more meaningful future for
              hospitality.
            </p>

          </div>


          {/* FOUNDERS */}
          <div className="grid grid-cols-2">

            {/* JIGAR */}
            <div className="relative min-h-[430px] overflow-hidden border-l border-[#f7f3e8]/10">

              <div
                className="absolute inset-0 bg-cover bg-center grayscale"
                style={{
                  backgroundImage: "url('/story/jigar.jpg')",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

              <div className="absolute bottom-7 left-6 right-4">
                <p className="font-serif text-2xl">
                  Jigar Joshi
                </p>

                <p className="mt-2 text-[7px] uppercase tracking-[0.25em] text-[#d9a878]">
                  Co-Founder
                </p>
              </div>

            </div>


            {/* CHITRAJ */}
            <div className="relative min-h-[430px] overflow-hidden border-l border-[#f7f3e8]/10">

              <div
                className="absolute inset-0 bg-cover bg-center grayscale"
                style={{
                  backgroundImage: "url('/story/chitraj.jpg')",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

              <div className="absolute bottom-7 left-6 right-4">
                <p className="font-serif text-2xl">
                  Chitraj Mehta
                </p>

                <p className="mt-2 text-[7px] uppercase tracking-[0.25em] text-[#d9a878]">
                  Co-Founder
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          07 — OUR PROMISE
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f4f0e7]">

        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">

          {/* MAIN STATEMENT */}
          <div className="px-6 py-16 sm:px-10 md:py-20 lg:px-16">

            <div className="flex items-center gap-4">
              <span className="font-serif text-xs text-[#444740]">
                07
              </span>

              <span className="h-px w-7 bg-[#77786f]" />

              <span className="text-[8px] uppercase tracking-[0.35em] text-[#77786f]">
                Our Promise
              </span>
            </div>

            <h2 className="mt-8 max-w-[900px] font-serif text-3xl font-light leading-[0.98] tracking-[-0.03em] sm:text-4xl md:text-5xl lg:text-[4.2rem]">

              When a traveller thinks of the destination,

              <br />

              <span className="italic text-[#90616a]">
                your hotel should be the one they remember.
              </span>

            </h2>

          </div>


          {/* SUPPORTING COPY */}
          <div className="flex items-center border-t border-[#24251f]/10 px-6 py-10 sm:px-10 lg:border-l lg:border-t-0 lg:px-12">

            <p className="max-w-[300px] text-xs leading-6 text-[#60625b]">
              We&apos;re here to help you create stronger guest relationships,
              better experiences and brighter tomorrows for your brand.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative min-h-[600px] overflow-hidden text-[#f7f3e8]">

        {/* IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/story/final.jpg')",
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto flex min-h-[600px] max-w-[1450px] items-end justify-between px-6 pb-14 pt-24 sm:px-10 lg:px-16 lg:pb-16">

          {/* LEFT */}
          <div className="max-w-[650px]">

            <span className="text-[8px] uppercase tracking-[0.45em] text-[#d9c7ad]/80">
              What&apos;s Next
            </span>

            <h2 className="mt-6 font-serif text-[3.5rem] font-light leading-[0.9] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-[5.3rem]">
              Let&apos;s build
              <br />
              what&apos;s next.
            </h2>

          </div>


          {/* CTA */}
          <a
            href="https://forms.gle/Rbb86sVxxU2fuetC7"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              mb-1
              hidden
              h-14
              items-center
              gap-6
              rounded-sm
              bg-[#f7f3e8]
              px-7
              text-xs
              text-[#17211c]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
              sm:inline-flex
            "
          >
            <span>
              Let&apos;s talk
            </span>

            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>


          {/* RIGHT LABEL */}
          <div className="absolute bottom-8 right-6 sm:right-10 lg:right-16">

            <div className="border-l border-[#f7f3e8]/40 pl-4">

              <p className="text-[7px] uppercase leading-5 tracking-[0.3em] text-[#f7f3e8]/75">
                People
                <br />
                Places
                <br />
                Possibilities
              </p>

            </div>

          </div>

        </div>


        {/* MOBILE CTA */}
        <div className="absolute bottom-12 left-6 z-20 sm:hidden">

          <a
            href="https://forms.gle/Rbb86sVxxU2fuetC7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-5 bg-[#f7f3e8] px-6 text-xs text-[#17211c]"
          >
            <span>
              Let&apos;s talk
            </span>

            <span className="text-lg">
              →
            </span>
          </a>

        </div>

      </section>

    </main>
  );
}