"use client";

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at Raahii Digital",
  description:
    "Explore opportunities to build what's next at Raahii Digital, a hospitality growth partner working across creativity, technology, marketing and travel.",
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    title: "Careers at Raahii Digital",
    description:
      "Don't just build a career. Build what's next.",
    type: "website",
  },
};

const workWays = [
  {
    number: "01",
    title: "GET THE GUEST",
    description:
      "Marketing, content, SEO, performance & discovery.",
    result: "More visibility. More bookings.",
    icon: "⌖",
  },
  {
    number: "02",
    title: "SERVE THE GUEST",
    description:
      "Digital experiences, communication & guest journeys.",
    result: "Happier guests. Stronger reviews.",
    icon: "⌂",
  },
  {
    number: "03",
    title: "BUILD THE BRAND",
    description:
      "Strategy, storytelling, positioning & long-term growth.",
    result: "Not just stays. Lasting brands.",
    icon: "✦",
  },
];

const workPrinciples = [
  {
    number: "01",
    title: "Own Your Work",
    description:
      "You won't just execute tasks. You'll own outcomes.",
    icon: "◎",
  },
  {
    number: "02",
    title: "Learn Fast",
    description:
      "Hospitality, marketing, tech, content — you'll work across disciplines.",
    icon: "ϟ",
  },
  {
    number: "03",
    title: "Build From Scratch",
    description:
      "We're still building. Your ideas can actually shape the company.",
    icon: "✧",
  },
  {
    number: "04",
    title: "Work Close to Reality",
    description:
      "Hotels, shoots, campaigns, guests and real businesses — not just dashboards.",
    icon: "⌖",
  },
  {
    number: "05",
    title: "Think Like an Owner",
    description:
      "We value initiative over instructions.",
    icon: "♧",
  },
];

const lookingFor = [
  {
    title: "Think Beyond the Brief",
    description:
      "Don't just execute what you're given. Ask why it matters.",
    icon: "◎",
  },
  {
    title: 'Ask "Why?" Before "How?"',
    description:
      "Understand the problem before jumping into execution.",
    icon: "?",
  },
  {
    title: "Notice Details Others Miss",
    description:
      "Small details often create the biggest difference.",
    icon: "⌁",
  },
  {
    title: "Turn Ideas Into Execution",
    description:
      "Can you take a thought and actually make it happen?",
    icon: "⚙",
  },
  {
    title: "Are Comfortable Learning",
    description:
      "Hospitality, marketing, content and technology keep changing.",
    icon: "▱",
  },
  {
    title: "Want Responsibility",
    description:
      "Not just a job. A chance to build something.",
    icon: "✦",
  },
];

const positions = [
  {
    title: "SEO Specialist",
    type: "Full-time",
    location: "Udaipur / Remote",
    description:
      "Help hotels become discoverable, trusted and bookable through organic search.",
    tags: ["Technical SEO", "On-page SEO", "GSC", "GA4", "Content Strategy"],
  },
  {
    title: "Social Media Manager",
    type: "Full-time",
    location: "Udaipur",
    description:
      "Plan, create and manage content that brings hospitality brands to life across social platforms.",
    tags: ["Instagram", "Content Planning", "Reels", "Analytics", "Copywriting"],
  },
  {
    title: "Video Editor",
    type: "Full-time",
    location: "Udaipur / Remote",
    description:
      "Edit engaging reels, property videos and brand films for hospitality clients.",
    tags: ["Premiere Pro", "CapCut", "Color Grading", "Storytelling", "Short Form"],
  },
];

const teamStories = [
  {
    name: "Aman",
    role: "Content Creator",
    quote:
      "I joined an intent. Today I manage client shoots.",
    image: "/hero-bg.jpeg",
  },
  {
    name: "Ritika",
    role: "Social Media Manager",
    quote:
      "Working with hotel founders taught me real business.",
    image: "/services-hero.jpeg",
  },
  {
    name: "Karan",
    role: "Video Editor",
    quote:
      "Every project feels like a new destination.",
    image: "/philosophy-bg.jpeg",
  },
  {
    name: "Ishita",
    role: "Growth Associate",
    quote:
      "It's not just a job. It's a lifestyle I'm learning.",
    image: "/services/services-bottom.jpg",
  },
];

const values = [
  {
    title: "Curiosity",
    description: "We keep learning.",
    icon: "♧",
  },
  {
    title: "Ownership",
    description: "If you see it, own it.",
    icon: "⌁",
  },
  {
    title: "Craft",
    description: "Details matter.",
    icon: "✧",
  },
  {
    title: "Hospitality",
    description: "People come first.",
    icon: "♡",
  },
  {
    title: "Courage",
    description: "Try things others haven't.",
    icon: "⌖",
  },
  {
    title: "Growth",
    description: "For our clients, guests and ourselves.",
    icon: "↗",
  },
];

export default function CareersPage() {
  return (
    <main className="overflow-x-hidden bg-[#f4f0e7] text-[#17352d]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative min-h-[680px] overflow-hidden bg-[#10110f] text-[#f7f3e8] md:min-h-[760px]">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/careers-hero.jpeg')",
          }}
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-black/10" />

        <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[680px] max-w-[1500px] items-end px-6 pb-16 pt-36 sm:px-10 md:min-h-[760px] md:pb-20 lg:px-16">

          <div className="max-w-[700px]">

            <div className="mb-6 flex items-center gap-4">

              <span className="text-[9px] uppercase tracking-[0.45em] text-[#d8b887]">
                Careers at Raahii
              </span>

              <span className="h-px w-10 bg-[#d8b887]/70" />

            </div>

            <h1 className="font-serif text-[3.6rem] font-light leading-[0.9] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[6.4rem]">

              Don&apos;t Just
              <br />
              Build a Career.
              <br />

              <span className="italic text-[#d8b887]">
                Build What&apos;s Next.
              </span>

            </h1>

            <p className="mt-7 max-w-[560px] text-sm leading-7 text-[#f7f3e8]/75 sm:text-base sm:leading-8">
              We&apos;re building a new kind of hospitality growth company
              where technology, creativity, marketing and local experiences
              come together.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <a
                href="#positions"
                className="inline-flex h-12 items-center justify-center gap-4 rounded-full bg-[#d8b887] px-7 text-xs font-medium text-[#17352d] transition-all hover:-translate-y-1"
              >
                View Open Roles
                <span>→</span>
              </a>

              <a
                href="#application"
                className="inline-flex h-12 items-center justify-center gap-4 rounded-full border border-[#f7f3e8]/60 px-7 text-xs text-[#f7f3e8] transition-all hover:bg-[#f7f3e8] hover:text-[#17352d]"
              >
                Send Your Profile
                <span>→</span>
              </a>

            </div>

          </div>

          <div className="absolute bottom-10 right-6 hidden md:block lg:right-16">

            <p className="text-right text-[8px] uppercase leading-6 tracking-[0.35em] text-[#f7f3e8]/65">
              Good Hotels
              <br />
              Better Journeys
              <br />
              Brighter Tomorrow
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          WHY RAAHII
      ====================================================== */}

      <section className="bg-[#f4f0e7] px-6 py-16 sm:px-8 md:py-24 lg:px-16">

        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr]">

            <div>

              <div className="mb-6 flex items-center gap-4">

                <span className="text-[9px] uppercase tracking-[0.4em] text-[#7a6757]">
                  Why Raahii?
                </span>

                <span className="h-px w-10 bg-[#17352d]/30" />

              </div>

              <h2 className="max-w-[700px] font-serif text-4xl font-light leading-[0.95] tracking-[-0.035em] sm:text-5xl md:text-6xl">

                We&apos;re Not Building
                <br />

                <span className="italic text-[#8d6462]">
                  Another Agency.
                </span>

              </h2>

              <p className="mt-6 max-w-[620px] text-sm leading-7 text-[#565b53]">
                Raahii Digital is building the bridge between hospitality
                and the digital world. We work with hotels, resorts, villas
                and stays to help them get discovered, get booked and build
                brands people remember.
              </p>

            </div>


            <div className="flex items-end justify-end">

              <p className="max-w-[270px] text-right font-serif text-xl italic leading-7 text-[#7a6757]">
                People.
                <br />
                Places.
                <br />
                Possibilities.
              </p>

            </div>

          </div>


          <div className="mt-12 grid gap-3 md:grid-cols-3">

            {workWays.map((item) => (

              <article
                key={item.number}
                className="rounded-[18px] border border-[#17352d]/10 bg-[#ebe5d9] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#b6815e]/50"
              >

                <div className="flex items-start justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#b6815e]/50 text-xl text-[#8d6462]">
                    {item.icon}
                  </div>

                  <span className="font-serif text-xs text-[#17352d]/35">
                    {item.number}
                  </span>

                </div>

                <h3 className="mt-7 font-serif text-xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs leading-5 text-[#5f625c]">
                  {item.description}
                </p>

                <p className="mt-5 text-[8px] uppercase tracking-[0.3em] text-[#a06f3f]">
                  {item.result}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          HOW WE WORK
      ====================================================== */}

      <section className="bg-[#10110f] px-6 py-16 text-[#f7f3e8] sm:px-8 md:py-24 lg:px-16">

        <div className="mx-auto max-w-[1400px]">

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <div>

              <p className="text-[9px] uppercase tracking-[0.4em] text-[#d8b887]">
                What It Feels Like to Work Here
              </p>

              <h2 className="mt-5 font-serif text-4xl font-light leading-none sm:text-5xl md:text-6xl">
                You&apos;ll Wear More Than
                <br />
                <span className="italic text-[#d8b887]">
                  One Hat.
                </span>
              </h2>

            </div>

            <p className="max-w-[300px] text-sm leading-6 text-[#f7f3e8]/55">
              A place to learn, create, explore and make a real impact.
            </p>

          </div>


          <div className="mt-14 grid border-y border-[#f7f3e8]/15 md:grid-cols-5">

            {workPrinciples.map((item) => (

              <article
                key={item.number}
                className="border-b border-[#f7f3e8]/15 px-5 py-8 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8b887]/50 text-[#d8b887]">
                  {item.icon}
                </div>

                <span className="mt-5 block text-[8px] uppercase tracking-[0.3em] text-[#d8b887]/60">
                  {item.number}
                </span>

                <h3 className="mt-3 font-serif text-lg">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs leading-5 text-[#f7f3e8]/50">
                  {item.description}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          LIFE AT RAAHII
      ====================================================== */}

      <section className="bg-[#f4f0e7] px-6 py-16 sm:px-8 md:py-24 lg:px-16">

        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

            <div>

              <p className="text-[9px] uppercase tracking-[0.4em] text-[#8d6462]">
                Life at Raahii
              </p>

              <h2 className="mt-5 font-serif text-4xl font-light leading-[0.95] sm:text-5xl">
                Work That Doesn&apos;t
                <br />
                <span className="italic">
                  Feel Like Work.
                </span>
              </h2>

              <p className="mt-6 max-w-[380px] text-sm leading-6 text-[#5e625b]">
                Some days we&apos;re behind a screen. Some days we&apos;re
                on a hotel rooftop. Some days we&apos;re chasing the perfect
                shot. And some days we&apos;re figuring everything out from
                scratch.
              </p>

              <a
                href="#stories"
                className="mt-7 inline-flex h-11 items-center gap-4 rounded-full bg-[#17352d] px-6 text-[10px] uppercase tracking-[0.2em] text-[#f7f3e8] transition-all hover:-translate-y-1"
              >
                See Life at Raahii
                <span>→</span>
              </a>

            </div>


            {/* BTS GALLERY */}

            <div className="grid grid-cols-3 gap-3">

              <div
                className="h-[180px] overflow-hidden rounded-[14px] bg-cover bg-center sm:h-[220px]"
                style={{ backgroundImage: "url('/hero-bg.jpeg')" }}
              />

              <div
                className="h-[180px] overflow-hidden rounded-[14px] bg-cover bg-center sm:h-[220px]"
                style={{ backgroundImage: "url('/services-hero.jpeg')" }}
              />

              <div
                className="h-[180px] overflow-hidden rounded-[14px] bg-cover bg-center sm:h-[220px]"
                style={{ backgroundImage: "url('/philosophy-bg.jpeg')" }}
              />

              <div
                className="h-[180px] overflow-hidden rounded-[14px] bg-cover bg-center sm:h-[220px]"
                style={{ backgroundImage: "url('/services/services-bottom.jpg')" }}
              />

              <div
                className="h-[180px] overflow-hidden rounded-[14px] bg-cover bg-center sm:h-[220px]"
                style={{ backgroundImage: "url('/footer-bg.jpeg')" }}
              />

              <div
                className="h-[180px] overflow-hidden rounded-[14px] bg-cover bg-center sm:h-[220px]"
                style={{ backgroundImage: "url('/hero-bg.jpeg')" }}
              />

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHO WE LOOK FOR
      ====================================================== */}

      <section className="bg-[#ebe5d9] px-6 py-16 sm:px-8 md:py-24 lg:px-16">

        <div className="mx-auto max-w-[1400px]">

          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">

            <div>

              <p className="text-[9px] uppercase tracking-[0.4em] text-[#8d6462]">
                What We&apos;re Looking For
              </p>

              <h2 className="mt-5 font-serif text-4xl font-light leading-none sm:text-5xl md:text-6xl">
                We Look for People
                <br />
                <span className="italic">
                  Who...
                </span>
              </h2>

            </div>

            <p className="max-w-[330px] text-sm leading-6 text-[#60635b]">
              You don&apos;t need to know everything. You need to be willing
              to figure things out.
            </p>

          </div>


          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">

            {lookingFor.map((item) => (

              <article
                key={item.title}
                className="group min-h-[210px] rounded-[16px] border border-[#17352d]/10 bg-[#f4f0e7] p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-[#17352d] hover:text-[#f7f3e8]"
              >

                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#b6815e]/50 text-[#a06f3f] transition-colors group-hover:border-[#d8b887] group-hover:text-[#d8b887]">
                  {item.icon}
                </div>

                <h3 className="mt-8 font-serif text-lg leading-tight">
                  {item.title}
                </h3>

                <p className="mt-3 text-[10px] leading-5 text-[#60635b] group-hover:text-[#f7f3e8]/60">
                  {item.description}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          OPEN POSITIONS
      ====================================================== */}

      <section
        id="positions"
        className="bg-[#f4f0e7] px-6 py-16 sm:px-8 md:py-24 lg:px-16"
      >

        <div className="mx-auto max-w-[1400px]">

          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">

            <div>

              <p className="text-[9px] uppercase tracking-[0.4em] text-[#8d6462]">
                Open Positions
              </p>

              <h2 className="mt-5 font-serif text-4xl font-light sm:text-5xl md:text-6xl">
                Find Your Place
                <br />
                <span className="italic">
                  at Raahii.
                </span>
              </h2>

            </div>

            <div className="flex gap-2">

              {["All", "Marketing", "Content", "Design", "Tech", "Operations"].map(
                (filter, index) => (

                  <button
                    key={filter}
                    className={`rounded-full px-3 py-1.5 text-[8px] uppercase tracking-[0.12em] ${
                      index === 0
                        ? "bg-[#17352d] text-[#f7f3e8]"
                        : "border border-[#17352d]/15 text-[#60635b]"
                    }`}
                  >
                    {filter}
                  </button>

                )
              )}

            </div>

          </div>


          <div className="mt-10 grid gap-4 md:grid-cols-3">

            {positions.map((position) => (

              <article
                key={position.title}
                className="group flex min-h-[330px] flex-col rounded-[18px] border border-[#17352d]/12 bg-[#ebe5d9] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#b6815e]/50"
              >

                <div>

                  <h3 className="font-serif text-2xl">
                    {position.title}
                  </h3>

                  <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-[#8d6462]">
                    {position.type} · {position.location}
                  </p>

                  <p className="mt-5 text-xs leading-5 text-[#5e625b]">
                    {position.description}
                  </p>

                </div>


                <div className="mt-5 flex flex-wrap gap-2">

                  {position.tags.map((tag) => (

                    <span
                      key={tag}
                      className="rounded-full border border-[#17352d]/10 px-2.5 py-1 text-[7px] uppercase tracking-[0.1em] text-[#60635b]"
                    >
                      {tag}
                    </span>

                  ))}

                </div>


                <a
                  href="#application"
                  className="mt-auto inline-flex items-center gap-3 pt-8 text-[9px] uppercase tracking-[0.25em] text-[#17352d]"
                >
                  View Role
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          APPLICATION + INTERNSHIPS
      ====================================================== */}

      <section
        id="application"
        className="bg-[#ebe5d9] px-6 py-16 sm:px-8 md:py-20 lg:px-16"
      >

        <div className="mx-auto grid max-w-[1400px] overflow-hidden rounded-[20px] border border-[#17352d]/10 md:grid-cols-2">

          <div className="bg-[#f4f0e7] p-8 sm:p-10 md:p-14">

            <p className="text-[9px] uppercase tracking-[0.4em] text-[#8d6462]">
              Don&apos;t See Your Role?
            </p>

            <h2 className="mt-5 font-serif text-3xl font-light sm:text-4xl">
              We&apos;re Always
              <br />
              <span className="italic">
                Open to Good People.
              </span>
            </h2>

            <p className="mt-5 max-w-[470px] text-xs leading-6 text-[#60635b]">
              We&apos;re always interested in people who can bring something
              valuable to Raahii. If you think you can help us build better
              hospitality experiences, tell us what you can do.
            </p>

            <a
              href="mailto:careers@raahii.com"
              className="mt-7 inline-flex h-11 items-center gap-4 rounded-full bg-[#d8b887] px-6 text-[9px] uppercase tracking-[0.2em] text-[#17352d]"
            >
              Send Your Profile
              <span>→</span>
            </a>

          </div>


          <div className="bg-[#17352d] p-8 text-[#f7f3e8] sm:p-10 md:p-14">

            <p className="text-[9px] uppercase tracking-[0.4em] text-[#d8b887]">
              Internships
            </p>

            <h2 className="mt-5 font-serif text-3xl font-light sm:text-4xl">
              Start Your Journey
              <br />
              <span className="italic text-[#d8b887]">
                With Raahii.
              </span>
            </h2>

            <p className="mt-5 max-w-[470px] text-xs leading-6 text-[#f7f3e8]/60">
              Marketing, SEO, content, video, design, business development
              and hospitality roles. No long list of experience required.
              Show us what you&apos;ve built, learned or experimented with.
            </p>

            <a
              href="mailto:careers@raahii.com?subject=Raahii Internship Application"
              className="mt-7 inline-flex h-11 items-center gap-4 rounded-full bg-[#d8b887] px-6 text-[9px] uppercase tracking-[0.2em] text-[#17352d]"
            >
              Explore Internships
              <span>→</span>
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          TEAM STORIES
      ====================================================== */}

      <section
        id="stories"
        className="relative overflow-hidden bg-[#10110f] px-6 py-16 text-[#f7f3e8] sm:px-8 md:py-24 lg:px-16"
      >

        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/hero-bg.jpeg')",
          }}
        />

        <div className="absolute inset-0 bg-[#10110f]/75" />


        <div className="relative z-10 mx-auto max-w-[1400px]">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <p className="text-[9px] uppercase tracking-[0.4em] text-[#d8b887]">
                Team Stories
              </p>

              <h2 className="mt-5 font-serif text-4xl font-light sm:text-5xl md:text-6xl">
                Real People.
                <br />
                <span className="italic text-[#d8b887]">
                  Real Journeys.
                </span>
              </h2>

            </div>

            <button className="w-fit rounded-full border border-[#f7f3e8]/30 px-5 py-2.5 text-[8px] uppercase tracking-[0.2em]">
              View All Stories →
            </button>

          </div>


          <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">

            {teamStories.map((story) => (

              <article
                key={story.name}
                className="group relative min-h-[330px] overflow-hidden rounded-[16px]"
              >

                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${story.image}')`,
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />


                <div className="absolute bottom-0 left-0 right-0 p-5">

                  <p className="font-serif text-lg italic text-[#f7f3e8]/80">
                    &ldquo;{story.quote}&rdquo;
                  </p>

                  <div className="mt-5 border-t border-[#f7f3e8]/20 pt-4">

                    <p className="font-serif text-lg">
                      {story.name}
                    </p>

                    <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-[#d8b887]">
                      {story.role}
                    </p>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR VALUES
      ====================================================== */}

      <section className="bg-[#f4f0e7] px-6 py-16 sm:px-8 md:py-20 lg:px-16">

        <div className="mx-auto max-w-[1400px]">

          <div className="mb-10">

            <p className="text-[9px] uppercase tracking-[0.4em] text-[#8d6462]">
              Our Values
            </p>

            <h2 className="mt-4 font-serif text-4xl font-light sm:text-5xl">
              What Drives Us
            </h2>

          </div>


          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">

            {values.map((value) => (

              <article
                key={value.title}
                className="border-t border-[#17352d]/15 px-3 py-7 text-center"
              >

                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-[#b6815e]/40 text-lg text-[#a06f3f]">
                  {value.icon}
                </div>

                <h3 className="mt-5 font-serif text-lg">
                  {value.title}
                </h3>

                <p className="mt-2 text-[10px] text-[#676a61]">
                  {value.description}
                </p>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="relative min-h-[560px] overflow-hidden text-[#f7f3e8]">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/footer-bg.jpeg')",
          }}
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />


        <div className="relative z-10 mx-auto flex min-h-[560px] max-w-[1400px] items-center px-6 py-16 sm:px-10 lg:px-16">

          <div className="max-w-[700px]">

            <p className="text-[9px] uppercase tracking-[0.45em] text-[#d8b887]">
              Careers at Raahii
            </p>

            <h2 className="mt-6 font-serif text-[3.5rem] font-light leading-[0.9] tracking-[-0.04em] sm:text-5xl md:text-7xl">

              Your Next Chapter
              <br />

              <span className="italic text-[#d8b887]">
                Starts Here.
              </span>

            </h2>

            <p className="mt-7 max-w-[550px] text-sm leading-7 text-[#f7f3e8]/70 sm:text-base sm:leading-8">
              We&apos;re building Raahii one idea, one hotel and one person at
              a time. Maybe your next chapter belongs here.
            </p>


            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <a
                href="#positions"
                className="inline-flex h-12 items-center justify-center gap-4 rounded-full bg-[#d8b887] px-7 text-xs font-medium text-[#17352d] transition-all hover:-translate-y-1"
              >
                View Open Positions
                <span>→</span>
              </a>

              <a
                href="#application"
                className="inline-flex h-12 items-center justify-center gap-4 rounded-full border border-[#f7f3e8]/60 px-7 text-xs text-[#f7f3e8] transition-all hover:bg-[#f7f3e8] hover:text-[#17352d]"
              >
                Send Your Profile
                <span>→</span>
              </a>

            </div>

          </div>


          <div className="absolute bottom-10 right-6 hidden text-right md:block lg:right-16">

            <p className="font-serif text-xl italic text-[#f7f3e8]/70">
              Better
              <br />
              Stays.
              <br />
              Brighter
              <br />
              Tomorrows.
            </p>

            <div className="ml-auto mt-4 h-px w-10 bg-[#d8b887]" />

          </div>

        </div>

      </section>


      {/* =====================================================
          BOTTOM
      ====================================================== */}

      <footer className="flex flex-col justify-between gap-4 bg-[#10251f] px-6 py-7 text-[#f7f3e8] sm:flex-row sm:items-center sm:px-10 lg:px-16">

        <div>

          <p className="font-serif text-xl tracking-[0.18em]">
            RAAHII
          </p>

          <p className="mt-1 text-[7px] uppercase tracking-[0.35em] text-[#d8b887]">
            Hospitality Growth Partner
          </p>

        </div>

        <p className="font-serif text-sm italic text-[#f7f3e8]/50">
          People · Places · Possibilities
        </p>

        <p className="text-[8px] uppercase tracking-[0.3em] text-[#f7f3e8]/35">
          Careers at Raahii
        </p>

      </footer>

    </main>
  );
}